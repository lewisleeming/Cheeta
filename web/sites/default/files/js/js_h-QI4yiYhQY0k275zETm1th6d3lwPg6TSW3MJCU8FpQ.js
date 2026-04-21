/* @license MIT https://raw.githubusercontent.com/jquery/jquery/4.0.0-beta.2/LICENSE.txt */
/*! jQuery v4.0.0-beta.2 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=t(e,!0):t(e)}("undefined"!=typeof window?window:this,function(e,t){"use strict";if(!e.document)throw Error("jQuery requires a window with a document");var n=[],r=Object.getPrototypeOf,i=n.slice,o=n.flat?function(e){return n.flat.call(e)}:function(e){return n.concat.apply([],e)},a=n.push,s=n.indexOf,u={},l=u.toString,c=u.hasOwnProperty,f=c.toString,p=f.call(Object),d={};function h(e){return null==e?e+"":"object"==typeof e?u[l.call(e)]||"object":typeof e}function g(e){return null!=e&&e===e.window}function v(e){var t=!!e&&e.length,n=h(e);return!("function"==typeof e||g(e))&&("array"===n||0===t||"number"==typeof t&&t>0&&t-1 in e)}var y=e.document,m={type:!0,src:!0,nonce:!0,noModule:!0};function x(e,t,n){var r,i=(n=n||y).createElement("script");for(r in i.text=e,m)t&&t[r]&&(i[r]=t[r]);n.head.appendChild(i).parentNode&&i.parentNode.removeChild(i)}var b="4.0.0-beta.2",w=/HTML$/i,T=function(e,t){return new T.fn.init(e,t)};function C(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}T.fn=T.prototype={jquery:b,constructor:T,length:0,toArray:function(){return i.call(this)},get:function(e){return null==e?i.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=T.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return T.each(this,e)},map:function(e){return this.pushStack(T.map(this,function(t,n){return e.call(t,n,t)}))},slice:function(){return this.pushStack(i.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(T.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(T.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(n>=0&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()}},T.extend=T.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"!=typeof a&&"function"!=typeof a&&(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(T.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||T.isPlainObject(n)?n:{},i=!1,a[t]=T.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},T.extend({expando:"jQuery"+(b+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!!e&&"[object Object]"===l.call(e)&&(!(t=r(e))||"function"==typeof(n=c.call(t,"constructor")&&t.constructor)&&f.call(n)===p)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){x(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(v(e))for(n=e.length;r<n&&!1!==t.call(e[r],r,e[r]);r++);else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},text:function(e){var t,n="",r=0,i=e.nodeType;if(!i)while(t=e[r++])n+=T.text(t);return 1===i||11===i?e.textContent:9===i?e.documentElement.textContent:3===i||4===i?e.nodeValue:n},makeArray:function(e,t){var n=t||[];return null!=e&&(v(Object(e))?T.merge(n,"string"==typeof e?[e]:e):a.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:s.call(t,e,n)},isXMLDoc:function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!w.test(t||n&&n.nodeName||"HTML")},contains:function(e,t){var n=t&&t.parentNode;return e===n||!!(n&&1===n.nodeType&&(e.contains?e.contains(n):e.compareDocumentPosition&&16&e.compareDocumentPosition(n)))},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,a=0,s=[];if(v(e))for(r=e.length;a<r;a++)null!=(i=t(e[a],a,n))&&s.push(i);else for(a in e)null!=(i=t(e[a],a,n))&&s.push(i);return o(s)},guid:1,support:d}),"function"==typeof Symbol&&(T.fn[Symbol.iterator]=n[Symbol.iterator]),T.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){u["[object "+t+"]"]=t.toLowerCase()});var j=n.pop,E="[\\x20\\t\\r\\n\\f]",k=y.documentMode;try{y.querySelector(":has(*,:jqfake)"),d.cssHas=!1}catch(e){d.cssHas=!0}var S=[];k&&S.push(":enabled",":disabled","\\["+E+"*name"+E+"*="+E+"*(?:''|\"\")"),d.cssHas||S.push(":has"),S=S.length&&new RegExp(S.join("|"));var D=RegExp("^"+E+"+|((?:^|[^\\\\])(?:\\\\.)*)"+E+"+$","g"),A="(?:\\\\[\\da-fA-F]{1,6}"+E+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",q=RegExp("^"+E+"*([>+~]|"+E+")"+E+"*"),N=RegExp(E+"|>"),O=/[+~]/,H=y.documentElement,L=H.matches||H.msMatchesSelector;function P(){var e=[];return function t(n,r){return e.push(n+" ")>T.expr.cacheLength&&delete t[e.shift()],t[n+" "]=r}}function R(e){return e&&void 0!==e.getElementsByTagName&&e}var M="\\["+E+"*("+A+")(?:"+E+"*([*^$|!~]?=)"+E+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+A+"))|)"+E+"*\\]",W=":("+A+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",$={ID:RegExp("^#("+A+")"),CLASS:RegExp("^\\.("+A+")"),TAG:RegExp("^("+A+"|[*])"),ATTR:RegExp("^"+M),PSEUDO:RegExp("^"+W),CHILD:RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+E+"*(even|odd|(([+-]|)(\\d*)n|)"+E+"*(?:([+-]|)"+E+"*(\\d+)|))"+E+"*\\)|)","i")},I=new RegExp(W),F=RegExp("\\\\[\\da-fA-F]{1,6}"+E+"?|\\\\([^\\r\\n\\f])","g"),B=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))};function _(e){return e.replace(F,B)}function U(e){T.error("Syntax error, unrecognized expression: "+e)}var X=RegExp("^"+E+"*,"+E+"*"),z=P();function V(e,t){var n,r,i,o,a,s,u,l=z[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=T.expr.preFilter;while(a){for(o in(!n||(r=X.exec(a)))&&(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=q.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace(D," ")}),a=a.slice(n.length)),$)(r=T.expr.match[o].exec(a))&&(!u[o]||(r=u[o](r)))&&(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?U(e):z(e,s).slice(0)}function Y(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function G(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===h(n))for(s in i=!0,n)G(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,"function"!=typeof r&&(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(T(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o}var Q=/[^\x20\t\r\n\f]+/g;T.fn.extend({attr:function(e,t){return G(this,T.attr,e,t,arguments.length>1)},removeAttr:function(e){return this.each(function(){T.removeAttr(this,e)})}}),T.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o){if(void 0===e.getAttribute)return T.prop(e,t,n);if(1===o&&T.isXMLDoc(e)||(i=T.attrHooks[t.toLowerCase()]),void 0!==n){if(null===n||!1===n&&0!==t.toLowerCase().indexOf("aria-")){T.removeAttr(e,t);return}return i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n),n)}return i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=e.getAttribute(t))?void 0:r}},attrHooks:{},removeAttr:function(e,t){var n,r=0,i=t&&t.match(Q);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),k&&(T.attrHooks.type={set:function(e,t){if("radio"===t&&C(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}});var J=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g;function K(e,t){return t?"\0"===e?"\uFFFD":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e}T.escapeSelector=function(e){return(e+"").replace(J,K)};var Z=n.sort,ee=n.splice;function et(e,t){if(e===t)return en=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)?e==y||e.ownerDocument==y&&T.contains(y,e)?-1:t==y||t.ownerDocument==y&&T.contains(y,t)?1:0:4&n?-1:1)}T.uniqueSort=function(e){var t,n=[],r=0,i=0;if(en=!1,Z.call(e,et),en){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)ee.call(e,n[r],1)}return e},T.fn.uniqueSort=function(){return this.pushStack(T.uniqueSort(i.apply(this)))};var en,er,ei,eo,ea,es,eu=0,el=0,ec=P(),ef=P(),ep=P(),ed=RegExp(E+"+","g"),eh=RegExp("^"+A+"$"),eg=T.extend({needsContext:RegExp("^"+E+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+E+"*((?:-\\d)?\\d*)"+E+"*\\)|)(?=[^-]|$)","i")},$),ev=/^(?:input|select|textarea|button)$/i,ey=/^h\d$/i,em=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ex=function(){eE()},eb=eS(function(e){return!0===e.disabled&&C(e,"fieldset")},{dir:"parentNode",next:"legend"});function ew(e,t,n,r){var i,o,s,u,l,c,f,p=t&&t.ownerDocument,d=t?t.nodeType:9;if(n=n||[],"string"!=typeof e||!e||1!==d&&9!==d&&11!==d)return n;if(!r&&(eE(t),t=t||eo,es)){if(11!==d&&(l=em.exec(e))){if(i=l[1]){if(9===d)return(s=t.getElementById(i))&&a.call(n,s),n;if(p&&(s=p.getElementById(i))&&T.contains(t,s))return a.call(n,s),n}else if(l[2])return a.apply(n,t.getElementsByTagName(e)),n;else if((i=l[3])&&t.getElementsByClassName)return a.apply(n,t.getElementsByClassName(i)),n}if(!ep[e+" "]&&(!S||!S.test(e))){if(f=e,p=t,1===d&&(N.test(e)||q.test(e))){((p=O.test(e)&&R(t.parentNode)||t)!=t||k)&&((u=t.getAttribute("id"))?u=T.escapeSelector(u):t.setAttribute("id",u=T.expando)),o=(c=V(e)).length;while(o--)c[o]=(u?"#"+u:":scope")+" "+Y(c[o]);f=c.join(",")}try{return a.apply(n,p.querySelectorAll(f)),n}catch(t){ep(e,!0)}finally{u===T.expando&&t.removeAttribute("id")}}}return eN(e.replace(D,"$1"),t,n,r)}function eT(e){return e[T.expando]=!0,e}function eC(e){return function(t){if("form"in t)return t.parentNode&&!1===t.disabled?"label"in t?"label"in t.parentNode?t.parentNode.disabled===e:t.disabled===e:t.isDisabled===e||!e!==t.isDisabled&&eb(t)===e:t.disabled===e;return"label"in t&&t.disabled===e}}function ej(e){return eT(function(t){return t=+t,eT(function(n,r){var i,o=e([],n.length,t),a=o.length;while(a--)n[i=o[a]]&&(n[i]=!(r[i]=n[i]))})})}function eE(e){var t,n=e?e.ownerDocument||e:y;n!=eo&&9===n.nodeType&&(ea=(eo=n).documentElement,es=!T.isXMLDoc(eo),k&&y!=eo&&(t=eo.defaultView)&&t.top!==t&&t.addEventListener("unload",ex))}for(er in ew.matches=function(e,t){return ew(e,null,null,t)},ew.matchesSelector=function(e,t){if(eE(e),es&&!ep[t+" "]&&(!S||!S.test(t)))try{return L.call(e,t)}catch(e){ep(t,!0)}return ew(t,eo,null,[e]).length>0},T.expr={cacheLength:50,createPseudo:eT,match:eg,find:{ID:function(e,t){if(void 0!==t.getElementById&&es){var n=t.getElementById(e);return n?[n]:[]}},TAG:function(e,t){return void 0!==t.getElementsByTagName?t.getElementsByTagName(e):t.querySelectorAll(e)},CLASS:function(e,t){if(void 0!==t.getElementsByClassName&&es)return t.getElementsByClassName(e)}},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=_(e[1]),e[3]=_(e[3]||e[4]||e[5]||""),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||U(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&U(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return $.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&I.test(n)&&(t=V(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{ID:function(e){var t=_(e);return function(e){return e.getAttribute("id")===t}},TAG:function(e){var t=_(e).toLowerCase();return"*"===e?function(){return!0}:function(e){return C(e,t)}},CLASS:function(e){var t=ec[e+" "];return t||(t=RegExp("(^|"+E+")"+e+"("+E+"|$)"),ec(e,function(e){return t.test("string"==typeof e.className&&e.className||void 0!==e.getAttribute&&e.getAttribute("class")||"")}))},ATTR:function(e,t,n){return function(r){var i=T.attr(r,e);return null==i?"!="===t:!t||((i+="","="===t)?i===n:"!="===t?i!==n:"^="===t?n&&0===i.indexOf(n):"*="===t?n&&i.indexOf(n)>-1:"$="===t?n&&i.slice(-n.length)===n:"~="===t?(" "+i.replace(ed," ")+" ").indexOf(n)>-1:"|="===t&&(i===n||i.slice(0,n.length+1)===n+"-"))}},CHILD:function(e,t,n,r,i){var o="nth"!==e.slice(0,3),a="last"!==e.slice(-4),s="of-type"===t;return 1===r&&0===i?function(e){return!!e.parentNode}:function(t,n,u){var l,c,f,p,d,h=o!==a?"nextSibling":"previousSibling",g=t.parentNode,v=s&&t.nodeName.toLowerCase(),y=!u&&!s,m=!1;if(g){if(o){while(h){f=t;while(f=f[h])if(s?C(f,v):1===f.nodeType)return!1;d=h="only"===e&&!d&&"nextSibling"}return!0}if(d=[a?g.firstChild:g.lastChild],a&&y){m=(p=(l=(c=g[T.expando]||(g[T.expando]={}))[e]||[])[0]===eu&&l[1])&&l[2],f=p&&g.childNodes[p];while(f=++p&&f&&f[h]||(m=p=0)||d.pop())if(1===f.nodeType&&++m&&f===t){c[e]=[eu,p,m];break}}else if(y&&(m=p=(l=(c=t[T.expando]||(t[T.expando]={}))[e]||[])[0]===eu&&l[1]),!1===m){while(f=++p&&f&&f[h]||(m=p=0)||d.pop())if((s?C(f,v):1===f.nodeType)&&++m&&(y&&((c=f[T.expando]||(f[T.expando]={}))[e]=[eu,m]),f===t))break}return(m-=i)===r||m%r==0&&m/r>=0}}},PSEUDO:function(e,t){var n=T.expr.pseudos[e]||T.expr.setFilters[e.toLowerCase()]||U("unsupported pseudo: "+e);return n[T.expando]?n(t):n}},pseudos:{not:eT(function(e){var t=[],n=[],r=eq(e.replace(D,"$1"));return r[T.expando]?eT(function(e,t,n,i){var o,a=r(e,null,i,[]),s=e.length;while(s--)(o=a[s])&&(e[s]=!(t[s]=o))}):function(e,i,o){return t[0]=e,r(t,null,o,n),t[0]=null,!n.pop()}}),has:eT(function(e){return function(t){return ew(e,t).length>0}}),contains:eT(function(e){return e=_(e),function(t){return(t.textContent||T.text(t)).indexOf(e)>-1}}),lang:eT(function(e){return eh.test(e||"")||U("unsupported lang: "+e),e=_(e).toLowerCase(),function(t){var n;do if(n=es?t.lang:t.getAttribute("xml:lang")||t.getAttribute("lang"))return(n=n.toLowerCase())===e||0===n.indexOf(e+"-");while((t=t.parentNode)&&1===t.nodeType);return!1}}),target:function(t){var n=e.location&&e.location.hash;return n&&n.slice(1)===t.id},root:function(e){return e===ea},focus:function(e){return e===eo.activeElement&&eo.hasFocus()&&!!(e.type||e.href||~e.tabIndex)},enabled:eC(!1),disabled:eC(!0),checked:function(e){return C(e,"input")&&!!e.checked||C(e,"option")&&!!e.selected},selected:function(e){return k&&e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!T.expr.pseudos.empty(e)},header:function(e){return ey.test(e.nodeName)},input:function(e){return ev.test(e.nodeName)},button:function(e){return C(e,"input")&&"button"===e.type||C(e,"button")},text:function(e){return C(e,"input")&&"text"===e.type},first:ej(function(){return[0]}),last:ej(function(e,t){return[t-1]}),eq:ej(function(e,t,n){return[n<0?n+t:n]}),even:ej(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ej(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ej(function(e,t,n){var r;for(r=n<0?n+t:n>t?t:n;--r>=0;)e.push(r);return e}),gt:ej(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}},T.expr.pseudos.nth=T.expr.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})T.expr.pseudos[er]=function(e){return function(t){return C(t,"input")&&t.type===e}}(er);for(er in{submit:!0,reset:!0})T.expr.pseudos[er]=function(e){return function(t){return(C(t,"input")||C(t,"button"))&&t.type===e}}(er);function ek(){}function eS(e,t,n){var r=t.dir,i=t.next,o=i||r,a=n&&"parentNode"===o,s=el++;return t.first?function(t,n,i){while(t=t[r])if(1===t.nodeType||a)return e(t,n,i);return!1}:function(t,n,u){var l,c,f=[eu,s];if(u){while(t=t[r])if((1===t.nodeType||a)&&e(t,n,u))return!0}else while(t=t[r])if(1===t.nodeType||a){if(c=t[T.expando]||(t[T.expando]={}),i&&C(t,i))t=t[r]||t;else if((l=c[o])&&l[0]===eu&&l[1]===s)return f[2]=l[2];else if(c[o]=f,f[2]=e(t,n,u))return!0}return!1}}function eD(e){return e.length>1?function(t,n,r){var i=e.length;while(i--)if(!e[i](t,n,r))return!1;return!0}:e[0]}function eA(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(!n||n(o,r,i))&&(a.push(o),l&&t.push(s));return a}function eq(e,t){var n,r,i,o,u=[],l=[],c=ef[e+" "];if(!c){t||(t=V(e)),o=t.length;while(o--)(c=function e(t){for(var n,r,i,o=t.length,u=T.expr.relative[t[0].type],l=u||T.expr.relative[" "],c=u?1:0,f=eS(function(e){return e===n},l,!0),p=eS(function(e){return s.call(n,e)>-1},l,!0),d=[function(e,t,r){var i=!u&&(r||t!=ei)||((n=t).nodeType?f(e,t,r):p(e,t,r));return n=null,i}];c<o;c++)if(r=T.expr.relative[t[c].type])d=[eS(eD(d),r)];else{if((r=T.expr.filter[t[c].type].apply(null,t[c].matches))[T.expando]){for(i=++c;i<o&&!T.expr.relative[t[i].type];i++);return function e(t,n,r,i,o,u){return i&&!i[T.expando]&&(i=e(i)),o&&!o[T.expando]&&(o=e(o,u)),eT(function(e,u,l,c){var f,p,d,h,g=[],v=[],y=u.length,m=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)ew(e,t[r],n);return n}(n||"*",l.nodeType?[l]:l,[]),x=t&&(e||!n)?eA(m,g,t,l,c):m;if(r?r(x,h=o||(e?t:y||i)?[]:u,l,c):h=x,i){f=eA(h,v),i(f,[],l,c),p=f.length;while(p--)(d=f[p])&&(h[v[p]]=!(x[v[p]]=d))}if(e){if(o||t){if(o){f=[],p=h.length;while(p--)(d=h[p])&&f.push(x[p]=d);o(null,h=[],f,c)}p=h.length;while(p--)(d=h[p])&&(f=o?s.call(e,d):g[p])>-1&&(e[f]=!(u[f]=d))}}else h=eA(h===u?h.splice(y,h.length):h),o?o(null,u,h,c):a.apply(u,h)})}(c>1&&eD(d),c>1&&Y(t.slice(0,c-1).concat({value:" "===t[c-2].type?"*":""})).replace(D,"$1"),r,c<i&&e(t.slice(c,i)),i<o&&e(t=t.slice(i)),i<o&&Y(t))}d.push(r)}return eD(d)}(t[o]))[T.expando]?u.push(c):l.push(c);(c=ef(e,(n=u.length>0,r=l.length>0,i=function(e,t,i,o,s){var c,f,p,d=0,h="0",g=e&&[],v=[],y=ei,m=e||r&&T.expr.find.TAG("*",s),x=eu+=null==y?1:Math.random()||.1;for(s&&(ei=t==eo||t||s);null!=(c=m[h]);h++){if(r&&c){f=0,t||c.ownerDocument==eo||(eE(c),i=!es);while(p=l[f++])if(p(c,t||eo,i)){a.call(o,c);break}s&&(eu=x)}n&&((c=!p&&c)&&d--,e&&g.push(c))}if(d+=h,n&&h!==d){f=0;while(p=u[f++])p(g,v,t,i);if(e){if(d>0)while(h--)g[h]||v[h]||(v[h]=j.call(o));v=eA(v)}a.apply(o,v),s&&!e&&v.length>0&&d+u.length>1&&T.uniqueSort(o)}return s&&(eu=x,ei=y),g},n?eT(i):i))).selector=e}return c}function eN(e,t,n,r){var i,o,s,u,l,c="function"==typeof e&&e,f=!r&&V(e=c.selector||e);if(n=n||[],1===f.length){if((o=f[0]=f[0].slice(0)).length>2&&"ID"===(s=o[0]).type&&9===t.nodeType&&es&&T.expr.relative[o[1].type]){if(!(t=(T.expr.find.ID(_(s.matches[0]),t)||[])[0]))return n;c&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=eg.needsContext.test(e)?0:o.length;while(i--){if(s=o[i],T.expr.relative[u=s.type])break;if((l=T.expr.find[u])&&(r=l(_(s.matches[0]),O.test(o[0].type)&&R(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&Y(o)))return a.apply(n,r),n;break}}}return(c||eq(e,f))(r,t,!es,n,!t||O.test(e)&&R(t.parentNode)||t),n}function eO(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&T(e).is(n))break;r.push(e)}return r}function eH(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n}ek.prototype=T.expr.filters=T.expr.pseudos,T.expr.setFilters=new ek,eE(),T.find=ew,ew.compile=eq,ew.select=eN,ew.setDocument=eE,ew.tokenize=V;var eL=T.expr.match.needsContext,eP=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function eR(e){return"<"===e[0]&&">"===e[e.length-1]&&e.length>=3}function eM(e,t,n){return"function"==typeof t?T.grep(e,function(e,r){return!!t.call(e,r,e)!==n}):t.nodeType?T.grep(e,function(e){return e===t!==n}):"string"!=typeof t?T.grep(e,function(e){return s.call(t,e)>-1!==n}):T.filter(t,e,n)}T.filter=function(e,t,n){var r=t[0];return(n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType)?T.find.matchesSelector(r,e)?[r]:[]:T.find.matches(e,T.grep(t,function(e){return 1===e.nodeType}))},T.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(T(e).filter(function(){for(t=0;t<r;t++)if(T.contains(i[t],this))return!0}));for(t=0,n=this.pushStack([]);t<r;t++)T.find(e,i[t],n);return r>1?T.uniqueSort(n):n},filter:function(e){return this.pushStack(eM(this,e||[],!1))},not:function(e){return this.pushStack(eM(this,e||[],!0))},is:function(e){return!!eM(this,"string"==typeof e&&eL.test(e)?T(e):e||[],!1).length}});var eW,e$=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(T.fn.init=function(e,t){var n,r;if(!e)return this;if(e.nodeType)return this[0]=e,this.length=1,this;if("function"==typeof e)return void 0!==eW.ready?eW.ready(e):e(T);if(eR(n=e+""))n=[null,e,null];else{if("string"!=typeof e)return T.makeArray(e,this);n=e$.exec(e)}if(n&&(n[1]||!t)){if(!n[1])return(r=y.getElementById(n[2]))&&(this[0]=r,this.length=1),this;if(t=t instanceof T?t[0]:t,T.merge(this,T.parseHTML(n[1],t&&t.nodeType?t.ownerDocument||t:y,!0)),eP.test(n[1])&&T.isPlainObject(t))for(n in t)"function"==typeof this[n]?this[n](t[n]):this.attr(n,t[n]);return this}return!t||t.jquery?(t||eW).find(e):this.constructor(t).find(e)}).prototype=T.fn,eW=T(y);var eI=/^(?:parents|prev(?:Until|All))/,eF={children:!0,contents:!0,next:!0,prev:!0};function eB(e,t){while((e=e[t])&&1!==e.nodeType);return e}function e_(e){return e}function eU(e){throw e}function eX(e,t,n,r){var i;try{e&&"function"==typeof(i=e.promise)?i.call(e).done(t).fail(n):e&&"function"==typeof(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n(e)}}T.fn.extend({has:function(e){var t=T(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(T.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&T(e);if(!eL.test(e)){for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?a.index(n)>-1:1===n.nodeType&&T.find.matchesSelector(n,e))){o.push(n);break}}return this.pushStack(o.length>1?T.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?s.call(T(e),this[0]):s.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(T.uniqueSort(T.merge(this.get(),T(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),T.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return eO(e,"parentNode")},parentsUntil:function(e,t,n){return eO(e,"parentNode",n)},next:function(e){return eB(e,"nextSibling")},prev:function(e){return eB(e,"previousSibling")},nextAll:function(e){return eO(e,"nextSibling")},prevAll:function(e){return eO(e,"previousSibling")},nextUntil:function(e,t,n){return eO(e,"nextSibling",n)},prevUntil:function(e,t,n){return eO(e,"previousSibling",n)},siblings:function(e){return eH((e.parentNode||{}).firstChild,e)},children:function(e){return eH(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(C(e,"template")&&(e=e.content||e),T.merge([],e.childNodes))}},function(e,t){T.fn[e]=function(n,r){var i=T.map(this,t,n);return"Until"!==e.slice(-5)&&(r=n),r&&"string"==typeof r&&(i=T.filter(r,i)),this.length>1&&(eF[e]||T.uniqueSort(i),eI.test(e)&&i.reverse()),this.pushStack(i)}}),T.Callbacks=function(e){e="string"==typeof e?(t=e,n={},T.each(t.match(Q)||[],function(e,t){n[t]=!0}),n):T.extend({},e);var t,n,r,i,o,a,s=[],u=[],l=-1,c=function(){for(a=a||e.once,o=r=!0;u.length;l=-1){i=u.shift();while(++l<s.length)!1===s[l].apply(i[0],i[1])&&e.stopOnFalse&&(l=s.length,i=!1)}e.memory||(i=!1),r=!1,a&&(s=i?[]:"")},f={add:function(){return s&&(i&&!r&&(l=s.length-1,u.push(i)),function t(n){T.each(n,function(n,r){"function"==typeof r?e.unique&&f.has(r)||s.push(r):r&&r.length&&"string"!==h(r)&&t(r)})}(arguments),i&&!r&&c()),this},remove:function(){return T.each(arguments,function(e,t){var n;while((n=T.inArray(t,s,n))>-1)s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?T.inArray(e,s)>-1:s.length>0},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=i="",this},disabled:function(){return!s},lock:function(){return a=u=[],i||r||(s=i=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),r||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},T.extend({Deferred:function(t){var n=[["notify","progress",T.Callbacks("memory"),T.Callbacks("memory"),2],["resolve","done",T.Callbacks("once memory"),T.Callbacks("once memory"),0,"resolved"],["reject","fail",T.Callbacks("once memory"),T.Callbacks("once memory"),1,"rejected"]],r="pending",i={state:function(){return r},always:function(){return o.done(arguments).fail(arguments),this},catch:function(e){return i.then(null,e)},pipe:function(){var e=arguments;return T.Deferred(function(t){T.each(n,function(n,r){var i="function"==typeof e[r[4]]&&e[r[4]];o[r[1]](function(){var e=i&&i.apply(this,arguments);e&&"function"==typeof e.promise?e.promise().progress(t.notify).done(t.resolve).fail(t.reject):t[r[0]+"With"](this,i?[e]:arguments)})}),e=null}).promise()},then:function(t,r,i){var o=0;function a(t,n,r,i){return function(){var s=this,u=arguments,l=function(){var e,l;if(!(t<o)){if((e=r.apply(s,u))===n.promise())throw TypeError("Thenable self-resolution");"function"==typeof(l=e&&("object"==typeof e||"function"==typeof e)&&e.then)?i?l.call(e,a(o,n,e_,i),a(o,n,eU,i)):(o++,l.call(e,a(o,n,e_,i),a(o,n,eU,i),a(o,n,e_,n.notifyWith))):(r!==e_&&(s=void 0,u=[e]),(i||n.resolveWith)(s,u))}},c=i?l:function(){try{l()}catch(e){T.Deferred.exceptionHook&&T.Deferred.exceptionHook(e,c.error),t+1>=o&&(r!==eU&&(s=void 0,u=[e]),n.rejectWith(s,u))}};t?c():(T.Deferred.getErrorHook&&(c.error=T.Deferred.getErrorHook()),e.setTimeout(c))}}return T.Deferred(function(e){n[0][3].add(a(0,e,"function"==typeof i?i:e_,e.notifyWith)),n[1][3].add(a(0,e,"function"==typeof t?t:e_)),n[2][3].add(a(0,e,"function"==typeof r?r:eU))}).promise()},promise:function(e){return null!=e?T.extend(e,i):i}},o={};return T.each(n,function(e,t){var a=t[2],s=t[5];i[t[1]]=a.add,s&&a.add(function(){r=s},n[3-e][2].disable,n[3-e][3].disable,n[0][2].lock,n[0][3].lock),a.add(t[3].fire),o[t[0]]=function(){return o[t[0]+"With"](this===o?void 0:this,arguments),this},o[t[0]+"With"]=a.fireWith}),i.promise(o),t&&t.call(o,o),o},when:function(e){var t=arguments.length,n=t,r=Array(n),o=i.call(arguments),a=T.Deferred(),s=function(e){return function(n){r[e]=this,o[e]=arguments.length>1?i.call(arguments):n,--t||a.resolveWith(r,o)}};if(t<=1&&(eX(e,a.done(s(n)).resolve,a.reject,!t),"pending"===a.state()||"function"==typeof(o[n]&&o[n].then)))return a.then();while(n--)eX(o[n],s(n),a.reject);return a.promise()}});var ez=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;T.Deferred.exceptionHook=function(t,n){t&&ez.test(t.name)&&e.console.warn("jQuery.Deferred exception",t,n)},T.readyException=function(t){e.setTimeout(function(){throw t})};var eV=T.Deferred();function eY(){y.removeEventListener("DOMContentLoaded",eY),e.removeEventListener("load",eY),T.ready()}T.fn.ready=function(e){return eV.then(e).catch(function(e){T.readyException(e)}),this},T.extend({isReady:!1,readyWait:1,ready:function(e){!(!0===e?--T.readyWait:T.isReady)&&(T.isReady=!0,!0!==e&&--T.readyWait>0||eV.resolveWith(y,[T]))}}),T.ready.then=eV.then,"loading"!==y.readyState?e.setTimeout(T.ready):(y.addEventListener("DOMContentLoaded",eY),e.addEventListener("load",eY));var eG=/-([a-z])/g;function eQ(e,t){return t.toUpperCase()}function eJ(e){return e.replace(eG,eQ)}function eK(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType}function eZ(){this.expando=T.expando+eZ.uid++}eZ.uid=1,eZ.prototype={cache:function(e){var t=e[this.expando];return!t&&(t=Object.create(null),eK(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[eJ(t)]=n;else for(r in t)i[eJ(r)]=t[r];return n},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][eJ(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(eJ):(t=eJ(t))in r?[t]:t.match(Q)||[]).length;while(n--)delete r[t[n]]}(void 0===t||T.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!T.isEmptyObject(t)}};var e0=new eZ,e1=new eZ,e2=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,e3=/[A-Z]/g;function e4(e,t,n){var r,i;if(void 0===n&&1===e.nodeType){if(r="data-"+t.replace(e3,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{i=n,n="true"===i||"false"!==i&&("null"===i?null:i===+i+""?+i:e2.test(i)?JSON.parse(i):i)}catch(e){}e1.set(e,t,n)}else n=void 0}return n}T.extend({hasData:function(e){return e1.hasData(e)||e0.hasData(e)},data:function(e,t,n){return e1.access(e,t,n)},removeData:function(e,t){e1.remove(e,t)},_data:function(e,t,n){return e0.access(e,t,n)},_removeData:function(e,t){e0.remove(e,t)}}),T.fn.extend({data:function(e,t){var n,r,i,o=this[0],a=o&&o.attributes;if(void 0===e){if(this.length&&(i=e1.get(o),1===o.nodeType&&!e0.get(o,"hasDataAttrs"))){n=a.length;while(n--)a[n]&&0===(r=a[n].name).indexOf("data-")&&e4(o,r=eJ(r.slice(5)),i[r]);e0.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof e?this.each(function(){e1.set(this,e)}):G(this,function(t){var n;if(o&&void 0===t)return void 0!==(n=e1.get(o,e))||void 0!==(n=e4(o,e))?n:void 0;this.each(function(){e1.set(this,e,t)})},null,t,arguments.length>1,null,!0)},removeData:function(e){return this.each(function(){e1.remove(this,e)})}}),T.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=e0.get(e,t),n&&(!r||Array.isArray(n)?r=e0.set(e,t,T.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=T.queue(e,t),r=n.length,i=n.shift(),o=T._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){T.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return e0.get(e,n)||e0.set(e,n,{empty:T.Callbacks("once memory").add(function(){e0.remove(e,[t+"queue",n])})})}}),T.fn.extend({queue:function(e,t){var n=2;return("string"!=typeof e&&(t=e,e="fx",n--),arguments.length<n)?T.queue(this[0],e):void 0===t?this:this.each(function(){var n=T.queue(this,e,t);T._queueHooks(this,e),"fx"===e&&"inprogress"!==n[0]&&T.dequeue(this,e)})},dequeue:function(e){return this.each(function(){T.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=T.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=e0.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var e5=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,e9=RegExp("^(?:([+-])=|)("+e5+")([a-z%]*)$","i"),e6=["Top","Right","Bottom","Left"];function e8(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&"none"===T.css(e,"display")}var e7=/^[a-z]/,te=/^(?:Border(?:Top|Right|Bottom|Left)?(?:Width|)|(?:Margin|Padding)?(?:Top|Right|Bottom|Left)?|(?:Min|Max)?(?:Width|Height))$/;function tt(e){return e7.test(e)&&te.test(e[0].toUpperCase()+e.slice(1))}function tn(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return T.css(e,t,"")},u=s(),l=n&&n[3]||(tt(t)?"px":""),c=e.nodeType&&(!tt(t)||"px"!==l&&+u)&&e9.exec(T.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)T.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,T.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var tr=/^-ms-/;function ti(e){return eJ(e.replace(tr,"ms-"))}var to={};function ta(e,t){for(var n,r,i=[],o=0,a=e.length;o<a;o++)(r=e[o]).style&&(n=r.style.display,t?("none"!==n||(i[o]=e0.get(r,"display")||null,i[o]||(r.style.display="")),""===r.style.display&&e8(r)&&(i[o]=function(e){var t,n=e.ownerDocument,r=e.nodeName,i=to[r];return i||(t=n.body.appendChild(n.createElement(r)),i=T.css(t,"display"),t.parentNode.removeChild(t),"none"===i&&(i="block"),to[r]=i),i}(r))):"none"!==n&&(i[o]="none",e0.set(r,"display",n)));for(o=0;o<a;o++)null!=i[o]&&(e[o].style.display=i[o]);return e}T.fn.extend({show:function(){return ta(this,!0)},hide:function(){return ta(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){e8(this)?T(this).show():T(this).hide()})}});var ts=function(e){return T.contains(e.ownerDocument,e)||e.getRootNode(tu)===e.ownerDocument},tu={composed:!0};H.getRootNode||(ts=function(e){return T.contains(e.ownerDocument,e)});var tl=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,tc={thead:["table"],col:["colgroup","table"],tr:["tbody","table"],td:["tr","tbody","table"]};function tf(e,t){var n;return(n=void 0!==e.getElementsByTagName?e.getElementsByTagName(t||"*"):void 0!==e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&C(e,t))?T.merge([e],n):n}tc.tbody=tc.tfoot=tc.colgroup=tc.caption=tc.thead,tc.th=tc.td;var tp=/^$|^module$|\/(?:java|ecma)script/i;function td(e,t){for(var n=0,r=e.length;n<r;n++)e0.set(e[n],"globalEval",!t||e0.get(t[n],"globalEval"))}var th=/<|&#?\w+;/;function tg(e,t,r,i,o){for(var a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,g=e.length;d<g;d++)if((a=e[d])||0===a){if("object"===h(a)&&(a.nodeType||v(a)))T.merge(p,a.nodeType?[a]:a);else if(th.test(a)){s=s||f.appendChild(t.createElement("div")),c=(u=tc[(tl.exec(a)||["",""])[1].toLowerCase()]||n).length;while(--c>-1)s=s.appendChild(t.createElement(u[c]));s.innerHTML=T.htmlPrefilter(a),T.merge(p,s.childNodes),(s=f.firstChild).textContent=""}else p.push(t.createTextNode(a))}f.textContent="",d=0;while(a=p[d++]){if(i&&T.inArray(a,i)>-1){o&&o.push(a);continue}if(l=ts(a),s=tf(f.appendChild(a),"script"),l&&td(s),r){c=0;while(a=s[c++])tp.test(a.type||"")&&r.push(a)}}return f}function tv(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function ty(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function tm(e,t,n,r){t=o(t);var i,a,s,u,l,c,f=0,p=e.length,d=p-1,h=t[0];if("function"==typeof h)return e.each(function(i){var o=e.eq(i);t[0]=h.call(this,i,o.html()),tm(o,t,n,r)});if(p&&(a=(i=tg(t,e[0].ownerDocument,!1,e,r)).firstChild,1===i.childNodes.length&&(i=a),a||r)){for(u=(s=T.map(tf(i,"script"),tv)).length;f<p;f++)l=i,f!==d&&(l=T.clone(l,!0,!0),u&&T.merge(s,tf(l,"script"))),n.call(e[f],l,f);if(u)for(c=s[s.length-1].ownerDocument,T.map(s,ty),f=0;f<u;f++)l=s[f],tp.test(l.type||"")&&!e0.get(l,"globalEval")&&T.contains(c,l)&&(l.src&&"module"!==(l.type||"").toLowerCase()?T._evalUrl&&!l.noModule&&T._evalUrl(l.src,{nonce:l.nonce,crossOrigin:l.crossOrigin},c):x(l.textContent,l,c))}return e}var tx=/^(?:checkbox|radio)$/i,tb=/^([^.]*)(?:\.(.+)|)/;function tw(){return!0}function tT(){return!1}function tC(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)tC(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=tT;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return T().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=T.guid++)),e.each(function(){T.event.add(this,t,i,r,n)})}function tj(e,t,n){if(!n){void 0===e0.get(e,t)&&T.event.add(e,t,tw);return}e0.set(e,t,!1),T.event.add(e,t,{namespace:!1,handler:function(e){var n,r=e0.get(this,t);if(1&e.isTrigger&&this[t]){if(r.length)(T.event.special[t]||{}).delegateType&&e.stopPropagation();else if(r=i.call(arguments),e0.set(this,t,r),this[t](),n=e0.get(this,t),e0.set(this,t,!1),r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(e0.set(this,t,{value:T.event.trigger(r[0],r.slice(1),this)}),e.stopPropagation(),e.isImmediatePropagationStopped=tw)}})}T.event={add:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=e0.get(e);if(eK(e)){n.handler&&(n=(o=n).handler,i=o.selector),i&&T.find.matchesSelector(H,i),n.guid||(n.guid=T.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(t){return T.event.triggered!==t.type?T.event.dispatch.apply(e,arguments):void 0}),l=(t=(t||"").match(Q)||[""]).length;while(l--){if(d=g=(s=tb.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),!d)continue;f=T.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=T.event.special[d]||{},c=T.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&T.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,(!f.setup||!1===f.setup.call(e,r,h,a))&&e.addEventListener&&e.addEventListener(d,a)),f.add&&(f.add.call(e,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c)}}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=e0.hasData(e)&&e0.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(Q)||[""]).length;while(l--){if(d=g=(s=tb.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),!d){for(d in u)T.event.remove(e,d+t[l],n,r,!0);continue}f=T.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],(i||g===c.origType)&&(!n||n.guid===c.guid)&&(!s||s.test(c.namespace))&&(!r||r===c.selector||"**"===r&&c.selector)&&(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||T.removeEvent(e,d,v.handle),delete u[d])}T.isEmptyObject(u)&&e0.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=Array(arguments.length),u=T.event.fix(e),l=(e0.get(this,"events")||Object.create(null))[u.type]||[],c=T.event.special[u.type]||{};for(t=1,s[0]=u;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=T.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())(!u.rnamespace||!1===o.namespace||u.rnamespace.test(o.namespace))&&(u.handleObj=o,u.data=o.data,void 0!==(r=((T.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&!("click"===e.type&&e.button>=1)){for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&!("click"===e.type&&!0===l.disabled)){for(n=0,o=[],a={};n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?T(i,this).index(l)>-1:T.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(e,t){Object.defineProperty(T.Event.prototype,e,{enumerable:!0,configurable:!0,get:"function"==typeof t?function(){if(this.originalEvent)return t(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[e]},set:function(t){Object.defineProperty(this,e,{enumerable:!0,configurable:!0,writable:!0,value:t})}})},fix:function(e){return e[T.expando]?e:new T.Event(e)},special:T.extend(Object.create(null),{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return tx.test(t.type)&&t.click&&C(t,"input")&&tj(t,"click",!0),!1},trigger:function(e){var t=this||e;return tx.test(t.type)&&t.click&&C(t,"input")&&tj(t,"click"),!0},_default:function(e){var t=e.target;return tx.test(t.type)&&t.click&&C(t,"input")&&e0.get(t,"click")||C(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}})},T.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},T.Event=function(e,t){if(!(this instanceof T.Event))return new T.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented?tw:tT,this.target=e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&T.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[T.expando]=!0},T.Event.prototype={constructor:T.Event,isDefaultPrevented:tT,isPropagationStopped:tT,isImmediatePropagationStopped:tT,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=tw,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=tw,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=tw,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},T.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,char:!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},T.event.addProp),T.each({focus:"focusin",blur:"focusout"},function(e,t){function n(e){var t=T.event.fix(e);t.type="focusin"===e.type?"focus":"blur",t.isSimulated=!0,t.target===t.currentTarget&&e0.get(this,"handle")(t)}T.event.special[e]={setup:function(){if(tj(this,e,!0),!k)return!1;this.addEventListener(t,n)},trigger:function(){return tj(this,e),!0},teardown:function(){if(!k)return!1;this.removeEventListener(t,n)},_default:function(t){return e0.get(t.target,e)},delegateType:t}}),T.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,t){T.event.special[e]={delegateType:t,bindType:t,handle:function(e){var n,r=e.relatedTarget,i=e.handleObj;return r&&(r===this||T.contains(this,r))||(e.type=i.origType,n=i.handler.apply(this,arguments),e.type=t),n}}}),T.fn.extend({on:function(e,t,n,r){return tC(this,e,t,n,r)},one:function(e,t,n,r){return tC(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,T(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return(!1===t||"function"==typeof t)&&(n=t,t=void 0),!1===n&&(n=tT),this.each(function(){T.event.remove(this,e,n,t)})}});var tE=/<script|<style|<link/i;function tk(e,t){return C(e,"table")&&C(11!==t.nodeType?t:t.firstChild,"tr")&&T(e).children("tbody")[0]||e}function tS(e,t){var n,r,i,o=e0.get(e,"events");if(1===t.nodeType){if(o)for(n in e0.remove(t,"handle events"),o)for(r=0,i=o[n].length;r<i;r++)T.event.add(t,n,o[n][r]);e1.hasData(e)&&e1.set(t,T.extend({},e1.get(e)))}}function tD(e,t,n){for(var r,i=t?T.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||T.cleanData(tf(r)),r.parentNode&&(n&&ts(r)&&td(tf(r,"script")),r.parentNode.removeChild(r));return e}T.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s=e.cloneNode(!0),u=ts(e);if(k&&(1===e.nodeType||11===e.nodeType)&&!T.isXMLDoc(e))for(r=0,a=tf(s),i=(o=tf(e)).length;r<i;r++)C(a[r],"textarea")&&(a[r].defaultValue=o[r].defaultValue);if(t){if(n)for(r=0,o=o||tf(e),a=a||tf(s),i=o.length;r<i;r++)tS(o[r],a[r]);else tS(e,s)}return(a=tf(s,"script")).length>0&&td(a,!u&&tf(e,"script")),s},cleanData:function(e){for(var t,n,r,i=T.event.special,o=0;void 0!==(n=e[o]);o++)if(eK(n)){if(t=n[e0.expando]){if(t.events)for(r in t.events)i[r]?T.event.remove(n,r):T.removeEvent(n,r,t.handle);n[e0.expando]=void 0}n[e1.expando]&&(n[e1.expando]=void 0)}}}),T.fn.extend({detach:function(e){return tD(this,e,!0)},remove:function(e){return tD(this,e)},text:function(e){return G(this,function(e){return void 0===e?T.text(this):this.empty().each(function(){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&(this.textContent=e)})},null,e,arguments.length)},append:function(){return tm(this,arguments,function(e){(1===this.nodeType||11===this.nodeType||9===this.nodeType)&&tk(this,e).appendChild(e)})},prepend:function(){return tm(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=tk(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return tm(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return tm(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(T.cleanData(tf(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return T.clone(this,e,t)})},html:function(e){return G(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!tE.test(e)&&!tc[(tl.exec(e)||["",""])[1].toLowerCase()]){e=T.htmlPrefilter(e);try{for(;n<r;n++)t=this[n]||{},1===t.nodeType&&(T.cleanData(tf(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var e=[];return tm(this,arguments,function(t){var n=this.parentNode;0>T.inArray(this,e)&&(T.cleanData(tf(this)),n&&n.replaceChild(t,this))},e)}}),T.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,t){T.fn[e]=function(e){for(var n,r=[],i=T(e),o=i.length-1,s=0;s<=o;s++)n=s===o?this:this.clone(!0),T(i[s])[t](n),a.apply(r,n);return this.pushStack(r)}});var tA=RegExp("^("+e5+")(?!px)[a-z%]+$","i"),tq=/^--/;function tN(t){var n=t.ownerDocument.defaultView;return n||(n=e),n.getComputedStyle(t)}function tO(e,t,n){var r,i=tq.test(t);return(n=n||tN(e))&&(r=n.getPropertyValue(t)||n[t],i&&r&&(r=r.replace(D,"$1")||void 0),""!==r||ts(e)||(r=T.style(e,t))),void 0!==r?r+"":r}var tH=["Webkit","Moz","ms"],tL=y.createElement("div").style,tP={};function tR(e){return tP[e]||(e in tL?e:tP[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=tH.length;while(n--)if((e=tH[n]+t)in tL)return e}(e)||e)}(tX=y.createElement("div")).style&&(d.reliableTrDimensions=function(){var t,n,r;if(null==tU){if(t=y.createElement("table"),n=y.createElement("tr"),t.style.cssText="position:absolute;left:-11111px;border-collapse:separate",n.style.cssText="box-sizing:content-box;border:1px solid",n.style.height="1px",tX.style.height="9px",tX.style.display="block",H.appendChild(t).appendChild(n).appendChild(tX),0===t.offsetWidth){H.removeChild(t);return}tU=Math.round(parseFloat((r=e.getComputedStyle(n)).height))+Math.round(parseFloat(r.borderTopWidth))+Math.round(parseFloat(r.borderBottomWidth))===n.offsetHeight,H.removeChild(t)}return tU});var tM=/^(none|table(?!-c[ea]).+)/,tW={position:"absolute",visibility:"hidden",display:"block"},t$={letterSpacing:"0",fontWeight:"400"};function tI(e,t,n){var r=e9.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function tF(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0,l=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(l+=T.css(e,n+e6[a],!0,i)),r?("content"===n&&(u-=T.css(e,"padding"+e6[a],!0,i)),"margin"!==n&&(u-=T.css(e,"border"+e6[a]+"Width",!0,i))):(u+=T.css(e,"padding"+e6[a],!0,i),"padding"!==n?u+=T.css(e,"border"+e6[a]+"Width",!0,i):s+=T.css(e,"border"+e6[a]+"Width",!0,i));return!r&&o>=0&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u+l}function tB(e,t,n){var r=tN(e),i=(k||n)&&"border-box"===T.css(e,"boxSizing",!1,r),o=i,a=tO(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(tA.test(a)){if(!n)return a;a="auto"}return("auto"===a||k&&i||!d.reliableTrDimensions()&&C(e,"tr"))&&e.getClientRects().length&&(i="border-box"===T.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+tF(e,t,n||(i?"border":"content"),o,r,a)+"px"}function t_(e,t,n,r,i){return new t_.prototype.init(e,t,n,r,i)}T.extend({cssHooks:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=ti(t),u=tq.test(t),l=e.style;if(u||(t=tR(s)),a=T.cssHooks[t]||T.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"==(o=typeof n)&&(i=e9.exec(n))&&i[1]&&(n=tn(e,t,i),o="number"),null!=n&&n==n&&("number"===o&&(n+=i&&i[3]||(tt(s)?"px":"")),k&&""===n&&0===t.indexOf("background")&&(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=ti(t);return(tq.test(t)||(t=tR(s)),(a=T.cssHooks[t]||T.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=tO(e,t,r)),"normal"===i&&t in t$&&(i=t$[t]),""===n||n)?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),T.each(["height","width"],function(e,t){T.cssHooks[t]={get:function(e,n,r){if(n)return!tM.test(T.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?tB(e,t,r):function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r}(e,tW,function(){return tB(e,t,r)})},set:function(e,n,r){var i,o=tN(e),a=r&&"border-box"===T.css(e,"boxSizing",!1,o),s=r?tF(e,t,r,a,o):0;return s&&(i=e9.exec(n))&&"px"!==(i[3]||"px")&&(e.style[t]=n,n=T.css(e,t)),tI(e,n,s)}}}),T.each({margin:"",padding:"",border:"Width"},function(e,t){T.cssHooks[e+t]={expand:function(n){for(var r=0,i={},o="string"==typeof n?n.split(" "):[n];r<4;r++)i[e+e6[r]+t]=o[r]||o[r-2]||o[0];return i}},"margin"!==e&&(T.cssHooks[e+t].set=tI)}),T.fn.extend({css:function(e,t){return G(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=tN(e),i=t.length;a<i;a++)o[t[a]]=T.css(e,t[a],!1,r);return o}return void 0!==n?T.style(e,t,n):T.css(e,t)},e,t,arguments.length>1)}}),T.Tween=t_,t_.prototype={constructor:t_,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||T.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(tt(n)?"px":"")},cur:function(){var e=t_.propHooks[this.prop];return e&&e.get?e.get(this):t_.propHooks._default.get(this)},run:function(e){var t,n=t_.propHooks[this.prop];return this.options.duration?this.pos=t=T.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):t_.propHooks._default.set(this),this}},t_.prototype.init.prototype=t_.prototype,t_.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=T.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){T.fx.step[e.prop]?T.fx.step[e.prop](e):1===e.elem.nodeType&&(T.cssHooks[e.prop]||null!=e.elem.style[tR(e.prop)])?T.style(e.elem,e.prop,e.now+e.unit):e.elem[e.prop]=e.now}}},T.easing={linear:function(e){return e},swing:function(e){return .5-Math.cos(e*Math.PI)/2},_default:"swing"},T.fx=t_.prototype.init,T.fx.step={};var tU,tX,tz,tV,tY=/^(?:toggle|show|hide)$/,tG=/queueHooks$/;function tQ(){return e.setTimeout(function(){tz=void 0}),tz=Date.now()}function tJ(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=e6[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function tK(e,t,n){for(var r,i=(tZ.tweeners[t]||[]).concat(tZ.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function tZ(e,t,n){var r,i,o=0,a=tZ.prefilters.length,s=T.Deferred().always(function(){delete u.elem}),u=function(){if(i)return!1;for(var t=tz||tQ(),n=Math.max(0,l.startTime+l.duration-t),r=1-(n/l.duration||0),o=0,a=l.tweens.length;o<a;o++)l.tweens[o].run(r);return(s.notifyWith(e,[l,r,n]),r<1&&a)?n:(a||s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l]),!1)},l=s.promise({elem:e,props:T.extend({},t),opts:T.extend(!0,{specialEasing:{},easing:T.easing._default},n),originalProperties:t,originalOptions:n,startTime:tz||tQ(),duration:n.duration,tweens:[],createTween:function(t,n){var r=T.Tween(e,l.opts,t,n,l.opts.specialEasing[t]||l.opts.easing);return l.tweens.push(r),r},stop:function(t){var n=0,r=t?l.tweens.length:0;if(i)return this;for(i=!0;n<r;n++)l.tweens[n].run(1);return t?(s.notifyWith(e,[l,1,0]),s.resolveWith(e,[l,t])):s.rejectWith(e,[l,t]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=ti(n)],Array.isArray(o=e[n])&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=T.cssHooks[r])&&("expand"in a))for(n in o=a.expand(o),delete e[r],o)(n in e)||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);o<a;o++)if(r=tZ.prefilters[o].call(l,e,c,l.opts))return"function"==typeof r.stop&&(T._queueHooks(l.elem,l.opts.queue).stop=r.stop.bind(r)),r;return T.map(c,tK,l),"function"==typeof l.opts.start&&l.opts.start.call(e,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),T.fx.timer(T.extend(u,{elem:e,anim:l,queue:l.opts.queue})),l}T.Animation=T.extend(tZ,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return tn(n.elem,e,e9.exec(t),n),n}]},tweener:function(e,t){"function"==typeof e?(t=e,e=["*"]):e=e.match(Q);for(var n,r=0,i=e.length;r<i;r++)n=e[r],tZ.tweeners[n]=tZ.tweeners[n]||[],tZ.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&e8(e),v=e0.get(e,"fxshow");for(r in n.queue||(null==(a=T._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,T.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],tY.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||T.style(e,r)}if(!(!(u=!T.isEmptyObject(t))&&T.isEmptyObject(d)))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=e0.get(e,"display")),"none"===(c=T.css(e,"display"))&&(l?c=l:(ta([e],!0),l=e.style.display||l,c=T.css(e,"display"),ta([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===T.css(e,"float")&&(u||(p.done(function(){h.display=l}),null!=l||(l="none"===(c=h.display)?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=e0.set(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&ta([e],!0),p.done(function(){for(r in g||ta([e]),e0.remove(e,"fxshow"),d)T.style(e,r,d[r])})),u=tK(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?tZ.prefilters.unshift(e):tZ.prefilters.push(e)}}),T.speed=function(e,t,n){var r=e&&"object"==typeof e?T.extend({},e):{complete:n||t||"function"==typeof e&&e,duration:e,easing:n&&t||t&&"function"!=typeof t&&t};return T.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in T.fx.speeds?r.duration=T.fx.speeds[r.duration]:r.duration=T.fx.speeds._default),(null==r.queue||!0===r.queue)&&(r.queue="fx"),r.old=r.complete,r.complete=function(){"function"==typeof r.old&&r.old.call(this),r.queue&&T.dequeue(this,r.queue)},r},T.fn.extend({fadeTo:function(e,t,n,r){return this.filter(e8).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(e,t,n,r){var i=T.isEmptyObject(e),o=T.speed(t,n,r),a=function(){var t=tZ(this,T.extend({},e),o);(i||e0.get(this,"finish"))&&t.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(e,t,n){var r=function(e){var t=e.stop;delete e.stop,t(n)};return"string"!=typeof e&&(n=t,t=e,e=void 0),t&&this.queue(e||"fx",[]),this.each(function(){var t=!0,i=null!=e&&e+"queueHooks",o=T.timers,a=e0.get(this);if(i)a[i]&&a[i].stop&&r(a[i]);else for(i in a)a[i]&&a[i].stop&&tG.test(i)&&r(a[i]);for(i=o.length;i--;)o[i].elem===this&&(null==e||o[i].queue===e)&&(o[i].anim.stop(n),t=!1,o.splice(i,1));(t||!n)&&T.dequeue(this,e)})},finish:function(e){return!1!==e&&(e=e||"fx"),this.each(function(){var t,n=e0.get(this),r=n[e+"queue"],i=n[e+"queueHooks"],o=T.timers,a=r?r.length:0;for(n.finish=!0,T.queue(this,e,[]),i&&i.stop&&i.stop.call(this,!0),t=o.length;t--;)o[t].elem===this&&o[t].queue===e&&(o[t].anim.stop(!0),o.splice(t,1));for(t=0;t<a;t++)r[t]&&r[t].finish&&r[t].finish.call(this);delete n.finish})}}),T.each(["toggle","show","hide"],function(e,t){var n=T.fn[t];T.fn[t]=function(e,r,i){return null==e||"boolean"==typeof e?n.apply(this,arguments):this.animate(tJ(t,!0),e,r,i)}}),T.each({slideDown:tJ("show"),slideUp:tJ("hide"),slideToggle:tJ("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,t){T.fn[e]=function(e,n,r){return this.animate(t,e,n,r)}}),T.timers=[],T.fx.tick=function(){var e,t=0,n=T.timers;for(tz=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||T.fx.stop(),tz=void 0},T.fx.timer=function(e){T.timers.push(e),T.fx.start()},T.fx.start=function(){tV||(tV=!0,function t(){tV&&(!1===y.hidden&&e.requestAnimationFrame?e.requestAnimationFrame(t):e.setTimeout(t,13),T.fx.tick())}())},T.fx.stop=function(){tV=null},T.fx.speeds={slow:600,fast:200,_default:400},T.fn.delay=function(t,n){return t=T.fx&&T.fx.speeds[t]||t,n=n||"fx",this.queue(n,function(n,r){var i=e.setTimeout(n,t);r.stop=function(){e.clearTimeout(i)}})};var t0=/^(?:input|select|textarea|button)$/i,t1=/^(?:a|area)$/i;function t2(e){return(e.match(Q)||[]).join(" ")}function t3(e){return e.getAttribute&&e.getAttribute("class")||""}function t4(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(Q)||[]}T.fn.extend({prop:function(e,t){return G(this,T.prop,e,t,arguments.length>1)},removeProp:function(e){return this.each(function(){delete this[T.propFix[e]||e]})}}),T.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return(1===o&&T.isXMLDoc(e)||(t=T.propFix[t]||t,i=T.propHooks[t]),void 0!==n)?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=e.getAttribute("tabindex");return t?parseInt(t,10):t0.test(e.nodeName)||t1.test(e.nodeName)&&e.href?0:-1}}},propFix:{for:"htmlFor",class:"className"}}),k&&(T.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),T.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){T.propFix[this.toLowerCase()]=this}),T.fn.extend({addClass:function(e){var t,n,r,i,o,a;return"function"==typeof e?this.each(function(t){T(this).addClass(e.call(this,t,t3(this)))}):(t=t4(e)).length?this.each(function(){if(r=t3(this),n=1===this.nodeType&&" "+t2(r)+" "){for(o=0;o<t.length;o++)i=t[o],0>n.indexOf(" "+i+" ")&&(n+=i+" ");r!==(a=t2(n))&&this.setAttribute("class",a)}}):this},removeClass:function(e){var t,n,r,i,o,a;return"function"==typeof e?this.each(function(t){T(this).removeClass(e.call(this,t,t3(this)))}):arguments.length?(t=t4(e)).length?this.each(function(){if(r=t3(this),n=1===this.nodeType&&" "+t2(r)+" "){for(o=0;o<t.length;o++){i=t[o];while(n.indexOf(" "+i+" ")>-1)n=n.replace(" "+i+" "," ")}r!==(a=t2(n))&&this.setAttribute("class",a)}}):this:this.attr("class","")},toggleClass:function(e,t){var n,r,i,o;return"function"==typeof e?this.each(function(n){T(this).toggleClass(e.call(this,n,t3(this),t),t)}):"boolean"==typeof t?t?this.addClass(e):this.removeClass(e):(n=t4(e)).length?this.each(function(){for(i=0,o=T(this);i<n.length;i++)r=n[i],o.hasClass(r)?o.removeClass(r):o.addClass(r)}):this},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&(" "+t2(t3(n))+" ").indexOf(t)>-1)return!0;return!1}}),T.fn.extend({val:function(e){var t,n,r,i=this[0];return arguments.length?(r="function"==typeof e,this.each(function(n){var i;1===this.nodeType&&(null==(i=r?e.call(this,n,T(this).val()):e)?i="":"number"==typeof i?i+="":Array.isArray(i)&&(i=T.map(i,function(e){return null==e?"":e+""})),(t=T.valHooks[this.type]||T.valHooks[this.nodeName.toLowerCase()])&&"set"in t&&void 0!==t.set(this,i,"value")||(this.value=i))})):i?(t=T.valHooks[i.type]||T.valHooks[i.nodeName.toLowerCase()])&&"get"in t&&void 0!==(n=t.get(i,"value"))?n:null==(n=i.value)?"":n:void 0}}),T.extend({valHooks:{select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if((n=i[r]).selected&&!n.disabled&&(!n.parentNode.disabled||!C(n.parentNode,"optgroup"))){if(t=T(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=T.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=T.inArray(T(r).val(),o)>-1)&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),k&&(T.valHooks.option={get:function(e){var t=e.getAttribute("value");return null!=t?t:t2(T.text(e))}}),T.each(["radio","checkbox"],function(){T.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=T.inArray(T(e).val(),t)>-1}}});var t5=/^(?:focusinfocus|focusoutblur)$/,t9=function(e){e.stopPropagation()};T.extend(T.event,{trigger:function(t,n,r,i){var o,a,s,u,l,f,p,d,h=[r||y],v=c.call(t,"type")?t.type:t,m=c.call(t,"namespace")?t.namespace.split("."):[];if(a=d=s=r=r||y,!(3===r.nodeType||8===r.nodeType||t5.test(v+T.event.triggered))&&(v.indexOf(".")>-1&&(v=(m=v.split(".")).shift(),m.sort()),l=0>v.indexOf(":")&&"on"+v,(t=t[T.expando]?t:new T.Event(v,"object"==typeof t&&t)).isTrigger=i?2:3,t.namespace=m.join("."),t.rnamespace=t.namespace?RegExp("(^|\\.)"+m.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,t.result=void 0,t.target||(t.target=r),n=null==n?[t]:T.makeArray(n,[t]),p=T.event.special[v]||{},i||!p.trigger||!1!==p.trigger.apply(r,n))){if(!i&&!p.noBubble&&!g(r)){for(u=p.delegateType||v,t5.test(u+v)||(a=a.parentNode);a;a=a.parentNode)h.push(a),s=a;s===(r.ownerDocument||y)&&h.push(s.defaultView||s.parentWindow||e)}o=0;while((a=h[o++])&&!t.isPropagationStopped())d=a,t.type=o>1?u:p.bindType||v,(f=(e0.get(a,"events")||Object.create(null))[t.type]&&e0.get(a,"handle"))&&f.apply(a,n),(f=l&&a[l])&&f.apply&&eK(a)&&(t.result=f.apply(a,n),!1===t.result&&t.preventDefault());return t.type=v,!i&&!t.isDefaultPrevented()&&(!p._default||!1===p._default.apply(h.pop(),n))&&eK(r)&&l&&"function"==typeof r[v]&&!g(r)&&((s=r[l])&&(r[l]=null),T.event.triggered=v,t.isPropagationStopped()&&d.addEventListener(v,t9),r[v](),t.isPropagationStopped()&&d.removeEventListener(v,t9),T.event.triggered=void 0,s&&(r[l]=s)),t.result}},simulate:function(e,t,n){var r=T.extend(new T.Event,n,{type:e,isSimulated:!0});T.event.trigger(r,null,t)}}),T.fn.extend({trigger:function(e,t){return this.each(function(){T.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return T.event.trigger(e,t,n,!0)}});var t6=e.location,t8={guid:Date.now()},t7=/\?/;T.parseXML=function(t){var n,r;if(!t||"string"!=typeof t)return null;try{n=new e.DOMParser().parseFromString(t,"text/xml")}catch(e){}return r=n&&n.getElementsByTagName("parsererror")[0],(!n||r)&&T.error("Invalid XML: "+(r?T.map(r.childNodes,function(e){return e.textContent}).join("\n"):t)),n};var ne=/\[\]$/,nt=/\r?\n/g,nn=/^(?:submit|button|image|reset|file)$/i,nr=/^(?:input|select|textarea|keygen)/i;T.param=function(e,t){var n,r=[],i=function(e,t){var n="function"==typeof t?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!T.isPlainObject(e))T.each(e,function(){i(this.name,this.value)});else for(n in e)!function e(t,n,r,i){var o;if(Array.isArray(n))T.each(n,function(n,o){r||ne.test(t)?i(t,o):e(t+"["+("object"==typeof o&&null!=o?n:"")+"]",o,r,i)});else if(r||"object"!==h(n))i(t,n);else for(o in n)e(t+"["+o+"]",n[o],r,i)}(n,e[n],t,i);return r.join("&")},T.fn.extend({serialize:function(){return T.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=T.prop(this,"elements");return e?T.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!T(this).is(":disabled")&&nr.test(this.nodeName)&&!nn.test(e)&&(this.checked||!tx.test(e))}).map(function(e,t){var n=T(this).val();return null==n?null:Array.isArray(n)?T.map(n,function(e){return{name:t.name,value:e.replace(nt,"\r\n")}}):{name:t.name,value:n.replace(nt,"\r\n")}}).get()}});var ni=/%20/g,no=/#.*$/,na=/([?&])_=[^&]*/,ns=/^(.*?):[ \t]*([^\r\n]*)$/mg,nu=/^(?:GET|HEAD)$/,nl=/^\/\//,nc={},nf={},np="*/".concat("*"),nd=y.createElement("a");function nh(e){return function(t,n){"string"!=typeof t&&(n=t,t="*");var r,i=0,o=t.toLowerCase().match(Q)||[];if("function"==typeof n)while(r=o[i++])"+"===r[0]?(e[r=r.slice(1)||"*"]=e[r]||[]).unshift(n):(e[r]=e[r]||[]).push(n)}}function ng(e,t,n,r){var i={},o=e===nf;function a(s){var u;return i[s]=!0,T.each(e[s]||[],function(e,s){var l=s(t,n,r);return"string"!=typeof l||o||i[l]?o?!(u=l):void 0:(t.dataTypes.unshift(l),a(l),!1)}),u}return a(t.dataTypes[0])||!i["*"]&&a("*")}function nv(e,t){var n,r,i=T.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&T.extend(!0,e,r),e}nd.href=t6.href,T.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:t6.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(t6.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":np,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":T.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?nv(nv(e,T.ajaxSettings),t):nv(T.ajaxSettings,e)},ajaxPrefilter:nh(nc),ajaxTransport:nh(nf),ajax:function(t,n){"object"==typeof t&&(n=t,t=void 0),n=n||{};var r,i,o,a,s,u,l,c,f,p,d=T.ajaxSetup({},n),h=d.context||d,g=d.context&&(h.nodeType||h.jquery)?T(h):T.event,v=T.Deferred(),m=T.Callbacks("once memory"),x=d.statusCode||{},b={},w={},C="canceled",j={readyState:0,getResponseHeader:function(e){var t;if(l){if(!a){a={};while(t=ns.exec(o))a[t[1].toLowerCase()+" "]=(a[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=a[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return l?o:null},setRequestHeader:function(e,t){return null==l&&(b[e=w[e.toLowerCase()]=w[e.toLowerCase()]||e]=t),this},overrideMimeType:function(e){return null==l&&(d.mimeType=e),this},statusCode:function(e){var t;if(e){if(l)j.always(e[j.status]);else for(t in e)x[t]=[x[t],e[t]]}return this},abort:function(e){var t=e||C;return r&&r.abort(t),E(0,t),this}};if(v.promise(j),d.url=((t||d.url||t6.href)+"").replace(nl,t6.protocol+"//"),d.type=n.method||n.type||d.method||d.type,d.dataTypes=(d.dataType||"*").toLowerCase().match(Q)||[""],null==d.crossDomain){u=y.createElement("a");try{u.href=d.url,u.href=u.href,d.crossDomain=nd.protocol+"//"+nd.host!=u.protocol+"//"+u.host}catch(e){d.crossDomain=!0}}if(ng(nc,d,n,j),d.data&&d.processData&&"string"!=typeof d.data&&(d.data=T.param(d.data,d.traditional)),l)return j;for(f in(c=T.event&&d.global)&&0==T.active++&&T.event.trigger("ajaxStart"),d.type=d.type.toUpperCase(),d.hasContent=!nu.test(d.type),i=d.url.replace(no,""),d.hasContent?d.data&&d.processData&&0===(d.contentType||"").indexOf("application/x-www-form-urlencoded")&&(d.data=d.data.replace(ni,"+")):(p=d.url.slice(i.length),d.data&&(d.processData||"string"==typeof d.data)&&(i+=(t7.test(i)?"&":"?")+d.data,delete d.data),!1===d.cache&&(i=i.replace(na,"$1"),p=(t7.test(i)?"&":"?")+"_="+t8.guid+++p),d.url=i+p),d.ifModified&&(T.lastModified[i]&&j.setRequestHeader("If-Modified-Since",T.lastModified[i]),T.etag[i]&&j.setRequestHeader("If-None-Match",T.etag[i])),(d.data&&d.hasContent&&!1!==d.contentType||n.contentType)&&j.setRequestHeader("Content-Type",d.contentType),j.setRequestHeader("Accept",d.dataTypes[0]&&d.accepts[d.dataTypes[0]]?d.accepts[d.dataTypes[0]]+("*"!==d.dataTypes[0]?", "+np+"; q=0.01":""):d.accepts["*"]),d.headers)j.setRequestHeader(f,d.headers[f]);if(d.beforeSend&&(!1===d.beforeSend.call(h,j,d)||l))return j.abort();if(C="abort",m.add(d.complete),j.done(d.success),j.fail(d.error),r=ng(nf,d,n,j)){if(j.readyState=1,c&&g.trigger("ajaxSend",[j,d]),l)return j;d.async&&d.timeout>0&&(s=e.setTimeout(function(){j.abort("timeout")},d.timeout));try{l=!1,r.send(b,E)}catch(e){if(l)throw e;E(-1,e)}}else E(-1,"No Transport");function E(t,n,a,u){var f,p,y,b,w,C=n;!l&&(l=!0,s&&e.clearTimeout(s),r=void 0,o=u||"",j.readyState=t>0?4:0,f=t>=200&&t<300||304===t,a&&(b=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r){for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(d,j,a)),!f&&T.inArray("script",d.dataTypes)>-1&&0>T.inArray("json",d.dataTypes)&&(d.converters["text script"]=function(){}),b=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift()){if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o])){for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}}if(!0!==a){if(a&&e.throws)t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}}}return{state:"success",data:t}}(d,b,j,f),f?(d.ifModified&&((w=j.getResponseHeader("Last-Modified"))&&(T.lastModified[i]=w),(w=j.getResponseHeader("etag"))&&(T.etag[i]=w)),204===t||"HEAD"===d.type?C="nocontent":304===t?C="notmodified":(C=b.state,p=b.data,f=!(y=b.error))):(y=C,(t||!C)&&(C="error",t<0&&(t=0))),j.status=t,j.statusText=(n||C)+"",f?v.resolveWith(h,[p,C,j]):v.rejectWith(h,[j,C,y]),j.statusCode(x),x=void 0,c&&g.trigger(f?"ajaxSuccess":"ajaxError",[j,d,f?p:y]),m.fireWith(h,[j,C]),!c||(g.trigger("ajaxComplete",[j,d]),--T.active||T.event.trigger("ajaxStop")))}return j},getJSON:function(e,t,n){return T.get(e,t,n,"json")},getScript:function(e,t){return T.get(e,void 0,t,"script")}}),T.each(["get","post"],function(e,t){T[t]=function(e,n,r,i){return("function"==typeof n||null===n)&&(i=i||r,r=n,n=void 0),T.ajax(T.extend({url:e,type:t,dataType:i,data:n,success:r},T.isPlainObject(e)&&e))}}),T.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),T._evalUrl=function(e,t,n){return T.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,scriptAttrs:t.crossOrigin?{crossOrigin:t.crossOrigin}:void 0,converters:{"text script":function(){}},dataFilter:function(e){T.globalEval(e,t,n)}})},T.fn.extend({wrapAll:function(e){var t;return this[0]&&("function"==typeof e&&(e=e.call(this[0])),t=T(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(e){return"function"==typeof e?this.each(function(t){T(this).wrapInner(e.call(this,t))}):this.each(function(){var t=T(this),n=t.contents();n.length?n.wrapAll(e):t.append(e)})},wrap:function(e){var t="function"==typeof e;return this.each(function(n){T(this).wrapAll(t?e.call(this,n):e)})},unwrap:function(e){return this.parent(e).not("body").each(function(){T(this).replaceWith(this.childNodes)}),this}}),T.expr.pseudos.hidden=function(e){return!T.expr.pseudos.visible(e)},T.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},T.ajaxSettings.xhr=function(){return new e.XMLHttpRequest};var ny={0:200};function nm(e){return e.scriptAttrs||!e.headers&&(e.crossDomain||e.async&&0>T.inArray("json",e.dataTypes))}T.ajaxTransport(function(e){var t;return{send:function(n,r){var i,o=e.xhr();if(o.open(e.type,e.url,e.async,e.username,e.password),e.xhrFields)for(i in e.xhrFields)o[i]=e.xhrFields[i];for(i in e.mimeType&&o.overrideMimeType&&o.overrideMimeType(e.mimeType),e.crossDomain||n["X-Requested-With"]||(n["X-Requested-With"]="XMLHttpRequest"),n)o.setRequestHeader(i,n[i]);t=function(e){return function(){t&&(t=o.onload=o.onerror=o.onabort=o.ontimeout=null,"abort"===e?o.abort():"error"===e?r(o.status,o.statusText):r(ny[o.status]||o.status,o.statusText,"text"===(o.responseType||"text")?{text:o.responseText}:{binary:o.response},o.getAllResponseHeaders()))}},o.onload=t(),o.onabort=o.onerror=o.ontimeout=t("error"),t=t("abort");try{o.send(e.hasContent&&e.data||null)}catch(e){if(t)throw e}},abort:function(){t&&t()}}}),T.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},converters:{"text script":function(e){return T.globalEval(e),e}}}),T.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),nm(e)&&(e.type="GET")}),T.ajaxTransport("script",function(e){if(nm(e)){var t,n;return{send:function(r,i){t=T("<script>").attr(e.scriptAttrs||{}).prop({charset:e.scriptCharset,src:e.url}).on("load error",n=function(e){t.remove(),n=null,e&&i("error"===e.type?404:200,e.type)}),y.head.appendChild(t[0])},abort:function(){n&&n()}}}});var nx=[],nb=/(=)\?(?=&|$)|\?\?/;T.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=nx.pop()||T.expando+"_"+t8.guid++;return this[e]=!0,e}}),T.ajaxPrefilter("jsonp",function(t,n,r){var i,o,a,s=!1!==t.jsonp&&(nb.test(t.url)?"url":"string"==typeof t.data&&0===(t.contentType||"").indexOf("application/x-www-form-urlencoded")&&nb.test(t.data)&&"data");return i=t.jsonpCallback="function"==typeof t.jsonpCallback?t.jsonpCallback():t.jsonpCallback,s?t[s]=t[s].replace(nb,"$1"+i):!1!==t.jsonp&&(t.url+=(t7.test(t.url)?"&":"?")+t.jsonp+"="+i),t.converters["script json"]=function(){return a||T.error(i+" was not called"),a[0]},t.dataTypes[0]="json",o=e[i],e[i]=function(){a=arguments},r.always(function(){void 0===o?T(e).removeProp(i):e[i]=o,t[i]&&(t.jsonpCallback=n.jsonpCallback,nx.push(i)),a&&"function"==typeof o&&o(a[0]),a=o=void 0}),"script"}),T.ajaxPrefilter(function(t,n){"string"==typeof t.data||T.isPlainObject(t.data)||Array.isArray(t.data)||"processData"in n||(t.processData=!1),t.data instanceof e.FormData&&(t.contentType=!1)}),T.parseHTML=function(e,t,n){var r,i,o;return"string"==typeof e||eR(e+"")?("boolean"==typeof t&&(n=t,t=!1),t||((r=(t=y.implementation.createHTMLDocument("")).createElement("base")).href=y.location.href,t.head.appendChild(r)),i=eP.exec(e),o=!n&&[],i)?[t.createElement(i[1])]:(i=tg([e],t,o),o&&o.length&&T(o).remove(),T.merge([],i.childNodes)):[]},T.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return s>-1&&(r=t2(e.slice(s)),e=e.slice(0,s)),"function"==typeof t?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),a.length>0&&T.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?T("<div>").append(T.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},T.expr.pseudos.animated=function(e){return T.grep(T.timers,function(t){return e===t.elem}).length},T.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=T.css(e,"position"),c=T(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=T.css(e,"top"),u=T.css(e,"left"),("absolute"===l||"fixed"===l)&&(o+u).indexOf("auto")>-1?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),"function"==typeof t&&(t=t.call(e,n,T.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},T.fn.extend({offset:function(e){if(arguments.length)return void 0===e?this:this.each(function(t){T.offset.setOffset(this,e,t)});var t,n,r=this[0];return r?r.getClientRects().length?(t=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:t.top+n.pageYOffset,left:t.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===T.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&e!==n.documentElement&&"static"===T.css(e,"position"))e=e.offsetParent||n.documentElement;e&&e!==r&&1===e.nodeType&&"static"!==T.css(e,"position")&&(i=T(e).offset(),i.top+=T.css(e,"borderTopWidth",!0),i.left+=T.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-T.css(r,"marginTop",!0),left:t.left-i.left-T.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===T.css(e,"position"))e=e.offsetParent;return e||H})}}),T.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(e,t){var n="pageYOffset"===t;T.fn[e]=function(r){return G(this,function(e,r,i){var o;if(g(e)?o=e:9===e.nodeType&&(o=e.defaultView),void 0===i)return o?o[t]:e[r];o?o.scrollTo(n?o.pageXOffset:i,n?i:o.pageYOffset):e[r]=i},e,r,arguments.length)}}),T.each({Height:"height",Width:"width"},function(e,t){T.each({padding:"inner"+e,content:t,"":"outer"+e},function(n,r){T.fn[r]=function(i,o){var a=arguments.length&&(n||"boolean"!=typeof i),s=n||(!0===i||!0===o?"margin":"border");return G(this,function(t,n,i){var o;return g(t)?0===r.indexOf("outer")?t["inner"+e]:t.document.documentElement["client"+e]:9===t.nodeType?(o=t.documentElement,Math.max(t.body["scroll"+e],o["scroll"+e],t.body["offset"+e],o["offset"+e],o["client"+e])):void 0===i?T.css(t,n,s):T.style(t,n,i,s)},t,a?i:void 0,a)}})}),T.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){T.fn[t]=function(e){return this.on(t,e)}}),T.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1==arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.on("mouseenter",e).on("mouseleave",t||e)}}),T.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,t){T.fn[t]=function(e,n){return arguments.length>0?this.on(t,null,e,n):this.trigger(t)}}),T.proxy=function(e,t){var n,r,o;if("string"==typeof t&&(n=e[t],t=e,e=n),"function"==typeof e)return r=i.call(arguments,2),(o=function(){return e.apply(t||this,r.concat(i.call(arguments)))}).guid=e.guid=e.guid||T.guid++,o},T.holdReady=function(e){e?T.readyWait++:T.ready(!0)},"function"==typeof define&&define.amd&&define("jquery",[],function(){return T});var nw=e.jQuery,nT=e.$;return T.noConflict=function(t){return e.$===T&&(e.$=nT),t&&e.jQuery===T&&(e.jQuery=nw),T},void 0===t&&(e.jQuery=e.$=T),T});;
/* @license GPL-2.0-or-later https://git.drupalcode.org/project/once/-/raw/v1.0.1/LICENSE.md */
/*! @drupal/once - v1.0.1 - 2021-06-12 */
var once=function(){"use strict";var n=/[\11\12\14\15\40]+/,e="data-once",t=document;function r(n,t,r){return n[t+"Attribute"](e,r)}function o(e){if("string"!=typeof e)throw new TypeError("once ID must be a string");if(""===e||n.test(e))throw new RangeError("once ID must not be empty or contain spaces");return'[data-once~="'+e+'"]'}function u(n){if(!(n instanceof Element))throw new TypeError("The element must be an instance of Element");return!0}function i(n,e){void 0===e&&(e=t);var r=n;if(null===n)r=[];else{if(!n)throw new TypeError("Selector must not be empty");"string"!=typeof n||e!==t&&!u(e)?n instanceof Element&&(r=[n]):r=e.querySelectorAll(n)}return Array.prototype.slice.call(r)}function c(n,e,t){return e.filter((function(e){var r=u(e)&&e.matches(n);return r&&t&&t(e),r}))}function f(e,t){var o=t.add,u=t.remove,i=[];r(e,"has")&&r(e,"get").trim().split(n).forEach((function(n){i.indexOf(n)<0&&n!==u&&i.push(n)})),o&&i.push(o);var c=i.join(" ");r(e,""===c?"remove":"set",c)}function a(n,e,t){return c(":not("+o(n)+")",i(e,t),(function(e){return f(e,{add:n})}))}return a.remove=function(n,e,t){return c(o(n),i(e,t),(function(e){return f(e,{remove:n})}))},a.filter=function(n,e,t){return c(o(n),i(e,t))},a.find=function(n,e){return i(n?o(n):"[data-once]",e)},a}();

;
/* @license GPL-2.0-or-later https://www.drupal.org/licensing/faq */
window.Drupal={behaviors:{},locale:{}};(function(Drupal,drupalSettings,drupalTranslations,console,Proxy,Reflect){Drupal.throwError=function(error){setTimeout(()=>{throw error;},0);};Drupal.attachBehaviors=function(context,settings){context=context||document;settings=settings||drupalSettings;const behaviors=Drupal.behaviors;Object.keys(behaviors||{}).forEach((i)=>{if(typeof behaviors[i].attach==='function')try{behaviors[i].attach(context,settings);}catch(e){Drupal.throwError(e);}});};Drupal.detachBehaviors=function(context,settings,trigger){context=context||document;settings=settings||drupalSettings;trigger=trigger||'unload';const behaviors=Drupal.behaviors;Object.keys(behaviors||{}).forEach((i)=>{if(typeof behaviors[i].detach==='function')try{behaviors[i].detach(context,settings,trigger);}catch(e){Drupal.throwError(e);}});};Drupal.checkPlain=function(str){str=str.toString().replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');return str;};Drupal.formatString=function(str,args){const processedArgs={};Object.keys(args||{}).forEach((key)=>{switch(key.charAt(0)){case '@':processedArgs[key]=Drupal.checkPlain(args[key]);break;case '!':processedArgs[key]=args[key];break;default:processedArgs[key]=Drupal.theme('placeholder',args[key]);break;}});return Drupal.stringReplace(str,processedArgs,null);};Drupal.stringReplace=function(str,args,keys){if(str.length===0)return str;if(!Array.isArray(keys)){keys=Object.keys(args||{});keys.sort((a,b)=>a.length-b.length);}if(keys.length===0)return str;const key=keys.pop();const fragments=str.split(key);if(keys.length){for(let i=0;i<fragments.length;i++)fragments[i]=Drupal.stringReplace(fragments[i],args,keys.slice(0));}return fragments.join(args[key]);};Drupal.t=function(str,args,options){options=options||{};options.context=options.context||'';if(drupalTranslations?.strings?.[options.context]?.[str])str=drupalTranslations.strings[options.context][str];if(args)str=Drupal.formatString(str,args);return str;};Drupal.url=function(path){return drupalSettings.path.baseUrl+drupalSettings.path.pathPrefix+path;};Drupal.url.toAbsolute=function(url){const urlParsingNode=document.createElement('a');try{url=decodeURIComponent(url);}catch(e){}urlParsingNode.setAttribute('href',url);return urlParsingNode.cloneNode(false).href;};Drupal.url.isLocal=function(url){let absoluteUrl=Drupal.url.toAbsolute(url);let {protocol}=window.location;if(protocol==='http:'&&absoluteUrl.startsWith('https:'))protocol='https:';let baseUrl=`${protocol}//${window.location.host}${drupalSettings.path.baseUrl.slice(0,-1)}`;try{absoluteUrl=decodeURIComponent(absoluteUrl);}catch(e){}try{baseUrl=decodeURIComponent(baseUrl);}catch(e){}return absoluteUrl===baseUrl||absoluteUrl.startsWith(`${baseUrl}/`);};Drupal.formatPlural=function(count,singular,plural,args,options){args=args||{};args['@count']=count;const pluralDelimiter=drupalSettings.pluralDelimiter;const translations=Drupal.t(singular+pluralDelimiter+plural,args,options).split(pluralDelimiter);let index=0;if(drupalTranslations?.pluralFormula)index=count in drupalTranslations.pluralFormula?drupalTranslations.pluralFormula[count]:drupalTranslations.pluralFormula.default;else{if(args['@count']!==1)index=1;}return translations[index];};Drupal.encodePath=function(item){return window.encodeURIComponent(item).replace(/%2F/g,'/');};Drupal.deprecationError=({message})=>{if(drupalSettings.suppressDeprecationErrors===false&&console?.warn)console.warn(`[Deprecation] ${message}`);};Drupal.deprecatedProperty=({target,deprecatedProperty,message})=>{if(!Proxy||!Reflect)return target;return new Proxy(target,{get:(target,key,...rest)=>{if(key===deprecatedProperty)Drupal.deprecationError({message});return Reflect.get(target,key,...rest);}});};Drupal.theme=function(func,...args){if(func in Drupal.theme)return Drupal.theme[func](...args);};Drupal.theme.placeholder=function(str){return `<em class="placeholder">${Drupal.checkPlain(str)}</em>`;};Drupal.elementIsVisible=function(elem){return !!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);};Drupal.elementIsHidden=function(elem){return !Drupal.elementIsVisible(elem);};})(Drupal,window.drupalSettings,window.drupalTranslations,window.console,window.Proxy,window.Reflect);;
if(window.jQuery)jQuery.noConflict();document.documentElement.className+=' js';(function(Drupal,drupalSettings){const domReady=(callback)=>{const listener=()=>{callback();document.removeEventListener('DOMContentLoaded',listener);};if(document.readyState!=='loading')setTimeout(callback,0);else document.addEventListener('DOMContentLoaded',listener);};domReady(()=>{Drupal.attachBehaviors(document,drupalSettings);});})(Drupal,window.drupalSettings);;
(function(Drupal){'use strict';Drupal.behaviors.carTheme={attach(context,settings){console.log('It works!');}};}(Drupal));;
Drupal.debounce=function(func,wait,immediate){let timeout;let result;return function(...args){const context=this;const later=function(){timeout=null;if(!immediate)result=func.apply(context,args);};const callNow=immediate&&!timeout;clearTimeout(timeout);timeout=setTimeout(later,wait);if(callNow)result=func.apply(context,args);return result;};};;
(function(Drupal,debounce){let liveElement;const announcements=[];Drupal.behaviors.drupalAnnounce={attach(context){if(!liveElement){liveElement=document.createElement('div');liveElement.id='drupal-live-announce';liveElement.className='visually-hidden';liveElement.setAttribute('aria-live','polite');liveElement.setAttribute('aria-busy','false');document.body.appendChild(liveElement);}}};function announce(){const text=[];let priority='polite';let announcement;const il=announcements.length;for(let i=0;i<il;i++){announcement=announcements.pop();text.unshift(announcement.text);if(announcement.priority==='assertive')priority='assertive';}if(text.length){liveElement.innerHTML='';liveElement.setAttribute('aria-busy','true');liveElement.setAttribute('aria-live',priority);liveElement.innerHTML=text.join('\n');liveElement.setAttribute('aria-busy','false');}}Drupal.announce=function(text,priority){announcements.push({text,priority});return debounce(announce,200)();};})(Drupal,Drupal.debounce);;
((Drupal)=>{Drupal.Message=class{constructor(messageWrapper=null){if(!messageWrapper)this.messageWrapper=Drupal.Message.defaultWrapper();else this.messageWrapper=messageWrapper;}static defaultWrapper(){let wrapper=document.querySelector('[data-drupal-messages]')||document.querySelector('[data-drupal-messages-fallback]');if(!wrapper){wrapper=document.createElement('div');document.body.appendChild(wrapper);}if(wrapper.hasAttribute('data-drupal-messages-fallback')){wrapper.removeAttribute('data-drupal-messages-fallback');wrapper.classList.remove('hidden');}wrapper.setAttribute('data-drupal-messages','');return wrapper.innerHTML===''?Drupal.Message.messageInternalWrapper(wrapper):wrapper.firstElementChild;}static getMessageTypeLabels(){return {status:Drupal.t('Status message'),error:Drupal.t('Error message'),warning:Drupal.t('Warning message')};}add(message,options={}){if(!options.hasOwnProperty('type'))options.type='status';if(typeof message!=='string')throw new Error('Message must be a string.');Drupal.Message.announce(message,options);options.id=options.id?String(options.id):`${options.type}-${Math.random().toFixed(15).replace('0.','')}`;if(!Drupal.Message.getMessageTypeLabels().hasOwnProperty(options.type)){const {type}=options;throw new Error(`The message type, ${type}, is not present in Drupal.Message.getMessageTypeLabels().`);}this.messageWrapper.appendChild(Drupal.theme('message',{text:message},options));return options.id;}select(id){return this.messageWrapper.querySelector(`[data-drupal-message-id^="${id}"]`);}remove(id){return this.messageWrapper.removeChild(this.select(id));}clear(){Array.prototype.forEach.call(this.messageWrapper.querySelectorAll('[data-drupal-message-id]'),(message)=>{this.messageWrapper.removeChild(message);});}static announce(message,options){if(!options.priority&&(options.type==='warning'||options.type==='error'))options.priority='assertive';if(options.announce!=='')Drupal.announce(options.announce||message,options.priority);}static messageInternalWrapper(messageWrapper){const innerWrapper=document.createElement('div');innerWrapper.setAttribute('class','messages__wrapper');messageWrapper.insertAdjacentElement('afterbegin',innerWrapper);return innerWrapper;}};Drupal.theme.message=({text},{type,id})=>{const messagesTypes=Drupal.Message.getMessageTypeLabels();const messageWrapper=document.createElement('div');messageWrapper.setAttribute('class',`messages messages--${type}`);messageWrapper.setAttribute('role',type==='error'||type==='warning'?'alert':'status');messageWrapper.setAttribute('data-drupal-message-id',id);messageWrapper.setAttribute('data-drupal-message-type',type);messageWrapper.setAttribute('aria-label',messagesTypes[type]);messageWrapper.innerHTML=`${text}`;return messageWrapper;};})(Drupal);;
((Drupal,once)=>{Drupal.theme.message=(_ref,_ref2)=>{let {text}=_ref,{type,id}=_ref2;const messagesTypes=Drupal.Message.getMessageTypeLabels(),messageWrapper=document.createElement("div");return messageWrapper.setAttribute("class",`messages-list__item messages messages--${type}`),messageWrapper.setAttribute("role","error"===type||"warning"===type?"alert":"status"),messageWrapper.setAttribute("data-drupal-message-id",id),messageWrapper.setAttribute("data-drupal-message-type",type),messageWrapper.setAttribute("aria-label",messagesTypes[type]),messageWrapper.innerHTML=`\n    <div class="messages__header">\n      <h2 id="${id}-title" class="messages__title">\n        ${messagesTypes[type]}\n      </h2>\n    </div>\n    <div class="messages__content">\n      ${text}\n    </div>\n    <button type="button" class="button button--dismiss js-message-button-hide" title="${Drupal.t("Hide")}">\n      <span class="icon-close"></span>\n      ${Drupal.t("Hide")}\n    </button>\n  `,Drupal.ginMessages.dismissMessages(messageWrapper),messageWrapper;},Drupal.behaviors.ginMessages={attach:(context)=>{Drupal.ginMessages.dismissMessages(context);}},Drupal.ginMessages={dismissMessages:function(){let context=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document;once("gin-messages-dismiss",".js-message-button-hide",context).forEach(((dismissButton)=>{dismissButton.addEventListener("click",((e)=>{e.preventDefault();const message=dismissButton.parentNode;message.classList.contains("messages-list__item")&&(message.style.opacity=0,message.classList.add("visually-hidden"));}));}));}};})(Drupal,once);;
((Drupal)=>{Drupal.theme.message=({text},{type,id})=>{const messagesTypes=Drupal.Message.getMessageTypeLabels();const messageWrapper=document.createElement('div');messageWrapper.setAttribute('class',`messages messages--${type} messages-list__item`);messageWrapper.setAttribute('role',type==='error'||type==='warning'?'alert':'status');messageWrapper.setAttribute('aria-labelledby',`${id}-title`);messageWrapper.setAttribute('data-drupal-message-id',id);messageWrapper.setAttribute('data-drupal-message-type',type);messageWrapper.innerHTML=`
    <div class="messages__header">
      <h2 id="${id}-title" class="messages__title">
        ${messagesTypes[type]}
      </h2>
    </div>
    <div class="messages__content">
      ${text}
    </div>
  `;return messageWrapper;};})(Drupal);;
((Drupal,drupalSettings,once)=>{Drupal.behaviors.ginAccent={attach:function(context){once("ginAccent","body",context).forEach((()=>{Drupal.ginAccent.checkDarkmode(),Drupal.ginAccent.setAccentColor(),Drupal.ginAccent.setFocusColor();}));}},Drupal.ginAccent={setAccentColor:function(){let preset=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,color=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const accentColorPreset=null!=preset?preset:drupalSettings.gin.preset_accent_color;document.body.setAttribute("data-gin-accent",accentColorPreset),"custom"===accentColorPreset&&this.setCustomAccentColor(color);},setCustomAccentColor:function(){let color=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,element=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;const accentColor=null!=color?color:drupalSettings.gin.accent_color;if(accentColor){this.clearAccentColor(element);const strippedAccentColor=accentColor.replace("#",""),darkAccentColor=this.mixColor("ffffff",strippedAccentColor,65).replace("#",""),style=document.createElement("style");style.className="gin-custom-colors",style.innerHTML=`\n          [data-gin-accent="custom"] {\n            --gin-color-primary-rgb: ${this.hexToRgb(accentColor)};\n            --gin-color-primary-hover: ${this.shadeColor(accentColor,-10)};\n            --gin-color-primary-active: ${this.shadeColor(accentColor,-15)};\n            --gin-bg-app-rgb: ${this.hexToRgb(this.mixColor("ffffff",strippedAccentColor,97))};\n            --gin-bg-header: ${this.mixColor("ffffff",strippedAccentColor,85)};\n            --gin-color-sticky-rgb: ${this.hexToRgb(this.mixColor("ffffff",strippedAccentColor,92))};\n          }\n          .gin--dark-mode[data-gin-accent="custom"],\n          .gin--dark-mode [data-gin-accent="custom"] {\n            --gin-color-primary-rgb: ${this.hexToRgb(darkAccentColor)};\n            --gin-color-primary-hover: ${this.mixColor("ffffff",strippedAccentColor,55)};\n            --gin-color-primary-active: ${this.mixColor("ffffff",strippedAccentColor,50)};\n            --gin-bg-header: ${this.mixColor("2A2A2D",darkAccentColor,88)};\n          }\n        `,element.append(style);}},clearAccentColor:function(){let element=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;if(element.querySelectorAll(".gin-custom-colors").length>0){const removeElement=element.querySelector(".gin-custom-colors");removeElement.parentNode.removeChild(removeElement);}},setFocusColor:function(){let preset=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,color=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;const focusColorPreset=null!=preset?preset:drupalSettings.gin.preset_focus_color;document.body.setAttribute("data-gin-focus",focusColorPreset),"custom"===focusColorPreset&&this.setCustomFocusColor(color);},setCustomFocusColor:function(){let color=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,element=arguments.length>1&&void 0!==arguments[1]?arguments[1]:document.body;const accentColor=null!=color?color:drupalSettings.gin.focus_color;if(accentColor){this.clearFocusColor(element);const strippedAccentColor=accentColor.replace("#",""),darkAccentColor=this.mixColor("ffffff",strippedAccentColor,65),style=document.createElement("style");style.className="gin-custom-focus",style.innerHTML=`\n          [data-gin-focus="custom"] {\n            --gin-color-focus: ${accentColor};\n          }\n          .gin--dark-mode[data-gin-focus="custom"],\n          .gin--dark-mode [data-gin-focus="custom"] {\n            --gin-color-focus: ${darkAccentColor};\n          }`,element.append(style);}},clearFocusColor:function(){let element=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;if(element.querySelectorAll(".gin-custom-focus").length>0){const removeElement=element.querySelector(".gin-custom-focus");removeElement.parentNode.removeChild(removeElement);}},checkDarkmode:()=>{const darkmodeClass=drupalSettings.gin.darkmode_class;window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change",((e)=>{e.matches&&"auto"===window.ginDarkmode&&document.querySelector("html").classList.add(darkmodeClass);})),window.matchMedia("(prefers-color-scheme: light)").addEventListener("change",((e)=>{e.matches&&"auto"===window.ginDarkmode&&document.querySelector("html").classList.remove(darkmodeClass);}));},hexToRgb:(hex)=>{hex=hex.replace(/^#?([a-f\d])([a-f\d])([a-f\d])$/i,(function(m,r,g,b){return r+r+g+g+b+b;}));var result=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);return result?`${parseInt(result[1],16)}, ${parseInt(result[2],16)}, ${parseInt(result[3],16)}`:null;},mixColor:(color_1,color_2,weight)=>{function h2d(h){return parseInt(h,16);}weight=void 0!==weight?weight:50;for(var color="#",i=0;i<=5;i+=2){for(var v1=h2d(color_1.substr(i,2)),v2=h2d(color_2.substr(i,2)),val=Math.floor(v2+weight/100*(v1-v2)).toString(16);val.length<2;)val="0"+val;color+=val;}return color;},shadeColor:(color,percent)=>{const num=parseInt(color.replace("#",""),16),amt=Math.round(2.55*percent),R=(num>>16)+amt,B=(num>>8&255)+amt,G=(255&num)+amt;return `#${(16777216+65536*(R<255?R<1?0:R:255)+256*(B<255?B<1?0:B:255)+(G<255?G<1?0:G:255)).toString(16).slice(1)}`;}};})(Drupal,drupalSettings,once);;
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
    typeof define === 'function' && define.amd ? define(['exports'], factory) :
      (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FloatingUICore = {}));
})(this, (function (exports) { 'use strict';

  function getAlignment(placement) {
    return placement.split('-')[1];
  }

  function getLengthFromAxis(axis) {
    return axis === 'y' ? 'height' : 'width';
  }

  function getSide(placement) {
    return placement.split('-')[0];
  }

  function getMainAxisFromPlacement(placement) {
    return ['top', 'bottom'].includes(getSide(placement)) ? 'x' : 'y';
  }

  function computeCoordsFromPlacement(_ref, placement, rtl) {
    let {
      reference,
      floating
    } = _ref;
    const commonX = reference.x + reference.width / 2 - floating.width / 2;
    const commonY = reference.y + reference.height / 2 - floating.height / 2;
    const mainAxis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(mainAxis);
    const commonAlign = reference[length] / 2 - floating[length] / 2;
    const side = getSide(placement);
    const isVertical = mainAxis === 'x';
    let coords;
    switch (side) {
      case 'top':
        coords = {
          x: commonX,
          y: reference.y - floating.height
        };
        break;
      case 'bottom':
        coords = {
          x: commonX,
          y: reference.y + reference.height
        };
        break;
      case 'right':
        coords = {
          x: reference.x + reference.width,
          y: commonY
        };
        break;
      case 'left':
        coords = {
          x: reference.x - floating.width,
          y: commonY
        };
        break;
      default:
        coords = {
          x: reference.x,
          y: reference.y
        };
    }
    switch (getAlignment(placement)) {
      case 'start':
        coords[mainAxis] -= commonAlign * (rtl && isVertical ? -1 : 1);
        break;
      case 'end':
        coords[mainAxis] += commonAlign * (rtl && isVertical ? -1 : 1);
        break;
    }
    return coords;
  }

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a reference element when it is given a certain positioning strategy.
   *
   * This export does not have any `platform` interface logic. You will need to
   * write one for the platform you are using Floating UI with.
   */
  const computePosition = async (reference, floating, config) => {
    const {
      placement = 'bottom',
      strategy = 'absolute',
      middleware = [],
      platform
    } = config;
    const validMiddleware = middleware.filter(Boolean);
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(floating));
    let rects = await platform.getElementRects({
      reference,
      floating,
      strategy
    });
    let {
      x,
      y
    } = computeCoordsFromPlacement(rects, placement, rtl);
    let statefulPlacement = placement;
    let middlewareData = {};
    let resetCount = 0;
    for (let i = 0; i < validMiddleware.length; i++) {
      const {
        name,
        fn
      } = validMiddleware[i];
      const {
        x: nextX,
        y: nextY,
        data,
        reset
      } = await fn({
        x,
        y,
        initialPlacement: placement,
        placement: statefulPlacement,
        strategy,
        middlewareData,
        rects,
        platform,
        elements: {
          reference,
          floating
        }
      });
      x = nextX != null ? nextX : x;
      y = nextY != null ? nextY : y;
      middlewareData = {
        ...middlewareData,
        [name]: {
          ...middlewareData[name],
          ...data
        }
      };
      if (reset && resetCount <= 50) {
        resetCount++;
        if (typeof reset === 'object') {
          if (reset.placement) {
            statefulPlacement = reset.placement;
          }
          if (reset.rects) {
            rects = reset.rects === true ? await platform.getElementRects({
              reference,
              floating,
              strategy
            }) : reset.rects;
          }
          ({
            x,
            y
          } = computeCoordsFromPlacement(rects, statefulPlacement, rtl));
        }
        i = -1;
        continue;
      }
    }
    return {
      x,
      y,
      placement: statefulPlacement,
      strategy,
      middlewareData
    };
  };

  function evaluate(value, param) {
    return typeof value === 'function' ? value(param) : value;
  }

  function expandPaddingObject(padding) {
    return {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0,
      ...padding
    };
  }

  function getSideObjectFromPadding(padding) {
    return typeof padding !== 'number' ? expandPaddingObject(padding) : {
      top: padding,
      right: padding,
      bottom: padding,
      left: padding
    };
  }

  function rectToClientRect(rect) {
    return {
      ...rect,
      top: rect.y,
      left: rect.x,
      right: rect.x + rect.width,
      bottom: rect.y + rect.height
    };
  }

  /**
   * Resolves with an object of overflow side offsets that determine how much the
   * element is overflowing a given clipping boundary on each side.
   * - positive = overflowing the boundary by that number of pixels
   * - negative = how many pixels left before it will overflow
   * - 0 = lies flush with the boundary
   * @see https://floating-ui.com/docs/detectOverflow
   */
  async function detectOverflow(state, options) {
    var _await$platform$isEle;
    if (options === void 0) {
      options = {};
    }
    const {
      x,
      y,
      platform,
      rects,
      elements,
      strategy
    } = state;
    const {
      boundary = 'clippingAncestors',
      rootBoundary = 'viewport',
      elementContext = 'floating',
      altBoundary = false,
      padding = 0
    } = evaluate(options, state);
    const paddingObject = getSideObjectFromPadding(padding);
    const altContext = elementContext === 'floating' ? 'reference' : 'floating';
    const element = elements[altBoundary ? altContext : elementContext];
    const clippingClientRect = rectToClientRect(await platform.getClippingRect({
      element: ((_await$platform$isEle = await (platform.isElement == null ? void 0 : platform.isElement(element))) != null ? _await$platform$isEle : true) ? element : element.contextElement || (await (platform.getDocumentElement == null ? void 0 : platform.getDocumentElement(elements.floating))),
      boundary,
      rootBoundary,
      strategy
    }));
    const rect = elementContext === 'floating' ? {
      ...rects.floating,
      x,
      y
    } : rects.reference;
    const offsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(elements.floating));
    const offsetScale = (await (platform.isElement == null ? void 0 : platform.isElement(offsetParent))) ? (await (platform.getScale == null ? void 0 : platform.getScale(offsetParent))) || {
      x: 1,
      y: 1
    } : {
      x: 1,
      y: 1
    };
    const elementClientRect = rectToClientRect(platform.convertOffsetParentRelativeRectToViewportRelativeRect ? await platform.convertOffsetParentRelativeRectToViewportRelativeRect({
      rect,
      offsetParent,
      strategy
    }) : rect);
    return {
      top: (clippingClientRect.top - elementClientRect.top + paddingObject.top) / offsetScale.y,
      bottom: (elementClientRect.bottom - clippingClientRect.bottom + paddingObject.bottom) / offsetScale.y,
      left: (clippingClientRect.left - elementClientRect.left + paddingObject.left) / offsetScale.x,
      right: (elementClientRect.right - clippingClientRect.right + paddingObject.right) / offsetScale.x
    };
  }

  const min = Math.min;
  const max = Math.max;

  function within(min$1, value, max$1) {
    return max(min$1, min(value, max$1));
  }

  /**
   * Provides data to position an inner element of the floating element so that it
   * appears centered to the reference element.
   * @see https://floating-ui.com/docs/arrow
   */
  const arrow = options => ({
    name: 'arrow',
    options,
    async fn(state) {
      const {
        x,
        y,
        placement,
        rects,
        platform,
        elements
      } = state;
      // Since `element` is required, we don't Partial<> the type.
      const {
        element,
        padding = 0
      } = evaluate(options, state) || {};
      if (element == null) {
        return {};
      }
      const paddingObject = getSideObjectFromPadding(padding);
      const coords = {
        x,
        y
      };
      const axis = getMainAxisFromPlacement(placement);
      const length = getLengthFromAxis(axis);
      const arrowDimensions = await platform.getDimensions(element);
      const isYAxis = axis === 'y';
      const minProp = isYAxis ? 'top' : 'left';
      const maxProp = isYAxis ? 'bottom' : 'right';
      const clientProp = isYAxis ? 'clientHeight' : 'clientWidth';
      const endDiff = rects.reference[length] + rects.reference[axis] - coords[axis] - rects.floating[length];
      const startDiff = coords[axis] - rects.reference[axis];
      const arrowOffsetParent = await (platform.getOffsetParent == null ? void 0 : platform.getOffsetParent(element));
      let clientSize = arrowOffsetParent ? arrowOffsetParent[clientProp] : 0;

      // DOM platform can return `window` as the `offsetParent`.
      if (!clientSize || !(await (platform.isElement == null ? void 0 : platform.isElement(arrowOffsetParent)))) {
        clientSize = elements.floating[clientProp] || rects.floating[length];
      }
      const centerToReference = endDiff / 2 - startDiff / 2;

      // If the padding is large enough that it causes the arrow to no longer be
      // centered, modify the padding so that it is centered.
      const largestPossiblePadding = clientSize / 2 - arrowDimensions[length] / 2 - 1;
      const minPadding = min(paddingObject[minProp], largestPossiblePadding);
      const maxPadding = min(paddingObject[maxProp], largestPossiblePadding);

      // Make sure the arrow doesn't overflow the floating element if the center
      // point is outside the floating element's bounds.
      const min$1 = minPadding;
      const max = clientSize - arrowDimensions[length] - maxPadding;
      const center = clientSize / 2 - arrowDimensions[length] / 2 + centerToReference;
      const offset = within(min$1, center, max);

      // If the reference is small enough that the arrow's padding causes it to
      // to point to nothing for an aligned placement, adjust the offset of the
      // floating element itself. This stops `shift()` from taking action, but can
      // be worked around by calling it again after the `arrow()` if desired.
      const shouldAddOffset = getAlignment(placement) != null && center != offset && rects.reference[length] / 2 - (center < min$1 ? minPadding : maxPadding) - arrowDimensions[length] / 2 < 0;
      const alignmentOffset = shouldAddOffset ? center < min$1 ? min$1 - center : max - center : 0;
      return {
        [axis]: coords[axis] - alignmentOffset,
        data: {
          [axis]: offset,
          centerOffset: center - offset + alignmentOffset
        }
      };
    }
  });

  const sides = ['top', 'right', 'bottom', 'left'];
  const allPlacements = /*#__PURE__*/sides.reduce((acc, side) => acc.concat(side, side + "-start", side + "-end"), []);

  const oppositeSideMap = {
    left: 'right',
    right: 'left',
    bottom: 'top',
    top: 'bottom'
  };
  function getOppositePlacement(placement) {
    return placement.replace(/left|right|bottom|top/g, side => oppositeSideMap[side]);
  }

  function getAlignmentSides(placement, rects, rtl) {
    if (rtl === void 0) {
      rtl = false;
    }
    const alignment = getAlignment(placement);
    const mainAxis = getMainAxisFromPlacement(placement);
    const length = getLengthFromAxis(mainAxis);
    let mainAlignmentSide = mainAxis === 'x' ? alignment === (rtl ? 'end' : 'start') ? 'right' : 'left' : alignment === 'start' ? 'bottom' : 'top';
    if (rects.reference[length] > rects.floating[length]) {
      mainAlignmentSide = getOppositePlacement(mainAlignmentSide);
    }
    return {
      main: mainAlignmentSide,
      cross: getOppositePlacement(mainAlignmentSide)
    };
  }

  const oppositeAlignmentMap = {
    start: 'end',
    end: 'start'
  };
  function getOppositeAlignmentPlacement(placement) {
    return placement.replace(/start|end/g, alignment => oppositeAlignmentMap[alignment]);
  }

  function getPlacementList(alignment, autoAlignment, allowedPlacements) {
    const allowedPlacementsSortedByAlignment = alignment ? [...allowedPlacements.filter(placement => getAlignment(placement) === alignment), ...allowedPlacements.filter(placement => getAlignment(placement) !== alignment)] : allowedPlacements.filter(placement => getSide(placement) === placement);
    return allowedPlacementsSortedByAlignment.filter(placement => {
      if (alignment) {
        return getAlignment(placement) === alignment || (autoAlignment ? getOppositeAlignmentPlacement(placement) !== placement : false);
      }
      return true;
    });
  }
  /**
   * Optimizes the visibility of the floating element by choosing the placement
   * that has the most space available automatically, without needing to specify a
   * preferred placement. Alternative to `flip`.
   * @see https://floating-ui.com/docs/autoPlacement
   */
  const autoPlacement = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'autoPlacement',
      options,
      async fn(state) {
        var _middlewareData$autoP, _middlewareData$autoP2, _placementsThatFitOnE;
        const {
          rects,
          middlewareData,
          placement,
          platform,
          elements
        } = state;
        const {
          crossAxis = false,
          alignment,
          allowedPlacements = allPlacements,
          autoAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);
        const placements = alignment !== undefined || allowedPlacements === allPlacements ? getPlacementList(alignment || null, autoAlignment, allowedPlacements) : allowedPlacements;
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const currentIndex = ((_middlewareData$autoP = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP.index) || 0;
        const currentPlacement = placements[currentIndex];
        if (currentPlacement == null) {
          return {};
        }
        const {
          main,
          cross
        } = getAlignmentSides(currentPlacement, rects, await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating)));

        // Make `computeCoords` start from the right place.
        if (placement !== currentPlacement) {
          return {
            reset: {
              placement: placements[0]
            }
          };
        }
        const currentOverflows = [overflow[getSide(currentPlacement)], overflow[main], overflow[cross]];
        const allOverflows = [...(((_middlewareData$autoP2 = middlewareData.autoPlacement) == null ? void 0 : _middlewareData$autoP2.overflows) || []), {
          placement: currentPlacement,
          overflows: currentOverflows
        }];
        const nextPlacement = placements[currentIndex + 1];

        // There are more placements to check.
        if (nextPlacement) {
          return {
            data: {
              index: currentIndex + 1,
              overflows: allOverflows
            },
            reset: {
              placement: nextPlacement
            }
          };
        }
        const placementsSortedByMostSpace = allOverflows.map(d => {
          const alignment = getAlignment(d.placement);
          return [d.placement, alignment && crossAxis ?
            // Check along the mainAxis and main crossAxis side.
            d.overflows.slice(0, 2).reduce((acc, v) => acc + v, 0) :
            // Check only the mainAxis.
            d.overflows[0], d.overflows];
        }).sort((a, b) => a[1] - b[1]);
        const placementsThatFitOnEachSide = placementsSortedByMostSpace.filter(d => d[2].slice(0,
          // Aligned placements should not check their opposite crossAxis
          // side.
          getAlignment(d[0]) ? 2 : 3).every(v => v <= 0));
        const resetPlacement = ((_placementsThatFitOnE = placementsThatFitOnEachSide[0]) == null ? void 0 : _placementsThatFitOnE[0]) || placementsSortedByMostSpace[0][0];
        if (resetPlacement !== placement) {
          return {
            data: {
              index: currentIndex + 1,
              overflows: allOverflows
            },
            reset: {
              placement: resetPlacement
            }
          };
        }
        return {};
      }
    };
  };

  function getExpandedPlacements(placement) {
    const oppositePlacement = getOppositePlacement(placement);
    return [getOppositeAlignmentPlacement(placement), oppositePlacement, getOppositeAlignmentPlacement(oppositePlacement)];
  }

  function getSideList(side, isStart, rtl) {
    const lr = ['left', 'right'];
    const rl = ['right', 'left'];
    const tb = ['top', 'bottom'];
    const bt = ['bottom', 'top'];
    switch (side) {
      case 'top':
      case 'bottom':
        if (rtl) return isStart ? rl : lr;
        return isStart ? lr : rl;
      case 'left':
      case 'right':
        return isStart ? tb : bt;
      default:
        return [];
    }
  }
  function getOppositeAxisPlacements(placement, flipAlignment, direction, rtl) {
    const alignment = getAlignment(placement);
    let list = getSideList(getSide(placement), direction === 'start', rtl);
    if (alignment) {
      list = list.map(side => side + "-" + alignment);
      if (flipAlignment) {
        list = list.concat(list.map(getOppositeAlignmentPlacement));
      }
    }
    return list;
  }

  /**
   * Optimizes the visibility of the floating element by flipping the `placement`
   * in order to keep it in view when the preferred placement(s) will overflow the
   * clipping boundary. Alternative to `autoPlacement`.
   * @see https://floating-ui.com/docs/flip
   */
  const flip = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'flip',
      options,
      async fn(state) {
        var _middlewareData$flip;
        const {
          placement,
          middlewareData,
          rects,
          initialPlacement,
          platform,
          elements
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true,
          fallbackPlacements: specifiedFallbackPlacements,
          fallbackStrategy = 'bestFit',
          fallbackAxisSideDirection = 'none',
          flipAlignment = true,
          ...detectOverflowOptions
        } = evaluate(options, state);
        const side = getSide(placement);
        const isBasePlacement = getSide(initialPlacement) === initialPlacement;
        const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
        const fallbackPlacements = specifiedFallbackPlacements || (isBasePlacement || !flipAlignment ? [getOppositePlacement(initialPlacement)] : getExpandedPlacements(initialPlacement));
        if (!specifiedFallbackPlacements && fallbackAxisSideDirection !== 'none') {
          fallbackPlacements.push(...getOppositeAxisPlacements(initialPlacement, flipAlignment, fallbackAxisSideDirection, rtl));
        }
        const placements = [initialPlacement, ...fallbackPlacements];
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const overflows = [];
        let overflowsData = ((_middlewareData$flip = middlewareData.flip) == null ? void 0 : _middlewareData$flip.overflows) || [];
        if (checkMainAxis) {
          overflows.push(overflow[side]);
        }
        if (checkCrossAxis) {
          const {
            main,
            cross
          } = getAlignmentSides(placement, rects, rtl);
          overflows.push(overflow[main], overflow[cross]);
        }
        overflowsData = [...overflowsData, {
          placement,
          overflows
        }];

        // One or more sides is overflowing.
        if (!overflows.every(side => side <= 0)) {
          var _middlewareData$flip2, _overflowsData$filter;
          const nextIndex = (((_middlewareData$flip2 = middlewareData.flip) == null ? void 0 : _middlewareData$flip2.index) || 0) + 1;
          const nextPlacement = placements[nextIndex];
          if (nextPlacement) {
            // Try next placement and re-run the lifecycle.
            return {
              data: {
                index: nextIndex,
                overflows: overflowsData
              },
              reset: {
                placement: nextPlacement
              }
            };
          }

          // First, find the candidates that fit on the mainAxis side of overflow,
          // then find the placement that fits the best on the main crossAxis side.
          let resetPlacement = (_overflowsData$filter = overflowsData.filter(d => d.overflows[0] <= 0).sort((a, b) => a.overflows[1] - b.overflows[1])[0]) == null ? void 0 : _overflowsData$filter.placement;

          // Otherwise fallback.
          if (!resetPlacement) {
            switch (fallbackStrategy) {
              case 'bestFit':
              {
                var _overflowsData$map$so;
                const placement = (_overflowsData$map$so = overflowsData.map(d => [d.placement, d.overflows.filter(overflow => overflow > 0).reduce((acc, overflow) => acc + overflow, 0)]).sort((a, b) => a[1] - b[1])[0]) == null ? void 0 : _overflowsData$map$so[0];
                if (placement) {
                  resetPlacement = placement;
                }
                break;
              }
              case 'initialPlacement':
                resetPlacement = initialPlacement;
                break;
            }
          }
          if (placement !== resetPlacement) {
            return {
              reset: {
                placement: resetPlacement
              }
            };
          }
        }
        return {};
      }
    };
  };

  function getSideOffsets(overflow, rect) {
    return {
      top: overflow.top - rect.height,
      right: overflow.right - rect.width,
      bottom: overflow.bottom - rect.height,
      left: overflow.left - rect.width
    };
  }
  function isAnySideFullyClipped(overflow) {
    return sides.some(side => overflow[side] >= 0);
  }
  /**
   * Provides data to hide the floating element in applicable situations, such as
   * when it is not in the same clipping context as the reference element.
   * @see https://floating-ui.com/docs/hide
   */
  const hide = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'hide',
      options,
      async fn(state) {
        const {
          rects
        } = state;
        const {
          strategy = 'referenceHidden',
          ...detectOverflowOptions
        } = evaluate(options, state);
        switch (strategy) {
          case 'referenceHidden':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              elementContext: 'reference'
            });
            const offsets = getSideOffsets(overflow, rects.reference);
            return {
              data: {
                referenceHiddenOffsets: offsets,
                referenceHidden: isAnySideFullyClipped(offsets)
              }
            };
          }
          case 'escaped':
          {
            const overflow = await detectOverflow(state, {
              ...detectOverflowOptions,
              altBoundary: true
            });
            const offsets = getSideOffsets(overflow, rects.floating);
            return {
              data: {
                escapedOffsets: offsets,
                escaped: isAnySideFullyClipped(offsets)
              }
            };
          }
          default:
          {
            return {};
          }
        }
      }
    };
  };

  function getBoundingRect(rects) {
    const minX = min(...rects.map(rect => rect.left));
    const minY = min(...rects.map(rect => rect.top));
    const maxX = max(...rects.map(rect => rect.right));
    const maxY = max(...rects.map(rect => rect.bottom));
    return {
      x: minX,
      y: minY,
      width: maxX - minX,
      height: maxY - minY
    };
  }
  function getRectsByLine(rects) {
    const sortedRects = rects.slice().sort((a, b) => a.y - b.y);
    const groups = [];
    let prevRect = null;
    for (let i = 0; i < sortedRects.length; i++) {
      const rect = sortedRects[i];
      if (!prevRect || rect.y - prevRect.y > prevRect.height / 2) {
        groups.push([rect]);
      } else {
        groups[groups.length - 1].push(rect);
      }
      prevRect = rect;
    }
    return groups.map(rect => rectToClientRect(getBoundingRect(rect)));
  }
  /**
   * Provides improved positioning for inline reference elements that can span
   * over multiple lines, such as hyperlinks or range selections.
   * @see https://floating-ui.com/docs/inline
   */
  const inline = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'inline',
      options,
      async fn(state) {
        const {
          placement,
          elements,
          rects,
          platform,
          strategy
        } = state;
        // A MouseEvent's client{X,Y} coords can be up to 2 pixels off a
        // ClientRect's bounds, despite the event listener being triggered. A
        // padding of 2 seems to handle this issue.
        const {
          padding = 2,
          x,
          y
        } = evaluate(options, state);
        const nativeClientRects = Array.from((await (platform.getClientRects == null ? void 0 : platform.getClientRects(elements.reference))) || []);
        const clientRects = getRectsByLine(nativeClientRects);
        const fallback = rectToClientRect(getBoundingRect(nativeClientRects));
        const paddingObject = getSideObjectFromPadding(padding);
        function getBoundingClientRect() {
          // There are two rects and they are disjoined.
          if (clientRects.length === 2 && clientRects[0].left > clientRects[1].right && x != null && y != null) {
            // Find the first rect in which the point is fully inside.
            return clientRects.find(rect => x > rect.left - paddingObject.left && x < rect.right + paddingObject.right && y > rect.top - paddingObject.top && y < rect.bottom + paddingObject.bottom) || fallback;
          }

          // There are 2 or more connected rects.
          if (clientRects.length >= 2) {
            if (getMainAxisFromPlacement(placement) === 'x') {
              const firstRect = clientRects[0];
              const lastRect = clientRects[clientRects.length - 1];
              const isTop = getSide(placement) === 'top';
              const top = firstRect.top;
              const bottom = lastRect.bottom;
              const left = isTop ? firstRect.left : lastRect.left;
              const right = isTop ? firstRect.right : lastRect.right;
              const width = right - left;
              const height = bottom - top;
              return {
                top,
                bottom,
                left,
                right,
                width,
                height,
                x: left,
                y: top
              };
            }
            const isLeftSide = getSide(placement) === 'left';
            const maxRight = max(...clientRects.map(rect => rect.right));
            const minLeft = min(...clientRects.map(rect => rect.left));
            const measureRects = clientRects.filter(rect => isLeftSide ? rect.left === minLeft : rect.right === maxRight);
            const top = measureRects[0].top;
            const bottom = measureRects[measureRects.length - 1].bottom;
            const left = minLeft;
            const right = maxRight;
            const width = right - left;
            const height = bottom - top;
            return {
              top,
              bottom,
              left,
              right,
              width,
              height,
              x: left,
              y: top
            };
          }
          return fallback;
        }
        const resetRects = await platform.getElementRects({
          reference: {
            getBoundingClientRect
          },
          floating: elements.floating,
          strategy
        });
        if (rects.reference.x !== resetRects.reference.x || rects.reference.y !== resetRects.reference.y || rects.reference.width !== resetRects.reference.width || rects.reference.height !== resetRects.reference.height) {
          return {
            reset: {
              rects: resetRects
            }
          };
        }
        return {};
      }
    };
  };

  async function convertValueToCoords(state, options) {
    const {
      placement,
      platform,
      elements
    } = state;
    const rtl = await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating));
    const side = getSide(placement);
    const alignment = getAlignment(placement);
    const isVertical = getMainAxisFromPlacement(placement) === 'x';
    const mainAxisMulti = ['left', 'top'].includes(side) ? -1 : 1;
    const crossAxisMulti = rtl && isVertical ? -1 : 1;
    const rawValue = evaluate(options, state);

    // eslint-disable-next-line prefer-const
    let {
      mainAxis,
      crossAxis,
      alignmentAxis
    } = typeof rawValue === 'number' ? {
      mainAxis: rawValue,
      crossAxis: 0,
      alignmentAxis: null
    } : {
      mainAxis: 0,
      crossAxis: 0,
      alignmentAxis: null,
      ...rawValue
    };
    if (alignment && typeof alignmentAxis === 'number') {
      crossAxis = alignment === 'end' ? alignmentAxis * -1 : alignmentAxis;
    }
    return isVertical ? {
      x: crossAxis * crossAxisMulti,
      y: mainAxis * mainAxisMulti
    } : {
      x: mainAxis * mainAxisMulti,
      y: crossAxis * crossAxisMulti
    };
  }

  /**
   * Modifies the placement by translating the floating element along the
   * specified axes.
   * A number (shorthand for `mainAxis` or distance), or an axes configuration
   * object may be passed.
   * @see https://floating-ui.com/docs/offset
   */
  const offset = function (options) {
    if (options === void 0) {
      options = 0;
    }
    return {
      name: 'offset',
      options,
      async fn(state) {
        const {
          x,
          y
        } = state;
        const diffCoords = await convertValueToCoords(state, options);
        return {
          x: x + diffCoords.x,
          y: y + diffCoords.y,
          data: diffCoords
        };
      }
    };
  };

  function getCrossAxis(axis) {
    return axis === 'x' ? 'y' : 'x';
  }

  /**
   * Optimizes the visibility of the floating element by shifting it in order to
   * keep it in view when it will overflow the clipping boundary.
   * @see https://floating-ui.com/docs/shift
   */
  const shift = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'shift',
      options,
      async fn(state) {
        const {
          x,
          y,
          placement
        } = state;
        const {
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = false,
          limiter = {
            fn: _ref => {
              let {
                x,
                y
              } = _ref;
              return {
                x,
                y
              };
            }
          },
          ...detectOverflowOptions
        } = evaluate(options, state);
        const coords = {
          x,
          y
        };
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const mainAxis = getMainAxisFromPlacement(getSide(placement));
        const crossAxis = getCrossAxis(mainAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        if (checkMainAxis) {
          const minSide = mainAxis === 'y' ? 'top' : 'left';
          const maxSide = mainAxis === 'y' ? 'bottom' : 'right';
          const min = mainAxisCoord + overflow[minSide];
          const max = mainAxisCoord - overflow[maxSide];
          mainAxisCoord = within(min, mainAxisCoord, max);
        }
        if (checkCrossAxis) {
          const minSide = crossAxis === 'y' ? 'top' : 'left';
          const maxSide = crossAxis === 'y' ? 'bottom' : 'right';
          const min = crossAxisCoord + overflow[minSide];
          const max = crossAxisCoord - overflow[maxSide];
          crossAxisCoord = within(min, crossAxisCoord, max);
        }
        const limitedCoords = limiter.fn({
          ...state,
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        });
        return {
          ...limitedCoords,
          data: {
            x: limitedCoords.x - x,
            y: limitedCoords.y - y
          }
        };
      }
    };
  };
  /**
   * Built-in `limiter` that will stop `shift()` at a certain point.
   */
  const limitShift = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      options,
      fn(state) {
        const {
          x,
          y,
          placement,
          rects,
          middlewareData
        } = state;
        const {
          offset = 0,
          mainAxis: checkMainAxis = true,
          crossAxis: checkCrossAxis = true
        } = evaluate(options, state);
        const coords = {
          x,
          y
        };
        const mainAxis = getMainAxisFromPlacement(placement);
        const crossAxis = getCrossAxis(mainAxis);
        let mainAxisCoord = coords[mainAxis];
        let crossAxisCoord = coords[crossAxis];
        const rawOffset = evaluate(offset, state);
        const computedOffset = typeof rawOffset === 'number' ? {
          mainAxis: rawOffset,
          crossAxis: 0
        } : {
          mainAxis: 0,
          crossAxis: 0,
          ...rawOffset
        };
        if (checkMainAxis) {
          const len = mainAxis === 'y' ? 'height' : 'width';
          const limitMin = rects.reference[mainAxis] - rects.floating[len] + computedOffset.mainAxis;
          const limitMax = rects.reference[mainAxis] + rects.reference[len] - computedOffset.mainAxis;
          if (mainAxisCoord < limitMin) {
            mainAxisCoord = limitMin;
          } else if (mainAxisCoord > limitMax) {
            mainAxisCoord = limitMax;
          }
        }
        if (checkCrossAxis) {
          var _middlewareData$offse, _middlewareData$offse2;
          const len = mainAxis === 'y' ? 'width' : 'height';
          const isOriginSide = ['top', 'left'].includes(getSide(placement));
          const limitMin = rects.reference[crossAxis] - rects.floating[len] + (isOriginSide ? ((_middlewareData$offse = middlewareData.offset) == null ? void 0 : _middlewareData$offse[crossAxis]) || 0 : 0) + (isOriginSide ? 0 : computedOffset.crossAxis);
          const limitMax = rects.reference[crossAxis] + rects.reference[len] + (isOriginSide ? 0 : ((_middlewareData$offse2 = middlewareData.offset) == null ? void 0 : _middlewareData$offse2[crossAxis]) || 0) - (isOriginSide ? computedOffset.crossAxis : 0);
          if (crossAxisCoord < limitMin) {
            crossAxisCoord = limitMin;
          } else if (crossAxisCoord > limitMax) {
            crossAxisCoord = limitMax;
          }
        }
        return {
          [mainAxis]: mainAxisCoord,
          [crossAxis]: crossAxisCoord
        };
      }
    };
  };

  /**
   * Provides data that allows you to change the size of the floating element —
   * for instance, prevent it from overflowing the clipping boundary or match the
   * width of the reference element.
   * @see https://floating-ui.com/docs/size
   */
  const size = function (options) {
    if (options === void 0) {
      options = {};
    }
    return {
      name: 'size',
      options,
      async fn(state) {
        const {
          placement,
          rects,
          platform,
          elements
        } = state;
        const {
          apply = () => {},
          ...detectOverflowOptions
        } = evaluate(options, state);
        const overflow = await detectOverflow(state, detectOverflowOptions);
        const side = getSide(placement);
        const alignment = getAlignment(placement);
        const axis = getMainAxisFromPlacement(placement);
        const isXAxis = axis === 'x';
        const {
          width,
          height
        } = rects.floating;
        let heightSide;
        let widthSide;
        if (side === 'top' || side === 'bottom') {
          heightSide = side;
          widthSide = alignment === ((await (platform.isRTL == null ? void 0 : platform.isRTL(elements.floating))) ? 'start' : 'end') ? 'left' : 'right';
        } else {
          widthSide = side;
          heightSide = alignment === 'end' ? 'top' : 'bottom';
        }
        const overflowAvailableHeight = height - overflow[heightSide];
        const overflowAvailableWidth = width - overflow[widthSide];
        const noShift = !state.middlewareData.shift;
        let availableHeight = overflowAvailableHeight;
        let availableWidth = overflowAvailableWidth;
        if (isXAxis) {
          const maximumClippingWidth = width - overflow.left - overflow.right;
          availableWidth = alignment || noShift ? min(overflowAvailableWidth, maximumClippingWidth) : maximumClippingWidth;
        } else {
          const maximumClippingHeight = height - overflow.top - overflow.bottom;
          availableHeight = alignment || noShift ? min(overflowAvailableHeight, maximumClippingHeight) : maximumClippingHeight;
        }
        if (noShift && !alignment) {
          const xMin = max(overflow.left, 0);
          const xMax = max(overflow.right, 0);
          const yMin = max(overflow.top, 0);
          const yMax = max(overflow.bottom, 0);
          if (isXAxis) {
            availableWidth = width - 2 * (xMin !== 0 || xMax !== 0 ? xMin + xMax : max(overflow.left, overflow.right));
          } else {
            availableHeight = height - 2 * (yMin !== 0 || yMax !== 0 ? yMin + yMax : max(overflow.top, overflow.bottom));
          }
        }
        await apply({
          ...state,
          availableWidth,
          availableHeight
        });
        const nextDimensions = await platform.getDimensions(elements.floating);
        if (width !== nextDimensions.width || height !== nextDimensions.height) {
          return {
            reset: {
              rects: true
            }
          };
        }
        return {};
      }
    };
  };

  exports.arrow = arrow;
  exports.autoPlacement = autoPlacement;
  exports.computePosition = computePosition;
  exports.detectOverflow = detectOverflow;
  exports.flip = flip;
  exports.hide = hide;
  exports.inline = inline;
  exports.limitShift = limitShift;
  exports.offset = offset;
  exports.rectToClientRect = rectToClientRect;
  exports.shift = shift;
  exports.size = size;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
;
(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@floating-ui/core')) :
    typeof define === 'function' && define.amd ? define(['exports', '@floating-ui/core'], factory) :
      (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.FloatingUIDOM = {}, global.FloatingUICore));
})(this, (function (exports, core) { 'use strict';

  function getWindow(node) {
    var _node$ownerDocument;
    return ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.defaultView) || window;
  }

  function getComputedStyle$1(element) {
    return getWindow(element).getComputedStyle(element);
  }

  function isNode(value) {
    return value instanceof getWindow(value).Node;
  }
  function getNodeName(node) {
    if (isNode(node)) {
      return (node.nodeName || '').toLowerCase();
    }
    // Mocked nodes in testing environments may not be instances of Node. By
    // returning `#document` an infinite loop won't occur.
    // https://github.com/floating-ui/floating-ui/issues/2317
    return '#document';
  }

  function isHTMLElement(value) {
    return value instanceof getWindow(value).HTMLElement;
  }
  function isElement(value) {
    return value instanceof getWindow(value).Element;
  }
  function isShadowRoot(node) {
    // Browsers without `ShadowRoot` support.
    if (typeof ShadowRoot === 'undefined') {
      return false;
    }
    return node instanceof getWindow(node).ShadowRoot || node instanceof ShadowRoot;
  }
  function isOverflowElement(element) {
    const {
      overflow,
      overflowX,
      overflowY,
      display
    } = getComputedStyle$1(element);
    return /auto|scroll|overlay|hidden|clip/.test(overflow + overflowY + overflowX) && !['inline', 'contents'].includes(display);
  }
  function isTableElement(element) {
    return ['table', 'td', 'th'].includes(getNodeName(element));
  }
  function isContainingBlock(element) {
    const safari = isSafari();
    const css = getComputedStyle$1(element);

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    return css.transform !== 'none' || css.perspective !== 'none' || !safari && (css.backdropFilter ? css.backdropFilter !== 'none' : false) || !safari && (css.filter ? css.filter !== 'none' : false) || ['transform', 'perspective', 'filter'].some(value => (css.willChange || '').includes(value)) || ['paint', 'layout', 'strict', 'content'].some(value => (css.contain || '').includes(value));
  }
  function isSafari() {
    if (typeof CSS === 'undefined' || !CSS.supports) return false;
    return CSS.supports('-webkit-backdrop-filter', 'none');
  }
  function isLastTraversableNode(node) {
    return ['html', 'body', '#document'].includes(getNodeName(node));
  }

  const min = Math.min;
  const max = Math.max;
  const round = Math.round;
  const floor = Math.floor;
  const createEmptyCoords = v => ({
    x: v,
    y: v
  });

  function getCssDimensions(element) {
    const css = getComputedStyle$1(element);
    // In testing environments, the `width` and `height` properties are empty
    // strings for SVG elements, returning NaN. Fallback to `0` in this case.
    let width = parseFloat(css.width) || 0;
    let height = parseFloat(css.height) || 0;
    const hasOffset = isHTMLElement(element);
    const offsetWidth = hasOffset ? element.offsetWidth : width;
    const offsetHeight = hasOffset ? element.offsetHeight : height;
    const shouldFallback = round(width) !== offsetWidth || round(height) !== offsetHeight;
    if (shouldFallback) {
      width = offsetWidth;
      height = offsetHeight;
    }
    return {
      width,
      height,
      $: shouldFallback
    };
  }

  function unwrapElement(element) {
    return !isElement(element) ? element.contextElement : element;
  }

  function getScale(element) {
    const domElement = unwrapElement(element);
    if (!isHTMLElement(domElement)) {
      return createEmptyCoords(1);
    }
    const rect = domElement.getBoundingClientRect();
    const {
      width,
      height,
      $
    } = getCssDimensions(domElement);
    let x = ($ ? round(rect.width) : rect.width) / width;
    let y = ($ ? round(rect.height) : rect.height) / height;

    // 0, NaN, or Infinity should always fallback to 1.

    if (!x || !Number.isFinite(x)) {
      x = 1;
    }
    if (!y || !Number.isFinite(y)) {
      y = 1;
    }
    return {
      x,
      y
    };
  }

  const noOffsets = /*#__PURE__*/createEmptyCoords(0);
  function getVisualOffsets(element, isFixed, floatingOffsetParent) {
    var _win$visualViewport, _win$visualViewport2;
    if (isFixed === void 0) {
      isFixed = true;
    }
    if (!isSafari()) {
      return noOffsets;
    }
    const win = element ? getWindow(element) : window;
    if (!floatingOffsetParent || isFixed && floatingOffsetParent !== win) {
      return noOffsets;
    }
    return {
      x: ((_win$visualViewport = win.visualViewport) == null ? void 0 : _win$visualViewport.offsetLeft) || 0,
      y: ((_win$visualViewport2 = win.visualViewport) == null ? void 0 : _win$visualViewport2.offsetTop) || 0
    };
  }

  function getBoundingClientRect(element, includeScale, isFixedStrategy, offsetParent) {
    if (includeScale === void 0) {
      includeScale = false;
    }
    if (isFixedStrategy === void 0) {
      isFixedStrategy = false;
    }
    const clientRect = element.getBoundingClientRect();
    const domElement = unwrapElement(element);
    let scale = createEmptyCoords(1);
    if (includeScale) {
      if (offsetParent) {
        if (isElement(offsetParent)) {
          scale = getScale(offsetParent);
        }
      } else {
        scale = getScale(element);
      }
    }
    const visualOffsets = getVisualOffsets(domElement, isFixedStrategy, offsetParent);
    let x = (clientRect.left + visualOffsets.x) / scale.x;
    let y = (clientRect.top + visualOffsets.y) / scale.y;
    let width = clientRect.width / scale.x;
    let height = clientRect.height / scale.y;
    if (domElement) {
      const win = getWindow(domElement);
      const offsetWin = offsetParent && isElement(offsetParent) ? getWindow(offsetParent) : offsetParent;
      let currentIFrame = win.frameElement;
      while (currentIFrame && offsetParent && offsetWin !== win) {
        const iframeScale = getScale(currentIFrame);
        const iframeRect = currentIFrame.getBoundingClientRect();
        const css = getComputedStyle(currentIFrame);
        const left = iframeRect.left + (currentIFrame.clientLeft + parseFloat(css.paddingLeft)) * iframeScale.x;
        const top = iframeRect.top + (currentIFrame.clientTop + parseFloat(css.paddingTop)) * iframeScale.y;
        x *= iframeScale.x;
        y *= iframeScale.y;
        width *= iframeScale.x;
        height *= iframeScale.y;
        x += left;
        y += top;
        currentIFrame = getWindow(currentIFrame).frameElement;
      }
    }
    return core.rectToClientRect({
      width,
      height,
      x,
      y
    });
  }

  function getDocumentElement(node) {
    return ((isNode(node) ? node.ownerDocument : node.document) || window.document).documentElement;
  }

  function getNodeScroll(element) {
    if (isElement(element)) {
      return {
        scrollLeft: element.scrollLeft,
        scrollTop: element.scrollTop
      };
    }
    return {
      scrollLeft: element.pageXOffset,
      scrollTop: element.pageYOffset
    };
  }

  function convertOffsetParentRelativeRectToViewportRelativeRect(_ref) {
    let {
      rect,
      offsetParent,
      strategy
    } = _ref;
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    if (offsetParent === documentElement) {
      return rect;
    }
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    let scale = createEmptyCoords(1);
    const offsets = createEmptyCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && strategy !== 'fixed') {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent);
        scale = getScale(offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      }
    }
    return {
      width: rect.width * scale.x,
      height: rect.height * scale.y,
      x: rect.x * scale.x - scroll.scrollLeft * scale.x + offsets.x,
      y: rect.y * scale.y - scroll.scrollTop * scale.y + offsets.y
    };
  }

  function getWindowScrollBarX(element) {
    // If <html> has a CSS width greater than the viewport, then this will be
    // incorrect for RTL.
    return getBoundingClientRect(getDocumentElement(element)).left + getNodeScroll(element).scrollLeft;
  }

  // Gets the entire size of the scrollable document area, even extending outside
  // of the `<html>` and `<body>` rect bounds if horizontally scrollable.
  function getDocumentRect(element) {
    const html = getDocumentElement(element);
    const scroll = getNodeScroll(element);
    const body = element.ownerDocument.body;
    const width = max(html.scrollWidth, html.clientWidth, body.scrollWidth, body.clientWidth);
    const height = max(html.scrollHeight, html.clientHeight, body.scrollHeight, body.clientHeight);
    let x = -scroll.scrollLeft + getWindowScrollBarX(element);
    const y = -scroll.scrollTop;
    if (getComputedStyle$1(body).direction === 'rtl') {
      x += max(html.clientWidth, body.clientWidth) - width;
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  function getParentNode(node) {
    if (getNodeName(node) === 'html') {
      return node;
    }
    const result =
      // Step into the shadow DOM of the parent of a slotted node.
      node.assignedSlot ||
      // DOM Element detected.
      node.parentNode ||
      // ShadowRoot detected.
      isShadowRoot(node) && node.host ||
      // Fallback.
      getDocumentElement(node);
    return isShadowRoot(result) ? result.host : result;
  }

  function getNearestOverflowAncestor(node) {
    const parentNode = getParentNode(node);
    if (isLastTraversableNode(parentNode)) {
      return node.ownerDocument ? node.ownerDocument.body : node.body;
    }
    if (isHTMLElement(parentNode) && isOverflowElement(parentNode)) {
      return parentNode;
    }
    return getNearestOverflowAncestor(parentNode);
  }

  function getOverflowAncestors(node, list) {
    var _node$ownerDocument;
    if (list === void 0) {
      list = [];
    }
    const scrollableAncestor = getNearestOverflowAncestor(node);
    const isBody = scrollableAncestor === ((_node$ownerDocument = node.ownerDocument) == null ? void 0 : _node$ownerDocument.body);
    const win = getWindow(scrollableAncestor);
    if (isBody) {
      return list.concat(win, win.visualViewport || [], isOverflowElement(scrollableAncestor) ? scrollableAncestor : []);
    }
    return list.concat(scrollableAncestor, getOverflowAncestors(scrollableAncestor));
  }

  function getViewportRect(element, strategy) {
    const win = getWindow(element);
    const html = getDocumentElement(element);
    const visualViewport = win.visualViewport;
    let width = html.clientWidth;
    let height = html.clientHeight;
    let x = 0;
    let y = 0;
    if (visualViewport) {
      width = visualViewport.width;
      height = visualViewport.height;
      const visualViewportBased = isSafari();
      if (!visualViewportBased || visualViewportBased && strategy === 'fixed') {
        x = visualViewport.offsetLeft;
        y = visualViewport.offsetTop;
      }
    }
    return {
      width,
      height,
      x,
      y
    };
  }

  // Returns the inner client rect, subtracting scrollbars if present.
  function getInnerBoundingClientRect(element, strategy) {
    const clientRect = getBoundingClientRect(element, true, strategy === 'fixed');
    const top = clientRect.top + element.clientTop;
    const left = clientRect.left + element.clientLeft;
    const scale = isHTMLElement(element) ? getScale(element) : createEmptyCoords(1);
    const width = element.clientWidth * scale.x;
    const height = element.clientHeight * scale.y;
    const x = left * scale.x;
    const y = top * scale.y;
    return {
      width,
      height,
      x,
      y
    };
  }
  function getClientRectFromClippingAncestor(element, clippingAncestor, strategy) {
    let rect;
    if (clippingAncestor === 'viewport') {
      rect = getViewportRect(element, strategy);
    } else if (clippingAncestor === 'document') {
      rect = getDocumentRect(getDocumentElement(element));
    } else if (isElement(clippingAncestor)) {
      rect = getInnerBoundingClientRect(clippingAncestor, strategy);
    } else {
      const visualOffsets = getVisualOffsets(element);
      rect = {
        ...clippingAncestor,
        x: clippingAncestor.x - visualOffsets.x,
        y: clippingAncestor.y - visualOffsets.y
      };
    }
    return core.rectToClientRect(rect);
  }
  function hasFixedPositionAncestor(element, stopNode) {
    const parentNode = getParentNode(element);
    if (parentNode === stopNode || !isElement(parentNode) || isLastTraversableNode(parentNode)) {
      return false;
    }
    return getComputedStyle$1(parentNode).position === 'fixed' || hasFixedPositionAncestor(parentNode, stopNode);
  }

  // A "clipping ancestor" is an `overflow` element with the characteristic of
  // clipping (or hiding) child elements. This returns all clipping ancestors
  // of the given element up the tree.
  function getClippingElementAncestors(element, cache) {
    const cachedResult = cache.get(element);
    if (cachedResult) {
      return cachedResult;
    }
    let result = getOverflowAncestors(element).filter(el => isElement(el) && getNodeName(el) !== 'body');
    let currentContainingBlockComputedStyle = null;
    const elementIsFixed = getComputedStyle$1(element).position === 'fixed';
    let currentNode = elementIsFixed ? getParentNode(element) : element;

    // https://developer.mozilla.org/en-US/docs/Web/CSS/Containing_block#identifying_the_containing_block
    while (isElement(currentNode) && !isLastTraversableNode(currentNode)) {
      const computedStyle = getComputedStyle$1(currentNode);
      const currentNodeIsContaining = isContainingBlock(currentNode);
      if (!currentNodeIsContaining && computedStyle.position === 'fixed') {
        currentContainingBlockComputedStyle = null;
      }
      const shouldDropCurrentNode = elementIsFixed ? !currentNodeIsContaining && !currentContainingBlockComputedStyle : !currentNodeIsContaining && computedStyle.position === 'static' && !!currentContainingBlockComputedStyle && ['absolute', 'fixed'].includes(currentContainingBlockComputedStyle.position) || isOverflowElement(currentNode) && !currentNodeIsContaining && hasFixedPositionAncestor(element, currentNode);
      if (shouldDropCurrentNode) {
        // Drop non-containing blocks.
        result = result.filter(ancestor => ancestor !== currentNode);
      } else {
        // Record last containing block for next iteration.
        currentContainingBlockComputedStyle = computedStyle;
      }
      currentNode = getParentNode(currentNode);
    }
    cache.set(element, result);
    return result;
  }

  // Gets the maximum area that the element is visible in due to any number of
  // clipping ancestors.
  function getClippingRect(_ref) {
    let {
      element,
      boundary,
      rootBoundary,
      strategy
    } = _ref;
    const elementClippingAncestors = boundary === 'clippingAncestors' ? getClippingElementAncestors(element, this._c) : [].concat(boundary);
    const clippingAncestors = [...elementClippingAncestors, rootBoundary];
    const firstClippingAncestor = clippingAncestors[0];
    const clippingRect = clippingAncestors.reduce((accRect, clippingAncestor) => {
      const rect = getClientRectFromClippingAncestor(element, clippingAncestor, strategy);
      accRect.top = max(rect.top, accRect.top);
      accRect.right = min(rect.right, accRect.right);
      accRect.bottom = min(rect.bottom, accRect.bottom);
      accRect.left = max(rect.left, accRect.left);
      return accRect;
    }, getClientRectFromClippingAncestor(element, firstClippingAncestor, strategy));
    return {
      width: clippingRect.right - clippingRect.left,
      height: clippingRect.bottom - clippingRect.top,
      x: clippingRect.left,
      y: clippingRect.top
    };
  }

  function getDimensions(element) {
    return getCssDimensions(element);
  }

  function getTrueOffsetParent(element, polyfill) {
    if (!isHTMLElement(element) || getComputedStyle$1(element).position === 'fixed') {
      return null;
    }
    if (polyfill) {
      return polyfill(element);
    }
    return element.offsetParent;
  }
  function getContainingBlock(element) {
    let currentNode = getParentNode(element);
    while (isHTMLElement(currentNode) && !isLastTraversableNode(currentNode)) {
      if (isContainingBlock(currentNode)) {
        return currentNode;
      } else {
        currentNode = getParentNode(currentNode);
      }
    }
    return null;
  }

  // Gets the closest ancestor positioned element. Handles some edge cases,
  // such as table ancestors and cross browser bugs.
  function getOffsetParent(element, polyfill) {
    const window = getWindow(element);
    if (!isHTMLElement(element)) {
      return window;
    }
    let offsetParent = getTrueOffsetParent(element, polyfill);
    while (offsetParent && isTableElement(offsetParent) && getComputedStyle$1(offsetParent).position === 'static') {
      offsetParent = getTrueOffsetParent(offsetParent, polyfill);
    }
    if (offsetParent && (getNodeName(offsetParent) === 'html' || getNodeName(offsetParent) === 'body' && getComputedStyle$1(offsetParent).position === 'static' && !isContainingBlock(offsetParent))) {
      return window;
    }
    return offsetParent || getContainingBlock(element) || window;
  }

  function getRectRelativeToOffsetParent(element, offsetParent, strategy) {
    const isOffsetParentAnElement = isHTMLElement(offsetParent);
    const documentElement = getDocumentElement(offsetParent);
    const isFixed = strategy === 'fixed';
    const rect = getBoundingClientRect(element, true, isFixed, offsetParent);
    let scroll = {
      scrollLeft: 0,
      scrollTop: 0
    };
    const offsets = createEmptyCoords(0);
    if (isOffsetParentAnElement || !isOffsetParentAnElement && !isFixed) {
      if (getNodeName(offsetParent) !== 'body' || isOverflowElement(documentElement)) {
        scroll = getNodeScroll(offsetParent);
      }
      if (isHTMLElement(offsetParent)) {
        const offsetRect = getBoundingClientRect(offsetParent, true, isFixed, offsetParent);
        offsets.x = offsetRect.x + offsetParent.clientLeft;
        offsets.y = offsetRect.y + offsetParent.clientTop;
      } else if (documentElement) {
        offsets.x = getWindowScrollBarX(documentElement);
      }
    }
    return {
      x: rect.left + scroll.scrollLeft - offsets.x,
      y: rect.top + scroll.scrollTop - offsets.y,
      width: rect.width,
      height: rect.height
    };
  }

  const platform = {
    getClippingRect,
    convertOffsetParentRelativeRectToViewportRelativeRect,
    isElement,
    getDimensions,
    getOffsetParent,
    getDocumentElement,
    getScale,
    async getElementRects(_ref) {
      let {
        reference,
        floating,
        strategy
      } = _ref;
      const getOffsetParentFn = this.getOffsetParent || getOffsetParent;
      const getDimensionsFn = this.getDimensions;
      return {
        reference: getRectRelativeToOffsetParent(reference, await getOffsetParentFn(floating), strategy),
        floating: {
          x: 0,
          y: 0,
          ...(await getDimensionsFn(floating))
        }
      };
    },
    getClientRects: element => Array.from(element.getClientRects()),
    isRTL: element => getComputedStyle$1(element).direction === 'rtl'
  };

  // https://samthor.au/2021/observing-dom/
  function observeMove(element, onMove) {
    let io = null;
    let timeoutId;
    const root = getDocumentElement(element);
    function cleanup() {
      clearTimeout(timeoutId);
      io && io.disconnect();
      io = null;
    }
    function refresh(skip, threshold) {
      if (skip === void 0) {
        skip = false;
      }
      if (threshold === void 0) {
        threshold = 1;
      }
      cleanup();
      const {
        left,
        top,
        width,
        height
      } = element.getBoundingClientRect();
      if (!skip) {
        onMove();
      }
      if (!width || !height) {
        return;
      }
      const insetTop = floor(top);
      const insetRight = floor(root.clientWidth - (left + width));
      const insetBottom = floor(root.clientHeight - (top + height));
      const insetLeft = floor(left);
      const rootMargin = -insetTop + "px " + -insetRight + "px " + -insetBottom + "px " + -insetLeft + "px";
      let isFirstUpdate = true;
      io = new IntersectionObserver(entries => {
        const ratio = entries[0].intersectionRatio;
        if (ratio !== threshold) {
          if (!isFirstUpdate) {
            return refresh();
          }
          if (ratio === 0) {
            timeoutId = setTimeout(() => {
              refresh(false, 1e-7);
            }, 100);
          } else {
            refresh(false, ratio);
          }
        }
        isFirstUpdate = false;
      }, {
        rootMargin,
        threshold
      });
      io.observe(element);
    }
    refresh(true);
    return cleanup;
  }

  /**
   * Automatically updates the position of the floating element when necessary.
   * Should only be called when the floating element is mounted on the DOM or
   * visible on the screen.
   * @returns cleanup function that should be invoked when the floating element is
   * removed from the DOM or hidden from the screen.
   * @see https://floating-ui.com/docs/autoUpdate
   */
  function autoUpdate(reference, floating, update, options) {
    if (options === void 0) {
      options = {};
    }
    const {
      ancestorScroll = true,
      ancestorResize = true,
      elementResize = true,
      layoutShift = typeof IntersectionObserver === 'function',
      animationFrame = false
    } = options;
    const referenceEl = unwrapElement(reference);
    const ancestors = ancestorScroll || ancestorResize ? [...(referenceEl ? getOverflowAncestors(referenceEl) : []), ...getOverflowAncestors(floating)] : [];
    ancestors.forEach(ancestor => {
      ancestorScroll && ancestor.addEventListener('scroll', update, {
        passive: true
      });
      ancestorResize && ancestor.addEventListener('resize', update);
    });
    const cleanupIo = referenceEl && layoutShift ? observeMove(referenceEl, update) : null;
    let resizeObserver = null;
    if (elementResize) {
      resizeObserver = new ResizeObserver(update);
      if (referenceEl && !animationFrame) {
        resizeObserver.observe(referenceEl);
      }
      resizeObserver.observe(floating);
    }
    let frameId;
    let prevRefRect = animationFrame ? getBoundingClientRect(reference) : null;
    if (animationFrame) {
      frameLoop();
    }
    function frameLoop() {
      const nextRefRect = getBoundingClientRect(reference);
      if (prevRefRect && (nextRefRect.x !== prevRefRect.x || nextRefRect.y !== prevRefRect.y || nextRefRect.width !== prevRefRect.width || nextRefRect.height !== prevRefRect.height)) {
        update();
      }
      prevRefRect = nextRefRect;
      frameId = requestAnimationFrame(frameLoop);
    }
    update();
    return () => {
      ancestors.forEach(ancestor => {
        ancestorScroll && ancestor.removeEventListener('scroll', update);
        ancestorResize && ancestor.removeEventListener('resize', update);
      });
      cleanupIo && cleanupIo();
      resizeObserver && resizeObserver.disconnect();
      resizeObserver = null;
      if (animationFrame) {
        cancelAnimationFrame(frameId);
      }
    };
  }

  /**
   * Computes the `x` and `y` coordinates that will place the floating element
   * next to a reference element when it is given a certain CSS positioning
   * strategy.
   */
  const computePosition = (reference, floating, options) => {
    // This caches the expensive `getClippingElementAncestors` function so that
    // multiple lifecycle resets re-use the same result. It only lives for a
    // single call. If other functions become expensive, we can add them as well.
    const cache = new Map();
    const mergedOptions = {
      platform,
      ...options
    };
    const platformWithCache = {
      ...mergedOptions.platform,
      _c: cache
    };
    return core.computePosition(reference, floating, {
      ...mergedOptions,
      platform: platformWithCache
    });
  };

  Object.defineProperty(exports, 'arrow', {
    enumerable: true,
    get: function () { return core.arrow; }
  });
  Object.defineProperty(exports, 'autoPlacement', {
    enumerable: true,
    get: function () { return core.autoPlacement; }
  });
  Object.defineProperty(exports, 'detectOverflow', {
    enumerable: true,
    get: function () { return core.detectOverflow; }
  });
  Object.defineProperty(exports, 'flip', {
    enumerable: true,
    get: function () { return core.flip; }
  });
  Object.defineProperty(exports, 'hide', {
    enumerable: true,
    get: function () { return core.hide; }
  });
  Object.defineProperty(exports, 'inline', {
    enumerable: true,
    get: function () { return core.inline; }
  });
  Object.defineProperty(exports, 'limitShift', {
    enumerable: true,
    get: function () { return core.limitShift; }
  });
  Object.defineProperty(exports, 'offset', {
    enumerable: true,
    get: function () { return core.offset; }
  });
  Object.defineProperty(exports, 'shift', {
    enumerable: true,
    get: function () { return core.shift; }
  });
  Object.defineProperty(exports, 'size', {
    enumerable: true,
    get: function () { return core.size; }
  });
  exports.autoUpdate = autoUpdate;
  exports.computePosition = computePosition;
  exports.getOverflowAncestors = getOverflowAncestors;
  exports.platform = platform;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
;
((Drupal,once,_ref)=>{let {computePosition,offset,shift,flip}=_ref;Drupal.theme.ginTooltipWrapper=(dataset,title)=>`<div class="gin-tooltip ${dataset.drupalTooltipClass||""}">\n      ${dataset.drupalTooltip||title}\n    </div>`,Drupal.behaviors.ginTooltip={attach:(context)=>{Drupal.ginTooltip.init(context);}},Drupal.ginTooltip={init:function(context){once("ginTooltipInit","[data-gin-tooltip]",context).forEach(((trigger)=>{const title=trigger.title;title&&(trigger.title=""),trigger.insertAdjacentHTML("afterend",Drupal.theme.ginTooltipWrapper(trigger.dataset,title));const tooltip=trigger.nextElementSibling,updatePosition=()=>{this.computePosition(trigger,tooltip);};new ResizeObserver(updatePosition).observe(trigger),new MutationObserver(updatePosition).observe(trigger,{attributes:!0,childList:!0,subtree:!0}),trigger.addEventListener("mouseover",updatePosition),trigger.addEventListener("focus",updatePosition);}));},computePosition:function(trigger,tooltip){let placement=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"bottom-end";computePosition(trigger,tooltip,{strategy:"absolute",placement:trigger.dataset.drupalTooltipPosition||placement,middleware:[flip({padding:16}),offset(6),shift({padding:16})]}).then(((_ref2)=>{let {x,y}=_ref2;Object.assign(tooltip.style,{"inset-inline-start":`${x}px`,"inset-block-start":`${y}px`});}));}};})(Drupal,once,FloatingUIDOM);;
(function($,Drupal,debounce){const cache={right:0,left:0,bottom:0,top:0};const cssVarPrefix='--drupal-displace-offset';const documentStyle=document.documentElement.style;const offsetKeys=Object.keys(cache);const offsetProps={};offsetKeys.forEach((edge)=>{offsetProps[edge]={enumerable:true,get(){return cache[edge];},set(value){if(value!==cache[edge])documentStyle.setProperty(`${cssVarPrefix}-${edge}`,`${value}px`);cache[edge]=value;}};});const offsets=Object.seal(Object.defineProperties({},offsetProps));function getRawOffset(el,edge){const $el=$(el);const documentElement=document.documentElement;let displacement=0;const horizontal=edge==='left'||edge==='right';let placement=$el.offset()[horizontal?'left':'top'];placement-=window[`scroll${horizontal?'X':'Y'}`]||document.documentElement[`scroll${horizontal?'Left':'Top'}`]||0;switch(edge){case 'top':displacement=placement+$el.outerHeight();break;case 'left':displacement=placement+$el.outerWidth();break;case 'bottom':displacement=documentElement.clientHeight-placement;break;case 'right':displacement=documentElement.clientWidth-placement;break;default:displacement=0;}return displacement;}function calculateOffset(edge){let edgeOffset=0;const displacingElements=document.querySelectorAll(`[data-offset-${edge}]`);const n=displacingElements.length;for(let i=0;i<n;i++){const el=displacingElements[i];if(el.style.display==='none')continue;let displacement=parseInt(el.getAttribute(`data-offset-${edge}`),10);if(isNaN(displacement))displacement=getRawOffset(el,edge);edgeOffset=Math.max(edgeOffset,displacement);}return edgeOffset;}function displace(broadcast=true){const newOffsets={};offsetKeys.forEach((edge)=>{newOffsets[edge]=calculateOffset(edge);});offsetKeys.forEach((edge)=>{offsets[edge]=newOffsets[edge];});if(broadcast)$(document).trigger('drupalViewportOffsetChange',offsets);return offsets;}Drupal.behaviors.drupalDisplace={attach(){if(this.displaceProcessed)return;this.displaceProcessed=true;$(window).on('resize.drupalDisplace',debounce(displace,200));}};Drupal.displace=displace;Object.defineProperty(Drupal.displace,'offsets',{value:offsets,writable:false});Drupal.displace.calculateOffset=calculateOffset;})(jQuery,Drupal,Drupal.debounce);;
((Drupal)=>{Drupal.behaviors.ginSticky={attach:()=>{once("ginSticky",".region-sticky-watcher").forEach((()=>{const observer=new IntersectionObserver(((_ref)=>{let [e]=_ref;const regionSticky=document.querySelector(".region-sticky");regionSticky.classList.toggle("region-sticky--is-sticky",e.intersectionRatio<1),regionSticky.toggleAttribute("data-offset-top",e.intersectionRatio<1),Drupal.displace(!0);}),{threshold:[1]}),element=document.querySelector(".region-sticky-watcher");element&&observer.observe(element);}));}};})(Drupal);;
