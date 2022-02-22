import Header from "../UI/organisms/Header";
import Footer from "../UI/organisms/Footer";
import HomeNewsletterSection from "../UI/organisms/HomeNewsLetterSection";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
          {children}
      <HomeNewsletterSection />
      <Footer />
    </div>
  );
};
export default Layout;
