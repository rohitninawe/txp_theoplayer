//
//  THEOplayerViewBridge.m
//  txptheoplayer
//
//  Created by mwldeveloper on 09/07/20.
//

#import "React/RCTView.h"
#import "React/RCTBridgeModule.h"
#import "React/RCTViewManager.h"

@interface RCT_EXTERN_MODULE(THEOplayerViewManager, RCTViewManager)

RCT_EXPORT_VIEW_PROPERTY(source, SourceDescription);
RCT_EXPORT_VIEW_PROPERTY(autoplay, BOOL);

@end