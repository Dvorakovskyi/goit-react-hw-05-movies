"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[57,854],{8974:function(e,t,n){n.r(t),n.d(t,{default:function(){return w}});var a,r,i,c,o=n(9439),s=n(2791),h={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTE3NmZjNDE2MzI4ZTk1ZGY5ZWFlMWE5MmExOTZkYSIsInN1YiI6IjY0NzQ5YmNmZGQ3MzFiMmQ3OGJhM2VhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yI8oxgZajMgWItmBQF3P_YhUKz9fcoHMEmZxHaInDx0"}},l=n(7689),u=n.p+"static/media/actor.3c4ccf3698588f5496d0.jpg",f=n(854),p=n(168),d=n(6444),m=d.ZP.img(a||(a=(0,p.Z)(["\n  width: 200px;\n  height: 300px;\n"]))),x=d.ZP.ul(r||(r=(0,p.Z)(["\n    display: flex;\n    flex-wrap: wrap;\n    gap: 20px;\n"]))),Z=d.ZP.li(i||(i=(0,p.Z)(["\n    width: 200px;\n    list-style: none;\n    box-shadow: rgba(0, 0, 0, 0.15) 1.95px 1.95px 2.6px;\n"]))),g=d.ZP.p(c||(c=(0,p.Z)(["\n    margin-left: 5px;\n"]))),j=n(184),w=function(){var e=(0,l.UO)().movieId,t=(0,s.useState)([]),n=(0,o.Z)(t,2),a=n[0],r=n[1],i=(0,s.useState)(!1),c=(0,o.Z)(i,2),p=c[0],d=c[1];return(0,s.useEffect)((function(){var t;d(!0),(t=e,fetch("https://api.themoviedb.org/3/movie/".concat(t,"/credits?language=en-US"),h).then((function(e){if(!e.ok)throw new Error(e.status);return e.json()}))).then((function(e){var t=e.cast.map((function(e){var t=e.cast_id,n=e.profile_path,a=e.name,r=e.character;return{cast_id:t,imgPath:null!==n?"".concat("https://image.tmdb.org/t/p/w200").concat(n):u,name:a,character:r}}));r(t)})).catch((function(e){return console.log(e.message)})).finally(d(!1))}),[e]),(0,j.jsxs)("div",{children:[p&&(0,j.jsx)(f.default,{}),(0,j.jsx)(x,{children:a.map((function(e){var t=e.cast_id,n=e.imgPath,a=e.name,r=e.character;return(0,j.jsxs)(Z,{children:[(0,j.jsx)(m,{src:n,alt:a}),(0,j.jsx)(g,{children:a}),(0,j.jsxs)(g,{children:["Character: ",r]})]},t)}))})]})}},854:function(e,t,n){n.r(t);n(2791);var a=n(5243),r=n(184);t.default=function(){return(0,r.jsx)(a.g4,{height:"80",width:"80",radius:"9",color:"#d12b19",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}},168:function(e,t,n){function a(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,{Z:function(){return a}})}}]);
//# sourceMappingURL=57.e879031e.chunk.js.map