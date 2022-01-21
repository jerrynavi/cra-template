import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface AppState {
  pageTitle: string;
}

const initialState: AppState = {
  pageTitle: 'CRA Template',
};

const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setPageTitle(state, { payload }: PayloadAction<string>) {
      state.pageTitle = payload;
    },
  },
});

export const { setPageTitle } = appSlice.actions;

export default appSlice.reducer;
