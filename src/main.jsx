
import { createRoot } from 'react-dom/client'

import './index.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AppRouter from './routes/AppRouter.jsx'

createRoot(document.getElementById('root')).render(
  <>
    <AppRouter />
    <ToastContainer autoClose={3000} />

  </>
)
