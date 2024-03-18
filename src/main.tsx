import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';

import { RootProvider } from './utils/providers/RootProvider.tsx';

import { Navbar } from './components/Navbar.tsx';
import { Footer } from './components/Footer.tsx';

import router from './router';

import './index.css';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RootProvider>
      <Navbar />
      <RouterProvider router={router} />
      <Footer />
    </RootProvider>
  </React.StrictMode>,
);
