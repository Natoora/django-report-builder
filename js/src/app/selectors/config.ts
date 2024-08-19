import { createSelector } from '@ngrx/store';
import { State } from '../models/config';
export const getIsAsyncReport = (state: State) => state.async_report;
export const getFormatOptions = (state: State) => state.formats;

export const getConfig = (state: State) => state;

export const getConfigLoaded = createSelector(
  getConfig,
  (state: State) => state.configLoaded
);
