package com.txptheoplayer;

import com.facebook.react.bridge.ReadableArray;
import com.facebook.react.bridge.ReadableMap;
import com.google.gson.Gson;
import com.theoplayer.android.api.player.track.texttrack.TextTrackKind;
import com.theoplayer.android.api.source.SourceDescription;
import com.theoplayer.android.api.source.SourceType;
import com.theoplayer.android.api.source.TextTrackDescription;
import com.theoplayer.android.api.source.TypedSource;
import com.theoplayer.android.api.source.addescription.AdDescription;
import com.theoplayer.android.api.source.addescription.GoogleImaAdDescription;
import com.theoplayer.android.api.source.addescription.THEOplayerAdDescription;
import com.theoplayer.android.api.source.drm.DRMConfiguration;
import com.theoplayer.android.api.source.drm.KeySystemConfiguration;
import com.theoplayer.android.api.source.drm.preintegration.AxinomDRMConfiguration;

import androidx.annotation.Nullable;

import org.json.JSONArray;
import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;
import java.util.Iterator;

/**
 * Source parsing helper class, because we don't support GSON object deserialization currently
 */
public class SourceHelper {

    public static SourceDescription parseSourceFromJS(ReadableMap source) {
        HashMap<String, Object> hashmap = eliminateReadables(source);
        //SourceDescription sd = new Gson().fromJson(new Gson().toJson(hashmap), SourceDescription.class);

        try {
            String json = new Gson().toJson(hashmap);
            JSONObject jsonSourceObject = new JSONObject(json);
            JSONArray jsonSources = jsonSourceObject.getJSONArray("sources");

            //typed sources
            ArrayList<TypedSource> typedSources = new ArrayList<>();
            for (int i = 0 ; i < jsonSources.length(); i++) {
                JSONObject jsonTypedSource = (JSONObject) jsonSources.get(i);

                SourceType sourceType = null;
                
                if (jsonTypedSource.getString("type").equals("application/dash+xml")) { //application/dash+xml
                    sourceType = SourceType.DASH;
                }
                JSONObject drm = null;


                if (jsonTypedSource.has("drm")) {
                    drm = jsonTypedSource.getJSONObject("drm");
                    String token = drm.getString("token");
                    String acquisitionURL = drm.getJSONObject("widevine").getString("licenseAcquisitionURL");
                    DRMConfiguration drmConfiguration = new AxinomDRMConfiguration.Builder(token)
                            .widevine(
                                    new KeySystemConfiguration(acquisitionURL)
                            )
                            .build();

                    TypedSource ts = TypedSource.Builder.typedSource().src(jsonTypedSource.getString("src"))
                            .type(sourceType).drm(drmConfiguration).build();
                    typedSources.add(ts);
                }
                else {
                    TypedSource ts = TypedSource.Builder.typedSource().src(jsonTypedSource.getString("src")).type(sourceType).build();
                    typedSources.add(ts);
                }
            }

            //testTracks
            JSONArray jsonTestTrack = jsonSourceObject.getJSONArray("textTracks");
            ArrayList<TextTrackDescription> testTracks = new ArrayList<>();
            for (int i = 0 ; i < jsonTestTrack.length(); i++) {
                JSONObject jsonTextTrackObj = (JSONObject) jsonTestTrack.get(i);
                TextTrackDescription tt = TextTrackDescription.Builder.textTrackDescription()
                        .src(jsonTextTrackObj.getString("src"))
                        .srclang(jsonTextTrackObj.getString("srcLang"))
                        .isDefault(jsonTextTrackObj.getBoolean("default"))
                        .kind(jsonTextTrackObj.getString("kind").equals("metadata") ? TextTrackKind.METADATA : TextTrackKind.SUBTITLES)
                        .label(jsonTextTrackObj.getString("label"))
                        .build();
                testTracks.add(tt);
            }

            //poster
            String poster = jsonSourceObject.optString("poster");

            //ads
            JSONArray jsonAds = jsonSourceObject.optJSONArray("ads");
            ArrayList<AdDescription> ads = new ArrayList<>();
            if (jsonAds != null) {
                for (int i = 0 ; i < jsonAds.length(); i++) {
                    JSONObject jsonAdDescription = (JSONObject) jsonAds.get(i);
                    String integration = "";
                    String integrationGoogleIma = "google-ima";

                    if (jsonAdDescription.has("integration")) {
                        integration = jsonAdDescription.getString("integration");
                    }

                    if (integration.equals(integrationGoogleIma)) {
                        ads.add(parseTheoGoogleImaAdFromJS(jsonAdDescription));
                    } else {
                        ads.add(parseTheoAdFromJS(jsonAdDescription));
                    }
                }
            }
            return SourceDescription.Builder
                    .sourceDescription(typedSources.toArray(new TypedSource[]{}))
                    .textTracks(testTracks.toArray(new TextTrackDescription[]{}))
                    .poster(poster)
                    .ads(ads.toArray(new AdDescription[]{}))
                    .build();
        } catch (JSONException e) {
            e.printStackTrace();
        }

        return null;
    }

    public static THEOplayerAdDescription parseTheoAdFromJS(ReadableMap adDescription) {
        HashMap<String, Object> hashmap = eliminateReadables(adDescription);

        try {
            String json = new Gson().toJson(hashmap);
            JSONObject jsonAdObject = new JSONObject(json);
            return parseTheoAdFromJS(jsonAdObject);
        } catch (JSONException e) {
            e.printStackTrace();
        }

        return null;
    }

    private static THEOplayerAdDescription parseTheoAdFromJS(JSONObject jsonAdDescription) throws JSONException {
        String timeOffset = "", skipOffset = "";

        if (jsonAdDescription.has("timeOffset")) {
            timeOffset = jsonAdDescription.getString("timeOffset");
        }

        if (jsonAdDescription.has("skipOffset")) {
            skipOffset = jsonAdDescription.getString("skipOffset");
        }

        return THEOplayerAdDescription.Builder
                .adDescription(jsonAdDescription.getString("sources"))
                .timeOffset(timeOffset)
                .skipOffset(skipOffset)
                .build();
    }

    private static GoogleImaAdDescription parseTheoGoogleImaAdFromJS(JSONObject jsonAdDescription) throws JSONException {
        return GoogleImaAdDescription.Builder
                .googleImaAdDescription(jsonAdDescription.getString("sources"))
                .build();
    }

    /**
     * Eliminate all the Readable* classes from the map
     * @param readableMap
     * @return
     */
    protected static HashMap<String, Object> eliminateReadables(ReadableMap readableMap){
        HashMap<String, Object> hashMap = readableMap.toHashMap();
        HashMap<String, Object> eliminatedHashMap = new HashMap<>();

        for (Map.Entry<String, Object> entry : hashMap.entrySet()) {
            Object value = entry.getValue();
            if (value != null && value instanceof ReadableMap) {
                value = eliminateReadables((ReadableMap) value);
            } else if (value != null && value instanceof ReadableArray) {
                value = eliminateReadables((ReadableArray) value);
            }
            eliminatedHashMap.put(entry.getKey(), value);
        }
        return eliminatedHashMap;
    }

    /**
     * Eliminate all the Readable* classes from the array
     * @param readableArray
     * @return
     */
    protected static ArrayList<Object> eliminateReadables(ReadableArray readableArray){
        ArrayList<Object> arrayList = readableArray.toArrayList();
        ArrayList<Object> eliminatedArrayList = new ArrayList<>();

        for (Object o : arrayList) {
            Object value = o;

            if (value != null && value instanceof ReadableMap) {
                value = eliminateReadables((ReadableMap) value);
            } else if (value != null && value instanceof ReadableArray) {
                value = eliminateReadables((ReadableArray) value);
            }
            eliminatedArrayList.add(value);
        }
        return eliminatedArrayList;
    }
}