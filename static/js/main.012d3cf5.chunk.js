(this["webpackJsonppersonal-web"]=this["webpackJsonppersonal-web"]||[]).push([[0],{164:function(e,a,t){},165:function(e,a,t){"use strict";t.r(a);var s=t(0),n=t(24),i=t.n(n),o=t(103),r=t(121),c=t(25),l=t(53),d=t(169),u=t(173),b=t(170),j=t(72),p=t(40),m=t(171),x=t(176),h=t(175),O=t(73),g=t(32),f=t(28),y=t(178),v=t(177),C=t(181),k=t(182),S=t(183),w=t(184),A=t(5),M=d.a.Header,T=function(){var e=Object(s.useState)(0),a=Object(l.a)(e,1)[0],t=Object(s.useState)(""),n=Object(l.a)(t,2),i=n[0],o=n[1],r=Object(f.c)("experience"),c=Object(f.c)("skills"),d=Object(f.c)("courses"),u=Object(f.c)("collabs");return Object(A.jsx)(y.a,{offsetTop:a,children:Object(A.jsx)(M,{children:Object(A.jsxs)(v.a,{onClick:function(e){return o(e.key)},selectedKeys:i,mode:"horizontal",children:[Object(A.jsx)(v.a.Item,{icon:Object(A.jsx)(C.a,{}),onClick:r.onClick,selected:r.selected,children:"Experiencia"},"experience-menu"),Object(A.jsx)(v.a.Item,{icon:Object(A.jsx)(k.a,{}),onClick:c.onClick,selected:c.selected,children:"Skills"},"skills-menu"),Object(A.jsx)(v.a.Item,{icon:Object(A.jsx)(S.a,{}),onClick:d.onClick,selected:d.selected,children:"Cursos"},"courses-menu"),Object(A.jsx)(v.a.Item,{icon:Object(A.jsx)(w.a,{}),onClick:u.onClick,selected:u.selected,children:"Collabs"},"collabs-menu")]})})})},P=u.a.Title,z=u.a.Text,L=function(){return Object(A.jsx)("ul",{className:"bg-bubbles",children:[1,2,3,4,5,6,7,8,9,10].map((function(e,a){return Object(A.jsx)("li",{},a)}))})},R=function(e){var a=e.setVisible;return Object(A.jsx)("section",{className:"hero",style:{cursor:"pointer"},onClick:function(){return a(!0)},children:Object(A.jsxs)("div",{className:"overlay",children:[Object(A.jsx)(L,{}),Object(A.jsxs)("div",{className:"content",children:[Object(A.jsx)(P,{children:"{Hola Mundo}"}),Object(A.jsxs)(z,{children:["Soy",Object(A.jsx)("span",{style:{fontWeight:"bold",textDecoration:"underline"},children:"Alex Hern\xe1ndez"}),". Programador JavaScript por profesi\xf3n y por pasi\xf3n!"]}),Object(A.jsx)(z,{type:"secondary",style:{textAlign:"right",fontSize:14,borderRadius:2,marginTop:40},children:"Pulsa para ver detalles de contacto"})]})]})})},q=t(174),E=t(179),N=t(185),D=t(186),I=u.a.Title,F=u.a.Text,G=u.a.Paragraph,H=q.a.Panel,J=function(e){var a=e.data,t=Object(s.useState)(!1),n=Object(l.a)(t,2),i=n[0];n[1];return Object(A.jsx)(q.a,{onChange:function(){console.log("click")},bordered:!1,expandIcon:function(e){var a=e.isActive;return Object(A.jsx)(D.a,{rotate:a?90:0})},children:a&&a.map((function(e,a){var t,s,n,o;return Object(A.jsxs)(H,{header:"".concat(e.companyName),extra:(o=e.url,Object(A.jsx)(N.a,{onClick:function(e){window.open(o,"_blank")}})),children:[Object(A.jsxs)(I,{level:5,children:[e.roll," | ",e.dateRange," "]}),Object(A.jsx)(G,{children:e.dailyFunctions}),Object(A.jsx)(G,{children:null===(t=e.skills)||void 0===t?void 0:t.title}),Object(A.jsx)(G,{children:null===(s=e.skills)||void 0===s?void 0:s.bullets.map((function(e,a){return Object(A.jsx)(E.a,{color:"processing",children:e},a)}))}),(null===e||void 0===e?void 0:e.projects)&&Object(A.jsx)(F,{children:"Proyectos: "}),Object(A.jsx)("ul",{children:null===e||void 0===e||null===(n=e.projects)||void 0===n?void 0:n.map((function(e,a){return Object(A.jsx)("li",{children:Object(A.jsxs)(G,{ellipsis:!i&&{rows:3,expandable:!0,symbol:"mostrar m\xe1s"},children:[e.name,":  ",Object(O.a)(e.resume)]})},a)}))})]},a)}))})},W=t(187),B=t(188),V=t(118),Q=t.n(V),_=u.a.Paragraph,U=function(e){var a=e.data;return Object(A.jsxs)(A.Fragment,{children:[Object(A.jsxs)(_,{style:{marginLeft:10},children:[Object(A.jsx)(W.a,{style:{fontSize:16,color:"rgba(53,173,216,0.85)"}})," 100: Uso diario. | ",Object(A.jsx)(B.a,{style:{fontSize:16,color:"rgba(155,214,236,0.85)"}})," 10: Poco uso mensual."]}),Object(A.jsx)(Q.a,{options:null===a||void 0===a?void 0:a.options,series:null===a||void 0===a?void 0:a.series,type:"treemap",height:380})]})},K=t(180),Z=function(e){var a=e.data;return Object(A.jsx)(K.a,{mode:"left",style:{padding:"20px 40px 0px 0px"},children:a.map((function(e,a){return Object(A.jsx)(K.a.Item,{label:e.show?e.date:"",children:e.title},a)}))})},X=t(172),Y=t(189),$=t(190),ee=(t.p,t.p+"static/media/alex2.d53381b2.png"),ae=(X.a.Meta,u.a.Text),te=function(e){var a=e.data;return Object(A.jsxs)(X.a,{bordered:!1,style:{justifyContent:"center",textAlign:"center"},children:[Object(A.jsx)(h.a,{size:120,src:ee,style:{marginBottom:10}}),Object(A.jsx)("br",{}),Object(A.jsx)(ae,{children:a.name}),Object(A.jsx)("br",{}),Object(A.jsx)(ae,{type:"secondary",children:a.roll}),Object(A.jsx)("br",{}),Object(A.jsxs)(ae,{children:[Object(A.jsx)(Y.a,{})," ",a.email]}),Object(A.jsx)("br",{}),Object(A.jsxs)(ae,{children:[Object(A.jsx)($.a,{}),Object(A.jsx)("a",{title:"linkedin",href:a.socialNetworks.url,target:"_blank",children:a.socialNetworks.name})]})]})},se=t(191),ne=d.a.Footer,ie=function(){return Object(A.jsxs)(ne,{children:["Made with ",Object(A.jsx)(se.a,{})," by Alex"]})},oe=d.a.Content,re=u.a.Text,ce=u.a.Paragraph,le=function(){var e=Object(s.useState)(!1),a=Object(l.a)(e,2),t=a[0],n=a[1],i=Object(s.useState)("left"),o=Object(l.a)(i,2),r=o[0];o[1];return Object(A.jsx)(d.a,{className:"layout",children:Object(A.jsxs)(f.a,{children:[Object(A.jsx)(T,{}),Object(A.jsx)(R,{setVisible:n}),Object(A.jsxs)(f.b,{id:"experience",children:[Object(A.jsx)(b.a,{children:Object(A.jsx)(re,{children:"Experiencia en empresas"})}),Object(A.jsx)(oe,{children:Object(A.jsx)(j.a,{justify:"space-around",children:Object(A.jsx)(p.a,{xs:24,sm:18,children:Object(A.jsx)(J,{data:g.a.experience})})})})]}),Object(A.jsxs)(f.b,{id:"skills",children:[Object(A.jsx)(b.a,{children:Object(A.jsx)(re,{children:"Tecnolog\xedas usadas mensualmente"})}),Object(A.jsx)(oe,{children:Object(A.jsx)(j.a,{justify:"space-around",children:Object(A.jsx)(p.a,{xs:24,sm:18,children:Object(A.jsx)(U,{data:null===g.a||void 0===g.a?void 0:g.a.skills})})})})]}),Object(A.jsxs)(f.b,{id:"courses",children:[Object(A.jsx)(b.a,{children:Object(A.jsx)(re,{children:"Cursos realizados"})}),Object(A.jsx)(oe,{children:Object(A.jsx)(j.a,{justify:"space-around",children:Object(A.jsx)(p.a,{xs:24,sm:18,children:Object(A.jsx)(m.b,{style:{backgroundColor:"#fff"},bordered:!0,children:Object(A.jsx)(Z,{data:null===g.a||void 0===g.a?void 0:g.a.courses})})})})})]}),Object(A.jsx)(x.a,{placement:r,closable:!1,onClose:function(){n(!1)},visible:t,children:Object(A.jsx)(j.a,{justify:"space-around",children:Object(A.jsx)(p.a,{xs:24,children:Object(A.jsx)(te,{data:null===g.a||void 0===g.a?void 0:g.a.personalData})})})},r),Object(A.jsxs)(f.b,{id:"collabs",children:[Object(A.jsx)(b.a,{children:Object(A.jsx)(re,{children:"Colaboraciones"})}),Object(A.jsx)(oe,{children:Object(A.jsx)(j.a,{justify:"space-around",children:Object(A.jsx)(p.a,{xs:24,sm:18,children:Object(A.jsx)(m.b,{style:{backgroundColor:"#fff"},bordered:!0,itemLayout:"vertical",size:"large",dataSource:null===g.a||void 0===g.a?void 0:g.a.collaboration,renderItem:function(e){return Object(A.jsxs)(m.b.Item,{extra:Object(A.jsx)("img",{width:272,alt:"logo",src:"https://remittven.co.uk/images/logo3.png"}),children:[Object(A.jsx)(m.b.Item.Meta,{avatar:Object(A.jsx)(h.a,{src:e.avatar}),title:Object(A.jsx)("a",{href:e.href,children:e.title}),description:Object(O.a)(e.description)}),Object(A.jsx)(ce,{children:"Objetivos: "}),Object(A.jsx)("ul",{children:e.resume.map((function(e,a){return Object(A.jsx)("li",{children:Object(O.a)(e)},a)}))})]},e.name)}})})})})]}),Object(A.jsx)(b.a,{}),Object(A.jsx)(ie,{})]})})},de=function(){return Object(A.jsxs)(c.d,{children:[Object(A.jsx)(c.b,{component:le,exact:!0,path:"/"}),Object(A.jsx)(c.a,{to:"/"})]})},ue=Object(r.a)();var be=function(){return Object(A.jsx)(o.a,{history:ue,basename:"/personal-web/",children:Object(A.jsx)(de,{})})},je=(t(163),t(164),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,192)).then((function(a){var t=a.getCLS,s=a.getFID,n=a.getFCP,i=a.getLCP,o=a.getTTFB;t(e),s(e),n(e),i(e),o(e)}))});i.a.render(Object(A.jsx)(be,{}),document.getElementById("root")),je()},32:function(e){e.exports=JSON.parse('{"a":{"personalData":{"location":"Alcobendas, 28100","email":"16ahmm@gmail.com","name":"Alex Hern\xe1ndez","roll":"Desarrollador Web","socialNetworks":{"name":"LinkedIn","url":"http://linkedin.com/in/alex-hern\xe1ndez-m"}},"courses":[{"show":true,"date":2018,"title":"Curso profesional de Git y GitHub."},{"show":false,"date":2018,"title":"Curso b\xe1sico de Vue.js."},{"show":false,"date":2018,"title":"Curso b\xe1sico de React.js."},{"show":true,"date":2019,"title":"Curso profesional de React.js."},{"show":false,"date":2019,"title":"Curso b\xe1sico de Node.js."},{"show":true,"date":2020,"title":"Curso b\xe1sico React Native.js."},{"show":false,"date":2020,"title":"Curso b\xe1sico Cypress.js."},{"show":true,"date":2021,"title":"Curso b\xe1sico DevOps - GitLab."}],"skills":{"series":[{"data":[{"x":"React","y":100},{"x":"JavaScript","y":100},{"x":"HTML5","y":100},{"x":"CSS3/SASS","y":100},{"x":"Gitlab","y":100},{"x":"Node","y":70},{"x":"Vue","y":50},{"x":"React Native","y":50},{"x":"Express","y":70},{"x":"MongoDB","y":60},{"x":"Moongose","y":60},{"x":"Redux","y":50},{"x":"GraphQL","y":15},{"x":"MySQL","y":15}]}],"options":{"colors":["#00bbff"],"legend":{"show":false},"chart":{"height":370,"type":"treemap"}}},"studies":[{"date":"2013 - 2015","name":"U.P.M.","title":"Ing. Alimentaria. Madrid, Espa\xf1a.","location":"Madrid, Espa\xf1a."},{"date":"2015 - 2017","name":"I.E.S El Lago.","title":"Grado Superior D.A.W.M.I.","location":"Madrid, Espa\xf1a."}],"experience":[{"companyName":"Sngular (actualmente)","url":"https://www.sngular.com/es/","roll":"Desarrollador FrontEnd","dateRange":"Feb 2020 \u2013 actualidad.","projects":[{"name":"Formaci\xf3n/Proyecto interno Sngular","resume":"Creaci\xf3n de un sistema de Dise\xf1o basado en Tokens, WebComponents con Polymer y Lit Elements."},{"name":"Colaboraci\xf3n con Cabify","resume":"Esta colaboraci\xf3n consisti\xf3 en el desarrollo e  implementaci\xf3n de una nueva interfaz en el proceso de onboarding de cada posible conductor de Cabify. <br /> Anteriormente, Cabify utilizaba una herramienta llamada Fountain, esta herramienta fue sustituida por una nueva aplicaci\xf3n mucho m\xe1s amigable, usable, intuitiva y adaptable para cada proceso de onboarding de los diferentes pa\xedses en los que act\xfaa Cabify.  <br /><br /> La <b>parte Front</b> de este proyecto se realiz\xf3 mediante el <u>Framework React.js</u> debido a que es una tecnolog\xeda con la que Cabify trabaja habitualmente. Utilizado en su \xfaltima versi\xf3n y haciendo uso de sus \xfaltimas actualizaciones, para el manejo del estado de la aplicaci\xf3n globalmente se hizo uso de <b>React.createContext</b>. A parte, el manejo de errores se control\xf3 mediante una integraci\xf3n con la herramienta <u>Rollbar</u> que permite trazar todas las interacciones y errores que se producen en la aplicaci\xf3n. Adem\xe1s, esta aplicaci\xf3n necesitaba estar conectada con los siguientes servicios: <u>Google Tag Manager</u> y <u>Amplitude</u> para el tracking continuo y las conversiones que los diferentes departamentos de Cabify quer\xedan realizar sobre la aplicaci\xf3n.  <br /><br />La <b>parte Back</b> de esta aplicaci\xf3n se realiz\xf3 en <u>Node.js</u> junto con <u>Express.js</u>. La funci\xf3n principal de este BackEnd es la de interactuar con la herramienta Fountain que es la que nos provee todos los datos que necesitamos recolectar de cada usuario de la Aplicaci\xf3n. A parte, con esta nueva interfaz se consigue que la herramienta Fountain tenga s\xf3lo la funci\xf3n de almacenamiento y no la de interfaz que era poco amigable y usable para los usuarios."}],"skills":{"title":"Trabaj\xe9 diariamente con las siguientes tecnolog\xedas:","bullets":["JavaScript","React","Redux","Node","Express","HTML5","CSS3","SASS","MongoDB","Cypress","Git","GitLab","Rollbar","Amplitude"]}},{"companyName":"Digi Mobil","url":"https://www.digimobil.es/","roll":"Desarrollador Web","dateRange":"Ene 2019  \u2013 Ene 2020.","projects":[{"name":"MiCuentaDigi (1 a\xf1o)","resume":"Mis funciones fueron las de desarrollar, mejorar y mantener una aplicaci\xf3n web en la que puedes consultar tus datos personales, facturas, saldo, realizar cambios de productos y muchas m\xe1s funciones dentro de la aplicaci\xf3n. Para entender mejor el contexto, Digi mobil es una operadora telef\xf3nica y con esta aplicaci\xf3n se consigui\xf3 una mejor manera de que los clientes pudieran consultar sus l\xedneas telef\xf3nicas."}],"skills":{"title":"Trabaj\xe9 diariamente con las siguientes tecnolog\xedas:","bullets":["JavaScript","React","Redux","HTML5","CSS3","SASS","PHP(Zend framework 3)","GraphQL","MySQL","MongoDB","Cypress","Git","GitLab"]}},{"companyName":"Bookassist","url":"https://bookassist.org/es","roll":"Desarrollador Web","dateRange":"Apr 2017 - Ene 2019.","dailyFunctions":"Mis funciones fueron dise\xf1ar, maquetar, mantener y desarrollar p\xe1ginas webs para hoteles, el desarrollo de un CMS y la mejora de un portfolio existente.","projects":[{"name":"CMS (6 meses)","resume":"Gracias a la implementaci\xf3n de este CMS, el cliente hotelero ten\xeda a su disposici\xf3n la posibilidad de modificar el contenido (datos propios del hotel, im\xe1genes de habitaciones, logos, etc) de su p\xe1gina web."},{"name":"Redise\xf1o Portfolio (1 mes)","resume":"El principal objetivo de este proyecto era la mejora y redise\xf1o del portfolio existente. Con este nuevo portfolio conseguimos mostrar de una forma m\xe1s usable e intuitiva nuestros templates al cliente."},{"name":"Mejoras en nuestros templates (trabajo diario y continuo)","resume":"Trabaj\xe1bamos con 8 templates para que los clientes pudieran elegir distintos dise\xf1os para sus p\xe1ginas webs. Estos templates a medida que pasaba el tiempo requer\xedan nuevas actualizaciones tanto en dise\xf1o como en programaci\xf3n."}],"skills":{"title":"Trabaj\xe9 diariamente con las siguientes tecnolog\xedas:","bullets":["JavaScript","JQuery","PHP7","Git","HTML5","CSS3","SASS","Adobe Photoshop","Adobe Illustrator"]}},{"companyName":"Tandem Publicidad","url":"#","roll":"Dise\xf1ador y Desarrollador Web","dateRange":"Jun 2016 - Apr 2017.","dailyFunctions":"Cumpl\xed las funciones de dise\xf1ar y mantener p\xe1ginas Web en WordPress. A parte me dedicaba la creeaci\xf3n de dise\xf1os aprend\xeda mis primeros conceptos sobre Adobe Photoshop y Adobe Illustrator","skills":{"title":"Trabaj\xe9 diariamente con las siguientes tecnolog\xedas:","bullets":["WordPress","Php","JavaScript","HTML5","CSS3","Adobe Photoshop","Adobe Illustrator"]},"projects":[{"name":"Mejoras Webs (trabajo diario y continuo)","resume":"Trabaj\xe1bamos continuamente en mejoras en nuestra web."},{"name":"Dise\xf1os de tarjetas de presentaci\xf3n, creaci\xf3n de logos y otros tipos de dise\xf1os","resume":"La empresa ten\xeda otra vertiente econ\xf3mica en la que se dedicaba de lleno a la creaci\xf3n de diferentes dise\xf1os que los clientes solicitaban."}]}],"collaboration":[{"name":"RemittVen","link":"https://remittven.co.uk/","resume":["Creaci\xf3n de la <a href=\'https://remittven.co.uk/\' title=\'link-remittven\' target=\'_blank\'>p\xe1gina web</a> de la empresa RemittVen.","Creaci\xf3n de la <a href=\'https://remittven.co.uk/AreaCliente\' title=\'link-remittven/AreaCliente\' target=\'_blank\'> aplicaci\xf3n web </a> con la que los usuarios pueden consultar sus servicios, transacciones, beneficiarios y m\xe1s detalles. <br />Tambi\xe9n pueden hacer transferencias dentro de la aplicaci\xf3n gracias a una integraci\xf3n con una plataforma de pago llamada Checkout."],"avatar":"https://remittven.co.uk/images/favicon.png","description":"Remittven es una empresa brit\xe1nica. Cumple plenamente con todos los est\xe1ndares exigidos por una capital financiera como Londres.","reviews":["Seguro y confiable. Lo recomiendo sin reparos","Nunca hab\xeda utilizado un servicio as\xed. Super f\xe1cil. Toda la informaci\xf3n est\xe1 en la p\xe1gina web, te registras, registras la cuenta venezolana y luego es super sencillo el procedimiento. En horas ten\xeda el dinero en S! Super recomendado!"]}]}}')}},[[165,1,2]]]);
//# sourceMappingURL=main.012d3cf5.chunk.js.map