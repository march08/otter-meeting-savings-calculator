!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports):"function"==typeof define&&define.amd?define(["exports"],e):e((t="undefined"!=typeof globalThis?globalThis:t||self).EmpresaConfigurator={})}(this,(function(t){"use strict";function e(){}function n(t,e){for(const n in e)t[n]=e[n];return t}function o(t){return t()}function r(){return Object.create(null)}function l(t){t.forEach(o)}function c(t){return"function"==typeof t}function s(t,e){return t!=t?e==e:t!==e||t&&"object"==typeof t||"function"==typeof t}function i(t,n,o){t.$$.on_destroy.push(function(t,...n){if(null==t)return e;const o=t.subscribe(...n);return o.unsubscribe?()=>o.unsubscribe():o}(n,o))}function a(t,e,o,r){return t[1]&&r?n(o.ctx.slice(),t[1](r(e))):o.ctx}function u(t){const e={};for(const n in t)"$"!==n[0]&&(e[n]=t[n]);return e}function f(t,e){t.appendChild(e)}function d(t,e,n){t.insertBefore(e,n||null)}function p(t){t.parentNode.removeChild(t)}function m(t,e){for(let n=0;n<t.length;n+=1)t[n]&&t[n].d(e)}function h(t){return document.createElement(t)}function $(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function g(t){return document.createTextNode(t)}function y(){return g(" ")}function C(t,e,n,o){return t.addEventListener(e,n,o),()=>t.removeEventListener(e,n,o)}function w(t,e,n){null==n?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function b(t,e){for(const n in e)w(t,n,e[n])}function v(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function x(t,e,n){t.classList[n?"add":"remove"](e)}let k;function _(t){k=t}const S=[],M=[],U=[],L=[],T=Promise.resolve();let E=!1;function V(t){U.push(t)}const I=new Set;let j=0;function A(){const t=k;do{for(;j<S.length;){const t=S[j];j++,_(t),H(t.$$)}for(_(null),S.length=0,j=0;M.length;)M.pop()();for(let t=0;t<U.length;t+=1){const e=U[t];I.has(e)||(I.add(e),e())}U.length=0}while(S.length);for(;L.length;)L.pop()();E=!1,I.clear(),_(t)}function H(t){if(null!==t.fragment){t.update(),l(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(V)}}const R=new Set;let O;function B(){O={r:0,c:[],p:O}}function N(){O.r||l(O.c),O=O.p}function Z(t,e){t&&t.i&&(R.delete(t),t.i(e))}function D(t,e,n,o){if(t&&t.o){if(R.has(t))return;R.add(t),O.c.push((()=>{R.delete(t),o&&(n&&t.d(1),o())})),t.o(e)}else o&&o()}function z(t){t&&t.c()}function F(t,e,n,r){const{fragment:s,on_mount:i,on_destroy:a,after_update:u}=t.$$;s&&s.m(e,n),r||V((()=>{const e=i.map(o).filter(c);a?a.push(...e):l(e),t.$$.on_mount=[]})),u.forEach(V)}function P(t,e){const n=t.$$;null!==n.fragment&&(l(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function q(t,e){-1===t.$$.dirty[0]&&(S.push(t),E||(E=!0,T.then(A)),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function G(t,n,o,c,s,i,a,u=[-1]){const f=k;_(t);const d=t.$$={fragment:null,ctx:null,props:i,update:e,not_equal:s,bound:r(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(n.context||(f?f.$$.context:[])),callbacks:r(),dirty:u,skip_bound:!1,root:n.target||f.$$.root};a&&a(d.root);let m=!1;if(d.ctx=o?o(t,n.props||{},((e,n,...o)=>{const r=o.length?o[0]:n;return d.ctx&&s(d.ctx[e],d.ctx[e]=r)&&(!d.skip_bound&&d.bound[e]&&d.bound[e](r),m&&q(t,e)),n})):[],d.update(),m=!0,l(d.before_update),d.fragment=!!c&&c(d.ctx),n.target){if(n.hydrate){const t=function(t){return Array.from(t.childNodes)}(n.target);d.fragment&&d.fragment.l(t),t.forEach(p)}else d.fragment&&d.fragment.c();n.intro&&Z(t.$$.fragment),F(t,n.target,n.anchor,n.customElement),A()}_(f)}class Y{$destroy(){P(this,1),this.$destroy=e}$on(t,e){const n=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return n.push(e),()=>{const t=n.indexOf(e);-1!==t&&n.splice(t,1)}}$set(t){var e;this.$$set&&(e=t,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function W(t){let o,r,l,c=[{viewBox:"0 0 101 40"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},t[0]],s={};for(let t=0;t<c.length;t+=1)s=n(s,c[t]);return{c(){o=$("svg"),r=$("path"),l=$("path"),w(r,"fill-rule","evenodd"),w(r,"clip-rule","evenodd"),w(r,"d","M64.456.548c2.991 0 5.416 2.453 5.416 5.48v27.944c0 3.027-2.425 5.48-5.416 5.48-2.992 0-5.417-2.453-5.417-5.48V6.027c0-3.026 2.425-5.48 5.417-5.48ZM49.29.548c2.99 0 5.416 2.453 5.416 5.48v27.944c0 3.027-2.425 5.48-5.417 5.48-2.991 0-5.416-2.453-5.416-5.48V6.027c0-3.026 2.425-5.48 5.416-5.48ZM79.622 13.15c2.991 0 5.416 2.454 5.416 5.48v3.288c0 3.026-2.425 5.48-5.416 5.48-2.992 0-5.417-2.454-5.417-5.48V18.63c0-3.026 2.425-5.48 5.417-5.48ZM94.788 7.671c2.992 0 5.416 2.453 5.416 5.48v13.698c0 3.026-2.424 5.48-5.416 5.48-2.991 0-5.416-2.454-5.416-5.48V13.151c0-3.027 2.425-5.48 5.416-5.48Z"),w(r,"fill","#fff"),w(l,"d","M19.79 29.5c5.257 0 9.519-4.311 9.519-9.63 0-5.318-4.262-9.63-9.52-9.63-5.256 0-9.518 4.312-9.518 9.63 0 5.319 4.262 9.63 9.519 9.63ZM19.77 40C8.851 40 0 31.046 0 20S8.851 0 19.77 0C30.69 0 39.54 8.954 39.54 20S30.69 40 19.77 40Z"),w(l,"fill","#fff"),b(o,s)},m(t,e){d(t,o,e),f(o,r),f(o,l)},p(t,[e]){b(o,s=function(t,e){const n={},o={},r={$$scope:1};let l=t.length;for(;l--;){const c=t[l],s=e[l];if(s){for(const t in c)t in s||(o[t]=1);for(const t in s)r[t]||(n[t]=s[t],r[t]=1);t[l]=s}else for(const t in c)r[t]=1}for(const t in o)t in n||(n[t]=void 0);return n}(c,[{viewBox:"0 0 101 40"},{fill:"none"},{xmlns:"http://www.w3.org/2000/svg"},1&e&&t[0]]))},i:e,o:e,d(t){t&&p(o)}}}function J(t,e,o){return t.$$set=t=>{o(0,e=n(n({},e),u(t)))},[e=u(e)]}class K extends Y{constructor(t){super(),G(this,t,J,W,s,{})}}const Q=[];const X=function(t,n=e){let o;const r=new Set;function l(e){if(s(t,e)&&(t=e,o)){const e=!Q.length;for(const e of r)e[1](),Q.push(e,t);if(e){for(let t=0;t<Q.length;t+=2)Q[t][0](Q[t+1]);Q.length=0}}}return{set:l,update:function(e){l(e(t))},subscribe:function(c,s=e){const i=[c,s];return r.add(i),1===r.size&&(o=n(l)||e),c(t),()=>{r.delete(i),0===r.size&&(o(),o=null)}}}}({duration:.25,attendeeCount:0,salaries:[],screen:"CALCULATOR",displayShareModal:!1}),tt=(t,e)=>{if(t.attendeeCount>0){const n=t.salaries.reduce(((t,e)=>t+(e||0)),0),o=(null==e?void 0:e.benefitCoeficient)||1.4,r=(null==e?void 0:e.workingHoursPerYear)||2080;return o*t.duration*n/r}return 0},et=t=>Intl.NumberFormat("en-US",{style:"currency",currency:"USD",currencyDisplay:"symbol"}).format(t);function nt(t){let e,n,o=t[0].copy.resultTitle+"";return{c(){e=h("p"),n=g(o),w(e,"class","title")},m(t,o){d(t,e,o),f(e,n)},p(t,e){1&e&&o!==(o=t[0].copy.resultTitle+"")&&v(n,o)},d(t){t&&p(e)}}}function ot(t){let n,o,r,l,c,s,i,a=et(t[3])+"",u=t[0].copy.resultInputSummary(t[4].duration,t[4].attendeeCount)+"",m=t[2]&&nt(t);return{c(){n=h("div"),m&&m.c(),o=y(),r=h("div"),l=g(a),c=y(),s=h("div"),i=g(u),w(r,"class","ott-result-value"),w(s,"class","ott-result-desc"),w(n,"class","ott-result-box"),x(n,"primary",t[1])},m(t,e){d(t,n,e),m&&m.m(n,null),f(n,o),f(n,r),f(r,l),f(n,c),f(n,s),f(s,i)},p(t,[e]){t[2]?m?m.p(t,e):(m=nt(t),m.c(),m.m(n,o)):m&&(m.d(1),m=null),8&e&&a!==(a=et(t[3])+"")&&v(l,a),17&e&&u!==(u=t[0].copy.resultInputSummary(t[4].duration,t[4].attendeeCount)+"")&&v(i,u),2&e&&x(n,"primary",t[1])},i:e,o:e,d(t){t&&p(n),m&&m.d()}}}function rt(t,e,n){let o;i(t,X,(t=>n(4,o=t)));let{config:r}=e,{primary:l=!1}=e,{showTitle:c=!1}=e,s=0;return X.subscribe((t=>{n(3,s=tt(t,r))})),t.$$set=t=>{"config"in t&&n(0,r=t.config),"primary"in t&&n(1,l=t.primary),"showTitle"in t&&n(2,c=t.showTitle)},[r,l,c,s,o]}class lt extends Y{constructor(t){super(),G(this,t,rt,ot,s,{config:0,primary:1,showTitle:2})}}function ct(t,e=1){var n=[{value:1,symbol:""},{value:1e3,symbol:"k"},{value:1e6,symbol:"M"},{value:1e9,symbol:"G"},{value:1e12,symbol:"T"},{value:1e15,symbol:"P"},{value:1e18,symbol:"E"}].slice().reverse().find((function(e){return t>=e.value}));return n?(t/n.value).toFixed(e).replace(/\.0+$|(\.[0-9]*[1-9])0+$/,"$1")+n.symbol:"0"}function st(t,e,n){const o=t.slice();return o[8]=e[n],o}function it(t){let e,n;return{c(){e=h("div"),n=g(t[2]),w(e,"class","ott-select__label")},m(t,o){d(t,e,o),f(e,n)},p(t,e){4&e&&v(n,t[2])},d(t){t&&p(e)}}}function at(t){let e,n;return{c(){e=h("div"),n=g(t[1]),w(e,"class","ott-select__placeholder")},m(t,o){d(t,e,o),f(e,n)},p(t,e){2&e&&v(n,t[1])},d(t){t&&p(e)}}}function ut(t){let e,n;return{c(){e=h("div"),n=g(t[4]),w(e,"class","ott-select__value")},m(t,o){d(t,e,o),f(e,n)},p(t,e){16&e&&v(n,t[4])},d(t){t&&p(e)}}}function ft(t){let e,n,o,r,l,c=t[8].label+"";function s(...e){return t[7](t[8],...e)}return{c(){e=h("button"),n=g(c),o=y(),w(e,"type","button")},m(t,c){d(t,e,c),f(e,n),f(e,o),r||(l=C(e,"click",s),r=!0)},p(e,o){t=e,1&o&&c!==(c=t[8].label+"")&&v(n,c)},d(t){t&&p(e),r=!1,l()}}}function dt(t){let n,o,r,l,c,s,i,a=t[2]&&it(t);function u(t,e){return t[4]?ut:at}let $=u(t),g=$(t),C=t[0],b=[];for(let e=0;e<C.length;e+=1)b[e]=ft(st(t,C,e));return{c(){n=h("div"),a&&a.c(),o=y(),r=h("button"),g.c(),l=y(),c=h("div"),c.innerHTML='<div class="chevron bottom"></div>',s=y(),i=h("div");for(let t=0;t<b.length;t+=1)b[t].c();w(c,"class","chevron-wrapper"),w(r,"type","button"),w(r,"class","ott-select__button"),w(i,"class","ott-select__options"),w(n,"class","ott-select")},m(t,e){d(t,n,e),a&&a.m(n,null),f(n,o),f(n,r),g.m(r,null),f(r,l),f(r,c),f(n,s),f(n,i);for(let t=0;t<b.length;t+=1)b[t].m(i,null)},p(t,[e]){if(t[2]?a?a.p(t,e):(a=it(t),a.c(),a.m(n,o)):a&&(a.d(1),a=null),$===($=u(t))&&g?g.p(t,e):(g.d(1),g=$(t),g&&(g.c(),g.m(r,l))),9&e){let n;for(C=t[0],n=0;n<C.length;n+=1){const o=st(t,C,n);b[n]?b[n].p(o,e):(b[n]=ft(o),b[n].c(),b[n].m(i,null))}for(;n<b.length;n+=1)b[n].d(1);b.length=C.length}},i:e,o:e,d(t){t&&p(n),a&&a.d(),g.d(),m(b,t)}}}function pt(t,e,n){let o;var r;let{options:l=[]}=e,{value:c=null}=e,{placeholder:s=""}=e,{label:i=null}=e,{onSelectValue:a}=e;return t.$$set=t=>{"options"in t&&n(0,l=t.options),"value"in t&&n(5,c=t.value),"placeholder"in t&&n(1,s=t.placeholder),"label"in t&&n(2,i=t.label),"onSelectValue"in t&&n(3,a=t.onSelectValue)},t.$$.update=()=>{97&t.$$.dirty&&n(4,o=(null===n(6,r=l.find((t=>t.value===c)))||void 0===r?void 0:r.label)||null)},[l,s,i,a,o,c,r,(t,e)=>{a(t.value)}]}class mt extends Y{constructor(t){super(),G(this,t,pt,dt,s,{options:0,value:5,placeholder:1,label:2,onSelectValue:3})}}const ht=t=>{const e=Math.floor(t),n=t%1*60;let o="";return 1===e?o+="1 hour":e&&(o+=`${e} hours`),e&&n&&(o+=" "),1===n?o+="1 minute":n&&(o+=`${n} minutes`),o};function $t(t,e,n){const o=t.slice();return o[9]=e[n],o[11]=n,o}function gt(t){let e,n,o,r,l,c,s,i,a,u=t[0].copy.calculatorCtaEstimate+"",$=t[4].salaries,b=[];for(let e=0;e<$.length;e+=1)b[e]=yt($t(t,$,e));const x=t=>D(b[t],1,1,(()=>{b[t]=null}));let k=1!==t[0].benefitCoeficient&&Ct(t);return{c(){e=h("div");for(let t=0;t<b.length;t+=1)b[t].c();n=y(),o=h("div"),r=h("button"),l=g(u),c=y(),k&&k.c(),w(e,"class","ott-calculator-attendees"),w(r,"type","button"),w(r,"class","ott-button lg secondary"),w(o,"class","ott-calculator-footer")},m(u,p){d(u,e,p);for(let t=0;t<b.length;t+=1)b[t].m(e,null);d(u,n,p),d(u,o,p),f(o,r),f(r,l),f(o,c),k&&k.m(o,null),s=!0,i||(a=C(r,"click",t[8]),i=!0)},p(t,n){if(21&n){let o;for($=t[4].salaries,o=0;o<$.length;o+=1){const r=$t(t,$,o);b[o]?(b[o].p(r,n),Z(b[o],1)):(b[o]=yt(r),b[o].c(),Z(b[o],1),b[o].m(e,null))}for(B(),o=$.length;o<b.length;o+=1)x(o);N()}(!s||1&n)&&u!==(u=t[0].copy.calculatorCtaEstimate+"")&&v(l,u),1!==t[0].benefitCoeficient?k?k.p(t,n):(k=Ct(t),k.c(),k.m(o,null)):k&&(k.d(1),k=null)},i(t){if(!s){for(let t=0;t<$.length;t+=1)Z(b[t]);s=!0}},o(t){b=b.filter(Boolean);for(let t=0;t<b.length;t+=1)D(b[t]);s=!1},d(t){t&&p(e),m(b,t),t&&p(n),t&&p(o),k&&k.d(),i=!1,a()}}}function yt(t){let e,n,o,r,l,c,s,i=t[0].copy.calculatorSalaryItem(t[11])+"";return l=new mt({props:{value:t[9],onSelectValue:function(...e){return t[7](t[11],...e)},placeholder:"Unknown",options:t[2]}}),{c(){e=h("div"),n=h("div"),o=g(i),r=y(),z(l.$$.fragment),c=y(),w(n,"class","title"),w(e,"class","ott-calculator-attendees__item")},m(t,i){d(t,e,i),f(e,n),f(n,o),f(e,r),F(l,e,null),f(e,c),s=!0},p(e,n){t=e,(!s||1&n)&&i!==(i=t[0].copy.calculatorSalaryItem(t[11])+"")&&v(o,i);const r={};16&n&&(r.value=t[9]),4&n&&(r.options=t[2]),l.$set(r)},i(t){s||(Z(l.$$.fragment,t),s=!0)},o(t){D(l.$$.fragment,t),s=!1},d(t){t&&p(e),P(l)}}}function Ct(t){let e,n,o=t[0].copy.calculatorCoeficientNote(t[0].benefitCoeficient)+"";return{c(){e=h("p"),n=g(o),w(e,"class","footer-note")},m(t,o){d(t,e,o),f(e,n)},p(t,e){1&e&&o!==(o=t[0].copy.calculatorCoeficientNote(t[0].benefitCoeficient)+"")&&v(n,o)},d(t){t&&p(e)}}}function wt(t){let e,n,o,r,l,c,s,i,a;n=new lt({props:{config:t[0]}}),l=new mt({props:{label:"Meeting length",value:t[4].duration,onSelectValue:t[5],options:t[3]}}),s=new mt({props:{label:"Attendees",value:t[4].attendeeCount,placeholder:"none",onSelectValue:t[6],options:t[1]}});let u=t[4].salaries.length>0&&gt(t);return{c(){e=h("div"),z(n.$$.fragment),o=y(),r=h("div"),z(l.$$.fragment),c=y(),z(s.$$.fragment),i=y(),u&&u.c(),w(r,"class","ott-calculator__selects"),w(e,"class","ott-calculator__content")},m(t,p){d(t,e,p),F(n,e,null),f(e,o),f(e,r),F(l,r,null),f(r,c),F(s,r,null),f(e,i),u&&u.m(e,null),a=!0},p(t,[o]){const r={};1&o&&(r.config=t[0]),n.$set(r);const c={};16&o&&(c.value=t[4].duration),8&o&&(c.options=t[3]),l.$set(c);const i={};16&o&&(i.value=t[4].attendeeCount),2&o&&(i.options=t[1]),s.$set(i),t[4].salaries.length>0?u?(u.p(t,o),16&o&&Z(u,1)):(u=gt(t),u.c(),Z(u,1),u.m(e,null)):u&&(B(),D(u,1,1,(()=>{u=null})),N())},i(t){a||(Z(n.$$.fragment,t),Z(l.$$.fragment,t),Z(s.$$.fragment,t),Z(u),a=!0)},o(t){D(n.$$.fragment,t),D(l.$$.fragment,t),D(s.$$.fragment,t),D(u),a=!1},d(t){t&&p(e),P(n),P(l),P(s),u&&u.d()}}}function bt(t,e,n){let o,r,l,c;i(t,X,(t=>n(4,c=t)));let{config:s}=e;return t.$$set=t=>{"config"in t&&n(0,s=t.config)},t.$$.update=()=>{var e,c,i;1&t.$$.dirty&&n(3,(e=s.optionsDuration,o=e.map((t=>({value:t,label:ht(t)}))))),1&t.$$.dirty&&n(2,(c=s.optionsSalaries,r=c.map((t=>{const e=1e3*t;return{value:e,label:`$${ct(e)}`}})))),1&t.$$.dirty&&n(1,(i=s.optionsAttendees,l=i.map((t=>({value:t,label:`${t}`})))))},[s,l,r,o,c,t=>{X.update((e=>({...e,duration:Number(t)})))},t=>{X.update((e=>{const n=Number(t);let o=[...e.salaries];if(n>e.attendeeCount)for(let t=e.attendeeCount;t<n;t+=1)o[t]=4e4;else o=o.slice(0,n);return{...e,attendeeCount:n,salaries:o}}))},(t,e)=>{X.update((n=>{const o=Number(e),r=[...n.salaries];return r[t]=o,{...n,salaries:r}}))},()=>{((t=-50)=>{try{window.scrollTo({top:document.getElementById("ott-meeting-cost-calculator").offsetTop+t,left:0,behavior:"smooth"})}catch(t){}})(),X.update((t=>({...t,screen:"END"})))}]}class vt extends Y{constructor(t){super(),G(this,t,bt,wt,s,{config:0})}}function xt(t){let e,n,o,r,c,s,i,a,u,m,$=t[0].copy.endShareButton+"",b=t[0].copy.endCalcAgain+"";function x(t,e){return t[1]>t[0].ctaCostThreshold?_t:kt}let k=x(t),_=k(t);return{c(){e=h("div"),n=h("div"),_.c(),o=y(),r=h("button"),c=g($),s=y(),i=h("p"),a=g(b),w(r,"type","button"),w(r,"class","ott-button secondary"),w(n,"class","ott-result-buttons"),w(i,"class","calc-again"),w(e,"class","ott-calculator-footer")},m(l,p){d(l,e,p),f(e,n),_.m(n,null),f(n,o),f(n,r),f(r,c),f(e,s),f(e,i),f(i,a),u||(m=[C(r,"click",t[3]),C(i,"click",t[4])],u=!0)},p(t,e){k===(k=x(t))&&_?_.p(t,e):(_.d(1),_=k(t),_&&(_.c(),_.m(n,o))),1&e&&$!==($=t[0].copy.endShareButton+"")&&v(c,$),1&e&&b!==(b=t[0].copy.endCalcAgain+"")&&v(a,b)},d(t){t&&p(e),_.d(),u=!1,l(m)}}}function kt(t){let e,n,o,r=t[0].copy.ctaLowCost+"";return{c(){e=h("a"),n=g(r),w(e,"class","ott-button"),w(e,"href",o=t[0].hrefLowCost)},m(t,o){d(t,e,o),f(e,n)},p(t,l){1&l&&r!==(r=t[0].copy.ctaLowCost+"")&&v(n,r),1&l&&o!==(o=t[0].hrefLowCost)&&w(e,"href",o)},d(t){t&&p(e)}}}function _t(t){let e,n,o,r=t[0].copy.ctaHighCost+"";return{c(){e=h("a"),n=g(r),w(e,"class","ott-button"),w(e,"href",o=t[0].hrefHighCost)},m(t,o){d(t,e,o),f(e,n)},p(t,l){1&l&&r!==(r=t[0].copy.ctaHighCost+"")&&v(n,r),1&l&&o!==(o=t[0].hrefHighCost)&&w(e,"href",o)},d(t){t&&p(e)}}}function St(t){let e,n,o,r;n=new lt({props:{config:t[0]}});let l=t[2].salaries.length>0&&xt(t);return{c(){e=h("div"),z(n.$$.fragment),o=y(),l&&l.c(),w(e,"class","ott-calculator__content")},m(t,c){d(t,e,c),F(n,e,null),f(e,o),l&&l.m(e,null),r=!0},p(t,[o]){const r={};1&o&&(r.config=t[0]),n.$set(r),t[2].salaries.length>0?l?l.p(t,o):(l=xt(t),l.c(),l.m(e,null)):l&&(l.d(1),l=null)},i(t){r||(Z(n.$$.fragment,t),r=!0)},o(t){D(n.$$.fragment,t),r=!1},d(t){t&&p(e),P(n),l&&l.d()}}}function Mt(t,e,n){let o;i(t,X,(t=>n(2,o=t)));let{config:r}=e,l=0;X.subscribe((t=>{n(1,l=tt(t,r))}));return t.$$set=t=>{"config"in t&&n(0,r=t.config)},[r,l,o,()=>{X.update((t=>({...t,displayShareModal:!0})))},()=>{X.update((t=>({...t,screen:"CALCULATOR"})))}]}class Ut extends Y{constructor(t){super(),G(this,t,Mt,St,s,{config:0})}}const Lt={title:"Meeting cost calculator",hrefHighCost:"https://otter.ai",hrefLowCost:"https://otter.ai",ctaCostThreshold:50,benefitCoeficient:1.4,workingHoursPerYear:2080,optionsAttendees:[1,2,3,4,5,6,7,8,9,10],optionsDuration:[.25,.5,.75,1,1.25,1.5,1.75,2],optionsSalaries:[10,20,30,40,50,60,70,80,90,100,110,120,130,140,150,175,200,225,250,275,300,325,350,375,400,425,450,475,500,600,700,800,900,1e3],copy:{ctaLowCost:"Ottermazing! That’s time well spent",ctaHighCost:"That'll add up. Can you cut cost?",endShareButton:"Share this meeting cost",endCalcAgain:"Calculate again",calculatorCtaEstimate:"Estimate my meeting cost",calculatorSalaryItem:t=>`Estimate salary #${t+1}`,calculatorCoeficientNote:t=>`Salaries multiplied by ${t} to account for benefits`,shareTitle:"Share this tool",shareClose:"Close",shareMessage:t=>`Guess how much we’re spending on this meeting? ${t.amountSpentFormatted} @otter_ai`,shareUrlFacebook:"https://otter.ai/estimate-the-cost-of-a-meeting-with-this-calculator?utm_source=facebook",shareUrlTwitter:"https://otter.ai/estimate-the-cost-of-a-meeting-with-this-calculator?utm_source=twitter",shareUrlLinkedin:"https://otter.ai/estimate-the-cost-of-a-meeting-with-this-calculator?utm_source=linkedin",shareEmailSubjet:"We can save on money on meetings with Otter.ai",shareUrlEmail:"https://otter.ai/estimate-the-cost-of-a-meeting-with-this-calculator?utm_source=email",resultTitle:"Guess how much we are spending on this meeting?",resultInputSummary:(t,e)=>{const n=[];return t&&n.push(ht(t)),1===e&&n.push("1 attendee"),e&&n.push(`${e} attendees`),n.join(" - ")}}};function Tt(t){let n,o;return{c(){n=$("svg"),o=$("path"),w(o,"fill-rule","evenodd"),w(o,"clip-rule","evenodd"),w(o,"d","M11.7059 21.8194L10.3242 21.6104C5.57637 20.8923 2 16.7871 2 11.8643C2 6.41525 6.41525 2 11.8643 2C17.3133 2 21.7285 6.41525 21.7285 11.8643C21.7285 16.7955 18.1099 20.8935 13.3704 21.6104L11.9887 21.8194V21.8622L11.8473 21.8408L11.7059 21.8622V21.8194ZM15.1222 14.3077H13.1539V20.1787C13.6523 20.1033 14.1363 19.984 14.6018 19.8248C17.9076 18.6941 20.2806 15.553 20.2806 11.8643C20.2806 7.21494 16.5136 3.44797 11.8643 3.44797C7.21494 3.44797 3.44797 7.21494 3.44797 11.8643C3.44797 15.5525 5.79413 18.6932 9.09277 19.8243C9.55779 19.9838 10.0418 20.1033 10.5407 20.1787V14.3077H8.40272V11.8643H10.5407V10.0317C10.5407 7.92761 11.7964 6.73982 13.6968 6.73982C14.6471 6.73982 15.5973 6.90951 15.5973 6.90951V8.97964H14.5453C13.4932 8.97964 13.1539 9.62444 13.1539 10.3032V11.8643H15.4955L15.1222 14.3077Z"),w(o,"fill","currentColor"),w(n,"width","24"),w(n,"height","24"),w(n,"viewBox","0 0 24 24"),w(n,"fill","none"),w(n,"xmlns","http://www.w3.org/2000/svg")},m(t,e){d(t,n,e),f(n,o)},p:e,i:e,o:e,d(t){t&&p(n)}}}class Et extends Y{constructor(t){super(),G(this,t,null,Tt,s,{})}}function Vt(t){let n,o,r,l,c,s;return{c(){n=$("svg"),o=$("path"),r=$("path"),l=$("path"),c=$("path"),s=$("path"),w(o,"d","M19.875 4.09375H4.125C3.71079 4.09375 3.375 4.42954 3.375 4.84375V20.5938C3.375 21.008 3.71079 21.3438 4.125 21.3438H19.875C20.2892 21.3438 20.625 21.008 20.625 20.5938V4.84375C20.625 4.42954 20.2892 4.09375 19.875 4.09375Z"),w(o,"stroke","currentColor"),w(o,"stroke-width","1.4"),w(o,"stroke-linecap","round"),w(o,"stroke-linejoin","round"),w(r,"d","M11.25 11.2188V17.2188"),w(r,"stroke","currentColor"),w(r,"stroke-width","1.4"),w(r,"stroke-linecap","round"),w(r,"stroke-linejoin","round"),w(l,"d","M8.25 11.2188V17.2188"),w(l,"stroke","currentColor"),w(l,"stroke-width","1.4"),w(l,"stroke-linecap","round"),w(l,"stroke-linejoin","round"),w(c,"d","M11.25 13.8438C11.25 13.1476 11.5266 12.4799 12.0188 11.9876C12.5111 11.4953 13.1788 11.2188 13.875 11.2188C14.5712 11.2188 15.2389 11.4953 15.7312 11.9876C16.2234 12.4799 16.5 13.1476 16.5 13.8438V17.2188"),w(c,"stroke","currentColor"),w(c,"stroke-width","1.4"),w(c,"stroke-linecap","round"),w(c,"stroke-linejoin","round"),w(s,"d","M8.25 9.34375C8.87132 9.34375 9.375 8.84007 9.375 8.21875C9.375 7.59743 8.87132 7.09375 8.25 7.09375C7.62868 7.09375 7.125 7.59743 7.125 8.21875C7.125 8.84007 7.62868 9.34375 8.25 9.34375Z"),w(s,"fill","currentColor"),w(n,"width","24"),w(n,"height","25"),w(n,"viewBox","0 0 24 25"),w(n,"fill","none"),w(n,"xmlns","http://www.w3.org/2000/svg")},m(t,e){d(t,n,e),f(n,o),f(n,r),f(n,l),f(n,c),f(n,s)},p:e,i:e,o:e,d(t){t&&p(n)}}}class It extends Y{constructor(t){super(),G(this,t,null,Vt,s,{})}}function jt(t){let n,o;return{c(){n=$("svg"),o=$("path"),w(o,"d","M11.9995 8.96902C11.9996 8.10742 12.2963 7.27212 12.8398 6.60355C13.3833 5.93499 14.1404 5.47392 14.9838 5.29788C15.8272 5.12184 16.7056 5.24155 17.4711 5.63689C18.2367 6.03223 18.8427 6.67909 19.1875 7.46872L22.4995 7.46875L19.4749 10.4934C19.278 13.5355 17.9306 16.3887 15.7065 18.4736C13.4823 20.5584 10.5481 21.7187 7.49953 21.7188C4.49953 21.7188 3.74953 20.5938 3.74953 20.5938C3.74953 20.5938 6.74953 19.4688 8.24953 17.2188C8.24953 17.2188 2.24953 14.2188 3.74953 5.96875C3.74953 5.96875 7.49953 9.71875 11.9982 10.4688L11.9995 8.96902Z"),w(o,"stroke","currentColor"),w(o,"stroke-width","1.4"),w(o,"stroke-linecap","round"),w(o,"stroke-linejoin","round"),w(n,"width","24"),w(n,"height","25"),w(n,"viewBox","0 0 24 25"),w(n,"fill","none"),w(n,"xmlns","http://www.w3.org/2000/svg")},m(t,e){d(t,n,e),f(n,o)},p:e,i:e,o:e,d(t){t&&p(n)}}}class At extends Y{constructor(t){super(),G(this,t,null,jt,s,{})}}function Ht(t){let n,o;return{c(){n=$("svg"),o=$("path"),w(o,"d","M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V4zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1H2zm13 2.383-4.758 2.855L15 11.114v-5.73zm-.034 6.878L9.271 8.82 8 9.583 6.728 8.82l-5.694 3.44A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.739zM1 11.114l4.758-2.876L1 5.383v5.73z"),w(n,"stroke","currentColor"),w(n,"fill","currentColor"),w(n,"stroke-width","0"),w(n,"viewBox","0 0 16 16"),w(n,"height","1em"),w(n,"width","1em"),w(n,"xmlns","http://www.w3.org/2000/svg")},m(t,e){d(t,n,e),f(n,o)},p:e,i:e,o:e,d(t){t&&p(n)}}}class Rt extends Y{constructor(t){super(),G(this,t,null,Ht,s,{})}}function Ot(t){let e,n;const o=t[3].default,r=function(t,e,n,o){if(t){const r=a(t,e,n,o);return t[0](r)}}(o,t,t[2],null);return{c(){e=h("a"),r&&r.c(),w(e,"class",t[1]),w(e,"target","_blank"),w(e,"rel","noopener noreferrer"),w(e,"href",t[0])},m(t,o){d(t,e,o),r&&r.m(e,null),n=!0},p(t,[l]){r&&r.p&&(!n||4&l)&&function(t,e,n,o,r,l){if(r){const c=a(e,n,o,l);t.p(c,r)}}(r,o,t,t[2],n?function(t,e,n,o){if(t[2]&&o){const r=t[2](o(n));if(void 0===e.dirty)return r;if("object"==typeof r){const t=[],n=Math.max(e.dirty.length,r.length);for(let o=0;o<n;o+=1)t[o]=e.dirty[o]|r[o];return t}return e.dirty|r}return e.dirty}(o,t[2],l,null):function(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let t=0;t<n;t++)e[t]=-1;return e}return-1}(t[2]),null),(!n||2&l)&&w(e,"class",t[1]),(!n||1&l)&&w(e,"href",t[0])},i(t){n||(Z(r,t),n=!0)},o(t){D(r,t),n=!1},d(t){t&&p(e),r&&r.d(t)}}}function Bt(t,e,n){let{$$slots:o={},$$scope:r}=e,{href:l}=e,{class:c=""}=e;return t.$$set=t=>{"href"in t&&n(0,l=t.href),"class"in t&&n(1,c=t.class),"$$scope"in t&&n(2,r=t.$$scope)},[l,c,r,o]}class Nt extends Y{constructor(t){super(),G(this,t,Bt,Ot,s,{href:0,class:1})}}function Zt(t){let e,n;return e=new Et({}),{c(){z(e.$$.fragment)},m(t,o){F(e,t,o),n=!0},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Dt(t){let e,n;return e=new At({}),{c(){z(e.$$.fragment)},m(t,o){F(e,t,o),n=!0},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function zt(t){let e,n;return e=new It({}),{c(){z(e.$$.fragment)},m(t,o){F(e,t,o),n=!0},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Ft(t){let e,n;return e=new Rt({}),{c(){z(e.$$.fragment)},m(t,o){F(e,t,o),n=!0},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Pt(t){let e,n,o,r,l,c,s,i,a,u,m,$,b,x,k,_,S,M,U,L,T,E,V=t[0].copy.shareTitle+"",I=t[0].copy.shareClose+"";return o=new lt({props:{config:t[0],primary:!0,showTitle:!0}}),u=new Nt({props:{class:"ott-share-btn",href:`https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(t[1])}&u=${encodeURIComponent(t[0].copy.shareUrlFacebook)}`,$$slots:{default:[Zt]},$$scope:{ctx:t}}}),$=new Nt({props:{class:"ott-share-btn",href:`https://twitter.com/share?text=${encodeURIComponent(t[1])}&url=${encodeURIComponent(t[0].copy.shareUrlTwitter)}`,$$slots:{default:[Dt]},$$scope:{ctx:t}}}),x=new Nt({props:{class:"ott-share-btn",href:`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(t[0].copy.shareUrlLinkedin)}`,$$slots:{default:[zt]},$$scope:{ctx:t}}}),_=new Nt({props:{href:`mailto:?subject=${encodeURIComponent(t[0].copy.shareEmailSubjet)}&body=${encodeURIComponent(t[1])}\n          %0D%0A%0D%0A\n${encodeURIComponent(t[0].copy.shareUrlEmail)}`,class:"ott-share-btn email",$$slots:{default:[Ft]},$$scope:{ctx:t}}}),{c(){e=h("div"),n=h("div"),z(o.$$.fragment),r=y(),l=h("div"),c=h("p"),s=g(V),i=y(),a=h("div"),z(u.$$.fragment),m=y(),z($.$$.fragment),b=y(),z(x.$$.fragment),k=y(),z(_.$$.fragment),S=y(),M=h("p"),U=g(I),w(a,"class","ott-share-buttons"),w(M,"class","close"),w(l,"class","ott-modal__content"),w(n,"class","ott-modal"),w(e,"class","ott-modal-overlay")},m(p,h){d(p,e,h),f(e,n),F(o,n,null),f(n,r),f(n,l),f(l,c),f(c,s),f(l,i),f(l,a),F(u,a,null),f(a,m),F($,a,null),f(a,b),F(x,a,null),f(a,k),F(_,a,null),f(l,S),f(l,M),f(M,U),L=!0,T||(E=C(M,"click",t[3]),T=!0)},p(t,[e]){const n={};1&e&&(n.config=t[0]),o.$set(n),(!L||1&e)&&V!==(V=t[0].copy.shareTitle+"")&&v(s,V);const r={};3&e&&(r.href=`https://www.facebook.com/sharer/sharer.php?quote=${encodeURIComponent(t[1])}&u=${encodeURIComponent(t[0].copy.shareUrlFacebook)}`),16&e&&(r.$$scope={dirty:e,ctx:t}),u.$set(r);const l={};3&e&&(l.href=`https://twitter.com/share?text=${encodeURIComponent(t[1])}&url=${encodeURIComponent(t[0].copy.shareUrlTwitter)}`),16&e&&(l.$$scope={dirty:e,ctx:t}),$.$set(l);const c={};1&e&&(c.href=`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(t[0].copy.shareUrlLinkedin)}`),16&e&&(c.$$scope={dirty:e,ctx:t}),x.$set(c);const i={};3&e&&(i.href=`mailto:?subject=${encodeURIComponent(t[0].copy.shareEmailSubjet)}&body=${encodeURIComponent(t[1])}\n          %0D%0A%0D%0A\n${encodeURIComponent(t[0].copy.shareUrlEmail)}`),16&e&&(i.$$scope={dirty:e,ctx:t}),_.$set(i),(!L||1&e)&&I!==(I=t[0].copy.shareClose+"")&&v(U,I)},i(t){L||(Z(o.$$.fragment,t),Z(u.$$.fragment,t),Z($.$$.fragment,t),Z(x.$$.fragment,t),Z(_.$$.fragment,t),L=!0)},o(t){D(o.$$.fragment,t),D(u.$$.fragment,t),D($.$$.fragment,t),D(x.$$.fragment,t),D(_.$$.fragment,t),L=!1},d(t){t&&p(e),P(o),P(u),P($),P(x),P(_),T=!1,E()}}}function qt(t,e,n){let o,{config:r}=e,l=0;X.subscribe((t=>{n(2,l=tt(t,r))}));return t.$$set=t=>{"config"in t&&n(0,r=t.config)},t.$$.update=()=>{5&t.$$.dirty&&n(1,o=r.copy.shareMessage({amountSpent:l,amountSpentFormatted:et(l)}))},[r,o,l,()=>{X.update((t=>({...t,displayShareModal:!1})))}]}class Gt extends Y{constructor(t){super(),G(this,t,qt,Pt,s,{config:0})}}function Yt(t){let e,n;return e=new vt({props:{config:t[0]}}),{c(){z(e.$$.fragment)},m(t,o){F(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.config=t[0]),e.$set(o)},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Wt(t){let e,n;return e=new Ut({props:{config:t[0]}}),{c(){z(e.$$.fragment)},m(t,o){F(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.config=t[0]),e.$set(o)},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Jt(t){let e,n;return e=new Gt({props:{config:t[0]}}),{c(){z(e.$$.fragment)},m(t,o){F(e,t,o),n=!0},p(t,n){const o={};1&n&&(o.config=t[0]),e.$set(o)},i(t){n||(Z(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){P(e,t)}}}function Kt(t){let e,n,o,r,l,c,s,i,a,u,m,$=t[0].title+"";o=new K({props:{class:"ott-calculator-logo"}});const C=[Wt,Yt],b=[];function x(t,e){return"END"===t[1].screen?0:1}i=x(t),a=b[i]=C[i](t);let k=t[1].displayShareModal&&Jt(t);return{c(){e=h("div"),n=h("div"),z(o.$$.fragment),r=y(),l=h("div"),c=g($),s=y(),a.c(),u=y(),k&&k.c(),w(l,"class","ott-calculator-title"),w(n,"class","ott-calculator-header "),w(e,"class","ott-calculator"),w(e,"id","ott-meeting-cost-calculator")},m(t,a){d(t,e,a),f(e,n),F(o,n,null),f(n,r),f(n,l),f(l,c),f(e,s),b[i].m(e,null),f(e,u),k&&k.m(e,null),m=!0},p(t,[n]){(!m||1&n)&&$!==($=t[0].title+"")&&v(c,$);let o=i;i=x(t),i===o?b[i].p(t,n):(B(),D(b[o],1,1,(()=>{b[o]=null})),N(),a=b[i],a?a.p(t,n):(a=b[i]=C[i](t),a.c()),Z(a,1),a.m(e,u)),t[1].displayShareModal?k?(k.p(t,n),2&n&&Z(k,1)):(k=Jt(t),k.c(),Z(k,1),k.m(e,null)):k&&(B(),D(k,1,1,(()=>{k=null})),N())},i(t){m||(Z(o.$$.fragment,t),Z(a),Z(k),m=!0)},o(t){D(o.$$.fragment,t),D(a),D(k),m=!1},d(t){t&&p(e),P(o),b[i].d(),k&&k.d()}}}function Qt(t,e,n){let o,r;i(t,X,(t=>n(1,r=t)));let{options:l=Lt}=e;return t.$$set=t=>{"options"in t&&n(2,l=t.options)},t.$$.update=()=>{4&t.$$.dirty&&n(0,o=Object.assign(Object.assign(Object.assign({},Lt),l),{copy:Object.assign(Object.assign({},Lt.copy),l.copy)}))},[o,r,l]}class Xt extends Y{constructor(t){super(),G(this,t,Qt,Kt,s,{options:2})}}const te=(t,e)=>new Xt({target:document.getElementById(t),props:{options:e}});window.OtterMeetingCostCalculator=te,t.OtterMeetingCostCalculator=te,t.default=te,Object.defineProperty(t,"__esModule",{value:!0})}));
//# sourceMappingURL=otter-meeting-calculator.js.map
