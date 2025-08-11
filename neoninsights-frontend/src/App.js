// Toast Container
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Route and page imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import RegisterPage from './pages/RegisterPage.js';
import LoginPage from './pages/LoginPage.js';
import RegisterCompletePage from './pages/RegisterCompletePage.js';
import EmailConfirmedPage from './pages/EmailConfirmedPage.js';
import DashboardPage from './pages/DashboardPage.js';

// CSS Imports
import './styles/Reset.css';
import './styles/Nav.css';
import './styles/Animations.css'
import './styles/Themes.css';
import './styles/AuthForm.css';
import './styles/HomePage.css';
import './styles/ToastifyOverrides.css';
import './styles/RegisterComplete.css';
import './styles/EmailConfirmed.css';
import './styles/MediaQueries.css';
import './styles/Dashboard.css';
import './styles/Footer.css';
import './styles/Main.css';


// Theme hook
import useSetTheme from './hooks/useSetTheme';


function App() {
  // On app re-render, assign the apps theme
  useSetTheme();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register-complete" element={<RegisterCompletePage />} />
        <Route path="/confirm-email/:token" element={<EmailConfirmedPage />} />
        <Route path="/dashboard" element={<DashboardPage />} />
      </Routes>

      <ToastContainer />
    </Router>
  );
}

export default App;
