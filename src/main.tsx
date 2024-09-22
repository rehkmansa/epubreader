import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { FileRouter } from './route';

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <FileRouter />
  </StrictMode>
);
