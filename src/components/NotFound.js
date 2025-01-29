import { useNavigate } from "react-router-dom";
import './NotFound.scss';

const NotFound = (props) => {
  const navigate = useNavigate();

  const handleBack = (e) => {
    navigate(-1);
  }

  return (
    <div className="NotFound">
      <div className="container">
        <header>
          <h1>The page you're looking for does not exist</h1>
          <button onClick={handleBack}>Go back</button>
        </header>
      </div>
    </div>
  );
};

export default NotFound;
