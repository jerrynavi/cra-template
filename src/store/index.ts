import {
  configureStore,
  ThunkAction,
  Action,
  Middleware,
} from '@reduxjs/toolkit';
import rootReducer, { RootState } from './rootReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { offlineStorage } from './middleware/offlineStorage';

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(offlineStorage as Middleware<any>),
});

type AppDispatch = typeof store.dispatch;
type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export type { RootState, AppThunk };

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
