import Foundation
import UIKit
import THEOplayerSDK

@objc(THEOplayerView)
class THEOplayerView: UIView {
    var player: THEOplayer

    init() {
    // Set delegate
      if let appDelegate = UIApplication.shared.delegate as? AppDelegate, !appDelegate.castContextSet {
        appDelegate.castContextSet = true
    }

    // Init player
    player = THEOplayer(configuration: THEOplayerConfiguration(chromeless: false))

    // Set frame
    super.init(frame: .zero)
    // Add as subview
    player.addAsSubview(of: self)
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

    // Declarate subview for video scalling
    override func layoutSubviews() {
    super.layoutSubviews()
    player.frame = frame
    player.autoresizingMask = [.flexibleBottomMargin, .flexibleHeight, .flexibleLeftMargin, .flexibleRightMargin, .flexibleTopMargin, .flexibleWidth]
    }
}
