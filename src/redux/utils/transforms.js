export const transformToHash = (data) => data.reduce((acc, cur) => ({ ...acc, [cur.id]: cur }), {});

export const transformToList = (data) => data.map((item) => item.id);
