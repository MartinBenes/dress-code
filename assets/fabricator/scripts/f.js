!function(e){function t(a){if(n[a])return n[a].exports;var r=n[a]={exports:{},id:a,loaded:!1};return e[a].call(r.exports,r,r.exports,t),r.loaded=!0,r.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";n(1);var a=window.fabricator={};a.options={toggles:{labels:!0,notes:!0,code:!1},menu:!1,mq:"(min-width: 60em)"},a.options.menu=window.matchMedia(a.options.mq).matches,a.test={},a.test.sessionStorage=function(){var e="_f";try{return sessionStorage.setItem(e,e),sessionStorage.removeItem(e),!0}catch(t){return!1}}(),a.test.sessionStorage&&(sessionStorage.fabricator=sessionStorage.fabricator||JSON.stringify(a.options)),a.dom={root:document.querySelector("html"),primaryMenu:document.querySelector(".f-menu"),menuItems:document.querySelectorAll(".f-menu li a"),menuToggle:document.querySelector(".f-menu-toggle")},a.getOptions=function(){return a.test.sessionStorage?JSON.parse(sessionStorage.fabricator):a.options},a.buildColorChips=function(){for(var e,t=document.querySelectorAll(".f-color-chip"),n=t.length-1;n>=0;n--)e=t[n].querySelector(".f-color-chip__color").innerHTML,t[n].style.borderTopColor=e,t[n].style.borderBottomColor=e;return this},a.setActiveItem=function(){var e=function(){for(var e,t,n=[],r=a.dom.menuItems.length-1;r>=0;r--)a.dom.menuItems[r].classList.remove("f-active"),t=a.dom.menuItems[r].getAttribute("href"),e=t.indexOf("#")>-1?t.split("#").pop():t.split("/").pop().replace(/\.[^/.]+$bs-/,""),n.push(e);return n.reverse()},t=function(){var t,n,r=window.location.href,s=e();t=r.indexOf("#")>-1?window.location.hash.replace("#",""):window.location.pathname.split("/").pop().replace(/\.[^/.]+$bs-/,""),""===t&&(t="index"),n=s.indexOf(t)>-1?s.indexOf(t):0,a.dom.menuItems[n].classList.add("f-active")};return window.addEventListener("hashchange",t),t(),this},a.menuToggle=function(){var e=a.dom.menuToggle,t=a.getOptions(),n=function(){t.menu=!a.dom.root.classList.contains("f-menu-active"),a.dom.root.classList.toggle("f-menu-active"),a.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(t))};e.addEventListener("click",function(){n()});for(var r=function(){window.matchMedia(a.options.mq).matches||n()},s=0;s<a.dom.menuItems.length;s++)a.dom.menuItems[s].addEventListener("click",r);return this},a.allItemsToggles=function(){for(var e={labels:document.querySelectorAll('[data-f-toggle="labels"]'),notes:document.querySelectorAll('[data-f-toggle="notes"]'),code:document.querySelectorAll('[data-f-toggle="code"]')},t=document.querySelectorAll(".f-controls [data-f-toggle-control]"),n=a.getOptions(),r=function(t,r){for(var s=document.querySelector(".f-controls [data-f-toggle-control="+t+"]"),i=e[t],o=0;o<i.length;o++)r?i[o].classList.remove("f-item-hidden"):i[o].classList.add("f-item-hidden");r?s.classList.add("f-active"):s.classList.remove("f-active"),n.toggles[t]=r,a.test.sessionStorage&&sessionStorage.setItem("fabricator",JSON.stringify(n))},s=0;s<t.length;s++)t[s].addEventListener("click",function(e){var t=e.currentTarget.getAttribute("data-f-toggle-control"),n=e.currentTarget.className.indexOf("f-active")<0;r(t,n)});for(var i in n.toggles)n.toggles.hasOwnProperty(i)&&r(i,n.toggles[i]);return this},a.singleItemToggle=function(){for(var e=document.querySelectorAll(".f-item-group [data-f-toggle-control]"),t=function(e){var t=this.parentNode.parentNode.parentNode,n=e.currentTarget.getAttribute("data-f-toggle-control");t.querySelector("[data-f-toggle="+n+"]").classList.toggle("f-item-hidden")},n=0;n<e.length;n++)e[n].addEventListener("click",t);return this},a.bindCodeAutoSelect=function(){for(var e=document.querySelectorAll(".f-item-code"),t=function(e){var t=window.getSelection(),n=document.createRange();n.selectNodeContents(e.querySelector("code")),t.removeAllRanges(),t.addRange(n)},n=e.length-1;n>=0;n--)e[n].addEventListener("click",t.bind(this,e[n]));return this},a.setInitialMenuState=function(){var e=document.querySelector("html"),t=window.matchMedia(a.options.mq),n=function(t){t.matches&&a.getOptions().menu?e.classList.add("f-menu-active"):e.classList.remove("f-menu-active")};return t.addListener(n),n(t),this},a.setBreakpointsState=function(){var e=document.querySelector("html");"shown"!==localStorage.getItem("breakpoints")&&e.classList.remove("bs-is-show-breakpoints");for(var t=document.querySelectorAll(".js-toggle-breakpoints"),n=0;n<t.length;n++)t[n].addEventListener("click",function(t){t.preventDefault(),e.classList.contains("bs-is-show-breakpoints")?(localStorage.removeItem("breakpoints"),e.classList.remove("bs-is-show-breakpoints")):(localStorage.setItem("breakpoints","shown"),e.classList.add("bs-is-show-breakpoints"))});return this},a.setGridState=function(){var e=document.querySelector("html");"shown"!==localStorage.getItem("grid")&&e.classList.remove("bs-is-show-grid");for(var t=document.querySelectorAll(".js-toggle-grid"),n=0;n<t.length;n++)t[n].addEventListener("click",function(t){t.preventDefault(),e.classList.contains("bs-is-show-grid")?(localStorage.removeItem("grid"),e.classList.remove("bs-is-show-grid")):(localStorage.setItem("grid","shown"),e.classList.add("bs-is-show-grid"))});return this},function(){a.setInitialMenuState().menuToggle().allItemsToggles().singleItemToggle().buildColorChips().setActiveItem().bindCodeAutoSelect().setBreakpointsState().setGridState()}()},function(e,t){self="undefined"!=typeof window?window:"undefined"!=typeof WorkerGlobalScope&&self instanceof WorkerGlobalScope?self:{};var n=function(){var e=/\blang(?:uage)?-(?!\*)(\w+)\b/i,t=self.Prism={util:{encode:function(e){return e instanceof n?new n(e.type,t.util.encode(e.content),e.alias):"Array"===t.util.type(e)?e.map(t.util.encode):e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/\u00a0/g," ")},type:function(e){return Object.prototype.toString.call(e).match(/\[object (\w+)\]/)[1]},clone:function(e){var n=t.util.type(e);switch(n){case"Object":var a={};for(var r in e)e.hasOwnProperty(r)&&(a[r]=t.util.clone(e[r]));return a;case"Array":return e.map(function(e){return t.util.clone(e)})}return e}},languages:{extend:function(e,n){var a=t.util.clone(t.languages[e]);for(var r in n)a[r]=n[r];return a},insertBefore:function(e,n,a,r){r=r||t.languages;var s=r[e];if(2==arguments.length){a=arguments[1];for(var i in a)a.hasOwnProperty(i)&&(s[i]=a[i]);return s}var o={};for(var l in s)if(s.hasOwnProperty(l)){if(l==n)for(var i in a)a.hasOwnProperty(i)&&(o[i]=a[i]);o[l]=s[l]}return t.languages.DFS(t.languages,function(t,n){n===r[e]&&t!=e&&(this[t]=o)}),r[e]=o},DFS:function(e,n,a){for(var r in e)e.hasOwnProperty(r)&&(n.call(e,r,e[r],a||r),"Object"===t.util.type(e[r])?t.languages.DFS(e[r],n):"Array"===t.util.type(e[r])&&t.languages.DFS(e[r],n,r))}},highlightAll:function(e,n){for(var a,r=document.querySelectorAll('code[class*="language-"], [class*="language-"] code, code[class*="lang-"], [class*="lang-"] code'),s=0;a=r[s++];)t.highlightElement(a,e===!0,n)},highlightElement:function(a,r,s){for(var i,o,l=a;l&&!e.test(l.className);)l=l.parentNode;if(l&&(i=(l.className.match(e)||[,""])[1],o=t.languages[i]),o){a.className=a.className.replace(e,"").replace(/\s+/g," ")+" language-"+i,l=a.parentNode,/pre/i.test(l.nodeName)&&(l.className=l.className.replace(e,"").replace(/\s+/g," ")+" language-"+i);var c=a.textContent;if(c){c=c.replace(/^(?:\r?\n|\r)/,"");var u={element:a,language:i,grammar:o,code:c};if(t.hooks.run("before-highlight",u),r&&self.Worker){var g=new Worker(t.filename);g.onmessage=function(e){u.highlightedCode=n.stringify(JSON.parse(e.data),i),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,s&&s.call(u.element),t.hooks.run("after-highlight",u)},g.postMessage(JSON.stringify({language:u.language,code:u.code}))}else u.highlightedCode=t.highlight(u.code,u.grammar,u.language),t.hooks.run("before-insert",u),u.element.innerHTML=u.highlightedCode,s&&s.call(a),t.hooks.run("after-highlight",u)}}},highlight:function(e,a,r){var s=t.tokenize(e,a);return n.stringify(t.util.encode(s),r)},tokenize:function(e,n,a){var r=t.Token,s=[e],i=n.rest;if(i){for(var o in i)n[o]=i[o];delete n.rest}e:for(var o in n)if(n.hasOwnProperty(o)&&n[o]){var l=n[o];l="Array"===t.util.type(l)?l:[l];for(var c=0;c<l.length;++c){var u=l[c],g=u.inside,d=!!u.lookbehind,f=0,p=u.alias;u=u.pattern||u;for(var m=0;m<s.length;m++){var h=s[m];if(s.length>e.length)break e;if(!(h instanceof r)){u.lastIndex=0;var v=u.exec(h);if(v){d&&(f=v[1].length);var y=v.index-1+f,v=v[0].slice(f),b=v.length,w=y+b,S=h.slice(0,y+1),k=h.slice(w+1),L=[m,1];S&&L.push(S);var A=new r(o,g?t.tokenize(v,g):v,p);L.push(A),k&&L.push(k),Array.prototype.splice.apply(s,L)}}}}}return s},hooks:{all:{},add:function(e,n){var a=t.hooks.all;a[e]=a[e]||[],a[e].push(n)},run:function(e,n){var a=t.hooks.all[e];if(a&&a.length)for(var r,s=0;r=a[s++];)r(n)}}},n=t.Token=function(e,t,n){this.type=e,this.content=t,this.alias=n};if(n.stringify=function(e,a,r){if("string"==typeof e)return e;if("Array"===t.util.type(e))return e.map(function(t){return n.stringify(t,a,e)}).join("");var s={type:e.type,content:n.stringify(e.content,a,r),tag:"span",classes:["token",e.type],attributes:{},language:a,parent:r};if("comment"==s.type&&(s.attributes.spellcheck="true"),e.alias){var i="Array"===t.util.type(e.alias)?e.alias:[e.alias];Array.prototype.push.apply(s.classes,i)}t.hooks.run("wrap",s);var o="";for(var l in s.attributes)o+=l+'="'+(s.attributes[l]||"")+'"';return"<"+s.tag+' class="'+s.classes.join(" ")+'" '+o+">"+s.content+"</"+s.tag+">"},!self.document)return self.addEventListener?(self.addEventListener("message",function(e){var n=JSON.parse(e.data),a=n.language,r=n.code;self.postMessage(JSON.stringify(t.util.encode(t.tokenize(r,t.languages[a])))),self.close()},!1),self.Prism):self.Prism;var a=document.getElementsByTagName("script");return a=a[a.length-1],a&&(t.filename=a.src,document.addEventListener&&!a.hasAttribute("data-manual")&&document.addEventListener("DOMContentLoaded",t.highlightAll)),self.Prism}();"undefined"!=typeof e&&e.exports&&(e.exports=n),n.languages.markup={comment:/<!--[\w\W]*?-->/,prolog:/<\?.+?\?>/,doctype:/<!DOCTYPE.+?>/,cdata:/<!\[CDATA\[[\w\W]*?]]>/i,tag:{pattern:/<\/?[\w:-]+\s*(?:\s+[\w:-]+(?:=(?:("|')(\\?[\w\W])*?\1|[^\s'">=]+))?\s*)*\/?>/i,inside:{tag:{pattern:/^<\/?[\w:-]+/i,inside:{punctuation:/^<\/?/,namespace:/^[\w-]+?:/}},"attr-value":{pattern:/=(?:('|")[\w\W]*?(\1)|[^\s>]+)/i,inside:{punctuation:/=|>|"/}},punctuation:/\/?>/,"attr-name":{pattern:/[\w:-]+/,inside:{namespace:/^[\w-]+?:/}}}},entity:/&#?[\da-z]{1,8};/i},n.hooks.add("wrap",function(e){"entity"===e.type&&(e.attributes.title=e.content.replace(/&amp;/,"&"))}),n.languages.css={comment:/\/\*[\w\W]*?\*\//,atrule:{pattern:/@[\w-]+?.*?(;|(?=\s*\{))/i,inside:{punctuation:/[;:]/}},url:/url\((?:(["'])(\\\n|\\?.)*?\1|.*?)\)/i,selector:/[^\{\}\s][^\{\};]*(?=\s*\{)/,string:/("|')(\\\n|\\?.)*?\1/,property:/(\b|\B)[\w-]+(?=\s*:)/i,important:/\B!important\b/i,punctuation:/[\{\};:]/,"function":/[-a-z0-9]+(?=\()/i},n.languages.markup&&(n.languages.insertBefore("markup","tag",{style:{pattern:/<style[\w\W]*?>[\w\W]*?<\/style>/i,inside:{tag:{pattern:/<style[\w\W]*?>|<\/style>/i,inside:n.languages.markup.tag.inside},rest:n.languages.css},alias:"language-css"}}),n.languages.insertBefore("inside","attr-value",{"style-attr":{pattern:/\s*style=("|').*?\1/i,inside:{"attr-name":{pattern:/^\s*style/i,inside:n.languages.markup.tag.inside},punctuation:/^\s*=\s*['"]|['"]\s*$bs-/,"attr-value":{pattern:/.+/i,inside:n.languages.css}},alias:"language-css"}},n.languages.markup.tag)),n.languages.clike={comment:[{pattern:/(^|[^\\])\/\*[\w\W]*?\*\//,lookbehind:!0},{pattern:/(^|[^\\:])\/\/.+/,lookbehind:!0}],string:/("|')(\\\n|\\?.)*?\1/,"class-name":{pattern:/((?:(?:class|interface|extends|implements|trait|instanceof|new)\s+)|(?:catch\s+\())[a-z0-9_\.\\]+/i,lookbehind:!0,inside:{punctuation:/(\.|\\)/}},keyword:/\b(if|else|while|do|for|return|in|instanceof|function|new|try|throw|catch|finally|null|break|continue)\b/,"boolean":/\b(true|false)\b/,"function":{pattern:/[a-z0-9_]+\(/i,inside:{punctuation:/\(/}},number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee]-?\d+)?)\b/,operator:/[-+]{1,2}|!|<=?|>=?|={1,3}|&{1,2}|\|?\||\?|\*|\/|~|\^|%/,ignore:/&(lt|gt|amp);/i,punctuation:/[{}[\];(),.:]/},n.languages.javascript=n.languages.extend("clike",{keyword:/\b(break|case|catch|class|const|continue|debugger|default|delete|do|else|enum|export|extends|false|finally|for|function|get|if|implements|import|in|instanceof|interface|let|new|null|package|private|protected|public|return|set|static|super|switch|this|throw|true|try|typeof|var|void|while|with|yield)\b/,number:/\b-?(0x[\dA-Fa-f]+|\d*\.?\d+([Ee][+-]?\d+)?|NaN|-?Infinity)\b/,"function":/(?!\d)[a-z0-9_$bs-]+(?=\()/i}),n.languages.insertBefore("javascript","keyword",{regex:{pattern:/(^|[^/])\/(?!\/)(\[.+?]|\\.|[^/\r\n])+\/[gim]{0,3}(?=\s*($bs-|[\r\n,.;})]))/,lookbehind:!0}}),n.languages.markup&&n.languages.insertBefore("markup","tag",{script:{pattern:/<script[\w\W]*?>[\w\W]*?<\/script>/i,inside:{tag:{pattern:/<script[\w\W]*?>|<\/script>/i,inside:n.languages.markup.tag.inside},rest:n.languages.javascript},alias:"language-javascript"}})}]);