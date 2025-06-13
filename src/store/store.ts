import { configureStore } from "@reduxjs/toolkit";
import photoUploadReducer from "./slices/photoUpload/photoUploadSlice";

export const store = configureStore({
  reducer: {
    photoUpload: photoUploadReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: ["photoUpload/setFile"],
        ignoredPaths: ["photoUpload.files"],
      },
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
