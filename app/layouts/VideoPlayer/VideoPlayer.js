import React, { Component } from 'react';
import { View } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';

class VideoPlayer extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Video
          source={this.props.videoSource}
          resizeMode="cover"
        />
      </View>
    );
  }
}

export default VideoPlayer;
