package com.txptheoplayer;

import com.facebook.react.ReactPackage;
import com.facebook.react.bridge.NativeModule;
import com.facebook.react.bridge.ReactApplicationContext;
import com.facebook.react.uimanager.ViewManager;

import java.util.Arrays;
import java.util.Collections;
import java.util.List;

public class TheoPlayerPackage implements ReactPackage {
    private TheoPlayerViewManager theoPlayerViewManager = new TheoPlayerViewManager();

    @Override
    public List<NativeModule> createNativeModules(ReactApplicationContext reactContext) {
        return Arrays.<NativeModule>asList(
                new TheoPlayerViewModule(reactContext, theoPlayerViewManager),
                new ReactNativeEventEmitterHelper(reactContext, theoPlayerViewManager)
        );
    }

    @Override
    public List<ViewManager> createViewManagers(ReactApplicationContext reactContext) {
        return Collections.<ViewManager>singletonList(theoPlayerViewManager);
    }
}
