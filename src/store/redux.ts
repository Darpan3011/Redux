import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "../Slice/reduxSlice";
import editReducer from "../Slice/editSlice"

export const storeee = configureStore({
  reducer: {
    todo: todoReducer,
    edit: editReducer,
  },
});
