(()=>{"use strict";const t=function(){function t(t){this.container=document.createElement("div"),this.container.className=t}return t.prototype.createHeaderTitle=function(t){var n=document.createElement("h1");return n.textContent=t,n},t.prototype.render=function(){return this.container},t.TextObject={},t}(),n=function(){function t(t,n){this.container=document.createElement(t),this.container.className=n}return t.prototype.render=function(){return this.container},t}();var e,r=(e=function(t,n){return e=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},e(t,n)},function(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Class extends value "+String(n)+" is not a constructor or null");function r(){this.constructor=t}e(t,n),t.prototype=null===n?Object.create(n):(r.prototype=n.prototype,new r)}),o=function(t){function n(n,e){return t.call(this,n,e)||this}return r(n,t),n.prototype.createHeader=function(){var t=document.createElement("div");t.className="header-wrapper";var n=document.createElement("div");return n.className="header_logo",t.append(n),function(t,n,e,r){var o,i=document.createElement("div");if(!i)throw new Error("Error in element creating");n&&(o=i.classList).add.apply(o,n.split(" ")),i.textContent=r,e&&e.append(i)}(0,"header__title",n,"Remember the milk"),t.append(this.renderLinks()),t},n.prototype.renderLinks=function(){var t=document.createElement("nav");return t.className="navigation",t.innerHTML='\n    <ul class="navigation-list">\n    <li class="navigation-item"><a href="#" class="nav-link nav-tour">Tour</a></li>\n    <li class="navigation-item"><a href="#" class="nav-link nav-help">Help</a></li>\n    <li class="navigation-item"><a href="#" class="nav-link nav-log-in">Log in</a></li>\n    <li class="navigation-item"><a href="#" class="nav-link nav-sign-up">Sign Up for free</a></li>\n  </ul>',t},n.prototype.render=function(){var t=this.createHeader();return this.container.append(t),this.container},n}(n);const i=o;var a=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();const c=function(t){function n(n,e){return t.call(this,n,e)||this}return a(n,t),n.prototype.testFunction=function(){var t=document.createElement("h1");return t.className="test",t.textContent="TEST MAIN SECTION",t},n.prototype.render=function(){var t=this.testFunction();return this.container.append(t),this.container},n}(n);var s=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}(),u=function(t){function n(n,e){return t.call(this,n,e)||this}return s(n,t),n.prototype.makeFooter=function(){return'\n    <div class="footer__author ">\n    <span>&copy; 2023</span>\n      </div>\n    <a href="https://github.com/geniusx1990" class="footer__link">geniusx1990</a>\n    <a href="https://github.com/inni-ast" class="footer__link">inni-ast</a>\n    <a href="https://github.com/angelica-zb" class="footer__link">angelica-zb</a>\n  <div class="footer__rss">\n    <a href="https://rs.school/js/" class="footer__link">\n      <img src="https://rs.school/images/rs_school.svg" class="footer__rss-img" alt="RSS logo">\n    </a>\n  </div>\n    '},n.prototype.render=function(){var t=this.makeFooter();return this.container.innerHTML=t,this.container},n}(n);const p=u;var l=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();const f=function(t){function n(n){var e=t.call(this,n)||this;return e.header=new i("header","header-container"),e.section=new c("section","main-section"),e.footer=new p("footer","footer"),e}return l(n,t),n.prototype.render=function(){return this.container.append(this.header.render()),this.container.append(this.section.render()),this.container.append(this.footer.render()),this.container},n}(t);var h=function(){var t=function(n,e){return t=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,n){t.__proto__=n}||function(t,n){for(var e in n)Object.prototype.hasOwnProperty.call(n,e)&&(t[e]=n[e])},t(n,e)};return function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function r(){this.constructor=n}t(n,e),n.prototype=null===e?Object.create(e):(r.prototype=e.prototype,new r)}}();const d=function(t){function n(n){return t.call(this,n)||this}return h(n,t),n.prototype.render=function(){var t=this.createHeaderTitle("application-page");return this.container.append(t),this.container},n}(t);var y=function(){function t(){this.initialPage=new f("main-page")}return t.renderNewPage=function(n){var e=document.querySelector("#".concat(t.defaultPageId));e&&e.remove();var r=null;if("main-page"===n?r=new f(n):"application-page"===n&&(r=new d(n)),r){var o=r.render();o.id=t.defaultPageId,t.container.append(o)}},t.prototype.enableRouteChange=function(){window.addEventListener("hashchange",(function(){var n=window.location.hash.slice(1);t.renderNewPage(n)}))},t.prototype.start=function(){t.renderNewPage("main-page"),this.enableRouteChange()},t.container=document.body,t.defaultPageId="current-page",t}();(new y).start()})();