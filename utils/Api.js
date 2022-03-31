let axios;

export function setAxios($axios) {
  axios = $axios;
}

export function getApi(url, query = {}) {

  let options = {};

  if (Object.entries(query).length !== 0) {
    options = {
      params: query
    };
  }

  return axios.$get(url, options);

}

export function postApi(url, userData) {

  return axios.$post(url, userData)

}

export function putApi(url, userData) {

  return axios.$put(url, userData)

}

export function deleteApi(url, params) {

  let config = {};

  if (Object.entries(params).length !== 0) {
    config.data = params
  }

  return axios.$delete(url, config);

}
