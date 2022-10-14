"use strict";(self.webpackChunkleaderboard=self.webpackChunkleaderboard||[]).push([[179],{424:(r,n,e)=>{e.d(n,{Z:()=>i});var t=e(81),o=e.n(t),a=e(645),s=e.n(a)()(o());s.push([r.id,"* {\r\n  margin: 0;\r\n  padding: 0;\r\n  box-sizing: border-box;\r\n  font-family: 'Poppins', sans-serif;\r\n}\r\n\r\n*::selection {\r\n  background: #28fcd8;\r\n  color: #444;\r\n}\r\n\r\n::-webkit-scrollbar-thumb {\r\n  background-color: #d6dee1;\r\n  border-radius: 20px;\r\n  border: 6px solid transparent;\r\n  background-clip: content-box;\r\n}\r\n\r\n::-webkit-scrollbar {\r\n  width: 20px;\r\n}\r\n\r\n::-webkit-scrollbar-track {\r\n  background-color: transparent;\r\n}\r\n\r\n:root {\r\n  --general-bg: radial-gradient(#28fcd8, #00f);\r\n}\r\n\r\nbody {\r\n  background-image: var(--general-bg);\r\n  animation: success-background 2s infinite;\r\n  height: 100vh;\r\n}\r\n\r\nh1 {\r\n  font-weight: bold;\r\n  margin-bottom: 1rem;\r\n  text-align: center;\r\n  color: #fff;\r\n}\r\n\r\n.container {\r\n  display: grid;\r\n  grid-template-columns: 50% 50%;\r\n}\r\n\r\n/** LIST */\r\n\r\n/* STYLE THE LIST */\r\n\r\nh2 {\r\n  color: #fff;\r\n}\r\n\r\n.list {\r\n  margin: 1rem auto;\r\n  width: 80%;\r\n}\r\n\r\n.list-item {\r\n  margin: 0.4rem 0;\r\n  padding: 0.4rem;\r\n  border-radius: 7px;\r\n}\r\n\r\n.score-number {\r\n  font-weight: bold;\r\n  float: right;\r\n  margin-right: 1rem;\r\n}\r\n\r\n/* STYLE THE LIST HEADER */\r\n\r\n.list-header {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n/* STYLE THE BUTTON */\r\n\r\n.refresh-btn {\r\n  margin: 0 1rem;\r\n  border: none;\r\n  outline: none;\r\n  padding: 0.5rem;\r\n  border-radius: 10px;\r\n  background: #444;\r\n  color: #fff;\r\n  transition: background 0.3s, transform 0.4s;\r\n  cursor: pointer;\r\n}\r\n\r\n.refresh-btn:hover {\r\n  background: #000;\r\n  transform: scale(1.05);\r\n}\r\n\r\n.refresh-btn:active {\r\n  transform: scale(0.95);\r\n}\r\n\r\n/* LIST CONTAINER */\r\n\r\nul {\r\n  list-style: none;\r\n  border-radius: 8px;\r\n  max-height: 20rem;\r\n  overflow-y: auto;\r\n  padding: 0.2rem;\r\n}\r\n\r\n.list-container {\r\n  margin: 1rem auto;\r\n}\r\n\r\n/** ADD SCORE */\r\n\r\n.add-score {\r\n  margin: 1rem auto;\r\n  width: 80%;\r\n}\r\n\r\n.add-score-container {\r\n  display: flex;\r\n  flex-direction: column;\r\n}\r\n\r\n.add-score-container > input {\r\n  margin: 1rem 0;\r\n  padding: 1rem;\r\n  font-size: 1em;\r\n  border-radius: 3px;\r\n  border: none;\r\n  outline: none;\r\n  background-color: #444;\r\n  color: #fff;\r\n}\r\n\r\ninput::placeholder {\r\n  color: #fff;\r\n}\r\n\r\n.add-btn {\r\n  border: none;\r\n  outline: none;\r\n  padding: 0.5rem;\r\n  border-radius: 10px;\r\n  background: #aaa;\r\n  color: #000;\r\n  transition: background 0.3s, color 0.3s, transform 0.4s, box-shadow 0.3s;\r\n  cursor: pointer;\r\n  float: right;\r\n}\r\n\r\n.add-btn:hover {\r\n  background: #000;\r\n  color: #fff;\r\n  box-shadow: 2px 2px 0 2px #444;\r\n}\r\n\r\n.add-btn:active {\r\n  transform: scale(0.9);\r\n  box-shadow: none;\r\n}\r\n\r\n/** MESSAGES */\r\n\r\n.message {\r\n  border-radius: 10px;\r\n  text-align: center;\r\n  padding: 0.4rem;\r\n  margin: 1rem 0;\r\n}\r\n\r\n.success {\r\n  border: 3px solid #fff;\r\n  background: #0cc725;\r\n  color: #fff;\r\n  margin: 0 auto;\r\n  animation: slide-up 3s forwards cubic-bezier(0.43, 0.03, 0.35, 1.01);\r\n}\r\n\r\n.error {\r\n  border: 3px solid #fff;\r\n  background: #d31414;\r\n  color: #fff;\r\n  animation: slide-up 0.6s forwards ease-out;\r\n}\r\n\r\n.visible {\r\n  display: none;\r\n}\r\n\r\n@keyframes slide-up {\r\n  from,\r\n  to {\r\n    transform: translateY(100%);\r\n    opacity: 0;\r\n  }\r\n\r\n  20%,\r\n  50% {\r\n    transform: translateY(0);\r\n    opacity: 1;\r\n  }\r\n}\r\n\r\n@media screen and (max-width: 768px) {\r\n  .container {\r\n    display: flex;\r\n    flex-direction: column;\r\n  }\r\n}\r\n",""]);const i=s},645:r=>{r.exports=function(r){var n=[];return n.toString=function(){return this.map((function(n){var e="",t=void 0!==n[5];return n[4]&&(e+="@supports (".concat(n[4],") {")),n[2]&&(e+="@media ".concat(n[2]," {")),t&&(e+="@layer".concat(n[5].length>0?" ".concat(n[5]):""," {")),e+=r(n),t&&(e+="}"),n[2]&&(e+="}"),n[4]&&(e+="}"),e})).join("")},n.i=function(r,e,t,o,a){"string"==typeof r&&(r=[[null,r,void 0]]);var s={};if(t)for(var i=0;i<this.length;i++){var c=this[i][0];null!=c&&(s[c]=!0)}for(var d=0;d<r.length;d++){var l=[].concat(r[d]);t&&s[l[0]]||(void 0!==a&&(void 0===l[5]||(l[1]="@layer".concat(l[5].length>0?" ".concat(l[5]):""," {").concat(l[1],"}")),l[5]=a),e&&(l[2]?(l[1]="@media ".concat(l[2]," {").concat(l[1],"}"),l[2]=e):l[2]=e),o&&(l[4]?(l[1]="@supports (".concat(l[4],") {").concat(l[1],"}"),l[4]=o):l[4]="".concat(o)),n.push(l))}},n}},81:r=>{r.exports=function(r){return r[1]}},379:r=>{var n=[];function e(r){for(var e=-1,t=0;t<n.length;t++)if(n[t].identifier===r){e=t;break}return e}function t(r,t){for(var a={},s=[],i=0;i<r.length;i++){var c=r[i],d=t.base?c[0]+t.base:c[0],l=a[d]||0,u="".concat(d," ").concat(l);a[d]=l+1;var f=e(u),p={css:c[1],media:c[2],sourceMap:c[3],supports:c[4],layer:c[5]};if(-1!==f)n[f].references++,n[f].updater(p);else{var m=o(p,t);t.byIndex=i,n.splice(i,0,{identifier:u,updater:m,references:1})}s.push(u)}return s}function o(r,n){var e=n.domAPI(n);return e.update(r),function(n){if(n){if(n.css===r.css&&n.media===r.media&&n.sourceMap===r.sourceMap&&n.supports===r.supports&&n.layer===r.layer)return;e.update(r=n)}else e.remove()}}r.exports=function(r,o){var a=t(r=r||[],o=o||{});return function(r){r=r||[];for(var s=0;s<a.length;s++){var i=e(a[s]);n[i].references--}for(var c=t(r,o),d=0;d<a.length;d++){var l=e(a[d]);0===n[l].references&&(n[l].updater(),n.splice(l,1))}a=c}}},569:r=>{var n={};r.exports=function(r,e){var t=function(r){if(void 0===n[r]){var e=document.querySelector(r);if(window.HTMLIFrameElement&&e instanceof window.HTMLIFrameElement)try{e=e.contentDocument.head}catch(r){e=null}n[r]=e}return n[r]}(r);if(!t)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");t.appendChild(e)}},216:r=>{r.exports=function(r){var n=document.createElement("style");return r.setAttributes(n,r.attributes),r.insert(n,r.options),n}},565:(r,n,e)=>{r.exports=function(r){var n=e.nc;n&&r.setAttribute("nonce",n)}},795:r=>{r.exports=function(r){var n=r.insertStyleElement(r);return{update:function(e){!function(r,n,e){var t="";e.supports&&(t+="@supports (".concat(e.supports,") {")),e.media&&(t+="@media ".concat(e.media," {"));var o=void 0!==e.layer;o&&(t+="@layer".concat(e.layer.length>0?" ".concat(e.layer):""," {")),t+=e.css,o&&(t+="}"),e.media&&(t+="}"),e.supports&&(t+="}");var a=e.sourceMap;a&&"undefined"!=typeof btoa&&(t+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),n.styleTagTransform(t,r,n.options)}(n,r,e)},remove:function(){!function(r){if(null===r.parentNode)return!1;r.parentNode.removeChild(r)}(n)}}}},589:r=>{r.exports=function(r,n){if(n.styleSheet)n.styleSheet.cssText=r;else{for(;n.firstChild;)n.removeChild(n.firstChild);n.appendChild(document.createTextNode(r))}}},607:(r,n,e)=>{var t=e(379),o=e.n(t),a=e(795),s=e.n(a),i=e(569),c=e.n(i),d=e(565),l=e.n(d),u=e(216),f=e.n(u),p=e(589),m=e.n(p),b=e(424),h={};h.styleTagTransform=m(),h.setAttributes=l(),h.insert=c().bind(null,"head"),h.domAPI=s(),h.insertStyleElement=f(),o()(b.Z,h),b.Z&&b.Z.locals&&b.Z.locals;const g=async(r,n)=>{const e=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YOA5yPi0APoFn2dcUj6u/scores",{method:"POST",body:JSON.stringify({user:r,score:n}),headers:{"Content-type":"application/json; charset=UTF-8"}}),t=await e.json();if(e.ok){const r=document.querySelector(".success");r.classList.remove("visible"),setTimeout((()=>{r.classList.add("visible")}),3e3)}else{const r=document.querySelector(".error");r.classList.remove("visible"),setTimeout((()=>{r.classList.add("visible")}),3e3)}return t.result},v=async()=>{const r=await fetch("https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YOA5yPi0APoFn2dcUj6u/scores",{method:"GET"});return(await r.json()).result.sort(((r,n)=>n.score-r.score))},y=(r,n)=>{0===n.length?(r.innerHTML='<p class="no-list">No score added yet</p>',r.style.border="none"):(r.style.border="4px solid #fff",r.innerHTML="",n.forEach(((n,e)=>{const t=document.createElement("li");t.classList.add("list-item"),t.innerHTML=`${n.user}: <span class="score-number">${n.score}<span>`,r.appendChild(t),r.lastElementChild.style.backgroundColor=e%2==0?"#DDD":"#fff"})))},x=document.querySelector(".refresh-btn"),k=document.querySelector(".list-ul");(async()=>{x.addEventListener("click",(()=>{v().then((r=>y(k,r)))}))})(),(async()=>{const r=document.querySelector(".add-score-container"),n=document.querySelector(".add-btn"),e=document.getElementById("name"),t=document.getElementById("score"),o=document.querySelector(".list-ul"),a=await v();n.addEventListener("click",(()=>{""!==e.value&&""!==t.value&&(g(e.value,t.value),e.value="",t.value="",y(o,a))})),r.addEventListener("keypress",(r=>{""!==e.value&&""!==t.value&&"Enter"===r.key&&(g(e.value,t.value),e.value="",t.value="",y(o,a))}))})(),document.querySelector(".list-ul").innerHTML='<p style="color: #fff; font-weight: bold">Refresh to see the scores</p>'}},r=>{r(r.s=607)}]);