import { IConfig } from './api';

// State is just IConfig with all fields optional plus configLoaded flag
export interface State extends Partial<IConfig> {
  configLoaded: boolean;
}
