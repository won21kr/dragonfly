/*
 * Dragonfly 0.1.0
 * A flexible and light ui framework
 * (c) 2014 Sogou Inc. All rights reserved.
 * https://github.com/bizdevfe/dragonfly
 */

(function(e,t){typeof define=="function"&&(define.amd||define.cmd)?define([],t):e.D=t()})(this,function(){var e,t,n;return function(r){function v(e,t){return h.call(e,t)}function m(e,t){var n,r,i,s,o,u,a,f,c,h,p,v=t&&t.split("/"),m=l.map,g=m&&m["*"]||{};if(e&&e.charAt(0)===".")if(t){v=v.slice(0,v.length-1),e=e.split("/"),o=e.length-1,l.nodeIdCompat&&d.test(e[o])&&(e[o]=e[o].replace(d,"")),e=v.concat(e);for(c=0;c<e.length;c+=1){p=e[c];if(p===".")e.splice(c,1),c-=1;else if(p===".."){if(c===1&&(e[2]===".."||e[0]===".."))break;c>0&&(e.splice(c-1,2),c-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((v||g)&&m){n=e.split("/");for(c=n.length;c>0;c-=1){r=n.slice(0,c).join("/");if(v)for(h=v.length;h>0;h-=1){i=m[v.slice(0,h).join("/")];if(i){i=i[r];if(i){s=i,u=c;break}}}if(s)break;!a&&g&&g[r]&&(a=g[r],f=c)}!s&&a&&(s=a,u=f),s&&(n.splice(0,u,s),e=n.join("/"))}return e}function g(e,t){return function(){return s.apply(r,p.call(arguments,0).concat([e,t]))}}function y(e){return function(t){return m(t,e)}}function b(e){return function(t){a[e]=t}}function w(e){if(v(f,e)){var t=f[e];delete f[e],c[e]=!0,i.apply(r,t)}if(!v(a,e)&&!v(c,e))throw new Error("No "+e);return a[e]}function E(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function S(e){return function(){return l&&l.config&&l.config[e]||{}}}var i,s,o,u,a={},f={},l={},c={},h=Object.prototype.hasOwnProperty,p=[].slice,d=/\.js$/;o=function(e,t){var n,r=E(e),i=r[0];return e=r[1],i&&(i=m(i,t),n=w(i)),i?n&&n.normalize?e=n.normalize(e,y(t)):e=m(e,t):(e=m(e,t),r=E(e),i=r[0],e=r[1],i&&(n=w(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},u={require:function(e){return g(e)},exports:function(e){var t=a[e];return typeof t!="undefined"?t:a[e]={}},module:function(e){return{id:e,uri:"",exports:a[e],config:S(e)}}},i=function(e,t,n,i){var s,l,h,p,d,m=[],y=typeof n,E;i=i||e;if(y==="undefined"||y==="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(d=0;d<t.length;d+=1){p=o(t[d],i),l=p.f;if(l==="require")m[d]=u.require(e);else if(l==="exports")m[d]=u.exports(e),E=!0;else if(l==="module")s=m[d]=u.module(e);else if(v(a,l)||v(f,l)||v(c,l))m[d]=w(l);else{if(!p.p)throw new Error(e+" missing "+l);p.p.load(p.n,g(i,!0),b(l),{}),m[d]=a[l]}}h=n?n.apply(a[e],m):undefined;if(e)if(s&&s.exports!==r&&s.exports!==a[e])a[e]=s.exports;else if(h!==r||!E)a[e]=h}else e&&(a[e]=n)},e=t=s=function(e,t,n,a,f){if(typeof e=="string")return u[e]?u[e](t):w(o(e,t).f);if(!e.splice){l=e,l.deps&&s(l.deps,l.callback);if(!t)return;t.splice?(e=t,t=n,n=null):e=r}return t=t||function(){},typeof n=="function"&&(n=a,a=f),a?i(r,e,t,n):setTimeout(function(){i(r,e,t,n)},4),s},s.config=function(e){return s(e)},e._defined=a,n=function(e,t,n){t.splice||(n=t,t=[]),!v(a,e)&&!v(f,e)&&(f[e]=[e,t,n])},n.amd={jQuery:!0}}(),n("loader/almond",function(){}),function(){var e=this,t=e._,r={},i=Array.prototype,s=Object.prototype,o=Function.prototype,u=i.push,a=i.slice,f=i.concat,l=s.toString,c=s.hasOwnProperty,h=i.forEach,p=i.map,d=i.reduce,v=i.reduceRight,m=i.filter,g=i.every,y=i.some,b=i.indexOf,w=i.lastIndexOf,E=Array.isArray,S=Object.keys,x=o.bind,T=function(e){if(e instanceof T)return e;if(!(this instanceof T))return new T(e);this._wrapped=e};typeof exports!="undefined"?(typeof module!="undefined"&&module.exports&&(exports=module.exports=T),exports._=T):e._=T,T.VERSION="1.6.0";var N=T.each=T.forEach=function(e,t,n){if(e==null)return e;if(h&&e.forEach===h)e.forEach(t,n);else if(e.length===+e.length){for(var i=0,s=e.length;i<s;i++)if(t.call(n,e[i],i,e)===r)return}else{var o=T.keys(e);for(var i=0,s=o.length;i<s;i++)if(t.call(n,e[o[i]],o[i],e)===r)return}return e};T.map=T.collect=function(e,t,n){var r=[];return e==null?r:p&&e.map===p?e.map(t,n):(N(e,function(e,i,s){r.push(t.call(n,e,i,s))}),r)};var C="Reduce of empty array with no initial value";T.reduce=T.foldl=T.inject=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(d&&e.reduce===d)return r&&(t=T.bind(t,r)),i?e.reduce(t,n):e.reduce(t);N(e,function(e,s,o){i?n=t.call(r,n,e,s,o):(n=e,i=!0)});if(!i)throw new TypeError(C);return n},T.reduceRight=T.foldr=function(e,t,n,r){var i=arguments.length>2;e==null&&(e=[]);if(v&&e.reduceRight===v)return r&&(t=T.bind(t,r)),i?e.reduceRight(t,n):e.reduceRight(t);var s=e.length;if(s!==+s){var o=T.keys(e);s=o.length}N(e,function(u,a,f){a=o?o[--s]:--s,i?n=t.call(r,n,e[a],a,f):(n=e[a],i=!0)});if(!i)throw new TypeError(C);return n},T.find=T.detect=function(e,t,n){var r;return k(e,function(e,i,s){if(t.call(n,e,i,s))return r=e,!0}),r},T.filter=T.select=function(e,t,n){var r=[];return e==null?r:m&&e.filter===m?e.filter(t,n):(N(e,function(e,i,s){t.call(n,e,i,s)&&r.push(e)}),r)},T.reject=function(e,t,n){return T.filter(e,function(e,r,i){return!t.call(n,e,r,i)},n)},T.every=T.all=function(e,t,n){t||(t=T.identity);var i=!0;return e==null?i:g&&e.every===g?e.every(t,n):(N(e,function(e,s,o){if(!(i=i&&t.call(n,e,s,o)))return r}),!!i)};var k=T.some=T.any=function(e,t,n){t||(t=T.identity);var i=!1;return e==null?i:y&&e.some===y?e.some(t,n):(N(e,function(e,s,o){if(i||(i=t.call(n,e,s,o)))return r}),!!i)};T.contains=T.include=function(e,t){return e==null?!1:b&&e.indexOf===b?e.indexOf(t)!=-1:k(e,function(e){return e===t})},T.invoke=function(e,t){var n=a.call(arguments,2),r=T.isFunction(t);return T.map(e,function(e){return(r?t:e[t]).apply(e,n)})},T.pluck=function(e,t){return T.map(e,T.property(t))},T.where=function(e,t){return T.filter(e,T.matches(t))},T.findWhere=function(e,t){return T.find(e,T.matches(t))},T.max=function(e,t,n){if(!t&&T.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.max.apply(Math,e);var r=-Infinity,i=-Infinity;return N(e,function(e,s,o){var u=t?t.call(n,e,s,o):e;u>i&&(r=e,i=u)}),r},T.min=function(e,t,n){if(!t&&T.isArray(e)&&e[0]===+e[0]&&e.length<65535)return Math.min.apply(Math,e);var r=Infinity,i=Infinity;return N(e,function(e,s,o){var u=t?t.call(n,e,s,o):e;u<i&&(r=e,i=u)}),r},T.shuffle=function(e){var t,n=0,r=[];return N(e,function(e){t=T.random(n++),r[n-1]=r[t],r[t]=e}),r},T.sample=function(e,t,n){return t==null||n?(e.length!==+e.length&&(e=T.values(e)),e[T.random(e.length-1)]):T.shuffle(e).slice(0,Math.max(0,t))};var L=function(e){return e==null?T.identity:T.isFunction(e)?e:T.property(e)};T.sortBy=function(e,t,n){return t=L(t),T.pluck(T.map(e,function(e,r,i){return{value:e,index:r,criteria:t.call(n,e,r,i)}}).sort(function(e,t){var n=e.criteria,r=t.criteria;if(n!==r){if(n>r||n===void 0)return 1;if(n<r||r===void 0)return-1}return e.index-t.index}),"value")};var A=function(e){return function(t,n,r){var i={};return n=L(n),N(t,function(s,o){var u=n.call(r,s,o,t);e(i,u,s)}),i}};T.groupBy=A(function(e,t,n){T.has(e,t)?e[t].push(n):e[t]=[n]}),T.indexBy=A(function(e,t,n){e[t]=n}),T.countBy=A(function(e,t){T.has(e,t)?e[t]++:e[t]=1}),T.sortedIndex=function(e,t,n,r){n=L(n);var i=n.call(r,t),s=0,o=e.length;while(s<o){var u=s+o>>>1;n.call(r,e[u])<i?s=u+1:o=u}return s},T.toArray=function(e){return e?T.isArray(e)?a.call(e):e.length===+e.length?T.map(e,T.identity):T.values(e):[]},T.size=function(e){return e==null?0:e.length===+e.length?e.length:T.keys(e).length},T.first=T.head=T.take=function(e,t,n){return e==null?void 0:t==null||n?e[0]:t<0?[]:a.call(e,0,t)},T.initial=function(e,t,n){return a.call(e,0,e.length-(t==null||n?1:t))},T.last=function(e,t,n){return e==null?void 0:t==null||n?e[e.length-1]:a.call(e,Math.max(e.length-t,0))},T.rest=T.tail=T.drop=function(e,t,n){return a.call(e,t==null||n?1:t)},T.compact=function(e){return T.filter(e,T.identity)};var O=function(e,t,n){return t&&T.every(e,T.isArray)?f.apply(n,e):(N(e,function(e){T.isArray(e)||T.isArguments(e)?t?u.apply(n,e):O(e,t,n):n.push(e)}),n)};T.flatten=function(e,t){return O(e,t,[])},T.without=function(e){return T.difference(e,a.call(arguments,1))},T.partition=function(e,t){var n=[],r=[];return N(e,function(e){(t(e)?n:r).push(e)}),[n,r]},T.uniq=T.unique=function(e,t,n,r){T.isFunction(t)&&(r=n,n=t,t=!1);var i=n?T.map(e,n,r):e,s=[],o=[];return N(i,function(n,r){if(t?!r||o[o.length-1]!==n:!T.contains(o,n))o.push(n),s.push(e[r])}),s},T.union=function(){return T.uniq(T.flatten(arguments,!0))},T.intersection=function(e){var t=a.call(arguments,1);return T.filter(T.uniq(e),function(e){return T.every(t,function(t){return T.contains(t,e)})})},T.difference=function(e){var t=f.apply(i,a.call(arguments,1));return T.filter(e,function(e){return!T.contains(t,e)})},T.zip=function(){var e=T.max(T.pluck(arguments,"length").concat(0)),t=new Array(e);for(var n=0;n<e;n++)t[n]=T.pluck(arguments,""+n);return t},T.object=function(e,t){if(e==null)return{};var n={};for(var r=0,i=e.length;r<i;r++)t?n[e[r]]=t[r]:n[e[r][0]]=e[r][1];return n},T.indexOf=function(e,t,n){if(e==null)return-1;var r=0,i=e.length;if(n){if(typeof n!="number")return r=T.sortedIndex(e,t),e[r]===t?r:-1;r=n<0?Math.max(0,i+n):n}if(b&&e.indexOf===b)return e.indexOf(t,n);for(;r<i;r++)if(e[r]===t)return r;return-1},T.lastIndexOf=function(e,t,n){if(e==null)return-1;var r=n!=null;if(w&&e.lastIndexOf===w)return r?e.lastIndexOf(t,n):e.lastIndexOf(t);var i=r?n:e.length;while(i--)if(e[i]===t)return i;return-1},T.range=function(e,t,n){arguments.length<=1&&(t=e||0,e=0),n=arguments[2]||1;var r=Math.max(Math.ceil((t-e)/n),0),i=0,s=new Array(r);while(i<r)s[i++]=e,e+=n;return s};var M=function(){};T.bind=function(e,t){var n,r;if(x&&e.bind===x)return x.apply(e,a.call(arguments,1));if(!T.isFunction(e))throw new TypeError;return n=a.call(arguments,2),r=function(){if(this instanceof r){M.prototype=e.prototype;var i=new M;M.prototype=null;var s=e.apply(i,n.concat(a.call(arguments)));return Object(s)===s?s:i}return e.apply(t,n.concat(a.call(arguments)))}},T.partial=function(e){var t=a.call(arguments,1);return function(){var n=0,r=t.slice();for(var i=0,s=r.length;i<s;i++)r[i]===T&&(r[i]=arguments[n++]);while(n<arguments.length)r.push(arguments[n++]);return e.apply(this,r)}},T.bindAll=function(e){var t=a.call(arguments,1);if(t.length===0)throw new Error("bindAll must be passed function names");return N(t,function(t){e[t]=T.bind(e[t],e)}),e},T.memoize=function(e,t){var n={};return t||(t=T.identity),function(){var r=t.apply(this,arguments);return T.has(n,r)?n[r]:n[r]=e.apply(this,arguments)}},T.delay=function(e,t){var n=a.call(arguments,2);return setTimeout(function(){return e.apply(null,n)},t)},T.defer=function(e){return T.delay.apply(T,[e,1].concat(a.call(arguments,1)))},T.throttle=function(e,t,n){var r,i,s,o=null,u=0;n||(n={});var a=function(){u=n.leading===!1?0:T.now(),o=null,s=e.apply(r,i),r=i=null};return function(){var f=T.now();!u&&n.leading===!1&&(u=f);var l=t-(f-u);return r=this,i=arguments,l<=0?(clearTimeout(o),o=null,u=f,s=e.apply(r,i),r=i=null):!o&&n.trailing!==!1&&(o=setTimeout(a,l)),s}},T.debounce=function(e,t,n){var r,i,s,o,u,a=function(){var f=T.now()-o;f<t?r=setTimeout(a,t-f):(r=null,n||(u=e.apply(s,i),s=i=null))};return function(){s=this,i=arguments,o=T.now();var f=n&&!r;return r||(r=setTimeout(a,t)),f&&(u=e.apply(s,i),s=i=null),u}},T.once=function(e){var t=!1,n;return function(){return t?n:(t=!0,n=e.apply(this,arguments),e=null,n)}},T.wrap=function(e,t){return T.partial(t,e)},T.compose=function(){var e=arguments;return function(){var t=arguments;for(var n=e.length-1;n>=0;n--)t=[e[n].apply(this,t)];return t[0]}},T.after=function(e,t){return function(){if(--e<1)return t.apply(this,arguments)}},T.keys=function(e){if(!T.isObject(e))return[];if(S)return S(e);var t=[];for(var n in e)T.has(e,n)&&t.push(n);return t},T.values=function(e){var t=T.keys(e),n=t.length,r=new Array(n);for(var i=0;i<n;i++)r[i]=e[t[i]];return r},T.pairs=function(e){var t=T.keys(e),n=t.length,r=new Array(n);for(var i=0;i<n;i++)r[i]=[t[i],e[t[i]]];return r},T.invert=function(e){var t={},n=T.keys(e);for(var r=0,i=n.length;r<i;r++)t[e[n[r]]]=n[r];return t},T.functions=T.methods=function(e){var t=[];for(var n in e)T.isFunction(e[n])&&t.push(n);return t.sort()},T.extend=function(e){return N(a.call(arguments,1),function(t){if(t)for(var n in t)e[n]=t[n]}),e},T.pick=function(e){var t={},n=f.apply(i,a.call(arguments,1));return N(n,function(n){n in e&&(t[n]=e[n])}),t},T.omit=function(e){var t={},n=f.apply(i,a.call(arguments,1));for(var r in e)T.contains(n,r)||(t[r]=e[r]);return t},T.defaults=function(e){return N(a.call(arguments,1),function(t){if(t)for(var n in t)e[n]===void 0&&(e[n]=t[n])}),e},T.clone=function(e){return T.isObject(e)?T.isArray(e)?e.slice():T.extend({},e):e},T.tap=function(e,t){return t(e),e};var _=function(e,t,n,r){if(e===t)return e!==0||1/e==1/t;if(e==null||t==null)return e===t;e instanceof T&&(e=e._wrapped),t instanceof T&&(t=t._wrapped);var i=l.call(e);if(i!=l.call(t))return!1;switch(i){case"[object String]":return e==String(t);case"[object Number]":return e!=+e?t!=+t:e==0?1/e==1/t:e==+t;case"[object Date]":case"[object Boolean]":return+e==+t;case"[object RegExp]":return e.source==t.source&&e.global==t.global&&e.multiline==t.multiline&&e.ignoreCase==t.ignoreCase}if(typeof e!="object"||typeof t!="object")return!1;var s=n.length;while(s--)if(n[s]==e)return r[s]==t;var o=e.constructor,u=t.constructor;if(o!==u&&!(T.isFunction(o)&&o instanceof o&&T.isFunction(u)&&u instanceof u)&&"constructor"in e&&"constructor"in t)return!1;n.push(e),r.push(t);var a=0,f=!0;if(i=="[object Array]"){a=e.length,f=a==t.length;if(f)while(a--)if(!(f=_(e[a],t[a],n,r)))break}else{for(var c in e)if(T.has(e,c)){a++;if(!(f=T.has(t,c)&&_(e[c],t[c],n,r)))break}if(f){for(c in t)if(T.has(t,c)&&!(a--))break;f=!a}}return n.pop(),r.pop(),f};T.isEqual=function(e,t){return _(e,t,[],[])},T.isEmpty=function(e){if(e==null)return!0;if(T.isArray(e)||T.isString(e))return e.length===0;for(var t in e)if(T.has(e,t))return!1;return!0},T.isElement=function(e){return!!e&&e.nodeType===1},T.isArray=E||function(e){return l.call(e)=="[object Array]"},T.isObject=function(e){return e===Object(e)},N(["Arguments","Function","String","Number","Date","RegExp"],function(e){T["is"+e]=function(t){return l.call(t)=="[object "+e+"]"}}),T.isArguments(arguments)||(T.isArguments=function(e){return!!e&&!!T.has(e,"callee")}),typeof /./!="function"&&(T.isFunction=function(e){return typeof e=="function"}),T.isFinite=function(e){return isFinite(e)&&!isNaN(parseFloat(e))},T.isNaN=function(e){return T.isNumber(e)&&e!=+e},T.isBoolean=function(e){return e===!0||e===!1||l.call(e)=="[object Boolean]"},T.isNull=function(e){return e===null},T.isUndefined=function(e){return e===void 0},T.has=function(e,t){return c.call(e,t)},T.noConflict=function(){return e._=t,this},T.identity=function(e){return e},T.constant=function(e){return function(){return e}},T.property=function(e){return function(t){return t[e]}},T.matches=function(e){return function(t){if(t===e)return!0;for(var n in e)if(e[n]!==t[n])return!1;return!0}},T.times=function(e,t,n){var r=Array(Math.max(0,e));for(var i=0;i<e;i++)r[i]=t.call(n,i);return r},T.random=function(e,t){return t==null&&(t=e,e=0),e+Math.floor(Math.random()*(t-e+1))},T.now=Date.now||function(){return(new Date).getTime()};var D={escape:{"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#x27;"}};D.unescape=T.invert(D.escape);var P={escape:new RegExp("["+T.keys(D.escape).join("")+"]","g"),unescape:new RegExp("("+T.keys(D.unescape).join("|")+")","g")};T.each(["escape","unescape"],function(e){T[e]=function(t){return t==null?"":(""+t).replace(P[e],function(t){return D[e][t]})}}),T.result=function(e,t){if(e==null)return void 0;var n=e[t];return T.isFunction(n)?n.call(e):n},T.mixin=function(e){N(T.functions(e),function(t){var n=T[t]=e[t];T.prototype[t]=function(){var e=[this._wrapped];return u.apply(e,arguments),I.call(this,n.apply(T,e))}})};var H=0;T.uniqueId=function(e){var t=++H+"";return e?e+t:t},T.templateSettings={evaluate:/<%([\s\S]+?)%>/g,interpolate:/<%=([\s\S]+?)%>/g,escape:/<%-([\s\S]+?)%>/g};var B=/(.)^/,j={"'":"'","\\":"\\","\r":"r","\n":"n","	":"t","\u2028":"u2028","\u2029":"u2029"},F=/\\|'|\r|\n|\t|\u2028|\u2029/g;T.template=function(e,t,n){var r;n=T.defaults({},n,T.templateSettings);var i=new RegExp([(n.escape||B).source,(n.interpolate||B).source,(n.evaluate||B).source].join("|")+"|$","g"),s=0,o="__p+='";e.replace(i,function(t,n,r,i,u){return o+=e.slice(s,u).replace(F,function(e){return"\\"+j[e]}),n&&(o+="'+\n((__t=("+n+"))==null?'':_.escape(__t))+\n'"),r&&(o+="'+\n((__t=("+r+"))==null?'':__t)+\n'"),i&&(o+="';\n"+i+"\n__p+='"),s=u+t.length,t}),o+="';\n",n.variable||(o="with(obj||{}){\n"+o+"}\n"),o="var __t,__p='',__j=Array.prototype.join,print=function(){__p+=__j.call(arguments,'');};\n"+o+"return __p;\n";try{r=new Function(n.variable||"obj","_",o)}catch(u){throw u.source=o,u}if(t)return r(t,T);var a=function(e){return r.call(this,e,T)};return a.source="function("+(n.variable||"obj")+"){\n"+o+"}",a},T.chain=function(e){return T(e).chain()};var I=function(e){return this._chain?T(e).chain():e};T.mixin(T),N(["pop","push","reverse","shift","sort","splice","unshift"],function(e){var t=i[e];T.prototype[e]=function(){var n=this._wrapped;return t.apply(n,arguments),(e=="shift"||e=="splice")&&n.length===0&&delete n[0],I.call(this,n)}}),N(["concat","join","slice"],function(e){var t=i[e];T.prototype[e]=function(){return I.call(this,t.apply(this._wrapped,arguments))}}),T.extend(T.prototype,{chain:function(){return this._chain=!0,this},value:function(){return this._wrapped}}),typeof n=="function"&&n.amd&&n("underscore",[],function(){return T})}.call(this),n("base/string",["require"],function(e){var t={};return t.trim=function(e){return e.trim?e.trim():e.replace(/^\s*|\s*$/,"")},t.trimLeft=function(e){return e.trimLeft?e.trimLeft():e.replace(/^\s*/,"")},t.trimRight=function(e){return e.trimRight?e.trimRight():e.replace(/\s*$/,"")},t}),n("base/browser",["require"],function(e){var t={},n=navigator.userAgent;return t.isQuirks=document.compatMode==="BackCompat",t.isGecko=/gecko/i.test(n)&&!/like gecko/i.test(n),t.isWebkit=/webkit/i.test(n),t.ie=document.documentMode,t.badie=t.ie===6||t.ie===7,t.chrome=/chrome\/(\d+\.\d+)/i.test(n)?+RegExp.$1:undefined,t.firefox=/firefox\/(\d+\.\d+)/i.test(n)?+RegExp.$1:undefined,t.safari=/(\d+\.\d+)(\.\d)?\ssafari/i.test(n)?+RegExp.$1:undefined,t.opera=/opr\/(\d+\.\d+)/i.test(n)?+RegExp.$1:undefined,t}),n("base/oo",["require","underscore"],function(e){var t=e("underscore").noConflict(),n={};return n.inherit=function(e,n){function r(){}r.prototype=n.prototype;var i=e.prototype,s=e.prototype=new r;return t.extend(s,i),e.prototype.constructor=e,e.superclass=n.prototype,e},n}),function(e){function g(e,t){if(!t)throw"assertion '"+e+"' failed."}function y(e,t,n){g(e,n.test(t))}function b(e,t){var n=Object.prototype.toString.call(t)==="[object Function]";g(e+" is a function",n)}function w(t,n){g(t+" is element",n instanceof e.Element)}function E(t,n){g(t+" is a node",n instanceof e.Node)}function S(e,t){var n=typeof t;g(e+" is string",n==="string")}function T(e,t){S(e,t),y(e+" is a complex selector",t,x)}function C(e,t){S(e,t),y(e+" is a simple selector",t,N)}function k(e,t,n){var r=L(t),i=p[r];return i&&i.set?i.set(e,n):e.style[r]=n}function L(e){return h[e]||(h[e]=e.replace(f,function(e,t){return t.toUpperCase()}))}function A(e,t,n){if(n===o){if(typeof t=="string")return m(e,t)||0;for(var r in t)k(e,r,t[r])}else k(e,t,n)}function O(e){var t,n=[];if(typeof e=="string")while(e){t=e.match(a);if(t[0]==="")break;n.push({rel:t[1],uTag:(t[2]||"").toUpperCase(),id:t[3],classes:t[4]?t[4].split("."):o}),e=e.substring(t[0].length)}return n}function M(e,t){while((e=e.parentNode)&&e!==t);return e!==null}function _(e,n){function r(e,n){var r,i=n.id?(r=(e&&e.ownerDocument||t).getElementById(n.id))&&M(r,e)?[r]:[]:u(e.getElementsByTagName(n.uTag||"*"));r=i.length;if(r>0&&(n.id||n.classes))while(r--)D(i[r],n)||i.splice(r,1);return i}function u(e){try{return Array.prototype.slice.call(e)}catch(t){var n=[];for(var r=0,i=e.length;r<i;r++)n.push(e[r]);return n}}function a(e){for(var t=f.length;t--;)if(f[t]===e)return i;return s}w("refelm",e),n!==o&&T("selector",n);var f=[],l=[e],c=O(n),h,p,d,v,m,g,y,b,E;c.length||(c=[{}]);for(h=0,p=c.length;h<p;h++){y=c[h];for(d=0,v=l.length;d<v;d++){b=l[d];switch(y.rel){case">":var S=b.childNodes;for(m=0,g=S.length;m<g;m++)D(S[m],y)&&f.push(S[m]);break;case"~":while(b=b.nextSibling)if(D(b,y)){if(a(b))break;f.push(b)}break;case"+":while((b=b.nextSibling)&&b.nodeType!==1);b&&D(b,y)&&f.push(b);break;default:E=r(b,y);if(h>0)for(m=0,g=E.length;m<g;m++)a(E[m])||f.push(E[m]);else f=f.concat(E)}}if(!f.length)return[];l=f.splice(0,f.length)}return l}function D(e,t){if(!t)return!0;var n=t.uTag,r=t.id,i=t.classes;return e.nodeType===1&&(!n||n===e.tagName)&&(!r||r===e.id)&&(!i||!!j(e,i))}function P(e,t,n){E("elm",e),n!==o&&C("selectorFragment",n),n=O(n)[0];while(e&&!D(e,n)&&(e=e[t]));return e}function H(e,t){return w("elm",e),C("selectorFragment",t),t=O(t)[0],e&&D(e,t)}function B(e,t,n){return E("elm",e),n!==o&&C("selector",n),P(e[t],t,n)}function j(e,t){if(e.className==="")return s;for(var n=0;n<t.length;n++)if(!$(e,t[n]))return s;return i}function F(){function u(t){if(!n){n=!0,i&&(i=e.clearTimeout(i));for(var r=0,s=l.length;r<s;r++)l[r]()}}function a(){try{r.doScroll("left")}catch(t){e.setTimeout(a,20);return}u()}var n,i,o;if(t.addEventListener)t.addEventListener("DOMContentLoaded",u,s),t.addEventListener("load",u,s);else if(t.attachEvent){t.attachEvent("onload",u);var f=!1;try{f=e.frameElement===null}catch(c){}f&&r.doScroll&&a()}}function I(e,n){var r=O(e)[0],i=r.uTag;if(!i)return null;var s=(n||t).createElement(i),o=r.id,u=r.classes;return o&&(s.id=o),u&&(s.className=u.join(" ")),s}function q(n){b("onready handler",n),/loaded|complete|interactive/.test(t.readyState)?e.setTimeout(n,0):l.push(n)}function R(e,t){return _(t||r,e)}function U(e,t){return B(e,"parentNode",t)}function z(e,t){return B(e,"nextSibling",t)}function W(e,t){return B(e,"previousSibling",t)}function X(e,t){return E("elm",e),t!==o&&C("selector",t),e=e.parentNode.firstChild,P(e,"nextSibling",t)}function V(e,t){return E("elm",e),t!==o&&C("selector",t),e=e.parentNode.lastChild,P(e,"previousSibling",t)}function $(e,t){return w("elm",e),S("className",t),g("className has no space",t.indexOf(" ")===-1),(" "+e.className+" ").indexOf(" "+t+" ")>-1}function J(e,t){w("elm",e),S("className",t),$(e,t)||(e.className+=" "+t)}function K(e,t){w("elm",e),S("className",t),g("className has no space",t.indexOf(" ")===-1),$(e,t)&&(e.className=e.className.replace(new RegExp("(^|\\s)"+t+"(\\s|$)")," ").replace(/\s$/,""))}function Q(e,t,n){(n?J:K)(e,t)}function G(e){return t.createTextNode(e)}function Y(e,t,n){e.setAttribute(t,""+n)}function Z(e,t){return e.getAttribute(t)||null}function et(e,t,n){w("elm",e);if(typeof t=="object"){for(var r in t)Y(e,r,t[r]);return}S("attr",t);if(n===o)return Z(e,t);Y(e,t,n)}function tt(e){w("elm",e);while(e.firstChild)e.removeChild(e.firstChild)}function nt(e,t){t||(t=e,e=this);for(var n in t)e[n]=t[n]}var t=e.document,r=t.documentElement,i=!0,s=!1,o,u,a=/^\s*([>+~])?\s*([*\w-]+)?(?:#([\w-]+))?(?:\.([\w.-]+))?\s*/,f=/-(\w)/g,l=[],c=[],h={"float":"cssFloat"in r.style?"cssFloat":"styleFloat"},p={borderWidth:{get:function(e){return m(e,"border-left-width")}},padding:{get:function(e){return m(e,"padding-left")}},margin:{get:function(e){return m(e,"margin-left")}}};!("opacity"in r.style)&&"filters"in r&&(p.opacity={set:function(e,t){var n=e.filters.alpha;n?n.opacity=t*100:e.style.filter+=" Alpha(opacity="+t*100+")"},get:function(e){var t=e.filters.alpha;return t?t.opacity/100:1}}),"clientWidth"in r&&(p.width={get:function(e){return e.style.width||e.clientWidth||e.offsetWidth}}),"clientHeight"in r&&(p.height={get:function(e){return e.style.height||e.clientHeight||e.offsetHeight}});var d=e.addEventListener?function(e,t,n){e.addEventListener(t,n,!1)}:function(n,r,i){var s=n.uniqueID+r+i;c[s]=function(){var r=e.event;return r.target=r.srcElement||t,r.currentTarget=n,r.preventDefault=function(){r.returnValue=!1},r.stopPropagation=function(){r.cancelBubble=!0},i.call(n,r)},n.attachEvent("on"+r,c[s])},v=e.removeEventListener?function(e,t,n){e.removeEventListener(t,n,!1)}:function(e,t,n){var r=e.uniqueID+t+n;e.detachEvent("on"+t,c[r]),delete c[r]},m=t.defaultView&&t.defaultView.getComputedStyle?function(e,t){var n=L(t),r=p[n];return r&&r.get?r.get(e):e.ownerDocument.defaultView.getComputedStyle(e,null).getPropertyValue(t)}:function(e,t){var n=L(t),r=p[n];return r&&r.get?r.get(e):e.currentStyle[n]},x=new RegExp("^(?:"+a.source.slice(1)+")+$"),N=new RegExp(a.source+"$"),rt={create:I,onready:q,addEvent:d,removeEvent:v,get:R,descendants:_,ancestor:U,next:z,previous:W,first:X,last:V,empty:tt,is:H,text:G,attr:et,hasClass:$,addClass:J,removeClass:K,toggleClass:Q,style:A,extend:nt};F(),typeof n=="function"&&n.amd&&n("dollardom",[],function(){return rt})}(this),n("base/dom",["require","underscore","dollardom"],function(e){var t=e("underscore").noConflict(),n=e("dollardom"),r=0,i={};return i.guid=function(){return"DRAGONFLY"+r++},i.$=function(e){return e?t.isString(e)?document.getElementById(e):e:null},i.remove=function(e){var t=i.$(e).parentNode;t&&t.removeChild(e)},i.create=n.create,i.get=n.get,i.parent=n.ancestor,i.children=n.descendants,i.first=n.first,i.last=n.last,i.next=n.next,i.prev=n.previous,i.empty=n.empty,i.css=n.style,i.attr=n.attr,i}),n("base/class",["require","underscore","base/dom"],function(e){function i(e){return e.className?e.className.split(/\s+/):[]}var t=e("underscore").noConflict(),n=e("base/dom"),r={};return r.hasClass=function(e,r){return e=n.$(e),!e||!r?!1:e.classList?e.classList.contains(r):t.contains(i(e),r)},r.addClass=function(e,r){e=n.$(e);if(!e||!r)return e;if(e.classList)return e.classList.add(r),e;var s=i(e);return t.contains(s,r)?e:(s.push(r),e.className=s.join(" "),e)},r.removeClass=function(e,r){e=n.$(e);if(!e||!r)return e;if(e.classList)return e.classList.remove(r),e;var s=t.without(i(e),r);return e.className=s.join(" "),e},r.toggleClass=function(e,t){return e=n.$(e),!e||!t?e:e.classList?(e.classList.toggle(t),e):r.hasClass(e,t)?r.removeClass(e,t):r.addClass(e,t)},r}),n("base/base",["require","underscore","base/string","base/browser","base/oo","base/dom","base/class"],function(e){var t=e("underscore").noConflict(),n={};return t.extend(n,e("base/string"),e("base/browser"),e("base/oo"),e("base/dom"),e("base/class")),n}),n("event/Event",["require","underscore"],function(e){function n(e){e=e||window.event,t.each(e,function(e,n){t.isFunction(e)||(this[n]=e)},this),this.originalEvent=e,this.type=e.type;var n=e.target||e.srcElement;this.target=n.nodeType===3?n.parentNode:n,this.relatedTarget=e.relatedTarget||e[(this.type==="mouseover"?"from":"to")+"Element"],this.keyCode=e.keyCode||e.which,this.rightClick=e.which===3||e.button===2;var r=this.target.ownerDocument||document,i=document.compatMode==="BackCompat"?r.body:r.documentElement;this.pageX=e.pageX||e.clientX+(i&&i.scrollLeft||0)-(i&&i.clientLeft||0),this.pageY=e.pageY||e.clientY+(i&&i.scrollTop||0)-(i&&i.clientTop||0)}var t=e("underscore").noConflict();return n.prototype={preventDefault:function(){var e=this.originalEvent;e.preventDefault?e.preventDefault():e.returnValue=!1},stopPropagation:function(){var e=this.originalEvent;e.stopPropagation?e.stopPropagation():e.cancelBubble=!0}},n.on=function(e,t,n,r){return e.addEventListener?e.addEventListener(t,n,r||!1):e.attachEvent&&e.attachEvent("on"+t,n),n},n.off=function(e,t,n,r){return e.addEventListener?e.removeEventListener(t,n,r||!1):e.attachEvent&&e.detachEvent("on"+t,n),n},n}),n("event/EventQueue",["require","underscore"],function(e){function n(){this.queue=[]}var t=e("underscore").noConflict();return n.prototype={add:function(e,t){this.queue.push({handler:e,once:t})},remove:function(e){if(!e){this.queue.length=0;return}t.each(this.queue,function(t,n){t&&t.handler===e&&(this.queue[n]=null)},this)},execute:function(e,n){t.each(this.queue,function(t,r){t&&(t.handler.call(e,n),t.once&&(this.queue[r]=null))},this)},destroy:function(){this.queue.length=0,this.queue=null}},n}),n("event/EventTarget",["require","underscore","base/base","event/Event","event/EventQueue"],function(e){function o(){}var t=e("underscore").noConflict(),n=e("base/base"),r=e("event/Event"),i=e("event/EventQueue"),s="df-event-guid";return o.prototype={on:function(e,t,n){this.eventQueue||(this.eventQueue={}),this.eventQueue[e]||(this.eventQueue[e]=new i);var r=this.eventQueue[e];return r.add(t,n),this},once:function(e,t){return this.on(e,t,!0)},off:function(e,n){if(arguments.length===0)this.eventQueue&&(t.each(this.eventQueue,function(e){e.destroy()}),delete this.eventQueue);else if(t.isString(e)&&this.eventQueue&&this.eventQueue[e]){var r=this.eventQueue[e];r.remove(n)}return this},fire:function(e,n){var r=n||{},i=this["on"+e];t.isFunction(i)&&i.call(this,r);if(this.eventQueue&&this.eventQueue[e]){var s=this.eventQueue[e];s.execute(this,r)}},addDOMEvent:function(e,o,u){this.domEventQueue||(this.domEventQueue={});var a=e[s];a||(a=e[s]=n.guid());var f=this.domEventQueue[a];f||(f=this.domEventQueue[a]={});var l=f[o];l||(l=f[o]=new i,l.executor=t.bind(function(e,t){var n=new r(t),i=this.domEventQueue[e[s]][n.type];i.execute(this,n)},this,e),r.on(e,o,l.executor)),l.add(u)},addFiredDOMEvent:function(e,t){this.addDOMEvent(e,t,function(e){this.fire(t,e)})},removeDOMEvent:function(e,n,i){if(!this.domEventQueue)return;var o=e[s];if(!o)return;var u=this.domEventQueue[o];if(!u)return;if(arguments.length===1)t.each(u,function(t,n){r.off(e,n,t.executor),t.destroy(),t.executor=null}),delete this.domEventQueue[o],t.isEmpty(this.domEventQueue)&&delete this.domEventQueue;else if(t.isString(n)&&u[n]){var a=u[n];a.remove(i)}}},o}),n("ui/Widget",["require","underscore","base/base","event/Event","event/EventTarget"],function(e){function s(e){this.inited=!1,this.rendered=!1,this.destroyed=!1,this.initStates(e),this.initOptions(e),this.main=this.createMain(),this.initPainters(),this.inited=!0}var t=e("underscore").noConflict(),n=e("base/base"),r=e("event/Event"),i=e("event/EventTarget");return s.prototype={initStates:function(e){this.states={},e&&typeof e.disabled!="undefined"&&(this.states.disabled=e.disabled),e&&typeof e.hidden!="undefined"&&(this.states.hidden=e.hidden)},initOptions:function(e){this.options=t.extend({},e||{})},createMain:function(){return document.createElement("div")},initPainters:function(){this.painters={}},render:function(e){this.rendered||(this.fire("beforerender"),this.appendMain(e),this.initElements(),this.initEvents(),this.repaint(this.options),this.initExtensions(),this.rendered=!0,this.fire("afterrender"))},appendMain:function(e){var t=n.$(e)||document.body;t.appendChild(this.main),n.addClass(this.main,"df-widget")},initElements:function(){},initEvents:function(){},repaint:function(e){t.each(t.extend({},e),function(e,t){var n=this.painters[t];n&&n.call(this,e)},this)},initExtensions:function(){var e=this.options.extensions;t.isArray(e)||(e=this.options.extensions=[]),t.each(e,function(e){e.target=this,e.init()},this)},setOptions:function(e){var n={};t.each(e,function(e,t){e!==this.options[t]&&(n[t]=this.options[t]=e)},this),t.isEmpty(n)||this.repaint(n)},get:function(e){return this.options[e]},set:function(e,t){var n={};n[e]=t,this.setOptions(n)},hasState:function(e){return!!this.states[e]},addState:function(e){if(!this.hasState(e)){this.states[e]=!0;var t={};t[e]=!0,this.setOptions(t)}},removeState:function(e){if(this.hasState(e)){this.states[e]=!1;var t={};t[e]=!1,this.setOptions(t)}},enable:function(){this.removeState("disabled")},disable:function(){this.addState("disabled")},isDisabled:function(){return this.hasState("disabled")},show:function(){this.fire("beforeshow"),this.removeState("hidden"),this.fire("aftershow")},hide:function(){this.fire("beforehide"),this.addState("hidden"),this.fire("afterhide")},toggle:function(){this[this.isHidden()?"show":"hide"]()},isHidden:function(){return this.hasState("hidden")},destroy:function(){this.destroyed||(this.fire("beforedestroy"),this.destroyEvents(),this.destroyExtensions(),this.removeMain(),this.removeElements(),delete this.options,delete this.states,delete this.painters,delete this.main,this.fire("afterdestroy"),this.off(),t.each(this,function(e,n){t.isFunction(e)&&(this[n]=null,delete this[n])},this),this.destroyed=!0)},destroyExtensions:function(){var e=this.options.extensions;t.each(e,function(t,n){t.destroy(),e[n]=null})},removeMain:function(){n.remove(this.main)},removeElements:function(){},destroyEvents:function(){}},n.inherit(s,i),s}),n("ui/Button",["require","underscore","base/base","ui/Widget"],function(e){function i(e){r.call(this,e)}var t=e("underscore").noConflict(),n=e("base/base"),r=e("ui/Widget");return i.prototype={initOptions:function(e){this.options=t.extend({content:"",disabled:!1,hidden:!1,skin:"default"},e||{})},createMain:function(){var e=document.createElement("div");return e.innerHTML='<button type="button"></button>',e.firstChild},initPainters:function(){this.painters={hidden:function(e){this.main.style.display=e?"none":""},disabled:function(e){this.main.disabled=e,e?n.addClass(this.main,"df-button-disable"):n.removeClass(this.main,"df-button-disable")},content:function(e){this.main.innerHTML=e}}},initElements:function(){n.addClass(this.main,"df-button"),n.addClass(this.main,"df-button-"+this.options.skin)},initEvents:function(){this.addFiredDOMEvent(this.main,"click"),this.addDOMEvent(this.main,"mouseover",function(){n.addClass(this.main,"df-button-"+this.options.skin+"-hover")}),this.addDOMEvent(this.main,"mouseout",function(){n.removeClass(this.main,"df-button-"+this.options.skin+"-hover"),n.removeClass(this.main,"df-button-"+this.options.skin+"-active")}),this.addDOMEvent(this.main,"mousedown",function(){n.addClass(this.main,"df-button-"+this.options.skin+"-active")}),this.addDOMEvent(this.main,"mouseup",function(){n.removeClass(this.main,"df-button-"+this.options.skin+"-active")})},destroyEvents:function(){this.removeDOMEvent(this.main)},setContent:function(e){this.set("content",e)},getContent:function(){return this.get("content")}},n.inherit(i,r),i}),n("ui/Table",["require","base/base","ui/Widget"],function(e){function r(){n.call(this,options)}var t=e("base/base"),n=e("ui/Widget");return t.inherit(r,n),r}),n("extension/Extension",["require","underscore"],function(e){function n(e){this.options=t.extend({},e||{})}var t=e("underscore").noConflict();return n.prototype={target:null,init:function(){},destroy:function(){}},n}),n("extension/DropdownButton",["require","underscore","base/base","extension/Extension"],function(e){function i(e){r.call(this,e)}var t=e("underscore").noConflict(),n=e("base/base"),r=e("extension/Extension");return i.prototype={init:function(){console.log(this.target)},destroy:function(){}},n.inherit(i,r),i}),n("main",["require","underscore","ui/Button","ui/Table","extension/DropdownButton"],function(e){var t=e("underscore").noConflict(),n={};n.version="0.1.0";var r=window.D;return n.noConflict=function(){return window.D=r,this},t.extend(n,{Button:e("ui/Button"),Table:e("ui/Table"),DropdownButton:e("extension/DropdownButton")}),n}),_&&_.noConflict(),t("main")});