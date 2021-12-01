(window.webpackJsonp=window.webpackJsonp||[]).push([[158,4,7,55,113,136],{220:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var a=n(2),r=n(6),o=(n(0),n(231)),c=n(50),i=n(49),s=n(56),l=n(48),u=n(54),d={id:"force-touch-gesture",title:"Force touch gesture (iOS only)",sidebar_label:"Force touch gesture"},b={unversionedId:"api/gestures/force-touch-gesture",id:"api/gestures/force-touch-gesture",isDocsHomePage:!1,title:"Force touch gesture (iOS only)",description:"A continuous gesture that recognizes force of a touch. It allows for tracking pressure of touch on some iOS devices.",source:"@site/docs/api/gestures/force-touch-gesture.md",slug:"/api/gestures/force-touch-gesture",permalink:"/react-native-gesture-handler/docs/next/api/gestures/force-touch-gesture",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api/gestures/force-touch-gesture.md",version:"current",sidebar_label:"Force touch gesture",sidebar:"docs",previous:{title:"Fling gesture",permalink:"/react-native-gesture-handler/docs/next/api/gestures/fling-gesture"},next:{title:"Native gesture",permalink:"/react-native-gesture-handler/docs/next/api/gestures/native-gesture"}},p=[{value:"Config",id:"config",children:[{value:"Properties specific to <code>ForceTouchGesture</code>:",id:"properties-specific-to-forcetouchgesture",children:[]},{value:"<code>minForce(value: number)</code>",id:"minforcevalue-number",children:[]},{value:"<code>maxForce(value: number)</code>",id:"maxforcevalue-number",children:[]},{value:"<code>feedbackOnActivation(value: boolean)</code>",id:"feedbackonactivationvalue-boolean",children:[]}]},{value:"Callbacks",id:"callbacks",children:[]},{value:"Event data",id:"event-data",children:[{value:"Event attributes specific to <code>ForceTouchGesture</code>:",id:"event-attributes-specific-to-forcetouchgesture",children:[]},{value:"<code>force</code>",id:"force",children:[]}]}],h={rightToc:p};function m(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"A continuous gesture that recognizes force of a touch. It allows for tracking pressure of touch on some iOS devices.\nThe gesture ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#active"}),"activates")," when pressure of touch if greater or equal than ",Object(o.b)("inlineCode",{parentName:"p"},"minForce"),". It fails if pressure is greater than ",Object(o.b)("inlineCode",{parentName:"p"},"maxForce"),"\nGesture callback can be used for continuous tracking of the touch pressure. It provides information for one finger (the first one)."),Object(o.b)("p",null,"At the beginning of the gesture, the pressure factor is 0.0. As the pressure increases, the pressure factor increases proportionally. The maximum pressure is 1.0."),Object(o.b)("p",null,"There's no implementation provided on Android and it simply renders children without any wrappers.\nSince this behaviour is only provided on some iOS devices, this gesture should not be used for defining any crucial behaviors. Use it only as an additional improvement and make all features to be accessed without this gesture as well."),Object(o.b)("h2",{id:"config"},"Config"),Object(o.b)("h3",{id:"properties-specific-to-forcetouchgesture"},"Properties specific to ",Object(o.b)("inlineCode",{parentName:"h3"},"ForceTouchGesture"),":"),Object(o.b)("h3",{id:"minforcevalue-number"},Object(o.b)("inlineCode",{parentName:"h3"},"minForce(value: number)")),Object(o.b)("p",null,"A minimal pressure that is required before gesture can ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#active"}),"activate"),". Should be a value from range ",Object(o.b)("inlineCode",{parentName:"p"},"[0.0, 1.0]"),". Default is ",Object(o.b)("inlineCode",{parentName:"p"},"0.2"),"."),Object(o.b)("h3",{id:"maxforcevalue-number"},Object(o.b)("inlineCode",{parentName:"h3"},"maxForce(value: number)")),Object(o.b)("p",null,"A maximal pressure that could be applied for gesture. If the pressure is greater, gesture ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#failed"}),"fails"),". Should be a value from range ",Object(o.b)("inlineCode",{parentName:"p"},"[0.0, 1.0]"),"."),Object(o.b)("h3",{id:"feedbackonactivationvalue-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"feedbackOnActivation(value: boolean)")),Object(o.b)("p",null,"Value defining if haptic feedback has to be performed on activation."),Object(o.b)(i.default,{mdxType:"BaseEventConfig"}),Object(o.b)(s.default,{mdxType:"BaseContinousEventConfig"}),Object(o.b)("h2",{id:"callbacks"},"Callbacks"),Object(o.b)(l.default,{mdxType:"BaseEventCallbacks"}),Object(o.b)(u.default,{mdxType:"BaseContinousEventCallbacks"}),Object(o.b)("h2",{id:"event-data"},"Event data"),Object(o.b)("h3",{id:"event-attributes-specific-to-forcetouchgesture"},"Event attributes specific to ",Object(o.b)("inlineCode",{parentName:"h3"},"ForceTouchGesture"),":"),Object(o.b)("h3",{id:"force"},Object(o.b)("inlineCode",{parentName:"h3"},"force")),Object(o.b)("p",null,"The pressure of a touch."),Object(o.b)(c.default,{mdxType:"BaseEventData"}))}m.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),u=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},d=function(e){var t=u(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},p=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),p=a,h=d["".concat(c,".").concat(p)]||d[p]||b[p]||o;return n?r.a.createElement(h,i(i({ref:t},l),{},{components:n})):r.a.createElement(h,i({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,c=new Array(o);c[0]=p;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,c[1]=i;for(var l=2;l<o;l++)c[l]=n[l];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(231)),c={},i={unversionedId:"api/gestures/base-gesture-callbacks",id:"api/gestures/base-gesture-callbacks",isDocsHomePage:!1,title:"base-gesture-callbacks",description:"Callbacks common to all gestures:",source:"@site/docs/api/gestures/base-gesture-callbacks.md",slug:"/api/gestures/base-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api/gestures/base-gesture-callbacks.md",version:"current"},s=[{value:"Callbacks common to all gestures:",id:"callbacks-common-to-all-gestures",children:[]},{value:"<code>onBegan(callback)</code>",id:"onbegancallback",children:[]},{value:"<code>onStart(callback)</code>",id:"onstartcallback",children:[]},{value:"<code>onEnd(callback)</code>",id:"onendcallback",children:[]},{value:"<code>onTouchesDown(event, stateManager)</code>",id:"ontouchesdownevent-statemanager",children:[]},{value:"<code>onTouchesMove(event, stateManager)</code>",id:"ontouchesmoveevent-statemanager",children:[]},{value:"<code>onTouchesUp(event, stateManager)</code>",id:"ontouchesupevent-statemanager",children:[]},{value:"<code>onTouchesCancelled(event, stateManager)</code>",id:"ontouchescancelledevent-statemanager",children:[]},{value:"<code>onTouchesChange(event, stateManager)</code>",id:"ontoucheschangeevent-statemanager",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"callbacks-common-to-all-gestures"},"Callbacks common to all gestures:"),Object(o.b)("h3",{id:"onbegancallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onBegan(callback)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onBegan")," callback."),Object(o.b)("h3",{id:"onstartcallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onStart(callback)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onStart")," callback."),Object(o.b)("h3",{id:"onendcallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onEnd(callback)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onEnd")," callback."),Object(o.b)("h3",{id:"ontouchesdownevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesDown(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesDown")," callback which is called every time a finger is placed on the screen."),Object(o.b)("h3",{id:"ontouchesmoveevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesMove(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesMove")," callback which is called every time a finger is moved on the screen."),Object(o.b)("h3",{id:"ontouchesupevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesUp(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesUp")," callback which is called every time a finger is lifted from the screen."),Object(o.b)("h3",{id:"ontouchescancelledevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesCancelled(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesCancelled")," callback which is called every time a finger stops being tracked, for example when the gesture finishes."),Object(o.b)("h3",{id:"ontoucheschangeevent-statemanager"},Object(o.b)("inlineCode",{parentName:"h3"},"onTouchesChange(event, stateManager)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onTouchesChange")," callback which is called for every touch event."))}u.isMDXComponent=!0},49:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(231)),c={},i={unversionedId:"api/gestures/base-gesture-config",id:"api/gestures/base-gesture-config",isDocsHomePage:!1,title:"base-gesture-config",description:"Properties common to all gestures:",source:"@site/docs/api/gestures/base-gesture-config.md",slug:"/api/gestures/base-gesture-config",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-gesture-config",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api/gestures/base-gesture-config.md",version:"current"},s=[{value:"Properties common to all gestures:",id:"properties-common-to-all-gestures",children:[]},{value:"<code>enabled(value: boolean)</code>",id:"enabledvalue-boolean",children:[]},{value:"<code>shouldCancelWhenOutside(value: boolean)</code>",id:"shouldcancelwhenoutsidevalue-boolean",children:[]},{value:"<code>hitSlop(settings)</code>",id:"hitslopsettings",children:[]},{value:"<code>withRef(ref)</code>",id:"withrefref",children:[]},{value:"<code>simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)</code>",id:"simultaneouswithexternalgestureothergesture1-othergesture2-",children:[]},{value:"<code>requireExternalGestureToFail(otherGesture1, otherGesture2, ...)</code>",id:"requireexternalgesturetofailothergesture1-othergesture2-",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"properties-common-to-all-gestures"},"Properties common to all gestures:"),Object(o.b)("h3",{id:"enabledvalue-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"enabled(value: boolean)")),Object(o.b)("p",null,"Indicates whether the given handler should be analyzing stream of touch events or not.\nWhen set to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," we can be sure that the handler's state will ",Object(o.b)("strong",{parentName:"p"},"never")," become ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#active"}),Object(o.b)("inlineCode",{parentName:"a"},"ACTIVE")),".\nIf the value gets updated while the handler already started recognizing a gesture, then the handler's state it will immediately change to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#failed"}),Object(o.b)("inlineCode",{parentName:"a"},"FAILED"))," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#cancelled"}),Object(o.b)("inlineCode",{parentName:"a"},"CANCELLED"))," (depending on its current state).\nDefault value is ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h3",{id:"shouldcancelwhenoutsidevalue-boolean"},Object(o.b)("inlineCode",{parentName:"h3"},"shouldCancelWhenOutside(value: boolean)")),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true")," the handler will ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#cancelled"}),"cancel")," or ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#failed"}),"fail")," recognition (depending on its current state) whenever the finger leaves the area of the connected view.\nDefault value of this property is different depending on the handler type.\nMost handlers' ",Object(o.b)("inlineCode",{parentName:"p"},"shouldCancelWhenOutside")," property defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"false")," except for the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/api/gestures/long-press-gesture"}),Object(o.b)("inlineCode",{parentName:"a"},"LongPressGesture"))," and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/api/gestures/tap-gesture"}),Object(o.b)("inlineCode",{parentName:"a"},"TapGesture"))," which default to ",Object(o.b)("inlineCode",{parentName:"p"},"true"),"."),Object(o.b)("h3",{id:"hitslopsettings"},Object(o.b)("inlineCode",{parentName:"h3"},"hitSlop(settings)")),Object(o.b)("p",null,"This parameter enables control over what part of the connected view area can be used to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events#began"}),"begin")," recognizing the gesture.\nWhen a negative number is provided the bounds of the view will reduce the area by the given number of points in each of the sides evenly."),Object(o.b)("p",null,"Instead you can pass an object to specify how each boundary side should be reduced by providing different number of points for ",Object(o.b)("inlineCode",{parentName:"p"},"left"),", ",Object(o.b)("inlineCode",{parentName:"p"},"right"),", ",Object(o.b)("inlineCode",{parentName:"p"},"top")," or ",Object(o.b)("inlineCode",{parentName:"p"},"bottom")," sides.\nYou can alternatively provide ",Object(o.b)("inlineCode",{parentName:"p"},"horizontal")," or ",Object(o.b)("inlineCode",{parentName:"p"},"vertical")," instead of specifying directly ",Object(o.b)("inlineCode",{parentName:"p"},"left"),", ",Object(o.b)("inlineCode",{parentName:"p"},"right")," or ",Object(o.b)("inlineCode",{parentName:"p"},"top")," and ",Object(o.b)("inlineCode",{parentName:"p"},"bottom"),".\nFinally, the object can also take ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height")," attributes.\nWhen ",Object(o.b)("inlineCode",{parentName:"p"},"width")," is set it is only allow to specify one of the sides ",Object(o.b)("inlineCode",{parentName:"p"},"right")," or ",Object(o.b)("inlineCode",{parentName:"p"},"left"),".\nSimilarly when ",Object(o.b)("inlineCode",{parentName:"p"},"height")," is provided only ",Object(o.b)("inlineCode",{parentName:"p"},"top")," or ",Object(o.b)("inlineCode",{parentName:"p"},"bottom")," can be set.\nSpecifying ",Object(o.b)("inlineCode",{parentName:"p"},"width")," or ",Object(o.b)("inlineCode",{parentName:"p"},"height")," is useful if we only want the gesture to activate on the edge of the view. In which case for example we can set ",Object(o.b)("inlineCode",{parentName:"p"},"left: 0")," and ",Object(o.b)("inlineCode",{parentName:"p"},"width: 20")," which would make it possible for the gesture to be recognize when started no more than 20 points from the left edge."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this parameter is primarily designed to reduce the area where gesture can activate. Hence it is only supported for all the values (except ",Object(o.b)("inlineCode",{parentName:"p"},"width")," and ",Object(o.b)("inlineCode",{parentName:"p"},"height"),") to be non positive (0 or lower). Although on Android it is supported for the values to also be positive and therefore allow to expand beyond view bounds but not further than the parent view bounds. To achieve this effect on both platforms you can use React Native's View ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://facebook.github.io/react-native/docs/view.html#props"}),"hitSlop")," property."),Object(o.b)("h3",{id:"withrefref"},Object(o.b)("inlineCode",{parentName:"h3"},"withRef(ref)")),Object(o.b)("p",null,"Sets a ref to the gesture object, allowing for interoperability with the old API."),Object(o.b)("h3",{id:"simultaneouswithexternalgestureothergesture1-othergesture2-"},Object(o.b)("inlineCode",{parentName:"h3"},"simultaneousWithExternalGesture(otherGesture1, otherGesture2, ...)")),Object(o.b)("p",null,"Adds a gesture that should be recognized simultaneously with this one."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),". ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"gesture-detector"}),Object(o.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(o.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."),Object(o.b)("h3",{id:"requireexternalgesturetofailothergesture1-othergesture2-"},Object(o.b)("inlineCode",{parentName:"h3"},"requireExternalGestureToFail(otherGesture1, otherGesture2, ...)")),Object(o.b)("p",null,"Adds a relation requiring another gesture to fail, before this one can activate."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"IMPORTANT:")," Note that this method only marks the relation between gestures, without ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"../../gesture-composition"}),"composing them"),".",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"gesture-detector"}),Object(o.b)("inlineCode",{parentName:"a"},"GestureDetector"))," will not recognize the ",Object(o.b)("inlineCode",{parentName:"p"},"otherGestures")," and it needs to be added to another detector in order to be recognized."))}u.isMDXComponent=!0},50:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(231)),c={},i={unversionedId:"api/gestures/base-gesture-event-data",id:"api/gestures/base-gesture-event-data",isDocsHomePage:!1,title:"base-gesture-event-data",description:"Event attributes common to all gestures:",source:"@site/docs/api/gestures/base-gesture-event-data.md",slug:"/api/gestures/base-gesture-event-data",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-gesture-event-data",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api/gestures/base-gesture-event-data.md",version:"current"},s=[{value:"Event attributes common to all gestures:",id:"event-attributes-common-to-all-gestures",children:[]},{value:"<code>state</code>",id:"state",children:[]},{value:"<code>numberOfPointers</code>",id:"numberofpointers",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"event-attributes-common-to-all-gestures"},"Event attributes common to all gestures:"),Object(o.b)("h3",{id:"state"},Object(o.b)("inlineCode",{parentName:"h3"},"state")),Object(o.b)("p",null,"Current ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/under-the-hood/states-events"}),"state")," of the handler. Expressed as one of the constants exported under ",Object(o.b)("inlineCode",{parentName:"p"},"State")," object by the library."),Object(o.b)("h3",{id:"numberofpointers"},Object(o.b)("inlineCode",{parentName:"h3"},"numberOfPointers")),Object(o.b)("p",null,"Represents the number of pointers (fingers) currently placed on the screen."))}u.isMDXComponent=!0},54:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(231)),c={},i={unversionedId:"api/gestures/base-continous-gesture-callbacks",id:"api/gestures/base-continous-gesture-callbacks",isDocsHomePage:!1,title:"base-continous-gesture-callbacks",description:"Callbacks common to all continous gestures:",source:"@site/docs/api/gestures/base-continous-gesture-callbacks.md",slug:"/api/gestures/base-continous-gesture-callbacks",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-continous-gesture-callbacks",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api/gestures/base-continous-gesture-callbacks.md",version:"current"},s=[{value:"Callbacks common to all continous gestures:",id:"callbacks-common-to-all-continous-gestures",children:[]},{value:"<code>onUpdate(callback)</code>",id:"onupdatecallback",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"callbacks-common-to-all-continous-gestures"},"Callbacks common to all continous gestures:"),Object(o.b)("h3",{id:"onupdatecallback"},Object(o.b)("inlineCode",{parentName:"h3"},"onUpdate(callback)")),Object(o.b)("p",null,"Set the ",Object(o.b)("inlineCode",{parentName:"p"},"onUpdate")," callback."))}u.isMDXComponent=!0},56:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return u}));var a=n(2),r=n(6),o=(n(0),n(231)),c={},i={unversionedId:"api/gestures/base-continous-gesture-config",id:"api/gestures/base-continous-gesture-config",isDocsHomePage:!1,title:"base-continous-gesture-config",description:"Properties common to all continous gestures:",source:"@site/docs/api/gestures/base-continous-gesture-config.md",slug:"/api/gestures/base-continous-gesture-config",permalink:"/react-native-gesture-handler/docs/next/api/gestures/base-continous-gesture-config",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api/gestures/base-continous-gesture-config.md",version:"current"},s=[{value:"Properties common to all continous gestures:",id:"properties-common-to-all-continous-gestures",children:[]},{value:"<code>manualActivation(value: boolead)</code>",id:"manualactivationvalue-boolead",children:[]}],l={rightToc:s};function u(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},l,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"properties-common-to-all-continous-gestures"},"Properties common to all continous gestures:"),Object(o.b)("h3",{id:"manualactivationvalue-boolead"},Object(o.b)("inlineCode",{parentName:"h3"},"manualActivation(value: boolead)")),Object(o.b)("p",null,"When ",Object(o.b)("inlineCode",{parentName:"p"},"true")," the handler will not activate by itself even if its activation criteria are met. Instead you can manipulate its state using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/api/gestures/state-manager"}),"state manager"),"."))}u.isMDXComponent=!0}}]);