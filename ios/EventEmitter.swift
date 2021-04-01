//
//  EventEmitter.swift
//  txptheoplayer
//
//  Created by developer on 24/12/20.
//

import Foundation
import THEOplayerSDK

class EventEmitter {

  /// Shared Instance.
  public static var sharedInstance = EventEmitter()

  // ReactNativeEventEmitter is instantiated by React Native with the bridge.
  private static var eventEmitter: ReactNativeEventEmitter!
  private static var player: THEOplayer!

  private var listeners: [String: EventListener] = [:]

  private init() {}

  // When React Native instantiates the emitter it is registered here.
  func registerEventEmitter(eventEmitter: ReactNativeEventEmitter) {
    EventEmitter.eventEmitter = eventEmitter
  }

  func registerPlayer(player: THEOplayer) {
    EventEmitter.player = player
  }

  //dispatch one event
  func dispatch(name: String, body: Any?) {
    EventEmitter.eventEmitter.sendEvent(withName: name, body: body)
  }

  //dispatch event to all listeners
  func dispatchToAll(body: Any?) {
    for event in EventEmitter.eventEmitter.allEvents {
      EventEmitter.eventEmitter.sendEvent(withName: event, body: body)
    }
  }

  func addEventListener(eventName : String) -> Bool {

    if listeners[eventName] != nil {
      return true
    }

    switch eventName {
      case "play":
        listeners[eventName] = EventEmitter.player.addEventListener(type: PlayerEventTypes.PLAY) { event in
          print("Received \(event.type) event at \(event.currentTime)")
          EventEmitter.sharedInstance.dispatch(name: event.type, body: ["currentTime": event.currentTime])
        }
      
      case "durationchange":
        listeners[eventName] = EventEmitter.player.addEventListener(type: PlayerEventTypes.DURATION_CHANGE) { event in
          print("Received \(event.type) event. Duration \(String(describing: event.duration))")
          var duration: Double? = event.duration
          if duration != nil && duration!.isNaN {
            duration = nil
          }
          EventEmitter.sharedInstance.dispatch(name: event.type, body: ["duration": duration])
        }

      case "timeupdate":
        listeners[eventName] = EventEmitter.player.addEventListener(type: PlayerEventTypes.TIME_UPDATE) { event in
          EventEmitter.sharedInstance.dispatch(name: event.type, body: ["currentTime": event.currentTime])
        }

      case "playing":
        listeners[eventName] = EventEmitter.player.addEventListener(type: PlayerEventTypes.PLAYING) { event in
          EventEmitter.sharedInstance.dispatch(name: event.type, body: ["currentTime": event.currentTime])
        }

      case "waiting":
        listeners[eventName] = EventEmitter.player.addEventListener(type: PlayerEventTypes.WAITING) { event in
          EventEmitter.sharedInstance.dispatch(name: event.type, body: ["currentTime": event.currentTime])
        }

        case "error":
          listeners[eventName] = EventEmitter.player.addEventListener(type: PlayerEventTypes.ERROR) { event in
            EventEmitter.sharedInstance.dispatch(name: event.type, body: ["error": event.error])
        }

        case "progress":
          listeners[eventName] = EventEmitter.player.addEventListener(type: PlayerEventTypes.PROGRESS) { event in
            EventEmitter.sharedInstance.dispatch(name: event.type, body: ["currentTime": event.currentTime])
        }

        case "seeked":
          listeners[eventName] = EventEmitter.player.addEventListener(type: PlayerEventTypes.SEEKED) { event in
            EventEmitter.sharedInstance.dispatch(name: event.type, body: ["currentTime": event.currentTime])
        }
          
        case "presentationmodechange":
          listeners[eventName] = EventEmitter.player.addEventListener(type: PlayerEventTypes.PRESENTATION_MODE_CHANGE) { event in
            print("Received \(event.type) event at \(event.presentationMode)")
            EventEmitter.sharedInstance.dispatch(name: event.type, body: ["currentMode": event.presentationMode])
          }

      default:
      return false
    }

    return true
  }

  func removeAllEventListeners() {
    for (eventName, listener) in listeners {
      switch eventName {
      case "play":
        EventEmitter.player.removeEventListener(type: PlayerEventTypes.PLAY, listener: listener)

      case "durationchange":
        EventEmitter.player.removeEventListener(type: PlayerEventTypes.DURATION_CHANGE, listener: listener)

      case "timeupdate":
        EventEmitter.player.removeEventListener(type: PlayerEventTypes.TIME_UPDATE, listener: listener)

      case "playing":
        EventEmitter.player.removeEventListener(type: PlayerEventTypes.PLAYING, listener: listener)
      
      case "waiting":
        EventEmitter.player.removeEventListener(type: PlayerEventTypes.WAITING, listener: listener)

      case "error":
        EventEmitter.player.removeEventListener(type: PlayerEventTypes.ERROR, listener: listener)

      case "progress":
        EventEmitter.player.removeEventListener(type: PlayerEventTypes.PROGRESS, listener: listener)

      case "seeked":
        EventEmitter.player.removeEventListener(type: PlayerEventTypes.SEEKED, listener: listener)

      case "presentationmodechange":
        EventEmitter.player.removeEventListener(type: PlayerEventTypes.PRESENTATION_MODE_CHANGE, listener: listener)

      default:
        break
      }
    }
    listeners = [:]
  }
}


