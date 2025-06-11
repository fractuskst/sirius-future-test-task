import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type PhotoUploadState = {
  uploadedFiles: boolean[];
  previews: (string | null)[];
};

const initialState: PhotoUploadState = {
  uploadedFiles: Array(3).fill(false),
  previews: Array(3).fill(null),
};

export const photoUploadSlice = createSlice({
  name: "photoUpload",
  initialState,
  reducers: {
    setFileUploaded: (state, action: PayloadAction<{ index: number; uploaded: boolean }>) => {
      const { index, uploaded } = action.payload;
      state.uploadedFiles[index] = uploaded;
    },
    setPreview: (state, action: PayloadAction<{ index: number; preview: string | null }>) => {
      const { index, preview } = action.payload;
      state.previews[index] = preview;
    },
  },
});

export const { setFileUploaded, setPreview } = photoUploadSlice.actions;
export default photoUploadSlice.reducer;
