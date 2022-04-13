import Header from "../UI/organisms/Header";
import Footer from "../UI/organisms/Footer";
import HomeNewsletterSection from "../UI/organisms/HomeNewsLetterSection";
import Combine from "../Accordion/Combine";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <HomeNewsletterSection />
      <Combine />
      <Footer />
    </div>
  );
};
export default Layout;
