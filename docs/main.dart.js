(function dartProgram(){function copyProperties(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
b[q]=a[q]}}function mixinPropertiesHard(a,b){var s=Object.keys(a)
for(var r=0;r<s.length;r++){var q=s[r]
if(!b.hasOwnProperty(q))b[q]=a[q]}}function mixinPropertiesEasy(a,b){Object.assign(b,a)}var z=function(){var s=function(){}
s.prototype={p:{}}
var r=new s()
if(!(r.__proto__&&r.__proto__.p===s.prototype.p))return false
try{if(typeof navigator!="undefined"&&typeof navigator.userAgent=="string"&&navigator.userAgent.indexOf("Chrome/")>=0)return true
if(typeof version=="function"&&version.length==0){var q=version()
if(/^\d+\.\d+\.\d+\.\d+$/.test(q))return true}}catch(p){}return false}()
function setFunctionNamesIfNecessary(a){function t(){};if(typeof t.name=="string")return
for(var s=0;s<a.length;s++){var r=a[s]
var q=Object.keys(r)
for(var p=0;p<q.length;p++){var o=q[p]
var n=r[o]
if(typeof n=="function")n.name=o}}}function inherit(a,b){a.prototype.constructor=a
a.prototype["$i"+a.name]=a
if(b!=null){if(z){a.prototype.__proto__=b.prototype
return}var s=Object.create(b.prototype)
copyProperties(a.prototype,s)
a.prototype=s}}function inheritMany(a,b){for(var s=0;s<b.length;s++)inherit(b[s],a)}function mixinEasy(a,b){mixinPropertiesEasy(b.prototype,a.prototype)
a.prototype.constructor=a}function mixinHard(a,b){mixinPropertiesHard(b.prototype,a.prototype)
a.prototype.constructor=a}function lazyOld(a,b,c,d){var s=a
a[b]=s
a[c]=function(){a[c]=function(){A.lE(b)}
var r
var q=d
try{if(a[b]===s){r=a[b]=q
r=a[b]=d()}else r=a[b]}finally{if(r===q)a[b]=null
a[c]=function(){return this[b]}}return r}}function lazy(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s)a[b]=d()
a[c]=function(){return this[b]}
return a[b]}}function lazyFinal(a,b,c,d){var s=a
a[b]=s
a[c]=function(){if(a[b]===s){var r=d()
if(a[b]!==s)A.lF(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.hL(b)
return new s(c,this)}:function(){if(s===null)s=A.hL(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.hL(a).prototype
return s}}var x=0
function tearOffParameters(a,b,c,d,e,f,g,h,i,j){if(typeof h=="number")h+=x
return{co:a,iS:b,iI:c,rC:d,dV:e,cs:f,fs:g,fT:h,aI:i||0,nDA:j}}function installStaticTearOff(a,b,c,d,e,f,g,h){var s=tearOffParameters(a,true,false,c,d,e,f,g,h,false)
var r=staticTearOffGetter(s)
a[b]=r}function installInstanceTearOff(a,b,c,d,e,f,g,h,i,j){c=!!c
var s=tearOffParameters(a,false,c,d,e,f,g,h,i,!!j)
var r=instanceTearOffGetter(c,s)
a[b]=r}function setOrUpdateInterceptorsByTag(a){var s=v.interceptorsByTag
if(!s){v.interceptorsByTag=a
return}copyProperties(a,s)}function setOrUpdateLeafTags(a){var s=v.leafTags
if(!s){v.leafTags=a
return}copyProperties(a,s)}function updateTypes(a){var s=v.types
var r=s.length
s.push.apply(s,a)
return r}function updateHolder(a,b){copyProperties(b,a)
return a}var hunkHelpers=function(){var s=function(a,b,c,d,e){return function(f,g,h,i){return installInstanceTearOff(f,g,a,b,c,d,[h],i,e,false)}},r=function(a,b,c,d){return function(e,f,g,h){return installStaticTearOff(e,f,a,b,c,[g],h,d)}}
return{inherit:inherit,inheritMany:inheritMany,mixin:mixinEasy,mixinHard:mixinHard,installStaticTearOff:installStaticTearOff,installInstanceTearOff:installInstanceTearOff,_instance_0u:s(0,0,null,["$0"],0),_instance_1u:s(0,1,null,["$1"],0),_instance_2u:s(0,2,null,["$2"],0),_instance_0i:s(1,0,null,["$0"],0),_instance_1i:s(1,1,null,["$1"],0),_instance_2i:s(1,2,null,["$2"],0),_static_0:r(0,null,["$0"],0),_static_1:r(1,null,["$1"],0),_static_2:r(2,null,["$2"],0),makeConstList:makeConstList,lazy:lazy,lazyFinal:lazyFinal,lazyOld:lazyOld,updateHolder:updateHolder,convertToFastObject:convertToFastObject,setFunctionNamesIfNecessary:setFunctionNamesIfNecessary,updateTypes:updateTypes,setOrUpdateInterceptorsByTag:setOrUpdateInterceptorsByTag,setOrUpdateLeafTags:setOrUpdateLeafTags}}()
function initializeDeferredHunk(a){x=v.types.length
a(hunkHelpers,v,w,$)}var A={hl:function hl(){},
fY(){return $},
aE(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
hx(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
il(a,b,c){return A.hx(A.aE(A.aE(c,a),b))},
bw(a,b,c){return a},
jW(a,b,c,d){if(t.gw.b(a))return new A.bC(a,b,c.h("@<0>").p(d).h("bC<1,2>"))
return new A.ap(a,b,c.h("@<0>").p(d).h("ap<1,2>"))},
hj(){return new A.aR("No element")},
b9:function b9(a){this.a=a},
cC:function cC(a){this.a=a},
f5:function f5(){},
o:function o(){},
A:function A(){},
O:function O(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
ap:function ap(a,b,c){this.a=a
this.b=b
this.$ti=c},
bC:function bC(a,b,c){this.a=a
this.b=b
this.$ti=c},
bR:function bR(a,b,c){var _=this
_.a=null
_.b=a
_.c=b
_.$ti=c},
C:function C(a,b,c){this.a=a
this.b=b
this.$ti=c},
aS:function aS(a,b,c){this.a=a
this.b=b
this.$ti=c},
c2:function c2(a,b,c){this.a=a
this.b=b
this.$ti=c},
bF:function bF(){},
bj:function bj(){},
bi:function bi(){},
be:function be(a,b){this.a=a
this.$ti=b},
j7(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
ls(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.aU.b(a)},
n(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.aY(a)
return s},
bV(a){var s,r,q=$.ic
if(q==null){s=Symbol("identityHashCode")
q=$.ic=s}r=a[q]
if(r==null){r=Math.random()*0x3fffffff|0
a[q]=r}return r},
k1(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.k(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
k0(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.b.bR(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
f0(a){return A.jZ(a)},
jZ(a){var s,r,q,p,o
if(a instanceof A.t)return A.Q(A.L(a),null)
s=J.bx(a)
if(s===B.J||s===B.L||t.ak.b(a)){r=B.t(a)
q=r!=="Object"&&r!==""
if(q)return r
p=a.constructor
if(typeof p=="function"){o=p.name
if(typeof o=="string")q=o!=="Object"&&o!==""
else q=!1
if(q)return o}}return A.Q(A.L(a),null)},
k2(a,b,c){var s,r,q,p
if(c<=500&&b===0&&c===a.length)return String.fromCharCode.apply(null,a)
for(s=b,r="";s<c;s=q){q=s+500
p=q<c?q:c
r+=String.fromCharCode.apply(null,a.subarray(s,p))}return r},
aQ(a){var s
if(a<=65535)return String.fromCharCode(a)
if(a<=1114111){s=a-65536
return String.fromCharCode((B.e.aT(s,10)|55296)>>>0,s&1023|56320)}throw A.b(A.aC(a,0,1114111,null,null))},
k3(a,b,c,d,e,f,g,h){var s,r=b-1
if(0<=a&&a<100){a+=400
r-=4800}s=h?Date.UTC(a,r,c,d,e,f,g):new Date(a,r,c,d,e,f,g).valueOf()
if(isNaN(s)||s<-864e13||s>864e13)return null
return s},
a2(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
ht(a){return a.b?A.a2(a).getUTCFullYear()+0:A.a2(a).getFullYear()+0},
hr(a){return a.b?A.a2(a).getUTCMonth()+1:A.a2(a).getMonth()+1},
hp(a){return a.b?A.a2(a).getUTCDate()+0:A.a2(a).getDate()+0},
hq(a){return a.b?A.a2(a).getUTCHours()+0:A.a2(a).getHours()+0},
f_(a){return a.b?A.a2(a).getUTCMinutes()+0:A.a2(a).getMinutes()+0},
hs(a){return a.b?A.a2(a).getUTCSeconds()+0:A.a2(a).getSeconds()+0},
k_(a){return a.b?A.a2(a).getUTCMilliseconds()+0:A.a2(a).getMilliseconds()+0},
k(a,b){if(a==null)J.aj(a)
throw A.b(A.aX(a,b))},
aX(a,b){var s,r="index"
if(!A.iL(b))return new A.ak(!0,b,r,null)
s=A.a7(J.aj(a))
if(b<0||b>=s)return A.bG(b,a,r,null,s)
return A.hu(b,r)},
li(a,b,c){if(a>c)return A.aC(a,0,c,"start",null)
if(b!=null)if(b<a||b>c)return A.aC(b,a,c,"end",null)
return new A.ak(!0,b,"end",null)},
b(a){var s,r
if(a==null)a=new A.d0()
s=new Error()
s.dartException=a
r=A.lG
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
lG(){return J.aY(this.dartException)},
af(a){throw A.b(a)},
e8(a){throw A.b(A.ah(a))},
ar(a){var s,r,q,p,o,n
a=A.lz(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.i([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.fd(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
fe(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
im(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
hm(a,b){var s=b==null,r=s?null:b.method
return new A.cR(a,r,s?null:b.receiver)},
aw(a){if(a==null)return new A.eW(a)
if(a instanceof A.bD)return A.aK(a,t.K.a(a.a))
if(typeof a!=="object")return a
if("dartException" in a)return A.aK(a,a.dartException)
return A.l9(a)},
aK(a,b){if(t.Q.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
l9(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.e.aT(r,16)&8191)===10)switch(q){case 438:return A.aK(a,A.hm(A.n(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.n(s)+" (Error "+q+")"
return A.aK(a,new A.bU(p,e))}}if(a instanceof TypeError){o=$.jf()
n=$.jg()
m=$.jh()
l=$.ji()
k=$.jl()
j=$.jm()
i=$.jk()
$.jj()
h=$.jo()
g=$.jn()
f=o.P(s)
if(f!=null)return A.aK(a,A.hm(A.r(s),f))
else{f=n.P(s)
if(f!=null){f.method="call"
return A.aK(a,A.hm(A.r(s),f))}else{f=m.P(s)
if(f==null){f=l.P(s)
if(f==null){f=k.P(s)
if(f==null){f=j.P(s)
if(f==null){f=i.P(s)
if(f==null){f=l.P(s)
if(f==null){f=h.P(s)
if(f==null){f=g.P(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.r(s)
return A.aK(a,new A.bU(s,f==null?e:f.method))}}}return A.aK(a,new A.dk(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bZ()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.aK(a,new A.ak(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bZ()
return a},
aJ(a){var s
if(a instanceof A.bD)return a.b
if(a==null)return new A.cj(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.cj(a)},
j0(a){if(a==null||typeof a!="object")return J.a6(a)
else return A.bV(a)},
lr(a,b,c,d,e,f){t.u.a(a)
switch(A.a7(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.b(A.bE("Unsupported number of arguments for wrapped closure"))},
e5(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.lr)
a.$identity=s
return s},
jG(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.de().constructor.prototype):Object.create(new A.b_(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.i5(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.jC(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.i5(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
jC(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.b("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.jA)}throw A.b("Error in functionType of tearoff")},
jD(a,b,c,d){var s=A.i3
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
i5(a,b,c,d){var s,r
if(c)return A.jF(a,b,d)
s=b.length
r=A.jD(s,d,a,b)
return r},
jE(a,b,c,d){var s=A.i3,r=A.jB
switch(b?-1:a){case 0:throw A.b(new A.d6("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
jF(a,b,c){var s,r,q,p=$.i1
p==null?$.i1=A.i0("interceptor"):p
s=$.i2
s==null?$.i2=A.i0("receiver"):s
r=b.length
q=A.jE(r,c,a,b)
return q},
hL(a){return A.jG(a)},
jA(a,b){return A.fL(v.typeUniverse,A.L(a.a),b)},
i3(a){return a.a},
jB(a){return a.b},
i0(a){var s,r,q,p=new A.b_("receiver","interceptor"),o=J.hk(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.b(A.al("Field name "+a+" not found.",null))},
e4(a){if(a==null)A.lb("boolean expression must not be null")
return a},
lb(a){throw A.b(new A.dq(a))},
lE(a){throw A.b(new A.cG(a))},
ll(a){return v.getIsolateTag(a)},
mA(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
lu(a){var s,r,q,p,o,n=A.r($.iX.$1(a)),m=$.fZ[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.h5[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.kF($.iR.$2(a,n))
if(q!=null){m=$.fZ[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.h5[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.h6(s)
$.fZ[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.h5[n]=s
return s}if(p==="-"){o=A.h6(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.j2(a,s)
if(p==="*")throw A.b(A.io(n))
if(v.leafTags[n]===true){o=A.h6(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.j2(a,s)},
j2(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.hR(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
h6(a){return J.hR(a,!1,null,!!a.$iai)},
lv(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.h6(s)
else return J.hR(s,c,null,null)},
lo(){if(!0===$.hP)return
$.hP=!0
A.lp()},
lp(){var s,r,q,p,o,n,m,l
$.fZ=Object.create(null)
$.h5=Object.create(null)
A.ln()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.j4.$1(o)
if(n!=null){m=A.lv(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
ln(){var s,r,q,p,o,n,m=B.x()
m=A.bv(B.y,A.bv(B.z,A.bv(B.u,A.bv(B.u,A.bv(B.A,A.bv(B.B,A.bv(B.C(B.t),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.iX=new A.h2(p)
$.iR=new A.h3(o)
$.j4=new A.h4(n)},
bv(a,b){return a(b)||b},
jS(a,b,c,d,e,f){var s=b?"m":"",r=c?"":"i",q=d?"u":"",p=e?"s":"",o=f?"g":"",n=function(g,h){try{return new RegExp(g,h)}catch(m){return m}}(a,s+r+q+p+o)
if(n instanceof RegExp)return n
throw A.b(A.b6("Illegal RegExp pattern ("+String(n)+")",a,null))},
lA(a,b,c){var s=a.indexOf(b,c)
return s>=0},
lz(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
lB(a,b,c,d){var s=a.indexOf(b,d)
if(s<0)return a
return A.lC(a,s,s+b.length,c)},
lC(a,b,c,d){var s=a.substring(0,b),r=a.substring(c)
return s+d+r},
bH:function bH(){},
b8:function b8(a,b){this.a=a
this.$ti=b},
fd:function fd(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bU:function bU(a,b){this.a=a
this.b=b},
cR:function cR(a,b,c){this.a=a
this.b=b
this.c=c},
dk:function dk(a){this.a=a},
eW:function eW(a){this.a=a},
bD:function bD(a,b){this.a=a
this.b=b},
cj:function cj(a){this.a=a
this.b=null},
M:function M(){},
cA:function cA(){},
cB:function cB(){},
dh:function dh(){},
de:function de(){},
b_:function b_(a,b){this.a=a
this.b=b},
d6:function d6(a){this.a=a},
dq:function dq(a){this.a=a},
bM:function bM(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
eK:function eK(a,b){this.a=a
this.b=b
this.c=null},
aO:function aO(a,b){this.a=a
this.$ti=b},
bN:function bN(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
h2:function h2(a){this.a=a},
h3:function h3(a){this.a=a},
h4:function h4(a){this.a=a},
cQ:function cQ(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
dG:function dG(a){this.b=a},
dg:function dg(a,b){this.a=a
this.c=b},
fI:function fI(a,b,c){var _=this
_.a=a
_.b=b
_.c=c
_.d=null},
lF(a){return A.af(new A.b9("Field '"+a+"' has been assigned during initialization."))},
kh(a){var s=new A.fp(a)
return s.b=s},
a(a,b){if(a===$)throw A.b(new A.b9("Field '"+b+"' has not been initialized."))
return a},
fp:function fp(a){this.a=a
this.b=null},
kI(a,b,c){if(a>>>0!==a||a>=c)throw A.b(A.aX(b,a))},
kJ(a,b,c){var s
if(!(a>>>0!==a))s=b>>>0!==b||a>b||b>c
else s=!0
if(s)throw A.b(A.li(a,b,c))
return b},
cZ:function cZ(){},
bd:function bd(){},
bS:function bS(){},
d_:function d_(){},
ce:function ce(){},
cf:function cf(){},
ih(a,b){var s=b.c
return s==null?b.c=A.hF(a,b.z,!0):s},
ig(a,b){var s=b.c
return s==null?b.c=A.cl(a,"ay",[b.z]):s},
ii(a){var s=a.y
if(s===6||s===7||s===8)return A.ii(a.z)
return s===11||s===12},
k4(a){return a.cy},
iT(a){return A.dW(v.typeUniverse,a,!1)},
lq(a,b){var s,r,q,p,o
if(a==null)return null
s=b.Q
r=a.cx
if(r==null)r=a.cx=new Map()
q=b.cy
p=r.get(q)
if(p!=null)return p
o=A.au(v.typeUniverse,a.z,s,0)
r.set(q,o)
return o},
au(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.y
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.z
r=A.au(a,s,a0,a1)
if(r===s)return b
return A.iB(a,r,!0)
case 7:s=b.z
r=A.au(a,s,a0,a1)
if(r===s)return b
return A.hF(a,r,!0)
case 8:s=b.z
r=A.au(a,s,a0,a1)
if(r===s)return b
return A.iA(a,r,!0)
case 9:q=b.Q
p=A.cr(a,q,a0,a1)
if(p===q)return b
return A.cl(a,b.z,p)
case 10:o=b.z
n=A.au(a,o,a0,a1)
m=b.Q
l=A.cr(a,m,a0,a1)
if(n===o&&l===m)return b
return A.hD(a,n,l)
case 11:k=b.z
j=A.au(a,k,a0,a1)
i=b.Q
h=A.l6(a,i,a0,a1)
if(j===k&&h===i)return b
return A.iz(a,j,h)
case 12:g=b.Q
a1+=g.length
f=A.cr(a,g,a0,a1)
o=b.z
n=A.au(a,o,a0,a1)
if(f===g&&n===o)return b
return A.hE(a,n,f,!0)
case 13:e=b.z
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.b(A.ea("Attempted to substitute unexpected RTI kind "+c))}},
cr(a,b,c,d){var s,r,q,p,o=b.length,n=A.fO(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.au(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
l7(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.fO(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.au(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
l6(a,b,c,d){var s,r=b.a,q=A.cr(a,r,c,d),p=b.b,o=A.cr(a,p,c,d),n=b.c,m=A.l7(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.dA()
s.a=q
s.b=o
s.c=m
return s},
i(a,b){a[v.arrayRti]=b
return a},
hM(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.lm(s)
return a.$S()}return null},
iY(a,b){var s
if(A.ii(b))if(a instanceof A.M){s=A.hM(a)
if(s!=null)return s}return A.L(a)},
L(a){var s
if(a instanceof A.t){s=a.$ti
return s!=null?s:A.hI(a)}if(Array.isArray(a))return A.G(a)
return A.hI(J.bx(a))},
G(a){var s=a[v.arrayRti],r=t.b
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
m(a){var s=a.$ti
return s!=null?s:A.hI(a)},
hI(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.kQ(a,s)},
kQ(a,b){var s=a instanceof A.M?a.__proto__.__proto__.constructor:b,r=A.kz(v.typeUniverse,s.name)
b.$ccache=r
return r},
lm(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.dW(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
h1(a){var s=a instanceof A.M?A.hM(a):null
return A.hN(s==null?A.L(a):s)},
hN(a){var s,r,q,p=a.x
if(p!=null)return p
s=a.cy
r=s.replace(/\*/g,"")
if(r===s)return a.x=new A.dU(a)
q=A.dW(v.typeUniverse,r,!0)
p=q.x
return a.x=p==null?q.x=new A.dU(q):p},
lH(a){return A.hN(A.dW(v.typeUniverse,a,!1))},
kP(a){var s,r,q,p,o=this
if(o===t.K)return A.bt(o,a,A.kU)
if(!A.av(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.bt(o,a,A.kX)
s=o.y
r=s===6?o.z:o
if(r===t.S)q=A.iL
else if(r===t.gR||r===t.o)q=A.kT
else if(r===t.N)q=A.kV
else q=r===t.y?A.iJ:null
if(q!=null)return A.bt(o,a,q)
if(r.y===9){p=r.z
if(r.Q.every(A.lt)){o.r="$i"+p
if(p==="q")return A.bt(o,a,A.kS)
return A.bt(o,a,A.kW)}}else if(s===7)return A.bt(o,a,A.kN)
return A.bt(o,a,A.kL)},
bt(a,b,c){a.b=c
return a.b(b)},
kO(a){var s,r=this,q=A.kK
if(!A.av(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.kG
else if(r===t.K)q=A.kE
else{s=A.ct(r)
if(s)q=A.kM}r.a=q
return r.a(a)},
fU(a){var s,r=a.y
if(!A.av(a))if(!(a===t._))if(!(a===t.aw))if(r!==7)s=r===8&&A.fU(a.z)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
kL(a){var s=this
if(a==null)return A.fU(s)
return A.E(v.typeUniverse,A.iY(a,s),null,s,null)},
kN(a){if(a==null)return!0
return this.z.b(a)},
kW(a){var s,r=this
if(a==null)return A.fU(r)
s=r.r
if(a instanceof A.t)return!!a[s]
return!!J.bx(a)[s]},
kS(a){var s,r=this
if(a==null)return A.fU(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.t)return!!a[s]
return!!J.bx(a)[s]},
kK(a){var s,r=this
if(a==null){s=A.ct(r)
if(s)return a}else if(r.b(a))return a
A.iH(a,r)},
kM(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.iH(a,s)},
iH(a,b){throw A.b(A.iy(A.it(a,A.iY(a,b),A.Q(b,null))))},
fX(a,b,c,d){var s=null
if(A.E(v.typeUniverse,a,s,b,s))return a
throw A.b(A.iy("The type argument '"+A.Q(a,s)+"' is not a subtype of the type variable bound '"+A.Q(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
it(a,b,c){var s=A.cJ(a),r=A.Q(b==null?A.L(a):b,null)
return s+": type '"+r+"' is not a subtype of type '"+c+"'"},
iy(a){return new A.ck("TypeError: "+a)},
P(a,b){return new A.ck("TypeError: "+A.it(a,null,b))},
kU(a){return a!=null},
kE(a){if(a!=null)return a
throw A.b(A.P(a,"Object"))},
kX(a){return!0},
kG(a){return a},
iJ(a){return!0===a||!1===a},
mo(a){if(!0===a)return!0
if(!1===a)return!1
throw A.b(A.P(a,"bool"))},
mq(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.P(a,"bool"))},
mp(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.b(A.P(a,"bool?"))},
iF(a){if(typeof a=="number")return a
throw A.b(A.P(a,"double"))},
ms(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.P(a,"double"))},
mr(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.P(a,"double?"))},
iL(a){return typeof a=="number"&&Math.floor(a)===a},
a7(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.b(A.P(a,"int"))},
mu(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.P(a,"int"))},
mt(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.b(A.P(a,"int?"))},
kT(a){return typeof a=="number"},
mv(a){if(typeof a=="number")return a
throw A.b(A.P(a,"num"))},
mx(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.P(a,"num"))},
mw(a){if(typeof a=="number")return a
if(a==null)return a
throw A.b(A.P(a,"num?"))},
kV(a){return typeof a=="string"},
r(a){if(typeof a=="string")return a
throw A.b(A.P(a,"String"))},
my(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.P(a,"String"))},
kF(a){if(typeof a=="string")return a
if(a==null)return a
throw A.b(A.P(a,"String?"))},
l3(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.Q(a[q],b)
return s},
iI(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.i([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.a.l(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){m+=l
k=a5.length
j=k-1-p
if(!(j>=0))return A.k(a5,j)
m=B.b.bT(m,a5[j])
i=a6[p]
h=i.y
if(!(h===2||h===3||h===4||h===5||i===o))if(!(i===n))k=!1
else k=!0
else k=!0
if(!k)m+=" extends "+A.Q(i,a5)}m+=">"}else{m=""
r=null}o=a4.z
g=a4.Q
f=g.a
e=f.length
d=g.b
c=d.length
b=g.c
a=b.length
a0=A.Q(o,a5)
for(a1="",a2="",p=0;p<e;++p,a2=a3)a1+=a2+A.Q(f[p],a5)
if(c>0){a1+=a2+"["
for(a2="",p=0;p<c;++p,a2=a3)a1+=a2+A.Q(d[p],a5)
a1+="]"}if(a>0){a1+=a2+"{"
for(a2="",p=0;p<a;p+=3,a2=a3){a1+=a2
if(b[p+1])a1+="required "
a1+=A.Q(b[p+2],a5)+" "+b[p]}a1+="}"}if(r!=null){a5.toString
a5.length=r}return m+"("+a1+") => "+a0},
Q(a,b){var s,r,q,p,o,n,m,l=a.y
if(l===5)return"erased"
if(l===2)return"dynamic"
if(l===3)return"void"
if(l===1)return"Never"
if(l===4)return"any"
if(l===6){s=A.Q(a.z,b)
return s}if(l===7){r=a.z
s=A.Q(r,b)
q=r.y
return(q===11||q===12?"("+s+")":s)+"?"}if(l===8)return"FutureOr<"+A.Q(a.z,b)+">"
if(l===9){p=A.l8(a.z)
o=a.Q
return o.length>0?p+("<"+A.l3(o,b)+">"):p}if(l===11)return A.iI(a,b,null)
if(l===12)return A.iI(a.z,b,a.Q)
if(l===13){n=a.z
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.k(b,n)
return b[n]}return"?"},
l8(a){var s,r=v.mangledGlobalNames[a]
if(r!=null)return r
s="minified:"+a
return s},
kA(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
kz(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.dW(a,b,!1)
else if(typeof m=="number"){s=m
r=A.cm(a,5,"#")
q=A.fO(s)
for(p=0;p<s;++p)q[p]=r
o=A.cl(a,b,q)
n[b]=o
return o}else return m},
kx(a,b){return A.iD(a.tR,b)},
kw(a,b){return A.iD(a.eT,b)},
dW(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.iw(A.iu(a,null,b,c))
r.set(b,s)
return s},
fL(a,b,c){var s,r,q=b.ch
if(q==null)q=b.ch=new Map()
s=q.get(c)
if(s!=null)return s
r=A.iw(A.iu(a,b,c,!0))
q.set(c,r)
return r},
ky(a,b,c){var s,r,q,p=b.cx
if(p==null)p=b.cx=new Map()
s=c.cy
r=p.get(s)
if(r!=null)return r
q=A.hD(a,b,c.y===10?c.Q:[c])
p.set(s,q)
return q},
aI(a,b){b.a=A.kO
b.b=A.kP
return b},
cm(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.ab(null,null)
s.y=b
s.cy=c
r=A.aI(a,s)
a.eC.set(c,r)
return r},
iB(a,b,c){var s,r=b.cy+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.ku(a,b,r,c)
a.eC.set(r,s)
return s},
ku(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.av(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.ab(null,null)
q.y=6
q.z=b
q.cy=c
return A.aI(a,q)},
hF(a,b,c){var s,r=b.cy+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.kt(a,b,r,c)
a.eC.set(r,s)
return s},
kt(a,b,c,d){var s,r,q,p
if(d){s=b.y
if(!A.av(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.ct(b.z)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.aw)return t.P
else if(s===6){q=b.z
if(q.y===8&&A.ct(q.z))return q
else return A.ih(a,b)}}p=new A.ab(null,null)
p.y=7
p.z=b
p.cy=c
return A.aI(a,p)},
iA(a,b,c){var s,r=b.cy+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.kr(a,b,r,c)
a.eC.set(r,s)
return s},
kr(a,b,c,d){var s,r,q
if(d){s=b.y
if(!A.av(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.cl(a,"ay",[b])
else if(b===t.P||b===t.T)return t.eH}q=new A.ab(null,null)
q.y=8
q.z=b
q.cy=c
return A.aI(a,q)},
kv(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.ab(null,null)
s.y=13
s.z=b
s.cy=q
r=A.aI(a,s)
a.eC.set(q,r)
return r},
dV(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].cy
return s},
kq(a){var s,r,q,p,o,n,m=a.length
for(s="",r="",q=0;q<m;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
n=a[q+2].cy
s+=r+p+o+n}return s},
cl(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.dV(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.ab(null,null)
r.y=9
r.z=b
r.Q=c
if(c.length>0)r.c=c[0]
r.cy=p
q=A.aI(a,r)
a.eC.set(p,q)
return q},
hD(a,b,c){var s,r,q,p,o,n
if(b.y===10){s=b.z
r=b.Q.concat(c)}else{r=c
s=b}q=s.cy+(";<"+A.dV(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.ab(null,null)
o.y=10
o.z=s
o.Q=r
o.cy=q
n=A.aI(a,o)
a.eC.set(q,n)
return n},
iz(a,b,c){var s,r,q,p,o,n=b.cy,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.dV(m)
if(j>0){s=l>0?",":""
r=A.dV(k)
g+=s+"["+r+"]"}if(h>0){s=l>0?",":""
r=A.kq(i)
g+=s+"{"+r+"}"}q=n+(g+")")
p=a.eC.get(q)
if(p!=null)return p
o=new A.ab(null,null)
o.y=11
o.z=b
o.Q=c
o.cy=q
r=A.aI(a,o)
a.eC.set(q,r)
return r},
hE(a,b,c,d){var s,r=b.cy+("<"+A.dV(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.ks(a,b,c,r,d)
a.eC.set(r,s)
return s},
ks(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.fO(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.y===1){r[p]=o;++q}}if(q>0){n=A.au(a,b,r,0)
m=A.cr(a,c,r,0)
return A.hE(a,n,m,c!==m)}}l=new A.ab(null,null)
l.y=12
l.z=b
l.Q=c
l.cy=d
return A.aI(a,l)},
iu(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
iw(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.kl(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.iv(a,r,h,g,!1)
else if(q===46)r=A.iv(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.aH(a.u,a.e,g.pop()))
break
case 94:g.push(A.kv(a.u,g.pop()))
break
case 35:g.push(A.cm(a.u,5,"#"))
break
case 64:g.push(A.cm(a.u,2,"@"))
break
case 126:g.push(A.cm(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.hB(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.cl(p,n,o))
else{m=A.aH(p,a.e,n)
switch(m.y){case 11:g.push(A.hE(p,m,o,a.n))
break
default:g.push(A.hD(p,m,o))
break}}break
case 38:A.km(a,g)
break
case 42:p=a.u
g.push(A.iB(p,A.aH(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.hF(p,A.aH(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.iA(p,A.aH(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.dA()
k=p.sEA
j=p.sEA
n=g.pop()
if(typeof n=="number")switch(n){case-1:k=g.pop()
break
case-2:j=g.pop()
break
default:g.push(n)
break}else g.push(n)
o=g.splice(a.p)
A.hB(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.iz(p,A.aH(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.hB(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.ko(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.aH(a.u,a.e,i)},
kl(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
iv(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.y===10)o=o.z
n=A.kA(s,o.z)[p]
if(n==null)A.af('No "'+p+'" in "'+A.k4(o)+'"')
d.push(A.fL(s,o,n))}else d.push(p)
return m},
km(a,b){var s=b.pop()
if(0===s){b.push(A.cm(a.u,1,"0&"))
return}if(1===s){b.push(A.cm(a.u,4,"1&"))
return}throw A.b(A.ea("Unexpected extended operation "+A.n(s)))},
aH(a,b,c){if(typeof c=="string")return A.cl(a,c,a.sEA)
else if(typeof c=="number")return A.kn(a,b,c)
else return c},
hB(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.aH(a,b,c[s])},
ko(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.aH(a,b,c[s])},
kn(a,b,c){var s,r,q=b.y
if(q===10){if(c===0)return b.z
s=b.Q
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.z
q=b.y}else if(c===0)return b
if(q!==9)throw A.b(A.ea("Indexed base must be an interface type"))
s=b.Q
if(c<=s.length)return s[c-1]
throw A.b(A.ea("Bad index "+c+" for "+b.i(0)))},
E(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.av(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.y
if(r===4)return!0
if(A.av(b))return!1
if(b.y!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.E(a,c[b.z],c,d,e))return!0
p=d.y
s=b===t.P||b===t.T
if(s){if(p===8)return A.E(a,b,c,d.z,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.E(a,b.z,c,d,e)
if(r===6)return A.E(a,b.z,c,d,e)
return r!==7}if(r===6)return A.E(a,b.z,c,d,e)
if(p===6){s=A.ih(a,d)
return A.E(a,b,c,s,e)}if(r===8){if(!A.E(a,b.z,c,d,e))return!1
return A.E(a,A.ig(a,b),c,d,e)}if(r===7){s=A.E(a,t.P,c,d,e)
return s&&A.E(a,b.z,c,d,e)}if(p===8){if(A.E(a,b,c,d.z,e))return!0
return A.E(a,b,c,A.ig(a,d),e)}if(p===7){s=A.E(a,b,c,t.P,e)
return s||A.E(a,b,c,d.z,e)}if(q)return!1
s=r!==11
if((!s||r===12)&&d===t.u)return!0
if(p===12){if(b===t.O)return!0
if(r!==12)return!1
o=b.Q
n=d.Q
m=o.length
if(m!==n.length)return!1
c=c==null?o:o.concat(c)
e=e==null?n:n.concat(e)
for(l=0;l<m;++l){k=o[l]
j=n[l]
if(!A.E(a,k,c,j,e)||!A.E(a,j,e,k,c))return!1}return A.iK(a,b.z,c,d.z,e)}if(p===11){if(b===t.O)return!0
if(s)return!1
return A.iK(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.kR(a,b,c,d,e)}return!1},
iK(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.E(a3,a4.z,a5,a6.z,a7))return!1
s=a4.Q
r=a6.Q
q=s.a
p=r.a
o=q.length
n=p.length
if(o>n)return!1
m=n-o
l=s.b
k=r.b
j=l.length
i=k.length
if(o+j<n+i)return!1
for(h=0;h<o;++h){g=q[h]
if(!A.E(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.E(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.E(a3,k[h],a7,g,a5))return!1}f=s.c
e=r.c
d=f.length
c=e.length
for(b=0,a=0;a<c;a+=3){a0=e[a]
for(;!0;){if(b>=d)return!1
a1=f[b]
b+=3
if(a0<a1)return!1
a2=f[b-2]
if(a1<a0){if(a2)return!1
continue}g=e[a+1]
if(a2&&!g)return!1
g=f[b-1]
if(!A.E(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
kR(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.z,k=d.z
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fL(a,b,r[o])
return A.iE(a,p,null,c,d.Q,e)}n=b.Q
m=d.Q
return A.iE(a,n,null,c,m,e)},
iE(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.E(a,r,d,q,f))return!1}return!0},
ct(a){var s,r=a.y
if(!(a===t.P||a===t.T))if(!A.av(a))if(r!==7)if(!(r===6&&A.ct(a.z)))s=r===8&&A.ct(a.z)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
lt(a){var s
if(!A.av(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
av(a){var s=a.y
return s===2||s===3||s===4||s===5||a===t.X},
iD(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
fO(a){return a>0?new Array(a):v.typeUniverse.sEA},
ab:function ab(a,b){var _=this
_.a=a
_.b=b
_.x=_.r=_.c=null
_.y=0
_.cy=_.cx=_.ch=_.Q=_.z=null},
dA:function dA(){this.c=this.b=this.a=null},
dU:function dU(a){this.a=a},
dz:function dz(){},
ck:function ck(a){this.a=a},
kc(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.lc()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.e5(new A.fl(q),1)).observe(s,{childList:true})
return new A.fk(q,s,r)}else if(self.setImmediate!=null)return A.ld()
return A.le()},
kd(a){self.scheduleImmediate(A.e5(new A.fm(t.M.a(a)),0))},
ke(a){self.setImmediate(A.e5(new A.fn(t.M.a(a)),0))},
kf(a){A.hy(B.H,t.M.a(a))},
hy(a,b){var s=B.e.H(a.a,1000)
return A.kp(s<0?0:s,b)},
kp(a,b){var s=new A.fJ()
s.c5(a,b)
return s},
e1(a){return new A.dr(new A.D($.v,a.h("D<0>")),a.h("dr<0>"))},
e0(a,b){a.$2(0,null)
b.b=!0
return b.a},
hH(a,b){A.kH(a,b)},
e_(a,b){var s,r,q=b.$ti
q.h("1/?").a(a)
s=a==null?q.c.a(a):a
if(!b.b)b.a.aF(s)
else{r=b.a
if(q.h("ay<1>").b(s))r.bm(s)
else r.aH(q.c.a(s))}},
dZ(a,b){var s=A.aw(a),r=A.aJ(a),q=b.b,p=b.a
if(q)p.a5(s,r)
else p.c9(s,r)},
kH(a,b){var s,r,q=new A.fP(b),p=new A.fQ(b)
if(a instanceof A.D)a.by(q,p,t.z)
else{s=t.z
if(t.g.b(a))a.b7(q,p,s)
else{r=new A.D($.v,t.c)
r.a=8
r.c=a
r.by(q,p,s)}}},
e3(a){var s=function(b,c){return function(d,e){while(true)try{b(d,e)
break}catch(r){e=r
d=c}}}(a,1)
return $.v.b4(new A.fW(s),t.H,t.S,t.z)},
eb(a,b){var s=A.bw(a,"error",t.K)
return new A.bz(s,b==null?A.jz(a):b)},
jz(a){var s
if(t.Q.b(a)){s=a.gam()
if(s!=null)return s}return B.G},
jM(a,b){var s,r=!b.b(null)
if(r)throw A.b(A.hf(null,"computation","The type parameter is not nullable"))
s=new A.D($.v,b.h("D<0>"))
A.k8(a,new A.eD(null,s,b))
return s},
hz(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.as()
b.aG(a)
A.bq(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.bx(q)}},
bq(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.g;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.e2(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.bq(c.a,b)
p.a=k
j=k.a}o=c.a
i=o.c
p.b=m
p.c=i
if(n){h=b.c
h=(h&1)!==0||(h&15)===8}else h=!0
if(h){g=b.b.b
if(m){o=o.b===g
o=!(o||o)}else o=!1
if(o){s.a(i)
A.e2(i.a,i.b)
return}f=$.v
if(f!==g)$.v=g
else f=null
b=b.c
if((b&15)===8)new A.fC(p,c,m).$0()
else if(n){if((b&1)!==0)new A.fB(p,i).$0()}else if((b&2)!==0)new A.fA(c,p).$0()
if(f!=null)$.v=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.h("ay<2>").b(b)||!o.Q[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.at(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.hz(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.at(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
iM(a,b){var s
if(t.C.b(a))return b.b4(a,t.z,t.K,t.l)
s=t.v
if(s.b(a))return s.a(a)
throw A.b(A.hf(a,"onError",u.c))},
kZ(){var s,r
for(s=$.bu;s!=null;s=$.bu){$.cq=null
r=s.b
$.bu=r
if(r==null)$.cp=null
s.a.$0()}},
l5(){$.hJ=!0
try{A.kZ()}finally{$.cq=null
$.hJ=!1
if($.bu!=null)$.hT().$1(A.iS())}},
iQ(a){var s=new A.ds(a),r=$.cp
if(r==null){$.bu=$.cp=s
if(!$.hJ)$.hT().$1(A.iS())}else $.cp=r.b=s},
l4(a){var s,r,q,p=$.bu
if(p==null){A.iQ(a)
$.cq=$.cp
return}s=new A.ds(a)
r=$.cq
if(r==null){s.b=p
$.bu=$.cq=s}else{q=r.b
s.b=q
$.cq=r.b=s
if(q==null)$.cp=s}},
j6(a){var s=null,r=$.v
if(B.h===r){A.aW(s,s,B.h,a)
return}A.aW(s,s,r,t.M.a(r.aV(a)))},
m7(a,b){A.bw(a,"stream",t.K)
return new A.dQ(b.h("dQ<0>"))},
c0(a){return new A.c3(null,null,a.h("c3<0>"))},
iP(a){return},
kg(a,b){if(b==null)b=A.lg()
if(t.da.b(b))return a.b4(b,t.z,t.K,t.l)
if(t.d5.b(b))return t.v.a(b)
throw A.b(A.al("handleError callback must take either an Object (the error), or both an Object (the error) and a StackTrace.",null))},
l0(a,b){A.e2(a,b)},
l_(){},
k8(a,b){var s=$.v
if(s===B.h)return A.hy(a,t.M.a(b))
return A.hy(a,t.M.a(s.aV(b)))},
e2(a,b){A.l4(new A.fV(a,b))},
iN(a,b,c,d,e){var s,r=$.v
if(r===c)return d.$0()
$.v=c
s=r
try{r=d.$0()
return r}finally{$.v=s}},
iO(a,b,c,d,e,f,g){var s,r=$.v
if(r===c)return d.$1(e)
$.v=c
s=r
try{r=d.$1(e)
return r}finally{$.v=s}},
l2(a,b,c,d,e,f,g,h,i){var s,r=$.v
if(r===c)return d.$2(e,f)
$.v=c
s=r
try{r=d.$2(e,f)
return r}finally{$.v=s}},
aW(a,b,c,d){t.M.a(d)
if(B.h!==c)d=c.aV(d)
A.iQ(d)},
fl:function fl(a){this.a=a},
fk:function fk(a,b,c){this.a=a
this.b=b
this.c=c},
fm:function fm(a){this.a=a},
fn:function fn(a){this.a=a},
fJ:function fJ(){},
fK:function fK(a,b){this.a=a
this.b=b},
dr:function dr(a,b){this.a=a
this.b=!1
this.$ti=b},
fP:function fP(a){this.a=a},
fQ:function fQ(a){this.a=a},
fW:function fW(a){this.a=a},
bz:function bz(a,b){this.a=a
this.b=b},
a3:function a3(a,b){this.a=a
this.$ti=b},
ae:function ae(a,b,c,d,e,f){var _=this
_.dx=0
_.fr=_.dy=null
_.x=a
_.a=b
_.c=c
_.d=d
_.e=e
_.r=_.f=null
_.$ti=f},
c4:function c4(){},
c3:function c3(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.r=_.e=_.d=null
_.$ti=c},
eD:function eD(a,b,c){this.a=a
this.b=b
this.c=c},
at:function at(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
D:function D(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
fs:function fs(a,b){this.a=a
this.b=b},
fz:function fz(a,b){this.a=a
this.b=b},
fv:function fv(a){this.a=a},
fw:function fw(a){this.a=a},
fx:function fx(a,b,c){this.a=a
this.b=b
this.c=c},
fu:function fu(a,b){this.a=a
this.b=b},
fy:function fy(a,b){this.a=a
this.b=b},
ft:function ft(a,b,c){this.a=a
this.b=b
this.c=c},
fC:function fC(a,b,c){this.a=a
this.b=b
this.c=c},
fD:function fD(a){this.a=a},
fB:function fB(a,b){this.a=a
this.b=b},
fA:function fA(a,b){this.a=a
this.b=b},
ds:function ds(a){this.a=a
this.b=null},
aD:function aD(){},
f7:function f7(a,b){this.a=a
this.b=b},
f8:function f8(a,b){this.a=a
this.b=b},
X:function X(){},
df:function df(){},
bn:function bn(){},
c5:function c5(){},
hC:function hC(a,b){this.a=a
this.$ti=b},
bm:function bm(){},
fo:function fo(a){this.a=a},
br:function br(){},
aT:function aT(){},
c6:function c6(a,b){this.b=a
this.a=null
this.$ti=b},
dx:function dx(){},
cg:function cg(){},
fF:function fF(a,b){this.a=a
this.b=b},
bs:function bs(a){var _=this
_.c=_.b=null
_.a=0
_.$ti=a},
bo:function bo(a,b,c){var _=this
_.a=a
_.b=0
_.c=b
_.$ti=c},
dQ:function dQ(a){this.$ti=a},
cn:function cn(){},
fV:function fV(a,b){this.a=a
this.b=b},
dJ:function dJ(){},
fG:function fG(a,b){this.a=a
this.b=b},
fH:function fH(a,b,c){this.a=a
this.b=b
this.c=c},
N(a,b){return new A.bM(a.h("@<0>").p(b).h("bM<1,2>"))},
jT(a){return new A.cb(a.h("cb<0>"))},
hA(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
kk(a,b,c){var s=new A.aV(a,b,c.h("aV<0>"))
s.c=a.e
return s},
jN(a,b,c){var s,r
if(A.hK(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.i([],t.s)
B.a.l($.a4,a)
try{A.kY(a,s)}finally{if(0>=$.a4.length)return A.k($.a4,-1)
$.a4.pop()}r=A.ik(b,t.R.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
hi(a,b,c){var s,r
if(A.hK(a))return b+"..."+c
s=new A.c1(b)
B.a.l($.a4,a)
try{r=s
r.a=A.ik(r.a,a,", ")}finally{if(0>=$.a4.length)return A.k($.a4,-1)
$.a4.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
hK(a){var s,r
for(s=$.a4.length,r=0;r<s;++r)if(a===$.a4[r])return!0
return!1},
kY(a,b){var s,r,q,p,o,n,m,l=a.gt(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.m())return
s=A.n(l.gn())
B.a.l(b,s)
k+=s.length+2;++j}if(!l.m()){if(j<=5)return
if(0>=b.length)return A.k(b,-1)
r=b.pop()
if(0>=b.length)return A.k(b,-1)
q=b.pop()}else{p=l.gn();++j
if(!l.m()){if(j<=4){B.a.l(b,A.n(p))
return}r=A.n(p)
if(0>=b.length)return A.k(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gn();++j
for(;l.m();p=o,o=n){n=l.gn();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.k(b,-1)
k-=b.pop().length+2;--j}B.a.l(b,"...")
return}}q=A.n(p)
r=A.n(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.k(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.a.l(b,m)
B.a.l(b,q)
B.a.l(b,r)},
ib(a){var s,r={}
if(A.hK(a))return"{...}"
s=new A.c1("")
try{B.a.l($.a4,a)
s.a+="{"
r.a=!0
J.hX(a,new A.eR(r,s))
s.a+="}"}finally{if(0>=$.a4.length)return A.k($.a4,-1)
$.a4.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
cb:function cb(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
dF:function dF(a){this.a=a
this.c=this.b=null},
aV:function aV(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bk:function bk(a,b){this.a=a
this.$ti=b},
bO:function bO(){},
l:function l(){},
bQ:function bQ(){},
eR:function eR(a,b){this.a=a
this.b=b},
z:function z(){},
eS:function eS(a){this.a=a},
aq:function aq(){},
bX:function bX(){},
ch:function ch(){},
cc:function cc(){},
ci:function ci(){},
co:function co(){},
l1(a,b){var s,r,q,p=null
try{p=JSON.parse(a)}catch(r){s=A.aw(r)
q=A.b6(String(s),null,null)
throw A.b(q)}q=A.fR(p)
return q},
fR(a){var s
if(a==null)return null
if(typeof a!="object")return a
if(Object.getPrototypeOf(a)!==Array.prototype)return new A.dD(a,Object.create(null))
for(s=0;s<a.length;++s)a[s]=A.fR(a[s])
return a},
ka(a,b,c,d){var s,r
if(b instanceof Uint8Array){s=b
d=s.length
if(d-c<15)return null
r=A.kb(a,s,c,d)
if(r!=null&&a)if(r.indexOf("\ufffd")>=0)return null
return r}return null},
kb(a,b,c,d){var s=a?$.jq():$.jp()
if(s==null)return null
if(0===c&&d===b.length)return A.iq(s,b)
return A.iq(s,b.subarray(c,A.d5(c,d,b.length)))},
iq(a,b){var s,r
try{s=a.decode(b)
return s}catch(r){}return null},
kD(a){switch(a){case 65:return"Missing extension byte"
case 67:return"Unexpected extension byte"
case 69:return"Invalid UTF-8 byte"
case 71:return"Overlong encoding"
case 73:return"Out of unicode range"
case 75:return"Encoded surrogate"
case 77:return"Unfinished UTF-8 octet sequence"
default:return""}},
kC(a,b,c){var s,r,q,p=c-b,o=new Uint8Array(p)
for(s=J.R(a),r=0;r<p;++r){q=s.j(a,b+r)
if((q&4294967040)>>>0!==0)q=255
if(!(r<p))return A.k(o,r)
o[r]=q}return o},
dD:function dD(a,b){this.a=a
this.b=b
this.c=null},
dE:function dE(a){this.a=a},
fh:function fh(){},
fg:function fg(){},
am:function am(){},
b2:function b2(){},
cI:function cI(){},
cS:function cS(){},
cT:function cT(a){this.a=a},
dm:function dm(){},
dp:function dp(){},
fN:function fN(a){this.b=0
this.c=a},
dn:function dn(a){this.a=a},
fM:function fM(a){this.a=a
this.b=16
this.c=0},
e7(a){var s=A.k1(a,null)
if(s!=null)return s
throw A.b(A.b6(a,null,null))},
J(a){var s=A.k0(a)
if(s!=null)return s
throw A.b(A.b6("Invalid double",a,null))},
jK(a){if(a instanceof A.M)return a.i(0)
return"Instance of '"+A.f0(a)+"'"},
jL(a,b){a=t.K.a(A.b(a))
a.stack=b.i(0)
throw a
throw A.b("unreachable")},
ia(a,b,c,d){var s,r=c?J.i8(a,d):J.jO(a,d)
if(a!==0&&b!=null)for(s=0;s<r.length;++s)r[s]=b
return r},
jV(a,b,c){var s,r=A.i([],c.h("y<0>"))
for(s=a.gt(a);s.m();)B.a.l(r,c.a(s.gn()))
if(b)return r
return J.hk(r,c)},
cV(a,b,c){var s=A.jU(a,c)
return s},
jU(a,b){var s,r
if(Array.isArray(a))return A.i(a.slice(0),b.h("y<0>"))
s=A.i([],b.h("y<0>"))
for(r=J.a8(a);r.m();)B.a.l(s,r.gn())
return s},
k6(a,b,c){var s=A.k2(a,b,A.d5(b,c,a.length))
return s},
ie(a){return new A.cQ(a,A.jS(a,!1,!0,!1,!1,!1))},
ik(a,b,c){var s=J.a8(b)
if(!s.m())return a
if(c.length===0){do a+=A.n(s.gn())
while(s.m())}else{a+=A.n(s.gn())
for(;s.m();)a=a+c+A.n(s.gn())}return a},
iC(a,b,c,d){var s,r,q,p,o,n,m="0123456789ABCDEF"
if(c===B.l){s=$.jr().b
s=s.test(b)}else s=!1
if(s)return b
A.m(c).h("am.S").a(b)
r=c.gcS().aX(b)
for(s=r.length,q=0,p="";q<s;++q){o=r[q]
if(o<128){n=o>>>4
if(!(n<8))return A.k(a,n)
n=(a[n]&1<<(o&15))!==0}else n=!1
if(n)p+=A.aQ(o)
else p=o===32?p+"+":p+"%"+m[o>>>4&15]+m[o&15]}return p.charCodeAt(0)==0?p:p},
i6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=$.ja().cV(a)
if(c!=null){s=new A.ev()
r=c.b
if(1>=r.length)return A.k(r,1)
q=r[1]
q.toString
p=A.e7(q)
if(2>=r.length)return A.k(r,2)
q=r[2]
q.toString
o=A.e7(q)
if(3>=r.length)return A.k(r,3)
q=r[3]
q.toString
n=A.e7(q)
if(4>=r.length)return A.k(r,4)
m=s.$1(r[4])
if(5>=r.length)return A.k(r,5)
l=s.$1(r[5])
if(6>=r.length)return A.k(r,6)
k=s.$1(r[6])
if(7>=r.length)return A.k(r,7)
j=new A.ew().$1(r[7])
i=B.e.H(j,1000)
q=r.length
if(8>=q)return A.k(r,8)
if(r[8]!=null){if(9>=q)return A.k(r,9)
h=r[9]
if(h!=null){g=h==="-"?-1:1
if(10>=q)return A.k(r,10)
q=r[10]
q.toString
f=A.e7(q)
if(11>=r.length)return A.k(r,11)
l-=g*(s.$1(r[11])+60*f)}e=!0}else e=!1
d=A.k3(p,o,n,m,l,k,i+B.i.ai(j%1000/1000),e)
if(d==null)throw A.b(A.b6("Time out of range",a,null))
return A.jH(d,e)}else throw A.b(A.b6("Invalid date format",a,null))},
jH(a,b){var s
if(Math.abs(a)<=864e13)s=!1
else s=!0
if(s)A.af(A.al("DateTime is outside valid range: "+a,null))
A.bw(b,"isUtc",t.y)
return new A.F(a,b)},
jI(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
jJ(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
cH(a){if(a>=10)return""+a
return"0"+a},
i7(a){return new A.b5(1000*a)},
cJ(a){if(typeof a=="number"||A.iJ(a)||a==null)return J.aY(a)
if(typeof a=="string")return JSON.stringify(a)
return A.jK(a)},
ea(a){return new A.by(a)},
al(a,b){return new A.ak(!1,null,b,a)},
hf(a,b,c){return new A.ak(!0,a,b,c)},
hu(a,b){return new A.bW(null,null,!0,a,b,"Value not in range")},
aC(a,b,c,d,e){return new A.bW(b,c,!0,a,d,"Invalid value")},
d5(a,b,c){if(0>a||a>c)throw A.b(A.aC(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.b(A.aC(b,a,c,"end",null))
return b}return c},
id(a,b){if(a<0)throw A.b(A.aC(a,0,null,b,null))
return a},
bG(a,b,c,d,e){var s=A.a7(e==null?J.aj(b):e)
return new A.cN(s,!0,a,c,"Index out of range")},
as(a){return new A.dl(a)},
io(a){return new A.dj(a)},
ij(a){return new A.aR(a)},
ah(a){return new A.cE(a)},
bE(a){return new A.fr(a)},
b6(a,b,c){return new A.eC(a,b,c)},
hn(a,b,c,d){var s,r
if(B.m===c)return A.il(J.a6(a),J.a6(b),$.ha())
if(B.m===d){s=J.a6(a)
b=J.a6(b)
c=J.a6(c)
return A.hx(A.aE(A.aE(A.aE($.ha(),s),b),c))}s=J.a6(a)
b=J.a6(b)
c=J.a6(c)
d=J.a6(d)
r=$.ha()
return A.hx(A.aE(A.aE(A.aE(A.aE(r,s),b),c),d))},
j3(a){A.ly(a)},
ip(a){var s=t.N
return B.a.cW(A.i(a.split("&"),t.s),A.N(s,s),new A.ff(B.l),t.f)},
kB(a,b){var s,r,q
for(s=0,r=0;r<2;++r){q=B.b.M(a,b+r)
if(48<=q&&q<=57)s=s*16+q-48
else{q|=32
if(97<=q&&q<=102)s=s*16+q-87
else throw A.b(A.al("Invalid URL encoding",null))}}return s},
hG(a,b,c,d,e){var s,r,q,p,o=b
while(!0){if(!(o<c)){s=!0
break}r=B.b.M(a,o)
if(r<=127)if(r!==37)q=r===43
else q=!0
else q=!0
if(q){s=!1
break}++o}if(s){if(B.l!==d)q=!1
else q=!0
if(q)return B.b.W(a,b,c)
else p=new A.cC(B.b.W(a,b,c))}else{p=A.i([],t.t)
for(q=a.length,o=b;o<c;++o){r=B.b.M(a,o)
if(r>127)throw A.b(A.al("Illegal percent encoding in URI",null))
if(r===37){if(o+3>q)throw A.b(A.al("Truncated URI",null))
B.a.l(p,A.kB(a,o+1))
o+=2}else if(r===43)B.a.l(p,32)
else B.a.l(p,r)}}t.L.a(p)
return B.S.aX(p)},
F:function F(a,b){this.a=a
this.b=b},
ev:function ev(){},
ew:function ew(){},
b5:function b5(a){this.a=a},
x:function x(){},
by:function by(a){this.a=a},
aF:function aF(){},
d0:function d0(){},
ak:function ak(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bW:function bW(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
cN:function cN(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
dl:function dl(a){this.a=a},
dj:function dj(a){this.a=a},
aR:function aR(a){this.a=a},
cE:function cE(a){this.a=a},
d1:function d1(){},
bZ:function bZ(){},
cG:function cG(a){this.a=a},
fr:function fr(a){this.a=a},
eC:function eC(a,b,c){this.a=a
this.b=b
this.c=c},
j:function j(){},
K:function K(){},
bb:function bb(a,b,c){this.a=a
this.b=b
this.$ti=c},
I:function I(){},
t:function t(){},
dR:function dR(){},
c1:function c1(a){this.a=a},
ff:function ff(a){this.a=a},
lJ(){var s=window
s.toString
return s},
i4(a,b){var s=document.createElement("canvas")
s.toString
B.n.sdg(s,b)
B.n.sax(s,a)
return s},
ex(){var s=document.createElement("div")
s.toString
return s},
ki(a,b){var s
for(s=b.gt(b);s.m();)a.appendChild(s.gn()).toString},
jY(a,b,c,d){var s=new Option(a,b,c,!1)
s.toString
return s},
bp(a,b,c,d,e){var s=A.la(new A.fq(c),t.B),r=s!=null
if(r&&!0){t.bw.a(s)
if(r)J.jt(a,b,s,!1)}return new A.ca(a,b,s,!1,e.h("ca<0>"))},
fS(a){var s,r="postMessage" in a
r.toString
if(r){s=A.kj(a)
return s}else return t.ch.a(a)},
kj(a){var s=window
s.toString
if(a===s)return t.ci.a(a)
else return new A.dw()},
la(a,b){var s=$.v
if(s===B.h)return a
return s.cK(a,b)},
f:function f(){},
aZ:function aZ(){},
cu:function cu(){},
b0:function b0(){},
b1:function b1(){},
ag:function ag(){},
b3:function b3(){},
eu:function eu(){},
b4:function b4(){},
ey:function ey(){},
bB:function bB(){},
ez:function ez(){},
du:function du(a,b){this.a=a
this.b=b},
aU:function aU(a,b){this.a=a
this.$ti=b},
p:function p(){},
c:function c(){},
B:function B(){},
cL:function cL(){},
b7:function b7(){},
az:function az(){},
aA:function aA(){},
ba:function ba(){},
V:function V(){},
dt:function dt(a){this.a=a},
h:function h(){},
bT:function bT(){},
W:function W(){},
aB:function aB(){},
bf:function bf(){},
f1:function f1(){},
c_:function c_(){},
f6:function f6(a){this.a=a},
bg:function bg(){},
ad:function ad(){},
bl:function bl(){},
c7:function c7(){},
cd:function cd(){},
dy:function dy(a){this.a=a},
hh:function hh(a,b){this.a=a
this.$ti=b},
c9:function c9(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
c8:function c8(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
ca:function ca(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
fq:function fq(a){this.a=a},
a1:function a1(){},
aL:function aL(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
dw:function dw(){},
dv:function dv(){},
dB:function dB(){},
dC:function dC(){},
dH:function dH(){},
dI:function dI(){},
dP:function dP(){},
dX:function dX(){},
dY:function dY(){},
hg(){var s=window.navigator.userAgent
s.toString
return s},
cF:function cF(){},
cK:function cK(a,b){this.a=a
this.b=b},
eA:function eA(){},
eB:function eB(){},
j_(a,b,c){A.fX(c,t.o,"T","min")
return Math.min(c.a(a),c.a(b))},
iZ(a,b,c){A.fX(c,t.o,"T","max")
return Math.max(c.a(a),c.a(b))},
aP:function aP(a,b,c){this.a=a
this.b=b
this.$ti=c},
d:function d(){},
ec:function ec(a){var _=this
_.a=a
_.f=_.e=_.d=_.c=_.b=0
_.r=null
_.x=""},
ed:function ed(a){this.a=a},
ee:function ee(){},
ef:function ef(){},
eg:function eg(){},
eh:function eh(){},
ei:function ei(){},
ej:function ej(){},
U:function U(a,b){this.a=a
this.b=b},
a0:function a0(a,b,c,d,e){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e},
bA:function bA(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a,b,c){this.a=a
this.b=b
this.e=c},
eq:function eq(){this.b="Arial"
this.c="#000000"},
ep:function ep(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=$
_.r=_.f=_.e=_.d=null
_.x=c
_.y=d
_.z=e
_.Q=f
_.cx=_.ch=0},
es:function es(a,b){this.a=a
this.b=b},
et:function et(a,b){this.a=a
this.b=b},
cD:function cD(){this.d=null},
eZ:function eZ(a){this.b=a},
lD(){var s=A.i([],t.j),r=new A.cD()
r.bg(t.G.a(B.j.S(0,'{\n        "hash": "0x03806ce5ef69bd9780edfb04c29da1f23db96294",\n        "symbol": "TSL",\n        "decimals": 18,\n        "price": {\n            "coinGeckoId": "tesla-token",\n            "prices": {\n                "2017-12-27": 0.129790782511858,\n                "2017-12-28": 0.116297753039781,\n                "2017-12-29": 0.100901109238856,\n                "2017-12-30": 0.106191412075121,\n                "2017-12-31": 0.105733006717031,\n                "2018-01-01": 0.115561770168184,\n                "2018-01-02": 0.15674096904217993,\n                "2018-01-03": 0.16862178248354356,\n                "2018-01-04": 0.19900454274660384,\n                "2018-01-05": 0.19793688450307664,\n                "2018-01-06": 0.2124712158978181,\n                "2018-01-07": 0.19792085612473473,\n                "2018-01-08": 0.2504653403360485,\n                "2018-01-09": 0.2304922298740416,\n                "2018-01-10": 0.18903054664544028,\n                "2018-01-11": 0.19924053104239547,\n                "2018-01-12": 0.18567090621280383,\n                "2018-01-13": 0.1503405843040646,\n                "2018-01-14": 0.14125637516715905,\n                "2018-01-15": 0.08832401133344746,\n                "2018-01-16": 0.0928978424566256,\n                "2018-01-17": 0.10512546181740517,\n                "2018-01-18": 0.11203271325443805,\n                "2018-01-19": 0.13385437728774618,\n                "2018-01-20": 0.10303571116113179,\n                "2018-01-21": 0.10532090362249509,\n                "2018-01-22": 0.1031690758142368,\n                "2018-01-23": 0.1045443284996501,\n                "2018-01-24": 0.10900595431040631,\n                "2018-01-25": 0.10427553481542522,\n                "2018-01-26": 0.10535698044394645,\n                "2018-01-27": 0.1029295667073365,\n                "2018-01-28": 0.09571447675226415,\n                "2018-01-29": 0.10307676309704181,\n                "2018-01-30": 0.08798121398661278,\n                "2018-01-31": 0.0863571160989182,\n                "2018-02-01": 0.0684720765491815,\n                "2018-02-02": 0.06333518486657165,\n                "2018-02-03": 0.06661222710904556,\n                "2018-02-04": 0.052391286000634966,\n                "2018-02-05": 0.04376372181383625,\n                "2018-02-06": 0.052891595722546356,\n                "2018-02-07": 0.052808130289646475,\n                "2018-02-08": 0.055130655556387236,\n                "2018-02-09": 0.07263721500799017,\n                "2018-02-10": 0.07341240631969743,\n                "2018-02-11": 0.0722251218542553,\n                "2018-02-12": 0.07565725732251703,\n                "2018-02-13": 0.06880553370514941,\n                "2018-02-14": 0.07094465538170021,\n                "2018-02-15": 0.0740708047519414,\n                "2018-02-16": 0.07466975726292248,\n                "2018-02-17": 0.07496563386740808,\n                "2018-02-18": 0.07196813915852801,\n                "2018-02-19": 0.07046068867427709,\n                "2018-02-20": 0.06704075165356091,\n                "2018-02-21": 0.05021988059467268,\n                "2018-02-22": 0.05018072174741546,\n                "2018-02-23": 0.06086727267303203,\n                "2018-02-24": 0.05994182597567221,\n                "2018-02-25": 0.05695025027304403,\n                "2018-02-26": 0.05874808021275218,\n                "2018-02-27": 0.05736295863107412,\n                "2018-02-28": 0.052966598780597195,\n                "2018-03-01": 0.04774555375221946,\n                "2018-03-02": 0.04594999405232492,\n                "2018-03-03": 0.046508496325834515,\n                "2018-03-04": 0.043367244941751086,\n                "2018-03-05": 0.0450199472234489,\n                "2018-03-06": 0.04328192848085179,\n                "2018-03-07": 0.03572006017014204,\n                "2018-03-08": 0.033366460615588615,\n                "2018-03-09": 0.03072175389323357,\n                "2018-03-10": 0.033757701937367934,\n                "2018-03-11": 0.034060314921991075,\n                "2018-03-12": 0.034855363490432494,\n                "2018-03-13": 0.03352713533372048,\n                "2018-03-14": 0.03182701336971454,\n                "2018-03-15": 0.030828237964449355,\n                "2018-03-16": 0.028588603951680364,\n                "2018-03-17": 0.027975649768874823,\n                "2018-03-18": 0.027303685751482093,\n                "2018-03-19": 0.029026743861026008,\n                "2018-03-20": 0.02764990944953054,\n                "2018-03-21": 0.028053834069718547,\n                "2018-03-22": 0.027476177003810515,\n                "2018-03-23": 0.026207619080343372,\n                "2018-03-24": 0.027342797122581697,\n                "2018-03-25": 0.025404976733893334,\n                "2018-03-26": 0.02453508974066075,\n                "2018-03-27": 0.022740262706917168,\n                "2018-03-28": 0.02276457229505015,\n                "2018-03-29": 0.020581717659471414,\n                "2018-03-30": 0.019826616868281886,\n                "2018-03-31": 0.01957076268168622,\n                "2018-04-01": 0.0207982316359461,\n                "2018-04-02": 0.02080111532455143,\n                "2018-04-03": 0.025667083685675763,\n                "2018-04-04": 0.023376716574270113,\n                "2018-04-05": 0.02138379287518878,\n                "2018-04-06": 0.020585543668294095,\n                "2018-04-07": 0.02039582071815652,\n                "2018-04-08": 0.021865452760258353,\n                "2018-04-09": 0.02099483631679214,\n                "2018-04-10": 0.021437733047610937,\n                "2018-04-11": 0.021447350424825935,\n                "2018-04-12": 0.02476588302282706,\n                "2018-04-13": 0.024019790968984007,\n                "2018-04-14": 0.023031224897028735,\n                "2018-04-15": 0.024586820907094253,\n                "2018-04-16": 0.024249829192666342,\n                "2018-04-17": 0.024201428709831174,\n                "2018-04-18": 0.02538397498505265,\n                "2018-04-19": 0.03484928418332364,\n                "2018-04-20": 0.041974153276661985,\n                "2018-04-21": 0.03898048239240044,\n                "2018-04-22": 0.04375099206861387,\n                "2018-04-23": 0.04253412790280053,\n                "2018-04-24": 0.051387634017012726,\n                "2018-04-25": 0.039398996706801824,\n                "2018-04-26": 0.042172518244503306,\n                "2018-04-27": 0.040526824783308955,\n                "2018-04-28": 0.0470052964801635,\n                "2018-04-29": 0.04562887029486328,\n                "2018-04-30": 0.04451811599409831,\n                "2018-05-01": 0.04168347640518628,\n                "2018-05-02": 0.04765033759787206,\n                "2018-05-03": 0.0498544701701347,\n                "2018-05-04": 0.050220452846816144,\n                "2018-05-05": 0.048417875331662766,\n                "2018-05-06": 0.04481158202108257,\n                "2018-05-07": 0.044342007098887366,\n                "2018-05-08": 0.04339900283537307,\n                "2018-05-09": 0.04089364909205281,\n                "2018-05-10": 0.04152292071395608,\n                "2018-05-11": 0.03422387989970227,\n                "2018-05-12": 0.03438220737984355,\n                "2018-05-13": 0.03505372185756016,\n                "2018-05-14": 0.034363414292060905,\n                "2018-05-15": 0.032989653904973965,\n                "2018-05-16": 0.03156687735458604,\n                "2018-05-17": 0.03075635137867288,\n                "2018-05-18": 0.03168770252594499,\n                "2018-05-19": 0.03102636782943799,\n                "2018-05-20": 0.032648678354230756,\n                "2018-05-21": 0.03517793268942009,\n                "2018-05-22": 0.03155166544625085,\n                "2018-05-23": 0.026606867464393086,\n                "2018-05-24": 0.028422797890434583,\n                "2018-05-25": 0.026651331475390172,\n                "2018-05-26": 0.026559968948959737,\n                "2018-05-27": 0.026458355365132198,\n                "2018-05-28": 0.024944694026398387,\n                "2018-05-29": 0.026235620150408607,\n                "2018-05-30": 0.02603080325036622,\n                "2018-05-31": 0.026564134220965905,\n                "2018-06-01": 0.03215806511029621,\n                "2018-06-02": 0.031120358594419684,\n                "2018-06-03": 0.030712941053642497,\n                "2018-06-04": 0.029340195806099433,\n                "2018-06-05": 0.02885595634195607,\n                "2018-06-06": 0.028078993294469154,\n                "2018-06-07": 0.027868270066005067,\n                "2018-06-08": 0.02684550390003254,\n                "2018-06-09": 0.024931817939163478,\n                "2018-06-10": 0.021088985927155347,\n                "2018-06-11": 0.02117329434863837,\n                "2018-06-12": 0.020539064439161658,\n                "2018-06-13": 0.020519603212484416,\n                "2018-06-14": 0.020940555095987974,\n                "2018-06-15": 0.02109068553616241,\n                "2018-06-16": 0.02073089562878588,\n                "2018-06-17": 0.020397392453084466,\n                "2018-06-18": 0.019966617597550404,\n                "2018-06-19": 0.01975140061763184,\n                "2018-06-20": 0.01919747992149083,\n                "2018-06-21": 0.019208937437973424,\n                "2018-06-22": 0.016755992320539075,\n                "2018-06-23": 0.015922915406470117,\n                "2018-06-24": 0.013694627524410809,\n                "2018-06-25": 0.01497891072568139,\n                "2018-06-26": 0.01486198612251893,\n                "2018-06-27": 0.014772020199500363,\n                "2018-06-28": 0.014008037282203088,\n                "2018-06-29": 0.014227079315138613,\n                "2018-06-30": 0.014470252800802972,\n                "2018-07-01": 0.015400049112262058,\n                "2018-07-02": 0.015766618169112335,\n                "2018-07-03": 0.014529509194523194,\n                "2018-07-04": 0.014225624994726488,\n                "2018-07-05": 0.014741902634697794,\n                "2018-07-06": 0.014564152566220342,\n                "2018-07-07": 0.01423998673007412,\n                "2018-07-08": 0.014685545625632674,\n                "2018-07-09": 0.014015336488034871,\n                "2018-07-10": 0.012308676507801621,\n                "2018-07-11": 0.011874311349967,\n                "2018-07-12": 0.011555644328279395,\n                "2018-07-13": 0.012248392599315521,\n                "2018-07-14": 0.0111593938774658,\n                "2018-07-15": 0.011717842471244352,\n                "2018-07-16": 0.01244733215137493,\n                "2018-07-17": 0.01268033993187423,\n                "2018-07-18": 0.01274714262933595,\n                "2018-07-19": 0.012778157388791905,\n                "2018-07-20": 0.01184817716986101,\n                "2018-07-21": 0.01210694966816909,\n                "2018-07-22": 0.011220916711957872,\n                "2018-07-23": 0.011200224920205441,\n                "2018-07-24": 0.010824148793293228,\n                "2018-07-25": 0.011047562339795298,\n                "2018-07-26": 0.011008964267655444,\n                "2018-07-27": 0.01115811196376309,\n                "2018-07-28": 0.01101213916713029,\n                "2018-07-29": 0.01072048166428154,\n                "2018-07-30": 0.011225482088132056,\n                "2018-07-31": 0.01130898195133045,\n                "2018-08-01": 0.011935328769037478,\n                "2018-08-02": 0.010725293038503642,\n                "2018-08-03": 0.010674632534922403,\n                "2018-08-04": 0.009930161752812711,\n                "2018-08-05": 0.010547658815185795,\n                "2018-08-06": 0.010017139247765277,\n                "2018-08-07": 0.009521471391959012,\n                "2018-08-08": 0.007810022710659434,\n                "2018-08-09": 0.007801249535047323,\n                "2018-08-10": 0.007628230910758313,\n                "2018-08-11": 0.006419805505891887,\n                "2018-08-12": 0.0058970793994560546,\n                "2018-08-13": 0.005915967601473109,\n                "2018-08-14": 0.004489136334709542,\n                "2018-08-15": 0.0049756095381648545,\n                "2018-08-16": 0.004875669249505287,\n                "2018-08-17": 0.005457380942429085,\n                "2018-08-18": 0.00510132057073805,\n                "2018-08-19": 0.005143421315402626,\n                "2018-08-20": 0.004789219695458663,\n                "2018-08-21": 0.004583966366006685,\n                "2018-08-22": 0.004648129496499759,\n                "2018-08-23": 0.004399255920435523,\n                "2018-08-24": 0.004568531041806667,\n                "2018-08-25": 0.004766753402006753,\n                "2018-08-26": 0.004827616640213076,\n                "2018-08-27": 0.004602973715406598,\n                "2018-08-28": 0.004428488841236295,\n                "2018-08-29": 0.0045571008362642875,\n                "2018-08-30": 0.004723736552420725,\n                "2018-08-31": 0.005130451120120921,\n                "2018-09-01": 0.00517024002478645,\n                "2018-09-02": 0.004825997536271383,\n                "2018-09-03": 0.005036706886813023,\n                "2018-09-04": 0.005254575592700399,\n                "2018-09-05": 0.004561890807157848,\n                "2018-09-06": 0.004376929070505035,\n                "2018-09-07": 0.004545658847792753,\n                "2018-09-08": 0.0036737439696779358,\n                "2018-09-09": 0.004265497795144704,\n                "2018-09-10": 0.004167445373513783,\n                "2018-09-11": 0.004132747751181436,\n                "2018-09-12": 0.0039987364847089485,\n                "2018-09-13": 0.004307978663863329,\n                "2018-09-14": 0.00413116078738099,\n                "2018-09-15": 0.004271880552752649,\n                "2018-09-16": 0.004506183697048851,\n                "2018-09-17": 0.004168966940368883,\n                "2018-09-18": 0.004294226190908367,\n                "2018-09-19": 0.004248188420753002,\n                "2018-09-20": 0.004552974003423285,\n                "2018-09-21": 0.004478844332856439,\n                "2018-09-22": 0.00464404780391628,\n                "2018-09-23": 0.004732720657286183,\n                "2018-09-24": 0.00435525568999217,\n                "2018-09-25": 0.004168241210303239,\n                "2018-09-26": 0.003980705798044371,\n                "2018-09-27": 0.004231820196314113,\n                "2018-09-28": 0.004061252070890092,\n                "2018-09-29": 0.004362203347130986,\n                "2018-09-30": 0.004401591394276812,\n                "2018-10-01": 0.004182497082641763,\n                "2018-10-02": 0.005383020414553723,\n                "2018-10-03": 0.004804714974747676,\n                "2018-10-04": 0.005426556385043378,\n                "2018-10-05": 0.005483632688389292,\n                "2018-10-06": 0.005778232582516189,\n                "2018-10-07": 0.005430484124930096,\n                "2018-10-08": 0.005472123421817409,\n                "2018-10-09": 0.005220425967547531,\n                "2018-10-10": 0.005080039021678131,\n                "2018-10-11": 0.004182334997034264,\n                "2018-10-12": 0.004208533489433353,\n                "2018-10-13": 0.004332084603748578,\n                "2018-10-14": 0.0044283193122008685,\n                "2018-10-15": 0.004815877384438967,\n                "2018-10-16": 0.005101718483186588,\n                "2018-10-17": 0.005026684112897062,\n                "2018-10-18": 0.004654040523506898,\n                "2018-10-19": 0.004723398042149471,\n                "2018-10-20": 0.004976128376251443,\n                "2018-10-21": 0.004816021686230707,\n                "2018-10-22": 0.0045903322770055625,\n                "2018-10-23": 0.004617718739737951,\n                "2018-10-24": 0.004672247759875452,\n                "2018-10-25": 0.004460314239767662,\n                "2018-10-26": 0.004596992194699098,\n                "2018-10-27": 0.004487192486535402,\n                "2018-10-28": 0.004577032670815526,\n                "2018-10-29": 0.004324553264063322,\n                "2018-10-30": 0.004354670421344038,\n                "2018-10-31": 0.004273459878663475,\n                "2018-11-01": 0.004322337316687262,\n                "2018-11-02": 0.0041407947593283985,\n                "2018-11-03": 0.004055008311873697,\n                "2018-11-04": 0.003865637248270753,\n                "2018-11-05": 0.004279078251468574,\n                "2018-11-06": 0.004072970471099145,\n                "2018-11-07": 0.004132351347407309,\n                "2018-11-08": 0.003978879866812778,\n                "2018-11-09": 0.003860335611061077,\n                "2018-11-10": 0.004000732265566012,\n                "2018-11-11": 0.003953818362610657,\n                "2018-11-12": 0.0037793904244412292,\n                "2018-11-13": 0.004169917946095414,\n                "2018-11-14": 0.003138219445882399,\n                "2018-11-15": 0.0029529496268298656,\n                "2018-11-16": 0.0026172989928948624,\n                "2018-11-17": 0.0025668850556273357,\n                "2018-11-18": 0.002604485141748598,\n                "2018-11-19": 0.0022499999266354944,\n                "2018-11-20": 0.0016665859333376285,\n                "2018-11-21": 0.0017984276675583695,\n                "2018-11-22": 0.001653640170144552,\n                "2018-11-23": 0.0016117763189382097,\n                "2018-11-24": 0.0014728993046294893,\n                "2018-11-25": 0.001585209436751242,\n                "2018-11-26": 0.0015766127232832792,\n                "2018-11-27": 0.0016979139193365252,\n                "2018-11-28": 0.0018391124166271047,\n                "2018-11-29": 0.0018415172645489882,\n                "2018-11-30": 0.0017270428816520708,\n                "2018-12-01": 0.0018068385688234422,\n                "2018-12-02": 0.001684539939555685,\n                "2018-12-03": 0.001577458956548995,\n                "2018-12-04": 0.0016195098949471321,\n                "2018-12-05": 0.0014841358123961442,\n                "2018-12-06": 0.0013815474708391306,\n                "2018-12-07": 0.0014016486981506128,\n                "2018-12-08": 0.001357402886146415,\n                "2018-12-09": 0.0014120694088804234,\n                "2018-12-10": 0.0013481176979961728,\n                "2018-12-11": 0.0014540231741388121,\n                "2018-12-12": 0.0013712363018445431,\n                "2018-12-13": 0.0013883531137715724,\n                "2018-12-14": 0.0013330427433697627,\n                "2018-12-15": 0.0013777425333201896,\n                "2018-12-16": 0.0014419990266834111,\n                "2018-12-17": 0.0011984828354417996,\n                "2018-12-18": 0.0014280989552861293,\n                "2018-12-19": 0.0013638053480460773,\n                "2018-12-20": 0.0014812051028723278,\n                "2018-12-21": 0.0012114289045812683,\n                "2018-12-22": 0.0011725038800810147,\n                "2018-12-23": 0.0017565872655839062,\n                "2018-12-24": 0.0015477597162790763,\n                "2018-12-25": 0.0013888701279573094,\n                "2018-12-26": 0.0016098846768452307,\n                "2018-12-27": 0.0013677777999830088,\n                "2018-12-28": 0.00151802160847114,\n                "2018-12-29": 0.0011803970016295376,\n                "2018-12-30": 0.0016407271016370326,\n                "2018-12-31": 0.0016413092139321668,\n                "2019-01-01": 0.002050892446888525,\n                "2019-01-02": 0.0019729949702061095,\n                "2019-01-03": 0.0018102544083081647,\n                "2019-01-04": 0.0010532841363518211,\n                "2019-01-05": 0.00189227182922387,\n                "2019-01-06": 0.0018829878191365548,\n                "2019-01-07": 0.0018725885435852104,\n                "2019-01-08": 0.0016696761373410133,\n                "2019-01-09": 0.0014430008020806986,\n                "2019-01-10": 0.0014619953547072963,\n                "2019-01-11": 0.0018082991555398683,\n                "2019-01-12": 0.0016891346859645795,\n                "2019-01-13": 0.001565770953512826,\n                "2019-01-14": 0.0017844569544571377,\n                "2019-01-15": 0.001378812743124233,\n                "2019-01-16": 0.0016262773514173566,\n                "2019-01-17": 0.0017366440987317169,\n                "2019-01-18": 0.001438963575013684,\n                "2019-01-19": 0.0015009295435071685,\n                "2019-01-20": 0.001547472563130133,\n                "2019-01-21": 0.0015993977595832368,\n                "2019-01-22": 0.001572388430913803,\n                "2019-01-23": 0.0014591481453543485,\n                "2019-01-24": 0.0012389431492143672,\n                "2019-01-25": 0.0012964784170742183,\n                "2019-01-26": 0.001629300808502286,\n                "2019-01-27": 0.0013398109130887596,\n                "2019-01-28": 0.0013392345826988919,\n                "2019-01-29": 0.0013990780793446459,\n                "2019-01-30": 0.0012887231851673752,\n                "2019-01-31": 0.00134186173088485,\n                "2019-02-01": 0.0013311480193456597,\n                "2019-02-02": 0.0013530257400871106,\n                "2019-02-03": 0.001473082401462318,\n                "2019-02-04": 0.0014750862690254924,\n                "2019-02-05": 0.001641361628597939,\n                "2019-02-06": 0.001649943292582685,\n                "2019-02-07": 0.0016512570580069182,\n                "2019-02-08": 0.0017023993209604794,\n                "2019-02-09": 0.0017111799979779609,\n                "2019-02-10": 0.0016764958760606176,\n                "2019-02-11": 0.0016388854406580498,\n                "2019-02-12": 0.0015724069676422822,\n                "2019-02-13": 0.001841714625461492,\n                "2019-02-14": 0.0015308035417484018,\n                "2019-02-15": 0.0015654777680373776,\n                "2019-02-16": 0.0018461841342109163,\n                "2019-02-17": 0.0017019568495644296,\n                "2019-02-18": 0.0016622780181082077,\n                "2019-02-19": 0.0017663882869289676,\n                "2019-02-20": 0.00198488546044998,\n                "2019-02-21": 0.0017712214515036523,\n                "2019-02-22": 0.001986766616173165,\n                "2019-02-23": 0.0016912226442968685,\n                "2019-02-24": 0.0014999270798440358,\n                "2019-02-25": 0.0018754571970200653,\n                "2019-02-26": 0.0013539972251708525,\n                "2019-02-27": 0.0012505201724733244,\n                "2019-02-28": 0.0014095264598109364,\n                "2019-03-01": 0.0012379580296505554,\n                "2019-03-02": 0.0016790867121098286,\n                "2019-03-03": 0.0016980284477896334,\n                "2019-03-04": 0.0015225190455428433,\n                "2019-03-05": 0.001299157402659426,\n                "2019-03-06": 0.0013208620123524501,\n                "2019-03-07": 0.0012655477874285333,\n                "2019-03-08": 0.00130803740309287,\n                "2019-03-09": 0.001299794542726708,\n                "2019-03-10": 0.0012974545494418477,\n                "2019-03-11": 0.0013222700561730091,\n                "2019-03-12": 0.001346710137466071,\n                "2019-03-13": 0.0013207344431831042,\n                "2019-03-14": 0.0012799928308099284,\n                "2019-03-15": 0.001289869460909822,\n                "2019-03-16": 0.0013025867792934712,\n                "2019-03-17": 0.001349027457171764,\n                "2019-03-18": 0.0013353475305287789,\n                "2019-03-19": 0.0013667971986761123,\n                "2019-03-20": 0.0014293663238354186,\n                "2019-03-21": 0.0013774909318514338,\n                "2019-03-22": 0.0013158392912548484,\n                "2019-03-23": 0.0013559554969626813,\n                "2019-03-24": 0.0013035994859507667,\n                "2019-03-25": 0.0012259413910711168,\n                "2019-03-26": 0.0012462922672804664,\n                "2019-03-27": 0.0012904583436511834,\n                "2019-03-28": 0.00127703122931289,\n                "2019-03-29": 0.0013268838306893787,\n                "2019-03-30": 0.002257510755196298,\n                "2019-03-31": 0.0019519157203233372,\n                "2019-04-01": 0.0033650095659839008,\n                "2019-04-02": 0.0029276930647387832,\n                "2019-04-03": 0.002276253518967642,\n                "2019-04-04": 0.0023011328419726518,\n                "2019-04-05": 0.0024400725418160323,\n                "2019-04-06": 0.002347973551111775,\n                "2019-04-07": 0.0028519815884837495,\n                "2019-04-08": 0.002589313810916761,\n                "2019-04-09": 0.0024031147740249345,\n                "2019-04-10": 0.0024208751868249373,\n                "2019-04-11": 0.0021970029224002937,\n                "2019-04-12": 0.002024862777328307,\n                "2019-04-13": 0.0026379335585705595,\n                "2019-04-14": 0.002778384421149329,\n                "2019-04-15": 0.002611307976781828,\n                "2019-04-16": 0.0025146080605048826,\n                "2019-04-17": 0.002320497632613555,\n                "2019-04-18": 0.002255481782966767,\n                "2019-04-19": 0.0022439918640291723,\n                "2019-04-20": 0.00221107850712378,\n                "2019-04-21": 0.002113464606038648,\n                "2019-04-22": 0.0020706121311199763,\n                "2019-04-23": 0.0022344572057405253,\n                "2019-04-24": 0.0021926391579184276,\n                "2019-04-25": 0.0018956857787251992,\n                "2019-04-26": 0.0018442000209493502,\n                "2019-04-27": 0.0018388303114879624,\n                "2019-04-28": 0.0018274524991499224,\n                "2019-04-29": 0.0017593669299914747,\n                "2019-04-30": 0.0017943637130194013,\n                "2019-05-01": 0.0017981949281872048,\n                "2019-05-02": 0.001818110229830541,\n                "2019-05-03": 0.0018963284497631777,\n                "2019-05-04": 0.0018587647776066338,\n                "2019-05-05": 0.0016974882175397887,\n                "2019-05-06": 0.001707117080900973,\n                "2019-05-07": 0.0015910813675021206,\n                "2019-05-08": 0.0016996458970491872,\n                "2019-05-09": 0.0017004503457014942,\n                "2019-05-10": 0.0016593656864615778,\n                "2019-05-11": 0.0018181629723086898,\n                "2019-05-12": 0.0016984024303994163,\n                "2019-05-13": 0.00174431254687708,\n                "2019-05-14": 0.0018085422663050858,\n                "2019-05-15": 0.001945169663681097,\n                "2019-05-16": 0.0018493572706331748,\n                "2019-05-17": 0.0017496187189890756,\n                "2019-05-18": 0.0018826402889425857,\n                "2019-05-19": 0.0019466733532053954,\n                "2019-05-20": 0.0018636082221964155,\n                "2019-05-21": 0.001905467733191035,\n                "2019-05-22": 0.002730148540320891,\n                "2019-05-23": 0.00226741518497939,\n                "2019-05-24": 0.0020940928962537523,\n                "2019-05-25": 0.00209122027139211,\n                "2019-05-26": 0.002029053359967164,\n                "2019-05-27": 0.0020770521017081543,\n                "2019-05-28": 0.002100116800951744,\n                "2019-05-29": 0.0020509485549427575,\n                "2019-05-30": 0.0019008536350109473,\n                "2019-05-31": 0.0019412963697555278,\n                "2019-06-01": 0.0019791385430845557,\n                "2019-06-02": 0.0019754185918848498,\n                "2019-06-03": 0.0018489926912442704,\n                "2019-06-04": 0.0017173474281514981,\n                "2019-06-05": 0.0018281067729020517,\n                "2019-06-06": 0.0017780021832893263,\n                "2019-06-07": 0.001769693350426485,\n                "2019-06-08": 0.0016992793216738793,\n                "2019-06-09": 0.0016373068187201059,\n                "2019-06-10": 0.0017991915481187309,\n                "2019-06-11": 0.0020013228833547477,\n                "2019-06-12": 0.001916411687371545,\n                "2019-06-13": 0.001900890020776737,\n                "2019-06-14": 0.0018233970922750605,\n                "2019-06-15": 0.0019391037235454126,\n                "2019-06-16": 0.0018381076034982835,\n                "2019-06-17": 0.0018904000273983737,\n                "2019-06-18": 0.001873710792754805,\n                "2019-06-19": 0.0017797952297771268,\n                "2019-06-20": 0.0019315559111433888,\n                "2019-06-21": 0.001898277179724013,\n                "2019-06-22": 0.0018561031413891875,\n                "2019-06-23": 0.0017564607733778718,\n                "2019-06-24": 0.0018069102600334116,\n                "2019-06-25": 0.0017560382793421984,\n                "2019-06-26": 0.001781455299696794,\n                "2019-06-27": 0.0014679199134882445,\n                "2019-06-28": 0.0015196113390735446,\n                "2019-06-29": 0.0014261587733340518,\n                "2019-06-30": 0.0013911105879992453,\n                "2019-07-01": 0.0013756352484611866,\n                "2019-07-02": 0.0014952268369518096,\n                "2019-07-03": 0.0014789633135965047,\n                "2019-07-04": 0.0013963441735503537,\n                "2019-07-05": 0.001369417497528719,\n                "2019-07-06": 0.0013977506287267813,\n                "2019-07-07": 0.0014478409424229478,\n                "2019-07-08": 0.0014808294307855794,\n                "2019-07-09": 0.001466882524371631,\n                "2019-07-10": 0.0013829194309048036,\n                "2019-07-11": 0.0012693731294374175,\n                "2019-07-12": 0.0013524029613454127,\n                "2019-07-13": 0.001292817652066258,\n                "2019-07-14": 0.001226803146423351,\n                "2019-07-15": 0.0012473376082150498,\n                "2019-07-16": 0.0010512824249061868,\n                "2019-07-17": 0.0010959175300357142,\n                "2019-07-18": 0.0011803254158283367,\n                "2019-07-19": 0.001179853795448124,\n                "2019-07-20": 0.0012224710041007242,\n                "2019-07-21": 0.0012154745160714473,\n                "2019-07-22": 0.0011436546941781464,\n                "2019-07-23": 0.0010653538550127774,\n                "2019-07-24": 0.0011351354659370854,\n                "2019-07-25": 0.001117262844749955,\n                "2019-07-26": 0.0011392715883947393,\n                "2019-07-27": 0.0011279130090385144,\n                "2019-07-28": 0.001177107263128565,\n                "2019-07-29": 0.0011342916641245177,\n                "2019-07-30": 0.0011385512261072827,\n                "2019-07-31": 0.0011212950828695585,\n                "2019-08-01": 0.0011091978881723563,\n                "2019-08-02": 0.0011021989814208781,\n                "2019-08-03": 0.0011101026758095162,\n                "2019-08-04": 0.001109884238183275,\n                "2019-08-05": 0.0011390814148825763,\n                "2019-08-06": 0.001090890601170524,\n                "2019-08-07": 0.0010914712094334917,\n                "2019-08-08": 0.0010089649249181273,\n                "2019-08-09": 0.0009042589649202205,\n                "2019-08-10": 0.0009016741386116903,\n                "2019-08-11": 0.0009168012874114379,\n                "2019-08-12": 0.0009179726386127882,\n                "2019-08-13": 0.0009454559289071964,\n                "2019-08-14": 0.0008698248794464892,\n                "2019-08-15": 0.0008395086756729774,\n                "2019-08-16": 0.0008310859351699633,\n                "2019-08-17": 0.0009002218424954559,\n                "2019-08-18": 0.0008903074359418425,\n                "2019-08-19": 0.0008413126215977582,\n                "2019-08-20": 0.0008694296812609652,\n                "2019-08-21": 0.0008112921068365801,\n                "2019-08-22": 0.0008144809563825393,\n                "2019-08-23": 0.0008011550785470073,\n                "2019-08-24": 0.0008668995390160928,\n                "2019-08-25": 0.0008321588488869575,\n                "2019-08-26": 0.0008144731920677745,\n                "2019-08-27": 0.0008770378190933387,\n                "2019-08-28": 0.000814876755768795,\n                "2019-08-29": 0.0008174589520111589,\n                "2019-08-30": 0.0008137525114203089,\n                "2019-08-31": 0.0007625901478378307,\n                "2019-09-01": 0.0007990704512238242,\n                "2019-09-02": 0.0008203248814330692,\n                "2019-09-03": 0.0008156241380810995,\n                "2019-09-04": 0.0007601327355300911,\n                "2019-09-05": 0.0007662428404129491,\n                "2019-09-06": 0.0007166882894826023,\n                "2019-09-07": 0.0007148070249361317,\n                "2019-09-08": 0.0007152380210549021,\n                "2019-09-09": 0.0007244136400443612,\n                "2019-09-10": 0.0007032121140302481,\n                "2019-09-11": 0.0006724137518628813,\n                "2019-09-12": 0.0007053513784332552,\n                "2019-09-13": 0.0007274021477639993,\n                "2019-09-14": 0.0007017390035011866,\n                "2019-09-15": 0.0007016719649104756,\n                "2019-09-16": 0.0007254011068939016,\n                "2019-09-17": 0.0007375128650089793,\n                "2019-09-18": 0.0007467084598118906,\n                "2019-09-19": 0.0007297767635401472,\n                "2019-09-20": 0.0007308795810669795,\n                "2019-09-21": 0.0007646660818695175,\n                "2019-09-22": 0.0007156363136717849,\n                "2019-09-23": 0.0007412425753461981,\n                "2019-09-24": 0.0006520184308613482,\n                "2019-09-25": 0.0006970696055784415,\n                "2019-09-26": 0.0007147298150370374,\n                "2019-09-27": 0.0006992705869958721,\n                "2019-09-28": 0.0006568664114957955,\n                "2019-09-29": 0.0005952297886395282,\n                "2019-09-30": 0.0006068460851387425,\n                "2019-10-01": 0.0005904453140357875,\n                "2019-10-02": 0.0005904453140357875,\n                "2019-10-03": 0.0005609094641328555,\n                "2019-10-04": 0.0005609094641328555,\n                "2019-10-05": 0.000578419022507266,\n                "2019-10-06": 0.0005281946842751004,\n                "2019-10-07": 0.0005802558286645394,\n                "2019-10-08": 0.0005397278716734919,\n                "2019-10-09": 0.0005741721358604924,\n                "2019-10-10": 0.0005753613771880255,\n                "2019-10-11": 0.0005303983529762099,\n                "2019-10-12": 0.0005433161352844739,\n                "2019-10-13": 0.0005213984963009112,\n                "2019-10-14": 0.0005712126619898294,\n                "2019-10-15": 0.0004965027726517047,\n                "2019-10-16": 0.00046829203969113464,\n                "2019-10-17": 0.0004984914076717431,\n                "2019-10-18": 0.0005210053276700214,\n                "2019-10-19": 0.0005123899482613496,\n                "2019-10-20": 0.0005959076839588333,\n                "2019-10-21": 0.0005312328047863315,\n                "2019-10-22": 0.0005274954556633118,\n                "2019-10-23": 0.0004733262174554,\n                "2019-10-24": 0.0004988638182198643,\n                "2019-10-25": 0.0005147669070996554,\n                "2019-10-26": 0.00047852118009768897,\n                "2019-10-27": 0.0005379185576290165,\n                "2019-10-28": 0.0005314734258107841,\n                "2019-10-29": 0.0005379087861478107,\n                "2019-10-30": 0.0005307959377887671,\n                "2019-10-31": 0.0005309625732193346,\n                "2019-11-01": 0.0005650810852779643,\n                "2019-11-02": 0.0005287615290253538,\n                "2019-11-03": 0.0005512476750181584,\n                "2019-11-04": 0.0005394422557063004,\n                "2019-11-05": 0.0005330823487727351,\n                "2019-11-06": 0.000562907844711177,\n                "2019-11-07": 0.0005982915246751404,\n                "2019-11-08": 0.0005967244402197212,\n                "2019-11-09": 0.0005847884010565284,\n                "2019-11-10": 0.0005963641097286561,\n                "2019-11-11": 0.0005593847141178011,\n                "2019-11-12": 0.0005594725595388379,\n                "2019-11-13": 0.0005427274120718432,\n                "2019-11-14": 0.0005439465312143847,\n                "2019-11-15": 0.0005444992280984063,\n                "2019-11-16": 0.0005708745823993834,\n                "2019-11-17": 0.0005452723672894423,\n                "2019-11-18": 0.0005451344004195416,\n                "2019-11-19": 0.0005101476893799104,\n                "2019-11-20": 0.0005250349972843636,\n                "2019-11-21": 0.0005080757736657407,\n                "2019-11-22": 0.000459865169689687,\n                "2019-11-23": 0.0004969752623258328,\n                "2019-11-24": 0.0006042474795174951,\n                "2019-11-25": 0.0004750879192991967,\n                "2019-11-26": 0.00044957520509599874,\n                "2019-11-27": 0.00045049084145969023,\n                "2019-11-28": 0.0004472461750912981,\n                "2019-11-29": 0.00047996150676105266,\n                "2019-11-30": 0.00046904656672467547,\n                "2019-12-01": 0.00048445463811064505,\n                "2019-12-02": 0.0004862060770190779,\n                "2019-12-03": 0.0004798550421666493,\n                "2019-12-04": 0.0005195148956172825,\n                "2019-12-05": 0.0004876761593500255,\n                "2019-12-06": 0.0004757117357331981,\n                "2019-12-07": 0.00048712755324417336,\n                "2019-12-08": 0.0005191782642641326,\n                "2019-12-09": 0.00045686856568156927,\n                "2019-12-10": 0.00045094228525778193,\n                "2019-12-11": 0.0004125549075460625,\n                "2019-12-12": 0.00042395128203607304,\n                "2019-12-13": 0.00041501903047068195,\n                "2019-12-14": 0.0003535428298844545,\n                "2019-12-15": 0.00043810592304060954,\n                "2019-12-16": 0.00039068918996525354,\n                "2019-12-17": 0.00038477801668058964,\n                "2019-12-18": 0.0003977322632655068,\n                "2019-12-19": 0.00041064822138871975,\n                "2019-12-20": 0.00042740275800823285,\n                "2019-12-21": 0.000404982786649683,\n                "2019-12-22": 0.00044327845008359585,\n                "2019-12-23": 0.0004099838777506776,\n                "2019-12-24": 0.00039701535246626014,\n                "2019-12-25": 0.00042894494590234,\n                "2019-12-26": 0.00042291611365438534,\n                "2019-12-27": 0.00037126362396647987,\n                "2019-12-28": 0.00040081023452620334,\n                "2019-12-29": 0.00037252527366348,\n                "2019-12-30": 0.00036087327732515855,\n                "2019-12-31": 0.000371431134649787,\n                "2020-01-01": 0.00038379414294686286,\n                "2020-01-02": 0.00039591329652998483,\n                "2020-01-03": 0.000392748696403296,\n                "2020-01-04": 0.00039271317308500097,\n                "2020-01-05": 0.00036756914863219167,\n                "2020-01-06": 0.00039145605604002563,\n                "2020-01-07": 0.00039761354201606967,\n                "2020-01-08": 0.00039865634718429466,\n                "2020-01-09": 0.00040758356673263965,\n                "2020-01-10": 0.00041772385846181406,\n                "2020-01-11": 0.00041578695640429904,\n                "2020-01-12": 0.00041827002110890525,\n                "2020-01-13": 0.0004342820198261608,\n                "2020-01-14": 0.00044185720384093456,\n                "2020-01-15": 0.00047996518322739805,\n                "2020-01-16": 0.0004385695223763313,\n                "2020-01-17": 0.00046696176276546906,\n                "2020-01-18": 0.0004587052842232884,\n                "2020-01-19": 0.00044466475339093183,\n                "2020-01-20": 0.0004386950816789746,\n                "2020-01-21": 0.00045220388505240705,\n                "2020-01-22": 0.000436788077690498,\n                "2020-01-23": 0.00039438586731683096,\n                "2020-01-24": 0.00042405169460595066,\n                "2020-01-25": 0.00046562174747103536,\n                "2020-01-26": 0.00044110021801520055,\n                "2020-01-27": 0.00041435914088575136,\n                "2020-01-28": 0.00041583538619736356,\n                "2020-01-29": 0.0004137879343612997,\n                "2020-01-30": 0.0004191604896434068,\n                "2020-01-31": 0.00044026950752600394,\n                "2020-02-01": 0.00043668358455879996,\n                "2020-02-02": 0.0004580226235701956,\n                "2020-02-03": 0.00046291011988651155,\n                "2020-02-04": 0.0004616443619828347,\n                "2020-02-05": 0.00038528003057915086,\n                "2020-02-06": 0.0003981649398640815,\n                "2020-02-07": 0.0004069302608223271,\n                "2020-02-08": 0.0004675066045062081,\n                "2020-02-09": 0.00044167210641908605,\n                "2020-02-10": 0.00044452130919178884,\n                "2020-02-11": 0.0004691246750152271,\n                "2020-02-12": 0.00043585086180281856,\n                "2020-02-13": 0.0004280341432520091,\n                "2020-02-14": 0.00043959517849009123,\n                "2020-02-15": 0.00041504118485450697,\n                "2020-02-16": 0.000417925351588527,\n                "2020-02-17": 0.00040722696181474065,\n                "2020-02-18": 0.00039283240777462914,\n                "2020-02-19": 0.00038757004496972066,\n                "2020-02-20": 0.00038235483210287126,\n                "2020-02-21": 0.00037360077876233145,\n                "2020-02-22": 0.00037317846371572586,\n                "2020-02-23": 0.0003718967928089326,\n                "2020-02-24": 0.00037270699302807865,\n                "2020-02-25": 0.0003528348835627389,\n                "2020-02-26": 0.00030642118801383716,\n                "2020-02-27": 0.0003180650502131077,\n                "2020-02-28": 0.00031962103590529834,\n                "2020-02-29": 0.0003167342414570356,\n                "2020-03-01": 0.000222677697948175,\n                "2020-03-02": 0.0003138309118337045,\n                "2020-03-03": 0.00035250650777288026,\n                "2020-03-04": 0.0002348720362106327,\n                "2020-03-05": 0.00034784816127742256,\n                "2020-03-06": 0.0003140754121080015,\n                "2020-03-07": 0.00031595057060183185,\n                "2020-03-08": 0.0002793151501062043,\n                "2020-03-09": 0.0002703691657755532,\n                "2020-03-10": 0.00027254422415961226,\n                "2020-03-11": 0.000277962175982488,\n                "2020-03-12": 0.00020655365630357168,\n                "2020-03-13": 0.00021337638043819002,\n                "2020-03-14": 0.00018275651701323727,\n                "2020-03-15": 0.00015527871251701044,\n                "2020-03-16": 0.00019023542263559164,\n                "2020-03-17": 0.0001840090092381612,\n                "2020-03-18": 0.00016896556643291363,\n                "2020-03-19": 0.00018213500216573178,\n                "2020-03-20": 0.00018600070696761365,\n                "2020-03-21": 0.00015933620237049343,\n                "2020-03-22": 0.0000458708450598373,\n                "2020-03-23": 0.00016208728927789352,\n                "2020-03-24": 0.0001960732649666365,\n                "2020-03-25": 0.00019271979282633773,\n                "2020-03-26": 0.00016887962510633115,\n                "2020-03-27": 0.00015992434641394574,\n                "2020-03-28": 0.00014907063502137276,\n                "2020-03-29": 0.00017975204152919727,\n                "2020-03-30": 0.00017966442561612658,\n                "2020-03-31": 0.00017312783241112432,\n                "2020-04-01": 0.00016996169654465113,\n                "2020-04-02": 0.0001625723096963096,\n                "2020-04-03": 0.0001611577954943344,\n                "2020-04-04": 0.00018279785211585157,\n                "2020-04-05": 0.00016523145156330243,\n                "2020-04-06": 0.0000727317998361834,\n                "2020-04-07": 0.0000719495711759436,\n                "2020-04-08": 0.00017382204977949258,\n                "2020-04-09": 0.00014716614084038884,\n                "2020-04-10": 0.0002752461750924808,\n                "2020-04-11": 0.0001697757220659101,\n                "2020-04-12": 0.00014867457920062456,\n                "2020-04-13": 0.00016536671368916643,\n                "2020-04-14": 0.00016694293060322952,\n                "2020-04-15": 0.0001642002651456093,\n                "2020-04-16": 0.00016043600461212708,\n                "2020-04-17": 0.00016857968886612883,\n                "2020-04-18": 0.00017137647224010525,\n                "2020-04-19": 0.00017136358402001999,\n                "2020-04-20": 0.00016509482078379186,\n                "2020-04-22": 0.000167321271746693,\n                "2020-04-23": 0.00016673480389084298,\n                "2020-04-24": 0.0001564066265804285,\n                "2020-04-25": 0.00016903250290547332,\n                "2020-04-26": 0.00016088611607024034,\n                "2020-04-27": 0.0001493098211884812,\n                "2020-04-28": 0.00015398596523525003,\n                "2020-04-29": 0.000162750233150462,\n                "2020-04-30": 0.00014319202917987517,\n                "2020-05-01": 0.00016376798521445287,\n                "2020-05-02": 0.00017103104886557308,\n                "2020-05-03": 0.0001728596931103507,\n                "2020-05-04": 0.00017251972722762121,\n                "2020-05-05": 0.00015269710066909237,\n                "2020-05-06": 0.00016145308574894808,\n                "2020-05-07": 0.00016568544492027163,\n                "2020-05-08": 0.0001661907635827821,\n                "2020-05-09": 0.000145569946263907,\n                "2020-05-10": 0.000152433918298669,\n                "2020-05-11": 0.0001490496091823575,\n                "2020-05-12": 0.00015631651915257806,\n                "2020-05-13": 0.00015588775912571447,\n                "2020-05-14": 0.00016325122032857212,\n                "2020-05-15": 0.0001629508853395719,\n                "2020-05-16": 0.00012178063398305695,\n                "2020-05-17": 0.00016313388291609227,\n                "2020-05-18": 0.00016167185436313677,\n                "2020-05-20": 0.00017090847944335914,\n                "2020-05-21": 0.00019586534576696555,\n                "2020-05-22": 0.00013401082303939914,\n                "2020-05-23": 0.00015588412419836878,\n                "2020-05-24": 0.00017201327939345254,\n                "2020-05-25": 0.00015078020455796542,\n                "2020-05-26": 0.0001790576365680569,\n                "2020-05-27": 0.0000918183902092228,\n                "2020-05-28": 0.00016685369732778895,\n                "2020-05-29": 0.00017589065361594443,\n                "2020-05-30": 0.00017061926774377358,\n                "2020-05-31": 0.0001736426382061643,\n                "2020-06-01": 0.000101569530861335,\n                "2020-06-02": 0.00016072863175120477,\n                "2020-06-03": 0.0001459856239058692,\n                "2020-06-04": 0.00014794343444725895,\n                "2020-06-05": 0.00014691080431414782,\n                "2020-06-06": 0.0001691755943716417,\n                "2020-06-07": 0.0001695035420946593,\n                "2020-06-08": 0.00020930613286599474,\n                "2020-06-09": 0.00016222387819444424,\n                "2020-06-10": 0.00017778481157859928,\n                "2020-06-11": 0.00019985657905553415,\n                "2020-06-12": 0.00020592528264188419,\n                "2020-06-13": 0.0002821340564369845,\n                "2020-06-14": 0.0002643771872547814,\n                "2020-06-15": 0.000235183615827224,\n                "2020-06-16": 0.0002130250267890058,\n                "2020-06-17": 0.0002507778206160056,\n                "2020-06-18": 0.00020252702305474367,\n                "2020-06-19": 0.00019941201630094168,\n                "2020-06-20": 0.0002190192530783626,\n                "2020-06-21": 0.00020790353851514318,\n                "2020-06-22": 0.00023020123045737375,\n                "2020-06-23": 0.000219112067944879,\n                "2020-06-24": 0.0002023314670601985,\n                "2020-06-25": 0.0002215505246133022,\n                "2020-06-26": 0.00024173955572730907,\n                "2020-06-27": 0.000199833260191257,\n                "2020-06-28": 0.00019711265803037581,\n                "2020-06-29": 0.00020692510253282815,\n                "2020-06-30": 0.00020893573067926562,\n                "2020-07-01": 0.00019921550693625205,\n                "2020-07-02": 0.0001954713782978254,\n                "2020-07-03": 0.00021910654732412653,\n                "2020-07-04": 0.00021112577527582612,\n                "2020-07-05": 0.00022926025900275244,\n                "2020-07-06": 0.00020471084290967783,\n                "2020-07-07": 0.00023591839952497091,\n                "2020-07-08": 0.0002120079911066154,\n                "2020-07-09": 0.0002049631756504809,\n                "2020-07-10": 0.0002336741938555469,\n                "2020-07-11": 0.00026078925261638206,\n                "2020-07-12": 0.00026415548240188555,\n                "2020-07-13": 0.00022507863068951803,\n                "2020-07-14": 0.00025896328485099297,\n                "2020-07-15": 0.00022332150918910439,\n                "2020-07-16": 0.00024657287076060655,\n                "2020-07-17": 0.00022192205302455062,\n                "2020-07-18": 0.00023711373975934043,\n                "2020-07-19": 0.00023698075202394282,\n                "2020-07-20": 0.00022397659925433466,\n                "2020-07-21": 0.00025742694130410026,\n                "2020-07-22": 0.0002346526013524651,\n                "2020-07-23": 0.00025717711880375945,\n                "2020-07-24": 0.00024197755487153274,\n                "2020-07-25": 0.00025867482692708645,\n                "2020-07-26": 0.00024525958364068754,\n                "2020-07-27": 0.00025470207454359297,\n                "2020-07-28": 0.0002481800869193769,\n                "2020-07-29": 0.00023805551568872947,\n                "2020-07-30": 0.00024204257964919112,\n                "2020-07-31": 0.00024298904525728177,\n                "2020-08-01": 0.00027285759471670995,\n                "2020-08-02": 0.0002540697045763913,\n                "2020-08-03": 0.00027138442075909657,\n                "2020-08-04": 0.0002629768172092995,\n                "2020-08-05": 0.00024187739410793345,\n                "2020-08-06": 0.00023342722355827977,\n                "2020-08-07": 0.0002407192375532188,\n                "2020-08-08": 0.0002433595046895039,\n                "2020-08-09": 0.00025896023919288514,\n                "2020-08-10": 0.00021931942811050721,\n                "2020-08-11": 0.00020962470125318112,\n                "2020-08-12": 0.0002060733908890699,\n                "2020-08-13": 0.00021161285838501996,\n                "2020-08-14": 0.00022380130046783785,\n                "2020-08-15": 0.00022350852925180024,\n                "2020-08-16": 0.0002094025953283452,\n                "2020-08-17": 0.00021783156475834446,\n                "2020-08-18": 0.00022416147551842695,\n                "2020-08-19": 0.00021300493246438374,\n                "2020-08-20": 0.00026702098983774977,\n                "2020-08-21": 0.0002574541297837736,\n                "2020-08-22": 0.00026298306361315305,\n                "2020-08-23": 0.0002463701807224469,\n                "2020-08-24": 0.0002775101918378057,\n                "2020-08-25": 0.00024106395043615926,\n                "2020-08-26": 0.000243959858878325,\n                "2020-08-27": 0.0002373684785720606,\n                "2020-08-28": 0.00027222434198911314,\n                "2020-08-29": 0.00023859875310098066,\n                "2020-08-30": 0.0002551132122337924,\n                "2020-08-31": 0.00024964089228323046,\n                "2020-09-01": 0.00024854657863681456,\n                "2020-09-02": 0.00024019405824350225,\n                "2020-09-03": 0.000264093930456546,\n                "2020-09-04": 0.00024123204997020123,\n                "2020-09-05": 0.00023722753114626058,\n                "2020-09-06": 0.00032907462265504916,\n                "2020-09-07": 0.0003065194741836991,\n                "2020-09-08": 0.00033925923993290976,\n                "2020-09-09": 0.00036065590552277746,\n                "2020-09-10": 0.00035534821209233606,\n                "2020-09-11": 0.00031299674825291607,\n                "2020-09-12": 0.00034556776843291866,\n                "2020-09-13": 0.0003391586396316537,\n                "2020-09-14": 0.00033237578122484804,\n                "2020-09-15": 0.0003228664492089601,\n                "2020-09-16": 0.00027799154738507835,\n                "2020-09-17": 0.0002417450224493195,\n                "2020-09-18": 0.00025032516224988077,\n                "2020-09-19": 0.00026106919586545217,\n                "2020-09-20": 0.00025353688779774033,\n                "2020-09-21": 0.00024323577940260337,\n                "2020-09-22": 0.00024390275860919656,\n                "2020-09-23": 0.0002426961767327133,\n                "2020-09-24": 0.00024506190804867307,\n                "2020-09-25": 0.00024387636148636192,\n                "2020-09-26": 0.00024398733832949716,\n                "2020-09-27": 0.0002646174104634874,\n                "2020-09-28": 0.0002319206938318467,\n                "2020-09-29": 0.00021307772972888262,\n                "2020-09-30": 0.0002210534629925831,\n                "2020-10-01": 0.0002290243032103002,\n                "2020-10-02": 0.00022716233012576024,\n                "2020-10-03": 0.00021719089469913035,\n                "2020-10-05": 0.00021606019571593132,\n                "2020-10-06": 0.00021606019571593132,\n                "2020-10-07": 0.00021708836905610785,\n                "2020-10-09": 0.00021658815763255963,\n                "2020-10-10": 0.00021658815763255963,\n                "2020-10-11": 0.00021799203365546976,\n                "2020-10-12": 0.00021697734465487374,\n                "2020-10-13": 0.00021697734465487374,\n                "2020-10-14": 0.00022807221980878398,\n                "2020-10-15": 0.00022807221980878398,\n                "2020-10-16": 0.00022821809578612217,\n                "2020-10-17": 0.00004341832294613611,\n                "2020-10-18": 0.000114177033092734,\n                "2020-10-19": 0.000217370447786285,\n                "2020-10-20": 0.000217370447786285,\n                "2020-10-21": 0.0002159985870201343,\n                "2020-10-22": 0.00021727202905018206,\n                "2020-10-23": 0.0002159825745062439,\n                "2020-10-24": 0.0002159825745062439,\n                "2020-10-25": 0.00021610539919929153,\n                "2020-10-26": 0.00025393988501542906,\n                "2020-10-27": 0.00021652524113859888,\n                "2020-10-28": 0.00021693790470789698,\n                "2020-10-29": 0.00021704834210061095,\n                "2020-10-30": 0.00021713986740940037,\n                "2020-10-31": 0.00021657357280575507,\n                "2020-11-01": 0.0002168333027979697,\n                "2020-11-02": 0.00021674819784523957,\n                "2020-11-03": 0.00021688341086264202,\n                "2020-11-04": 0.00022592082754961624,\n                "2020-11-05": 0.00021721923178146622,\n                "2020-11-06": 0.00021899702763166653,\n                "2020-11-07": 0.0002191930152711156,\n                "2020-11-08": 0.00021830845540603557,\n                "2020-11-09": 0.00021691614271174723,\n                "2020-11-10": 0.00021905063456662593,\n                "2020-11-11": 0.00023971856612413443,\n                "2020-11-12": 0.00021666045358983792,\n                "2020-11-13": 0.0002159944957568455,\n                "2020-11-14": 0.0002160065625036291,\n                "2020-11-15": 0.00015601243766700084,\n                "2020-11-16": 0.00015592909304880924,\n                "2020-11-17": 0.0001588588131188341,\n                "2020-11-18": 0.00016004029377932215,\n                "2020-11-19": 0.00016188044039162016,\n                "2020-11-20": 0.00019097903987088633,\n                "2020-11-21": 0.0001766914756662202,\n                "2020-11-22": 0.00016773688727422751,\n                "2020-11-23": 0.0001609378448507911,\n                "2020-11-24": 0.00016865587521988553,\n                "2020-11-25": 0.00015819690129638544,\n                "2020-11-26": 0.00016272668314450537,\n                "2020-11-27": 0.0001644206141421959,\n                "2020-11-28": 0.00016280425867063565,\n                "2020-11-29": 0.0001630817210189549,\n                "2020-11-30": 0.00016310711866758857,\n                "2020-12-01": 0.00017386748573111732,\n                "2020-12-02": 0.00022977484156673348,\n                "2020-12-03": 0.00017811049988108904,\n                "2020-12-04": 0.00017478902026587308,\n                "2020-12-05": 0.00022604193339915358,\n                "2020-12-06": 0.00017907143828182855,\n                "2020-12-07": 0.0001956202717767013,\n                "2020-12-08": 0.0001857961489866835,\n                "2020-12-09": 0.00018989885967759078,\n                "2020-12-10": 0.00018813373266992516,\n                "2020-12-11": 0.0004159695137713905,\n                "2020-12-12": 0.0002150736385576858,\n                "2020-12-13": 0.0002695789172726089,\n                "2020-12-14": 0.0002605197962881558,\n                "2020-12-15": 0.00024317036906932061,\n                "2020-12-16": 0.00030054723313213515,\n                "2020-12-17": 0.00021806780911429486,\n                "2020-12-18": 0.0002816779963688124,\n                "2020-12-19": 0.0002443933634592879,\n                "2020-12-20": 0.0002792982635902706,\n                "2020-12-21": 0.00027248668570504505,\n                "2020-12-22": 0.000239082643282205,\n                "2020-12-23": 0.00023558777964245573,\n                "2020-12-24": 0.0002544921022541091,\n                "2020-12-25": 0.00022095493969551724,\n                "2020-12-26": 0.00024072635613271907,\n                "2020-12-27": 0.00023838076169462887,\n                "2020-12-28": 0.00023510680646713202,\n                "2020-12-29": 0.0002344083125642415,\n                "2020-12-30": 0.0002475700793833305,\n                "2020-12-31": 0.00023573749733108609,\n                "2021-01-01": 0.0002486551955415451,\n                "2021-01-02": 0.0002454921479377882,\n                "2021-01-03": 0.0002485486259851705,\n                "2021-01-04": 0.00022606534138389762,\n                "2021-01-05": 0.00023097693522102194,\n                "2021-01-06": 0.00023643060282188248,\n                "2021-01-07": 0.00022770969869376865,\n                "2021-01-08": 0.0002357663940918854,\n                "2021-01-09": 0.0002378150316255686,\n                "2021-01-10": 0.00024126110846429556,\n                "2021-01-11": 0.0002709503277951557,\n                "2021-01-12": 0.00025100215451814774,\n                "2021-01-13": 0.0002233297401253653,\n                "2021-01-14": 0.00023759684171201708,\n                "2021-01-15": 0.0002292772745620156,\n                "2021-01-16": 0.0002323740579214369,\n                "2021-01-17": 0.0002406112896303608,\n                "2021-01-18": 0.00024864123161958605,\n                "2021-01-19": 0.0002287057071376397,\n                "2021-01-20": 0.00022708648281537935,\n                "2021-01-21": 0.00022881572908523576,\n                "2021-01-22": 0.00024031610620062468,\n                "2021-01-23": 0.0002558567454270062,\n                "2021-01-24": 0.0008768025075614254,\n                "2021-01-25": 0.0002509921428652517,\n                "2021-01-26": 0.00025151016454120795,\n                "2021-01-27": 0.0002367740712123984,\n                "2021-01-28": 0.00023171036640464817,\n                "2021-01-29": 0.0002722554976961206,\n                "2021-01-30": 0.00025663995438623906,\n                "2021-01-31": 0.00027049631214741323,\n                "2021-02-01": 0.0002225656298219134,\n                "2021-02-02": 0.0002303680019300938,\n                "2021-02-03": 0.00026454987558976475,\n                "2021-02-04": 0.0003424787608699164,\n                "2021-02-05": 0.00026273540191718383,\n                "2021-02-06": 0.0002451268123625512,\n                "2021-02-07": 0.0002808942825192615,\n                "2021-02-08": 0.00026882999116161215,\n                "2021-02-09": 0.00030330777584084383,\n                "2021-02-10": 0.000342612519556275,\n                "2021-02-11": 0.0002988503689934686,\n                "2021-02-12": 0.00039946818007924355,\n                "2021-02-13": 0.00039027171381469575,\n                "2021-02-14": 0.00043152090091671586,\n                "2021-02-15": 0.0005266400359104665,\n                "2021-02-16": 0.00041343934714151235,\n                "2021-02-17": 0.00040087870613596884,\n                "2021-02-18": 0.00041389762044094725,\n                "2021-02-19": 0.00040831812945330237,\n                "2021-02-20": 0.000388004765624251,\n                "2021-02-21": 0.0004313794203621139,\n                "2021-02-22": 0.0003862721124039266,\n                "2021-02-23": 0.00032100411920392256,\n                "2021-02-24": 0.0003268860623351815,\n                "2021-02-25": 0.0004063289944680075,\n                "2021-02-26": 0.00042626362233757256,\n                "2021-02-27": 0.0004069437153886102,\n                "2021-02-28": 0.00034031927638891437,\n                "2021-03-01": 0.0003359737135915279,\n                "2021-03-02": 0.00028385403200961734,\n                "2021-03-03": 0.0003313053875557627,\n                "2021-03-04": 0.0002949980278805743,\n                "2021-03-05": 0.00033575680355439917,\n                "2021-03-06": 0.00031819620526253253,\n                "2021-03-07": 0.0003132480358615466,\n                "2021-03-08": 0.00031928657716907995,\n                "2021-03-09": 0.0003135622190082129,\n                "2021-03-10": 0.00033325845264563784,\n                "2021-03-11": 0.00034492734788607474,\n                "2021-03-12": 0.00033371988447498133,\n                "2021-03-13": 0.000408351563598595,\n                "2021-03-14": 0.00041078269518558396,\n                "2021-03-15": 0.0004057343752481836,\n                "2021-03-16": 0.00038607242605761285,\n                "2021-03-17": 0.0003773822370336179,\n                "2021-03-18": 0.0005014965953765756,\n                "2021-03-19": 0.0005254889648767863,\n                "2021-03-20": 0.0005929449342800603,\n                "2021-03-21": 0.0005434998104388226,\n                "2021-03-22": 0.0005533044390978123,\n                "2021-03-23": 0.0005600225173508696,\n                "2021-03-24": 0.00048489522538826523,\n                "2021-03-25": 0.0004997187236957668,\n                "2021-03-26": 0.0005843793036588129,\n                "2021-03-27": 0.0005365860303665534,\n                "2021-03-28": 0.0005656262001106981,\n                "2021-03-29": 0.0005698357192660972,\n                "2021-03-30": 0.0006441782576537045,\n                "2021-03-31": 0.0005701638480385242,\n                "2021-04-01": 0.0005756230141799217,\n                "2021-04-02": 0.0006417911975472282,\n                "2021-04-03": 0.0006226518764172088,\n                "2021-04-04": 0.0006033116127204373,\n                "2021-04-05": 0.0006622620237603236,\n                "2021-04-06": 0.0006175637953200219,\n                "2021-04-07": 0.0006239939928645906,\n                "2021-04-08": 0.000764035759458524,\n                "2021-04-09": 0.0008599330954040475,\n                "2021-04-10": 0.0011746993298640828,\n                "2021-04-11": 0.0013344812419347346,\n                "2021-04-12": 0.0012395144011425737,\n                "2021-04-13": 0.0011914253713656917,\n                "2021-04-14": 0.0010724977178855435,\n                "2021-04-15": 0.0011263764776292037,\n                "2021-04-16": 0.0012636656576546427,\n                "2021-04-17": 0.0011350902645936973,\n                "2021-04-18": 0.0010619471335288166,\n                "2021-04-19": 0.0009433088956426783,\n                "2021-04-20": 0.0008198354735090486,\n                "2021-04-21": 0.0007490340881414255,\n                "2021-04-22": 0.0007562543979098572,\n                "2021-04-23": 0.0005207378713942665,\n                "2021-04-24": 0.0005381324234112543,\n                "2021-04-25": 0.0005757687922770685,\n                "2021-04-26": 0.0007312007903769416,\n                "2021-04-27": 0.0006394981269233286,\n                "2021-04-28": 0.0007814478291289159,\n                "2021-04-29": 0.0008595584934165867,\n                "2021-04-30": 0.0007818613259159517,\n                "2021-05-01": 0.0007153948530217101,\n                "2021-05-02": 0.0006679623515063801,\n                "2021-05-03": 0.0007761710217689663,\n                "2021-05-04": 0.0006831784934273047,\n                "2021-05-05": 0.0006682434601532886,\n                "2021-05-06": 0.0007814834378964034,\n                "2021-05-07": 0.0006075347426134172,\n                "2021-05-08": 0.0007524826851170673,\n                "2021-05-09": 0.0006783298855232673,\n                "2021-05-10": 0.000670868145044862,\n                "2021-05-11": 0.0006877687808101635,\n                "2021-05-12": 0.0006077934885511632,\n                "2021-05-13": 0.0006329226356530141,\n                "2021-05-14": 0.0007114108361185151,\n                "2021-05-15": 0.000629573755233817,\n                "2021-05-16": 0.0008001040038959808,\n                "2021-05-17": 0.0006285347049888852,\n                "2021-05-18": 0.0006201620080114721,\n                "2021-05-19": 0.0004574536293329673,\n                "2021-05-20": 0.0006287489471906994,\n                "2021-05-21": 0.0005457948156029891,\n                "2021-05-22": 0.00046942599431422865,\n                "2021-05-23": 0.0003127629596432893,\n                "2021-05-24": 0.000611344679434473,\n                "2021-05-25": 0.0004901011076453452,\n                "2021-05-26": 0.0005971856872533437,\n                "2021-05-27": 0.0006299416704459228,\n                "2021-05-28": 0.000528705992936844,\n                "2021-05-29": 0.0005044532100330272,\n                "2021-05-30": 0.0005849389731029469,\n                "2021-05-31": 0.0005868023550700155,\n                "2021-06-01": 0.000573447607451962,\n                "2021-06-02": 0.0005610549463399415,\n                "2021-06-03": 0.0005122227674610606,\n                "2021-06-04": 0.0005179385309517068,\n                "2021-06-05": 0.0004804877127756943,\n                "2021-06-06": 0.00047532776885211793,\n                "2021-06-07": 0.0005370645329708488,\n                "2021-06-08": 0.00046339581171001617,\n                "2021-06-09": 0.00042110530390611616,\n                "2021-06-10": 0.0004101563297791695,\n                "2021-06-11": 0.000425173947995705,\n                "2021-06-12": 0.0003512590376837963,\n                "2021-06-13": 0.00039297855218594784,\n                "2021-06-14": 0.00041913495485429696,\n                "2021-06-15": 0.0004152979626822967,\n                "2021-06-16": 0.00041577193812696657,\n                "2021-06-17": 0.0004188354453648587,\n                "2021-06-18": 0.00038591849628375385,\n                "2021-06-19": 0.0003720469832957915,\n                "2021-06-20": 0.0003420015398080978,\n                "2021-06-21": 0.00032537987820810193,\n                "2021-06-22": 0.00025040198138342643,\n                "2021-06-23": 0.00033239199349247836,\n                "2021-06-24": 0.00035386065225487414,\n                "2021-06-25": 0.00037727816438969087,\n                "2021-06-26": 0.0004328157767955802,\n                "2021-06-27": 0.0003995749987375951,\n                "2021-06-28": 0.0003303208134092085,\n                "2021-06-29": 0.00033861045019636677,\n                "2021-06-30": 0.0003591513608680944,\n                "2021-07-01": 0.00038662093827156397,\n                "2021-07-02": 0.0003834898561838611,\n                "2021-07-03": 0.0003855890225810541,\n                "2021-07-04": 0.000372165025691131,\n                "2021-07-05": 0.0003608153285363713,\n                "2021-07-06": 0.00030068866348838513,\n                "2021-07-07": 0.0002968131543517089,\n                "2021-07-08": 0.00035457220346673976,\n                "2021-07-09": 0.0002985953209906978,\n                "2021-07-10": 0.000339135723636224,\n                "2021-07-11": 0.00032109381748392663,\n                "2021-07-12": 0.00030044390346121004,\n                "2021-07-13": 0.0004262414032967238,\n                "2021-07-14": 0.0004236601143470846,\n                "2021-07-15": 0.0004211167109477136,\n                "2021-07-16": 0.0004205029348165137,\n                "2021-07-17": 0.0004155357982100395,\n                "2021-07-18": 0.00033947610095430754,\n                "2021-07-19": 0.00039476752111493465,\n                "2021-07-20": 0.00030502279450304116,\n                "2021-07-21": 0.0003299732301178012,\n                "2021-07-22": 0.00030428755010891397,\n                "2021-07-23": 0.0003127133319548733,\n                "2021-07-24": 0.0003129739514025089,\n                "2021-07-25": 0.00030408143944382117,\n                "2021-07-26": 0.00038064742908289125,\n                "2021-07-27": 0.0003630812463958092,\n                "2021-07-28": 0.00032046045245957155,\n                "2021-07-29": 0.0003647712610056874,\n                "2021-07-30": 0.0003378616627169679,\n                "2021-07-31": 0.0003553648859193585,\n                "2021-08-01": 0.00033762012441637337,\n                "2021-08-02": 0.000325347353794936,\n                "2021-08-03": 0.00032253979496224804,\n                "2021-08-04": 0.000312553805870189,\n                "2021-08-05": 0.00031221663485491157,\n                "2021-08-06": 0.00032098035254166855,\n                "2021-08-07": 0.0004288131054723428,\n                "2021-08-08": 0.0005688307827571504,\n                "2021-08-09": 0.0004835831951394318,\n                "2021-08-10": 0.0004643895654778767,\n                "2021-08-11": 0.0003799394525900102,\n                "2021-08-12": 0.00038911811891654646,\n                "2021-08-13": 0.00039958667567108094,\n                "2021-08-14": 0.00039741404246879184,\n                "2021-08-15": 0.0004852392053610254,\n                "2021-08-16": 0.00044750535360433636,\n                "2021-08-17": 0.00039653444221406315,\n                "2021-08-18": 0.0004548350564237152,\n                "2021-08-19": 0.0004212263524633382,\n                "2021-08-20": 0.0003967949878476802,\n                "2021-08-21": 0.00042251090664664276,\n                "2021-08-22": 0.00044862452299008354,\n                "2021-08-23": 0.00040611411241811107,\n                "2021-08-24": 0.00043985319881306245,\n                "2021-08-25": 0.0004101286426994743,\n                "2021-08-26": 0.0003856693249605365,\n                "2021-08-27": 0.0004114540254780348,\n                "2021-08-28": 0.0005433492638806049,\n                "2021-08-29": 0.0004279737799595001,\n                "2021-08-30": 0.00041139298270329646,\n                "2021-08-31": 0.0004644838257857417,\n                "2021-09-01": 0.00046061602821802477,\n                "2021-09-02": 0.0006004964670742245,\n                "2021-09-03": 0.00044907021804111645,\n                "2021-09-04": 0.0004905805449356938,\n                "2021-09-05": 0.0004787371492814924,\n                "2021-09-06": 0.0004642367978540734,\n                "2021-09-07": 0.0004627254885736765,\n                "2021-09-08": 0.00046230019786311805,\n                "2021-09-09": 0.0004455448374169449,\n                "2021-09-10": 0.0004723404035564634,\n                "2021-09-11": 0.00044871102080290857,\n                "2021-09-12": 0.0004599047673228024,\n                "2021-09-13": 0.00042618667489344804,\n                "2021-09-14": 0.00043979314481660896,\n                "2021-09-15": 0.0004358274838777707,\n                "2021-09-16": 0.0004361183024694253,\n                "2021-09-17": 0.0004241818731125526,\n                "2021-09-18": 0.00043241466331706387,\n                "2021-09-19": 0.00042865517349056237,\n                "2021-09-20": 0.0003971794363613753,\n                "2021-09-21": 0.0003635880437287333,\n                "2021-09-22": 0.0003977361691932092,\n                "2021-09-23": 0.0004122774225696297,\n                "2021-09-24": 0.0003640661186383334,\n                "2021-09-25": 0.00037074544834543116,\n                "2021-09-26": 0.000323715535312529,\n                "2021-09-27": 0.00028779877120489907,\n                "2021-09-28": 0.00028806305666315016,\n                "2021-09-29": 0.00030419992599869743,\n                "2021-09-30": 0.00035186419900168017,\n                "2021-10-01": 0.000372113553030934,\n                "2021-10-02": 0.0003695192815244125,\n                "2021-10-03": 0.0003566465255265844,\n                "2021-10-04": 0.00034122522546701535,\n                "2021-10-05": 0.0003527721385114044,\n                "2021-10-06": 0.00034813242098706326,\n                "2021-10-07": 0.00034145814100474406,\n                "2021-10-08": 0.0003345656576790045,\n                "2021-10-09": 0.00033283149222805455,\n                "2021-10-10": 0.0003508902700549896,\n                "2021-10-11": 0.00036021818073591537,\n                "2021-10-12": 0.00036204313521886723,\n                "2021-10-13": 0.00037937550661756517,\n                "2021-10-14": 0.00033274976357107477,\n                "2021-10-15": 0.00036940313902537343,\n                "2021-10-16": 0.00033921644740637246,\n                "2021-10-17": 0.0003248482143020887,\n                "2021-10-18": 0.0003212942472704826,\n                "2021-10-19": 0.0002935852991962499,\n                "2021-10-20": 0.0003234844143357656,\n                "2021-10-21": 0.0003168031308922038,\n                "2021-10-22": 0.000338968486953729,\n                "2021-10-23": 0.0004171088812938394,\n                "2021-10-24": 0.0003609203361697469,\n                "2021-10-25": 0.0003713550686959162,\n                "2021-10-26": 0.00037786089346998375,\n                "2021-10-27": 0.00034132368485526943,\n                "2021-10-28": 0.00033577740669243585,\n                "2021-10-29": 0.00035572292668974,\n                "2021-10-30": 0.0003200643117665074,\n                "2021-10-31": 0.0003822884372164719,\n                "2021-11-01": 0.00040401719391872337,\n                "2021-11-02": 0.00036359048589148157,\n                "2021-11-03": 0.0003952799445409829,\n                "2021-11-04": 0.00036194637533325675,\n                "2021-11-05": 0.0003693698132462985,\n                "2021-11-06": 0.00037004563434090554,\n                "2021-11-07": 0.00039838769099905744,\n                "2021-11-08": 0.00037789979584130416,\n                "2021-11-09": 0.0003711286163560104,\n                "2021-11-10": 0.0003565733015434596,\n                "2021-11-11": 0.0003658308914837306,\n                "2021-11-12": 0.00034902681680976246,\n                "2021-11-13": 0.0003935827587272671,\n                "2021-11-14": 0.0003896712258306628,\n                "2021-11-15": 0.00037838180427124456,\n                "2021-11-16": 0.00034604812265761004,\n                "2021-11-17": 0.00036547207779303714,\n                "2021-11-18": 0.0003334460312417299,\n                "2021-11-19": 0.00034237007767143877,\n                "2021-11-20": 0.00034248049749681066,\n                "2021-11-21": 0.0003579843271768277,\n                "2021-11-22": 0.00033290000413511577,\n                "2021-11-23": 0.00036769634430787094,\n                "2021-11-24": 0.0003698237503322304,\n                "2021-11-25": 0.0003649124602600022,\n                "2021-11-26": 0.00033614244601326326,\n                "2021-11-27": 0.0003362574433246722,\n                "2021-11-28": 0.0003477382982407102,\n                "2021-11-29": 0.0003545424167446959,\n                "2021-11-30": 0.0003642715485668172,\n                "2021-12-01": 0.00032664455253854884,\n                "2021-12-02": 0.00034879664162260846,\n                "2021-12-03": 0.00034279889377414124,\n                "2021-12-04": 0.0003302213168255752,\n                "2021-12-05": 0.00035480698008589796,\n                "2021-12-06": 0.00031885815641717467,\n                "2021-12-07": 0.00032396389844380164,\n                "2021-12-08": 0.0003470742045569413,\n                "2021-12-09": 0.0003277549320212321,\n                "2021-12-10": 0.0003290949443918254,\n                "2021-12-11": 0.0003311065638171784,\n                "2021-12-12": 0.0003256259048749397,\n                "2021-12-13": 0.00032399651725821007,\n                "2021-12-14": 0.0003262027241494563,\n                "2021-12-15": 0.00033302996386317296,\n                "2021-12-16": 0.0003525223910047005,\n                "2021-12-17": 0.0003430499860755496,\n                "2021-12-18": 0.00030834393234831806,\n                "2021-12-19": 0.00031882259486217565,\n                "2021-12-20": 0.0003085583315234047,\n                "2021-12-21": 0.00030507536003622525,\n                "2021-12-22": 0.0003057280511918215,\n                "2021-12-23": 0.0002988947147536301,\n                "2021-12-24": 0.0002905877762283719,\n                "2021-12-25": 0.00032418188472209744,\n                "2021-12-26": 0.0003284397693178471,\n                "2021-12-27": 0.0003181440550392737,\n                "2021-12-28": 0.00031890190842611397,\n                "2021-12-29": 0.0003245581541274287,\n                "2021-12-30": 0.00030046199422614024,\n                "2021-12-31": 0.00031647023528600125,\n                "2022-01-01": 0.0002963721748015686,\n                "2022-01-02": 0.00032694858524262143,\n                "2022-01-03": 0.000308320621816476,\n                "2022-01-04": 0.0003079742586182232,\n                "2022-01-05": 0.0003071704166225053,\n                "2022-01-06": 0.0003029268947324202,\n                "2022-01-07": 0.00031087472985214497,\n                "2022-01-08": 0.00030632419423347735,\n                "2022-01-09": 0.00031551647183309517,\n                "2022-01-10": 0.00030609592095139527,\n                "2022-01-11": 0.0003176030874712248,\n                "2022-01-12": 0.0003252205055847656,\n                "2022-01-13": 0.00032226054268441503,\n                "2022-01-14": 0.00030628767578562,\n                "2022-01-15": 0.00030623729107329096,\n                "2022-01-16": 0.00031141522364220057,\n                "2022-01-17": 0.0002984445474339743,\n                "2022-01-18": 0.00028488354575364994,\n                "2022-01-19": 0.0002873519586216073,\n                "2022-01-20": 0.00030541291682652894,\n                "2022-01-21": 0.000296338900625858,\n                "2022-01-22": 0.0002979467852860006,\n                "2022-01-23": 0.0002835016172881796,\n                "2022-01-24": 0.0002886529247262785,\n                "2022-01-25": 0.0002863435758132176,\n                "2022-01-26": 0.00028760560940135373,\n                "2022-01-27": 0.00026575281557588305,\n                "2022-01-28": 0.00023984564328795313,\n                "2022-01-29": 0.00024571409218703433,\n                "2022-01-30": 0.00025133216791716325,\n                "2022-01-31": 0.00026605440105332043,\n                "2022-02-01": 0.0002561443996846124,\n                "2022-02-02": 0.0002574059541850919,\n                "2022-02-03": 0.00024997911088206097,\n                "2022-02-04": 0.00026026627850107115,\n                "2022-02-05": 0.00028283414440954,\n                "2022-02-06": 0.00030586233097796455,\n                "2022-02-07": 0.0002955181993051836,\n                "2022-02-08": 0.0002958263580215299,\n                "2022-02-09": 0.0002920393294339073,\n                "2022-02-10": 0.000264689568885136,\n                "2022-02-11": 0.0002478940495186573,\n                "2022-02-12": 0.0002605580411378385,\n                "2022-02-13": 0.00025643922433012535,\n                "2022-02-14": 0.0002492770823929165,\n                "2022-02-15": 0.000254165979149153,\n                "2022-02-16": 0.00026818369465690634,\n                "2022-02-17": 0.0002597176434672794,\n                "2022-02-18": 0.0002564839931279212,\n                "2022-02-19": 0.0002558306344826192,\n                "2022-02-20": 0.00028057832783222726,\n                "2022-02-21": 0.00022706486751813287,\n                "2022-02-22": 0.0002782076149612818,\n                "2022-02-23": 0.00024714294803713865,\n                "2022-02-24": 0.00024585433131162093,\n                "2022-02-25": 0.0002822432337446537,\n                "2022-02-26": 0.00027141820941081795,\n                "2022-02-27": 0.00025597326601391543,\n                "2022-02-28": 0.0002934070302007111,\n                "2022-03-01": 0.00029003533118767896,\n                "2022-03-02": 0.00027255621141597075,\n                "2022-03-03": 0.00027089906365573054,\n                "2022-03-04": 0.0002877174316064589,\n                "2022-03-05": 0.0002806369921483246,\n                "2022-03-06": 0.0002687263002315579,\n                "2022-03-07": 0.00024276152534038022,\n                "2022-03-08": 0.00023971383132374223,\n                "2022-03-09": 0.0002713945951970646,\n                "2022-03-10": 0.0002758768424947359,\n                "2022-03-11": 0.00035007217526252004,\n                "2022-03-12": 0.00031689779796308955,\n                "2022-03-13": 0.00030858253881020024,\n                "2022-03-14": 0.00026509851497290234,\n                "2022-03-15": 0.00027062954184780966,\n                "2022-03-16": 0.00024236922354922715,\n                "2022-03-17": 0.00024834640067723925,\n                "2022-03-18": 0.0002934492871678977,\n                "2022-03-19": 0.0002541206785668317,\n                "2022-03-20": 0.0002756347667912321,\n                "2022-03-21": 0.0002622201932382615,\n                "2022-03-22": 0.0002758366306560516,\n                "2022-03-23": 0.000266692690634636,\n                "2022-03-24": 0.0002770988164878232,\n                "2022-03-25": 0.0002720383187847232,\n                "2022-03-26": 0.00027258347844396713,\n                "2022-03-27": 0.0002701902586619121,\n                "2022-03-28": 0.0002564515609504485,\n                "2022-03-29": 0.0002936112181926126,\n                "2022-03-30": 0.0002811560530850352,\n                "2022-03-31": 0.0002687605383710535,\n                "2022-04-01": 0.0002786887403194652,\n                "2022-04-02": 0.00026971514100208557,\n                "2022-04-03": 0.000269626994953813,\n                "2022-04-04": 0.00028445530470379033,\n                "2022-04-05": 0.0002864775593070184,\n                "2022-04-06": 0.0002763012763470121,\n                "2022-04-07": 0.00026169203748772473,\n                "2022-04-08": 0.00026802211429823557,\n                "2022-04-09": 0.0002698538641257882,\n                "2022-04-10": 0.0002692902585413471,\n                "2022-04-11": 0.0002681967258481758,\n                "2022-04-12": 0.0002677183949531765,\n                "2022-04-13": 0.000269689079221327,\n                "2022-04-14": 0.0002718090764226227,\n                "2022-04-15": 0.0002717479715781186,\n                "2022-04-16": 0.0002807164587534139,\n                "2022-04-17": 0.0002691608524309336,\n                "2022-04-18": 0.0002559196288083774,\n                "2022-04-19": 0.0002662857245827799,\n                "2022-04-20": 0.00028843660809657986,\n                "2022-04-21": 0.0002482698120493226,\n                "2022-04-22": 0.00026560476218203446,\n                "2022-04-23": 0.00026030560567536805,\n                "2022-04-24": 0.00025478378324841374,\n                "2022-04-25": 0.0002574383121687984,\n                "2022-04-26": 0.0002557390490063251,\n                "2022-04-27": 0.0002716239513754802,\n                "2022-04-28": 0.0002464369392493888,\n                "2022-04-29": 0.00023419920205240376,\n                "2022-04-30": 0.00022752067407938095,\n                "2022-05-01": 0.00022949511324784678,\n                "2022-05-02": 0.00022077664571553188,\n                "2022-05-03": 0.00021795915949001353,\n                "2022-05-04": 0.0002146730393187129,\n                "2022-05-05": 0.00023564002808953267,\n                "2022-05-06": 0.00022349117603943466,\n                "2022-05-07": 0.00023403156059138776,\n                "2022-05-08": 0.000221983607812363,\n                "2022-05-09": 0.00021072974543940334,\n                "2022-05-10": 0.00018708691512726847,\n                "2022-05-11": 0.00011663532595234268,\n                "2022-05-12": 0.00007890500700535611,\n                "2022-05-13": 0.00011443197328107355,\n                "2022-05-14": 0.00013954603087458888,\n                "2022-05-15": 0.0001592031130579056,\n                "2022-05-16": 0.00015738844315512702,\n                "2022-05-17": 0.00017135254702778168,\n                "2022-05-18": 0.00014759951181663136,\n                "2022-05-19": 0.00014687568236544513,\n                "2022-05-20": 0.0001478872040692055,\n                "2022-05-21": 0.00014766279831480576\n            },\n            "startDate": "2017-12-27",\n            "endDate": "2022-05-21"\n        }\n    }')))
r.d.b.I(0,new A.h8(s))
return s},
h8:function h8(a){this.a=a},
lI(){var s=A.i([],t.j),r=new A.cD()
r.bg(t.G.a(B.j.S(0,'{\n        "hash": "0x2260fac5e5542a773aa44fbcfedf7c193bc2c599",\n        "symbol": "",\n        "decimals": 0,\n        "price": {\n            "coinGeckoId": "wrapped-bitcoin",\n            "prices": {\n                "2019-01-31": 3438.3604027386937,\n                "2019-02-01": 3472.243307228701,\n                "2019-02-02": 3461.0583406493133,\n                "2019-02-03": 3468.160040493987,\n                "2019-02-04": 3476.1278652717033,\n                "2019-02-05": 3486.4072978792706,\n                "2019-02-06": 3425.8603241266637,\n                "2019-02-07": 3387.762851278961,\n                "2019-02-08": 3664.7565667242584,\n                "2019-02-09": 3683.6118390805127,\n                "2019-02-10": 3770.340205754461,\n                "2019-02-11": 3605.923346916099,\n                "2019-02-12": 3652.9014823823277,\n                "2019-02-13": 3612.7888798691642,\n                "2019-02-14": 3605.523730622499,\n                "2019-02-15": 3613.8624472358615,\n                "2019-02-16": 3652.0561490928935,\n                "2019-02-17": 3711.289813487391,\n                "2019-02-18": 3831.3849740696114,\n                "2019-02-19": 3909.7034687941473,\n                "2019-02-20": 4002.916191843422,\n                "2019-02-21": 3957.4051421263825,\n                "2019-02-22": 3977.9964514414737,\n                "2019-02-23": 4123.694538467906,\n                "2019-02-24": 3683.2475561768683,\n                "2019-02-25": 3789.0379354731017,\n                "2019-02-26": 3853.008792443837,\n                "2019-02-27": 3821.644258503784,\n                "2019-02-28": 3808.050534111601,\n                "2019-03-01": 3818.4293570827454,\n                "2019-03-02": 3834.808620933888,\n                "2019-03-03": 3767.09064736515,\n                "2019-03-04": 3712.88560258252,\n                "2019-03-05": 3874.3671995648733,\n                "2019-03-06": 3873.733380188494,\n                "2019-03-07": 3862.0876012337617,\n                "2019-03-08": 3840.750894702697,\n                "2019-03-09": 3922.041268789715,\n                "2019-03-10": 3927.7199889379294,\n                "2019-03-11": 3881.792556666582,\n                "2019-03-12": 3896.5740801122565,\n                "2019-03-13": 3853.747559682612,\n                "2019-03-14": 3878.89836757539,\n                "2019-03-15": 3924.41452149602,\n                "2019-03-16": 4008.972282370652,\n                "2019-03-17": 3947.330242041265,\n                "2019-03-18": 3995.831659104729,\n                "2019-03-19": 4018.7774403232625,\n                "2019-03-20": 4147.001008545857,\n                "2019-03-21": 4018.7709301543337,\n                "2019-03-22": 4005.772442173505,\n                "2019-03-23": 4005.22337031521,\n                "2019-03-24": 3216.3868500034387,\n                "2019-03-25": 3937.938927962274,\n                "2019-03-26": 3743.4954764521294,\n                "2019-03-27": 3855.9489330607344,\n                "2019-03-28": 4123.215407522474,\n                "2019-03-29": 3175.6108999104954,\n                "2019-03-30": 4114.963432800845,\n                "2019-03-31": 4939.412378167535,\n                "2019-04-01": 3139.173266048137,\n                "2019-04-02": 4909.6984388254605,\n                "2019-04-03": 4934.871787506366,\n                "2019-04-04": 4899.783594547959,\n                "2019-04-05": 5032.4707638760165,\n                "2019-04-06": 5050.796084821612,\n                "2019-04-07": 5180.693034853178,\n                "2019-04-08": 5262.092510827817,\n                "2019-04-09": 5183.814730338404,\n                "2019-04-10": 5315.335749482664,\n                "2019-04-11": 5074.490217236426,\n                "2019-04-12": 5080.521257856815,\n                "2019-04-13": 5078.083191105935,\n                "2019-04-14": 5153.220167888584,\n                "2019-04-15": 5065.828432439953,\n                "2019-04-16": 5180.369010691615,\n                "2019-04-17": 5214.088819283238,\n                "2019-04-18": 5300.60779195505,\n                "2019-04-19": 5304.042886483066,\n                "2019-04-20": 5324.895683114069,\n                "2019-04-21": 5314.826136962819,\n                "2019-04-22": 5390.236128968782,\n                "2019-04-23": 5540.92911564103,\n                "2019-04-24": 5477.063625783432,\n                "2019-04-25": 5140.3118317617755,\n                "2019-04-26": 5288.313071891626,\n                "2019-04-27": 5297.851272950022,\n                "2019-04-28": 4945.65180326143,\n                "2019-04-29": 5199.8632042468025,\n                "2019-04-30": 5318.808122958612,\n                "2019-05-01": 5358.010261853876,\n                "2019-05-02": 5464.742391106422,\n                "2019-05-03": 5749.993202259376,\n                "2019-05-04": 5825.756118252514,\n                "2019-05-05": 5785.416454623067,\n                "2019-05-06": 5666.9405018529405,\n                "2019-05-07": 5841.577732243178,\n                "2019-05-08": 6100.592254652017,\n                "2019-05-09": 6175.378142813752,\n                "2019-05-10": 6349.644260455352,\n                "2019-05-11": 7306.952809240176,\n                "2019-05-12": 7080.466166358383,\n                "2019-05-13": 7958.740959716122,\n                "2019-05-14": 7914.163428645972,\n                "2019-05-15": 8238.830864728097,\n                "2019-05-16": 7859.030252462359,\n                "2019-05-17": 7365.922074120889,\n                "2019-05-18": 7267.596724910669,\n                "2019-05-19": 8216.0093816492,\n                "2019-05-20": 7974.74041178906,\n                "2019-05-21": 7981.40522363572,\n                "2019-05-22": 7635.5196446097,\n                "2019-05-23": 7839.835836460576,\n                "2019-05-24": 8006.1088174414535,\n                "2019-05-25": 8004.475472098732,\n                "2019-05-26": 8650.796369037304,\n                "2019-05-27": 8839.166865094247,\n                "2019-05-28": 8689.205860628785,\n                "2019-05-29": 8654.496801310215,\n                "2019-05-30": 8290.669562916883,\n                "2019-05-31": 8637.895603926207,\n                "2019-06-01": 8596.462349470992,\n                "2019-06-02": 8702.134784316719,\n                "2019-06-03": 8226.204289930125,\n                "2019-06-04": 7679.096898281296,\n                "2019-06-05": 7779.369499988424,\n                "2019-06-06": 7809.04880224169,\n                "2019-06-07": 7957.795190046612,\n                "2019-06-08": 7720.460233481218,\n                "2019-06-09": 7675.284742666752,\n                "2019-06-10": 8023.520641059446,\n                "2019-06-11": 7927.983708154871,\n                "2019-06-12": 8173.719241030773,\n                "2019-06-13": 8253.57191680194,\n                "2019-06-14": 8692.788483309398,\n                "2019-06-15": 8732.46511177406,\n                "2019-06-16": 9004.800917409335,\n                "2019-06-17": 9347.29923283678,\n                "2019-06-18": 9073.64070449998,\n                "2019-06-19": 9321.695747749787,\n                "2019-06-20": 9592.842633456848,\n                "2019-06-21": 9882.0895004661,\n                "2019-06-22": 10723.091462540982,\n                "2019-06-23": 10825.660482153975,\n                "2019-06-24": 11075.120346407997,\n                "2019-06-25": 11787.029381541632,\n                "2019-06-26": 12954.992998156664,\n                "2019-06-27": 11243.592304488799,\n                "2019-06-28": 12429.877131691825,\n                "2019-06-29": 12092.77094197618,\n                "2019-06-30": 10731.602639245226,\n                "2019-07-01": 10725.251804648462,\n                "2019-07-02": 10755.757700818856,\n                "2019-07-03": 12005.89879803896,\n                "2019-07-04": 11205.116836850038,\n                "2019-07-05": 11062.269569704215,\n                "2019-07-06": 11296.695946179672,\n                "2019-07-07": 11352.354200264002,\n                "2019-07-08": 12308.9415488081,\n                "2019-07-09": 12561.81095241499,\n                "2019-07-10": 12176.902605693429,\n                "2019-07-11": 11318.235004715321,\n                "2019-07-12": 11882.258245688357,\n                "2019-07-13": 11437.925105099606,\n                "2019-07-14": 10049.003882191171,\n                "2019-07-15": 10844.257427208611,\n                "2019-07-16": 9566.556958488613,\n                "2019-07-17": 9648.77363539674,\n                "2019-07-18": 10696.52770954297,\n                "2019-07-19": 10586.321894497056,\n                "2019-07-20": 10737.834106710827,\n                "2019-07-21": 10569.952853251549,\n                "2019-07-22": 10302.72341816591,\n                "2019-07-23": 9888.823320528576,\n                "2019-07-24": 9856.13271993959,\n                "2019-07-25": 9892.03832335111,\n                "2019-07-26": 9814.980759682767,\n                "2019-07-27": 9396.80231884637,\n                "2019-07-28": 9548.376008449877,\n                "2019-07-29": 9544.914119477442,\n                "2019-07-30": 9551.9695748766,\n                "2019-07-31": 10060.848782121691,\n                "2019-08-01": 10343.345127381064,\n                "2019-08-02": 10538.944330179791,\n                "2019-08-03": 10862.5917852579,\n                "2019-08-04": 11016.945010269279,\n                "2019-08-05": 11875.546649185673,\n                "2019-08-06": 11494.326975662956,\n                "2019-08-07": 11928.442052757931,\n                "2019-08-08": 11968.836590225668,\n                "2019-08-09": 11937.318779102628,\n                "2019-08-10": 11361.270937480234,\n                "2019-08-11": 11536.627299741363,\n                "2019-08-12": 11368.992113575934,\n                "2019-08-13": 10965.294414483065,\n                "2019-08-14": 9972.298067796042,\n                "2019-08-15": 10280.892405133718,\n                "2019-08-16": 10367.540286179721,\n                "2019-08-17": 10226.95288007198,\n                "2019-08-18": 10292.997568607425,\n                "2019-08-19": 10876.253146069655,\n                "2019-08-20": 10754.781537396708,\n                "2019-08-21": 10158.729806378176,\n                "2019-08-22": 10053.885499919124,\n                "2019-08-23": 10369.499116191093,\n                "2019-08-24": 10140.206334566827,\n                "2019-08-25": 10097.845246885563,\n                "2019-08-26": 10339.585657072206,\n                "2019-08-27": 10145.319650545976,\n                "2019-08-28": 9698.385817406384,\n                "2019-08-29": 9449.531078543678,\n                "2019-08-30": 9537.567529859924,\n                "2019-08-31": 9615.025995419286,\n                "2019-09-01": 9698.434312222702,\n                "2019-09-02": 10384.407801628962,\n                "2019-09-03": 10572.503206280626,\n                "2019-09-04": 10549.39934123338,\n                "2019-09-05": 10575.8839740754,\n                "2019-09-06": 10318.733834674522,\n                "2019-09-07": 10435.546313212344,\n                "2019-09-08": 10429.632890673163,\n                "2019-09-09": 10287.439724053957,\n                "2019-09-10": 10107.903629046164,\n                "2019-09-11": 10188.958516515013,\n                "2019-09-12": 10395.8386320678,\n                "2019-09-13": 10347.146186269538,\n                "2019-09-14": 10402.38920128826,\n                "2019-09-15": 10260.308467607201,\n                "2019-09-16": 10271.770127078851,\n                "2019-09-17": 10155.034440493515,\n                "2019-09-18": 10113.008935015752,\n                "2019-09-19": 10229.062596913378,\n                "2019-09-20": 10216.587390810162,\n                "2019-09-21": 10000.31528461602,\n                "2019-09-22": 10085.527758759485,\n                "2019-09-23": 9684.111534086367,\n                "2019-09-24": 8610.196549171957,\n                "2019-09-25": 8497.21880844494,\n                "2019-09-26": 8161.890430973589,\n                "2019-09-27": 8215.810215264644,\n                "2019-09-28": 8243.378244531024,\n                "2019-09-29": 8072.591741430691,\n                "2019-09-30": 8316.045915445768,\n                "2019-10-01": 8369.928613483646,\n                "2019-10-02": 8369.928613483646,\n                "2019-10-03": 8147.841299191708,\n                "2019-10-04": 8145.8524427536295,\n                "2019-10-05": 8095.069251408074,\n                "2019-10-06": 7892.676942781249,\n                "2019-10-07": 8207.360719389084,\n                "2019-10-08": 8182.086755512077,\n                "2019-10-09": 8615.462768145744,\n                "2019-10-10": 8530.92316613307,\n                "2019-10-11": 8310.181222239731,\n                "2019-10-12": 8312.590808885308,\n                "2019-10-13": 8319.046796346354,\n                "2019-10-14": 8337.902900239653,\n                "2019-10-15": 8229.700575006038,\n                "2019-10-16": 7991.00031523965,\n                "2019-10-17": 8102.424999944714,\n                "2019-10-18": 7975.182826414529,\n                "2019-10-19": 7913.674562162581,\n                "2019-10-20": 8234.25858183573,\n                "2019-10-21": 8211.679019180834,\n                "2019-10-22": 8078.037403190396,\n                "2019-10-23": 7497.5404470752555,\n                "2019-10-24": 7456.834083360306,\n                "2019-10-25": 8620.961439669092,\n                "2019-10-26": 9210.138366357383,\n                "2019-10-27": 9527.133451583692,\n                "2019-10-28": 9278.2812801757,\n                "2019-10-29": 9391.195140846823,\n                "2019-10-30": 9158.82099521844,\n                "2019-10-31": 9144.408823464693,\n                "2019-11-01": 9279.266258366126,\n                "2019-11-02": 9349.099541946827,\n                "2019-11-03": 9214.608170331854,\n                "2019-11-04": 9417.85055567796,\n                "2019-11-05": 9327.929524561745,\n                "2019-11-06": 9363.974129895318,\n                "2019-11-07": 9238.876959652083,\n                "2019-11-08": 8858.741795367692,\n                "2019-11-09": 8815.664137832098,\n                "2019-11-10": 9091.984372515732,\n                "2019-11-11": 8733.378130344969,\n                "2019-11-12": 8789.780015046714,\n                "2019-11-13": 8841.353916831851,\n                "2019-11-14": 8686.347725621788,\n                "2019-11-15": 8561.270669152182,\n                "2019-11-16": 8614.735041049624,\n                "2019-11-17": 8551.401715371707,\n                "2019-11-18": 8246.959895723105,\n                "2019-11-19": 8168.377426932897,\n                "2019-11-20": 8120.482746879486,\n                "2019-11-21": 7731.31361004638,\n                "2019-11-22": 7337.306722517102,\n                "2019-11-23": 7369.427131708029,\n                "2019-11-24": 6880.456313587523,\n                "2019-11-25": 7139.544393318464,\n                "2019-11-26": 7141.8376575535285,\n                "2019-11-27": 7494.534092266742,\n                "2019-11-28": 7448.839338066802,\n                "2019-11-29": 7737.139686440645,\n                "2019-11-30": 7549.864851211785,\n                "2019-12-01": 7360.041515500392,\n                "2019-12-02": 7313.541694951002,\n                "2019-12-03": 7300.859637331557,\n                "2019-12-04": 7234.821828932381,\n                "2019-12-05": 7390.212562128768,\n                "2019-12-06": 7496.615900176746,\n                "2019-12-07": 7468.639581970359,\n                "2019-12-08": 7531.749661880805,\n                "2019-12-09": 7361.975178556641,\n                "2019-12-10": 7258.820313374274,\n                "2019-12-11": 7195.486294819299,\n                "2019-12-12": 7232.9056473251985,\n                "2019-12-13": 7242.085586359291,\n                "2019-12-14": 7097.323854803007,\n                "2019-12-15": 7086.528864662541,\n                "2019-12-16": 6902.558586411046,\n                "2019-12-17": 6594.839702479296,\n                "2019-12-18": 7265.93442172766,\n                "2019-12-19": 7141.506860956198,\n                "2019-12-20": 7171.088459779432,\n                "2019-12-21": 7136.714890039397,\n                "2019-12-22": 7424.930371450288,\n                "2019-12-23": 7346.126789053354,\n                "2019-12-24": 7236.494325960261,\n                "2019-12-25": 7203.574503853764,\n                "2019-12-26": 7179.669903123956,\n                "2019-12-27": 7267.904274164403,\n                "2019-12-28": 7326.877514726784,\n                "2019-12-29": 7379.875255507349,\n                "2019-12-30": 7254.422176424925,\n                "2019-12-31": 7161.0857838294105,\n                "2020-01-01": 7201.863674109627,\n                "2020-01-02": 6981.966814764424,\n                "2020-01-03": 7328.289567076869,\n                "2020-01-04": 7361.852993306674,\n                "2020-01-05": 7343.1348775571805,\n                "2020-01-06": 7775.091225602579,\n                "2020-01-07": 8115.53126552542,\n                "2020-01-08": 8066.2339756144265,\n                "2020-01-09": 7840.794366878647,\n                "2020-01-10": 8160.836827550204,\n                "2020-01-11": 7996.54703069666,\n                "2020-01-12": 8135.985225081341,\n                "2020-01-13": 8146.318142797887,\n                "2020-01-14": 8887.333708286056,\n                "2020-01-15": 8841.423508781945,\n                "2020-01-16": 8714.78778461658,\n                "2020-01-17": 8862.92349020426,\n                "2020-01-18": 8892.230238015001,\n                "2020-01-19": 8708.796779642724,\n                "2020-01-20": 8704.426058289204,\n                "2020-01-21": 8741.241376607873,\n                "2020-01-22": 8626.261905816009,\n                "2020-01-23": 8414.559584246514,\n                "2020-01-24": 8450.825448603187,\n                "2020-01-25": 8327.252710899322,\n                "2020-01-26": 8576.379747362613,\n                "2020-01-27": 8924.778029023857,\n                "2020-01-28": 9387.553272656287,\n                "2020-01-29": 9313.91142959264,\n                "2020-01-30": 9476.588267540064,\n                "2020-01-31": 9318.221716769198,\n                "2020-02-01": 9388.035784893793,\n                "2020-02-02": 9341.704558627489,\n                "2020-02-03": 9292.362709163117,\n                "2020-02-04": 9187.548271941856,\n                "2020-02-05": 9620.38252928521,\n                "2020-02-06": 9770.708823575178,\n                "2020-02-07": 9858.422048218881,\n                "2020-02-08": 9912.574669701711,\n                "2020-02-09": 10146.995885065631,\n                "2020-02-10": 9842.81577734651,\n                "2020-02-11": 10214.02082330489,\n                "2020-02-12": 10318.176379478711,\n                "2020-02-13": 10289.409461629437,\n                "2020-02-14": 10420.328199768572,\n                "2020-02-15": 10145.144921435909,\n                "2020-02-16": 10133.57589410076,\n                "2020-02-17": 9841.091831460626,\n                "2020-02-18": 10171.01242170696,\n                "2020-02-19": 9527.109414976632,\n                "2020-02-20": 9622.701124253881,\n                "2020-02-21": 9724.259693368253,\n                "2020-02-22": 9667.126969857343,\n                "2020-02-23": 9984.86763837186,\n                "2020-02-24": 9672.404333515855,\n                "2020-02-25": 9324.760982876016,\n                "2020-02-26": 8792.298893836636,\n                "2020-02-27": 8827.277536423047,\n                "2020-02-28": 8746.168265060787,\n                "2020-02-29": 8513.799577101498,\n                "2020-03-01": 8563.289329193603,\n                "2020-03-02": 8947.441881905286,\n                "2020-03-03": 8817.476975306692,\n                "2020-03-04": 8719.003038176334,\n                "2020-03-05": 8994.968866068,\n                "2020-03-06": 9138.788496017694,\n                "2020-03-07": 8873.964080938678,\n                "2020-03-08": 8050.270444478244,\n                "2020-03-09": 7980.125342871134,\n                "2020-03-10": 7903.301263233401,\n                "2020-03-11": 7921.691053429747,\n                "2020-03-12": 4842.839517900732,\n                "2020-03-13": 5557.9655019538395,\n                "2020-03-14": 5176.916920393061,\n                "2020-03-15": 5387.07303977087,\n                "2020-03-16": 5077.0857509701955,\n                "2020-03-17": 5138.857091480529,\n                "2020-03-18": 5415.920197221448,\n                "2020-03-19": 6186.247943318795,\n                "2020-03-20": 6223.868485639044,\n                "2020-03-21": 6180.254728438058,\n                "2020-03-22": 5835.626587450494,\n                "2020-03-23": 6519.013553948472,\n                "2020-03-24": 6769.753092110293,\n                "2020-03-25": 6729.5905891743105,\n                "2020-03-26": 6774.58513724665,\n                "2020-03-27": 6385.565161561356,\n                "2020-03-28": 6235.533938644438,\n                "2020-03-29": 5905.152270502132,\n                "2020-03-30": 6409.901669202365,\n                "2020-03-31": 6448.921400942139,\n                "2020-04-01": 6608.025161185734,\n                "2020-04-02": 6802.784765753024,\n                "2020-04-03": 6752.678979081141,\n                "2020-04-04": 6839.237841225222,\n                "2020-04-05": 6770.62130745414,\n                "2020-04-06": 7377.34007447247,\n                "2020-04-07": 7188.692290271485,\n                "2020-04-08": 7350.118256372991,\n                "2020-04-09": 7284.84943602937,\n                "2020-04-10": 6871.304549000209,\n                "2020-04-11": 6879.726331672,\n                "2020-04-12": 6899.67732878084,\n                "2020-04-13": 6843.09123940856,\n                "2020-04-14": 6882.198968739418,\n                "2020-04-15": 6639.040402491828,\n                "2020-04-16": 7081.010820731381,\n                "2020-04-17": 7042.003302269701,\n                "2020-04-18": 7247.155623909695,\n                "2020-04-19": 7119.705745002085,\n                "2020-04-20": 6853.868348285219,\n                "2020-04-21": 6837.979043322478,\n                "2020-04-22": 7130.969866625284,\n                "2020-04-23": 7490.664393559049,\n                "2020-04-24": 7502.818596917829,\n                "2020-04-25": 7579.375465244614,\n                "2020-04-26": 7673.29720594182,\n                "2020-04-27": 7789.233616625969,\n                "2020-04-28": 7748.314724544624,\n                "2020-04-29": 8767.531257697532,\n                "2020-04-30": 8614.686979797862,\n                "2020-05-01": 8850.828010004021,\n                "2020-05-02": 8930.481032384616,\n                "2020-05-03": 8940.169124047288,\n                "2020-05-04": 8891.621853538752,\n                "2020-05-05": 9017.112971706574,\n                "2020-05-06": 9176.290960964761,\n                "2020-05-07": 9971.813132542005,\n                "2020-05-08": 9832.349945675393,\n                "2020-05-09": 9466.976758720028,\n                "2020-05-10": 8749.475116589014,\n                "2020-05-11": 8569.985576878216,\n                "2020-05-12": 8874.4852883433,\n                "2020-05-13": 9391.026468144599,\n                "2020-05-14": 9734.214819962534,\n                "2020-05-15": 9268.965007766476,\n                "2020-05-16": 9346.175775082691,\n                "2020-05-17": 9726.746465002234,\n                "2020-05-18": 9591.747264773916,\n                "2020-05-19": 9787.681198676364,\n                "2020-05-20": 9565.864007696626,\n                "2020-05-21": 9036.16845311447,\n                "2020-05-22": 9180.264947621099,\n                "2020-05-23": 9177.2173784955,\n                "2020-05-24": 8679.12459847534,\n                "2020-05-25": 8926.994114109528,\n                "2020-05-26": 8868.92379968366,\n                "2020-05-27": 9251.628166786884,\n                "2020-05-28": 9691.171178839357,\n                "2020-05-29": 9335.852179718459,\n                "2020-05-30": 9641.879453825108,\n                "2020-05-31": 9495.821302135486,\n                "2020-06-01": 10108.440732461588,\n                "2020-06-02": 9526.470656916952,\n                "2020-06-03": 9681.385200548071,\n                "2020-06-04": 9816.217683618019,\n                "2020-06-05": 9626.685767816529,\n                "2020-06-06": 9643.89045099561,\n                "2020-06-07": 9754.988342532664,\n                "2020-06-08": 9779.357283340296,\n                "2020-06-09": 9726.628525174901,\n                "2020-06-10": 9883.80666258567,\n                "2020-06-11": 9297.767422420218,\n                "2020-06-12": 9455.051785271387,\n                "2020-06-13": 9449.58097843553,\n                "2020-06-14": 9342.876215179627,\n                "2020-06-15": 9432.644247791997,\n                "2020-06-16": 9541.59361791716,\n                "2020-06-17": 9504.972131354076,\n                "2020-06-18": 9393.434555628713,\n                "2020-06-19": 9289.620204837009,\n                "2020-06-20": 9361.601335277615,\n                "2020-06-21": 9321.357172057595,\n                "2020-06-22": 9741.953292046212,\n                "2020-06-23": 9620.196482425776,\n                "2020-06-24": 9303.432969646408,\n                "2020-06-25": 9262.923848915883,\n                "2020-06-26": 9172.964668917448,\n                "2020-06-27": 9021.073139416116,\n                "2020-06-28": 9122.720741678684,\n                "2020-06-29": 9179.398269590854,\n                "2020-06-30": 9155.406548771864,\n                "2020-07-01": 9227.485093455894,\n                "2020-07-02": 9093.542955962394,\n                "2020-07-03": 9067.46695656375,\n                "2020-07-04": 9132.964099135203,\n                "2020-07-05": 9082.348667648086,\n                "2020-07-06": 9367.613717484586,\n                "2020-07-07": 9266.702836385748,\n                "2020-07-08": 9422.045092693752,\n                "2020-07-09": 9231.996448934546,\n                "2020-07-10": 9287.156265372023,\n                "2020-07-11": 9217.158264691849,\n                "2020-07-12": 9291.55499574741,\n                "2020-07-13": 9207.800071795746,\n                "2020-07-14": 9245.853743064845,\n                "2020-07-15": 9234.022540179089,\n                "2020-07-16": 9173.318766248347,\n                "2020-07-17": 9125.63841531478,\n                "2020-07-18": 9155.61875793783,\n                "2020-07-19": 9227.9884572592,\n                "2020-07-20": 9157.820714428068,\n                "2020-07-21": 9363.436227691878,\n                "2020-07-22": 9564.804222593757,\n                "2020-07-23": 9601.153863054002,\n                "2020-07-24": 9534.12589358487,\n                "2020-07-25": 9760.440525732174,\n                "2020-07-26": 9951.605437280148,\n                "2020-07-27": 10988.79607450504,\n                "2020-07-28": 10897.056000496897,\n                "2020-07-29": 11100.71079070317,\n                "2020-07-30": 11096.95421197373,\n                "2020-07-31": 11344.946867800074,\n                "2020-08-01": 11822.457443562313,\n                "2020-08-02": 11034.187880382378,\n                "2020-08-03": 11255.573659736256,\n                "2020-08-04": 11180.764121622287,\n                "2020-08-05": 11699.31422251192,\n                "2020-08-06": 11789.474040212548,\n                "2020-08-07": 11592.087582072769,\n                "2020-08-08": 11752.833577964302,\n                "2020-08-09": 11653.028812217579,\n                "2020-08-10": 11865.846868426604,\n                "2020-08-11": 11434.67767604961,\n                "2020-08-12": 11564.79321193733,\n                "2020-08-13": 11785.700652789837,\n                "2020-08-14": 11783.09516542745,\n                "2020-08-15": 11894.201274041656,\n                "2020-08-16": 11917.963733353254,\n                "2020-08-17": 12271.850816755634,\n                "2020-08-18": 11957.66697174002,\n                "2020-08-19": 11878.291448213251,\n                "2020-08-20": 11842.963605884852,\n                "2020-08-21": 11483.29861916512,\n                "2020-08-22": 11718.56142808169,\n                "2020-08-23": 11832.611362141986,\n                "2020-08-24": 11803.865799699,\n                "2020-08-25": 11369.130901395547,\n                "2020-08-26": 11522.57072633182,\n                "2020-08-27": 11315.811325792994,\n                "2020-08-28": 11546.978145178533,\n                "2020-08-29": 11496.95554640352,\n                "2020-08-30": 11744.127889982758,\n                "2020-08-31": 11847.280045754454,\n                "2020-09-01": 11946.25414999129,\n                "2020-09-02": 11511.103003402448,\n                "2020-09-03": 10196.478501413247,\n                "2020-09-04": 10520.186162249238,\n                "2020-09-05": 10124.479790519623,\n                "2020-09-06": 10264.408130342852,\n                "2020-09-07": 10378.289343920733,\n                "2020-09-08": 10132.129116720398,\n                "2020-09-09": 10203.535915070617,\n                "2020-09-10": 10334.266477366069,\n                "2020-09-11": 10385.293885045125,\n                "2020-09-12": 10431.237626312059,\n                "2020-09-13": 10297.00076287471,\n                "2020-09-14": 10679.776535362444,\n                "2020-09-15": 10794.371560816879,\n                "2020-09-16": 10983.439508265701,\n                "2020-09-17": 10970.696651952132,\n                "2020-09-18": 10934.944294195546,\n                "2020-09-19": 11103.971801020041,\n                "2020-09-20": 10932.53248542478,\n                "2020-09-21": 10419.439000548075,\n                "2020-09-22": 10523.382985724604,\n                "2020-09-23": 10231.002550586258,\n                "2020-09-24": 10729.779468757411,\n                "2020-09-25": 10679.702216613805,\n                "2020-09-26": 10750.604567774259,\n                "2020-09-27": 10779.003538245466,\n                "2020-09-28": 10714.22251050417,\n                "2020-09-29": 10846.694810820585,\n                "2020-09-30": 10761.851250804848,\n                "2020-10-01": 10612.53179169875,\n                "2020-10-02": 10570.517161879046,\n                "2020-10-03": 10550.535747340813,\n                "2020-10-04": 10670.47925427593,\n                "2020-10-05": 10797.056581073371,\n                "2020-10-06": 10615.6967707978,\n                "2020-10-07": 10676.813397650938,\n                "2020-10-08": 10885.058618889527,\n                "2020-10-09": 11061.614684157725,\n                "2020-10-10": 11278.973961041424,\n                "2020-10-11": 11385.58343039071,\n                "2020-10-12": 11541.838390448753,\n                "2020-10-13": 11432.581485119832,\n                "2020-10-14": 11411.500910468274,\n                "2020-10-15": 11495.655012271325,\n                "2020-10-16": 11310.108515271886,\n                "2020-10-17": 11370.350568653506,\n                "2020-10-18": 11495.888978285793,\n                "2020-10-19": 11742.740236800211,\n                "2020-10-20": 11922.92983338739,\n                "2020-10-21": 12836.33244411128,\n                "2020-10-22": 12968.364316168663,\n                "2020-10-23": 12919.551639070343,\n                "2020-10-24": 13098.877330154522,\n                "2020-10-25": 12968.735200754485,\n                "2020-10-26": 13088.340185242088,\n                "2020-10-27": 13644.359417145646,\n                "2020-10-28": 13273.00374996983,\n                "2020-10-29": 13440.151560427186,\n                "2020-10-30": 13549.890331301793,\n                "2020-10-31": 13739.141099585573,\n                "2020-11-01": 13672.152091653135,\n                "2020-11-02": 13543.869649016679,\n                "2020-11-03": 13946.839437356168,\n                "2020-11-04": 14077.50808210054,\n                "2020-11-05": 15562.898461220773,\n                "2020-11-06": 15523.056570648856,\n                "2020-11-07": 14813.364422886829,\n                "2020-11-08": 15461.361894056678,\n                "2020-11-09": 15299.438341423793,\n                "2020-11-10": 15235.845486581195,\n                "2020-11-11": 15638.724108792127,\n                "2020-11-12": 16242.764751750214,\n                "2020-11-13": 16289.176430702022,\n                "2020-11-14": 16032.550683755228,\n                "2020-11-15": 15932.846185317832,\n                "2020-11-16": 16681.707876202338,\n                "2020-11-17": 17621.415760785643,\n                "2020-11-18": 17790.510774780207,\n                "2020-11-19": 17778.711489658865,\n                "2020-11-20": 18602.49780334958,\n                "2020-11-21": 18655.050804985327,\n                "2020-11-22": 18407.96662864878,\n                "2020-11-23": 18430.871948635104,\n                "2020-11-24": 19070.87150373502,\n                "2020-11-25": 18724.86362510089,\n                "2020-11-26": 17132.539256877335,\n                "2020-11-27": 17106.663849059263,\n                "2020-11-28": 17694.61519991665,\n                "2020-11-29": 18165.65340279144,\n                "2020-11-30": 19621.130904874317,\n                "2020-12-01": 18853.54091744775,\n                "2020-12-02": 19179.199333639866,\n                "2020-12-03": 19436.588522004316,\n                "2020-12-04": 18730.67534047705,\n                "2020-12-05": 19137.40356376695,\n                "2020-12-06": 19333.087379451423,\n                "2020-12-07": 19187.188063923535,\n                "2020-12-08": 18318.65170351989,\n                "2020-12-09": 18542.154196756477,\n                "2020-12-10": 18256.897986371303,\n                "2020-12-11": 18067.175629799996,\n                "2020-12-12": 18805.997014745346,\n                "2020-12-13": 19167.79322663167,\n                "2020-12-14": 19269.39230279524,\n                "2020-12-15": 19435.202086123376,\n                "2020-12-16": 21317.548559662813,\n                "2020-12-17": 22805.156348458502,\n                "2020-12-18": 23122.040354634664,\n                "2020-12-19": 23865.791074537057,\n                "2020-12-20": 23507.268508551297,\n                "2020-12-21": 22837.37948570755,\n                "2020-12-22": 23825.681437400388,\n                "2020-12-23": 23279.139864956287,\n                "2020-12-24": 23742.68518446447,\n                "2020-12-25": 24710.81586540815,\n                "2020-12-26": 26484.02749022561,\n                "2020-12-27": 26301.57763189681,\n                "2020-12-28": 27086.312283429772,\n                "2020-12-29": 27376.680451196513,\n                "2020-12-30": 28857.004988392862,\n                "2020-12-31": 28983.104748319416,\n                "2021-01-01": 29365.927747974638,\n                "2021-01-02": 32113.4915515925,\n                "2021-01-03": 33282.14822035625,\n                "2021-01-04": 31366.05014118239,\n                "2021-01-05": 34125.31310536615,\n                "2021-01-06": 36880.69654146443,\n                "2021-01-07": 39359.230798945566,\n                "2021-01-08": 40654.68768401039,\n                "2021-01-09": 40419.04464740294,\n                "2021-01-10": 38427.763607551664,\n                "2021-01-11": 35520.93431160096,\n                "2021-01-12": 33836.235310915145,\n                "2021-01-13": 37344.18690945377,\n                "2021-01-14": 39242.84843800439,\n                "2021-01-15": 36788.771315117236,\n                "2021-01-16": 36253.596458079424,\n                "2021-01-17": 35746.61916615804,\n                "2021-01-18": 36743.44068730648,\n                "2021-01-19": 36090.7025395104,\n                "2021-01-20": 35676.28233424869,\n                "2021-01-21": 30772.275790996642,\n                "2021-01-22": 32948.495979357365,\n                "2021-01-23": 32004.50724677801,\n                "2021-01-24": 32290.901427523902,\n                "2021-01-25": 32322.840810277834,\n                "2021-01-26": 32516.631856622105,\n                "2021-01-27": 30391.35424046575,\n                "2021-01-28": 33036.95769650771,\n                "2021-01-29": 34150.57583406174,\n                "2021-01-30": 34194.54923392095,\n                "2021-01-31": 33138.52583197373,\n                "2021-02-01": 33544.43547898108,\n                "2021-02-02": 35536.00649805141,\n                "2021-02-03": 37622.28746925658,\n                "2021-02-04": 36756.38119020626,\n                "2021-02-05": 38036.33060779648,\n                "2021-02-06": 39305.66021433094,\n                "2021-02-07": 38884.62473910085,\n                "2021-02-08": 46286.52563921583,\n                "2021-02-09": 46546.21158060757,\n                "2021-02-10": 44883.07625234111,\n                "2021-02-11": 47680.13943570945,\n                "2021-02-12": 47418.47621313025,\n                "2021-02-13": 46993.334652167934,\n                "2021-02-14": 48560.95831634494,\n                "2021-02-15": 47809.52324743708,\n                "2021-02-16": 49271.24173196434,\n                "2021-02-17": 52232.315292216124,\n                "2021-02-18": 51752.469356210364,\n                "2021-02-19": 55874.09768390561,\n                "2021-02-20": 56096.49671180916,\n                "2021-02-21": 57735.711138516424,\n                "2021-02-22": 54311.29674554072,\n                "2021-02-23": 48472.57811782538,\n                "2021-02-24": 49789.854404080754,\n                "2021-02-25": 47342.24641880418,\n                "2021-02-26": 46417.53618537493,\n                "2021-02-27": 46297.97301313191,\n                "2021-02-28": 45159.12662427991,\n                "2021-03-01": 49863.47156971439,\n                "2021-03-02": 48528.66188288282,\n                "2021-03-03": 50642.67610820649,\n                "2021-03-04": 48633.40373762135,\n                "2021-03-05": 49092.730820931,\n                "2021-03-06": 49011.05413973721,\n                "2021-03-07": 51347.7801300143,\n                "2021-03-08": 52345.343790475235,\n                "2021-03-09": 54695.9567426529,\n                "2021-03-10": 56229.23116397719,\n                "2021-03-11": 57904.0542305064,\n                "2021-03-12": 57440.25522968612,\n                "2021-03-13": 61312.61257644354,\n                "2021-03-14": 59856.56238046907,\n                "2021-03-15": 56191.1910706767,\n                "2021-03-16": 56561.842482844826,\n                "2021-03-17": 58863.63284052691,\n                "2021-03-18": 57908.5097226941,\n                "2021-03-19": 58484.93083251073,\n                "2021-03-20": 58340.736583469676,\n                "2021-03-21": 57681.18911274658,\n                "2021-03-22": 54431.377913148484,\n                "2021-03-23": 54590.93958826513,\n                "2021-03-24": 52639.434960370265,\n                "2021-03-25": 51549.174928035354,\n                "2021-03-26": 54920.23571764345,\n                "2021-03-27": 56001.441707406244,\n                "2021-03-28": 55807.82466602295,\n                "2021-03-29": 57656.391818136544,\n                "2021-03-30": 58671.967413286155,\n                "2021-03-31": 58821.45238754192,\n                "2021-04-01": 58830.31016126481,\n                "2021-04-02": 59096.259363841265,\n                "2021-04-03": 57056.78876124842,\n                "2021-04-04": 58217.29536587858,\n                "2021-04-05": 58684.9276421598,\n                "2021-04-06": 58111.95532959225,\n                "2021-04-07": 56167.97257855702,\n                "2021-04-08": 58171.79201353043,\n                "2021-04-09": 58184.715512645074,\n                "2021-04-10": 59806.00017753547,\n                "2021-04-11": 59962.840499630656,\n                "2021-04-12": 59901.99626870558,\n                "2021-04-13": 63491.110531236096,\n                "2021-04-14": 62862.07531945178,\n                "2021-04-15": 63195.66927200241,\n                "2021-04-16": 61578.01942592358,\n                "2021-04-17": 60212.01882844466,\n                "2021-04-18": 56398.5602172688,\n                "2021-04-19": 55928.61629453733,\n                "2021-04-20": 56425.43826281745,\n                "2021-04-21": 54141.19894702364,\n                "2021-04-22": 52074.38456833018,\n                "2021-04-23": 51097.511732657294,\n                "2021-04-24": 50171.38223844001,\n                "2021-04-25": 49023.0345311417,\n                "2021-04-26": 53959.75735049759,\n                "2021-04-27": 55137.237321736175,\n                "2021-04-28": 54792.204973792235,\n                "2021-04-29": 53683.354628887835,\n                "2021-04-30": 57814.81924031827,\n                "2021-05-01": 57866.40522543339,\n                "2021-05-02": 56606.93292862108,\n                "2021-05-03": 57367.94027389746,\n                "2021-05-04": 53669.0406435094,\n                "2021-05-05": 57346.31054180955,\n                "2021-05-06": 56602.458381999226,\n                "2021-05-07": 57388.056685986885,\n                "2021-05-08": 58858.64589459963,\n                "2021-05-09": 58242.18987926512,\n                "2021-05-10": 55946.06094537487,\n                "2021-05-11": 56908.96070458867,\n                "2021-05-12": 50162.82397570515,\n                "2021-05-13": 49473.3657656229,\n                "2021-05-14": 50028.81854637468,\n                "2021-05-15": 47044.860881618086,\n                "2021-05-16": 46101.78153731751,\n                "2021-05-17": 43476.88139890033,\n                "2021-05-18": 43016.99652132369,\n                "2021-05-19": 37183.67857398516,\n                "2021-05-20": 40530.73116475602,\n                "2021-05-21": 37158.21683884298,\n                "2021-05-22": 37547.86023876052,\n                "2021-05-23": 34776.72397467876,\n                "2021-05-24": 38730.95968368642,\n                "2021-05-25": 38328.76516694758,\n                "2021-05-26": 39269.82217149108,\n                "2021-05-27": 38490.42217673106,\n                "2021-05-28": 35670.474491484114,\n                "2021-05-29": 34617.868698922925,\n                "2021-05-30": 35682.22006879997,\n                "2021-05-31": 37426.26209033193,\n                "2021-06-01": 36729.140865017725,\n                "2021-06-02": 37687.64743779049,\n                "2021-06-03": 39165.275475004266,\n                "2021-06-04": 36923.829343544705,\n                "2021-06-05": 35500.84037541436,\n                "2021-06-06": 35847.040002822105,\n                "2021-06-07": 33580.307814396074,\n                "2021-06-08": 33491.710300542996,\n                "2021-06-09": 37555.12138488933,\n                "2021-06-10": 36691.62905611923,\n                "2021-06-11": 37263.78892707989,\n                "2021-06-12": 35774.176843712536,\n                "2021-06-13": 39019.861329919724,\n                "2021-06-14": 40469.16757966692,\n                "2021-06-15": 40327.974012285486,\n                "2021-06-16": 38329.5581281631,\n                "2021-06-17": 38279.69541321831,\n                "2021-06-18": 35940.52648321214,\n                "2021-06-19": 35581.32897382717,\n                "2021-06-20": 35657.921449566755,\n                "2021-06-21": 31879.916234097716,\n                "2021-06-22": 32449.32315600328,\n                "2021-06-23": 33661.734611930005,\n                "2021-06-24": 34686.41088755192,\n                "2021-06-25": 31898.086458496568,\n                "2021-06-26": 32018.68706525543,\n                "2021-06-27": 34631.87299386532,\n                "2021-06-28": 34486.95724546603,\n                "2021-06-29": 36012.16982304627,\n                "2021-06-30": 35184.35747464002,\n                "2021-07-01": 33621.056636124435,\n                "2021-07-02": 33894.568793684666,\n                "2021-07-03": 34715.82258780578,\n                "2021-07-04": 35422.885179190474,\n                "2021-07-05": 33952.28107081836,\n                "2021-07-06": 34167.305179719544,\n                "2021-07-07": 33971.53663613733,\n                "2021-07-08": 32883.567491269714,\n                "2021-07-09": 33969.65787308014,\n                "2021-07-10": 33694.890695452705,\n                "2021-07-11": 34311.56887454603,\n                "2021-07-12": 33250.883331036865,\n                "2021-07-13": 32619.096157939948,\n                "2021-07-14": 32854.37697260049,\n                "2021-07-15": 31700.429741545933,\n                "2021-07-16": 31441.916855243184,\n                "2021-07-17": 31557.818335833723,\n                "2021-07-18": 31841.17220517928,\n                "2021-07-19": 30950.65249094131,\n                "2021-07-20": 29890.024719800578,\n                "2021-07-21": 32246.61588400005,\n                "2021-07-22": 32353.96708313725,\n                "2021-07-23": 33471.08444171674,\n                "2021-07-24": 34221.2234901287,\n                "2021-07-25": 35387.27749730965,\n                "2021-07-26": 37259.906666124916,\n                "2021-07-27": 38983.724635336795,\n                "2021-07-28": 39984.74396248477,\n                "2021-07-29": 40112.520359173366,\n                "2021-07-30": 41745.018900937954,\n                "2021-07-31": 41773.359002907746,\n                "2021-08-01": 39817.529192704606,\n                "2021-08-02": 39288.49310016009,\n                "2021-08-03": 38399.24120110376,\n                "2021-08-04": 39777.83817771475,\n                "2021-08-05": 40893.248709163876,\n                "2021-08-06": 42640.012038756715,\n                "2021-08-07": 44503.2090742716,\n                "2021-08-08": 43923.31674463481,\n                "2021-08-09": 46267.16108027921,\n                "2021-08-10": 45509.62033295147,\n                "2021-08-11": 45668.13006819675,\n                "2021-08-12": 44477.23364723221,\n                "2021-08-13": 47740.23949707087,\n                "2021-08-14": 47089.3299616764,\n                "2021-08-15": 47054.4743624356,\n                "2021-08-16": 46042.63762169243,\n                "2021-08-17": 44683.09583885416,\n                "2021-08-18": 45011.5315193287,\n                "2021-08-19": 46665.0705599097,\n                "2021-08-20": 49202.82869684314,\n                "2021-08-21": 49067.81845637673,\n                "2021-08-22": 49321.198284282196,\n                "2021-08-23": 49559.86601210174,\n                "2021-08-24": 48012.161832619124,\n                "2021-08-25": 49047.835715477544,\n                "2021-08-26": 47272.7452941728,\n                "2021-08-27": 49020.388464350886,\n                "2021-08-28": 48958.95692774184,\n                "2021-08-29": 48998.381593040904,\n                "2021-08-30": 47029.740245509674,\n                "2021-08-31": 47389.375375948264,\n                "2021-09-01": 48688.75654827479,\n                "2021-09-02": 49358.008524214296,\n                "2021-09-03": 50016.45425973554,\n                "2021-09-04": 50011.74462030521,\n                "2021-09-05": 51728.94766180318,\n                "2021-09-06": 52654.521628055445,\n                "2021-09-07": 47031.80607761185,\n                "2021-09-08": 46331.17355189018,\n                "2021-09-09": 46510.352299562415,\n                "2021-09-10": 44774.769082420746,\n                "2021-09-11": 45149.16256646672,\n                "2021-09-12": 46177.54926666999,\n                "2021-09-13": 45149.14500649642,\n                "2021-09-14": 47154.61102131543,\n                "2021-09-15": 48232.155280061124,\n                "2021-09-16": 47897.36258332673,\n                "2021-09-17": 47373.61268700321,\n                "2021-09-18": 48266.27615611006,\n                "2021-09-19": 47404.81168317209,\n                "2021-09-20": 42858.755261899474,\n                "2021-09-21": 40414.32705400875,\n                "2021-09-22": 43563.95496652104,\n                "2021-09-23": 44981.375848121796,\n                "2021-09-24": 42800.22000980601,\n                "2021-09-25": 42929.83966318742,\n                "2021-09-26": 43329.334920643465,\n                "2021-09-27": 42377.85453264272,\n                "2021-09-28": 41050.852958975694,\n                "2021-09-29": 41651.882094912304,\n                "2021-09-30": 43894.15714813076,\n                "2021-10-01": 48194.36291882163,\n                "2021-10-02": 47752.47542981119,\n                "2021-10-03": 48314.73731053451,\n                "2021-10-04": 49395.16134886575,\n                "2021-10-05": 51655.53945511073,\n                "2021-10-06": 55148.07296277487,\n                "2021-10-07": 53964.714450206746,\n                "2021-10-08": 54106.22189208513,\n                "2021-10-09": 55070.60322819799,\n                "2021-10-10": 54708.43312067403,\n                "2021-10-11": 57571.66071827042,\n                "2021-10-12": 56372.209979691026,\n                "2021-10-13": 57609.50362534133,\n                "2021-10-14": 57568.16362956114,\n                "2021-10-15": 61684.28342881371,\n                "2021-10-16": 61155.519551282756,\n                "2021-10-17": 61594.411291391894,\n                "2021-10-18": 61982.08028189971,\n                "2021-10-19": 64302.560223364206,\n                "2021-10-20": 66201.92329915239,\n                "2021-10-21": 62727.071671124824,\n                "2021-10-22": 61053.260101845,\n                "2021-10-23": 61668.105756028606,\n                "2021-10-24": 61133.36842441393,\n                "2021-10-25": 63296.24235142832,\n                "2021-10-26": 60651.65751613499,\n                "2021-10-27": 58540.295777691426,\n                "2021-10-28": 61069.97070501122,\n                "2021-10-29": 62343.511367026695,\n                "2021-10-30": 61841.39066460982,\n                "2021-10-31": 61409.22609210837,\n                "2021-11-01": 61147.11173007881,\n                "2021-11-02": 63128.731765844794,\n                "2021-11-03": 62989.457966996306,\n                "2021-11-04": 61635.04579382208,\n                "2021-11-05": 61202.87632518377,\n                "2021-11-06": 61625.36517038733,\n                "2021-11-07": 63197.22414508879,\n                "2021-11-08": 67589.60738667769,\n                "2021-11-09": 67184.14865219769,\n                "2021-11-10": 65024.5198929156,\n                "2021-11-11": 65163.25512835789,\n                "2021-11-12": 64399.64199936495,\n                "2021-11-13": 64599.60561577672,\n                "2021-11-14": 65373.292650222225,\n                "2021-11-15": 63988.1143629037,\n                "2021-11-16": 60520.92990518447,\n                "2021-11-17": 60592.49785417966,\n                "2021-11-18": 56830.37131374727,\n                "2021-11-19": 58198.927347035875,\n                "2021-11-20": 60045.083481415466,\n                "2021-11-21": 59338.09101225692,\n                "2021-11-22": 56381.53317547447,\n                "2021-11-23": 57737.26537356611,\n                "2021-11-24": 57132.55582541222,\n                "2021-11-25": 59040.13619223091,\n                "2021-11-26": 53775.48347581671,\n                "2021-11-27": 54473.23418914302,\n                "2021-11-28": 57290.53277619375,\n                "2021-11-29": 57866.69332982838,\n                "2021-11-30": 57117.08594146655,\n                "2021-12-01": 57212.75109938861,\n                "2021-12-02": 56594.70475261395,\n                "2021-12-03": 53779.28022508981,\n                "2021-12-04": 49037.24762284625,\n                "2021-12-05": 49279.81628623866,\n                "2021-12-06": 50518.475874148535,\n                "2021-12-07": 50576.15367864407,\n                "2021-12-08": 50548.12397229681,\n                "2021-12-09": 47786.630321451,\n                "2021-12-10": 47265.73410567076,\n                "2021-12-11": 49270.20633816324,\n                "2021-12-12": 50020.75466459159,\n                "2021-12-13": 46713.90584148504,\n                "2021-12-14": 48270.02882016978,\n                "2021-12-15": 48820.65698137904,\n                "2021-12-16": 47644.278935331524,\n                "2021-12-17": 46341.99208790469,\n                "2021-12-18": 46956.29538315965,\n                "2021-12-19": 46866.50683788107,\n                "2021-12-20": 47168.28533183412,\n                "2021-12-21": 49187.26071564862,\n                "2021-12-22": 48892.84078636029,\n                "2021-12-23": 50923.03403083785,\n                "2021-12-24": 50795.82972129129,\n                "2021-12-25": 50748.78316824812,\n                "2021-12-26": 50822.73779865886,\n                "2021-12-27": 50813.007896489944,\n                "2021-12-28": 47682.48473957059,\n                "2021-12-29": 46575.51065364095,\n                "2021-12-30": 47212.70262033006,\n                "2021-12-31": 46346.94453228382,\n                "2022-01-01": 47765.55729636586,\n                "2022-01-02": 47370.45356360401,\n                "2022-01-03": 46533.97194397127,\n                "2022-01-04": 45914.50209736554,\n                "2022-01-05": 43651.74764114118,\n                "2022-01-06": 43183.81516529129,\n                "2022-01-07": 42031.79555633946,\n                "2022-01-08": 41727.344700651774,\n                "2022-01-09": 41937.45464797547,\n                "2022-01-10": 41853.30772889238,\n                "2022-01-11": 42825.96387312913,\n                "2022-01-12": 43971.07013622535,\n                "2022-01-13": 42709.24588592199,\n                "2022-01-14": 43161.08427173176,\n                "2022-01-15": 43232.198861759985,\n                "2022-01-16": 43191.05914136974,\n                "2022-01-17": 42284.00605838642,\n                "2022-01-18": 42408.21681089912,\n                "2022-01-19": 41705.29870372612,\n                "2022-01-20": 40748.110939097605,\n                "2022-01-21": 36364.09251450907,\n                "2022-01-22": 35052.720366648566,\n                "2022-01-23": 36349.21287344119,\n                "2022-01-24": 36649.030999362076,\n                "2022-01-25": 37006.187910135515,\n                "2022-01-26": 36811.60279569774,\n                "2022-01-27": 36104.14024906447,\n                "2022-01-28": 37798.81520671833,\n                "2022-01-29": 38193.7809688123,\n                "2022-01-30": 37995.700883656566,\n                "2022-01-31": 38527.86996654995,\n                "2022-02-01": 38814.668085644065,\n                "2022-02-02": 37022.177058564674,\n                "2022-02-03": 37035.735337061255,\n                "2022-02-04": 41572.706406233345,\n                "2022-02-05": 41495.49365268134,\n                "2022-02-06": 42505.60173063351,\n                "2022-02-07": 43874.06643095928,\n                "2022-02-08": 44173.02565081948,\n                "2022-02-09": 44436.23115848685,\n                "2022-02-10": 43387.91963280781,\n                "2022-02-11": 42409.59827860492,\n                "2022-02-12": 42223.27128642293,\n                "2022-02-13": 42239.58282291968,\n                "2022-02-14": 42643.25570822841,\n                "2022-02-15": 44552.702727334996,\n                "2022-02-16": 44077.63349376276,\n                "2022-02-17": 40636.13091117205,\n                "2022-02-18": 40054.77154736922,\n                "2022-02-19": 40168.31794539771,\n                "2022-02-20": 38523.23916171721,\n                "2022-02-21": 37045.15353457112,\n                "2022-02-22": 38250.657339674115,\n                "2022-02-23": 37316.63974425314,\n                "2022-02-24": 38317.38048554095,\n                "2022-02-25": 39276.711885295605,\n                "2022-02-26": 39089.79770396116,\n                "2022-02-27": 37783.29336739732,\n                "2022-02-28": 43202.94757711874,\n                "2022-03-01": 44299.290156603805,\n                "2022-03-02": 43975.53273104671,\n                "2022-03-03": 42515.98919909544,\n                "2022-03-04": 39151.52547096872,\n                "2022-03-05": 39491.60167653283,\n                "2022-03-06": 38422.337291069656,\n                "2022-03-07": 38022.45957296766,\n                "2022-03-08": 38698.56110650026,\n                "2022-03-09": 41976.31352970688,\n                "2022-03-10": 39479.26782306336,\n                "2022-03-11": 38800.83409437962,\n                "2022-03-12": 38986.095145546395,\n                "2022-03-13": 37889.53514507628,\n                "2022-03-14": 39632.7127618508,\n                "2022-03-15": 39344.323872615474,\n                "2022-03-16": 41108.23413745602,\n                "2022-03-17": 40929.30669535329,\n                "2022-03-18": 41787.848033567505,\n                "2022-03-19": 42174.05332892451,\n                "2022-03-20": 41248.88895062883,\n                "2022-03-21": 41022.23510719978,\n                "2022-03-22": 42346.000915260185,\n                "2022-03-23": 42786.73440306521,\n                "2022-03-24": 43934.17693572089,\n                "2022-03-25": 44351.82158503853,\n                "2022-03-26": 44464.508492454,\n                "2022-03-27": 46698.12768705256,\n                "2022-03-28": 47057.92498260259,\n                "2022-03-29": 47411.49950819101,\n                "2022-03-30": 47046.727638935954,\n                "2022-03-31": 45562.89412999272,\n                "2022-04-01": 46257.27285571992,\n                "2022-04-02": 45869.84646185583,\n                "2022-04-03": 46456.02298897476,\n                "2022-04-04": 46634.226038723995,\n                "2022-04-05": 45639.06246966941,\n                "2022-04-06": 43269.636145726465,\n                "2022-04-07": 43637.598553929885,\n                "2022-04-08": 42261.91288299305,\n                "2022-04-09": 42739.27095447602,\n                "2022-04-10": 42340.15522934573,\n                "2022-04-11": 39578.59268544371,\n                "2022-04-12": 40134.36497889689,\n                "2022-04-13": 41236.36663696266,\n                "2022-04-14": 39974.53437830743,\n                "2022-04-15": 40577.4525010981,\n                "2022-04-16": 40496.949841537746,\n                "2022-04-17": 39848.697323968496,\n                "2022-04-18": 40863.6799308549,\n                "2022-04-19": 41464.16920516582,\n                "2022-04-20": 41404.21914526213,\n                "2022-04-21": 40455.191338726836,\n                "2022-04-22": 39748.161744107165,\n                "2022-04-23": 39566.25953413512,\n                "2022-04-24": 39507.93540458477,\n                "2022-04-25": 40434.614662945394,\n                "2022-04-26": 38100.7618308509,\n                "2022-04-27": 39207.130346800215,\n                "2022-04-28": 39752.376591433494,\n                "2022-04-29": 38628.69133388912,\n                "2022-04-30": 37812.69948832504,\n                "2022-05-01": 38567.172164753625,\n                "2022-05-02": 38647.653485044,\n                "2022-05-03": 37826.66525393979,\n                "2022-05-04": 39709.48966617461,\n                "2022-05-05": 36604.168780042215,\n                "2022-05-06": 36086.512010185696,\n                "2022-05-07": 35554.46808563468,\n                "2022-05-08": 34099.4650216206,\n                "2022-05-09": 30438.345390436294,\n                "2022-05-10": 31047.22125658299,\n                "2022-05-11": 28803.16422107853,\n                "2022-05-12": 29105.200506677433,\n                "2022-05-13": 29279.367505548336,\n                "2022-05-14": 30187.868102584063,\n                "2022-05-15": 31251.489907144347,\n                "2022-05-16": 29920.69454867623,\n                "2022-05-17": 30552.013873761716,\n                "2022-05-18": 28805.447465427962,\n                "2022-05-19": 30355.40317130959,\n                "2022-05-20": 29300.329173452305,\n                "2022-05-21": 29474.39530275997,\n                "2022-05-22": 30374.771284837196\n            },\n            "startDate": "2019-01-31",\n            "endDate": "2022-05-22"\n        }\n    }')))
r.d.b.I(0,new A.h9(s))
return s},
h9:function h9(a){this.a=a},
ax(){var s,r,q,p,o,n="ChartWidgetPanel",m="className",l="ChartWidget",k=A.d8(),j=k.e.classList
j.contains("HeaderLabel").toString
j.add("HeaderLabel")
s=document
r=s.createElement("div")
r.toString
q=t.i
r=new A.cz(k,r,A.i([],q),n)
r.G(A.a(n,m))
r.L(n)
r.sU(!0)
r.sD("2px")
s=s.createElement("div")
s.toString
p=new A.cy(s,A.i([],q),l)
p.G(A.a(l,m))
p.L(l)
o=s.style
o.width="100%"
s=s.style
s.height="100%"
p.sT(!0)
p.sbX(!0)
r.dx=p
r.a1(0,A.i([k,A.a(p,"chartWidget")],q))
return r},
cz:function cz(a,b,c,d){var _=this
_.dx=$
_.dy=a
_.e=b
_.f=c
_.r="0px"
_.y=_.x=!1
_.a=!0
_.c=_.b=!1
_.d=d},
cv:function cv(a,b,c,d,e,f,g,h){var _=this
_.y1=a
_.y2=b
_.aw=c
_.dy=_.dx=""
_.fr=d
_.fx=e
_.fy=null
_.e=f
_.f=g
_.r="0px"
_.y=_.x=!1
_.a=!0
_.c=_.b=!1
_.d=h},
ek:function ek(a){this.a=a},
el:function el(a){this.a=a},
cw:function cw(a,b,c,d,e){var _=this
_.dy=_.dx=""
_.fr=a
_.fx=b
_.fy=null
_.e=c
_.f=d
_.r="0px"
_.y=_.x=!1
_.a=!0
_.c=_.b=!1
_.d=e},
em:function em(a){this.a=a},
en:function en(a){this.a=a},
eo:function eo(a){this.a=a},
cM:function cM(a,b,c,d,e){var _=this
_.dy=_.dx=""
_.fr=a
_.fx=b
_.fy=null
_.e=c
_.f=d
_.r="0px"
_.y=_.x=!1
_.a=!0
_.c=_.b=!1
_.d=e},
cU:function cU(a,b,c,d,e){var _=this
_.dy=_.dx=""
_.fr=a
_.fx=b
_.fy=null
_.e=c
_.f=d
_.r="0px"
_.y=_.x=!1
_.a=!0
_.c=_.b=!1
_.d=e},
eF:function eF(a){this.a=a},
eG:function eG(a){this.a=a},
eH:function eH(a){this.a=a},
eI:function eI(a){this.a=a},
eJ:function eJ(a){this.a=a},
ir(a){var s,r,q=t.N,p=new A.fi(A.N(q,q),A.N(q,q)),o=A.N(q,q),n=A.N(q,q)
if(B.b.a7(a,"~")){s=a.split("~")
a=B.a.gX(s)
n=A.ip(B.a.gb1(s))}if(B.b.a7(a,"?")){s=a.split("?")
r=B.a.gX(s)
o=A.ip(B.a.gb1(s))}else r=a
p.a=r
p.saB(o)
p.san(0,n)
return p},
h_(a){var s,r,q,p,o=A.iG(a),n=a.fy
if(n==null)return"#"+o
s=A.i([],t.m)
for(;n!=null;){B.a.l(s,n)
n=n.fy}r=""+"#"
for(q=t.W,p=new A.be(s,q),p=new A.O(p,p.gk(p),q.h("O<A.E>")),q=q.h("A.E");p.m();)r+=A.iG(q.a(p.d))+"/"
return(r.charCodeAt(0)==0?r:r)+o},
iG(a){var s={},r=a.dx
s.a=r
if(J.hZ(a.fr)){s.a=r+"?"
s.b=!0
J.hX(a.fr,new A.fT(s))}return s.a},
bP:function bP(){},
eO:function eO(a){this.a=a},
eP:function eP(a){this.a=a},
eQ:function eQ(){},
fi:function fi(a,b){this.a=""
this.b=a
this.c=b},
fT:function fT(a){this.a=a},
cX:function cX(a,b,c,d,e,f,g,h,i,j,k,l){var _=this
_.aw=a
_.aZ=b
_.bD=c
_.cU=d
_.dx=e
_.dy=f
_.fr=g
_.fy=null
_.go=!1
_.id=h
_.k1=i
_.e=j
_.f=k
_.r="0px"
_.y=_.x=!1
_.a=!0
_.c=_.b=!1
_.d=l},
eL:function eL(a){this.a=a},
eM:function eM(a){this.a=a},
eN:function eN(){},
da:function da(a,b,c){var _=this
_.e=a
_.f=b
_.r="0px"
_.y=_.x=!1
_.a=!0
_.c=_.b=!1
_.d=c},
db:function db(a,b,c,d){var _=this
_.cx=""
_.e=a
_.a$=b
_.r$=c
_.a=!0
_.c=_.b=!1
_.d=d},
dd:function dd(a,b,c){var _=this
_.e=a
_.f=b
_.r="0px"
_.y=_.x=!1
_.a=!0
_.c=_.b=!1
_.d=c},
dc:function dc(a,b,c,d){var _=this
_.e=a
_.a$=b
_.r$=c
_.a=!0
_.c=_.b=!1
_.d=d},
Z:function Z(){},
Y:function Y(a,b){this.b=a
this.$ti=b},
w:function w(){},
S:function S(){},
j1(a){a.aj().J(new A.h7(a),t.P)},
cy:function cy(a,b,c){var _=this
_.dy=_.dx=null
_.fr=!1
_.e=a
_.f=b
_.r="0px"
_.y=_.x=!1
_.a=!0
_.c=_.b=!1
_.d=c},
er:function er(a){this.a=a},
h7:function h7(a){this.a=a},
k5(){var s,r="SelectField",q=document,p=q.createElement("div")
p.toString
q=q.createElement("select")
s=q.style
s.width="100%"
s=q.style
s.height="100%"
q=new A.d7(p,q,A.i([],t.s),!1,A.c0(t.d0),r)
q.G(A.a(r,"className"))
q.c2()
return q},
d7:function d7(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.r=c
_.a$=d
_.f$=e
_.a=!0
_.c=_.b=!1
_.d=f},
f2:function f2(a){this.a=a},
f4:function f4(){},
f3:function f3(){},
dK:function dK(){},
dL:function dL(){},
k7(){var s="TextAreaField",r=document.createElement("textarea")
r.toString
r=new A.di(r,!1,A.c0(t.b8),s)
r.G(A.a(s,"className"))
r.c4()
return r},
di:function di(a,b,c,d){var _=this
_.e=a
_.a$=b
_.f$=c
_.a=!0
_.c=_.b=!1
_.d=d},
f9:function f9(a){this.a=a},
dS:function dS(){},
dT:function dT(){},
d8(){var s,r,q="SimpleLabel",p=document.createElement("div")
p.toString
s=new A.bY(p,!1,q)
s.G(A.a(q,"className"))
p=p.style
p.overflow="hidden"
B.c.w(p,B.c.v(p,"flex-shrink"),"0","")
B.c.w(p,B.c.v(p,"align-items"),"center","")
r=s.r
B.c.w(p,B.c.v(p,"justify-content"),r,"")
return s},
bY:function bY(a,b,c){var _=this
_.e=a
_.r="left"
_.x=!1
_.a$=b
_.a=!0
_.c=_.b=!1
_.d=c},
dM:function dM(){},
d9:function d9(){},
dN:function dN(){},
dO:function dO(){},
cW:function cW(a,b){var _=this
_.e=a
_.a=!0
_.c=_.b=!1
_.d=b},
bc:function bc(){},
eU:function eU(){},
jX(){var s="ModalStatePanel",r=A.c0(t.V),q=document.createElement("div")
q.toString
q=new A.cY(r,q,A.i([],t.i),s)
q.G(A.a(s,"className"))
q.L(s)
q.c0()
return q},
cY:function cY(a,b,c,d){var _=this
_.dx=a
_.dy=!0
_.e=b
_.f=c
_.r="0px"
_.y=_.x=!1
_.a=!0
_.c=_.b=!1
_.d=d},
eV:function eV(a){this.a=a},
ho(){var s="Panel",r=document.createElement("div")
r.toString
r=new A.d2(r,A.i([],t.i),s)
r.G(A.a(s,"className"))
r.L(s)
return r},
d3:function d3(){},
eX:function eX(){},
d2:function d2(a,b,c){var _=this
_.e=a
_.f=b
_.r="0px"
_.y=_.x=!1
_.a=!0
_.c=_.b=!1
_.d=c},
fa:function fa(a){this.a="default"
this.b=a},
fb:function fb(){},
fc:function fc(a){this.a=a},
ly(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)},
hO(a){return B.b.R(B.e.i(A.hp(a)),2,"0")+"."+B.b.R(B.e.i(A.hr(a)),2,"0")+"."+B.e.i(A.ht(a))},
iU(a){return B.b.R(B.e.i(A.hp(a)),2,"0")+"."+B.b.R(B.e.i(A.hr(a)),2,"0")+"."+B.e.i(A.ht(a))+" "+B.b.R(B.e.i(A.hq(a)),2,"0")+":"+B.b.R(B.e.i(A.f_(a)),2,"0")+":"+B.b.R(B.e.i(A.hs(a)),2,"0")},
iV(a){return B.b.R(B.e.i(A.hq(a)),2,"0")+":"+B.b.R(B.e.i(A.f_(a)),2,"0")},
j5(a,b){var s=Math.pow(10,b)
return B.i.ai(a*s)/s},
lk(){var s,r,q,p,o,n=A.i([],t.j)
for(s=J.a8(t.R.a(B.j.S(0,u.k)));s.m();){r=s.gn()
q=J.R(r)
p=A.a7(q.j(r,0))
o=new A.F(p,!1)
o.a0(p,!1)
B.a.l(n,new A.U(o,A.J(A.r(q.j(r,4)))))}return n},
lj(){var s,r,q,p,o,n=A.i([],t.e)
for(s=J.a8(t.R.a(B.j.S(0,u.k)));s.m();){r=s.gn()
q=J.R(r)
p=A.a7(q.j(r,0))
o=new A.F(p,!1)
o.a0(p,!1)
B.a.l(n,new A.a0(o,A.J(A.r(q.j(r,1))),A.J(A.r(q.j(r,2))),A.J(A.r(q.j(r,3))),A.J(A.r(q.j(r,4)))))}return n},
lL(){var s,r,q,p,o,n=A.i([],t.j)
for(s=J.a8(t.R.a(B.j.S(0,u.n)));s.m();){r=s.gn()
q=J.R(r)
p=A.a7(q.j(r,0))
o=new A.F(p,!1)
o.a0(p,!1)
B.a.l(n,new A.U(o,A.J(A.r(q.j(r,4)))))}return n},
lK(){var s,r,q,p,o,n=A.i([],t.e)
for(s=J.a8(t.R.a(B.j.S(0,u.n)));s.m();){r=s.gn()
q=J.R(r)
p=A.a7(q.j(r,0))
o=new A.F(p,!1)
o.a0(p,!1)
B.a.l(n,new A.a0(o,A.J(A.r(q.j(r,1))),A.J(A.r(q.j(r,2))),A.J(A.r(q.j(r,3))),A.J(A.r(q.j(r,4)))))}return n},
lN(){var s,r,q,p,o,n=A.i([],t.j)
for(s=J.a8(t.R.a(B.j.S(0,u.m)));s.m();){r=s.gn()
q=J.R(r)
p=A.a7(q.j(r,0))
o=new A.F(p,!1)
o.a0(p,!1)
B.a.l(n,new A.U(o,A.J(A.r(q.j(r,4)))))}return n},
lM(){var s,r,q,p,o,n=A.i([],t.e)
for(s=J.a8(t.R.a(B.j.S(0,u.m)));s.m();){r=s.gn()
q=J.R(r)
p=A.a7(q.j(r,0))
o=new A.F(p,!1)
o.a0(p,!1)
B.a.l(n,new A.a0(o,A.J(A.r(q.j(r,1))),A.J(A.r(q.j(r,2))),A.J(A.r(q.j(r,3))),A.J(A.r(q.j(r,4)))))}return n},
lh(a){var s
if(typeof a=="string")return a
else if(t.gZ.b(a)){s=A.fS(a.target)
return J.aY(s)}else return J.aY(a)},
hQ(){var s=0,r=A.e1(t.H),q,p,o,n,m,l,k,j,i,h,g
var $async$hQ=A.e3(function(a,b){if(a===1)return A.dZ(b,r)
while(true)switch(s){case 0:i=t.N
h=document
g=h.createElement("div")
g.toString
q=t.i
p=new A.cM(A.N(i,i),A.N(i,i),g,A.i([],q),"HomeView")
p.G(A.a("HomeView","className"))
p.L("HomeView")
p.dx="home"
p.dy="Home"
p.sU(!0)
g=g.style
g.padding="20px"
p.sD("10px")
g=A.d8()
B.f.sB(g.e,"Simple dart charts showcase")
p.l(0,g)
g=$.js()
o=h.createElement("div")
o.toString
n=new A.cU(A.N(i,i),A.N(i,i),o,A.i([],q),"LineChartsView")
n.G(A.a("LineChartsView","className"))
n.L("LineChartsView")
m=o.style
m.width="100%"
m=o.style
m.height="100%"
n.dx="line_charts"
n.dy="Line Charts"
n.sT(!0)
o=o.style
o.padding="1px"
n.sU(!0)
n.sD("1px")
n.sak(!0)
o=h.createElement("div")
o.toString
m=new A.cw(A.N(i,i),A.N(i,i),o,A.i([],q),"CandleChartsView")
m.G(A.a("CandleChartsView","className"))
m.L("CandleChartsView")
l=o.style
l.width="100%"
l=o.style
l.height="100%"
m.dx="candle_charts"
m.dy="Candle Charts"
m.sT(!0)
o=o.style
o.padding="1px"
m.sU(!0)
m.sD("1px")
m.sak(!0)
o=A.ax()
B.f.sB(o.dy.e,"Binance chart")
l=o.e
k=l.style
k.width="100%"
l=l.style
l.height="300px"
l=A.d8()
l.x=!0
k=l.e
j=k.style
j.toString
B.c.w(j,B.c.v(j,"word-break"),"break-all","")
l.b=!0
j=k.style
j.toString
B.c.w(j,B.c.v(j,"flex-wrap"),"wrap","")
B.f.sB(k,"Candle data in Binance API format")
k=A.k7()
j=k.e
B.Q.sa4(j,u.k)
j=j.style
j.width="100%"
k.sT(!0)
h=h.createElement("div")
h.toString
q=new A.cv(o,l,k,A.N(i,i),A.N(i,i),h,A.i([],q),"BinanceChartView")
q.G(A.a("BinanceChartView","className"))
q.L("BinanceChartView")
i=h.style
i.width="100%"
i=h.style
i.height="100%"
q.dx="binance_chart"
q.dy="Binance Chart"
q.sT(!0)
i=h.style
i.padding="1px"
q.sU(!0)
q.sD("1px")
q.sak(!0)
B.a.I(t.f2.a(A.i([p,n,m,q],t.m)),g.gd7())
g.d_(p)
return A.e_(null,r)}})
return A.e0($async$hQ,r)}},J={
hR(a,b,c,d){return{i:a,p:b,e:c,x:d}},
h0(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.hP==null){A.lo()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.b(A.io("Return interceptor for "+A.n(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.fE
if(o==null)o=$.fE=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.lu(a)
if(p!=null)return p
if(typeof a=="function")return B.K
s=Object.getPrototypeOf(a)
if(s==null)return B.w
if(s===Object.prototype)return B.w
if(typeof q=="function"){o=$.fE
if(o==null)o=$.fE=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.p,enumerable:false,writable:true,configurable:true})
return B.p}return B.p},
jO(a,b){if(a<0||a>4294967295)throw A.b(A.aC(a,0,4294967295,"length",null))
return J.jP(new Array(a),b)},
i8(a,b){if(a<0)throw A.b(A.al("Length must be a non-negative integer: "+a,null))
return A.i(new Array(a),b.h("y<0>"))},
jP(a,b){return J.hk(A.i(a,b.h("y<0>")),b)},
hk(a,b){a.fixed$length=Array
return a},
i9(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
jQ(a,b){var s,r
for(s=a.length;b<s;){r=B.b.M(a,b)
if(r!==32&&r!==13&&!J.i9(r))break;++b}return b},
jR(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.b.a6(a,s)
if(r!==32&&r!==13&&!J.i9(r))break}return b},
bx(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bJ.prototype
return J.cP.prototype}if(typeof a=="string")return J.aM.prototype
if(a==null)return J.bK.prototype
if(typeof a=="boolean")return J.cO.prototype
if(a.constructor==Array)return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof A.t)return a
return J.h0(a)},
R(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(a.constructor==Array)return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof A.t)return a
return J.h0(a)},
cs(a){if(a==null)return a
if(a.constructor==Array)return J.y.prototype
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof A.t)return a
return J.h0(a)},
iW(a){if(typeof a=="string")return J.aM.prototype
if(a==null)return a
if(!(a instanceof A.t))return J.bh.prototype
return a},
e6(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.ao.prototype
return a}if(a instanceof A.t)return a
return J.h0(a)},
hc(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.bx(a).F(a,b)},
hU(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.ls(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.R(a).j(a,b)},
hV(a,b,c){return J.cs(a).K(a,b,c)},
jt(a,b,c,d){return J.e6(a).c8(a,b,c,d)},
hW(a){return J.e6(a).bn(a)},
hd(a,b){return J.cs(a).A(a,b)},
hX(a,b){return J.cs(a).I(a,b)},
hY(a){return J.e6(a).gbz(a)},
ju(a){return J.e6(a).gcT(a)},
jv(a){return J.cs(a).gX(a)},
a6(a){return J.bx(a).gu(a)},
jw(a){return J.R(a).gE(a)},
hZ(a){return J.R(a).ga8(a)},
a8(a){return J.cs(a).gt(a)},
aj(a){return J.R(a).gk(a)},
he(a,b,c){return J.cs(a).az(a,b,c)},
jx(a,b){return J.iW(a).bV(a,b)},
aY(a){return J.bx(a).i(a)},
jy(a){return J.iW(a).bR(a)},
bI:function bI(){},
cO:function cO(){},
bK:function bK(){},
T:function T(){},
aN:function aN(){},
d4:function d4(){},
bh:function bh(){},
ao:function ao(){},
y:function y(a){this.$ti=a},
eE:function eE(a){this.$ti=a},
a9:function a9(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
bL:function bL(){},
bJ:function bJ(){},
cP:function cP(){},
aM:function aM(){}},B={}
var w=[A,J,B]
hunkHelpers.setFunctionNamesIfNecessary(w)
var $={}
A.hl.prototype={}
J.bI.prototype={
F(a,b){return a===b},
gu(a){return A.bV(a)},
i(a){return"Instance of '"+A.f0(a)+"'"}}
J.cO.prototype={
i(a){return String(a)},
gu(a){return a?519018:218159},
$ia5:1}
J.bK.prototype={
F(a,b){return null==b},
i(a){return"null"},
gu(a){return 0},
$iI:1}
J.T.prototype={}
J.aN.prototype={
gu(a){return 0},
i(a){return String(a)}}
J.d4.prototype={}
J.bh.prototype={}
J.ao.prototype={
i(a){var s=a[$.j9()]
if(s==null)return this.bZ(a)
return"JavaScript function for "+J.aY(s)},
$ian:1}
J.y.prototype={
l(a,b){A.G(a).c.a(b)
if(!!a.fixed$length)A.af(A.as("add"))
a.push(b)},
a1(a,b){A.G(a).h("j<1>").a(b)
if(!!a.fixed$length)A.af(A.as("addAll"))
this.c7(a,b)
return},
c7(a,b){var s,r
t.b.a(b)
s=b.length
if(s===0)return
if(a===b)throw A.b(A.ah(a))
for(r=0;r<s;++r)a.push(b[r])},
I(a,b){var s,r
A.G(a).h("~(1)").a(b)
s=a.length
for(r=0;r<s;++r){b.$1(a[r])
if(a.length!==s)throw A.b(A.ah(a))}},
az(a,b,c){var s=A.G(a)
return new A.C(a,s.p(c).h("1(2)").a(b),s.h("@<1>").p(c).h("C<1,2>"))},
b0(a,b){var s,r=A.ia(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.K(r,s,A.n(a[s]))
return r.join(b)},
cW(a,b,c,d){var s,r,q
d.a(b)
A.G(a).p(d).h("1(1,2)").a(c)
s=a.length
for(r=b,q=0;q<s;++q){r=c.$2(r,a[q])
if(a.length!==s)throw A.b(A.ah(a))}return r},
A(a,b){if(!(b>=0&&b<a.length))return A.k(a,b)
return a[b]},
bd(a,b){var s
if(b<0||b>a.length)throw A.b(A.aC(b,0,a.length,"start",null))
s=a.length
if(b===s)return A.i([],A.G(a))
return A.i(a.slice(b,s),A.G(a))},
gX(a){if(a.length>0)return a[0]
throw A.b(A.hj())},
gb1(a){var s=a.length
if(s>0)return a[s-1]
throw A.b(A.hj())},
a7(a,b){var s
for(s=0;s<a.length;++s)if(J.hc(a[s],b))return!0
return!1},
gE(a){return a.length===0},
ga8(a){return a.length!==0},
i(a){return A.hi(a,"[","]")},
gt(a){return new J.a9(a,a.length,A.G(a).h("a9<1>"))},
gu(a){return A.bV(a)},
gk(a){return a.length},
sk(a,b){if(!!a.fixed$length)A.af(A.as("set length"))
if(b>a.length)A.G(a).c.a(null)
a.length=b},
j(a,b){if(!(b>=0&&b<a.length))throw A.b(A.aX(a,b))
return a[b]},
K(a,b,c){var s
A.G(a).c.a(c)
if(!!a.immutable$list)A.af(A.as("indexed set"))
s=a.length
if(b>=s)throw A.b(A.aX(a,b))
a[b]=c},
$io:1,
$ij:1,
$iq:1}
J.eE.prototype={}
J.a9.prototype={
gn(){return this.$ti.c.a(this.d)},
m(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.b(A.e8(q))
s=r.c
if(s>=p){r.sbq(null)
return!1}r.sbq(q[s]);++r.c
return!0},
sbq(a){this.d=this.$ti.h("1?").a(a)},
$iK:1}
J.bL.prototype={
aD(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.b(A.as(""+a+".toInt()"))},
ai(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.b(A.as(""+a+".round()"))},
i(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gu(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
H(a,b){return(a|0)===a?a/b|0:this.cC(a,b)},
cC(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.b(A.as("Result of truncating division is "+A.n(s)+": "+A.n(a)+" ~/ "+b))},
aT(a,b){var s
if(a>0)s=this.cz(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cz(a,b){return b>31?0:a>>>b},
$iH:1,
$ia_:1}
J.bJ.prototype={$iu:1}
J.cP.prototype={}
J.aM.prototype={
a6(a,b){if(b<0)throw A.b(A.aX(a,b))
if(b>=a.length)A.af(A.aX(a,b))
return a.charCodeAt(b)},
M(a,b){if(b>=a.length)throw A.b(A.aX(a,b))
return a.charCodeAt(b)},
bT(a,b){return a+b},
a3(a,b){var s=b.length,r=a.length
if(s>r)return!1
return b===this.be(a,r-s)},
bO(a,b,c){return A.lB(a,b,c,0)},
bV(a,b){var s=A.i(a.split(b),t.s)
return s},
bW(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
W(a,b,c){return a.substring(b,A.d5(b,c,a.length))},
be(a,b){return this.W(a,b,null)},
bR(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.M(p,0)===133){s=J.jQ(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.a6(p,r)===133?J.jR(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
b9(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.b(B.D)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
R(a,b,c){var s=b-a.length
if(s<=0)return a
return this.b9(c,s)+a},
b_(a,b){var s=a.indexOf(b,0)
return s},
av(a,b,c){var s=a.length
if(c>s)throw A.b(A.aC(c,0,s,null,null))
return A.lA(a,b,c)},
a7(a,b){return this.av(a,b,0)},
i(a){return a},
gu(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gk(a){return a.length},
j(a,b){if(b>=a.length)throw A.b(A.aX(a,b))
return a[b]},
$ieY:1,
$ie:1}
A.b9.prototype={
i(a){var s="LateInitializationError: "+this.a
return s}}
A.cC.prototype={
gk(a){return this.a.length},
j(a,b){return B.b.a6(this.a,b)}}
A.f5.prototype={}
A.o.prototype={}
A.A.prototype={
gt(a){var s=this
return new A.O(s,s.gk(s),A.m(s).h("O<A.E>"))},
gE(a){return this.gk(this)===0},
az(a,b,c){var s=A.m(this)
return new A.C(this,s.p(c).h("1(A.E)").a(b),s.h("@<A.E>").p(c).h("C<1,2>"))},
aC(a,b){var s,r,q,p=this
A.m(p).h("A.E(A.E,A.E)").a(b)
s=p.gk(p)
if(s===0)throw A.b(A.hj())
r=p.A(0,0)
for(q=1;q<s;++q){r=b.$2(r,p.A(0,q))
if(s!==p.gk(p))throw A.b(A.ah(p))}return r}}
A.O.prototype={
gn(){return this.$ti.c.a(this.d)},
m(){var s,r=this,q=r.a,p=J.R(q),o=p.gk(q)
if(r.b!==o)throw A.b(A.ah(q))
s=r.c
if(s>=o){r.saa(null)
return!1}r.saa(p.A(q,s));++r.c
return!0},
saa(a){this.d=this.$ti.h("1?").a(a)},
$iK:1}
A.ap.prototype={
gt(a){var s=A.m(this)
return new A.bR(J.a8(this.a),this.b,s.h("@<1>").p(s.Q[1]).h("bR<1,2>"))},
gk(a){return J.aj(this.a)},
gE(a){return J.jw(this.a)},
A(a,b){return this.b.$1(J.hd(this.a,b))}}
A.bC.prototype={$io:1}
A.bR.prototype={
m(){var s=this,r=s.b
if(r.m()){s.saa(s.c.$1(r.gn()))
return!0}s.saa(null)
return!1},
gn(){return this.$ti.Q[1].a(this.a)},
saa(a){this.a=this.$ti.h("2?").a(a)}}
A.C.prototype={
gk(a){return J.aj(this.a)},
A(a,b){return this.b.$1(J.hd(this.a,b))}}
A.aS.prototype={
gt(a){return new A.c2(J.a8(this.a),this.b,this.$ti.h("c2<1>"))}}
A.c2.prototype={
m(){var s,r
for(s=this.a,r=this.b;s.m();)if(A.e4(r.$1(s.gn())))return!0
return!1},
gn(){return this.a.gn()}}
A.bF.prototype={}
A.bj.prototype={}
A.bi.prototype={}
A.be.prototype={
gk(a){return J.aj(this.a)},
A(a,b){var s=this.a,r=J.R(s)
return r.A(s,r.gk(s)-1-b)}}
A.bH.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.bH&&this.a.F(0,b.a)&&A.h1(this)===A.h1(b)},
gu(a){return A.hn(this.a,A.h1(this),B.m,B.m)},
i(a){var s="<"+B.a.b0([A.hN(this.$ti.c)],", ")+">"
return this.a.i(0)+" with "+s}}
A.b8.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.Q[0])},
$S(){return A.lq(A.hM(this.a),this.$ti)}}
A.fd.prototype={
P(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
if(p==null)return null
s=Object.create(null)
r=q.b
if(r!==-1)s.arguments=p[r+1]
r=q.c
if(r!==-1)s.argumentsExpr=p[r+1]
r=q.d
if(r!==-1)s.expr=p[r+1]
r=q.e
if(r!==-1)s.method=p[r+1]
r=q.f
if(r!==-1)s.receiver=p[r+1]
return s}}
A.bU.prototype={
i(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.cR.prototype={
i(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.dk.prototype={
i(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.eW.prototype={
i(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bD.prototype={}
A.cj.prototype={
i(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iac:1}
A.M.prototype={
i(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.j7(r==null?"unknown":r)+"'"},
$ian:1,
gdh(){return this},
$C:"$1",
$R:1,
$D:null}
A.cA.prototype={$C:"$0",$R:0}
A.cB.prototype={$C:"$2",$R:2}
A.dh.prototype={}
A.de.prototype={
i(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.j7(s)+"'"}}
A.b_.prototype={
F(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.b_))return!1
return this.$_target===b.$_target&&this.a===b.a},
gu(a){return(A.j0(this.a)^A.bV(this.$_target))>>>0},
i(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.f0(t.K.a(this.a))+"'")}}
A.d6.prototype={
i(a){return"RuntimeError: "+this.a}}
A.dq.prototype={
i(a){return"Assertion failed: "+A.cJ(this.a)}}
A.bM.prototype={
gk(a){return this.a},
ga8(a){return this.a!==0},
gY(a){return new A.aO(this,A.m(this).h("aO<1>"))},
aW(a,b){var s=this.b
if(s==null)return!1
return this.ci(s,b)},
j(a,b){var s,r,q,p,o=this,n=null
if(typeof b=="string"){s=o.b
if(s==null)return n
r=o.aq(s,b)
q=r==null?n:r.b
return q}else if(typeof b=="number"&&(b&0x3ffffff)===b){p=o.c
if(p==null)return n
r=o.aq(p,b)
q=r==null?n:r.b
return q}else return o.d1(b)},
d1(a){var s,r,q=this.d
if(q==null)return null
s=this.bs(q,J.a6(a)&0x3ffffff)
r=this.bH(s,a)
if(r<0)return null
return s[r].b},
K(a,b,c){var s,r,q,p,o,n,m=this,l=A.m(m)
l.c.a(b)
l.Q[1].a(c)
if(typeof b=="string"){s=m.b
m.bh(s==null?m.b=m.aM():s,b,c)}else if(typeof b=="number"&&(b&0x3ffffff)===b){r=m.c
m.bh(r==null?m.c=m.aM():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.aM()
p=J.a6(b)&0x3ffffff
o=m.bs(q,p)
if(o==null)m.aS(q,p,[m.aE(b,c)])
else{n=m.bH(o,b)
if(n>=0)o[n].b=c
else o.push(m.aE(b,c))}}},
I(a,b){var s,r,q=this
A.m(q).h("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.b(A.ah(q))
s=s.c}},
bh(a,b,c){var s,r=this,q=A.m(r)
q.c.a(b)
q.Q[1].a(c)
s=r.aq(a,b)
if(s==null)r.aS(a,b,r.aE(b,c))
else s.b=c},
aE(a,b){var s=this,r=A.m(s),q=new A.eK(r.c.a(a),r.Q[1].a(b))
if(s.e==null)s.e=s.f=q
else s.f=s.f.c=q;++s.a
s.r=s.r+1&67108863
return q},
bH(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.hc(a[r].a,b))return r
return-1},
i(a){return A.ib(this)},
aq(a,b){return a[b]},
bs(a,b){return a[b]},
aS(a,b,c){a[b]=c},
cj(a,b){delete a[b]},
ci(a,b){return this.aq(a,b)!=null},
aM(){var s="<non-identifier-key>",r=Object.create(null)
this.aS(r,s,r)
this.cj(r,s)
return r}}
A.eK.prototype={}
A.aO.prototype={
gk(a){return this.a.a},
gE(a){return this.a.a===0},
gt(a){var s=this.a,r=new A.bN(s,s.r,this.$ti.h("bN<1>"))
r.c=s.e
return r}}
A.bN.prototype={
gn(){return this.d},
m(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.b(A.ah(q))
s=r.c
if(s==null){r.sbi(null)
return!1}else{r.sbi(s.a)
r.c=s.c
return!0}},
sbi(a){this.d=this.$ti.h("1?").a(a)},
$iK:1}
A.h2.prototype={
$1(a){return this.a(a)},
$S:24}
A.h3.prototype={
$2(a,b){return this.a(a,b)},
$S:39}
A.h4.prototype={
$1(a){return this.a(A.r(a))},
$S:27}
A.cQ.prototype={
i(a){return"RegExp/"+this.a+"/"+this.b.flags},
cV(a){var s=this.b.exec(a)
if(s==null)return null
return new A.dG(s)},
$ieY:1}
A.dG.prototype={
j(a,b){var s=this.b
if(!(b<s.length))return A.k(s,b)
return s[b]},
$ieT:1}
A.dg.prototype={
j(a,b){if(b!==0)A.af(A.hu(b,null))
return this.c},
$ieT:1}
A.fI.prototype={
m(){var s,r,q=this,p=q.c,o=q.b,n=o.length,m=q.a,l=m.length
if(p+n>l){q.d=null
return!1}s=m.indexOf(o,p)
if(s<0){q.c=l+1
q.d=null
return!1}r=s+n
q.d=new A.dg(s,o)
q.c=r===q.c?r+1:r
return!0},
gn(){var s=this.d
s.toString
return s},
$iK:1}
A.fp.prototype={}
A.cZ.prototype={}
A.bd.prototype={
gk(a){return a.length},
$iai:1}
A.bS.prototype={$io:1,$ij:1,$iq:1}
A.d_.prototype={
gk(a){return a.length},
j(a,b){A.kI(b,a,a.length)
return a[b]},
$ik9:1}
A.ce.prototype={}
A.cf.prototype={}
A.ab.prototype={
h(a){return A.fL(v.typeUniverse,this,a)},
p(a){return A.ky(v.typeUniverse,this,a)}}
A.dA.prototype={}
A.dU.prototype={
i(a){return A.Q(this.a,null)}}
A.dz.prototype={
i(a){return this.a}}
A.ck.prototype={$iaF:1}
A.fl.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:14}
A.fk.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:31}
A.fm.prototype={
$0(){this.a.$0()},
$S:16}
A.fn.prototype={
$0(){this.a.$0()},
$S:16}
A.fJ.prototype={
c5(a,b){if(self.setTimeout!=null)self.setTimeout(A.e5(new A.fK(this,b),0),a)
else throw A.b(A.as("`setTimeout()` not found."))}}
A.fK.prototype={
$0(){this.b.$0()},
$S:0}
A.dr.prototype={}
A.fP.prototype={
$1(a){return this.a.$2(0,a)},
$S:18}
A.fQ.prototype={
$2(a,b){this.a.$2(1,new A.bD(a,t.l.a(b)))},
$S:19}
A.fW.prototype={
$2(a,b){this.a(A.a7(a),b)},
$S:20}
A.bz.prototype={
i(a){return A.n(this.a)},
$ix:1,
gam(){return this.b}}
A.a3.prototype={}
A.ae.prototype={
aO(){},
aP(){},
sac(a){this.dy=this.$ti.h("ae<1>?").a(a)},
sar(a){this.fr=this.$ti.h("ae<1>?").a(a)}}
A.c4.prototype={
gbv(){return this.c<4},
cr(a){var s,r
A.m(this).h("ae<1>").a(a)
s=a.fr
r=a.dy
if(s==null)this.sbr(r)
else s.sac(r)
if(r==null)this.sbu(s)
else r.sar(s)
a.sar(a)
a.sac(a)},
cA(a,b,c,d){var s,r,q,p,o,n=this,m=A.m(n)
m.h("~(1)?").a(a)
t.Z.a(c)
if((n.c&4)!==0){m=new A.bo($.v,c,m.h("bo<1>"))
m.cs()
return m}s=$.v
r=d?1:0
t.a7.p(m.c).h("1(2)").a(a)
A.kg(s,b)
q=c==null?A.lf():c
m=m.h("ae<1>")
p=new A.ae(n,a,t.M.a(q),s,r,m)
p.sar(p)
p.sac(p)
m.a(p)
p.dx=n.c&1
o=n.e
n.sbu(p)
p.sac(null)
p.sar(o)
if(o==null)n.sbr(p)
else o.sac(p)
if(n.d==n.e)A.iP(n.a)
return p},
cq(a){var s=this,r=A.m(s)
a=r.h("ae<1>").a(r.h("X<1>").a(a))
if(a.dy===a)return null
r=a.dx
if((r&2)!==0)a.dx=r|4
else{s.cr(a)
if((s.c&2)===0&&s.d==null)s.cb()}return null},
bj(){if((this.c&4)!==0)return new A.aR("Cannot add new events after calling close")
return new A.aR("Cannot add new events while doing an addStream")},
l(a,b){var s=this
A.m(s).c.a(b)
if(!s.gbv())throw A.b(s.bj())
s.aR(b)},
cM(a){var s,r,q=this
if((q.c&4)!==0){s=q.r
s.toString
return s}if(!q.gbv())throw A.b(q.bj())
q.c|=4
r=q.r
if(r==null)r=q.r=new A.D($.v,t.cd)
q.ad()
return r},
cb(){if((this.c&4)!==0){var s=this.r
if((s.a&30)===0)s.aF(null)}A.iP(this.b)},
sbr(a){this.d=A.m(this).h("ae<1>?").a(a)},
sbu(a){this.e=A.m(this).h("ae<1>?").a(a)},
$ihw:1,
$iix:1,
$iaG:1}
A.c3.prototype={
aR(a){var s,r=this.$ti
r.c.a(a)
for(s=this.d,r=r.h("c6<1>");s!=null;s=s.dy)s.bl(new A.c6(a,r))},
ad(){var s=this.d
if(s!=null)for(;s!=null;s=s.dy)s.bl(B.F)
else this.r.aF(null)}}
A.eD.prototype={
$0(){this.b.bp(this.c.a(null))},
$S:0}
A.at.prototype={
d2(a){if((this.c&15)!==6)return!0
return this.b.b.b6(t.al.a(this.d),a.a,t.y,t.K)},
cZ(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.de(q,m,a.b,o,n,t.l)
else p=l.b6(t.v.a(q),m,o,n)
try{o=r.$ti.h("2/").a(p)
return o}catch(s){if(t.eK.b(A.aw(s))){if((r.c&1)!==0)throw A.b(A.al("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.b(A.al("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.D.prototype={
b7(a,b,c){var s,r,q,p=this.$ti
p.p(c).h("1/(2)").a(a)
s=$.v
if(s===B.h){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.b(A.hf(b,"onError",u.c))}else{c.h("@<0/>").p(p.c).h("1(2)").a(a)
if(b!=null)b=A.iM(b,s)}r=new A.D(s,c.h("D<0>"))
q=b==null?1:3
this.ap(new A.at(r,q,a,b,p.h("@<1>").p(c).h("at<1,2>")))
return r},
J(a,b){return this.b7(a,null,b)},
by(a,b,c){var s,r=this.$ti
r.p(c).h("1/(2)").a(a)
s=new A.D($.v,c.h("D<0>"))
this.ap(new A.at(s,19,a,b,r.h("@<1>").p(c).h("at<1,2>")))
return s},
cu(a){this.a=this.a&1|16
this.c=a},
aG(a){this.a=a.a&30|this.a&1
this.c=a.c},
ap(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.ap(a)
return}r.aG(s)}A.aW(null,null,r.b,t.M.a(new A.fs(r,a)))}},
bx(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.bx(a)
return}m.aG(n)}l.a=m.at(a)
A.aW(null,null,m.b,t.M.a(new A.fz(l,m)))}},
as(){var s=t.F.a(this.c)
this.c=null
return this.at(s)},
at(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
cd(a){var s,r,q,p=this
p.a^=2
try{a.b7(new A.fv(p),new A.fw(p),t.P)}catch(q){s=A.aw(q)
r=A.aJ(q)
A.j6(new A.fx(p,s,r))}},
bp(a){var s,r=this,q=r.$ti
q.h("1/").a(a)
s=r.as()
q.c.a(a)
r.a=8
r.c=a
A.bq(r,s)},
aH(a){var s,r=this
r.$ti.c.a(a)
s=r.as()
r.a=8
r.c=a
A.bq(r,s)},
a5(a,b){var s
t.K.a(a)
t.l.a(b)
s=this.as()
this.cu(A.eb(a,b))
A.bq(this,s)},
aF(a){var s=this.$ti
s.h("1/").a(a)
if(s.h("ay<1>").b(a)){this.bm(a)
return}this.ca(s.c.a(a))},
ca(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.aW(null,null,s.b,t.M.a(new A.fu(s,a)))},
bm(a){var s=this,r=s.$ti
r.h("ay<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.aW(null,null,s.b,t.M.a(new A.fy(s,a)))}else A.hz(a,s)
return}s.cd(a)},
c9(a,b){this.a^=2
A.aW(null,null,this.b,t.M.a(new A.ft(this,a,b)))},
$iay:1}
A.fs.prototype={
$0(){A.bq(this.a,this.b)},
$S:0}
A.fz.prototype={
$0(){A.bq(this.b,this.a.a)},
$S:0}
A.fv.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.aH(p.$ti.c.a(a))}catch(q){s=A.aw(q)
r=A.aJ(q)
p.a5(s,r)}},
$S:14}
A.fw.prototype={
$2(a,b){this.a.a5(t.K.a(a),t.l.a(b))},
$S:21}
A.fx.prototype={
$0(){this.a.a5(this.b,this.c)},
$S:0}
A.fu.prototype={
$0(){this.a.aH(this.b)},
$S:0}
A.fy.prototype={
$0(){A.hz(this.b,this.a)},
$S:0}
A.ft.prototype={
$0(){this.a.a5(this.b,this.c)},
$S:0}
A.fC.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.dd(t.fO.a(q.d),t.z)}catch(p){s=A.aw(p)
r=A.aJ(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.eb(s,r)
o.b=!0
return}if(l instanceof A.D&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.g.b(l)){n=m.b.a
q=m.a
q.c=l.J(new A.fD(n),t.z)
q.b=!1}},
$S:0}
A.fD.prototype={
$1(a){return this.a},
$S:22}
A.fB.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.b6(o.h("2/(1)").a(p.d),m,o.h("2/"),n)}catch(l){s=A.aw(l)
r=A.aJ(l)
q=this.a
q.c=A.eb(s,r)
q.b=!0}},
$S:0}
A.fA.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.d2(s)&&p.a.e!=null){p.c=p.a.cZ(s)
p.b=!1}}catch(o){r=A.aw(o)
q=A.aJ(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.eb(r,q)
n.b=!0}},
$S:0}
A.ds.prototype={}
A.aD.prototype={
gk(a){var s={},r=new A.D($.v,t.fJ)
s.a=0
this.b2(new A.f7(s,this),!0,new A.f8(s,r),r.gcf())
return r}}
A.f7.prototype={
$1(a){A.m(this.b).c.a(a);++this.a.a},
$S(){return A.m(this.b).h("~(1)")}}
A.f8.prototype={
$0(){this.b.bp(this.a.a)},
$S:0}
A.X.prototype={}
A.df.prototype={}
A.bn.prototype={
gu(a){return(A.bV(this.a)^892482866)>>>0},
F(a,b){if(b==null)return!1
if(this===b)return!0
return b instanceof A.bn&&b.a===this.a}}
A.c5.prototype={
bw(){return this.x.cq(this)},
aO(){A.m(this.x).h("X<1>").a(this)},
aP(){A.m(this.x).h("X<1>").a(this)}}
A.hC.prototype={}
A.bm.prototype={
cc(){var s,r=this,q=r.e|=8
if((q&64)!==0){s=r.r
if(s.a===1)s.a=3}if((q&32)===0)r.saQ(null)
r.f=r.bw()},
aO(){},
aP(){},
bw(){return null},
bl(a){var s,r=this,q=A.m(r),p=q.h("bs<1>?").a(r.r)
if(p==null)p=new A.bs(q.h("bs<1>"))
r.saQ(p)
s=p.c
if(s==null)p.b=p.c=a
else{s.sag(a)
p.c=a}q=r.e
if((q&64)===0){q|=64
r.e=q
if(q<128)p.ba(r)}},
aR(a){var s,r=this,q=A.m(r).c
q.a(a)
s=r.e
r.e=s|32
r.d.bP(r.a,a,q)
r.e&=4294967263
r.ce((s&4)!==0)},
ad(){this.cc()
this.e|=16
new A.fo(this).$0()},
ce(a){var s,r,q=this,p=q.e
if((p&64)!==0&&q.r.c==null){p=q.e=p&4294967231
if((p&4)!==0)if(p<128){s=q.r
s=s==null?null:s.c==null
s=s!==!1}else s=!1
else s=!1
if(s){p&=4294967291
q.e=p}}for(;!0;a=r){if((p&8)!==0){q.saQ(null)
return}r=(p&4)!==0
if(a===r)break
q.e=p^32
if(r)q.aO()
else q.aP()
p=q.e&=4294967263}if((p&64)!==0&&p<128)q.r.ba(q)},
saQ(a){this.r=A.m(this).h("cg<1>?").a(a)},
$iX:1,
$iaG:1}
A.fo.prototype={
$0(){var s=this.a,r=s.e
if((r&16)===0)return
s.e=r|42
s.d.b5(s.c)
s.e&=4294967263},
$S:0}
A.br.prototype={
b2(a,b,c,d){var s=this.$ti
s.h("~(1)?").a(a)
t.Z.a(c)
return this.a.cA(s.h("~(1)?").a(a),d,c,b===!0)},
af(a){return this.b2(a,null,null,null)}}
A.aT.prototype={
sag(a){this.a=t.ev.a(a)},
gag(){return this.a}}
A.c6.prototype={
bK(a){this.$ti.h("aG<1>").a(a).aR(this.b)}}
A.dx.prototype={
bK(a){a.ad()},
gag(){return null},
sag(a){throw A.b(A.ij("No events after a done."))},
$iaT:1}
A.cg.prototype={
ba(a){var s,r=this
r.$ti.h("aG<1>").a(a)
s=r.a
if(s===1)return
if(s>=1){r.a=1
return}A.j6(new A.fF(r,a))
r.a=1}}
A.fF.prototype={
$0(){var s,r,q,p=this.a,o=p.a
p.a=0
if(o===3)return
s=p.$ti.h("aG<1>").a(this.b)
r=p.b
q=r.gag()
p.b=q
if(q==null)p.c=null
r.bK(s)},
$S:0}
A.bs.prototype={}
A.bo.prototype={
cs(){var s=this
if((s.b&2)!==0)return
A.aW(null,null,s.a,t.M.a(s.gct()))
s.b|=2},
ad(){var s,r=this,q=r.b&=4294967293
if(q>=4)return
r.b=q|1
s=r.c
if(s!=null)r.a.b5(s)},
$iX:1}
A.dQ.prototype={}
A.cn.prototype={$iis:1}
A.fV.prototype={
$0(){var s=this.a,r=this.b
A.bw(s,"error",t.K)
A.bw(r,"stackTrace",t.l)
A.jL(s,r)},
$S:0}
A.dJ.prototype={
b5(a){var s,r,q
t.M.a(a)
try{if(B.h===$.v){a.$0()
return}A.iN(null,null,this,a,t.H)}catch(q){s=A.aw(q)
r=A.aJ(q)
A.e2(t.K.a(s),t.l.a(r))}},
bP(a,b,c){var s,r,q
c.h("~(0)").a(a)
c.a(b)
try{if(B.h===$.v){a.$1(b)
return}A.iO(null,null,this,a,b,t.H,c)}catch(q){s=A.aw(q)
r=A.aJ(q)
A.e2(t.K.a(s),t.l.a(r))}},
aV(a){return new A.fG(this,t.M.a(a))},
cK(a,b){return new A.fH(this,b.h("~(0)").a(a),b)},
j(a,b){return null},
dd(a,b){b.h("0()").a(a)
if($.v===B.h)return a.$0()
return A.iN(null,null,this,a,b)},
b6(a,b,c,d){c.h("@<0>").p(d).h("1(2)").a(a)
d.a(b)
if($.v===B.h)return a.$1(b)
return A.iO(null,null,this,a,b,c,d)},
de(a,b,c,d,e,f){d.h("@<0>").p(e).p(f).h("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.v===B.h)return a.$2(b,c)
return A.l2(null,null,this,a,b,c,d,e,f)},
b4(a,b,c,d){return b.h("@<0>").p(c).p(d).h("1(2,3)").a(a)}}
A.fG.prototype={
$0(){return this.a.b5(this.b)},
$S:0}
A.fH.prototype={
$1(a){var s=this.c
return this.a.bP(this.b,s.a(a),s)},
$S(){return this.c.h("~(0)")}}
A.cb.prototype={
gt(a){var s=this,r=new A.aV(s,s.r,A.m(s).h("aV<1>"))
r.c=s.e
return r},
gk(a){return this.a},
gE(a){return this.a===0},
l(a,b){var s,r,q=this
A.m(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bk(s==null?q.b=A.hA():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bk(r==null?q.c=A.hA():r,b)}else return q.c6(b)},
c6(a){var s,r,q,p=this
A.m(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.hA()
r=p.cg(a)
q=s[r]
if(q==null)s[r]=[p.aN(a)]
else{if(p.cl(q,a)>=0)return!1
q.push(p.aN(a))}return!0},
bk(a,b){A.m(this).c.a(b)
if(t.br.a(a[b])!=null)return!1
a[b]=this.aN(b)
return!0},
cn(){this.r=this.r+1&1073741823},
aN(a){var s,r=this,q=new A.dF(A.m(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cn()
return q},
cg(a){return J.a6(a)&1073741823},
cl(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.hc(a[r].a,b))return r
return-1}}
A.dF.prototype={}
A.aV.prototype={
gn(){return this.$ti.c.a(this.d)},
m(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.b(A.ah(q))
else if(r==null){s.sbo(null)
return!1}else{s.sbo(s.$ti.h("1?").a(r.a))
s.c=r.b
return!0}},
sbo(a){this.d=this.$ti.h("1?").a(a)},
$iK:1}
A.bk.prototype={
gk(a){return this.a.length},
j(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.k(s,b)
return s[b]}}
A.bO.prototype={$io:1,$ij:1,$iq:1}
A.l.prototype={
gt(a){return new A.O(a,this.gk(a),A.L(a).h("O<l.E>"))},
A(a,b){return this.j(a,b)},
gE(a){return this.gk(a)===0},
bU(a,b,c){var s,r,q,p,o,n=A.L(a)
n.h("a5(l.E)").a(b)
n.h("l.E()?").a(c)
s=this.gk(a)
r=A.kh("match")
for(q=!1,p=0;p<s;++p){o=this.j(a,p)
if(A.e4(b.$1(o))){if(q)throw A.b(A.ij("Too many elements"))
r.b=o
q=!0}if(s!==this.gk(a))throw A.b(A.ah(a))}if(q){n=r.b
if(n===r)A.af(new A.b9("Local '"+r.a+"' has not been initialized."))
return n}return c.$0()},
az(a,b,c){var s=A.L(a)
return new A.C(a,s.p(c).h("1(l.E)").a(b),s.h("@<l.E>").p(c).h("C<1,2>"))},
bQ(a){var s,r,q,p,o=this
if(o.gE(a)){s=J.i8(0,A.L(a).h("l.E"))
return s}r=o.j(a,0)
q=A.ia(o.gk(a),r,!0,A.L(a).h("l.E"))
for(p=1;p<o.gk(a);++p)B.a.K(q,p,o.j(a,p))
return q},
i(a){return A.hi(a,"[","]")}}
A.bQ.prototype={}
A.eR.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.n(a)
r.a=s+": "
r.a+=A.n(b)},
$S:23}
A.z.prototype={
I(a,b){var s,r,q=A.L(a)
q.h("~(z.K,z.V)").a(b)
for(s=J.a8(this.gY(a)),q=q.h("z.V");s.m();){r=s.gn()
b.$2(r,q.a(this.j(a,r)))}},
gcT(a){return J.he(this.gY(a),new A.eS(a),A.L(a).h("bb<z.K,z.V>"))},
gk(a){return J.aj(this.gY(a))},
ga8(a){return J.hZ(this.gY(a))},
i(a){return A.ib(a)},
$iaa:1}
A.eS.prototype={
$1(a){var s,r=this.a,q=A.L(r)
q.h("z.K").a(a)
s=q.h("z.V")
return new A.bb(a,s.a(J.hU(r,a)),q.h("@<z.K>").p(s).h("bb<1,2>"))},
$S(){return A.L(this.a).h("bb<z.K,z.V>(z.K)")}}
A.aq.prototype={
gE(a){return this.gk(this)===0},
i(a){return A.hi(this,"{","}")},
b0(a,b){var s,r,q=this.gt(this)
if(!q.m())return""
s=q.$ti.c
if(b===""){r=""
do r+=A.n(s.a(q.d))
while(q.m())
s=r}else{r=""+A.n(s.a(q.d))
for(;q.m();)r=r+b+A.n(s.a(q.d))
s=r}return s.charCodeAt(0)==0?s:s},
A(a,b){var s,r,q,p,o="index"
A.bw(b,o,t.S)
A.id(b,o)
for(s=this.gt(this),r=s.$ti.c,q=0;s.m();){p=r.a(s.d)
if(b===q)return p;++q}throw A.b(A.bG(b,this,o,null,q))}}
A.bX.prototype={$io:1,$ij:1}
A.ch.prototype={$io:1,$ij:1}
A.cc.prototype={}
A.ci.prototype={}
A.co.prototype={}
A.dD.prototype={
j(a,b){var s,r=this.b
if(r==null)return this.c.j(0,b)
else if(typeof b!="string")return null
else{s=r[b]
return typeof s=="undefined"?this.cp(b):s}},
gk(a){return this.b==null?this.c.a:this.ab().length},
ga8(a){return this.gk(this)>0},
gY(a){var s
if(this.b==null){s=this.c
return new A.aO(s,A.m(s).h("aO<1>"))}return new A.dE(this)},
K(a,b,c){var s,r,q=this
if(q.b==null)q.c.K(0,b,c)
else if(q.aW(0,b)){s=q.b
s[b]=c
r=q.a
if(r==null?s!=null:r!==s)r[b]=null}else q.cD().K(0,b,c)},
aW(a,b){if(this.b==null)return this.c.aW(0,b)
return Object.prototype.hasOwnProperty.call(this.a,b)},
I(a,b){var s,r,q,p,o=this
t.cA.a(b)
if(o.b==null)return o.c.I(0,b)
s=o.ab()
for(r=0;r<s.length;++r){q=s[r]
p=o.b[q]
if(typeof p=="undefined"){p=A.fR(o.a[q])
o.b[q]=p}b.$2(q,p)
if(s!==o.c)throw A.b(A.ah(o))}},
ab(){var s=t.bM.a(this.c)
if(s==null)s=this.c=A.i(Object.keys(this.a),t.s)
return s},
cD(){var s,r,q,p,o,n=this
if(n.b==null)return n.c
s=A.N(t.N,t.z)
r=n.ab()
for(q=0;p=r.length,q<p;++q){o=r[q]
s.K(0,o,n.j(0,o))}if(p===0)B.a.l(r,"")
else B.a.sk(r,0)
n.a=n.b=null
return n.c=s},
cp(a){var s
if(!Object.prototype.hasOwnProperty.call(this.a,a))return null
s=A.fR(this.a[a])
return this.b[a]=s}}
A.dE.prototype={
gk(a){var s=this.a
return s.gk(s)},
A(a,b){var s=this.a
if(s.b==null)s=s.gY(s).A(0,b)
else{s=s.ab()
if(!(b>=0&&b<s.length))return A.k(s,b)
s=s[b]}return s},
gt(a){var s=this.a
if(s.b==null){s=s.gY(s)
s=s.gt(s)}else{s=s.ab()
s=new J.a9(s,s.length,A.G(s).h("a9<1>"))}return s}}
A.fh.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:true})
return s}catch(r){}return null},
$S:6}
A.fg.prototype={
$0(){var s,r
try{s=new TextDecoder("utf-8",{fatal:false})
return s}catch(r){}return null},
$S:6}
A.am.prototype={}
A.b2.prototype={}
A.cI.prototype={}
A.cS.prototype={
S(a,b){var s=A.l1(b,this.gcR().a)
return s},
gcR(){return B.M}}
A.cT.prototype={}
A.dm.prototype={
gcS(){return B.E}}
A.dp.prototype={
aX(a){var s,r,q,p=A.d5(0,null,a.length),o=p-0
if(o===0)return new Uint8Array(0)
s=o*3
r=new Uint8Array(s)
q=new A.fN(r)
if(q.ck(a,0,p)!==p){B.b.a6(a,p-1)
q.aU()}return new Uint8Array(r.subarray(0,A.kJ(0,q.b,s)))}}
A.fN.prototype={
aU(){var s=this,r=s.c,q=s.b,p=s.b=q+1,o=r.length
if(!(q<o))return A.k(r,q)
r[q]=239
q=s.b=p+1
if(!(p<o))return A.k(r,p)
r[p]=191
s.b=q+1
if(!(q<o))return A.k(r,q)
r[q]=189},
cE(a,b){var s,r,q,p,o,n=this
if((b&64512)===56320){s=65536+((a&1023)<<10)|b&1023
r=n.c
q=n.b
p=n.b=q+1
o=r.length
if(!(q<o))return A.k(r,q)
r[q]=s>>>18|240
q=n.b=p+1
if(!(p<o))return A.k(r,p)
r[p]=s>>>12&63|128
p=n.b=q+1
if(!(q<o))return A.k(r,q)
r[q]=s>>>6&63|128
n.b=p+1
if(!(p<o))return A.k(r,p)
r[p]=s&63|128
return!0}else{n.aU()
return!1}},
ck(a,b,c){var s,r,q,p,o,n,m,l=this
if(b!==c&&(B.b.a6(a,c-1)&64512)===55296)--c
for(s=l.c,r=s.length,q=b;q<c;++q){p=B.b.M(a,q)
if(p<=127){o=l.b
if(o>=r)break
l.b=o+1
s[o]=p}else{o=p&64512
if(o===55296){if(l.b+4>r)break
n=q+1
if(l.cE(p,B.b.M(a,n)))q=n}else if(o===56320){if(l.b+3>r)break
l.aU()}else if(p<=2047){o=l.b
m=o+1
if(m>=r)break
l.b=m
if(!(o<r))return A.k(s,o)
s[o]=p>>>6|192
l.b=m+1
s[m]=p&63|128}else{o=l.b
if(o+2>=r)break
m=l.b=o+1
if(!(o<r))return A.k(s,o)
s[o]=p>>>12|224
o=l.b=m+1
if(!(m<r))return A.k(s,m)
s[m]=p>>>6&63|128
l.b=o+1
if(!(o<r))return A.k(s,o)
s[o]=p&63|128}}}return q}}
A.dn.prototype={
aX(a){var s,r
t.L.a(a)
s=this.a
r=A.ka(s,a,0,null)
if(r!=null)return r
return new A.fM(s).cO(a,0,null,!0)}}
A.fM.prototype={
cO(a,b,c,d){var s,r,q,p,o,n=this
t.L.a(a)
s=A.d5(b,c,J.aj(a))
if(b===s)return""
r=A.kC(a,b,s)
q=n.aI(r,0,s-b,!0)
p=n.b
if((p&1)!==0){o=A.kD(p)
n.b=0
throw A.b(A.b6(o,a,b+n.c))}return q},
aI(a,b,c,d){var s,r,q=this
if(c-b>1000){s=B.e.H(b+c,2)
r=q.aI(a,b,s,!1)
if((q.b&1)!==0)return r
return r+q.aI(a,s,c,d)}return q.cQ(a,b,c,d)},
cQ(a,b,c,d){var s,r,q,p,o,n,m,l,k=this,j=65533,i=k.b,h=k.c,g=new A.c1(""),f=b+1,e=a.length
if(!(b>=0&&b<e))return A.k(a,b)
s=a[b]
$label0$0:for(r=k.a;!0;){for(;!0;f=o){q=B.b.M("AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAFFFFFFFFFFFFFFFFGGGGGGGGGGGGGGGGHHHHHHHHHHHHHHHHHHHHHHHHHHHIHHHJEEBBBBBBBBBBBBBBBBBBBBBBBBBBBBBBKCCCCCCCCCCCCDCLONNNMEEEEEEEEEEE",s)&31
h=i<=32?s&61694>>>q:(s&63|h<<6)>>>0
i=B.b.M(" \x000:XECCCCCN:lDb \x000:XECCCCCNvlDb \x000:XECCCCCN:lDb AAAAA\x00\x00\x00\x00\x00AAAAA00000AAAAA:::::AAAAAGG000AAAAA00KKKAAAAAG::::AAAAA:IIIIAAAAA000\x800AAAAA\x00\x00\x00\x00 AAAAA",i+q)
if(i===0){g.a+=A.aQ(h)
if(f===c)break $label0$0
break}else if((i&1)!==0){if(r)switch(i){case 69:case 67:g.a+=A.aQ(j)
break
case 65:g.a+=A.aQ(j);--f
break
default:p=g.a+=A.aQ(j)
g.a=p+A.aQ(j)
break}else{k.b=i
k.c=f-1
return""}i=0}if(f===c)break $label0$0
o=f+1
if(!(f>=0&&f<e))return A.k(a,f)
s=a[f]}o=f+1
if(!(f>=0&&f<e))return A.k(a,f)
s=a[f]
if(s<128){while(!0){if(!(o<c)){n=c
break}m=o+1
if(!(o>=0&&o<e))return A.k(a,o)
s=a[o]
if(s>=128){n=m-1
o=m
break}o=m}if(n-f<20)for(l=f;l<n;++l){if(!(l<e))return A.k(a,l)
g.a+=A.aQ(a[l])}else g.a+=A.k6(a,f,n)
if(n===c)break $label0$0
f=o}else f=o}if(d&&i>32)if(r)g.a+=A.aQ(j)
else{k.b=77
k.c=c
return""}k.b=i
k.c=h
e=g.a
return e.charCodeAt(0)==0?e:e}}
A.F.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.F&&this.a===b.a&&this.b===b.b},
a0(a,b){var s,r=this.a
if(Math.abs(r)<=864e13)s=!1
else s=!0
if(s)throw A.b(A.al("DateTime is outside valid range: "+r,null))
A.bw(this.b,"isUtc",t.y)},
gu(a){var s=this.a
return(s^B.e.aT(s,30))&1073741823},
i(a){var s=this,r=A.jI(A.ht(s)),q=A.cH(A.hr(s)),p=A.cH(A.hp(s)),o=A.cH(A.hq(s)),n=A.cH(A.f_(s)),m=A.cH(A.hs(s)),l=A.jJ(A.k_(s))
if(s.b)return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
else return r+"-"+q+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.ev.prototype={
$1(a){if(a==null)return 0
return A.e7(a)},
$S:8}
A.ew.prototype={
$1(a){var s,r,q
if(a==null)return 0
for(s=a.length,r=0,q=0;q<6;++q){r*=10
if(q<s)r+=B.b.M(a,q)^48}return r},
$S:8}
A.b5.prototype={
F(a,b){if(b==null)return!1
return b instanceof A.b5&&this.a===b.a},
gu(a){return B.e.gu(this.a)},
i(a){var s,r,q,p,o,n=this.a,m=B.e.H(n,36e8)
n%=36e8
if(n<0)n=-n
s=B.e.H(n,6e7)
n%=6e7
r=s<10?"0":""
q=B.e.H(n,1e6)
p=q<10?"0":""
o=B.b.R(B.e.i(n%1e6),6,"0")
return""+m+":"+r+s+":"+p+q+"."+o}}
A.x.prototype={
gam(){return A.aJ(this.$thrownJsError)}}
A.by.prototype={
i(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cJ(s)
return"Assertion failed"}}
A.aF.prototype={}
A.d0.prototype={
i(a){return"Throw of null."}}
A.ak.prototype={
gaK(){return"Invalid argument"+(!this.a?"(s)":"")},
gaJ(){return""},
i(a){var s,r,q=this,p=q.c,o=p==null?"":" ("+p+")",n=q.d,m=n==null?"":": "+n,l=q.gaK()+o+m
if(!q.a)return l
s=q.gaJ()
r=A.cJ(q.b)
return l+s+": "+r}}
A.bW.prototype={
gaK(){return"RangeError"},
gaJ(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.n(q):""
else if(q==null)s=": Not greater than or equal to "+A.n(r)
else if(q>r)s=": Not in inclusive range "+A.n(r)+".."+A.n(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.n(r)
return s}}
A.cN.prototype={
gaK(){return"RangeError"},
gaJ(){if(A.a7(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gk(a){return this.f}}
A.dl.prototype={
i(a){return"Unsupported operation: "+this.a}}
A.dj.prototype={
i(a){var s="UnimplementedError: "+this.a
return s}}
A.aR.prototype={
i(a){return"Bad state: "+this.a}}
A.cE.prototype={
i(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cJ(s)+"."}}
A.d1.prototype={
i(a){return"Out of Memory"},
gam(){return null},
$ix:1}
A.bZ.prototype={
i(a){return"Stack Overflow"},
gam(){return null},
$ix:1}
A.cG.prototype={
i(a){var s="Reading static variable '"+this.a+"' during its initialization"
return s}}
A.fr.prototype={
i(a){return"Exception: "+this.a}}
A.eC.prototype={
i(a){var s,r,q,p,o,n,m,l,k,j,i,h,g=this.a,f=""!==g?"FormatException: "+g:"FormatException",e=this.c,d=this.b
if(typeof d=="string"){if(e!=null)s=e<0||e>d.length
else s=!1
if(s)e=null
if(e==null){if(d.length>78)d=B.b.W(d,0,75)+"..."
return f+"\n"+d}for(r=1,q=0,p=!1,o=0;o<e;++o){n=B.b.M(d,o)
if(n===10){if(q!==o||!p)++r
q=o+1
p=!1}else if(n===13){++r
q=o+1
p=!0}}f=r>1?f+(" (at line "+r+", character "+(e-q+1)+")\n"):f+(" (at character "+(e+1)+")\n")
m=d.length
for(o=e;o<m;++o){n=B.b.a6(d,o)
if(n===10||n===13){m=o
break}}if(m-q>78)if(e-q<75){l=q+75
k=q
j=""
i="..."}else{if(m-e<75){k=m-75
l=m
i=""}else{k=e-36
l=e+36
i="..."}j="..."}else{l=m
k=q
j=""
i=""}h=B.b.W(d,k,l)
return f+j+h+i+"\n"+B.b.b9(" ",e-k+j.length)+"^\n"}else return e!=null?f+(" (at offset "+A.n(e)+")"):f}}
A.j.prototype={
az(a,b,c){var s=A.m(this)
return A.jW(this,s.p(c).h("1(j.E)").a(b),s.h("j.E"),c)},
gk(a){var s,r=this.gt(this)
for(s=0;r.m();)++s
return s},
gE(a){return!this.gt(this).m()},
ga8(a){return!this.gE(this)},
A(a,b){var s,r,q
A.id(b,"index")
for(s=this.gt(this),r=0;s.m();){q=s.gn()
if(b===r)return q;++r}throw A.b(A.bG(b,this,"index",null,r))},
i(a){return A.jN(this,"(",")")}}
A.K.prototype={}
A.bb.prototype={
i(a){return"MapEntry("+A.n(this.a)+": "+A.n(this.b)+")"}}
A.I.prototype={
gu(a){return A.t.prototype.gu.call(this,this)},
i(a){return"null"}}
A.t.prototype={$it:1,
F(a,b){return this===b},
gu(a){return A.bV(this)},
i(a){return"Instance of '"+A.f0(this)+"'"},
toString(){return this.i(this)}}
A.dR.prototype={
i(a){return""},
$iac:1}
A.c1.prototype={
gk(a){return this.a.length},
i(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.ff.prototype={
$2(a,b){var s,r,q,p
t.f.a(a)
A.r(b)
s=B.b.b_(b,"=")
if(s===-1){if(b!=="")J.hV(a,A.hG(b,0,b.length,this.a,!0),"")}else if(s!==0){r=B.b.W(b,0,s)
q=B.b.be(b,s+1)
p=this.a
J.hV(a,A.hG(r,0,r.length,p,!0),A.hG(q,0,q.length,p,!0))}return a},
$S:25}
A.f.prototype={}
A.aZ.prototype={
sbF(a,b){a.href=b},
i(a){var s=String(a)
s.toString
return s},
$iaZ:1}
A.cu.prototype={
i(a){var s=String(a)
s.toString
return s}}
A.b0.prototype={
sax(a,b){a.height=b},
sdg(a,b){a.width=b},
b8(a,b){return a.getContext(b)},
$ib0:1}
A.b1.prototype={
sae(a,b){a.fillStyle=b},
sV(a,b){a.strokeStyle=b},
al(a,b){var s
t.bj.a(b)
s=!!a.setLineDash
s.toString
if(s)a.setLineDash(b)
else{s=!!a.webkitLineDash
s.toString
if(s)a.webkitLineDash=b}},
C(a,b,c,d){a.fillText(b,c,d)},
$ib1:1}
A.ag.prototype={
gk(a){return a.length}}
A.b3.prototype={
v(a,b){var s=$.j8(),r=s[b]
if(typeof r=="string")return r
r=this.cB(a,b)
s[b]=r
return r},
cB(a,b){var s,r=b.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,function(c,d){return d.toUpperCase()})
r.toString
r=r in a
r.toString
if(r)return b
s=$.jb()+b
r=s in a
r.toString
if(r)return s
return b},
w(a,b,c,d){a.setProperty(b,c,d)},
gk(a){var s=a.length
s.toString
return s},
sd3(a,b){a.overflow=b}}
A.eu.prototype={}
A.b4.prototype={$ib4:1}
A.ey.prototype={
i(a){var s=String(a)
s.toString
return s}}
A.bB.prototype={
i(a){var s,r=a.left
r.toString
r="Rectangle ("+A.n(r)+", "
s=a.top
s.toString
s=r+A.n(s)+") "
r=a.width
r.toString
r=s+A.n(r)+" x "
s=a.height
s.toString
return r+A.n(s)},
F(a,b){var s,r
if(b==null)return!1
if(t.U.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=b.width
r.toString
if(s===r){s=a.height
s.toString
r=b.height
r.toString
r=s===r
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gu(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.hn(p,s,r,q)},
$ihv:1}
A.ez.prototype={
gk(a){var s=a.length
s.toString
return s}}
A.du.prototype={
gE(a){return this.a.firstElementChild==null},
gk(a){return this.b.length},
j(a,b){var s=this.b
if(!(b>=0&&b<s.length))return A.k(s,b)
return t.h.a(s[b])},
l(a,b){this.a.appendChild(b).toString
return b},
gt(a){var s=this.bQ(this)
return new J.a9(s,s.length,A.G(s).h("a9<1>"))}}
A.aU.prototype={
gk(a){return this.a.length},
j(a,b){var s=this.a
if(!(b>=0&&b<s.length))return A.k(s,b)
return this.$ti.c.a(s[b])}}
A.p.prototype={
gbz(a){var s=a.children
s.toString
return new A.du(a,s)},
gbA(a){return new A.dy(a)},
i(a){var s=a.localName
s.toString
return s},
$ip:1}
A.c.prototype={$ic:1}
A.B.prototype={
c8(a,b,c,d){return a.addEventListener(b,A.e5(t.bw.a(c),1),!1)},
$iB:1}
A.cL.prototype={
gk(a){return a.length}}
A.b7.prototype={$ib7:1}
A.az.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw A.b(A.bG(b,a,null,null,null))
s=a[b]
s.toString
return s},
A(a,b){if(!(b>=0&&b<a.length))return A.k(a,b)
return a[b]},
$io:1,
$iai:1,
$ij:1,
$iq:1,
$iaz:1}
A.aA.prototype={$iaA:1}
A.ba.prototype={
cJ(a,b){return a.assign(b)},
i(a){var s=String(a)
s.toString
return s},
$iba:1}
A.V.prototype={
gbI(a){var s,r,q,p,o,n=!!a.offsetX
n.toString
if(n)return new A.aP(a.offsetX,a.offsetY,t.J)
else{n=a.target
s=t.h
if(!s.b(A.fS(n)))throw A.b(A.as("offsetX is only supported on elements"))
r=s.a(A.fS(n))
n=a.clientX
n.toString
s=a.clientY
s.toString
q=t.J
p=r.getBoundingClientRect()
o=p.left
o.toString
p=p.top
p.toString
q.a(new A.aP(o,p,q))
return new A.aP(B.i.aD(n-o),B.i.aD(s-p),q)}},
$iV:1}
A.dt.prototype={
gt(a){var s=this.a.childNodes
return new A.aL(s,s.length,A.L(s).h("aL<a1.E>"))},
gk(a){return this.a.childNodes.length},
j(a,b){var s=this.a.childNodes
if(!(b>=0&&b<s.length))return A.k(s,b)
return s[b]}}
A.h.prototype={
bn(a){var s
for(;s=a.firstChild,s!=null;)a.removeChild(s).toString},
i(a){var s=a.nodeValue
return s==null?this.bY(a):s},
sB(a,b){a.textContent=b},
$ih:1}
A.bT.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw A.b(A.bG(b,a,null,null,null))
s=a[b]
s.toString
return s},
A(a,b){if(!(b>=0&&b<a.length))return A.k(a,b)
return a[b]},
$io:1,
$iai:1,
$ij:1,
$iq:1}
A.W.prototype={$iW:1}
A.aB.prototype={$iaB:1}
A.bf.prototype={
gk(a){return a.length},
gaA(a){var s,r
A.fX(t.d,t.h,"T","querySelectorAll")
s=a.querySelectorAll("option")
s.toString
r=new A.aU(s,t.gJ)
return new A.bk(r.bQ(r),t.ep)},
gbb(a){var s,r,q=a.multiple
q.toString
if(q){q=this.gaA(a)
s=q.$ti
r=s.h("aS<l.E>")
return new A.bk(A.cV(new A.aS(q,s.h("a5(l.E)").a(new A.f1()),r),!0,r.h("j.E")),t.ep)}else{q=this.gaA(a)
s=a.selectedIndex
s.toString
q=q.a
if(!(s>=0&&s<q.length))return A.k(q,s)
return A.i([q[s]],t.ej)}},
$ibf:1}
A.f1.prototype={
$1(a){var s=t.d.a(a).selected
s.toString
return s},
$S:26}
A.c_.prototype={
j(a,b){return a.getItem(A.r(b))},
K(a,b,c){a.setItem(b,c)},
I(a,b){var s,r,q
t.eA.a(b)
for(s=0;!0;++s){r=a.key(s)
if(r==null)return
q=a.getItem(r)
q.toString
b.$2(r,q)}},
gY(a){var s=A.i([],t.s)
this.I(a,new A.f6(s))
return s},
gk(a){var s=a.length
s.toString
return s},
ga8(a){return a.key(0)!=null},
$iaa:1}
A.f6.prototype={
$2(a,b){return B.a.l(this.a,a)},
$S:9}
A.bg.prototype={
sa4(a,b){a.value=b},
$ibg:1}
A.ad.prototype={}
A.bl.prototype={
cm(a,b,c){var s=a.getComputedStyle(b,c)
s.toString
return s},
$ifj:1}
A.c7.prototype={
i(a){var s,r=a.left
r.toString
r="Rectangle ("+A.n(r)+", "
s=a.top
s.toString
s=r+A.n(s)+") "
r=a.width
r.toString
r=s+A.n(r)+" x "
s=a.height
s.toString
return r+A.n(s)},
F(a,b){var s,r
if(b==null)return!1
if(t.U.b(b)){s=a.left
s.toString
r=b.left
r.toString
if(s===r){s=a.top
s.toString
r=b.top
r.toString
if(s===r){s=a.width
s.toString
r=b.width
r.toString
if(s===r){s=a.height
s.toString
r=b.height
r.toString
r=s===r
s=r}else s=!1}else s=!1}else s=!1}else s=!1
return s},
gu(a){var s,r,q,p=a.left
p.toString
s=a.top
s.toString
r=a.width
r.toString
q=a.height
q.toString
return A.hn(p,s,r,q)}}
A.cd.prototype={
gk(a){var s=a.length
s.toString
return s},
j(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw A.b(A.bG(b,a,null,null,null))
s=a[b]
s.toString
return s},
A(a,b){if(!(b>=0&&b<a.length))return A.k(a,b)
return a[b]},
$io:1,
$iai:1,
$ij:1,
$iq:1}
A.dy.prototype={
ah(){var s,r,q,p,o=A.jT(t.N)
for(s=this.a.className.split(" "),r=s.length,q=0;q<r;++q){p=J.jy(s[q])
if(p.length!==0)o.l(0,p)}return o},
gk(a){var s=this.a.classList.length
s.toString
return s},
gE(a){var s=this.a.classList.length
s.toString
return s===0},
l(a,b){var s=this.a.classList,r=s.contains(b)
r.toString
s.add(b)
return!r},
d9(a,b){var s,r
if(typeof b=="string"){s=this.a.classList
r=s.contains(b)
r.toString
s.remove(b)}else r=!1
return r}}
A.hh.prototype={}
A.c9.prototype={
b2(a,b,c,d){var s=A.m(this)
s.h("~(1)?").a(a)
t.Z.a(c)
return A.bp(this.a,this.b,a,!1,s.c)}}
A.c8.prototype={}
A.ca.prototype={}
A.fq.prototype={
$1(a){return this.a.$1(t.B.a(a))},
$S:2}
A.a1.prototype={
gt(a){return new A.aL(a,this.gk(a),A.L(a).h("aL<a1.E>"))}}
A.aL.prototype={
m(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbt(J.hU(s.a,r))
s.c=r
return!0}s.sbt(null)
s.c=q
return!1},
gn(){return this.$ti.c.a(this.d)},
sbt(a){this.d=this.$ti.h("1?").a(a)},
$iK:1}
A.dw.prototype={$iB:1,$ifj:1}
A.dv.prototype={}
A.dB.prototype={}
A.dC.prototype={}
A.dH.prototype={}
A.dI.prototype={}
A.dP.prototype={}
A.dX.prototype={}
A.dY.prototype={}
A.cF.prototype={
i(a){return this.ah().b0(0," ")},
gt(a){var s=this.ah()
return A.kk(s,s.r,A.m(s).c)},
gE(a){return this.ah().a===0},
gk(a){return this.ah().a},
A(a,b){return this.ah().A(0,b)}}
A.cK.prototype={
gaL(){var s=this.b,r=A.m(s)
return new A.ap(new A.aS(s,r.h("a5(l.E)").a(new A.eA()),r.h("aS<l.E>")),r.h("p(l.E)").a(new A.eB()),r.h("ap<l.E,p>"))},
l(a,b){this.b.a.appendChild(b).toString},
gk(a){return J.aj(this.gaL().a)},
j(a,b){var s=this.gaL()
return s.b.$1(J.hd(s.a,b))},
gt(a){var s=A.jV(this.gaL(),!1,t.h)
return new J.a9(s,s.length,A.G(s).h("a9<1>"))}}
A.eA.prototype={
$1(a){return t.h.b(t.I.a(a))},
$S:28}
A.eB.prototype={
$1(a){return t.h.a(t.I.a(a))},
$S:29}
A.aP.prototype={
i(a){return"Point("+A.n(this.a)+", "+A.n(this.b)+")"},
F(a,b){if(b==null)return!1
return b instanceof A.aP&&this.a===b.a&&this.b===b.b},
gu(a){return A.il(B.i.gu(this.a),B.i.gu(this.b),0)}}
A.d.prototype={
gbz(a){return new A.cK(a,new A.dt(a))}}
A.ec.prototype={
bM(a,b){var s,r,q,p,o,n,m,l,k,j=this,i="chart"
t.gl.a(b)
s=j.a
r=A.a(s,i).ch
q=A.a(s,i).cx
B.d.sV(a,A.a(s,i).a.c)
a.beginPath()
A.a(s,i)
A.a(s,i)
p=q-20
a.moveTo(15,p)
A.a(s,i)
o=r-50
A.a(s,i)
a.lineTo(o,p)
a.stroke()
a.textAlign="center"
A.a(s,i)
A.a(s,i)
n=r-15-50-1
j.b=n/(b.length-1)
if(A.a(s,i).y.length!==0)j.b=n/(b.length-0.5)
A.a(s,i)
a.textBaseline="top"
a.textAlign="center"
A.a(s,i)
j.aY(a,15,p,B.a.gX(b))
A.a(s,i)
for(m=15,l=1;l<b.length-1;++l){A.a(s,i)
k=B.i.ai(15+l*j.b)
if(k-m<j.c)continue
if(!(l<b.length))return A.k(b,l)
j.aY(a,k,p,b[l])
m=k}A.a(s,i)
if(o-m>j.c){A.a(s,i)
j.aY(a,o,p,B.a.gb1(b))}},
aY(a,b,c,d){var s,r,q
a.beginPath()
a.moveTo(b,c)
s=this.a
A.a(s,"chart")
a.lineTo(b,c+3)
a.stroke()
r=this.x
if(B.b.a3(r,"s"))q=""+A.f_(d)+":"+A.hs(d)
else if(B.b.a3(r,"m"))q=A.iV(d)
else if(B.b.a3(r,"h"))q=A.iV(d)
else q=B.b.a3(r,"d")?A.hO(d):"??"
A.a(s,"chart")
B.d.C(a,q,b,c+5)},
bN(a2,a3,a4){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=this,b="chart",a=c.a,a0=A.a(a,b).ch,a1=A.a(a,b).cx
a2.beginPath()
B.d.sV(a2,A.a(a,b).a.c)
A.a(a,b)
s=a0-50
A.a(a,b)
a2.moveTo(s,10)
A.a(a,b)
A.a(a,b)
r=a1-20
a2.lineTo(s,r)
a2.stroke()
A.a(a,b)
A.a(a,b)
q=a1-10-20
if(q<10){A.j3("Not enough space for Y axis")
return}p=a4-a3
o=c.e
if(o===0&&c.f===0){o=p*0.1
n=c.e=a3-o
c.f=a4+o
o=n}if(o<0&&a3>=0)c.e=0
m=p/B.e.H(q,20)
if(c.r==null){c.r=0
o=B.i.i(m).split(".")
if(1>=o.length)return A.k(o,1)
B.a.I(J.jx(o[1],""),new A.ed(c))}o=c.r
o=(o==null?0:o)+1
c.r=o
c.e=A.j5(c.e,o)
o=c.r
o.toString
m=A.j5(m,o)
l=c.e
if(m<=0)throw A.b(A.bE("yStepVal must be greater than 0"))
for(o=c.f,k=0;o>l;){l+=m;++k}c.f=l
j=q/k
c.d=(l-c.e)/q
a2.textAlign="left"
a2.textBaseline="middle"
A.a(a,b)
for(o=s+3,n=s+8,i=1;i<k;++i){A.a(a,b)
h=B.i.ai(r-i*j)
g=c.e
f=c.r
f.toString
e=Math.pow(10,f+2)
g=B.i.ai((g+i*m)*e)
a2.beginPath()
a2.moveTo(s,h)
A.a(a,b)
a2.lineTo(o,h)
a2.stroke()
d=B.i.i(g/e)
A.a(a,b)
a2.fillText(d,n,h)}},
bL(a){var s,r,q,p,o,n=this,m="chart",l="date",k=n.a
if(A.a(k,m).x.length<2&&A.a(k,m).y.length<2){A.j3("Not enough data to draw chart")
return}A.a(k,m)
B.d.sV(a,"#000000")
B.d.sae(a,A.a(k,m).a.c)
if(n.x===""){if(A.a(k,m).x.length!==0){s=A.a(k,m).x
if(1>=s.length)return A.k(s,1)
r=A.i7(A.a(s[1].a,l).a-A.a(B.a.gX(A.a(k,m).x).a,l).a)}else{s=A.a(k,m).y
if(1>=s.length)return A.k(s,1)
r=A.i7(A.a(s[1].a,l).a-A.a(B.a.gX(A.a(k,m).y).a,l).a)}n.c=40
s=r.a
q=B.e.H(s,1e6)
if(q<60)n.x=""+q+"s"
else{q=B.e.H(s,6e7)
if(q<60){n.x=""+q+"m"
n.c=40}else{s=B.e.H(s,36e8)
if(s<24){n.x=""+s+"h"
n.c=40}else{n.x=A.n(s/24)+"d"
n.c=60}}}}if(A.a(k,m).y.length!==0){s=A.a(k,m).y
q=A.G(s)
p=new A.C(s,q.h("H(1)").a(new A.ee()),q.h("C<1,H>")).aC(0,B.q)
q=A.a(k,m).y
s=A.G(q)
o=new A.C(q,s.h("H(1)").a(new A.ef()),s.h("C<1,H>")).aC(0,B.r)
k=A.a(k,m).y
s=A.G(k)
q=s.h("C<1,F>")
n.bM(a,A.cV(new A.C(k,s.h("F(1)").a(new A.eg()),q),!0,q.h("A.E")))
n.bN(a,o,p)}else{s=A.a(k,m).x
q=A.G(s)
p=new A.C(s,q.h("H(1)").a(new A.eh()),q.h("C<1,H>")).aC(0,B.q)
q=A.a(k,m).x
s=A.G(q)
o=new A.C(q,s.h("H(1)").a(new A.ei()),s.h("C<1,H>")).aC(0,B.r)
k=A.a(k,m).x
s=A.G(k)
q=s.h("C<1,F>")
n.bM(a,A.cV(new A.C(k,s.h("F(1)").a(new A.ej()),q),!0,q.h("A.E")))
n.bN(a,o,p)}}}
A.ed.prototype={
$1(a){var s,r
if(A.r(a)==="0"){s=this.a
r=s.r
s.r=(r==null?0:r)+1}},
$S:10}
A.ee.prototype={
$1(a){return A.a(t.D.a(a).c,"high")},
$S:11}
A.ef.prototype={
$1(a){return A.a(t.D.a(a).d,"low")},
$S:11}
A.eg.prototype={
$1(a){return A.a(t.D.a(a).a,"date")},
$S:30}
A.eh.prototype={
$1(a){return A.a(t.Y.a(a).b,"value")},
$S:12}
A.ei.prototype={
$1(a){return A.a(t.Y.a(a).b,"value")},
$S:12}
A.ej.prototype={
$1(a){return A.a(t.Y.a(a).a,"date")},
$S:40}
A.U.prototype={}
A.a0.prototype={}
A.bA.prototype={}
A.cx.prototype={}
A.eq.prototype={}
A.ep.prototype={
bB(){var s,r,q,p=this,o="container",n="Could not get CanvasRenderingContext2D",m="absolute",l="0",k=p.b,j=A.a(k,o).clientWidth
j.toString
s=A.a(k,o).clientHeight
s.toString
p.d=A.i4(s,j)
j=A.a(k,o).clientWidth
j.toString
s=A.a(k,o).clientHeight
s.toString
p.e=A.i4(s,j)
j=p.d
j.toString
r=B.n.b8(j,"2d")
j=t.ar
if(j.b(r))p.f=r
else throw A.b(A.bE(n))
s=p.e
s.toString
q=B.n.b8(s,"2d")
if(j.b(q))p.r=q
else throw A.b(A.bE(n))
k=A.a(k,o).style
k.position="relative"
k=p.d
j=k.width
j.toString
p.ch=j
j=k.height
j.toString
p.cx=j
k=k.style
k.position=m
k.top=l
k.left=l
k.bottom=l
k.right=l
k=p.e
if(k!=null){k=k.style
k.position=m
k.top=l
k.left=l
k.bottom=l
k.right=l
k.zIndex="9"}},
a_(a){var s,r,q,p,o=this,n="axis",m="container"
t.p.a(a)
if(o.d==null)o.bB()
s=o.ch
A.a(A.a(o.c,n).a,"chart")
A.a(A.a(o.c,n).a,"chart")
r=s-15-50
s=a.length
o.scP(0,s*2>r?B.a.bd(a,s-B.e.H(r,2)):a)
o.f.font=o.a.b
s=A.a(o.c,n)
q=o.f
q.toString
s.bL(q)
q=o.f
q.toString
o.dc(q)
q=o.r
q.toString
o.bG(q)
q=o.b
s=A.a(q,m)
s.children.toString
J.hW(s)
s=A.a(q,m)
s.children.toString
p=o.d
p.toString
s.appendChild(p).toString
q=A.a(q,m)
q.children.toString
p=o.e
p.toString
q.appendChild(p).toString},
Z(a){var s,r,q,p,o=this,n="axis",m="container"
t.A.a(a)
if(o.d==null)o.bB()
s=o.ch
A.a(A.a(o.c,n).a,"chart")
A.a(A.a(o.c,n).a,"chart")
r=s-15-50
s=a.length
o.scL(s*3+1>r?B.a.bd(a,s-(B.e.H(r,3)-1)):a)
o.f.font=o.a.b
s=A.a(o.c,n)
q=o.f
q.toString
s.bL(q)
q=o.f
q.toString
o.da(q)
q=o.r
q.toString
o.bG(q)
q=o.b
s=A.a(q,m)
s.children.toString
J.hW(s)
s=A.a(q,m)
s.children.toString
p=o.d
p.toString
s.appendChild(p).toString
q=A.a(q,m)
q.children.toString
p=o.e
p.toString
q.appendChild(p).toString},
dc(a){var s,r,q,p,o,n=this,m="axis",l="chart",k=n.z
B.a.sk(k,0)
a.beginPath()
B.d.sV(a,"#3366cc")
A.a(A.a(n.c,m).a,l)
s=n.cx
A.a(A.a(n.c,m).a,l)
r=s-20-(A.a(B.a.gX(n.x).b,"value")-A.a(n.c,m).e)/A.a(n.c,m).d
B.a.l(k,new A.bA(15,r,B.a.gX(n.x)))
a.moveTo(15,r)
for(q=1;s=n.x,q<s.length;++q){p=s[q]
A.a(A.a(n.c,m).a,l)
o=15+A.a(n.c,m).b*q
s=n.cx
A.a(A.a(n.c,m).a,l)
r=s-20-(A.a(p.b,"value")-A.a(n.c,m).e)/A.a(n.c,m).d
a.lineTo(o,r)
B.a.l(k,new A.bA(o,r,p))}a.stroke()},
da(a2){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=this,d="axis",c="chart",b="open",a="close",a0="high",a1=e.Q
B.a.sk(a1,0)
for(s=0;r=e.y,s<r.length;++s){q=r[s]
A.a(A.a(e.c,d).a,c)
p=15+A.a(e.c,d).b*s
o=p-A.a(e.c,d).b/2
n=p+A.a(e.c,d).b/2
r=e.cx
A.a(A.a(e.c,d).a,c)
m=q.b
l=r-20-(A.a(m,b)-A.a(e.c,d).e)/A.a(e.c,d).d
r=e.cx
A.a(A.a(e.c,d).a,c)
k=q.e
j=r-20-(A.a(k,a)-A.a(e.c,d).e)/A.a(e.c,d).d
a2.beginPath()
a2.lineWidth=1
r=n-o
if(A.a(m,b)>A.a(k,a)){B.d.sae(a2,"#dc3912")
B.d.sV(a2,"#dc3912")
a2.fillRect(o,j,r,l-j)}else{B.d.sae(a2,"#33bb33")
B.d.sV(a2,"#33bb33")
a2.fillRect(o,l,r,j-l)}i=p+0.5
h=Math.min(l,j)
g=Math.max(l,j)
r=q.d
if(A.a(r,"low")<A.a(m,b)&&A.a(r,"low")<A.a(k,a)){f=e.cx
A.a(A.a(e.c,d).a,c)
h=f-20-(A.a(r,"low")-A.a(e.c,d).e)/A.a(e.c,d).d}r=q.c
if(A.a(r,a0)>A.a(m,b)&&A.a(r,a0)>A.a(k,a)){m=e.cx
A.a(A.a(e.c,d).a,c)
g=m-20-(A.a(r,a0)-A.a(e.c,d).e)/A.a(e.c,d).d}a2.moveTo(i,h)
a2.lineTo(i,g)
a2.stroke()
B.a.l(a1,new A.cx(o,n,q))}},
bG(a){var s,r,q,p=this,o=p.e
o.toString
s=t.do
r=s.h("~(1)?")
q=r.a(new A.es(p,a))
t.Z.a(null)
s=s.c
A.bp(o,"mouseout",q,!1,s)
q=p.e
q.toString
A.bp(q,"mousemove",r.a(new A.et(p,a)),!1,s)},
O(a){var s=this,r=s.f
if(r!=null){r.clearRect(0,0,s.ch,s.cx)
s.r.clearRect(0,0,s.ch,s.cx)}r=A.a(s.c,"axis")
r.r=null
r.f=r.e=0},
scP(a,b){this.x=t.p.a(b)},
scL(a){this.y=t.A.a(a)}}
A.es.prototype={
$1(a){var s
t.V.a(a)
s=this.a
this.b.clearRect(0,0,s.ch,s.cx)},
$S:3}
A.et.prototype={
$1(a5){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1=null,a2="x",a3="dataRow",a4="date"
t.V.a(a5)
s=this.b
r=this.a
s.clearRect(0,0,r.ch,r.cx)
q=J.e6(a5)
p=B.i.aD(q.gbI(a5).a)
o=B.i.aD(q.gbI(a5).b)
q=r.z
n=q.length
if(n!==0)for(m=a1,l=0,k=0;k<q.length;q.length===n||(0,A.e8)(q),++k){j=q[k]
i=Math.abs(A.a(j.a,a2)-p)+Math.abs(A.a(j.b,"y")-o)
if(m==null||i<l){l=i
m=j}}else{m=a1
l=0}q=r.Q
n=q.length
if(n!==0)for(h=a1,k=0;k<q.length;q.length===n||(0,A.e8)(q),++k){g=q[k]
i=Math.abs(A.a(g.a,"x0")-p)
if(h==null||i<l){h=g
l=i}}else h=a1
if(m!=null){q=t.a
B.d.al(s,A.i([3,3],q))
n=r.a
B.d.sV(s,n.c)
s.beginPath()
s.moveTo(p,0)
s.lineTo(p,r.cx)
s.stroke()
s.beginPath()
s.moveTo(0,o)
s.lineTo(r.ch,o)
s.stroke()
B.d.al(s,A.i([],q))
s.beginPath()
q=m.a
s.arc(A.a(q,a2),A.a(m.b,"y"),3,0,6.283185307179586,!1)
s.stroke()
B.d.sae(s,n.c)
n=B.b.a3(A.a(r.c,"axis").x,"d")
f=m.c
e=n?"date: "+A.hO(A.a(A.a(f,a3).a,a4)):"date: "+A.iU(A.a(A.a(f,a3).a,a4))
d="value: "+A.n(A.a(A.a(f,a3).b,"value"))
if(A.a(q,a2)>r.ch/2){s.textAlign="right"
B.d.C(s,e,A.a(q,a2)-3,9)
B.d.C(s,d,A.a(q,a2)-3,19)}else{s.textAlign="left"
B.d.C(s,e,A.a(q,a2)+3,9)
B.d.C(s,d,A.a(q,a2)+3,19)}}if(h!=null){p=(A.a(h.a,"x0")+A.a(h.b,"x1"))/2
q=t.a
B.d.al(s,A.i([3,3],q))
n=r.a
B.d.sV(s,n.c)
s.beginPath()
s.moveTo(p,0)
s.lineTo(p,r.cx)
s.stroke()
s.beginPath()
s.moveTo(0,o)
s.lineTo(r.ch,o)
s.stroke()
B.d.al(s,A.i([],q))
s.beginPath()
s.stroke()
B.d.sae(s,n.c)
n=A.a(h.e,"candleRow")
q=n.a
e=B.b.a3(A.a(r.c,"axis").x,"d")?"date: "+A.hO(A.a(q,a4)):"date: "+A.iU(A.a(q,a4))
c="o: "+A.n(A.a(n.b,"open"))
b="h: "+A.n(A.a(n.c,"high"))
a="l: "+A.n(A.a(n.d,"low"))
a0="c: "+A.n(A.a(n.e,"close"))
if(p>r.ch/2){s.textAlign="right"
r=p-3
B.d.C(s,e,r,9)
B.d.C(s,c,r,19)
B.d.C(s,b,r,29)
B.d.C(s,a,r,39)
B.d.C(s,a0,r,49)}else{s.textAlign="left"
r=p+3
B.d.C(s,e,r,9)
B.d.C(s,c,r,19)
B.d.C(s,b,r,29)
B.d.C(s,a,r,39)
B.d.C(s,a0,r,49)}}},
$S:3}
A.cD.prototype={
bg(a){var s,r=J.R(a)
A.r(r.j(a,"hash"))
A.r(r.j(a,"symbol"))
A.a7(r.j(a,"decimals"))
s=r.j(a,"price")
if(s!=null){r=new A.eZ(A.N(t.N,t.gR))
r.c1(t.G.a(s))
this.d=r}}}
A.eZ.prototype={
c1(a){var s,r,q,p,o=J.R(a)
A.r(o.j(a,"coinGeckoId"))
A.r(o.j(a,"startDate"))
A.r(o.j(a,"endDate"))
s=o.j(a,"prices")
if(t.G.b(s))for(o=J.ju(s),o=o.gt(o),r=this.b;o.m();){q=o.gn()
p=A.J(J.aY(q.b))
r.K(0,A.r(q.a),p)}}}
A.h8.prototype={
$2(a,b){A.r(a)
A.iF(b)
B.a.l(this.a,new A.U(A.i6(a),b))},
$S:15}
A.h9.prototype={
$2(a,b){A.r(a)
A.iF(b)
B.a.l(this.a,new A.U(A.i6(a),b))},
$S:15}
A.cz.prototype={}
A.cv.prototype={
au(){var s,r=this
r.O(0)
s=r.y1
A.a(s.dx,"chartWidget").ga2().O(0)
r.N(s).J(new A.ek(r),t.H)
s=r.aw
r.a1(0,A.i([r.y2,s],t.i))
s=s.f$
new A.a3(s,A.m(s).h("a3<1>")).af(new A.el(r))},
bC(){var s,r,q,p,o=A.i([],t.e),n=this.aw.e.value
for(n=J.a8(t.R.a(B.j.S(0,n==null?"":n)));n.m();){s=n.gn()
r=J.R(s)
q=A.a7(r.j(s,0))
p=new A.F(q,!1)
p.a0(q,!1)
B.a.l(o,new A.a0(p,A.J(A.r(r.j(s,1))),A.J(A.r(r.j(s,2))),A.J(A.r(r.j(s,3))),A.J(A.r(r.j(s,4)))))}return o}}
A.ek.prototype={
$1(a){var s=this.a
return A.a(s.y1.dx,"chartWidget").Z(s.bC())},
$S:1}
A.el.prototype={
$1(a){var s,r,q,p="chartWidget"
t.b8.a(a)
try{r=this.a
s=r.bC()
r=r.y1
A.a(r.dx,p).ga2().O(0)
A.a(r.dx,p).Z(s)}catch(q){r=this.a.y1
B.f.sB(r.dy.e,"Error data format")
r=A.a(r.dx,p)
r.ga2().O(0)}},
$S:32}
A.cw.prototype={
au(){var s,r,q,p,o,n=this,m="100%",l="300px"
n.O(0)
s=A.ax()
B.f.sB(s.dy.e,"XLM_USDT binance price")
r=s.e
q=r.style
q.width=m
r=r.style
r.height=l
p=A.ax()
B.f.sB(p.dy.e,"ETH_USDT binance price")
r=p.e
q=r.style
q.width=m
r=r.style
r.height=l
o=A.ax()
B.f.sB(o.dy.e,"XRP_USDT binance price")
r=o.e
q=r.style
q.width=m
r=r.style
r.height=l
r=t.H
n.N(s).J(new A.em(s),r)
n.N(p).J(new A.en(p),r)
n.N(o).J(new A.eo(o),r)}}
A.em.prototype={
$1(a){return A.a(this.a.dx,"chartWidget").Z(A.lK())},
$S:1}
A.en.prototype={
$1(a){return A.a(this.a.dx,"chartWidget").Z(A.lj())},
$S:1}
A.eo.prototype={
$1(a){return A.a(this.a.dx,"chartWidget").Z(A.lM())},
$S:1}
A.cM.prototype={}
A.cU.prototype={
au(){var s,r,q,p,o,n,m,l=this,k="100%",j="300px"
l.O(0)
s=A.ax()
B.f.sB(s.dy.e,"Tesla token price")
r=s.e
q=r.style
q.width=k
r=r.style
r.height=j
p=A.ax()
B.f.sB(p.dy.e,"WBTC price")
r=p.e
q=r.style
q.width=k
r=r.style
r.height=j
o=A.ax()
B.f.sB(o.dy.e,"XRP_USDT binance price")
r=o.e
q=r.style
q.width=k
r=r.style
r.height=j
n=A.ax()
B.f.sB(n.dy.e,"ETH_USDT binance price")
r=n.e
q=r.style
q.width=k
r=r.style
r.height=j
m=A.ax()
B.f.sB(m.dy.e,"XLM_USDT binance price")
r=m.e
q=r.style
q.width=k
r=r.style
r.height=j
r=t.H
l.N(s).J(new A.eF(s),r)
l.N(p).J(new A.eG(p),r)
l.N(o).J(new A.eH(o),r)
l.N(n).J(new A.eI(n),r)
l.N(m).J(new A.eJ(m),r)}}
A.eF.prototype={
$1(a){return A.a(this.a.dx,"chartWidget").a_(A.lD())},
$S:1}
A.eG.prototype={
$1(a){return A.a(this.a.dx,"chartWidget").a_(A.lI())},
$S:1}
A.eH.prototype={
$1(a){return A.a(this.a.dx,"chartWidget").a_(A.lN())},
$S:1}
A.eI.prototype={
$1(a){return A.a(this.a.dx,"chartWidget").a_(A.lk())},
$S:1}
A.eJ.prototype={
$1(a){return A.a(this.a.dx,"chartWidget").a_(A.lL())},
$S:1}
A.bP.prototype={
c_(){var s=this.e,r=s.style
r.width="100%"
s=s.style
s.height="100%"
this.sT(!0)},
d_(a){var s,r,q=this
q.fy=a
s=window
s.toString
r=t.fi.a(new A.eO(q))
t.Z.a(null)
A.bp(s,"hashchange",r,!1,t.B)
s=t.q
if(s.a(window.location).hash.length===0)s.a(window.location).hash=A.h_(a)
else{s=s.a(window.location).hash
s.toString
q.bJ(B.b.bO(s,"#",""))}if(!q.go){q.cN()
s=q.e
s.children.toString
s.appendChild($.e9().e).toString
r=document.querySelector("body")
if(r!=null)J.hY(r).l(0,s)
q.go=!0}},
cw(a){var s,r
t.k.a(a)
s=this.fr
if(s.f.length!==0)s.O(0)
r=this.id
r.l(0,A.m(r).c.a(a))
s.l(0,a)
a.au()},
bJ(a){var s,r,q=this.a9(a).J(this.gcv(),t.H),p=new A.eP(this)
t.b7.a(null)
s=q.$ti
r=$.v
if(r!==B.h)p=A.iM(p,r)
q.ap(new A.at(new A.D(r,s),2,null,p,s.h("@<1>").p(s.c).h("at<1,2>")))},
a9(a){var s=0,r=A.e1(t.k),q,p=this,o,n,m,l,k,j,i,h,g,f
var $async$a9=A.e3(function(b,c){if(b===1)return A.dZ(c,r)
while(true)switch(s){case 0:if(a.length===0){o=p.fy
o.toString
q=o
s=1
break}n=A.i(a.split("/"),t.s)
if(!!n.fixed$length)A.af(A.as("removeAt"))
o=n.length
if(0>=o)A.af(A.hu(0,null))
m=A.ir(n.splice(0,1)[0])
o=p.dx
l=o.j(0,m.a)
if(l==null)throw A.b(A.bE('view "'+m.a+'" is not registered'))
l.saB(m.b)
l.san(0,m.c)
s=3
return A.hH(l.ay(),$async$a9)
case 3:k=n.length,j=l,i=0
case 4:if(!(i<n.length)){s=6
break}h=n[i]
s=J.aj(h)!==0?7:8
break
case 7:g=A.ir(h)
f=o.j(0,g.a)
if(f==null)throw A.b(A.bE('view "'+g.a+'" is not registered'))
f.fy=j
f.saB(g.b)
f.san(0,g.c)
s=9
return A.hH(f.ay(),$async$a9)
case 9:j=f
case 8:case 5:n.length===k||(0,A.e8)(n),++i
s=4
break
case 6:q=j
s=1
break
case 1:return A.e_(q,r)}})
return A.e0($async$a9,r)},
bc(a){var s,r=A.lh(a),q=$.e9().dx
new A.a3(q,A.m(q).h("a3<1>")).af(new A.eQ())
$.e9().sbS(!0)
q=$.e9()
s=A.d8()
B.f.sB(s.e,r)
q.l(0,s)},
d8(a){var s
t.k.a(a)
s=a.dx
if(s.length===0){this.bc("error: register view without id "+A.h1(a).i(0))
return}this.dx.K(0,s,a)
B.a.l(this.dy,a)}}
A.eO.prototype={
$1(a){var s,r,q
if(t.fb.b(a)){s=a.oldURL
if(s==null)s=""
r=a.newURL
if(r==null)r=""
if(B.b.a7(s,"~"))s=B.b.W(s,0,B.b.b_(s,"~"))
if((B.b.a7(r,"~")?B.b.W(r,0,B.b.b_(r,"~")):r)!==s){q=t.q.a(window.location).hash
q.toString
this.a.bJ(B.b.bO(q,"#",""))}}},
$S:2}
A.eP.prototype={
$2(a,b){return this.a.bc(t.K.a(a))},
$S:33}
A.eQ.prototype={
$1(a){t.V.a(a)
B.N.cJ(t.q.a(window.location),"/")},
$S:3}
A.fi.prototype={
saB(a){this.b=t.f.a(a)},
san(a,b){this.c=t.f.a(b)}}
A.fT.prototype={
$2(a,b){var s,r,q
A.r(a)
A.r(b)
s=this.a
r=s.b
q=s.a
if(r){s.a=q+(a+"="+A.iC(B.v,b,B.l,!0))
s.b=!1}else s.a=q+("&"+a+"="+A.iC(B.v,b,B.l,!0))},
$S:9}
A.cX.prototype={
cN(){var s,r,q,p,o,n=this
n.l(0,n.aZ)
s=A.ho()
s.sU(!0)
r=s.e
q=r.style
q.width="100%"
r=r.style
r.height="100%"
s.sT(!0)
n.l(0,s)
B.a.I(n.dy,new A.eL(n))
r=n.id
new A.a3(r,A.m(r).h("a3<1>")).af(new A.eM(n))
r=n.aw
q=A.d8()
B.f.sB(q.e,"theme")
p=n.cU
o=t.i
r.a1(0,A.i([n.bD,q,p],o))
s.a1(0,A.i([r,n.fr],o))
p.sa4(0,A.i([$.hb().a],t.s))
p=p.f$
new A.a3(p,A.m(p).h("a3<1>")).af(new A.eN())}}
A.eL.prototype={
$1(a){this.a.aZ.cH(t.k.a(a))},
$S:4}
A.eM.prototype={
$1(a){var s
t.k.a(a)
s=this.a
s.aZ.d5(a)
s.bD.d6(a)},
$S:4}
A.eN.prototype={
$1(a){t.d0.a(a)
$.hb().bf(J.jv(A.a(a.b,"newValue")))},
$S:34}
A.da.prototype={
cH(a){var s,r,q="SimpleLink",p=document.createElement("a")
p.toString
s=new A.db(p,!1,!1,q)
s.G(A.a(q,"className"))
r=p.classList
r.contains("SimpleNavBarButton").toString
r.add("SimpleNavBarButton")
s.cx=a.dx
B.k.sB(p,a.dy)
B.k.sbF(p,A.h_(a))
this.l(0,s)},
d5(a){var s,r,q,p,o,n=A.h_(a)
for(s=this.f,r=s.length,q=t.aF,p=0;p<s.length;s.length===r||(0,A.e8)(s),++p){o=s[p]
if(q.b(o))o.scF(B.b.bW(n,"#"+o.cx))}}}
A.db.prototype={$ii_:1}
A.dd.prototype={
d6(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f=this,e="SimpleLabel",d="className",c="SimpleLink"
f.O(0)
s=a.fy
r=A.i([a],t.m)
for(;s!=null;){B.a.l(r,s)
s=s.fy}for(q=t.W,p=new A.be(r,q),p=new A.O(p,p.gk(p),q.h("O<A.E>")),o=f.f,n=f.e,m=n.children,q=q.h("A.E");p.m();){l=q.a(p.d)
if(o.length!==0){k=document.createElement("div")
k.toString
j=new A.bY(k,!1,e)
i=A.a(e,d)
k.className=""
h=k.classList
h.contains(i).toString
h.add(i)
j.c3()
B.f.sB(k,"\\")
i=k.style
i.width="15px"
if(j.r!=="center"){j.r="center"
i=k.style
i.toString
g=B.c.v(i,"justify-content")
i.setProperty(g,"center","")}B.a.l(o,j)
m.toString
n.appendChild(k).toString
f.sD(f.r)}k=document.createElement("a")
k.toString
j=A.a(c,d)
k.className=""
h=k.classList
h.contains(j).toString
h.add(j)
h=k.classList
h.contains("SimplePathButton").toString
h.add("SimplePathButton")
j=k.style
j.height="100%"
B.k.sbF(k,A.h_(l))
B.k.sB(k,l.dy)
B.a.l(o,new A.dc(k,!1,!1,c))
m.toString
n.appendChild(k).toString
f.sD(f.r)}}}
A.dc.prototype={}
A.Z.prototype={
ay(){var s=0,r=A.e1(t.H)
var $async$ay=A.e3(function(a,b){if(a===1)return A.dZ(b,r)
while(true)switch(s){case 0:return A.e_(null,r)}})
return A.e0($async$ay,r)},
au(){},
saB(a){this.fr=t.f.a(a)},
san(a,b){this.fx=t.f.a(b)}}
A.Y.prototype={}
A.w.prototype={
ao(a){var s,r=A.a(this.d,"className"),q=this.gq()
q.className=""
s=q.classList
s.contains(r).toString
s.add(r)},
sT(a){var s
this.c=!0
s=this.gq().style
s.toString
B.c.w(s,B.c.v(s,"flex"),"1","")},
sax(a,b){var s=this.gq().style
s.height=b},
cY(){var s=this.gq().style
s.width="100%"
s=this.gq().style
s.height="100%"},
bE(){var s=this.gq().style
s.width="100%"},
cX(){var s=this.gq().style
s.height="100%"},
sd4(a,b){var s=this.gq().style
s.padding=b},
cG(a){var s=this.gq().classList
s.contains(a).toString
s.add(a)},
G(a){var s,r=this.gq()
r.className=""
s=r.classList
s.contains(a).toString
s.add(a)},
aj(){var s=0,r=A.e1(t.H)
var $async$aj=A.e3(function(a,b){if(a===1)return A.dZ(b,r)
while(true)switch(s){case 0:s=2
return A.hH(A.jM(B.I,t.z),$async$aj)
case 2:return A.e_(null,r)}})
return A.e0($async$aj,r)}}
A.S.prototype={}
A.cy.prototype={
ga2(){var s=this.dy
if(s==null){s=new A.ep(new A.eq(),this.e,A.i([],t.j),A.i([],t.e),A.i([],t.f3),A.i([],t.dS))
s.c=new A.ec(s)
this.dy=s}return s},
sbX(a){var s,r=this
r.fr=!0
A.j1(r)
s=$.hb().b
r.sdf(new A.a3(s,A.m(s).h("a3<1>")).af(new A.er(r)))},
Z(a){t.A.a(a)
if(this.fr)this.b3()
this.ga2().Z(a)},
a_(a){t.p.a(a)
if(this.fr)this.b3()
this.ga2().a_(a)},
b3(){var s,r,q,p=window
p.toString
s=B.T.cm(p,this.e,"")
p=s.font
p.toString
r=s.color
r.toString
if(p==="")return!1
q=this.ga2().a
q.b=p
q.c=r
return!0},
sdf(a){this.dx=t.eX.a(a)}}
A.er.prototype={
$1(a){A.r(a)
A.j1(this.a)},
$S:10}
A.h7.prototype={
$1(a){var s,r=this.a
if(r.b3()){r=r.ga2()
r.O(0)
s=r.x
if(s.length!==0)r.a_(s)
s=r.y
if(s.length!==0)r.Z(s)}},
$S:35}
A.d7.prototype={
c2(){var s,r=this.e,q=r.style
q.display="flex"
r.children.toString
r.appendChild(this.f).toString
q=t.E
s=q.h("~(1)?").a(new A.f2(this))
t.Z.a(null)
A.bp(r,"change",s,!1,q.c)},
ga4(a){var s=J.he(B.o.gbb(this.f),new A.f4(),t.N)
return A.cV(s,!0,s.$ti.h("A.E"))},
sa4(a,b){var s,r,q,p,o,n=this
t.x.a(b)
s=n.f
r=J.he(B.o.gbb(s),new A.f3(),t.N)
q=A.cV(r,!0,r.$ti.h("A.E"))
for(s=B.o.gaA(s),r=s.$ti,s=new A.O(s,s.gk(s),r.h("O<l.E>")),r=r.h("l.E");s.m();){p=r.a(s.d)
if(B.a.a7(b,p.textContent))p.selected=!0}s=n.ga4(n)
r=A.m(n)
p=r.h("S.T")
p.a(q)
o=n.f$
o.l(0,A.m(o).c.a(new A.Y(p.a(s),r.h("Y<S.T>"))))},
d0(a){var s,r,q,p,o,n,m,l
t.x.a(a)
B.a.a1(this.r,a)
for(s=this.f,r=B.o.gaA(s),q=r.$ti,r=new A.O(r,r.gk(r),q.h("O<l.E>")),q=q.h("l.E");r.m();){p=q.a(r.d)
o=p.parentNode
if(o!=null)o.removeChild(p).toString}for(n=0;n<2;++n){m=a[n]
l=A.jY("","",null,!1)
B.O.sB(l,m)
s.appendChild(l).toString}},
gq(){return this.e}}
A.f2.prototype={
$1(a){var s=this.a,r=s.ga4(s),q=s.ga4(s),p=A.m(s),o=p.h("S.T")
o.a(r)
s=s.f$
s.l(0,A.m(s).c.a(new A.Y(o.a(q),p.h("Y<S.T>"))))},
$S:2}
A.f4.prototype={
$1(a){var s=t.d.a(a).textContent
s.toString
return s},
$S:17}
A.f3.prototype={
$1(a){var s=t.d.a(a).textContent
s.toString
return s},
$S:17}
A.dK.prototype={}
A.dL.prototype={}
A.di.prototype={
c4(){var s=t.E,r=s.h("~(1)?").a(new A.f9(this))
t.Z.a(null)
A.bp(this.e,"input",r,!1,s.c)},
gq(){return this.e}}
A.f9.prototype={
$1(a){var s,r=this.a,q=r.e.value,p=q==null,o=p?"":q
if(p)q=""
p=A.m(r)
s=p.h("S.T")
s.a(o)
r=r.f$
r.l(0,A.m(r).c.a(new A.Y(s.a(q),p.h("Y<S.T>"))))},
$S:2}
A.dS.prototype={}
A.dT.prototype={}
A.bY.prototype={
c3(){var s,r=this.e.style
r.overflow="hidden"
B.c.w(r,B.c.v(r,"flex-shrink"),"0","")
B.c.w(r,B.c.v(r,"align-items"),"center","")
s=this.r
B.c.w(r,B.c.v(r,"justify-content"),s,"")},
gq(){return this.e}}
A.dM.prototype={}
A.d9.prototype={
gq(){return this.e}}
A.dN.prototype={}
A.dO.prototype={}
A.cW.prototype={
gq(){return this.e}}
A.bc.prototype={}
A.eU.prototype={
scF(a){var s,r,q
this.r$=a
for(s=[this.e],r=0;r<1;++r){q=s[r]
if(a)B.k.gbA(q).l(0,"Active")
else B.k.gbA(q).d9(0,"Active")}}}
A.cY.prototype={
c0(){var s,r,q,p=this
p.sbS(!1)
s=p.e
r=s.style
r.toString
B.c.w(r,B.c.v(r,"align-items"),"center","")
p.sU(!0)
r=t.do
q=r.h("~(1)?").a(new A.eV(p))
t.Z.a(null)
A.bp(s,"click",q,!1,r.c)},
sbS(a){var s,r=this
if(r.dy!==a){r.dy=a
s=r.e
if(a){s=s.style
s.display="flex"}else{s=s.style
s.display="none"
r.O(0)
r.dx.cM(0)
r.sco(A.c0(t.V))}}},
sco(a){this.dx=t.bB.a(a)}}
A.eV.prototype={
$1(a){var s
t.V.a(a)
s=this.a
if(A.fS(a.target)===s.e){s=s.dx
s.l(0,A.m(s).c.a(a))}},
$S:3}
A.d3.prototype={
L(a){var s=this.e.style
s.display="flex"
B.c.w(s,B.c.v(s,"flex-shrink"),"0","")
B.c.w(s,B.c.v(s,"flex-grow"),"0","")
s.overflow="hidden"
B.c.w(s,B.c.v(s,"flex-direction"),"row","")},
l(a,b){var s,r=this
B.a.l(r.f,b)
s=r.e
s.children.toString
s.appendChild(b.gq()).toString
r.sD(r.r)},
a1(a,b){var s,r,q=this
t.er.a(b)
B.a.a1(q.f,b)
s=q.e
s.children.toString
r=A.G(b)
A.ki(s,t.bq.a(new A.C(b,r.h("p(1)").a(new A.eX()),r.h("C<1,p>"))))
q.sD(q.r)},
O(a){var s=this.e
s.children.toString
B.f.bn(s)
B.a.sk(this.f,0)},
sU(a){var s,r=this
if(r.x)return
r.x=!0
s=r.e.style
s.toString
B.c.w(s,B.c.v(s,"flex-direction"),"column","")
r.sD(r.r)
r.sak(r.y)},
sD(a){var s,r,q,p,o,n=this,m=n.r
if(m===a&&m==="0px")return
n.r=a
for(m=n.f,s=0;r=m.length,s<r;++s){q=m[s]
p=s===r-1
if(n.x){if(!p){r=q.gq().style
o=n.r
r.marginBottom=o}else{r=q.gq().style
r.marginBottom="0"}if(n.b){r=q.gq().style
o=n.r
r.marginRight=o}else{r=q.gq().style
r.marginRight="0"}}else{if(!p){r=q.gq().style
o=n.r
r.marginRight=o}else{r=q.gq().style
r.marginRight="0"}if(n.b){r=q.gq().style
o=n.r
r.marginBottom=o}else{r=q.gq().style
r.marginBottom="0"}}}},
sak(a){var s,r=this,q="overflow-y",p="overflow-x"
r.y=a
if(a){s=r.e
if(r.x){s=s.style
s.toString
B.c.w(s,B.c.v(s,q),"scroll","")}else{s=s.style
s.toString
B.c.w(s,B.c.v(s,p),"scroll","")}}else{s=r.e
if(r.x){s=s.style
s.toString
B.c.w(s,B.c.v(s,q),"hidden","")}else{s=s.style
s.toString
B.c.w(s,B.c.v(s,p),"hidden","")}}},
scI(a){var s=this.e.style
s.toString
B.c.w(s,B.c.v(s,"align-items"),a,"")},
N(a){var s=0,r=A.e1(t.H),q,p=this,o
var $async$N=A.e3(function(b,c){if(b===1)return A.dZ(c,r)
while(true)switch(s){case 0:B.a.l(p.f,a)
o=p.e
o.children.toString
o.appendChild(a.e).toString
p.sD(p.r)
q=a.aj()
s=1
break
case 1:return A.e_(q,r)}})
return A.e0($async$N,r)},
gq(){return this.e}}
A.eX.prototype={
$1(a){return t.dW.a(a).gq()},
$S:36}
A.d2.prototype={}
A.fa.prototype={
bf(a){var s,r,q,p
this.a=a
window.localStorage.setItem("theme",a)
s=t.h
r=document
r.toString
A.fX(s,s,"T","querySelectorAll")
s=r.querySelectorAll("link")
s.toString
q=new A.aU(s,t.cD)
r=r.querySelector("head")
r.toString
p=q.bU(q,new A.fb(),new A.fc(r))
if(t.r.b(p)){p.href=a+"_theme.css"
s=this.b
s.l(0,A.m(s).c.a(a))}}}
A.fb.prototype={
$1(a){var s
t.h.a(a)
if(t.r.b(a)){s=a.href
s.toString
if(B.b.a3(s,"_theme.css"))return!0}return!1},
$S:37}
A.fc.prototype={
$0(){var s=document.createElement("link")
s.rel="stylesheet"
J.hY(this.a).l(0,s)
return s},
$S:38};(function aliases(){var s=J.bI.prototype
s.bY=s.i
s=J.aN.prototype
s.bZ=s.i})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers._static_2,p=hunkHelpers._instance_2u,o=hunkHelpers._instance_0u,n=hunkHelpers.installStaticTearOff,m=hunkHelpers._instance_1u
s(A,"lc","kd",5)
s(A,"ld","ke",5)
s(A,"le","kf",5)
r(A,"iS","l5",0)
q(A,"lg","l0",7)
r(A,"lf","l_",0)
p(A.D.prototype,"gcf","a5",7)
o(A.bo.prototype,"gct","ad",0)
n(A,"lx",2,null,["$1$2","$2"],["j_",function(a,b){return A.j_(a,b,t.o)}],13,0)
n(A,"lw",2,null,["$1$2","$2"],["iZ",function(a,b){return A.iZ(a,b,t.o)}],13,0)
var l
m(l=A.bP.prototype,"gcv","cw",4)
m(l,"gd7","d8",4)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.t,null)
q(A.t,[A.hl,J.bI,J.a9,A.x,A.cc,A.f5,A.j,A.O,A.K,A.bF,A.bj,A.M,A.fd,A.eW,A.bD,A.cj,A.z,A.eK,A.bN,A.cQ,A.dG,A.dg,A.fI,A.fp,A.ab,A.dA,A.dU,A.fJ,A.dr,A.bz,A.aD,A.bm,A.c4,A.at,A.D,A.ds,A.X,A.df,A.hC,A.aT,A.dx,A.cg,A.bo,A.dQ,A.cn,A.co,A.dF,A.aV,A.l,A.aq,A.ci,A.am,A.fN,A.fM,A.F,A.b5,A.d1,A.bZ,A.fr,A.eC,A.bb,A.I,A.dR,A.c1,A.eu,A.hh,A.a1,A.aL,A.dw,A.aP,A.ec,A.U,A.a0,A.bA,A.cx,A.eq,A.ep,A.cD,A.eZ,A.w,A.fi,A.Y,A.S,A.bc,A.eU,A.fa])
q(J.bI,[J.cO,J.bK,J.T,J.y,J.bL,J.aM,A.cZ])
q(J.T,[J.aN,A.B,A.b1,A.dv,A.ey,A.bB,A.ez,A.c,A.dB,A.ba,A.dH,A.dP,A.dX])
q(J.aN,[J.d4,J.bh,J.ao])
r(J.eE,J.y)
q(J.bL,[J.bJ,J.cP])
q(A.x,[A.b9,A.aF,A.cR,A.dk,A.d6,A.by,A.dz,A.d0,A.ak,A.dl,A.dj,A.aR,A.cE,A.cG])
r(A.bO,A.cc)
q(A.bO,[A.bi,A.du,A.aU,A.dt,A.cK])
q(A.bi,[A.cC,A.bk])
q(A.j,[A.o,A.ap,A.aS])
q(A.o,[A.A,A.aO])
r(A.bC,A.ap)
q(A.K,[A.bR,A.c2])
q(A.A,[A.C,A.be,A.dE])
q(A.M,[A.bH,A.cA,A.cB,A.dh,A.h2,A.h4,A.fl,A.fk,A.fP,A.fv,A.fD,A.f7,A.fH,A.eS,A.ev,A.ew,A.f1,A.fq,A.eA,A.eB,A.ed,A.ee,A.ef,A.eg,A.eh,A.ei,A.ej,A.es,A.et,A.ek,A.el,A.em,A.en,A.eo,A.eF,A.eG,A.eH,A.eI,A.eJ,A.eO,A.eQ,A.eL,A.eM,A.eN,A.er,A.h7,A.f2,A.f4,A.f3,A.f9,A.eV,A.eX,A.fb])
r(A.b8,A.bH)
r(A.bU,A.aF)
q(A.dh,[A.de,A.b_])
r(A.dq,A.by)
r(A.bQ,A.z)
q(A.bQ,[A.bM,A.dD])
q(A.cB,[A.h3,A.fQ,A.fW,A.fw,A.eR,A.ff,A.f6,A.h8,A.h9,A.eP,A.fT])
r(A.bd,A.cZ)
r(A.ce,A.bd)
r(A.cf,A.ce)
r(A.bS,A.cf)
r(A.d_,A.bS)
r(A.ck,A.dz)
q(A.cA,[A.fm,A.fn,A.fK,A.eD,A.fs,A.fz,A.fx,A.fu,A.fy,A.ft,A.fC,A.fB,A.fA,A.f8,A.fo,A.fF,A.fV,A.fG,A.fh,A.fg,A.fc])
q(A.aD,[A.br,A.c9])
r(A.bn,A.br)
r(A.a3,A.bn)
r(A.c5,A.bm)
r(A.ae,A.c5)
r(A.c3,A.c4)
r(A.c6,A.aT)
r(A.bs,A.cg)
r(A.dJ,A.cn)
r(A.ch,A.co)
r(A.cb,A.ch)
r(A.bX,A.ci)
r(A.b2,A.df)
q(A.am,[A.cI,A.cS])
q(A.b2,[A.cT,A.dp,A.dn])
r(A.dm,A.cI)
q(A.ak,[A.bW,A.cN])
q(A.B,[A.h,A.bl])
q(A.h,[A.p,A.ag])
q(A.p,[A.f,A.d])
q(A.f,[A.aZ,A.cu,A.b0,A.b4,A.cL,A.aA,A.W,A.bf,A.bg])
r(A.b3,A.dv)
q(A.c,[A.b7,A.ad,A.aB])
r(A.dC,A.dB)
r(A.az,A.dC)
r(A.V,A.ad)
r(A.dI,A.dH)
r(A.bT,A.dI)
r(A.c_,A.dP)
r(A.c7,A.bB)
r(A.dY,A.dX)
r(A.cd,A.dY)
r(A.cF,A.bX)
r(A.dy,A.cF)
r(A.c8,A.c9)
r(A.ca,A.X)
q(A.w,[A.d3,A.dN,A.dK,A.dS,A.dM,A.cW])
q(A.d3,[A.cz,A.Z,A.bP,A.da,A.dd,A.cy,A.cY,A.d2])
q(A.Z,[A.cv,A.cw,A.cM,A.cU])
r(A.cX,A.bP)
r(A.dO,A.dN)
r(A.d9,A.dO)
q(A.d9,[A.db,A.dc])
r(A.dL,A.dK)
r(A.d7,A.dL)
r(A.dT,A.dS)
r(A.di,A.dT)
r(A.bY,A.dM)
s(A.bi,A.bj)
s(A.ce,A.l)
s(A.cf,A.bF)
s(A.cc,A.l)
s(A.ci,A.aq)
s(A.co,A.aq)
s(A.dv,A.eu)
s(A.dB,A.l)
s(A.dC,A.a1)
s(A.dH,A.l)
s(A.dI,A.a1)
s(A.dP,A.z)
s(A.dX,A.l)
s(A.dY,A.a1)
s(A.dK,A.S)
s(A.dL,A.bc)
s(A.dS,A.S)
s(A.dT,A.bc)
s(A.dM,A.bc)
s(A.dN,A.eU)
s(A.dO,A.bc)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{u:"int",H:"double",a_:"num",e:"String",a5:"bool",I:"Null",q:"List"},mangledNames:{},types:["~()","~(~)","~(c)","~(V)","~(Z)","~(~())","@()","~(t,ac)","u(e?)","~(e,e)","~(e)","H(a0)","H(U)","0^(0^,0^)<a_>","I(@)","~(e,H)","I()","e(W)","~(@)","I(@,ac)","~(u,@)","I(t,ac)","D<@>(@)","~(t?,t?)","@(@)","aa<e,e>(aa<e,e>,e)","a5(W)","@(e)","a5(h)","p(h)","F(a0)","I(~())","~(Y<e>)","~(@,@)","~(Y<q<e>>)","I(~)","p(w)","a5(p)","aA()","@(@,e)","F(U)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.kx(v.typeUniverse,JSON.parse('{"d4":"aN","bh":"aN","ao":"aN","lP":"c","m1":"c","lO":"d","m2":"d","mm":"aB","lQ":"f","m5":"f","m3":"h","m0":"h","m6":"V","lS":"ad","lR":"ag","m8":"ag","m4":"az","cO":{"a5":[]},"bK":{"I":[]},"y":{"q":["1"],"o":["1"],"j":["1"]},"eE":{"y":["1"],"q":["1"],"o":["1"],"j":["1"]},"a9":{"K":["1"]},"bL":{"H":[],"a_":[]},"bJ":{"H":[],"u":[],"a_":[]},"cP":{"H":[],"a_":[]},"aM":{"e":[],"eY":[]},"b9":{"x":[]},"cC":{"l":["u"],"bj":["u"],"q":["u"],"o":["u"],"j":["u"],"l.E":"u"},"o":{"j":["1"]},"A":{"o":["1"],"j":["1"]},"O":{"K":["1"]},"ap":{"j":["2"],"j.E":"2"},"bC":{"ap":["1","2"],"o":["2"],"j":["2"],"j.E":"2"},"bR":{"K":["2"]},"C":{"A":["2"],"o":["2"],"j":["2"],"A.E":"2","j.E":"2"},"aS":{"j":["1"],"j.E":"1"},"c2":{"K":["1"]},"bi":{"l":["1"],"bj":["1"],"q":["1"],"o":["1"],"j":["1"]},"be":{"A":["1"],"o":["1"],"j":["1"],"A.E":"1","j.E":"1"},"bH":{"M":[],"an":[]},"b8":{"M":[],"an":[]},"bU":{"aF":[],"x":[]},"cR":{"x":[]},"dk":{"x":[]},"cj":{"ac":[]},"M":{"an":[]},"cA":{"M":[],"an":[]},"cB":{"M":[],"an":[]},"dh":{"M":[],"an":[]},"de":{"M":[],"an":[]},"b_":{"M":[],"an":[]},"d6":{"x":[]},"dq":{"x":[]},"bM":{"z":["1","2"],"aa":["1","2"],"z.K":"1","z.V":"2"},"aO":{"o":["1"],"j":["1"],"j.E":"1"},"bN":{"K":["1"]},"cQ":{"eY":[]},"dG":{"eT":[]},"dg":{"eT":[]},"fI":{"K":["eT"]},"bd":{"ai":["1"]},"bS":{"l":["u"],"ai":["u"],"q":["u"],"o":["u"],"j":["u"],"bF":["u"]},"d_":{"l":["u"],"k9":[],"ai":["u"],"q":["u"],"o":["u"],"j":["u"],"bF":["u"],"l.E":"u"},"dz":{"x":[]},"ck":{"aF":[],"x":[]},"D":{"ay":["1"]},"bz":{"x":[]},"a3":{"bn":["1"],"br":["1"],"aD":["1"]},"ae":{"c5":["1"],"bm":["1"],"X":["1"],"aG":["1"]},"c4":{"hw":["1"],"ix":["1"],"aG":["1"]},"c3":{"c4":["1"],"hw":["1"],"ix":["1"],"aG":["1"]},"bn":{"br":["1"],"aD":["1"]},"c5":{"bm":["1"],"X":["1"],"aG":["1"]},"bm":{"X":["1"],"aG":["1"]},"br":{"aD":["1"]},"c6":{"aT":["1"]},"dx":{"aT":["@"]},"bs":{"cg":["1"]},"bo":{"X":["1"]},"cn":{"is":[]},"dJ":{"cn":[],"is":[]},"cb":{"aq":["1"],"o":["1"],"j":["1"]},"aV":{"K":["1"]},"bk":{"l":["1"],"bj":["1"],"q":["1"],"o":["1"],"j":["1"],"l.E":"1"},"bO":{"l":["1"],"q":["1"],"o":["1"],"j":["1"]},"bQ":{"z":["1","2"],"aa":["1","2"]},"z":{"aa":["1","2"]},"bX":{"aq":["1"],"o":["1"],"j":["1"]},"ch":{"aq":["1"],"o":["1"],"j":["1"]},"dD":{"z":["e","@"],"aa":["e","@"],"z.K":"e","z.V":"@"},"dE":{"A":["e"],"o":["e"],"j":["e"],"A.E":"e","j.E":"e"},"cI":{"am":["e","q<u>"]},"cS":{"am":["t?","e"],"am.S":"t?"},"cT":{"b2":["e","t?"]},"dm":{"am":["e","q<u>"],"am.S":"e"},"dp":{"b2":["e","q<u>"]},"dn":{"b2":["q<u>","e"]},"H":{"a_":[]},"u":{"a_":[]},"q":{"o":["1"],"j":["1"]},"e":{"eY":[]},"by":{"x":[]},"aF":{"x":[]},"d0":{"x":[]},"ak":{"x":[]},"bW":{"x":[]},"cN":{"x":[]},"dl":{"x":[]},"dj":{"x":[]},"aR":{"x":[]},"cE":{"x":[]},"d1":{"x":[]},"bZ":{"x":[]},"cG":{"x":[]},"dR":{"ac":[]},"p":{"h":[],"B":[]},"aA":{"p":[],"h":[],"B":[]},"V":{"c":[]},"h":{"B":[]},"W":{"p":[],"h":[],"B":[]},"f":{"p":[],"h":[],"B":[]},"aZ":{"p":[],"h":[],"B":[]},"cu":{"p":[],"h":[],"B":[]},"b0":{"p":[],"h":[],"B":[]},"ag":{"h":[],"B":[]},"b4":{"p":[],"h":[],"B":[]},"bB":{"hv":["a_"]},"du":{"l":["p"],"q":["p"],"o":["p"],"j":["p"],"l.E":"p"},"aU":{"l":["1"],"q":["1"],"o":["1"],"j":["1"],"l.E":"1"},"cL":{"p":[],"h":[],"B":[]},"b7":{"c":[]},"az":{"l":["h"],"a1":["h"],"q":["h"],"ai":["h"],"o":["h"],"j":["h"],"l.E":"h","a1.E":"h"},"dt":{"l":["h"],"q":["h"],"o":["h"],"j":["h"],"l.E":"h"},"bT":{"l":["h"],"a1":["h"],"q":["h"],"ai":["h"],"o":["h"],"j":["h"],"l.E":"h","a1.E":"h"},"aB":{"c":[]},"bf":{"p":[],"h":[],"B":[]},"c_":{"z":["e","e"],"aa":["e","e"],"z.K":"e","z.V":"e"},"bg":{"p":[],"h":[],"B":[]},"ad":{"c":[]},"bl":{"fj":[],"B":[]},"c7":{"hv":["a_"]},"cd":{"l":["h"],"a1":["h"],"q":["h"],"ai":["h"],"o":["h"],"j":["h"],"l.E":"h","a1.E":"h"},"dy":{"aq":["e"],"o":["e"],"j":["e"]},"c9":{"aD":["1"]},"c8":{"c9":["1"],"aD":["1"]},"ca":{"X":["1"]},"aL":{"K":["1"]},"dw":{"fj":[],"B":[]},"cF":{"aq":["e"],"o":["e"],"j":["e"]},"cK":{"l":["p"],"q":["p"],"o":["p"],"j":["p"],"l.E":"p"},"d":{"p":[],"h":[],"B":[]},"cz":{"w":[]},"cv":{"Z":[],"w":[]},"cw":{"Z":[],"w":[]},"cM":{"Z":[],"w":[]},"cU":{"Z":[],"w":[]},"bP":{"w":[]},"cX":{"w":[]},"da":{"w":[]},"db":{"i_":[],"w":[]},"dd":{"w":[]},"dc":{"w":[]},"Z":{"w":[]},"cy":{"w":[]},"d7":{"w":[],"S":["q<e>"],"S.T":"q<e>"},"di":{"w":[],"S":["e"],"S.T":"e"},"bY":{"w":[]},"d9":{"w":[]},"cW":{"w":[]},"cY":{"w":[]},"d3":{"w":[]},"d2":{"w":[]}}'))
A.kw(v.typeUniverse,JSON.parse('{"o":1,"bi":1,"bd":1,"df":2,"bO":1,"bQ":2,"bX":1,"ch":1,"cc":1,"ci":1,"co":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type",k:'[\n    [\n        1503281700000,\n        "297.68000000",\n        "298.11000000",\n        "294.60000000",\n        "294.80000000",\n        "30.36263000",\n        1503282599999,\n        "9007.93596560",\n        29,\n        "17.48188000",\n        "5211.45263600",\n        "60491.45998746"\n    ],\n    [\n        1503282600000,\n        "295.50000000",\n        "295.50000000",\n        "295.50000000",\n        "295.50000000",\n        "0.05635000",\n        1503283499999,\n        "16.65142500",\n        2,\n        "0.05635000",\n        "16.65142500",\n        "60889.04229359"\n    ],\n    [\n        1503283500000,\n        "295.50000000",\n        "298.11000000",\n        "295.50000000",\n        "297.51000000",\n        "18.35786000",\n        1503284399999,\n        "5451.70097320",\n        26,\n        "15.65452000",\n        "4647.44789200",\n        "60876.76573896"\n    ],\n    [\n        1503284400000,\n        "299.00000000",\n        "299.00000000",\n        "297.12000000",\n        "298.80000000",\n        "22.21476000",\n        1503285299999,\n        "6611.42781500",\n        30,\n        "5.90276000",\n        "1763.82093500",\n        "60859.96022801"\n    ],\n    [\n        1503285300000,\n        "299.71000000",\n        "299.71000000",\n        "298.65000000",\n        "298.65000000",\n        "18.85361000",\n        1503286199999,\n        "5633.87220190",\n        10,\n        "18.85361000",\n        "5633.87220190",\n        "60921.08957952"\n    ],\n    [\n        1503286200000,\n        "297.94000000",\n        "299.71000000",\n        "297.94000000",\n        "299.71000000",\n        "11.12287000",\n        1503287099999,\n        "3320.86130410",\n        16,\n        "7.23468000",\n        "2159.65336060",\n        "61091.10642523"\n    ],\n    [\n        1503287100000,\n        "299.71000000",\n        "299.85000000",\n        "298.82000000",\n        "299.85000000",\n        "15.69342000",\n        1503287999999,\n        "4699.59671920",\n        16,\n        "13.27025000",\n        "3973.34843850",\n        "60631.59334700"\n    ],\n    [\n        1503288000000,\n        "300.03000000",\n        "301.85000000",\n        "299.11000000",\n        "301.85000000",\n        "25.69513000",\n        1503288899999,\n        "7732.63146310",\n        33,\n        "25.69513000",\n        "7732.63146310",\n        "61467.22623839"\n    ],\n    [\n        1503288900000,\n        "301.85000000",\n        "301.85000000",\n        "300.17000000",\n        "300.50000000",\n        "80.59265000",\n        1503289799999,\n        "24207.81463290",\n        41,\n        "80.38888000",\n        "24146.34970570",\n        "61608.70255541"\n    ],\n    [\n        1503289800000,\n        "300.50000000",\n        "303.39000000",\n        "300.50000000",\n        "303.21000000",\n        "94.41795000",\n        1503290699999,\n        "28511.51487800",\n        66,\n        "88.10789000",\n        "26609.89723250",\n        "61570.52914659"\n    ],\n    [\n        1503290700000,\n        "303.21000000",\n        "304.83000000",\n        "302.93000000",\n        "303.91000000",\n        "74.95247000",\n        1503291599999,\n        "22750.62403690",\n        47,\n        "70.79831000",\n        "21489.29176330",\n        "61387.21424642"\n    ],\n    [\n        1503291600000,\n        "303.91000000",\n        "306.22000000",\n        "303.91000000",\n        "306.22000000",\n        "46.15218000",\n        1503292499999,\n        "14099.94477720",\n        53,\n        "43.21655000",\n        "13202.14822160",\n        "61350.20442326"\n    ],\n    [\n        1503292500000,\n        "306.21000000",\n        "307.50000000",\n        "305.06000000",\n        "307.40000000",\n        "95.22415000",\n        1503293399999,\n        "29136.02181600",\n        79,\n        "83.92874000",\n        "25677.25404810",\n        "61751.54753761"\n    ],\n    [\n        1503293400000,\n        "307.40000000",\n        "312.71000000",\n        "306.77000000",\n        "311.35000000",\n        "82.86300000",\n        1503294299999,\n        "25638.79752980",\n        61,\n        "69.21139000",\n        "21423.51792190",\n        "61534.91004791"\n    ],\n    [\n        1503294300000,\n        "311.35000000",\n        "314.28000000",\n        "309.23000000",\n        "314.05000000",\n        "32.27047000",\n        1503295199999,\n        "10063.54602090",\n        39,\n        "25.14057000",\n        "7842.97725090",\n        "61196.73825392"\n    ],\n    [\n        1503295200000,\n        "314.05000000",\n        "315.00000000",\n        "313.28000000",\n        "314.90000000",\n        "16.24641000",\n        1503296099999,\n        "5105.20342260",\n        28,\n        "15.19792000",\n        "4776.73247540",\n        "60277.81701529"\n    ],\n    [\n        1503296100000,\n        "314.62000000",\n        "329.22000000",\n        "314.62000000",\n        "329.22000000",\n        "121.81620000",\n        1503296999999,\n        "39351.09786330",\n        99,\n        "91.52891000",\n        "29549.88017940",\n        "60098.82941573"\n    ],\n    [\n        1503297000000,\n        "329.22000000",\n        "329.49000000",\n        "320.13000000",\n        "323.06000000",\n        "60.04273000",\n        1503297899999,\n        "19436.23092130",\n        63,\n        "23.54775000",\n        "7680.46433080",\n        "59971.52739087"\n    ],\n    [\n        1503297900000,\n        "323.06000000",\n        "323.07000000",\n        "315.24000000",\n        "321.79000000",\n        "34.60355000",\n        1503298799999,\n        "10998.58232470",\n        79,\n        "16.59119000",\n        "5307.87853850",\n        "59658.51009210"\n    ],\n    [\n        1503298800000,\n        "320.28000000",\n        "325.30000000",\n        "317.00000000",\n        "321.78000000",\n        "33.14747000",\n        1503299699999,\n        "10632.64241350",\n        83,\n        "14.05172000",\n        "4515.59655530",\n        "60375.97324515"\n    ],\n    [\n        1503299700000,\n        "318.95000000",\n        "322.87000000",\n        "318.86000000",\n        "319.79000000",\n        "12.56093000",\n        1503300599999,\n        "4031.17991850",\n        65,\n        "11.43626000",\n        "3670.51678200",\n        "60601.35287020"\n    ],\n    [\n        1503300600000,\n        "317.67000000",\n        "318.71000000",\n        "314.12000000",\n        "318.70000000",\n        "23.99055000",\n        1503301499999,\n        "7567.39103210",\n        33,\n        "17.42954000",\n        "5502.49306130",\n        "61363.62516440"\n    ],\n    [\n        1503301500000,\n        "317.75000000",\n        "318.70000000",\n        "313.00000000",\n        "318.50000000",\n        "53.99529000",\n        1503302399999,\n        "17051.63631030",\n        46,\n        "26.49529000",\n        "8408.91031030",\n        "61675.92556078"\n    ],\n    [\n        1503302400000,\n        "317.48000000",\n        "317.48000000",\n        "317.48000000",\n        "317.48000000",\n        "0.04471000",\n        1503303299999,\n        "14.19453080",\n        1,\n        "0.04471000",\n        "14.19453080",\n        "61435.65229557"\n    ],\n    [\n        1503303300000,\n        "316.23000000",\n        "323.16000000",\n        "312.75000000",\n        "323.16000000",\n        "11.57598000",\n        1503304199999,\n        "3679.49394570",\n        34,\n        "8.18237000",\n        "2611.41345540",\n        "61683.57161669"\n    ],\n    [\n        1503304200000,\n        "319.69000000",\n        "324.30000000",\n        "319.69000000",\n        "323.29000000",\n        "7.06748000",\n        1503305099999,\n        "2279.37785320",\n        18,\n        "5.74842000",\n        "1853.11042360",\n        "61355.51549256"\n    ],\n    [\n        1503305100000,\n        "317.95000000",\n        "319.28000000",\n        "317.95000000",\n        "318.72000000",\n        "2.82183000",\n        1503305999999,\n        "899.44606560",\n        13,\n        "0.65455000",\n        "208.98472400",\n        "61829.55613141"\n    ],\n    [\n        1503306000000,\n        "317.86000000",\n        "318.27000000",\n        "314.98000000",\n        "314.98000000",\n        "5.89314000",\n        1503306899999,\n        "1859.24891460",\n        10,\n        "0.95214000",\n        "302.70692460",\n        "61885.65259543"\n    ],\n    [\n        1503306900000,\n        "317.86000000",\n        "318.26000000",\n        "317.85000000",\n        "317.85000000",\n        "3.68750000",\n        1503307799999,\n        "1172.92019220",\n        4,\n        "3.68750000",\n        "1172.92019220",\n        "62272.37012008"\n    ],\n    [\n        1503307800000,\n        "317.25000000",\n        "317.25000000",\n        "315.00000000",\n        "315.00000000",\n        "8.09128000",\n        1503308699999,\n        "2556.18258000",\n        6,\n        "1.91528000",\n        "607.62258000",\n        "62377.26264384"\n    ],\n    [\n        1503308700000,\n        "315.01000000",\n        "317.97000000",\n        "315.00000000",\n        "317.29000000",\n        "5.86536000",\n        1503309599999,\n        "1854.32104390",\n        21,\n        "0.23499000",\n        "74.08318050",\n        "62718.70385678"\n    ],\n    [\n        1503309600000,\n        "317.29000000",\n        "325.30000000",\n        "317.29000000",\n        "322.08000000",\n        "71.46331000",\n        1503310499999,\n        "22970.78668940",\n        78,\n        "52.43679000",\n        "16841.54617470",\n        "62476.17859560"\n    ],\n    [\n        1503310500000,\n        "322.08000000",\n        "322.08000000",\n        "318.27000000",\n        "320.00000000",\n        "13.08624000",\n        1503311399999,\n        "4178.73491780",\n        33,\n        "0.06243000",\n        "19.97760000",\n        "62526.74228344"\n    ],\n    [\n        1503311400000,\n        "318.27000000",\n        "321.29000000",\n        "316.77000000",\n        "321.29000000",\n        "0.39119000",\n        1503312299999,\n        "123.97388770",\n        5,\n        "0.00319000",\n        "1.02491510",\n        "62469.65362363"\n    ],\n    [\n        1503312300000,\n        "321.21000000",\n        "321.21000000",\n        "321.21000000",\n        "321.21000000",\n        "0.40526000",\n        1503313199999,\n        "130.17356460",\n        2,\n        "0.40526000",\n        "130.17356460",\n        "62383.62513945"\n    ],\n    [\n        1503313200000,\n        "318.99000000",\n        "324.97000000",\n        "318.99000000",\n        "324.97000000",\n        "2.18185000",\n        1503314099999,\n        "700.59117780",\n        10,\n        "2.18185000",\n        "700.59117780",\n        "61773.94521412"\n    ],\n    [\n        1503314100000,\n        "320.87000000",\n        "324.97000000",\n        "314.63000000",\n        "314.97000000",\n        "12.13399000",\n        1503314999999,\n        "3836.96140830",\n        22,\n        "1.74717000",\n        "556.11329370",\n        "61859.80781084"\n    ],\n    [\n        1503315000000,\n        "314.80000000",\n        "322.19000000",\n        "312.60000000",\n        "313.23000000",\n        "25.00570000",\n        1503315899999,\n        "7845.45613080",\n        55,\n        "19.87571000",\n        "6236.02665590",\n        "61614.91884410"\n    ],\n    [\n        1503315900000,\n        "324.97000000",\n        "333.66000000",\n        "321.13000000",\n        "331.53000000",\n        "37.66204000",\n        1503316799999,\n        "12338.98748510",\n        48,\n        "29.41894000",\n        "9637.23548090",\n        "61598.97721378"\n    ],\n    [\n        1503316800000,\n        "331.33000000",\n        "331.33000000",\n        "326.70000000",\n        "328.60000000",\n        "28.22329000",\n        1503317699999,\n        "9300.00932390",\n        27,\n        "23.92873000",\n        "7890.08902310",\n        "61865.68961057"\n    ],\n    [\n        1503317700000,\n        "326.70000000",\n        "331.30000000",\n        "325.42000000",\n        "331.30000000",\n        "23.83702000",\n        1503318599999,\n        "7792.20006000",\n        29,\n        "13.66312000",\n        "4473.62713000",\n        "61958.23048919"\n    ],\n    [\n        1503318600000,\n        "330.31000000",\n        "331.30000000",\n        "326.70000000",\n        "326.70000000",\n        "14.72846000",\n        1503319499999,\n        "4856.54825560",\n        9,\n        "11.81071000",\n        "3901.92234060",\n        "62000.56031635"\n    ],\n    [\n        1503319500000,\n        "328.52000000",\n        "331.30000000",\n        "328.52000000",\n        "331.30000000",\n        "28.03389000",\n        1503320399999,\n        "9253.68016220",\n        33,\n        "28.03389000",\n        "9253.68016220",\n        "61988.88139992"\n    ],\n    [\n        1503320400000,\n        "331.30000000",\n        "334.26000000",\n        "329.41000000",\n        "333.33000000",\n        "41.35885000",\n        1503321299999,\n        "13719.48139280",\n        45,\n        "32.93583000",\n        "10923.00522650",\n        "61958.56786555"\n    ],\n    [\n        1503321300000,\n        "337.64000000",\n        "341.18000000",\n        "336.00000000",\n        "337.06000000",\n        "190.88994000",\n        1503322199999,\n        "64575.11114860",\n        108,\n        "185.83986000",\n        "62870.72620250",\n        "62176.93352612"\n    ],\n    [\n        1503322200000,\n        "337.06000000",\n        "342.71000000",\n        "336.54000000",\n        "342.71000000",\n        "48.76702000",\n        1503323099999,\n        "16489.69289640",\n        30,\n        "44.82707000",\n        "15148.22631750",\n        "62480.31224707"\n    ],\n    [\n        1503323100000,\n        "345.27000000",\n        "346.52000000",\n        "342.81000000",\n        "346.52000000",\n        "121.37628000",\n        1503323999999,\n        "41837.44355400",\n        97,\n        "111.89924000",\n        "38567.73428620",\n        "62322.29032004"\n    ],\n    [\n        1503324000000,\n        "344.38000000",\n        "345.31000000",\n        "335.00000000",\n        "343.46000000",\n        "117.37890000",\n        1503324899999,\n        "39819.79538530",\n        50,\n        "104.34261000",\n        "35438.20920350",\n        "62509.98026560"\n    ],\n    [\n        1503324900000,\n        "343.00000000",\n        "343.00000000",\n        "334.74000000",\n        "334.75000000",\n        "34.03746000",\n        1503325799999,\n        "11493.11762230",\n        41,\n        "26.82565000",\n        "9065.89716970",\n        "62683.03808716"\n    ],\n    [\n        1503325800000,\n        "336.35000000",\n        "336.35000000",\n        "328.68000000",\n        "332.33000000",\n        "131.02737000",\n        1503326699999,\n        "43576.95558630",\n        63,\n        "94.88446000",\n        "31625.06881240",\n        "62852.66118910"\n    ],\n    [\n        1503326700000,\n        "332.33000000",\n        "335.74000000",\n        "332.00000000",\n        "334.17000000",\n        "97.50275000",\n        1503327599999,\n        "32458.55250980",\n        51,\n        "81.35713000",\n        "27088.30381880",\n        "63151.08263069"\n    ],\n    [\n        1503327600000,\n        "334.17000000",\n        "335.74000000",\n        "332.53000000",\n        "332.53000000",\n        "43.73350000",\n        1503328499999,\n        "14610.81955950",\n        42,\n        "34.54322000",\n        "11527.79558630",\n        "63851.61007452"\n    ],\n    [\n        1503328500000,\n        "332.53000000",\n        "334.34000000",\n        "330.89000000",\n        "331.33000000",\n        "107.64277000",\n        1503329399999,\n        "35715.29684610",\n        63,\n        "98.43834000",\n        "32658.10343120",\n        "64012.04771828"\n    ],\n    [\n        1503329400000,\n        "332.33000000",\n        "337.42000000",\n        "329.47000000",\n        "337.42000000",\n        "102.66651000",\n        1503330299999,\n        "34193.53267000",\n        57,\n        "83.20686000",\n        "27709.06663220",\n        "64547.19141522"\n    ],\n    [\n        1503330300000,\n        "333.79000000",\n        "338.34000000",\n        "333.79000000",\n        "334.94000000",\n        "96.23624000",\n        1503331199999,\n        "32373.20277820",\n        56,\n        "77.16266000",\n        "25944.20898980",\n        "64981.30384834"\n    ],\n    [\n        1503331200000,\n        "334.34000000",\n        "336.76000000",\n        "333.25000000",\n        "335.73000000",\n        "142.11002000",\n        1503332099999,\n        "47521.65755860",\n        67,\n        "121.97368000",\n        "40765.26416920",\n        "65067.65693334"\n    ],\n    [\n        1503332100000,\n        "335.73000000",\n        "338.34000000",\n        "333.75000000",\n        "338.34000000",\n        "96.56997000",\n        1503332999999,\n        "32326.08711190",\n        52,\n        "82.52432000",\n        "27623.08132750",\n        "65051.84184980"\n    ],\n    [\n        1503333000000,\n        "338.34000000",\n        "338.34000000",\n        "335.17000000",\n        "337.04000000",\n        "38.22824000",\n        1503333899999,\n        "12890.46461840",\n        30,\n        "28.71917000",\n        "9686.67571840",\n        "65161.14098180"\n    ],\n    [\n        1503333900000,\n        "338.33000000",\n        "338.33000000",\n        "338.33000000",\n        "338.33000000",\n        "0.01470000",\n        1503334799999,\n        "4.97345100",\n        1,\n        "0.01470000",\n        "4.97345100",\n        "65167.07056353"\n    ],\n    [\n        1503334800000,\n        "337.95000000",\n        "341.50000000",\n        "337.65000000",\n        "341.50000000",\n        "78.41473000",\n        1503335699999,\n        "26664.71665690",\n        31,\n        "67.43217000",\n        "22953.12305490",\n        "65228.86030056"\n    ],\n    [\n        1503335700000,\n        "341.45000000",\n        "342.72000000",\n        "336.56000000",\n        "339.50000000",\n        "163.35427000",\n        1503336599999,\n        "55525.83908530",\n        66,\n        "126.21438000",\n        "42918.31715940",\n        "65345.22823908"\n    ],\n    [\n        1503336600000,\n        "339.50000000",\n        "340.83000000",\n        "333.75000000",\n        "335.34000000",\n        "150.07237000",\n        1503337499999,\n        "50618.24389630",\n        53,\n        "133.13848000",\n        "44872.32886080",\n        "65398.34083162"\n    ],\n    [\n        1503337500000,\n        "335.34000000",\n        "335.34000000",\n        "330.80000000",\n        "332.33000000",\n        "117.24870000",\n        1503338399999,\n        "38977.73958180",\n        48,\n        "82.46280000",\n        "27371.52447750",\n        "65414.32143113"\n    ],\n    [\n        1503338400000,\n        "332.12000000",\n        "332.61000000",\n        "330.32000000",\n        "330.32000000",\n        "98.28650000",\n        1503339299999,\n        "32610.27888480",\n        43,\n        "86.42985000",\n        "28672.09344310",\n        "65520.17066675"\n    ],\n    [\n        1503339300000,\n        "329.94000000",\n        "333.63000000",\n        "328.73000000",\n        "333.53000000",\n        "22.61820000",\n        1503340199999,\n        "7474.51654070",\n        37,\n        "15.81714000",\n        "5229.32833770",\n        "65653.76133773"\n    ],\n    [\n        1503340200000,\n        "330.52000000",\n        "333.06000000",\n        "327.81000000",\n        "328.48000000",\n        "161.22171000",\n        1503341099999,\n        "53166.90893430",\n        46,\n        "107.65507000",\n        "35473.52668640",\n        "65770.05576064"\n    ],\n    [\n        1503341100000,\n        "328.48000000",\n        "328.48000000",\n        "316.82000000",\n        "316.82000000",\n        "221.52670000",\n        1503341999999,\n        "71477.30271460",\n        75,\n        "131.03372000",\n        "42437.97678810",\n        "65598.72702201"\n    ],\n    [\n        1503342000000,\n        "328.47000000",\n        "332.09000000",\n        "328.46000000",\n        "332.09000000",\n        "167.12129000",\n        1503342899999,\n        "55234.15548210",\n        82,\n        "58.52641000",\n        "19280.72471110",\n        "65655.76995786"\n    ],\n    [\n        1503342900000,\n        "332.09000000",\n        "332.09000000",\n        "327.70000000",\n        "329.13000000",\n        "24.60494000",\n        1503343799999,\n        "8139.73597120",\n        52,\n        "19.35567000",\n        "6415.06803920",\n        "65672.29132001"\n    ],\n    [\n        1503343800000,\n        "330.52000000",\n        "331.61000000",\n        "328.40000000",\n        "330.52000000",\n        "126.23950000",\n        1503344699999,\n        "41723.45684110",\n        55,\n        "122.34650000",\n        "40439.97124110",\n        "65721.74240185"\n    ],\n    [\n        1503344700000,\n        "330.52000000",\n        "332.33000000",\n        "329.69000000",\n        "329.71000000",\n        "107.44088000",\n        1503345599999,\n        "35564.21538310",\n        59,\n        "86.28765000",\n        "28561.92971900",\n        "65821.67122599"\n    ],\n    [\n        1503345600000,\n        "332.27000000",\n        "332.74000000",\n        "326.69000000",\n        "329.32000000",\n        "173.40312000",\n        1503346499999,\n        "57305.47526260",\n        60,\n        "144.20498000",\n        "47670.96522400",\n        "65787.62381487"\n    ],\n    [\n        1503346500000,\n        "328.31000000",\n        "328.31000000",\n        "325.37000000",\n        "325.47000000",\n        "86.65291000",\n        1503347399999,\n        "28365.37160710",\n        38,\n        "73.22661000",\n        "23993.33082710",\n        "65841.31764488"\n    ],\n    [\n        1503347400000,\n        "326.90000000",\n        "326.90000000",\n        "322.93000000",\n        "324.29000000",\n        "17.18078000",\n        1503348299999,\n        "5562.62993260",\n        17,\n        "11.52879000",\n        "3731.21561290",\n        "65829.59611442"\n    ],\n    [\n        1503348300000,\n        "323.28000000",\n        "326.80000000",\n        "320.88000000",\n        "325.28000000",\n        "12.22678000",\n        1503349199999,\n        "3950.37149720",\n        24,\n        "5.39992000",\n        "1745.97094280",\n        "65877.36386272"\n    ],\n    [\n        1503349200000,\n        "324.05000000",\n        "324.05000000",\n        "319.49000000",\n        "319.49000000",\n        "24.99571000",\n        1503350099999,\n        "8014.66736090",\n        22,\n        "0.08839000",\n        "28.54201490",\n        "65892.85297319"\n    ],\n    [\n        1503350100000,\n        "320.33000000",\n        "320.33000000",\n        "318.42000000",\n        "318.42000000",\n        "22.29413000",\n        1503350999999,\n        "7099.70241350",\n        23,\n        "0.00813000",\n        "2.60428290",\n        "65929.01968964"\n    ],\n    [\n        1503351000000,\n        "318.42000000",\n        "319.20000000",\n        "318.42000000",\n        "319.20000000",\n        "5.61122000",\n        1503351899999,\n        "1788.49573650",\n        10,\n        "2.27422000",\n        "725.92819650",\n        "65965.42092546"\n    ],\n    [\n        1503351900000,\n        "319.20000000",\n        "326.80000000",\n        "318.81000000",\n        "326.79000000",\n        "5.55852000",\n        1503352799999,\n        "1793.89105020",\n        19,\n        "5.02970000",\n        "1622.87102400",\n        "65896.01203789"\n    ],\n    [\n        1503352800000,\n        "325.79000000",\n        "325.79000000",\n        "322.09000000",\n        "324.78000000",\n        "20.46746000",\n        1503353699999,\n        "6623.07699740",\n        48,\n        "19.60305000",\n        "6343.36256550",\n        "65993.18539105"\n    ],\n    [\n        1503353700000,\n        "324.78000000",\n        "324.78000000",\n        "321.12000000",\n        "323.29000000",\n        "3.00550000",\n        1503354599999,\n        "971.26541910",\n        19,\n        "2.57694000",\n        "833.07322230",\n        "65977.37570358"\n    ],\n    [\n        1503354600000,\n        "323.29000000",\n        "324.76000000",\n        "321.18000000",\n        "322.37000000",\n        "3.06890000",\n        1503355499999,\n        "991.28798400",\n        22,\n        "2.84255000",\n        "918.11129250",\n        "66018.45609920"\n    ],\n    [\n        1503355500000,\n        "323.59000000",\n        "323.59000000",\n        "318.45000000",\n        "318.45000000",\n        "3.29353000",\n        1503356399999,\n        "1050.79701650",\n        11,\n        "0.02420000",\n        "7.83087800",\n        "66068.56586422"\n    ],\n    [\n        1503356400000,\n        "318.25000000",\n        "321.87000000",\n        "318.25000000",\n        "319.78000000",\n        "9.42675000",\n        1503357299999,\n        "3013.54846860",\n        10,\n        "8.84538000",\n        "2827.55076450",\n        "66063.02875295"\n    ],\n    [\n        1503357300000,\n        "318.01000000",\n        "319.77000000",\n        "317.05000000",\n        "318.67000000",\n        "8.56051000",\n        1503358199999,\n        "2719.77176970",\n        12,\n        "1.57251000",\n        "500.83478970",\n        "66056.25696143"\n    ],\n    [\n        1503358200000,\n        "316.12000000",\n        "320.79000000",\n        "316.12000000",\n        "319.94000000",\n        "25.61007000",\n        1503359099999,\n        "8163.99636650",\n        30,\n        "6.79605000",\n        "2168.38247210",\n        "66153.80480277"\n    ],\n    [\n        1503359100000,\n        "320.79000000",\n        "323.29000000",\n        "318.55000000",\n        "323.29000000",\n        "35.82262000",\n        1503359999999,\n        "11469.27696150",\n        38,\n        "21.73670000",\n        "6969.13263070",\n        "66203.84022245"\n    ],\n    [\n        1503360000000,\n        "321.04000000",\n        "322.29000000",\n        "319.53000000",\n        "319.53000000",\n        "27.39102000",\n        1503360899999,\n        "8783.87659410",\n        39,\n        "21.53562000",\n        "6910.14862980",\n        "66316.28874629"\n    ],\n    [\n        1503360900000,\n        "318.72000000",\n        "322.00000000",\n        "318.72000000",\n        "319.90000000",\n        "51.06491000",\n        1503361799999,\n        "16338.80095540",\n        61,\n        "51.06478000",\n        "16338.75931900",\n        "66315.20682052"\n    ],\n    [\n        1503361800000,\n        "319.90000000",\n        "330.41000000",\n        "319.90000000",\n        "329.31000000",\n        "231.67094000",\n        1503362699999,\n        "75850.85757020",\n        81,\n        "133.42531000",\n        "43608.94078340",\n        "66314.82245344"\n    ],\n    [\n        1503362700000,\n        "327.66000000",\n        "329.32000000",\n        "323.04000000",\n        "323.04000000",\n        "96.22263000",\n        1503363599999,\n        "31422.26237200",\n        107,\n        "44.07414000",\n        "14470.40576570",\n        "65997.20452579"\n    ],\n    [\n        1503363600000,\n        "323.04000000",\n        "325.07000000",\n        "320.00000000",\n        "320.00000000",\n        "35.95224000",\n        1503364499999,\n        "11597.27340340",\n        78,\n        "12.29151000",\n        "3978.96869690",\n        "65972.09292362"\n    ],\n    [\n        1503364500000,\n        "320.00000000",\n        "323.58000000",\n        "317.23000000",\n        "322.50000000",\n        "6.79580000",\n        1503365399999,\n        "2175.54634910",\n        23,\n        "4.47452000",\n        "1436.40755060",\n        "65988.26320595"\n    ],\n    [\n        1503365400000,\n        "317.24000000",\n        "322.50000000",\n        "306.88000000",\n        "315.43000000",\n        "103.66949000",\n        1503366299999,\n        "32226.41701420",\n        110,\n        "10.05345000",\n        "3158.12512120",\n        "65852.07088794"\n    ],\n    [\n        1503366300000,\n        "313.99000000",\n        "313.99000000",\n        "302.27000000",\n        "309.97000000",\n        "23.31460000",\n        1503367199999,\n        "7077.73550940",\n        21,\n        "0.79460000",\n        "247.49301400",\n        "65609.33193067"\n    ],\n    [\n        1503367200000,\n        "309.96000000",\n        "310.58000000",\n        "302.27000000",\n        "305.00000000",\n        "16.60768000",\n        1503368099999,\n        "5148.74447980",\n        12,\n        "11.42765000",\n        "3541.42681170",\n        "65505.51498568"\n    ],\n    [\n        1503368100000,\n        "301.40000000",\n        "315.20000000",\n        "301.40000000",\n        "315.20000000",\n        "4.32988000",\n        1503368999999,\n        "1305.46826000",\n        4,\n        "0.03206000",\n        "10.10531200",\n        "65326.22220311"\n    ],\n    [\n        1503369000000,\n        "315.19000000",\n        "315.19000000",\n        "307.30000000",\n        "311.39000000",\n        "19.84144000",\n        1503369899999,\n        "6136.54781810",\n        55,\n        "1.08020000",\n        "335.86111420",\n        "65555.66192323"\n    ],\n    [\n        1503369900000,\n        "308.35000000",\n        "314.99000000",\n        "308.35000000",\n        "312.99000000",\n        "102.71191000",\n        1503370799999,\n        "31906.45615110",\n        66,\n        "48.16721000",\n        "14981.25721110",\n        "65695.29031307"\n    ],\n    [\n        1503370800000,\n        "310.00000000",\n        "317.68000000",\n        "307.54000000",\n        "314.82000000",\n        "61.28978000",\n        1503371699999,\n        "19108.35617640",\n        27,\n        "45.16699000",\n        "14102.57927640",\n        "65915.51784828"\n    ],\n    [\n        1503371700000,\n        "314.82000000",\n        "314.82000000",\n        "302.18000000",\n        "314.77000000",\n        "6.94474000",\n        1503372599999,\n        "2100.68356300",\n        9,\n        "0.07597000",\n        "23.91328340",\n        "65873.18484950"\n    ],\n    [\n        1503372600000,\n        "302.19000000",\n        "313.10000000",\n        "302.08000000",\n        "313.09000000",\n        "10.44101000",\n        1503373499999,\n        "3181.75846980",\n        13,\n        "8.91786000",\n        "2721.49000280",\n        "65910.43487787"\n    ],\n    [\n        1503373500000,\n        "310.06000000",\n        "310.06000000",\n        "280.00000000",\n        "280.00000000",\n        "11.36717000",\n        1503374399999,\n        "3313.17876090",\n        16,\n        "1.73352000",\n        "525.85228440",\n        "66252.18619501"\n    ],\n    [\n        1503374400000,\n        "144.21000000",\n        "309.03000000",\n        "144.21000000",\n        "304.86000000",\n        "80.98701000",\n        1503375299999,\n        "21655.41961550",\n        64,\n        "66.87631000",\n        "17371.70594030",\n        "65938.17576486"\n    ],\n    [\n        1503375300000,\n        "304.86000000",\n        "309.03000000",\n        "300.75000000",\n        "302.98000000",\n        "32.55377000",\n        1503376199999,\n        "9851.91608750",\n        38,\n        "30.18593000",\n        "9135.25936510",\n        "66384.09421369"\n    ],\n    [\n        1503376200000,\n        "300.00000000",\n        "302.96000000",\n        "298.77000000",\n        "301.20000000",\n        "9.07217000",\n        1503377099999,\n        "2719.39997970",\n        16,\n        "1.01680000",\n        "307.87262570",\n        "66282.20597733"\n    ],\n    [\n        1503377100000,\n        "300.00000000",\n        "300.00000000",\n        "287.00000000",\n        "287.00000000",\n        "27.30081000",\n        1503377999999,\n        "8057.57300510",\n        24,\n        "12.21779000",\n        "3641.55200030",\n        "66532.32151537"\n    ],\n    [\n        1503378000000,\n        "287.00000000",\n        "297.18000000",\n        "283.87000000",\n        "290.00000000",\n        "7.76620000",\n        1503378899999,\n        "2217.13228780",\n        19,\n        "1.26816000",\n        "366.72593120",\n        "66151.99891110"\n    ],\n    [\n        1503378900000,\n        "283.87000000",\n        "303.00000000",\n        "282.39000000",\n        "303.00000000",\n        "8.39797000",\n        1503379799999,\n        "2420.46193250",\n        33,\n        "6.13451000",\n        "1779.15005790",\n        "66169.51021993"\n    ],\n    [\n        1503379800000,\n        "300.61000000",\n        "300.61000000",\n        "279.96000000",\n        "279.96000000",\n        "12.13558000",\n        1503380699999,\n        "3407.76910850",\n        17,\n        "0.00753000",\n        "2.26359330",\n        "65953.66108177"\n    ],\n    [\n        1503380700000,\n        "279.96000000",\n        "279.96000000",\n        "279.96000000",\n        "279.96000000",\n        "0.00000000",\n        1503381599999,\n        "0.00000000",\n        0,\n        "0.00000000",\n        "0.00000000",\n        "65951.97492967"\n    ],\n    [\n        1503381600000,\n        "302.99000000",\n        "302.99000000",\n        "302.90000000",\n        "302.90000000",\n        "13.05074000",\n        1503382499999,\n        "3953.90664100",\n        10,\n        "12.77676000",\n        "3870.89344080",\n        "65989.80141414"\n    ],\n    [\n        1503382500000,\n        "302.90000000",\n        "309.04000000",\n        "285.69000000",\n        "309.04000000",\n        "79.24195000",\n        1503383399999,\n        "24225.85378600",\n        71,\n        "78.98586000",\n        "24148.28412500",\n        "65779.97202964"\n    ],\n    [\n        1503383400000,\n        "309.04000000",\n        "310.24000000",\n        "307.33000000",\n        "310.24000000",\n        "48.05568000",\n        1503384299999,\n        "14842.11560510",\n        84,\n        "43.47228000",\n        "13426.98956210",\n        "65635.05887480"\n    ],\n    [\n        1503384300000,\n        "308.43000000",\n        "308.43000000",\n        "305.22000000",\n        "305.37000000",\n        "87.66351000",\n        1503385199999,\n        "26882.24063260",\n        60,\n        "69.37481000",\n        "21283.66561740",\n        "65606.46173591"\n    ],\n    [\n        1503385200000,\n        "305.37000000",\n        "305.37000000",\n        "299.25000000",\n        "300.23000000",\n        "67.01938000",\n        1503386099999,\n        "20128.61395730",\n        56,\n        "59.09513000",\n        "17739.49328660",\n        "65362.92944807"\n    ],\n    [\n        1503386100000,\n        "300.23000000",\n        "300.24000000",\n        "294.38000000",\n        "297.76000000",\n        "125.53231000",\n        1503386999999,\n        "37219.10098660",\n        108,\n        "105.13734000",\n        "31192.45054920",\n        "65884.59142509"\n    ],\n    [\n        1503387000000,\n        "297.75000000",\n        "303.39000000",\n        "296.29000000",\n        "303.39000000",\n        "68.02760000",\n        1503387899999,\n        "20424.85063720",\n        90,\n        "62.49465000",\n        "18770.70933620",\n        "65430.09817445"\n    ],\n    [\n        1503387900000,\n        "303.39000000",\n        "303.39000000",\n        "300.35000000",\n        "300.35000000",\n        "40.66781000",\n        1503388799999,\n        "12303.76624520",\n        86,\n        "37.48983000",\n        "11340.58693540",\n        "65486.08485167"\n    ],\n    [\n        1503388800000,\n        "300.35000000",\n        "302.26000000",\n        "296.00000000",\n        "301.08000000",\n        "327.21036000",\n        1503389699999,\n        "97115.94925830",\n        110,\n        "302.67852000",\n        "89820.55296120",\n        "65730.06205120"\n    ],\n    [\n        1503389700000,\n        "301.08000000",\n        "301.08000000",\n        "297.92000000",\n        "300.29000000",\n        "30.36949000",\n        1503390599999,\n        "9091.79409160",\n        64,\n        "28.52535000",\n        "8540.98566600",\n        "65656.12829433"\n    ],\n    [\n        1503390600000,\n        "300.29000000",\n        "300.29000000",\n        "297.30000000",\n        "297.30000000",\n        "74.43895000",\n        1503391499999,\n        "22203.73850160",\n        45,\n        "70.89698000",\n        "21140.12033030",\n        "65704.72311539"\n    ],\n    [\n        1503391500000,\n        "297.30000000",\n        "299.82000000",\n        "297.30000000",\n        "299.82000000",\n        "84.25892000",\n        1503392399999,\n        "25142.14366240",\n        60,\n        "82.46450000",\n        "24606.16247130",\n        "65568.51691571"\n    ]\n]',m:'[\n    [\n        1525421460000,\n        "0.50000000",\n        "0.50000000",\n        "0.50000000",\n        "0.50000000",\n        "109.51000000",\n        1525421519999,\n        "54.75500000",\n        1,\n        "0.00000000",\n        "0.00000000",\n        "0"\n    ],\n    [\n        1525421520000,\n        "0.90000000",\n        "0.92999000",\n        "0.85000000",\n        "0.90000000",\n        "167543.47000000",\n        1525421579999,\n        "150546.37202190",\n        147,\n        "129949.27000000",\n        "116854.60443150",\n        "0"\n    ],\n    [\n        1525421580000,\n        "0.90000000",\n        "0.93000000",\n        "0.89001000",\n        "0.91000000",\n        "179750.59000000",\n        1525421639999,\n        "162900.06596820",\n        153,\n        "109352.28000000",\n        "99399.42975160",\n        "0"\n    ],\n    [\n        1525421640000,\n        "0.91000000",\n        "1.50000000",\n        "0.90009000",\n        "0.92999000",\n        "107222.48000000",\n        1525421699999,\n        "102862.81182390",\n        209,\n        "58084.74000000",\n        "57344.32530920",\n        "0"\n    ],\n    [\n        1525421700000,\n        "0.92999000",\n        "0.95001000",\n        "0.91020000",\n        "0.91020000",\n        "171304.56000000",\n        1525421759999,\n        "157893.85142140",\n        535,\n        "28832.40000000",\n        "26792.20720380",\n        "0"\n    ],\n    [\n        1525421760000,\n        "0.91020000",\n        "0.92981000",\n        "0.91020000",\n        "0.92977000",\n        "62126.16000000",\n        1525421819999,\n        "57208.88479600",\n        139,\n        "39303.35000000",\n        "36393.68178560",\n        "0"\n    ],\n    [\n        1525421820000,\n        "0.92976000",\n        "0.92977000",\n        "0.91400000",\n        "0.91500000",\n        "162886.50000000",\n        1525421879999,\n        "149223.88084220",\n        352,\n        "29658.92000000",\n        "27210.16691720",\n        "0"\n    ],\n    [\n        1525421880000,\n        "0.91500000",\n        "0.92498000",\n        "0.91400000",\n        "0.92491000",\n        "80941.84000000",\n        1525421939999,\n        "74567.69986560",\n        169,\n        "38143.14000000",\n        "35133.76841570",\n        "0"\n    ],\n    [\n        1525421940000,\n        "0.92480000",\n        "0.93000000",\n        "0.92310000",\n        "0.92800000",\n        "92286.96000000",\n        1525421999999,\n        "85492.73116940",\n        178,\n        "48690.61000000",\n        "45129.20975700",\n        "0"\n    ],\n    [\n        1525422000000,\n        "0.92800000",\n        "0.93900000",\n        "0.92730000",\n        "0.93402000",\n        "235394.56000000",\n        1525422059999,\n        "220042.55222280",\n        364,\n        "32927.75000000",\n        "30750.58761630",\n        "0"\n    ],\n    [\n        1525422060000,\n        "0.93402000",\n        "0.93822000",\n        "0.92012000",\n        "0.93100000",\n        "294366.25000000",\n        1525422119999,\n        "274501.92829560",\n        526,\n        "34136.41000000",\n        "31861.31168870",\n        "0"\n    ],\n    [\n        1525422120000,\n        "0.92495000",\n        "0.93096000",\n        "0.92155000",\n        "0.92389000",\n        "88288.65000000",\n        1525422179999,\n        "81518.40604880",\n        162,\n        "30917.73000000",\n        "28545.36548680",\n        "0"\n    ],\n    [\n        1525422180000,\n        "0.92165000",\n        "0.92378000",\n        "0.91000000",\n        "0.91120000",\n        "227162.62000000",\n        1525422239999,\n        "208351.85706180",\n        387,\n        "68189.47000000",\n        "62544.18109550",\n        "0"\n    ],\n    [\n        1525422240000,\n        "0.91120000",\n        "0.91506000",\n        "0.91120000",\n        "0.91505000",\n        "31583.61000000",\n        1525422299999,\n        "28879.81842440",\n        76,\n        "17145.97000000",\n        "15682.29401970",\n        "0"\n    ],\n    [\n        1525422300000,\n        "0.91505000",\n        "0.91897000",\n        "0.91120000",\n        "0.91229000",\n        "80816.21000000",\n        1525422359999,\n        "73908.22319700",\n        203,\n        "28555.73000000",\n        "26123.89853780",\n        "0"\n    ],\n    [\n        1525422360000,\n        "0.91229000",\n        "0.91501000",\n        "0.90800000",\n        "0.91218000",\n        "109243.56000000",\n        1525422419999,\n        "99571.79649200",\n        196,\n        "46825.31000000",\n        "42705.18431100",\n        "0"\n    ],\n    [\n        1525422420000,\n        "0.91217000",\n        "0.91504000",\n        "0.91196000",\n        "0.91500000",\n        "48884.17000000",\n        1525422479999,\n        "44676.64413000",\n        78,\n        "38307.07000000",\n        "35017.48564650",\n        "0"\n    ],\n    [\n        1525422480000,\n        "0.91500000",\n        "0.91896000",\n        "0.91450000",\n        "0.91891000",\n        "47198.41000000",\n        1525422539999,\n        "43345.90655650",\n        89,\n        "23088.37000000",\n        "21204.93770170",\n        "0"\n    ],\n    [\n        1525422540000,\n        "0.91888000",\n        "0.91896000",\n        "0.91800000",\n        "0.91809000",\n        "108313.30000000",\n        1525422599999,\n        "99483.01086050",\n        211,\n        "20491.95000000",\n        "18827.63272330",\n        "0"\n    ],\n    [\n        1525422600000,\n        "0.91809000",\n        "0.91896000",\n        "0.91600000",\n        "0.91600000",\n        "121882.17000000",\n        1525422659999,\n        "111903.86588320",\n        244,\n        "18388.45000000",\n        "16893.20433440",\n        "0"\n    ],\n    [\n        1525422660000,\n        "0.91600000",\n        "0.91600000",\n        "0.90190000",\n        "0.90209000",\n        "109930.68000000",\n        1525422719999,\n        "99743.95855630",\n        219,\n        "33869.30000000",\n        "30685.39853970",\n        "0"\n    ],\n    [\n        1525422720000,\n        "0.90208000",\n        "0.90799000",\n        "0.90208000",\n        "0.90514000",\n        "32462.49000000",\n        1525422779999,\n        "29339.66077980",\n        88,\n        "22981.63000000",\n        "20769.65339030",\n        "0"\n    ],\n    [\n        1525422780000,\n        "0.90518000",\n        "0.91249000",\n        "0.90518000",\n        "0.91249000",\n        "57710.65000000",\n        1525422839999,\n        "52441.02939360",\n        94,\n        "32949.66000000",\n        "29956.73871560",\n        "0"\n    ],\n    [\n        1525422840000,\n        "0.91005000",\n        "0.91250000",\n        "0.91000000",\n        "0.91001000",\n        "51187.94000000",\n        1525422899999,\n        "46657.89682260",\n        116,\n        "18689.23000000",\n        "17043.11370370",\n        "0"\n    ],\n    [\n        1525422900000,\n        "0.91111000",\n        "0.91329000",\n        "0.91002000",\n        "0.91249000",\n        "139489.15000000",\n        1525422959999,\n        "127254.80232990",\n        217,\n        "33766.20000000",\n        "30795.01884250",\n        "0"\n    ],\n    [\n        1525422960000,\n        "0.91249000",\n        "0.91249000",\n        "0.91109000",\n        "0.91200000",\n        "27839.41000000",\n        1525423019999,\n        "25391.27328630",\n        67,\n        "16749.01000000",\n        "15282.49060940",\n        "0"\n    ],\n    [\n        1525423020000,\n        "0.91200000",\n        "0.91200000",\n        "0.91114000",\n        "0.91197000",\n        "58271.53000000",\n        1525423079999,\n        "53133.22510680",\n        130,\n        "22075.34000000",\n        "20130.39765020",\n        "0"\n    ],\n    [\n        1525423080000,\n        "0.91197000",\n        "0.91320000",\n        "0.91197000",\n        "0.91320000",\n        "37728.13000000",\n        1525423139999,\n        "34411.65474480",\n        114,\n        "24796.43000000",\n        "22617.60158980",\n        "0"\n    ],\n    [\n        1525423140000,\n        "0.91320000",\n        "0.91900000",\n        "0.91302000",\n        "0.91900000",\n        "79954.81000000",\n        1525423199999,\n        "73249.93902720",\n        89,\n        "63333.70000000",\n        "58006.74267120",\n        "0"\n    ],\n    [\n        1525423200000,\n        "0.91900000",\n        "0.92500000",\n        "0.91900000",\n        "0.92500000",\n        "108348.25000000",\n        1525423259999,\n        "99873.89882710",\n        232,\n        "51264.18000000",\n        "47275.53198530",\n        "0"\n    ],\n    [\n        1525423260000,\n        "0.92225000",\n        "0.93260000",\n        "0.92224000",\n        "0.92893000",\n        "200559.21000000",\n        1525423319999,\n        "186190.75740570",\n        350,\n        "72871.62000000",\n        "67719.61048740",\n        "0"\n    ],\n    [\n        1525423320000,\n        "0.93000000",\n        "0.93505000",\n        "0.92898000",\n        "0.93250000",\n        "115198.13000000",\n        1525423379999,\n        "107454.38932100",\n        206,\n        "30663.58000000",\n        "28620.03967810",\n        "0"\n    ],\n    [\n        1525423380000,\n        "0.93250000",\n        "0.93260000",\n        "0.92101000",\n        "0.92495000",\n        "138897.73000000",\n        1525423439999,\n        "128832.68777200",\n        263,\n        "33990.98000000",\n        "31540.58199220",\n        "0"\n    ],\n    [\n        1525423440000,\n        "0.92497000",\n        "0.93500000",\n        "0.92497000",\n        "0.93500000",\n        "132694.26000000",\n        1525423499999,\n        "123302.37913440",\n        246,\n        "79239.59000000",\n        "73590.44229280",\n        "0"\n    ],\n    [\n        1525423500000,\n        "0.93180000",\n        "0.93450000",\n        "0.92684000",\n        "0.92750000",\n        "232753.83000000",\n        1525423559999,\n        "216568.21615620",\n        311,\n        "30831.93000000",\n        "28696.53405210",\n        "0"\n    ],\n    [\n        1525423560000,\n        "0.92998000",\n        "0.92999000",\n        "0.92751000",\n        "0.92790000",\n        "30342.60000000",\n        1525423619999,\n        "28195.54834210",\n        58,\n        "20168.24000000",\n        "18752.33620570",\n        "0"\n    ],\n    [\n        1525423620000,\n        "0.92973000",\n        "0.92997000",\n        "0.92794000",\n        "0.92997000",\n        "40996.10000000",\n        1525423679999,\n        "38088.05769410",\n        80,\n        "30837.80000000",\n        "28651.80616140",\n        "0"\n    ],\n    [\n        1525423680000,\n        "0.92903000",\n        "0.93600000",\n        "0.92899000",\n        "0.93445000",\n        "114537.54000000",\n        1525423739999,\n        "106811.41688070",\n        256,\n        "78746.27000000",\n        "73466.94079110",\n        "0"\n    ],\n    [\n        1525423740000,\n        "0.93445000",\n        "0.93600000",\n        "0.93256000",\n        "0.93594000",\n        "61810.52000000",\n        1525423799999,\n        "57781.67238220",\n        108,\n        "33332.17000000",\n        "31164.79666890",\n        "0"\n    ],\n    [\n        1525423800000,\n        "0.93594000",\n        "0.93600000",\n        "0.92900000",\n        "0.93000000",\n        "126412.30000000",\n        1525423859999,\n        "118209.84471140",\n        201,\n        "53179.65000000",\n        "49757.99255170",\n        "0"\n    ],\n    [\n        1525423860000,\n        "0.92900000",\n        "0.93447000",\n        "0.92801000",\n        "0.92900000",\n        "40173.39000000",\n        1525423919999,\n        "37349.01982720",\n        141,\n        "12965.46000000",\n        "12067.15452390",\n        "0"\n    ],\n    [\n        1525423920000,\n        "0.92899000",\n        "0.92998000",\n        "0.92804000",\n        "0.92843000",\n        "63438.93000000",\n        1525423979999,\n        "58932.30862400",\n        173,\n        "20916.07000000",\n        "19432.32043950",\n        "0"\n    ],\n    [\n        1525423980000,\n        "0.92850000",\n        "0.92850000",\n        "0.92250000",\n        "0.92298000",\n        "139700.66000000",\n        1525424039999,\n        "129515.80481570",\n        340,\n        "8166.17000000",\n        "7570.47069670",\n        "0"\n    ],\n    [\n        1525424040000,\n        "0.92296000",\n        "0.92400000",\n        "0.92293000",\n        "0.92296000",\n        "46723.13000000",\n        1525424099999,\n        "43156.97889520",\n        61,\n        "29455.22000000",\n        "27212.08171180",\n        "0"\n    ],\n    [\n        1525424100000,\n        "0.92296000",\n        "0.92300000",\n        "0.91600000",\n        "0.91601000",\n        "141636.55000000",\n        1525424159999,\n        "130541.80552270",\n        329,\n        "33423.65000000",\n        "30823.86130760",\n        "0"\n    ],\n    [\n        1525424160000,\n        "0.91884000",\n        "0.92140000",\n        "0.91600000",\n        "0.92140000",\n        "43485.27000000",\n        1525424219999,\n        "39945.49048080",\n        124,\n        "17261.15000000",\n        "15862.39717960",\n        "0"\n    ],\n    [\n        1525424220000,\n        "0.92100000",\n        "0.92189000",\n        "0.91730000",\n        "0.92001000",\n        "188876.02000000",\n        1525424279999,\n        "173803.26670550",\n        438,\n        "37431.95000000",\n        "34454.14921660",\n        "0"\n    ],\n    [\n        1525424280000,\n        "0.92000000",\n        "0.92292000",\n        "0.92000000",\n        "0.92108000",\n        "62523.64000000",\n        1525424339999,\n        "57559.64995720",\n        147,\n        "31501.62000000",\n        "29012.94071280",\n        "0"\n    ],\n    [\n        1525424340000,\n        "0.92108000",\n        "0.92680000",\n        "0.92108000",\n        "0.92300000",\n        "49868.90000000",\n        1525424399999,\n        "46035.28490810",\n        144,\n        "18868.65000000",\n        "17421.47051760",\n        "0"\n    ],\n    [\n        1525424400000,\n        "0.92300000",\n        "0.92498000",\n        "0.92211000",\n        "0.92300000",\n        "80578.95000000",\n        1525424459999,\n        "74385.77698330",\n        253,\n        "10730.90000000",\n        "9912.24288880",\n        "0"\n    ],\n    [\n        1525424460000,\n        "0.92300000",\n        "0.92300000",\n        "0.92210000",\n        "0.92210000",\n        "83601.75000000",\n        1525424519999,\n        "77154.50090480",\n        152,\n        "8541.33000000",\n        "7883.62751370",\n        "0"\n    ],\n    [\n        1525424520000,\n        "0.92230000",\n        "0.92300000",\n        "0.92108000",\n        "0.92287000",\n        "39894.14000000",\n        1525424579999,\n        "36792.67041470",\n        54,\n        "23921.18000000",\n        "22066.13953170",\n        "0"\n    ],\n    [\n        1525424580000,\n        "0.92201000",\n        "0.92287000",\n        "0.92201000",\n        "0.92209000",\n        "35141.99000000",\n        1525424639999,\n        "32406.79074220",\n        85,\n        "1822.60000000",\n        "1682.01749630",\n        "0"\n    ],\n    [\n        1525424640000,\n        "0.92209000",\n        "0.92209000",\n        "0.91612000",\n        "0.91612000",\n        "133663.76000000",\n        1525424699999,\n        "122993.85452080",\n        212,\n        "30526.87000000",\n        "28081.67301470",\n        "0"\n    ],\n    [\n        1525424700000,\n        "0.91614000",\n        "0.91615000",\n        "0.91111000",\n        "0.91135000",\n        "58347.26000000",\n        1525424759999,\n        "53242.86298810",\n        86,\n        "7653.33000000",\n        "6985.84227300",\n        "0"\n    ],\n    [\n        1525424760000,\n        "0.91297000",\n        "0.91315000",\n        "0.91133000",\n        "0.91300000",\n        "35812.62000000",\n        1525424819999,\n        "32672.08796320",\n        88,\n        "21941.42000000",\n        "20028.61408370",\n        "0"\n    ],\n    [\n        1525424820000,\n        "0.91446000",\n        "0.91600000",\n        "0.91300000",\n        "0.91300000",\n        "42320.46000000",\n        1525424879999,\n        "38693.81310740",\n        117,\n        "8778.28000000",\n        "8028.59424090",\n        "0"\n    ],\n    [\n        1525424880000,\n        "0.91300000",\n        "0.91413000",\n        "0.91140000",\n        "0.91146000",\n        "67167.32000000",\n        1525424939999,\n        "61312.44771440",\n        231,\n        "941.88000000",\n        "859.74066310",\n        "0"\n    ],\n    [\n        1525424940000,\n        "0.91140000",\n        "0.91212000",\n        "0.91140000",\n        "0.91212000",\n        "27455.60000000",\n        1525424999999,\n        "25027.49668460",\n        79,\n        "10176.03000000",\n        "9277.39616850",\n        "0"\n    ],\n    [\n        1525425000000,\n        "0.91212000",\n        "0.91400000",\n        "0.91160000",\n        "0.91216000",\n        "81024.82000000",\n        1525425059999,\n        "74014.93475650",\n        136,\n        "23421.95000000",\n        "21378.68542640",\n        "0"\n    ],\n    [\n        1525425060000,\n        "0.91217000",\n        "0.91655000",\n        "0.91216000",\n        "0.91655000",\n        "108994.53000000",\n        1525425119999,\n        "99440.40608800",\n        103,\n        "71076.39000000",\n        "64849.37757400",\n        "0"\n    ],\n    [\n        1525425120000,\n        "0.91655000",\n        "0.91985000",\n        "0.91655000",\n        "0.91985000",\n        "20705.64000000",\n        1525425179999,\n        "18991.34374210",\n        55,\n        "14484.60000000",\n        "13285.48765940",\n        "0"\n    ],\n    [\n        1525425180000,\n        "0.91900000",\n        "0.92100000",\n        "0.91900000",\n        "0.92100000",\n        "33580.57000000",\n        1525425239999,\n        "30901.24110020",\n        128,\n        "11467.38000000",\n        "10549.70173060",\n        "0"\n    ],\n    [\n        1525425240000,\n        "0.92115000",\n        "0.92850000",\n        "0.92000000",\n        "0.92300000",\n        "126332.75000000",\n        1525425299999,\n        "116625.80461280",\n        140,\n        "63832.08000000",\n        "59015.45696320",\n        "0"\n    ],\n    [\n        1525425300000,\n        "0.92300000",\n        "0.92810000",\n        "0.92121000",\n        "0.92122000",\n        "149929.66000000",\n        1525425359999,\n        "138379.69255360",\n        197,\n        "10727.26000000",\n        "9911.60007330",\n        "0"\n    ],\n    [\n        1525425360000,\n        "0.92122000",\n        "0.92474000",\n        "0.92115000",\n        "0.92121000",\n        "212015.68000000",\n        1525425419999,\n        "195321.75472000",\n        149,\n        "9618.26000000",\n        "8868.89366710",\n        "0"\n    ],\n    [\n        1525425420000,\n        "0.92121000",\n        "0.92160000",\n        "0.92001000",\n        "0.92010000",\n        "69426.26000000",\n        1525425479999,\n        "63950.83876090",\n        105,\n        "6594.24000000",\n        "6074.56641790",\n        "0"\n    ],\n    [\n        1525425480000,\n        "0.92010000",\n        "0.92116000",\n        "0.91800000",\n        "0.91800000",\n        "100745.23000000",\n        1525425539999,\n        "92683.47552990",\n        130,\n        "31518.13000000",\n        "29001.27245170",\n        "0"\n    ],\n    [\n        1525425540000,\n        "0.91798000",\n        "0.91799000",\n        "0.91140000",\n        "0.91140000",\n        "40410.73000000",\n        1525425599999,\n        "36872.25446580",\n        120,\n        "4840.75000000",\n        "4418.01899230",\n        "0"\n    ],\n    [\n        1525425600000,\n        "0.91140000",\n        "0.91216000",\n        "0.91078000",\n        "0.91216000",\n        "74704.21000000",\n        1525425659999,\n        "68067.35411260",\n        133,\n        "32363.93000000",\n        "29490.04345880",\n        "0"\n    ],\n    [\n        1525425660000,\n        "0.91217000",\n        "0.91596000",\n        "0.91079000",\n        "0.91490000",\n        "15279.90000000",\n        1525425719999,\n        "13936.94612000",\n        32,\n        "3312.04000000",\n        "3029.81673540",\n        "0"\n    ],\n    [\n        1525425720000,\n        "0.91260000",\n        "0.91600000",\n        "0.91260000",\n        "0.91600000",\n        "46481.81000000",\n        1525425779999,\n        "42550.08387600",\n        56,\n        "42790.57000000",\n        "39176.01152740",\n        "0"\n    ],\n    [\n        1525425780000,\n        "0.91700000",\n        "0.91799000",\n        "0.91699000",\n        "0.91799000",\n        "20651.32000000",\n        1525425839999,\n        "18955.69659390",\n        24,\n        "18125.31000000",\n        "16637.94653570",\n        "0"\n    ],\n    [\n        1525425840000,\n        "0.91800000",\n        "0.92395000",\n        "0.91799000",\n        "0.91955000",\n        "78088.01000000",\n        1525425899999,\n        "71945.05557010",\n        64,\n        "64666.90000000",\n        "59615.75293780",\n        "0"\n    ],\n    [\n        1525425900000,\n        "0.91953000",\n        "0.92296000",\n        "0.91950000",\n        "0.92001000",\n        "63929.10000000",\n        1525425959999,\n        "58832.16855260",\n        199,\n        "11440.94000000",\n        "10549.47328020",\n        "0"\n    ],\n    [\n        1525425960000,\n        "0.92001000",\n        "0.92183000",\n        "0.91810000",\n        "0.91999000",\n        "98930.61000000",\n        1525426019999,\n        "91031.64665280",\n        122,\n        "3411.64000000",\n        "3141.90095020",\n        "0"\n    ],\n    [\n        1525426020000,\n        "0.91997000",\n        "0.92000000",\n        "0.91700000",\n        "0.91700000",\n        "18114.57000000",\n        1525426079999,\n        "16654.38251050",\n        53,\n        "11574.33000000",\n        "10644.96109600",\n        "0"\n    ],\n    [\n        1525426080000,\n        "0.91600000",\n        "0.91694000",\n        "0.91447000",\n        "0.91599000",\n        "30034.27000000",\n        1525426139999,\n        "27481.39658120",\n        43,\n        "7132.99000000",\n        "6527.69714240",\n        "0"\n    ],\n    [\n        1525426140000,\n        "0.91599000",\n        "0.91599000",\n        "0.91236000",\n        "0.91236000",\n        "108084.06000000",\n        1525426199999,\n        "98854.83507030",\n        109,\n        "8197.84000000",\n        "7505.57662440",\n        "0"\n    ],\n    [\n        1525426200000,\n        "0.91236000",\n        "0.91438000",\n        "0.91100000",\n        "0.91418000",\n        "13444.69000000",\n        1525426259999,\n        "12281.34780610",\n        25,\n        "2517.13000000",\n        "2298.07829840",\n        "0"\n    ],\n    [\n        1525426260000,\n        "0.91418000",\n        "0.91499000",\n        "0.91418000",\n        "0.91450000",\n        "7035.77000000",\n        1525426319999,\n        "6434.18122710",\n        36,\n        "3173.71000000",\n        "2903.49905820",\n        "0"\n    ],\n    [\n        1525426320000,\n        "0.91499000",\n        "0.91808000",\n        "0.91454000",\n        "0.91798000",\n        "17568.79000000",\n        1525426379999,\n        "16084.93134390",\n        39,\n        "16129.25000000",\n        "14767.84072300",\n        "0"\n    ],\n    [\n        1525426380000,\n        "0.91666000",\n        "0.91830000",\n        "0.91666000",\n        "0.91800000",\n        "44611.95000000",\n        1525426439999,\n        "40952.90487220",\n        81,\n        "30413.17000000",\n        "27918.59281600",\n        "0"\n    ],\n    [\n        1525426440000,\n        "0.91800000",\n        "0.91830000",\n        "0.91700000",\n        "0.91790000",\n        "16621.19000000",\n        1525426499999,\n        "15258.60504540",\n        47,\n        "10508.05000000",\n        "9647.18349080",\n        "0"\n    ],\n    [\n        1525426500000,\n        "0.91700000",\n        "0.91790000",\n        "0.91500000",\n        "0.91500000",\n        "16323.75000000",\n        1525426559999,\n        "14953.12845780",\n        70,\n        "1240.35000000",\n        "1137.52577730",\n        "0"\n    ],\n    [\n        1525426560000,\n        "0.91420000",\n        "0.91500000",\n        "0.91420000",\n        "0.91420000",\n        "10167.52000000",\n        1525426619999,\n        "9301.54446590",\n        50,\n        "5211.39000000",\n        "4768.34924190",\n        "0"\n    ],\n    [\n        1525426620000,\n        "0.91420000",\n        "0.91580000",\n        "0.91420000",\n        "0.91450000",\n        "29546.52000000",\n        1525426679999,\n        "27013.26448190",\n        56,\n        "2636.53000000",\n        "2410.64506600",\n        "0"\n    ],\n    [\n        1525426680000,\n        "0.91450000",\n        "0.91578000",\n        "0.91420000",\n        "0.91421000",\n        "39954.19000000",\n        1525426739999,\n        "36535.36444380",\n        41,\n        "502.47000000",\n        "460.14882900",\n        "0"\n    ],\n    [\n        1525426740000,\n        "0.91577000",\n        "0.91577000",\n        "0.91420000",\n        "0.91420000",\n        "8619.32000000",\n        1525426799999,\n        "7879.95088280",\n        19,\n        "832.59000000",\n        "761.28113700",\n        "0"\n    ],\n    [\n        1525426800000,\n        "0.91423000",\n        "0.91577000",\n        "0.91423000",\n        "0.91576000",\n        "15289.79000000",\n        1525426859999,\n        "13979.81475400",\n        38,\n        "3639.72000000",\n        "3328.39369830",\n        "0"\n    ],\n    [\n        1525426860000,\n        "0.91576000",\n        "0.91578000",\n        "0.91435000",\n        "0.91435000",\n        "22903.61000000",\n        1525426919999,\n        "20960.61438770",\n        65,\n        "5937.34000000",\n        "5436.74858220",\n        "0"\n    ],\n    [\n        1525426920000,\n        "0.91435000",\n        "0.91564000",\n        "0.91430000",\n        "0.91510000",\n        "9473.82000000",\n        1525426979999,\n        "8665.18418640",\n        43,\n        "2191.90000000",\n        "2006.05959510",\n        "0"\n    ],\n    [\n        1525426980000,\n        "0.91510000",\n        "0.91600000",\n        "0.91510000",\n        "0.91600000",\n        "26127.04000000",\n        1525427039999,\n        "23924.89987700",\n        26,\n        "20079.40000000",\n        "18390.67779500",\n        "0"\n    ],\n    [\n        1525427040000,\n        "0.91570000",\n        "0.91600000",\n        "0.91570000",\n        "0.91578000",\n        "16916.90000000",\n        1525427099999,\n        "15495.57431450",\n        18,\n        "15694.82000000",\n        "14376.45512000",\n        "0"\n    ],\n    [\n        1525427100000,\n        "0.91578000",\n        "0.91580000",\n        "0.91500000",\n        "0.91578000",\n        "17226.68000000",\n        1525427159999,\n        "15772.41842250",\n        59,\n        "4076.80000000",\n        "3733.28376450",\n        "0"\n    ],\n    [\n        1525427160000,\n        "0.91578000",\n        "0.91578000",\n        "0.91512000",\n        "0.91573000",\n        "1912.32000000",\n        1525427219999,\n        "1751.12241980",\n        15,\n        "1734.40000000",\n        "1588.30426940",\n        "0"\n    ],\n    [\n        1525427220000,\n        "0.91573000",\n        "0.91573000",\n        "0.91430000",\n        "0.91430000",\n        "71483.73000000",\n        1525427279999,\n        "65439.93382230",\n        63,\n        "34725.90000000",\n        "31797.68821650",\n        "0"\n    ],\n    [\n        1525427280000,\n        "0.91500000",\n        "0.91569000",\n        "0.91430000",\n        "0.91569000",\n        "4940.31000000",\n        1525427339999,\n        "4519.94856480",\n        16,\n        "3398.52000000",\n        "3109.88641880",\n        "0"\n    ],\n    [\n        1525427340000,\n        "0.91569000",\n        "0.91570000",\n        "0.91450000",\n        "0.91450000",\n        "16705.53000000",\n        1525427399999,\n        "15295.14726370",\n        35,\n        "4798.09000000",\n        "4393.57737430",\n        "0"\n    ],\n    [\n        1525427400000,\n        "0.91500000",\n        "0.91568000",\n        "0.91500000",\n        "0.91510000",\n        "47650.43000000",\n        1525427459999,\n        "43608.39502320",\n        55,\n        "6086.41000000",\n        "5569.98295280",\n        "0"\n    ],\n    [\n        1525427460000,\n        "0.91510000",\n        "0.91519000",\n        "0.91300000",\n        "0.91300000",\n        "109839.75000000",\n        1525427519999,\n        "100407.65434170",\n        146,\n        "2024.53000000",\n        "1851.86053280",\n        "0"\n    ],\n    [\n        1525427520000,\n        "0.91301000",\n        "0.91400000",\n        "0.91236000",\n        "0.91236000",\n        "119303.04000000",\n        1525427579999,\n        "108990.31030650",\n        97,\n        "6435.39000000",\n        "5880.69528740",\n        "0"\n    ],\n    [\n        1525427580000,\n        "0.91221000",\n        "0.91400000",\n        "0.91011000",\n        "0.91011000",\n        "90974.71000000",\n        1525427639999,\n        "82890.47878390",\n        119,\n        "7365.92000000",\n        "6721.82206690",\n        "0"\n    ],\n    [\n        1525427640000,\n        "0.91011000",\n        "0.91011000",\n        "0.91000000",\n        "0.91000000",\n        "99331.61000000",\n        1525427699999,\n        "90393.64289200",\n        152,\n        "5527.97000000",\n        "5031.01828060",\n        "0"\n    ],\n    [\n        1525427700000,\n        "0.91001000",\n        "0.91001000",\n        "0.91000000",\n        "0.91000000",\n        "78361.56000000",\n        1525427759999,\n        "71309.02116100",\n        102,\n        "156.10000000",\n        "142.05256100",\n        "0"\n    ],\n    [\n        1525427760000,\n        "0.91000000",\n        "0.91001000",\n        "0.90783000",\n        "0.90783000",\n        "107937.84000000",\n        1525427819999,\n        "98206.52479580",\n        118,\n        "6353.80000000",\n        "5779.07469660",\n        "0"\n    ],\n    [\n        1525427820000,\n        "0.90783000",\n        "0.90783000",\n        "0.90379000",\n        "0.90500000",\n        "15535.45000000",\n        1525427879999,\n        "14067.08661140",\n        40,\n        "2367.24000000",\n        "2143.62475280",\n        "0"\n    ],\n    [\n        1525427880000,\n        "0.90379000",\n        "0.90500000",\n        "0.90100000",\n        "0.90181000",\n        "92418.94000000",\n        1525427939999,\n        "83329.49930680",\n        151,\n        "52578.48000000",\n        "47415.85191840",\n        "0"\n    ],\n    [\n        1525427940000,\n        "0.90181000",\n        "0.90354000",\n        "0.90108000",\n        "0.90199000",\n        "57021.77000000",\n        1525427999999,\n        "51420.46191390",\n        68,\n        "42170.55000000",\n        "38031.50317430",\n        "0"\n    ],\n    [\n        1525428000000,\n        "0.90199000",\n        "0.90497000",\n        "0.90190000",\n        "0.90496000",\n        "7325.98000000",\n        1525428059999,\n        "6615.29968770",\n        44,\n        "4924.60000000",\n        "4446.81826350",\n        "0"\n    ],\n    [\n        1525428060000,\n        "0.90496000",\n        "0.91027000",\n        "0.90496000",\n        "0.90900000",\n        "48535.18000000",\n        1525428119999,\n        "44065.97545710",\n        86,\n        "25217.16000000",\n        "22867.40308170",\n        "0"\n    ],\n    [\n        1525428120000,\n        "0.91000000",\n        "0.91001000",\n        "0.90900000",\n        "0.91000000",\n        "13681.30000000",\n        1525428179999,\n        "12447.22761880",\n        41,\n        "7319.11000000",\n        "6660.36982910",\n        "0"\n    ],\n    [\n        1525428180000,\n        "0.90903000",\n        "0.90998000",\n        "0.90698000",\n        "0.90701000",\n        "31410.71000000",\n        1525428239999,\n        "28548.04470490",\n        47,\n        "7351.45000000",\n        "6679.56042160",\n        "0"\n    ],\n    [\n        1525428240000,\n        "0.90701000",\n        "0.90701000",\n        "0.90379000",\n        "0.90379000",\n        "25901.56000000",\n        1525428299999,\n        "23470.21122410",\n        41,\n        "6908.68000000",\n        "6249.65525100",\n        "0"\n    ],\n    [\n        1525428300000,\n        "0.90379000",\n        "0.90501000",\n        "0.90300000",\n        "0.90379000",\n        "29813.74000000",\n        1525428359999,\n        "26937.45522530",\n        34,\n        "4300.61000000",\n        "3888.18186820",\n        "0"\n    ],\n    [\n        1525428360000,\n        "0.90379000",\n        "0.90470000",\n        "0.90000000",\n        "0.90040000",\n        "87536.54000000",\n        1525428419999,\n        "78839.15031120",\n        91,\n        "1700.70000000",\n        "1536.42298000",\n        "0"\n    ],\n    [\n        1525428420000,\n        "0.90040000",\n        "0.90040000",\n        "0.89510000",\n        "0.89689000",\n        "67502.57000000",\n        1525428479999,\n        "60692.33404440",\n        109,\n        "17802.15000000",\n        "16009.54069000",\n        "0"\n    ],\n    [\n        1525428480000,\n        "0.89690000",\n        "0.90230000",\n        "0.89690000",\n        "0.90001000",\n        "39355.00000000",\n        1525428539999,\n        "35380.91544190",\n        78,\n        "35242.64000000",\n        "31688.33772030",\n        "0"\n    ],\n    [\n        1525428540000,\n        "0.90001000",\n        "0.90300000",\n        "0.90001000",\n        "0.90238000",\n        "3314.62000000",\n        1525428599999,\n        "2988.99769070",\n        21,\n        "1685.18000000",\n        "1520.32483940",\n        "0"\n    ],\n    [\n        1525428600000,\n        "0.90238000",\n        "0.90297000",\n        "0.90200000",\n        "0.90250000",\n        "11685.30000000",\n        1525428659999,\n        "10543.14118590",\n        44,\n        "4301.72000000",\n        "3881.81294010",\n        "0"\n    ],\n    [\n        1525428660000,\n        "0.90250000",\n        "0.90290000",\n        "0.90201000",\n        "0.90290000",\n        "7062.34000000",\n        1525428719999,\n        "6374.74548250",\n        35,\n        "4716.82000000",\n        "4258.32122200",\n        "0"\n    ],\n    [\n        1525428720000,\n        "0.90290000",\n        "0.90300000",\n        "0.90290000",\n        "0.90300000",\n        "17556.02000000",\n        1525428779999,\n        "15851.47206250",\n        36,\n        "9450.98000000",\n        "8533.42905610",\n        "0"\n    ],\n    [\n        1525428780000,\n        "0.90290000",\n        "0.90600000",\n        "0.90290000",\n        "0.90499000",\n        "58996.82000000",\n        1525428839999,\n        "53369.97733100",\n        37,\n        "37364.37000000",\n        "33772.86123470",\n        "0"\n    ],\n    [\n        1525428840000,\n        "0.90499000",\n        "0.90508000",\n        "0.90490000",\n        "0.90508000",\n        "39045.12000000",\n        1525428899999,\n        "35337.49176390",\n        86,\n        "4395.35000000",\n        "3978.08420950",\n        "0"\n    ],\n    [\n        1525428900000,\n        "0.90508000",\n        "0.90600000",\n        "0.90508000",\n        "0.90599000",\n        "8137.44000000",\n        1525428959999,\n        "7369.52321370",\n        19,\n        "5756.95000000",\n        "5214.85682750",\n        "0"\n    ],\n    [\n        1525428960000,\n        "0.90599000",\n        "0.91020000",\n        "0.90599000",\n        "0.90656000",\n        "37288.99000000",\n        1525429019999,\n        "33876.84256910",\n        60,\n        "15868.09000000",\n        "14420.28329120",\n        "0"\n    ],\n    [\n        1525429020000,\n        "0.90700000",\n        "0.91000000",\n        "0.90657000",\n        "0.90711000",\n        "23445.32000000",\n        1525429079999,\n        "21309.22626990",\n        36,\n        "4528.34000000",\n        "4117.38093740",\n        "0"\n    ],\n    [\n        1525429080000,\n        "0.90712000",\n        "0.90990000",\n        "0.90712000",\n        "0.90720000",\n        "6331.46000000",\n        1525429139999,\n        "5744.43707400",\n        13,\n        "307.84000000",\n        "280.08113450",\n        "0"\n    ],\n    [\n        1525429140000,\n        "0.90721000",\n        "0.90726000",\n        "0.90720000",\n        "0.90725000",\n        "9924.75000000",\n        1525429199999,\n        "9003.92808890",\n        18,\n        "5222.77000000",\n        "4738.17011820",\n        "0"\n    ],\n    [\n        1525429200000,\n        "0.90725000",\n        "0.90979000",\n        "0.90721000",\n        "0.90948000",\n        "4924.61000000",\n        1525429259999,\n        "4469.97888990",\n        23,\n        "2207.81000000",\n        "2005.00342000",\n        "0"\n    ],\n    [\n        1525429260000,\n        "0.90935000",\n        "0.90935000",\n        "0.90738000",\n        "0.90750000",\n        "3166.94000000",\n        1525429319999,\n        "2878.62088470",\n        17,\n        "1594.66000000",\n        "1450.07580870",\n        "0"\n    ],\n    [\n        1525429320000,\n        "0.90850000",\n        "0.90899000",\n        "0.90725000",\n        "0.90778000",\n        "28557.00000000",\n        1525429379999,\n        "25918.26716150",\n        45,\n        "4928.67000000",\n        "4475.20621670",\n        "0"\n    ],\n    [\n        1525429380000,\n        "0.90775000",\n        "0.90775000",\n        "0.90657000",\n        "0.90660000",\n        "55005.72000000",\n        1525429439999,\n        "49886.46433720",\n        79,\n        "3706.90000000",\n        "3362.24013170",\n        "0"\n    ],\n    [\n        1525429440000,\n        "0.90657000",\n        "0.90657000",\n        "0.90500000",\n        "0.90500000",\n        "31697.83000000",\n        1525429499999,\n        "28711.18955040",\n        38,\n        "712.76000000",\n        "645.30661100",\n        "0"\n    ],\n    [\n        1525429500000,\n        "0.90499000",\n        "0.90500000",\n        "0.90356000",\n        "0.90499000",\n        "18924.14000000",\n        1525429559999,\n        "17126.28159850",\n        24,\n        "12905.22000000",\n        "11679.21925920",\n        "0"\n    ],\n    [\n        1525429560000,\n        "0.90499000",\n        "0.90500000",\n        "0.90499000",\n        "0.90500000",\n        "8757.41000000",\n        1525429619999,\n        "7925.43882260",\n        14,\n        "6980.57000000",\n        "6317.41585000",\n        "0"\n    ],\n    [\n        1525429620000,\n        "0.90500000",\n        "0.90800000",\n        "0.90500000",\n        "0.90800000",\n        "14195.38000000",\n        1525429679999,\n        "12863.54650670",\n        37,\n        "13373.93000000",\n        "12119.94623500",\n        "0"\n    ],\n    [\n        1525429680000,\n        "0.90800000",\n        "0.90899000",\n        "0.90525000",\n        "0.90890000",\n        "9141.50000000",\n        1525429739999,\n        "8288.36989320",\n        20,\n        "3659.64000000",\n        "3323.24909220",\n        "0"\n    ],\n    [\n        1525429740000,\n        "0.90891000",\n        "0.90891000",\n        "0.90701000",\n        "0.90705000",\n        "5968.69000000",\n        1525429799999,\n        "5416.96523990",\n        14,\n        "1997.90000000",\n        "1815.36125440",\n        "0"\n    ],\n    [\n        1525429800000,\n        "0.90705000",\n        "0.90891000",\n        "0.90705000",\n        "0.90706000",\n        "5819.18000000",\n        1525429859999,\n        "5279.32856400",\n        20,\n        "322.17000000",\n        "292.70978550",\n        "0"\n    ],\n    [\n        1525429860000,\n        "0.90854000",\n        "0.90892000",\n        "0.90852000",\n        "0.90852000",\n        "15735.86000000",\n        1525429919999,\n        "14297.71386900",\n        25,\n        "5486.95000000",\n        "4986.08806430",\n        "0"\n    ],\n    [\n        1525429920000,\n        "0.90852000",\n        "0.90853000",\n        "0.90708000",\n        "0.90853000",\n        "20662.25000000",\n        1525429979999,\n        "18772.02958110",\n        23,\n        "16373.00000000",\n        "14875.33855830",\n        "0"\n    ],\n    [\n        1525429980000,\n        "0.90852000",\n        "0.90853000",\n        "0.90708000",\n        "0.90805000",\n        "6567.74000000",\n        1525430039999,\n        "5963.17005160",\n        15,\n        "4411.87000000",\n        "4007.21504440",\n        "0"\n    ],\n    [\n        1525430040000,\n        "0.90805000",\n        "0.90805000",\n        "0.90709000",\n        "0.90709000",\n        "13597.18000000",\n        1525430099999,\n        "12346.51620460",\n        14,\n        "11092.02000000",\n        "10072.10876100",\n        "0"\n    ],\n    [\n        1525430100000,\n        "0.90709000",\n        "0.90805000",\n        "0.90500000",\n        "0.90709000",\n        "37128.28000000",\n        1525430159999,\n        "33654.99617130",\n        44,\n        "9223.56000000",\n        "8371.16242880",\n        "0"\n    ],\n    [\n        1525430160000,\n        "0.90708000",\n        "0.90805000",\n        "0.90500000",\n        "0.90805000",\n        "16185.11000000",\n        1525430219999,\n        "14675.53210680",\n        39,\n        "5468.94000000",\n        "4964.93595610",\n        "0"\n    ],\n    [\n        1525430220000,\n        "0.90805000",\n        "0.90805000",\n        "0.90709000",\n        "0.90800000",\n        "5621.50000000",\n        1525430279999,\n        "5104.38416610",\n        8,\n        "5513.53000000",\n        "5006.44565880",\n        "0"\n    ],\n    [\n        1525430280000,\n        "0.90709000",\n        "0.90800000",\n        "0.90500000",\n        "0.90800000",\n        "8780.01000000",\n        1525430339999,\n        "7959.56691510",\n        26,\n        "4210.09000000",\n        "3821.77705350",\n        "0"\n    ],\n    [\n        1525430340000,\n        "0.90800000",\n        "0.90800000",\n        "0.90530000",\n        "0.90530000",\n        "15678.27000000",\n        1525430399999,\n        "14219.76118740",\n        35,\n        "7061.63000000",\n        "6408.27969000",\n        "0"\n    ],\n    [\n        1525430400000,\n        "0.90530000",\n        "0.90578000",\n        "0.90468000",\n        "0.90468000",\n        "4306.12000000",\n        1525430459999,\n        "3898.52940170",\n        34,\n        "2031.07000000",\n        "1839.69180530",\n        "0"\n    ],\n    [\n        1525430460000,\n        "0.90468000",\n        "0.90799000",\n        "0.90404000",\n        "0.90663000",\n        "25848.02000000",\n        1525430519999,\n        "23413.86245960",\n        19,\n        "25831.56000000",\n        "23398.94184210",\n        "0"\n    ],\n    [\n        1525430520000,\n        "0.90799000",\n        "0.90799000",\n        "0.90663000",\n        "0.90663000",\n        "17066.24000000",\n        1525430579999,\n        "15473.27098240",\n        19,\n        "371.92000000",\n        "337.69964080",\n        "0"\n    ],\n    [\n        1525430580000,\n        "0.90663000",\n        "0.90799000",\n        "0.90510000",\n        "0.90663000",\n        "8895.48000000",\n        1525430639999,\n        "8064.92732520",\n        25,\n        "69.56000000",\n        "63.14879560",\n        "0"\n    ],\n    [\n        1525430640000,\n        "0.90663000",\n        "0.90663000",\n        "0.90468000",\n        "0.90468000",\n        "6940.08000000",\n        1525430699999,\n        "6281.05374320",\n        21,\n        "2126.58000000",\n        "1925.14260860",\n        "0"\n    ],\n    [\n        1525430700000,\n        "0.90510000",\n        "0.90510000",\n        "0.90368000",\n        "0.90468000",\n        "6736.67000000",\n        1525430759999,\n        "6094.51125460",\n        17,\n        "6240.76000000",\n        "5645.91240780",\n        "0"\n    ],\n    [\n        1525430760000,\n        "0.90468000",\n        "0.90468000",\n        "0.90356000",\n        "0.90356000",\n        "6442.61000000",\n        1525430819999,\n        "5823.58717380",\n        20,\n        "753.38000000",\n        "680.83703980",\n        "0"\n    ],\n    [\n        1525430820000,\n        "0.90356000",\n        "0.90371000",\n        "0.90201000",\n        "0.90201000",\n        "10374.59000000",\n        1525430879999,\n        "9367.80190660",\n        47,\n        "2036.83000000",\n        "1839.72673550",\n        "0"\n    ],\n    [\n        1525430880000,\n        "0.90201000",\n        "0.90371000",\n        "0.90200000",\n        "0.90300000",\n        "9869.39000000",\n        1525430939999,\n        "8912.67296190",\n        20,\n        "8038.22000000",\n        "7260.78214540",\n        "0"\n    ],\n    [\n        1525430940000,\n        "0.90240000",\n        "0.90240000",\n        "0.90202000",\n        "0.90202000",\n        "1886.91000000",\n        1525430999999,\n        "1702.31406500",\n        10,\n        "547.90000000",\n        "494.42487360",\n        "0"\n    ],\n    [\n        1525431000000,\n        "0.90202000",\n        "0.90230000",\n        "0.90200000",\n        "0.90203000",\n        "13699.11000000",\n        1525431059999,\n        "12357.76626440",\n        37,\n        "5317.28000000",\n        "4797.01094160",\n        "0"\n    ],\n    [\n        1525431060000,\n        "0.90203000",\n        "0.90371000",\n        "0.90190000",\n        "0.90371000",\n        "17137.23000000",\n        1525431119999,\n        "15462.46790920",\n        24,\n        "15473.75000000",\n        "13961.91575520",\n        "0"\n    ],\n    [\n        1525431120000,\n        "0.90371000",\n        "0.90371000",\n        "0.90250000",\n        "0.90371000",\n        "13836.29000000",\n        1525431179999,\n        "12503.89642860",\n        18,\n        "13235.85000000",\n        "11961.34600060",\n        "0"\n    ],\n    [\n        1525431180000,\n        "0.90371000",\n        "0.90660000",\n        "0.90270000",\n        "0.90511000",\n        "21216.67000000",\n        1525431239999,\n        "19203.96349590",\n        39,\n        "13298.60000000",\n        "12040.66608020",\n        "0"\n    ],\n    [\n        1525431240000,\n        "0.90511000",\n        "0.90663000",\n        "0.90327000",\n        "0.90513000",\n        "21850.49000000",\n        1525431299999,\n        "19779.26179310",\n        58,\n        "3706.78000000",\n        "3356.72031400",\n        "0"\n    ],\n    [\n        1525431300000,\n        "0.90513000",\n        "0.90513000",\n        "0.90323000",\n        "0.90371000",\n        "10581.51000000",\n        1525431359999,\n        "9575.76261370",\n        24,\n        "4264.74000000",\n        "3860.07861210",\n        "0"\n    ],\n    [\n        1525431360000,\n        "0.90371000",\n        "0.90371000",\n        "0.90321000",\n        "0.90371000",\n        "38043.15000000",\n        1525431419999,\n        "34377.98241010",\n        17,\n        "14008.18000000",\n        "12659.33234780",\n        "0"\n    ],\n    [\n        1525431420000,\n        "0.90371000",\n        "0.90371000",\n        "0.90321000",\n        "0.90321000",\n        "6727.82000000",\n        1525431479999,\n        "6076.72001820",\n        14,\n        "162.28000000",\n        "146.65405880",\n        "0"\n    ],\n    [\n        1525431480000,\n        "0.90322000",\n        "0.90322000",\n        "0.90250000",\n        "0.90250000",\n        "29375.58000000",\n        1525431539999,\n        "26525.06326000",\n        53,\n        "2361.09000000",\n        "2132.49327980",\n        "0"\n    ],\n    [\n        1525431540000,\n        "0.90250000",\n        "0.90250000",\n        "0.90123000",\n        "0.90128000",\n        "6011.16000000",\n        1525431599999,\n        "5422.00417760",\n        25,\n        "1151.68000000",\n        "1038.24651790",\n        "0"\n    ],\n    [\n        1525431600000,\n        "0.90128000",\n        "0.90128000",\n        "0.90091000",\n        "0.90100000",\n        "4260.36000000",\n        1525431659999,\n        "3838.70703010",\n        21,\n        "3001.76000000",\n        "2704.62833960",\n        "0"\n    ],\n    [\n        1525431660000,\n        "0.90190000",\n        "0.90200000",\n        "0.90102000",\n        "0.90200000",\n        "7767.54000000",\n        1525431719999,\n        "7004.79486740",\n        16,\n        "6063.59000000",\n        "5469.03962000",\n        "0"\n    ],\n    [\n        1525431720000,\n        "0.90191000",\n        "0.90200000",\n        "0.90001000",\n        "0.90200000",\n        "33161.86000000",\n        1525431779999,\n        "29888.59098610",\n        48,\n        "3635.72000000",\n        "3279.15150560",\n        "0"\n    ],\n    [\n        1525431780000,\n        "0.90191000",\n        "0.90200000",\n        "0.90191000",\n        "0.90200000",\n        "24526.40000000",\n        1525431839999,\n        "22122.77826970",\n        21,\n        "24142.73000000",\n        "21776.74246000",\n        "0"\n    ],\n    [\n        1525431840000,\n        "0.90200000",\n        "0.90200000",\n        "0.90190000",\n        "0.90190000",\n        "22538.49000000",\n        1525431899999,\n        "20329.53967460",\n        30,\n        "20612.86000000",\n        "18592.79572630",\n        "0"\n    ],\n    [\n        1525431900000,\n        "0.90200000",\n        "0.90201000",\n        "0.90190000",\n        "0.90191000",\n        "17545.14000000",\n        1525431959999,\n        "15825.16485660",\n        16,\n        "5586.13000000",\n        "5038.68926000",\n        "0"\n    ],\n    [\n        1525431960000,\n        "0.90191000",\n        "0.90289000",\n        "0.90190000",\n        "0.90190000",\n        "5432.01000000",\n        1525432019999,\n        "4899.23193760",\n        22,\n        "81.53000000",\n        "73.61220170",\n        "0"\n    ],\n    [\n        1525432020000,\n        "0.90190000",\n        "0.90289000",\n        "0.90103000",\n        "0.90103000",\n        "7287.76000000",\n        1525432079999,\n        "6570.54464040",\n        23,\n        "1598.85000000",\n        "1441.74435850",\n        "0"\n    ],\n    [\n        1525432080000,\n        "0.90103000",\n        "0.90103000",\n        "0.89932000",\n        "0.89934000",\n        "29486.56000000",\n        1525432139999,\n        "26539.52853200",\n        64,\n        "4772.59000000",\n        "4296.38571430",\n        "0"\n    ],\n    [\n        1525432140000,\n        "0.89934000",\n        "0.89998000",\n        "0.89930000",\n        "0.89930000",\n        "14121.44000000",\n        1525432199999,\n        "12699.95555200",\n        54,\n        "8921.28000000",\n        "8023.33110060",\n        "0"\n    ],\n    [\n        1525432200000,\n        "0.89931000",\n        "0.89997000",\n        "0.89870000",\n        "0.89870000",\n        "12418.93000000",\n        1525432259999,\n        "11165.02110220",\n        25,\n        "2207.34000000",\n        "1984.89659460",\n        "0"\n    ],\n    [\n        1525432260000,\n        "0.89800000",\n        "0.89899000",\n        "0.89751000",\n        "0.89756000",\n        "15793.79000000",\n        1525432319999,\n        "14179.10325130",\n        43,\n        "10117.01000000",\n        "9084.08938480",\n        "0"\n    ],\n    [\n        1525432320000,\n        "0.89752000",\n        "0.89890000",\n        "0.89750000",\n        "0.89750000",\n        "8173.49000000",\n        1525432379999,\n        "7335.92517550",\n        27,\n        "2600.48000000",\n        "2334.08670050",\n        "0"\n    ],\n    [\n        1525432380000,\n        "0.89700000",\n        "0.89700000",\n        "0.89600000",\n        "0.89601000",\n        "32020.81000000",\n        1525432439999,\n        "28705.07848430",\n        61,\n        "9109.26000000",\n        "8166.25800900",\n        "0"\n    ],\n    [\n        1525432440000,\n        "0.89602000",\n        "0.89690000",\n        "0.89550000",\n        "0.89649000",\n        "44961.53000000",\n        1525432499999,\n        "40288.09625200",\n        52,\n        "35603.61000000",\n        "31904.60636330",\n        "0"\n    ],\n    [\n        1525432500000,\n        "0.89649000",\n        "0.89999000",\n        "0.89649000",\n        "0.89692000",\n        "9557.33000000",\n        1525432559999,\n        "8583.14869300",\n        26,\n        "5609.61000000",\n        "5042.57273040",\n        "0"\n    ],\n    [\n        1525432560000,\n        "0.89703000",\n        "0.89703000",\n        "0.89601000",\n        "0.89602000",\n        "14187.95000000",\n        1525432619999,\n        "12720.62715160",\n        33,\n        "3744.94000000",\n        "3358.43792060",\n        "0"\n    ],\n    [\n        1525432620000,\n        "0.89602000",\n        "0.89602000",\n        "0.89560000",\n        "0.89598000",\n        "11086.01000000",\n        1525432679999,\n        "9932.94098080",\n        45,\n        "4900.89000000",\n        "4391.18104680",\n        "0"\n    ],\n    [\n        1525432680000,\n        "0.89598000",\n        "0.89598000",\n        "0.88000000",\n        "0.89330000",\n        "179521.09000000",\n        1525432739999,\n        "159378.53883780",\n        220,\n        "31445.65000000",\n        "27962.84339910",\n        "0"\n    ],\n    [\n        1525432740000,\n        "0.89108000",\n        "0.89323000",\n        "0.88023000",\n        "0.89110000",\n        "20642.21000000",\n        1525432799999,\n        "18369.51487680",\n        56,\n        "12027.42000000",\n        "10728.21049570",\n        "0"\n    ],\n    [\n        1525432800000,\n        "0.89297000",\n        "0.89500000",\n        "0.88500000",\n        "0.89275000",\n        "46951.40000000",\n        1525432859999,\n        "41880.90792160",\n        84,\n        "36868.19000000",\n        "32925.77401370",\n        "0"\n    ],\n    [\n        1525432860000,\n        "0.89275000",\n        "0.89275000",\n        "0.89065000",\n        "0.89275000",\n        "53020.33000000",\n        1525432919999,\n        "47330.76343080",\n        72,\n        "49273.90000000",\n        "43988.76650340",\n        "0"\n    ],\n    [\n        1525432920000,\n        "0.89275000",\n        "0.89500000",\n        "0.89268000",\n        "0.89495000",\n        "36372.30000000",\n        1525432979999,\n        "32475.46811050",\n        58,\n        "27909.51000000",\n        "24920.26301510",\n        "0"\n    ],\n    [\n        1525432980000,\n        "0.89482000",\n        "0.90090000",\n        "0.89465000",\n        "0.89720000",\n        "28314.91000000",\n        1525433039999,\n        "25442.85229740",\n        47,\n        "25406.67000000",\n        "22826.27860090",\n        "0"\n    ],\n    [\n        1525433040000,\n        "0.89999000",\n        "0.89999000",\n        "0.89756000",\n        "0.89756000",\n        "274.08000000",\n        1525433099999,\n        "246.54524120",\n        11,\n        "224.08000000",\n        "201.66724120",\n        "0"\n    ],\n    [\n        1525433100000,\n        "0.89994000",\n        "0.89999000",\n        "0.89815000",\n        "0.89995000",\n        "12388.83000000",\n        1525433159999,\n        "11149.21307050",\n        26,\n        "10546.54000000",\n        "9491.30637540",\n        "0"\n    ],\n    [\n        1525433160000,\n        "0.89994000",\n        "0.89995000",\n        "0.89990000",\n        "0.89990000",\n        "10994.41000000",\n        1525433219999,\n        "9894.30156360",\n        20,\n        "158.83000000",\n        "142.93905850",\n        "0"\n    ],\n    [\n        1525433220000,\n        "0.89990000",\n        "0.89990000",\n        "0.89826000",\n        "0.89826000",\n        "4820.28000000",\n        1525433279999,\n        "4333.02760010",\n        16,\n        "3242.37000000",\n        "2915.30760020",\n        "0"\n    ],\n    [\n        1525433280000,\n        "0.89888000",\n        "0.89989000",\n        "0.89793000",\n        "0.89888000",\n        "12501.96000000",\n        1525433339999,\n        "11239.24355810",\n        41,\n        "8298.69000000",\n        "7461.88637400",\n        "0"\n    ],\n    [\n        1525433340000,\n        "0.89988000",\n        "0.89995000",\n        "0.89910000",\n        "0.89995000",\n        "21174.72000000",\n        1525433399999,\n        "19055.93387930",\n        21,\n        "20888.01000000",\n        "18798.01410740",\n        "0"\n    ],\n    [\n        1525433400000,\n        "0.89995000",\n        "0.90285000",\n        "0.89995000",\n        "0.90283000",\n        "23403.90000000",\n        1525433459999,\n        "21089.32840400",\n        43,\n        "15401.43000000",\n        "13869.06261160",\n        "0"\n    ],\n    [\n        1525433460000,\n        "0.90250000",\n        "0.90283000",\n        "0.90250000",\n        "0.90252000",\n        "25382.12000000",\n        1525433519999,\n        "22909.11715040",\n        26,\n        "5603.50000000",\n        "5058.90724180",\n        "0"\n    ],\n    [\n        1525433520000,\n        "0.90252000",\n        "0.90283000",\n        "0.90252000",\n        "0.90283000",\n        "11728.22000000",\n        1525433579999,\n        "10587.02274500",\n        23,\n        "7303.39000000",\n        "6593.45770260",\n        "0"\n    ],\n    [\n        1525433580000,\n        "0.90255000",\n        "0.90283000",\n        "0.90043000",\n        "0.90283000",\n        "16256.00000000",\n        1525433639999,\n        "14668.33754580",\n        36,\n        "2252.64000000",\n        "2033.38977060",\n        "0"\n    ],\n    [\n        1525433640000,\n        "0.90260000",\n        "0.90282000",\n        "0.90057000",\n        "0.90100000",\n        "3369.29000000",\n        1525433699999,\n        "3036.73601740",\n        25,\n        "807.79000000",\n        "728.82311260",\n        "0"\n    ],\n    [\n        1525433700000,\n        "0.90100000",\n        "0.90277000",\n        "0.90100000",\n        "0.90200000",\n        "5490.73000000",\n        1525433759999,\n        "4952.58964740",\n        29,\n        "1013.14000000",\n        "913.82242740",\n        "0"\n    ],\n    [\n        1525433760000,\n        "0.90200000",\n        "0.90249000",\n        "0.90120000",\n        "0.90130000",\n        "18373.44000000",\n        1525433819999,\n        "16571.62405470",\n        34,\n        "7684.36000000",\n        "6930.81964060",\n        "0"\n    ],\n    [\n        1525433820000,\n        "0.90150000",\n        "0.90150000",\n        "0.90101000",\n        "0.90101000",\n        "20013.27000000",\n        1525433879999,\n        "18041.52075000",\n        13,\n        "897.76000000",\n        "809.29782900",\n        "0"\n    ],\n    [\n        1525433880000,\n        "0.90130000",\n        "0.90150000",\n        "0.90100000",\n        "0.90100000",\n        "9479.73000000",\n        1525433939999,\n        "8541.34263580",\n        23,\n        "1996.82000000",\n        "1799.21425080",\n        "0"\n    ],\n    [\n        1525433940000,\n        "0.90100000",\n        "0.90101000",\n        "0.90099000",\n        "0.90100000",\n        "5689.03000000",\n        1525433999999,\n        "5125.76833920",\n        16,\n        "5178.82000000",\n        "4666.06912920",\n        "0"\n    ],\n    [\n        1525434000000,\n        "0.90100000",\n        "0.90150000",\n        "0.90066000",\n        "0.90150000",\n        "46118.29000000",\n        1525434059999,\n        "41564.59180520",\n        30,\n        "44407.89000000",\n        "40023.44055890",\n        "0"\n    ],\n    [\n        1525434060000,\n        "0.90239000",\n        "0.90700000",\n        "0.90239000",\n        "0.90670000",\n        "38825.50000000",\n        1525434119999,\n        "35070.78857670",\n        57,\n        "34106.05000000",\n        "30808.64044170",\n        "0"\n    ],\n    [\n        1525434120000,\n        "0.90700000",\n        "0.90999000",\n        "0.90700000",\n        "0.90999000",\n        "68758.09000000",\n        1525434179999,\n        "62442.21088380",\n        72,\n        "65133.01000000",\n        "59151.88384860",\n        "0"\n    ],\n    [\n        1525434180000,\n        "0.90813000",\n        "0.90999000",\n        "0.90805000",\n        "0.90980000",\n        "13196.85000000",\n        1525434239999,\n        "11996.95283570",\n        32,\n        "11418.32000000",\n        "10381.24160720",\n        "0"\n    ],\n    [\n        1525434240000,\n        "0.90978000",\n        "0.91027000",\n        "0.90978000",\n        "0.91027000",\n        "38441.90000000",\n        1525434299999,\n        "34981.31186570",\n        53,\n        "35754.13000000",\n        "32535.97871970",\n        "0"\n    ],\n    [\n        1525434300000,\n        "0.91027000",\n        "0.91100000",\n        "0.91027000",\n        "0.91099000",\n        "15810.17000000",\n        1525434359999,\n        "14400.81659940",\n        22,\n        "14127.03000000",\n        "12867.86797020",\n        "0"\n    ],\n    [\n        1525434360000,\n        "0.91100000",\n        "0.91380000",\n        "0.91099000",\n        "0.91380000",\n        "22812.53000000",\n        1525434419999,\n        "20800.37516790",\n        54,\n        "14216.05000000",\n        "12967.18941650",\n        "0"\n    ],\n    [\n        1525434420000,\n        "0.91380000",\n        "0.91380000",\n        "0.91201000",\n        "0.91300000",\n        "47773.26000000",\n        1525434479999,\n        "43639.98658590",\n        125,\n        "15690.06000000",\n        "14334.55060630",\n        "0"\n    ],\n    [\n        1525434480000,\n        "0.91202000",\n        "0.91290000",\n        "0.91098000",\n        "0.91279000",\n        "45963.14000000",\n        1525434539999,\n        "41916.71469430",\n        80,\n        "10713.47000000",\n        "9778.07902740",\n        "0"\n    ],\n    [\n        1525434540000,\n        "0.91279000",\n        "0.91370000",\n        "0.91278000",\n        "0.91370000",\n        "19262.90000000",\n        1525434599999,\n        "17585.40039440",\n        53,\n        "6081.65000000",\n        "5551.85784140",\n        "0"\n    ],\n    [\n        1525434600000,\n        "0.91290000",\n        "0.91363000",\n        "0.91116000",\n        "0.91363000",\n        "17313.78000000",\n        1525434659999,\n        "15815.14298440",\n        55,\n        "11223.93000000",\n        "10252.79322100",\n        "0"\n    ],\n    [\n        1525434660000,\n        "0.91363000",\n        "0.91503000",\n        "0.91363000",\n        "0.91500000",\n        "31505.56000000",\n        1525434719999,\n        "28821.59981860",\n        66,\n        "24549.18000000",\n        "22456.60947850",\n        "0"\n    ],\n    [\n        1525434720000,\n        "0.91500000",\n        "0.91899000",\n        "0.91500000",\n        "0.91898000",\n        "61668.66000000",\n        1525434779999,\n        "56476.09390690",\n        57,\n        "54679.13000000",\n        "50074.97808180",\n        "0"\n    ],\n    [\n        1525434780000,\n        "0.91898000",\n        "0.92130000",\n        "0.91850000",\n        "0.91950000",\n        "88090.89000000",\n        1525434839999,\n        "80985.58681210",\n        154,\n        "64663.55000000",\n        "59445.90896990",\n        "0"\n    ],\n    [\n        1525434840000,\n        "0.91950000",\n        "0.92000000",\n        "0.91166000",\n        "0.91170000",\n        "137871.22000000",\n        1525434899999,\n        "126341.31617500",\n        180,\n        "5260.11000000",\n        "4824.34873630",\n        "0"\n    ],\n    [\n        1525434900000,\n        "0.91299000",\n        "0.91500000",\n        "0.91170000",\n        "0.91361000",\n        "21859.63000000",\n        1525434959999,\n        "19935.60181060",\n        37,\n        "3020.22000000",\n        "2758.71179910",\n        "0"\n    ],\n    [\n        1525434960000,\n        "0.91360000",\n        "0.91600000",\n        "0.91252000",\n        "0.91596000",\n        "29526.40000000",\n        1525435019999,\n        "27023.97494110",\n        59,\n        "26609.98000000",\n        "24359.76660240",\n        "0"\n    ],\n    [\n        1525435020000,\n        "0.91596000",\n        "0.91598000",\n        "0.91402000",\n        "0.91499000",\n        "10268.52000000",\n        1525435079999,\n        "9398.35575020",\n        33,\n        "6169.36000000",\n        "5648.02025580",\n        "0"\n    ],\n    [\n        1525435080000,\n        "0.91499000",\n        "0.91499000",\n        "0.91377000",\n        "0.91450000",\n        "19377.49000000",\n        1525435139999,\n        "17714.52028290",\n        41,\n        "11744.10000000",\n        "10737.44604450",\n        "0"\n    ],\n    [\n        1525435140000,\n        "0.91450000",\n        "0.91596000",\n        "0.91402000",\n        "0.91596000",\n        "59299.49000000",\n        1525435199999,\n        "54266.04536620",\n        59,\n        "58992.82000000",\n        "53985.59698700",\n        "0"\n    ],\n    [\n        1525435200000,\n        "0.91596000",\n        "0.91989000",\n        "0.91596000",\n        "0.91989000",\n        "35620.02000000",\n        1525435259999,\n        "32676.42328530",\n        41,\n        "33895.59000000",\n        "31092.53325220",\n        "0"\n    ],\n    [\n        1525435260000,\n        "0.91989000",\n        "0.92100000",\n        "0.91854000",\n        "0.92100000",\n        "29000.58000000",\n        1525435319999,\n        "26679.35237040",\n        42,\n        "11985.90000000",\n        "11027.08942860",\n        "0"\n    ],\n    [\n        1525435320000,\n        "0.92130000",\n        "0.92450000",\n        "0.91901000",\n        "0.91901000",\n        "92023.65000000",\n        1525435379999,\n        "84813.23211140",\n        126,\n        "34255.82000000",\n        "31601.46242490",\n        "0"\n    ],\n    [\n        1525435380000,\n        "0.91904000",\n        "0.92200000",\n        "0.91701000",\n        "0.91900000",\n        "89087.38000000",\n        1525435439999,\n        "81984.47244610",\n        95,\n        "36332.36000000",\n        "33456.10349460",\n        "0"\n    ],\n    [\n        1525435440000,\n        "0.91900000",\n        "0.92218000",\n        "0.91883000",\n        "0.92001000",\n        "41375.72000000",\n        1525435499999,\n        "38125.65703590",\n        63,\n        "37088.71000000",\n        "34184.19994410",\n        "0"\n    ],\n    [\n        1525435500000,\n        "0.92003000",\n        "0.92187000",\n        "0.92003000",\n        "0.92178000",\n        "10045.78000000",\n        1525435559999,\n        "9246.56281970",\n        25,\n        "3370.66000000",\n        "3105.15559570",\n        "0"\n    ],\n    [\n        1525435560000,\n        "0.92180000",\n        "0.92184000",\n        "0.92011000",\n        "0.92080000",\n        "41522.01000000",\n        1525435619999,\n        "38268.16378490",\n        101,\n        "12242.83000000",\n        "11284.64806530",\n        "0"\n    ],\n    [\n        1525435620000,\n        "0.92080000",\n        "0.92172000",\n        "0.91724000",\n        "0.91724000",\n        "67701.61000000",\n        1525435679999,\n        "62234.82081460",\n        107,\n        "5858.87000000",\n        "5387.47919790",\n        "0"\n    ],\n    [\n        1525435680000,\n        "0.91700000",\n        "0.91700000",\n        "0.91179000",\n        "0.91277000",\n        "62307.18000000",\n        1525435739999,\n        "57007.77414290",\n        154,\n        "17008.17000000",\n        "15544.19336760",\n        "0"\n    ],\n    [\n        1525435740000,\n        "0.91277000",\n        "0.91695000",\n        "0.91275000",\n        "0.91695000",\n        "26230.20000000",\n        1525435799999,\n        "23948.55606270",\n        47,\n        "24438.40000000",\n        "22312.88630600",\n        "0"\n    ],\n    [\n        1525435800000,\n        "0.91695000",\n        "0.91695000",\n        "0.91357000",\n        "0.91553000",\n        "2244.54000000",\n        1525435859999,\n        "2053.79237160",\n        14,\n        "1401.55000000",\n        "1283.47658360",\n        "0"\n    ],\n    [\n        1525435860000,\n        "0.91551000",\n        "0.91557000",\n        "0.91551000",\n        "0.91551000",\n        "34323.49000000",\n        1525435919999,\n        "31423.67404320",\n        54,\n        "1874.34000000",\n        "1716.03824400",\n        "0"\n    ],\n    [\n        1525435920000,\n        "0.91551000",\n        "0.91552000",\n        "0.91400000",\n        "0.91480000",\n        "15796.71000000",\n        1525435979999,\n        "14458.34486850",\n        26,\n        "4449.36000000",\n        "4071.63349080",\n        "0"\n    ],\n    [\n        1525435980000,\n        "0.91401000",\n        "0.91480000",\n        "0.91399000",\n        "0.91399000",\n        "9094.74000000",\n        1525436039999,\n        "8315.42312100",\n        16,\n        "3483.91000000",\n        "3187.08086800",\n        "0"\n    ],\n    [\n        1525436040000,\n        "0.91399000",\n        "0.91464000",\n        "0.91362000",\n        "0.91464000",\n        "1398.47000000",\n        1525436099999,\n        "1278.71578920",\n        12,\n        "571.67000000",\n        "522.85472490",\n        "0"\n    ],\n    [\n        1525436100000,\n        "0.91420000",\n        "0.91480000",\n        "0.91420000",\n        "0.91479000",\n        "8388.40000000",\n        1525436159999,\n        "7673.41001020",\n        15,\n        "7881.22000000",\n        "7209.66073690",\n        "0"\n    ],\n    [\n        1525436160000,\n        "0.91479000",\n        "0.91479000",\n        "0.91424000",\n        "0.91424000",\n        "4274.02000000",\n        1525436219999,\n        "3908.98982980",\n        10,\n        "2735.18000000",\n        "2502.11117820",\n        "0"\n    ],\n    [\n        1525436220000,\n        "0.91478000",\n        "0.91479000",\n        "0.91477000",\n        "0.91478000",\n        "9518.59000000",\n        1525436279999,\n        "8707.42568160",\n        23,\n        "5132.19000000",\n        "4694.83468960",\n        "0"\n    ],\n    [\n        1525436280000,\n        "0.91479000",\n        "0.91479000",\n        "0.91423000",\n        "0.91424000",\n        "26258.26000000",\n        1525436339999,\n        "24019.84420500",\n        20,\n        "23927.89000000",\n        "21888.80163880",\n        "0"\n    ],\n    [\n        1525436340000,\n        "0.91425000",\n        "0.91425000",\n        "0.91423000",\n        "0.91423000",\n        "5017.63000000",\n        1525436399999,\n        "4587.29861500",\n        18,\n        "2615.82000000",\n        "2391.48695950",\n        "0"\n    ],\n    [\n        1525436400000,\n        "0.91422000",\n        "0.91423000",\n        "0.91286000",\n        "0.91295000",\n        "11683.98000000",\n        1525436459999,\n        "10674.05172920",\n        28,\n        "669.87000000",\n        "612.41486670",\n        "0"\n    ],\n    [\n        1525436460000,\n        "0.91298000",\n        "0.91300000",\n        "0.91287000",\n        "0.91287000",\n        "6494.58000000",\n        1525436519999,\n        "5929.20717200",\n        22,\n        "3291.54000000",\n        "3005.00092280",\n        "0"\n    ],\n    [\n        1525436520000,\n        "0.91287000",\n        "0.91424000",\n        "0.91210000",\n        "0.91210000",\n        "22141.59000000",\n        1525436579999,\n        "20212.63843530",\n        28,\n        "2420.19000000",\n        "2209.69211270",\n        "0"\n    ],\n    [\n        1525436580000,\n        "0.91210000",\n        "0.91290000",\n        "0.91054000",\n        "0.91054000",\n        "24588.29000000",\n        1525436639999,\n        "22421.37901070",\n        61,\n        "1169.55000000",\n        "1066.71085200",\n        "0"\n    ],\n    [\n        1525436640000,\n        "0.91054000",\n        "0.91061000",\n        "0.90801000",\n        "0.90815000",\n        "37412.48000000",\n        1525436699999,\n        "34012.14940420",\n        65,\n        "3407.71000000",\n        "3098.75598550",\n        "0"\n    ],\n    [\n        1525436700000,\n        "0.91079000",\n        "0.91200000",\n        "0.91062000",\n        "0.91200000",\n        "10841.35000000",\n        1525436759999,\n        "9875.24930930",\n        48,\n        "10791.85000000",\n        "9830.17213430",\n        "0"\n    ],\n    [\n        1525436760000,\n        "0.91210000",\n        "0.91399000",\n        "0.91210000",\n        "0.91280000",\n        "23887.49000000",\n        1525436819999,\n        "21826.53256680",\n        45,\n        "20041.68000000",\n        "18316.65498140",\n        "0"\n    ],\n    [\n        1525436820000,\n        "0.91290000",\n        "0.91399000",\n        "0.91280000",\n        "0.91281000",\n        "17450.70000000",\n        1525436879999,\n        "15931.87815590",\n        31,\n        "2411.66000000",\n        "2204.22496340",\n        "0"\n    ],\n    [\n        1525436880000,\n        "0.91281000",\n        "0.91399000",\n        "0.91280000",\n        "0.91398000",\n        "11197.82000000",\n        1525436939999,\n        "10222.38118880",\n        18,\n        "794.65000000",\n        "726.29808000",\n        "0"\n    ],\n    [\n        1525436940000,\n        "0.91281000",\n        "0.91281000",\n        "0.91000000",\n        "0.91276000",\n        "8043.82000000",\n        1525436999999,\n        "7341.63465310",\n        32,\n        "573.32000000",\n        "523.28880300",\n        "0"\n    ],\n    [\n        1525437000000,\n        "0.91272000",\n        "0.91272000",\n        "0.90802000",\n        "0.90995000",\n        "12810.29000000",\n        1525437059999,\n        "11645.86700210",\n        43,\n        "6606.69000000",\n        "6005.36505260",\n        "0"\n    ],\n    [\n        1525437060000,\n        "0.90995000",\n        "0.91000000",\n        "0.90825000",\n        "0.90830000",\n        "5277.99000000",\n        1525437119999,\n        "4798.79544920",\n        14,\n        "2446.30000000",\n        "2226.13300000",\n        "0"\n    ],\n    [\n        1525437120000,\n        "0.90830000",\n        "0.90831000",\n        "0.90828000",\n        "0.90829000",\n        "7427.10000000",\n        1525437179999,\n        "6745.98344200",\n        23,\n        "953.28000000",\n        "865.85908940",\n        "0"\n    ],\n    [\n        1525437180000,\n        "0.90998000",\n        "0.90999000",\n        "0.90853000",\n        "0.90853000",\n        "4323.30000000",\n        1525437239999,\n        "3934.05961980",\n        10,\n        "4282.69000000",\n        "3897.16421650",\n        "0"\n    ],\n    [\n        1525437240000,\n        "0.90870000",\n        "0.90998000",\n        "0.90829000",\n        "0.90830000",\n        "14236.24000000",\n        1525437299999,\n        "12932.45413130",\n        18,\n        "3760.23000000",\n        "3416.70071740",\n        "0"\n    ],\n    [\n        1525437300000,\n        "0.90830000",\n        "0.90830000",\n        "0.90800000",\n        "0.90800000",\n        "48865.72000000",\n        1525437359999,\n        "44375.89005060",\n        58,\n        "7332.12000000",\n        "6658.77876110",\n        "0"\n    ],\n    [\n        1525437360000,\n        "0.90800000",\n        "0.90820000",\n        "0.90600000",\n        "0.90600000",\n        "28987.13000000",\n        1525437419999,\n        "26308.04848950",\n        62,\n        "2285.04000000",\n        "2073.02963480",\n        "0"\n    ],\n    [\n        1525437420000,\n        "0.90599000",\n        "0.90763000",\n        "0.90500000",\n        "0.90500000",\n        "13568.50000000",\n        1525437479999,\n        "12284.32451750",\n        39,\n        "3347.00000000",\n        "3031.15915220",\n        "0"\n    ],\n    [\n        1525437480000,\n        "0.90699000",\n        "0.90700000",\n        "0.90501000",\n        "0.90700000",\n        "18848.63000000",\n        1525437539999,\n        "17080.78637940",\n        44,\n        "15970.73000000",\n        "14476.13085260",\n        "0"\n    ],\n    [\n        1525437540000,\n        "0.90700000",\n        "0.90763000",\n        "0.90517000",\n        "0.90700000",\n        "6764.88000000",\n        1525437599999,\n        "6138.39955010",\n        22,\n        "6703.32000000",\n        "6082.63234010",\n        "0"\n    ],\n    [\n        1525437600000,\n        "0.90534000",\n        "0.90979000",\n        "0.90534000",\n        "0.90979000",\n        "12565.31000000",\n        1525437659999,\n        "11397.86349390",\n        28,\n        "10156.19000000",\n        "9216.44364150",\n        "0"\n    ],\n    [\n        1525437660000,\n        "0.90979000",\n        "0.91276000",\n        "0.90718000",\n        "0.90761000",\n        "6068.97000000",\n        1525437719999,\n        "5527.28810310",\n        35,\n        "3744.62000000",\n        "3413.60093130",\n        "0"\n    ],\n    [\n        1525437720000,\n        "0.90757000",\n        "0.91100000",\n        "0.90757000",\n        "0.90801000",\n        "7586.72000000",\n        1525437779999,\n        "6889.36458070",\n        35,\n        "1350.90000000",\n        "1227.20396900",\n        "0"\n    ],\n    [\n        1525437780000,\n        "0.90801000",\n        "0.91250000",\n        "0.90535000",\n        "0.91023000",\n        "29508.05000000",\n        1525437839999,\n        "26782.14153500",\n        44,\n        "4295.49000000",\n        "3912.04714430",\n        "0"\n    ],\n    [\n        1525437840000,\n        "0.91013000",\n        "0.91013000",\n        "0.90692000",\n        "0.90692000",\n        "4052.42000000",\n        1525437899999,\n        "3685.90128940",\n        16,\n        "3838.42000000",\n        "3491.82040940",\n        "0"\n    ],\n    [\n        1525437900000,\n        "0.90880000",\n        "0.90880000",\n        "0.90691000",\n        "0.90696000",\n        "759.96000000",\n        1525437959999,\n        "689.37062630",\n        16,\n        "145.93000000",\n        "132.49617170",\n        "0"\n    ],\n    [\n        1525437960000,\n        "0.90848000",\n        "0.90848000",\n        "0.90695000",\n        "0.90839000",\n        "10592.87000000",\n        1525438019999,\n        "9615.61507120",\n        43,\n        "4768.03000000",\n        "4329.35400760",\n        "0"\n    ],\n    [\n        1525438020000,\n        "0.90839000",\n        "0.90840000",\n        "0.90800000",\n        "0.90800000",\n        "4178.65000000",\n        1525438079999,\n        "3795.54313610",\n        18,\n        "1849.66000000",\n        "1680.21265580",\n        "0"\n    ],\n    [\n        1525438080000,\n        "0.90800000",\n        "0.90801000",\n        "0.90534000",\n        "0.90698000",\n        "16429.17000000",\n        1525438139999,\n        "14893.70679500",\n        35,\n        "474.38000000",\n        "430.53561100",\n        "0"\n    ],\n    [\n        1525438140000,\n        "0.90698000",\n        "0.90698000",\n        "0.90534000",\n        "0.90534000",\n        "16833.48000000",\n        1525438199999,\n        "15262.70815140",\n        12,\n        "3800.71000000",\n        "3447.14749310",\n        "0"\n    ],\n    [\n        1525438200000,\n        "0.90534000",\n        "0.90680000",\n        "0.90510000",\n        "0.90510000",\n        "18066.36000000",\n        1525438259999,\n        "16356.59989510",\n        24,\n        "1047.51000000",\n        "948.79986880",\n        "0"\n    ],\n    [\n        1525438260000,\n        "0.90510000",\n        "0.90510000",\n        "0.90200000",\n        "0.90231000",\n        "37304.51000000",\n        1525438319999,\n        "33682.79650040",\n        56,\n        "33060.29000000",\n        "29849.46387240",\n        "0"\n    ],\n    [\n        1525438320000,\n        "0.90293000",\n        "0.90400000",\n        "0.90290000",\n        "0.90400000",\n        "10351.41000000",\n        1525438379999,\n        "9348.09110190",\n        24,\n        "10351.41000000",\n        "9348.09110190",\n        "0"\n    ],\n    [\n        1525438380000,\n        "0.90400000",\n        "0.90400000",\n        "0.90260000",\n        "0.90399000",\n        "13478.33000000",\n        1525438439999,\n        "12179.23311600",\n        24,\n        "11114.17000000",\n        "10045.09114420",\n        "0"\n    ],\n    [\n        1525438440000,\n        "0.90265000",\n        "0.90399000",\n        "0.90265000",\n        "0.90300000",\n        "15035.15000000",\n        1525438499999,\n        "13573.49260700",\n        23,\n        "5256.78000000",\n        "4747.04692650",\n        "0"\n    ],\n    [\n        1525438500000,\n        "0.90300000",\n        "0.90300000",\n        "0.90265000",\n        "0.90265000",\n        "30250.45000000",\n        1525438559999,\n        "27310.07179730",\n        33,\n        "12185.23000000",\n        "11003.26269000",\n        "0"\n    ],\n    [\n        1525438560000,\n        "0.90300000",\n        "0.90300000",\n        "0.90265000",\n        "0.90300000",\n        "14767.01000000",\n        1525438619999,\n        "13332.04966400",\n        19,\n        "7586.31000000",\n        "6850.38863000",\n        "0"\n    ],\n    [\n        1525438620000,\n        "0.90300000",\n        "0.90300000",\n        "0.90265000",\n        "0.90300000",\n        "7644.17000000",\n        1525438679999,\n        "6900.65848650",\n        13,\n        "1766.96000000",\n        "1595.56488000",\n        "0"\n    ],\n    [\n        1525438680000,\n        "0.90265000",\n        "0.90265000",\n        "0.90088000",\n        "0.90088000",\n        "50291.95000000",\n        1525438739999,\n        "45383.00513880",\n        43,\n        "240.00000000",\n        "216.36800000",\n        "0"\n    ],\n    [\n        1525438740000,\n        "0.90100000",\n        "0.90101000",\n        "0.90000000",\n        "0.90098000",\n        "71954.37000000",\n        1525438799999,\n        "64803.91302940",\n        66,\n        "43927.27000000",\n        "39578.35337490",\n        "0"\n    ],\n    [\n        1525438800000,\n        "0.90101000",\n        "0.90300000",\n        "0.90002000",\n        "0.90300000",\n        "9737.94000000",\n        1525438859999,\n        "8775.51867050",\n        24,\n        "3495.86000000",\n        "3151.84241910",\n        "0"\n    ],\n    [\n        1525438860000,\n        "0.90265000",\n        "0.90400000",\n        "0.90250000",\n        "0.90400000",\n        "12959.69000000",\n        1525438919999,\n        "11705.87141550",\n        25,\n        "12722.06000000",\n        "11491.38070200",\n        "0"\n    ],\n    [\n        1525438920000,\n        "0.90400000",\n        "0.90679000",\n        "0.90400000",\n        "0.90520000",\n        "13140.06000000",\n        1525438979999,\n        "11892.84981970",\n        36,\n        "2236.96000000",\n        "2023.74347170",\n        "0"\n    ],\n    [\n        1525438980000,\n        "0.90521000",\n        "0.90700000",\n        "0.90401000",\n        "0.90481000",\n        "21224.71000000",\n        1525439039999,\n        "19233.07414740",\n        37,\n        "17342.82000000",\n        "15721.00790390",\n        "0"\n    ],\n    [\n        1525439040000,\n        "0.90403000",\n        "0.90450000",\n        "0.90388000",\n        "0.90398000",\n        "16750.82000000",\n        1525439099999,\n        "15142.75514790",\n        33,\n        "5034.41000000",\n        "4551.06277910",\n        "0"\n    ],\n    [\n        1525439100000,\n        "0.90400000",\n        "0.90465000",\n        "0.90250000",\n        "0.90464000",\n        "37717.01000000",\n        1525439159999,\n        "34081.90669590",\n        54,\n        "21738.21000000",\n        "19652.09446510",\n        "0"\n    ],\n    [\n        1525439160000,\n        "0.90400000",\n        "0.90891000",\n        "0.90400000",\n        "0.90879000",\n        "18587.03000000",\n        1525439219999,\n        "16846.46699460",\n        37,\n        "11944.02000000",\n        "10831.81836110",\n        "0"\n    ],\n    [\n        1525439220000,\n        "0.90464000",\n        "0.90950000",\n        "0.90464000",\n        "0.90950000",\n        "27455.96000000",\n        1525439279999,\n        "24924.63669920",\n        91,\n        "10297.62000000",\n        "9359.11267290",\n        "0"\n    ],\n    [\n        1525439280000,\n        "0.90950000",\n        "0.90985000",\n        "0.90799000",\n        "0.90802000",\n        "36819.88000000",\n        1525439339999,\n        "33450.46641470",\n        43,\n        "2657.06000000",\n        "2416.61772900",\n        "0"\n    ],\n    [\n        1525439340000,\n        "0.90803000",\n        "0.90942000",\n        "0.90799000",\n        "0.90801000",\n        "21349.09000000",\n        1525439399999,\n        "19388.43322320",\n        30,\n        "512.10000000",\n        "465.67739240",\n        "0"\n    ],\n    [\n        1525439400000,\n        "0.90801000",\n        "0.90801000",\n        "0.90500000",\n        "0.90500000",\n        "15298.90000000",\n        1525439459999,\n        "13890.43318420",\n        37,\n        "474.37000000",\n        "430.72940060",\n        "0"\n    ],\n    [\n        1525439460000,\n        "0.90700000",\n        "0.90800000",\n        "0.90700000",\n        "0.90700000",\n        "1614.38000000",\n        1525439519999,\n        "1465.12088750",\n        9,\n        "1060.38000000",\n        "962.64288750",\n        "0"\n    ],\n    [\n        1525439520000,\n        "0.90700000",\n        "0.90700000",\n        "0.90501000",\n        "0.90700000",\n        "2334.96000000",\n        1525439579999,\n        "2115.04539890",\n        14,\n        "837.52000000",\n        "759.58302880",\n        "0"\n    ],\n    [\n        1525439580000,\n        "0.90690000",\n        "0.90690000",\n        "0.90458000",\n        "0.90458000",\n        "12671.43000000",\n        1525439639999,\n        "11471.26118950",\n        26,\n        "1089.58000000",\n        "988.13762780",\n        "0"\n    ],\n    [\n        1525439640000,\n        "0.90456000",\n        "0.90458000",\n        "0.90320000",\n        "0.90400000",\n        "8493.43000000",\n        1525439699999,\n        "7677.37923810",\n        19,\n        "3956.96000000",\n        "3577.09729490",\n        "0"\n    ],\n    [\n        1525439700000,\n        "0.90403000",\n        "0.90475000",\n        "0.90403000",\n        "0.90472000",\n        "7682.69000000",\n        1525439759999,\n        "6950.06748710",\n        11,\n        "7104.70000000",\n        "6427.54140750",\n        "0"\n    ],\n    [\n        1525439760000,\n        "0.90600000",\n        "0.90698000",\n        "0.90431000",\n        "0.90439000",\n        "18990.80000000",\n        1525439819999,\n        "17219.06312190",\n        37,\n        "3041.29000000",\n        "2757.22350910",\n        "0"\n    ],\n    [\n        1525439820000,\n        "0.90432000",\n        "0.90683000",\n        "0.90405000",\n        "0.90451000",\n        "7514.91000000",\n        1525439879999,\n        "6802.66602110",\n        34,\n        "5558.67000000",\n        "5033.26779710",\n        "0"\n    ],\n    [\n        1525439880000,\n        "0.90661000",\n        "0.90661000",\n        "0.90400000",\n        "0.90400000",\n        "12828.62000000",\n        1525439939999,\n        "11602.72619150",\n        26,\n        "531.45000000",\n        "481.56255890",\n        "0"\n    ],\n    [\n        1525439940000,\n        "0.90400000",\n        "0.90584000",\n        "0.90400000",\n        "0.90479000",\n        "24041.14000000",\n        1525439999999,\n        "21737.48406740",\n        35,\n        "2956.63000000",\n        "2677.08702740",\n        "0"\n    ],\n    [\n        1525440000000,\n        "0.90479000",\n        "0.90490000",\n        "0.90350000",\n        "0.90400000",\n        "58898.11000000",\n        1525440059999,\n        "53243.98656980",\n        59,\n        "56491.58000000",\n        "51068.18204080",\n        "0"\n    ],\n    [\n        1525440060000,\n        "0.90400000",\n        "0.90400000",\n        "0.90352000",\n        "0.90400000",\n        "18154.53000000",\n        1525440119999,\n        "16411.66001760",\n        18,\n        "18081.40000000",\n        "16345.58560000",\n        "0"\n    ],\n    [\n        1525440120000,\n        "0.90400000",\n        "0.90489000",\n        "0.90400000",\n        "0.90489000",\n        "13835.53000000",\n        1525440179999,\n        "12507.84490530",\n        14,\n        "12240.82000000",\n        "11066.15764530",\n        "0"\n    ],\n    [\n        1525440180000,\n        "0.90489000",\n        "0.90618000",\n        "0.90407000",\n        "0.90614000",\n        "3704.47000000",\n        1525440239999,\n        "3355.78765100",\n        17,\n        "1496.07000000",\n        "1355.05862700",\n        "0"\n    ],\n    [\n        1525440240000,\n        "0.90611000",\n        "0.90611000",\n        "0.90425000",\n        "0.90430000",\n        "6438.08000000",\n        1525440299999,\n        "5832.76921920",\n        17,\n        "5062.35000000",\n        "4586.62533200",\n        "0"\n    ],\n    [\n        1525440300000,\n        "0.90593000",\n        "0.90619000",\n        "0.90436000",\n        "0.90442000",\n        "7729.74000000",\n        1525440359999,\n        "7003.33384060",\n        18,\n        "7444.68000000",\n        "6745.52587540",\n        "0"\n    ],\n    [\n        1525440360000,\n        "0.90443000",\n        "0.90619000",\n        "0.90443000",\n        "0.90619000",\n        "8935.11000000",\n        1525440419999,\n        "8094.37846620",\n        15,\n        "7492.88000000",\n        "6789.95794270",\n        "0"\n    ],\n    [\n        1525440420000,\n        "0.90619000",\n        "0.90750000",\n        "0.90445000",\n        "0.90699000",\n        "27094.88000000",\n        1525440479999,\n        "24548.22035090",\n        32,\n        "15921.27000000",\n        "14435.58260430",\n        "0"\n    ],\n    [\n        1525440480000,\n        "0.90699000",\n        "0.90799000",\n        "0.90699000",\n        "0.90799000",\n        "22318.17000000",\n        1525440539999,\n        "20262.24102990",\n        16,\n        "21433.98000000",\n        "19460.28954180",\n        "0"\n    ],\n    [\n        1525440540000,\n        "0.90799000",\n        "0.90799000",\n        "0.90705000",\n        "0.90799000",\n        "14414.82000000",\n        1525440599999,\n        "13088.34321180",\n        14,\n        "14234.82000000",\n        "12925.07421180",\n        "0"\n    ],\n    [\n        1525440600000,\n        "0.90799000",\n        "0.90799000",\n        "0.90790000",\n        "0.90799000",\n        "3839.41000000",\n        1525440659999,\n        "3485.84698010",\n        11,\n        "3348.60000000",\n        "3040.23299230",\n        "0"\n    ],\n    [\n        1525440660000,\n        "0.90799000",\n        "0.90799000",\n        "0.90790000",\n        "0.90790000",\n        "7966.14000000",\n        1525440719999,\n        "7233.13549230",\n        19,\n        "7522.07000000",\n        "6829.96433930",\n        "0"\n    ],\n    [\n        1525440720000,\n        "0.90799000",\n        "0.90799000",\n        "0.90760000",\n        "0.90795000",\n        "13031.39000000",\n        1525440779999,\n        "11831.11233910",\n        22,\n        "2758.99000000",\n        "2505.13529010",\n        "0"\n    ],\n    [\n        1525440780000,\n        "0.90790000",\n        "0.90795000",\n        "0.90699000",\n        "0.90699000",\n        "4346.00000000",\n        1525440839999,\n        "3944.06462100",\n        29,\n        "2331.28000000",\n        "2116.57027600",\n        "0"\n    ],\n    [\n        1525440840000,\n        "0.90699000",\n        "0.90699000",\n        "0.90510000",\n        "0.90590000",\n        "20838.28000000",\n        1525440899999,\n        "18874.47017760",\n        33,\n        "12008.13000000",\n        "10878.80499780",\n        "0"\n    ],\n    [\n        1525440900000,\n        "0.90590000",\n        "0.90699000",\n        "0.90527000",\n        "0.90551000",\n        "5114.02000000",\n        1525440959999,\n        "4632.77887230",\n        16,\n        "1753.37000000",\n        "1590.25079300",\n        "0"\n    ],\n    [\n        1525440960000,\n        "0.90695000",\n        "0.90696000",\n        "0.90550000",\n        "0.90689000",\n        "1669.74000000",\n        1525441019999,\n        "1513.79399850",\n        19,\n        "237.94000000",\n        "215.79198880",\n        "0"\n    ],\n    [\n        1525441020000,\n        "0.90687000",\n        "0.90700000",\n        "0.90687000",\n        "0.90690000",\n        "4814.97000000",\n        1525441079999,\n        "4366.75198630",\n        18,\n        "4278.86000000",\n        "3880.53774400",\n        "0"\n    ],\n    [\n        1525441080000,\n        "0.90560000",\n        "0.90690000",\n        "0.90524000",\n        "0.90688000",\n        "8243.22000000",\n        1525441139999,\n        "7467.52215080",\n        35,\n        "930.35000000",\n        "843.71384720",\n        "0"\n    ],\n    [\n        1525441140000,\n        "0.90526000",\n        "0.90684000",\n        "0.90439000",\n        "0.90439000",\n        "6934.10000000",\n        1525441199999,\n        "6276.99874320",\n        24,\n        "342.96000000",\n        "310.85314660",\n        "0"\n    ],\n    [\n        1525441200000,\n        "0.90451000",\n        "0.90500000",\n        "0.90423000",\n        "0.90423000",\n        "21209.72000000",\n        1525441259999,\n        "19181.17051760",\n        71,\n        "3287.19000000",\n        "2973.03681890",\n        "0"\n    ],\n    [\n        1525441260000,\n        "0.90429000",\n        "0.90444000",\n        "0.90321000",\n        "0.90440000",\n        "6296.21000000",\n        1525441319999,\n        "5691.00505830",\n        28,\n        "2141.84000000",\n        "1935.79197910",\n        "0"\n    ],\n    [\n        1525441320000,\n        "0.90436000",\n        "0.90478000",\n        "0.90301000",\n        "0.90301000",\n        "26964.25000000",\n        1525441379999,\n        "24350.65847100",\n        22,\n        "1064.72000000",\n        "962.93455100",\n        "0"\n    ],\n    [\n        1525441380000,\n        "0.90301000",\n        "0.90435000",\n        "0.90301000",\n        "0.90302000",\n        "18731.48000000",\n        1525441439999,\n        "16917.70191680",\n        33,\n        "2854.68000000",\n        "2580.69442850",\n        "0"\n    ],\n    [\n        1525441440000,\n        "0.90302000",\n        "0.90508000",\n        "0.90250000",\n        "0.90250000",\n        "29840.81000000",\n        1525441499999,\n        "26948.00455620",\n        43,\n        "1521.76000000",\n        "1377.09973370",\n        "0"\n    ],\n    [\n        1525441500000,\n        "0.90403000",\n        "0.90403000",\n        "0.90200000",\n        "0.90231000",\n        "6754.84000000",\n        1525441559999,\n        "6096.05095420",\n        51,\n        "768.96000000",\n        "694.10287210",\n        "0"\n    ],\n    [\n        1525441560000,\n        "0.90227000",\n        "0.90397000",\n        "0.90200000",\n        "0.90389000",\n        "5700.79000000",\n        1525441619999,\n        "5143.89849790",\n        26,\n        "1283.61000000",\n        "1159.59154450",\n        "0"\n    ],\n    [\n        1525441620000,\n        "0.90389000",\n        "0.90392000",\n        "0.90110000",\n        "0.90110000",\n        "21168.23000000",\n        1525441679999,\n        "19083.98962320",\n        79,\n        "2213.84000000",\n        "1999.69401150",\n        "0"\n    ],\n    [\n        1525441680000,\n        "0.90110000",\n        "0.90110000",\n        "0.90100000",\n        "0.90100000",\n        "22141.99000000",\n        1525441739999,\n        "19951.07913970",\n        42,\n        "11095.80000000",\n        "9998.37648090",\n        "0"\n    ],\n    [\n        1525441740000,\n        "0.90110000",\n        "0.90347000",\n        "0.90010000",\n        "0.90040000",\n        "42707.86000000",\n        1525441799999,\n        "38477.62286050",\n        79,\n        "8873.43000000",\n        "7993.91531200",\n        "0"\n    ],\n    [\n        1525441800000,\n        "0.90033000",\n        "0.90296000",\n        "0.90000000",\n        "0.90000000",\n        "83503.46000000",\n        1525441859999,\n        "75173.68825930",\n        96,\n        "2711.60000000",\n        "2441.92927630",\n        "0"\n    ],\n    [\n        1525441860000,\n        "0.90000000",\n        "0.90001000",\n        "0.89530000",\n        "0.89531000",\n        "96543.35000000",\n        1525441919999,\n        "86794.72391740",\n        163,\n        "8000.60000000",\n        "7187.58844160",\n        "0"\n    ],\n    [\n        1525441920000,\n        "0.89891000",\n        "0.89891000",\n        "0.89271000",\n        "0.89725000",\n        "55442.87000000",\n        1525441979999,\n        "49627.62621190",\n        125,\n        "44861.67000000",\n        "40163.62446930",\n        "0"\n    ],\n    [\n        1525441980000,\n        "0.89724000",\n        "0.89726000",\n        "0.89724000",\n        "0.89725000",\n        "16687.54000000",\n        1525442039999,\n        "14972.92134720",\n        53,\n        "3036.73000000",\n        "2724.73207470",\n        "0"\n    ],\n    [\n        1525442040000,\n        "0.89699000",\n        "0.89699000",\n        "0.89500000",\n        "0.89570000",\n        "7603.88000000",\n        1525442099999,\n        "6810.57941300",\n        46,\n        "6047.93000000",\n        "5417.23218680",\n        "0"\n    ],\n    [\n        1525442100000,\n        "0.89570000",\n        "0.89800000",\n        "0.89551000",\n        "0.89800000",\n        "56304.50000000",\n        1525442159999,\n        "50466.42739340",\n        78,\n        "55867.69000000",\n        "50075.25521030",\n        "0"\n    ],\n    [\n        1525442160000,\n        "0.89800000",\n        "0.89998000",\n        "0.89800000",\n        "0.89986000",\n        "7908.01000000",\n        1525442219999,\n        "7112.02165000",\n        38,\n        "2980.78000000",\n        "2679.92564350",\n        "0"\n    ],\n    [\n        1525442220000,\n        "0.89828000",\n        "0.89998000",\n        "0.89000000",\n        "0.89747000",\n        "121991.28000000",\n        1525442279999,\n        "108895.73453680",\n        123,\n        "17377.39000000",\n        "15518.64381250",\n        "0"\n    ],\n    [\n        1525442280000,\n        "0.89443000",\n        "0.89791000",\n        "0.89443000",\n        "0.89554000",\n        "16660.41000000",\n        1525442339999,\n        "14938.35787280",\n        38,\n        "6197.04000000",\n        "5562.29159250",\n        "0"\n    ],\n    [\n        1525442340000,\n        "0.89791000",\n        "0.89791000",\n        "0.89576000",\n        "0.89722000",\n        "8394.34000000",\n        1525442399999,\n        "7535.00677290",\n        37,\n        "6343.58000000",\n        "5695.89768970",\n        "0"\n    ],\n    [\n        1525442400000,\n        "0.89791000",\n        "0.89896000",\n        "0.89700000",\n        "0.89896000",\n        "34534.96000000",\n        1525442459999,\n        "31011.97018530",\n        51,\n        "33734.95000000",\n        "30294.16947420",\n        "0"\n    ],\n    [\n        1525442460000,\n        "0.89810000",\n        "0.90398000",\n        "0.89808000",\n        "0.90206000",\n        "21330.79000000",\n        1525442519999,\n        "19230.54513370",\n        68,\n        "14429.25000000",\n        "13015.21679230",\n        "0"\n    ],\n    [\n        1525442520000,\n        "0.90396000",\n        "0.90400000",\n        "0.90200000",\n        "0.90400000",\n        "20152.38000000",\n        1525442579999,\n        "18205.99164880",\n        58,\n        "11250.39000000",\n        "10163.16356780",\n        "0"\n    ],\n    [\n        1525442580000,\n        "0.90385000",\n        "0.90445000",\n        "0.89913000",\n        "0.90200000",\n        "94186.97000000",\n        1525442639999,\n        "85061.17436960",\n        89,\n        "28576.70000000",\n        "25830.55090820",\n        "0"\n    ],\n    [\n        1525442640000,\n        "0.89797000",\n        "0.90262000",\n        "0.89797000",\n        "0.90262000",\n        "6795.56000000",\n        1525442699999,\n        "6130.96677070",\n        33,\n        "6474.60000000",\n        "5842.46176000",\n        "0"\n    ],\n    [\n        1525442700000,\n        "0.90262000",\n        "0.90262000",\n        "0.90011000",\n        "0.90100000",\n        "8213.11000000",\n        1525442759999,\n        "7404.40061680",\n        42,\n        "5307.93000000",\n        "4788.49864370",\n        "0"\n    ],\n    [\n        1525442760000,\n        "0.90184000",\n        "0.90400000",\n        "0.90044000",\n        "0.90350000",\n        "13535.18000000",\n        1525442819999,\n        "12224.00700750",\n        28,\n        "9881.16000000",\n        "8921.53120750",\n        "0"\n    ],\n    [\n        1525442820000,\n        "0.90350000",\n        "0.90400000",\n        "0.90120000",\n        "0.90128000",\n        "18772.25000000",\n        1525442879999,\n        "16949.01782220",\n        53,\n        "6927.35000000",\n        "6258.74312120",\n        "0"\n    ],\n    [\n        1525442880000,\n        "0.90349000",\n        "0.90400000",\n        "0.90165000",\n        "0.90400000",\n        "8134.66000000",\n        1525442939999,\n        "7351.45687040",\n        31,\n        "7576.13000000",\n        "6847.67565510",\n        "0"\n    ],\n    [\n        1525442940000,\n        "0.90224000",\n        "0.90489000",\n        "0.89917000",\n        "0.90013000",\n        "17145.83000000",\n        1525442999999,\n        "15470.53389380",\n        78,\n        "8510.85000000",\n        "7686.00837870",\n        "0"\n    ],\n    [\n        1525443000000,\n        "0.90469000",\n        "0.90489000",\n        "0.90046000",\n        "0.90179000",\n        "8808.29000000",\n        1525443059999,\n        "7961.81491200",\n        36,\n        "7300.11000000",\n        "6602.69500330",\n        "0"\n    ],\n    [\n        1525443060000,\n        "0.90180000",\n        "0.90400000",\n        "0.90166000",\n        "0.90166000",\n        "11896.44000000",\n        1525443119999,\n        "10736.35070540",\n        79,\n        "5647.69000000",\n        "5101.49818850",\n        "0"\n    ],\n    [\n        1525443120000,\n        "0.90164000",\n        "0.90400000",\n        "0.90068000",\n        "0.90389000",\n        "6095.65000000",\n        1525443179999,\n        "5502.88972400",\n        22,\n        "5989.43000000",\n        "5407.19076940",\n        "0"\n    ],\n    [\n        1525443180000,\n        "0.90373000",\n        "0.90400000",\n        "0.90072000",\n        "0.90399000",\n        "9100.62000000",\n        1525443239999,\n        "8221.15658180",\n        44,\n        "7168.50000000",\n        "6479.11360180",\n        "0"\n    ],\n    [\n        1525443240000,\n        "0.90400000",\n        "0.90400000",\n        "0.90097000",\n        "0.90332000",\n        "7838.80000000",\n        1525443299999,\n        "7078.95522280",\n        52,\n        "6269.75000000",\n        "5664.63892410",\n        "0"\n    ],\n    [\n        1525443300000,\n        "0.90139000",\n        "0.90380000",\n        "0.90022000",\n        "0.90022000",\n        "11222.96000000",\n        1525443359999,\n        "10118.43043870",\n        76,\n        "5789.10000000",\n        "5224.36776800",\n        "0"\n    ],\n    [\n        1525443360000,\n        "0.90023000",\n        "0.90260000",\n        "0.89837000",\n        "0.90022000",\n        "9907.59000000",\n        1525443419999,\n        "8924.32682230",\n        56,\n        "7380.19000000",\n        "6649.70169320",\n        "0"\n    ],\n    [\n        1525443420000,\n        "0.90022000",\n        "0.90340000",\n        "0.89888000",\n        "0.90025000",\n        "8774.82000000",\n        1525443479999,\n        "7905.27637750",\n        40,\n        "7184.76000000",\n        "6473.94475330",\n        "0"\n    ],\n    [\n        1525443480000,\n        "0.89918000",\n        "0.90339000",\n        "0.89809000",\n        "0.90272000",\n        "12800.35000000",\n        1525443539999,\n        "11527.67852250",\n        41,\n        "6006.19000000",\n        "5422.80724010",\n        "0"\n    ],\n    [\n        1525443540000,\n        "0.89982000",\n        "0.90268000",\n        "0.89891000",\n        "0.89982000",\n        "10871.67000000",\n        1525443599999,\n        "9799.64611570",\n        54,\n        "5938.92000000",\n        "5354.54899730",\n        "0"\n    ],\n    [\n        1525443600000,\n        "0.90225000",\n        "0.90229000",\n        "0.89809000",\n        "0.89850000",\n        "25577.05000000",\n        1525443659999,\n        "23004.67184440",\n        54,\n        "7185.93000000",\n        "6469.11847950",\n        "0"\n    ],\n    [\n        1525443660000,\n        "0.89850000",\n        "0.90219000",\n        "0.89700000",\n        "0.89700000",\n        "16514.52000000",\n        1525443719999,\n        "14832.97537360",\n        99,\n        "8835.57000000",\n        "7939.55669020",\n        "0"\n    ],\n    [\n        1525443720000,\n        "0.89681000",\n        "0.90000000",\n        "0.89680000",\n        "0.89963000",\n        "20126.99000000",\n        1525443779999,\n        "18057.63087100",\n        43,\n        "5268.85000000",\n        "4732.62663890",\n        "0"\n    ],\n    [\n        1525443780000,\n        "0.89960000",\n        "0.89963000",\n        "0.89590000",\n        "0.89590000",\n        "23859.15000000",\n        1525443839999,\n        "21408.19647500",\n        105,\n        "7285.99000000",\n        "6546.64828690",\n        "0"\n    ],\n    [\n        1525443840000,\n        "0.89590000",\n        "0.89699000",\n        "0.89502000",\n        "0.89680000",\n        "15481.68000000",\n        1525443899999,\n        "13867.20689300",\n        34,\n        "13922.30000000",\n        "12470.76231460",\n        "0"\n    ],\n    [\n        1525443900000,\n        "0.89679000",\n        "0.89680000",\n        "0.89507000",\n        "0.89680000",\n        "20349.72000000",\n        1525443959999,\n        "18248.98770470",\n        26,\n        "19983.09000000",\n        "17920.80800550",\n        "0"\n    ],\n    [\n        1525443960000,\n        "0.89679000",\n        "0.89700000",\n        "0.89539000",\n        "0.89700000",\n        "9897.84000000",\n        1525444019999,\n        "8877.04058780",\n        50,\n        "7136.90000000",\n        "6401.47398980",\n        "0"\n    ],\n    [\n        1525444020000,\n        "0.89699000",\n        "0.89870000",\n        "0.89541000",\n        "0.89865000",\n        "13393.87000000",\n        1525444079999,\n        "12015.94339500",\n        73,\n        "10946.62000000",\n        "9822.84833120",\n        "0"\n    ],\n    [\n        1525444080000,\n        "0.89685000",\n        "0.89870000",\n        "0.89685000",\n        "0.89870000",\n        "7075.83000000",\n        1525444139999,\n        "6356.51075310",\n        26,\n        "6328.81000000",\n        "5686.51489520",\n        "0"\n    ],\n    [\n        1525444140000,\n        "0.89869000",\n        "0.90000000",\n        "0.89600000",\n        "0.89651000",\n        "24774.67000000",\n        1525444199999,\n        "22270.27988050",\n        47,\n        "17375.46000000",\n        "15621.16637870",\n        "0"\n    ],\n    [\n        1525444200000,\n        "0.89999000",\n        "0.90000000",\n        "0.89658000",\n        "0.89691000",\n        "11984.09000000",\n        1525444259999,\n        "10781.83290110",\n        32,\n        "11221.70000000",\n        "10097.09098420",\n        "0"\n    ],\n    [\n        1525444260000,\n        "0.89900000",\n        "0.90000000",\n        "0.89702000",\n        "0.89900000",\n        "14271.72000000",\n        1525444319999,\n        "12837.17974310",\n        26,\n        "10678.71000000",\n        "9607.13140710",\n        "0"\n    ],\n    [\n        1525444320000,\n        "0.89900000",\n        "0.90000000",\n        "0.89870000",\n        "0.90000000",\n        "26215.44000000",\n        1525444379999,\n        "23588.05690940",\n        27,\n        "25435.73000000",\n        "22887.22997350",\n        "0"\n    ],\n    [\n        1525444380000,\n        "0.90000000",\n        "0.90000000",\n        "0.89989000",\n        "0.89999000",\n        "22270.60000000",\n        1525444439999,\n        "20042.60029920",\n        33,\n        "14329.34000000",\n        "12896.33983780",\n        "0"\n    ],\n    [\n        1525444440000,\n        "0.89999000",\n        "0.89999000",\n        "0.89899000",\n        "0.89900000",\n        "9867.94000000",\n        1525444499999,\n        "8877.93766150",\n        21,\n        "6771.18000000",\n        "6091.22671690",\n        "0"\n    ],\n    [\n        1525444500000,\n        "0.89900000",\n        "0.90000000",\n        "0.89871000",\n        "0.90000000",\n        "15858.44000000",\n        1525444559999,\n        "14261.31294540",\n        21,\n        "12146.70000000",\n        "10924.48152000",\n        "0"\n    ],\n    [\n        1525444560000,\n        "0.90000000",\n        "0.90000000",\n        "0.89900000",\n        "0.90000000",\n        "21159.07000000",\n        1525444619999,\n        "19037.61138940",\n        22,\n        "18192.07000000",\n        "16370.17927740",\n        "0"\n    ],\n    [\n        1525444620000,\n        "0.89995000",\n        "0.90000000",\n        "0.89871000",\n        "0.89900000",\n        "9707.07000000",\n        1525444679999,\n        "8733.40849770",\n        21,\n        "7557.62000000",\n        "6801.05156490",\n        "0"\n    ],\n    [\n        1525444680000,\n        "0.89900000",\n        "0.89900000",\n        "0.89722000",\n        "0.89722000",\n        "7447.76000000",\n        1525444739999,\n        "6694.60411580",\n        21,\n        "6747.76000000",\n        "6066.21585970",\n        "0"\n    ],\n    [\n        1525444740000,\n        "0.89900000",\n        "0.89900000",\n        "0.89738000",\n        "0.89900000",\n        "4819.97000000",\n        1525444799999,\n        "4333.14981030",\n        17,\n        "4819.16000000",\n        "4332.42293250",\n        "0"\n    ],\n    [\n        1525444800000,\n        "0.89900000",\n        "0.89900000",\n        "0.89724000",\n        "0.89900000",\n        "7160.17000000",\n        1525444859999,\n        "6436.61100560",\n        21,\n        "6942.40000000",\n        "6241.21581680",\n        "0"\n    ],\n    [\n        1525444860000,\n        "0.89900000",\n        "0.89900000",\n        "0.89722000",\n        "0.89736000",\n        "25981.87000000",\n        1525444919999,\n        "23322.37088490",\n        32,\n        "6160.62000000",\n        "5536.68796600",\n        "0"\n    ],\n    [\n        1525444920000,\n        "0.89899000",\n        "0.89994000",\n        "0.89735000",\n        "0.89735000",\n        "27631.78000000",\n        1525444979999,\n        "24820.78868140",\n        29,\n        "17309.15000000",\n        "15544.13391870",\n        "0"\n    ],\n    [\n        1525444980000,\n        "0.89994000",\n        "0.90050000",\n        "0.89992000",\n        "0.90050000",\n        "35940.32000000",\n        1525445039999,\n        "32345.75279780",\n        43,\n        "35840.32000000",\n        "32255.75779780",\n        "0"\n    ],\n    [\n        1525445040000,\n        "0.90099000",\n        "0.90399000",\n        "0.89996000",\n        "0.90398000",\n        "21445.56000000",\n        1525445099999,\n        "19351.98224310",\n        56,\n        "12106.34000000",\n        "10932.98707020",\n        "0"\n    ],\n    [\n        1525445100000,\n        "0.90392000",\n        "0.90398000",\n        "0.90092000",\n        "0.90092000",\n        "10581.78000000",\n        1525445159999,\n        "9564.79895230",\n        18,\n        "10555.78000000",\n        "9541.37503230",\n        "0"\n    ],\n    [\n        1525445160000,\n        "0.90358000",\n        "0.90394000",\n        "0.90058000",\n        "0.90077000",\n        "61701.19000000",\n        1525445219999,\n        "55759.32823820",\n        55,\n        "4516.52000000",\n        "4078.97118620",\n        "0"\n    ],\n    [\n        1525445220000,\n        "0.90079000",\n        "0.90354000",\n        "0.90079000",\n        "0.90148000",\n        "7014.95000000",\n        1525445279999,\n        "6333.81038120",\n        38,\n        "4443.97000000",\n        "4013.41630130",\n        "0"\n    ],\n    [\n        1525445280000,\n        "0.90126000",\n        "0.90275000",\n        "0.90017000",\n        "0.90017000",\n        "10788.13000000",\n        1525445339999,\n        "9723.22854040",\n        54,\n        "5262.18000000",\n        "4744.48222810",\n        "0"\n    ],\n    [\n        1525445340000,\n        "0.90095000",\n        "0.90100000",\n        "0.90002000",\n        "0.90100000",\n        "14289.35000000",\n        1525445399999,\n        "12873.86878790",\n        17,\n        "13760.68000000",\n        "12397.98133930",\n        "0"\n    ],\n    [\n        1525445400000,\n        "0.90002000",\n        "0.90352000",\n        "0.90000000",\n        "0.90350000",\n        "16073.98000000",\n        1525445459999,\n        "14484.51292390",\n        47,\n        "7270.81000000",\n        "6558.48970220",\n        "0"\n    ],\n    [\n        1525445460000,\n        "0.90350000",\n        "0.90352000",\n        "0.90001000",\n        "0.90003000",\n        "36048.92000000",\n        1525445519999,\n        "32549.98433770",\n        65,\n        "12863.41000000",\n        "11615.17286290",\n        "0"\n    ],\n    [\n        1525445520000,\n        "0.90079000",\n        "0.90084000",\n        "0.90002000",\n        "0.90084000",\n        "8914.81000000",\n        1525445579999,\n        "8028.98340550",\n        20,\n        "8675.94000000",\n        "7813.99487530",\n        "0"\n    ],\n    [\n        1525445580000,\n        "0.90084000",\n        "0.90300000",\n        "0.89900000",\n        "0.90101000",\n        "15184.99000000",\n        1525445639999,\n        "13687.18827050",\n        46,\n        "6646.63000000",\n        "5996.20573420",\n        "0"\n    ],\n    [\n        1525445640000,\n        "0.90243000",\n        "0.90277000",\n        "0.90243000",\n        "0.90272000",\n        "6937.39000000",\n        1525445699999,\n        "6262.21612210",\n        20,\n        "6937.39000000",\n        "6262.21612210",\n        "0"\n    ],\n    [\n        1525445700000,\n        "0.90272000",\n        "0.90272000",\n        "0.90102000",\n        "0.90271000",\n        "33797.42000000",\n        1525445759999,\n        "30509.35862650",\n        94,\n        "16893.50000000",\n        "15250.02348760",\n        "0"\n    ],\n    [\n        1525445760000,\n        "0.90271000",\n        "0.90277000",\n        "0.90105000",\n        "0.90108000",\n        "16756.54000000",\n        1525445819999,\n        "15120.47855990",\n        46,\n        "12485.30000000",\n        "11269.09703050",\n        "0"\n    ],\n    [\n        1525445820000,\n        "0.90109000",\n        "0.90277000",\n        "0.90108000",\n        "0.90276000",\n        "10597.42000000",\n        1525445879999,\n        "9563.27782040",\n        20,\n        "9762.02000000",\n        "8810.51065530",\n        "0"\n    ],\n    [\n        1525445880000,\n        "0.90122000",\n        "0.90276000",\n        "0.90110000",\n        "0.90111000",\n        "15195.77000000",\n        1525445939999,\n        "13705.49747350",\n        34,\n        "10496.18000000",\n        "9468.59567840",\n        "0"\n    ],\n    [\n        1525445940000,\n        "0.90272000",\n        "0.90277000",\n        "0.90111000",\n        "0.90275000",\n        "13925.62000000",\n        1525445999999,\n        "12557.89580180",\n        38,\n        "7268.80000000",\n        "6558.88414980",\n        "0"\n    ],\n    [\n        1525446000000,\n        "0.90112000",\n        "0.90277000",\n        "0.90111000",\n        "0.90276000",\n        "7284.64000000",\n        1525446059999,\n        "6572.92037380",\n        28,\n        "5943.34000000",\n        "5364.25659160",\n        "0"\n    ],\n    [\n        1525446060000,\n        "0.90276000",\n        "0.90276000",\n        "0.90118000",\n        "0.90118000",\n        "12851.64000000",\n        1525446119999,\n        "11601.76836910",\n        22,\n        "4443.65000000",\n        "4011.52931670",\n        "0"\n    ],\n    [\n        1525446120000,\n        "0.90120000",\n        "0.90274000",\n        "0.90080000",\n        "0.90092000",\n        "12022.05000000",\n        1525446179999,\n        "10834.51151370",\n        29,\n        "2428.03000000",\n        "2189.13442700",\n        "0"\n    ],\n    [\n        1525446180000,\n        "0.90091000",\n        "0.90092000",\n        "0.90080000",\n        "0.90081000",\n        "12448.69000000",\n        1525446239999,\n        "11214.60221160",\n        23,\n        "6416.43000000",\n        "5780.02587380",\n        "0"\n    ],\n    [\n        1525446240000,\n        "0.90081000",\n        "0.90238000",\n        "0.90001000",\n        "0.90238000",\n        "3828.56000000",\n        1525446299999,\n        "3451.71092560",\n        12,\n        "3426.10000000",\n        "3089.40790100",\n        "0"\n    ],\n    [\n        1525446300000,\n        "0.90238000",\n        "0.90250000",\n        "0.90238000",\n        "0.90250000",\n        "14130.15000000",\n        1525446359999,\n        "12751.80348550",\n        18,\n        "11465.29000000",\n        "10347.06093810",\n        "0"\n    ],\n    [\n        1525446360000,\n        "0.90250000",\n        "0.90260000",\n        "0.90080000",\n        "0.90081000",\n        "31846.27000000",\n        1525446419999,\n        "28727.32581140",\n        24,\n        "10089.16000000",\n        "9105.19703990",\n        "0"\n    ],\n    [\n        1525446420000,\n        "0.90250000",\n        "0.90279000",\n        "0.90108000",\n        "0.90250000",\n        "13839.10000000",\n        1525446479999,\n        "12489.85293230",\n        24,\n        "13481.60000000",\n        "12167.39424060",\n        "0"\n    ],\n    [\n        1525446480000,\n        "0.90129000",\n        "0.90250000",\n        "0.90000000",\n        "0.90159000",\n        "12895.68000000",\n        1525446539999,\n        "11622.73052760",\n        23,\n        "4344.11000000",\n        "3919.95640900",\n        "0"\n    ],\n    [\n        1525446540000,\n        "0.90162000",\n        "0.90239000",\n        "0.90162000",\n        "0.90234000",\n        "5469.00000000",\n        1525446599999,\n        "4935.12485450",\n        7,\n        "5468.07000000",\n        "4934.28634790",\n        "0"\n    ],\n    [\n        1525446600000,\n        "0.90234000",\n        "0.90239000",\n        "0.90229000",\n        "0.90239000",\n        "5620.14000000",\n        1525446659999,\n        "5071.27944020",\n        12,\n        "3201.20000000",\n        "2888.57312060",\n        "0"\n    ],\n    [\n        1525446660000,\n        "0.90239000",\n        "0.90239000",\n        "0.90159000",\n        "0.90159000",\n        "7908.90000000",\n        1525446719999,\n        "7136.44525820",\n        26,\n        "6162.74000000",\n        "5560.99870270",\n        "0"\n    ],\n    [\n        1525446720000,\n        "0.90159000",\n        "0.90230000",\n        "0.90000000",\n        "0.90000000",\n        "15570.23000000",\n        1525446779999,\n        "14023.89045690",\n        28,\n        "779.78000000",\n        "703.25595570",\n        "0"\n    ],\n    [\n        1525446780000,\n        "0.90013000",\n        "0.90150000",\n        "0.90000000",\n        "0.90101000",\n        "21224.17000000",\n        1525446839999,\n        "19112.65856940",\n        22,\n        "594.64000000",\n        "536.01596660",\n        "0"\n    ],\n    [\n        1525446840000,\n        "0.90000000",\n        "0.90101000",\n        "0.89900000",\n        "0.89995000",\n        "4774.67000000",\n        1525446899999,\n        "4297.88826230",\n        33,\n        "815.25000000",\n        "734.08233380",\n        "0"\n    ],\n    [\n        1525446900000,\n        "0.89900000",\n        "0.90000000",\n        "0.89900000",\n        "0.90000000",\n        "2067.20000000",\n        1525446959999,\n        "1858.60907000",\n        12,\n        "196.27000000",\n        "176.64300000",\n        "0"\n    ],\n    [\n        1525446960000,\n        "0.89900000",\n        "0.89982000",\n        "0.89790000",\n        "0.89790000",\n        "9217.16000000",\n        1525447019999,\n        "8281.01642720",\n        42,\n        "5258.21000000",\n        "4724.29486580",\n        "0"\n    ],\n    [\n        1525447020000,\n        "0.89790000",\n        "0.89940000",\n        "0.89779000",\n        "0.89780000",\n        "5250.25000000",\n        1525447079999,\n        "4714.58913390",\n        25,\n        "1910.43000000",\n        "1715.75824630",\n        "0"\n    ],\n    [\n        1525447080000,\n        "0.89925000",\n        "0.90000000",\n        "0.89496000",\n        "0.89999000",\n        "69418.69000000",\n        1525447139999,\n        "62220.64901080",\n        90,\n        "12604.10000000",\n        "11298.58076830",\n        "0"\n    ],\n    [\n        1525447140000,\n        "0.89791000",\n        "0.90000000",\n        "0.89462000",\n        "0.89463000",\n        "18999.69000000",\n        1525447199999,\n        "17055.00459770",\n        63,\n        "10000.00000000",\n        "8995.89470270",\n        "0"\n    ],\n    [\n        1525447200000,\n        "0.89488000",\n        "0.89966000",\n        "0.89400000",\n        "0.89400000",\n        "11401.26000000",\n        1525447259999,\n        "10203.84313190",\n        39,\n        "3036.60000000",\n        "2717.31061100",\n        "0"\n    ],\n    [\n        1525447260000,\n        "0.89400000",\n        "0.89400000",\n        "0.89101000",\n        "0.89400000",\n        "17792.64000000",\n        1525447319999,\n        "15885.85490010",\n        59,\n        "6751.59000000",\n        "6031.31587970",\n        "0"\n    ],\n    [\n        1525447320000,\n        "0.89207000",\n        "0.89350000",\n        "0.89206000",\n        "0.89300000",\n        "10768.25000000",\n        1525447379999,\n        "9613.43116400",\n        22,\n        "7857.30000000",\n        "7016.66399900",\n        "0"\n    ],\n    [\n        1525447380000,\n        "0.89209000",\n        "0.89400000",\n        "0.89209000",\n        "0.89400000",\n        "15363.99000000",\n        1525447439999,\n        "13724.44685710",\n        24,\n        "13097.04000000",\n        "11700.97858910",\n        "0"\n    ],\n    [\n        1525447440000,\n        "0.89306000",\n        "0.89400000",\n        "0.89210000",\n        "0.89210000",\n        "6070.39000000",\n        1525447499999,\n        "5420.33552600",\n        26,\n        "57.67000000",\n        "51.53682960",\n        "0"\n    ],\n    [\n        1525447500000,\n        "0.89201000",\n        "0.89210000",\n        "0.89115000",\n        "0.89210000",\n        "9985.34000000",\n        1525447559999,\n        "8901.54204690",\n        23,\n        "3607.56000000",\n        "3217.96501630",\n        "0"\n    ],\n    [\n        1525447560000,\n        "0.89205000",\n        "0.89400000",\n        "0.89115000",\n        "0.89150000",\n        "5421.27000000",\n        1525447619999,\n        "4837.98512450",\n        43,\n        "1980.86000000",\n        "1768.21050590",\n        "0"\n    ],\n    [\n        1525447620000,\n        "0.89150000",\n        "0.89150000",\n        "0.89070000",\n        "0.89070000",\n        "12592.52000000",\n        1525447679999,\n        "11220.72883190",\n        33,\n        "597.53000000",\n        "532.37764610",\n        "0"\n    ],\n    [\n        1525447680000,\n        "0.89100000",\n        "0.89100000",\n        "0.89050000",\n        "0.89060000",\n        "13726.09000000",\n        1525447739999,\n        "12228.10401590",\n        36,\n        "9147.59000000",\n        "8150.00122590",\n        "0"\n    ],\n    [\n        1525447740000,\n        "0.89051000",\n        "0.89051000",\n        "0.88430000",\n        "0.88899000",\n        "86129.57000000",\n        1525447799999,\n        "76386.78799720",\n        94,\n        "31247.04000000",\n        "27696.14803890",\n        "0"\n    ],\n    [\n        1525447800000,\n        "0.88626000",\n        "0.88890000",\n        "0.88618000",\n        "0.88633000",\n        "18838.58000000",\n        1525447859999,\n        "16697.29445000",\n        35,\n        "913.63000000",\n        "811.52089570",\n        "0"\n    ],\n    [\n        1525447860000,\n        "0.88834000",\n        "0.88834000",\n        "0.88250000",\n        "0.88775000",\n        "37851.54000000",\n        1525447919999,\n        "33506.26211790",\n        63,\n        "15361.32000000",\n        "13618.07807070",\n        "0"\n    ],\n    [\n        1525447920000,\n        "0.88780000",\n        "0.88890000",\n        "0.88335000",\n        "0.88806000",\n        "41640.45000000",\n        1525447979999,\n        "36998.66359360",\n        63,\n        "40849.33000000",\n        "36296.50236910",\n        "0"\n    ],\n    [\n        1525447980000,\n        "0.88880000",\n        "0.88900000",\n        "0.88200000",\n        "0.88900000",\n        "39057.75000000",\n        1525448039999,\n        "34658.67506950",\n        54,\n        "27265.93000000",\n        "24236.68359550",\n        "0"\n    ],\n    [\n        1525448040000,\n        "0.88898000",\n        "0.88991000",\n        "0.88898000",\n        "0.88991000",\n        "14865.69000000",\n        1525448099999,\n        "13217.97311710",\n        25,\n        "14612.40000000",\n        "12992.80084000",\n        "0"\n    ],\n    [\n        1525448100000,\n        "0.88991000",\n        "0.88991000",\n        "0.88888000",\n        "0.88888000",\n        "33538.00000000",\n        1525448159999,\n        "29814.82814750",\n        26,\n        "13873.84000000",\n        "12333.84376000",\n        "0"\n    ],\n    [\n        1525448160000,\n        "0.88888000",\n        "0.88899000",\n        "0.88639000",\n        "0.88871000",\n        "6220.15000000",\n        1525448219999,\n        "5525.92501130",\n        16,\n        "613.26000000",\n        "545.16971980",\n        "0"\n    ],\n    [\n        1525448220000,\n        "0.88647000",\n        "0.88864000",\n        "0.88547000",\n        "0.88780000",\n        "4449.80000000",\n        1525448279999,\n        "3942.37121770",\n        14,\n        "143.64000000",\n        "127.61605730",\n        "0"\n    ],\n    [\n        1525448280000,\n        "0.88565000",\n        "0.88759000",\n        "0.88525000",\n        "0.88525000",\n        "17564.79000000",\n        1525448339999,\n        "15563.52457280",\n        27,\n        "5336.27000000",\n        "4732.18817790",\n        "0"\n    ],\n    [\n        1525448340000,\n        "0.88524000",\n        "0.88900000",\n        "0.88520000",\n        "0.88523000",\n        "66099.48000000",\n        1525448399999,\n        "58594.66282260",\n        47,\n        "43946.19000000",\n        "38978.16928170",\n        "0"\n    ],\n    [\n        1525448400000,\n        "0.88510000",\n        "0.88510000",\n        "0.88211000",\n        "0.88242000",\n        "30261.41000000",\n        1525448459999,\n        "26758.65697390",\n        70,\n        "22509.70000000",\n        "19909.53797270",\n        "0"\n    ],\n    [\n        1525448460000,\n        "0.88485000",\n        "0.88485000",\n        "0.88163000",\n        "0.88200000",\n        "130392.80000000",\n        1525448519999,\n        "115062.21167390",\n        78,\n        "96453.47000000",\n        "85121.04839260",\n        "0"\n    ],\n    [\n        1525448520000,\n        "0.88200000",\n        "0.88200000",\n        "0.88001000",\n        "0.88001000",\n        "26562.66000000",\n        1525448579999,\n        "23390.82026490",\n        65,\n        "2299.66000000",\n        "2026.03882120",\n        "0"\n    ],\n    [\n        1525448580000,\n        "0.88001000",\n        "0.88060000",\n        "0.88000000",\n        "0.88000000",\n        "80172.09000000",\n        1525448639999,\n        "70552.22104040",\n        88,\n        "7227.67000000",\n        "6360.50886720",\n        "0"\n    ],\n    [\n        1525448640000,\n        "0.88000000",\n        "0.88001000",\n        "0.87957000",\n        "0.88000000",\n        "46911.87000000",\n        1525448699999,\n        "41279.72794870",\n        64,\n        "19414.36000000",\n        "17084.66773180",\n        "0"\n    ],\n    [\n        1525448700000,\n        "0.88000000",\n        "0.88480000",\n        "0.87957000",\n        "0.88002000",\n        "33022.43000000",\n        1525448759999,\n        "29098.24506790",\n        54,\n        "29863.85000000",\n        "26319.19842450",\n        "0"\n    ],\n    [\n        1525448760000,\n        "0.88007000",\n        "0.88400000",\n        "0.88005000",\n        "0.88299000",\n        "26314.59000000",\n        1525448819999,\n        "23163.57165670",\n        31,\n        "2372.56000000",\n        "2091.73281180",\n        "0"\n    ],\n    [\n        1525448820000,\n        "0.88299000",\n        "0.88300000",\n        "0.88000000",\n        "0.88000000",\n        "47131.60000000",\n        1525448879999,\n        "41521.15662180",\n        146,\n        "4958.21000000",\n        "4375.20828710",\n        "0"\n    ],\n    [\n        1525448880000,\n        "0.88000000",\n        "0.88296000",\n        "0.87644000",\n        "0.87800000",\n        "99863.54000000",\n        1525448939999,\n        "87691.98047170",\n        159,\n        "43061.77000000",\n        "37829.33628380",\n        "0"\n    ],\n    [\n        1525448940000,\n        "0.87800000",\n        "0.88087000",\n        "0.87668000",\n        "0.87812000",\n        "47393.63000000",\n        1525448999999,\n        "41659.53908530",\n        66,\n        "27355.78000000",\n        "24049.37782920",\n        "0"\n    ],\n    [\n        1525449000000,\n        "0.88078000",\n        "0.88270000",\n        "0.87901000",\n        "0.88000000",\n        "41977.50000000",\n        1525449059999,\n        "36970.73148130",\n        62,\n        "36723.20000000",\n        "32347.05820790",\n        "0"\n    ],\n    [\n        1525449060000,\n        "0.87999000",\n        "0.88000000",\n        "0.87997000",\n        "0.87997000",\n        "18493.69000000",\n        1525449119999,\n        "16274.37348060",\n        33,\n        "16900.39000000",\n        "14872.31727960",\n        "0"\n    ],\n    [\n        1525449120000,\n        "0.87997000",\n        "0.88000000",\n        "0.87889000",\n        "0.88000000",\n        "28559.54000000",\n        1525449179999,\n        "25121.78796550",\n        57,\n        "11973.10000000",\n        "10535.86661720",\n        "0"\n    ],\n    [\n        1525449180000,\n        "0.88000000",\n        "0.88200000",\n        "0.88000000",\n        "0.88051000",\n        "19804.49000000",\n        1525449239999,\n        "17438.96256400",\n        43,\n        "16801.15000000",\n        "14794.53666020",\n        "0"\n    ],\n    [\n        1525449240000,\n        "0.88200000",\n        "0.88249000",\n        "0.88052000",\n        "0.88200000",\n        "8145.76000000",\n        1525449299999,\n        "7181.39950620",\n        24,\n        "5592.62000000",\n        "4932.82055780",\n        "0"\n    ],\n    [\n        1525449300000,\n        "0.88200000",\n        "0.88390000",\n        "0.88052000",\n        "0.88222000",\n        "32545.52000000",\n        1525449359999,\n        "28743.20155570",\n        37,\n        "28177.76000000",\n        "24887.81318500",\n        "0"\n    ],\n    [\n        1525449360000,\n        "0.88222000",\n        "0.88222000",\n        "0.88052000",\n        "0.88200000",\n        "38029.93000000",\n        1525449419999,\n        "33502.65621050",\n        34,\n        "19524.77000000",\n        "17198.23776240",\n        "0"\n    ],\n    [\n        1525449420000,\n        "0.88200000",\n        "0.88200000",\n        "0.88065000",\n        "0.88200000",\n        "9867.76000000",\n        1525449479999,\n        "8699.54351190",\n        31,\n        "6824.22000000",\n        "6018.87957460",\n        "0"\n    ],\n    [\n        1525449480000,\n        "0.88287000",\n        "0.88390000",\n        "0.88198000",\n        "0.88390000",\n        "68827.19000000",\n        1525449539999,\n        "60796.13662830",\n        39,\n        "68477.06000000",\n        "60487.32089690",\n        "0"\n    ],\n    [\n        1525449540000,\n        "0.88299000",\n        "0.88390000",\n        "0.88212000",\n        "0.88389000",\n        "50509.12000000",\n        1525449599999,\n        "44631.74735880",\n        55,\n        "45702.58000000",\n        "40388.03552370",\n        "0"\n    ],\n    [\n        1525449600000,\n        "0.88370000",\n        "0.88390000",\n        "0.88224000",\n        "0.88227000",\n        "19275.56000000",\n        1525449659999,\n        "17011.75988870",\n        24,\n        "2914.74000000",\n        "2576.28752390",\n        "0"\n    ],\n    [\n        1525449660000,\n        "0.88226000",\n        "0.88226000",\n        "0.88200000",\n        "0.88200000",\n        "2836.77000000",\n        1525449719999,\n        "2502.34141350",\n        16,\n        "653.61000000",\n        "576.64754050",\n        "0"\n    ],\n    [\n        1525449720000,\n        "0.88200000",\n        "0.88200000",\n        "0.88066000",\n        "0.88066000",\n        "14162.21000000",\n        1525449779999,\n        "12474.77753850",\n        25,\n        "2218.84000000",\n        "1954.32245750",\n        "0"\n    ],\n    [\n        1525449780000,\n        "0.88066000",\n        "0.88066000",\n        "0.87901000",\n        "0.87999000",\n        "66523.70000000",\n        1525449839999,\n        "58541.45508370",\n        53,\n        "35016.70000000",\n        "30814.51706160",\n        "0"\n    ],\n    [\n        1525449840000,\n        "0.87990000",\n        "0.87990000",\n        "0.87800000",\n        "0.87801000",\n        "60525.17000000",\n        1525449899999,\n        "53192.84153990",\n        43,\n        "13551.47000000",\n        "11913.55638850",\n        "0"\n    ],\n    [\n        1525449900000,\n        "0.87900000",\n        "0.88200000",\n        "0.87804000",\n        "0.88200000",\n        "74977.94000000",\n        1525449959999,\n        "65968.77303570",\n        54,\n        "73952.67000000",\n        "65067.97689890",\n        "0"\n    ],\n    [\n        1525449960000,\n        "0.88200000",\n        "0.88300000",\n        "0.87955000",\n        "0.88299000",\n        "20499.93000000",\n        1525450019999,\n        "18095.29336120",\n        40,\n        "14434.58000000",\n        "12743.32289310",\n        "0"\n    ],\n    [\n        1525450020000,\n        "0.88296000",\n        "0.88296000",\n        "0.87968000",\n        "0.87968000",\n        "8180.62000000",\n        1525450079999,\n        "7216.86733240",\n        23,\n        "786.37000000",\n        "693.80620960",\n        "0"\n    ],\n    [\n        1525450080000,\n        "0.87989000",\n        "0.88200000",\n        "0.87987000",\n        "0.88199000",\n        "5171.78000000",\n        1525450139999,\n        "4558.51952710",\n        23,\n        "1144.81000000",\n        "1009.66506960",\n        "0"\n    ],\n    [\n        1525450140000,\n        "0.88035000",\n        "0.88198000",\n        "0.88035000",\n        "0.88198000",\n        "1775.13000000",\n        1525450199999,\n        "1565.21944360",\n        11,\n        "1538.09000000",\n        "1356.51316340",\n        "0"\n    ],\n    [\n        1525450200000,\n        "0.88198000",\n        "0.88300000",\n        "0.88146000",\n        "0.88300000",\n        "7593.60000000",\n        1525450259999,\n        "6700.08954520",\n        26,\n        "7570.93000000",\n        "6680.10684700",\n        "0"\n    ],\n    [\n        1525450260000,\n        "0.88299000",\n        "0.88390000",\n        "0.88299000",\n        "0.88390000",\n        "18313.90000000",\n        1525450319999,\n        "16184.13079530",\n        33,\n        "18313.90000000",\n        "16184.13079530",\n        "0"\n    ],\n    [\n        1525450320000,\n        "0.88389000",\n        "0.88390000",\n        "0.88300000",\n        "0.88300000",\n        "5236.82000000",\n        1525450379999,\n        "4627.15120880",\n        20,\n        "1271.45000000",\n        "1123.81210600",\n        "0"\n    ],\n    [\n        1525450380000,\n        "0.88202000",\n        "0.88350000",\n        "0.88137000",\n        "0.88137000",\n        "4167.95000000",\n        1525450439999,\n        "3679.70506550",\n        16,\n        "3154.49000000",\n        "2785.88517490",\n        "0"\n    ],\n    [\n        1525450440000,\n        "0.88148000",\n        "0.88350000",\n        "0.88148000",\n        "0.88350000",\n        "4825.68000000",\n        1525450499999,\n        "4260.23700180",\n        19,\n        "3293.39000000",\n        "2909.33205280",\n        "0"\n    ],\n    [\n        1525450500000,\n        "0.88350000",\n        "0.88390000",\n        "0.88350000",\n        "0.88390000",\n        "11305.18000000",\n        1525450559999,\n        "9992.34041800",\n        13,\n        "11305.18000000",\n        "9992.34041800",\n        "0"\n    ],\n    [\n        1525450560000,\n        "0.88390000",\n        "0.88600000",\n        "0.88390000",\n        "0.88599000",\n        "78556.36000000",\n        1525450619999,\n        "69451.77854440",\n        46,\n        "77238.29000000",\n        "68284.06031980",\n        "0"\n    ],\n    [\n        1525450620000,\n        "0.88750000",\n        "0.89000000",\n        "0.88608000",\n        "0.89000000",\n        "19172.35000000",\n        1525450679999,\n        "17021.69335650",\n        43,\n        "18074.17000000",\n        "16047.72904650",\n        "0"\n    ],\n    [\n        1525450680000,\n        "0.88619000",\n        "0.88999000",\n        "0.88619000",\n        "0.88708000",\n        "9228.52000000",\n        1525450739999,\n        "8199.85302560",\n        46,\n        "5065.31000000",\n        "4506.02162210",\n        "0"\n    ],\n    [\n        1525450740000,\n        "0.88709000",\n        "0.88710000",\n        "0.88708000",\n        "0.88710000",\n        "5533.91000000",\n        1525450799999,\n        "4909.09608930",\n        13,\n        "0.26000000",\n        "0.23064340",\n        "0"\n    ],\n    [\n        1525450800000,\n        "0.88711000",\n        "0.88900000",\n        "0.88710000",\n        "0.88800000",\n        "4031.93000000",\n        1525450859999,\n        "3579.42835020",\n        23,\n        "2687.27000000",\n        "2386.04097390",\n        "0"\n    ],\n    [\n        1525450860000,\n        "0.88800000",\n        "0.88988000",\n        "0.88800000",\n        "0.88988000",\n        "6839.03000000",\n        1525450919999,\n        "6077.78461020",\n        25,\n        "2866.66000000",\n        "2548.89766520",\n        "0"\n    ],\n    [\n        1525450920000,\n        "0.88988000",\n        "0.89500000",\n        "0.88902000",\n        "0.89041000",\n        "29835.97000000",\n        1525450979999,\n        "26647.89800130",\n        44,\n        "28962.36000000",\n        "25869.09301280",\n        "0"\n    ],\n    [\n        1525450980000,\n        "0.89200000",\n        "0.89388000",\n        "0.89041000",\n        "0.89382000",\n        "8945.92000000",\n        1525451039999,\n        "7990.05536990",\n        22,\n        "6439.81000000",\n        "5755.64544350",\n        "0"\n    ],\n    [\n        1525451040000,\n        "0.89108000",\n        "0.89681000",\n        "0.89107000",\n        "0.89598000",\n        "41904.55000000",\n        1525451099999,\n        "37558.38296000",\n        52,\n        "41542.03000000",\n        "37235.17748430",\n        "0"\n    ],\n    [\n        1525451100000,\n        "0.89596000",\n        "0.89600000",\n        "0.88910000",\n        "0.89449000",\n        "51687.75000000",\n        1525451159999,\n        "46055.67001380",\n        61,\n        "3534.65000000",\n        "3157.66046430",\n        "0"\n    ],\n    [\n        1525451160000,\n        "0.89449000",\n        "0.89800000",\n        "0.89350000",\n        "0.89350000",\n        "34269.88000000",\n        1525451219999,\n        "30713.17855580",\n        50,\n        "19055.29000000",\n        "17095.06449830",\n        "0"\n    ],\n    [\n        1525451220000,\n        "0.89442000",\n        "0.89442000",\n        "0.89000000",\n        "0.89170000",\n        "13845.60000000",\n        1525451279999,\n        "12331.36149390",\n        61,\n        "5376.20000000",\n        "4790.04426640",\n        "0"\n    ],\n    [\n        1525451280000,\n        "0.88920000",\n        "0.89500000",\n        "0.88920000",\n        "0.89100000",\n        "8325.54000000",\n        1525451339999,\n        "7422.88189670",\n        36,\n        "5638.31000000",\n        "5027.66305540",\n        "0"\n    ],\n    [\n        1525451340000,\n        "0.89100000",\n        "0.89393000",\n        "0.88930000",\n        "0.89001000",\n        "5375.40000000",\n        1525451399999,\n        "4794.08497280",\n        15,\n        "1603.71000000",\n        "1431.62184430",\n        "0"\n    ],\n    [\n        1525451400000,\n        "0.89288000",\n        "0.89388000",\n        "0.89023000",\n        "0.89378000",\n        "3084.62000000",\n        1525451459999,\n        "2749.24215980",\n        16,\n        "2117.16000000",\n        "1887.58071230",\n        "0"\n    ]\n]',n:'[\n    [\n        1527757200000,\n        "0.28021000",\n        "0.30600000",\n        "0.28021000",\n        "0.29118000",\n        "792848.61000000",\n        1527760799999,\n        "233261.63478280",\n        560,\n        "134770.58000000",\n        "39804.50525310",\n        "0"\n    ],\n    [\n        1527760800000,\n        "0.29109000",\n        "0.29419000",\n        "0.28750000",\n        "0.28858000",\n        "211494.41000000",\n        1527764399999,\n        "61212.77897780",\n        325,\n        "74110.27000000",\n        "21428.85156890",\n        "0"\n    ],\n    [\n        1527764400000,\n        "0.28858000",\n        "0.29279000",\n        "0.28858000",\n        "0.29049000",\n        "535324.46000000",\n        1527767999999,\n        "155621.60429450",\n        488,\n        "190613.43000000",\n        "55455.14211430",\n        "0"\n    ],\n    [\n        1527768000000,\n        "0.29049000",\n        "0.29528000",\n        "0.29028000",\n        "0.29349000",\n        "884706.09000000",\n        1527771599999,\n        "258820.97551850",\n        546,\n        "407401.16000000",\n        "119261.61991800",\n        "0"\n    ],\n    [\n        1527771600000,\n        "0.29349000",\n        "0.29499000",\n        "0.28959000",\n        "0.29304000",\n        "812136.39000000",\n        1527775199999,\n        "237489.52924630",\n        514,\n        "390625.38000000",\n        "114302.77787800",\n        "0"\n    ],\n    [\n        1527775200000,\n        "0.29376000",\n        "0.29945000",\n        "0.29282000",\n        "0.29945000",\n        "1249658.32000000",\n        1527778799999,\n        "369196.98261870",\n        817,\n        "648278.73000000",\n        "191489.86716190",\n        "0"\n    ],\n    [\n        1527778800000,\n        "0.29945000",\n        "0.30397000",\n        "0.29943000",\n        "0.30185000",\n        "1645298.46000000",\n        1527782399999,\n        "495589.91144120",\n        889,\n        "851320.27000000",\n        "256762.55649060",\n        "0"\n    ],\n    [\n        1527782400000,\n        "0.30185000",\n        "0.30198000",\n        "0.29635000",\n        "0.29998000",\n        "1232845.05000000",\n        1527785999999,\n        "369381.95781690",\n        756,\n        "687113.26000000",\n        "205896.34309060",\n        "0"\n    ],\n    [\n        1527786000000,\n        "0.29998000",\n        "0.30130000",\n        "0.29833000",\n        "0.29950000",\n        "1126790.45000000",\n        1527789599999,\n        "337973.40840600",\n        532,\n        "822873.71000000",\n        "246853.94260060",\n        "0"\n    ],\n    [\n        1527789600000,\n        "0.29987000",\n        "0.30489000",\n        "0.29736000",\n        "0.29859000",\n        "1255432.35000000",\n        1527793199999,\n        "377217.05694440",\n        745,\n        "661905.29000000",\n        "199042.44175480",\n        "0"\n    ],\n    [\n        1527793200000,\n        "0.29933000",\n        "0.29933000",\n        "0.29501000",\n        "0.29787000",\n        "818884.60000000",\n        1527796799999,\n        "243561.23366530",\n        499,\n        "474585.68000000",\n        "141183.16133050",\n        "0"\n    ],\n    [\n        1527796800000,\n        "0.29775000",\n        "0.29930000",\n        "0.29511000",\n        "0.29801000",\n        "761855.38000000",\n        1527800399999,\n        "226041.20529340",\n        403,\n        "425889.27000000",\n        "126467.73513260",\n        "0"\n    ],\n    [\n        1527800400000,\n        "0.29801000",\n        "0.30000000",\n        "0.29620000",\n        "0.29621000",\n        "580335.38000000",\n        1527803999999,\n        "172880.71919920",\n        310,\n        "301952.75000000",\n        "89962.83338190",\n        "0"\n    ],\n    [\n        1527804000000,\n        "0.29621000",\n        "0.29799000",\n        "0.28799000",\n        "0.29076000",\n        "1327228.72000000",\n        1527807599999,\n        "386388.08176540",\n        811,\n        "850409.76000000",\n        "247568.60849960",\n        "0"\n    ],\n    [\n        1527807600000,\n        "0.29075000",\n        "0.29580000",\n        "0.29021000",\n        "0.29568000",\n        "623497.91000000",\n        1527811199999,\n        "183068.24063740",\n        319,\n        "292721.79000000",\n        "85876.68332520",\n        "0"\n    ],\n    [\n        1527811200000,\n        "0.29567000",\n        "0.29999000",\n        "0.29562000",\n        "0.29728000",\n        "1011486.93000000",\n        1527814799999,\n        "301269.47319550",\n        557,\n        "510194.92000000",\n        "152031.76292260",\n        "0"\n    ],\n    [\n        1527814800000,\n        "0.29728000",\n        "0.29764000",\n        "0.29196000",\n        "0.29431000",\n        "659636.40000000",\n        1527818399999,\n        "194487.91336010",\n        404,\n        "331086.01000000",\n        "97701.04020280",\n        "0"\n    ],\n    [\n        1527818400000,\n        "0.29476000",\n        "0.29594000",\n        "0.29379000",\n        "0.29421000",\n        "571940.42000000",\n        1527821999999,\n        "168676.74140700",\n        283,\n        "350763.51000000",\n        "103526.73831360",\n        "0"\n    ],\n    [\n        1527822000000,\n        "0.29421000",\n        "0.29570000",\n        "0.29059000",\n        "0.29434000",\n        "766042.28000000",\n        1527825599999,\n        "225031.68245350",\n        403,\n        "471779.00000000",\n        "138645.83206260",\n        "0"\n    ],\n    [\n        1527825600000,\n        "0.29435000",\n        "0.29435000",\n        "0.29001000",\n        "0.29089000",\n        "860971.36000000",\n        1527829199999,\n        "251655.91830030",\n        418,\n        "608762.60000000",\n        "177956.45918140",\n        "0"\n    ],\n    [\n        1527829200000,\n        "0.29091000",\n        "0.29287000",\n        "0.29000000",\n        "0.29036000",\n        "834700.39000000",\n        1527832799999,\n        "243045.91057780",\n        355,\n        "442150.05000000",\n        "128773.18300470",\n        "0"\n    ],\n    [\n        1527832800000,\n        "0.29084000",\n        "0.29668000",\n        "0.28996000",\n        "0.29432000",\n        "811235.37000000",\n        1527836399999,\n        "237609.40145460",\n        537,\n        "459501.59000000",\n        "134690.57250440",\n        "0"\n    ],\n    [\n        1527836400000,\n        "0.29434000",\n        "0.29727000",\n        "0.29375000",\n        "0.29636000",\n        "770393.13000000",\n        1527839999999,\n        "227529.17293860",\n        613,\n        "448600.74000000",\n        "132542.11893480",\n        "0"\n    ],\n    [\n        1527840000000,\n        "0.29638000",\n        "0.29700000",\n        "0.29438000",\n        "0.29558000",\n        "940983.04000000",\n        1527843599999,\n        "278120.32677900",\n        541,\n        "583043.89000000",\n        "172280.53617030",\n        "0"\n    ],\n    [\n        1527843600000,\n        "0.29613000",\n        "0.29799000",\n        "0.29400000",\n        "0.29545000",\n        "780456.46000000",\n        1527847199999,\n        "230435.07592690",\n        447,\n        "389851.02000000",\n        "115137.32100870",\n        "0"\n    ],\n    [\n        1527847200000,\n        "0.29545000",\n        "0.29626000",\n        "0.29370000",\n        "0.29498000",\n        "663799.51000000",\n        1527850799999,\n        "195401.82825180",\n        333,\n        "347262.73000000",\n        "102283.10825350",\n        "0"\n    ],\n    [\n        1527850800000,\n        "0.29527000",\n        "0.29800000",\n        "0.28630000",\n        "0.28630000",\n        "1099469.13000000",\n        1527854399999,\n        "322867.96272760",\n        882,\n        "657043.22000000",\n        "193161.23618360",\n        "0"\n    ],\n    [\n        1527854400000,\n        "0.28630000",\n        "0.28867000",\n        "0.28570000",\n        "0.28679000",\n        "930421.14000000",\n        1527857999999,\n        "266889.51750980",\n        867,\n        "502305.49000000",\n        "144125.89048520",\n        "0"\n    ],\n    [\n        1527858000000,\n        "0.28685000",\n        "0.28867000",\n        "0.28570000",\n        "0.28776000",\n        "662173.36000000",\n        1527861599999,\n        "189895.05730390",\n        471,\n        "435344.19000000",\n        "124861.79255870",\n        "0"\n    ],\n    [\n        1527861600000,\n        "0.28721000",\n        "0.28800000",\n        "0.28670000",\n        "0.28732000",\n        "1231190.83000000",\n        1527865199999,\n        "353871.65044130",\n        622,\n        "678497.03000000",\n        "195061.17478580",\n        "0"\n    ],\n    [\n        1527865200000,\n        "0.28732000",\n        "0.28980000",\n        "0.28570000",\n        "0.28980000",\n        "624083.24000000",\n        1527868799999,\n        "178916.57226180",\n        435,\n        "355569.75000000",\n        "102025.23890340",\n        "0"\n    ],\n    [\n        1527868800000,\n        "0.28849000",\n        "0.29000000",\n        "0.28771000",\n        "0.28806000",\n        "651666.56000000",\n        1527872399999,\n        "188063.08813650",\n        450,\n        "513633.67000000",\n        "148232.06829150",\n        "0"\n    ],\n    [\n        1527872400000,\n        "0.28804000",\n        "0.28998000",\n        "0.28000000",\n        "0.28556000",\n        "1041122.44000000",\n        1527875999999,\n        "298289.87406080",\n        668,\n        "426738.08000000",\n        "122616.49057170",\n        "0"\n    ],\n    [\n        1527876000000,\n        "0.28557000",\n        "0.28573000",\n        "0.27971000",\n        "0.28175000",\n        "1757937.12000000",\n        1527879599999,\n        "493768.90151070",\n        937,\n        "1318004.67000000",\n        "370048.33423960",\n        "0"\n    ],\n    [\n        1527879600000,\n        "0.28063000",\n        "0.28450000",\n        "0.27963000",\n        "0.28326000",\n        "861635.25000000",\n        1527883199999,\n        "244162.85840290",\n        480,\n        "536476.03000000",\n        "152091.12194300",\n        "0"\n    ],\n    [\n        1527883200000,\n        "0.28326000",\n        "0.28592000",\n        "0.28200000",\n        "0.28359000",\n        "731874.21000000",\n        1527886799999,\n        "207490.02328810",\n        485,\n        "485526.35000000",\n        "137637.55974710",\n        "0"\n    ],\n    [\n        1527886800000,\n        "0.28360000",\n        "0.28590000",\n        "0.28196000",\n        "0.28354000",\n        "695132.34000000",\n        1527890399999,\n        "197217.27984790",\n        391,\n        "454801.84000000",\n        "129076.13178350",\n        "0"\n    ],\n    [\n        1527890400000,\n        "0.28366000",\n        "0.28795000",\n        "0.28350000",\n        "0.28720000",\n        "714932.75000000",\n        1527893999999,\n        "204297.46855090",\n        608,\n        "354275.71000000",\n        "101256.00849520",\n        "0"\n    ],\n    [\n        1527894000000,\n        "0.28721000",\n        "0.28958000",\n        "0.28707000",\n        "0.28863000",\n        "690210.70000000",\n        1527897599999,\n        "199013.15652600",\n        391,\n        "347916.39000000",\n        "100295.04998110",\n        "0"\n    ],\n    [\n        1527897600000,\n        "0.28869000",\n        "0.29120000",\n        "0.28812000",\n        "0.28915000",\n        "1023400.58000000",\n        1527901199999,\n        "296351.15465020",\n        787,\n        "566073.16000000",\n        "163935.40662140",\n        "0"\n    ],\n    [\n        1527901200000,\n        "0.28921000",\n        "0.29400000",\n        "0.28815000",\n        "0.29283000",\n        "606275.90000000",\n        1527904799999,\n        "176941.02662380",\n        518,\n        "303756.34000000",\n        "88697.54704000",\n        "0"\n    ],\n    [\n        1527904800000,\n        "0.29383000",\n        "0.29397000",\n        "0.29175000",\n        "0.29185000",\n        "606562.08000000",\n        1527908399999,\n        "177456.41703900",\n        306,\n        "441967.94000000",\n        "129323.15007150",\n        "0"\n    ],\n    [\n        1527908400000,\n        "0.29186000",\n        "0.29275000",\n        "0.28968000",\n        "0.28982000",\n        "645063.35000000",\n        1527911999999,\n        "188193.35386070",\n        342,\n        "424385.31000000",\n        "123800.42545740",\n        "0"\n    ],\n    [\n        1527912000000,\n        "0.28982000",\n        "0.29219000",\n        "0.28980000",\n        "0.29080000",\n        "917855.29000000",\n        1527915599999,\n        "267007.16054750",\n        459,\n        "615632.29000000",\n        "179102.54933580",\n        "0"\n    ],\n    [\n        1527915600000,\n        "0.29050000",\n        "0.29289000",\n        "0.29023000",\n        "0.29191000",\n        "845219.59000000",\n        1527919199999,\n        "246217.76901390",\n        383,\n        "678539.81000000",\n        "197599.36526600",\n        "0"\n    ],\n    [\n        1527919200000,\n        "0.29211000",\n        "0.29635000",\n        "0.28865000",\n        "0.29466000",\n        "871855.94000000",\n        1527922799999,\n        "254287.53467810",\n        682,\n        "669994.65000000",\n        "195506.30606960",\n        "0"\n    ],\n    [\n        1527922800000,\n        "0.29477000",\n        "0.29800000",\n        "0.29460000",\n        "0.29600000",\n        "1180349.51000000",\n        1527926399999,\n        "349959.35718680",\n        755,\n        "841203.56000000",\n        "249420.68617670",\n        "0"\n    ],\n    [\n        1527926400000,\n        "0.29601000",\n        "0.30489000",\n        "0.29601000",\n        "0.29940000",\n        "1096354.92000000",\n        1527929999999,\n        "328024.66104550",\n        928,\n        "700068.97000000",\n        "209547.69185380",\n        "0"\n    ],\n    [\n        1527930000000,\n        "0.29945000",\n        "0.30072000",\n        "0.29892000",\n        "0.29960000",\n        "950781.92000000",\n        1527933599999,\n        "284542.07127940",\n        512,\n        "527692.56000000",\n        "157947.71667260",\n        "0"\n    ],\n    [\n        1527933600000,\n        "0.29960000",\n        "0.30100000",\n        "0.29894000",\n        "0.29997000",\n        "1109041.28000000",\n        1527937199999,\n        "332648.68919950",\n        544,\n        "814642.00000000",\n        "244329.73315900",\n        "0"\n    ],\n    [\n        1527937200000,\n        "0.29997000",\n        "0.30100000",\n        "0.29800000",\n        "0.29997000",\n        "1431516.65000000",\n        1527940799999,\n        "428982.09180630",\n        579,\n        "950377.00000000",\n        "284888.72093170",\n        "0"\n    ],\n    [\n        1527940800000,\n        "0.29994000",\n        "0.30016000",\n        "0.29880000",\n        "0.30009000",\n        "1085620.14000000",\n        1527944399999,\n        "325105.24017440",\n        525,\n        "487920.30000000",\n        "146198.18872430",\n        "0"\n    ],\n    [\n        1527944400000,\n        "0.30004000",\n        "0.30175000",\n        "0.29858000",\n        "0.30054000",\n        "1112282.32000000",\n        1527947999999,\n        "334292.29911650",\n        572,\n        "629054.16000000",\n        "189034.04905670",\n        "0"\n    ],\n    [\n        1527948000000,\n        "0.30054000",\n        "0.30077000",\n        "0.29950000",\n        "0.30075000",\n        "872247.11000000",\n        1527951599999,\n        "262056.03543070",\n        358,\n        "547921.00000000",\n        "164687.19596990",\n        "0"\n    ],\n    [\n        1527951600000,\n        "0.30075000",\n        "0.30268000",\n        "0.29781000",\n        "0.29817000",\n        "792814.63000000",\n        1527955199999,\n        "237591.41634980",\n        604,\n        "376932.28000000",\n        "112964.63948060",\n        "0"\n    ],\n    [\n        1527955200000,\n        "0.29820000",\n        "0.29959000",\n        "0.29528000",\n        "0.29712000",\n        "846020.97000000",\n        1527958799999,\n        "251763.65805040",\n        634,\n        "525849.09000000",\n        "156579.78181460",\n        "0"\n    ],\n    [\n        1527958800000,\n        "0.29758000",\n        "0.29908000",\n        "0.29297000",\n        "0.29600000",\n        "827588.31000000",\n        1527962399999,\n        "244721.03482200",\n        661,\n        "345401.05000000",\n        "102220.45276530",\n        "0"\n    ],\n    [\n        1527962400000,\n        "0.29557000",\n        "0.29985000",\n        "0.29500000",\n        "0.29748000",\n        "980660.77000000",\n        1527965999999,\n        "291324.75628940",\n        577,\n        "625070.29000000",\n        "185738.76488120",\n        "0"\n    ],\n    [\n        1527966000000,\n        "0.29757000",\n        "0.30000000",\n        "0.29757000",\n        "0.29888000",\n        "917161.69000000",\n        1527969599999,\n        "274395.45180900",\n        504,\n        "506987.23000000",\n        "151736.21652820",\n        "0"\n    ],\n    [\n        1527969600000,\n        "0.29888000",\n        "0.29990000",\n        "0.29572000",\n        "0.29577000",\n        "858928.49000000",\n        1527973199999,\n        "255991.00758340",\n        499,\n        "510727.46000000",\n        "152392.63591380",\n        "0"\n    ],\n    [\n        1527973200000,\n        "0.29584000",\n        "0.29879000",\n        "0.29514000",\n        "0.29875000",\n        "876561.58000000",\n        1527976799999,\n        "260402.95246640",\n        464,\n        "752960.45000000",\n        "223666.99326370",\n        "0"\n    ],\n    [\n        1527976800000,\n        "0.29875000",\n        "0.29995000",\n        "0.29651000",\n        "0.29786000",\n        "866540.97000000",\n        1527980399999,\n        "258035.85213160",\n        402,\n        "493580.06000000",\n        "147007.02057890",\n        "0"\n    ],\n    [\n        1527980400000,\n        "0.29841000",\n        "0.29997000",\n        "0.29695000",\n        "0.29740000",\n        "510570.54000000",\n        1527983999999,\n        "152442.81290490",\n        717,\n        "336373.84000000",\n        "100452.85923140",\n        "0"\n    ],\n    [\n        1527984000000,\n        "0.29741000",\n        "0.30100000",\n        "0.29680000",\n        "0.29893000",\n        "780120.38000000",\n        1527987599999,\n        "232806.74762590",\n        518,\n        "521732.07000000",\n        "155712.22913480",\n        "0"\n    ],\n    [\n        1527987600000,\n        "0.29995000",\n        "0.30197000",\n        "0.29995000",\n        "0.30002000",\n        "998991.25000000",\n        1527991199999,\n        "300316.06213370",\n        514,\n        "475146.80000000",\n        "142843.86514580",\n        "0"\n    ],\n    [\n        1527991200000,\n        "0.30001000",\n        "0.30032000",\n        "0.29651000",\n        "0.29908000",\n        "621104.59000000",\n        1527994799999,\n        "186008.77282250",\n        329,\n        "470008.65000000",\n        "140789.01504610",\n        "0"\n    ],\n    [\n        1527994800000,\n        "0.29905000",\n        "0.29964000",\n        "0.29725000",\n        "0.29889000",\n        "638668.17000000",\n        1527998399999,\n        "190727.39351060",\n        282,\n        "543601.28000000",\n        "162356.80639040",\n        "0"\n    ],\n    [\n        1527998400000,\n        "0.29889000",\n        "0.29983000",\n        "0.29809000",\n        "0.29976000",\n        "875938.26000000",\n        1528001999999,\n        "261705.96895970",\n        343,\n        "700203.26000000",\n        "209220.22803450",\n        "0"\n    ],\n    [\n        1528002000000,\n        "0.29964000",\n        "0.29982000",\n        "0.29836000",\n        "0.29940000",\n        "649656.06000000",\n        1528005599999,\n        "194316.45873140",\n        440,\n        "386028.97000000",\n        "115559.59713720",\n        "0"\n    ],\n    [\n        1528005600000,\n        "0.29940000",\n        "0.30300000",\n        "0.29742000",\n        "0.30300000",\n        "751044.64000000",\n        1528009199999,\n        "225317.69708110",\n        854,\n        "468550.93000000",\n        "140592.67597060",\n        "0"\n    ],\n    [\n        1528009200000,\n        "0.30266000",\n        "0.30809000",\n        "0.29937000",\n        "0.30651000",\n        "1646305.10000000",\n        1528012799999,\n        "500660.16618740",\n        1885,\n        "941605.44000000",\n        "286916.00141610",\n        "0"\n    ],\n    [\n        1528012800000,\n        "0.30652000",\n        "0.31200000",\n        "0.30604000",\n        "0.30871000",\n        "1002875.95000000",\n        1528016399999,\n        "309148.89710960",\n        1863,\n        "438778.32000000",\n        "135382.51089880",\n        "0"\n    ],\n    [\n        1528016400000,\n        "0.30724000",\n        "0.31010000",\n        "0.30600000",\n        "0.30746000",\n        "948183.47000000",\n        1528019999999,\n        "292443.40080770",\n        1124,\n        "580512.98000000",\n        "179131.62193800",\n        "0"\n    ],\n    [\n        1528020000000,\n        "0.30747000",\n        "0.30854000",\n        "0.30448000",\n        "0.30548000",\n        "926794.95000000",\n        1528023599999,\n        "283936.53156120",\n        1336,\n        "465414.49000000",\n        "142617.78136830",\n        "0"\n    ],\n    [\n        1528023600000,\n        "0.30547000",\n        "0.30668000",\n        "0.30456000",\n        "0.30512000",\n        "729353.30000000",\n        1528027199999,\n        "222933.60590900",\n        858,\n        "482012.73000000",\n        "147367.49686020",\n        "0"\n    ],\n    [\n        1528027200000,\n        "0.30519000",\n        "0.30640000",\n        "0.30501000",\n        "0.30605000",\n        "1303695.31000000",\n        1528030799999,\n        "398345.70574400",\n        676,\n        "796524.09000000",\n        "243394.18780950",\n        "0"\n    ],\n    [\n        1528030800000,\n        "0.30605000",\n        "0.31200000",\n        "0.30595000",\n        "0.30915000",\n        "1042702.57000000",\n        1528034399999,\n        "321474.86051660",\n        692,\n        "571088.40000000",\n        "176063.96539240",\n        "0"\n    ],\n    [\n        1528034400000,\n        "0.30918000",\n        "0.30999000",\n        "0.30562000",\n        "0.30715000",\n        "860682.79000000",\n        1528037999999,\n        "264137.50896280",\n        1314,\n        "458794.74000000",\n        "140926.12360700",\n        "0"\n    ],\n    [\n        1528038000000,\n        "0.30715000",\n        "0.30996000",\n        "0.30700000",\n        "0.30911000",\n        "749975.70000000",\n        1528041599999,\n        "230677.60323080",\n        605,\n        "514157.40000000",\n        "158148.66941320",\n        "0"\n    ],\n    [\n        1528041600000,\n        "0.30912000",\n        "0.30973000",\n        "0.30562000",\n        "0.30598000",\n        "1221573.77000000",\n        1528045199999,\n        "375369.95750960",\n        688,\n        "844442.67000000",\n        "259630.46911290",\n        "0"\n    ],\n    [\n        1528045200000,\n        "0.30598000",\n        "0.30647000",\n        "0.30154000",\n        "0.30388000",\n        "1187413.68000000",\n        1528048799999,\n        "360576.56804980",\n        1196,\n        "894696.30000000",\n        "271697.40584590",\n        "0"\n    ],\n    [\n        1528048800000,\n        "0.30344000",\n        "0.30609000",\n        "0.30143000",\n        "0.30143000",\n        "992223.21000000",\n        1528052399999,\n        "300566.75241040",\n        697,\n        "569399.07000000",\n        "172552.81639050",\n        "0"\n    ],\n    [\n        1528052400000,\n        "0.30143000",\n        "0.30499000",\n        "0.29838000",\n        "0.30376000",\n        "777012.76000000",\n        1528055999999,\n        "234062.72826540",\n        682,\n        "390035.36000000",\n        "117693.39451600",\n        "0"\n    ],\n    [\n        1528056000000,\n        "0.30377000",\n        "0.30422000",\n        "0.30090000",\n        "0.30289000",\n        "744111.39000000",\n        1528059599999,\n        "224862.53840080",\n        430,\n        "564195.61000000",\n        "170492.23187650",\n        "0"\n    ],\n    [\n        1528059600000,\n        "0.30288000",\n        "0.30310000",\n        "0.30089000",\n        "0.30158000",\n        "632048.46000000",\n        1528063199999,\n        "191012.96404160",\n        329,\n        "547071.38000000",\n        "165342.92189580",\n        "0"\n    ],\n    [\n        1528063200000,\n        "0.30134000",\n        "0.30300000",\n        "0.30065000",\n        "0.30223000",\n        "917785.77000000",\n        1528066799999,\n        "276851.28147510",\n        365,\n        "582106.21000000",\n        "175626.63346950",\n        "0"\n    ],\n    [\n        1528066800000,\n        "0.30223000",\n        "0.30567000",\n        "0.30130000",\n        "0.30405000",\n        "641769.73000000",\n        1528070399999,\n        "194021.64676590",\n        330,\n        "485188.36000000",\n        "146649.82919380",\n        "0"\n    ],\n    [\n        1528070400000,\n        "0.30406000",\n        "0.31104000",\n        "0.30289000",\n        "0.30791000",\n        "977051.28000000",\n        1528073999999,\n        "300418.10933420",\n        993,\n        "492463.61000000",\n        "151437.31791170",\n        "0"\n    ],\n    [\n        1528074000000,\n        "0.30664000",\n        "0.31000000",\n        "0.30533000",\n        "0.30766000",\n        "565174.80000000",\n        1528077599999,\n        "173360.38548210",\n        592,\n        "403141.72000000",\n        "123667.26624730",\n        "0"\n    ],\n    [\n        1528077600000,\n        "0.30764000",\n        "0.30766000",\n        "0.30224000",\n        "0.30274000",\n        "861507.04000000",\n        1528081199999,\n        "262506.00578660",\n        543,\n        "441393.46000000",\n        "134504.35196270",\n        "0"\n    ],\n    [\n        1528081200000,\n        "0.30274000",\n        "0.30499000",\n        "0.30130000",\n        "0.30438000",\n        "376477.70000000",\n        1528084799999,\n        "114307.97396520",\n        249,\n        "162490.83000000",\n        "49390.24981990",\n        "0"\n    ],\n    [\n        1528084800000,\n        "0.30436000",\n        "0.30828000",\n        "0.30404000",\n        "0.30585000",\n        "783848.35000000",\n        1528088399999,\n        "239254.52916580",\n        445,\n        "591645.95000000",\n        "180593.54260690",\n        "0"\n    ],\n    [\n        1528088400000,\n        "0.30658000",\n        "0.31000000",\n        "0.30333000",\n        "0.30553000",\n        "705194.57000000",\n        1528091999999,\n        "216785.05699920",\n        630,\n        "380259.68000000",\n        "116937.41326490",\n        "0"\n    ],\n    [\n        1528092000000,\n        "0.30475000",\n        "0.30612000",\n        "0.29711000",\n        "0.29790000",\n        "1160072.23000000",\n        1528095599999,\n        "349599.34132970",\n        969,\n        "520784.30000000",\n        "156895.41075720",\n        "0"\n    ],\n    [\n        1528095600000,\n        "0.29783000",\n        "0.29913000",\n        "0.29620000",\n        "0.29754000",\n        "694874.32000000",\n        1528099199999,\n        "206760.24554900",\n        510,\n        "518225.26000000",\n        "154229.20495360",\n        "0"\n    ],\n    [\n        1528099200000,\n        "0.29691000",\n        "0.29856000",\n        "0.29569000",\n        "0.29725000",\n        "807693.21000000",\n        1528102799999,\n        "239443.78029750",\n        549,\n        "423590.26000000",\n        "125597.86766090",\n        "0"\n    ],\n    [\n        1528102800000,\n        "0.29739000",\n        "0.29837000",\n        "0.29506000",\n        "0.29789000",\n        "939905.60000000",\n        1528106399999,\n        "278816.22531710",\n        431,\n        "524219.13000000",\n        "155539.96970650",\n        "0"\n    ],\n    [\n        1528106400000,\n        "0.29793000",\n        "0.29874000",\n        "0.29645000",\n        "0.29651000",\n        "450097.31000000",\n        1528109999999,\n        "134058.90102950",\n        295,\n        "239457.02000000",\n        "71334.83479640",\n        "0"\n    ],\n    [\n        1528110000000,\n        "0.29651000",\n        "0.29677000",\n        "0.29000000",\n        "0.29000000",\n        "1201911.21000000",\n        1528113599999,\n        "350972.91675630",\n        907,\n        "568174.59000000",\n        "166153.81466390",\n        "0"\n    ],\n    [\n        1528113600000,\n        "0.29001000",\n        "0.29399000",\n        "0.28940000",\n        "0.29199000",\n        "631920.71000000",\n        1528117199999,\n        "183720.75867560",\n        492,\n        "316307.47000000",\n        "91975.08702370",\n        "0"\n    ],\n    [\n        1528117200000,\n        "0.29109000",\n        "0.29140000",\n        "0.28847000",\n        "0.28850000",\n        "828737.93000000",\n        1528120799999,\n        "240566.46482560",\n        395,\n        "452912.75000000",\n        "131550.07942510",\n        "0"\n    ],\n    [\n        1528120800000,\n        "0.28851000",\n        "0.28960000",\n        "0.28501000",\n        "0.28728000",\n        "902333.15000000",\n        1528124399999,\n        "258944.91108610",\n        673,\n        "488864.51000000",\n        "140349.18215460",\n        "0"\n    ],\n    [\n        1528124400000,\n        "0.28728000",\n        "0.29222000",\n        "0.28577000",\n        "0.28962000",\n        "878996.70000000",\n        1528127999999,\n        "254417.43906800",\n        517,\n        "457553.48000000",\n        "132625.09728630",\n        "0"\n    ],\n    [\n        1528128000000,\n        "0.28874000",\n        "0.29011000",\n        "0.28664000",\n        "0.28778000",\n        "878354.06000000",\n        1528131599999,\n        "253304.61159460",\n        365,\n        "387706.15000000",\n        "111867.43915980",\n        "0"\n    ],\n    [\n        1528131600000,\n        "0.28779000",\n        "0.28820000",\n        "0.28588000",\n        "0.28730000",\n        "641292.90000000",\n        1528135199999,\n        "183901.80856130",\n        407,\n        "526046.34000000",\n        "150845.65642560",\n        "0"\n    ],\n    [\n        1528135200000,\n        "0.28724000",\n        "0.28973000",\n        "0.28589000",\n        "0.28858000",\n        "804803.74000000",\n        1528138799999,\n        "231404.18302430",\n        354,\n        "423010.48000000",\n        "121666.99864660",\n        "0"\n    ],\n    [\n        1528138800000,\n        "0.28917000",\n        "0.29020000",\n        "0.28747000",\n        "0.28896000",\n        "330377.84000000",\n        1528142399999,\n        "95585.68641910",\n        257,\n        "172448.24000000",\n        "49937.14116060",\n        "0"\n    ],\n    [\n        1528142400000,\n        "0.28895000",\n        "0.29167000",\n        "0.28787000",\n        "0.29083000",\n        "523572.83000000",\n        1528145999999,\n        "151621.77576140",\n        280,\n        "391963.45000000",\n        "113537.80202060",\n        "0"\n    ],\n    [\n        1528146000000,\n        "0.29157000",\n        "0.29500000",\n        "0.29071000",\n        "0.29404000",\n        "723624.20000000",\n        1528149599999,\n        "211911.91515270",\n        452,\n        "406437.81000000",\n        "119126.60328550",\n        "0"\n    ],\n    [\n        1528149600000,\n        "0.29404000",\n        "0.29499000",\n        "0.29117000",\n        "0.29164000",\n        "409614.95000000",\n        1528153199999,\n        "119928.10374800",\n        312,\n        "234929.00000000",\n        "68747.72519760",\n        "0"\n    ],\n    [\n        1528153200000,\n        "0.29165000",\n        "0.29167000",\n        "0.28874000",\n        "0.29080000",\n        "410090.26000000",\n        1528156799999,\n        "118918.68984390",\n        339,\n        "199036.17000000",\n        "57778.92056320",\n        "0"\n    ],\n    [\n        1528156800000,\n        "0.29022000",\n        "0.29200000",\n        "0.28964000",\n        "0.29135000",\n        "423648.72000000",\n        1528160399999,\n        "123103.29817700",\n        322,\n        "217869.09000000",\n        "63368.63154030",\n        "0"\n    ],\n    [\n        1528160400000,\n        "0.29095000",\n        "0.29312000",\n        "0.28892000",\n        "0.28950000",\n        "299788.56000000",\n        1528163999999,\n        "87160.96177450",\n        200,\n        "255357.83000000",\n        "74266.12398690",\n        "0"\n    ],\n    [\n        1528164000000,\n        "0.29082000",\n        "0.29082000",\n        "0.28251000",\n        "0.28257000",\n        "673289.35000000",\n        1528167599999,\n        "192440.77731120",\n        580,\n        "309949.45000000",\n        "88545.79126740",\n        "0"\n    ],\n    [\n        1528167600000,\n        "0.28251000",\n        "0.28450000",\n        "0.28000000",\n        "0.28251000",\n        "686692.95000000",\n        1528171199999,\n        "194012.68983160",\n        440,\n        "446426.81000000",\n        "126271.08150760",\n        "0"\n    ],\n    [\n        1528171200000,\n        "0.28254000",\n        "0.28378000",\n        "0.28000000",\n        "0.28006000",\n        "555368.82000000",\n        1528174799999,\n        "156714.42481820",\n        350,\n        "323921.33000000",\n        "91451.67689770",\n        "0"\n    ],\n    [\n        1528174800000,\n        "0.28044000",\n        "0.28297000",\n        "0.27801000",\n        "0.28221000",\n        "735877.27000000",\n        1528178399999,\n        "207103.54743370",\n        412,\n        "354687.87000000",\n        "99881.55288190",\n        "0"\n    ],\n    [\n        1528178400000,\n        "0.28265000",\n        "0.28501000",\n        "0.28223000",\n        "0.28316000",\n        "682884.99000000",\n        1528181999999,\n        "193660.56494310",\n        375,\n        "384081.26000000",\n        "108952.65465980",\n        "0"\n    ],\n    [\n        1528182000000,\n        "0.28316000",\n        "0.28441000",\n        "0.28174000",\n        "0.28383000",\n        "730346.03000000",\n        1528185599999,\n        "207023.53038320",\n        476,\n        "629024.01000000",\n        "178359.13912770",\n        "0"\n    ],\n    [\n        1528185600000,\n        "0.28311000",\n        "0.28920000",\n        "0.28199000",\n        "0.28662000",\n        "553135.56000000",\n        1528189199999,\n        "157936.43625510",\n        385,\n        "393854.70000000",\n        "112456.07350320",\n        "0"\n    ],\n    [\n        1528189200000,\n        "0.28746000",\n        "0.28900000",\n        "0.28469000",\n        "0.28490000",\n        "451981.57000000",\n        1528192799999,\n        "129112.90411060",\n        238,\n        "282993.14000000",\n        "80853.03631600",\n        "0"\n    ],\n    [\n        1528192800000,\n        "0.28493000",\n        "0.28726000",\n        "0.28444000",\n        "0.28451000",\n        "270551.72000000",\n        1528196399999,\n        "77153.35782490",\n        219,\n        "170729.76000000",\n        "48696.73857340",\n        "0"\n    ],\n    [\n        1528196400000,\n        "0.28486000",\n        "0.28527000",\n        "0.28304000",\n        "0.28488000",\n        "1043637.95000000",\n        1528199999999,\n        "296215.00366220",\n        491,\n        "609465.02000000",\n        "173059.12697220",\n        "0"\n    ],\n    [\n        1528200000000,\n        "0.28463000",\n        "0.28673000",\n        "0.28405000",\n        "0.28411000",\n        "541085.64000000",\n        1528203599999,\n        "154143.15591870",\n        1075,\n        "263708.96000000",\n        "75169.28230760",\n        "0"\n    ],\n    [\n        1528203600000,\n        "0.28411000",\n        "0.28726000",\n        "0.28301000",\n        "0.28381000",\n        "442374.32000000",\n        1528207199999,\n        "125557.82437950",\n        1097,\n        "170314.89000000",\n        "48402.05413650",\n        "0"\n    ],\n    [\n        1528207200000,\n        "0.28308000",\n        "0.28439000",\n        "0.28201000",\n        "0.28394000",\n        "559971.41000000",\n        1528210799999,\n        "158551.97222190",\n        1194,\n        "298524.71000000",\n        "84563.77628760",\n        "0"\n    ],\n    [\n        1528210800000,\n        "0.28379000",\n        "0.29330000",\n        "0.28306000",\n        "0.29327000",\n        "857615.72000000",\n        1528214399999,\n        "247115.55142320",\n        1494,\n        "567893.14000000",\n        "163551.32222840",\n        "0"\n    ],\n    [\n        1528214400000,\n        "0.29310000",\n        "0.29785000",\n        "0.29192000",\n        "0.29352000",\n        "1008099.36000000",\n        1528217999999,\n        "296931.50202900",\n        983,\n        "669101.90000000",\n        "197037.99731530",\n        "0"\n    ],\n    [\n        1528218000000,\n        "0.29456000",\n        "0.29876000",\n        "0.29352000",\n        "0.29777000",\n        "809466.88000000",\n        1528221599999,\n        "239621.46533230",\n        695,\n        "381697.18000000",\n        "113013.26480210",\n        "0"\n    ],\n    [\n        1528221600000,\n        "0.29642000",\n        "0.29822000",\n        "0.29403000",\n        "0.29513000",\n        "899108.84000000",\n        1528225199999,\n        "266862.08272970",\n        648,\n        "519105.56000000",\n        "154178.40366140",\n        "0"\n    ],\n    [\n        1528225200000,\n        "0.29539000",\n        "0.29608000",\n        "0.29353000",\n        "0.29539000",\n        "618714.76000000",\n        1528228799999,\n        "182377.47704230",\n        355,\n        "253604.74000000",\n        "74792.18331460",\n        "0"\n    ],\n    [\n        1528228800000,\n        "0.29539000",\n        "0.29605000",\n        "0.29396000",\n        "0.29521000",\n        "843478.24000000",\n        1528232399999,\n        "249104.02102590",\n        384,\n        "422417.02000000",\n        "124802.79210160",\n        "0"\n    ],\n    [\n        1528232400000,\n        "0.29526000",\n        "0.29606000",\n        "0.29196000",\n        "0.29329000",\n        "761442.48000000",\n        1528235999999,\n        "223570.33155910",\n        788,\n        "363432.00000000",\n        "106605.72264040",\n        "0"\n    ],\n    [\n        1528236000000,\n        "0.29328000",\n        "0.29606000",\n        "0.29162000",\n        "0.29416000",\n        "450329.99000000",\n        1528239599999,\n        "132022.66206240",\n        1121,\n        "299149.92000000",\n        "87681.88485310",\n        "0"\n    ],\n    [\n        1528239600000,\n        "0.29416000",\n        "0.29514000",\n        "0.29275000",\n        "0.29403000",\n        "360773.94000000",\n        1528243199999,\n        "105914.23405020",\n        926,\n        "133512.49000000",\n        "39240.02467810",\n        "0"\n    ],\n    [\n        1528243200000,\n        "0.29403000",\n        "0.29559000",\n        "0.29315000",\n        "0.29315000",\n        "806799.93000000",\n        1528246799999,\n        "237723.74521620",\n        569,\n        "579486.96000000",\n        "170797.10678680",\n        "0"\n    ],\n    [\n        1528246800000,\n        "0.29360000",\n        "0.29451000",\n        "0.29166000",\n        "0.29322000",\n        "531578.39000000",\n        1528250399999,\n        "155973.63089970",\n        258,\n        "433666.91000000",\n        "127281.31489100",\n        "0"\n    ],\n    [\n        1528250400000,\n        "0.29387000",\n        "0.29387000",\n        "0.29117000",\n        "0.29213000",\n        "394007.51000000",\n        1528253999999,\n        "115343.41968520",\n        218,\n        "281356.42000000",\n        "82395.44017310",\n        "0"\n    ],\n    [\n        1528254000000,\n        "0.29227000",\n        "0.29393000",\n        "0.29201000",\n        "0.29201000",\n        "238671.55000000",\n        1528257599999,\n        "70012.51700140",\n        151,\n        "184453.96000000",\n        "54128.57999100",\n        "0"\n    ],\n    [\n        1528257600000,\n        "0.29201000",\n        "0.29256000",\n        "0.29036000",\n        "0.29056000",\n        "839610.31000000",\n        1528261199999,\n        "244538.94467770",\n        379,\n        "745281.86000000",\n        "217057.71338520",\n        "0"\n    ],\n    [\n        1528261200000,\n        "0.29047000",\n        "0.29131000",\n        "0.28895000",\n        "0.29101000",\n        "663521.30000000",\n        1528264799999,\n        "192726.09203440",\n        309,\n        "555122.96000000",\n        "161224.09813310",\n        "0"\n    ],\n    [\n        1528264800000,\n        "0.29101000",\n        "0.29303000",\n        "0.29101000",\n        "0.29223000",\n        "581532.72000000",\n        1528268399999,\n        "170054.61837720",\n        295,\n        "399783.09000000",\n        "116935.59547230",\n        "0"\n    ],\n    [\n        1528268400000,\n        "0.29249000",\n        "0.29380000",\n        "0.29104000",\n        "0.29200000",\n        "711452.99000000",\n        1528271999999,\n        "207972.62636780",\n        320,\n        "650352.05000000",\n        "190112.60090040",\n        "0"\n    ],\n    [\n        1528272000000,\n        "0.29240000",\n        "0.29350000",\n        "0.29022000",\n        "0.29259000",\n        "507160.01000000",\n        1528275599999,\n        "148217.24639420",\n        1288,\n        "382089.75000000",\n        "111701.92954170",\n        "0"\n    ],\n    [\n        1528275600000,\n        "0.29260000",\n        "0.29344000",\n        "0.28873000",\n        "0.29051000",\n        "505736.01000000",\n        1528279199999,\n        "147311.67395510",\n        598,\n        "255173.44000000",\n        "74402.00623930",\n        "0"\n    ],\n    [\n        1528279200000,\n        "0.29051000",\n        "0.29221000",\n        "0.29008000",\n        "0.29167000",\n        "574966.10000000",\n        1528282799999,\n        "167539.01216170",\n        359,\n        "287730.04000000",\n        "83846.44857410",\n        "0"\n    ],\n    [\n        1528282800000,\n        "0.29168000",\n        "0.29439000",\n        "0.29047000",\n        "0.29214000",\n        "535641.69000000",\n        1528286399999,\n        "156571.42255730",\n        333,\n        "255011.20000000",\n        "74614.80150890",\n        "0"\n    ],\n    [\n        1528286400000,\n        "0.29204000",\n        "0.29410000",\n        "0.29021000",\n        "0.29350000",\n        "352299.71000000",\n        1528289999999,\n        "103016.77849700",\n        244,\n        "223970.95000000",\n        "65502.23263450",\n        "0"\n    ],\n    [\n        1528290000000,\n        "0.29349000",\n        "0.29500000",\n        "0.29200000",\n        "0.29350000",\n        "520491.76000000",\n        1528293599999,\n        "152715.58505490",\n        378,\n        "294228.98000000",\n        "86376.09208310",\n        "0"\n    ],\n    [\n        1528293600000,\n        "0.29394000",\n        "0.29560000",\n        "0.29359000",\n        "0.29468000",\n        "660821.40000000",\n        1528297199999,\n        "194471.97684960",\n        344,\n        "408636.47000000",\n        "120189.31154250",\n        "0"\n    ],\n    [\n        1528297200000,\n        "0.29490000",\n        "0.29776000",\n        "0.29371000",\n        "0.29649000",\n        "778301.91000000",\n        1528300799999,\n        "230304.48303420",\n        475,\n        "562715.46000000",\n        "166468.86980710",\n        "0"\n    ],\n    [\n        1528300800000,\n        "0.29617000",\n        "0.29701000",\n        "0.28911000",\n        "0.29028000",\n        "1147085.23000000",\n        1528304399999,\n        "336310.29517370",\n        788,\n        "572456.53000000",\n        "167998.72311470",\n        "0"\n    ],\n    [\n        1528304400000,\n        "0.29000000",\n        "0.29180000",\n        "0.28853000",\n        "0.29112000",\n        "1041633.64000000",\n        1528307999999,\n        "302730.44429020",\n        709,\n        "680881.72000000",\n        "198002.14185250",\n        "0"\n    ],\n    [\n        1528308000000,\n        "0.29013000",\n        "0.29156000",\n        "0.28817000",\n        "0.29117000",\n        "435750.39000000",\n        1528311599999,\n        "126130.62179970",\n        351,\n        "351524.03000000",\n        "101761.09312600",\n        "0"\n    ],\n    [\n        1528311600000,\n        "0.28973000",\n        "0.29158000",\n        "0.28902000",\n        "0.29143000",\n        "273004.53000000",\n        1528315199999,\n        "79278.15639150",\n        664,\n        "182613.59000000",\n        "53063.88340690",\n        "0"\n    ],\n    [\n        1528315200000,\n        "0.29036000",\n        "0.29600000",\n        "0.28908000",\n        "0.29457000",\n        "892228.33000000",\n        1528318799999,\n        "260430.35935330",\n        737,\n        "415887.34000000",\n        "121393.00894620",\n        "0"\n    ],\n    [\n        1528318800000,\n        "0.29448000",\n        "0.29909000",\n        "0.29448000",\n        "0.29748000",\n        "1200618.43000000",\n        1528322399999,\n        "356297.14257050",\n        1163,\n        "684480.62000000",\n        "203109.44735010",\n        "0"\n    ],\n    [\n        1528322400000,\n        "0.29747000",\n        "0.30151000",\n        "0.29706000",\n        "0.29859000",\n        "766484.52000000",\n        1528325999999,\n        "228687.78558610",\n        1363,\n        "509608.61000000",\n        "152058.46039330",\n        "0"\n    ],\n    [\n        1528326000000,\n        "0.29855000",\n        "0.29960000",\n        "0.29770000",\n        "0.29950000",\n        "613440.67000000",\n        1528329599999,\n        "183184.47098250",\n        859,\n        "351777.96000000",\n        "105062.35181810",\n        "0"\n    ],\n    [\n        1528329600000,\n        "0.29959000",\n        "0.30233000",\n        "0.29877000",\n        "0.30225000",\n        "1039520.09000000",\n        1528333199999,\n        "312104.48178500",\n        1035,\n        "568785.35000000",\n        "170903.93287310",\n        "0"\n    ],\n    [\n        1528333200000,\n        "0.30220000",\n        "0.30610000",\n        "0.30103000",\n        "0.30394000",\n        "1402318.42000000",\n        1528336799999,\n        "426961.93467100",\n        1371,\n        "671360.78000000",\n        "204410.67969830",\n        "0"\n    ],\n    [\n        1528336800000,\n        "0.30391000",\n        "0.30620000",\n        "0.30276000",\n        "0.30345000",\n        "977813.63000000",\n        1528340399999,\n        "297819.74057550",\n        572,\n        "469999.81000000",\n        "143319.74764660",\n        "0"\n    ],\n    [\n        1528340400000,\n        "0.30349000",\n        "0.30400000",\n        "0.30033000",\n        "0.30130000",\n        "820526.15000000",\n        1528343999999,\n        "247708.16335670",\n        510,\n        "582110.78000000",\n        "175759.03870270",\n        "0"\n    ],\n    [\n        1528344000000,\n        "0.30127000",\n        "0.30380000",\n        "0.29929000",\n        "0.30038000",\n        "478865.88000000",\n        1528347599999,\n        "144132.47289350",\n        366,\n        "296253.41000000",\n        "89202.02096920",\n        "0"\n    ],\n    [\n        1528347600000,\n        "0.30045000",\n        "0.30180000",\n        "0.30000000",\n        "0.30119000",\n        "699119.29000000",\n        1528351199999,\n        "210280.04856670",\n        321,\n        "364032.35000000",\n        "109537.23595740",\n        "0"\n    ],\n    [\n        1528351200000,\n        "0.30120000",\n        "0.30340000",\n        "0.30077000",\n        "0.30090000",\n        "555439.27000000",\n        1528354799999,\n        "167496.59462320",\n        339,\n        "317546.85000000",\n        "95774.08293060",\n        "0"\n    ],\n    [\n        1528354800000,\n        "0.30092000",\n        "0.30240000",\n        "0.30063000",\n        "0.30063000",\n        "832819.55000000",\n        1528358399999,\n        "250640.44779500",\n        377,\n        "412383.04000000",\n        "124147.72951490",\n        "0"\n    ],\n    [\n        1528358400000,\n        "0.30064000",\n        "0.30249000",\n        "0.29881000",\n        "0.29885000",\n        "809705.11000000",\n        1528361999999,\n        "243333.88863690",\n        1277,\n        "389935.26000000",\n        "117185.72346170",\n        "0"\n    ],\n    [\n        1528362000000,\n        "0.29897000",\n        "0.30099000",\n        "0.29876000",\n        "0.30074000",\n        "742910.70000000",\n        1528365599999,\n        "222521.88139310",\n        452,\n        "556284.29000000",\n        "166656.34616050",\n        "0"\n    ],\n    [\n        1528365600000,\n        "0.30064000",\n        "0.30071000",\n        "0.29862000",\n        "0.29958000",\n        "709275.01000000",\n        1528369199999,\n        "212242.42467810",\n        694,\n        "467039.97000000",\n        "139815.12773090",\n        "0"\n    ],\n    [\n        1528369200000,\n        "0.29960000",\n        "0.30050000",\n        "0.29852000",\n        "0.30039000",\n        "501392.34000000",\n        1528372799999,\n        "150126.74596990",\n        522,\n        "219367.50000000",\n        "65721.66412910",\n        "0"\n    ],\n    [\n        1528372800000,\n        "0.30037000",\n        "0.30102000",\n        "0.29852000",\n        "0.30036000",\n        "692497.31000000",\n        1528376399999,\n        "207748.22262100",\n        1356,\n        "419462.83000000",\n        "125866.30495780",\n        "0"\n    ],\n    [\n        1528376400000,\n        "0.30028000",\n        "0.30042000",\n        "0.29613000",\n        "0.29795000",\n        "767122.55000000",\n        1528379999999,\n        "229248.34308370",\n        732,\n        "443812.02000000",\n        "132656.77702480",\n        "0"\n    ],\n    [\n        1528380000000,\n        "0.29768000",\n        "0.29768000",\n        "0.29546000",\n        "0.29740000",\n        "489427.05000000",\n        1528383599999,\n        "145265.28995500",\n        391,\n        "296143.25000000",\n        "87968.67697560",\n        "0"\n    ],\n    [\n        1528383600000,\n        "0.29708000",\n        "0.29738000",\n        "0.29500000",\n        "0.29663000",\n        "736498.46000000",\n        1528387199999,\n        "217869.18062360",\n        411,\n        "408545.79000000",\n        "120895.14396250",\n        "0"\n    ],\n    [\n        1528387200000,\n        "0.29601000",\n        "0.29800000",\n        "0.29496000",\n        "0.29799000",\n        "529953.97000000",\n        1528390799999,\n        "157087.98446840",\n        376,\n        "386656.05000000",\n        "114634.18206040",\n        "0"\n    ],\n    [\n        1528390800000,\n        "0.29800000",\n        "0.29906000",\n        "0.29450000",\n        "0.29666000",\n        "773028.72000000",\n        1528394399999,\n        "229142.25924610",\n        855,\n        "583371.05000000",\n        "172910.25469110",\n        "0"\n    ],\n    [\n        1528394400000,\n        "0.29701000",\n        "0.29906000",\n        "0.29635000",\n        "0.29819000",\n        "491772.75000000",\n        1528397999999,\n        "146179.43961810",\n        1702,\n        "386407.50000000",\n        "114871.22442920",\n        "0"\n    ],\n    [\n        1528398000000,\n        "0.29820000",\n        "0.29930000",\n        "0.29683000",\n        "0.29901000",\n        "1052295.68000000",\n        1528401599999,\n        "313993.18152470",\n        740,\n        "531283.31000000",\n        "158519.58057140",\n        "0"\n    ],\n    [\n        1528401600000,\n        "0.29901000",\n        "0.29940000",\n        "0.29344000",\n        "0.29479000",\n        "1240090.27000000",\n        1528405199999,\n        "368782.78517030",\n        980,\n        "495118.07000000",\n        "146898.40760890",\n        "0"\n    ],\n    [\n        1528405200000,\n        "0.29502000",\n        "0.29593000",\n        "0.29225000",\n        "0.29471000",\n        "635100.55000000",\n        1528408799999,\n        "186729.71645470",\n        415,\n        "356075.15000000",\n        "104770.11505510",\n        "0"\n    ],\n    [\n        1528408800000,\n        "0.29473000",\n        "0.29502000",\n        "0.29140000",\n        "0.29308000",\n        "430913.12000000",\n        1528412399999,\n        "126397.33353360",\n        324,\n        "344548.62000000",\n        "101060.36592500",\n        "0"\n    ],\n    [\n        1528412400000,\n        "0.29287000",\n        "0.29499000",\n        "0.29000000",\n        "0.29298000",\n        "465068.47000000",\n        1528415999999,\n        "135601.39358250",\n        443,\n        "351771.01000000",\n        "102587.04912330",\n        "0"\n    ],\n    [\n        1528416000000,\n        "0.29284000",\n        "0.29542000",\n        "0.29211000",\n        "0.29462000",\n        "668454.38000000",\n        1528419599999,\n        "196304.96103400",\n        674,\n        "458844.98000000",\n        "134799.14635180",\n        "0"\n    ],\n    [\n        1528419600000,\n        "0.29423000",\n        "0.29462000",\n        "0.29106000",\n        "0.29263000",\n        "1133279.32000000",\n        1528423199999,\n        "332472.84320950",\n        435,\n        "602388.62000000",\n        "176966.76024880",\n        "0"\n    ],\n    [\n        1528423200000,\n        "0.29283000",\n        "0.29500000",\n        "0.29129000",\n        "0.29295000",\n        "532653.07000000",\n        1528426799999,\n        "155949.42203860",\n        366,\n        "480255.79000000",\n        "140622.70393340",\n        "0"\n    ],\n    [\n        1528426800000,\n        "0.29295000",\n        "0.29296000",\n        "0.29072000",\n        "0.29154000",\n        "452217.72000000",\n        1528430399999,\n        "131860.28105140",\n        352,\n        "272456.03000000",\n        "79464.34444260",\n        "0"\n    ],\n    [\n        1528430400000,\n        "0.29150000",\n        "0.29197000",\n        "0.28813000",\n        "0.28933000",\n        "756986.91000000",\n        1528433999999,\n        "219304.62059600",\n        442,\n        "458744.12000000",\n        "132895.65767420",\n        "0"\n    ],\n    [\n        1528434000000,\n        "0.28933000",\n        "0.29000000",\n        "0.28730000",\n        "0.28878000",\n        "704042.15000000",\n        1528437599999,\n        "203699.68294350",\n        362,\n        "512394.31000000",\n        "148284.21346760",\n        "0"\n    ],\n    [\n        1528437600000,\n        "0.28852000",\n        "0.29000000",\n        "0.28700000",\n        "0.28864000",\n        "712370.23000000",\n        1528441199999,\n        "205799.68518360",\n        413,\n        "440386.76000000",\n        "127245.77389160",\n        "0"\n    ],\n    [\n        1528441200000,\n        "0.28808000",\n        "0.29000000",\n        "0.28750000",\n        "0.28808000",\n        "683007.09000000",\n        1528444799999,\n        "197485.86910340",\n        314,\n        "514723.64000000",\n        "148869.12422090",\n        "0"\n    ],\n    [\n        1528444800000,\n        "0.28808000",\n        "0.28948000",\n        "0.28774000",\n        "0.28806000",\n        "776493.33000000",\n        1528448399999,\n        "223922.76977990",\n        322,\n        "327291.28000000",\n        "94426.96776210",\n        "0"\n    ],\n    [\n        1528448400000,\n        "0.28821000",\n        "0.28919000",\n        "0.28671000",\n        "0.28764000",\n        "708212.92000000",\n        1528451999999,\n        "203768.48075290",\n        346,\n        "395473.42000000",\n        "113805.18393010",\n        "0"\n    ],\n    [\n        1528452000000,\n        "0.28749000",\n        "0.28764000",\n        "0.28500000",\n        "0.28665000",\n        "941187.33000000",\n        1528455599999,\n        "269808.47362290",\n        519,\n        "524453.68000000",\n        "150387.86734430",\n        "0"\n    ],\n    [\n        1528455600000,\n        "0.28665000",\n        "0.28721000",\n        "0.28471000",\n        "0.28522000",\n        "845091.69000000",\n        1528459199999,\n        "241509.21419000",\n        446,\n        "465534.17000000",\n        "133114.09204850",\n        "0"\n    ],\n    [\n        1528459200000,\n        "0.28497000",\n        "0.28617000",\n        "0.28474000",\n        "0.28604000",\n        "389274.89000000",\n        1528462799999,\n        "111127.81370600",\n        218,\n        "173966.63000000",\n        "49683.99392210",\n        "0"\n    ],\n    [\n        1528462800000,\n        "0.28605000",\n        "0.28938000",\n        "0.28596000",\n        "0.28644000",\n        "740812.28000000",\n        1528466399999,\n        "212291.53858780",\n        373,\n        "286527.04000000",\n        "82165.64923460",\n        "0"\n    ],\n    [\n        1528466400000,\n        "0.28642000",\n        "0.28919000",\n        "0.28550000",\n        "0.28695000",\n        "622234.81000000",\n        1528469999999,\n        "178150.33562380",\n        333,\n        "244132.19000000",\n        "69951.67719410",\n        "0"\n    ],\n    [\n        1528470000000,\n        "0.28722000",\n        "0.28899000",\n        "0.28527000",\n        "0.28893000",\n        "728751.98000000",\n        1528473599999,\n        "209128.17204810",\n        348,\n        "410747.41000000",\n        "117980.96756210",\n        "0"\n    ],\n    [\n        1528473600000,\n        "0.28852000",\n        "0.29328000",\n        "0.28765000",\n        "0.29094000",\n        "678520.80000000",\n        1528477199999,\n        "197384.01332510",\n        474,\n        "369083.79000000",\n        "107352.41775080",\n        "0"\n    ],\n    [\n        1528477200000,\n        "0.29100000",\n        "0.29269000",\n        "0.29023000",\n        "0.29171000",\n        "805562.06000000",\n        1528480799999,\n        "234880.77469080",\n        383,\n        "415000.12000000",\n        "121003.39710420",\n        "0"\n    ],\n    [\n        1528480800000,\n        "0.29190000",\n        "0.29276000",\n        "0.28877000",\n        "0.29065000",\n        "1024528.48000000",\n        1528484399999,\n        "298576.13191290",\n        412,\n        "652034.05000000",\n        "190148.23704350",\n        "0"\n    ],\n    [\n        1528484400000,\n        "0.29063000",\n        "0.29122000",\n        "0.28619000",\n        "0.29010000",\n        "760846.80000000",\n        1528487999999,\n        "220135.99717130",\n        370,\n        "494767.24000000",\n        "143248.16560360",\n        "0"\n    ],\n    [\n        1528488000000,\n        "0.29007000",\n        "0.29108000",\n        "0.28901000",\n        "0.28998000",\n        "759586.81000000",\n        1528491599999,\n        "220217.96862810",\n        311,\n        "442641.25000000",\n        "128347.88258950",\n        "0"\n    ],\n    [\n        1528491600000,\n        "0.28999000",\n        "0.29033000",\n        "0.28908000",\n        "0.29001000",\n        "928973.83000000",\n        1528495199999,\n        "269300.65932380",\n        313,\n        "547212.89000000",\n        "158656.24516480",\n        "0"\n    ],\n    [\n        1528495200000,\n        "0.29001000",\n        "0.29099000",\n        "0.28670000",\n        "0.28874000",\n        "477461.14000000",\n        1528498799999,\n        "138177.93169260",\n        330,\n        "322474.30000000",\n        "93343.60338670",\n        "0"\n    ],\n    [\n        1528498800000,\n        "0.28873000",\n        "0.28873000",\n        "0.28605000",\n        "0.28698000",\n        "918683.53000000",\n        1528502399999,\n        "264304.94315910",\n        442,\n        "844668.74000000",\n        "243021.86923990",\n        "0"\n    ],\n    [\n        1528502400000,\n        "0.28698000",\n        "0.28826000",\n        "0.28601000",\n        "0.28767000",\n        "907536.30000000",\n        1528505999999,\n        "260542.83714390",\n        340,\n        "389606.69000000",\n        "111902.27687580",\n        "0"\n    ],\n    [\n        1528506000000,\n        "0.28766000",\n        "0.28976000",\n        "0.28659000",\n        "0.28976000",\n        "588796.37000000",\n        1528509599999,\n        "169562.43318320",\n        251,\n        "351545.72000000",\n        "101297.22486300",\n        "0"\n    ],\n    [\n        1528509600000,\n        "0.28898000",\n        "0.29135000",\n        "0.28844000",\n        "0.29132000",\n        "984383.80000000",\n        1528513199999,\n        "285366.16489660",\n        488,\n        "781823.42000000",\n        "226688.29810880",\n        "0"\n    ],\n    [\n        1528513200000,\n        "0.29132000",\n        "0.29132000",\n        "0.28931000",\n        "0.28998000",\n        "447248.18000000",\n        1528516799999,\n        "129783.96133260",\n        219,\n        "349290.47000000",\n        "101350.59355850",\n        "0"\n    ],\n    [\n        1528516800000,\n        "0.29064000",\n        "0.29075000",\n        "0.28906000",\n        "0.28956000",\n        "900689.89000000",\n        1528520399999,\n        "261389.56835990",\n        284,\n        "709459.04000000",\n        "205962.79613790",\n        "0"\n    ],\n    [\n        1528520400000,\n        "0.28985000",\n        "0.29075000",\n        "0.28800000",\n        "0.28846000",\n        "551638.32000000",\n        1528523999999,\n        "159376.22962100",\n        232,\n        "262015.89000000",\n        "75720.35746830",\n        "0"\n    ],\n    [\n        1528524000000,\n        "0.28845000",\n        "0.29098000",\n        "0.28766000",\n        "0.28815000",\n        "721330.38000000",\n        1528527599999,\n        "208323.14726830",\n        398,\n        "263643.55000000",\n        "76178.21046540",\n        "0"\n    ],\n    [\n        1528527600000,\n        "0.28839000",\n        "0.29100000",\n        "0.28666000",\n        "0.28739000",\n        "489207.50000000",\n        1528531199999,\n        "140806.01735580",\n        336,\n        "334147.78000000",\n        "96216.72432580",\n        "0"\n    ],\n    [\n        1528531200000,\n        "0.28738000",\n        "0.28779000",\n        "0.28602000",\n        "0.28614000",\n        "297526.58000000",\n        1528534799999,\n        "85447.32005850",\n        223,\n        "206688.76000000",\n        "59385.34834760",\n        "0"\n    ],\n    [\n        1528534800000,\n        "0.28613000",\n        "0.28734000",\n        "0.28600000",\n        "0.28733000",\n        "621937.98000000",\n        1528538399999,\n        "178387.13445690",\n        264,\n        "355899.03000000",\n        "102149.15126320",\n        "0"\n    ],\n    [\n        1528538400000,\n        "0.28711000",\n        "0.28731000",\n        "0.28601000",\n        "0.28702000",\n        "1024775.20000000",\n        1528541999999,\n        "294139.79147470",\n        351,\n        "791117.24000000",\n        "227077.61096560",\n        "0"\n    ],\n    [\n        1528542000000,\n        "0.28715000",\n        "0.28718000",\n        "0.28510000",\n        "0.28652000",\n        "776174.03000000",\n        1528545599999,\n        "222450.12250920",\n        342,\n        "485903.84000000",\n        "139344.38949670",\n        "0"\n    ],\n    [\n        1528545600000,\n        "0.28646000",\n        "0.28654000",\n        "0.28450000",\n        "0.28501000",\n        "858316.64000000",\n        1528549199999,\n        "245001.31520960",\n        368,\n        "503313.54000000",\n        "143748.99732490",\n        "0"\n    ],\n    [\n        1528549200000,\n        "0.28500000",\n        "0.28576000",\n        "0.28400000",\n        "0.28454000",\n        "1035526.77000000",\n        1528552799999,\n        "294789.57675240",\n        503,\n        "506302.27000000",\n        "144165.42643770",\n        "0"\n    ],\n    [\n        1528552800000,\n        "0.28472000",\n        "0.28654000",\n        "0.28452000",\n        "0.28640000",\n        "977447.75000000",\n        1528556399999,\n        "279007.40146340",\n        359,\n        "725409.14000000",\n        "207104.54302110",\n        "0"\n    ],\n    [\n        1528556400000,\n        "0.28636000",\n        "0.28725000",\n        "0.28495000",\n        "0.28579000",\n        "838702.97000000",\n        1528559999999,\n        "239866.31453360",\n        328,\n        "391383.15000000",\n        "111931.80863890",\n        "0"\n    ],\n    [\n        1528560000000,\n        "0.28579000",\n        "0.28630000",\n        "0.28350000",\n        "0.28350000",\n        "580903.13000000",\n        1528563599999,\n        "165290.44784870",\n        371,\n        "421020.75000000",\n        "119817.77783260",\n        "0"\n    ],\n    [\n        1528563600000,\n        "0.28351000",\n        "0.28401000",\n        "0.28206000",\n        "0.28247000",\n        "1097378.28000000",\n        1528567199999,\n        "310283.70456250",\n        483,\n        "669983.80000000",\n        "189502.10140840",\n        "0"\n    ],\n    [\n        1528567200000,\n        "0.28260000",\n        "0.28261000",\n        "0.28118000",\n        "0.28190000",\n        "1148808.79000000",\n        1528570799999,\n        "324169.88608550",\n        430,\n        "892102.55000000",\n        "251739.70291680",\n        "0"\n    ],\n    [\n        1528570800000,\n        "0.28241000",\n        "0.28549000",\n        "0.28100000",\n        "0.28319000",\n        "645104.67000000",\n        1528574399999,\n        "182012.17277160",\n        262,\n        "294928.75000000",\n        "83301.27094960",\n        "0"\n    ],\n    [\n        1528574400000,\n        "0.28229000",\n        "0.28429000",\n        "0.28223000",\n        "0.28394000",\n        "370888.74000000",\n        1528577999999,\n        "104855.36955560",\n        143,\n        "182914.03000000",\n        "51750.44093410",\n        "0"\n    ],\n    [\n        1528578000000,\n        "0.28349000",\n        "0.28363000",\n        "0.28242000",\n        "0.28248000",\n        "1080502.85000000",\n        1528581599999,\n        "305411.61957380",\n        330,\n        "415395.71000000",\n        "117490.79520250",\n        "0"\n    ],\n    [\n        1528581600000,\n        "0.28247000",\n        "0.28302000",\n        "0.28120000",\n        "0.28126000",\n        "597722.37000000",\n        1528585199999,\n        "168479.96587730",\n        276,\n        "279674.83000000",\n        "78844.80215610",\n        "0"\n    ],\n    [\n        1528585200000,\n        "0.28126000",\n        "0.28259000",\n        "0.27777000",\n        "0.28027000",\n        "963048.03000000",\n        1528588799999,\n        "270478.45985530",\n        570,\n        "320872.46000000",\n        "90151.73661650",\n        "0"\n    ],\n    [\n        1528588800000,\n        "0.28027000",\n        "0.28027000",\n        "0.26974000",\n        "0.26976000",\n        "1083102.51000000",\n        1528592399999,\n        "297714.12755390",\n        930,\n        "546846.19000000",\n        "150682.09741080",\n        "0"\n    ],\n    [\n        1528592400000,\n        "0.27073000",\n        "0.28700000",\n        "0.26971000",\n        "0.27187000",\n        "1368107.25000000",\n        1528595999999,\n        "373579.13173870",\n        811,\n        "991477.60000000",\n        "271336.06730920",\n        "0"\n    ],\n    [\n        1528596000000,\n        "0.27273000",\n        "0.27273000",\n        "0.26917000",\n        "0.27021000",\n        "496515.39000000",\n        1528599599999,\n        "134430.02646380",\n        351,\n        "299109.41000000",\n        "81021.49899740",\n        "0"\n    ],\n    [\n        1528599600000,\n        "0.27085000",\n        "0.27190000",\n        "0.26745000",\n        "0.26858000",\n        "755571.53000000",\n        1528603199999,\n        "204096.51131440",\n        418,\n        "578962.76000000",\n        "156581.28366750",\n        "0"\n    ],\n    [\n        1528603200000,\n        "0.26780000",\n        "0.27050000",\n        "0.26710000",\n        "0.26710000",\n        "489810.30000000",\n        1528606799999,\n        "131750.28059090",\n        252,\n        "188272.53000000",\n        "50686.90833680",\n        "0"\n    ],\n    [\n        1528606800000,\n        "0.26732000",\n        "0.26913000",\n        "0.26726000",\n        "0.26793000",\n        "1213405.82000000",\n        1528610399999,\n        "325495.72984250",\n        425,\n        "987178.39000000",\n        "264911.29293940",\n        "0"\n    ],\n    [\n        1528610400000,\n        "0.26794000",\n        "0.26875000",\n        "0.26646000",\n        "0.26789000",\n        "837478.57000000",\n        1528613999999,\n        "224286.43076550",\n        383,\n        "416024.72000000",\n        "111447.18796000",\n        "0"\n    ],\n    [\n        1528614000000,\n        "0.26789000",\n        "0.26820000",\n        "0.26171000",\n        "0.26323000",\n        "995252.59000000",\n        1528617599999,\n        "264037.82242930",\n        633,\n        "377123.37000000",\n        "100233.10404910",\n        "0"\n    ],\n    [\n        1528617600000,\n        "0.26219000",\n        "0.26379000",\n        "0.25912000",\n        "0.26071000",\n        "1166987.95000000",\n        1528621199999,\n        "304058.98194930",\n        608,\n        "823244.63000000",\n        "214453.24824650",\n        "0"\n    ],\n    [\n        1528621200000,\n        "0.26053000",\n        "0.26418000",\n        "0.26000000",\n        "0.26386000",\n        "315294.91000000",\n        1528624799999,\n        "82608.95640180",\n        220,\n        "191061.63000000",\n        "50027.43302520",\n        "0"\n    ],\n    [\n        1528624800000,\n        "0.26381000",\n        "0.26500000",\n        "0.26229000",\n        "0.26420000",\n        "488913.62000000",\n        1528628399999,\n        "128835.97975950",\n        248,\n        "393829.48000000",\n        "103783.57858500",\n        "0"\n    ],\n    [\n        1528628400000,\n        "0.26499000",\n        "0.26589000",\n        "0.26378000",\n        "0.26533000",\n        "687590.22000000",\n        1528631999999,\n        "182179.99017120",\n        310,\n        "422343.83000000",\n        "111922.79516050",\n        "0"\n    ],\n    [\n        1528632000000,\n        "0.26523000",\n        "0.26743000",\n        "0.26511000",\n        "0.26511000",\n        "800654.37000000",\n        1528635599999,\n        "213071.43910610",\n        369,\n        "523172.81000000",\n        "139247.46115090",\n        "0"\n    ],\n    [\n        1528635600000,\n        "0.26519000",\n        "0.26731000",\n        "0.26282000",\n        "0.26520000",\n        "739334.48000000",\n        1528639199999,\n        "195677.83366740",\n        398,\n        "358576.56000000",\n        "94894.87223980",\n        "0"\n    ],\n    [\n        1528639200000,\n        "0.26521000",\n        "0.26541000",\n        "0.26263000",\n        "0.26460000",\n        "406271.83000000",\n        1528642799999,\n        "107580.45123070",\n        201,\n        "290182.02000000",\n        "76860.77315460",\n        "0"\n    ],\n    [\n        1528642800000,\n        "0.26429000",\n        "0.26508000",\n        "0.26180000",\n        "0.26337000",\n        "630439.31000000",\n        1528646399999,\n        "165736.01991970",\n        322,\n        "374337.09000000",\n        "98480.14241090",\n        "0"\n    ],\n    [\n        1528646400000,\n        "0.26271000",\n        "0.26309000",\n        "0.25852000",\n        "0.26092000",\n        "599451.68000000",\n        1528649999999,\n        "157016.67920620",\n        343,\n        "330678.49000000",\n        "86710.94930930",\n        "0"\n    ],\n    [\n        1528650000000,\n        "0.26063000",\n        "0.26115000",\n        "0.24028000",\n        "0.24512000",\n        "1628544.29000000",\n        1528653599999,\n        "406582.27455180",\n        1258,\n        "690068.28000000",\n        "172455.61582730",\n        "0"\n    ],\n    [\n        1528653600000,\n        "0.24330000",\n        "0.24826000",\n        "0.24031000",\n        "0.24825000",\n        "1411688.06000000",\n        1528657199999,\n        "345182.58555910",\n        1046,\n        "800530.67000000",\n        "195657.60075660",\n        "0"\n    ],\n    [\n        1528657200000,\n        "0.24766000",\n        "0.25215000",\n        "0.24494000",\n        "0.25214000",\n        "963858.80000000",\n        1528660799999,\n        "239717.60562570",\n        597,\n        "480881.49000000",\n        "119850.57295940",\n        "0"\n    ],\n    [\n        1528660800000,\n        "0.25214000",\n        "0.25214000",\n        "0.24388000",\n        "0.24390000",\n        "788217.71000000",\n        1528664399999,\n        "195992.57620150",\n        535,\n        "400166.88000000",\n        "99704.21225490",\n        "0"\n    ],\n    [\n        1528664400000,\n        "0.24433000",\n        "0.24586000",\n        "0.23681000",\n        "0.24208000",\n        "906371.63000000",\n        1528667999999,\n        "219102.70307950",\n        764,\n        "482895.88000000",\n        "116836.24414500",\n        "0"\n    ],\n    [\n        1528668000000,\n        "0.24208000",\n        "0.24369000",\n        "0.23681000",\n        "0.23847000",\n        "1077800.24000000",\n        1528671599999,\n        "258478.92424850",\n        611,\n        "656312.32000000",\n        "157524.14840250",\n        "0"\n    ],\n    [\n        1528671600000,\n        "0.23838000",\n        "0.24507000",\n        "0.23698000",\n        "0.24402000",\n        "688592.36000000",\n        1528675199999,\n        "165851.54180110",\n        426,\n        "473419.42000000",\n        "113918.00889810",\n        "0"\n    ],\n    [\n        1528675200000,\n        "0.24472000",\n        "0.24500000",\n        "0.23945000",\n        "0.24139000",\n        "857645.76000000",\n        1528678799999,\n        "207388.61715400",\n        484,\n        "423387.63000000",\n        "102293.66545370",\n        "0"\n    ],\n    [\n        1528678800000,\n        "0.24108000",\n        "0.24389000",\n        "0.23995000",\n        "0.24388000",\n        "521776.59000000",\n        1528682399999,\n        "126264.99791100",\n        351,\n        "333081.18000000",\n        "80589.71163020",\n        "0"\n    ],\n    [\n        1528682400000,\n        "0.24388000",\n        "0.24932000",\n        "0.24266000",\n        "0.24701000",\n        "719311.42000000",\n        1528685999999,\n        "177440.91628090",\n        583,\n        "463713.77000000",\n        "114496.34172050",\n        "0"\n    ],\n    [\n        1528686000000,\n        "0.24746000",\n        "0.24834000",\n        "0.24610000",\n        "0.24816000",\n        "314304.78000000",\n        1528689599999,\n        "77759.58174980",\n        194,\n        "248721.44000000",\n        "61542.71981780",\n        "0"\n    ],\n    [\n        1528689600000,\n        "0.24816000",\n        "0.24906000",\n        "0.24554000",\n        "0.24831000",\n        "528608.55000000",\n        1528693199999,\n        "130516.68559670",\n        273,\n        "271953.34000000",\n        "67221.51314400",\n        "0"\n    ],\n    [\n        1528693200000,\n        "0.24829000",\n        "0.25021000",\n        "0.24621000",\n        "0.24621000",\n        "400194.12000000",\n        1528696799999,\n        "99286.48120440",\n        216,\n        "170647.53000000",\n        "42373.07718500",\n        "0"\n    ],\n    [\n        1528696800000,\n        "0.24670000",\n        "0.24783000",\n        "0.24450000",\n        "0.24735000",\n        "394183.51000000",\n        1528700399999,\n        "97033.51818780",\n        201,\n        "220477.89000000",\n        "54343.11826730",\n        "0"\n    ],\n    [\n        1528700400000,\n        "0.24668000",\n        "0.24800000",\n        "0.24090000",\n        "0.24098000",\n        "465908.67000000",\n        1528703999999,\n        "114344.81511510",\n        312,\n        "240878.62000000",\n        "59123.75730820",\n        "0"\n    ],\n    [\n        1528704000000,\n        "0.24098000",\n        "0.25020000",\n        "0.24070000",\n        "0.24809000",\n        "402434.90000000",\n        1528707599999,\n        "99020.37293790",\n        279,\n        "233673.63000000",\n        "57392.28110180",\n        "0"\n    ],\n    [\n        1528707600000,\n        "0.24938000",\n        "0.24964000",\n        "0.24623000",\n        "0.24896000",\n        "504709.39000000",\n        1528711199999,\n        "124955.16863630",\n        279,\n        "233489.44000000",\n        "57859.33734850",\n        "0"\n    ],\n    [\n        1528711200000,\n        "0.24847000",\n        "0.24914000",\n        "0.24414000",\n        "0.24530000",\n        "388770.73000000",\n        1528714799999,\n        "96000.28315500",\n        271,\n        "207818.31000000",\n        "51333.99325770",\n        "0"\n    ],\n    [\n        1528714800000,\n        "0.24582000",\n        "0.24600000",\n        "0.24363000",\n        "0.24600000",\n        "443926.59000000",\n        1528718399999,\n        "108754.45915800",\n        252,\n        "192873.05000000",\n        "47283.17974030",\n        "0"\n    ],\n    [\n        1528718400000,\n        "0.24541000",\n        "0.24596000",\n        "0.24329000",\n        "0.24446000",\n        "582454.09000000",\n        1528721999999,\n        "142520.94321790",\n        306,\n        "239287.91000000",\n        "58591.86206290",\n        "0"\n    ],\n    [\n        1528722000000,\n        "0.24359000",\n        "0.24562000",\n        "0.24056000",\n        "0.24239000",\n        "483372.08000000",\n        1528725599999,\n        "117616.00866110",\n        308,\n        "232816.07000000",\n        "56785.60722520",\n        "0"\n    ],\n    [\n        1528725600000,\n        "0.24315000",\n        "0.24316000",\n        "0.23875000",\n        "0.23907000",\n        "955456.44000000",\n        1528729199999,\n        "229642.75165600",\n        712,\n        "549654.23000000",\n        "132119.60127070",\n        "0"\n    ],\n    [\n        1528729200000,\n        "0.23906000",\n        "0.23983000",\n        "0.23492000",\n        "0.23499000",\n        "1576056.29000000",\n        1528732799999,\n        "372816.19545570",\n        808,\n        "1045693.61000000",\n        "247147.55087410",\n        "0"\n    ],\n    [\n        1528732800000,\n        "0.23500000",\n        "0.24013000",\n        "0.23453000",\n        "0.23914000",\n        "903051.82000000",\n        1528736399999,\n        "215089.44309910",\n        551,\n        "558205.07000000",\n        "132748.60355940",\n        "0"\n    ],\n    [\n        1528736400000,\n        "0.23914000",\n        "0.24092000",\n        "0.23731000",\n        "0.23892000",\n        "711679.50000000",\n        1528739999999,\n        "169931.74518220",\n        470,\n        "460418.48000000",\n        "109924.23137640",\n        "0"\n    ],\n    [\n        1528740000000,\n        "0.23863000",\n        "0.23972000",\n        "0.23377000",\n        "0.23878000",\n        "860364.76000000",\n        1528743599999,\n        "204240.63913950",\n        508,\n        "469807.90000000",\n        "111652.96932730",\n        "0"\n    ],\n    [\n        1528743600000,\n        "0.23893000",\n        "0.24092000",\n        "0.23786000",\n        "0.23931000",\n        "393704.19000000",\n        1528747199999,\n        "94351.15904320",\n        312,\n        "224025.79000000",\n        "53737.23006800",\n        "0"\n    ],\n    [\n        1528747200000,\n        "0.23929000",\n        "0.24212000",\n        "0.23848000",\n        "0.23985000",\n        "438444.39000000",\n        1528750799999,\n        "104867.29650430",\n        220,\n        "239335.18000000",\n        "57313.86869830",\n        "0"\n    ],\n    [\n        1528750800000,\n        "0.23965000",\n        "0.24337000",\n        "0.23946000",\n        "0.24118000",\n        "890695.09000000",\n        1528754399999,\n        "213985.94334770",\n        349,\n        "386275.50000000",\n        "92909.15153030",\n        "0"\n    ],\n    [\n        1528754400000,\n        "0.24128000",\n        "0.24550000",\n        "0.24121000",\n        "0.24539000",\n        "777364.29000000",\n        1528757999999,\n        "189423.34417140",\n        432,\n        "386582.43000000",\n        "94165.65761140",\n        "0"\n    ],\n    [\n        1528758000000,\n        "0.24538000",\n        "0.25800000",\n        "0.24518000",\n        "0.25332000",\n        "1135929.92000000",\n        1528761599999,\n        "284151.56275260",\n        860,\n        "668633.33000000",\n        "167774.99568030",\n        "0"\n    ],\n    [\n        1528761600000,\n        "0.25329000",\n        "0.25332000",\n        "0.24881000",\n        "0.25049000",\n        "912389.91000000",\n        1528765199999,\n        "228243.77850450",\n        648,\n        "380585.69000000",\n        "95329.27507520",\n        "0"\n    ],\n    [\n        1528765200000,\n        "0.25025000",\n        "0.25091000",\n        "0.24725000",\n        "0.24811000",\n        "874441.17000000",\n        1528768799999,\n        "218469.08183020",\n        438,\n        "581492.05000000",\n        "145456.64636400",\n        "0"\n    ],\n    [\n        1528768800000,\n        "0.24835000",\n        "0.25157000",\n        "0.24811000",\n        "0.25059000",\n        "682677.80000000",\n        1528772399999,\n        "170917.66005810",\n        379,\n        "405341.78000000",\n        "101527.60597220",\n        "0"\n    ],\n    [\n        1528772400000,\n        "0.25010000",\n        "0.25057000",\n        "0.24610000",\n        "0.24639000",\n        "469551.53000000",\n        1528775999999,\n        "116475.86422360",\n        296,\n        "169203.09000000",\n        "42003.68007760",\n        "0"\n    ],\n    [\n        1528776000000,\n        "0.24708000",\n        "0.24897000",\n        "0.24417000",\n        "0.24722000",\n        "494927.06000000",\n        1528779599999,\n        "122237.64115040",\n        317,\n        "220906.35000000",\n        "54538.64001920",\n        "0"\n    ],\n    [\n        1528779600000,\n        "0.24765000",\n        "0.24893000",\n        "0.24600000",\n        "0.24869000",\n        "725588.34000000",\n        1528783199999,\n        "179536.09889990",\n        264,\n        "244621.02000000",\n        "60620.98240050",\n        "0"\n    ],\n    [\n        1528783200000,\n        "0.24846000",\n        "0.24942000",\n        "0.24750000",\n        "0.24879000",\n        "408573.85000000",\n        1528786799999,\n        "101619.92139730",\n        206,\n        "221895.13000000",\n        "55204.36976600",\n        "0"\n    ],\n    [\n        1528786800000,\n        "0.24880000",\n        "0.24905000",\n        "0.24604000",\n        "0.24779000",\n        "513943.10000000",\n        1528790399999,\n        "127436.53839810",\n        237,\n        "362810.60000000",\n        "89953.27513960",\n        "0"\n    ],\n    [\n        1528790400000,\n        "0.24848000",\n        "0.24942000",\n        "0.24617000",\n        "0.24824000",\n        "648101.35000000",\n        1528793999999,\n        "160746.57038740",\n        337,\n        "509324.48000000",\n        "126366.82713740",\n        "0"\n    ],\n    [\n        1528794000000,\n        "0.24824000",\n        "0.24921000",\n        "0.24460000",\n        "0.24757000",\n        "551979.59000000",\n        1528797599999,\n        "136431.04521120",\n        246,\n        "333615.90000000",\n        "82643.36599170",\n        "0"\n    ],\n    [\n        1528797600000,\n        "0.24731000",\n        "0.24828000",\n        "0.24607000",\n        "0.24707000",\n        "325133.31000000",\n        1528801199999,\n        "80318.38491240",\n        198,\n        "148193.39000000",\n        "36657.15694820",\n        "0"\n    ],\n    [\n        1528801200000,\n        "0.24666000",\n        "0.24822000",\n        "0.24659000",\n        "0.24726000",\n        "778777.75000000",\n        1528804799999,\n        "192407.68461750",\n        277,\n        "383039.30000000",\n        "94687.20707240",\n        "0"\n    ],\n    [\n        1528804800000,\n        "0.24726000",\n        "0.24749000",\n        "0.23960000",\n        "0.24000000",\n        "750345.09000000",\n        1528808399999,\n        "184013.54348910",\n        511,\n        "327438.55000000",\n        "80471.78371320",\n        "0"\n    ],\n    [\n        1528808400000,\n        "0.23960000",\n        "0.24081000",\n        "0.23493000",\n        "0.23946000",\n        "944862.23000000",\n        1528811999999,\n        "225329.88288300",\n        545,\n        "460441.12000000",\n        "109809.38688460",\n        "0"\n    ],\n    [\n        1528812000000,\n        "0.23867000",\n        "0.24106000",\n        "0.23822000",\n        "0.23996000",\n        "564548.78000000",\n        1528815599999,\n        "135341.11028200",\n        373,\n        "363285.96000000",\n        "87141.23161640",\n        "0"\n    ],\n    [\n        1528815600000,\n        "0.23996000",\n        "0.24100000",\n        "0.23883000",\n        "0.24054000",\n        "486725.15000000",\n        1528819199999,\n        "116910.06431760",\n        238,\n        "384567.82000000",\n        "92437.52574050",\n        "0"\n    ],\n    [\n        1528819200000,\n        "0.24003000",\n        "0.24096000",\n        "0.23672000",\n        "0.23841000",\n        "507769.98000000",\n        1528822799999,\n        "121293.80165440",\n        279,\n        "372686.94000000",\n        "89112.35666090",\n        "0"\n    ],\n    [\n        1528822800000,\n        "0.23943000",\n        "0.23943000",\n        "0.23694000",\n        "0.23700000",\n        "511079.64000000",\n        1528826399999,\n        "121698.39652020",\n        239,\n        "303380.03000000",\n        "72224.57379860",\n        "0"\n    ],\n    [\n        1528826400000,\n        "0.23758000",\n        "0.23788000",\n        "0.23316000",\n        "0.23476000",\n        "777826.28000000",\n        1528829999999,\n        "183201.92172340",\n        536,\n        "505394.41000000",\n        "119229.64527570",\n        "0"\n    ],\n    [\n        1528830000000,\n        "0.23377000",\n        "0.23455000",\n        "0.21300000",\n        "0.22686000",\n        "2077149.81000000",\n        1528833599999,\n        "468898.21852760",\n        1125,\n        "864254.98000000",\n        "195922.53164080",\n        "0"\n    ],\n    [\n        1528833600000,\n        "0.22530000",\n        "0.23369000",\n        "0.22500000",\n        "0.22529000",\n        "869137.79000000",\n        1528837199999,\n        "197432.83764830",\n        539,\n        "490662.52000000",\n        "111707.78602770",\n        "0"\n    ],\n    [\n        1528837200000,\n        "0.22553000",\n        "0.22718000",\n        "0.22500000",\n        "0.22646000",\n        "691631.12000000",\n        1528840799999,\n        "156418.96474010",\n        351,\n        "473793.80000000",\n        "107261.11676340",\n        "0"\n    ],\n    [\n        1528840800000,\n        "0.22673000",\n        "0.22764000",\n        "0.22557000",\n        "0.22693000",\n        "754898.04000000",\n        1528844399999,\n        "171208.08229000",\n        331,\n        "489581.02000000",\n        "111054.45769390",\n        "0"\n    ],\n    [\n        1528844400000,\n        "0.22722000",\n        "0.22862000",\n        "0.22282000",\n        "0.22717000",\n        "808931.93000000",\n        1528847999999,\n        "182362.08319310",\n        577,\n        "487322.86000000",\n        "109880.48126520",\n        "0"\n    ],\n    [\n        1528848000000,\n        "0.22622000",\n        "0.22949000",\n        "0.22622000",\n        "0.22900000",\n        "686240.26000000",\n        1528851599999,\n        "156902.83132130",\n        341,\n        "489551.90000000",\n        "111982.79707360",\n        "0"\n    ],\n    [\n        1528851600000,\n        "0.22781000",\n        "0.23056000",\n        "0.22767000",\n        "0.22890000",\n        "704044.98000000",\n        1528855199999,\n        "161176.16020920",\n        311,\n        "444252.21000000",\n        "101788.74880780",\n        "0"\n    ],\n    [\n        1528855200000,\n        "0.22891000",\n        "0.23056000",\n        "0.22850000",\n        "0.22880000",\n        "653934.17000000",\n        1528858799999,\n        "149832.74569300",\n        265,\n        "312322.50000000",\n        "71610.63367990",\n        "0"\n    ],\n    [\n        1528858800000,\n        "0.22903000",\n        "0.22983000",\n        "0.22622000",\n        "0.22806000",\n        "749700.04000000",\n        1528862399999,\n        "170981.25351290",\n        356,\n        "433068.27000000",\n        "98838.48383350",\n        "0"\n    ],\n    [\n        1528862400000,\n        "0.22787000",\n        "0.22793000",\n        "0.22538000",\n        "0.22787000",\n        "397252.89000000",\n        1528865999999,\n        "90116.74740790",\n        226,\n        "233891.32000000",\n        "53126.11021100",\n        "0"\n    ],\n    [\n        1528866000000,\n        "0.22788000",\n        "0.22956000",\n        "0.22715000",\n        "0.22766000",\n        "570815.17000000",\n        1528869599999,\n        "130149.02815530",\n        255,\n        "333901.75000000",\n        "76166.39589330",\n        "0"\n    ],\n    [\n        1528869600000,\n        "0.22785000",\n        "0.22956000",\n        "0.22760000",\n        "0.22833000",\n        "613168.40000000",\n        1528873199999,\n        "139896.72581630",\n        290,\n        "290356.52000000",\n        "66300.53086430",\n        "0"\n    ],\n    [\n        1528873200000,\n        "0.22856000",\n        "0.23000000",\n        "0.22750000",\n        "0.22797000",\n        "328073.79000000",\n        1528876799999,\n        "75044.58272290",\n        179,\n        "214907.69000000",\n        "49163.62427600",\n        "0"\n    ],\n    [\n        1528876800000,\n        "0.22773000",\n        "0.22797000",\n        "0.22441000",\n        "0.22537000",\n        "581053.70000000",\n        1528880399999,\n        "131520.20389900",\n        287,\n        "440144.18000000",\n        "99689.54850340",\n        "0"\n    ],\n    [\n        1528880400000,\n        "0.22537000",\n        "0.22537000",\n        "0.21500000",\n        "0.21502000",\n        "967990.55000000",\n        1528883999999,\n        "214331.06924080",\n        774,\n        "469212.27000000",\n        "103979.99930780",\n        "0"\n    ],\n    [\n        1528884000000,\n        "0.21511000",\n        "0.22149000",\n        "0.21501000",\n        "0.21675000",\n        "1275108.17000000",\n        1528887599999,\n        "278221.12745990",\n        745,\n        "807188.31000000",\n        "176314.17265600",\n        "0"\n    ],\n    [\n        1528887600000,\n        "0.21679000",\n        "0.22335000",\n        "0.21671000",\n        "0.22114000",\n        "711231.73000000",\n        1528891199999,\n        "156743.36513120",\n        622,\n        "325648.59000000",\n        "71791.73428960",\n        "0"\n    ],\n    [\n        1528891200000,\n        "0.22121000",\n        "0.22181000",\n        "0.21862000",\n        "0.22143000",\n        "1010715.15000000",\n        1528894799999,\n        "222983.68862350",\n        524,\n        "372923.76000000",\n        "82323.70341910",\n        "0"\n    ],\n    [\n        1528894800000,\n        "0.22111000",\n        "0.22267000",\n        "0.21933000",\n        "0.21965000",\n        "596134.07000000",\n        1528898399999,\n        "132046.67461740",\n        397,\n        "382204.52000000",\n        "84651.20180820",\n        "0"\n    ],\n    [\n        1528898400000,\n        "0.22075000",\n        "0.22075000",\n        "0.21000000",\n        "0.21498000",\n        "1270407.85000000",\n        1528901999999,\n        "274943.38354970",\n        679,\n        "490199.45000000",\n        "106382.09988290",\n        "0"\n    ],\n    [\n        1528902000000,\n        "0.21495000",\n        "0.21718000",\n        "0.21311000",\n        "0.21334000",\n        "1119492.01000000",\n        1528905599999,\n        "241167.00487300",\n        666,\n        "507869.46000000",\n        "109250.43772650",\n        "0"\n    ],\n    [\n        1528905600000,\n        "0.21334000",\n        "0.21604000",\n        "0.20331000",\n        "0.21394000",\n        "1676569.86000000",\n        1528909199999,\n        "354457.84835950",\n        1360,\n        "696641.95000000",\n        "147244.31492140",\n        "0"\n    ],\n    [\n        1528909200000,\n        "0.21357000",\n        "0.21927000",\n        "0.20969000",\n        "0.21634000",\n        "903013.56000000",\n        1528912799999,\n        "192519.38124990",\n        500,\n        "605832.90000000",\n        "129360.18004190",\n        "0"\n    ],\n    [\n        1528912800000,\n        "0.21696000",\n        "0.22279000",\n        "0.21558000",\n        "0.21836000",\n        "739400.19000000",\n        1528916399999,\n        "162426.74973460",\n        574,\n        "403918.57000000",\n        "88853.32973350",\n        "0"\n    ],\n    [\n        1528916400000,\n        "0.21850000",\n        "0.22035000",\n        "0.21499000",\n        "0.21954000",\n        "536928.66000000",\n        1528919999999,\n        "116376.81394900",\n        431,\n        "269044.53000000",\n        "58345.84182600",\n        "0"\n    ],\n    [\n        1528920000000,\n        "0.21954000",\n        "0.22021000",\n        "0.21510000",\n        "0.21769000",\n        "525197.29000000",\n        1528923599999,\n        "114321.61133170",\n        370,\n        "322136.10000000",\n        "70188.43327170",\n        "0"\n    ],\n    [\n        1528923600000,\n        "0.21819000",\n        "0.21883000",\n        "0.21525000",\n        "0.21581000",\n        "691322.99000000",\n        1528927199999,\n        "150035.25370400",\n        350,\n        "371939.16000000",\n        "80704.27664220",\n        "0"\n    ],\n    [\n        1528927200000,\n        "0.21597000",\n        "0.22085000",\n        "0.21597000",\n        "0.21937000",\n        "1011998.85000000",\n        1528930799999,\n        "221078.97606260",\n        513,\n        "405684.22000000",\n        "88531.69992540",\n        "0"\n    ],\n    [\n        1528930800000,\n        "0.21963000",\n        "0.22030000",\n        "0.21691000",\n        "0.21839000",\n        "586719.18000000",\n        1528934399999,\n        "128513.11447640",\n        315,\n        "370521.86000000",\n        "81161.50804180",\n        "0"\n    ],\n    [\n        1528934400000,\n        "0.21840000",\n        "0.22104000",\n        "0.21691000",\n        "0.21899000",\n        "551406.58000000",\n        1528937999999,\n        "120965.07381300",\n        285,\n        "290305.87000000",\n        "63792.35247680",\n        "0"\n    ],\n    [\n        1528938000000,\n        "0.21899000",\n        "0.22039000",\n        "0.21641000",\n        "0.21739000",\n        "839518.46000000",\n        1528941599999,\n        "183325.13634590",\n        369,\n        "528874.79000000",\n        "115366.81895900",\n        "0"\n    ],\n    [\n        1528941600000,\n        "0.21739000",\n        "0.23136000",\n        "0.21728000",\n        "0.22926000",\n        "1386590.26000000",\n        1528945199999,\n        "314662.02636090",\n        877,\n        "558793.10000000",\n        "126327.98195270",\n        "0"\n    ],\n    [\n        1528945200000,\n        "0.22926000",\n        "0.23024000",\n        "0.22657000",\n        "0.22979000",\n        "898245.02000000",\n        1528948799999,\n        "205771.22437410",\n        550,\n        "380198.16000000",\n        "87083.88114930",\n        "0"\n    ],\n    [\n        1528948800000,\n        "0.22973000",\n        "0.23080000",\n        "0.22700000",\n        "0.22702000",\n        "909620.77000000",\n        1528952399999,\n        "207409.48408790",\n        357,\n        "621182.56000000",\n        "141678.10963370",\n        "0"\n    ],\n    [\n        1528952400000,\n        "0.22730000",\n        "0.22768000",\n        "0.22269000",\n        "0.22699000",\n        "528563.27000000",\n        1528955999999,\n        "119322.48928640",\n        386,\n        "361002.94000000",\n        "81541.79891720",\n        "0"\n    ],\n    [\n        1528956000000,\n        "0.22700000",\n        "0.22961000",\n        "0.22668000",\n        "0.22899000",\n        "959726.21000000",\n        1528959599999,\n        "218857.79112840",\n        408,\n        "460636.50000000",\n        "105075.91791900",\n        "0"\n    ],\n    [\n        1528959600000,\n        "0.22926000",\n        "0.23000000",\n        "0.22700000",\n        "0.22816000",\n        "658637.66000000",\n        1528963199999,\n        "150468.41564110",\n        306,\n        "452309.70000000",\n        "103404.02574340",\n        "0"\n    ],\n    [\n        1528963200000,\n        "0.22832000",\n        "0.23217000",\n        "0.22815000",\n        "0.23217000",\n        "799699.44000000",\n        1528966799999,\n        "184327.07392280",\n        432,\n        "498855.68000000",\n        "115141.76893430",\n        "0"\n    ],\n    [\n        1528966800000,\n        "0.23218000",\n        "0.23440000",\n        "0.23103000",\n        "0.23438000",\n        "808770.09000000",\n        1528970399999,\n        "187981.19037920",\n        381,\n        "469248.80000000",\n        "109186.10320870",\n        "0"\n    ],\n    [\n        1528970400000,\n        "0.23439000",\n        "0.23656000",\n        "0.23170000",\n        "0.23325000",\n        "609000.30000000",\n        1528973999999,\n        "142208.13081570",\n        426,\n        "318648.68000000",\n        "74356.33087230",\n        "0"\n    ],\n    [\n        1528974000000,\n        "0.23320000",\n        "0.23549000",\n        "0.23215000",\n        "0.23450000",\n        "592240.78000000",\n        1528977599999,\n        "138558.67249010",\n        279,\n        "406218.57000000",\n        "95051.64183500",\n        "0"\n    ],\n    [\n        1528977600000,\n        "0.23451000",\n        "0.23520000",\n        "0.23100000",\n        "0.23278000",\n        "610461.70000000",\n        1528981199999,\n        "142071.68199470",\n        351,\n        "309770.62000000",\n        "72130.73504290",\n        "0"\n    ],\n    [\n        1528981200000,\n        "0.23189000",\n        "0.23210000",\n        "0.22616000",\n        "0.22681000",\n        "1257907.41000000",\n        1528984799999,\n        "288250.23773430",\n        692,\n        "785877.45000000",\n        "180291.23316890",\n        "0"\n    ],\n    [\n        1528984800000,\n        "0.22680000",\n        "0.22801000",\n        "0.22620000",\n        "0.22702000",\n        "1157615.62000000",\n        1528988399999,\n        "263322.62303590",\n        474,\n        "816721.04000000",\n        "185862.62640520",\n        "0"\n    ],\n    [\n        1528988400000,\n        "0.22701000",\n        "0.22779000",\n        "0.22061000",\n        "0.22150000",\n        "979233.84000000",\n        1528991999999,\n        "220280.99412560",\n        818,\n        "576121.43000000",\n        "129369.77505520",\n        "0"\n    ],\n    [\n        1528992000000,\n        "0.22150000",\n        "0.23380000",\n        "0.22117000",\n        "0.23279000",\n        "751211.35000000",\n        1528995599999,\n        "170044.82820420",\n        734,\n        "448942.90000000",\n        "101726.62017640",\n        "0"\n    ],\n    [\n        1528995600000,\n        "0.23279000",\n        "0.24000000",\n        "0.23240000",\n        "0.23759000",\n        "1853282.48000000",\n        1528999199999,\n        "438588.52812350",\n        1366,\n        "1002135.43000000",\n        "237233.97222420",\n        "0"\n    ],\n    [\n        1528999200000,\n        "0.23656000",\n        "0.24188000",\n        "0.23655000",\n        "0.24000000",\n        "1657696.88000000",\n        1529002799999,\n        "397981.14814850",\n        901,\n        "985063.76000000",\n        "236366.60542580",\n        "0"\n    ],\n    [\n        1529002800000,\n        "0.24053000",\n        "0.24287000",\n        "0.23909000",\n        "0.24065000",\n        "834053.32000000",\n        1529006399999,\n        "200932.26037770",\n        544,\n        "377923.28000000",\n        "91037.38727720",\n        "0"\n    ],\n    [\n        1529006400000,\n        "0.24091000",\n        "0.24380000",\n        "0.23942000",\n        "0.24244000",\n        "852938.85000000",\n        1529009999999,\n        "205914.58535020",\n        516,\n        "604317.36000000",\n        "145883.35383520",\n        "0"\n    ],\n    [\n        1529010000000,\n        "0.24280000",\n        "0.24376000",\n        "0.23309000",\n        "0.24160000",\n        "1283203.04000000",\n        1529013599999,\n        "309549.58139410",\n        595,\n        "495001.68000000",\n        "119607.94808460",\n        "0"\n    ],\n    [\n        1529013600000,\n        "0.24162000",\n        "0.24300000",\n        "0.23810000",\n        "0.23956000",\n        "613714.73000000",\n        1529017199999,\n        "147084.60752340",\n        363,\n        "298998.08000000",\n        "71655.11591750",\n        "0"\n    ],\n    [\n        1529017200000,\n        "0.23973000",\n        "0.24172000",\n        "0.23811000",\n        "0.23990000",\n        "656844.09000000",\n        1529020799999,\n        "157286.66020000",\n        297,\n        "286104.70000000",\n        "68581.58266220",\n        "0"\n    ],\n    [\n        1529020800000,\n        "0.23993000",\n        "0.24152000",\n        "0.23942000",\n        "0.24014000",\n        "766523.58000000",\n        1529024399999,\n        "184376.86870300",\n        291,\n        "459820.03000000",\n        "110650.90058200",\n        "0"\n    ],\n    [\n        1529024400000,\n        "0.24012000",\n        "0.24075000",\n        "0.23637000",\n        "0.23778000",\n        "1212430.47000000",\n        1529027999999,\n        "289386.66441520",\n        442,\n        "617703.62000000",\n        "147425.76975490",\n        "0"\n    ],\n    [\n        1529028000000,\n        "0.23810000",\n        "0.23838000",\n        "0.23547000",\n        "0.23724000",\n        "773626.62000000",\n        1529031599999,\n        "183203.52171170",\n        358,\n        "580944.62000000",\n        "137606.64168890",\n        "0"\n    ],\n    [\n        1529031600000,\n        "0.23724000",\n        "0.23944000",\n        "0.23660000",\n        "0.23858000",\n        "700232.33000000",\n        1529035199999,\n        "166800.38182660",\n        322,\n        "393784.93000000",\n        "93832.58317780",\n        "0"\n    ],\n    [\n        1529035200000,\n        "0.23961000",\n        "0.23993000",\n        "0.23521000",\n        "0.23551000",\n        "769381.70000000",\n        1529038799999,\n        "182734.26409300",\n        309,\n        "564171.52000000",\n        "134052.58964050",\n        "0"\n    ],\n    [\n        1529038800000,\n        "0.23543000",\n        "0.23650000",\n        "0.23400000",\n        "0.23530000",\n        "647146.39000000",\n        1529042399999,\n        "152188.05351130",\n        341,\n        "436482.16000000",\n        "102706.75110620",\n        "0"\n    ],\n    [\n        1529042400000,\n        "0.23563000",\n        "0.23747000",\n        "0.23454000",\n        "0.23567000",\n        "826413.43000000",\n        1529045999999,\n        "195039.27673160",\n        356,\n        "370476.14000000",\n        "87497.54145040",\n        "0"\n    ],\n    [\n        1529046000000,\n        "0.23566000",\n        "0.23680000",\n        "0.23466000",\n        "0.23627000",\n        "638918.98000000",\n        1529049599999,\n        "150871.73779200",\n        244,\n        "321279.10000000",\n        "75927.78360240",\n        "0"\n    ],\n    [\n        1529049600000,\n        "0.23567000",\n        "0.23746000",\n        "0.23409000",\n        "0.23669000",\n        "752650.57000000",\n        1529053199999,\n        "178045.61268070",\n        287,\n        "307335.71000000",\n        "72719.97649770",\n        "0"\n    ],\n    [\n        1529053200000,\n        "0.23689000",\n        "0.23701000",\n        "0.23333000",\n        "0.23592000",\n        "802260.72000000",\n        1529056799999,\n        "188711.36101650",\n        371,\n        "536617.11000000",\n        "126179.42651570",\n        "0"\n    ],\n    [\n        1529056800000,\n        "0.23591000",\n        "0.23716000",\n        "0.23394000",\n        "0.23622000",\n        "356276.16000000",\n        1529060399999,\n        "84077.97594590",\n        189,\n        "248439.60000000",\n        "58643.17772940",\n        "0"\n    ],\n    [\n        1529060400000,\n        "0.23716000",\n        "0.24183000",\n        "0.23358000",\n        "0.23471000",\n        "707409.83000000",\n        1529063999999,\n        "167530.88528680",\n        462,\n        "342762.25000000",\n        "81110.09909180",\n        "0"\n    ],\n    [\n        1529064000000,\n        "0.23508000",\n        "0.23512000",\n        "0.23166000",\n        "0.23208000",\n        "431763.41000000",\n        1529067599999,\n        "100678.79248430",\n        355,\n        "265537.48000000",\n        "61974.93611540",\n        "0"\n    ],\n    [\n        1529067600000,\n        "0.23268000",\n        "0.23646000",\n        "0.23000000",\n        "0.23511000",\n        "847345.49000000",\n        1529071199999,\n        "197950.76176950",\n        463,\n        "517372.28000000",\n        "120936.20531020",\n        "0"\n    ],\n    [\n        1529071200000,\n        "0.23511000",\n        "0.23870000",\n        "0.23491000",\n        "0.23729000",\n        "776747.99000000",\n        1529074799999,\n        "182927.21028820",\n        388,\n        "397932.38000000",\n        "93684.20741860",\n        "0"\n    ],\n    [\n        1529074800000,\n        "0.23729000",\n        "0.23944000",\n        "0.23641000",\n        "0.23902000",\n        "723424.30000000",\n        1529078399999,\n        "171809.85206520",\n        398,\n        "316247.69000000",\n        "75163.85107450",\n        "0"\n    ],\n    [\n        1529078400000,\n        "0.23902000",\n        "0.24150000",\n        "0.23800000",\n        "0.24066000",\n        "767739.03000000",\n        1529081999999,\n        "184202.20911110",\n        449,\n        "423412.27000000",\n        "101562.85539530",\n        "0"\n    ],\n    [\n        1529082000000,\n        "0.24035000",\n        "0.24035000",\n        "0.23696000",\n        "0.23900000",\n        "453579.09000000",\n        1529085599999,\n        "108367.13785150",\n        487,\n        "268658.58000000",\n        "64221.78651350",\n        "0"\n    ],\n    [\n        1529085600000,\n        "0.23916000",\n        "0.24238000",\n        "0.23620000",\n        "0.23756000",\n        "830524.56000000",\n        1529089199999,\n        "198705.80119710",\n        505,\n        "457878.53000000",\n        "109584.26744330",\n        "0"\n    ],\n    [\n        1529089200000,\n        "0.23817000",\n        "0.23845000",\n        "0.23726000",\n        "0.23771000",\n        "1098873.21000000",\n        1529092799999,\n        "261195.26485030",\n        363,\n        "487540.79000000",\n        "115937.90899260",\n        "0"\n    ],\n    [\n        1529092800000,\n        "0.23786000",\n        "0.23841000",\n        "0.23282000",\n        "0.23521000",\n        "1030799.11000000",\n        1529096399999,\n        "242997.93299380",\n        617,\n        "620719.48000000",\n        "146317.31413690",\n        "0"\n    ],\n    [\n        1529096400000,\n        "0.23523000",\n        "0.23601000",\n        "0.23393000",\n        "0.23472000",\n        "758498.94000000",\n        1529099999999,\n        "177868.28439060",\n        332,\n        "442663.03000000",\n        "103842.91933680",\n        "0"\n    ],\n    [\n        1529100000000,\n        "0.23471000",\n        "0.23539000",\n        "0.23000000",\n        "0.23077000",\n        "820834.44000000",\n        1529103599999,\n        "191614.61103200",\n        424,\n        "347830.68000000",\n        "81217.33911120",\n        "0"\n    ],\n    [\n        1529103600000,\n        "0.23076000",\n        "0.23156000",\n        "0.22799000",\n        "0.22899000",\n        "784499.98000000",\n        1529107199999,\n        "180091.70143910",\n        483,\n        "358549.66000000",\n        "82308.53155530",\n        "0"\n    ],\n    [\n        1529107200000,\n        "0.22883000",\n        "0.23374000",\n        "0.22883000",\n        "0.22900000",\n        "741003.63000000",\n        1529110799999,\n        "170956.35028630",\n        457,\n        "326225.54000000",\n        "75318.74394550",\n        "0"\n    ],\n    [\n        1529110800000,\n        "0.22900000",\n        "0.22947000",\n        "0.22599000",\n        "0.22864000",\n        "1270215.21000000",\n        1529114399999,\n        "288793.04216470",\n        536,\n        "634119.78000000",\n        "143975.63923890",\n        "0"\n    ],\n    [\n        1529114400000,\n        "0.22942000",\n        "0.22989000",\n        "0.22606000",\n        "0.22890000",\n        "610114.32000000",\n        1529117999999,\n        "139436.19703530",\n        273,\n        "257218.83000000",\n        "58871.42154140",\n        "0"\n    ],\n    [\n        1529118000000,\n        "0.22910000",\n        "0.22910000",\n        "0.22595000",\n        "0.22623000",\n        "528292.93000000",\n        1529121599999,\n        "120287.02365290",\n        199,\n        "244849.23000000",\n        "55813.31276590",\n        "0"\n    ],\n    [\n        1529121600000,\n        "0.22635000",\n        "0.22859000",\n        "0.22616000",\n        "0.22771000",\n        "288595.33000000",\n        1529125199999,\n        "65686.28109920",\n        167,\n        "218440.61000000",\n        "49747.17291740",\n        "0"\n    ],\n    [\n        1529125200000,\n        "0.22873000",\n        "0.23141000",\n        "0.22807000",\n        "0.23141000",\n        "631337.14000000",\n        1529128799999,\n        "145131.05375130",\n        309,\n        "481799.30000000",\n        "110838.87404380",\n        "0"\n    ],\n    [\n        1529128800000,\n        "0.23142000",\n        "0.23253000",\n        "0.23003000",\n        "0.23177000",\n        "482032.65000000",\n        1529132399999,\n        "111619.11032320",\n        202,\n        "229881.19000000",\n        "53255.92952020",\n        "0"\n    ],\n    [\n        1529132400000,\n        "0.23177000",\n        "0.23357000",\n        "0.22907000",\n        "0.22970000",\n        "411158.15000000",\n        1529135999999,\n        "95236.97496110",\n        230,\n        "234413.87000000",\n        "54307.04681560",\n        "0"\n    ],\n    [\n        1529136000000,\n        "0.22976000",\n        "0.23003000",\n        "0.22700000",\n        "0.22859000",\n        "996634.97000000",\n        1529139599999,\n        "227861.93160570",\n        326,\n        "868403.43000000",\n        "198561.42286630",\n        "0"\n    ],\n    [\n        1529139600000,\n        "0.22859000",\n        "0.23046000",\n        "0.22732000",\n        "0.22932000",\n        "590629.13000000",\n        1529143199999,\n        "135272.18547130",\n        276,\n        "298049.61000000",\n        "68230.82395370",\n        "0"\n    ],\n    [\n        1529143200000,\n        "0.22952000",\n        "0.23227000",\n        "0.22906000",\n        "0.22930000",\n        "639042.07000000",\n        1529146799999,\n        "147279.57848600",\n        267,\n        "331265.54000000",\n        "76280.78105100",\n        "0"\n    ],\n    [\n        1529146800000,\n        "0.22929000",\n        "0.23027000",\n        "0.22839000",\n        "0.22968000",\n        "381748.42000000",\n        1529150399999,\n        "87590.59888370",\n        176,\n        "209747.52000000",\n        "48134.48534770",\n        "0"\n    ],\n    [\n        1529150400000,\n        "0.22973000",\n        "0.23032000",\n        "0.22859000",\n        "0.22860000",\n        "496434.36000000",\n        1529153999999,\n        "113881.02464670",\n        194,\n        "198800.74000000",\n        "45644.74052440",\n        "0"\n    ],\n    [\n        1529154000000,\n        "0.22860000",\n        "0.22948000",\n        "0.22657000",\n        "0.22705000",\n        "500756.50000000",\n        1529157599999,\n        "113801.91639600",\n        387,\n        "290595.95000000",\n        "66047.65405050",\n        "0"\n    ],\n    [\n        1529157600000,\n        "0.22701000",\n        "0.22749000",\n        "0.22403000",\n        "0.22650000",\n        "766931.17000000",\n        1529161199999,\n        "173331.63457850",\n        337,\n        "428797.59000000",\n        "96953.01331760",\n        "0"\n    ],\n    [\n        1529161200000,\n        "0.22593000",\n        "0.22678000",\n        "0.22231000",\n        "0.22401000",\n        "686491.99000000",\n        1529164799999,\n        "154273.53457790",\n        441,\n        "441126.78000000",\n        "99079.07770110",\n        "0"\n    ],\n    [\n        1529164800000,\n        "0.22400000",\n        "0.23200000",\n        "0.22317000",\n        "0.23187000",\n        "501185.36000000",\n        1529168399999,\n        "113852.30258390",\n        572,\n        "286115.62000000",\n        "64886.56492950",\n        "0"\n    ],\n    [\n        1529168400000,\n        "0.23051000",\n        "0.23254000",\n        "0.23030000",\n        "0.23173000",\n        "534390.73000000",\n        1529171999999,\n        "123696.44291000",\n        434,\n        "307474.43000000",\n        "71203.54028650",\n        "0"\n    ],\n    [\n        1529172000000,\n        "0.23145000",\n        "0.23251000",\n        "0.23038000",\n        "0.23148000",\n        "640749.54000000",\n        1529175599999,\n        "148290.93449630",\n        278,\n        "325182.90000000",\n        "75267.52757890",\n        "0"\n    ],\n    [\n        1529175600000,\n        "0.23155000",\n        "0.23254000",\n        "0.22862000",\n        "0.23051000",\n        "235702.43000000",\n        1529179199999,\n        "54344.49947140",\n        202,\n        "191439.07000000",\n        "44165.14849540",\n        "0"\n    ],\n    [\n        1529179200000,\n        "0.23001000",\n        "0.23150000",\n        "0.22967000",\n        "0.23099000",\n        "728631.83000000",\n        1529182799999,\n        "168059.14201630",\n        284,\n        "604212.21000000",\n        "139374.27325710",\n        "0"\n    ],\n    [\n        1529182800000,\n        "0.23087000",\n        "0.23191000",\n        "0.22950000",\n        "0.23091000",\n        "646293.63000000",\n        1529186399999,\n        "149312.74838050",\n        256,\n        "505955.85000000",\n        "116930.53402600",\n        "0"\n    ],\n    [\n        1529186400000,\n        "0.23116000",\n        "0.23200000",\n        "0.23105000",\n        "0.23199000",\n        "584380.63000000",\n        1529189999999,\n        "135427.80271850",\n        251,\n        "469710.12000000",\n        "108874.04257090",\n        "0"\n    ],\n    [\n        1529190000000,\n        "0.23200000",\n        "0.23203000",\n        "0.22929000",\n        "0.22953000",\n        "853412.09000000",\n        1529193599999,\n        "197073.36453320",\n        347,\n        "402121.44000000",\n        "92861.17888080",\n        "0"\n    ],\n    [\n        1529193600000,\n        "0.22990000",\n        "0.23143000",\n        "0.22956000",\n        "0.23098000",\n        "594763.53000000",\n        1529197199999,\n        "136880.61546760",\n        240,\n        "268950.69000000",\n        "61919.53868200",\n        "0"\n    ],\n    [\n        1529197200000,\n        "0.23099000",\n        "0.23185000",\n        "0.23095000",\n        "0.23113000",\n        "844097.84000000",\n        1529200799999,\n        "195190.41762080",\n        263,\n        "586180.35000000",\n        "135577.95196260",\n        "0"\n    ],\n    [\n        1529200800000,\n        "0.23113000",\n        "0.23203000",\n        "0.23112000",\n        "0.23126000",\n        "880535.84000000",\n        1529204399999,\n        "203713.48871800",\n        267,\n        "379549.94000000",\n        "87867.66099060",\n        "0"\n    ],\n    [\n        1529204400000,\n        "0.23170000",\n        "0.23300000",\n        "0.23148000",\n        "0.23259000",\n        "661562.39000000",\n        1529207999999,\n        "153631.19305120",\n        312,\n        "285517.02000000",\n        "66328.14648340",\n        "0"\n    ],\n    [\n        1529208000000,\n        "0.23192000",\n        "0.23246000",\n        "0.23108000",\n        "0.23201000",\n        "746060.55000000",\n        1529211599999,\n        "172951.24468850",\n        232,\n        "624241.76000000",\n        "144709.94014780",\n        "0"\n    ],\n    [\n        1529211600000,\n        "0.23222000",\n        "0.23241000",\n        "0.23029000",\n        "0.23089000",\n        "291491.23000000",\n        1529215199999,\n        "67438.99423140",\n        154,\n        "198099.98000000",\n        "45837.73470630",\n        "0"\n    ],\n    [\n        1529215200000,\n        "0.23053000",\n        "0.23143000",\n        "0.23030000",\n        "0.23064000",\n        "390136.18000000",\n        1529218799999,\n        "90077.60156820",\n        174,\n        "362665.44000000",\n        "83740.37940190",\n        "0"\n    ],\n    [\n        1529218800000,\n        "0.23038000",\n        "0.23150000",\n        "0.23027000",\n        "0.23078000",\n        "470757.81000000",\n        1529222399999,\n        "108692.42921270",\n        164,\n        "200919.12000000",\n        "46408.70333810",\n        "0"\n    ],\n    [\n        1529222400000,\n        "0.23112000",\n        "0.23270000",\n        "0.23075000",\n        "0.23104000",\n        "708378.05000000",\n        1529225999999,\n        "163788.25946260",\n        275,\n        "298774.90000000",\n        "69106.80454290",\n        "0"\n    ],\n    [\n        1529226000000,\n        "0.23203000",\n        "0.23204000",\n        "0.23041000",\n        "0.23188000",\n        "233560.94000000",\n        1529229599999,\n        "54062.99133220",\n        167,\n        "183792.06000000",\n        "42540.12068370",\n        "0"\n    ],\n    [\n        1529229600000,\n        "0.23193000",\n        "0.23193000",\n        "0.22925000",\n        "0.22946000",\n        "447849.04000000",\n        1529233199999,\n        "103399.82355740",\n        187,\n        "310116.65000000",\n        "71650.04446240",\n        "0"\n    ],\n    [\n        1529233200000,\n        "0.23027000",\n        "0.23123000",\n        "0.22936000",\n        "0.23000000",\n        "445829.20000000",\n        1529236799999,\n        "102541.01798580",\n        172,\n        "215789.57000000",\n        "49662.57804660",\n        "0"\n    ],\n    [\n        1529236800000,\n        "0.22958000",\n        "0.23064000",\n        "0.22721000",\n        "0.22818000",\n        "264800.70000000",\n        1529240399999,\n        "60630.58119470",\n        252,\n        "146790.91000000",\n        "33538.83660340",\n        "0"\n    ],\n    [\n        1529240400000,\n        "0.22747000",\n        "0.22974000",\n        "0.22571000",\n        "0.22898000",\n        "880079.13000000",\n        1529243999999,\n        "201059.03272880",\n        435,\n        "532565.54000000",\n        "121734.87673370",\n        "0"\n    ],\n    [\n        1529244000000,\n        "0.22913000",\n        "0.22944000",\n        "0.22684000",\n        "0.22761000",\n        "671652.45000000",\n        1529247599999,\n        "153247.60950690",\n        327,\n        "413684.31000000",\n        "94427.30487650",\n        "0"\n    ],\n    [\n        1529247600000,\n        "0.22746000",\n        "0.23004000",\n        "0.22713000",\n        "0.22906000",\n        "736409.05000000",\n        1529251199999,\n        "167839.31194700",\n        347,\n        "391873.76000000",\n        "89337.64447580",\n        "0"\n    ],\n    [\n        1529251200000,\n        "0.22921000",\n        "0.23008000",\n        "0.22840000",\n        "0.22840000",\n        "501764.20000000",\n        1529254799999,\n        "115266.00975380",\n        215,\n        "175512.72000000",\n        "40288.08936080",\n        "0"\n    ],\n    [\n        1529254800000,\n        "0.22840000",\n        "0.22902000",\n        "0.22747000",\n        "0.22813000",\n        "322173.29000000",\n        1529258399999,\n        "73549.32587070",\n        173,\n        "249511.10000000",\n        "56979.23523390",\n        "0"\n    ],\n    [\n        1529258400000,\n        "0.22794000",\n        "0.22901000",\n        "0.22774000",\n        "0.22841000",\n        "748271.34000000",\n        1529261999999,\n        "171003.25579300",\n        230,\n        "522189.14000000",\n        "119370.31651540",\n        "0"\n    ],\n    [\n        1529262000000,\n        "0.22898000",\n        "0.23343000",\n        "0.22853000",\n        "0.23128000",\n        "824146.47000000",\n        1529265599999,\n        "189541.23827870",\n        433,\n        "570008.10000000",\n        "131051.78391800",\n        "0"\n    ],\n    [\n        1529265600000,\n        "0.23148000",\n        "0.23343000",\n        "0.22830000",\n        "0.23236000",\n        "722250.91000000",\n        1529269199999,\n        "166182.90717370",\n        412,\n        "407490.97000000",\n        "93941.97501350",\n        "0"\n    ],\n    [\n        1529269200000,\n        "0.23303000",\n        "0.23382000",\n        "0.23069000",\n        "0.23109000",\n        "1104334.96000000",\n        1529272799999,\n        "256643.21802380",\n        490,\n        "633682.51000000",\n        "147280.65319930",\n        "0"\n    ],\n    [\n        1529272800000,\n        "0.23111000",\n        "0.23214000",\n        "0.23001000",\n        "0.23001000",\n        "348163.68000000",\n        1529276399999,\n        "80498.77588610",\n        158,\n        "310848.51000000",\n        "71895.52212170",\n        "0"\n    ],\n    [\n        1529276400000,\n        "0.23034000",\n        "0.23115000",\n        "0.22810000",\n        "0.22814000",\n        "554802.52000000",\n        1529279999999,\n        "127336.32684250",\n        256,\n        "447270.17000000",\n        "102764.88949660",\n        "0"\n    ],\n    [\n        1529280000000,\n        "0.22815000",\n        "0.22899000",\n        "0.22550000",\n        "0.22584000",\n        "960661.72000000",\n        1529283599999,\n        "218205.31152960",\n        496,\n        "677887.62000000",\n        "154137.02620960",\n        "0"\n    ],\n    [\n        1529283600000,\n        "0.22587000",\n        "0.22681000",\n        "0.22500000",\n        "0.22524000",\n        "376330.31000000",\n        1529287199999,\n        "84911.61015780",\n        245,\n        "192843.63000000",\n        "43510.31193620",\n        "0"\n    ],\n    [\n        1529287200000,\n        "0.22565000",\n        "0.22798000",\n        "0.22500000",\n        "0.22687000",\n        "626935.48000000",\n        1529290799999,\n        "141689.58899960",\n        226,\n        "328064.75000000",\n        "74177.00754700",\n        "0"\n    ],\n    [\n        1529290800000,\n        "0.22634000",\n        "0.22683000",\n        "0.22500000",\n        "0.22522000",\n        "720423.40000000",\n        1529294399999,\n        "162871.21625720",\n        228,\n        "382305.35000000",\n        "86478.24666460",\n        "0"\n    ],\n    [\n        1529294400000,\n        "0.22590000",\n        "0.22590000",\n        "0.22343000",\n        "0.22445000",\n        "578811.15000000",\n        1529297999999,\n        "130087.38900290",\n        300,\n        "306114.14000000",\n        "68859.26385260",\n        "0"\n    ],\n    [\n        1529298000000,\n        "0.22445000",\n        "0.22569000",\n        "0.22342000",\n        "0.22528000",\n        "454986.77000000",\n        1529301599999,\n        "102087.60540030",\n        213,\n        "288594.06000000",\n        "64783.67322740",\n        "0"\n    ],\n    [\n        1529301600000,\n        "0.22387000",\n        "0.22511000",\n        "0.22341000",\n        "0.22453000",\n        "415603.30000000",\n        1529305199999,\n        "93295.27052690",\n        167,\n        "196601.50000000",\n        "44151.33315810",\n        "0"\n    ],\n    [\n        1529305200000,\n        "0.22471000",\n        "0.22570000",\n        "0.22423000",\n        "0.22425000",\n        "449938.60000000",\n        1529308799999,\n        "101103.26121940",\n        177,\n        "222966.21000000",\n        "50114.11540630",\n        "0"\n    ],\n    [\n        1529308800000,\n        "0.22458000",\n        "0.22729000",\n        "0.22420000",\n        "0.22653000",\n        "401342.97000000",\n        1529312399999,\n        "90506.83166970",\n        240,\n        "185190.01000000",\n        "41732.07178480",\n        "0"\n    ],\n    [\n        1529312400000,\n        "0.22653000",\n        "0.22733000",\n        "0.22417000",\n        "0.22481000",\n        "611714.67000000",\n        1529315999999,\n        "138040.60352330",\n        298,\n        "255767.55000000",\n        "57720.85557530",\n        "0"\n    ],\n    [\n        1529316000000,\n        "0.22506000",\n        "0.22506000",\n        "0.22132000",\n        "0.22152000",\n        "1137349.21000000",\n        1529319599999,\n        "254299.60400480",\n        515,\n        "960025.61000000",\n        "214830.31116220",\n        "0"\n    ],\n    [\n        1529319600000,\n        "0.22226000",\n        "0.22298000",\n        "0.21955000",\n        "0.22230000",\n        "673776.60000000",\n        1529323199999,\n        "149312.03198610",\n        385,\n        "396006.44000000",\n        "87849.30988340",\n        "0"\n    ],\n    [\n        1529323200000,\n        "0.22229000",\n        "0.22336000",\n        "0.22153000",\n        "0.22288000",\n        "654304.10000000",\n        1529326799999,\n        "145685.77208880",\n        254,\n        "475273.36000000",\n        "105856.31523270",\n        "0"\n    ],\n    [\n        1529326800000,\n        "0.22217000",\n        "0.22336000",\n        "0.22104000",\n        "0.22124000",\n        "736730.84000000",\n        1529330399999,\n        "163773.40047190",\n        346,\n        "499726.63000000",\n        "111175.11721140",\n        "0"\n    ],\n    [\n        1529330400000,\n        "0.22195000",\n        "0.22336000",\n        "0.22118000",\n        "0.22183000",\n        "673417.95000000",\n        1529333999999,\n        "149680.34091180",\n        313,\n        "434069.59000000",\n        "96571.68357210",\n        "0"\n    ],\n    [\n        1529334000000,\n        "0.22264000",\n        "0.22453000",\n        "0.22208000",\n        "0.22370000",\n        "600115.07000000",\n        1529337599999,\n        "133944.34168930",\n        271,\n        "297616.49000000",\n        "66448.32432250",\n        "0"\n    ],\n    [\n        1529337600000,\n        "0.22360000",\n        "0.23493000",\n        "0.22221000",\n        "0.23337000",\n        "1232089.60000000",\n        1529341199999,\n        "283282.76412030",\n        827,\n        "602584.11000000",\n        "138675.16305300",\n        "0"\n    ],\n    [\n        1529341200000,\n        "0.23300000",\n        "0.24051000",\n        "0.23300000",\n        "0.23674000",\n        "1312894.79000000",\n        1529344799999,\n        "312162.67057820",\n        862,\n        "772727.12000000",\n        "183634.67050290",\n        "0"\n    ],\n    [\n        1529344800000,\n        "0.23673000",\n        "0.23810000",\n        "0.23634000",\n        "0.23742000",\n        "948103.66000000",\n        1529348399999,\n        "225094.02150010",\n        490,\n        "490498.51000000",\n        "116516.04445180",\n        "0"\n    ],\n    [\n        1529348400000,\n        "0.23702000",\n        "0.23742000",\n        "0.23411000",\n        "0.23530000",\n        "713579.45000000",\n        1529351999999,\n        "168392.62987750",\n        387,\n        "412705.40000000",\n        "97336.07838770",\n        "0"\n    ],\n    [\n        1529352000000,\n        "0.23530000",\n        "0.23625000",\n        "0.23308000",\n        "0.23598000",\n        "804775.68000000",\n        1529355599999,\n        "189346.52095260",\n        414,\n        "451293.30000000",\n        "106222.38687500",\n        "0"\n    ],\n    [\n        1529355600000,\n        "0.23591000",\n        "0.23598000",\n        "0.23427000",\n        "0.23537000",\n        "665215.30000000",\n        1529359199999,\n        "156250.83304310",\n        262,\n        "448389.21000000",\n        "105358.92740250",\n        "0"\n    ],\n    [\n        1529359200000,\n        "0.23518000",\n        "0.23584000",\n        "0.23239000",\n        "0.23393000",\n        "772801.26000000",\n        1529362799999,\n        "180897.11806180",\n        377,\n        "568429.78000000",\n        "133095.74782320",\n        "0"\n    ],\n    [\n        1529362800000,\n        "0.23393000",\n        "0.23400000",\n        "0.23210000",\n        "0.23262000",\n        "639808.18000000",\n        1529366399999,\n        "149084.98838960",\n        344,\n        "444708.94000000",\n        "103684.56111020",\n        "0"\n    ],\n    [\n        1529366400000,\n        "0.23302000",\n        "0.23320000",\n        "0.23150000",\n        "0.23254000",\n        "266090.51000000",\n        1529369999999,\n        "61727.46130420",\n        186,\n        "223771.15000000",\n        "51899.96839710",\n        "0"\n    ],\n    [\n        1529370000000,\n        "0.23254000",\n        "0.23462000",\n        "0.23254000",\n        "0.23317000",\n        "116952.73000000",\n        1529373599999,\n        "27252.47019300",\n        117,\n        "109487.29000000",\n        "25511.43850270",\n        "0"\n    ],\n    [\n        1529373600000,\n        "0.23322000",\n        "0.23322000",\n        "0.23100000",\n        "0.23179000",\n        "215072.21000000",\n        1529377199999,\n        "49756.57034950",\n        108,\n        "49336.01000000",\n        "11442.11662910",\n        "0"\n    ],\n    [\n        1529377200000,\n        "0.23116000",\n        "0.23160000",\n        "0.23053000",\n        "0.23095000",\n        "964367.58000000",\n        1529380799999,\n        "222623.67160480",\n        369,\n        "543954.62000000",\n        "125585.19370890",\n        "0"\n    ],\n    [\n        1529380800000,\n        "0.23095000",\n        "0.23165000",\n        "0.22979000",\n        "0.23066000",\n        "1002205.32000000",\n        1529384399999,\n        "231417.43807900",\n        397,\n        "669869.26000000",\n        "154713.10936600",\n        "0"\n    ],\n    [\n        1529384400000,\n        "0.23066000",\n        "0.23308000",\n        "0.23066000",\n        "0.23264000",\n        "570556.39000000",\n        1529387999999,\n        "132294.16114440",\n        231,\n        "301027.75000000",\n        "69775.22812280",\n        "0"\n    ],\n    [\n        1529388000000,\n        "0.23296000",\n        "0.23307000",\n        "0.23047000",\n        "0.23099000",\n        "460258.39000000",\n        1529391599999,\n        "107004.23253030",\n        217,\n        "391474.16000000",\n        "91047.96683110",\n        "0"\n    ],\n    [\n        1529391600000,\n        "0.23099000",\n        "0.23315000",\n        "0.23055000",\n        "0.23140000",\n        "682805.71000000",\n        1529395199999,\n        "157890.24022640",\n        266,\n        "534781.64000000",\n        "123704.81698010",\n        "0"\n    ],\n    [\n        1529395200000,\n        "0.23177000",\n        "0.23335000",\n        "0.23005000",\n        "0.23284000",\n        "355742.43000000",\n        1529398799999,\n        "82631.93979070",\n        209,\n        "168014.81000000",\n        "39073.20707380",\n        "0"\n    ],\n    [\n        1529398800000,\n        "0.23282000",\n        "0.23402000",\n        "0.23256000",\n        "0.23397000",\n        "453612.04000000",\n        1529402399999,\n        "105866.39683550",\n        247,\n        "379750.93000000",\n        "88625.01465290",\n        "0"\n    ],\n    [\n        1529402400000,\n        "0.23369000",\n        "0.23524000",\n        "0.23209000",\n        "0.23430000",\n        "433692.16000000",\n        1529405999999,\n        "101363.66188110",\n        715,\n        "240236.48000000",\n        "56172.48948840",\n        "0"\n    ],\n    [\n        1529406000000,\n        "0.23409000",\n        "0.23756000",\n        "0.23400000",\n        "0.23724000",\n        "601870.43000000",\n        1529409599999,\n        "142123.39778150",\n        526,\n        "275899.97000000",\n        "65145.06575690",\n        "0"\n    ],\n    [\n        1529409600000,\n        "0.23721000",\n        "0.23775000",\n        "0.23574000",\n        "0.23708000",\n        "682796.19000000",\n        1529413199999,\n        "161546.61646260",\n        362,\n        "351958.88000000",\n        "83289.07860930",\n        "0"\n    ],\n    [\n        1529413200000,\n        "0.23708000",\n        "0.24054000",\n        "0.23610000",\n        "0.23759000",\n        "1192463.45000000",\n        1529416799999,\n        "284518.52812330",\n        702,\n        "758005.32000000",\n        "180930.96139100",\n        "0"\n    ],\n    [\n        1529416800000,\n        "0.23759000",\n        "0.23850000",\n        "0.23450000",\n        "0.23603000",\n        "769678.27000000",\n        1529420399999,\n        "181671.13670000",\n        455,\n        "600779.50000000",\n        "141835.76231720",\n        "0"\n    ],\n    [\n        1529420400000,\n        "0.23597000",\n        "0.23682000",\n        "0.23505000",\n        "0.23626000",\n        "706640.86000000",\n        1529423999999,\n        "166895.53750200",\n        261,\n        "307951.59000000",\n        "72772.34909020",\n        "0"\n    ],\n    [\n        1529424000000,\n        "0.23653000",\n        "0.23653000",\n        "0.23283000",\n        "0.23340000",\n        "694484.03000000",\n        1529427599999,\n        "162872.91000860",\n        351,\n        "385916.60000000",\n        "90447.77238640",\n        "0"\n    ],\n    [\n        1529427600000,\n        "0.23346000",\n        "0.23529000",\n        "0.23300000",\n        "0.23313000",\n        "798089.92000000",\n        1529431199999,\n        "186764.79330680",\n        306,\n        "464824.56000000",\n        "108807.07712920",\n        "0"\n    ],\n    [\n        1529431200000,\n        "0.23313000",\n        "0.23441000",\n        "0.23273000",\n        "0.23291000",\n        "954783.85000000",\n        1529434799999,\n        "222672.84381620",\n        338,\n        "493103.51000000",\n        "115052.38889130",\n        "0"\n    ],\n    [\n        1529434800000,\n        "0.23290000",\n        "0.23479000",\n        "0.23205000",\n        "0.23472000",\n        "1015804.10000000",\n        1529438399999,\n        "237055.78068440",\n        454,\n        "841679.55000000",\n        "196440.02345550",\n        "0"\n    ],\n    [\n        1529438400000,\n        "0.23472000",\n        "0.23473000",\n        "0.23202000",\n        "0.23207000",\n        "750232.04000000",\n        1529441999999,\n        "175127.01414390",\n        312,\n        "499329.75000000",\n        "116684.06533320",\n        "0"\n    ],\n    [\n        1529442000000,\n        "0.23211000",\n        "0.23374000",\n        "0.23210000",\n        "0.23287000",\n        "576237.19000000",\n        1529445599999,\n        "134096.98731480",\n        201,\n        "267321.67000000",\n        "62217.92027600",\n        "0"\n    ],\n    [\n        1529445600000,\n        "0.23370000",\n        "0.23469000",\n        "0.23273000",\n        "0.23312000",\n        "524434.40000000",\n        1529449199999,\n        "122575.24554800",\n        227,\n        "331856.02000000",\n        "77629.78576420",\n        "0"\n    ],\n    [\n        1529449200000,\n        "0.23420000",\n        "0.23470000",\n        "0.23192000",\n        "0.23409000",\n        "564748.28000000",\n        1529452799999,\n        "131701.63748350",\n        254,\n        "424132.59000000",\n        "98954.04051430",\n        "0"\n    ],\n    [\n        1529452800000,\n        "0.23469000",\n        "0.23673000",\n        "0.23123000",\n        "0.23130000",\n        "1239283.31000000",\n        1529456399999,\n        "290904.91025510",\n        608,\n        "386131.87000000",\n        "90710.73790350",\n        "0"\n    ],\n    [\n        1529456400000,\n        "0.23130000",\n        "0.23131000",\n        "0.22349000",\n        "0.22879000",\n        "929247.84000000",\n        1529459999999,\n        "210487.08880280",\n        895,\n        "497628.26000000",\n        "112577.63324330",\n        "0"\n    ],\n    [\n        1529460000000,\n        "0.22818000",\n        "0.22868000",\n        "0.22608000",\n        "0.22818000",\n        "470271.08000000",\n        1529463599999,\n        "107145.73336890",\n        302,\n        "284716.17000000",\n        "64871.74759030",\n        "0"\n    ],\n    [\n        1529463600000,\n        "0.22818000",\n        "0.22880000",\n        "0.22682000",\n        "0.22696000",\n        "667887.98000000",\n        1529467199999,\n        "152162.35328480",\n        313,\n        "325402.70000000",\n        "74164.16201510",\n        "0"\n    ],\n    [\n        1529467200000,\n        "0.22690000",\n        "0.22693000",\n        "0.22341000",\n        "0.22458000",\n        "589658.67000000",\n        1529470799999,\n        "133009.53519610",\n        294,\n        "223321.11000000",\n        "50413.76669850",\n        "0"\n    ],\n    [\n        1529470800000,\n        "0.22557000",\n        "0.22574000",\n        "0.22430000",\n        "0.22439000",\n        "115045.32000000",\n        1529474399999,\n        "25877.73949280",\n        116,\n        "81735.87000000",\n        "18384.14265270",\n        "0"\n    ],\n    [\n        1529474400000,\n        "0.22440000",\n        "0.22798000",\n        "0.22437000",\n        "0.22741000",\n        "145402.45000000",\n        1529477999999,\n        "32847.38541620",\n        167,\n        "87150.03000000",\n        "19669.39786990",\n        "0"\n    ],\n    [\n        1529478000000,\n        "0.22741000",\n        "0.22791000",\n        "0.22608000",\n        "0.22760000",\n        "510613.25000000",\n        1529481599999,\n        "116053.45085230",\n        284,\n        "325293.37000000",\n        "73949.96405550",\n        "0"\n    ],\n    [\n        1529481600000,\n        "0.22699000",\n        "0.22780000",\n        "0.22670000",\n        "0.22752000",\n        "465787.47000000",\n        1529485199999,\n        "105847.38214880",\n        177,\n        "382292.79000000",\n        "86888.03653300",\n        "0"\n    ],\n    [\n        1529485200000,\n        "0.22734000",\n        "0.22933000",\n        "0.22713000",\n        "0.22807000",\n        "958588.28000000",\n        1529488799999,\n        "218353.30150940",\n        453,\n        "727113.08000000",\n        "165639.07798470",\n        "0"\n    ],\n    [\n        1529488800000,\n        "0.22807000",\n        "0.22807000",\n        "0.22524000",\n        "0.22667000",\n        "627764.37000000",\n        1529492399999,\n        "142600.96474520",\n        301,\n        "364642.59000000",\n        "82841.74307380",\n        "0"\n    ],\n    [\n        1529492400000,\n        "0.22666000",\n        "0.22799000",\n        "0.22584000",\n        "0.22797000",\n        "518876.21000000",\n        1529495999999,\n        "117703.11363230",\n        236,\n        "178362.90000000",\n        "40475.72422920",\n        "0"\n    ],\n    [\n        1529496000000,\n        "0.22752000",\n        "0.22798000",\n        "0.22584000",\n        "0.22690000",\n        "500027.99000000",\n        1529499599999,\n        "113671.14290610",\n        175,\n        "296167.49000000",\n        "67402.68924460",\n        "0"\n    ],\n    [\n        1529499600000,\n        "0.22699000",\n        "0.23327000",\n        "0.22589000",\n        "0.23242000",\n        "807365.72000000",\n        1529503199999,\n        "186179.61503970",\n        531,\n        "580303.48000000",\n        "133839.00796340",\n        "0"\n    ],\n    [\n        1529503200000,\n        "0.23243000",\n        "0.23500000",\n        "0.23213000",\n        "0.23325000",\n        "873572.84000000",\n        1529506799999,\n        "204128.39968530",\n        439,\n        "407989.87000000",\n        "95351.23887210",\n        "0"\n    ],\n    [\n        1529506800000,\n        "0.23345000",\n        "0.23428000",\n        "0.23195000",\n        "0.23272000",\n        "953888.49000000",\n        1529510399999,\n        "222273.83423210",\n        366,\n        "464436.20000000",\n        "108225.70050650",\n        "0"\n    ],\n    [\n        1529510400000,\n        "0.23291000",\n        "0.23500000",\n        "0.23223000",\n        "0.23301000",\n        "897668.10000000",\n        1529513999999,\n        "209917.93574820",\n        372,\n        "400215.51000000",\n        "93588.61560680",\n        "0"\n    ],\n    [\n        1529514000000,\n        "0.23416000",\n        "0.23457000",\n        "0.23194000",\n        "0.23194000",\n        "303939.21000000",\n        1529517599999,\n        "70840.54387900",\n        189,\n        "206454.00000000",\n        "48157.88443030",\n        "0"\n    ],\n    [\n        1529517600000,\n        "0.23181000",\n        "0.23310000",\n        "0.23124000",\n        "0.23138000",\n        "195126.07000000",\n        1529521199999,\n        "45304.12586690",\n        135,\n        "120855.94000000",\n        "28059.20028350",\n        "0"\n    ],\n    [\n        1529521200000,\n        "0.23138000",\n        "0.23139000",\n        "0.22940000",\n        "0.23054000",\n        "628838.84000000",\n        1529524799999,\n        "145148.32142770",\n        295,\n        "327018.81000000",\n        "75532.68190290",\n        "0"\n    ],\n    [\n        1529524800000,\n        "0.23074000",\n        "0.23139000",\n        "0.22950000",\n        "0.22966000",\n        "968255.91000000",\n        1529528399999,\n        "223204.12310310",\n        344,\n        "584936.52000000",\n        "134908.02177890",\n        "0"\n    ],\n    [\n        1529528400000,\n        "0.22998000",\n        "0.23052000",\n        "0.22899000",\n        "0.22937000",\n        "850078.28000000",\n        1529531999999,\n        "195370.41836730",\n        344,\n        "573634.22000000",\n        "131877.41123510",\n        "0"\n    ],\n    [\n        1529532000000,\n        "0.22938000",\n        "0.23103000",\n        "0.22876000",\n        "0.23002000",\n        "784572.71000000",\n        1529535599999,\n        "179992.34230650",\n        282,\n        "537682.69000000",\n        "123379.72106710",\n        "0"\n    ],\n    [\n        1529535600000,\n        "0.23004000",\n        "0.23124000",\n        "0.22962000",\n        "0.23067000",\n        "854841.76000000",\n        1529539199999,\n        "196995.39215350",\n        262,\n        "591794.53000000",\n        "136403.32452660",\n        "0"\n    ],\n    [\n        1529539200000,\n        "0.23099000",\n        "0.23100000",\n        "0.22875000",\n        "0.22928000",\n        "491136.43000000",\n        1529542799999,\n        "112808.98426690",\n        230,\n        "270389.83000000",\n        "62091.96772630",\n        "0"\n    ],\n    [\n        1529542800000,\n        "0.23051000",\n        "0.23212000",\n        "0.22947000",\n        "0.23000000",\n        "253284.19000000",\n        1529546399999,\n        "58272.12927340",\n        120,\n        "143208.88000000",\n        "32972.94009590",\n        "0"\n    ],\n    [\n        1529546400000,\n        "0.23051000",\n        "0.23388000",\n        "0.23001000",\n        "0.23248000",\n        "951664.47000000",\n        1529549999999,\n        "220552.33710060",\n        440,\n        "542451.84000000",\n        "125797.03192020",\n        "0"\n    ],\n    [\n        1529550000000,\n        "0.23229000",\n        "0.23359000",\n        "0.23220000",\n        "0.23359000",\n        "559973.83000000",\n        1529553599999,\n        "130307.79122970",\n        240,\n        "493696.23000000",\n        "114894.47167390",\n        "0"\n    ],\n    [\n        1529553600000,\n        "0.23361000",\n        "0.23565000",\n        "0.23210000",\n        "0.23389000",\n        "972320.83000000",\n        1529557199999,\n        "227493.63839890",\n        557,\n        "610401.89000000",\n        "142890.13874780",\n        "0"\n    ]\n]'}
var t=(function rtii(){var s=A.iT
return{a7:s("@<~>"),aF:s("i_"),n:s("bz"),D:s("a0"),ar:s("b1"),dW:s("w"),gw:s("o<@>"),h:s("p"),Q:s("x"),B:s("c"),u:s("an"),g:s("ay<@>"),fb:s("b7"),w:s("b8<H>"),bq:s("j<p>"),R:s("j<@>"),dS:s("y<cx>"),e:s("y<a0>"),f3:s("y<bA>"),i:s("y<w>"),j:s("y<U>"),ej:s("y<W>"),s:s("y<e>"),m:s("y<Z>"),b:s("y<@>"),t:s("y<u>"),a:s("y<a_>"),T:s("bK"),O:s("ao"),aU:s("ai<@>"),Y:s("U"),r:s("aA"),A:s("q<a0>"),er:s("q<w>"),gl:s("q<F>"),p:s("q<U>"),x:s("q<e>"),f2:s("q<Z>"),L:s("q<u>"),bj:s("q<a_>"),q:s("ba"),f:s("aa<e,e>"),G:s("aa<@,@>"),V:s("V"),I:s("h"),P:s("I"),K:s("t"),d:s("W"),J:s("aP<a_>"),gZ:s("aB"),U:s("hv<a_>"),W:s("be<Z>"),l:s("ac"),bB:s("hw<V>"),N:s("e"),eK:s("aF"),ak:s("bh"),ep:s("bk<W>"),d0:s("Y<q<e>>"),b8:s("Y<e>"),k:s("Z"),ci:s("fj"),E:s("c8<c>"),do:s("c8<V>"),cD:s("aU<p>"),gJ:s("aU<W>"),c:s("D<@>"),fJ:s("D<u>"),cd:s("D<~>"),y:s("a5"),al:s("a5(t)"),gR:s("H"),z:s("@"),fO:s("@()"),v:s("@(t)"),C:s("@(t,ac)"),S:s("u"),aw:s("0&*"),_:s("t*"),ch:s("B?"),eH:s("ay<I>?"),bM:s("q<@>?"),X:s("t?"),eX:s("X<e>?"),ev:s("aT<@>?"),F:s("at<@,@>?"),br:s("dF?"),b7:s("a5(t)?"),bw:s("@(c)?"),Z:s("~()?"),fi:s("~(c)?"),o:s("a_"),H:s("~"),M:s("~()"),d5:s("~(t)"),da:s("~(t,ac)"),eA:s("~(e,e)"),cA:s("~(e,@)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.k=A.aZ.prototype
B.n=A.b0.prototype
B.d=A.b1.prototype
B.c=A.b3.prototype
B.f=A.b4.prototype
B.J=J.bI.prototype
B.a=J.y.prototype
B.e=J.bJ.prototype
B.i=J.bL.prototype
B.b=J.aM.prototype
B.K=J.ao.prototype
B.L=J.T.prototype
B.N=A.ba.prototype
B.O=A.W.prototype
B.w=J.d4.prototype
B.o=A.bf.prototype
B.P=A.c_.prototype
B.Q=A.bg.prototype
B.p=J.bh.prototype
B.T=A.bl.prototype
B.q=new A.b8(A.lw(),t.w)
B.r=new A.b8(A.lx(),t.w)
B.t=function getTagFallback(o) {
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
B.x=function() {
  var toStringFunction = Object.prototype.toString;
  function getTag(o) {
    var s = toStringFunction.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = toStringFunction.call(object);
      if (name == "[object Object]") return null;
      return "HTMLElement";
    }
  }
  function getUnknownTagGenericBrowser(object, tag) {
    if (self.HTMLElement && object instanceof HTMLElement) return "HTMLElement";
    return getUnknownTag(object, tag);
  }
  function prototypeForTag(tag) {
    if (typeof window == "undefined") return null;
    if (typeof window[tag] == "undefined") return null;
    var constructor = window[tag];
    if (typeof constructor != "function") return null;
    return constructor.prototype;
  }
  function discriminator(tag) { return null; }
  var isBrowser = typeof navigator == "object";
  return {
    getTag: getTag,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
B.C=function(getTagFallback) {
  return function(hooks) {
    if (typeof navigator != "object") return hooks;
    var ua = navigator.userAgent;
    if (ua.indexOf("DumpRenderTree") >= 0) return hooks;
    if (ua.indexOf("Chrome") >= 0) {
      function confirm(p) {
        return typeof window == "object" && window[p] && window[p].name == p;
      }
      if (confirm("Window") && confirm("HTMLElement")) return hooks;
    }
    hooks.getTag = getTagFallback;
  };
}
B.y=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
B.z=function(hooks) {
  var getTag = hooks.getTag;
  var prototypeForTag = hooks.prototypeForTag;
  function getTagFixed(o) {
    var tag = getTag(o);
    if (tag == "Document") {
      if (!!o.xmlVersion) return "!Document";
      return "!HTMLDocument";
    }
    return tag;
  }
  function prototypeForTagFixed(tag) {
    if (tag == "Document") return null;
    return prototypeForTag(tag);
  }
  hooks.getTag = getTagFixed;
  hooks.prototypeForTag = prototypeForTagFixed;
}
B.B=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Firefox") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "GeoGeolocation": "Geolocation",
    "Location": "!Location",
    "WorkerMessageEvent": "MessageEvent",
    "XMLDocument": "!Document"};
  function getTagFirefox(o) {
    var tag = getTag(o);
    return quickMap[tag] || tag;
  }
  hooks.getTag = getTagFirefox;
}
B.A=function(hooks) {
  var userAgent = typeof navigator == "object" ? navigator.userAgent : "";
  if (userAgent.indexOf("Trident/") == -1) return hooks;
  var getTag = hooks.getTag;
  var quickMap = {
    "BeforeUnloadEvent": "Event",
    "DataTransfer": "Clipboard",
    "HTMLDDElement": "HTMLElement",
    "HTMLDTElement": "HTMLElement",
    "HTMLPhraseElement": "HTMLElement",
    "Position": "Geoposition"
  };
  function getTagIE(o) {
    var tag = getTag(o);
    var newTag = quickMap[tag];
    if (newTag) return newTag;
    if (tag == "Object") {
      if (window.DataView && (o instanceof window.DataView)) return "DataView";
    }
    return tag;
  }
  function prototypeForTagIE(tag) {
    var constructor = window[tag];
    if (constructor == null) return null;
    return constructor.prototype;
  }
  hooks.getTag = getTagIE;
  hooks.prototypeForTag = prototypeForTagIE;
}
B.u=function(hooks) { return hooks; }

B.j=new A.cS()
B.D=new A.d1()
B.m=new A.f5()
B.l=new A.dm()
B.E=new A.dp()
B.F=new A.dx()
B.h=new A.dJ()
B.G=new A.dR()
B.H=new A.b5(0)
B.I=new A.b5(18e4)
B.M=new A.cT(null)
B.v=A.i(s([0,0,24576,1023,65534,34815,65534,18431]),t.t)
B.R=A.lH("t")
B.S=new A.dn(!1)})();(function staticFields(){$.fE=null
$.ic=null
$.i2=null
$.i1=null
$.iX=null
$.iR=null
$.j4=null
$.fZ=null
$.h5=null
$.hP=null
$.bu=null
$.cp=null
$.cq=null
$.hJ=!1
$.v=B.h
$.a4=A.i([],A.iT("y<t>"))})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal,r=hunkHelpers.lazy
s($,"lU","j9",()=>A.ll("_$dart_dartClosure"))
s($,"m9","jf",()=>A.ar(A.fe({
toString:function(){return"$receiver$"}})))
s($,"ma","jg",()=>A.ar(A.fe({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"mb","jh",()=>A.ar(A.fe(null)))
s($,"mc","ji",()=>A.ar(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"mf","jl",()=>A.ar(A.fe(void 0)))
s($,"mg","jm",()=>A.ar(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(q){return q.message}}()))
s($,"me","jk",()=>A.ar(A.im(null)))
s($,"md","jj",()=>A.ar(function(){try{null.$method$}catch(q){return q.message}}()))
s($,"mi","jo",()=>A.ar(A.im(void 0)))
s($,"mh","jn",()=>A.ar(function(){try{(void 0).$method$}catch(q){return q.message}}()))
s($,"ml","hT",()=>A.kc())
s($,"mj","jp",()=>new A.fh().$0())
s($,"mk","jq",()=>new A.fg().$0())
s($,"mn","jr",()=>A.ie("^[\\-\\.0-9A-Z_a-z~]*$"))
s($,"lV","ja",()=>A.ie("^([+-]?\\d{4,6})-?(\\d\\d)-?(\\d\\d)(?:[ T](\\d\\d)(?::?(\\d\\d)(?::?(\\d\\d)(?:[.,](\\d+))?)?)?( ?[zZ]| ?([-+])(\\d\\d)(?::?(\\d\\d))?)?)?$"))
s($,"mz","ha",()=>A.j0(B.R))
s($,"lT","j8",()=>({}))
s($,"lZ","hS",()=>B.b.av(A.hg(),"Opera",0))
s($,"lY","jd",()=>!A.e4($.hS())&&B.b.av(A.hg(),"Trident/",0))
s($,"lX","jc",()=>B.b.av(A.hg(),"Firefox",0))
s($,"lW","jb",()=>"-"+$.je()+"-")
s($,"m_","je",()=>{if(A.e4($.jc()))var q="moz"
else if($.jd())q="ms"
else q=A.e4($.hS())?"o":"webkit"
return q})
r($,"mB","js",()=>{var q,p,o,n,m,l,k,j,i,h,g="SimplePathPanel",f="5px",e="SimpleNavBar",d="LoadIndicator",c="MainWindow",b=A.ho()
b.cG(g)
b.bE()
b.sD(f)
b.sax(0,"45px")
b.sd4(0,f)
b.scI("center")
q=A.ex()
p=t.i
o=A.i([],p)
A.fY()
o=new A.da(q,o,e)
o.ao(e)
o.L(e)
o.cX()
o.sD(f)
o.sU(!0)
q=A.ex()
n=A.i([],p)
A.fY()
n=new A.dd(q,n,g)
n.ao(g)
n.L(g)
n.bE()
n.sD(f)
n.sT(!0)
q=A.k5()
q.d0(A.i(["default","blue"],t.s))
q.sax(0,"23px")
m=t.k
l=A.i([],t.m)
k=A.ho()
j=k.e
j.setAttribute("varName","display")
k.sU(!0)
k.sT(!0)
k.cY()
j=j.style
j.toString
B.c.sd3(j,"auto")
j=A.c0(m)
i=A.ex()
A.fY()
i=new A.cW(i,d)
i.ao(d)
h=A.ex()
p=A.i([],p)
A.fY()
p=new A.cX(b,o,n,q,A.N(t.N,m),l,k,j,i,h,p,c)
p.ao(c)
p.L(c)
p.c_()
return p})
r($,"mC","e9",()=>A.jX())
s($,"mD","hb",()=>{var q,p=new A.fa(A.c0(t.N)),o=A.lJ().localStorage
o.toString
q=B.P.j(o,"theme")
p.bf(q==null?"default":q)
return p})})();(function nativeSupport(){!function(){var s=function(a){var m={}
m[a]=1
return Object.keys(hunkHelpers.convertToFastObject(m))[0]}
v.getIsolateTag=function(a){return s("___dart_"+a+v.isolateTag)}
var r="___dart_isolate_tags_"
var q=Object[r]||(Object[r]=Object.create(null))
var p="_ZxYxX"
for(var o=0;;o++){var n=s(p+"_"+o+"_")
if(!(n in q)){q[n]=1
v.isolateTag=n
break}}v.dispatchPropertyName=v.getIsolateTag("dispatch_record")}()
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.T,MediaError:J.T,Navigator:J.T,NavigatorConcurrentHardware:J.T,NavigatorUserMediaError:J.T,OverconstrainedError:J.T,PositionError:J.T,GeolocationPositionError:J.T,WebGLRenderingContext:J.T,WebGL2RenderingContext:J.T,ArrayBufferView:A.cZ,Uint8Array:A.d_,HTMLAudioElement:A.f,HTMLBRElement:A.f,HTMLBaseElement:A.f,HTMLBodyElement:A.f,HTMLButtonElement:A.f,HTMLContentElement:A.f,HTMLDListElement:A.f,HTMLDataElement:A.f,HTMLDataListElement:A.f,HTMLDetailsElement:A.f,HTMLDialogElement:A.f,HTMLEmbedElement:A.f,HTMLFieldSetElement:A.f,HTMLHRElement:A.f,HTMLHeadElement:A.f,HTMLHeadingElement:A.f,HTMLHtmlElement:A.f,HTMLIFrameElement:A.f,HTMLImageElement:A.f,HTMLInputElement:A.f,HTMLLIElement:A.f,HTMLLabelElement:A.f,HTMLLegendElement:A.f,HTMLMapElement:A.f,HTMLMediaElement:A.f,HTMLMenuElement:A.f,HTMLMetaElement:A.f,HTMLMeterElement:A.f,HTMLModElement:A.f,HTMLOListElement:A.f,HTMLObjectElement:A.f,HTMLOptGroupElement:A.f,HTMLOutputElement:A.f,HTMLParagraphElement:A.f,HTMLParamElement:A.f,HTMLPictureElement:A.f,HTMLPreElement:A.f,HTMLProgressElement:A.f,HTMLQuoteElement:A.f,HTMLScriptElement:A.f,HTMLShadowElement:A.f,HTMLSlotElement:A.f,HTMLSourceElement:A.f,HTMLSpanElement:A.f,HTMLStyleElement:A.f,HTMLTableCaptionElement:A.f,HTMLTableCellElement:A.f,HTMLTableDataCellElement:A.f,HTMLTableHeaderCellElement:A.f,HTMLTableColElement:A.f,HTMLTableElement:A.f,HTMLTableRowElement:A.f,HTMLTableSectionElement:A.f,HTMLTemplateElement:A.f,HTMLTimeElement:A.f,HTMLTitleElement:A.f,HTMLTrackElement:A.f,HTMLUListElement:A.f,HTMLUnknownElement:A.f,HTMLVideoElement:A.f,HTMLDirectoryElement:A.f,HTMLFontElement:A.f,HTMLFrameElement:A.f,HTMLFrameSetElement:A.f,HTMLMarqueeElement:A.f,HTMLElement:A.f,HTMLAnchorElement:A.aZ,HTMLAreaElement:A.cu,HTMLCanvasElement:A.b0,CanvasRenderingContext2D:A.b1,CDATASection:A.ag,CharacterData:A.ag,Comment:A.ag,ProcessingInstruction:A.ag,Text:A.ag,CSSStyleDeclaration:A.b3,MSStyleCSSProperties:A.b3,CSS2Properties:A.b3,HTMLDivElement:A.b4,DOMException:A.ey,DOMRectReadOnly:A.bB,DOMTokenList:A.ez,Element:A.p,AbortPaymentEvent:A.c,AnimationEvent:A.c,AnimationPlaybackEvent:A.c,ApplicationCacheErrorEvent:A.c,BackgroundFetchClickEvent:A.c,BackgroundFetchEvent:A.c,BackgroundFetchFailEvent:A.c,BackgroundFetchedEvent:A.c,BeforeInstallPromptEvent:A.c,BeforeUnloadEvent:A.c,BlobEvent:A.c,CanMakePaymentEvent:A.c,ClipboardEvent:A.c,CloseEvent:A.c,CustomEvent:A.c,DeviceMotionEvent:A.c,DeviceOrientationEvent:A.c,ErrorEvent:A.c,ExtendableEvent:A.c,ExtendableMessageEvent:A.c,FetchEvent:A.c,FontFaceSetLoadEvent:A.c,ForeignFetchEvent:A.c,GamepadEvent:A.c,InstallEvent:A.c,MediaEncryptedEvent:A.c,MediaKeyMessageEvent:A.c,MediaQueryListEvent:A.c,MediaStreamEvent:A.c,MediaStreamTrackEvent:A.c,MessageEvent:A.c,MIDIConnectionEvent:A.c,MIDIMessageEvent:A.c,MutationEvent:A.c,NotificationEvent:A.c,PageTransitionEvent:A.c,PaymentRequestEvent:A.c,PaymentRequestUpdateEvent:A.c,PopStateEvent:A.c,PresentationConnectionAvailableEvent:A.c,PresentationConnectionCloseEvent:A.c,PromiseRejectionEvent:A.c,PushEvent:A.c,RTCDataChannelEvent:A.c,RTCDTMFToneChangeEvent:A.c,RTCPeerConnectionIceEvent:A.c,RTCTrackEvent:A.c,SecurityPolicyViolationEvent:A.c,SensorErrorEvent:A.c,SpeechRecognitionError:A.c,SpeechRecognitionEvent:A.c,SpeechSynthesisEvent:A.c,StorageEvent:A.c,SyncEvent:A.c,TrackEvent:A.c,TransitionEvent:A.c,WebKitTransitionEvent:A.c,VRDeviceEvent:A.c,VRDisplayEvent:A.c,VRSessionEvent:A.c,MojoInterfaceRequestEvent:A.c,USBConnectionEvent:A.c,IDBVersionChangeEvent:A.c,AudioProcessingEvent:A.c,OfflineAudioCompletionEvent:A.c,WebGLContextEvent:A.c,Event:A.c,InputEvent:A.c,SubmitEvent:A.c,EventTarget:A.B,HTMLFormElement:A.cL,HashChangeEvent:A.b7,HTMLCollection:A.az,HTMLFormControlsCollection:A.az,HTMLOptionsCollection:A.az,HTMLLinkElement:A.aA,Location:A.ba,MouseEvent:A.V,DragEvent:A.V,PointerEvent:A.V,WheelEvent:A.V,Document:A.h,DocumentFragment:A.h,HTMLDocument:A.h,ShadowRoot:A.h,XMLDocument:A.h,Attr:A.h,DocumentType:A.h,Node:A.h,NodeList:A.bT,RadioNodeList:A.bT,HTMLOptionElement:A.W,ProgressEvent:A.aB,ResourceProgressEvent:A.aB,HTMLSelectElement:A.bf,Storage:A.c_,HTMLTextAreaElement:A.bg,CompositionEvent:A.ad,FocusEvent:A.ad,KeyboardEvent:A.ad,TextEvent:A.ad,TouchEvent:A.ad,UIEvent:A.ad,Window:A.bl,DOMWindow:A.bl,ClientRect:A.c7,DOMRect:A.c7,NamedNodeMap:A.cd,MozNamedAttrMap:A.cd,SVGAElement:A.d,SVGAnimateElement:A.d,SVGAnimateMotionElement:A.d,SVGAnimateTransformElement:A.d,SVGAnimationElement:A.d,SVGCircleElement:A.d,SVGClipPathElement:A.d,SVGDefsElement:A.d,SVGDescElement:A.d,SVGDiscardElement:A.d,SVGEllipseElement:A.d,SVGFEBlendElement:A.d,SVGFEColorMatrixElement:A.d,SVGFEComponentTransferElement:A.d,SVGFECompositeElement:A.d,SVGFEConvolveMatrixElement:A.d,SVGFEDiffuseLightingElement:A.d,SVGFEDisplacementMapElement:A.d,SVGFEDistantLightElement:A.d,SVGFEFloodElement:A.d,SVGFEFuncAElement:A.d,SVGFEFuncBElement:A.d,SVGFEFuncGElement:A.d,SVGFEFuncRElement:A.d,SVGFEGaussianBlurElement:A.d,SVGFEImageElement:A.d,SVGFEMergeElement:A.d,SVGFEMergeNodeElement:A.d,SVGFEMorphologyElement:A.d,SVGFEOffsetElement:A.d,SVGFEPointLightElement:A.d,SVGFESpecularLightingElement:A.d,SVGFESpotLightElement:A.d,SVGFETileElement:A.d,SVGFETurbulenceElement:A.d,SVGFilterElement:A.d,SVGForeignObjectElement:A.d,SVGGElement:A.d,SVGGeometryElement:A.d,SVGGraphicsElement:A.d,SVGImageElement:A.d,SVGLineElement:A.d,SVGLinearGradientElement:A.d,SVGMarkerElement:A.d,SVGMaskElement:A.d,SVGMetadataElement:A.d,SVGPathElement:A.d,SVGPatternElement:A.d,SVGPolygonElement:A.d,SVGPolylineElement:A.d,SVGRadialGradientElement:A.d,SVGRectElement:A.d,SVGScriptElement:A.d,SVGSetElement:A.d,SVGStopElement:A.d,SVGStyleElement:A.d,SVGElement:A.d,SVGSVGElement:A.d,SVGSwitchElement:A.d,SVGSymbolElement:A.d,SVGTSpanElement:A.d,SVGTextContentElement:A.d,SVGTextElement:A.d,SVGTextPathElement:A.d,SVGTextPositioningElement:A.d,SVGTitleElement:A.d,SVGUseElement:A.d,SVGViewElement:A.d,SVGGradientElement:A.d,SVGComponentTransferFunctionElement:A.d,SVGFEDropShadowElement:A.d,SVGMPathElement:A.d})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,WebGLRenderingContext:true,WebGL2RenderingContext:true,ArrayBufferView:false,Uint8Array:false,HTMLAudioElement:true,HTMLBRElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLIElement:true,HTMLLabelElement:true,HTMLLegendElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLSpanElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,HTMLDivElement:true,DOMException:true,DOMRectReadOnly:false,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,CustomEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HashChangeEvent:true,HTMLCollection:true,HTMLFormControlsCollection:true,HTMLOptionsCollection:true,HTMLLinkElement:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,Document:true,DocumentFragment:true,HTMLDocument:true,ShadowRoot:true,XMLDocument:true,Attr:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLOptionElement:true,ProgressEvent:true,ResourceProgressEvent:true,HTMLSelectElement:true,Storage:true,HTMLTextAreaElement:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,TouchEvent:true,UIEvent:false,Window:true,DOMWindow:true,ClientRect:true,DOMRect:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGScriptElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true})
A.bd.$nativeSuperclassTag="ArrayBufferView"
A.ce.$nativeSuperclassTag="ArrayBufferView"
A.cf.$nativeSuperclassTag="ArrayBufferView"
A.bS.$nativeSuperclassTag="ArrayBufferView"})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.hQ
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map
