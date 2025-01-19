import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clips: [],
  length: 0
};

const clipSlice = createSlice({
  name: 'clip',
  initialState,
  reducers: {
    getAllClipsSuccess: (state, action) => {
      state.clips = action.payload;
      state.length = action.payload.length;
    },
    getAllClipsError: (state, action) => {

    },
    getClipSuccess: (state, action) => {

    },
    createNewClipSuccess: (state, action) => {

    },
    updateClipSuccess: (state, action) => {

    },
    deleteClipSuccess: (state, action) => {

    }
  }
});

export const {
  getAllClipsSuccess,
  getAllClipsError,
  getClipSuccess,
  createNewClipSuccess,
  updateClipSuccess,
  deleteClipSuccess
} = clipSlice.actions;

export default clipSlice.reducer;
