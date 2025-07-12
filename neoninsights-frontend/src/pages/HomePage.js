import { Link } from 'react-router-dom';

function HomePage() {
    return (
        <main className="home-main-container">
            <section className="home-hero-section fade-in-slide-up">
                <h1>Illuminate Your Data. Unlock Powerful Insights.</h1>
                <h2>Track key metrics like sales, customers, and growth — all in one clean, customizable dashboard.</h2>

                <Link className="main-button" to="/register">Get Started</Link>

                <p>Already have an account? <Link className="default-link" to="/login">Sign In</Link></p>
            </section>


        </main>
    );
}

export default HomePage;