import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { StateProvider } from './Plugin/Context/Context.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
//Query
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <StateProvider>
          <App />
        </StateProvider>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
