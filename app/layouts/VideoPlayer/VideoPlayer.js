import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';

class VideoPlayer extends Component {
  constructor() {
    super();
    this.state = {
      isPlaying: false,
    };
    this.onLoadStart = this.onLoadStart.bind(this);
  }
  onLoadStart(e) {
    this.setState({
      isPlaying: true,
    });
    console.log('======> Playing video <======', e);
  }
  render() {
    const { params } = this.props.navigation.state;
    const { path } = params.data;
    const uri = path.substring(0, path.length - 4);
    return (
      <View style={styles.container}>
        <Video source={{ uri }} resizeMode="cover" onLoadStart={this.onLoadStart} />
      </View>
    );
  }
}

export default VideoPlayer;

VideoPlayer.propTypes = {
  navigation: PropTypes.object,
};
