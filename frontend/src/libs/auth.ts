import mappyAxios from './mappyAxios';

export const TwitterLogin = () => {
  mappyAxios
    .get('/sanctum/csrf-cookie')
    .then((resp) => {
      mappyAxios.post('/api/v1/auth/twitter/login').then((res) => {
        window.location.href = res.data.redirect_url;
      });
    })
    .catch((e) => {
      console.log(e);
    });
};

export const TwitterLogout = () => {
  mappyAxios
    .get('/sanctum/csrf-cookie')
    .then((resp) => {
      console.log(resp);
      mappyAxios.get('/api/v1/auth/twitter/logout').then((res) => {
        window.location.href = '/';
      });
    })
    .catch();
  // Todo定数
  localStorage.removeItem('mappy-persist');
};
