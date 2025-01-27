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
      state.clips = [...state.clips, action.payload];
      state.length = state.clips.length;
    },
    updateClipSuccess: (state, action) => {
      state.clips = state.clips.map(current => {
        if (current._id === action.payload._id)
          return action.payload;
        return current;
      });
      state.length = state.clips.length;
    },
    deleteClipSuccess: (state, action) => {
      state.clips = state.clips.filter(current => current._id !== action.payload);
      state.length = state.clips.length;
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
