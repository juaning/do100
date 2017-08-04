import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { View, Text } from 'react-native';
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
    const { uri } = params;
    // const uri = path.substring(0, path.length - 4);
    return (
      <View style={styles.container}>
        <Text>Before</Text>
        <Video source={{ uri }} resizeMode="cover" onLoadStart={this.onLoadStart} />
        <Text>Testing in the dark</Text>
      </View>
    );
  }
}

export default VideoPlayer;

VideoPlayer.propTypes = {
  navigation: PropTypes.object,
};
