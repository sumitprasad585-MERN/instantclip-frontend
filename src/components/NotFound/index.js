import { useNavigate } from "react-router-dom";
import './NotFound.scss';

const NotFound = (props) => {
  const navigate = useNavigate();

  const handleBack = (e) => {
    navigate(-1);
  }

  return (
    <div className="NotFound">
      <header>
        <h1>The page you're looking for does not exist</h1>
        <button onClick={handleBack} className="large-btn">Go back</button>
      </header>
    </div>
  );
};

export default NotFound;
