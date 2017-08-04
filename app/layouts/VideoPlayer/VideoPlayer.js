import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { AlertIOS, Platform, TouchableOpacity, View, Text } from 'react-native';
import Video from 'react-native-video';
import styles from './styles';

class VideoPlayer extends Component {
  constructor(props) {
    super(props);
    this.onLoad = this.onLoad.bind(this);
    this.onProgress = this.onProgress.bind(this);
    this.onBuffer = this.onBuffer.bind(this);
  }
  state = {
    rate: 1,
    volume: 1,
    muted: false,
    resizeMode: 'contain',
    duration: 0.0,
    currentTime: 0.0,
    controls: false,
    paused: true,
    skin: 'custom',
    ignoreSlientSwitch: null,
    isBuffering: false,
  };
  onLoad(data) {
    this.setState({ duration: data.duration });
  }
  onProgress(data) {
    this.setState({ currentTime: data.currentTime });
  }
  onBuffer({ isBuffering }) {
    this.setState({ isBuffering });
  }
  getCurrentTimePercentage() {
    if (this.state.currentTime > 0) {
      return parseFloat(this.state.currentTime) / parseFloat(this.state.duration);
    }
    return 0;
  }
  renderSkinControl(skin) {
    const isSelected = this.state.skin === skin;
    const selectControls = skin === 'native' || skin === 'embed';
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({
            controls: selectControls,
            skin,
          });
        }}
      >
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {skin}
        </Text>
      </TouchableOpacity>
    );
  }
  renderRateControl(rate) {
    const isSelected = this.state.rate === rate;
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ rate });
        }}
      >
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {rate}x
        </Text>
      </TouchableOpacity>
    );
  }
  renderResizeModeControl(resizeMode) {
    const isSelected = this.state.resizeMode === resizeMode;
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ resizeMode });
        }}
      >
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {resizeMode}
        </Text>
      </TouchableOpacity>
    );
  }
  renderVolumeControl(volume) {
    const isSelected = this.state.volume === volume;
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ volume });
        }}
      >
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {volume * 100}%
        </Text>
      </TouchableOpacity>
    );
  }
  renderIgnoreSilentSwitchControl(ignoreSilentSwitch) {
    const isSelected = this.state.ignoreSilentSwitch === ignoreSilentSwitch;
    return (
      <TouchableOpacity
        onPress={() => {
          this.setState({ ignoreSilentSwitch });
        }}
      >
        <Text style={[styles.controlOption, { fontWeight: isSelected ? 'bold' : 'normal' }]}>
          {ignoreSilentSwitch}
        </Text>
      </TouchableOpacity>
    );
  }
  renderCustomSkin(uri) {
    const flexCompleted = this.getCurrentTimePercentage() * 100;
    const flexRemaining = (1 - this.getCurrentTimePercentage()) * 100;
    return (
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.fullScreen}
          onPress={() => {
            this.setState({ paused: !this.state.paused });
          }}
        >
          <Video
            source={{ uri }}
            style={styles.fullScreen}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            ignoreSilentSwitch={this.state.ignoreSilentSwitch}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onBuffer={this.onBuffer}
            onProgress={this.onProgress}
            onEnd={() => {
              AlertIOS.alert('Done!');
            }}
            repeat={false}
          />
        </TouchableOpacity>
        <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View style={styles.skinControl}>
              {this.renderSkinControl('custom')}
              {this.renderSkinControl('native')}
              {this.renderSkinControl('embed')}
            </View>
          </View>
          <View style={styles.generalControls}>
            <View style={styles.rateControl}>
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(2.0)}
            </View>
            <View style={styles.volumeControl}>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>
            <View style={styles.resizeModeControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
          </View>
          <View style={styles.generalControls}>
            {Platform.OS === 'ios'
              ? <View style={styles.ignoreSilentSwitchControl}>
                {this.renderIgnoreSilentSwitchControl('ignore')}
                {this.renderIgnoreSilentSwitchControl('obey')}
              </View>
              : null}
          </View>
          <View style={styles.trackingControls}>
            <View style={styles.progress}>
              <View style={[styles.innerProgressCompleted, { flex: flexCompleted }]} />
              <View style={[styles.innerProgressRemaining, { flex: flexRemaining }]} />
            </View>
          </View>
        </View>
      </View>
    );
  }
  renderNativeSkin(uri) {
    const videoStyle = this.state.skin === 'embed' ? styles.nativeVideoControls : styles.fullScreen;
    return (
      <View style={styles.container}>
        <View style={styles.fullScreen}>
          <Video
            source={{ uri }}
            style={videoStyle}
            rate={this.state.rate}
            paused={this.state.paused}
            volume={this.state.volume}
            muted={this.state.muted}
            ignoreSilentSwitch={this.state.ignoreSilentSwitch}
            resizeMode={this.state.resizeMode}
            onLoad={this.onLoad}
            onBuffer={this.onBuffer}
            onProgress={this.onProgress}
            onEnd={() => {
              AlertIOS.alert('Done!');
            }}
            repeat={false}
            controls={this.state.controls}
          />
        </View>
        <View style={styles.controls}>
          <View style={styles.generalControls}>
            <View style={styles.skinControl}>
              {this.renderSkinControl('custom')}
              {this.renderSkinControl('native')}
              {this.renderSkinControl('embed')}
            </View>
          </View>
          <View style={styles.generalControls}>
            <View style={styles.rateControl}>
              {this.renderRateControl(0.5)}
              {this.renderRateControl(1.0)}
              {this.renderRateControl(2.0)}
            </View>
            <View style={styles.volumeControl}>
              {this.renderVolumeControl(0.5)}
              {this.renderVolumeControl(1)}
              {this.renderVolumeControl(1.5)}
            </View>
            <View style={styles.resizeModeControl}>
              {this.renderResizeModeControl('cover')}
              {this.renderResizeModeControl('contain')}
              {this.renderResizeModeControl('stretch')}
            </View>
          </View>
          <View style={styles.generalControls}>
            {Platform.OS === 'ios'
              ? <View style={styles.ignoreSilentSwitchControl}>
                {this.renderIgnoreSilentSwitchControl('ignore')}
                {this.renderIgnoreSilentSwitchControl('obey')}
              </View>
              : null}
          </View>
        </View>
      </View>
    );
  }
  render() {
    const { params } = this.props.navigation.state;
    const { uri } = params;
    return this.state.controls ? this.renderNativeSkin(uri) : this.renderCustomSkin(uri);
  }
}

export default VideoPlayer;

VideoPlayer.propTypes = {
  navigation: PropTypes.object,
};
