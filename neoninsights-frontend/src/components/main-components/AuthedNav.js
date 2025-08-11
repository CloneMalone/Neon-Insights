import { Link } from 'react-router-dom';

function AuthedNav() {
  return (
    <>
      <aside className="authed-sidebar">
        <header>Neon Insights</header>
        <nav>
          <Link to="/dashboard">Dashboard</Link>
          <Link to="/login">Logout</Link>
        </nav>
      </aside>

      <nav className="authed-bottom-nav">
        <Link to="/dashboard">🏠</Link>
        {/* More icons */}
      </nav>
    </>
  );
}

export default AuthedNav;
