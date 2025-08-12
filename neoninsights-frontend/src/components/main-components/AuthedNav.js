import { Link } from 'react-router-dom';
import headerLogo from '../../assets/header-logo.png';
import homeIcon from '../../assets/home-icon.png';
import inventoryIcon from '../../assets/inventory-icon.png';
import logoutIcon from '../../assets/logout-icon.png';

function AuthedNav() {
  return (
    <div className="nav-container">
      <div className="authed-desktop-navbar">
        <Link to="/dashboard">
          <header>
            <img className="header-logo"
              src={headerLogo}
              alt="Neon Insights Logo"
            />
            Neon Insights
          </header>
        </Link>
        <nav className="authed-desktop-nav-links">
          <Link to="/dashboard">
            <img className="auth-dashboard-icon" src={homeIcon}></img>
            Dashboard
          </Link>
          <Link to="/inventory">
            <img className="auth-dashboard-icon" src={inventoryIcon}></img>
            Inventory
          </Link>
          <Link to="/login">
            <img className="auth-dashboard-icon" src={logoutIcon}></img>
            Logout
          </Link>
        </nav>
      </div>

      <nav className="authed-bottom-nav">
        <Link to="/dashboard">🏠</Link>
        {/* More icons */}
      </nav>
    </div>
  );
}

export default AuthedNav;
