(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{10:function(e,t,n){},11:function(e,t,n){"use strict";n.r(t);var c=n(0),r=n(1),i=n.n(r),s=n(4),a=n.n(s),o=n(3),j=(n(10),function(e){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json?search="+e).then((function(e){return e.json()})).then((function(e){return e.results}))}),l=function(e){return Object(c.jsxs)("article",{children:[Object(c.jsx)("img",{src:e.image,title:e.name,alt:"Este personaje es : ".concat(e.name," ")}),Object(c.jsx)("h3",{children:e.name}),Object(c.jsx)("p",{children:e.species})]})},u=function(e){return Object(c.jsxs)("form",{children:[Object(c.jsx)("label",{htmlFor:"name",children:"Filtrar por nombre"}),Object(c.jsx)("input",{type:"text",id:"name",onChange:function(t){e.handleFilter(t.target.value)}})]})},h=function(e){var t=e.characters.map((function(e){return console.log(e.image),Object(c.jsx)(l,{title:e.name,image:e.image,name:e.name,species:e.species},e.id)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)(u,{handleFilter:e.handleFilter}),Object(c.jsx)("section",{children:t})]})},b=function(){var e=Object(r.useState)(""),t=Object(o.a)(e,2),n=t[0],i=(t[1],Object(r.useState)([])),s=Object(o.a)(i,2),a=s[0],l=s[1];Object(r.useEffect)((function(){j(n).then((function(e){console.log(e),l(e)}))}),[n]);return Object(c.jsxs)("div",{children:[Object(c.jsx)("header",{}),Object(c.jsx)("main",{children:Object(c.jsx)(h,{characters:a,handleFilter:function(e){console.log("he cambiado",e)}})})]})};a.a.render(Object(c.jsx)(i.a.StrictMode,{children:Object(c.jsx)(b,{})}),document.getElementById("root"))}},[[11,1,2]]]);
//# sourceMappingURL=main.126fd623.chunk.js.map