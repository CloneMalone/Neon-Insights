import { useState } from "react";
import { Link } from 'react-router-dom';

function Nav() {
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
        <nav>
            <div className="header-hamburger-container">
                <Link to="/">
                    <header>
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
        </nav>
    );
}

export default Nav;

