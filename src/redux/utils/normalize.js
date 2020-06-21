import { transformToHash, transformToList } from './transforms';

export const normalize = (data) => ({
  hash: transformToHash(data),
  list: transformToList(data),
});
