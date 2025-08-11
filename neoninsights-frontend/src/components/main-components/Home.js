import { Link } from 'react-router-dom';
import dataInfoImg from '../../assets/data-science.png';
import automationInfoImg from '../../assets/automation.png';
import securityInfoImg from '../../assets/secure-data.png';
import FadeInOnScroll from '../helper-components/FadeInOnScroll.js';


function Home() {

    return (
        <main className="home-main-container">
            <section className="home-hero-section fade-in-slide-up">
                <div className="hero-content-container">
                    <h1>Illuminate Your Data. <span>Unlock Powerful Insights.</span></h1>
                    <h2>Track key metrics like sales, customers, and growth — all in one clean, customizable dashboard.</h2>
                    <Link className="main-button get-started-button" to="/register">Get Started</Link>
                    <p>Already have an account? <Link className="default-link" to="/login">Sign In</Link></p>
                </div>
            </section>

            <section className="home-infocard-section">
                
                <div className="home-infocards-container">
                    <FadeInOnScroll delay={0.1}>
                        <div className='home-infocard-container'>
                            <img src={dataInfoImg} />
                            <h2>Dynamic Data Presentation</h2>
                            <p>Retrieve fast, crucial insights on your business data all in one place.</p>
                        </div>
                    </FadeInOnScroll>
                    <FadeInOnScroll delay={0.1}>
                        <div className='home-infocard-container'>
                            <img src={automationInfoImg} />
                            <h2>Smart Automation</h2>
                            <p>Automate routine insights and workflows with intelligent triggers.</p>
                        </div>
                    </FadeInOnScroll>
                    <FadeInOnScroll delay={0.1}>
                        <div className='home-infocard-container'>
                            <img src={securityInfoImg} />
                            <h2>Secure & Compliant</h2>
                            <p>Enterprise-grade security for peace of mind and policy compliance.</p>
                        </div>
                    </FadeInOnScroll>
                </div>

            </section>


        </main>
    );
}

export default Home;