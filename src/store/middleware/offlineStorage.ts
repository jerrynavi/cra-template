import { AnyAction, CombinedState } from 'redux';
import { EnhancedStore } from '@reduxjs/toolkit';
import { RootState } from '..';
import { STORE_NAME } from 'utils/constants';

export const offlineStorage =
  (store: EnhancedStore<CombinedState<RootState>>) =>
  (next: any) =>
  (action: AnyAction) => {
    const result = next(action);
    const state = JSON.stringify(store.getState());
    localStorage.setItem(STORE_NAME, state);
    return result;
  };
