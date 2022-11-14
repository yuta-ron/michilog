import { PlaceInfo } from '../types/types';
import mappyAxios from './mappyAxios';

export async function getUser () {
  return await mappyAxios.get('/api/v1/user');
}

export async function registerPlace (info: PlaceInfo) {
  return await mappyAxios.post('/api/v1/place', info);
}
