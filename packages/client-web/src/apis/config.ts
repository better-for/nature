// Make sure auth token is not expired and valid
import axios, { AxiosInstance } from 'axios';

const ADMIN_API_ROUTE = '/api';

const TEMPORARY_API_ROUTE =
  'https://5bea1ca8-7b35-47a0-9ad0-0623a151cd13.mock.pstmn.io/api/';

const adminAxios: AxiosInstance = axios.create({
  baseURL: TEMPORARY_API_ROUTE
});

export default adminAxios;
