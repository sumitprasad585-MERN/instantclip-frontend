import axios from 'axios';
import { getAllClipsError, getAllClipsSuccess } from '../reducers/clipReducer';

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