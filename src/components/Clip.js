import { useState } from 'react';
import './Clip.scss';

const Clip = ({ data, datatype, label, fontSize, hide, listScore }) => {
  const [copied, setCopied] = useState(false);
  const handleClick = (e) => {
    window.navigator.clipboard.writeText(data);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  return (
    <div className={"Clip"} onClick={handleClick}>
      {
        copied &&
        <div className="Clip-copied-overlay">
          Copied!
        </div>
      }
      {
        // Ovelray the label on actual label so that it takes full width
        label ? (
          <>
            <div className="Clip-label">
              {label}
            </div>
            <div className="Clip-label-overlay">
              {label}
            </div>
          </>
        ): (
          <div className="Clip-data">
            {data}
          </div>
        )
      }
    </div>
  );
};

export default Clip;
