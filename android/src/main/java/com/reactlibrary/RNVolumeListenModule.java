
package com.reactlibrary;

import android.content.Context;
import android.media.AudioManager;
import android.view.KeyEvent;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.modules.core.DeviceEventManagerModule;

public class RNVolumeListenModule extends ReactContextBaseJavaModule {

  private static ReactApplicationContext mContext;
  private static AudioManager audioManager;

  public RNVolumeListenModule(ReactApplicationContext reactContext) {
    super(reactContext);
    mContext = reactContext;
    audioManager = (AudioManager) mContext.getApplicationContext().getSystemService(Context.AUDIO_SERVICE);
  }

  @Override
  public String getName() {
    return "RNVolumeListen";
  }

  public static void sendEvent(ReactContext reactContext, String eventName, String params) {
      mContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
          .emit(eventName, params);
  }

  public static boolean onKeyDownEvent(int keyCode, KeyEvent keyEvent) {
    switch (keyCode) {
      case KeyEvent.KEYCODE_VOLUME_UP:
        sendEvent(mContext, "VolumeControllerPress", "UP");
        audioManager.adjustStreamVolume(AudioManager.STREAM_MUSIC,
                AudioManager.ADJUST_RAISE, 0);
        return true;
      case KeyEvent.KEYCODE_VOLUME_DOWN:
        sendEvent(mContext, "VolumeControllerPress", "DOWN");
        audioManager.adjustStreamVolume(AudioManager.STREAM_MUSIC,
                AudioManager.ADJUST_LOWER, 0);
        return true;
      default:
          return false;
    }
  }
}