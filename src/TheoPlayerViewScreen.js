import React from 'react';
import { Dimensions, NativeModules, StyleSheet, View, Platform, ScrollView, StatusBar, TouchableOpacity, TouchableWithoutFeedback, Text, Alert } from 'react-native';
import THEOplayerView from './THEOplayerView'
import Orientation from 'react-native-orientation-locker';
import { SafeAreaInsetsContext } from 'react-native-safe-area-context';
import TheoEventEmitter from './TheoEventEmitter';


const theoEventEmitter = new TheoEventEmitter();

export default class TheoPlayerViewScreen extends React.Component {
    constructor(props) {
        super(props)
        this.listeners = {}; // Declarate listeners

        this.state = {
            landscape: false,
            currentTime: undefined
        }
    }

    componentDidMount() {
        if (!this.listeners['playing']) {
            this.listeners['playing'] = theoEventEmitter.addListener(
                'playing',
                (event) => {
                    console.log('playing')
                }
            );
        }
        if (!this.listeners['timeupdate']) {
            this.listeners['timeupdate'] = theoEventEmitter.addListener(
                'timeupdate',
                (event) => {
                    console.log("timeupdate", event);
                    this.setState({
                        currentTime: event.currentTime
                    })
                }
            );
        }
        if (!this.listeners['presentationmodechange']) {
            this.listeners['presentationmodechange'] = theoEventEmitter.addListener(
                'presentationmodechange',
                (event) => {
                    console.log('presentationmodechange', event)
                }
            );
        }
        // Orientation.lockToLandscape()  
    }
    componentWillUnmount() {

        console.log('event unmount')

        // Remove all js listeners
        Object.keys(this.listeners).forEach(key => {
            this.listeners[key].remove();
        });
        // Remove all andoird event emmiter helper listeners
        // theoEventEmitter.removeListeners();
        NativeModules.THEOplayerViewManager.stop();
    }
    toggleFullscreen = () => {
        // Only turn on fullscreen, all fullscreen logic is managed by native fullscreen
        NativeModules.THEOplayerViewManager.fullscreenOn();
        // if (Platform.OS === 'android') {
        //   this.setState({isFullscreen: true})
        // }
        this.setState({
            landscape: true
        })
    }

    render() {
        // !this.state.landscape && this.toggleFullscreen()
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
            <BaseComponent style={[styles.containerBase]}>

                <THEOplayerView
                    style={[playerStyle
                        , { width: width }
                    ]}
                    fullscreenOrientationCoupling={true}
                    autoplay={true}
                    source={
                        {
                            sources: [{
                                type: 'application/dash+xml',
                                src: 'https://travelxp.s.llnwi.net/watch1/5f1685c78281ec7f46d0f358/manifest_v2.mpd',
                            }],
                            poster: 'https://cdn.theoplayer.com/video/big_buck_bunny/poster.jpg',
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
                                "label": "English"
                            },
                            {
                                "src": "//",
                                "srcLang": "en",
                                "default": false,
                                "kind": 'subtitles',
                                "label": "No Subtitle"
                            }]
                        }
                    }
                />

                <Text style={{
                    display: "flex",
                    position: "absolute",
                    top: 10,
                    left: 10,
                    zIndex: 2
                }}>Big Buck Bunny</Text>

                <View>
                    <Text>Current Time: {this.state.currentTime}</Text>
                </View>

            </BaseComponent>
        );
    }

}

const styles = StyleSheet.create({
    containerBase: {
        flex: 1,
    },

    container: {
        flex: 1
    },

    player: {
        // backgroundColor: "black",
        // flex: 1,
        aspectRatio: 16 / 9,
    },
    phase: {
        width: Math.floor(Dimensions.get('window').width) / 3,
        borderWidth: 2,
        borderStyle: "solid",
        borderColor: "black",
        height: 40,
    },
    ui: {
        position: 'absolute',
        top: 50,
        backgroundColor: "skyblue",
        // flex: 1,
        // width: '100%',
        // height: '100%',
        zIndex: 1,
        flex: 1
    }
});
