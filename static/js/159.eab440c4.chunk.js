"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[159],{159:function(n,t,e){e.r(t),e.d(t,{default:function(){return j}});var r,a,c,u,i,o=e(861),s=e(439),p=e(687),f=e.n(p),d=e(791),l=e(504),v=e(168),h=e(867),x=e(87),g=h.ZP.li(r||(r=(0,v.Z)(["\n  box-shadow: 10px 5px 5px #7c7665;\n"]))),m=(0,h.ZP)(x.rU)(a||(a=(0,v.Z)(["\n  color: #e0dfdc;\n  text-decoration: none;\n  &:hover {\n    color: #a8a8a8;\n  }\n"]))),w=h.ZP.img(c||(c=(0,v.Z)(["\n  width: 200px;\n"]))),Z=h.ZP.p(u||(u=(0,v.Z)(["\n  max-width: 200px;\n"]))),b=e(184),y=function(n){var t=n.element,e=t.original_title,r=t.id,a=t.poster_path;return(0,b.jsx)(g,{children:(0,b.jsxs)(m,{to:"/movies/".concat(r),children:[(0,b.jsx)(w,{src:"https://image.tmdb.org/t/p/w500/".concat(a),alt:""}),(0,b.jsx)(Z,{children:e})]})})},k=h.ZP.ul(i||(i=(0,v.Z)(["\n  margin-top: 0;\n  margin-bottom: 0;\n  padding-left: 15px;\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px;\n"]))),_=function(n){var t=n.movie;return console.log(t),(0,b.jsx)(k,{children:t.map((function(n){return(0,b.jsx)(y,{element:n},n.id)}))})};function j(){var n=(0,d.useState)([]),t=(0,s.Z)(n,2),e=t[0],r=t[1];function a(){return(a=(0,o.Z)(f().mark((function n(){var t;return f().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,l.Mt)();case 3:t=n.sent,r(t.results),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:return n.prev=9,n.finish(9);case 11:case"end":return n.stop()}}),n,null,[[0,7,9,11]])})))).apply(this,arguments)}return 0===e.length&&function(){a.apply(this,arguments)}(),(0,b.jsxs)("div",{children:[(0,b.jsx)("h1",{children:"Trending today"}),(0,b.jsx)(_,{movie:e})]})}},504:function(n,t,e){e.d(t,{Mt:function(){return o},Vi:function(){return s},gi:function(){return p},nd:function(){return f},p1:function(){return d}});var r=e(861),a=e(687),c=e.n(a),u=e(243),i="891cc72aafe06da2b3bebc54fcfb98d7";u.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(c().mark((function n(){var t;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("trending/movie/day?api_key=".concat(i,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),s=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(t,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"?language=en-US&api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/credits?language=en-US&api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(c().mark((function n(t){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,u.Z.get("movie/".concat(t,"/reviews?language=en-US&api_key=").concat(i));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(t){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=159.eab440c4.chunk.js.map