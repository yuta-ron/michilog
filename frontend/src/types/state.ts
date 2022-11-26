import { atom } from 'recoil';
import { MappyMap, UserInfo } from './types';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'mappy-persist'
});

export const selectedLayerKeyState = atom<string>({
  key: 'selectedLayerKey',
  default: ''
});

export const isStreetViewMode = atom<boolean>({
  key: 'isStreetViewMode',
  default: false
});

export const selectingStreetViewLatLng = atom<{ lat: number; lng: number }>({
  key: 'selectingStreetViewLatLng',
  default: { lat: 35.6769883, lng: 139.7588499 }
});

export const paginationOperaton = atom<{
  page: number;
}>({
  key: 'paginationOperaton',
  default: { page: 1 }
});

export const mapState = atom<MappyMap>({
  key: 'mapState',
  default: {
    id: 0,
    owner_id: null,
    name: '',
    description: '',
    layers: [],
    locations: []
  }
});

export const userInfoState = atom<UserInfo | null>({
  key: 'userInfoState',
  default: null,
  effects_UNSTABLE: [persistAtom]
});
