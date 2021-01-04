//
//  THEOplayerView+Convert.swift
//  travelxp_mobile
//
//  Created by developer on 27/10/20.
//

import THEOplayerSDK

@objc extension RCTConvert {
    @objc(TypedSource:)
    class func typedSource(_ json: [String:AnyObject]) -> TypedSource? {
        if let src = RCTConvert.nsString(json["src"]),
            let type = RCTConvert.nsString(json["type"]) {
    
            if let drm = RCTConvert.nsDictionary(json["drm"]),
                let fairplay = RCTConvert.nsDictionary(drm["fairplay"]),
                let integrationType = RCTConvert.nsString(drm["integration"]),
                let token = RCTConvert.nsString(drm["token"]){
                let licenseAcquisitionURL = RCTConvert.nsString(fairplay["licenseAcquisitionURL"]);
                let certificateURL = RCTConvert.nsString(fairplay["certificateURL"]);
                var baseDrm: THEOplayerSDK.DRMConfiguration? = nil
    
                // If you want other integration add next case and drm configurator supported by theoplayer sdk
                switch integrationType {
                    case "ezdrm":
                    baseDrm = EzdrmDRMConfiguration(licenseAcquisitionURL: licenseAcquisitionURL!, certificateURL: certificateURL!)
                    break
                    case "uplynk":
                    baseDrm = UplynkDRMConfiguration(licenseAcquisitionURL: licenseAcquisitionURL, certificateURL: certificateURL!)
                    break
                    case "axinom":
                      baseDrm = AxinomDRMConfiguration(licenseAcquisitionURL: licenseAcquisitionURL!, certificateURL: certificateURL!, token: token)
                    break
                    default:
                    break
                }
    
                return TypedSource(src: src, type: type, drm: baseDrm)
            } else {
                return TypedSource(src: src, type: type)
            }
    
        } else {
            return nil
        }
    }
    
    @objc(TypedSourceArray:)
    class func typedSourceArray(_ json: [AnyObject]) -> [TypedSource]? {
        let sources = RCTConvertArrayValue(#selector(typedSource), json)
            .compactMap { $0 as? TypedSource }
        return sources.count > 0 ? sources : nil
    }
    
    @objc(TextTrack:)
    class func textTrack(_ json: [String:AnyObject]) -> TextTrackDescription? {
        if let src = json["src"].flatMap(RCTConvert.nsString),
            let srclang = json["srcLang"].flatMap(RCTConvert.nsString) {
            return TextTrackDescription(
                src: src,
                srclang: srclang,
                isDefault: json["default"].flatMap(RCTConvert.bool),
                kind: json["kind"].flatMap(RCTConvert.nsString).flatMap {
                    TextTrackKind.init(rawValue: $0)
                },
                label: json["label"].flatMap(RCTConvert.nsString)
            )
        } else {
            return nil
        }
    }
    
    @objc(TextTrackArray:)
    class func textTrackArray(_ json: [AnyObject]) -> [TextTrackDescription]? {
        let sources = RCTConvertArrayValue(#selector(textTrack), json)
            .compactMap { $0 as? TextTrackDescription }
        return sources.count > 0 ? sources : nil
    }
  @objc(SourceDescription:)
  class func sourceDescription(_ json: [String:AnyObject]) -> SourceDescription? {
      if let sources = (json["sources"] as? [AnyObject]).flatMap(RCTConvert.typedSourceArray) {
          return SourceDescription(
              sources: sources,
              textTracks: (json["textTracks"] as? [AnyObject]).flatMap(RCTConvert.textTrackArray),
              poster: RCTConvert.nsString(json["poster"]),
              analytics: nil,
              metadata: nil
          )
      } else {
          return nil
      }
  }

}
