import { Router } from 'express';
import { upload, uploadPhoto, getGallery, approvePhoto } from '../controllers/uploadController';

const router = Router();

router.post('/', upload.single('photo'), uploadPhoto);
router.get('/', getGallery);
router.patch('/:filename/approve', approvePhoto);

export default router; 