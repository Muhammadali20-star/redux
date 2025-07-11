import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { Provider } from 'react-redux'
import { store } from './redux/index.ts'
import { BrowserRouter } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

createRoot(document.getElementById('root')!).render(
  // <StrictMode>
    <BrowserRouter>
    <QueryClientProvider client={queryClient}>
    <Provider store={store}>
      <App />
    </Provider>
    </QueryClientProvider>
    </BrowserRouter>
  // </StrictMode>,
)
