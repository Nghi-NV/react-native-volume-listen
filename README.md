
# react-native-volume-listen

## Getting started

`$ yarn add react-native-volume-listen`

### Mostly automatic installation

`$ react-native link react-native-volume-listen`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-volume-listen` and add `RNVolumeListen.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNVolumeListen.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainApplication.java`
  - Add `import com.reactlibrary.RNVolumeListenPackage;` to the imports at the top of the file
  - Add `new RNVolumeListenPackage()` to the list returned by the `getPackages()` method
2. Append the following lines to `android/settings.gradle`:
  	```
  	include ':react-native-volume-listen'
  	project(':react-native-volume-listen').projectDir = new File(rootProject.projectDir, 	'../node_modules/react-native-volume-listen/android')
  	```
3. Insert the following lines inside the dependencies block in `android/app/build.gradle`:
  	```
      compile project(':react-native-volume-listen')
  	```

4. Important
	- Add `import android.view.KeyEvent;` and `import com.reactlibrary.RNVolumeListenModule;` to the imports at top of the file MainActivity.java
	- Append the following lines to MainActivity class 
	```
	  @Override
    public boolean onKeyDown(int keyCode, KeyEvent event) {
        return RNVolumeListenModule.onKeyDownEvent(keyCode, event);
    }
	```

## Usage
```javascript
import React, { Component } from 'react';
import { View } from 'react-native';
import VolumeListen from 'react-native-volume-listen';

// TODO: What to do with the module?
export default class Example extends Component {
	onVolumePress = (volume) => {
		// return UP or DOWN
    console.log('onVolumePress', volume)
	}
	
	onChangeVolume = (volume) => {
		//return current volume (0 -> 1)
		console.log('onChangeVolume', volume)
	}

	render() {
		return (
			<View style={{flex: 1}}>
				<VolumeListen 
					onVolumePress={this.onVolumePress}
					onChangeVolume={this.onChangeVolume} // Only IOS
				/>
			</View>
		)
	}
}
```
  