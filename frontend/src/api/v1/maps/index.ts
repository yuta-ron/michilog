import { MapInfo, MapListItem } from '../../../types';

export type Methods = {
  post: {
    reqBody: MapInfo;
  };
  get: {
    query: {
      page?: number;
      limit?: number;
      userId?: number;
    };
    resBody: {
      total: number;
      result: MapListItem[];
    };
  };
};
