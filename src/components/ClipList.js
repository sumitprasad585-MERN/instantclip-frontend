import { useSelector } from 'react-redux';
import Clip from './Clip';
import './ClipList.scss';

const ClipList = () => {
  const clips = useSelector(state => state.clip.clips);
  return (
    <div className="ClipList">
      <div className="ClipList-container">
        <div className="ClipList-filters">

        </div>
        <div className="ClipList-data">
          {
            clips && clips.length > 0 &&
            clips.map(current => {
              return (
                <Clip key={current._id} {...current}/>
              )
            })
          }
        </div>
      </div>
    </div>
  );
};

export default ClipList;
