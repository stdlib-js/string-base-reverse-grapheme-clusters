"use strict";var s=function(e,r){return function(){try{return r||e((r={exports:{}}).exports,r),r.exports}catch(t){throw (r=0, t)}};};var n=s(function(x,v){
var c=require('@stdlib/string-next-grapheme-cluster-break/dist');function h(e){var r,t,a,i,u;for(t="",a=0;a<e.length;){for(i=c(e,a),i===-1&&(i=e.length),r="",u=a;u<i;u++)r+=e.charAt(u);t=r+t,a=i}return t}v.exports=h
});var l=n();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
