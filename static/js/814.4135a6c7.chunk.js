"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[814,854],{854:function(n,t,e){e.r(t);e(2791);var r=e(5243),i=e(184);t.default=function(){return(0,i.jsx)(r.g4,{height:"80",width:"80",radius:"9",color:"#d12b19",ariaLabel:"three-dots-loading",wrapperStyle:{},wrapperClassName:"",visible:!0})}},8004:function(n,t,e){e.d(t,{F:function(){return u},M:function(){return l}});var r,i,a=e(168),o=e(6444),c=e(1087),u=(0,o.ZP)(c.rU)(r||(r=(0,a.Z)(["\n    font-size: 16px;\n    text-decoration: none;\n    color: black;\n\n    &:hover,\n    &:focus {\n        color: #d12b19;\n    }\n"]))),l=o.ZP.li(i||(i=(0,a.Z)(["\n    margin-bottom: 3px;\n"])))},8250:function(n,t,e){e.d(t,{Z:function(){return c}});e(2791);var r=e(8004),i=e(184),a=function(n){var t=n.id,e=n.title,a=n.name,o=n.location;return(0,i.jsx)(r.M,{children:(0,i.jsx)(r.F,{to:"/movies/".concat(t),state:{from:o},children:e||a})},t)},o=e(9738),c=function(n){var t=n.data,e=n.location;return(0,i.jsx)(o.PP,{children:(0,i.jsx)(o.CK,{children:t.map((function(n){var t=n.id,r=n.title,o=n.name;return(0,i.jsx)(a,{id:t,title:r,name:o,location:e},t)}))})})}},9738:function(n,t,e){e.d(t,{CK:function(){return s},PP:function(){return u},X0:function(){return l}});var r,i,a,o=e(168),c=e(6444),u=c.ZP.section(r||(r=(0,o.Z)(["\n    min-width: 320px;\n    padding-left: 20px;\n    padding-right: 20px;\n    margin-top: 10px;\n"]))),l=c.ZP.h2(i||(i=(0,o.Z)(["\n    margin: 0;\n    margin-top: 10px;\n    padding-left: 20px;\n"]))),s=c.ZP.ul(a||(a=(0,o.Z)(["\n    margin: 10px 0;\n"])))},7814:function(n,t,e){e.r(t),e.d(t,{default:function(){return f}});var r=e(9439),i=e(2791),a=e(5264),o={method:"GET",headers:{accept:"application/json",Authorization:"Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIxNTE3NmZjNDE2MzI4ZTk1ZGY5ZWFlMWE5MmExOTZkYSIsInN1YiI6IjY0NzQ5YmNmZGQ3MzFiMmQ3OGJhM2VhZiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.yI8oxgZajMgWItmBQF3P_YhUKz9fcoHMEmZxHaInDx0"}},c=e(8250),u=e(854),l=e(7689),s=e(9738),d=e(184),f=function(){var n=(0,i.useState)([]),t=(0,r.Z)(n,2),e=t[0],f=t[1],h=(0,i.useState)(""),m=(0,r.Z)(h,2),p=m[0],x=m[1],Z=(0,i.useState)(!1),g=(0,r.Z)(Z,2),j=g[0],I=g[1],v=(0,l.TH)();return(0,i.useEffect)((function(){I(!0),fetch("https://api.themoviedb.org/3/trending/all/day?language=en-US",o).then((function(n){if(!n.ok)throw new Error(n.status);return n.json()})).then((function(n){var t=n.results;return f(t)})).catch((function(n){return x(n.message)})).finally(I(!1))}),[]),(0,d.jsxs)(d.Fragment,{children:[p&&a.Notify.failure("Something went wrong, please try again later"),j&&(0,d.jsx)(u.default,{}),(0,d.jsx)(s.X0,{children:"Trending today"}),(0,d.jsx)(c.Z,{data:e,location:v})]})}}}]);
//# sourceMappingURL=814.4135a6c7.chunk.js.map