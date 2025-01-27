import { useState } from 'react';
import './Clip.scss';
import { useDispatch } from 'react-redux';
import { deleteClip, updateClip } from '../actions/clipActions';

const Clip = ({ clipData, _id, data, datatype, label, fontSize, hide, listScore }) => {
  const [copied, setCopied] = useState(false);
  const dispatch = useDispatch();
  const handleClick = (e) => {
    window.navigator.clipboard.writeText(data);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
    }, 1000);
  };

  const handleFontSize = (e, type) => {
    e.stopPropagation();
    let updatedFontSize;
    if (type === 'increment') {
      updatedFontSize = fontSize + 2;
    } else {
      updatedFontSize = fontSize - 2;
    }

    const updatedClip = {
      ...clipData,
      fontSize: updatedFontSize
    };
    console.log(updatedClip);
    dispatch(updateClip(_id, updatedClip));
  }

  const handleDelete = (e) => {
    e.stopPropagation();
    dispatch(deleteClip(_id));
  }

  return (
    <div className={"Clip"} onClick={handleClick} style={{fontSize}}>
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
      <div className="Clip-actions">
        <button onClick={e => handleFontSize(e, 'decrement')}>-</button>
        <button onClick={e => handleFontSize(e, 'increment')}>+</button>
        <button onClick={handleDelete} className="delete">🗑️</button>
      </div>
    </div>
  );
};

export default Clip;
