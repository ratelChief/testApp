const getEntityById = (state, id, entityName) => state?.[entityName]?.[id];

export default getEntityById;
