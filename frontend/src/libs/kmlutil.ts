import tj from '@mapbox/togeojson';

export const kmlToGeoJson = (kml: string): GeoJSON.FeatureCollection => {
  const p = new DOMParser().parseFromString(kml, 'text/xml');
  if (p.getElementsByTagName('parsererror').length > 0) {
    throw new Error('不正なファイル形式です');
  }

  const geoJson:GeoJSON.FeatureCollection = tj.kml(p);
  if (geoJson.features.length === 0) {
    throw new Error('位置情報の読み取りに失敗しました');
  }

  return geoJson;
};
