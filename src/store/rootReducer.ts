import { combineReducers } from '@reduxjs/toolkit';
import appSlice from 'app/app.slice';

const rootReducer = combineReducers({
  // @todo
  app: appSlice,
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;
