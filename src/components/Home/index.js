import './Home.scss';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { createNewClip, getAllClips } from '../../actions/clipActions';
import ClipList from '../ClipList';

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllClips());
  }, []);

  const handlePaste = (e) => {
    const pastedContent = e.clipboardData.getData('text');
    // TODO: Send the pasted content to the server
    const clipData = {
      data: pastedContent
    }
    dispatch(createNewClip(clipData));
  }

  return (
    <div className="Home" onPaste={handlePaste}>
        <ClipList />
    </div>
  );
};

export default Home;
