"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[936],{1955:function(t,e,n){n.d(e,{$T:function(){return u},AC:function(){return s},Fv:function(){return c},Qu:function(){return o},_k:function(){return a}});var i=n(4569),r=n.n(i)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"2686b3f0aebdd48d7f6093d290775aa4"}});function a(){return r.get("trending/all/day").then((function(t){return t.data}))}function c(t){return r.get("search/movie?query=".concat(t,"&page=1")).then((function(t){return t.data}))}function o(t){return r.get("movie/".concat(t,"?")).then((function(t){return t.data}))}function s(t){return r.get("movie/".concat(t,"/credits?")).then((function(t){return t.data}))}function u(t){return r.get("movie/".concat(t,"/reviews?"))}},1510:function(t,e,n){n.d(e,{e:function(){return _}});var i=n(6731),r=n(470),a="MovieList_list__yjDCC",c="MovieList_item__tDivI",o="MovieList_img__Tmz2C",s="MovieList_wraper__Ptq3+",u="MovieList_title__QyMtJ",d="MovieList_link__+cn-g",f=n(7359),l=n(184),_=function(t){var e=t.movies,n=(0,r.TH)();return(0,l.jsx)("ul",{className:a,children:e.map((function(t){var e,r;return(0,l.jsx)("li",{className:c,children:(0,l.jsxs)(i.rU,{to:"/movies/".concat(t.id),state:{from:n},className:d,children:[(0,l.jsx)("img",{className:o,src:t.poster_path?"".concat("https://image.tmdb.org/t/p/w500/").concat(t.poster_path):f,alt:null!==(e=t.title)&&void 0!==e?e:t.name}),(0,l.jsx)("div",{className:s,children:(0,l.jsx)("h3",{className:u,children:null!==(r=t.title)&&void 0!==r?r:t.name})})]})},t.id)}))})}},4936:function(t,e,n){n.r(e),n.d(e,{default:function(){return u}});var i=n(885),r=n(2791),a={},c=n(1955),o=n(1510),s=n(184);function u(){var t=(0,r.useState)([]),e=(0,i.Z)(t,2),n=e[0],u=e[1];return(0,r.useEffect)((function(){c._k().then((function(t){u(t.results)}))}),[]),(0,s.jsxs)("div",{className:a.container,children:[(0,s.jsx)("h1",{children:"Trending today"}),(0,s.jsx)(o.e,{movies:n})]})}},7359:function(t,e,n){t.exports=n.p+"static/media/1200px-No-Image-Placeholder.svg.6e33a3c8cbe2cddf7375.png"}}]);
//# sourceMappingURL=936.57169d35.chunk.js.map