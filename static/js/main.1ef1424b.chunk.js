(this["webpackJsonppersonal-web"]=this["webpackJsonppersonal-web"]||[]).push([[0],{178:function(e,t,s){},179:function(e,t,s){"use strict";s.r(t);var a=s(0),o=s(24),n=s.n(o),i=s(108),r=s(129),c=s(25),l=s(49),_=s(183),d=s(187),u=s(191),p=s(75),m=s(43),b=s(184),j=s(185),h=s(189),x=s(196),g=s(60),y=s(33),f=s(57),k=s(195),v=s(192),O=s(198),w=s(199),C=s(200),S=s(201),A=s(194),M=s(6),T=_.a.Header,P=function(e){var t=null;switch(e){case"menu_section_experience":t=Object(M.jsx)(O.a,{});break;case"menu_section_skills":t=Object(M.jsx)(w.a,{});break;case"menu_section_courses":t=Object(M.jsx)(C.a,{});break;case"menu_section_collaborations":t=Object(M.jsx)(S.a,{});break;default:t=null}return t},E=function(e){e.mode;var t=Object(A.a)(),s=t.t,o=t.i18n,n=Object(a.useState)(0),i=Object(l.a)(n,1)[0],r=Object(a.useState)(""),c=Object(l.a)(r,2),_=c[0],d=c[1],u=Object(f.c)();return Object(M.jsx)(k.a,{offsetTop:i,children:Object(M.jsx)(T,{children:Object(M.jsxs)(v.a,{onClick:function(e){return d(e.key)},selectedKeys:_,mode:"horizontal",children:[u.map((function(e){var t=e.id,a=e.onClick,o=e.selected;return Object(M.jsx)(v.a.Item,{icon:P(t),onClick:a,selected:o,children:s(t)},t)})),"es"===o.language&&Object(M.jsx)(v.a.Item,{children:Object(M.jsx)("img",{src:"https://www.countryflags.io/gb/flat/24.png",alt:"",value:"United Kingdom",onClick:function(){return o.changeLanguage("en")}})}),"en"===o.language&&Object(M.jsx)(v.a.Item,{children:Object(M.jsx)("img",{src:"https://www.countryflags.io/es/flat/24.png",alt:"",value:"Spain",onClick:function(){return o.changeLanguage("es")}})})]})})})},R=d.a.Title,q=d.a.Text,L=function(){return Object(M.jsx)("ul",{className:"bg-bubbles",children:[1,2,3,4,5,6,7,8,9,10].map((function(e,t){return Object(M.jsx)("li",{},t)}))})},z=function(e){var t=e.setVisible,s=Object(A.a)().t;return Object(M.jsx)("section",{className:"hero",style:{cursor:"pointer"},onClick:function(){return t(!0)},children:Object(M.jsxs)("div",{className:"overlay",children:[Object(M.jsx)(L,{}),Object(M.jsxs)("div",{className:"content",children:[Object(M.jsx)(R,{children:"{".concat(s("hero_section_title"),"}")}),Object(M.jsx)(q,{children:Object(g.a)(s("hero_section_subtitle"))}),Object(M.jsx)(q,{type:"secondary",className:"hero-details",children:s("hero_section_details")})]})]})})},I=s(188),D=s(202),F=s(203),N=d.a.Title,W=d.a.Text,G=d.a.Paragraph,H=I.a.Panel,J=function(e){var t=e.data,s=Object(A.a)().t,o=Object(a.useState)(!1),n=Object(l.a)(o,1)[0];return Object(M.jsx)(I.a,{defaultActiveKey:["0"],bordered:!1,expandIcon:function(e){var t=e.isActive;return Object(M.jsx)(F.a,{rotate:t?90:0})},children:t&&t.map((function(e,t){var a,o,i;return Object(M.jsxs)(H,{header:"".concat(s(e.companyName)),extra:!!e.url&&(i=e.url,Object(M.jsx)(D.a,{onClick:function(){window.open(i,"_blank")}})),children:[Object(M.jsxs)(N,{level:5,children:[s(e.roll)," | ",s(e.date)," "]}),Object(M.jsx)(G,{children:s(e.dailyFunctions)}),Object(M.jsx)(G,{children:s(e.skills.title)}),Object(M.jsx)(G,{children:null===(a=e.skills)||void 0===a?void 0:a.bullets.map((function(e,t){return Object(M.jsx)(x.a,{color:"processing",children:s(e)},t)}))}),(null===e||void 0===e?void 0:e.projects)&&Object(M.jsxs)(W,{children:[s("experience_section_text_projects"),": "]}),Object(M.jsx)("ul",{children:null===e||void 0===e||null===(o=e.projects)||void 0===o?void 0:o.map((function(e,t){return Object(M.jsx)("li",{children:Object(M.jsxs)(G,{ellipsis:!n&&{rows:3,expandable:!0,symbol:s("experience_section_text_show_more")},children:[s(e.name),": ",Object(g.a)(s(e.resume))]})},t)}))})]},t)}))})},B=s(204),V=s(205),U=s(126),Q=s.n(U),K=d.a.Paragraph,Z=function(e){var t=e.data,s=Object(A.a)().t;return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsxs)(K,{style:{marginLeft:10},children:[Object(M.jsx)(B.a,{style:{fontSize:16,color:"rgba(53,173,216,0.85)"}})," ","100: ",s("skills_section_text_use_daily")," |"," ",Object(M.jsx)(V.a,{style:{fontSize:16,color:"rgba(155,214,236,0.85)"}})," ","10: ",s("skills_section_text_little_monthly_use")]}),Object(M.jsx)(Q.a,{options:null===t||void 0===t?void 0:t.options,series:null===t||void 0===t?void 0:t.series,type:"treemap",height:380})]})},X=s(193),Y=function(e){var t=e.data,s=Object(A.a)().t;return Object(M.jsx)(X.a,{mode:"left",style:{padding:"20px 40px 0px 0px"},children:t.map((function(e,t){return Object(M.jsx)(X.a.Item,{label:e.show?e.date:"",children:s(e.title)},t)}))})},$=s(186),ee=s(197),te=s(206),se=s(207),ae=s.p+"static/media/alex2.d53381b2.png",oe=d.a.Text,ne=function(e){var t=e.data,s=e.darkMode,a=e.setDarkMode,o=Object(A.a)().t;return Object(M.jsxs)($.a,{bordered:!1,style:{justifyContent:"center",textAlign:"center"},children:[Object(M.jsx)(h.a,{size:120,src:ae,style:{marginBottom:10}}),Object(M.jsx)("br",{}),Object(M.jsx)(oe,{children:t.name}),Object(M.jsx)("br",{}),Object(M.jsx)(oe,{type:"secondary",children:o(t.roll)}),Object(M.jsx)("br",{}),Object(M.jsxs)(oe,{children:[Object(M.jsx)(te.a,{})," ",Object(M.jsx)("a",{title:"linkedin",href:"mailto:"+t.socialNetworks.email,rel:"noreferrer",children:t.email})]}),Object(M.jsx)("br",{}),Object(M.jsxs)(oe,{children:[Object(M.jsx)(se.a,{})," ",Object(M.jsx)("a",{title:"linkedin",href:t.socialNetworks.url,target:"_blank",rel:"noreferrer",children:t.socialNetworks.name})]}),Object(M.jsx)("br",{}),Object(M.jsx)("br",{}),Object(M.jsxs)(oe,{children:[Object(M.jsx)(ee.a,{checked:s,onChange:function(){return a(!s)}})," ",o(t.darkMode)]})]})},ie=s(190),re=s(208),ce=_.a.Footer,le=function(){return Object(M.jsxs)(M.Fragment,{children:[Object(M.jsx)(ie.a,{}),Object(M.jsxs)(ce,{children:["Made with ",Object(M.jsx)(re.a,{})," by Alex"]})]})},_e=_.a.Content,de=d.a.Text,ue=d.a.Paragraph,pe=function(){var e=Object(A.a)().t,t=Object(a.useState)(!1),s=Object(l.a)(t,2),o=s[0],n=s[1],i=Object(a.useState)(!1),r=Object(l.a)(i,2),c=r[0],d=r[1],k=Object(a.useState)("left"),v=Object(l.a)(k,1)[0];return Object(M.jsx)(_.a,{className:"layout ".concat(o?"dark-mode":""),children:Object(M.jsxs)(f.a,{children:[Object(M.jsx)(u.a,{className:"".concat(o?"dark-mode":""),placement:v,closable:!1,onClose:function(){d(!1)},visible:c,children:Object(M.jsx)(p.a,{justify:"space-around",children:Object(M.jsx)(m.a,{xs:24,children:Object(M.jsx)(ne,{data:null===y.a||void 0===y.a?void 0:y.a.personalData,darkMode:o,setDarkMode:n})})})},v),Object(M.jsx)(E,{}),Object(M.jsx)(z,{setVisible:d}),Object(M.jsxs)(f.b,{id:"menu_section_experience",children:[Object(M.jsx)(b.a,{children:Object(M.jsx)(de,{children:e("experience_section_text_title")})}),Object(M.jsx)(_e,{children:Object(M.jsx)(p.a,{justify:"space-around",children:Object(M.jsx)(m.a,{xs:24,sm:18,children:Object(M.jsx)(J,{data:y.a.experience})})})})]}),Object(M.jsxs)(f.b,{id:"menu_section_skills",children:[Object(M.jsx)(b.a,{children:Object(M.jsx)(de,{children:e("skills_section_text_title")})}),Object(M.jsx)(_e,{children:Object(M.jsx)(p.a,{justify:"space-around",children:Object(M.jsx)(m.a,{xs:24,sm:18,children:Object(M.jsx)(Z,{data:null===y.a||void 0===y.a?void 0:y.a.skills})})})})]}),Object(M.jsxs)(f.b,{id:"menu_section_courses",children:[Object(M.jsx)(b.a,{children:Object(M.jsx)(de,{children:e("courses_section_text_title")})}),Object(M.jsx)(_e,{children:Object(M.jsx)(p.a,{justify:"space-around",children:Object(M.jsx)(m.a,{xs:24,sm:18,children:Object(M.jsx)(j.b,{style:{backgroundColor:"#fff"},bordered:!0,children:Object(M.jsx)(Y,{data:null===y.a||void 0===y.a?void 0:y.a.courses})})})})})]}),Object(M.jsxs)(f.b,{id:"menu_section_collaborations",children:[Object(M.jsx)(b.a,{children:Object(M.jsx)(de,{children:e("collabs_section_text_title")})}),Object(M.jsx)(_e,{children:Object(M.jsx)(p.a,{justify:"space-around",children:Object(M.jsx)(m.a,{xs:24,sm:18,children:Object(M.jsx)(j.b,{style:{backgroundColor:"#fff"},bordered:!0,itemLayout:"vertical",size:"large",dataSource:null===y.a||void 0===y.a?void 0:y.a.collaboration,renderItem:function(t){var s;return Object(M.jsxs)(j.b.Item,{extra:Object(M.jsx)("img",{width:272,alt:"logo",src:"https://remittven.co.uk/images/logo3.png"}),children:[Object(M.jsx)(j.b.Item.Meta,{avatar:Object(M.jsx)(h.a,{src:t.avatar}),title:Object(M.jsx)("a",{href:t.href,children:t.title}),description:Object(g.a)(e(t.description))}),Object(M.jsxs)(ue,{children:[e("collabs_section_text_goals"),": "]}),Object(M.jsx)("ul",{children:t.resume.map((function(t,s){return Object(M.jsx)("li",{children:Object(g.a)(e(t))},s)}))}),Object(M.jsx)("br",{}),Object(M.jsxs)(ue,{children:[e("collabs_section_text_tecnologies"),": "]}),Object(M.jsx)(ue,{children:null===(s=t.skills)||void 0===s?void 0:s.map((function(t,s){return Object(M.jsx)(x.a,{color:"processing",children:e(t)},s)}))})]},t.name)}})})})})]}),Object(M.jsx)(b.a,{}),Object(M.jsx)(le,{})]})})},me=function(){return Object(M.jsxs)(c.d,{children:[Object(M.jsx)(c.b,{component:pe,exact:!0,path:"/"}),Object(M.jsx)(c.a,{to:"/"})]})},be=s(135),je=s(85),he={en:{translation:{menu_section_experience:"Experience",menu_section_skills:"Skills",menu_section_courses:"Courses",menu_section_collaborations:"Collabs",hero_section_title:"Hello World",hero_section_subtitle:"I'm Alex Hern\xe1ndez. JavaScript developer by profession and passion!",hero_section_details:"Click or tap to see contact details",personal_section_text_roll:"Web developer",personal_section_text_dark_mode:"Dark mode",experience_section_text_title:"Job experience",experience_section_text_show_more:"show more",experience_section_text_projects:"Projects",experience_section_sngular_company_name:"Sngular (now)",experience_section_sngular_roll:"FrontEnd developer",experience_section_sngular_date:"Feb 2020 \u2013 now.",experience_section_sngular_projects_0_name:"Internal Training/Project Sngular",experience_section_sngular_projects_0_resume:"Creation of a Design system based on Tokens, WebComponents with Polymer and Lit Elements.",experience_section_sngular_projects_1_name:"Collaboration with Cabify",experience_section_sngular_projects_1_resume:"This collaboration consists of the development and implementation of a new interface in the process of incorporation of each possible Cabify driver. <br /> Previously, Cabify used a tool called Fountain, this tool was replaced by a new application that is much more friendly, usable, intuitive and adaptable for each incorporation process of the different countries in which Cabify operates. <br /> <br /> The <b> Front part </b> of this project was made using the <u> Framework React.js </u> because it is a technology that Cabify works with regularly. Used in its latest version and making use of its latest updates, to manage the application state globally, <b> React.createContext </b> was used. In addition, error handling was controlled through an integration with the <u> Rollbar </u> tool that allows tracing all interactions and errors that occur in the application. In addition, this application needs to be connected to the following services: <u> Google Tag Manager </u> and <u> Amplitude </u> for continuous monitoring and the conversations that the different Cabify departments wanted to carry out about the application. <br /> <br /> The <b> Back part </b> of this application was made in <u> Node.js </u> together with <u> Express.js </u>. The main function of this BackEnd is to interact with the Fountain tool, which is what provides us with all the data that we need to collect from each user of the Application. Besides, with this new interface it is possible that the Fountain tool has only the storage function and not the interface that was not very friendly and usable for users.",experience_section_sngular_skills_title:"I work daily with the following technologies:",experience_section_digi_company_name:"Digi Mobil",experience_section_digi_roll:"Web Developer",experience_section_digi_date:"Jan 2019  \u2013 Jan 2020.",experience_section_digi_projects_0_name:"MiCuentaDigi (1 year)",experience_section_digi_projects_0_resume:"My functions were to develop, improve and maintain a web application where you can check your personal data, invoices, balance, make product changes and many more functions within the application. To better understand the context, Digi mobil is a telephone operator and with this application a better way for customers to consult their telephone lines was achieved.",experience_section_digi_skills_title:"I worked daily with the following technologies:",experience_section_bookassist_company_name:"Bookassist",experience_section_bookassist_roll:"Web Developer",experience_section_bookassist_date:"Apr 2017 - Jan 2019.",experience_section_bookassist_daily_functions:"My duties were to design, layout, maintain and develop web pages for hotels, the development of a CMS and the improvement of an existing portfolio.",experience_section_bookassist_projects_0_name:"CMS (6 months)",experience_section_bookassist_projects_0_resume:"Thanks to the implementation of this CMS, the client had at his disposal the possibility of modifying the content (hotel data, room images, logos, etc.) of his website.",experience_section_bookassist_projects_1_name:"Portfolio Redesign (1 month)",experience_section_bookassist_projects_1_resume:"The main objective of this project was the improvement and redesign of the existing portfolio. With this new portfolio we are able to show our templates to the client in a more usable and intuitive way.",experience_section_bookassist_projects_2_name:"Improvements in our templates (daily and continuous work)",experience_section_bookassist_projects_2_resume:"We worked with 8 templates so that clients could choose different designs for their web pages. These templates as time went by required new updates both in design and programming.",experience_section_bookassist_skills_title:"I worked daily with the following technologies:",experience_section_tandem_company_name:"Tandem Publicidad",experience_section_tandem_roll:"Web designer and developer",experience_section_tandem_date:"Jun 2016 - Apr 2017.",experience_section_tandem_daily_functions:"I fulfilled the functions of designing and maintaining Web pages in WordPress. Besides, I collaborated on creating designs while learning my first concepts about Adobe Photoshop and Adobe Illustrator.",experience_section_tandem_projects_0_name:"Web improvements (daily and continuous work)",experience_section_tandem_projects_0_resume:"We were continuously working on improvements to our website.",experience_section_tandem_projects_1_name:"Dise\xf1os de tarjetas de presentaci\xf3n, creaci\xf3n de logos y otros tipos de dise\xf1os",experience_section_tandem_projects_1_resume:"La empresa ten\xeda otra vertiente econ\xf3mica en la que se dedicaba de lleno a la creaci\xf3n de diferentes dise\xf1os que los clientes solicitaban.",experience_section_tandem_skills_title:"Trabaj\xe9 diariamente con las siguientes tecnolog\xedas:",skills_section_text_title:"Technologies used monthly",skills_section_text_use_daily:"Daily use.",skills_section_text_little_monthly_use:"Little monthly use.",courses_section_text_title:"Courses carried out",courses_section_course_git_profesional:"Git and GitHub Professional Course.",courses_section_course_vue_basic:"Basic course of Vue.js.",courses_section_course_react_basic:"Basic React.js course.",courses_section_course_react_profesional:"React.js professional course.",courses_section_course_node_basic:"Node.js basic course",courses_section_course_react_native_basic:"React Native.js basic course.",courses_section_course_cypress_basic:"Cypress.js basic course.",courses_section_course_devops_basic:"DevOps basic course - GitLab.",collabs_section_text_title:"Collaborations",collabs_section_text_goals:"Goals",collabs_section_text_tecnologies:"Used technologies",collabs_section_remittven_description:"Remittven is a British company. It fully complies with all the standards required by a financial capital such as London.",collabs_section_remittven_resume_0:"Creation of the <a href='https://remittven.co.uk/' title='link-remittven' target='_blank'> web page </a> of the RemittVen company.",collabs_section_remittven_resume_1:"Creation of the <a href='https://remittven.co.uk/AreaCliente' title='link-remittven/AreaCliente' target='_blank'> web application </a> with which users can consult their services, transactions, beneficiaries and more details. <br /> They can also make transfers within the application thanks to an integration with a payment platform called Checkout.",collabs_section_remittven_review_0:"Safe and reliable. I recommend it without qualms",collabs_section_remittven_review_1:"I had never used a service like this. Very easy. All the information is on the website, you register, you register the Venezuelan account and then the procedure is super simple. In hours I had the money in S! Super recommended!"}},es:{translation:{menu_section_experience:"Experiencia",menu_section_skills:"Habilidades",menu_section_courses:"Cursos",menu_section_collaborations:"Colaboraciones",hero_section_title:"Hola Mundo",hero_section_subtitle:"Soy Alex Hern\xe1ndez. Programador JavaScript por profesi\xf3n y por pasi\xf3n!",hero_section_details:"Pulsa para ver detalles de contacto",personal_section_text_roll:"Desarrollador Web",personal_section_text_dark_mode:"Modo oscuro",experience_section_text_title:"Experiencia en empresas",experience_section_text_show_more:"mostrar m\xe1s",experience_section_text_projects:"Proyectos",experience_section_sngular_company_name:"Sngular (actualmente)",experience_section_sngular_roll:"Desarrollador FrontEnd",experience_section_sngular_date:"Feb 2020 \u2013 actualidad.",experience_section_sngular_projects_0_name:"Formaci\xf3n/Proyecto interno Sngular",experience_section_sngular_projects_0_resume:"Creaci\xf3n de un sistema de Dise\xf1o basado en Tokens, WebComponents con Polymer y Lit Elements.",experience_section_sngular_projects_1_name:"Colaboraci\xf3n con Cabify",experience_section_sngular_projects_1_resume:"Esta colaboraci\xf3n consiste en el desarrollo e implementaci\xf3n de una nueva interfaz en el proceso de incorporaci\xf3n de cada posible conductor de Cabify. <br /> Anteriormente, Cabify utilizaba una herramienta llamada Fountain, esta herramienta fue sustituida por una nueva aplicaci\xf3n mucho m\xe1s amigable, usable, intuitiva y adaptable para cada proceso de incorporaci\xf3n de los diferentes pa\xedses en los que act\xfaa Cabify. <br /> <br /> La <b> parte Front </b> de este proyecto se realiz\xf3 mediante el <u> Framework React.js </u> debido a que es una tecnolog\xeda con la que Cabify trabaja habitualmente. Utilizado en su \xfaltima versi\xf3n y haciendo uso de sus \xfaltimas actualizaciones, para el manejo del estado de la aplicaci\xf3n globalmente se hizo uso de <b> React.createContext </b>. A parte, el manejo de errores se control\xf3 mediante una integraci\xf3n con la herramienta <u> Rollbar </u> que permite trazar todas las interacciones y errores que se producen en la aplicaci\xf3n. Adem\xe1s, esta aplicaci\xf3n necesita estar conectada con los siguientes servicios: <u> Google Tag Manager </u> y <u> Amplitude </u> para el seguimiento continuo y las conversaciones que los diferentes departamentos de Cabify quer\xedan realizar sobre la aplicaci\xf3n. <br /> <br /> La <b> parte Atr\xe1s </b> de esta aplicaci\xf3n se realiz\xf3 en <u> Node.js </u> junto con <u> Express.js </u>. La funci\xf3n principal de este BackEnd es la de interactuar con la herramienta Fountain que es la que nos provee todos los datos que necesitamos recolectar de cada usuario de la Aplicaci\xf3n. A parte, con esta nueva interfaz se consigue que la herramienta Fountain tenga s\xf3lo la funci\xf3n de almacenamiento y no la de interfaz que era poco amigable y usable para los usuarios.",experience_section_sngular_skills_title:"Trabajo diariamente con las siguientes tecnolog\xedas:",experience_section_digi_company_name:"Digi Mobil",experience_section_digi_roll:"Desarrollador Web",experience_section_digi_date:"Ene 2019  \u2013 Ene 2020.",experience_section_digi_projects_0_name:"MiCuentaDigi (1 a\xf1o)",experience_section_digi_projects_0_resume:"Mis funciones fueron las de desarrollar, mejorar y mantener una aplicaci\xf3n web en la que puedes consultar tus datos personales, facturas, saldo, realizar cambios de productos y muchas m\xe1s funciones dentro de la aplicaci\xf3n. Para entender mejor el contexto, Digi mobil es una operadora telef\xf3nica y con esta aplicaci\xf3n se consigui\xf3 una mejor manera de que los clientes pudieran consultar sus l\xedneas telef\xf3nicas.",experience_section_digi_skills_title:"Trabaj\xe9 diariamente con las siguientes tecnolog\xedas:",experience_section_bookassist_company_name:"Bookassist",experience_section_bookassist_roll:"Desarrollador Web",experience_section_bookassist_date:"Apr 2017 - Ene 2019.",experience_section_bookassist_daily_functions:"Mis funciones fueron dise\xf1ar, maquetar, mantener y desarrollar p\xe1ginas webs para hoteles, el desarrollo de un CMS y la mejora de un portfolio existente.",experience_section_bookassist_projects_0_name:"CMS (6 meses)",experience_section_bookassist_projects_0_resume:"Gracias a la implementaci\xf3n de este CMS, el cliente hotelero ten\xeda a su disposici\xf3n la posibilidad de modificar el contenido (datos propios del hotel, im\xe1genes de habitaciones, logos, etc) de su p\xe1gina web.",experience_section_bookassist_projects_1_name:"Redise\xf1o Portfolio (1 mes)",experience_section_bookassist_projects_1_resume:"El principal objetivo de este proyecto era la mejora y redise\xf1o del portfolio existente. Con este nuevo portfolio conseguimos mostrar de una forma m\xe1s usable e intuitiva nuestros templates al cliente.",experience_section_bookassist_projects_2_name:"Mejoras en nuestros templates (trabajo diario y continuo)",experience_section_bookassist_projects_2_resume:"Trabaj\xe1bamos con 8 templates para que los clientes pudieran elegir distintos dise\xf1os para sus p\xe1ginas webs. Estos templates a medida que pasaba el tiempo requer\xedan nuevas actualizaciones tanto en dise\xf1o como en programaci\xf3n.",experience_section_bookassist_skills_title:"Trabaj\xe9 diariamente con las siguientes tecnolog\xedas:",experience_section_tandem_company_name:"Tandem Publicidad",experience_section_tandem_roll:"Dise\xf1ador y Desarrollador Web",experience_section_tandem_date:"Jun 2016 - Apr 2017.",experience_section_tandem_daily_functions:"Cumpl\xed las funciones de dise\xf1ar y mantener p\xe1ginas Web en WordPress. A parte, colabaraba en la creeaci\xf3n de dise\xf1os mientras aprend\xeda mis primeros conceptos sobre Adobe Photoshop y Adobe Illustrator",experience_section_tandem_projects_0_name:"Mejoras Webs (trabajo diario y continuo)",experience_section_tandem_projects_0_resume:"Trabaj\xe1bamos continuamente en mejoras en nuestra web.",experience_section_tandem_projects_1_name:"Dise\xf1os de tarjetas de presentaci\xf3n, creaci\xf3n de logos y otros tipos de dise\xf1os",experience_section_tandem_projects_1_resume:"La empresa ten\xeda otra vertiente econ\xf3mica en la que se dedicaba de lleno a la creaci\xf3n de diferentes dise\xf1os que los clientes solicitaban.",experience_section_tandem_skills_title:"Trabaj\xe9 diariamente con las siguientes tecnolog\xedas:",skills_section_text_title:"Tecnolog\xedas usadas mensualmente",skills_section_text_use_daily:"Uso diario.",skills_section_text_little_monthly_use:"Poco uso mensual.",courses_section_text_title:"Cursos realizados",courses_section_course_git_profesional:"Curso profesional de Git y GitHub.",courses_section_course_vue_basic:"Curso b\xe1sico de Vue.js.",courses_section_course_react_basic:"Curso b\xe1sico de React.js.",courses_section_course_react_profesional:"Curso profesional de React.js.",courses_section_course_node_basic:"Curso b\xe1sico de Node.js.",courses_section_course_react_native_basic:"Curso b\xe1sico React Native.js.",courses_section_course_cypress_basic:"Curso b\xe1sico Cypress.js.",courses_section_course_devops_basic:"Curso b\xe1sico DevOps - GitLab.",collabs_section_text_title:"Colaboraciones",collabs_section_text_goals:"Objetivos",collabs_section_text_tecnologies:"Tecnolog\xedas usadas",collabs_section_remittven_description:"Remittven es una empresa brit\xe1nica. Cumple plenamente con todos los est\xe1ndares exigidos por una capital financiera como Londres.",collabs_section_remittven_resume_0:"Creaci\xf3n de la <a href='https://remittven.co.uk/' title='link-remittven' target='_blank'>p\xe1gina web</a> de la empresa RemittVen.",collabs_section_remittven_resume_1:"Creaci\xf3n de la <a href='https://remittven.co.uk/AreaCliente' title='link-remittven/AreaCliente' target='_blank'> aplicaci\xf3n web </a> con la que los usuarios pueden consultar sus servicios, transacciones, beneficiarios y m\xe1s detalles. <br />Tambi\xe9n pueden hacer transferencias dentro de la aplicaci\xf3n gracias a una integraci\xf3n con una plataforma de pago llamada Checkout.",collabs_section_remittven_review_0:"Seguro y confiable. Lo recomiendo sin reparos",collabs_section_remittven_review_1:"Nunca hab\xeda utilizado un servicio as\xed. Super f\xe1cil. Toda la informaci\xf3n est\xe1 en la p\xe1gina web, te registras, registras la cuenta venezolana y luego es super sencillo el procedimiento. En horas ten\xeda el dinero en S! Super recomendado!"}}};be.a.use(je.e).init({resources:he,lng:"es"});var xe=Object(r.a)();var ge=function(){return Object(M.jsx)(i.a,{history:xe,basename:"/personal-web/",children:Object(M.jsx)(me,{})})},ye=(s(177),s(178),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,209)).then((function(t){var s=t.getCLS,a=t.getFID,o=t.getFCP,n=t.getLCP,i=t.getTTFB;s(e),a(e),o(e),n(e),i(e)}))});n.a.render(Object(M.jsx)(ge,{}),document.getElementById("root")),ye()},33:function(e){e.exports=JSON.parse('{"a":{"personalData":{"location":"Alcobendas, 28100","email":"16ahmm@gmail.com","name":"Alex Hern\xe1ndez","roll":"personal_section_text_roll","socialNetworks":{"name":"LinkedIn","url":"http://linkedin.com/in/alex-hern\xe1ndez-m"},"darkMode":"personal_section_text_dark_mode"},"courses":[{"show":true,"date":2017,"title":"courses_section_course_git_profesional"},{"show":false,"date":2017,"title":"courses_section_course_vue_basic"},{"show":false,"date":2017,"title":"courses_section_course_react_basic"},{"show":true,"date":2018,"title":"courses_section_course_react_profesional"},{"show":true,"date":2019,"title":"courses_section_course_node_basic"},{"show":true,"date":2020,"title":"courses_section_course_react_native_basic"},{"show":false,"date":2020,"title":"courses_section_course_cypress_basic"},{"show":true,"date":2021,"title":"courses_section_course_devops_basic"}],"skills":{"series":[{"data":[{"x":"React","y":100},{"x":"JavaScript","y":100},{"x":"HTML5","y":100},{"x":"CSS3/SASS","y":100},{"x":"Gitlab","y":100},{"x":"Node","y":70},{"x":"Vue","y":50},{"x":"React Native","y":50},{"x":"Express","y":70},{"x":"MongoDB","y":60},{"x":"Moongose","y":60},{"x":"Redux","y":50},{"x":"GraphQL","y":15},{"x":"MySQL","y":15}]}],"options":{"colors":["#00bbff"],"legend":{"show":false},"chart":{"height":370,"type":"treemap"}}},"studies":[{"date":"2013 - 2015","name":"U.P.M.","title":"Ing. Alimentaria. Madrid, Espa\xf1a.","location":"Madrid, Espa\xf1a."},{"date":"2015 - 2017","name":"I.E.S El Lago.","title":"Grado Superior D.A.W.M.I.","location":"Madrid, Espa\xf1a."}],"experience":[{"companyName":"experience_section_sngular_company_name","url":"https://www.sngular.com/es/","roll":"experience_section_sngular_roll","date":"experience_section_sngular_date","projects":[{"name":"experience_section_sngular_projects_0_name","resume":"experience_section_sngular_projects_0_resume"},{"name":"experience_section_sngular_projects_1_name","resume":"experience_section_sngular_projects_1_resume"}],"skills":{"title":"experience_section_sngular_skills_title","bullets":["JavaScript","React","Redux","HTML5","CSS3","SASS","Node","Express","Cypress","Git","GitLab","Rollbar","Amplitude"]}},{"companyName":"experience_section_digi_company_name","url":"https://www.digimobil.es/","roll":"experience_section_digi_roll","date":"experience_section_digi_date","projects":[{"name":"experience_section_digi_projects_0_name","resume":"experience_section_digi_projects_0_resume"}],"skills":{"title":"experience_section_digi_skills_title","bullets":["JavaScript","React","Redux","HTML5","CSS3","SASS","PHP(Zend framework 3)","GraphQL","MySQL","MongoDB","Cypress","Git","GitLab"]}},{"companyName":"experience_section_bookassist_company_name","url":"https://bookassist.org/es","roll":"experience_section_bookassist_roll","date":"experience_section_bookassist_date","dailyFunctions":"experience_section_bookassist_daily_functions","projects":[{"name":"experience_section_bookassist_projects_0_name","resume":"experience_section_bookassist_projects_0_resume"},{"name":"experience_section_bookassist_projects_1_name","resume":"experience_section_bookassist_projects_1_resume"},{"name":"experience_section_bookassist_projects_2_name","resume":"experience_section_bookassist_projects_2_resume"}],"skills":{"title":"experience_section_bookassist_skills_title","bullets":["JavaScript","JQuery","HTML5","CSS3","SASS","PHP7","Git","Adobe Photoshop","Adobe Illustrator"]}},{"companyName":"experience_section_tandem_company_name","url":false,"roll":"experience_section_tandem_roll","date":"experience_section_tandem_date","dailyFunctions":"experience_section_tandem_daily_functions","projects":[{"name":"experience_section_tandem_projects_0_name","resume":"experience_section_tandem_projects_0_resume"},{"name":"experience_section_tandem_projects_1_name","resume":"experience_section_tandem_projects_1_resume"}],"skills":{"title":"experience_section_tandem_skills_title","bullets":["WordPress","JavaScript","HTML5","CSS3","Php","Adobe Photoshop","Adobe Illustrator"]}}],"collaboration":[{"name":"RemittVen","link":"https://remittven.co.uk/","resume":["collabs_section_remittven_resume_0","collabs_section_remittven_resume_1"],"avatar":"https://remittven.co.uk/images/favicon.png","description":"collabs_section_remittven_description","reviews":["collabs_section_remittven_review_0","collabs_section_remittven_review_1"],"skills":["JavaScript","React","Redux","HTML5","CSS3","SASS","Cypress"]}],"blog":[{"title":"\\"Conoce c\xf3mo\\" estructuro mis proyectos FrontEnd.","date":"09/03/2021","content":[{"paragraph":"En el siguienete apartado vamos a tratar como organizo mis proyectos FrontEnd. En este caso vamos a analizar en concreto un proyecto realizado con React utilizando la api de createContext()."},{"paragraph":"Partimos de la estructura b\xe1sica que <code>npx create-react-app</code> nos provee (mirar el \xe1rbol de la derecha). En la carpeta src/ encontraremos el grosor de nuestra aplicaci\xf3n."},{"paragraph":"Empezaremos con la carpeta src/assets/. En esta situaremos todos nuestros recursos a utilizar en la aplicaci\xf3n, tales como: im\xe1genes, una carpeta para las hojas de estilo, fuentes y dem\xe1s recursos que podamos necesitar. "},{"paragraph":"Continuamos con la carpeta src/components/ en la que situaremos todos nuestros componentes React. Explicar {Layout, Commons, Forms.}"},{"paragraph":"Dependiendo del tama\xf1o de datos que vamos manipular dentro de nuestra App, crearemos una carpeta llamada context, en la que si el volumen de datos que vamos a utilizar no es excesivamente grande, crearemos nuestros contextos mediante React.createContext(). Si el volumen de datos es excesivamente grande haremos uso de Redux para manipular los datos y el estado de nustra aplicaci\xf3n. Esta implementaci\xf3n con Redux la veremos en otro <b>\\"Conoce c\xf3mo\\"</b>."},{"paragraph":"En la carpeta src/services/ incluiremos diferentes servicios que consumimos en nuestra aplicaci\xf3n. Por ejemplo, la api que vayamos a consumir para nuestra Aplicaci\xf3n, en una de mis \xfaltimas colaboraciones situ\xe9 en esta carpeta una integraci\xf3n con Rollbar que es un sistema que ayudar al seguimiento de errores de la aplicaci\xf3n. A parte, cuando he trabajado con integraciones como Amplitude o Google Analytics, tambi\xe9n las he situado en esta carpeta."}],"tree":[{"title":"example-project","key":"0-0","children":[{"title":"public","key":"0-0-0","children":[{"title":"index.html","key":"0-0-0-0"}]},{"title":"src","key":"0-0-1","children":[{"title":"assets","key":"0-0-1-0","children":[{"title":"images","key":"0-0-1-0-0"},{"title":"fonts","key":"0-0-1-0-1"},{"title":"scss","key":"0-0-1-0-2"}]},{"title":"components","key":"0-0-1-1","children":[{"title":"Layout","key":"0-0-1-1-0","children":[{"title":"Header, Menu, Footer...","key":"0-0-1-1-0-0"}]},{"title":"Commons","key":"0-0-1-1-1","children":[{"title":"Modal, Tabs, Card...","key":"0-0-1-1-1-0"}]},{"title":"Forms","key":"0-0-1-1-2","children":[{"title":"Contact, Login, Register...","key":"0-0-1-1-2-0"}]}]},{"title":"context","key":"0-0-1-2","children":[{"title":"{entity}.context.js","key":"0-0-1-2-0"}]},{"title":"services","key":"0-0-1-3","children":[{"title":"api","key":"0-0-1-3-0"},{"title":"rollbar","key":"0-0-1-3-1"},{"title":"events","key":"0-0-1-3-2"}]}]},{"title":".env","key":"0-0-2"},{"title":"package-lock.json","key":"0-0-3"},{"title":"package.json","key":"0-0-4"}]}]},{"title":"\\"Conoce c\xf3mo\\" trabajo con SASS.","date":"09/03/2021","content":[{"paragraph":"Pr\xf3ximamente..."},{"paragraph":""},{"paragraph":""}]},{"title":"\\"Conoce c\xf3mo\\" trabajo con Redux.","date":"09/03/2021","content":[{"paragraph":"Pr\xf3ximamente..."},{"paragraph":""},{"paragraph":""}]},{"title":"\\"Conoce c\xf3mo\\" estructuro mis proyectos BackEnd.","date":"09/03/2021","content":[{"paragraph":"Pr\xf3ximamente..."},{"paragraph":""},{"paragraph":""}]}]}}')}},[[179,1,2]]]);
//# sourceMappingURL=main.1ef1424b.chunk.js.map