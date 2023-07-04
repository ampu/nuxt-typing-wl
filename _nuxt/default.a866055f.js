import{e as s,S as v,d,r as k,T as A,U as C,V as K,W as _,_ as x,X as h,Y as T,Z as V,$ as R,c as w,a0 as S,G as b,u as B,f as l,k as j,J as H,s as p,q as f}from"./entry.91399f53.js";import{a as L}from"./defu.5a7c1433.js";import{_ as M}from"./_plugin-vue_export-helper.c27b6911.js";const N=(e,a)=>a.path.replace(/(:\w+)\([^)]+\)/g,"$1").replace(/(:\w+)[?+*]/g,"$1").replace(/:\w+/g,t=>{var n;return((n=e.params[t.slice(1)])==null?void 0:n.toString())||""}),O=(e,a)=>{const t=e.route.matched.find(o=>{var i;return((i=o.components)==null?void 0:i.default)===e.Component.type}),n=a??(t==null?void 0:t.meta.key)??(t&&N(e.route,t));return typeof n=="function"?n(e.route):n},$=(e,a)=>({default:()=>e?s(v,e===!0?{}:e,a):a}),I=d({name:"NuxtPage",inheritAttrs:!1,props:{name:{type:String},transition:{type:[Boolean,Object],default:void 0},keepalive:{type:[Boolean,Object],default:void 0},route:{type:Object},pageKey:{type:[Function,String],default:null}},setup(e,{attrs:a,expose:t}){const n=B(),o=k();t({pageRef:o});const i=A(C,null);let u;return()=>s(K,{name:e.name,route:e.route,...a},{default:r=>{if(!r.Component)return;if(u&&i&&!i.isCurrent(r.route))return u;const m=O(r,e.pageKey),g=n.deferHydration(),c=!!(e.transition??r.route.meta.pageTransition??_),y=c&&q([e.transition,r.route.meta.pageTransition,_,{onAfterLeave:()=>{n.callHook("page:transition:finish",r.Component)}}].filter(Boolean));return u=x(R,c&&y,$(e.keepalive??r.route.meta.keepalive??V,s(h,{suspensible:!0,onPending:()=>n.callHook("page:start",r.Component),onResolve:()=>{T(()=>n.callHook("page:finish",r.Component).finally(g))}},{default:()=>s(F,{key:m,routeProps:r,pageKey:m,hasTransition:c,pageRef:o})}))).default(),u}})}});function P(e){return Array.isArray(e)?e:e?[e]:[]}function q(e){const a=e.map(t=>({...t,onAfterLeave:P(t.onAfterLeave)}));return L(...a)}const F=d({name:"RouteProvider",props:["routeProps","pageKey","hasTransition","pageRef"],setup(e){const a=e.pageKey,t=e.routeProps.route,n={};for(const o in e.routeProps.route)n[o]=w(()=>a===e.pageKey?e.routeProps.route[o]:t[o]);return S("_route",b(n)),()=>s(e.routeProps.Component,{ref:e.pageRef})}}),G={};function J(e,a){const t=I,n=l("VContainer"),o=l("VMain"),i=l("VApp");return j(),H(i,null,{default:p(()=>[f(o,null,{default:p(()=>[f(n,null,{default:p(()=>[f(t)]),_:1})]),_:1})]),_:1})}const Y=M(G,[["render",J]]);export{Y as default};