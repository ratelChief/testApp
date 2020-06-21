const getDataByName = (state, name) =>
  state.reducer[name].list.map((item) => state.reducer[name].hash[item]);

export default getDataByName;
