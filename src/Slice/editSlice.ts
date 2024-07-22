import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface EditState {
  id: number | null;
  text: string;
}

const initialState: EditState = {
  id: null,
  text: "",
};

export const editSlice = createSlice({
  name: "edittodo",
  initialState,
  reducers: {
    startEdit: (state, action: PayloadAction<{ id: number; text: string }>) => {
      state.id = action.payload.id;
      state.text = action.payload.text;
    },
    stopEdit: (state) => {
      state.id = null;
      state.text = "";
    },
  },
});

export const { startEdit, stopEdit } = editSlice.actions;
export default editSlice.reducer;
