import {
  configureStore,
  ThunkAction,
  Action,
  Middleware,
} from '@reduxjs/toolkit';
import rootReducer, { RootState } from './rootReducer';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { offlineStorage } from './middleware/offlineStorage';
import { STORE_NAME } from 'utils/constants';

const savedLocalStorage = localStorage.getItem(STORE_NAME);

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().prepend(offlineStorage as Middleware<any>),
  ...(savedLocalStorage &&
    savedLocalStorage?.length > 0 && {
      preloadedState: JSON.parse(savedLocalStorage),
    }),
});

type AppDispatch = typeof store.dispatch;
type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export type { RootState, AppThunk };

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export default store;
