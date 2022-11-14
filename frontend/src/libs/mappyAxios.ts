import Axios, { AxiosError } from 'axios';

const axios = Axios.create({
  baseURL: process.env.apiHost || 'http://localhost:3000',
  withCredentials: true,
  headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
  timeout: 10000
});

axios.interceptors.response.use(
  (response) => {
    // 正常時
    return response;
  },
  (error: unknown) => {
    // Todo: ここにエラー処理を記述する
    const isAxiosError = (error: any): error is AxiosError => {
      return !!error.isAxiosError;
    };

    // Todo: Toaster的なことしたい
    if (isAxiosError(error)) {
      if (error.response?.status === 401) {
        // 認証エラーです
      } else if (error.response?.status === 404) {
        // 見つかりませんでした
      } else {
        // サーバ内部でエラーです
      }
    }
  }
);

export default axios;
