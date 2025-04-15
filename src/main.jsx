import './index.css';
import React from 'react';
import ReactDOM from 'react-dom/client';
import Entry from './pages/Entry';
import { Toaster } from 'react-hot-toast';
import './i18n/i18n'; // importa la config de i18next

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
      <Entry />
      <Toaster position="top-right" reverseOrder={false} />
    </>
  </React.StrictMode>
);
