import './Home.scss';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getAllClips } from '../actions/clipActions';
import Navbar from './UI/Navbar';
import Footer from './UI/Footer';

const Home = () => {
  const dispatch = useDispatch();
  const clipData = useSelector(state => state.clip)

  useEffect(() => {
    dispatch(getAllClips());
  }, []);

  return (
    <div className="Home">
      <Navbar />
        {
          clipData?.clips &&
          clipData.clips.map((current) => {
            return (
              <div key={current.id}>
                <p>{current.data}</p>
              </div>
            )
          })
        }
      <Footer />
    </div>
  );
};

export default Home;
