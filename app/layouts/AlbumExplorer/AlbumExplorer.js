import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import CameraRollPicker from 'react-native-camera-roll-picker';
import styles from './styles';

class AlbumExplorer extends Component {
  constructor() {
    super();
    this.getSelectedImages = this.getSelectedImages.bind(this);
  }
  getSelectedImages(list, selected) {
    const { uri } = selected;
    const { navigate } = this.props.navigation;
    navigate('VideoPlayer', { uri });
  }
  render() {
    return (
      <View style={styles.container}>
        <CameraRollPicker
          callback={this.getSelectedImages}
          assetType="Videos"
          emptyText="No videos"
          maximum={1}
        />
      </View>
    );
  }
}

AlbumExplorer.propTypes = {
  navigation: PropTypes.object,
};

export default AlbumExplorer;
