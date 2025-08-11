import Footer from '../main-components/Footer.js';
import PublicNav from '../main-components/PublicNav.js';

function PublicPage({ children }) {
  return (
    <>
      <PublicNav />       
      {children}
      <Footer />
    </>
  );
}

export default PublicPage;