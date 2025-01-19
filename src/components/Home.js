import './Home.scss';
import Navbar from './UI/Navbar';
import Footer from './UI/Footer';

const Home = () => {
  return (
    <div className="Home">
      <Navbar />
      <h1>I am home component</h1>
      <Footer />
    </div>
  );
};

export default Home;
