"use strict";(self.webpackChunkgoit_react_hw_05_movies=self.webpackChunkgoit_react_hw_05_movies||[]).push([[964],{1955:function(e,t,n){n.d(t,{$T:function(){return u},AC:function(){return o},Fv:function(){return c},Qu:function(){return s},_k:function(){return i}});var r=n(4569),a=n.n(r)().create({baseURL:"https://api.themoviedb.org/3/",params:{api_key:"2686b3f0aebdd48d7f6093d290775aa4"}});function i(){return a.get("trending/all/day").then((function(e){return e.data}))}function c(e){return a.get("search/movie?query=".concat(e,"&page=1")).then((function(e){return e.data}))}function s(e){return a.get("movie/".concat(e,"?")).then((function(e){return e.data}))}function o(e){return a.get("movie/".concat(e,"/credits?")).then((function(e){return e.data}))}function u(e){return a.get("movie/".concat(e,"/reviews?"))}},1510:function(e,t,n){n.d(t,{e:function(){return f}});var r=n(6731),a=n(470),i="MovieList_list__yjDCC",c="MovieList_item__tDivI",s="MovieList_img__Tmz2C",o="MovieList_wraper__Ptq3+",u="MovieList_title__QyMtJ",l="MovieList_link__+cn-g",m=n(7359),_=n(184),f=function(e){var t=e.movies,n=(0,a.TH)();return(0,_.jsx)("ul",{className:i,children:t.map((function(e){var t,a;return(0,_.jsx)("li",{className:c,children:(0,_.jsxs)(r.rU,{to:"/movies/".concat(e.id),state:{from:n},className:l,children:[(0,_.jsx)("img",{className:s,src:e.poster_path?"".concat("https://image.tmdb.org/t/p/w500/").concat(e.poster_path):m,alt:null!==(t=e.title)&&void 0!==t?t:e.name}),(0,_.jsx)("div",{className:o,children:(0,_.jsx)("h3",{className:u,children:null!==(a=e.title)&&void 0!==a?a:e.name})})]})},e.id)}))})}},2964:function(e,t,n){n.r(t),n.d(t,{default:function(){return v}});var r=n(885),a=n(2791),i=n(1955),c=n(6731),s="Movies_container__+-Cnt",o=n(7322),u="SearchForm_SearchForm__jbIQn",l="SearchForm_button__UXY06",m="SearchForm_input__HOxJo",_="SearchForm_react_icons__4mZb9",f=n(184),h=function(e){var t=e.onSubmit,n=(e.searchingValue,(0,a.useState)("")),i=(0,r.Z)(n,2),c=i[0],s=i[1];return(0,f.jsxs)("form",{onSubmit:function(e){e.preventDefault(),t(c),s("")},className:u,children:[(0,f.jsx)("button",{type:"submit",className:l,children:(0,f.jsx)(o.dnC,{className:_})}),(0,f.jsx)("input",{className:m,type:"text",autoComplete:"off",autoFocus:!0,placeholder:"Please enter movie name",value:c,onChange:function(e){s(e.target.value)}})]})},d=n(1510);function v(){var e,t=(0,a.useState)(null),n=(0,r.Z)(t,2),o=n[0],u=n[1],l=(0,a.useState)([]),m=(0,r.Z)(l,2),_=m[0],v=m[1],p=(0,c.lr)(),g=(0,r.Z)(p,2),x=g[0],j=g[1],b=null!==(e=x.get("query"))&&void 0!==e?e:"";null===o&&u(b);var N=function(e){u(e),j({query:e})};return(0,a.useEffect)((function(){""!==o&&i.Fv(o).then((function(e){return v(e.results)}))}),[o]),""===o?(0,f.jsx)(f.Fragment,{children:(0,f.jsxs)("h1",{className:s,children:["Name search",(0,f.jsx)(h,{onSubmit:N,searchingValue:b})]})}):(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)("h1",{className:s,children:["Name search",(0,f.jsx)(h,{onSubmit:N})]}),(0,f.jsx)(d.e,{movies:_})]})}},7359:function(e,t,n){e.exports=n.p+"static/media/1200px-No-Image-Placeholder.svg.6e33a3c8cbe2cddf7375.png"}}]);
//# sourceMappingURL=964.665b6427.chunk.js.map