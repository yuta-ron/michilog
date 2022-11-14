import React, { useEffect, useState, useCallback } from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import { MarkerLocation } from '../molecules/MarkerLocation';
import randomColor from 'randomcolor';
import { useRecoilState, useRecoilValue } from 'recoil';
import {
  isStreetViewMode,
  mapState,
  selectingStreetViewLatLng
} from '../../types/state';
// import { LocationModal } from './LocationModal';
import { MappyMap as MappyMapType } from 'types';

type MappyProps = {
  mapData: MappyMapType;
  containerStyle?: React.CSSProperties;
  viewMode: boolean;
};

const containerStyle: React.CSSProperties = {
  width: '100%',
  minHeight: '400px'
};

// Todo: 中央点はDBに持たせる。
const center = {
  lat: 42.70542983614407,
  lng: 141.2895291165737
};

// https://developers.google.com/maps/documentation/javascript/examples/event-simple
export const MappyMap = (props: MappyProps) => {
  const [gMap, setGMap] = useState<google.maps.Map | null>(null);
  const [isSV, setIsSV] = useRecoilState(isStreetViewMode);
  const selectingSVLatLng = useRecoilValue(selectingStreetViewLatLng);
  // const [selectedLatLng, setLatLng] = useState<google.maps.LatLng | null>(null);
  // const [currentOpeningInfoWindow, setInfoWindow] =
  //   useState<google.maps.InfoWindow | null>(null);
  //  const [isLocationModalOpen, setLocationModalOpen] = useState<boolean>(false);
  const map = useRecoilValue(mapState);

  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: process.env.googleMapsApiKey || ''
  });

  useEffect(() => {
    if (isLoaded) {
      refreshMap();
    }
  }, [map]);

  const onLoad = useCallback((m: google.maps.Map) => {
    const tm = initDataLayer(m);
    setGMap(tm);
  }, []);

  // StreetViewモードとMapモード切り替え
  useEffect(() => {
    if (isSV) {
      changeStreetView(selectingSVLatLng.lat, selectingSVLatLng.lng);
    } else {
      gMap?.setStreetView(null);
    }
  }, [isSV, selectingSVLatLng]);

  const initDataLayer = useCallback(
    (map: google.maps.Map) => {
      const infoWindow = new google.maps.InfoWindow();
      const toolTip = new google.maps.InfoWindow();

      // const showTooltip = (latLng: google.maps.LatLng) => {
      //   const template = `
      //   <div>
      //     <span>ここに思い出を登録する！</span>
      //   </div>
      // `;

      //   toolTip.setContent(template);
      //   toolTip.setPosition(latLng);
      //   setLatLng(latLng);
      //   toolTip.setOptions({
      //     pixelOffset: new google.maps.Size(0, 0),
      //     disableAutoPan: true
      //   });
      //   toolTip.addListener('closeclick', () => {
      //     console.log('close click');
      //   });

      //   toolTip.open(map);
      // };

      // Todo: Fix よそをクリックしたら
      const showInfoWindow = (e: google.maps.Data.MouseEvent) => {
        infoWindow.setContent(
          e.feature.getProperty('name') + ' ' + e.feature.getProperty('address')
        );
        infoWindow.setPosition(e.latLng);
        infoWindow.setOptions({
          pixelOffset: new google.maps.Size(0, -30),
          disableAutoPan: true
        });
        infoWindow.addListener('closeclick', () => {});

        infoWindow.open(map);
        // setInfoWindow(infoWindow);
      };

      // map.addListener('click', (e: google.maps.Data.MouseEvent) => {
      //   if (e) {
      //     toolTip.close();
      //     setLocationModalOpen(true);
      //   }
      // });

      map.data.addListener('click', (e: google.maps.Data.MouseEvent) => {
        console.log(e?.feature?.getGeometry()?.getType());
      });

      map.data.addListener('mouseover', (e: google.maps.Data.MouseEvent) => {
        infoWindow.close();
        toolTip.close();

        // あとから作る
        if (e?.feature?.getGeometry()?.getType() === 'Point') {
          showInfoWindow(e);
        } // else if (e?.feature?.getGeometry()?.getType() === 'LineString') {
        //   if (e.latLng) {
        //     showTooltip(e.latLng);
        //   }
        // }
      });
      console.log('gmap---------------');
      console.log(gMap);
      console.log('---------------');

      return map;
    },
    [gMap, map]
  );

  const onUnmount = useCallback((map) => {
    setGMap(null);
  }, []);

  const refreshMap = () => {
    // Todo: 色が1つ前設定したものになるそのままになる。

    // Todo: 要検討,過去に入っているものを削除する。
    gMap?.data?.forEach((f: google.maps.Data.Feature) => {
      gMap?.data?.remove(f);
    });

    type color = string;
    const featureColor = new Map<google.maps.Data.Feature, color>();

    map.layers.forEach((item, key, _) => {
      const list = gMap?.data?.addGeoJson(item.route.geoJson);
      list?.forEach((f: google.maps.Data.Feature) => {
        featureColor.set(f, item.color);
      });
    });

    //  色を塗る
    gMap?.data?.setStyle((feature: google.maps.Data.Feature) => {
      const color = featureColor.has(feature)
        ? featureColor.get(feature)
        : randomColor();
      if (feature?.getGeometry()?.getType() === 'Point') {
        return {
          icon: {
            path: google.maps.SymbolPath.CIRCLE,
            fillColor: color,
            fillOpacity: 0.8,
            scale: 5,
            strokeColor: 'white',
            strokeWeight: 1
          }
        };
      }

      // LineStringの場合
      return { strokeColor: color };
    });
  };

  // const toggleLocationModal = () => {
  //   setLocationModalOpen(false);
  // };

  const st = { ...containerStyle, ...props.containerStyle };

  const changeStreetView = (lat: number, lng: number) => {
    // https://developers.google.com/maps/documentation/javascript/streetview?hl=ja#maps_streetview_simple-html
    const streetViewLatLng = { lat: lat, lng: lng };
    const panorama = new google.maps.StreetViewPanorama(
      document.getElementById('map') as HTMLElement,
      {
        position: streetViewLatLng,
        pov: {
          heading: 34,
          pitch: 10
        }
      }
    );

    gMap?.setStreetView(panorama);
  };

  return isLoaded ? (
    <>
      <GoogleMap
        id='map'
        mapContainerStyle={st}
        center={center}
        zoom={8}
        onLoad={onLoad}
        onUnmount={onUnmount}
        onClick={(e) => {
          // console.log('lat: ', e.latLng.lat(), 'lng: ', e.latLng.lng());
        }}
        // onClick={mapClicked}
      >
        {/* 過去に登録した場所 */}
        <MarkerLocation locations={props.mapData.locations} />
        <div id='street-view' />
      </GoogleMap>
      <div className='my-3'>
        {props.viewMode && (
          <button
            className='align-center bg-cyan-600 text-white p-2'
            onClick={() => {
              setIsSV(false);
              gMap?.setStreetView(null);
            }}
          >
            Mapに戻す
          </button>
        )}
      </div>
      {/* <LocationModal
        isOpen={isLocationModalOpen}
        latLng={selectedLatLng}
        onRequestClose={toggleLocationModal}
      ></LocationModal> */}
    </>
  ) : (
    <></>
  );
};
