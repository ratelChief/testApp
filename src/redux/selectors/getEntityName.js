const getEntityName = (state, entityName, id) => state?.reducer?.[entityName]?.hash?.[id]?.name;

export default getEntityName;
