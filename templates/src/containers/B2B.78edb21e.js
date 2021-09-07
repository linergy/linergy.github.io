webpackJsonp([16],{347:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(t,"__esModule",{value:!0});var a=n(2),r=l(a),i=n(55),s=n(799),d=l(s),u=function(){return r.default.createElement("div",{id:"b2b"},r.default.createElement(i.Row,{grid:!0},r.default.createElement(i.GridCell,{span:"12"},r.default.createElement(i.Trans,{i18nKey:"intro"},r.default.createElement("h1",null,"Linergy B2B Wiederverkaufsprogramm"),r.default.createElement("p",null,"Seit einigen Jahren bieten wir unser Sortiment zu Händlerpreisen an Wiederverkäufer an. Sie haben nun die Möglichkeit einen Händleraccount in unserem Webshop zu erhalten. Dadurch können Sie zu besonders günstigen Konditionen unsere Produkte erwerben."),r.default.createElement("h2",null,"Ihre Vorteile"),r.default.createElement("ul",null,r.default.createElement("li",null,"Kein Importrisiko"),r.default.createElement("li",null,'Wir übernehmen die kostspielige Registrierung unserer Produkte, die für kleine Unternehmen oftmals eine unüberwindbare Hürde darstellt; Stichwort "EAR-Produktregistrierung" und "Batteriegesetz". Viele Konkurrenten scheuen diese zeit- und kostenintensiven Registrierungen. Im Falle des Falles sind Sie als Händler ebenso haftbar und gelten als Importeur! Bußgeldbescheide bis 50000 EUR sind möglich'),r.default.createElement("li",null,"Online Verfügbarkeitsanzeige unserer Produkte"),r.default.createElement("li",null,"Nach Absprache sind bei bestimmten Produkten erweiterte Garantieleistungen möglich"),r.default.createElement("li",null,"Kein Mindestbestellwert"))))),r.default.createElement(i.Row,{grid:!0,className:"border-top"},r.default.createElement(i.GridCell,{span:"12"},r.default.createElement("h2",null,r.default.createElement(i.Trans,{i18nKey:"contactUs"},"Kontaktieren Sie uns")),r.default.createElement(d.default,null))))};t.default=(0,i.translate)("b2b")(u)},799:function(e,t,n){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}function a(e){return/\S+@\S+\.\S+/.test(e)}Object.defineProperty(t,"__esModule",{value:!0});var r=n(2),i=l(r),s=n(138),d=l(s),u=n(55),m=n(56),o=l(m),c=o.default.getFixedT(null,"b2b"),f=(0,u.withFormMailer)({to:"info@linergy.de",data:{subject:"B2B Händleranfrage von linergy.de",email:"",company:"",address:"",message:""},validate:function(e){var t={},n=!1;return a(e.email)||(t.email=c("emailInvalid","E-Mail Adresse ist ungültig"),n=!0),e.message.length<=10&&(t.message=c("messageTooShort","Sie müssen mindestens zehn Zeichen eingeben"),n=!0),n?t:null}})(function(e){var t=e.handleChange,n=e.data,l=e.errors;return i.default.createElement("div",null,i.default.createElement(d.default,{name:"company",label:c("companyName","Firmenname inkl. Rechtsform"),className:"fill-width",box:!0,onChange:t,value:n.company}),i.default.createElement(s.TextFieldHelperText,{persistent:!0,validationMsg:!0},l.company),i.default.createElement(d.default,{name:"email",label:c("yourEmail","Ihre E-Mail Adresse"),box:!0,className:"fill-width",onChange:t,value:n.email}),i.default.createElement(s.TextFieldHelperText,{persistent:!0,validationMsg:!0},l.email),i.default.createElement(s.TextFieldHelperText,{persistent:!0},c("isRequired","Dieses Feld muss ausgefüllt werden")),i.default.createElement(d.default,{name:"address",textarea:!0,placeholder:c("yourAddress","Ihre Postanschrift"),rows:"4",fullwidth:!0,onChange:t,value:n.address}),i.default.createElement(s.TextFieldHelperText,{persistent:!0,validationMsg:!0},l.address),i.default.createElement(d.default,{name:"message",textarea:!0,fullwidth:!0,placeholder:c("yourMessage","Ihre Nachricht"),rows:"8",onChange:t,value:n.message}),i.default.createElement(s.TextFieldHelperText,{persistent:!0,validationMsg:!0},l.message),i.default.createElement(s.TextFieldHelperText,{persistent:!0},c("isRequired","Dieses Feld muss ausgefüllt werden")))});t.default=f}});