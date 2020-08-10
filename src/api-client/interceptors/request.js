export default (client) => {
  client.interceptors.request.use((config) => {
    // todo get token
    const { accessToken, tokenType } = JSON.parse(localStorage.getItem('auth') || null) || {};
    if (accessToken) {
      config.headers.Authorization = `${tokenType} ${accessToken}`;
    }
    return Promise.resolve(config);
  }, err => Promise.reject(err));
};
