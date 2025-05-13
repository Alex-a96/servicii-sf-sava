import { Request, Response } from 'express';
import multer from 'multer';
import path from 'path';
import fs from 'fs';

declare module 'express-serve-static-core' {
  interface Request {
    file?: Express.Multer.File;
    files?: Express.Multer.File[];
  }
}

declare module 'xss-clean';

// Creez folderul uploads dacă nu există
const uploadDir = path.join(__dirname, '../../uploads');
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir, { recursive: true });
}

// Configurare multer pentru încărcarea fotografiilor
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, uploadDir);
  },
  filename: function (req, file, cb) {
    // Verific dacă fișierul este o imagine
    if (!file.mimetype.startsWith('image/')) {
      return cb(new Error('Doar fișiere imagine sunt permise!'), '');
    }
    // Generez un nume unic pentru fișier
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
    cb(null, uniqueSuffix + '-' + file.originalname);
  }
});

// Filtru pentru tipurile de fișiere permise
const fileFilter = (req: Express.Request, file: Express.Multer.File, cb: multer.FileFilterCallback) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Doar fișiere imagine sunt permise!'));
  }
};

export const upload = multer({ 
  storage,
  fileFilter,
  limits: {
    fileSize: 5 * 1024 * 1024, // 5MB
    files: 10 // maxim 10 fișiere per request
  }
});

const galleryFile = path.join(__dirname, '../../gallery.json');

// Asigură-te că fișierul gallery.json există
if (!fs.existsSync(galleryFile)) {
  fs.writeFileSync(galleryFile, JSON.stringify([], null, 2));
}

function savePhotoMeta(meta: any) {
  try {
    let data: any[] = [];
    if (fs.existsSync(galleryFile)) {
      const content = fs.readFileSync(galleryFile, 'utf-8');
      data = JSON.parse(content);
    }
    data.unshift(meta);
    fs.writeFileSync(galleryFile, JSON.stringify(data, null, 2));
  } catch (error) {
    console.error('Eroare la salvarea metadatelor:', error);
    throw new Error('Nu s-a putut salva fotografia');
  }
}

export const uploadPhoto = (req: Request, res: Response) => {
  try {
    const file = (req as any).file;
    if (!file) {
      return res.status(400).json({ error: 'Niciun fișier încărcat.' });
    }

    if (!req.body.caption || !req.body.eventType) {
      return res.status(400).json({ error: 'Caption și eventType sunt obligatorii.' });
    }

    const meta = {
      filename: file.filename,
      url: `/uploads/${file.filename}`,
      originalname: file.originalname,
      caption: req.body.caption,
      eventType: req.body.eventType,
      createdAt: new Date().toISOString(),
      approved: false
    };

    savePhotoMeta(meta);
    res.json(meta);
  } catch (error) {
    console.error('Eroare la încărcarea fotografiei:', error);
    res.status(500).json({ error: 'Eroare la încărcarea fotografiei.' });
  }
};

export const approvePhoto = (req: Request, res: Response) => {
  try {
    const { filename } = req.params;
    if (!filename) {
      return res.status(400).json({ error: 'Numele fișierului este obligatoriu.' });
    }

    let data: any[] = [];
    if (fs.existsSync(galleryFile)) {
      const content = fs.readFileSync(galleryFile, 'utf-8');
      data = JSON.parse(content);
    }

    const idx = data.findIndex((item: any) => item.filename === filename);
    if (idx === -1) {
      return res.status(404).json({ error: 'Fotografie inexistentă.' });
    }

    data[idx].approved = true;
    fs.writeFileSync(galleryFile, JSON.stringify(data, null, 2));
    res.json({ success: true, photo: data[idx] });
  } catch (error) {
    console.error('Eroare la aprobarea fotografiei:', error);
    res.status(500).json({ error: 'Eroare la aprobarea fotografiei.' });
  }
};

export const getGallery = (req: Request, res: Response) => {
  try {
    let data: any[] = [];
    if (fs.existsSync(galleryFile)) {
      const content = fs.readFileSync(galleryFile, 'utf-8');
      data = JSON.parse(content);
    }
    // Filtrez doar fotografiile aprobate
    res.json(data.filter((item: any) => item.approved));
  } catch (error) {
    console.error('Eroare la preluarea galeriei:', error);
    res.status(500).json({ error: 'Eroare la preluarea galeriei.' });
  }
}; 