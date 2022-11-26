export type MapListItem = {
  thumbnail: string;
  title: string;
  description: string;
  id: number;
};

export type Route = {
  name: string;
  geoJson: GeoJSON.FeatureCollection;
};

export type Layer = {
  name: string;
  hash: string;
  color: string;
  route: Route;
};

export type MapInfo = {
  name: string;
};

export type LatLng = {
  lat: number;
  lng: number;
};

export type LocationInfo = {
  title: string;
  description: string;
  latLng: LatLng;
  mapId: number;
  mediaUrl: string;
  // locationMeta: LocationMeta[];
};

export type MappyMap = {
  id: number;
  owner_id: number | null;
  name: string;
  description: string;
  layers: Array<Layer>;
  locations: Array<LocationInfo>;
};

export type MappyMapType = MappyMap;

export type UserInfo = {
  id: number;
  name: string;
  icon_url: string;
  meta: {
    map_count: number;
  };
};

export type PlaceInfo = {
  map_id: number;
  lat: number;
  lng: number;
  title: string;
  description: string;
  url: string;
};

// export type LocationMeta = {
//   mediaUrl: string;
// };
