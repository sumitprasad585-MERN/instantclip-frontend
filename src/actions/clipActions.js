import axios from 'axios';
import { createNewClipSuccess, deleteClipSuccess, getAllClipsError, getAllClipsSuccess, updateClipSuccess } from '../reducers/clipReducer';

export const getAllClips = () => {
  return (dispatch, getState) => {
    const auth = getState().auth;
    axios.get('http://localhost:8888/api/v1/clips?page=1&limit=100', {
      headers: {
        'Authorization': 'Bearer ' + auth.token
      }
    })
      .then(res => {
        const response = res.data;
        const clips = response.data.clips
        dispatch(getAllClipsSuccess(clips));
      })
      .catch(err => {
        dispatch(getAllClipsError(err.response.data));
      });
  };
};

export const createNewClip = (clipData) => {
  return (dispatch, getState) => {
    const auth = getState().auth;
    axios.post('http://localhost:8888/api/v1/clips', clipData, {
      headers: {
        'Authorization': 'Bearer ' + auth.token
      }
    })
      .then(res => {
        const response = res.data;
        const newClip = response.data.clip;
        dispatch(createNewClipSuccess(newClip));
      })
      .catch(err => {
        console.error(err);
      })
  };
}

export const deleteClip = (clipID) => {
  return (dispatch, getState) => {
    const auth = getState().auth;
    axios.delete(`http://localhost:8888/api/v1/clips/${clipID}`, {
      headers: {
        'Authorization': 'Bearer ' + auth.token
      }
    })
      .then(res => {
        dispatch(deleteClipSuccess(clipID));
      })
      .catch(err => {
        console.log(err);
      });
  };
}


export const updateClip = (clipID, updatedClip) => {
  return (dispatch, getState) => {
    const auth = getState().auth;
    axios.patch(`http://localhost:8888/api/v1/clips/${clipID}`, updatedClip, {
      headers: {
        'Authorization': 'Bearer ' + auth.token
      }
    })
      .then(res => {
        const response = res.data;
        const updatedClip = response.data.clip;
        dispatch(updateClipSuccess(updatedClip))
      })
      .catch(err => {
        console.error(err);
      })
  }
}
