
# react-native-volume-listen

## Getting started

`$ npm install react-native-volume-listen --save`

### Mostly automatic installation

`$ react-native link react-native-volume-listen`

### Manual installation


#### iOS

1. In XCode, in the project navigator, right click `Libraries` ➜ `Add Files to [your project's name]`
2. Go to `node_modules` ➜ `react-native-volume-listen` and add `RNVolumeListen.xcodeproj`
3. In XCode, in the project navigator, select your project. Add `libRNVolumeListen.a` to your project's `Build Phases` ➜ `Link Binary With Libraries`
4. Run your project (`Cmd+R`)<

#### Android

1. Open up `android/app/src/main/java/[...]/MainActivity.java`
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

#### Windows
[Read it! :D](https://github.com/ReactWindows/react-native)

1. In Visual Studio add the `RNVolumeListen.sln` in `node_modules/react-native-volume-listen/windows/RNVolumeListen.sln` folder to their solution, reference from their app.
2. Open up your `MainPage.cs` app
  - Add `using Volume.Listen.RNVolumeListen;` to the usings at the top of the file
  - Add `new RNVolumeListenPackage()` to the `List<IReactPackage>` returned by the `Packages` method


## Usage
```javascript
import RNVolumeListen from 'react-native-volume-listen';

// TODO: What to do with the module?
RNVolumeListen;
```
  