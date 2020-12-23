import React from 'react';
import { Dimensions, NativeModules, StyleSheet, View, Platform, ScrollView, StatusBar } from 'react-native';
import THEOplayerView from './THEOplayerView'
import Orientation from 'react-native-orientation-locker';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';



export default class TheoPlayerViewScreen extends React.Component {
    componentDidMount(){
        // Orientation.lockToLandscape()  
        this.toggleFullscreen()
    }
    toggleFullscreen = () => {
        // Only turn on fullscreen, all fullscreen logic is managed by native fullscreen
        NativeModules.THEOplayerViewManager.fullscreenOn();
        // if (Platform.OS === 'android') {
        //   this.setState({isFullscreen: true})
        // }
      }
    render() {
         /*
    Problem on android fullscreen change with theoplayer scaling when ScrollView component is set
            */
        let BaseComponent = View;

        let width = Math.floor(Dimensions.get('window').width);
        let height = Math.floor(Dimensions.get('window').height);

        /*
        If there are scaling issues during the change of the fullscreen remove 'aspectRatio' & set player height
        */
        let playerStyle = {
            ...styles.player,
        };

        if (Platform.OS === 'android') {
            // playerStyle.width = Math.min(width, height) + 1;
        } else {
            // playerStyle.width = Math.min(width, height) + 1;
            BaseComponent = View;
        }
        return (
            <SafeAreaInsetsContext.Consumer>
            {insets =>
              <View style={styles.container, { marginTop: 0}} >
                <StatusBar barStyle="dark-content" hidden={true} backgroundColor={'black'} />
            <BaseComponent style={[styles.containerBase,{ marginTop: 0}]}>

                    <THEOplayerView
                       style={[playerStyle, { width: width, height: height }]}
                        fullscreenOrientationCoupling={true}
                        autoplay={true}
                        source={
                            {
                                sources: [{
                                    type: 'application/dash+xml', //application/x-mpegurl
                                    src: 'https://travelxp.s.llnwi.net/5ef1b82f46c9074616123027/v3/manifest_dash.mpd', //https://travelxp.s.llnwi.net/5ef1b82f46c9074616123027/v4/manifest_hd.mpd
                                    // drm: drmConfiguration
                                  }],
                                  poster: 'https://cdn.theoplayer.com/video/sintel/poster.jpg',
                                  "textTracks": [{
                                    "src": "https://d22iam2jzs2cqx.cloudfront.net/5ef1b82f46c9074616123027/v4/sprites/sprite.vtt",
                                    "srcLang": "en",
                                    "default": true,
                                    "kind": "metadata",
                                    "label": "thumbnails"
                                  },
                                  {
                                    "src": "https://travelxp.s.llnwi.net/5ef1b82f46c9074616123027/subtitle/4K_Travelxp_Screener.vtt",
                                    "srcLang": "English",
                                    "default": true,
                                    "kind": 'subtitles',
                                    "label": "ENG"
                                  }]
                            }

                        }
                    />
            </BaseComponent>
            </View>}
      </SafeAreaInsetsContext.Consumer>
        );
    }

    componentWillUnmount() {
        NativeModules.THEOplayerViewManager.stop();
    }
}

const styles = StyleSheet.create({
    containerBase: {
        flex: 1,
    },

    container: {
        flex: 1,
    },

    player: {
        backgroundColor: "black",
    },
});
