import Footer from "../UI/organisms/Footer";
import HomeNewsletterSection from "../UI/organisms/HomeNewsLetterSection";
import Combine from "../Header/Combine";

const Layout = ({ children }) => {
  return (
    <div>
      <Combine />
      {children}
      <HomeNewsletterSection />
      <Footer />
    </div>
  );
};
export default Layout;
