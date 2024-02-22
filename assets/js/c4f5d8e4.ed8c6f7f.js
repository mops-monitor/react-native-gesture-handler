"use strict";(self.webpackChunkreact_native_gesture_handler_docs=self.webpackChunkreact_native_gesture_handler_docs||[]).push([[4195],{1074:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Vt});var a=n(7294),o=n(6577);const l={container:"container_czXe",waveContainer:"waveContainer_VUls"};var s=n(412),r=n(2949),i=n(1262);const c={wave:"wave_w4vn"};var u=n(7086);const d=function(e){let{color:t}=e;const{windowWidth:n}=(0,u.Z)();return a.createElement(i.Z,null,(()=>a.createElement("svg",{className:c.wave,xmlns:"http://www.w3.org/2000/svg",width:n*(n<996?1.2:1),fill:"none",viewBox:"0 0 1440 1051"},a.createElement("path",{fill:t,d:"M2041.08 808.08v243.04c-42.05-42.97-86.1-84.67-132.12-124.91C1364.96 450.52 660.92 275.6 0 387.87V6.67C652.6-40.6 1323.09 162.89 1854.57 627.63c65.84 57.61 128.03 117.85 186.51 180.44v.01z"}))))},h={bigWave:"bigWave_GQXU"};const m=function(e){let{color:t}=e;const{windowWidth:n}=(0,u.Z)();return a.createElement(i.Z,null,(()=>a.createElement("svg",{className:h.bigWave,xmlns:"http://www.w3.org/2000/svg",width:n*(n<996?1.2:1),fill:"none",viewBox:"0 0 2494 629"},a.createElement("g",{clipPath:"url(#clip0_427_368)"},a.createElement("path",{fill:t,d:"M2494.1 483.618v145.454c-51.38-25.717-105.21-50.673-161.45-74.756C1667.91 269.626 807.611 265.809 0 333V3.992c797.445-28.29 1616.75 93.494 2266.19 371.63 80.46 34.479 156.45 70.531 227.91 107.99v.006z"})),a.createElement("defs",null,a.createElement("clipPath",{id:"clip0_427_368"},a.createElement("path",{fill:"#fff",d:"M0 0H2494V629H0z"}))))))},v=()=>{const e="dark"===(0,r.I)().colorMode?a.createElement(a.Fragment,null,a.createElement(d,{color:"var(--swm-purple-dark-120)"}),a.createElement(m,{color:"var(--swm-purple-dark-120)"})):a.createElement(a.Fragment,null,a.createElement(d,{color:"var(--swm-blue-light-40)"}),a.createElement(m,{color:"var(--swm-blue-light-40)"}));return a.createElement(a.Fragment,null,s.Z.canUseViewport&&e)};var p=n(2263);const f={hero:"hero_Y2C1",heading:"heading_s4iA",headingLabel:"headingLabel_Qrop",subheadingLabel:"subheadingLabel_H6cl",buttonContainer:"buttonContainer__LFg"},_={homepageButton:"homepageButton_QOs6",homepageButtonLink:"homepageButtonLink_vpcc",arrow:"arrow_NhXA",buttonTransparentStyling:"buttonTransparentStyling_ogWN",buttonPurpleStyling:"buttonPurpleStyling_eXAK",buttonPurpleBorderStyling:"buttonPurpleBorderStyling_rzjB"};var g;function w(){return w=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},w.apply(this,arguments)}const E=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",w({width:18,height:14,viewBox:"0 0 18 14",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,g||(g=a.createElement("path",{d:"M17 7H1M11 13l6-6-6-6"})))};var y=n(6010);const b={TO_PURPLE:_.buttonTransparentStyling,TO_WHITE:_.buttonWhiteStyling,TO_TRANSPARENT:_.buttonPurpleStyling},S={PURPLE:_.buttonPurpleBorderStyling},P=e=>{let{title:t,href:n,target:o="_self",backgroundStyling:l=b.TO_TRANSPARENT,borderStyling:s=S.PURPLE}=e;return a.createElement("a",{href:n,target:o,className:_.homepageButtonLink},a.createElement("div",{className:(0,y.Z)(_.homepageButton,l,s)},t,a.createElement("div",{className:_.arrow},a.createElement(E,null))))},X=()=>a.createElement("section",{className:f.hero},a.createElement("div",{className:f.heading},a.createElement("div",null,a.createElement("h1",{className:f.headingLabel},a.createElement("span",null,"React Native"),a.createElement("span",null,"Gesture Handler")),a.createElement("h2",{className:f.subheadingLabel},"Declarative API exposing platform native touch and gesture system to React Native.")),a.createElement("div",{className:f.lowerHeading},a.createElement("div",{className:f.buttonContainer},a.createElement(P,{href:"/react-native-gesture-handler/docs/",title:"Get started"}))))),Y="heading_Z_sq",C="subheading_fuy9",H="playground_GmEd",k="exampleContainer_WMma",x="title_RAvv",N="interactiveExampleWrapper_qzE1",I={container:"container_DsUI"};function R(e){let{component:t,idx:n}=e;return a.createElement(i.Z,{fallback:a.createElement("div",null,"Loading...")},(()=>a.createElement("div",{id:`container-${n}`,className:I.container},a.createElement(a.Fragment,{key:n},t))))}const D=e=>{let{title:t,component:n,idx:o,href:l}=e;return a.createElement(a.Fragment,null,a.createElement("div",{className:k},a.createElement("a",{className:x,href:l},t),a.createElement("div",{className:N},a.createElement(R,{idx:o,component:n}))))};var L,M=n(2862),T=n(758),Z=n(5842),j=n(4306),G=n(9638),A=n(8510);function F(){return F=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},F.apply(this,arguments)}const O=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",F({width:26,height:26,viewBox:"0 0 26 26",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,L||(L=a.createElement("path",{d:"M1.92 1.24a1.763 1.763 0 0 0-.673 2.445l8.928 15.034c.262.436-.141.98-.646.86l-5.818-1.383c-.987-.235-1.984.354-2.225 1.314-.241.96.364 1.929 1.351 2.163 2.426.577 11.876 4.212 13.81 3.126l6.95-3.901c.496-.279.831-.767.862-1.323.091-1.627.067-5.192-1.532-8.014h.001l-3.681-6.2c-.509-.856-1.634-1.15-2.515-.655a1.763 1.763 0 0 0-.674 2.444l-.46-.775c-.508-.856-1.634-1.149-2.514-.655a1.763 1.763 0 0 0-.674 2.445l-.46-.775c-.509-.856-1.635-1.15-2.515-.655a1.763 1.763 0 0 0-.674 2.445L4.435 1.895C3.927 1.04 2.801.745 1.921 1.24Z",fill:"#fff",stroke:"#001A72",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))},B={handPan:"handPan_rVhj",panClone:"panClone_aJji"},U=100,z=M.Z.create({circle:{backgroundColor:"var(--swm-purple-light-100)",border:"8px solid var(--swm-purple-light-80)"}}),V=M.Z.create({circle:{backgroundColor:"var(--swm-purple-light-100)",border:"8px solid var(--swm-purple-dark-100)"}}),W=()=>"dark"===(0,r.I)().colorMode?V:z;function q(e,t,n,a){if(void 0!==n&&void 0!==a){const o=e-n,l=t-a;return o*o+l*l<=U*U}return e*e+t*t<=U*U}const Q={code:"function anonymous(){const{setShowHand}=this.__closure;return setShowHand(false);}"},$={code:"function anonymous(event){const{offsetX,offsetY}=this.__closure;offsetX.value=Math.abs(offsetX.value)<=100?offsetX.value+event.changeX>=100?100:offsetX.value+event.changeX<=-100?-100:offsetX.value+event.changeX:offsetX.value;offsetY.value=Math.abs(offsetY.value)<=100?offsetY.value+event.changeY>=100?100:offsetY.value+event.changeY<=-100?-100:offsetY.value+event.changeY:offsetY.value;}"},J={code:"function anonymous(){const{setShowHand}=this.__closure;return setShowHand(true);}"},K={code:"function anonymous(){const{isInsideCircle,offsetX,offsetY,clamp}=this.__closure;return{transform:[{translateX:isInsideCircle(offsetX.value,offsetY.value)&&clamp(offsetX.value,-100,100)},{translateY:isInsideCircle(offsetX.value,offsetY.value)&&clamp(offsetY.value,-100,100)}]};}"};function ee(){const e=W(),[t,n]=(0,a.useState)(!0),o=(0,T.y)(0),l=(0,T.y)(0),s=A.oF.Pan().onStart(function(){const e=()=>n(!1);return e.__closure={setShowHand:n},e.__workletHash=0xa0f70bf3940,e.__initData=Q,e}()).onChange(function(){const e=function(e){o.value=Math.abs(o.value)<=100?o.value+e.changeX>=100?100:o.value+e.changeX<=-100?-100:o.value+e.changeX:o.value,l.value=Math.abs(l.value)<=100?l.value+e.changeY>=100?100:l.value+e.changeY<=-100?-100:l.value+e.changeY:l.value};return e.__closure={offsetX:o,offsetY:l},e.__workletHash=1507356565965,e.__initData=$,e}()).onEnd(function(){const e=()=>n(!0);return e.__closure={setShowHand:n},e.__workletHash=0x95b289ae24b,e.__initData=J,e}()).minDistance(0),r=(0,Z.l)(function(){const e=()=>({transform:[{translateX:q(o.value,l.value)&&(0,j.uZ)(o.value,-100,100)},{translateY:q(o.value,l.value)&&(0,j.uZ)(l.value,-100,100)}]});return e.__closure={isInsideCircle:q,offsetX:o,offsetY:l,clamp:j.uZ},e.__workletHash=1321364783980,e.__initData=K,e}());return a.createElement(A.cS,{style:te.container},a.createElement(A.Le,{gesture:s},a.createElement(G.n,{style:[te.circle,r,e.circle]},a.createElement("div",{className:B.panClone}),t&&a.createElement(O,{className:B.handPan}))))}const te=M.Z.create({container:{height:2*U,width:2*U,alignItems:"center",justifyContent:"center"},circle:{height:56,cursor:"pointer",width:56,borderRadius:100}});var ne=n(6328);const ae={handTap:"handTap_njS3",tapClone:"tapClone_i3zr"},oe={code:"function anonymous(){const{setShowHand,pressed}=this.__closure;setShowHand(false);pressed.value=true;}"},le={code:"function anonymous(){const{setShowHand}=this.__closure;setShowHand(true);}"},se={code:"function anonymous(){const{pressed}=this.__closure;pressed.value=false;}"},re={code:"function anonymous(){const{pressed,withTiming}=this.__closure;return{backgroundColor:pressed.value?'var(--swm-yellow-dark-80)':'var(--swm-purple-light-100)',transform:[{scale:withTiming(pressed.value?1.8:1)}]};}"};function ie(){const e=W(),t=(0,T.y)(!1),[n,o]=(0,a.useState)(!0),l=A.oF.Tap().onBegin(function(){const e=function(){o(!1),t.value=!0};return e.__closure={setShowHand:o,pressed:t},e.__workletHash=0xf6d107f4173,e.__initData=oe,e}()).onEnd(function(){const e=function(){o(!0)};return e.__closure={setShowHand:o},e.__workletHash=7609327925217,e.__initData=le,e}()).onFinalize(function(){const e=function(){t.value=!1};return e.__closure={pressed:t},e.__workletHash=200209545011,e.__initData=se,e}()),s=(0,Z.l)(function(){const e=()=>({backgroundColor:t.value?"var(--swm-yellow-dark-80)":"var(--swm-purple-light-100)",transform:[{scale:(0,ne.j)(t.value?1.8:1)}]});return e.__closure={pressed:t,withTiming:ne.j},e.__workletHash=1714337988519,e.__initData=re,e}());return a.createElement(A.cS,{style:ce.container},a.createElement(A.Le,{gesture:l},a.createElement(G.n,{style:[ce.circle,s,e.circle]},a.createElement("div",{className:ae.tapClone}),n&&a.createElement(O,{className:ae.handTap}))))}const ce=M.Z.create({container:{height:2*U,width:2*U,alignItems:"center",justifyContent:"center"},circle:{height:56,cursor:"pointer",width:56,border:"8px solid var(--swm-purple-light-80)",backgroundColor:"var(--swm-purple-light-100)",borderRadius:100}}),ue={handFling:"handFling_f_p5",arrowsFling:"arrowsFling_AT7A",flingClone:"flingClone_Q3O_"};var de;function he(){return he=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},he.apply(this,arguments)}const me=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",he({width:29,height:25,viewBox:"0 0 29 25",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,de||(de=a.createElement("path",{d:"M7 23.662a1 1 0 1 0 2 0H7ZM8.707 4.955a1 1 0 0 0-1.414 0L.929 11.319a1 1 0 1 0 1.414 1.414L8 7.076l5.657 5.657a1 1 0 0 0 1.414-1.414L8.707 4.955ZM9 23.662v-18H7v18h2ZM20 19.662a1 1 0 1 0 2 0h-2ZM21.707.955a1 1 0 0 0-1.414 0l-6.364 6.364a1 1 0 0 0 1.414 1.414L21 3.076l5.657 5.657a1 1 0 1 0 1.414-1.414L21.707.955ZM22 19.662v-18h-2v18h2Z",fill:"#001A72"})))},ve={code:"function anonymous(e){const{setShowHand,startPositionX,startPositionY}=this.__closure;setShowHand(false);startPositionX.value=e.x;startPositionY.value=e.y;}"},pe={code:"function anonymous(e){const{endPositionX,endPositionY}=this.__closure;endPositionX.value=e.x;endPositionY.value=e.y;}"},fe={code:"function anonymous(e){const{endPositionX,endPositionY,startPositionX,startPositionY,positionX,RADIUS,withTiming,config,positionY}=this.__closure;endPositionX.value=e.x;endPositionY.value=e.y;const valueX=Math.abs(startPositionX.value-endPositionX.value);const valueY=Math.abs(startPositionY.value-endPositionY.value);positionX.value=startPositionX.value<endPositionX.value?positionX.value+e.x<RADIUS?withTiming(positionX.value+valueX,config):RADIUS:positionX.value-e.x>-RADIUS?withTiming(positionX.value-valueX,config):-RADIUS;positionY.value=startPositionY.value<endPositionY.value?positionY.value+valueY<RADIUS?withTiming(positionY.value+valueY,config):RADIUS:positionY.value-valueY>-RADIUS?withTiming(positionY.value-valueY,config):-RADIUS;}"},_e={code:"function anonymous(){const{setShowHand}=this.__closure;setShowHand(true);}"},ge={code:"function anonymous(){const{isInsideCircle,positionX,positionY}=this.__closure;return{transform:[{translateX:isInsideCircle(positionX.value,positionY.value)&&positionX.value},{translateY:isInsideCircle(positionX.value,positionY.value)&&positionY.value}]};}"};function we(){const e=W(),[t,n]=(0,a.useState)(!0),o=(0,T.y)(0),l=(0,T.y)(0),s=(0,T.y)(0),r=(0,T.y)(0),i=(0,T.y)(0),c=(0,T.y)(0),u={duration:100},d=A.oF.Fling().direction(A.Ns.UP|A.Ns.DOWN|A.Ns.LEFT|A.Ns.RIGHT).onBegin(function(){const e=function(e){n(!1),o.value=e.x,s.value=e.y};return e.__closure={setShowHand:n,startPositionX:o,startPositionY:s},e.__workletHash=0x9e64c202fee,e.__initData=ve,e}()).onEnd(function(){const e=function(e){l.value=e.x,r.value=e.y};return e.__closure={endPositionX:l,endPositionY:r},e.__workletHash=3374814362725,e.__initData=pe,e}()).onStart(function(){const e=function(e){l.value=e.x,r.value=e.y;const t=Math.abs(o.value-l.value),n=Math.abs(s.value-r.value);i.value=o.value<l.value?i.value+e.x<U?(0,ne.j)(i.value+t,u):U:i.value-e.x>-U?(0,ne.j)(i.value-t,u):-U,c.value=s.value<r.value?c.value+n<U?(0,ne.j)(c.value+n,u):U:c.value-n>-U?(0,ne.j)(c.value-n,u):-U};return e.__closure={endPositionX:l,endPositionY:r,startPositionX:o,startPositionY:s,positionX:i,RADIUS:U,withTiming:ne.j,config:u,positionY:c},e.__workletHash=5838452545737,e.__initData=fe,e}()).onFinalize(function(){const e=function(){n(!0)};return e.__closure={setShowHand:n},e.__workletHash=7609327925217,e.__initData=_e,e}()),h=(0,Z.l)(function(){const e=()=>({transform:[{translateX:q(i.value,c.value)&&i.value},{translateY:q(i.value,c.value)&&c.value}]});return e.__closure={isInsideCircle:q,positionX:i,positionY:c},e.__workletHash=0x9db5e5f97d3,e.__initData=ge,e}());return a.createElement(A.cS,{style:Ee.container},a.createElement(A.Le,{gesture:d},a.createElement(a.Fragment,null,a.createElement(G.n,{style:[Ee.circle,h,e.circle]},a.createElement("div",{className:ue.flingClone}),t&&a.createElement("div",null,a.createElement(me,{className:ue.arrowsFling}),a.createElement(O,{className:ue.handFling}))))))}const Ee=M.Z.create({container:{height:2*U,width:2*U,alignItems:"center",justifyContent:"center"},circle:{height:56,cursor:"pointer",width:56,border:"8px solid var(--swm-purple-light-80)",backgroundColor:"var(--swm-purple-light-100)",borderRadius:100}}),ye={handLongPress:"handLongPress_n9hk",longPressClone:"longPressClone_zTqR"},be={code:"function anonymous(){const{pressed,setShowHand}=this.__closure;pressed.value=true;setShowHand(false);}"},Se={code:"function anonymous(){const{pressed,setShowHand}=this.__closure;pressed.value=false;setShowHand(true);}"},Pe={code:"function anonymous(){const{pressed,withTiming}=this.__closure;return{backgroundColor:pressed.value?'var(--swm-yellow-dark-80)':'var(--swm-purple-light-100)',transform:[{scale:withTiming(pressed.value?1.8:1)}]};}"};function Xe(){const e=W(),[t,n]=(0,a.useState)(!0),o=(0,T.y)(!1),l=A.oF.LongPress().onStart(function(){const e=function(){o.value=!0,n(!1)};return e.__closure={pressed:o,setShowHand:n},e.__workletHash=0xf8d62dffb33,e.__initData=be,e}()).onEnd(function(){const e=function(){o.value=!1,n(!0)};return e.__closure={pressed:o,setShowHand:n},e.__workletHash=3879570764979,e.__initData=Se,e}()),s=(0,Z.l)(function(){const e=()=>({backgroundColor:o.value?"var(--swm-yellow-dark-80)":"var(--swm-purple-light-100)",transform:[{scale:(0,ne.j)(o.value?1.8:1)}]});return e.__closure={pressed:o,withTiming:ne.j},e.__workletHash=1714337988519,e.__initData=Pe,e}());return a.createElement(A.cS,{style:Ye.container},a.createElement(A.Le,{gesture:l},a.createElement(G.n,{style:[Ye.circle,s,e.circle]},a.createElement("div",{className:ye.longPressClone}),t&&a.createElement(O,{className:ye.handLongPress}))))}const Ye=M.Z.create({container:{height:2*U,width:2*U,alignItems:"center",justifyContent:"center"},circle:{height:56,cursor:"pointer",width:56,border:"8px solid var(--swm-purple-light-80)",backgroundColor:"var(--swm-purple-light-100)",borderRadius:100}});var Ce=n(7177);const He={wrapper:"wrapper_MwgZ",rotationClone:"rotationClone_oiJb",handRotation:"handRotation_NQcL",arrowRotation:"arrowRotation_tmeY"};var ke;function xe(){return xe=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},xe.apply(this,arguments)}const Ne=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",xe({width:27,height:32,viewBox:"0 0 27 32",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,ke||(ke=a.createElement("path",{d:"M7.146 3.648c-1 .251-1.584 1.244-1.307 2.217l4.865 17.089c.144.496-.397.922-.863.671l-5.38-2.893c-.912-.49-2.05-.178-2.54.699-.49.876-.148 1.985.765 2.476 2.244 1.207 10.616 7.266 12.81 6.714l7.883-1.983c.563-.142 1.022-.532 1.198-1.069.517-1.569 1.43-5.068.591-8.255h.002l-2.006-7.047c-.277-.973-1.312-1.558-2.31-1.307-.999.251-1.584 1.244-1.307 2.217l-.25-.881c-.277-.973-1.312-1.558-2.31-1.307-.999.251-1.584 1.244-1.307 2.217l-.251-.881c-.883-3.295-1.252-4.672-2.78-9.96-.121-.416-.867-1.561-2.122-1.225-1.255.336-1.786 1.151-1.505 2.197.733 3.166 2.583 9.168 2.79 9.898l-2.357-8.28c-.277-.973-1.31-1.558-2.31-1.307Z",fill:"#FCFCFF",stroke:"#001A72",strokeWidth:2,strokeLinecap:"round",strokeLinejoin:"round"})))};var Ie;function Re(){return Re=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},Re.apply(this,arguments)}const De=e=>{let{title:t,titleId:n,...o}=e;return a.createElement("svg",Re({width:34,height:24,viewBox:"0 0 34 24",fill:"none",xmlns:"http://www.w3.org/2000/svg","aria-labelledby":n},o),t?a.createElement("title",{id:n},t):null,Ie||(Ie=a.createElement("path",{d:"M.802 7.33A1 1 0 0 0 .9 8.741l6.783 5.915a1 1 0 1 0 1.315-1.508l-6.03-5.257 5.257-6.03A1 1 0 0 0 6.717.547L.802 7.33ZM33.14 23.143C30.873 17.03 21.383 5.628 1.488 6.99l.136 1.995c18.957-1.297 27.663 9.521 29.64 14.853l1.875-.695Z",fill:"#001A72"})))},Le={code:"function anonymous(){const{setShowHand}=this.__closure;return setShowHand(false);}"},Me={code:"function anonymous(e){const{isPanEnabled,pointerX,pointerY,dx,centerX,dy,centerY,isInsideCircle,oppositePointerX,oppositePointerY,rotationVal,setShowGestureCircle}=this.__closure;if(isPanEnabled){pointerX.value=e.absoluteX;pointerY.value=e.absoluteY;dx.value=centerX-pointerX.value;dy.value=centerY-pointerY.value;if(isInsideCircle(pointerX.value,pointerY.value,centerX,centerY)){if(pointerX.value<centerX){oppositePointerX.value=centerX+dx.value;}else{oppositePointerX.value=centerX-Math.abs(dx.value);}if(pointerY.value<centerY){oppositePointerY.value=centerY+dy.value;}else{oppositePointerY.value=centerY-Math.abs(dy.value);}const vectorX=oppositePointerX.value-pointerX.value;const vectorY=oppositePointerY.value-pointerY.value;rotationVal.value=Math.atan2(vectorY,vectorX);setShowGestureCircle(true);}}}"},Te={code:"function anonymous(){const{setShowGestureCircle,setShowHand}=this.__closure;setShowGestureCircle(false);setShowHand(true);}"},Ze={code:"function anonymous(){const{setIsPanEnabled,setShowGestureCircle,setShowHand}=this.__closure;setIsPanEnabled(false);setShowGestureCircle(false);setShowHand(false);}"},je={code:"function anonymous(e){const{rotationVal,savedRotation}=this.__closure;rotationVal.value=savedRotation.value+e.rotation;}"},Ge={code:"function anonymous(){const{savedRotation,rotationVal,setIsPanEnabled,setShowHand}=this.__closure;savedRotation.value=rotationVal.value;setIsPanEnabled(true);setShowHand(true);}"},Ae={code:'function anonymous(){const{rotationVal}=this.__closure;return{transform:[{rotateZ:rotationVal.value*180/Math.PI+"deg"},{rotateY:rotationVal.value*180/Math.PI+"deg"},{rotateX:rotationVal.value*180/Math.PI+"deg"}]};}'},Fe={code:"function anonymous(){const{dx,dy}=this.__closure;return{transform:[{translateX:dx.value},{translateY:dy.value}]};}"};function Oe(){const e="dark"===(0,r.I)().colorMode?Ue:Be,t=(0,T.y)(0),[n,o]=(0,a.useState)(!0),[l,s]=(0,a.useState)(!1),[i,c]=(0,a.useState)(!0),u=(0,T.y)(1),d=(0,T.y)(0),h=(0,T.y)(0),m=(0,T.y)(0),v=(0,T.y)(0),p=(0,T.y)(0),f=(0,T.y)(0),[_,g]=(0,a.useState)(0),[w,E]=(0,a.useState)(0);(0,a.useEffect)((()=>{const e=()=>{const e=document.getElementById("container-2");e&&(g(e.offsetLeft+e.offsetWidth/2-window.scrollX),E(e.offsetTop+e.offsetHeight/2-window.scrollY))};return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]);const y=A.oF.Pan().onStart(function(){const e=()=>c(!1);return e.__closure={setShowHand:c},e.__workletHash=0xa0f70bf3940,e.__initData=Le,e}()).onChange(function(){const e=function(e){if(n&&(d.value=e.absoluteX,h.value=e.absoluteY,p.value=_-d.value,f.value=w-h.value,q(d.value,h.value,_,w))){d.value<_?m.value=_+p.value:m.value=_-Math.abs(p.value),h.value<w?v.value=w+f.value:v.value=w-Math.abs(f.value);const e=m.value-d.value,n=v.value-h.value;t.value=Math.atan2(n,e),s(!0)}};return e.__closure={isPanEnabled:n,pointerX:d,pointerY:h,dx:p,centerX:_,dy:f,centerY:w,isInsideCircle:q,oppositePointerX:m,oppositePointerY:v,rotationVal:t,setShowGestureCircle:s},e.__workletHash=3187704506172,e.__initData=Me,e}()).onEnd(function(){const e=function(){s(!1),c(!0)};return e.__closure={setShowGestureCircle:s,setShowHand:c},e.__workletHash=0xce1094f554a,e.__initData=Te,e}()),b=A.oF.Rotation().onStart(function(){const e=function(){o(!1),s(!1),c(!1)};return e.__closure={setIsPanEnabled:o,setShowGestureCircle:s,setShowHand:c},e.__workletHash=0xc1f81a0150a,e.__initData=Ze,e}()).onUpdate(function(){const e=function(e){t.value=u.value+e.rotation};return e.__closure={rotationVal:t,savedRotation:u},e.__workletHash=8121329653686,e.__initData=je,e}()).onEnd(function(){const e=function(){u.value=t.value,o(!0),c(!0)};return e.__closure={savedRotation:u,rotationVal:t,setIsPanEnabled:o,setShowHand:c},e.__workletHash=0xd746dfce8e7,e.__initData=Ge,e}()),S=(0,Z.l)(function(){const e=()=>({transform:[{rotateZ:180*t.value/Math.PI+"deg"},{rotateY:180*t.value/Math.PI+"deg"},{rotateX:180*t.value/Math.PI+"deg"}]});return e.__closure={rotationVal:t},e.__workletHash=7913991588519,e.__initData=Ae,e}()),P=(0,Z.l)(function(){const e=()=>({transform:[{translateX:p.value},{translateY:f.value}]});return e.__closure={dx:p,dy:f},e.__workletHash=2579617694763,e.__initData=Fe,e}());return a.createElement(A.Le,{gesture:A.oF.Simultaneous(y,b)},a.createElement(A.cS,{style:ze.container},a.createElement("div",{className:He.rotationClone}),i&&a.createElement(De,{className:He.arrowRotation}),a.createElement("div",{className:He.wrapper},a.createElement(G.n,{style:[ze.circle,S,e.circle]}),a.createElement(Ce.Z,{style:[ze.circleStatic,S,e.circleStatic]})),i&&a.createElement(Ne,{className:He.handRotation}),l&&a.createElement(G.n,{style:[ze.smallCircle,P]})))}const Be={circle:{border:"8px solid var(--swm-purple-light-80)"},circleStatic:{backgroundColor:"var(--swm-purple-light-100)"}},Ue={circle:{border:"8px solid var(--swm-purple-dark-100)"},circleStatic:{backgroundColor:"var(--swm-purple-light-100)"}},ze=M.Z.create({container:{height:2*U,width:2*U,alignItems:"center",justifyContent:"center",cursor:"pointer",borderRadius:100},circle:{height:56,width:56,borderRadius:100,position:"absolute"},circleStatic:{position:"absolute",height:40,width:40,borderRadius:100},smallCircle:{position:"absolute",height:30,width:30,borderRadius:100,zIndex:15,backgroundColor:"var(--swm-purple-light-transparent-80)"}}),Ve={handPinchLeft:"handPinchLeft_dyyg",handPinchRight:"handPinchRight_b52r",hands:"hands_dGTh",pinchClone:"pinchClone_Adwl"},We={code:"function anonymous(){const{setShowHands}=this.__closure;return setShowHands(false);}"},qe={code:"function anonymous(e){const{isPanEnabled,pointerX,pointerY,centerX,centerY,isInsideCircle,dx,dy,oppositePointerX,oppositePointerY,RADIUS,scalePan,setShowGestureCircle}=this.__closure;if(isPanEnabled){pointerX.value=e.absoluteX;pointerY.value=e.absoluteY;console.log('CenterX: ',centerX);console.log('CenterY: ',centerY);console.log('PointerX: ',pointerX.value);console.log('PointerY: ',pointerY.value);if(isInsideCircle(pointerX.value,pointerY.value,centerX,centerY)){dx.value=centerX-pointerX.value;dy.value=centerY-pointerY.value;if(pointerX.value<centerX){oppositePointerX.value=centerX+dx.value;}else{oppositePointerX.value=centerX-Math.abs(dx.value);}if(pointerY.value<centerY){oppositePointerY.value=centerY+dy.value;}else{oppositePointerY.value=centerY-Math.abs(dy.value);}const distance=Math.sqrt(dx.value*dx.value+dy.value*dy.value);const maxDistance=RADIUS;const minScale=1;const maxScale=3;const scaleRange=maxScale-minScale;const scaleFactor=Math.min(distance/maxDistance,1);scalePan.value=minScale+scaleFactor*scaleRange;setShowGestureCircle(true);}}}"},Qe={code:"function anonymous(){const{setShowHands,setShowGestureCircle}=this.__closure;setShowHands(true);setShowGestureCircle(false);}"},$e={code:"function anonymous(){const{setIsPanEnabled,setShowGestureCircle,setShowHands}=this.__closure;setIsPanEnabled(false);setShowGestureCircle(false);setShowHands(false);}"},Je={code:"function anonymous(e){const{scale,savedScale}=this.__closure;scale.value=savedScale.value*e.scale<3?savedScale.value*e.scale>1?savedScale.value*e.scale:1:3;}"},Ke={code:"function anonymous(){const{savedScale,scale,setShowHands}=this.__closure;savedScale.value=scale.value;setShowHands(true);}"},et={code:"function anonymous(){const{isPanEnabled,scalePan,scale}=this.__closure;return{transform:[{scale:isPanEnabled?scalePan.value:scale.value}]};}"},tt={code:"function anonymous(){const{dx,dy}=this.__closure;return{transform:[{translateX:dx.value},{translateY:dy.value}]};}"},nt={code:"function anonymous(){const{isPanEnabled,scalePan,scale}=this.__closure;return{transform:[{scale:isPanEnabled?1/scalePan.value:1/scale.value},{translateX:isPanEnabled?-scalePan.value*scalePan.value:-scale.value*scale.value}],height:isPanEnabled?scalePan.value*40:scale.value*40};}"};function at(){const e=W(),[t,n]=(0,a.useState)(!0),[o,l]=(0,a.useState)(!0),[s,r]=(0,a.useState)(!1),i=(0,T.y)(1),c=(0,T.y)(1),u=(0,T.y)(1),d=(0,T.y)(0),h=(0,T.y)(0),m=(0,T.y)(0),v=(0,T.y)(0),p=(0,T.y)(0),f=(0,T.y)(0),[_,g]=(0,a.useState)(0),[w,E]=(0,a.useState)(0);(0,a.useEffect)((()=>{const e=()=>{const e=document.getElementById("container-5");e&&(g(e.offsetLeft+e.offsetWidth/2-window.scrollX),E(e.offsetTop+e.offsetHeight/2-window.scrollY))};return e(),window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}}),[]);const y=A.oF.Pan().onStart(function(){const e=()=>l(!1);return e.__closure={setShowHands:l},e.__workletHash=6866183930944,e.__initData=We,e}()).onChange(function(){const e=function(e){if(t&&(d.value=e.absoluteX,h.value=e.absoluteY,console.log("CenterX: ",_),console.log("CenterY: ",w),console.log("PointerX: ",d.value),console.log("PointerY: ",h.value),q(d.value,h.value,_,w))){p.value=_-d.value,f.value=w-h.value,d.value<_?m.value=_+p.value:m.value=_-Math.abs(p.value),h.value<w?v.value=w+f.value:v.value=w-Math.abs(f.value);const e=Math.sqrt(p.value*p.value+f.value*f.value),t=U,n=1,a=3-n,o=Math.min(e/t,1);u.value=n+o*a,r(!0)}};return e.__closure={isPanEnabled:t,pointerX:d,pointerY:h,centerX:_,centerY:w,isInsideCircle:q,dx:p,dy:f,oppositePointerX:m,oppositePointerY:v,RADIUS:U,scalePan:u,setShowGestureCircle:r},e.__workletHash=5708332708320,e.__initData=qe,e}()).onEnd(function(){const e=function(){l(!0),r(!1)};return e.__closure={setShowHands:l,setShowGestureCircle:r},e.__workletHash=0xa65435aec0a,e.__initData=Qe,e}()),b=A.oF.Pinch().onStart(function(){const e=function(){n(!1),r(!1),l(!1)};return e.__closure={setIsPanEnabled:n,setShowGestureCircle:r,setShowHands:l},e.__workletHash=7440045993674,e.__initData=$e,e}()).onUpdate(function(){const e=function(e){i.value=c.value*e.scale<3?c.value*e.scale>1?c.value*e.scale:1:3};return e.__closure={scale:i,savedScale:c},e.__workletHash=0xb65d09fb1d9,e.__initData=Je,e}()).onEnd(function(){const e=function(){c.value=i.value,l(!0)};return e.__closure={savedScale:c,scale:i,setShowHands:l},e.__workletHash=4773223758055,e.__initData=Ke,e}()),S=(0,Z.l)(function(){const e=()=>({transform:[{scale:t?u.value:i.value}]});return e.__closure={isPanEnabled:t,scalePan:u,scale:i},e.__workletHash=0xd2866b6952b,e.__initData=et,e}()),P=(0,Z.l)(function(){const e=()=>({transform:[{translateX:p.value},{translateY:f.value}]});return e.__closure={dx:p,dy:f},e.__workletHash=2579617694763,e.__initData=tt,e}()),X=(0,Z.l)(function(){const e=()=>({transform:[{scale:t?1/u.value:1/i.value},{translateX:t?-u.value*u.value:-i.value*i.value}],height:t?40*u.value:40*i.value});return e.__closure={isPanEnabled:t,scalePan:u,scale:i},e.__workletHash=0xca46f561613,e.__initData=nt,e}());return a.createElement(A.cS,{style:ot.container},a.createElement(A.Le,{gesture:A.oF.Simultaneous(b,y)},a.createElement(G.n,{style:[ot.circle,S,e.circle]},a.createElement("div",{className:Ve.pinchClone},o&&a.createElement(G.n,{style:X},a.createElement(O,{className:Ve.handPinchLeft}),a.createElement(O,{className:Ve.handPinchRight}))))),s&&a.createElement(G.n,{style:[ot.smallCircle,P]}))}const ot=M.Z.create({container:{height:2*U,width:2*U,alignItems:"center",justifyContent:"center"},circle:{width:56,height:56,cursor:"pointer",borderRadius:100},smallCircle:{position:"absolute",height:30,width:30,borderRadius:100,zIndex:15,backgroundColor:"var(--swm-purple-light-transparent-80)"}}),lt=[{title:"Gesture.Pan()",component:a.createElement(ee,null),href:"docs/gestures/pan-gesture"},{title:"Gesture.Tap()",component:a.createElement(ie,null),href:"docs/gestures/tap-gesture"},{title:"Gesture.Rotation()",component:a.createElement(Oe,null),href:"docs/gestures/rotation-gesture"},{title:"Gesture.Fling()",component:a.createElement(we,null),href:"docs/gestures/fling-gesture"},{title:"Gesture.LongPress()",component:a.createElement(Xe,null),href:"docs/gestures/long-press-gesture"},{title:"Gesture.Pinch()",component:a.createElement(at,null),href:"docs/gestures/pinch-gesture"}],st=()=>a.createElement("div",null,a.createElement("div",null,a.createElement("h2",{className:Y},"Learn how it works"),a.createElement("p",{className:C},"Tap and drag the circles to explore the gestures.")),a.createElement("div",{className:H},lt.map(((e,t)=>a.createElement(D,{key:t,idx:t,title:e.title,component:e.component,href:e.href}))))),rt="featuresContainer_DRyr",it="featuresButton_m4uD",ct="title_mTUg",ut="learnMoreSection_S7rV",dt="featureList_R4EX",ht="featureItem_ZtXw",mt="featureTitle_FmYc",vt="featureBody_b6oB",pt=e=>{let{title:t,children:n}=e;return a.createElement("div",{className:ht},a.createElement("h3",{className:mt},t),a.createElement("p",{className:vt},n))},ft=[{title:"native gesture recognizers",body:"With Gesture Handler touch stream handling happens on the UI thread and uses APIs native to each platform."},{title:"native components",body:"Gesture Handler library ships with a set of components that aims to provide best possible interations such as SwipeableRow or Drawer."},{title:"120 FPS",body:"Gesture Handler integrates tightly with Reanimated to allow you to build smooth gesture based experiences up to 120 fps."}],_t=()=>a.createElement("div",{className:dt},ft.map(((e,t)=>a.createElement(pt,{key:t,title:e.title},e.body)))),gt=()=>a.createElement("div",{className:rt},a.createElement("h2",{className:ct},"Why Gesture Handler?"),a.createElement(_t,null),a.createElement("div",{className:ut},a.createElement("p",null,"Learn more about the features in the newest article about Gesture Handler"),a.createElement(P,{target:"_blank",href:"https://blog.swmansion.com/introducing-gesture-handler-2-0-50515f1c4afc",title:"See blog post",backgroundStyling:it}))),wt="testimonialsContainer_j3r8",Et="title_l8p3",yt="testimonialSlides_FOy8",bt="testimonialSlide_G9z5",St="activeTestimonialSlide_fYdz",Pt="testimonialPair_hrQa",Xt="dotsContainer_IULo",Yt="dot_gdHs",Ct="activeDot_zOTP",Ht="testimonialItem_ec7H",kt="testimonialAuthorPhoto_Ohml",xt="testimonialBody_nCez",Nt="quoteIcon_l9GX",It="testimonialAuthorName_p5_P",Rt="testimonialAuthor_cVAj",Dt="testimonialAuthorInfo_M4Z8",Lt="testimonialCompany_CBc7";const Mt=function(e){let{color:t,className:n}=e;return a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",className:n,width:"66",height:"48",fill:"none",viewBox:"0 0 66 48"},a.createElement("path",{fill:t,d:"M49.693.29c2.964 0 5.672.766 8.125 2.296 2.35 1.633 4.242 3.828 5.672 6.584 1.431 2.857 2.147 6.123 2.147 9.798 0 3.061-.614 6.021-1.84 8.879-1.226 2.96-2.913 5.716-5.059 8.267-2.146 2.552-4.701 4.797-7.665 6.736-2.964 2.042-6.132 3.521-9.505 4.44l-6.745-8.114c4.19-1.837 7.614-4.032 10.271-6.583 2.555-2.552 3.833-4.746 3.833-6.583 0-1.225-.409-2.348-1.227-3.368-.92-1.02-2.044-1.99-3.372-2.909-2.35-1.837-3.935-3.521-4.753-5.052-.92-1.429-1.38-3.01-1.38-4.746 0-2.96 1.074-5.307 3.22-7.042C43.561 1.158 46.321.29 49.693.29zm-34.186 0c2.964 0 5.672.766 8.125 2.296 2.35 1.633 4.241 3.828 5.672 6.584 1.431 2.857 2.146 6.123 2.146 9.798 0 3.061-.613 6.021-1.84 8.879-1.226 2.96-2.912 5.716-5.058 8.267-2.146 2.552-4.701 4.797-7.665 6.736-2.964 2.042-6.132 3.521-9.505 4.44L.637 39.176c4.19-1.837 7.614-4.031 10.271-6.583 2.555-2.552 3.833-4.746 3.833-6.583 0-1.225-.41-2.348-1.227-3.368-.92-1.02-2.044-1.99-3.373-2.909-2.35-1.837-3.934-3.521-4.752-5.052-.92-1.429-1.38-3.01-1.38-4.746 0-2.96 1.073-5.307 3.22-7.042C9.375 1.158 12.134.29 15.507.29z"}))},Tt=e=>{let{author:t,company:n,image:o,link:l,children:s}=e;return a.createElement("a",{href:l,target:"_blank",className:Ht},a.createElement(Mt,{className:Nt,color:"dark"===(0,r.I)().colorMode?"var(--swm-purple-dark-120)":"var(--swm-purple-light-100)"}),a.createElement("div",{className:Rt},a.createElement("div",{className:kt},a.createElement("img",{alt:o.alt,src:o.src})),a.createElement("div",{className:Dt},a.createElement("h5",{className:It},t),a.createElement("span",{className:Lt},n))),a.createElement("p",{className:xt},"\u201c",s,"\u201d"))},Zt=[{author:"Marc Rousavy",company:"Margelo",body:"We\u2019ve used Reanimated and Gesture Handler for a ton of apps already - it\u2019s amazingly simple yet poweful! \ud83d\ude0d",link:"https://twitter.com/mrousavy/status/1754909520571019756",image:{alt:"marc rousavy",src:"https://pbs.twimg.com/profile_images/1713946397391667200/l-LXWNl2_400x400.jpg"}},{author:"Andrew Lo",company:"Shopify",body:"They enable us app devs to make our users feel delight, have fun, and enjoy using our apps more.",link:"https://twitter.com/alotoronto/status/1754905332709576823",image:{alt:"andrew lo",src:"https://pbs.twimg.com/profile_images/870388069819707393/WSdiZCDG_400x400.jpg"}},{author:"Mo Gorhom",body:"Reanimated and Gesture Handler are the reason why I shifted my focus from native (objc&java) development to React Native \ud83d\udda4.",link:"https://twitter.com/gorhom/status/1754974706782896465",image:{alt:"mo gorhom",src:"https://pbs.twimg.com/profile_images/1699071865996869632/R09iQ1T5_400x400.jpg"}},{author:"Brandon Austin",body:"I\u2019ve built dozens of apps, each and every one of them have used both Reanimated and Gesture Handler at different levels of complexity.",link:"https://twitter.com/bran_aust/status/1754907731536863670",image:{alt:"brandon austin",src:"https://pbs.twimg.com/profile_images/1757102996654043136/zwiTEFm8_400x400.jpg"}}],jt=()=>{const[e,t]=(0,a.useState)(0);(0,a.useEffect)((()=>{const t=()=>{const t=document.querySelector(`.testimonialContainer-${e}`),n=document.querySelector(".testimonialSlides");1===t.childElementCount&&n.offsetHeight>t.offsetHeight||(n.style.height=`${t.offsetHeight}px`)};return t(),window.addEventListener("resize",t),()=>{window.removeEventListener("resize",t)}}),[e]);const n=[];for(let o=0;o<Zt.length;o+=2)n.push(a.createElement("div",{className:(0,y.Z)("testimonialContainer-"+o/2,Pt),key:o},a.createElement(Tt,{company:Zt[o].company,image:Zt[o].image,link:Zt[o].link,author:Zt[o].author},Zt[o].body),o+1<Zt.length&&a.createElement(Tt,{company:Zt[o+1].company,image:Zt[o+1].image,link:Zt[o+1].link,author:Zt[o+1].author},Zt[o+1].body)));return a.createElement("div",{className:yt},a.createElement("div",{className:"testimonialSlides"},n.map(((t,n)=>a.createElement("div",{key:n,className:(0,y.Z)(bt,e===n?St:"")},t)))),a.createElement("div",{className:Xt},n.map(((n,o)=>a.createElement("span",{key:o,className:(0,y.Z)(Yt,o===e&&Ct),onClick:()=>{t(o)}})))))},Gt=()=>a.createElement("div",{className:wt},a.createElement("h2",{className:Et},"Testimonials"),a.createElement(jt,null)),At="sponsorsTitle_HbT7",Ft="sponsorsBrand_zFye",Ot="sponsor_t7ET";var Bt=n(941),Ut=n(4996);const zt=()=>{const e={expo:{light:(0,Ut.Z)("img/expo.svg"),dark:(0,Ut.Z)("img/expo-dark.svg")},shopify:{light:(0,Ut.Z)("img/shopify.svg"),dark:(0,Ut.Z)("img/shopify-dark.svg")}};return a.createElement("div",null,a.createElement("h2",{className:At},"Sponsors"),a.createElement("div",{className:Ft},a.createElement(Bt.Z,{sources:e.expo,className:Ot}),a.createElement(Bt.Z,{sources:e.shopify,className:Ot})))};const Vt=function(){const e=(0,p.Z)(),{siteConfig:t={}}=e;return a.createElement(o.Z,{title:"React Native Gesture Handler",description:"Declarative API exposing platform native touch and gesture system to React Native."},a.createElement("div",{className:l.container},a.createElement(X,null),a.createElement(st,null)),a.createElement("div",{className:l.waveContainer},a.createElement(v,null)),a.createElement("div",{className:l.container},a.createElement(gt,null),a.createElement(Gt,null),a.createElement(zt,null)))}}}]);