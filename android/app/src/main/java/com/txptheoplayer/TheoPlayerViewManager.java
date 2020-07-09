package com.txptheoplayer;

import android.util.Log;
import android.view.View;
import android.widget.LinearLayout;

import com.facebook.react.bridge.ReadableMap;
import com.facebook.react.uimanager.SimpleViewManager;
import com.facebook.react.uimanager.ThemedReactContext;
import com.facebook.react.uimanager.annotations.ReactProp;
import com.theoplayer.android.api.THEOplayerView;
import com.theoplayer.android.api.source.SourceDescription;

import static android.view.ViewGroup.LayoutParams.MATCH_PARENT;

public class TheoPlayerViewManager extends SimpleViewManager<THEOplayerView> {
    private static final String TAG = TheoPlayerViewManager.class.getSimpleName();
    private static final String RCT_MODULE_NAME = "THEOplayerView";


    THEOplayerView playerView;

    @Override
    public String getName() {
        return RCT_MODULE_NAME;
    }

    @Override
    protected THEOplayerView createViewInstance(final ThemedReactContext reactContext) {
        playerView = new THEOplayerView(reactContext.getCurrentActivity());
        playerView.setLayoutParams(new LinearLayout.LayoutParams(MATCH_PARENT, MATCH_PARENT));

        return playerView;
    }

    // Setting autoplay prop
    @ReactProp(name = "autoplay", defaultBoolean = false)
    public void setAutoplay(View view, boolean autoplay) {
        playerView.getPlayer().setAutoplay(autoplay);
    }

    // Setting fullscreenOrientationCoupling prop
    @ReactProp(name = "fullscreenOrientationCoupling", defaultBoolean = false)
    public void setFullscreenOrientationCoupling(View view, boolean fullscreenOrientationCoupling) {
        playerView.getSettings().setFullScreenOrientationCoupled(fullscreenOrientationCoupling);
    }

    // Setting source prop
    @ReactProp(name = "source")
    public void setSource(View view, ReadableMap source) {
        SourceDescription sourceDescription = SourceHelper.parseSourceFromJS(source);
        if (sourceDescription != null) {
            playerView.getPlayer().setSource(sourceDescription);
        }
    }
}
