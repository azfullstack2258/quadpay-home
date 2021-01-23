import axios from 'axios';

axios.interceptors.response.use(null, (error) => {
  if (error && error.response) {
    if (error.response.status === 401) {
      // initial call to whoami will get intercepted here and redirect, need to throw log event
      // TODO: Do something
    }
    const { data } = error.response;
    const errorPayload =
      data.error ||
      data.errors ||
      data.error_message ||
      data.error_type ||
      data.message;

    return Promise.reject(errorPayload);
  }

  return Promise.reject(error);
});

export function apiGet(path) {
  const authToken = localStorage.getItem('authToken');
  const config = {
    headers: {
      Authorization: `Token ${authToken}`,
    },
  };

  return axios.get(path, config);
}
export function apiPost(path, data) {
  const authToken = localStorage.getItem('authToken');
  const config = {
    headers: {
      Authorization: `Token ${authToken}`,
      'Content-Type': 'application/json',
    },
  };

  return axios.post(path, data, config);
}

export function apiPatch(path, data) {
  const authToken = localStorage.getItem('authToken');
  const config = {
    headers: {
      Authorization: `Token ${authToken}`,
    },
  };

  return axios.patch(path, data, config);
}

export function apiPut(path, data) {
  const authToken = localStorage.getItem('authToken');
  const config = {
    headers: {
      Authorization: `Token ${authToken}`,
    },
  };

  return axios.put(path, data, config);
}

export function apiDelete(path, data) {
  const authToken = localStorage.getItem('authToken');
  const config = {
    headers: {
      Authorization: `Token ${authToken}`,
    },
  };

  return axios.delete(path, { ...config, ...data });
}

const instance = axios.create();

export default instance;
