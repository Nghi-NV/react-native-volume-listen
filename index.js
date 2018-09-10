
import React, { PureComponent } from 'react';
import { NativeModules, NativeEventEmitter, requireNativeComponent, Platform, View } from 'react-native';

const isIOS = Platform.OS === 'ios';
const { RNVolumeListen } = NativeModules;
const eventEmitter = new NativeEventEmitter(RNVolumeListen);

class VolumeListen extends PureComponent {
  static addVolumeListener(callback) {
    return eventEmitter.addListener('VolumeControllerPress', callback)
  }

  onValueChange = () => {
    console.log('onValueChange')
  }

  render() {
    if (isIOS) {
      <ReactNativeVolumeControllerSlider
        {...rest}
        onValueChange={this.onValueChange}
        style={styles.slider}
      />
    }

    return null;
  }
}

var ReactNativeVolumeControllerSlider = isIOS ? requireNativeComponent('RNVolumeListen', VolumeListen) : <View/>;
export default VolumeListen;
