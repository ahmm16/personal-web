(this["webpackJsonppersonal-web"]=this["webpackJsonppersonal-web"]||[]).push([[0],{165:function(e,a,t){},166:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t(24),i=t.n(n),o=t(104),r=t(122),c=t(25),l=t(54),d=t(170),u=t(174),b=t(171),j=t(73),p=t(42),m=t(172),x=t(177),h=t(176),O=t(70),f=t(32),g=t(28),y=t(179),v=t(178),C=t(183),k=t(184),S=t(185),w=t(186),M=t(6),A=d.a.Header,T=function(){var e=Object(s.useState)(0),a=Object(l.a)(e,1)[0],t=Object(s.useState)(""),n=Object(l.a)(t,2),i=n[0],o=n[1],r=Object(g.c)("experience"),c=Object(g.c)("skills"),d=Object(g.c)("courses"),u=Object(g.c)("collabs");return Object(M.jsx)(y.a,{offsetTop:a,children:Object(M.jsx)(A,{children:Object(M.jsxs)(v.a,{onClick:function(e){return o(e.key)},selectedKeys:i,mode:"horizontal",children:[Object(M.jsx)(v.a.Item,{icon:Object(M.jsx)(C.a,{}),onClick:r.onClick,selected:r.selected,children:"Experiencia"},"experience-menu"),Object(M.jsx)(v.a.Item,{icon:Object(M.jsx)(k.a,{}),onClick:c.onClick,selected:c.selected,children:"Skills"},"skills-menu"),Object(M.jsx)(v.a.Item,{icon:Object(M.jsx)(S.a,{}),onClick:d.onClick,selected:d.selected,children:"Cursos"},"courses-menu"),Object(M.jsx)(v.a.Item,{icon:Object(M.jsx)(w.a,{}),onClick:u.onClick,selected:u.selected,children:"Collabs"},"collabs-menu")]})})})},L=u.a.Title,R=u.a.Text,z=function(){return Object(M.jsx)("ul",{className:"bg-bubbles",children:[1,2,3,4,5,6,7,8,9,10].map((function(e,a){return Object(M.jsx)("li",{},a)}))})},P=function(e){var a=e.setVisible;return Object(M.jsx)("section",{className:"hero",style:{cursor:"pointer"},onClick:function(){return a(!0)},children:Object(M.jsxs)("div",{className:"overlay",children:[Object(M.jsx)(z,{}),Object(M.jsxs)("div",{className:"content",children:[Object(M.jsx)(L,{children:"Hola!"}),Object(M.jsxs)(R,{children:["Soy",Object(M.jsx)("span",{onClick:function(){return a(!0)},style:{fontWeight:"bold",textDecoration:"underline"},children:"Alex Hern\xe1ndez"}),". Programador JavaScript por profesi\xf3n y por pasi\xf3n!"]})]})]})})},q=t(175),E=(t(181),t(182)),N=t(187),D=t(188),I=u.a.Title,F=u.a.Text,G=u.a.Paragraph,H=q.a.Panel,J=function(e){var a=e.data,t=Object(s.useState)(!1),n=Object(l.a)(t,2),i=n[0];n[1];return Object(M.jsx)(q.a,{onChange:function(){console.log("click")},bordered:!1,expandIcon:function(e){var a=e.isActive;return Object(M.jsx)(D.a,{rotate:a?90:0})},children:a&&a.map((function(e,a){var t,s,n,o;return Object(M.jsxs)(H,{header:"".concat(e.companyName),extra:(o=e.url,Object(M.jsx)(N.a,{onClick:function(e){window.open(o,"_blank")}})),children:[Object(M.jsxs)(I,{level:5,children:[e.roll," | ",e.dateRange," "]}),Object(M.jsx)(G,{children:e.dailyFunctions}),Object(M.jsx)(G,{children:null===(t=e.skills)||void 0===t?void 0:t.title}),Object(M.jsx)(G,{children:null===(s=e.skills)||void 0===s?void 0:s.bullets.map((function(e,a){return Object(M.jsx)(E.a,{color:"processing",children:e},a)}))}),(null===e||void 0===e?void 0:e.projects)&&Object(M.jsx)(F,{children:"Proyectos: "}),Object(M.jsx)("ul",{children:null===e||void 0===e||null===(n=e.projects)||void 0===n?void 0:n.map((function(e,a){return Object(M.jsx)("li",{children:Object(M.jsxs)(G,{ellipsis:!i&&{rows:3,expandable:!0,symbol:"mostrar m\xe1s"},children:[e.name,":  ",Object(O.a)(e.resume)]})},a)}))})]},a)}))})},W=t(119),B=t.n(W),V=function(e){var a=e.data;return Object(M.jsx)(B.a,{options:null===a||void 0===a?void 0:a.options,series:null===a||void 0===a?void 0:a.series,type:"treemap",height:380})},Q=t(180),_=function(e){var a=e.data;return Object(M.jsx)(Q.a,{mode:"left",style:{padding:"20px 40px 0px 0px"},children:a.map((function(e,a){return Object(M.jsx)(Q.a.Item,{label:e.show?e.date:"",children:e.title},a)}))})},U=t(173),K=t(189),Z=t(190),X=(t.p,t.p+"static/media/alex2.d53381b2.png"),Y=(U.a.Meta,u.a.Text),$=function(e){var a=e.data;return Object(M.jsxs)(U.a,{bordered:!1,style:{justifyContent:"center",textAlign:"center"},children:[Object(M.jsx)(h.a,{size:120,src:X,style:{marginBottom:10}}),Object(M.jsx)("br",{}),Object(M.jsx)(Y,{children:a.name}),Object(M.jsx)("br",{}),Object(M.jsx)(Y,{type:"secondary",children:a.roll}),Object(M.jsx)("br",{}),Object(M.jsxs)(Y,{children:[Object(M.jsx)(K.a,{})," ",a.email]}),Object(M.jsx)("br",{}),Object(M.jsxs)(Y,{children:[Object(M.jsx)(Z.a,{}),Object(M.jsx)("a",{title:"linkedin",href:a.socialNetworks.url,target:"_blank",children:a.socialNetworks.name})]})]})},ee=t(191),ae=d.a.Footer,te=function(){return Object(M.jsxs)(ae,{children:["Made with ",Object(M.jsx)(ee.a,{})," by Alex"]})},se=d.a.Content,ne=u.a.Text,ie=function(){var e=Object(s.useState)(!1),a=Object(l.a)(e,2),t=a[0],n=a[1],i=Object(s.useState)("left"),o=Object(l.a)(i,2),r=o[0];o[1];return Object(M.jsx)(d.a,{className:"layout",children:Object(M.jsxs)(g.a,{children:[Object(M.jsx)(T,{}),Object(M.jsx)(P,{setVisible:n}),Object(M.jsxs)(g.b,{id:"experience",children:[Object(M.jsx)(b.a,{children:Object(M.jsx)(ne,{children:"Experiencia"})}),Object(M.jsx)(se,{children:Object(M.jsx)(j.a,{justify:"space-around",children:Object(M.jsx)(p.a,{xs:24,sm:18,children:Object(M.jsx)(J,{data:f.a.experience})})})})]}),Object(M.jsxs)(g.b,{id:"skills",children:[Object(M.jsx)(b.a,{children:Object(M.jsx)(ne,{children:"Tecnolog\xedas usadas mensualmente"})}),Object(M.jsx)(se,{children:Object(M.jsx)(j.a,{justify:"space-around",children:Object(M.jsx)(p.a,{xs:24,sm:18,children:Object(M.jsx)(V,{data:null===f.a||void 0===f.a?void 0:f.a.skills})})})})]}),Object(M.jsxs)(g.b,{id:"courses",children:[Object(M.jsx)(b.a,{children:Object(M.jsx)(ne,{children:"Cursos realizados"})}),Object(M.jsx)(se,{children:Object(M.jsx)(j.a,{justify:"space-around",children:Object(M.jsx)(p.a,{xs:24,sm:18,children:Object(M.jsx)(m.b,{style:{backgroundColor:"#fff"},bordered:!0,children:Object(M.jsx)(_,{data:null===f.a||void 0===f.a?void 0:f.a.courses})})})})})]}),Object(M.jsx)(x.a,{placement:r,closable:!1,onClose:function(){n(!1)},visible:t,children:Object(M.jsx)(j.a,{justify:"space-around",children:Object(M.jsx)(p.a,{xs:24,children:Object(M.jsx)($,{data:null===f.a||void 0===f.a?void 0:f.a.personalData})})})},r),Object(M.jsxs)(g.b,{id:"collabs",children:[Object(M.jsx)(b.a,{children:Object(M.jsx)(ne,{children:"Colaboraciones"})}),Object(M.jsx)(se,{children:Object(M.jsx)(j.a,{justify:"space-around",children:Object(M.jsx)(p.a,{xs:24,sm:18,children:Object(M.jsx)(m.b,{style:{backgroundColor:"#fff"},bordered:!0,itemLayout:"vertical",size:"large",dataSource:null===f.a||void 0===f.a?void 0:f.a.collaboration,renderItem:function(e){return Object(M.jsxs)(m.b.Item,{extra:Object(M.jsx)("img",{width:272,alt:"logo",src:"https://remittven.co.uk/images/logo3.png"}),children:[Object(M.jsx)(m.b.Item.Meta,{avatar:Object(M.jsx)(h.a,{src:e.avatar}),title:Object(M.jsx)("a",{href:e.href,children:e.title}),description:Object(O.a)(e.description)}),Object(O.a)(e.resume[0]),Object(O.a)(e.resume[1])]},e.name)}})})})})]}),Object(M.jsx)(b.a,{}),Object(M.jsx)(te,{})]})})},oe=function(){return Object(M.jsxs)(c.d,{children:[Object(M.jsx)(c.b,{component:ie,exact:!0,path:"/"}),Object(M.jsx)(c.a,{to:"/"})]})},re=Object(r.a)();var ce=function(){return Object(M.jsx)(o.a,{history:re,basename:"/personal-web/",children:Object(M.jsx)(oe,{})})},le=(t(164),t(165),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,192)).then((function(a){var t=a.getCLS,s=a.getFID,n=a.getFCP,i=a.getLCP,o=a.getTTFB;t(e),s(e),n(e),i(e),o(e)}))});i.a.render(Object(M.jsx)(ce,{}),document.getElementById("root")),le()},32:function(e){e.exports=JSON.parse('{"a":{"personalData":{"location":"Alcobendas, 28100","email":"16ahmm@gmail.com","name":"Alex Hern\xe1ndez","roll":"Desarrollador Web","socialNetworks":{"name":"LinkedIn","url":"http://linkedin.com/in/alex-hern\xe1ndez-m"}},"courses":[{"show":true,"date":2018,"title":"Curso profesional de Git y GitHub."},{"show":false,"date":2018,"title":"Curso b\xe1sico de Vue.js."},{"show":false,"date":2018,"title":"Curso b\xe1sico de React.js."},{"show":true,"date":2019,"title":"Curso profesional de React.js."},{"show":false,"date":2019,"title":"Curso b\xe1sico de Node.js."},{"show":true,"date":2020,"title":"Curso b\xe1sico React Native.js."},{"show":false,"date":2020,"title":"Curso b\xe1sico Cypress.js."},{"show":true,"date":2021,"title":"Curso b\xe1sico DevOps - GitLab."}],"skills":{"series":[{"data":[{"x":"React","y":100},{"x":"JavaScript","y":100},{"x":"HTML5","y":100},{"x":"CSS3/SASS","y":100},{"x":"Gitlab","y":100},{"x":"Node","y":70},{"x":"Vue","y":50},{"x":"React Native","y":50},{"x":"Express","y":70},{"x":"MongoDB","y":60},{"x":"Moongose","y":60},{"x":"Redux","y":50},{"x":"GraphQL","y":15},{"x":"MySQL","y":15}]}],"options":{"legend":{"show":false},"chart":{"height":370,"type":"treemap"}}},"studies":[{"date":"2013 - 2015","name":"U.P.M.","title":"Ing. Alimentaria. Madrid, Espa\xf1a.","location":"Madrid, Espa\xf1a."},{"date":"2015 - 2017","name":"I.E.S El Lago.","title":"Grado Superior D.A.W.M.I.","location":"Madrid, Espa\xf1a."}],"experience":[{"companyName":"Sngular (actualmente)","url":"https://www.sngular.com/es/","roll":"Desarrollador FrontEnd","dateRange":"Feb 2020 \u2013 actualidad.","projects":[{"name":"Formaci\xf3n/Proyecto interno Sngular","resume":"Creaci\xf3n de un sistema de Dise\xf1o basado en Tokens, WebComponents con Polymer y Lit Elements."},{"name":"Colaboraci\xf3n con Cabify","resume":"Esta colaboraci\xf3n consisti\xf3 en el desarrollo e  implementaci\xf3n de una nueva interfaz en el proceso de onboarding de cada posible conductor de Cabify. <br /> Anteriormente, Cabify utilizaba una herramienta llamada Fountain, esta herramienta fue sustituida por una nueva aplicaci\xf3n mucho m\xe1s amigable, usable, intuitiva y adaptable para cada proceso de onboarding de los diferentes pa\xedses en los que act\xfaa Cabify.  <br /><br /> La <b>parte Front</b> de este proyecto se realiz\xf3 mediante el <u>Framework React.js</u> debido a que es una tecnolog\xeda con la que Cabify trabaja habitualmente. Utilizado en su \xfaltima versi\xf3n y haciendo uso de sus \xfaltimas actualizaciones, para el manejo del estado de la aplicaci\xf3n globalmente se hizo uso de <b>React.createContext</b>. A parte, el manejo de errores se control\xf3 mediante una integraci\xf3n con la herramienta <u>Rollbar</u> que permite trazar todas las interacciones y errores que se producen en la aplicaci\xf3n. Adem\xe1s, esta aplicaci\xf3n necesitaba estar conectada con los siguientes servicios: <u>Google Tag Manager</u> y <u>Amplitude</u> para el tracking continuo y las conversiones que los diferentes departamentos de Cabify quer\xedan realizar sobre la aplicaci\xf3n.  <br /><br />La <b>parte Back</b> de esta aplicaci\xf3n se realiz\xf3 en <u>Node.js</u> junto con <u>Express.js</u>. La funci\xf3n principal de este BackEnd es la de interactuar con la herramienta Fountain que es la que nos provee todos los datos que necesitamos recolectar de cada usuario de la Aplicaci\xf3n. A parte, con esta nueva interfaz se consigue que la herramienta Fountain tenga s\xf3lo la funci\xf3n de almacenamiento y no la de interfaz que era poco amigable y usable para los usuarios."}],"skills":{"title":"Trabaj\xe9 diariamente con las siguientes tecnolog\xedas:","bullets":["JavaScript","React","Redux","Node","Express","HTML5","CSS3","SASS","MongoDB","Cypress","Git","GitLab","Rollbar","Amplitude"]}},{"companyName":"Digi Mobil","url":"https://www.digimobil.es/","roll":"Desarrollador Web","dateRange":"Ene 2019  \u2013 Ene 2020.","projects":[{"name":"MiCuentaDigi (1 a\xf1o)","resume":"Mis funciones fueron las de desarrollar, mejorar y mantener una aplicaci\xf3n web en la que puedes consultar tus datos personales, facturas, saldo, realizar cambios de productos y muchas m\xe1s funciones dentro de la aplicaci\xf3n. Para entender mejor el contexto, Digi mobil es una operadora telef\xf3nica y con esta aplicaci\xf3n se consigui\xf3 una mejor manera de que los clientes pudieran consultar sus l\xedneas telef\xf3nicas."}],"skills":{"title":"Trabaj\xe9 diariamente con las siguientes tecnolog\xedas:","bullets":["JavaScript","React","Redux","HTML5","CSS3","SASS","PHP(Zend framework 3)","GraphQL","MySQL","MongoDB","Cypress","Git","GitLab"]}},{"companyName":"Bookassist","url":"https://bookassist.org/es","roll":"Desarrollador Web","dateRange":"Apr 2017 - Ene 2019.","dailyFunctions":"Mis funciones fueron dise\xf1ar, maquetar, mantener y desarrollar p\xe1ginas webs para hoteles, el desarrollo de un CMS y la mejora de un portfolio existente.","projects":[{"name":"CMS (6 meses)","resume":"Gracias a la implementaci\xf3n de este CMS, el cliente hotelero ten\xeda a su disposici\xf3n la posibilidad de modificar el contenido (datos propios del hotel, im\xe1genes de habitaciones, logos, etc) de su p\xe1gina web."},{"name":"Redise\xf1o Portfolio (1 mes)","resume":"El principal objetivo de este proyecto era la mejora y redise\xf1o del portfolio existente. Con este nuevo portfolio conseguimos mostrar de una forma m\xe1s usable e intuitiva nuestros templates al cliente."},{"name":"Mejoras en nuestros templates (trabajo diario y continuo)","resume":"Trabaj\xe1bamos con 8 templates para que los clientes pudieran elegir distintos dise\xf1os para sus p\xe1ginas webs. Estos templates a medida que pasaba el tiempo requer\xedan nuevas actualizaciones tanto en dise\xf1o como en programaci\xf3n."}],"skills":{"title":"Trabaj\xe9 diariamente con las siguientes tecnolog\xedas:","bullets":["JavaScript","JQuery","PHP7","Git","HTML5","CSS3","SASS","Adobe Photoshop","Adobe Illustrator"]}},{"companyName":"Tandem Publicidad","url":"#","roll":"Dise\xf1ador y Desarrollador Web","dateRange":"Jun 2016 - Apr 2017.","dailyFunctions":"Cumpl\xed las funciones de dise\xf1ar y mantener p\xe1ginas Web en WordPress. A parte me dedicaba la creeaci\xf3n de dise\xf1os aprend\xeda mis primeros conceptos sobre Adobe Photoshop y Adobe Illustrator","skills":{"title":"Trabaj\xe9 diariamente con las siguientes tecnolog\xedas:","bullets":["WordPress","Php","JavaScript","HTML5","CSS3","Adobe Photoshop","Adobe Illustrator"]},"projects":[{"name":"Mejoras Webs (trabajo diario y continuo)","resume":"Trabaj\xe1bamos continuamente en mejoras en nuestra web."},{"name":"Dise\xf1os de tarjetas de presentaci\xf3n, creaci\xf3n de logos y otros tipos de dise\xf1os","resume":"La empresa ten\xeda otra vertiente econ\xf3mica en la que se dedicaba de lleno a la creaci\xf3n de diferentes dise\xf1os que los clientes solicitaban."}]}],"collaboration":[{"name":"RemittVen","link":"https://remittven.co.uk/","resume":["Creaci\xf3n de la <a href=\'https://remittven.co.uk/\' title=\'link-remittven\' target=\'_blank\'>p\xe1gina web</a> de la empresa RemittVen.","Creaci\xf3n de la aplicaci\xf3n web de la empresa con la que los usuarios pueden consultar sus servicios, transacciones, beneficiarios y m\xe1s detalles. <br />Tambi\xe9n pueden hacer transferencias dentro de la aplicaci\xf3n gracias a una integraci\xf3n con una plataforma de pago llamada Checkout."],"avatar":"https://remittven.co.uk/images/favicon.png","description":"Remittven es una empresa brit\xe1nica. Cumple plenamente con todos los est\xe1ndares exigidos por una capital financiera como Londres.","reviews":["Seguro y confiable. Lo recomiendo sin reparos","Nunca hab\xeda utilizado un servicio as\xed. Super f\xe1cil. Toda la informaci\xf3n est\xe1 en la p\xe1gina web, te registras, registras la cuenta venezolana y luego es super sencillo el procedimiento. En horas ten\xeda el dinero en S! Super recomendado!"]}]}}')}},[[166,1,2]]]);
//# sourceMappingURL=main.ae183d49.chunk.js.map