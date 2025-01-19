import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  clips: []
};

const clipSlice = createSlice({
  name: 'clip',
  initialState,
  reducers: {
    getAllClipsSuccess: (state, action) => {

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
  getClipSuccess,
  createNewClipSuccess,
  updateClipSuccess,
  deleteClipSuccess
} = clipSlice.actions;

export default clipSlice.reducer;
