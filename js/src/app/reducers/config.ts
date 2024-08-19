import { ConfigActions, ConfigActionTypes } from '../actions/config';
import { State } from '../models/config';

const initialState: State = {
  configLoaded: false,
};

export function reducer(state = initialState, action: ConfigActions): State {
  switch (action.type) {
    case ConfigActionTypes.GET_CONFIG_SUCCESS: {
      return {
        ...state,
        ...action.payload,
        configLoaded: true,
      };
    }
    default: {
      return state;
    }
  }
}
