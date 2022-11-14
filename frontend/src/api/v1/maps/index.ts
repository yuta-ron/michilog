import { MapInfo, MapListItem } from '../../../types';

export type Methods = {
  post: {
    reqBody: MapInfo;
  };
  get: {
    query: {
      page: number;
    };
    resBody: MapListItem[];
  };
};
