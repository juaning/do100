import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Text, View } from 'react-native';
import Camera from 'react-native-camera';
import styles from './styles';

class CameraRecord extends Component {
  static navigationOptions = {
    title: 'Record',
  };
  constructor() {
    super();
    this.state = {
      showRecordVideo: true,
    };
    this.recordVideo = this.recordVideo.bind(this);
    this.stopRecordVideo = this.stopRecordVideo.bind(this);
  }
  recordVideo() {
    const { navigate } = this.props.navigation;
    const options = {
      totalSeconds: 15,
    };
    this.setState({
      showRecordVideo: false,
    });
    this.camera
      .capture(options)
      .then((data) => {
        navigate('VideoPlayer', { uri: data.path });
      })
      /* eslint no-console: ["error", { allow: ["error"] }] */
      .catch(err => console.error(err));
  }
  stopRecordVideo() {
    this.setState({
      showRecordVideo: true,
    });
    this.camera.stopCapture();
  }
  renderButton() {
    if (this.state.showRecordVideo) {
      return <Text style={styles.record} onPress={this.recordVideo}>[RECORD]</Text>;
    }
    return <Text style={styles.stopRecord} onPress={this.stopRecordVideo}>[STOP]</Text>;
  }
  render() {
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureMode={Camera.constants.CaptureMode.video}
          captureAudio
        >
          {this.renderButton()}
        </Camera>
      </View>
    );
  }
}

export default CameraRecord;

CameraRecord.propTypes = {
  navigation: PropTypes.object,
};
