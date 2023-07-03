import{r as S,z as tt,A as et,B as W,C as J,u as st,D as p,E as nt,F as rt,c as $,G as ot,H as N,d as P,f as A,k as B,l as V,m as u,q as E,s as O,v as C,I as z,t as D,J as U,K as at,o as it,L as ct,M as lt,x as q,y as G,N as ut,O as dt}from"./entry.bc610215.js";import{_ as L}from"./_plugin-vue_export-helper.c27b6911.js";const ft=()=>null;function _t(...r){const o=typeof r[r.length-1]=="string"?r.pop():void 0;typeof r[0]!="string"&&r.unshift(o);let[s,e,t={}]=r;if(typeof s!="string")throw new TypeError("[nuxt] [asyncData] key must be a string.");if(typeof e!="function")throw new TypeError("[nuxt] [asyncData] handler must be a function.");t.server=t.server??!0,t.default=t.default??ft,t.lazy=t.lazy??!1,t.immediate=t.immediate??!0;const n=st(),i=()=>n.isHydrating?n.payload.data[s]:n.static.data[s],c=()=>i()!==void 0;n._asyncData[s]||(n._asyncData[s]={data:S(i()??t.default()),pending:S(!c()),error:tt(n.payload._errors,s),status:S("idle")});const a={...n._asyncData[s]};a.refresh=a.execute=(l={})=>{if(n._asyncDataPromises[s]){if(l.dedupe===!1)return n._asyncDataPromises[s];n._asyncDataPromises[s].cancelled=!0}if((l._initial||n.isHydrating&&l._initial!==!1)&&c())return i();a.pending.value=!0,a.status.value="pending";const v=new Promise((d,x)=>{try{d(e(n))}catch(h){x(h)}}).then(d=>{if(v.cancelled)return n._asyncDataPromises[s];let x=d;t.transform&&(x=t.transform(d)),t.pick&&(x=ht(x,t.pick)),a.data.value=x,a.error.value=null,a.status.value="success"}).catch(d=>{if(v.cancelled)return n._asyncDataPromises[s];a.error.value=d,a.data.value=p(t.default()),a.status.value="error"}).finally(()=>{v.cancelled||(a.pending.value=!1,n.payload.data[s]=a.data.value,a.error.value&&(n.payload._errors[s]=nt(a.error.value)),delete n._asyncDataPromises[s])});return n._asyncDataPromises[s]=v,n._asyncDataPromises[s]};const f=()=>a.refresh({_initial:!0}),_=t.server!==!1&&n.payload.serverRendered;{const l=rt();if(l&&!l._nuxtOnBeforeMountCbs){l._nuxtOnBeforeMountCbs=[];const d=l._nuxtOnBeforeMountCbs;l&&(et(()=>{d.forEach(x=>{x()}),d.splice(0,d.length)}),W(()=>d.splice(0,d.length)))}_&&n.isHydrating&&c()?(a.pending.value=!1,a.status.value=a.error.value?"error":"success"):l&&(n.payload.serverRendered&&n.isHydrating||t.lazy)&&t.immediate?l._nuxtOnBeforeMountCbs.push(f):t.immediate&&f(),t.watch&&J(t.watch,()=>a.refresh());const v=n.hook("app:data:refresh",d=>{if(!d||d.includes(s))return a.refresh()});l&&W(v)}const y=Promise.resolve(n._asyncDataPromises[s]).then(()=>a);return Object.assign(y,a),y}function ht(r,o){const s={};for(const e of o)s[e]=r[e];return s}const pt={ignoreUnknown:!1,respectType:!1,respectFunctionNames:!1,respectFunctionProperties:!1,unorderedObjects:!0,unorderedArrays:!1,unorderedSets:!1};function yt(r,o={}){o={...pt,...o};const s=X(o);return s.dispatch(r),s.toString()}function X(r){const o=[];let s=[];const e=t=>{o.push(t)};return{toString(){return o.join("")},getContext(){return s},dispatch(t){return r.replacer&&(t=r.replacer(t)),this["_"+(t===null?"null":typeof t)](t)},_object(t){if(t&&typeof t.toJSON=="function")return this._object(t.toJSON());const n=/\[object (.*)]/i,i=Object.prototype.toString.call(t),c=n.exec(i),a=c?c[1].toLowerCase():"unknown:["+i.toLowerCase()+"]";let f=null;if((f=s.indexOf(t))>=0)return this.dispatch("[CIRCULAR:"+f+"]");if(s.push(t),typeof Buffer<"u"&&Buffer.isBuffer&&Buffer.isBuffer(t))return e("buffer:"),e(t.toString("utf8"));if(a!=="object"&&a!=="function"&&a!=="asyncfunction")this["_"+a]?this["_"+a](t):r.ignoreUnknown||this._unkown(t,a);else{let _=Object.keys(t);r.unorderedObjects&&(_=_.sort()),r.respectType!==!1&&!K(t)&&_.splice(0,0,"prototype","__proto__","letructor"),r.excludeKeys&&(_=_.filter(function(y){return!r.excludeKeys(y)})),e("object:"+_.length+":");for(const y of _)this.dispatch(y),e(":"),r.excludeValues||this.dispatch(t[y]),e(",")}},_array(t,n){if(n=typeof n<"u"?n:r.unorderedArrays!==!1,e("array:"+t.length+":"),!n||t.length<=1){for(const a of t)this.dispatch(a);return}const i=[],c=t.map(a=>{const f=X(r);return f.dispatch(a),i.push(f.getContext()),f.toString()});return s=[...s,...i],c.sort(),this._array(c,!1)},_date(t){return e("date:"+t.toJSON())},_symbol(t){return e("symbol:"+t.toString())},_unkown(t,n){if(e(n),!!t&&(e(":"),t&&typeof t.entries=="function"))return this._array(Array.from(t.entries()),!0)},_error(t){return e("error:"+t.toString())},_boolean(t){return e("bool:"+t.toString())},_string(t){e("string:"+t.length+":"),e(t.toString())},_function(t){e("fn:"),K(t)?this.dispatch("[native]"):this.dispatch(t.toString()),r.respectFunctionNames!==!1&&this.dispatch("function-name:"+String(t.name)),r.respectFunctionProperties&&this._object(t)},_number(t){return e("number:"+t.toString())},_xml(t){return e("xml:"+t.toString())},_null(){return e("Null")},_undefined(){return e("Undefined")},_regexp(t){return e("regex:"+t.toString())},_uint8array(t){return e("uint8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint8clampedarray(t){return e("uint8clampedarray:"),this.dispatch(Array.prototype.slice.call(t))},_int8array(t){return e("int8array:"),this.dispatch(Array.prototype.slice.call(t))},_uint16array(t){return e("uint16array:"),this.dispatch(Array.prototype.slice.call(t))},_int16array(t){return e("int16array:"),this.dispatch(Array.prototype.slice.call(t))},_uint32array(t){return e("uint32array:"),this.dispatch(Array.prototype.slice.call(t))},_int32array(t){return e("int32array:"),this.dispatch(Array.prototype.slice.call(t))},_float32array(t){return e("float32array:"),this.dispatch(Array.prototype.slice.call(t))},_float64array(t){return e("float64array:"),this.dispatch(Array.prototype.slice.call(t))},_arraybuffer(t){return e("arraybuffer:"),this.dispatch(new Uint8Array(t))},_url(t){return e("url:"+t.toString())},_map(t){e("map:");const n=[...t];return this._array(n,r.unorderedSets!==!1)},_set(t){e("set:");const n=[...t];return this._array(n,r.unorderedSets!==!1)},_file(t){return e("file:"),this.dispatch([t.name,t.size,t.type,t.lastModfied])},_blob(){if(r.ignoreUnknown)return e("[blob]");throw new Error(`Hashing Blob objects is currently not supported
Use "options.replacer" or "options.ignoreUnknown"
`)},_domwindow(){return e("domwindow")},_bigint(t){return e("bigint:"+t.toString())},_process(){return e("process")},_timer(){return e("timer")},_pipe(){return e("pipe")},_tcp(){return e("tcp")},_udp(){return e("udp")},_tty(){return e("tty")},_statwatcher(){return e("statwatcher")},_securecontext(){return e("securecontext")},_connection(){return e("connection")},_zlib(){return e("zlib")},_context(){return e("context")},_nodescript(){return e("nodescript")},_httpparser(){return e("httpparser")},_dataview(){return e("dataview")},_signal(){return e("signal")},_fsevent(){return e("fsevent")},_tlswrap(){return e("tlswrap")}}}function K(r){return typeof r!="function"?!1:/^function\s+\w*\s*\(\s*\)\s*{\s+\[native code]\s+}$/i.exec(Function.prototype.toString.call(r))!=null}class M{constructor(o,s){o=this.words=o||[],this.sigBytes=s!==void 0?s:o.length*4}toString(o){return(o||mt).stringify(this)}concat(o){if(this.clamp(),this.sigBytes%4)for(let s=0;s<o.sigBytes;s++){const e=o.words[s>>>2]>>>24-s%4*8&255;this.words[this.sigBytes+s>>>2]|=e<<24-(this.sigBytes+s)%4*8}else for(let s=0;s<o.sigBytes;s+=4)this.words[this.sigBytes+s>>>2]=o.words[s>>>2];return this.sigBytes+=o.sigBytes,this}clamp(){this.words[this.sigBytes>>>2]&=4294967295<<32-this.sigBytes%4*8,this.words.length=Math.ceil(this.sigBytes/4)}clone(){return new M([...this.words])}}const mt={stringify(r){const o=[];for(let s=0;s<r.sigBytes;s++){const e=r.words[s>>>2]>>>24-s%4*8&255;o.push((e>>>4).toString(16),(e&15).toString(16))}return o.join("")}},gt={stringify(r){const o="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",s=[];for(let e=0;e<r.sigBytes;e+=3){const t=r.words[e>>>2]>>>24-e%4*8&255,n=r.words[e+1>>>2]>>>24-(e+1)%4*8&255,i=r.words[e+2>>>2]>>>24-(e+2)%4*8&255,c=t<<16|n<<8|i;for(let a=0;a<4&&e*8+a*6<r.sigBytes*8;a++)s.push(o.charAt(c>>>6*(3-a)&63))}return s.join("")}},vt={parse(r){const o=r.length,s=[];for(let e=0;e<o;e++)s[e>>>2]|=(r.charCodeAt(e)&255)<<24-e%4*8;return new M(s,o)}},xt={parse(r){return vt.parse(unescape(encodeURIComponent(r)))}};class bt{constructor(){this._minBufferSize=0,this.blockSize=512/32,this.reset()}reset(){this._data=new M,this._nDataBytes=0}_append(o){typeof o=="string"&&(o=xt.parse(o)),this._data.concat(o),this._nDataBytes+=o.sigBytes}_doProcessBlock(o,s){}_process(o){let s,e=this._data.sigBytes/(this.blockSize*4);o?e=Math.ceil(e):e=Math.max((e|0)-this._minBufferSize,0);const t=e*this.blockSize,n=Math.min(t*4,this._data.sigBytes);if(t){for(let i=0;i<t;i+=this.blockSize)this._doProcessBlock(this._data.words,i);s=this._data.words.splice(0,t),this._data.sigBytes-=n}return new M(s,n)}}class wt extends bt{update(o){return this._append(o),this._process(),this}finalize(o){o&&this._append(o)}}const St=[1779033703,-1150833019,1013904242,-1521486534,1359893119,-1694144372,528734635,1541459225],Bt=[1116352408,1899447441,-1245643825,-373957723,961987163,1508970993,-1841331548,-1424204075,-670586216,310598401,607225278,1426881987,1925078388,-2132889090,-1680079193,-1046744716,-459576895,-272742522,264347078,604807628,770255983,1249150122,1555081692,1996064986,-1740746414,-1473132947,-1341970488,-1084653625,-958395405,-710438585,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,-2117940946,-1838011259,-1564481375,-1474664885,-1035236496,-949202525,-778901479,-694614492,-200395387,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,-2067236844,-1933114872,-1866530822,-1538233109,-1090935817,-965641998],R=[];class kt extends wt{constructor(){super(),this.reset()}reset(){super.reset(),this._hash=new M([...St])}_doProcessBlock(o,s){const e=this._hash.words;let t=e[0],n=e[1],i=e[2],c=e[3],a=e[4],f=e[5],_=e[6],y=e[7];for(let l=0;l<64;l++){if(l<16)R[l]=o[s+l]|0;else{const b=R[l-15],k=(b<<25|b>>>7)^(b<<14|b>>>18)^b>>>3,w=R[l-2],Z=(w<<15|w>>>17)^(w<<13|w>>>19)^w>>>10;R[l]=k+R[l-7]+Z+R[l-16]}const v=a&f^~a&_,d=t&n^t&i^n&i,x=(t<<30|t>>>2)^(t<<19|t>>>13)^(t<<10|t>>>22),h=(a<<26|a>>>6)^(a<<21|a>>>11)^(a<<7|a>>>25),m=y+h+v+Bt[l]+R[l],g=x+d;y=_,_=f,f=a,a=c+m|0,c=i,i=n,n=t,t=m+g|0}e[0]=e[0]+t|0,e[1]=e[1]+n|0,e[2]=e[2]+i|0,e[3]=e[3]+c|0,e[4]=e[4]+a|0,e[5]=e[5]+f|0,e[6]=e[6]+_|0,e[7]=e[7]+y|0}finalize(o){super.finalize(o);const s=this._nDataBytes*8,e=this._data.sigBytes*8;return this._data.words[e>>>5]|=128<<24-e%32,this._data.words[(e+64>>>9<<4)+14]=Math.floor(s/4294967296),this._data.words[(e+64>>>9<<4)+15]=s,this._data.sigBytes=this._data.words.length*4,this._process(),this._hash}}function Ct(r){return new kt().finalize(r).toString(gt)}function Tt(r,o={}){const s=typeof r=="string"?r:yt(r,o);return Ct(s).slice(0,10)}function Dt(r,o,s){const[e={},t]=typeof o=="string"?[{},o]:[o,s],n=e.key||Tt([t,p(e.baseURL),typeof r=="string"?r:"",p(e.params||e.query)]);if(!n||typeof n!="string")throw new TypeError("[nuxt] [useFetch] key must be a string: "+n);if(!r)throw new Error("[nuxt] [useFetch] request is missing.");const i=n===t?"$f"+n:n,c=$(()=>{let k=r;return typeof k=="function"&&(k=k()),p(k)});if(!e.baseURL&&typeof c.value=="string"&&c.value.startsWith("//"))throw new Error('[nuxt] [useFetch] the request URL must not start with "//".');const{server:a,lazy:f,default:_,transform:y,pick:l,watch:v,immediate:d,...x}=e,h=ot({...x,cache:typeof e.cache=="boolean"?void 0:e.cache}),m={server:a,lazy:f,default:_,transform:y,pick:l,immediate:d,watch:v===!1?[]:[h,c,...v||[]]};let g;return _t(i,()=>{var w;return(w=g==null?void 0:g.abort)==null||w.call(g),g=typeof AbortController<"u"?new AbortController:{},typeof c.value=="string"&&c.value.startsWith("/"),(e.$fetch||globalThis.$fetch)(c.value,{signal:g.signal,...h})},m)}const F=1e3,H=60*F,Rt=(r,o,s)=>{N(e=>{if(!r.value)return;const t=setInterval(o,s);e(()=>{clearInterval(t)})})},$t=()=>{},Q=(r,o,s=$t)=>{const e=S(0),t=S(e.value),n=$(()=>e.value-t.value),i=$(()=>o-n.value),c=$(()=>Math.ceil(i.value/F));return N(()=>{r.value&&(t.value=e.value=Date.now())}),Rt(r,()=>{e.value=Date.now()},F),N(()=>{c.value<=0&&s()}),[c,i,n]},T={hundredDivisor:100,hundredRange:{min:11,max:14},tenDivisor:10,singularTenRange:{min:1,max:1},exceptionalTenRange:{min:2,max:4}},Y=(r,[o,s,e])=>{const t=r%T.hundredDivisor;if(T.hundredRange.min<=t&&t<=T.hundredRange.max)return` ${e}`;const n=r%T.tenDivisor;return T.singularTenRange.min<=n&&n<=T.singularTenRange.max?` ${o}`:T.exceptionalTenRange.min<=n&&n<=T.exceptionalTenRange.max?` ${s}`:` ${e}`},At={class:"AboutSection"},Ot=u("h1",{class:"text-h4"}," Измеритель скорости печати ",-1),Vt=u("p",null," На этом сайте вы сможете измерить свою скорость печати ",-1),Et={class:"buttons"},Ut=["textContent"],Mt=P({__name:"AboutSection",props:{error:{type:Boolean}},setup(r,{emit:o}){const s=r,[e]=Q($(()=>s.error),H,()=>{o("exit")}),t=$(()=>Y(e.value,["секунду","секунды","секунд"]));return(n,i)=>{const c=A("VTooltip"),a=A("VBtn");return B(),V("section",At,[Ot,Vt,u("div",Et,[E(a,{color:s.error?void 0:"primary",onClick:i[0]||(i[0]=f=>o("next")),disabled:s.error},{default:O(()=>[C(" Измерить скорость печати "),s.error?(B(),z(c,{key:0,modelValue:s.error,location:"bottom",activator:"parent"},{default:O(()=>[C(" Произошла ошибка... Попробуйте измерить скорость печати через "),u("strong",{textContent:D(p(e))},null,8,Ut),C(" "+D(p(t)),1)]),_:1},8,["modelValue"])):U("",!0)]),_:1},8,["color","disabled"])])])}}});const I=r=>(q("data-v-9e2dd451"),r=r(),G(),r),zt={key:0,class:"text-h4"},Nt=I(()=>u("h1",{class:"text-h4"},[C(" Наберите текст "),u("small",null,"(без кавычек)")],-1)),It=I(()=>u("col",{style:{width:"40%"}},null,-1)),Pt=I(()=>u("col",null,null,-1)),Ft=I(()=>u("th",null,"Осталось",-1)),Ht=["textContent"],Lt=I(()=>u("th",null,"Ошибок",-1)),jt=["textContent"],Wt={class:"buttons"},Kt=P({__name:"TestSection",async setup(r,{emit:o}){let s,e;const t=S(),n=([s,e]=at(()=>Dt("/api/text",{lazy:!0,server:!1,transform:h=>h.text},"$vbghWRVgLc")),s=await s,e(),s),i=S(""),c=S(0),[a,f,_]=Q(S(!0),H),y=$(()=>Y(a.value,["секунда","секунды","секунд"])),l=(h,m)=>{const g=Array.from(n.data.value??""),b=Array.from(h).filter(Boolean);return b.filter((k,w)=>!m^b[w]===g[w]).length},v=(h=i.value)=>l(h,!0),d=(h=i.value)=>l(h,!1),x=()=>({speed:Math.round(v()/(_.value/H)),errors:c.value});return it(()=>{var h,m;(m=(h=t.value)==null?void 0:h.querySelector("textarea"))==null||m.focus()}),J(i,(h,m)=>{const g=d(h),b=d(m);g>b&&(c.value+=g-b)}),N(()=>{n.error.value&&o("error")}),N(()=>{(f.value<=0||n.data.value===i.value)&&o("next",x())}),(h,m)=>{const g=A("VTable"),b=A("VTextarea"),k=A("VBtn");return B(),V("section",{class:"TestSection",ref_key:"el",ref:t},[p(n).pending.value?(B(),V("h1",zt," Подождите... ")):U("",!0),p(n).pending.value?U("",!0):(B(),V(ct,{key:1},[Nt,u("p",null,D(p(n).data),1),E(g,null,{default:O(()=>[It,Pt,u("tbody",null,[u("tr",null,[Ft,u("td",null,[u("strong",{textContent:D(p(a))},null,8,Ht),C(" "+D(p(y)),1)])]),u("tr",null,[Lt,u("td",null,[u("strong",{textContent:D(p(c))},null,8,jt)])])])]),_:1}),E(b,{rows:5,variant:"solo",counter:"","no-resize":"",modelValue:p(i),"onUpdate:modelValue":m[0]||(m[0]=w=>lt(i)?i.value=w:null)},null,8,["modelValue"])],64)),u("div",Wt,[E(k,{onClick:m[1]||(m[1]=w=>o("exit"))},{default:O(()=>[C(" Назад ")]),_:1})])],512)}}});const Jt=L(Kt,[["__scopeId","data-v-9e2dd451"]]),j=r=>(q("data-v-b194b8d3"),r=r(),G(),r),qt={class:"ResultSection"},Gt=j(()=>u("h1",{class:"text-h4"}," Ваши результаты ",-1)),Xt=j(()=>u("th",null,"Скорость",-1)),Qt=["textContent"],Yt=j(()=>u("th",null,"Ошибок",-1)),Zt=["textContent"],te={class:"buttons"},ee=P({__name:"ResultSection",props:{result:{}},setup(r,{emit:o}){const s=r;return(e,t)=>{const n=A("VTable"),i=A("VBtn"),c=ut("focus");return B(),V("section",qt,[Gt,E(n,null,{default:O(()=>[u("tbody",null,[u("tr",null,[Xt,u("td",null,[u("strong",{textContent:D(s.result.speed)},null,8,Qt),C(" символов в минуту")])]),u("tr",null,[Yt,u("td",null,[u("strong",{textContent:D(s.result.errors)},null,8,Zt)])])])]),_:1}),u("div",te,[dt((B(),z(i,{onClick:t[0]||(t[0]=a=>o("back")),color:"primary"},{default:O(()=>[C(" Попробовать еще раз ")]),_:1})),[[c]]),E(i,{onClick:t[1]||(t[1]=a=>o("exit"))},{default:O(()=>[C(" На главную ")]),_:1})])])}}});const se=L(ee,[["__scopeId","data-v-b194b8d3"]]),ne={class:"Index"},re=P({__name:"index",setup(r){const o={ABOUT:{id:1,name:"about",isAbout:!0},TEST:{id:2,name:"test",isTest:!0},RESULT:{id:3,name:"result",isResult:!0}},s=S(o.ABOUT),e=S(!1),t=S(),n=S(1),i=()=>{e.value=!1,s.value=o.ABOUT,n.value=-1},c=()=>{e.value=!0,s.value=o.ABOUT,n.value=-1},a=()=>{e.value=!1,s.value=o.TEST,n.value=1},f=_=>{t.value=_,s.value=o.RESULT,n.value=1};return(_,y)=>{const l=Mt,v=Jt,d=se;return B(),V("div",ne,[p(s).isAbout?(B(),z(l,{key:0,error:p(e),onNext:a,onExit:i},null,8,["error"])):U("",!0),p(s).isTest?(B(),z(v,{key:1,onNext:f,onExit:i,onError:c})):U("",!0),p(s).isResult?(B(),z(d,{key:2,result:p(t),onBack:a,onExit:i},null,8,["result"])):U("",!0)])}}});const ie=L(re,[["__scopeId","data-v-a2c66f14"]]);export{ie as default};
