
#ifdef RCT_NEW_ARCH_ENABLED
#import "RNDbInspectorSpec.h"

@interface DbInspector : NSObject <NativeDbInspectorSpec>
#else
#import <React/RCTBridgeModule.h>

@interface DbInspector : NSObject <RCTBridgeModule>
#endif

@end
