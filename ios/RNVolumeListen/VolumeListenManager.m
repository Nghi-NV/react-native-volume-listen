#import "VolumeListenManager.h"
#import "VolumeListen.h"

@implementation VolumeListenManager
RCT_EXPORT_MODULE()

- (UIView *)view {
    return [[VolumeListen alloc] init];
}

RCT_EXPORT_VIEW_PROPERTY(minimumTrackTintColor, UIColor);
RCT_EXPORT_VIEW_PROPERTY(maximumTrackTintColor, UIColor);
RCT_EXPORT_VIEW_PROPERTY(thumbTintColor, UIColor);
RCT_EXPORT_VIEW_PROPERTY(onValueChange, RCTBubblingEventBlock);
RCT_EXPORT_VIEW_PROPERTY(thumbImage, UIImage);
RCT_EXPORT_VIEW_PROPERTY(showsRouteButton, BOOL);
RCT_CUSTOM_VIEW_PROPERTY(thumbSize, RCTthumbSize, VolumeListen) {
  NSDictionary *thumbSize = (NSDictionary *) json;
  
  [view setThumbWidth:[thumbSize[@"width"] floatValue]];
  [view setThumbHeight:[thumbSize[@"height"] floatValue]];
  
  [view setThumb];
}

@end
