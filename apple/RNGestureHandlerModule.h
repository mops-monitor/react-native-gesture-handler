#import <React/RCTEventEmitter.h>
#import <React/RCTUIManager.h>

#ifdef RCT_NEW_ARCH_ENABLED
#import <React/RCTInitializing.h>
#import <rngesturehandler_codegen/rngesturehandler_codegen.h>
#else
#import <React/RCTBridgeModule.h>
#endif

@interface RNGestureHandlerModule : RCTEventEmitter
#ifdef RCT_NEW_ARCH_ENABLED
                                    <NativeRNGestureHandlerModuleSpec, RCTInitializing>
#else
                                    <RCTBridgeModule>
#endif

@end
