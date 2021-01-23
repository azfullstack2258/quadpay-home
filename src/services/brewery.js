import { apiGet, apiPost, apiPut } from '../utils/axios';

const API_URL =
  process.env.REACT_APP_API_URL || 'https://api.openbrewerydb.org/breweries';

export default {
  /**
   * 
   * @param {object} payload // query params. i.e. sort=-name
   * @return {object} // response for fetching 100 items
   */
  fetchList: function ({ sort }) {
    return Promise.all([
      apiGet(`${API_URL}?per_page=50&page=1&sort=${sort}`),
      apiGet(`${API_URL}?per_page=50&page=2&sort=${sort}`),
    ]).then(([res1, res2]) => [...res1, ...res2]);
  },
};
