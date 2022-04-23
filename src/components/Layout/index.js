import Footer from "../UI/organisms/Footer";
import Combine from "../Header/Combine";

const Layout = ({ children }) => {
  return (
    <div>
      <Combine />
      {children}
      <Footer />
    </div>
  );
};
export default Layout;
