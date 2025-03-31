import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  activeContentId: "Hi",
};

const contentSlice = createSlice({
  name: "content",
  initialState,
  reducers: {
    setActiveContentId: (state, action) => {
      state.activeContentId = action.payload;
    },
  },
});

export const { setActiveContentId } = contentSlice.actions;

export default contentSlice.reducer;
