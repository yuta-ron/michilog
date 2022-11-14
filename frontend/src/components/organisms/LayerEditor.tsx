import React, { useState } from 'react';
import { ColorResult, SketchPicker } from 'react-color';
import { useRecoilState, useRecoilValue } from 'recoil';
import { LayerList } from '..';
import { mapState, selectedLayerKeyState } from '../../types/state';
// import html2canvas from 'html2canvas';
import { Layer } from '../../types/types';

interface LayerEditorProps {}

export const LayerEditor = (props: LayerEditorProps) => {
  const [mappyMap, setMappyMap] = useRecoilState(mapState);
  const selectedLayerKey = useRecoilValue(selectedLayerKeyState);
  const [lineColor, setLineColor] = useState('#ffffff');

  const onChange = (
    color: ColorResult,
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    // Todo HSL指定（バーのところ）だと初期値がffffffのままになる
    // if (event.target.className == 'hue-horizontal') {
    // }
    // if (event.type === 'change') {
    // }
    // Todo: セミコロンありに統一したい
    setLineColor(color.hex + 'ff');
  };

  const onChangeComplete = () => {
    const newLayerState: Layer[] = [];
    mappyMap.layers.forEach((layer, _) => {
      const l = Object.assign({}, layer);
      if (layer.hash === selectedLayerKey) {
        l.color = lineColor;
      }
      newLayerState.push(l);
    });

    setMappyMap({
      ...mappyMap,
      layers: newLayerState
    });
  };

  // const screenShotHandler = () => {
  //   // https://html2canvas.hertzen.com/configuration
  //   // Todo: ignoreElementsで純粋なマップだけキャプチャする
  //   const elm = document.getElementById('map');
  //   if (!elm) return;

  //   html2canvas(elm, { allowTaint: true, useCORS: true }).then((canvas) => {
  //     const a = document.createElement('a');
  //     a.href = canvas.toDataURL('image/png');
  //     a.download = 'map.png';
  //     a.click();
  //   });
  // };

  return (
    <>
      <SketchPicker
        onChange={onChange}
        onChangeComplete={onChangeComplete}
        color={lineColor}
        disableAlpha={true}
      />
      {/* <input
        type='button'
        onClick={screenShotHandler}
        value='スクリーンショットのダウンロード('
      ></input> */}
      <LayerList isEditable={true} />
    </>
  );
};
