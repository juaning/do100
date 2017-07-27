import React, { Component } from 'react';
import { Text, View, Navigator } from 'react-native';
import Camera from 'react-native-camera';
import styles from './styles';
import Routes from '../../config/routes';

class CameraRecord extends Component {
  constructor() {
    super();
    this.state = {
      showRecordVideo: true,
    };
    this.recordVideo = this.recordVideo.bind(this);
    this.stopRecordVideo = this.stopRecordVideo.bind(this);
  }
  recordVideo() {
    const options = {
      totalSeconds: 15,
    };
    this.setState({
      showRecordVideo: false,
    });
    this.camera
      .capture(options)
      .then((data) => {
        console.log('----->DATA<-----', data);
        return <Navigator initialRoute={Routes.getVideoPlayerRoute()} style={{ flex: 1 }} />;
        // this.navigator.push(Routes.getVideoPlayerRoute());
      })
      .catch(err => console.error(err));
  }

  stopRecordVideo() {
    this.setState({
      showRecordVideo: true,
    });
    this.camera.stopCapture();
    console.log('stopped recording');
  }
  renderButton() {
    if (this.state.showRecordVideo) {
      return <Text style={styles.record} onPress={this.recordVideo}>[RECORD]</Text>;
    }
    return <Text style={styles.stopRecord} onPress={this.stopRecordVideo}>[STOP]</Text>;
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
          captureAudio
        >
          {this.renderButton()}
        </Camera>
      </View>
    );
  }
}

export default CameraRecord;
