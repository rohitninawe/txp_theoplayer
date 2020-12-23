package com.txptheoplayer;

import android.util.DisplayMetrics;
import android.util.Log;
import android.view.View;
import android.widget.LinearLayout;
import androidx.annotation.Nullable;

import com.facebook.react.bridge.Arguments;
import com.facebook.react.bridge.LifecycleEventListener;
import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.WritableMap;
import com.facebook.react.common.MapBuilder;
import com.facebook.react.modules.core.DeviceEventManagerModule;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.facebook.react.uimanager.events.RCTEventEmitter;

import com.theoplayer.android.api.THEOplayerView;
import com.theoplayer.android.api.THEOplayerConfig;
import com.theoplayer.android.api.event.EventListener;
import com.theoplayer.android.api.event.player.DestroyEvent;
import com.theoplayer.android.api.event.player.PauseEvent;
import com.theoplayer.android.api.event.player.PlayEvent;
import com.theoplayer.android.api.event.player.PlayerEventTypes;
import com.theoplayer.android.api.event.player.PresentationModeChange;
import com.theoplayer.android.api.event.player.SeekedEvent;
import com.theoplayer.android.api.source.SourceDescription;

import java.lang.reflect.Field;
import java.util.List;
import java.util.Map;

import static android.view.ViewGroup.LayoutParams.MATCH_PARENT;

public class TheoPlayerViewManager extends SimpleViewManager<THEOplayerView> implements LifecycleEventListener {

    //static
    private static final String TAG = TheoPlayerViewManager.class.getSimpleName();
    private static final String RCT_MODULE_NAME = "THEOplayerView";

    private enum InternalAndGlobalEventPair {
        onSeek("onSeekEventInternal", "onSeek"),
        onPlay("onPlayEventInternal", "onPlay"),
        onPause("onPauseEventInternal", "onPause"),
        onDestroy("onDestroyEventInternal", "onDestroy"),
        onPresentationModeChange("onPresentationModeChangeEventInternal", "onPresentationModeChange");

        String internalEvent;
        String globalEvent;

        InternalAndGlobalEventPair(String internalEvent, String globalEvent) {
            this.internalEvent = internalEvent;
            this.globalEvent = globalEvent;
        }
    }

    THEOplayerView playerView;

    @Override
    public String getName() {
        return RCT_MODULE_NAME;
    }

    @Override
    protected THEOplayerView createViewInstance(final ThemedReactContext reactContext) {
        /*
          If you want to use Google Ima set googleIma in theoplayer config and add `integration: "google-ima"`
          in js ads source declaration.
          You can declarate in THEOplayer configuration builder default js and css paths by using cssPaths() and jsPaths()
        */
        THEOplayerConfig playerConfig = new THEOplayerConfig.Builder()
                // .googleIma(true)
//                .chromeless(false)
//                .defaultCss(true)
                .jsPaths("file:///android_asset/js/theoplayer.js")
                .cssPaths("file:///android_asset/css/theoplayer.css")
                .license("sZP7IYe6T6fi0oat0l0c0mzZ3uBzFSaLIlb-TDB_C6k13u1K0Dx6Cl5L0le6FOPlUY3zWokgbgjNIOf9flR_0o0oIlaZFD313lC-3QhZ3Oz_0LUKFSxg0l413lRoTD3g36fVfK4_bQgZCYxNWoryIQXzImf90SCL3Lht3Sfi0u5i0Oi6Io4pIYP1UQgqWgjeCYxgflEc3l5o0L5iTuR_0LCtFOPeWok1dDrLYtA1Ioh6TgV6v6PUFOPeWok1dDrLYt3qUYPlImf9DZfJfgzVfG3edt06TgV6CDrebKjNIOPUFOPLIDreYog-bwPgbt3NWo_6TGxZUD4j")
                .build();

        playerView = new THEOplayerView(reactContext.getCurrentActivity(), playerConfig);
        playerView.setLayoutParams(new LinearLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT));
        // Evaluate java script(init player)
        playerView.evaluateJavaScript("init({player: player})", null);
        addPropertyChangeListeners(reactContext);
        reactContext.addLifecycleEventListener(this);

        return playerView;
    }

    private void addPropertyChangeListeners(final ThemedReactContext reactContext) {
        playerView.getPlayer().addEventListener(PlayerEventTypes.SEEKED, new EventListener<SeekedEvent>() {
            @Override
            public void handleEvent(final SeekedEvent seekedEvent) {
                Log.d(TAG, "seeked native: " + seekedEvent);
                WritableMap event = Arguments.createMap();
                event.putDouble("currentTime", seekedEvent.getCurrentTime());
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        playerView.getId(),
                        InternalAndGlobalEventPair.onSeek.internalEvent,
                        event);
            }
        });

        playerView.getPlayer().addEventListener(PlayerEventTypes.PLAY, new EventListener<PlayEvent>() {
            @Override
            public void handleEvent(final PlayEvent playEvent) {
                Log.d(TAG, "play native");
                WritableMap event = Arguments.createMap();

                //local property change
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        playerView.getId(),
                        InternalAndGlobalEventPair.onPlay.internalEvent,
                        event);
            }
        });

        playerView.getPlayer().addEventListener(PlayerEventTypes.PAUSE, new EventListener<PauseEvent>() {
            @Override
            public void handleEvent(final PauseEvent pauseEvent) {
                Log.d(TAG, "pause native");
                WritableMap event = Arguments.createMap();
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        playerView.getId(),
                        InternalAndGlobalEventPair.onPause.internalEvent,
                        event);
            }
        });


        playerView.getPlayer().addEventListener(PlayerEventTypes.PRESENTATIONMODECHANGE, new EventListener<PresentationModeChange>() {
            @Override
            public void handleEvent(final PresentationModeChange presentationModeChangeEvent) {
                DisplayMetrics displayMetrics = new DisplayMetrics();
                reactContext.getCurrentActivity().getWindowManager().getDefaultDisplay().getMetrics(displayMetrics);
                // Orientation detection
                int orientation = reactContext.getResources().getConfiguration().orientation;

                if(playerView.getFullScreenManager().isFullScreen()) {
                    /*
                        If needed set additional functionality when fullscreen is on, examples below
                    */
                    //playerView.getPlayer().pause();
                    //playerView.getPlayer().play();
                } else {
                    /*
                        If needed set additional functionality when fullscreen is on, examples below
                    */
                    //playerView.getPlayer().pause();
                    //playerView.getPlayer().play();
                }

                reactContext.getJSModule(DeviceEventManagerModule.RCTDeviceEventEmitter.class)
                        .emit(InternalAndGlobalEventPair.onPresentationModeChange.internalEvent, playerView.getFullScreenManager().isFullScreen());
            }
        });

        playerView.getPlayer().addEventListener(PlayerEventTypes.DESTROY, new EventListener<DestroyEvent>() {
            @Override
            public void handleEvent(final DestroyEvent destroyEvent) {
                Log.d(TAG, "destroy native");
                WritableMap event = Arguments.createMap();
                reactContext.getJSModule(RCTEventEmitter.class).receiveEvent(
                        playerView.getId(),
                        InternalAndGlobalEventPair.onDestroy.internalEvent,
                        event);
            }
        });

    }

    @ReactProp(name = "autoplay", defaultBoolean = false)
    public void setAutoplay(View view, boolean autoplay) {
        playerView.getPlayer().setAutoplay(autoplay);
    }

    @ReactProp(name = "fullscreenOrientationCoupling", defaultBoolean = false)
    public void setFullscreenOrientationCoupling(View view, boolean fullscreenOrientationCoupling) {
        playerView.getSettings().setFullScreenOrientationCoupled(fullscreenOrientationCoupling);
    }

    @ReactProp(name = "source")
    public void setSource(View view, ReadableMap source) {
        SourceDescription sourceDescription = com.txptheoplayer.SourceHelper.parseSourceFromJS(source);
        if (sourceDescription != null) {
            playerView.getPlayer().setSource(sourceDescription);
        }
    }

    public Map getExportedCustomBubblingEventTypeConstants() {
        return MapBuilder.builder()
                .put(
                        InternalAndGlobalEventPair.onSeek.internalEvent,
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", InternalAndGlobalEventPair.onSeek.globalEvent)))
                .put(
                        InternalAndGlobalEventPair.onPlay.internalEvent,
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", InternalAndGlobalEventPair.onPlay.globalEvent)))
                .put(
                        InternalAndGlobalEventPair.onPause.internalEvent,
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", InternalAndGlobalEventPair.onPause.globalEvent)))
                .put(
                        InternalAndGlobalEventPair.onDestroy.internalEvent,
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", InternalAndGlobalEventPair.onDestroy.globalEvent)))
                .put(
                        InternalAndGlobalEventPair.onPresentationModeChange.internalEvent,
                        MapBuilder.of(
                                "phasedRegistrationNames",
                                MapBuilder.of("bubbled", InternalAndGlobalEventPair.onPresentationModeChange.globalEvent)))
                .build();
    }

    //lifecycle events
    @Override
    public void onHostResume() {
        playerView.onResume();
    }

    @Override
    public void onHostPause() {
        playerView.onPause();
    }

    @Override
    public void onHostDestroy() {
        playerView.onDestroy();
    }

}