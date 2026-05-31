"use strict";var s=function(e,r){return function(){return r||e((r={exports:{}}).exports,r),r.exports}};var n=s(function(x,v){
var c=require('@stdlib/string-next-grapheme-cluster-break/dist');function h(e){var r,i,t,a,u;for(i="",t=0;t<e.length;){for(a=c(e,t),a===-1&&(a=e.length),r="",u=t;u<a;u++)r+=e.charAt(u);i=r+i,t=a}return i}v.exports=h
});var l=n();module.exports=l;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
