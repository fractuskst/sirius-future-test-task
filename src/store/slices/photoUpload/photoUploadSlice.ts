import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type PhotoUploadState = {
  files: File[];
  previews: (string | null)[];
  taskId: string | null;
  loading: boolean;
  error: string | null;
};

const initialState: PhotoUploadState = {
  files: [],
  previews: [],
  taskId: null,
  loading: false,
  error: null,
};

export const photoUploadSlice = createSlice({
  name: "photoUpload",
  initialState,
  reducers: {
    setFile: (state, action: PayloadAction<{ index: number; file: File }>) => {
      const { index, file } = action.payload;

      const oldPreview = state.previews[index];
      if (oldPreview) {
        URL.revokeObjectURL(oldPreview);
      }

      state.files[index] = file;

      if (file.type.startsWith("image/")) {
        const previewUrl = URL.createObjectURL(file);
        state.previews[index] = previewUrl;
      } else {
        state.previews[index] = null;
      }
    },
    setTaskId: (state, action: PayloadAction<string>) => {
      state.taskId = action.payload;
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload;
    },
    setError: (state, action: PayloadAction<string | null>) => {
      state.error = action.payload;
    },
  },
});

export const { setFile, setTaskId, setLoading, setError } = photoUploadSlice.actions;
export default photoUploadSlice.reducer;
