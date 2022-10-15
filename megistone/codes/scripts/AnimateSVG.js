function SVG(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function replaceRectsWithPaths(t){t=$(t).find("rect");$.each(t,function(){var t=$(this).attr("x"),e=$(this).attr("y"),r=parseFloat(t)+parseFloat($(this).attr("width")),n=parseFloat(e)+parseFloat($(this).attr("height")),e="M"+t+","+e+" "+r+","+e+" "+r+","+n+" "+t+","+n+" "+t+","+e;$(SVG("path")).attr("d",e).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).insertAfter(this)}),$(t).remove()}function replaceLinesWithPaths(t){t=$(t).find("line");$.each(t,function(){var t="M"+$(this).attr("x1")+","+$(this).attr("y1")+" "+$(this).attr("x2")+","+$(this).attr("y2");$(SVG("path")).attr("d",t).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).insertAfter(this)}),$(t).remove()}function replaceCirclesWithPaths(t){t=$(t).find("circle");$.each(t,function(){var t=$(this).attr("cx"),e=$(this).attr("cy"),r=$(this).attr("r"),n=parseFloat(2*r),n="M"+t+", "+e+" m"+-r+", 0 a "+r+", "+r+" 0 1,0 "+n+",0 a "+r+", "+r+" 0 1,0 "+-n+",0 ";$(SVG("path")).attr("d",n).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).insertAfter(this)}),$(t).remove()}function replaceEllipsesWithPaths(t){t=$(t).find("ellipse");$.each(t,function(){var t=$(this).attr("cx"),e=$(this).attr("cy"),r=$(this).attr("rx"),n=$(this).attr("ry"),r="M"+t+", "+e+" m"+-r+", 0 a "+r+", "+n+" 0 1,0 "+2*r+",0 a "+r+", "+n+" 0 1,0 "+2*-r+",0 ";$(SVG("path")).attr("d",r).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).insertAfter(this)}),$(t).remove()}function replacePolygonsWithPaths(t){t=$(t).find("polygon");$.each(t,function(){var t=$(this).attr("points"),e=t.split(/[ ,]+/),e=e[0]+", "+e[1];$(SVG("path")).attr("d","M"+t+" "+e).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).insertAfter(this)}),$(t).remove()}function replacePolylinesWithPaths(t){t=$(t).find("polyline");$.each(t,function(){var t=$(this).attr("points");$(SVG("path")).attr("d","M"+t).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).insertAfter(this)}),$(t).remove()}function hideSVGPaths(t){t=$(t).find("path");$.each(t,function(){var t=this.getTotalLength();$(this).css({"stroke-dashoffset":t,"stroke-dasharray":t+" "+t})})}function drawSVGPaths(t,r,n,a){t=$(t).find("path");$.each(t,function(t){var e=this.getTotalLength();$(this).css({"stroke-dashoffset":e,"stroke-dasharray":e+" "+e}),$(this).delay(a*t).animate({"stroke-dashoffset":0},{duration:Math.floor(Math.random()*n)+r,easing:"easeInOutQuad"})})}function replaceWithPaths(t){replaceRectsWithPaths(t),replaceLinesWithPaths(t),replaceEllipsesWithPaths(t),replaceCirclesWithPaths(t),replacePolygonsWithPaths(t),replacePolylinesWithPaths(t)}function startSVGAnimation(t){drawSVGPaths(t,1e3,2e3,50)}function SVG(t){return document.createElementNS("http://www.w3.org/2000/svg",t)}function replaceRectsWithPaths(t){t=$(t).find("rect");$.each(t,function(){var t=$(this).attr("x"),e=$(this).attr("y"),r=parseFloat(t)+parseFloat($(this).attr("width")),n=parseFloat(e)+parseFloat($(this).attr("height")),e="M"+t+","+e+" "+r+","+e+" "+r+","+n+" "+t+","+n+" "+t+","+e;$(SVG("path")).attr("d",e).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).insertAfter(this)}),$(t).remove()}function replaceLinesWithPaths(t){t=$(t).find("line");$.each(t,function(){var t="M"+$(this).attr("x1")+","+$(this).attr("y1")+" "+$(this).attr("x2")+","+$(this).attr("y2");$(SVG("path")).attr("d",t).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).insertAfter(this)}),$(t).remove()}function replaceCirclesWithPaths(t){t=$(t).find("circle");$.each(t,function(){var t=$(this).attr("cx"),e=$(this).attr("cy"),r=$(this).attr("r"),n=parseFloat(2*r),n="M"+t+", "+e+" m"+-r+", 0 a "+r+", "+r+" 0 1,0 "+n+",0 a "+r+", "+r+" 0 1,0 "+-n+",0 ";$(SVG("path")).attr("d",n).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).insertAfter(this)}),$(t).remove()}function replaceEllipsesWithPaths(t){t=$(t).find("ellipse");$.each(t,function(){var t=$(this).attr("cx"),e=$(this).attr("cy"),r=$(this).attr("rx"),n=$(this).attr("ry"),r="M"+t+", "+e+" m"+-r+", 0 a "+r+", "+n+" 0 1,0 "+2*r+",0 a "+r+", "+n+" 0 1,0 "+2*-r+",0 ";$(SVG("path")).attr("d",r).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).insertAfter(this)}),$(t).remove()}function replacePolygonsWithPaths(t){t=$(t).find("polygon");$.each(t,function(){var t=$(this).attr("points"),e=t.split(/[ ,]+/),e=e[0]+", "+e[1];$(SVG("path")).attr("d","M"+t+" "+e).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).insertAfter(this)}),$(t).remove()}function replacePolylinesWithPaths(t){t=$(t).find("polyline");$.each(t,function(){var t=$(this).attr("points");$(SVG("path")).attr("d","M"+t).attr("fill",$(this).attr("fill")).attr("stroke",$(this).attr("stroke")).attr("stroke-width",$(this).attr("stroke-width")).insertAfter(this)}),$(t).remove()}function hideSVGPaths(t){t=$(t).find("path");$.each(t,function(){var t=this.getTotalLength();$(this).css({"stroke-dashoffset":t,"stroke-dasharray":t+" "+t})})}function drawSVGPaths(t,r,n,a){t=$(t).find("path");$.each(t,function(t){var e=this.getTotalLength();$(this).css({"stroke-dashoffset":e,"stroke-dasharray":e+" "+e}),$(this).delay(a*t).animate({"stroke-dashoffset":0},{duration:Math.floor(Math.random()*n)+r,easing:"easeInOutQuad"})})}function replaceWithPaths(t){replaceRectsWithPaths(t),replaceLinesWithPaths(t),replaceEllipsesWithPaths(t),replaceCirclesWithPaths(t),replacePolygonsWithPaths(t),replacePolylinesWithPaths(t)}function startSVGAnimation(t){drawSVGPaths(t,1e3,2e3,50)}jQuery.extend(jQuery.easing,{easeInOutQuad:function(t,e,r,n,a){return(e/=a/2)<1?n/2*e*e+r:-n/2*(--e*(e-2)-1)+r}}),replaceWithPaths($("svg")),startSVGAnimation($("svg")),jQuery.easing.jswing=jQuery.easing.swing,jQuery.extend(jQuery.easing,{def:"easeOutQuad",swing:function(t,e,r,n,a){return jQuery.easing[jQuery.easing.def](t,e,r,n,a)},easeInQuad:function(t,e,r,n,a){return n*(e/=a)*e+r},easeOutQuad:function(t,e,r,n,a){return-n*(e/=a)*(e-2)+r},easeInOutQuad:function(t,e,r,n,a){return(e/=a/2)<1?n/2*e*e+r:-n/2*(--e*(e-2)-1)+r},easeInCubic:function(t,e,r,n,a){return n*(e/=a)*e*e+r},easeOutCubic:function(t,e,r,n,a){return n*((e=e/a-1)*e*e+1)+r},easeInOutCubic:function(t,e,r,n,a){return(e/=a/2)<1?n/2*e*e*e+r:n/2*((e-=2)*e*e+2)+r},easeInQuart:function(t,e,r,n,a){return n*(e/=a)*e*e*e+r},easeOutQuart:function(t,e,r,n,a){return-n*((e=e/a-1)*e*e*e-1)+r},easeInOutQuart:function(t,e,r,n,a){return(e/=a/2)<1?n/2*e*e*e*e+r:-n/2*((e-=2)*e*e*e-2)+r},easeInQuint:function(t,e,r,n,a){return n*(e/=a)*e*e*e*e+r},easeOutQuint:function(t,e,r,n,a){return n*((e=e/a-1)*e*e*e*e+1)+r},easeInOutQuint:function(t,e,r,n,a){return(e/=a/2)<1?n/2*e*e*e*e*e+r:n/2*((e-=2)*e*e*e*e+2)+r},easeInSine:function(t,e,r,n,a){return-n*Math.cos(e/a*(Math.PI/2))+n+r},easeOutSine:function(t,e,r,n,a){return n*Math.sin(e/a*(Math.PI/2))+r},easeInOutSine:function(t,e,r,n,a){return-n/2*(Math.cos(Math.PI*e/a)-1)+r},easeInExpo:function(t,e,r,n,a){return 0==e?r:n*Math.pow(2,10*(e/a-1))+r},easeOutExpo:function(t,e,r,n,a){return e==a?r+n:n*(1-Math.pow(2,-10*e/a))+r},easeInOutExpo:function(t,e,r,n,a){return 0==e?r:e==a?r+n:(e/=a/2)<1?n/2*Math.pow(2,10*(e-1))+r:n/2*(2-Math.pow(2,-10*--e))+r},easeInCirc:function(t,e,r,n,a){return-n*(Math.sqrt(1-(e/=a)*e)-1)+r},easeOutCirc:function(t,e,r,n,a){return n*Math.sqrt(1-(e=e/a-1)*e)+r},easeInOutCirc:function(t,e,r,n,a){return(e/=a/2)<1?-n/2*(Math.sqrt(1-e*e)-1)+r:n/2*(Math.sqrt(1-(e-=2)*e)+1)+r},easeInElastic:function(t,e,r,n,a){var i=1.70158,o=0,s=n;return 0==e?r:1==(e/=a)?r+n:(o=o||.3*a,i=s<Math.abs(n)?(s=n,o/4):o/(2*Math.PI)*Math.asin(n/s),-(s*Math.pow(2,10*--e)*Math.sin((e*a-i)*(2*Math.PI)/o))+r)},easeOutElastic:function(t,e,r,n,a){var i=1.70158,o=0,s=n;return 0==e?r:1==(e/=a)?r+n:(o=o||.3*a,i=s<Math.abs(n)?(s=n,o/4):o/(2*Math.PI)*Math.asin(n/s),s*Math.pow(2,-10*e)*Math.sin((e*a-i)*(2*Math.PI)/o)+n+r)},easeInOutElastic:function(t,e,r,n,a){var i=1.70158,o=0,s=n;return 0==e?r:2==(e/=a/2)?r+n:(o=o||a*(.3*1.5),i=s<Math.abs(n)?(s=n,o/4):o/(2*Math.PI)*Math.asin(n/s),e<1?s*Math.pow(2,10*--e)*Math.sin((e*a-i)*(2*Math.PI)/o)*-.5+r:s*Math.pow(2,-10*--e)*Math.sin((e*a-i)*(2*Math.PI)/o)*.5+n+r)},easeInBack:function(t,e,r,n,a,i){return null==i&&(i=1.70158),n*(e/=a)*e*((i+1)*e-i)+r},easeOutBack:function(t,e,r,n,a,i){return null==i&&(i=1.70158),n*((e=e/a-1)*e*((i+1)*e+i)+1)+r},easeInOutBack:function(t,e,r,n,a,i){return null==i&&(i=1.70158),(e/=a/2)<1?n/2*(e*e*((1+(i*=1.525))*e-i))+r:n/2*((e-=2)*e*((1+(i*=1.525))*e+i)+2)+r},easeInBounce:function(t,e,r,n,a){return n-jQuery.easing.easeOutBounce(t,a-e,0,n,a)+r},easeOutBounce:function(t,e,r,n,a){return(e/=a)<1/2.75?n*(7.5625*e*e)+r:e<2/2.75?n*(7.5625*(e-=1.5/2.75)*e+.75)+r:e<2.5/2.75?n*(7.5625*(e-=2.25/2.75)*e+.9375)+r:n*(7.5625*(e-=2.625/2.75)*e+.984375)+r},easeInOutBounce:function(t,e,r,n,a){return e<a/2?.5*jQuery.easing.easeInBounce(t,2*e,0,n,a)+r:.5*jQuery.easing.easeOutBounce(t,2*e-a,0,n,a)+.5*n+r}}),function(t){var d=t(window);t.fn.visible=function(t,e,r){if(!(this.length<1)){var n=1<this.length?this.eq(0):this,a=n.get(0),i=d.width(),o=d.height(),r=r||"both",e=!0!==e||a.offsetWidth*a.offsetHeight;if("function"==typeof a.getBoundingClientRect){var s=a.getBoundingClientRect(),c=0<=s.top&&s.top<o,h=0<s.bottom&&s.bottom<=o,l=0<=s.left&&s.left<i,u=0<s.right&&s.right<=i,f=t?c||h:c&&h,s=t?l||l:l&&u;return"both"===r?e&&f&&s:"vertical"===r?e&&f:"horizontal"===r?e&&s:void 0}c=d.scrollTop(),h=c+o,l=d.scrollLeft(),u=l+i,f=n.offset(),s=f.top,o=s+n.height(),i=f.left,f=i+n.width(),n=!0===t?o:s,s=!0===t?s:o,o=!0===t?f:i,f=!0===t?i:f;return"both"===r?!!e&&s<=h&&c<=n&&f<=u&&l<=o:"vertical"===r?!!e&&s<=h&&c<=n:"horizontal"===r?!!e&&f<=u&&l<=o:void 0}}}(jQuery),window.Modernizr=function(t,l,i){function e(t){d.cssText=t}function o(t,e){return typeof t===e}function s(t,e){for(var r in t){var n=t[r];if(!~(""+n).indexOf("-")&&d[n]!==i)return"pfx"!=e||n}return!1}function r(t,e,r){var n=t.charAt(0).toUpperCase()+t.slice(1),a=(t+" "+m.join(n+" ")+n).split(" ");return o(e,"string")||void 0===e?s(a,e):function(t,e,r){for(var n in t){var a=e[t[n]];if(a!==i)return!1===r?t[n]:o(a,"function")?a.bind(r||e):a}return!1}(a=(t+" "+v.join(n+" ")+n).split(" "),e,r)}function n(t,e,r,n){var a,i,o,s=l.createElement("div"),c=l.body,h=c||l.createElement("body");if(parseInt(r,10))for(;r--;)(i=l.createElement("div")).id=n?n[r]:f+(r+1),s.appendChild(i);return a=["&#173;",'<style id="s',f,'">',t,"</style>"].join(""),s.id=f,(c?s:h).innerHTML+=a,h.appendChild(s),c||(h.style.background="",h.style.overflow="hidden",o=u.style.overflow,u.style.overflow="hidden",u.appendChild(h)),t=e(s,t),c?s.parentNode.removeChild(s):(h.parentNode.removeChild(h),u.style.overflow=o),!!t}var a,c,h={},u=l.documentElement,f="modernizr",d=l.createElement(f).style,p=" -webkit- -moz- -o- -ms- ".split(" "),$="Webkit Moz O ms",m=$.split(" "),v=$.toLowerCase().split(" "),y="http://www.w3.org/2000/svg",g={},w=[],k=w.slice,M={}.hasOwnProperty,P=void 0!==M&&void 0!==M.call?function(t,e){return M.call(t,e)}:function(t,e){return e in t&&void 0===t.constructor.prototype[e]};for(c in Function.prototype.bind||(Function.prototype.bind=function(r){var n=this;if("function"!=typeof n)throw new TypeError;var a=k.call(arguments,1),i=function(){if(this instanceof i){var t=function(){};t.prototype=n.prototype;var e=new t,t=n.apply(e,a.concat(k.call(arguments)));return Object(t)===t?t:e}return n.apply(r,a.concat(k.call(arguments)))};return i}),g.flexbox=function(){return r("flexWrap")},g.touch=function(){var e;return"ontouchstart"in t||t.DocumentTouch&&l instanceof DocumentTouch?e=!0:n(["@media (",p.join("touch-enabled),("),f,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(t){e=9===t.offsetTop}),e},g.svg=function(){return!!l.createElementNS&&!!l.createElementNS(y,"svg").createSVGRect},g.inlinesvg=function(){var t=l.createElement("div");return t.innerHTML="<svg/>",(t.firstChild&&t.firstChild.namespaceURI)==y},g)P(g,c)&&(a=c.toLowerCase(),h[a]=g[c](),w.push((h[a]?"":"no-")+a));return h.addTest=function(t,e){if("object"==typeof t)for(var r in t)P(t,r)&&h.addTest(r,t[r]);else{if(t=t.toLowerCase(),h[t]!==i)return h;e="function"==typeof e?e():e,u.className+=" "+(e?"":"no-")+t,h[t]=e}return h},e(""),0,function(t,s){function c(){var t=p.elements;return"string"==typeof t?t.split(" "):t}function h(t){var e=d[t[i]];return e||(e={},o++,t[i]=o,d[o]=e),e}function l(t,e,r){return e=e||s,f?e.createElement(t):!(e=(r=r||h(e)).cache[t]?r.cache[t].cloneNode():a.test(t)?(r.cache[t]=r.createElem(t)).cloneNode():r.createElem(t)).canHaveChildren||n.test(t)||e.tagUrn?e:r.frag.appendChild(e)}function e(t){var e,r,n,a,i,o=h(t=t||s);return!p.shivCSS||u||o.hasCSS||(o.hasCSS=(a="article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}",i=(n=t).createElement("p"),n=n.getElementsByTagName("head")[0]||n.documentElement,i.innerHTML="x<style>"+a+"</style>",!!n.insertBefore(i.lastChild,n.firstChild))),f||(e=t,(r=o).cache||(r.cache={},r.createElem=e.createElement,r.createFrag=e.createDocumentFragment,r.frag=r.createFrag()),e.createElement=function(t){return p.shivMethods?l(t,e,r):r.createElem(t)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+c().join().replace(/[\w\-]+/g,function(t){return r.createElem(t),r.frag.createElement(t),'c("'+t+'")'})+");return n}")(p,r.frag)),t}var u,f,r=t.html5||{},n=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,a=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,i="_html5shiv",o=0,d={};!function(){try{var t=s.createElement("a");t.innerHTML="<xyz></xyz>",u="hidden"in t,f=1==t.childNodes.length||function(){s.createElement("a");var t=s.createDocumentFragment();return void 0===t.cloneNode||void 0===t.createDocumentFragment||void 0===t.createElement}()}catch(t){f=u=!0}}();var p={elements:r.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:"3.7.0",shivCSS:!1!==r.shivCSS,supportsUnknownElements:f,shivMethods:!1!==r.shivMethods,type:"default",shivDocument:e,createElement:l,createDocumentFragment:function(t,e){if(t=t||s,f)return t.createDocumentFragment();for(var r=(e=e||h(t)).frag.cloneNode(),n=0,a=c(),i=a.length;n<i;n++)r.createElement(a[n]);return r}};t.html5=p,e(s)}(this,l),h._version="2.7.1",h._prefixes=p,h._domPrefixes=v,h._cssomPrefixes=m,h.testProp=function(t){return s([t])},h.testAllProps=r,h.testStyles=n,u.className=u.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(" js "+w.join(" ")),h}(this,this.document),function(t,d){function u(t){return"[object Function]"==a.call(t)}function p(t){return"string"==typeof t}function f(){}function $(t){return!t||"loaded"==t||"complete"==t||"uninitialized"==t}function m(){var t=g.shift();w=1,t?t.t?v(function(){("c"==t.t?E.injectCss:E.injectJs)(t.s,0,t.a,t.x,t.e,1)},0):(t(),m()):w=0}function e(t,e,r,n,a){return w=0,e=e||"j",p(t)?(o="c"==e?S:P,s=t,c=e,e=this.i++,r=r,n=n,a=(a=a)||E.errorTimeout,h=d.createElement(o),u=l=0,f={t:c,s:s,e:r,a:n,x:a},1===b[s]&&(u=1,b[s]=[]),"object"==o?h.data=s:(h.src=s,h.type=o),h.width=h.height="0",h.onerror=h.onload=h.onreadystatechange=function(){i.call(this,u)},g.splice(e,0,f),"img"!=o&&(u||2===b[s]?(M.insertBefore(h,k?null:y),v(i,a)):b[s].push(h))):(g.splice(this.i++,0,t),1==g.length&&m()),this;function i(t){if(!l&&$(h.readyState)&&(f.r=l=1,w||m(),h.onload=h.onreadystatechange=null,t))for(var e in"img"!=o&&v(function(){M.removeChild(h)},50),b[s])b[s].hasOwnProperty(e)&&b[s][e].onload()}var o,s,c,h,l,u,f}function s(){var t=E;return t.loader={load:e,i:0},t}var r,n=d.documentElement,v=t.setTimeout,y=d.getElementsByTagName("script")[0],a={}.toString,g=[],w=0,i="MozAppearance"in n.style,k=i&&!!d.createRange().compareNode,M=k?n:y.parentNode,n=t.opera&&"[object Opera]"==a.call(t.opera),n=!!d.attachEvent&&!n,P=i?"object":n?"script":"img",S=n?"script":P,o=Array.isArray||function(t){return"[object Array]"==a.call(t)},c=[],b={},h={timeout:function(t,e){return e.length&&(t.timeout=e[0]),t}},E=function(t){function l(t,e,r,n,a){var i=function(t){for(var e,r,t=t.split("!"),n=c.length,a=t.pop(),i=t.length,a={url:a,origUrl:a,prefixes:t},o=0;o<i;o++)r=t[o].split("="),(e=h[r.shift()])&&(a=e(a,r));for(o=0;o<n;o++)a=c[o](a);return a}(t),o=i.autoCallback;i.url.split(".").pop().split("?").shift(),i.bypass||(e=e&&(u(e)?e:e[t]||e[n]||e[t.split("/").pop().split("?")[0]]),i.instead?i.instead(t,e,r,n,a):(b[i.url]?i.noexec=!0:b[i.url]=1,r.load(i.url,i.forceCSS||!i.forceJS&&"css"==i.url.split(".").pop().split("?").shift()?"c":void 0,i.noexec,i.attrs,i.timeout),(u(e)||u(o))&&r.load(function(){s(),e&&e(i.origUrl,a,n),o&&o(i.origUrl,a,n),b[i.url]=2})))}function e(t,e){function r(r,t){if(r){if(p(r))t||(s=function(){var t=[].slice.call(arguments);c.apply(this,t),h()}),l(r,s,e,0,i);else if(Object(r)===r)for(a in n=function(){var t,e=0;for(t in r)r.hasOwnProperty(t)&&e++;return e}(),r)r.hasOwnProperty(a)&&(t||--n||(u(s)?s=function(){var t=[].slice.call(arguments);c.apply(this,t),h()}:s[a]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),h()}}(c[a])),l(r[a],s,e,a,i))}else t||h()}var n,a,i=!!t.test,o=t.load||t.both,s=t.callback||f,c=s,h=t.complete||f;r(i?t.yep:t.nope,!!o),o&&r(o)}var r,n,a=this.yepnope.loader;if(p(t))l(t,0,a,0);else if(o(t))for(r=0;r<t.length;r++)p(n=t[r])?l(n,0,a,0):o(n)?E(n):Object(n)===n&&e(n,a);else Object(t)===t&&e(t,a)};E.addPrefix=function(t,e){h[t]=e},E.addFilter=function(t){c.push(t)},E.errorTimeout=1e4,null==d.readyState&&d.addEventListener&&(d.readyState="loading",d.addEventListener("DOMContentLoaded",r=function(){d.removeEventListener("DOMContentLoaded",r,0),d.readyState="complete"},0)),t.yepnope=s(),t.yepnope.executeStack=m,t.yepnope.injectJs=function(t,e,r,n,a,i){var o,s,c=d.createElement("script"),n=n||E.errorTimeout;for(s in c.src=t,r)c.setAttribute(s,r[s]);e=i?m:e||f,c.onreadystatechange=c.onload=function(){!o&&$(c.readyState)&&(o=1,e(),c.onload=c.onreadystatechange=null)},v(function(){o||e(o=1)},n),a?c.onload():y.parentNode.insertBefore(c,y)},t.yepnope.injectCss=function(t,e,r,n,a,i){var o,e=i?m:e||f;for(o in(n=d.createElement("link")).href=t,n.rel="stylesheet",n.type="text/css",r)n.setAttribute(o,r[o]);a||(y.parentNode.insertBefore(n,y),v(e,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))},$(function(){var e=$(".js-animate");replaceWithPaths(e),hideSVGPaths(e),$(document).scroll(function(){$(e).each(function(t){$(this).visible()&&(startSVGAnimation(this),e.splice(t,1))})}),$(document).scroll()});