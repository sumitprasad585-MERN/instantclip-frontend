import Navbar from "../Navbar"
import Footer from "../Footer";
import './Layout.scss';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <div className="Layout-container">
        { children }
      </div>
      <Footer />
    </>
  );
};

export default Layout;
