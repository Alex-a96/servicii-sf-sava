import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css'; // sau './tailwind.css' — numele fișierului tău

const container = document.getElementById('root');
if (!container) {
  throw new Error("Elementul #root nu există în DOM!");
}

const root = createRoot(container);
root.render(<App />);
