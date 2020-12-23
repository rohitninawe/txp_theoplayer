package com.txptheoplayer;

import android.content.Intent;
import android.util.Log;

import com.facebook.react.bridge.Callback;
import com.facebook.react.bridge.Promise;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.bridge.ReactContextBaseJavaModule;
import com.facebook.react.bridge.ReactMethod;
import com.facebook.react.bridge.ReadableMap;
import com.theoplayer.android.api.fullscreen.FullScreenChangeListener;
import com.theoplayer.android.api.player.RequestCallback;
import com.theoplayer.android.api.source.SourceDescription;
import com.theoplayer.android.api.source.addescription.THEOplayerAdDescription;

import java.util.List;

public class TheoPlayerViewModule extends ReactContextBaseJavaModule {

    private static final String TAG = TheoPlayerViewModule.class.getSimpleName();

    private static final String RCT_MODULE_NAME = "THEOplayerViewManager";
    private TheoPlayerViewManager theoPlayerViewManager;

    private boolean fullscreenConfigured = false;

    TheoPlayerViewModule(ReactApplicationContext reactContext, TheoPlayerViewManager theoPlayerViewManager) {
        super(reactContext);
        this.theoPlayerViewManager = theoPlayerViewManager;
    }

    private void configureTHEOplayer() {
        fullscreenConfigured = true;

        theoPlayerViewManager.playerView.getFullScreenManager().setFullscreenActivity(CustomTheoFullScreen.class);
        theoPlayerViewManager.playerView.getFullScreenManager().addFullScreenChangeListener(new FullScreenChangeListener() {

            @Override
            public void onEnterFullScreen() {
                Log.i(TAG, "Event: FULL_SCREEN_ENTERED");
            }

            @Override
            public void onExitFullScreen() {
                Log.i(TAG, "Event: FULL_SCREEN_EXITED");
            }

        });
    }

    @Override
    public String getName() {
        return RCT_MODULE_NAME;
    }

    @ReactMethod
    public void getDurationWithCallback(Callback errorCallback, Callback successCallback) {
        successCallback.invoke(theoPlayerViewManager.playerView.getPlayer().getDuration());
    }

    @ReactMethod
    public void getDuration(Promise promise) {
        promise.resolve(theoPlayerViewManager.playerView.getPlayer().getDuration());
    }

    @ReactMethod
    public void stop() {
        theoPlayerViewManager.playerView.getPlayer().stop();
    }

    @ReactMethod
    public void play() {
        theoPlayerViewManager.playerView.getPlayer().play();
    }

    @ReactMethod
    public void pause() {
        theoPlayerViewManager.playerView.getPlayer().pause();
    }

    @ReactMethod
    public void fullscreenOn() {
        if (!fullscreenConfigured) {
            configureTHEOplayer();
        }

        theoPlayerViewManager.playerView.getContext().startActivity(new Intent(theoPlayerViewManager.playerView.getContext(), CustomTheoFullScreen.class));
    }

    @ReactMethod
    public void destroy() {
        theoPlayerViewManager.playerView.onDestroy();
    }

    @ReactMethod
    public void setSource(ReadableMap source) {
        SourceDescription sourceDescription = SourceHelper.parseSourceFromJS(source);
        if (sourceDescription != null) {
            theoPlayerViewManager.playerView.getPlayer().setSource(sourceDescription);
        }
    }

    @ReactMethod
    public void getCurrentTime(final Promise promise) {
        theoPlayerViewManager.playerView.getPlayer().requestCurrentTime(new RequestCallback<Double>() {
            @Override
            public void handleResult(Double aDouble) {
                promise.resolve(aDouble);
            }
        });
    }

    @ReactMethod
    public void setCurrentTime(double aDouble) {
        theoPlayerViewManager.playerView.getPlayer().setCurrentTime(aDouble);
    }

}