import { QueryClient, QueryClientProvider, QueryFunction, useQuery } from '@tanstack/react-query';
import axios from 'axios';
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.css';

interface Project {
  id: number;
  name: string;
  // Define other properties of your project here
}

interface ApiResponse {
  projects: Project[];
}

const fetchProjects: QueryFunction<ApiResponse> = async () => {
  try {
    const response = await axios.get<ApiResponse>(`${import.meta.env.VITE_BACKEND_BASE_URL}/api/projects`);
    console.log('response: ', response);
    return response.data;
  } catch (error: any) {
    console.log('error fetching projects', error);
    throw new Error(`Error fetching projects: ${error.message}`);
  }
};

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      queryKey: ['projects'],
      queryFn: fetchProjects,
      initialData: [],
      retry: 3,
    },
  },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
