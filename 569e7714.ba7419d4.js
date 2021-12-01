(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{138:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return d})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return b}));var a=n(2),r=n(6),o=(n(0),n(218)),i=n(220),c=n(223),d={id:"drawer-layout",title:"Drawer Layout",sidebar_label:"DrawerLayout"},l={unversionedId:"api/components/drawer-layout",id:"api/components/drawer-layout",isDocsHomePage:!1,title:"Drawer Layout",description:"This is a cross-platform replacement for React Native's DrawerLayoutAndroid component. It provides a compatible API but allows for the component to be used on both Android and iOS. Please refer to React Native docs for the detailed usage for standard parameters.",source:"@site/docs/api/components/drawer-layout.mdx",slug:"/api/components/drawer-layout",permalink:"/react-native-gesture-handler/docs/next/api/components/drawer-layout",editUrl:"https://github.com/software-mansion/react-native-gesture-handler/tree/master/docs/docs/api/components/drawer-layout.mdx",version:"current",sidebar_label:"DrawerLayout",sidebar:"docs",previous:{title:"Touchables",permalink:"/react-native-gesture-handler/docs/next/api/components/touchables"},next:{title:"Gesture states & events",permalink:"/react-native-gesture-handler/docs/next/under-the-hood/states-events"}},s=[{value:"Usage:",id:"usage",children:[]},{value:"Properties:",id:"properties",children:[{value:"<code>drawerType</code>",id:"drawertype",children:[]},{value:"<code>edgeWidth</code>",id:"edgewidth",children:[]},{value:"<code>hideStatusBar</code>",id:"hidestatusbar",children:[]},{value:"<code>statusBarAnimation</code>",id:"statusbaranimation",children:[]},{value:"<code>overlayColor</code>",id:"overlaycolor",children:[]},{value:"<code>renderNavigationView</code>",id:"rendernavigationview",children:[]},{value:"<code>onDrawerClose</code>",id:"ondrawerclose",children:[]},{value:"<code>onDrawerOpen</code>",id:"ondraweropen",children:[]},{value:"<code>onDrawerSlide</code>",id:"ondrawerslide",children:[]},{value:"<code>onDrawerStateChanged</code>",id:"ondrawerstatechanged",children:[]},{value:"<code>enableTrackpadTwoFingerGesture</code> (iOS only)",id:"enabletrackpadtwofingergesture-ios-only",children:[]},{value:"<code>children</code>",id:"children",children:[]}]},{value:"Methods",id:"methods",children:[{value:"<code>openDrawer(options)</code>",id:"opendraweroptions",children:[]},{value:"<code>closeDrawer(options)</code>",id:"closedraweroptions",children:[]}]},{value:"Example:",id:"example",children:[]}],p={rightToc:s};function b(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This is a cross-platform replacement for React Native's ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/drawerlayoutandroid.html"}),"DrawerLayoutAndroid")," component. It provides a compatible API but allows for the component to be used on both Android and iOS. Please refer to ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/drawerlayoutandroid.html"}),"React Native docs")," for the detailed usage for standard parameters."),Object(o.b)("h2",{id:"usage"},"Usage:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"DrawerLayout")," component isn't exported by default from the ",Object(o.b)("inlineCode",{parentName:"p"},"react-native-gesture-handler")," package. To use it, import it in the following way:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"import DrawerLayout from 'react-native-gesture-handler/DrawerLayout';\n")),Object(o.b)("h2",{id:"properties"},"Properties:"),Object(o.b)("p",null,"On top of the standard list of parameters DrawerLayout has an additional set of attributes to customize its behavior. Please refer to the list below:"),Object(o.b)("h3",{id:"drawertype"},Object(o.b)("inlineCode",{parentName:"h3"},"drawerType")),Object(o.b)("p",null,"possible values are: ",Object(o.b)("inlineCode",{parentName:"p"},"front"),", ",Object(o.b)("inlineCode",{parentName:"p"},"back")," or ",Object(o.b)("inlineCode",{parentName:"p"},"slide")," (default is ",Object(o.b)("inlineCode",{parentName:"p"},"front"),"). It specifies the way the drawer will be displayed. When set to ",Object(o.b)("inlineCode",{parentName:"p"},"front")," the drawer will slide in and out along with the gesture and will display on top of the content view. When ",Object(o.b)("inlineCode",{parentName:"p"},"back")," is used the drawer displays behind the content view and can be revealed with gesture of pulling the content view to the side. Finally ",Object(o.b)("inlineCode",{parentName:"p"},"slide")," option makes the drawer appear like it is attached to the side of the content view; when you pull both content view and drawer will follow the gesture."),Object(o.b)("p",null,"Type ",Object(o.b)("inlineCode",{parentName:"p"},"slide"),":"),Object(o.b)(c.a,{mdxType:"GifGallery"},Object(o.b)("img",{src:Object(i.a)("gifs/drawer-slide.gif"),width:"280"})),Object(o.b)("p",null,"Type ",Object(o.b)("inlineCode",{parentName:"p"},"front"),":"),Object(o.b)(c.a,{mdxType:"GifGallery"},Object(o.b)("img",{src:Object(i.a)("gifs/drawer-front.gif"),width:"280"})),Object(o.b)("p",null,"Type ",Object(o.b)("inlineCode",{parentName:"p"},"back"),":"),Object(o.b)(c.a,{mdxType:"GifGallery"},Object(o.b)("img",{src:Object(i.a)("gifs/drawer-back.gif"),width:"280"})),Object(o.b)("h3",{id:"edgewidth"},Object(o.b)("inlineCode",{parentName:"h3"},"edgeWidth")),Object(o.b)("p",null,"number, allows for defining how far from the edge of the content view the gesture should activate."),Object(o.b)("h3",{id:"hidestatusbar"},Object(o.b)("inlineCode",{parentName:"h3"},"hideStatusBar")),Object(o.b)("p",null,"boolean, when set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," Drawer component will use ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/statusbar.html"}),"StatusBar"),' API to hide the OS status bar whenever the drawer is pulled or when its in an "open" state.'),Object(o.b)("h3",{id:"statusbaranimation"},Object(o.b)("inlineCode",{parentName:"h3"},"statusBarAnimation")),Object(o.b)("p",null,"possible values are: ",Object(o.b)("inlineCode",{parentName:"p"},"slide"),", ",Object(o.b)("inlineCode",{parentName:"p"},"none")," or ",Object(o.b)("inlineCode",{parentName:"p"},"fade")," (defaults to ",Object(o.b)("inlineCode",{parentName:"p"},"slide"),"). Can be used when ",Object(o.b)("inlineCode",{parentName:"p"},"hideStatusBar")," is set to ",Object(o.b)("inlineCode",{parentName:"p"},"true")," and will select the animation used for hiding/showing the status bar. See ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"http://facebook.github.io/react-native/docs/statusbar.html#statusbaranimation"}),"StatusBar")," documentation for more details."),Object(o.b)("h3",{id:"overlaycolor"},Object(o.b)("inlineCode",{parentName:"h3"},"overlayColor")),Object(o.b)("p",null,"color (default to ",Object(o.b)("inlineCode",{parentName:"p"},'"black"'),") of a semi-transparent overlay to be displayed on top of the content view when drawer gets open. A solid color should be used as the opacity is added by the Drawer itself and the opacity of the overlay is animated (from 0% to 70%)."),Object(o.b)("h3",{id:"rendernavigationview"},Object(o.b)("inlineCode",{parentName:"h3"},"renderNavigationView")),Object(o.b)("p",null,"function. This attribute is present in the standard implementation already and is one of the required params. Gesture handler version of DrawerLayout make it possible for the function passed as ",Object(o.b)("inlineCode",{parentName:"p"},"renderNavigationView")," to take an Animated value as a parameter that indicates the progress of drawer opening/closing animation (progress value is 0 when closed and 1 when opened). This can be used by the drawer component to animated its children while the drawer is opening or closing."),Object(o.b)("h3",{id:"ondrawerclose"},Object(o.b)("inlineCode",{parentName:"h3"},"onDrawerClose")),Object(o.b)("p",null,"function. This function is called when the drawer is closed."),Object(o.b)("h3",{id:"ondraweropen"},Object(o.b)("inlineCode",{parentName:"h3"},"onDrawerOpen")),Object(o.b)("p",null,"function. This function is called when the drawer is opened."),Object(o.b)("h3",{id:"ondrawerslide"},Object(o.b)("inlineCode",{parentName:"h3"},"onDrawerSlide")),Object(o.b)("p",null,"function. This function is called as a drawer sliding open from touch events. The progress of the drawer opening/closing is passed back as 0 when closed and 1 when opened."),Object(o.b)("h3",{id:"ondrawerstatechanged"},Object(o.b)("inlineCode",{parentName:"h3"},"onDrawerStateChanged")),Object(o.b)("p",null,"function. This function is called when the status of the drawer changes. Possible values that can be passed back are: 'Idle', 'Dragging', and 'Settling'."),Object(o.b)("h3",{id:"enabletrackpadtwofingergesture-ios-only"},Object(o.b)("inlineCode",{parentName:"h3"},"enableTrackpadTwoFingerGesture")," (iOS only)"),Object(o.b)("p",null,"Enables two-finger gestures on supported devices, for example iPads with trackpads. If not enabled the gesture will require click + drag, with enableTrackpadTwoFingerGesture swiping with two fingers will also trigger the gesture."),Object(o.b)("h3",{id:"children"},Object(o.b)("inlineCode",{parentName:"h3"},"children")),Object(o.b)("p",null,"component or function. Children is a component which is rendered by default and is wrapped by drawer. However, it could be also a render function which takes an Animated value as a parameter that indicates the progress of drawer opening/closing animation (progress value is 0 when closed and 1 when opened) is the same way like ",Object(o.b)("inlineCode",{parentName:"p"},"renderNavigationView")," prop."),Object(o.b)("h2",{id:"methods"},"Methods"),Object(o.b)("h3",{id:"opendraweroptions"},Object(o.b)("inlineCode",{parentName:"h3"},"openDrawer(options)")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"openDrawer")," can take an optional ",Object(o.b)("inlineCode",{parentName:"p"},"options")," parameter which is an object, enabling further customization of the open animation."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"options")," has two optional properties:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"velocity"),": number, the initial velocity of the object attached to the spring. Default 0 (object is at rest).\n",Object(o.b)("inlineCode",{parentName:"p"},"speed"),": number, controls speed of the animation. Default 12."),Object(o.b)("h3",{id:"closedraweroptions"},Object(o.b)("inlineCode",{parentName:"h3"},"closeDrawer(options)")),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"closeDrawer")," can take an optional ",Object(o.b)("inlineCode",{parentName:"p"},"options")," parameter which is an object, enabling further customization of the close animation."),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"options")," has two optional properties:"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"velocity"),": number, the initial velocity of the object attached to the spring. Default 0 (object is at rest).\n",Object(o.b)("inlineCode",{parentName:"p"},"speed"),": number, controls speed of the animation. Default 12."),Object(o.b)("h2",{id:"example"},"Example:"),Object(o.b)("p",null,"See the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://github.com/software-mansion/react-native-gesture-handler/blob/master/examples/Example/src/horizontalDrawer/index.tsx"}),"drawer example")," from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/react-native-gesture-handler/docs/next/example"}),"GestureHandler Example App")," or view it directly on your phone by visiting ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://snack.expo.io/@adamgrzybowski/react-native-gesture-handler-demo"}),"our expo demo"),"."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'class Drawerable extends Component {\n  handleDrawerSlide = (status) => {\n    // outputs a value between 0 and 1\n    console.log(status);\n  };\n\n  renderDrawer = () => {\n    return (\n      <View>\n        <Text>I am in the drawer!</Text>\n      </View>\n    );\n  };\n\n  render() {\n    return (\n      <View style={{ flex: 1 }}>\n        <DrawerLayout\n          drawerWidth={200}\n          drawerPosition={DrawerLayout.positions.Right}\n          drawerType="front"\n          drawerBackgroundColor="#ddd"\n          renderNavigationView={this.renderDrawer}\n          onDrawerSlide={this.handleDrawerSlide}>\n          <View>\n            <Text>Hello, it\'s me</Text>\n          </View>\n        </DrawerLayout>\n      </View>\n    );\n  }\n}\n')))}b.isMDXComponent=!0},218:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return h}));var a=n(0),r=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var l=r.a.createContext({}),s=function(e){var t=r.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=s(e.components);return r.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},u=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,l=d(e,["components","mdxType","originalType","parentName"]),p=s(n),u=a,h=p["".concat(i,".").concat(u)]||p[u]||b[u]||o;return n?r.a.createElement(h,c(c({ref:t},l),{},{components:n})):r.a.createElement(h,c({ref:t},l))}));function h(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var c={};for(var d in t)hasOwnProperty.call(t,d)&&(c[d]=t[d]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<o;l++)i[l]=n[l];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},219:function(e,t,n){"use strict";var a=n(0),r=n(20);t.a=function(){var e=Object(a.useContext)(r.a);if(null===e)throw new Error("Docusaurus context not provided");return e}},220:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"a",(function(){return i}));var a=n(219),r=n(221);function o(){var e=Object(a.a)().siteConfig,t=(e=void 0===e?{}:e).baseUrl,n=void 0===t?"/":t,o=e.url;return{withBaseUrl:function(e,t){return function(e,t,n,a){var o=void 0===a?{}:a,i=o.forcePrependBaseUrl,c=void 0!==i&&i,d=o.absolute,l=void 0!==d&&d;if(!n)return n;if(n.startsWith("#"))return n;if(Object(r.b)(n))return n;if(c)return t+n;var s=!n.startsWith(t)?t+n.replace(/^\//,""):n;return l?e+s:s}(o,n,e,t)}}}function i(e,t){return void 0===t&&(t={}),(0,o().withBaseUrl)(e,t)}},221:function(e,t,n){"use strict";function a(e){return!0===/^(\w*:|\/\/)/.test(e)}function r(e){return void 0!==e&&!a(e)}n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return r}))},223:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o={container:{display:"flex",justifyContent:"space-evenly",flexWrap:"wrap"},img:{border:"1px solid #acacac",borderRadius:"6px",boxShadow:"0 0 20px #acacac",marginTop:"1em",marginBottom:"1em"}};t.a=function(e){var t=e.children;return r.a.createElement("div",{style:o.container},a.Children.map(t,(function(e){return Object(a.cloneElement)(e,Object.assign({},e.props.style,{style:o.img}))})))}}}]);