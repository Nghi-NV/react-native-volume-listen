/* @flow */
'use strict';

import React, { PureComponent } from 'react';
import { requireNativeComponent, Platform, View, NativeModules, NativeEventEmitter } from 'react-native';

const isIOS = Platform.OS === 'ios';
const { RNVolumeListen } = NativeModules;
const eventEmitter = isIOS ? undefined : new NativeEventEmitter(RNVolumeListen);

class VolumeListen extends PureComponent<Props> {
  constructor(props) {
    super(props);
    this.volume = null;
  }

  componentDidMount() {
    if (!isIOS) {
      this.addVolumeListener = eventEmitter.addListener('VolumeControllerPress', this.onVolumePress)
    }
  }

  componentWillUnmount() {
    if (!isIOS) {
      eventEmitter.removeListener(this.addVolumeListener)
    }
  }

  onVolumePress = (volumeKey) => {
    this.props.onVolumePress && this.props.onVolumePress(volumeKey);
  }

  onValueChange = ({ nativeEvent }) => {
    let newVolume = nativeEvent.value;
    this.props.onChangeVolume && this.props.onChangeVolume(newVolume);

    if (!this.volume) {
      this.volume = newVolume;
      return;
    }

    if (newVolume > this.volume) {
      this.props.onVolumePress && this.props.onVolumePress('UP');
    } else {
      this.props.onVolumePress && this.props.onVolumePress('DOWN');
    }

    this.volume = newVolume;
  }

  render() {
    if (isIOS) {
      return (
        <RNVolumeView
          onValueChange={this.onValueChange}
          style={{ width: 0, height: 0, position: 'absolute' }}
          thumbTintColor='transparent'
          thumbSize={{ width: 0, height: 0 }}
        />
      );
    }

    return null;
  }

}

interface Props {
  onVolumePress: (volume: 'UP' | 'DOWN') => void;
  onChangeVolume: (volume: number) => void;
}

const RNVolumeView = isIOS ? requireNativeComponent('VolumeListen', VolumeListen) : View;

export default VolumeListen;
