import { State } from '../models/config';
export const getIsAsyncReport = (state: State) => state.async_report ? state.async_report : false;
export const getFormatOptions = (state: State) => state.formats ? state.async_report : [];
