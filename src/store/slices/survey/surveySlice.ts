import { createSlice, type PayloadAction } from "@reduxjs/toolkit";

type surveyState = {
  childName: string | null;
  childDateOfBirth: number | null;
  childGender: string | null;
  parentName: string | null;
};

const initialState: surveyState = {
  childName: null,
  childDateOfBirth: null,
  childGender: "Мужской",
  parentName: null,
};

export const surveySlice = createSlice({
  name: "survey",
  initialState,
  reducers: {
    setChildName: (state, action: PayloadAction<string>) => {
      state.childName = action.payload;
    },
    setChildDateOfBirth: (state, action: PayloadAction<number | null>) => {
      state.childDateOfBirth = action.payload;
    },
    setChildGender: (state, action: PayloadAction<string>) => {
      state.childGender = action.payload;
    },
    setParentName: (state, action: PayloadAction<string>) => {
      state.parentName = action.payload;
    },
  },
});

export const { setChildName, setChildDateOfBirth, setChildGender, setParentName } = surveySlice.actions;
export default surveySlice.reducer;
