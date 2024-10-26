import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import './components/NavBar/Navbar.css'; // O CSS personalizado deve ser importado depois
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById('root')).render(
  <BrowserRouter >
    <App />
  </BrowserRouter >,
)
