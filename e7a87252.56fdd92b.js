(window.webpackJsonp=window.webpackJsonp||[]).push([[151,4,7,55,113,136],{214:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return g}));var a=n(2),r=n(6),o=(n(0),n(231)),c=n(50),s=n(49),i=n(56),l=n(48),u=n(54),d={id:"pinch-gesture",title:"Pinch gesture",sidebar_label:"Pinch gesture"},b={unversionedId:"api/gestures/pinch-gesture",id:"api/gestures/pinch-gesture",isDocsHomePage:!1,title:"Pinch gesture",description:"A continuous gesture that recognizes pinch gesture. It allows for tracking the distance between two fingers and use that information to scale or zoom your content.",source:"@site/docs/api/gestures/pinch-gesture.md",slug:"/api/gestures/pinch-gesture",permalink:"/react-native-gesture-handler/docs/next/api/gestures/pinch-gesture",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api/gestures/pinch-gesture.md",version:"current",sidebar_label:"Pinch gesture",sidebar:"docs",previous:{title:"Rotation gesture",permalink:"/react-native-gesture-handler/docs/next/api/gestures/rotation-gesture"},next:{title:"Fling gesture",permalink:"/react-native-gesture-handler/docs/next/api/gestures/fling-gesture"}},p=[{value:"Config",id:"config",children:[]},{value:"Callbacks",id:"callbacks",children:[]},{value:"Event data",id:"event-data",children:[{value:"Event attributes specific to <code>PinchGesture</code>:",id:"event-attributes-specific-to-pinchgesture",children:[]},{value:"<code>scale</code>",id:"scale",children:[]},{value:"<code>velocity</code>",id:"velocity",children:[]},{value:"<code>focalX</code>",id:"focalx",children:[]},{value:"<code>focalY</code>",id:"focaly",children:[]}]},{value:"Example",id:"example",children:[]}],h={rightToc:p};function g(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A continuous gesture that recognizes pinch gesture. It allows for tracking the distance between two fingers and use that information to scale or zoom your content.\nThe gesture ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#active"}),"activates")," when fingers are placed on the screen and change their position.\nGesture callback can be used for continuous tracking of the pinch gesture. It provides information about velocity, anchor (focal) point of gesture and scale."),Object(o.b)("p",null,"The distance between the fingers is reported as a scale factor. At the beginning of the gesture, the scale factor is 1.0. As the distance between the two fingers increases, the scale factor increases proportionally.\nSimilarly, the scale factor decreases as the distance between the fingers decreases.\nPinch gestures are used most commonly to change the size of objects or content onscreen.\nFor example, map views use pinch gestures to change the zoom level of the map."),Object(o.b)("h2",{id:"config"},"Config"),Object(o.b)(s.default,{mdxType:"BaseEventConfig"}),Object(o.b)(i.default,{mdxType:"BaseContinousEventConfig"}),Object(o.b)("h2",{id:"callbacks"},"Callbacks"),Object(o.b)(l.default,{mdxType:"BaseEventCallbacks"}),Object(o.b)(u.default,{mdxType:"BaseContinousEventCallbacks"}),Object(o.b)("h2",{id:"event-data"},"Event data"),Object(o.b)("h3",{id:"event-attributes-specific-to-pinchgesture"},"Event attributes specific to ",Object(o.b)("inlineCode",{parentName:"h3"},"PinchGesture"),":"),Object(o.b)("h3",{id:"scale"},Object(o.b)("inlineCode",{parentName:"h3"},"scale")),Object(o.b)("p",null,"The scale factor relative to the points of the two touches in screen coordinates."),Object(o.b)("h3",{id:"velocity"},Object(o.b)("inlineCode",{parentName:"h3"},"velocity")),Object(o.b)("p",null,"Velocity of the pan gesture the current moment. The value is expressed in point units per second."),Object(o.b)("h3",{id:"focalx"},Object(o.b)("inlineCode",{parentName:"h3"},"focalX")),Object(o.b)("p",null,"Position expressed in points along X axis of center anchor point of gesture"),Object(o.b)("h3",{id:"focaly"},Object(o.b)("inlineCode",{parentName:"h3"},"focalY")),Object(o.b)("p",null,"Position expressed in points along Y axis of center anchor point of gesture"),Object(o.b)(c.default,{mdxType:"BaseEventData"}),Object(o.b)("h2",{id:"example"},"Example"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-jsx"}),"const scale = useSharedValue(1);\nconst savedScale = useSharedValue(1);\n\nconst pinchGesture = Gesture.Pinch()\n  .onUpdate((e) => {\n    scale.value = savedScale.value * e.scale;\n  })\n  .onEnd(() => {\n    savedScale.value = scale.value;\n  });\n\nconst animatedStyle = useAnimatedStyle(() => ({\n  transform: [{ scale: scale.value }],\n}));\n\nreturn (\n  <GestureDetector gesture={pinchGesture}>\n    <Animated.View style={[styles.box, animatedStyle]} />\n  </GestureDetector>\n);\n")))}g.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,h=d["".concat(c,".").concat(p)]||d[p]||b[p]||o;return n?r.a.createElement(h,s(s({ref:t},l),{},{components:n})):r.a.createElement(h,s({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(231)),c={},s={unversionedId:"api/gestures/base-gesture-callbacks",id:"api/gestures/base-gesture-callbacks",isDocsHomePage:!1,title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/docs/api/gestures/base-gesture-callbacks.md",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api/gestures/base-gesture-callbacks.md",version:"current"},i=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",children:[]},{value:"<code>onBegan(callback)</code>",id:"onbegancallback",children:[]},{value:"<code>onStart(callback)</code>",id:"onstartcallback",children:[]},{value:"<code>onEnd(callback)</code>",id:"onendcallback",children:[]},{value:"<code>onTouchesDown(event, stateManager)</code>",id:"ontouchesdownevent-statemanager",children:[]},{value:"<code>onTouchesMove(event, stateManager)</code>",id:"ontouchesmoveevent-statemanager",children:[]},{value:"<code>onTouchesUp(event, stateManager)</code>",id:"ontouchesupevent-statemanager",children:[]},{value:"<code>onTouchesCancelled(event, stateManager)</code>",id:"ontouchescancelledevent-statemanager",children:[]},{value:"<code>onTouchesChange(event, stateManager)</code>",id:"ontoucheschangeevent-statemanager",children:[]}],l={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),Object(o.b)("h3",{id:"onbegancallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onBegan(callback)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onBegan")," callback."),Object(o.b)("h3",{id:"onstartcallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onStart(callback)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onStart")," callback."),Object(o.b)("h3",{id:"onendcallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onEnd(callback)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onEnd")," callback."),Object(o.b)("h3",{id:"ontouchesdownevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesDown(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),Object(o.b)("h3",{id:"ontouchesmoveevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesMove(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),Object(o.b)("h3",{id:"ontouchesupevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesUp(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),Object(o.b)("h3",{id:"ontouchescancelledevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesCancelled(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."),Object(o.b)("h3",{id:"ontoucheschangeevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesChange(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesChange")," callback which is called for every touch event."))}u.isMDXComponent=!0},49:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(231)),c={},s={unversionedId:"api/gestures/base-gesture-config",id:"api/gestures/base-gesture-config",isDocsHomePage:!1,title:"base-gesture-config",description:"Properties common to all gestures:",source:"@site/docs/api/gestures/base-gesture-config.md",slug:"/api/gestures/base-gesture-config",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-gesture-config",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api/gestures/base-gesture-config.md",version:"current"},i=[{value:"Properties common to all gestures:",id:"properties-common-to-all-gestures",children:[]},{value:"<code>enabled(value: boolean)</code>",id:"enabledvalue-boolean",children:[]},{value:"<code>shouldCancelWhenOutside(value: boolean)</code>",id:"shouldcancelwhenoutsidevalue-boolean",children:[]},{value:"<code>hitSlop(settings)</code>",id:"hitslopsettings",children:[]},{value:"<code>withRef(ref)</code>",id:"withrefref",children:[]},{value:"<code>simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)</code>",id:"simultaneouswithexternalgestureothergesture1-othergesture2-",children:[]},{value:"<code>requireExternalGestureToFail(otherGesture1, otherGesture2, ...)</code>",id:"requireexternalgesturetofailothergesture1-othergesture2-",children:[]}],l={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"properties-common-to-all-gestures"},"Properties common to all gestures:"),Object(o.b)("h3",{id:"enabledvalue-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"enabled(value: boolean)")),Object(o.b)("p",null,"Indicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",Object(o.b)("strong",{parentName:"p"},"never")," become ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#active"}),Object(o.b)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#failed"}),Object(o.b)("inlineCode",{parentName:"a"},"FAILED"))," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#cancelled"}),Object(o.b)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h3",{id:"shouldcancelwhenoutsidevalue-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside(value: boolean)")),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true")," the handler will ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#cancelled"}),"cancel")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#failed"}),"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",Object(o.b)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," except for the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/api/gestures/long-press-gesture"}),Object(o.b)("inlineCode",{parentName:"a"},"LongPressGesture"))," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/api/gestures/tap-gesture"}),Object(o.b)("inlineCode",{parentName:"a"},"TapGesture"))," which default to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h3",{id:"hitslopsettings"},Object(o.b)("inlineCode",{parentName:"h3"},"hitSlop(settings)")),Object(o.b)("p",null,"This parameter enables control over what part of the connected view area can be used to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#began"}),"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),Object(o.b)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",Object(o.b)("inlineCode",{parentName:"p"},"left"),", ",Object(o.b)("inlineCode",{parentName:"p"},"right"),", ",Object(o.b)("inlineCode",{parentName:"p"},"top")," or ",Object(o.b)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",Object(o.b)("inlineCode",{parentName:"p"},"horizontal")," or ",Object(o.b)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",Object(o.b)("inlineCode",{parentName:"p"},"left"),", ",Object(o.b)("inlineCode",{parentName:"p"},"right")," or ",Object(o.b)("inlineCode",{parentName:"p"},"top")," and ",Object(o.b)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",Object(o.b)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",Object(o.b)("inlineCode",{parentName:"p"},"right")," or ",Object(o.b)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",Object(o.b)("inlineCode",{parentName:"p"},"height")," is provided only ",Object(o.b)("inlineCode",{parentName:"p"},"top")," or ",Object(o.b)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",Object(o.b)("inlineCode",{parentName:"p"},"width")," or ",Object(o.b)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",Object(o.b)("inlineCode",{parentName:"p"},"left: 0")," and ",Object(o.b)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/view.html#props"}),"hitSlop")," property."),Object(o.b)("h3",{id:"withrefref"},Object(o.b)("inlineCode",{parentName:"h3"},"withRef(ref)")),Object(o.b)("p",null,"Sets a ref to the gesture object, allowing for interoperability with the old API."),Object(o.b)("h3",{id:"simultaneouswithexternalgestureothergesture1-othergesture2-"},Object(o.b)("inlineCode",{parentName:"h3"},"simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)")),Object(o.b)("p",null,"Adds a gesture that should be recognized simultaneously with this one."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),". ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"gesture-detector"}),Object(o.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(o.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),Object(o.b)("h3",{id:"requireexternalgesturetofailothergesture1-othergesture2-"},Object(o.b)("inlineCode",{parentName:"h3"},"requireExternalGestureToFail(otherGesture1, otherGesture2, ...)")),Object(o.b)("p",null,"Adds a relation requiring another gesture to fail, before this one can activate."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),".",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"gesture-detector"}),Object(o.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(o.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."))}u.isMDXComponent=!0},50:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(231)),c={},s={unversionedId:"api/gestures/base-gesture-event-data",id:"api/gestures/base-gesture-event-data",isDocsHomePage:!1,title:"base-gesture-event-data",description:"Event attributes common to all gestures:",source:"@site/docs/api/gestures/base-gesture-event-data.md",slug:"/api/gestures/base-gesture-event-data",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-gesture-event-data",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api/gestures/base-gesture-event-data.md",version:"current"},i=[{value:"Event attributes common to all gestures:",id:"event-attributes-common-to-all-gestures",children:[]},{value:"<code>state</code>",id:"state",children:[]},{value:"<code>numberOfPointers</code>",id:"numberofpointers",children:[]}],l={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"event-attributes-common-to-all-gestures"},"Event attributes common to all gestures:"),Object(o.b)("h3",{id:"state"},Object(o.b)("inlineCode",{parentName:"h3"},"state")),Object(o.b)("p",null,"Current ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events"}),"state")," of the handler. Expressed as one of the constants exported under ",Object(o.b)("inlineCode",{parentName:"p"},"State")," object by the library."),Object(o.b)("h3",{id:"numberofpointers"},Object(o.b)("inlineCode",{parentName:"h3"},"numberOfPointers")),Object(o.b)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}u.isMDXComponent=!0},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(231)),c={},s={unversionedId:"api/gestures/base-continous-gesture-callbacks",id:"api/gestures/base-continous-gesture-callbacks",isDocsHomePage:!1,title:"base-continous-gesture-callbacks",description:"Callbacks common to all continous gestures:",source:"@site/docs/api/gestures/base-continous-gesture-callbacks.md",slug:"/api/gestures/base-continous-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-continous-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api/gestures/base-continous-gesture-callbacks.md",version:"current"},i=[{value:"Callbacks common to all continous gestures:",id:"callbacks-common-to-all-continous-gestures",children:[]},{value:"<code>onUpdate(callback)</code>",id:"onupdatecallback",children:[]}],l={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"callbacks-common-to-all-continous-gestures"},"Callbacks common to all continous gestures:"),Object(o.b)("h3",{id:"onupdatecallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onUpdate(callback)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onUpdate")," callback."))}u.isMDXComponent=!0},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(231)),c={},s={unversionedId:"api/gestures/base-continous-gesture-config",id:"api/gestures/base-continous-gesture-config",isDocsHomePage:!1,title:"base-continous-gesture-config",description:"Properties common to all continous gestures:",source:"@site/docs/api/gestures/base-continous-gesture-config.md",slug:"/api/gestures/base-continous-gesture-config",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-continous-gesture-config",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api/gestures/base-continous-gesture-config.md",version:"current"},i=[{value:"Properties common to all continous gestures:",id:"properties-common-to-all-continous-gestures",children:[]},{value:"<code>manualActivation(value: boolead)</code>",id:"manualactivationvalue-boolead",children:[]}],l={rightToc:i};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"properties-common-to-all-continous-gestures"},"Properties common to all continous gestures:"),Object(o.b)("h3",{id:"manualactivationvalue-boolead"},Object(o.b)("inlineCode",{parentName:"h3"},"manualActivation(value: boolead)")),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true")," the handler will not activate by itself even if its activation criteria are met. Instead you can manipulate its state using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/api/gestures/state-manager"}),"state manager"),"."))}u.isMDXComponent=!0}}]);