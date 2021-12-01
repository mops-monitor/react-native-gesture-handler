(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{120:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return o}));var a=n(2),r=n(6),i=(n(0),n(231)),c={id:"state",title:"Handler State",sidebar_label:"Handler State"},s={unversionedId:"gesture-handlers/basics/state",id:"gesture-handlers/basics/state",isDocsHomePage:!1,title:"Handler State",description:'As described in "About Gesture Handlers", gesture handlers can be treated as "state machines".',source:"@site/docs/gesture-handlers/basics/state.md",slug:"/gesture-handlers/basics/state",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/state",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/gesture-handlers/basics/state.md",version:"current",sidebar_label:"Handler State",sidebar:"docs",previous:{title:"About Gesture Handlers",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/about-handlers"},next:{title:"Cross handler interactions",permalink:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/interactions"}},l=[{value:"Accessing state",id:"accessing-state",children:[]},{value:"State flows",id:"state-flows",children:[]},{value:"States",id:"states",children:[{value:"UNDETERMINED",id:"undetermined",children:[]},{value:"FAILED",id:"failed",children:[]},{value:"BEGAN",id:"began",children:[]},{value:"CANCELLED",id:"cancelled",children:[]},{value:"ACTIVE",id:"active",children:[]},{value:"END",id:"end",children:[]}]}],b={rightToc:l};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"As described in ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/basics/about-handlers"}),'"About Gesture Handlers"'),", gesture handlers can be treated as ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Finite-state_machine"}),'"state machines"'),".\nAt any given time, each handler instance has an assigned state that can change when new touch events occur or can be forced to change by the touch system in certain circumstances."),Object(i.b)("p",null,"A gesture handler can be in one of the six possible states:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#undetermined"}),"UNDETERMINED")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#failed"}),"FAILED")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#began"}),"BEGAN")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#cancelled"}),"CANCELLED")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#active"}),"ACTIVE")),Object(i.b)("li",{parentName:"ul"},Object(i.b)("a",Object(a.a)({parentName:"li"},{href:"#end"}),"END"))),Object(i.b)("p",null,"Each state has its own description below."),Object(i.b)("h2",{id:"accessing-state"},"Accessing state"),Object(i.b)("p",null,"We can monitor a handler's state changes by using the ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/common-gh#onhandlerstatechange"}),Object(i.b)("inlineCode",{parentName:"a"},"onHandlerStateChange"))," callback and the destructured ",Object(i.b)("inlineCode",{parentName:"p"},"nativeEvent")," argument passed to it.\nThis can be done by comparing the ",Object(i.b)("inlineCode",{parentName:"p"},"nativeEvent"),"'s ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/gesture-handlers/api/common-gh#state"}),Object(i.b)("inlineCode",{parentName:"a"},"state"))," attribute to one of the constants exported under the ",Object(i.b)("inlineCode",{parentName:"p"},"State")," object (see example below)."),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{}),"import { State, LongPressGestureHandler } from 'react-native-gesture-handler';\n\nclass Demo extends Component {\n  _handleStateChange = ({ nativeEvent }) => {\n    if (nativeEvent.state === State.ACTIVE) {\n      Alert.alert('Longpress');\n    }\n  };\n  render() {\n    return (\n      <LongPressGestureHandler onHandlerStateChange={this._handleStateChange}>\n        <Text style={styles.buttonText}>Longpress me</Text>\n      </LongPressGestureHandler>\n    );\n  }\n}\n")),Object(i.b)("h2",{id:"state-flows"},"State flows"),Object(i.b)("p",null,"The most typical flow of state is when a gesture handler picks up on an initial touch event then recognizes it then acknowledges its ending then resets itself back to the initial state."),Object(i.b)("p",null,"The flow looks as follows (longer arrows represent that there are possibly more touch events received before the state changes):"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#undetermined"}),Object(i.b)("inlineCode",{parentName:"a"},"UNDETERMINED"))," -> ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#began"}),Object(i.b)("inlineCode",{parentName:"a"},"BEGAN"))," ------\x3e ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#active"}),Object(i.b)("inlineCode",{parentName:"a"},"ACTIVE"))," ------\x3e ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#end"}),Object(i.b)("inlineCode",{parentName:"a"},"END"))," -> ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#undetermined"}),Object(i.b)("inlineCode",{parentName:"a"},"UNDETERMINED"))),Object(i.b)("p",null,"Another possible flow is when a handler receives touches that cause a recognition failure:"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#undetermined"}),Object(i.b)("inlineCode",{parentName:"a"},"UNDETERMINED"))," -> ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#began"}),Object(i.b)("inlineCode",{parentName:"a"},"BEGAN"))," ------\x3e ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#failed"}),Object(i.b)("inlineCode",{parentName:"a"},"FAILED"))," -> ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#undetermined"}),Object(i.b)("inlineCode",{parentName:"a"},"UNDETERMINED"))),Object(i.b)("p",null,"At last, when a handler does properly recognize the gesture but then is interrupted by the touch system. In that case, the gesture recognition is canceled and the flow looks as follows:"),Object(i.b)("p",null,Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#undetermined"}),Object(i.b)("inlineCode",{parentName:"a"},"UNDETERMINED"))," -> ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#began"}),Object(i.b)("inlineCode",{parentName:"a"},"BEGAN"))," ------\x3e ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#active"}),Object(i.b)("inlineCode",{parentName:"a"},"ACTIVE"))," ------\x3e ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#cancelled"}),Object(i.b)("inlineCode",{parentName:"a"},"CANCELLED"))," -> ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#undetermined"}),Object(i.b)("inlineCode",{parentName:"a"},"UNDETERMINED"))),Object(i.b)("h2",{id:"states"},"States"),Object(i.b)("p",null,"The section below describes all possible handler states:"),Object(i.b)("h3",{id:"undetermined"},"UNDETERMINED"),Object(i.b)("p",null,"This is the initial state of each handler and it goes into this state after it's done recognizing a gesture."),Object(i.b)("h3",{id:"failed"},"FAILED"),Object(i.b)("p",null,"A handler received some touches but for some reason didn't recognize them. For example, if a finger travels more distance than a defined ",Object(i.b)("inlineCode",{parentName:"p"},"maxDist")," property allows, then the handler won't become active but will fail instead. Afterwards, it's state will be reset to ",Object(i.b)("inlineCode",{parentName:"p"},"UNDETERMINED"),"."),Object(i.b)("h3",{id:"began"},"BEGAN"),Object(i.b)("p",null,"Handler has started receiving touch stream but hasn't yet received enough data to either ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#failed"}),"fail")," or ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"#active"}),"activate"),"."),Object(i.b)("h3",{id:"cancelled"},"CANCELLED"),Object(i.b)("p",null,"The gesture recognizer has received a signal (possibly new touches or a command from the touch system controller) resulting in the cancellation of a continuous gesture. The gesture's state will become ",Object(i.b)("inlineCode",{parentName:"p"},"CANCELLED")," until it is finally reset to the initial state, ",Object(i.b)("inlineCode",{parentName:"p"},"UNDETERMINED"),"."),Object(i.b)("h3",{id:"active"},"ACTIVE"),Object(i.b)("p",null,"Handler has recognized a gesture. It will become and stay in the ",Object(i.b)("inlineCode",{parentName:"p"},"ACTIVE")," state until the gesture finishes (e.g. when user lifts the finger) or gets cancelled by the touch system. Under normal circumstances the state will then turn into ",Object(i.b)("inlineCode",{parentName:"p"},"END"),". In the case that a gesture is cancelled by the touch system, its state would then become ",Object(i.b)("inlineCode",{parentName:"p"},"CANCELLED"),".\nLearn about ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"about-handlers#discrete-vs-continuous"}),"discrete and continuous handlers here")," to understand how long a handler can be kept in the ",Object(i.b)("inlineCode",{parentName:"p"},"ACTIVE")," state."),Object(i.b)("h3",{id:"end"},"END"),Object(i.b)("p",null,"The gesture recognizer has received touches signalling the end of a gesture. Its state will become ",Object(i.b)("inlineCode",{parentName:"p"},"END")," until it is reset to ",Object(i.b)("inlineCode",{parentName:"p"},"UNDETERMINED"),"."))}o.isMDXComponent=!0},231:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var b=r.a.createContext({}),o=function(e){var t=r.a.useContext(b),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=o(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,b=l(e,["components","mdxType","originalType","parentName"]),d=o(n),u=a,h=d["".concat(c,".").concat(u)]||d[u]||p[u]||i;return n?r.a.createElement(h,s(s({ref:t},b),{},{components:n})):r.a.createElement(h,s({ref:t},b))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,c[1]=s;for(var b=2;b<i;b++)c[b]=n[b];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"}}]);