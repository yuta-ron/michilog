import { Position } from 'geojson';
import React, { useEffect, useState } from 'react';
import { useRecoilValue, useSetRecoilState } from 'recoil';
import {
  isStreetViewMode,
  mapState,
  selectingStreetViewLatLng
} from '../../types/state';

export const PlaceList = () => {
  const mapGlobalState = useRecoilValue(mapState);
  const [places, setPlaces] = useState<JSX.Element[]>([]);

  const setIsSV = useSetRecoilState(isStreetViewMode);
  const selectingSVLatLng = useSetRecoilState(selectingStreetViewLatLng);

  const changeStreetView = (p: Position) => {
    selectingSVLatLng({ lng: p[0], lat: p[1] });
    setIsSV(true);
  };

  useEffect(() => {
    if (!mapGlobalState) return;

    const elms = [];
    for (const layerIdx in mapGlobalState.layers) {
      const features = mapGlobalState.layers[layerIdx].route.geoJson?.features;
      if (!features) continue;
      elms.push(
        <div className='text-sm font-semibold mt-5'>
          {mapGlobalState.layers[layerIdx].name}
        </div>
      );
      for (let featureIdx = 0; featureIdx < features.length; featureIdx++) {
        const feature = features[featureIdx];
        if (feature?.geometry?.type !== 'Point') continue;
        elms.push(
          <li
            key={`${layerIdx}-${featureIdx}`}
            className='underline cursor-pointer text-xs py-1 '
          >
            <a
              onClick={() => {
                const g = feature.geometry as unknown as GeoJSON.Point;
                changeStreetView(g.coordinates);
              }}
            >
              {feature.properties?.name} {feature.properties?.address}{' '}
            </a>
          </li>
        );
      }
    }
    setPlaces(elms);
  }, [mapGlobalState]);

  return (
    <div className='h-3/5 overflow-y-scroll lg:mb-16'>
      <ul>{places}</ul>
    </div>
  );
};
