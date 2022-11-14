import React from 'react';
import styles from '../../styles/droparea.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCloudUploadAlt } from '@fortawesome/free-solid-svg-icons';
import { kmlToGeoJson } from '../../libs/kmlutil';
import { KMLImportingError } from '../../libs/error';
import { mapState } from '../../types/state';
import { useRecoilState } from 'recoil';
import { Layer, MappyMap, Route } from '../../types/types';
import { genSha1 } from '../../libs/crypto';
import randomColor from 'randomcolor';
import GeoJSON from 'geojson';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';

interface DropAreaProps {}

export const DropArea = (props: DropAreaProps) => {
  const [mappyMap, setMappyMap] = useRecoilState(mapState);
  let timeOutId: NodeJS.Timeout;

  const onDragOver = (e: React.DragEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();

    const elm = document.getElementById('drag-area');
    if (!elm) {
      return;
    }

    clearTimeout(timeOutId);
    elm.style.backgroundColor = '#777';

    timeOutId = setTimeout(() => {
      elm.style.backgroundColor = '#ccc';
    }, 100);
  };

  // useCallback使うとRecoil動かんくなる。注意
  const onDropped = (e: React.DragEvent<HTMLInputElement>) => {
    e.stopPropagation();
    e.preventDefault();

    try {
      storeFiles(e.dataTransfer.files);
    } catch (e) {
      if (e instanceof KMLImportingError) {
        // Todo: 背景を#ff5555に変えてエラーメッセージをリッチに出せたらいい
        console.log('ファイルロード時にエラーが起こりました！');
      }
    }
  };

  const onUploaded = (e: React.FormEvent<HTMLInputElement>) => {
    try {
      if (e?.currentTarget?.files) {
        storeFiles(e.currentTarget.files);
      }
    } catch (e) {
      if (e instanceof KMLImportingError) {
        // Todo: 背景を#ff5555に変えてエラーメッセージをリッチに出せたらいいなぁ
        console.log('ファイルロード時にエラーが起こりました！');
      }
    }
  };

  const storeFiles = (files: FileList) => {
    const taskList: Array<
      Promise<{
        hash: string;
        fileName: string;
        geoJson: GeoJSON.FeatureCollection;
      }>
    > = [];

    // KMLをGeoJSONに変換する
    for (let i = 0; i < files.length; i++) {
      const re = /.*\.kml$/g;
      if (!files[i].name.match(re) || files[i].type !== '') {
        throw new KMLImportingError('既に同じファイルが登録されています');
      }

      const p = new Promise<{
        hash: string;
        fileName: string;
        geoJson: GeoJSON.FeatureCollection;
      }>((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsText(files[i]);
        reader.onload = () => {
          if (typeof reader.result !== 'string') {
            return reject(new Error('invalid file'));
          }

          try {
            const geoJson = kmlToGeoJson(reader.result);
            genSha1(JSON.stringify(geoJson)).then((hash) => {
              resolve({
                hash: hash,
                fileName: files[i].name,
                geoJson: geoJson
              });
            });
          } catch (e) {
            reject(e);
          }
        };
      });

      taskList.push(p);
    }

    Promise.all(taskList)
      .then((newItems) => {
        const newLayers: Layer[] = [];
        const hashList = new Set<String>(); // 重複管理用

        mappyMap.layers.forEach((item) => {
          hashList.add(item.hash);
        });

        // 新しくドロップされた要素を追加
        newItems.forEach((item) => {
          if (hashList.has(item.hash)) {
            throw new Error(`${item.fileName}は既に登録されています`);
          }
          const color = randomColor() + 'ff';

          const r: Route = { name: item.fileName, geoJson: item.geoJson };
          const l: Layer = {
            hash: item.hash,
            name: item.fileName,
            color: color,
            route: r
          };

          newLayers.push(l);
        });

        const updater = (state: MappyMap) => {
          const newMap: MappyMap = {
            ...state,
            layers: [...state.layers, ...newLayers]
          };

          return newMap;
        };

        setMappyMap(updater);
      })
      .catch(() => {});
  };

  return (
    <div
      id='drag-area'
      className={`${styles['drag-area']}`}
      onDragOver={onDragOver}
      onDrop={onDropped}
    >
      <div className={styles.icon}>
        <FontAwesomeIcon icon={faCloudUploadAlt as IconDefinition} />
      </div>
      <header className={styles.disable}>KMLファイルをまとめてドロップ</header>
      <span className={`${styles.ortext} ${styles.disable}`}>もしくは</span>
      <div className={styles['explore-button']}>
        <span>ファイルを選択(複数選択可)</span>
        <input
          type='file'
          onInput={onUploaded}
          className={styles['explore-button']}
          multiple
        />
      </div>
    </div>
  );
};
