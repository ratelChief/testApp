import { normalize } from 'redux/utils/normalize';
import { SET_FILTER, SET_FILTERED_DATA } from 'redux/actionTypes';
import { city, category, data } from 'mocks';

const initialState = {
  category: normalize(category),
  city: normalize(city),
  data: normalize(data),
  filteredData: data,
  filters: {},
};

const reducerState = {
  [SET_FILTER]: (state, action) => ({
    ...state,
    filters: action.payload,
  }),
  [SET_FILTERED_DATA]: (state, action) => ({
    ...state,
    filteredData: action.payload,
  }),
};

const reducer = (state = initialState, action) => {
  const newState = reducerState[action.type];

  if (!newState) {
    return state;
  }

  return newState(state, action);
};

export default reducer;
