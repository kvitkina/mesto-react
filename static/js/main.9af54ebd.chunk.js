(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{10:function(e,t,a){e.exports=a(16)},15:function(e,t,a){},16:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(5),c=a.n(r),l=(a(15),a(9)),i=a(1),s=a(6),u=a.n(s);var p=function(){return o.a.createElement("header",{className:"header"},o.a.createElement("img",{src:u.a,className:"logo",alt:"\u041b\u043e\u0433\u043e\u0442\u0438\u043f"}))};var m=function(){return o.a.createElement("footer",{className:"footer"},o.a.createElement("h4",{className:"footer__author"},"\xa9 2020 Mesto Russia"))},d=o.a.createContext();var _=function(e){var t=e.card,a=e.onCardClick,n=e.onCardDelete,r=e.onCardLike,c=e.onCardDislike,l=o.a.useContext(d),i=t.owner._id===l._id,s=t.likes.some((function(e){return e._id===l._id})),u="element__like ".concat(s&&"element__like_theme_black");return o.a.createElement("li",{className:"element"},o.a.createElement("img",{style:{backgroundImage:"url(".concat(t.link,")")},className:"element__image",alt:"",onClick:function(){a(t)}}),i&&o.a.createElement("button",{className:"element__trash",onClick:function(){n(t._id)}}),o.a.createElement("div",{className:"element__info"},o.a.createElement("h3",{className:"element__title"},t.name),o.a.createElement("div",{className:"element__like-container"},o.a.createElement("button",{className:u,onClick:s?function(){c(t)}:function(){r(t)}}),o.a.createElement("p",{className:"element__like-counter"},t.likes.length))))};var h=function(e){var t=e.onEditAvatar,a=e.onEditProfile,n=e.onAddPlace,r=e.onCardClick,c=e.cards,l=e.onCardLike,i=e.onCardDislike,s=e.onCardDelete,u=o.a.useContext(d);return o.a.createElement("main",{className:"content"},o.a.createElement("section",{className:"profile"},o.a.createElement("button",{className:"profile__avatar",style:{backgroundImage:"url(".concat(u.avatar,")")},onClick:t}),o.a.createElement("div",{className:"profile__info"},o.a.createElement("h1",{className:"profile__name"},u.name),o.a.createElement("button",{className:"profile__edit-button",onClick:a}),o.a.createElement("p",{className:"profile__job"},u.about)),o.a.createElement("button",{className:"profile__add-button",onClick:n})),o.a.createElement("div",{className:"elements"},o.a.createElement("ul",{className:"elements__list"},c.map((function(e){return o.a.createElement(_,{key:e._id,card:e,onCardClick:r,onCardDelete:s,onCardLike:l,onCardDislike:i})})))),o.a.createElement("section",{className:"popup popup_delete"},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{className:"popup__close"}),o.a.createElement("h2",{className:"popup__title popup__title_theme_delete"},"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u044b?"),o.a.createElement("form",{className:"popup__form-container",name:"popup-delete"},o.a.createElement("input",{type:"submit",className:"popup__button popup__button_theme_delete",defaultValue:"\u0414\u0430"})))))};var f=function(e){var t=e.isOpen,a=e.children,n=e.onClose,r=e.name,c=e.title,l=e.submit,i=e.onSubmit;return o.a.createElement("section",{className:"popup popup_".concat(r," ").concat(t&&"popup_opened"," ")},o.a.createElement("div",{className:"popup__container"},o.a.createElement("button",{className:"popup__close",onClick:n}),o.a.createElement("form",{className:"popup__form-container",name:r,onSubmit:i,noValidate:!0},o.a.createElement("h2",{className:"popup__title"},c),o.a.createElement("fieldset",{className:"popup__form"},a,o.a.createElement("input",{type:"submit",className:"popup__button",value:l,onClick:n})))))};var E=function(e){var t=e.card,a=e.onClose,n=e.name;return o.a.createElement("section",{className:"popup popup_".concat(n," ").concat(t&&"popup_opened")},o.a.createElement("div",{className:"popup__container-place"},o.a.createElement("img",{src:t&&t.link,className:"popup__image",alt:t&&t.name}),o.a.createElement("p",{className:"popup__place"},t&&t.name),o.a.createElement("button",{className:"popup__close",onClick:a})))},v=a(7),b=a(8),k=new(function(){function e(t){var a=t.baseUrl,n=t.headers;Object(v.a)(this,e),this.baseUrl=a,this.headers=n}return Object(b.a)(e,[{key:"_handleOriginalResponse",value:function(e){return e.ok?e.json():Promise.reject(new Error("\u0427\u0442\u043e-\u0442\u043e \u043f\u043e\u0448\u043b\u043e \u043d\u0435 \u0442\u0430\u043a: ".concat(e.status)))}},{key:"getAllInfo",value:function(){return Promise.all([this.getInitialCards(),this.getUserInfo()])}},{key:"getInitialCards",value:function(){return fetch("".concat(this.baseUrl,"/cards"),{headers:this.headers}).then(this._handleOriginalResponse)}},{key:"addCard",value:function(e){return fetch("".concat(this.baseUrl,"/cards"),{method:"POST",headers:this.headers,body:JSON.stringify(e)}).then(this._handleOriginalResponse)}},{key:"deleteCard",value:function(e){return fetch("".concat(this.baseUrl,"/").concat(e),{method:"DELETE",headers:this.headers}).then(this._handleOriginalResponse)}},{key:"getUserInfo",value:function(){return fetch("".concat(this.baseUrl,"/users/me"),{headers:this.headers}).then(this._handleOriginalResponse)}},{key:"setUserInfo",value:function(e){return fetch("".concat(this.baseUrl,"/users/me"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this._handleOriginalResponse)}},{key:"editAvatar",value:function(e){return fetch("".concat(this.baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this.headers,body:JSON.stringify(e)}).then(this._handleOriginalResponse)}},{key:"putLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"PUT",headers:this.headers}).then(this._handleOriginalResponse)}},{key:"removeLike",value:function(e){return fetch("".concat(this.baseUrl,"/cards/likes/").concat(e),{method:"DELETE",headers:this.headers}).then(this._handleOriginalResponse)}}]),e}())({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-14",headers:{authorization:"e63db112-531a-4c6f-ae02-ccc048d1696b","Content-Type":"application/json"}});var N=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateUser,r=o.a.useState(""),c=Object(i.a)(r,2),l=c[0],s=c[1],u=o.a.useState(""),p=Object(i.a)(u,2),m=p[0],_=p[1],h=o.a.useContext(d);return o.a.useEffect((function(){s(h.name),_(h.about)}),[h]),o.a.createElement(f,{name:"edit-profile",title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({name:l,about:m})}},o.a.createElement("div",{className:"popup__input-container"},o.a.createElement("input",{type:"text",id:"name",name:"name",className:"popup__name popup__input",placeholder:"\u0418\u043c\u044f",value:l||"",onChange:function(e){s(e.target.value)},required:!0,minLength:"2",maxLength:"40"}),o.a.createElement("span",{className:"popup__input-error",id:"name-error"})),o.a.createElement("div",{className:"popup__input-container"},o.a.createElement("input",{type:"text",id:"job",name:"about",className:"popup__job popup__input",placeholder:"\u041f\u0440\u043e\u0444\u0435\u0441\u0441\u0438\u044f",value:m||"",onChange:function(e){_(e.target.value)},required:!0,minLength:"2",maxLength:"200"}),o.a.createElement("span",{className:"popup__input-error",id:"job-error"})))};var C=function(e){var t=e.isOpen,a=e.onClose,n=e.onUpdateAvatar,r=o.a.useRef();return o.a.createElement(f,{name:"edit-avatar",title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",submit:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",isOpen:t,onClose:a,onSubmit:function(e){e.preventDefault(),n({avatar:r.current.value})}},o.a.createElement("div",{className:"popup__input-container"},o.a.createElement("input",{type:"url",id:"link",name:"avatar",className:"popup__job popup__job_theme_place popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u0430\u0432\u0430\u0442\u0430\u0440",required:!0,ref:r}),o.a.createElement("span",{className:"popup__input-error",id:"link-error"})))};var g=function(e){var t=e.onClose,a=e.isOpen,n=e.onAddPlace,r=o.a.useRef(),c=o.a.useRef();return o.a.createElement(f,{name:"add-place",title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",submit:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c",isOpen:a,onClose:t,onSubmit:function(e){e.preventDefault(),n({name:r.current.value,link:c.current.value})}},o.a.createElement("div",{className:"popup__input-container"},o.a.createElement("input",{type:"text",id:"place",name:"name",className:"popup__name popup__name_theme_place popup__input",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",required:!0,minLength:"1",maxLength:"30",ref:r}),o.a.createElement("span",{className:"popup__input-error",id:"place-error"})),o.a.createElement("div",{className:"popup__input-container"},o.a.createElement("input",{type:"url",id:"link",name:"link",className:"popup__job popup__job_theme_place popup__input",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",required:!0,ref:c}),o.a.createElement("span",{className:"popup__input-error",id:"link-error"})))},O=function(){var e=o.a.useState(!1),t=Object(i.a)(e,2),a=t[0],n=t[1],r=o.a.useState(!1),c=Object(i.a)(r,2),s=c[0],u=c[1],_=o.a.useState(!1),v=Object(i.a)(_,2),b=v[0],O=v[1],y=o.a.useState(null),j=Object(i.a)(y,2),U=j[0],S=j[1],L=o.a.useState({}),A=Object(i.a)(L,2),D=A[0],P=A[1],R=o.a.useState([]),x=Object(i.a)(R,2),I=x[0],T=x[1];o.a.useEffect((function(){k.getAllInfo().then((function(e){var t=Object(i.a)(e,2),a=t[0],n=t[1];T(a),P(n)})).catch((function(e){console.log(e)}))}),[]);var q=function(){n(!1),u(!1),O(!1),S(null)};return o.a.createElement(d.Provider,{value:D},o.a.createElement("div",{className:"page"},o.a.createElement("div",{className:"page__container"},o.a.createElement(p,null),o.a.createElement(h,{onEditAvatar:function(){O(!0)},onEditProfile:function(){n(!0)},onAddPlace:function(){u(!0)},onCardClick:function(e){S(e)},onCardDelete:function(e){k.deleteCard(e).then((function(){var t=I.filter((function(t){return t._id!==e}));T(t)})).catch((function(e){console.log(e)}))},onCardLike:function(e){var t=e.likes.some((function(e){return e._id===D._id}));k.putLike(e._id,!t).then((function(t){var a=I.map((function(a){return a._id===e._id?t:a}));T(a)})).catch((function(e){console.log(e)}))},onCardDislike:function(e){var t=e.likes.some((function(e){return e._id===D._id}));k.removeLike(e._id,!t).then((function(t){var a=I.map((function(a){return a._id===e._id?t:a}));T(a)})).catch((function(e){console.log(e)}))},cards:I}),o.a.createElement(m,null),o.a.createElement(N,{isOpen:a,onClose:q,onUpdateUser:function(e){k.setUserInfo(e).then((function(e){P(e),q()})).catch((function(e){console.log(e)}))}}),o.a.createElement(C,{isOpen:b,onClose:q,onUpdateAvatar:function(e){k.editAvatar(e).then((function(e){P(e),q()})).catch((function(e){console.log(e)}))}}),o.a.createElement(g,{isOpen:s,onClose:q,onAddPlace:function(e){k.addCard(e).then((function(e){T([e].concat(Object(l.a)(I))),q()})).catch((function(e){console.log(e)}))}}),o.a.createElement(f,{name:"delete",title:"\u0412\u044b \u0443\u0432\u0435\u0440\u0435\u043d\u043d\u044b?",submit:"\u0414\u0430"}),o.a.createElement(E,{name:"photo-zoom",card:U,onClose:q}))))};c.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(O,null)),document.getElementById("root"))},6:function(e,t,a){e.exports=a.p+"static/media/logo-mesto.c6f11019.svg"}},[[10,1,2]]]);
//# sourceMappingURL=main.9af54ebd.chunk.js.map