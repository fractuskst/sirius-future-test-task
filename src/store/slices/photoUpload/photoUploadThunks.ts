import { createAsyncThunk } from "@reduxjs/toolkit";

export const uploadPhotos = createAsyncThunk("photoUpload/uploadPhotos", async (files: File[]) => {
  const formData = new FormData();
  files.forEach((file) => {
    formData.append("files", file);
  });

  const response = await fetch("https://sirius-draw-test-94500a1b4a2f.herokuapp.com/upload", {
    method: "POST",
    body: formData,
  });

  if (!response.ok) {
    throw new Error("Не удалось загрузить фотографии. Пожалуйста, попробуйте снова.");
  }

  const data = await response.json();
  return data.task_id;
});
