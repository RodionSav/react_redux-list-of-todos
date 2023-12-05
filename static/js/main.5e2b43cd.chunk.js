(this["webpackJsonpreact_redux-list-of-todos"]=this["webpackJsonpreact_redux-list-of-todos"]||[]).push([[0],{25:function(e,t,c){},27:function(e,t,c){"use strict";c.r(t);var n=c(7),a=c.n(n),s=c(6),r=c(15),i=c(5),l=c(13),o=c(14),d=function(e){return{type:"currentTodo/SET",payload:e}},u=function(){return{type:"currentTodo/REMOVE"}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"currentTodo/SET":return t.payload;case"currentTodo/REMOVE":return null;default:return e}},h=c(4),b={status:"all",query:""},f=function(e){return{type:"filter/QUERY",payload:e}},O=function(e){return{type:"filter/STATUS",payload:e}},m=function(){return{type:"filter/CLEAR"}},x=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:b,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"filter/STATUS":return Object(h.a)(Object(h.a)({},e),{},{status:t.payload});case"filter/QUERY":return Object(h.a)(Object(h.a)({},e),{},{query:t.payload});case"filter/CLEAR":return Object(h.a)(Object(h.a)({},e),{},{query:""});default:return e}},v=function(e){return{type:"todo/SET",payload:e}},p=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;return"todo/SET"===t.type?t.payload:e},y=Object(i.combineReducers)({currentTodo:j,filter:x,todos:p}),N=Object(i.createStore)(y,Object(l.composeWithDevTools)(Object(i.applyMiddleware)(o.a))),g=c(0),T=(c(23),c(24),c(3)),E=c(11),S=c.n(E),w=s.b,k=s.c;function C(e){var t,c="https://mate-academy.github.io/react_dynamic-list-of-todos/api"+e+".json";return(t=300,new Promise((function(e){setTimeout(e,t)}))).then((function(){return fetch(c)})).then((function(e){return e.json()}))}var R=function(){return C("/todos")},A=(c(25),c(1)),L=function(){return Object(A.jsx)("div",{className:"Loader","data-cy":"loader",children:Object(A.jsx)("div",{className:"Loader__content"})})},q=function(){var e=k((function(e){return e.todos})),t=Object(g.useState)(!1),c=Object(T.a)(t,2),n=c[0],a=c[1],s=w(),r=k((function(e){return e.currentTodo})),i=e.find((function(e){return(null===r||void 0===r?void 0:r.id)===e.id}));Object(g.useEffect)((function(){a(!0),R().then((function(e){return s(v(e))})).finally((function(){return a(!1)}))}),[s]);var l=k((function(e){return e.filter})),o=l.status,u=l.query,j=Object(g.useMemo)((function(){return e.filter((function(e){switch(o){case"all":default:return!0;case"active":return!e.completed;case"completed":return e.completed}})).filter((function(e){return e.title.toLowerCase().includes(u.toLowerCase())}))}),[e,o,u]);return Object(A.jsxs)(A.Fragment,{children:[!j.length&&!n&&Object(A.jsx)("p",{className:"notification is-warning",children:"There are no todos matching current filter criteria"}),n&&Object(A.jsx)(L,{}),j.length&&!n&&Object(A.jsxs)("table",{className:"table is-narrow is-fullwidth",children:[Object(A.jsx)("thead",{children:Object(A.jsxs)("tr",{children:[Object(A.jsx)("th",{children:"#"}),Object(A.jsx)("th",{children:Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:"fas fa-check"})})}),Object(A.jsx)("th",{children:"Title"}),Object(A.jsx)("th",{children:" "})]})}),Object(A.jsx)("tbody",{children:!!j.length&&j.map((function(e){return Object(A.jsxs)("tr",{"data-cy":"todo",className:S()({"has-background-info-light":(null===i||void 0===i?void 0:i.id)===e.id}),children:[Object(A.jsx)("td",{className:"is-vcentered",children:e.id}),Object(A.jsx)("td",{className:"is-vcentered",children:e.completed&&Object(A.jsx)("span",{className:"icon","data-cy":"iconCompleted",children:Object(A.jsx)("i",{className:"fas fa-check"})})}),Object(A.jsx)("td",{className:"is-vcentered is-expanded",children:Object(A.jsx)("p",{className:e.completed?"has-text-success":"has-text-danger",children:e.title})}),Object(A.jsx)("td",{className:"has-text-right is-vcentered",children:Object(A.jsx)("button",{"data-cy":"selectButton",className:"button",type:"button",onClick:function(){s(d(e))},children:Object(A.jsx)("span",{className:"icon",children:Object(A.jsx)("i",{className:S()("far",{"fa-eye":(null===i||void 0===i?void 0:i.id)!==e.id,"fa-eye-slash":(null===i||void 0===i?void 0:i.id)===e.id})})})})})]},e.id)}))})]})]})},_=function(){var e=w(),t=k((function(e){return e.filter})),c=t.query,n=t.status;return Object(A.jsxs)("form",{className:"field has-addons",onSubmit:function(e){return e.preventDefault()},children:[Object(A.jsx)("p",{className:"control",children:Object(A.jsx)("span",{className:"select",children:Object(A.jsxs)("select",{"data-cy":"statusSelect",value:n,onChange:function(t){e(O(t.target.value))},children:[Object(A.jsx)("option",{value:"all",children:"All"}),Object(A.jsx)("option",{value:"active",children:"Active"}),Object(A.jsx)("option",{value:"completed",children:"Completed"})]})})}),Object(A.jsxs)("p",{className:"control is-expanded has-icons-left has-icons-right",children:[Object(A.jsx)("input",{"data-cy":"searchInput",type:"text",value:c,onChange:function(t){e(f(t.target.value))},className:"input",placeholder:"Search..."}),Object(A.jsx)("span",{className:"icon is-left",children:Object(A.jsx)("i",{className:"fas fa-magnifying-glass"})}),Object(A.jsx)("span",{className:"icon is-right",style:{pointerEvents:"all"},children:c&&Object(A.jsx)("button",{"aria-label":"none","data-cy":"clearSearchButton",type:"button",className:"delete",onClick:function(){e(m())}})})]})]})},M=function(){var e=w(),t=k((function(e){return e.currentTodo})),c=k((function(e){return e.todos})),n=Object(g.useState)(),a=Object(T.a)(n,2),s=a[0],r=a[1],i=Object(g.useState)(!1),l=Object(T.a)(i,2),o=l[0],d=l[1],j=c.find((function(e){return e.id===(null===t||void 0===t?void 0:t.id)}));Object(g.useEffect)((function(){var e;j&&(d(!0),(e=j.id,C("/users/".concat(e))).then((function(e){return r(e)})).finally((function(){return d(!1)})))}),[j]);return Object(A.jsxs)("div",{className:"modal is-active","data-cy":"modal",children:[Object(A.jsx)("div",{className:"modal-background"}),o&&Object(A.jsx)(L,{}),!o&&Object(A.jsxs)("div",{className:"modal-card",children:[Object(A.jsxs)("header",{className:"modal-card-head",children:[Object(A.jsx)("div",{className:"modal-card-title has-text-weight-medium","data-cy":"modal-header",children:"Todo #".concat(null===j||void 0===j?void 0:j.id)}),Object(A.jsx)("button",{type:"button",className:"delete","data-cy":"modal-close",onClick:function(){e(u())}})]}),Object(A.jsxs)("div",{className:"modal-card-body",children:[Object(A.jsx)("p",{className:"block","data-cy":"modal-title",children:null===j||void 0===j?void 0:j.title}),Object(A.jsxs)("p",{className:"block","data-cy":"modal-user",children:[null!==j&&void 0!==j&&j.completed?Object(A.jsx)("strong",{className:"has-text-success",children:"Done"}):Object(A.jsx)("strong",{className:"has-text-danger",children:"Planned"})," by ",Object(A.jsx)("a",{href:"mailto:".concat(null===s||void 0===s?void 0:s.email),children:null===s||void 0===s?void 0:s.name})]})]})]})]})},U=function(){var e=w(),t=k((function(e){return e.currentTodo}));return Object(g.useEffect)((function(){R().then((function(t){return e(v(t))})).catch((function(e){throw new Error(e)}))}),[e]),Object(A.jsxs)(A.Fragment,{children:[Object(A.jsx)("div",{className:"section",children:Object(A.jsx)("div",{className:"container",children:Object(A.jsxs)("div",{className:"box",children:[Object(A.jsx)("h1",{className:"title",children:"Todos:"}),Object(A.jsx)("div",{className:"block",children:Object(A.jsx)(_,{})}),Object(A.jsx)("div",{className:"block",children:Object(A.jsx)(q,{})})]})})}),t&&Object(A.jsx)(M,{})]})},B=function(){return Object(A.jsx)(s.a,{store:N,children:Object(A.jsx)(r.a,{children:Object(A.jsx)(U,{})})})};a.a.render(Object(A.jsx)(B,{}),document.getElementById("root"))}},[[27,1,2]]]);
//# sourceMappingURL=main.5e2b43cd.chunk.js.map