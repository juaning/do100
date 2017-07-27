import React, { Component } from 'react';
import { Text, View, Dimensions } from 'react-native';
import Camera from 'react-native-camera';
import styles from './styles';

class CameraRecord extends Component {
  constructor() {
    super();
    this.state = {
      showRecordVideo: true
    };
  }
  _renderButton() {
    if (this.state.showRecordVideo) {
      return (
        <Text
          style={styles.record}
          onPress={this.recordVideo.bind(this)}>[RECORD]</Text>
      );
    } else {
      return (
        <Text
          style={styles.stopRecord}
          onPress={this.stopRecordVideo.bind(this)}>[STOP]</Text>
      );
    }
  }
  render() {
    console.log('Render');
    return (
      <View style={styles.container}>
        <Camera
          ref={(cam) => {
            this.camera = cam;
          }}
          style={styles.preview}
          aspect={Camera.constants.Aspect.fill}
          captureMode={Camera.constants.CaptureMode.video}
          captureAudio={true}>
          {this._renderButton()}
        </Camera>
      </View>
    );
  }
  recordVideo() {
    const options = {
      totalSeconds: 15
    };
    this.setState({showRecordVideo: false});
    this.camera.capture(options)
      .then((data) => {
        console.log('----->DATA<-----', data);

      })
      .catch(err => console.error(err));
  }

  stopRecordVideo() {
    this.setState({showRecordVideo: true});
    this.camera.stopCapture();
    console.log('stopped recording');
  }
}

export default CameraRecord;
