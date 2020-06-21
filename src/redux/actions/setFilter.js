import { SET_FILTER, SET_FILTERED_DATA } from 'redux/actionTypes';

export const setFilter = (payload) => ({ type: SET_FILTER, payload });

export const setFilteredData = (payload) => ({ type: SET_FILTERED_DATA, payload });
