// Toast Container
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Route and page imports
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import HomePage from './pages/HomePage.js';
import RegisterPage from './pages/RegisterPage.js';
import RegisterCompletePage from './pages/RegisterCompletePage.js';

// CSS Imports
import './styles/Reset.css';
import './styles/Nav.css';
import './styles/Animations.css'
import './styles/Themes.css';
import './styles/AuthForm.css';
import './styles/HomePage.css';
import './styles/ToastifyOverrides.css';
import './styles/RegisterComplete.css';
import './styles/Main.css';

// Theme hook
import useSetTheme from './hooks/useSetTheme';


// Component imports
import Nav from './components/main-components/Nav.js';


function App() {
  // On app re-render, assign the apps theme
  useSetTheme();

  return (
    <Router>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/register-complete" element={<RegisterCompletePage />} />
      </Routes>

      <ToastContainer />
    </Router>
  );
}

export default App;
