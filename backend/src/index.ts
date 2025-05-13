import express from "express";
import helmet from "helmet";
import cors from "cors";
import rateLimit from "express-rate-limit";
import xss from "xss-clean";
import path from "path";
import fs from "fs";
// import csurf from "csurf"; // Pentru POST autentificat
// import { body, validationResult } from "express-validator"; // Pentru validare la nevoie
import { router as apiRouter } from "./routes";
import uploadRouter from './routes/upload';

const app = express();
const PORT = process.env.PORT || 3001;

// Verifică și creează folderele necesare
const uploadsDir = path.join(__dirname, "../uploads");
const galleryFile = path.join(__dirname, "../gallery.json");

if (!fs.existsSync(uploadsDir)) {
  fs.mkdirSync(uploadsDir, { recursive: true });
}

if (!fs.existsSync(galleryFile)) {
  fs.writeFileSync(galleryFile, JSON.stringify([], null, 2));
}

// 1. Setează header-ele de securitate
app.use(helmet({
  crossOriginResourcePolicy: { policy: "cross-origin" }
}));
// 2. Activează CORS doar pentru domeniul frontend (modifică la nevoie)
app.use(cors({
  origin: ["http://localhost:8080", "http://localhost:5173", "http://192.168.100.37:8080"],
  credentials: true
}));
// 3. Limitează numărul de cereri pe IP
app.use(rateLimit({ windowMs: 60 * 60 * 1000, max: 100 }));
// 4. Curăță datele de XSS
app.use(xss());
// 5. Parsează JSON
app.use(express.json());
// 6. Rute API
app.use("/api", apiRouter);
app.use("/api/upload", uploadRouter);
// 7. Servesc imaginile încărcate
app.use("/uploads", express.static(path.join(__dirname, "../uploads")));
app.use("/gallery.json", express.static(path.join(__dirname, "../gallery.json")));

app.get("/", (req, res) => {
  res.send("Backend-ul Parohiei Sf. Sava funcționează!");
});

app.listen(PORT, () => {
  console.log(`Serverul rulează pe http://localhost:${PORT}`);
});