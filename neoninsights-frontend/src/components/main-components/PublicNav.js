import { useState } from "react";
import { Link } from 'react-router-dom';
import headerLogo from '../../assets/header-logo.png';

function PublicNav() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [shouldRenderMenu, setShouldRenderMenu] = useState(false);

    function toggleMenu() {
        if (!isMenuOpen) {
            setShouldRenderMenu(true);
            setIsMenuOpen(true);
        } else {
            setIsMenuOpen(false);
            setTimeout(() => setShouldRenderMenu(false), 500);
        }
    }

    return (
        <div className="nav-container">
            <nav>
                <div className="header-hamburger-container">
                    <Link to="/">
                        <header>
                            <img className="header-logo"
                                src={headerLogo}
                                alt="Neon Insights Logo"
                            />
                            Neon Insights
                        </header>
                    </Link>
                    <div
                        className={`hamburger-container ${isMenuOpen ? "open" : "closed"}`}
                        onClick={toggleMenu}
                    >
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>

                {shouldRenderMenu && (
                    <div className={`mobile-menu ${isMenuOpen ? "open" : "closed"}`}>
                        <Link onClick={toggleMenu} to="/">Home</Link>
                        <Link onClick={toggleMenu} to="/login">Login</Link>
                        <Link onClick={toggleMenu} to="/register">Register</Link>
                    </div>
                )}

                <div className="desktop-menu">
                    <Link className="desktop-menu-link" to="/">Home</Link>
                    <Link className="desktop-menu-link" to="/login">Login</Link>
                    <Link className="desktop-menu-link" to="/register">Register</Link>
                </div>
            </nav>
        </div>
    );
}

export default PublicNav;

