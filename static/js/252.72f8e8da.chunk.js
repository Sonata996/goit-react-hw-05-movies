"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[252],{4252:function(n,e,t){t.r(e),t.d(e,{default:function(){return O}});var r,a,i,c,s,o,u,l=t(5861),d=t(9439),p=t(4687),x=t.n(p),f=t(2791),h=t(7689),v=t(3504),g=t(7692),j=t(168),m=t(1087),Z=t(5867),w=(0,Z.ZP)(m.rU)(r||(r=(0,j.Z)(["\nmax-width: 75px;\n  display: flex;\n  align-items: center;\n  text-decoration: none;\n"]))),y=t(184),k=function(n){var e=(0,h.TH)(),t=n.location;return(0,y.jsx)("div",{children:(0,y.jsxs)(w,{state:e,to:t.state?t.state.from:"/",children:[(0,y.jsx)(g.YiX,{}),(0,y.jsx)("p",{children:"Go back"})]})})},_=Z.ZP.div(a||(a=(0,j.Z)(["\n  max-width: 300px;\n"]))),b=Z.ZP.img(i||(i=(0,j.Z)(["\n  max-width: 300px;\n"]))),P=function(n){var e=n.movie;return(0,y.jsx)(_,{children:(0,y.jsx)(b,{src:"https://image.tmdb.org/t/p/w500/".concat(e.poster_path),alt:'"'.concat(e.original_title,'" Poster path')})})},U=t(8977),S=Z.ZP.ul(c||(c=(0,j.Z)(["\npadding: 0;\ndisplay: flex;\nlist-style: none;\ngap: 10px;\n"]))),C=function(n){var e=n.movie;return(0,y.jsxs)("div",{children:[(0,y.jsxs)("h1",{children:[e.original_title,(0,y.jsxs)("span",{children:["(",(0,U.Z)(new Date(e.release_date),"yyyy"),")"]})]}),(0,y.jsxs)("h4",{children:["User Score: ",e.vote_average.toFixed(1),"%"]}),(0,y.jsx)("h3",{children:"Overview"}),(0,y.jsx)("p",{children:e.overview}),(0,y.jsx)("h3",{children:"Genres"}),(0,y.jsx)(S,{children:e.genres.map((function(n){return(0,y.jsx)("li",{children:n.name},n.id)}))})]})},F=Z.ZP.div(s||(s=(0,j.Z)(["\n  display: flex;\n  gap: 20px;\n"]))),G=Z.ZP.ul(o||(o=(0,j.Z)(["\nlist-style: none;\ndisplay: flex;\ngap: 15px;\npadding-left: 10px;\n"]))),H=(0,Z.ZP)(m.rU)(u||(u=(0,j.Z)(["\ntext-decoration: none;\n"]))),I=function(n){var e=n.location;return(0,y.jsxs)(G,{children:[(0,y.jsx)("li",{children:(0,y.jsx)(H,{to:"cast",state:e.state,children:"Cast"})}),(0,y.jsx)("li",{children:(0,y.jsx)(H,{to:"reviews",state:e.state,children:"Reviews"})})]})};function O(){var n=(0,h.UO)(),e=(0,f.useState)(),t=(0,d.Z)(e,2),r=t[0],a=t[1],i=(0,h.TH)();return(0,f.useEffect)((function(){function e(){return(e=(0,l.Z)(x().mark((function e(){var t;return x().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,(0,v.gi)(n.movieId);case 3:t=e.sent,a(t),e.next=9;break;case 7:e.prev=7,e.t0=e.catch(0);case 9:case"end":return e.stop()}}),e,null,[[0,7]])})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[n.movieId]),(0,y.jsx)("div",{children:r&&(0,y.jsxs)(y.Fragment,{children:[(0,y.jsx)(k,{location:i}),(0,y.jsxs)(F,{children:[(0,y.jsx)(P,{movie:r}),(0,y.jsx)(C,{movie:r})]}),(0,y.jsxs)("div",{children:[(0,y.jsx)("h4",{children:"Additional information"}),(0,y.jsx)(I,{location:i}),(0,y.jsx)(f.Suspense,{fallback:(0,y.jsxs)("div",{children:[" ",(0,y.jsx)("h1",{children:"Page error. Please reload again"})]}),children:(0,y.jsx)(h.j3,{})})]})]})})}},3504:function(n,e,t){t.d(e,{Mt:function(){return o},Vi:function(){return u},gi:function(){return l},nd:function(){return d},p1:function(){return p}});var r=t(5861),a=t(4687),i=t.n(a),c=t(1243),s="891cc72aafe06da2b3bebc54fcfb98d7";c.Z.defaults.baseURL="https://api.themoviedb.org/3/";var o=function(){var n=(0,r.Z)(i().mark((function n(){var e;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("trending/movie/day?api_key=".concat(s,"&language=en-US"));case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),u=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("/search/movie?api_key=".concat(s,"&query=").concat(e,"&language=en-US"));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"?language=en-US&api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),d=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/credits?language=en-US&api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),p=function(){var n=(0,r.Z)(i().mark((function n(e){var t;return i().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,c.Z.get("movie/".concat(e,"/reviews?language=en-US&api_key=").concat(s));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()}}]);
//# sourceMappingURL=252.72f8e8da.chunk.js.map