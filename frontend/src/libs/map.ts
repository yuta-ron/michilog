// import { useRecoilState, useResetRecoilState, useSetRecoilState } from 'recoil';
// import { mapState } from 'types/state';
import { Layer, MappyMap } from 'types';

export const updateLayerName = (
  baseMap: MappyMap,
  layer: Layer,
  newName: string
) => {
  const newLayers = [...baseMap.layers].map((l: Layer) => {
    if (layer.hash === l.hash) {
      const newLayer: Layer = {
        name: newName,
        hash: l.hash,
        color: l.color,
        route: l.route
      };
      return newLayer;
    }

    return l;
  });

  const newMap: MappyMap = {
    id: baseMap.id,
    owner_id: baseMap.owner_id,
    name: baseMap.name,
    description: baseMap.description,
    layers: newLayers,
    locations: [...baseMap.locations]
  };
  return newMap;
};

export const swapLayer = (baseMap: MappyMap, from: number, to: number) => {
  const newLayers = [...baseMap.layers];

  const tmp = newLayers[to];
  newLayers[to] = newLayers[from];
  newLayers[from] = tmp;

  const newMap: MappyMap = {
    id: baseMap.id,
    owner_id: baseMap.owner_id,
    name: baseMap.name,
    description: baseMap.description,
    layers: newLayers,
    locations: [...baseMap.locations]
  };

  return newMap;
};
