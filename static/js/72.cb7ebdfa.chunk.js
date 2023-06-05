"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[72,854],{854:function(n,e,r){r.r(e);r(2791);var t=r(5243),i=r(184);e.default=function(){return(0,i.jsx)(t.g4,{height:"80",width:"80",radius:"9",color:"#d12b19",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}},559:function(n,e,r){r.d(e,{Hk:function(){return u},iM:function(){return c},qr:function(){return l}});var t,i,o,a=r(168),s=r(6444),c=s.ZP.div(t||(t=(0,a.Z)(["\n    margin-top: 10px;\n    \n"]))),l=s.ZP.li(i||(i=(0,a.Z)(["\n    margin-bottom: 30px;\n    list-style: none;\n"]))),u=s.ZP.span(o||(o=(0,a.Z)(["\nfont-weight: 500;\n"])))},996:function(n,e,r){r.d(e,{F:function(){return c},M:function(){return l}});var t,i,o=r(168),a=r(6444),s=r(1087),c=(0,a.ZP)(s.rU)(t||(t=(0,o.Z)(["\n    font-size: 16px;\n    text-decoration: none;\n    color: black;\n\n    &:hover,\n    &:focus {\n        color: #d12b19;\n    }\n"]))),l=a.ZP.li(i||(i=(0,o.Z)(["\n    margin-bottom: 3px;\n"])))},9499:function(n,e,r){r.d(e,{CK:function(){return u},PP:function(){return c},X0:function(){return l}});var t,i,o,a=r(168),s=r(6444),c=s.ZP.section(t||(t=(0,a.Z)(["\n    min-width: 320px;\n    padding-left: 20px;\n    padding-right: 20px;\n    margin-top: 10px;\n"]))),l=s.ZP.h2(i||(i=(0,a.Z)(["\n    margin: 0;\n"]))),u=s.ZP.ul(o||(o=(0,a.Z)(["\n    margin: 10px 0;\n"])))},9072:function(n,e,r){r.r(e),r.d(e,{default:function(){return k}});var t,i,o,a,s=r(9439),c=r(2791),l=r(1686),u={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTE3NmZjNDE2MzI4ZTk1ZGY5ZWFlMWE5MmExOTZkYSIsInN1YiI6IjY0NzQ5YmNmZGQ3MzFiMmQ3OGJhM2VhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yI8oxgZajMgWItmBQF3P_YhUKz9fcoHMEmZxHaInDx0"}},d=r(7689),h=r(168),f=r(6444),p=r(1087),x=r(9499),m=f.ZP.div(t||(t=(0,h.Z)(["\n  display: flex;\n  gap: 50px;\n  margin-top: 10px;\n"]))),g=(0,f.ZP)(x.X0)(i||(i=(0,h.Z)(["\n  margin-bottom: 20px;\n"]))),Z=f.ZP.h3(o||(o=(0,h.Z)(["\n  margin: 20px 0;\n"]))),v=(0,f.ZP)(p.rU)(a||(a=(0,h.Z)(["\n  text-decoration: none;\n  padding: 0 10px;\n  font-weight: 500;\n  border-radius: 4px;\n  border: 2px solid black;\n  color: black;\n  background-color: #fff;\n  cursor: pointer;\n\n  &:hover,\n  &:focus {\n    border: 2px solid #d12b19;\n    color: #d12b19;\n  }\n"]))),j=r(184),b=function(n){var e=n.movieInfo,r=e.title,t=e.imgPath,i=e.userScore,o=e.overview,a=e.releaseDate,s=e.genres;return(0,j.jsxs)(m,{children:[(0,j.jsx)("img",{src:t,alt:r}),(0,j.jsxs)("div",{children:[(0,j.jsxs)(g,{children:[r," (",a,")"]}),(0,j.jsxs)("p",{children:["User score: ",i,"%"]}),(0,j.jsx)(Z,{children:"Overview"}),(0,j.jsx)("p",{children:o}),(0,j.jsx)(Z,{children:"Genres"}),(0,j.jsx)("p",{children:s})]})]})},w=r(854),P=r(996),I=r(559),k=function(){var n,e=(0,d.UO)().movieId,r=(0,d.TH)(),t=(0,c.useState)([]),i=(0,s.Z)(t,2),o=i[0],a=i[1],h=(0,c.useState)(""),f=(0,s.Z)(h,2),p=f[0],m=f[1],g=(0,c.useState)(!1),Z=(0,s.Z)(g,2),k=Z[0],M=Z[1];return(0,c.useEffect)((function(){var n;M(!0),(n=e,fetch("https://api.themoviedb.org/3/movie/".concat(n,"?language=en-US"),u).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()}))).then((function(n){var e=n.title,r=n.poster_path,t=n.vote_average,i=n.overview,o=n.genres,s=n.release_date;return a({title:e,imgPath:"".concat("https://image.tmdb.org/t/p/w200").concat(r),userScore:Math.round(10*t),overview:i,releaseDate:s.slice(0,4),genres:o.map((function(n){return n.name})).join(" ")})})).catch((function(n){return m(n.message)})).finally(M(!1))}),[e]),(0,j.jsxs)(x.PP,{children:[p&&l.Notify.failure("Something went wrong, please try again later"),k&&(0,j.jsx)(w.default,{}),(0,j.jsx)(v,{to:null!==(n=r.state)&&void 0!==n?n:"/movies",children:"Go back"}),(0,j.jsx)(b,{movieInfo:o}),(0,j.jsxs)(I.iM,{children:[(0,j.jsx)("h3",{children:"Additional information"}),(0,j.jsxs)(x.CK,{children:[(0,j.jsx)(P.M,{children:(0,j.jsx)(P.F,{to:"cast",children:"Cast"})}),(0,j.jsx)(P.M,{children:(0,j.jsx)(P.F,{to:"reviews",children:"Reviews"})})]}),(0,j.jsx)(c.Suspense,{fallback:(0,j.jsx)(w.default,{}),children:(0,j.jsx)(d.j3,{})})]})]})}}}]);
//# sourceMappingURL=72.cb7ebdfa.chunk.js.map