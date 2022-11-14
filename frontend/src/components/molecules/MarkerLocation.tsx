import React, { useState, useEffect } from 'react';
import { Marker, InfoWindow } from '@react-google-maps/api';
import Embed from 'react-embed';
import { LocationInfo } from 'types';

interface MarkerLocationProps {
  locations: Array<LocationInfo>;
}

interface InfoWindowState {
  infoWindowState: Array<{
    id: number;
    isOpen: boolean;
  }>;
}

export const MarkerLocation = (props: MarkerLocationProps) => {
  const [openState, setOpenState] = useState<InfoWindowState>();

  useEffect(() => {
    const initialState = props.locations.map((_, index) => {
      // フォーカスされていないものは自動的に閉じる
      return { id: index, isOpen: false };
    });

    setOpenState({ infoWindowState: initialState });
  }, [props.locations]);

  const toggleInfoWindowOpening = (id: number, status: boolean) => {
    const tmpStatus = openState?.infoWindowState?.map((item) => {
      if (item.id !== id) {
        item.isOpen = false;
        return item;
      }

      item.isOpen = status;
      return item;
    });
    if (tmpStatus) {
      setOpenState({ infoWindowState: tmpStatus });
    }
  };

  const isOpen = (id: number): boolean => {
    return !!openState?.infoWindowState?.filter((item) => item.id === id)[0]
      ?.isOpen;
  };

  const mapPins = props.locations?.map((location, index) => {
    return (
      // マーカーの色変更
      // https://stackoverflow.com/questions/11064081/javascript-change-google-map-marker-color
      <Marker
        key={index}
        position={{ lat: location.latLng.lat, lng: location.latLng.lng }}
        onClick={() => {
          toggleInfoWindowOpening(index, true);
        }}
        onMouseOver={() => {
          console.log('a');
        }}
      >
        {isOpen(index) ? (
          <InfoWindow
            key={index}
            options={{ disableAutoPan: false, minWidth: 500, maxWidth: 1000 }}
            onCloseClick={() => {
              toggleInfoWindowOpening(index, false);
            }}
          >
            <div className='infobox'>
              <h1>{location.title}</h1>
              <div className='description'>{location.description}</div>
              <Embed url={location.mediaUrl} />
            </div>
          </InfoWindow>
        ) : (
          <></>
        )}
      </Marker>
    );
  });

  return <>{mapPins}</>;
};
