import AuthedNav from "../main-components/AuthedNav.js";
import Footer from "../main-components/Footer.js";

function AuthedPage({ children }) {
  return (
    <>
    <AuthedNav />
      {children}
    </>
  );
}

export default AuthedPage;
