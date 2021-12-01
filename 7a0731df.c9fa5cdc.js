(window.webpackJsonp=window.webpackJsonp||[]).push([[78],{158:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return i})),r.d(t,"metadata",(function(){return c})),r.d(t,"rightToc",(function(){return u})),r.d(t,"default",(function(){return l}));var n=r(2),o=r(6),a=(r(0),r(231)),i={id:"force-touch-gesture",title:"Force touch gesture (iOS only)",sidebar_label:"Force touch gesture"},c={unversionedId:"api2/force-touch-gesture",id:"api2/force-touch-gesture",isDocsHomePage:!1,title:"Force touch gesture (iOS only)",description:"A continuous gesture that recognizes force of a touch. It allows for tracking pressure of touch on some iOS devices.",source:"@site/docs/api2/force-touch-gesture.md",slug:"/api2/force-touch-gesture",permalink:"/react-native-gesture-handler/docs/next/api2/force-touch-gesture",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api2/force-touch-gesture.md",version:"current",sidebar_label:"Force touch gesture",sidebar:"docs",previous:{title:"Rotation gesture",permalink:"/react-native-gesture-handler/docs/next/api2/rotation-gesture"},next:{title:"Gesture states & events",permalink:"/react-native-gesture-handler/docs/next/under-the-hood/states-events"}},u=[{value:"Config",id:"config",children:[{value:"<code>minForce(value: number)</code>",id:"minforcevalue-number",children:[]},{value:"<code>maxForce(value: number)</code>",id:"maxforcevalue-number",children:[]},{value:"<code>feedbackOnActivation(value: boolean)</code>",id:"feedbackonactivationvalue-boolean",children:[]}]},{value:"Event data",id:"event-data",children:[{value:"<code>force</code>",id:"force",children:[]}]}],s={rightToc:u};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},s,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"A continuous gesture that recognizes force of a touch. It allows for tracking pressure of touch on some iOS devices.\nThe gesture ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../state.md#active"}),"activates")," when pressure of touch if greater or equal than ",Object(a.b)("inlineCode",{parentName:"p"},"minForce"),". It fails if pressure is greater than ",Object(a.b)("inlineCode",{parentName:"p"},"maxForce"),"\nGesture callback can be used for continuous tracking of the touch pressure. It provides information for one finger (the first one)."),Object(a.b)("p",null,"At the beginning of the gesture, the pressure factor is 0.0. As the pressure increases, the pressure factor increases proportionally. The maximum pressure is 1.0."),Object(a.b)("p",null,"The gesture is implemented using custom ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"https://developer.apple.com/documentation/uikit/uigesturerecognizer"}),"UIGestureRecognizer")," on iOS. There's no implementation provided on Android and it simply render children without any wrappers.\nSince this behaviour is only provided on some iOS devices, this gesture should not be used for defining any crucial behaviors. Use it only as an additional improvement and make all features to be accessed without this gesture as well."),Object(a.b)("h2",{id:"config"},"Config"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/api2/common-gesture#config"}),"set of properties common to all gestures"),". Below is a list of properties specific to ",Object(a.b)("inlineCode",{parentName:"p"},"ForceTouchGesture"),":"),Object(a.b)("h3",{id:"minforcevalue-number"},Object(a.b)("inlineCode",{parentName:"h3"},"minForce(value: number)")),Object(a.b)("p",null,"A minimal pressure that is required before gesture can ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../state.md#active"}),"activate"),". Should be a value from range ",Object(a.b)("inlineCode",{parentName:"p"},"[0.0, 1.0]"),". Default is ",Object(a.b)("inlineCode",{parentName:"p"},"0.2"),"."),Object(a.b)("h3",{id:"maxforcevalue-number"},Object(a.b)("inlineCode",{parentName:"h3"},"maxForce(value: number)")),Object(a.b)("p",null,"A maximal pressure that could be applied for gesture. If the pressure is greater, gesture ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"../state.md#failed"}),"fails"),". Should be a value from range ",Object(a.b)("inlineCode",{parentName:"p"},"[0.0, 1.0]"),"."),Object(a.b)("h3",{id:"feedbackonactivationvalue-boolean"},Object(a.b)("inlineCode",{parentName:"h3"},"feedbackOnActivation(value: boolean)")),Object(a.b)("p",null,"Value defining if haptic feedback has to be performed on activation."),Object(a.b)("h2",{id:"event-data"},"Event data"),Object(a.b)("p",null,"See ",Object(a.b)("a",Object(n.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/api2/common-gesture#event-data"}),"set of event attributes common to all gestures"),". Below is a list of gesture event attributes specific to ",Object(a.b)("inlineCode",{parentName:"p"},"ForceTouchGesture"),":"),Object(a.b)("h3",{id:"force"},Object(a.b)("inlineCode",{parentName:"h3"},"force")),Object(a.b)("p",null,"The pressure of a touch."))}l.isMDXComponent=!0},231:function(e,t,r){"use strict";r.d(t,"a",(function(){return p})),r.d(t,"b",(function(){return f}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function u(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=o.a.createContext({}),l=function(e){var t=o.a.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):c(c({},t),e)),r},p=function(e){var t=l(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,i=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),p=l(r),d=n,f=p["".concat(i,".").concat(d)]||p[d]||b[d]||a;return r?o.a.createElement(f,c(c({ref:t},s),{},{components:r})):o.a.createElement(f,c({ref:t},s))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,i=new Array(a);i[0]=d;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:n,i[1]=c;for(var s=2;s<a;s++)i[s]=r[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);