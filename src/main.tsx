import { StrictMode } from 'react'
import { BrowserRouter } from 'react-router-dom'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import { ThemeProvider } from './components/ui/theme-provider.tsx'
import { SearchProvider } from './Plugin/Context/SearchContext.tsx'
//Query
const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <SearchProvider>
        <QueryClientProvider client={queryClient}>
          <ThemeProvider defaultTheme='system' storageKey='vite-ui-theme'>
            <App />
          </ThemeProvider>
        </QueryClientProvider>
      </SearchProvider>
    </BrowserRouter>
  </StrictMode>,
)
