import { useEffect } from 'react';
import './ClipDetails.scss';
import { useLocation, useNavigate, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

const ClipDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  console.log(useParams());
  console.log(id);
  useEffect(() => {
    // FETCH CLIP
  }, []);

  const handleBack = (e) => {
    navigate(-1);
  }
  return (
    <div className="ClipDetails">
      <button onClick={handleBack} className="back-button">Go Back</button>
    </div>
  );
}

export default ClipDetails;
