import './Home.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllClips } from '../actions/clipActions';
import Navbar from './UI/Navbar';
import Footer from './UI/Footer';
import ClipList from './ClipList';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClips());
  }, []);

  const handlePaste = (e) => {
    const pastedContent = e.clipboardData.getData('text');
    // TODO: Send the pasted content to the server
  }

  return (
    <div className="Home" onPaste={handlePaste}>
      <Navbar />
      <ClipList />
      <Footer />
    </div>
  );
};

export default Home;
