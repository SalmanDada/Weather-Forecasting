"use strict";(self.webpackChunkapp=self.webpackChunkapp||[]).push([[3925],{3925:(E,R,m)=>{m.r(R),m.d(R,{startInputShims:()=>q});var g=m(5861),T=m(8360),y=m(839),N=m(7484),h=m(6225);m(4874);const I=new WeakMap,M=(e,t,s,r=0,o=!1)=>{I.has(e)!==s&&(s?Z(e,t,r,o):G(e,t))},Z=(e,t,s,r=!1)=>{const o=t.parentNode,n=t.cloneNode(!1);n.classList.add("cloned-input"),n.tabIndex=-1,r&&(n.disabled=!0),o.appendChild(n),I.set(e,n);const i="rtl"===e.ownerDocument.dir?9999:-9999;e.style.pointerEvents="none",t.style.transform=`translate3d(${i}px,${s}px,0) scale(0)`},G=(e,t)=>{const s=I.get(e);s&&(I.delete(e),s.remove()),e.style.pointerEvents="",t.style.transform=""},C="input, textarea, [no-blur], [contenteditable]",F="$ionPaddingTimer",B=(e,t,s)=>{const r=e[F];r&&clearTimeout(r),t>0?e.style.setProperty("--keyboard-offset",`${t}px`):e[F]=setTimeout(()=>{e.style.setProperty("--keyboard-offset","0px"),s&&s()},120)},W=(e,t,s)=>{e.addEventListener("focusout",()=>{t&&B(t,0,s)},{once:!0})};let D=0;const p="data-ionic-skip-scroll-assist",V=(e,t,s,r,o,n,a,i=!1)=>{const l=n&&(void 0===a||a.mode===N.a.None);let L=!1;const u=void 0!==h.w?h.w.innerHeight:0,v=_=>{!1!==L?j(e,t,s,r,_.detail.keyboardHeight,l,i,u,!1):L=!0},c=()=>{L=!1,null==h.w||h.w.removeEventListener("ionKeyboardDidShow",v),e.removeEventListener("focusout",c,!0)},f=function(){var _=(0,g.Z)(function*(){t.hasAttribute(p)?t.removeAttribute(p):(j(e,t,s,r,o,l,i,u),null==h.w||h.w.addEventListener("ionKeyboardDidShow",v),e.addEventListener("focusout",c,!0))});return function(){return _.apply(this,arguments)}}();return e.addEventListener("focusin",f,!0),()=>{e.removeEventListener("focusin",f,!0),null==h.w||h.w.removeEventListener("ionKeyboardDidShow",v),e.removeEventListener("focusout",c,!0)}},x=e=>{document.activeElement!==e&&(e.setAttribute(p,"true"),e.focus())},j=function(){var e=(0,g.Z)(function*(t,s,r,o,n,a,i=!1,l=0,L=!0){if(!r&&!o)return;const u=((e,t,s,r)=>{var o;return((e,t,s,r)=>{const o=e.top,n=e.bottom,a=t.top,l=a+15,u=Math.min(t.bottom,r-s)-50-n,v=l-o,c=Math.round(u<0?-u:v>0?-v:0),f=Math.min(c,o-a),w=Math.abs(f)/.3;return{scrollAmount:f,scrollDuration:Math.min(400,Math.max(150,w)),scrollPadding:s,inputSafeY:4-(o-l)}})((null!==(o=e.closest("ion-item,[ion-item]"))&&void 0!==o?o:e).getBoundingClientRect(),t.getBoundingClientRect(),s,r)})(t,r||o,n,l);if(r&&Math.abs(u.scrollAmount)<4)return x(s),void(a&&null!==r&&(B(r,D),W(s,r,()=>D=0)));if(M(t,s,!0,u.inputSafeY,i),x(s),(0,y.r)(()=>t.click()),a&&r&&(D=u.scrollPadding,B(r,D)),typeof window<"u"){let v;const c=function(){var _=(0,g.Z)(function*(){void 0!==v&&clearTimeout(v),window.removeEventListener("ionKeyboardDidShow",f),window.removeEventListener("ionKeyboardDidShow",c),r&&(yield(0,T.c)(r,0,u.scrollAmount,u.scrollDuration)),M(t,s,!1,u.inputSafeY),x(s),a&&W(s,r,()=>D=0)});return function(){return _.apply(this,arguments)}}(),f=()=>{window.removeEventListener("ionKeyboardDidShow",f),window.addEventListener("ionKeyboardDidShow",c)};if(r){const _=yield(0,T.g)(r);if(L&&u.scrollAmount>_.scrollHeight-_.clientHeight-_.scrollTop)return"password"===s.type?(u.scrollAmount+=50,window.addEventListener("ionKeyboardDidShow",f)):window.addEventListener("ionKeyboardDidShow",c),void(v=setTimeout(c,1e3))}c()}});return function(s,r,o,n,a,i){return e.apply(this,arguments)}}(),q=function(){var e=(0,g.Z)(function*(t,s){const r=document,o="ios"===s,n="android"===s,a=t.getNumber("keyboardHeight",290),i=t.getBoolean("scrollAssist",!0),l=t.getBoolean("hideCaretOnScroll",o),L=t.getBoolean("inputBlurring",o),u=t.getBoolean("scrollPadding",!0),v=Array.from(r.querySelectorAll("ion-input, ion-textarea")),c=new WeakMap,f=new WeakMap,_=yield N.K.getResizeMode(),w=function(){var S=(0,g.Z)(function*(d){yield new Promise(P=>(0,y.c)(d,P));const O=d.shadowRoot||d,b=O.querySelector("input")||O.querySelector("textarea"),A=(0,T.f)(d),H=A?null:d.closest("ion-footer");if(b){if(A&&l&&!c.has(d)){const P=((e,t,s)=>{if(!s||!t)return()=>{};const r=i=>{(e=>e===e.getRootNode().activeElement)(t)&&M(e,t,i)},o=()=>M(e,t,!1),n=()=>r(!0),a=()=>r(!1);return(0,y.a)(s,"ionScrollStart",n),(0,y.a)(s,"ionScrollEnd",a),t.addEventListener("blur",o),()=>{(0,y.b)(s,"ionScrollStart",n),(0,y.b)(s,"ionScrollEnd",a),t.removeEventListener("blur",o)}})(d,b,A);c.set(d,P)}if("date"!==b.type&&"datetime-local"!==b.type&&(A||H)&&i&&!f.has(d)){const P=V(d,b,A,H,a,u,_,n);f.set(d,P)}}});return function(O){return S.apply(this,arguments)}}();L&&(()=>{let e=!0,t=!1;const s=document;(0,y.a)(s,"ionScrollStart",()=>{t=!0}),s.addEventListener("focusin",()=>{e=!0},!0),s.addEventListener("touchend",a=>{if(t)return void(t=!1);const i=s.activeElement;if(!i||i.matches(C))return;const l=a.target;l!==i&&(l.matches(C)||l.closest(C)||(e=!1,setTimeout(()=>{e||i.blur()},50)))},!1)})();for(const S of v)w(S);r.addEventListener("ionInputDidLoad",S=>{w(S.detail)}),r.addEventListener("ionInputDidUnload",S=>{(S=>{if(l){const d=c.get(S);d&&d(),c.delete(S)}if(i){const d=f.get(S);d&&d(),f.delete(S)}})(S.detail)})});return function(s,r){return e.apply(this,arguments)}}()}}]);