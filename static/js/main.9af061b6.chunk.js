(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{101:function(e,a,t){e.exports=t(116)},106:function(e,a,t){},107:function(e,a,t){},116:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),c=t(11),l=t.n(c),i=(t(106),t(20)),o=t(25),s=t(38),u=t(6),m=(t(107),t(19)),d=t(36),p=t(13),v=t(61),f=t.n(v),b=t(17),_=t.n(b),E=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],c=a[1];return r.a.createElement("div",{className:_.a.navWrapper},r.a.createElement("div",{onClick:function(){c(!t)},className:_.a.menu},t?r.a.createElement("span",{className:"".concat(_.a.spanMenu," ").concat(_.a.spanMenuFocus)},"Hide Menu"):r.a.createElement("span",{className:_.a.spanMenu},"Show menu")),r.a.createElement("ul",{className:t?"".concat(_.a.navList," ").concat(_.a.showNav):_.a.navList},r.a.createElement(d.b,{exact:!0,to:"/",className:_.a.navLink,activeClassName:_.a.active},"Home"),r.a.createElement(d.b,{to:"/preJunior",className:_.a.navLink,activeClassName:_.a.active},"preJunior"),r.a.createElement(d.b,{to:"/junior",className:_.a.navLink,activeClassName:_.a.active},"Junior"),r.a.createElement(d.b,{to:"/juniorPlus",className:_.a.navLink,activeClassName:_.a.active},"Junior+")))},k=t(78),g=t.n(k),h=t(40),O=t.n(h),j=t(64),T=t.n(j),C=t(79),N=t.n(C),y=function(){return r.a.createElement("div",{className:T.a.avatar},r.a.createElement("div",{className:T.a.img},r.a.createElement("img",{src:N.a,alt:""})))},w=function(e){return r.a.createElement("div",{className:O.a.messageWrapper},r.a.createElement(y,null),r.a.createElement("div",{className:O.a.message},r.a.createElement("div",{className:O.a.name},e.name),r.a.createElement("div",{className:O.a.text},e.text),r.a.createElement("div",{className:O.a.time},"20:00")))},S=r.a.memo((function(e){return console.log("dialogs"),r.a.createElement("div",{className:g.a.dialogs},r.a.createElement(w,{name:e.dialogsData[0].name,text:e.dialogsData[0].text}))})),x=t(47),H=t.n(x),I=r.a.memo((function(e){return console.log("input"),r.a.createElement("div",{className:H.a.wrapper},r.a.createElement("input",{className:e.correctField?H.a.input:"".concat(H.a.input," ").concat(H.a.error),onChange:e.onChangeHandler,onKeyPress:e.onKeyPressHandler,onBlur:e.onBlurHandler,value:e.valueInp,placeholder:e.correctField?e.placeholderDefault:"This field must be filled",autoFocus:e.autoFocus,type:"text"}))})),B=t(48),D=t.n(B),W=r.a.memo((function(e){return console.log("button"),r.a.createElement("div",{className:D.a.wrapper},r.a.createElement("button",{className:"red"===e.typeOfButton?"".concat(D.a.btn," ").concat(D.a.cngBtn):D.a.btn,onClick:e.onClickBtnHandler},e.title))})),F=t(80),L=t.n(F),M=r.a.memo((function(e){return console.log("names number"),r.a.createElement("div",{className:L.a.names},"Number of names = ",e.namesData.length)})),P=t(65),A=t.n(P),K=t(49),J=t.n(K),R=function(e){return r.a.createElement("div",{className:J.a.wrapper},r.a.createElement("div",{className:J.a.box,onClick:e.onClickCheckbox},e.checkbox&&r.a.createElement("div",null,r.a.createElement("span",{className:J.a.check}),r.a.createElement("span",{className:J.a.check}))))},V=function(){var e=Object(n.useState)(""),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(!0),i=Object(u.a)(l,2),o=i[0],s=i[1],m=Object(n.useState)(!1),d=Object(u.a)(m,2),p=d[0],v=d[1],f=Object(n.useState)(!1),b=Object(u.a)(f,2),_=(b[0],b[1]);return r.a.createElement("div",null,r.a.createElement("div",{className:A.a.title},"TASK 4"),r.a.createElement("div",{className:A.a.wrapper},r.a.createElement(R,{checkbox:p,onClickCheckbox:function(){v(!p)}}),r.a.createElement(I,{valueInp:t,correctField:o,onChangeHandler:function(e){c(e.currentTarget.value),s(!0)},onKeyPressHandler:function(e){13===e.charCode&&""!==t.trim()?(alert("I work"),c("")):13===e.charCode&&""===t.trim()&&(s(!1),c(""))},onBlurHandler:function(){_(!1)},placeholderDefault:""}),r.a.createElement(W,{onClickBtnHandler:function(){alert("I pressed")},title:"SEND"})))},G=t(18),Y=t.n(G),Q=r.a.memo((function(e){var a=Object(n.useState)(""),t=Object(u.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(null),o=Object(u.a)(i,2),s=o[0],m=o[1],d={display:e.active?"block":"none"};return r.a.createElement("div",{className:Y.a.inputWrapper},r.a.createElement("div",{className:Y.a.input,style:d},r.a.createElement("h3",null,"Add New Task"),r.a.createElement("input",{className:s?Y.a.error:"",placeholder:s||"",type:"text",value:c,onChange:function(e){l(e.currentTarget.value),m(null)},onKeyPress:function(a){13===a.charCode&&""!==c.trim()?(e.addNewTask(c),l(""),e.setActive(!1)):m("you didn't enter eny character")}}),r.a.createElement("button",{onClick:function(){""!==c.trim()?(e.addNewTask(c),l(""),e.setActive(!1)):m("you didn't enter eny character")},className:Y.a.TaskAdd},"+"),r.a.createElement("h3",{className:Y.a.close,onClick:function(){e.setActive(!1),m(null)}},"close")))})),X=t(152),Z=r.a.memo((function(e){var a=Object(n.useState)(!1),t=Object(u.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(""),o=Object(u.a)(i,2),s=o[0],m=o[1],d=Object(n.useState)(!0),p=Object(u.a)(d,2),v=p[0],f=p[1];return c?r.a.createElement(X.a,{error:!v,value:s,onChange:function(e){m(e.currentTarget.value),f(!0)},onBlur:function(){""!==s.trim()?(l(!1),e.getNewInputValue(s)):f(!1)},onKeyPress:function(a){13===a.charCode&&""!==s.trim()?(l(!1),e.getNewInputValue(s)):f(!1)},autoFocus:!0,helperText:v?"":"Task name is missing",label:"edit task"}):r.a.createElement("span",{onDoubleClick:function(){l(!0),m(e.itemValue)}},e.itemValue)})),z=t(153),q=t(148),U=t(146),$=t(147),ee=r.a.memo((function(e){console.log("TODO");var a=Object(n.useState)(!1),t=Object(u.a)(a,2),c=t[0],l=t[1],i=e.tasks.map((function(a){return r.a.createElement("li",{key:a.id,className:a.isDone?"".concat(Y.a.item," ").concat(Y.a.completedTask):Y.a.item},r.a.createElement(z.a,{onChange:function(t){e.changeStatus(a.id,t.currentTarget.checked,e.id)},checked:a.isDone,color:"primary"}),r.a.createElement(Z,{itemValue:a.item,getNewInputValue:function(t){e.changeItemTask(a.id,t,e.id)}}),r.a.createElement(U.a,{onClick:function(){e.deleteTask(a.id,e.id)},"aria-label":"delete"},r.a.createElement($.a,null)))}));return r.a.createElement("div",{className:Y.a.todo},r.a.createElement("h2",null,r.a.createElement(Z,{itemValue:e.title,getNewInputValue:function(a){e.changeTodoListTitle(e.id,a)}}),r.a.createElement(U.a,{onClick:function(){e.removeTodoList(e.id)},"aria-label":"delete"},r.a.createElement($.a,null))),r.a.createElement("ul",{className:Y.a.listItem},i),r.a.createElement("div",{className:Y.a.btns},r.a.createElement("div",{className:Y.a.btnsBases},r.a.createElement(q.a,{variant:"all"===e.filterTask?"contained":"text",color:"primary",onClick:function(){return e.changeTasks("all",e.id)}},"All"),r.a.createElement(q.a,{variant:"active"===e.filterTask?"contained":"text",color:"primary",onClick:function(){return e.changeTasks("active",e.id)}},"Active"),r.a.createElement(q.a,{variant:"completed"===e.filterTask?"contained":"text",color:"primary",onClick:function(){return e.changeTasks("completed",e.id)}},"Completed")),r.a.createElement("div",{className:Y.a.btnsImportance},r.a.createElement(q.a,{variant:"height"===e.filterTask?"contained":"text",color:"primary",onClick:function(){return e.changeTasks("height",e.id)}},"Important"),r.a.createElement(q.a,{variant:"medium"===e.filterTask?"contained":"text",color:"primary",onClick:function(){return e.changeTasks("medium",e.id)}},"Medium"),r.a.createElement(q.a,{variant:"low"===e.filterTask?"contained":"text",color:"primary",onClick:function(){return e.changeTasks("low",e.id)}},"Low")),r.a.createElement(q.a,{style:{width:"100%"},className:c?Y.a.active:"",color:"secondary",onClick:function(){return l(!c)}},"Add Task")),r.a.createElement(Q,{addNewTask:function(a){e.addNewTask(a,e.id)},active:c,setActive:l}))})),ae=t(66),te=t.n(ae),ne=t(145),re=t(149),ce=r.a.memo((function(e){console.log("itemForm");var a=Object(n.useState)(""),t=Object(u.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(null),o=Object(u.a)(i,2),s=o[0],m=o[1];return r.a.createElement(ne.a,null,r.a.createElement("div",{className:te.a.itemForm},r.a.createElement("div",{className:te.a.wrapper},r.a.createElement(X.a,{error:!!s,value:c,onChange:function(e){l(e.currentTarget.value),m(null)},onKeyPress:function(a){13===a.charCode&&""!==c.trim()?(e.addItem(c),l("")):m("you didn't enter eny character")},label:"Add new TodoList",helperText:s?"Incorrect entry.":""}),r.a.createElement(U.a,{onClick:function(){""!==c.trim()?(e.addItem(c),l("")):m("you didn't enter eny character")},color:"primary"},r.a.createElement(re.a,null)))))})),le=t(150),ie=r.a.memo((function(e){var a=e.todoLists.map((function(a){var t=e.tasks[a.id];switch(a.filterTask){case"active":t=t.filter((function(e){return!e.isDone}));break;case"completed":t=t.filter((function(e){return e.isDone}));break;case"height":t=t.filter((function(e){return"height"===e.importance}));break;case"medium":t=t.filter((function(e){return"medium"===e.importance}));break;case"low":t=t.filter((function(e){return"low"===e.importance}))}return r.a.createElement(le.a,{item:!0,key:a.id},r.a.createElement(ne.a,null,r.a.createElement(ee,{id:a.id,title:a.title,tasks:t,changeTasks:e.changeTasks,addNewTask:e.addNewTask,deleteTask:e.deleteTask,changeStatus:e.changeStatus,filterTask:a.filterTask,removeTodoList:e.removeTodoList,changeItemTask:e.changeItemTask,changeTodoListTitle:e.changeTodoListTitle})))}));return r.a.createElement("div",{className:f.a.wrapper},r.a.createElement(E,null),r.a.createElement(S,{dialogsData:e.dialogsData}),r.a.createElement("div",{className:"todoListWrapper"},r.a.createElement(le.a,{container:!0},r.a.createElement("div",{className:f.a.addNewTodoList},r.a.createElement(ce,{addItem:e.addTodoList}))),r.a.createElement(le.a,{container:!0,spacing:3},a)),r.a.createElement("div",{className:"inputWrapper"},r.a.createElement(I,{valueInp:e.valueInp,correctField:e.correctField,onChangeHandler:e.onChangeHandler,onKeyPressHandler:e.onKeyPressHandler,placeholderDefault:"Write your name"}),r.a.createElement(W,{onClickBtnHandler:e.onClickBtnHandler,title:"SAY HELLO",typeOfButton:"red"})),r.a.createElement(M,{namesData:e.namesData}),r.a.createElement(V,null))})),oe=t(85),se=t.n(oe),ue=t(67),me=t.n(ue),de=t(68),pe=t.n(de),ve=function(e){return r.a.createElement("div",{className:pe.a.editSpanWrapper},e.editMode?r.a.createElement(I,{onChangeHandler:e.onChangeHandler,valueInp:e.valueInp,onBlurHandler:e.onBlurHandler,autoFocus:!0,correctField:e.correctField,placeholderDefault:"Write your status",onKeyPressHandler:e.onKeyPressHandler}):r.a.createElement("span",{className:pe.a.span,onClick:e.onClickHandler},""!==e.valueInp?e.valueInp:"You don't have any status"))};var fe,be=function(){var e=Object(n.useState)(!1),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(""),i=Object(u.a)(l,2),o=i[0],s=i[1],m=Object(n.useState)(!0),d=Object(u.a)(m,2),p=d[0],v=d[1];return r.a.createElement("div",{className:me.a.wrapper},r.a.createElement(ve,{editMode:t,valueInp:o,onBlurHandler:function(){c(!1)},onClickHandler:function(){c(!0)},correctField:p,onChangeHandler:function(e){s(e.currentTarget.value),v(!0)},onKeyPressHandler:function(e){13===e.charCode&&""!==o.trim()?(s(o),c(!1)):13===e.charCode&&""===o.trim()&&(v(!1),s(""))}}),r.a.createElement("div",{className:me.a.btnHandler},r.a.createElement(W,{onClickBtnHandler:function(){!function(e,a){var t=JSON.stringify(a);localStorage.setItem(e,t)}("data",o)},title:"Save state"}),r.a.createElement(W,{onClickBtnHandler:function(){s(function(e,a){var t=localStorage.getItem(e);return null!==t&&(a=JSON.parse(t)),a}("data",""))},title:"Restore state"})))},_e=t(41),Ee=t.n(_e),ke=r.a.memo((function(e){var a=Object(n.useState)(!0),t=Object(u.a)(a,2),c=t[0],l=t[1],i=Object(n.useState)(e.value),o=Object(u.a)(i,2),s=o[0],m=o[1],d=e.items.find((function(a){return a.value===e.value})),p=e.items.find((function(e){return e.value===s}));Object(n.useEffect)((function(){m(e.value)}),[e.value]);var v=e.items.map((function(a){return r.a.createElement("div",{className:p===a?"".concat(Ee.a.country," ").concat(Ee.a.active):Ee.a.country,key:a.value,onMouseDown:function(){e.onChange(a.value)},onMouseEnter:function(){m(a.value)}},a.country)}));return r.a.createElement("div",{className:Ee.a.wrapper,tabIndex:0,onKeyDown:function(a){if(console.log(a.keyCode),40===a.keyCode||38===a.keyCode){for(var t=0;t<e.items.length;t++)if(e.items[t].value===s){var n=40===a.keyCode?e.items[t+1]:e.items[t-1];if(n)return void e.onChange(n.value)}d||e.onChange(e.items[0].value)}13!==a.keyCode&&27!==a.keyCode||l(!0)}},r.a.createElement("h3",{className:Ee.a.active,tabIndex:0,onClick:function(){l(!c)},onBlur:function(){l(!0)}},d&&d.country),!c&&r.a.createElement("div",null,v))})),ge=t(69),he=t.n(ge),Oe=r.a.memo((function(e){return r.a.createElement("div",{className:he.a.radioWrapper},e.items.map((function(a){return r.a.createElement("div",{key:a.id,className:he.a.inputWrapper},r.a.createElement("input",{key:a.id,id:a.id,onChange:function(t){e.onChangeRadio(a.id,t.currentTarget.checked)},type:"radio",name:a.name,value:a.value,checked:a.checked}),r.a.createElement("label",{htmlFor:a.id},a.value))})))})),je=t(70),Te=t.n(je);!function(e){e.SORT="SORT",e.CHECK="CHECK"}(fe||(fe={}));var Ce=function(e,a){switch(a.type){case fe.SORT:if("up"===a.payload)return Object(o.a)(e.sort((function(e,a){return e.name>a.name?1:e.name<a.name?-1:0})));if("down"===a.payload)return Object(o.a)(e.sort((function(e,a){return e.name<a.name?1:e.name>a.name?-1:0})));break;case fe.CHECK:return Object(o.a)(e.filter((function(e){return e.age>=18})));default:return e}return[]},Ne=function(e){return{type:fe.SORT,payload:e}},ye=function(){var e=Object(n.useReducer)(Ce,[{id:"1",name:"Denis",age:27},{id:"2",name:"Andrey",age:30},{id:"3",name:"Ivan",age:13},{id:"4",name:"Misha",age:9},{id:"5",name:"Katya",age:17},{id:"6",name:"Sasha",age:18}]),a=Object(u.a)(e,2),t=a[0],c=a[1],l=t.map((function(e){return r.a.createElement("div",{key:e.id},e.name," ",e.age)}));return r.a.createElement("div",{className:Te.a.wrapper},r.a.createElement("div",null,l),r.a.createElement("div",{className:Te.a.btns},r.a.createElement(W,{title:"Sort up",onClickBtnHandler:function(){c(Ne("up"))}}),r.a.createElement(W,{title:"Sort down",onClickBtnHandler:function(){c(Ne("down"))}}),r.a.createElement(W,{title:"Adult people",onClickBtnHandler:function(){var e;c((e=18,{type:fe.CHECK,payload:e}))}})))},we=t(58),Se=t.n(we),xe=t(59),He=t.n(xe),Ie=t(155),Be=function(){var e=Object(n.useState)(0),a=Object(u.a)(e,2),t=a[0],c=a[1],l=Object(n.useState)(He()().format("HH:mm:ss")),i=Object(u.a)(l,2),o=i[0],s=i[1];return r.a.createElement("div",{className:Se.a.dateWrapper},r.a.createElement(Ie.a,{title:He()().format("MMMM Do YYYY"),placement:"top-end",arrow:!0},r.a.createElement("div",{className:Se.a.time},o)),r.a.createElement("div",{className:Se.a.btns},r.a.createElement(W,{title:"Start update time",onClickBtnHandler:function(){clearInterval(t);var e=window.setInterval((function(){return s(He()().format("HH:mm:ss"))}),1e3);c(e)}}),r.a.createElement(W,{title:"Stop update time",onClickBtnHandler:function(){clearInterval(t)}})))},De=t(46),We={loading:!1},Fe=function(e){return{type:"SET_LOADING",loading:e}},Le=t(88),Me=t.n(Le),Pe=t(151),Ae=function(){return r.a.createElement("div",{className:Me.a.preloaderWrapper},r.a.createElement(Pe.a,null))},Ke=function(){var e=[{value:"1",country:"Belarus"},{value:"2",country:"Russia"},{value:"3",country:"Ukraine"},{value:"4",country:"Italy"}],a=Object(n.useState)(e[0].value),t=Object(u.a)(a,2),c=t[0],l=t[1],s=Object(n.useState)([{id:"1",name:"contact",value:"Phone",checked:!1},{id:"2",name:"contact",value:"Mobile phone",checked:!1},{id:"3",name:"contact",value:"Email",checked:!0},{id:"4",name:"contact",value:"Fax",checked:!1}]),m=Object(u.a)(s,2),d=m[0],p=m[1],v=Object(De.b)(),f=Object(De.c)((function(e){return e.loading}));return r.a.createElement("div",null,f.loading?r.a.createElement(Ae,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(E,null),r.a.createElement(be,null),r.a.createElement(ke,{value:c,items:e,onChange:function(e){l(e)}}),r.a.createElement(Oe,{items:d,onChangeRadio:function(e,a){var t=d.map((function(e){return e.checked?Object(i.a)(Object(i.a)({},e),{},{checked:!1}):e})),n=t.find((function(a){return a.id===e}));n&&(n.checked=a,p(Object(o.a)(t)))}}),r.a.createElement(ye,null),r.a.createElement(Be,null),r.a.createElement("div",{className:se.a.btn},r.a.createElement(W,{onClickBtnHandler:function(){v(Fe(!0)),setTimeout((function(){return v(Fe(!1))}),3e3)},title:"loading"}))))},Je=function(){return r.a.createElement("div",null,r.a.createElement(E,null))},Re=function(){return r.a.createElement("div",null,r.a.createElement(E,null))};var Ve=function(){var e,a=[{id:1,name:"Denis",text:"npm start \u043d\u0430\u0436\u0438\u043c\u0430\u043b ?"},{id:2,name:"Andrey",text:"\u0414\u0430, \u043d\u0430\u0436\u0430\u043b!"},{id:3,name:"Ivan",text:"\u0427\u0442\u043e \u0442\u0430\u043a\u043e\u0435 npm ?"}],t=Object(m.v1)(),c=Object(m.v1)(),l=Object(n.useState)([{id:t,title:"My first Todo list",filterTask:"all"},{id:c,title:"My second Todo list",filterTask:"completed"}]),v=Object(u.a)(l,2),f=v[0],b=v[1],_=Object(n.useState)((e={},Object(s.a)(e,t,[{id:Object(m.v1)(),item:"React",isDone:!1,importance:"height"},{id:Object(m.v1)(),item:"\u0410\u043d\u0433\u043b\u0438\u0439\u0441\u043a\u0438\u0439",isDone:!0,importance:"medium"},{id:Object(m.v1)(),item:"JS",isDone:!0,importance:"height"},{id:Object(m.v1)(),item:"TypeScript",isDone:!1,importance:"medium"},{id:Object(m.v1)(),item:"JestTests",isDone:!1,importance:"low"}]),Object(s.a)(e,c,[{id:Object(m.v1)(),item:"German",isDone:!0,importance:"height"},{id:Object(m.v1)(),item:"English",isDone:!0,importance:"medium"},{id:Object(m.v1)(),item:"Spain",isDone:!1,importance:"height"},{id:Object(m.v1)(),item:"Chinese",isDone:!1,importance:"medium"}]),e)),E=Object(u.a)(_,2),k=E[0],g=E[1],h=Object(n.useCallback)((function(e,a){k[a]=[{id:Object(m.v1)(),item:e,isDone:!1,importance:"height"}].concat(Object(o.a)(k[a])),g(Object(i.a)({},k))}),[k]),O=Object(n.useCallback)((function(e,a){k[a]=k[a].filter((function(a){return a.id!==e})),g(Object(i.a)({},k))}),[k]),j=Object(n.useCallback)((function(e,a,t){var n=k[t].find((function(a){return a.id===e}));n&&(n.isDone=a,g(Object(i.a)({},k)))}),[k]),T=Object(n.useCallback)((function(e,a,t){var n=k[t].find((function(a){return a.id===e}));n&&(n.item=a,g(Object(i.a)({},k)))}),[k]),C=Object(n.useCallback)((function(e){var a={id:Object(m.v1)(),title:e,filterTask:"all"};b([a].concat(Object(o.a)(f))),g(Object(i.a)(Object(i.a)({},k),{},Object(s.a)({},a.id,[])))}),[f]),N=Object(n.useCallback)((function(e){var a=f.filter((function(a){return a.id!==e}));b(a),delete k[e],g(Object(i.a)({},k))}),[f]),y=Object(n.useCallback)((function(e,a){var t=f.find((function(a){return a.id===e}));t&&(t.title=a,b(Object(o.a)(f)))}),[f]),w=Object(n.useCallback)((function(e,a){var t=f.find((function(e){return e.id===a}));t&&(t.filterTask=e,b(Object(o.a)(f)))}),[f]),S=Object(n.useState)(""),x=Object(u.a)(S,2),H=x[0],I=x[1],B=Object(n.useState)(!0),D=Object(u.a)(B,2),W=D[0],F=D[1],L=Object(n.useState)([]),M=Object(u.a)(L,2),P=M[0],A=M[1],K=Object(n.useCallback)((function(e){alert("Hello ".concat(e));var a=[].concat(Object(o.a)(P),[{id:Object(m.v1)(),name:e}]);A(a)}),[]),J=Object(n.useCallback)((function(e){I(e.currentTarget.value),F(!0)}),[]),R=Object(n.useCallback)((function(e){13===e.charCode&&""!==e.currentTarget.value.trim()?(K(e.currentTarget.value.trim()),I("")):13===e.charCode&&""===e.currentTarget.value.trim()&&(F(!1),I(""))}),[]),V=Object(n.useCallback)((function(){""!==H.trim()?(K(H.trim()),I("")):(F(!1),I(""))}),[]);return r.a.createElement(d.a,null,r.a.createElement("div",null,r.a.createElement("div",{className:"App"},r.a.createElement("div",{className:"pages"},r.a.createElement(p.a,{exact:!0,path:"/",render:function(){return r.a.createElement(Re,null)}}),r.a.createElement(p.a,{path:"/preJunior",render:function(){return r.a.createElement(ie,{dialogsData:a,onClickBtnHandler:V,onChangeHandler:J,onKeyPressHandler:R,setCorrectField:F,setValueInp:I,valueInp:H,correctField:W,namesData:P,tasks:k,todoLists:f,removeTodoList:N,addNewTask:h,changeStatus:j,changeTasks:w,deleteTask:O,addTodoList:C,changeItemTask:T,changeTodoListTitle:y})}}),r.a.createElement(p.a,{path:"/junior",render:function(){return r.a.createElement(Ke,null)}}),r.a.createElement(p.a,{path:"/juniorPlus",render:function(){return r.a.createElement(Je,null)}})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var Ge=t(45),Ye=Object(Ge.b)({loading:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:We,a=arguments.length>1?arguments[1]:void 0;switch(a.type){case"SET_LOADING":return Object(i.a)(Object(i.a)({},e),{},{loading:a.loading});default:return e}}}),Qe=Object(Ge.c)(Ye);l.a.render(r.a.createElement(De.a,{store:Qe},r.a.createElement(Ve,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},17:function(e,a,t){e.exports={navWrapper:"NavBar_navWrapper__3enQr",menu:"NavBar_menu__3dqFN",spanMenu:"NavBar_spanMenu__7xDjk",spanMenuFocus:"NavBar_spanMenuFocus__3lou6",navList:"NavBar_navList__1ccpj",navLink:"NavBar_navLink__oxSz6",active:"NavBar_active__2_7ul",showNav:"NavBar_showNav__pru72"}},18:function(e,a,t){e.exports={todo:"Todo_todo__2uk5O",listItem:"Todo_listItem__1cN6X",item:"Todo_item__3cv0J",btns:"Todo_btns__aQDWB",active:"Todo_active__pgXdH",completedTask:"Todo_completedTask__3fG4K",error:"Todo_error__11Mtb",errorText:"Todo_errorText__1OwFk",inputWrapper:"Todo_inputWrapper__uDFwM",input:"Todo_input__PTueI",close:"Todo_close__1Qm_w",deleteTitle:"Todo_deleteTitle__KymjH",btnsBases:"Todo_btnsBases__11cr1",btnsImportance:"Todo_btnsImportance__17grW"}},40:function(e,a,t){e.exports={messageWrapper:"Message_messageWrapper__bb0z_",message:"Message_message__g8_f7",name:"Message_name__3DkHS",text:"Message_text__1nvIC",time:"Message_time__rySdF"}},41:function(e,a,t){e.exports={wrapper:"Select_wrapper__29yGt",country:"Select_country__3W9kg",active:"Select_active__ipBg8"}},47:function(e,a,t){e.exports={input:"Input_input__HXeZT",error:"Input_error__3GAiW"}},48:function(e,a,t){e.exports={btn:"Button_btn__38JIE",cngBtn:"Button_cngBtn__xwT2x"}},49:function(e,a,t){e.exports={box:"Checkbox_box__NIDiB",check:"Checkbox_check__IfpJc"}},58:function(e,a,t){e.exports={dateWrapper:"Time_dateWrapper__1EAmB",btns:"Time_btns__2M22O",time:"Time_time__A3BLD"}},61:function(e,a,t){},64:function(e,a,t){e.exports={img:"Avatar_img__3R9Kv"}},65:function(e,a,t){e.exports={wrapper:"PresentationComponent_wrapper__29Ftr",title:"PresentationComponent_title__2JLgb"}},66:function(e,a,t){e.exports={wrapper:"AddItemForm_wrapper__4TCPQ"}},67:function(e,a,t){e.exports={wrapper:"PresCompForEditableSpan_wrapper__jEPJZ",btnHandler:"PresCompForEditableSpan_btnHandler__2Jlc3"}},68:function(e,a,t){e.exports={editSpanWrapper:"EditableSpan_editSpanWrapper__30Jru",span:"EditableSpan_span__2BwVZ"}},69:function(e,a,t){e.exports={radioWrapper:"Radio_radioWrapper__gIvG_",inputWrapper:"Radio_inputWrapper__2OXuT"}},70:function(e,a,t){e.exports={wrapper:"People_wrapper__3_R8W",btns:"People_btns__sBsG3"}},78:function(e,a,t){e.exports={dialogs:"Dialogs_dialogs__S_1bf"}},79:function(e,a,t){e.exports=t.p+"static/media/avatar.d42bbc31.jpg"},80:function(e,a,t){e.exports={names:"NamesNumber_names__3MFFS"}},85:function(e,a,t){e.exports={btn:"Junior_btn__jTev4"}},88:function(e,a,t){e.exports={preloaderWrapper:"Preloader_preloaderWrapper__ixVke"}}},[[101,1,2]]]);
//# sourceMappingURL=main.9af061b6.chunk.js.map