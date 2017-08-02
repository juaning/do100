import React from 'react';
import { View } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import styles from './styles';

function getSelectedImages(list, selected) {
  console.log('=======> LIST <=======', list);
  console.log('=======> SELECTED <========', selected);
}

const AlbumExplorer = () => (
  <CameraRollPicker
    callback={getSelectedImages}
    assetType="Videos"
    emptyText="No videos"
    maximum={1}
    style={styles.toolbar}
  />
);

export default AlbumExplorer;
