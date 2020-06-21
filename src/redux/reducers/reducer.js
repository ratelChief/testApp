import { normalize } from 'redux/utils/normalize';
import { SET_FILTER } from 'redux/actionTypes';
import { city, category, data } from 'mocks';

const initialState = {
  data: normalize(data),
  city: normalize(city),
  category: normalize(category),
  filter: {},
};

const reducerState = {
  [SET_FILTER]: (state, action) => {
    debugger;
    return {
      ...state,
      filter: { ...action.payload },
    };
  },
};

const reducer = (state = initialState, action) => {
  const newState = reducerState[action.type];

  if (!newState) {
    return state;
  }

  return newState(state, action);
};

export default reducer;
