import type { AspidaClient } from 'aspida';
import { dataToURLString } from 'aspida';
import type { Methods as Methods0 } from './v1/locations';
import type { Methods as Methods1 } from './v1/maps';
import type { Methods as Methods2 } from './v1/maps/_mapId@number';

const api = <T>({ baseURL, fetch }: AspidaClient<T>) => {
  const prefix = (baseURL === undefined ? '' : baseURL).replace(/\/$/, '');
  const PATH0 = '/v1/locations';
  const PATH1 = '/v1/maps';
  const GET = 'GET';
  const POST = 'POST';
  const PUT = 'PUT';
  const DELETE = 'DELETE';

  return {
    v1: {
      locations: {
        post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
          fetch(prefix, PATH0, POST, option).send(),
        $post: (option: { body: Methods0['post']['reqBody'], config?: T | undefined }) =>
          fetch(prefix, PATH0, POST, option).send().then(r => r.body),
        $path: () => `${prefix}${PATH0}`
      },
      maps: {
        _mapId: (val2: number) => {
          const prefix2 = `${PATH1}/${val2}`;

          return {
            get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody']>(prefix, prefix2, GET, option).json(),
            $get: (option?: { config?: T | undefined } | undefined) =>
              fetch<Methods2['get']['resBody']>(prefix, prefix2, GET, option).json().then(r => r.body),
            put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
              fetch(prefix, prefix2, PUT, option).send(),
            $put: (option: { body: Methods2['put']['reqBody'], config?: T | undefined }) =>
              fetch(prefix, prefix2, PUT, option).send().then(r => r.body),
            delete: (option?: { config?: T | undefined } | undefined) =>
              fetch(prefix, prefix2, DELETE, option).send(),
            $delete: (option?: { config?: T | undefined } | undefined) =>
              fetch(prefix, prefix2, DELETE, option).send().then(r => r.body),
            $path: () => `${prefix}${prefix2}`
          };
        },
        post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
          fetch(prefix, PATH1, POST, option).send(),
        $post: (option: { body: Methods1['post']['reqBody'], config?: T | undefined }) =>
          fetch(prefix, PATH1, POST, option).send().then(r => r.body),
        get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
          fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json(),
        $get: (option: { query: Methods1['get']['query'], config?: T | undefined }) =>
          fetch<Methods1['get']['resBody']>(prefix, PATH1, GET, option).json().then(r => r.body),
        $path: (option?: { method?: 'get' | undefined; query: Methods1['get']['query'] } | undefined) =>
          `${prefix}${PATH1}${option && option.query ? `?${dataToURLString(option.query)}` : ''}`
      }
    }
  };
};

export type ApiInstance = ReturnType<typeof api>;
export default api;
