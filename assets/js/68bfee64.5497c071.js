"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[7541],{3905:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=p(e,["components","mdxType","originalType","parentName"]),m=u(n),d=a,f=m["".concat(i,".").concat(d)]||m[d]||c[d]||l;return n?r.createElement(f,o(o({ref:t},s),{},{components:n})):r.createElement(f,o({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=m;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p.mdxType="string"==typeof e?e:a,o[1]=p;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},4607:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return p},contentTitle:function(){return i},metadata:function(){return u},toc:function(){return s},default:function(){return m}});var r=n(7462),a=n(3366),l=(n(7294),n(3905)),o=["components"],p={id:"roadmap",title:"Roadmap"},i=void 0,u={type:"mdx",permalink:"/community/roadmap",source:"@site/src/pages/community/roadmap.md"},s=[],c={toc:s};function m(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"whats-next-future-development"},"What's next (future development)"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-1"},"YUNIKORN-1")," Application and task priority support"),(0,l.kt)("li",{parentName:"ul"},"Application level preemption"),(0,l.kt)("li",{parentName:"ul"},"Offer an alternative mode of deployment as plugins to the default scheduler, in addition to the current standalone mode"),(0,l.kt)("li",{parentName:"ul"},"Improve the robustness of the admission controller to allow for convenient upgrade and maintenance of the scheduler")),(0,l.kt)("h1",{id:"future-release-development"},"Future Release Development"),(0,l.kt)("p",null,"Release status:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Version: 1.0.0"),(0,l.kt)("li",{parentName:"ul"},"Target release date: March 2021"),(0,l.kt)("li",{parentName:"ul"},"Development status: ",(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/projects/YUNIKORN/versions/12350288"},"Issue tracker"))),(0,l.kt)("p",null,"Planned features:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-971"},"YUNIKORN-971")," Implement YuniKorn as a Kubernetes scheduler plugin"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",{parentName:"li",href:"https://issues.apache.org/jira/browse/YUNIKORN-941"},"YUNIKORN-941")," Split scheduler and admission controller deployment")),(0,l.kt)("h1",{id:"past-releases"},"Past Releases"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Version"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Release Date"),(0,l.kt)("th",{parentName:"tr",align:"center"},"Release Manager"),(0,l.kt)("th",{parentName:"tr",align:null},"Release Note"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.12.1"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2021-12-26"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Chaoran Yu"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../release-announce/0.12.1"},"0.12.1-release-notes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.11.0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2021-08-18"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Kinga Marton"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../release-announce/0.11.0"},"0.11.0-release-notes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.10.0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2021-04-09"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Tao Yang"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../release-announce/0.10.0"},"0.10.0-release-notes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.9.0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2020-08-28"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Wilfred Spiegelenburg"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../release-announce/0.9.0"},"0.9.0-release-notes"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"0.8.0"),(0,l.kt)("td",{parentName:"tr",align:"center"},"2020-05-04"),(0,l.kt)("td",{parentName:"tr",align:"center"},"Weiwei Yang"),(0,l.kt)("td",{parentName:"tr",align:null},(0,l.kt)("a",{parentName:"td",href:"../release-announce/0.8.0"},"0.8.0-release-notes"))))))}m.isMDXComponent=!0}}]);