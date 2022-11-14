import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { SortableContainer, SortableElement } from 'react-sortable-hoc';

import React, { ChangeEvent, useEffect, useState } from 'react';
import { useRecoilState, useSetRecoilState } from 'recoil';
import { mapState, selectedLayerKeyState } from '../../types/state';
import { Layer } from 'types';
import { swapLayer, updateLayerName } from 'libs/map';

type layerListProps = {
  isEditable: boolean;
};

const SortableItem = SortableElement(
  ({ index, layer }: { index: number; layer: Layer }) => {
    const [map, setMap] = useRecoilState(mapState);
    const [layerName, setLayerName] = useState<string>('');
    const setSelectedLayerKey = useSetRecoilState(selectedLayerKeyState);

    useEffect(() => {
      setLayerName(layer.name);
    }, [map]);

    const routes = layer.route.geoJson.features.reduce((result, feature) => {
      if (feature.geometry.type === 'Point') {
        const place = (
          <li className='mx-5 text-base'>{feature.properties?.name}</li>
        );

        // 住所: feature.properties?.address
        result.push(place);
      }

      return result;
    }, [] as JSX.Element[]);

    return (
      <li key={`layer-area-${index}`} className='mb-5 list-none'>
        {/* <SketchPicker
          onChange={() => {}}
          onChangeComplete={() => {}}
          color='#ffffff'
          disableAlpha={true}
        /> */}
        <div>
          <span className='px-2'>
            <FontAwesomeIcon icon={faBars as IconDefinition} />
            <span
              className='cursor-pointer text-2xl'
              style={{ color: layer.color }}
            >
              ◼️
            </span>
          </span>
          <input
            id={`layer-area-input-${index}`}
            key={`${index}`}
            type='text'
            className='px-2 py-1 text-sm font-semibold inline-block w-3/6'
            value={layerName}
            onFocus={() => {
              setSelectedLayerKey(layer.hash);
            }}
            onChange={(e: ChangeEvent<HTMLInputElement>) => {
              setLayerName(e.target.value);
            }}
            onBlur={() => {
              const newMap = updateLayerName(map, layer, layerName);
              setMap(newMap);
            }}
          />
        </div>
        <div className='mx-3'>
          <ul className='px-2'>{routes}</ul>
        </div>
      </li>
    );
  }
);

const SortableList = SortableContainer(({ items }: { items: Layer[] }) => {
  return (
    <ul className='px-1 py-4'>
      {items.map((layer, index) => (
        <SortableItem key={`item-layer-${index}`} index={index} layer={layer} />
      ))}
    </ul>
  );
});

export const LayerList = (prop: layerListProps) => {
  const [map, setMap] = useRecoilState(mapState);

  useEffect(() => {}, []);

  const onSortEnd = ({
    oldIndex,
    newIndex
  }: {
    newIndex: number;
    oldIndex: number;
  }) => {
    const newMap = swapLayer(map, oldIndex, newIndex);
    // Todo: ここで保存する。
    setMap(newMap);
  };

  return (
    // https://github.com/clauderic/react-sortable-hoc/
    <SortableList items={map.layers} onSortEnd={onSortEnd} />
  );
};
