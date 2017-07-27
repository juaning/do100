// import React, { Component } from 'react';
import React from 'react';
import { View } from 'react-native';
// import Video from 'react-native-video';
import styles from './styles';

// class VideoPlayer extends Component {
//   render() {
//     return (
//       <View style={styles.container}>
//         <Video
//           source={this.props.videoSource}
//           resizeMode="cover"
//         />
//       </View>
//     );
//   }
// }

const VideoPlayer = () => (
  <View style={styles.container}>
    <Text>Video Player</Text>
  </View>
);

export default VideoPlayer;
