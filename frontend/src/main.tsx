import { QueryClient, QueryClientProvider, QueryFunction, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Project } from '../types.ts';
import App from './App.tsx';
import './styles/index.css';


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
