//
//  THEOplayerView.swift
//  travelxp_mobile
//
//  Created by developer on 27/10/20.
//

import Foundation
import UIKit
import THEOplayerSDK
import os.log

@objc(THEOplayerView)
class THEOplayerView: UIView {
    var player: THEOplayer
    var onSeek: RCTBubblingEventBlock?
    var onPlay: RCTBubblingEventBlock?
    var onPause: RCTBubblingEventBlock?
    var onPresentationModeChange: RCTBubblingEventBlock?

    // Declarate listeners
    private var listeners: [String: EventListener] = [:]

    init() {
    // Set delegate
    if let appDelegate = UIApplication.shared.delegate as? AppDelegate, !appDelegate.castContextSet {
        appDelegate.castContextSet = true
      
    }

    // Init player
//      player = THEOplayer(configuration: THEOplayerConfiguration(chromeless: false, pip: nil))
      let scripthPaths = [Bundle.main.path(forResource: "theoplayerjs", ofType: "js")].compactMap { $0 }
      let stylePaths = [Bundle.main.path(forResource: "theoplayercss", ofType: "css")].compactMap { $0 }
      let playerConfig = THEOplayerConfiguration(
          chromeless: false,
          cssPaths: stylePaths,
          jsPaths: scripthPaths,
          pip: nil,
          license: "sZP7IYe6T6f_0D4K0ShZ3Oke3KBrFSxg3u5-TS0tTmzkTuUgTDXK0Qfo3Da6FOPlUY3zWokgbgjNIOf9flR_0o0oIlaZFD313lC-3QhZ3Oz_0LUKFSxg0l413lRoTD3g36fVfK4_bQgZCYxNWoryIQXzImf90SCL3Lht3Sfi0u5i0Oi6Io4pIYP1UQgqWgjeCYxgflEc3l5o0L5i3LCoTSbzFOPeWok1dDrLYtA1Ioh6TgV6v6PUFOPeWok1dDrLYt3qUYPlImf9DZfJfgzVfG3edt06TgV6dDjLfgzVfG3gWKxydDkibK4LbogqW6f9UwPkIYz"
          )
      
      player = THEOplayer(configuration: playerConfig)
      /*
         Evaluate main script function declarated in theoplayer.js(custom js)
         You can init pure js code without file by evaluateJavaScript.
      */
      player.evaluateJavaScript("init({player: player})")
      
    //register player on event emitter
    EventEmitter.sharedInstance.registerPlayer(player: player)

    // Set frame
    super.init(frame: .zero)
    // Add as subview
    player.addAsSubview(of: self)
    self.player.presentationMode = .inline
    self.player.fullscreen.setSupportedInterfaceOrientations(supportedInterfaceOrientations: .landscape)
      
    // added seekListener
    let seekListener = player.addEventListener(type: PlayerEventTypes.SEEKED) { [unowned self] event in
        print("Received \(event.type) event at \(event.currentTime)")
        guard self.onSeek != nil else {
          return
        }

        self.onSeek!(["currentTime": event.currentTime])
      }
      listeners[PlayerEventTypes.SEEKED.name] = seekListener

      // added playListener
      let playListener = player.addEventListener(type: PlayerEventTypes.PLAY) { [unowned self] event in
        print("Received \(event.type) event at \(event.currentTime)")
        guard self.onPlay != nil else {
          return
        }

        self.onPlay!([:])
      }
      listeners[PlayerEventTypes.PLAY.name] = playListener

      // added pauseListener
      let pauseListener = player.addEventListener(type: PlayerEventTypes.PAUSE) { [unowned self] event in
        print("Received \(event.type) event at \(event.currentTime)")
        guard self.onPause != nil else {
          return
        }

        self.onPause!([:])
      }
      listeners[PlayerEventTypes.PAUSE.name] = pauseListener
      
      // added presentationModeListener
      let presentationModeListener = player.addEventListener(type: PlayerEventTypes.PRESENTATION_MODE_CHANGE) { [unowned self] event in
        print("Received \(event.type) event at \(event.presentationMode)")
        guard self.onPresentationModeChange != nil else {
          return
        }

        self.onPresentationModeChange!([:])
      }
      listeners[PlayerEventTypes.PRESENTATION_MODE_CHANGE.name] = presentationModeListener
    
    }

    required init?(coder aDecoder: NSCoder) {
    fatalError("init(coder:) has not been implemented")
    }

    // View property to set source which uses SourceDescription(check view+convert)
    @objc(setSource:) func setSource(source: SourceDescription) {
    player.source = source
    }

    // View property to set autoplay
    @objc(setAutoplay:) func setAutoplay(autoplay: Bool) {
    player.autoplay = autoplay
    }

  // View property to set fullScreen
  @objc(setFullscreenOrientationCoupling:) func setFullscreenOrientationCoupling(fullscreenOrientationCoupling: Bool) {
    player.fullscreenOrientationCoupling = fullscreenOrientationCoupling
  }
  
  // View property to set seek
  @objc(setOnSeek:) func setOnSeek(seek: @escaping RCTBubblingEventBlock) {
    onSeek = seek
  }
  
  // View property to set onPlay
  @objc(setOnPlay:) func setOnPlay(play: @escaping RCTBubblingEventBlock) {
    onPlay = play
  }
  
  // View property to set onPause
  @objc(setOnPause:) func setOnPause(pause: @escaping RCTBubblingEventBlock) {
    onPause = pause
  }
  
  // View property to set onPause
  @objc(setOnPresentationModeChange:) func setOnPresentationModeChange(modeChange: @escaping RCTBubblingEventBlock) {
    onPresentationModeChange = modeChange
  }

  // Declarate subview for video scalling
  override func layoutSubviews() {
  super.layoutSubviews()
  player.frame = frame
  player.autoresizingMask = [.flexibleBottomMargin, .flexibleHeight, .flexibleLeftMargin, .flexibleRightMargin, .flexibleTopMargin, .flexibleWidth]
  }
  
  deinit {
     for (eventName, listener) in listeners {
       switch eventName {
       case "play":
         player.removeEventListener(type: PlayerEventTypes.PLAY, listener: listener)

       case "pause":
         player.removeEventListener(type: PlayerEventTypes.PAUSE, listener: listener)

       case "seeked":
         player.removeEventListener(type: PlayerEventTypes.SEEKED, listener: listener)

       default:
         break
       }
     }
   }
  
  
}
