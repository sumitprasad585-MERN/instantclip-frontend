import axios from 'axios';
import { createNewClipSuccess, getAllClipsError, getAllClipsSuccess } from '../reducers/clipReducer';

export const getAllClips = () => {
  return (dispatch, getState) => {
    const auth = getState().auth;
    axios.get('http://localhost:8888/api/v1/clips', {
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
  }
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
  }
}
