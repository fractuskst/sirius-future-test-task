import { configureStore } from "@reduxjs/toolkit";
import photoUploadReducer from "./slices/photoUploadSlice";

export const store = configureStore({
  reducer: {
    photoUpload: photoUploadReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
