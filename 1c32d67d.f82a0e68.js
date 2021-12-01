(window.webpackJsonp=window.webpackJsonp||[]).push([[18,70,88,99,111,132],{110:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return p})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return m})),n.d(t,"default",(function(){return g}));var r=n(2),a=n(6),s=(n(0),n(218)),o=n(227),c=n(61),i=n(62),u=n(63),d=n(64),l=n(65),p={id:"quickstart",title:"Quick start",sidebar_label:"Quick start"},b={unversionedId:"quickstart/quickstart",id:"quickstart/quickstart",isDocsHomePage:!1,title:"Quick start",description:"RNGH2 provides much simpler way to add gestures to your app. All you need to do is wrap the view that you want your gesture to work on with GestureDetector, define the gesture and pass it to detector. That's all!",source:"@site/docs/quickstart/quickstart.md",slug:"/quickstart/quickstart",permalink:"/react-native-gesture-handler/docs/next/quickstart/quickstart",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/quickstart/quickstart.md",version:"current",sidebar_label:"Quick start",sidebar:"docs",previous:{title:"Introduction",permalink:"/react-native-gesture-handler/docs/next/"},next:{title:"Composing gestures",permalink:"/react-native-gesture-handler/docs/next/gesture-composition"}},m=[],f={rightToc:m};function g(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("p",null,"RNGH2 provides much simpler way to add gestures to your app. All you need to do is wrap the view that you want your gesture to work on with ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"../api/gestures/gesture-detector"}),Object(s.b)("inlineCode",{parentName:"a"},"GestureDetector")),", define the gesture and pass it to detector. That's all!"),Object(s.b)("p",null,"To demonstrate how you would use the new API, let's make a simple app where you can drag a ball around. You will need to add ",Object(s.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," (for gestures) and ",Object(s.b)("inlineCode",{parentName:"p"},"react-native-reanimated")," (for animations) modules."),Object(s.b)(o.a,{mdxType:"Divider"}),Object(s.b)(o.b,{title:"Step 1",mdxType:"Step"},Object(s.b)("div",null,"First let's define styles we will ned to make the app:"),Object(s.b)(c.default,{mdxType:"Step1"})),Object(s.b)(o.a,{mdxType:"Divider"}),Object(s.b)(o.b,{title:"Step 2",mdxType:"Step"},Object(s.b)("div",null,"Then we can start writing our `Ball` component:"),Object(s.b)(i.default,{mdxType:"Step2"})),Object(s.b)(o.a,{mdxType:"Divider"}),Object(s.b)(o.b,{title:"Step 3",mdxType:"Step"},Object(s.b)("div",null,"We also need to define"," ",Object(s.b)("a",{href:"https://docs.swmansion.com/react-native-reanimated/docs/fundamentals/shared-values"},"shared values")," ","to keep track of the ball position and create animated styles in order to be able to position the ball on the screen:"),Object(s.b)(u.default,{mdxType:"Step3"})),Object(s.b)(o.a,{mdxType:"Divider"}),Object(s.b)(o.b,{title:"Step 4",mdxType:"Step"},Object(s.b)("div",null,"And add it to the ball's styles:"),Object(s.b)(d.default,{mdxType:"Step4"})),Object(s.b)(o.a,{mdxType:"Divider"}),Object(s.b)(o.b,{title:"Step 5",mdxType:"Step"},Object(s.b)("div",null,"The only thing left is to define the pan gesture and assign it to the detector:"),Object(s.b)(l.default,{mdxType:"Step5"})),Object(s.b)(o.a,{mdxType:"Divider"}),Object(s.b)("p",null,"Note the ",Object(s.b)("inlineCode",{parentName:"p"},"start")," shared value. We need it to store the position of the ball at the moment we grab it to be able to correctly position it later, because we only have access to translation relative to the starting point of the gesture."),Object(s.b)("p",null,"Now you can just add ",Object(s.b)("inlineCode",{parentName:"p"},"Ball")," component to some view in the app and see the results! (Or you can just check the code ",Object(s.b)("a",Object(r.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/new-api/example/src/new_api/reanimated/index.tsx"}),"here")," and see it in action in the Example app.)"))}g.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),a=n.n(r);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=a.a.createContext({}),d=function(e){var t=a.a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=d(e.components);return a.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},b=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),l=d(n),b=r,m=l["".concat(o,".").concat(b)]||l[b]||p[b]||s;return n?a.a.createElement(m,c(c({ref:t},u),{},{components:n})):a.a.createElement(m,c({ref:t},u))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var s=n.length,o=new Array(s);o[0]=b;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,o[1]=c;for(var u=2;u<s;u++)o[u]=n[u];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},222:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},227:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n(0),a=n.n(r),s=n(60),o=n.n(s),c=n(222),i=function(){return a.a.createElement("div",{className:Object(c.a)(o.a.divider)})};t.b=function(e){var t=e.children,n=e.title;return a.a.createElement("div",{className:Object(c.a)(o.a.container)},a.a.createElement("div",{className:Object(c.a)(o.a.description)},a.a.createElement("div",{className:Object(c.a)(o.a.roundedStep)},a.a.createElement("div",{className:Object(c.a)(o.a.stepTitle)},n),t[0])),a.a.createElement("div",{className:Object(c.a)(o.a.code)},t[1]))}},61:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),s=(n(0),n(218)),o={},c={unversionedId:"quickstart/step1",id:"quickstart/step1",isDocsHomePage:!1,title:"step1",description:"`jsx",source:"@site/docs/quickstart/step1.md",slug:"/quickstart/step1",permalink:"/react-native-gesture-handler/docs/next/quickstart/step1",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/quickstart/step1.md",version:"current"},i=[],u={rightToc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const styles = StyleSheet.create({\n  ball: {\n    width: 100,\n    height: 100,\n    borderRadius: 100,\n    backgroundColor: 'blue',\n    alignSelf: 'center',\n  },\n});\n")))}d.isMDXComponent=!0},62:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),s=(n(0),n(218)),o={},c={unversionedId:"quickstart/step2",id:"quickstart/step2",isDocsHomePage:!1,title:"step2",description:"`jsx",source:"@site/docs/quickstart/step2.md",slug:"/quickstart/step2",permalink:"/react-native-gesture-handler/docs/next/quickstart/step2",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/quickstart/step2.md",version:"current"},i=[],u={rightToc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"function Ball() {\n  return (\n    <GestureDetector>\n      <Animated.View style={[styles.ball]} />\n    </GestureDetector>\n  );\n}\n")))}d.isMDXComponent=!0},63:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),s=(n(0),n(218)),o={},c={unversionedId:"quickstart/step3",id:"quickstart/step3",isDocsHomePage:!1,title:"step3",description:"`jsx",source:"@site/docs/quickstart/step3.md",slug:"/quickstart/step3",permalink:"/react-native-gesture-handler/docs/next/quickstart/step3",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/quickstart/step3.md",version:"current"},i=[],u={rightToc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const isPressed = useSharedValue(false);\nconst offset = useSharedValue({ x: 0, y: 0 });\nconst animatedStyles = useAnimatedStyle(() => {\n  return {\n    transform: [\n      { translateX: offset.value.x },\n      { translateY: offset.value.y },\n      { scale: withSpring(isPressed.value ? 1.2 : 1) },\n    ],\n    backgroundColor: isPressed.value ? 'yellow' : 'blue',\n  };\n});\n")))}d.isMDXComponent=!0},64:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),s=(n(0),n(218)),o={},c={unversionedId:"quickstart/step4",id:"quickstart/step4",isDocsHomePage:!1,title:"step4",description:"`jsx {4}",source:"@site/docs/quickstart/step4.md",slug:"/quickstart/step4",permalink:"/react-native-gesture-handler/docs/next/quickstart/step4",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/quickstart/step4.md",version:"current"},i=[],u={rightToc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{4}","{4}":!0}),"...\nreturn (\n  <GestureDetector>\n    <Animated.View style={[styles.ball, animatedStyles]} />\n  </GestureDetector>\n);\n...\n")))}d.isMDXComponent=!0},65:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var r=n(2),a=n(6),s=(n(0),n(218)),o={},c={unversionedId:"quickstart/step5",id:"quickstart/step5",isDocsHomePage:!1,title:"step5",description:"`jsx",source:"@site/docs/quickstart/step5.md",slug:"/quickstart/step5",permalink:"/react-native-gesture-handler/docs/next/quickstart/step5",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/quickstart/step5.md",version:"current"},i=[],u={rightToc:i};function d(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},u,n,{components:t,mdxType:"MDXLayout"}),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx"}),"const start = useSharedValue({ x: 0, y: 0 });\nconst gesture = Gesture.Pan()\n  .onBegin(() => {\n    isPressed.value = true;\n  })\n  .onUpdate((e) => {\n    offset.value = {\n      x: e.translationX + start.value.x,\n      y: e.translationY + start.value.y,\n    };\n  })\n  .onEnd(() => {\n    start.value = {\n      x: offset.value.x,\n      y: offset.value.y,\n    };\n    isPressed.value = false;\n  });\n")),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-jsx",metastring:"{3}","{3}":!0}),"...\nreturn (\n  <GestureDetector gesture={gesture}>\n    <Animated.View style={[styles.ball, animatedStyles]} />\n  </GestureDetector>\n);\n...\n")))}d.isMDXComponent=!0}}]);