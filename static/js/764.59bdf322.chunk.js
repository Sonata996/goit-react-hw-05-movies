"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[764],{764:function(n,e,t){t.r(e),t.d(e,{default:function(){return v}});var r=t(861),a=t(439),u=t(687),c=t.n(u),i=t(705),s=t(791),o=t(87),f=t(689),p=t(504),l=t(184);function v(){var n,e=(0,o.lr)(),t=(0,a.Z)(e,2),u=t[0],v=t[1],d=null!==(n=u.get("value"))&&void 0!==n?n:"",h=(0,s.useState)([]),g=(0,a.Z)(h,2),x=g[0],m=g[1],b=(0,s.useState)(""),w=(0,a.Z)(b,2),k=w[0],y=w[1],Z=(0,f.TH)();return(0,s.useEffect)((function(){function n(){return(n=(0,r.Z)(c().mark((function n(){var e;return c().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,(0,p.Vi)(k);case 3:e=n.sent,m(e),n.next=9;break;case 7:n.prev=7,n.t0=n.catch(0);case 9:case"end":return n.stop()}}),n,null,[[0,7]])})))).apply(this,arguments)}!function(){n.apply(this,arguments)}()}),[k,d]),(0,l.jsxs)("div",{children:[(0,l.jsx)(i.J9,{initialValues:{value:""},onSubmit:function(n){y(n.value),v({value:n.value})},children:function(n){var e=n.errors,t=n.touched;return(0,l.jsxs)(i.l0,{children:[(0,l.jsx)(i.gN,{name:"value"}),e.value&&t.value?(0,l.jsx)("div",{children:e.value}):null,(0,l.jsx)("button",{type:"submit",children:"Search"})]})}}),k&&(0,l.jsx)("ul",{children:x.results.map((function(n){return(0,l.jsx)("li",{children:(0,l.jsx)(o.rU,{to:"".concat(n.id),state:{from:Z},children:n.title})},n.id)}))})]})}},504:function(n,e,t){t.d(e,{Mt:function(){return s},Vi:function(){return o},gi:function(){return f},nd:function(){return p},p1:function(){return l}});var r=t(861),a=t(687),u=t.n(a),c=t(243),i="891cc72aafe06da2b3bebc54fcfb98d7";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var s=function(){var n=(0,r.Z)(u().mark((function n(){var e;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(i,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),o=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(i,"&query=").concat(e,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),f=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?language=en-US&api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?language=en-US&api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(u().mark((function n(e){var t;return u().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?language=en-US&api_key=").concat(i));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=764.59bdf322.chunk.js.map