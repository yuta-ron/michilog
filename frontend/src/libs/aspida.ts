import aspida from '@aspida/axios';
import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { LocationInfo, MapInfo, MappyMap } from 'types';
import api from 'api/$api';

const config: AxiosRequestConfig = {
  baseURL: process.env.apiHost + '/api',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json', accept: 'application/json' },
  timeout: 10000
};

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error: unknown) => {
    // Todo: ここにエラー処理を記述する
    const isAxiosError = (error: any): error is AxiosError => {
      return !!error.isAxiosError;
    };

    // Todo: Toaster的なことしたい
    if (isAxiosError(error)) {
      // Cookie 削除
      if (error.response?.status === 401) {
        console.log('Aspida 認証エラーです');
        // Todo: これでいい？
        localStorage.removeItem('mappy-persist');
        // LocalStorage情報消しとく
        window.location.href = '/';
        // 状態更新:
      } else if (error.response?.status === 404) {
        console.log('Aspida 見つかりませんでした');
      } else {
        console.log('Aspida サーバ内部でエラーです');
      }
    }
    // // 無限リダイレクト対策
    // if (window.location.pathname !== '/') {
    //   // window.location.href = '/';
    // }
  }
);

const client = api(aspida(axios, config));

export const fetchMapList = async (query: {
  page: number;
  userId?: number;
}) => {
  return await client.v1.maps.$get({ query: query });
};

export const fetchMap = async (mapId: number) => {
  const ret = await client.v1.maps._mapId(mapId).$get();

  // stringifyされているので、JSON.parseする
  ret.layers = ret.layers.map((layer: any) => {
    layer.route.geoJson = JSON.parse(layer.route.geo_json);
    return layer;
  });

  ret.locations = ret.locations.map((location: any) => {
    location.latLng = location.latlng;
    location.mediaUrl = location.media_url;

    return location;
  });

  console.log(ret);

  return ret;
};

export const createMap = async (mapInfo: MapInfo) => {
  return await client.v1.maps.$post({ body: mapInfo });
};

export const updateMap = async (map: MappyMap) => {
  return await client.v1.maps._mapId(map.id).$put({ body: map });
};

export const deleteMap = async (mapId: number) => {
  return await client.v1.maps._mapId(mapId).$delete();
};

export const createLocation = async (locationInfo: LocationInfo) => {
  return await client.v1.locations.$post({ body: locationInfo });
};
