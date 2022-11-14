import React, { useState } from 'react';
import Modal from 'react-modal';
import styles from '../../styles/modal.module.scss';
import { InputBox, Label } from '../';
import { createLocation } from 'libs/aspida';
import { LocationInfo } from 'types';

interface LocationModalProps {
  isOpen: boolean;
  latLng: google.maps.LatLng | null;
  onRequestClose: () => void;
}

export const LocationModal = (props: LocationModalProps) => {
  const [header, setHeader] = useState<String>('位置情報');
  const [title, setTitle] = useState<String>('');
  const [description, setDescription] = useState<String>('');
  const [url, setUrl] = useState<String>('');

  const registerLocation = () => {
    // Todo
    if (props.latLng) {
      const locationInfo: LocationInfo = {
        title: title.toString(),
        description: description.toString(),
        mapId: 4, // Todo Fix
        latLng: { lat: props.latLng.lat(), lng: props.latLng.lng() },
        mediaUrl: url.toString()
        // locationMeta: [{ mediaUrl: url.toString() }],
      };
      createLocation(locationInfo);
    }
    // // Todo
    // // mapID, latlng
    // const info: PlaceInfo = {
    //   map_id: 1,
    //   lat: 111.111,
    //   lng: 222.222,
    //   title: title.toString(),
    //   description: description.toString(),
    //   url: url.toString(),
    // };
    //    registerPlace(info);
  };

  return (
    <Modal
      isOpen={props.isOpen}
      onAfterOpen={() => {
        // https://developers.google.com/maps/documentation/javascript/geocoding#ReverseGeocoding
        const geoCoder = new google.maps.Geocoder();
        geoCoder
          .geocode({ location: props.latLng })
          .then((response) => {
            if (response.results[0]) {
              // map.setZoom(11);
              // const marker = new google.maps.Marker({
              //   position: latLng,
              //   map: map,
              // });
              setHeader(response.results[0].formatted_address);
              // infowindow.setContent(response.results[0].formatted_address);
              // infowindow.open(map, marker);
            } else {
              window.alert('No results found');
            }
          })
          .catch((err) => {
            console.log(err);
          });
      }}
      onRequestClose={props.onRequestClose}
      className={`${styles.mymodal} relative max-w-2xl h-full md:h-auto bg-white rounded-lg shadow dark:bg-gray-700`}
      overlayClassName={`${styles.myoverlay}`}
      closeTimeoutMS={500}
    >
      <div className='flex justify-between items-start p-5 rounded-t border-b dark:border-gray-600'>
        <h3 className='text-xl font-semibold text-gray-900 lg:text-2xl dark:text-white'>
          {header} 付近に登録する
        </h3>
        <button
          type='button'
          onClick={props.onRequestClose}
          className='text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white'
          data-modal-toggle='defaultModal'
        >
          <svg
            className='w-5 h-5'
            fill='currentColor'
            viewBox='0 0 20 20'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            ></path>
          </svg>
        </button>
      </div>
      <div className='p-6 space-y-6'>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <Label text='タイトル' />
          </div>
          <div className='md:w-2/3'>
            <InputBox
              id='register-title-input'
              defaultValue={title.toString()}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <Label text='ひとこと' />
          </div>
          <div className='md:w-2/3'>
            <InputBox
              id='register-description-input'
              defaultValue={description.toString()}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <div className='md:flex md:items-center mb-6'>
          <div className='md:w-1/3'>
            <Label text='URL' />
          </div>
          <div className='md:w-2/3'>
            {/* Instagram, YouTube, Twitter以外はNG */}
            <InputBox
              id='register-url-input'
              defaultValue={url.toString()}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className='flex justify-center p-6 space-x-2 rounded-b border-t border-gray-200 dark:border-gray-600'>
        <button
          data-modal-toggle='defaultModal'
          type='button'
          className='text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800'
          onClick={registerLocation}
        >
          登録する
        </button>
      </div>
    </Modal>
  );
};
