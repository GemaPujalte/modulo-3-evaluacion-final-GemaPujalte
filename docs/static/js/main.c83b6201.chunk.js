(this["webpackJsonpmy-react-project"]=this["webpackJsonpmy-react-project"]||[]).push([[0],{15:function(e,t,n){},29:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(0),s=n(17),i=n.n(s),a=n(8),j=n(14),o=(n(15),function(e){return fetch("https://raw.githubusercontent.com/Adalab/rick-y-morty/master/data/rick-y-morty.json").then((function(e){return e.json()})).then((function(e){return e.results}))}),d=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsx)(a.b,{to:"/character-detail/".concat(e.id),className:"link",children:Object(c.jsxs)("article",{children:[Object(c.jsx)("img",{src:e.image,title:e.name,alt:"Este personaje es : ".concat(e.name," ")}),Object(c.jsx)("h3",{children:e.name}),Object(c.jsx)("p",{children:e.species})]})})})},l=function(e){return Object(c.jsxs)("form",{children:[Object(c.jsx)("label",{htmlFor:"name",children:"Filtrar por nombre"}),Object(c.jsx)("input",{type:"text",id:"name",onChange:function(t){e.handleFilter(t.target.value)}})]})},h=function(e){var t=e.characters.map((function(e,t){return Object(c.jsx)(d,{id:e.id,title:e.name,image:e.image,name:e.name,species:e.species},t)}));return Object(c.jsxs)("div",{children:[Object(c.jsx)(l,{handleFilter:e.handleFilter}),Object(c.jsx)("section",{children:t})]})},u=function(e){return Object(c.jsx)(c.Fragment,{children:Object(c.jsxs)("article",{children:[Object(c.jsx)("img",{src:e.img,alt:"Este personaje es : ".concat(e.name," ")}),Object(c.jsx)("h2",{children:"Name: ".concat(e.name)}),Object(c.jsxs)("p",{children:["Status: ",e.status]}),Object(c.jsxs)("p",{children:[" Species: ",e.species]}),Object(c.jsxs)("p",{children:["Origin: ",e.origin]}),Object(c.jsxs)("p",{children:["Episodes: ",e.episode]})]})})},m=n.p+"static/media/logo.de13d484.png",b=function(){return Object(c.jsx)("header",{className:"header",children:Object(c.jsx)("img",{className:"header__title__image",src:m,alt:"Rick and Morty Cards",title:"Rick and Morty Cards"})})},p=n(2),O=function(){var e=Object(r.useState)([]),t=Object(j.a)(e,2),n=t[0],s=t[1],i=Object(r.useState)(""),a=Object(j.a)(i,2),d=a[0],l=a[1];Object(r.useEffect)((function(){o().then((function(e){s(e)}))}),[]);var m=n.filter((function(e){return e.name.toLowerCase().includes(d.toLowerCase())}));return Object(c.jsxs)("div",{children:[Object(c.jsx)(b,{}),Object(c.jsxs)(p.c,{children:[Object(c.jsx)(p.a,{exact:!0,path:"/",children:Object(c.jsx)(h,{characters:m,handleFilter:function(e){l(e)}})}),Object(c.jsx)(p.a,{path:"/character-detail/:id",component:function(e){var t=parseInt(e.match.params.id),r=n.find((function(e){return t===parseInt(e.id)}));return r?Object(c.jsx)(u,{img:r.image,name:r.name,status:r.status,species:r.species,origin:r.origin.name,episode:r.episode.length}):Object(c.jsx)("p",{children:"Personaje no encontrado"})}})]})]})};i.a.render(Object(c.jsx)(a.a,{children:Object(c.jsx)(O,{})}),document.getElementById("root"))}},[[29,1,2]]]);
//# sourceMappingURL=main.c83b6201.chunk.js.map