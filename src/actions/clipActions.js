import axios from 'axios';
import {
  createNewClipSuccess,
  deleteClipSuccess,
  getAllClipsError,
  getAllClipsSuccess,
  getClipSuccess,
  updateClipSuccess,
} from '../reducers/clipReducer';

axios.defaults.withCredentials = true;

export const getAllClips = () => {
  return (dispatch) => {
    axios
      .get('http://localhost:8888/api/v1/clips?page=1&limit=100', {
        withCredentials: true,
      })
      .then((res) => {
        const response = res.data;
        const clips = response.data.clips;
        dispatch(getAllClipsSuccess(clips));
      })
      .catch((err) => {
        dispatch(getAllClipsError(err.response.data));
      });
  };
};

export const getClip = (clipID) => {
  return (dispatch) => {
    axios.get(`http://localhost:8888/api/v1/clips/${clipID}`).then((res) => {
      const response = res.data;
      const clip = response.data.clip;
      dispatch(getClipSuccess(clip));
    });
  };
};

export const createNewClip = (clipData) => {
  return (dispatch) => {
    axios
      .post('http://localhost:8888/api/v1/clips', clipData)
      .then((res) => {
        const response = res.data;
        const newClip = response.data.clip;
        dispatch(createNewClipSuccess(newClip));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};

export const deleteClip = (clipID) => {
  return (dispatch) => {
    axios
      .delete(`http://localhost:8888/api/v1/clips/${clipID}`)
      .then((res) => {
        dispatch(deleteClipSuccess(clipID));
      })
      .catch((err) => {
        console.log(err);
      });
  };
};

export const updateClip = (clipID, updatedClip) => {
  return (dispatch, getState) => {
    axios
      .patch(`http://localhost:8888/api/v1/clips/${clipID}`, updatedClip)
      .then((res) => {
        const response = res.data;
        const updatedClip = response.data.clip;
        dispatch(updateClipSuccess(updatedClip));
      })
      .catch((err) => {
        console.error(err);
      });
  };
};
