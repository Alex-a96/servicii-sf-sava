export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://api.parohiasfsava.ro' 
  : 'http://localhost:3001';

export const UPLOAD_URL = `${API_URL}/api/upload`;
export const GALLERY_URL = `${API_URL}/api/upload`; 