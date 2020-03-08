/*!
 * @module report
 * @author kael, chriscai
 * @date @DATE
 * Copyright (c) 2014 kael, chriscai
 * Licensed under the MIT license.
 */
var BJ_REPORT=function(e){if(e.BJ_REPORT)return e.BJ_REPORT;var t=[],r={id:0,uin:0,url:"",combo:1,ext:{},level:4,ignore:[],random:1,delay:1e3,submit:null},n=function(e,t){return Object.prototype.toString.call(e)==="[object "+(t||"Object")+"]"},o=function(e){var t=typeof e;return"object"===t&&!!e},i=e.onerror;e.onerror=function(t,r,o,u,c){var p=t;c&&c.stack&&(p=a(c)),n(p,"Event")&&(p+=p.type?"--"+p.type+"--"+(p.target?p.target.tagName+"::"+p.target.src:""):""),g.push({msg:p,target:r,rowNum:o,colNum:u}),m(),i&&i.apply(e,arguments)};var u=function(e){try{if(e.stack){var t=e.stack.match("http://[^/n]+");t=t?t[0]:"";var r=t.match(":([0-9]+):([0-9]+)");r||(r=[0,0,0]);var n=a(e);return{msg:n,rowNum:r[1],colNum:r[2],target:t.replace(r[0],"")}}return e}catch(o){return e}},a=function(e){var t=e.stack.replace(/\n/gi,"").split(/\bat\b/).slice(0,5).join("@").replace(/\?[^:]+/gi,""),r=e.toString();return t.indexOf(r)<0&&(t=r+"@"+t),t},c=function(e,t){var n=[],i=[],u=[];if(o(e)){e.level=e.level||r.level;for(var a in e){var c=e[a]||"";if(c){if(o(c))try{c=JSON.stringify(c)}catch(p){c="[BJ_REPORT detect value stringify error] "+p.toString()}u.push(a+":"+c),n.push(a+"="+encodeURIComponent(c)),i.push(a+"["+t+"]="+encodeURIComponent(c))}}}return[i.join("&"),u.join(","),n.join("&")]},p=[],s=function(e){if(r.submit)r.submit(e);else{var t=new Image;p.push(t),t.src=e}},f=[],l=0,m=function(e){if(r.report){for(;t.length;){var o=!1,i=t.shift(),u=c(i,f.length);if(n(r.ignore,"Array"))for(var a=0,p=r.ignore.length;p>a;a++){var m=r.ignore[a];if(n(m,"RegExp")&&m.test(u[1])||n(m,"Function")&&m(i,u[1])){o=!0;break}}o||(r.combo?f.push(u[0]):s(r.report+u[2]+"&_t="+ +new Date),r.onReport&&r.onReport(r.id,i))}var g=f.length;if(g){var v=function(){clearTimeout(l),s(r.report+f.join("&")+"&count="+g+"&_t="+ +new Date),l=0,f=[]};e?v():l||(l=setTimeout(v,r.delay))}}},g={push:function(e){return Math.random()>=r.random?g:(t.push(o(e)?u(e):{msg:e}),m(),g)},report:function(e){return e&&g.push(e),m(!0),g},info:function(e){return e?(o(e)?e.level=2:e={msg:e,level:2},g.push(e),g):g},debug:function(e){return e?(o(e)?e.level=1:e={msg:e,level:1},g.push(e),g):g},init:function(e){if(o(e))for(var t in e)r[t]=e[t];var n=parseInt(r.id,10);return n&&(r.report=(r.url||"")+"?id="+n+"&uin="+parseInt(r.uin||(document.cookie.match(/\buin=\D+(\d+)/)||[])[1],10)+"&from="+encodeURIComponent(location.href)+"&ext="+JSON.stringify(r.ext)+"&"),g},__onerror__:e.onerror};return g}(window);"undefined"!=typeof exports&&("undefined"!=typeof module&&module.exports&&(exports=module.exports=BJ_REPORT),exports.BJ_REPORT=BJ_REPORT);