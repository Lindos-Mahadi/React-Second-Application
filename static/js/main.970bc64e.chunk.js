(this.webpackJsonplindos=this.webpackJsonplindos||[]).push([[0],{48:function(e,a,t){e.exports=t(79)},53:function(e,a,t){},79:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),l=t(21),c=t.n(l),m=t(5),o=(t(53),t(54),t(55),t(6)),s=t.n(o),i=t(15),u=t(20),p=t(16),d=t.n(p),E=function(){var e=Object(n.useState)([]),a=Object(u.a)(e,2),t=a[0],l=a[1];Object(n.useEffect)((function(){c()}),[]);var c=function(){var e=Object(i.a)(s.a.mark((function e(){var a;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("http://localhost:3002/users");case 2:a=e.sent,l(a.data.reverse());case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),o=function(){var e=Object(i.a)(s.a.mark((function e(a){return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.delete("http://localhost:3002/users/".concat(a));case 2:c();case 3:case"end":return e.stop()}}),e)})));return function(a){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-10 mx-auto"},r.a.createElement("h1",null,"Home Page "),r.a.createElement("table",{className:"table table-dark table-hover"},r.a.createElement("thead",{className:"thead-info",width:"100"},r.a.createElement("tr",null,r.a.createElement("th",{scope:"col"},"#"),r.a.createElement("th",{scope:"col"},"Name"),r.a.createElement("th",{scope:"col"},"User Name"),r.a.createElement("th",{scope:"col"},"E-mail"),r.a.createElement("th",{scope:"col"},"Action"))),r.a.createElement("tbody",{className:"table-info"},t.map((function(e,a){return r.a.createElement("tr",null,r.a.createElement("th",{scope:"row"},a+1),r.a.createElement("td",null,e.name),r.a.createElement("td",null,e.username),r.a.createElement("td",null,e.email),r.a.createElement("td",null,r.a.createElement(m.b,{className:"btn btn-info mr-2",to:"/users/".concat(e.id)},"View"),r.a.createElement(m.b,{className:"btn btn-outline-primary mr-2",to:"/users/edit/".concat(e.id)},"Edit"),r.a.createElement(m.b,{className:"btn btn-danger",onClick:function(){return o(e.id)}},"Delete")))}))))))))},b=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-12"},r.a.createElement("h1",{className:"text-center"},"About component"),r.a.createElement("p",{className:"lead"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis culpa laborum veniam modi id laboriosam aliquid veritatis magnam expedita cum corrupti inventore voluptas dolorem quaerat at temporibus natus aperiam facilis, iste est voluptatum accusantium deserunt reiciendis. Tempore perspiciatis sequi cumque eum provident ipsum cupiditate quas ea? Ratione, inventore veniam!"),r.a.createElement("p",{className:"lead"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis culpa laborum veniam modi id laboriosam aliquid veritatis magnam expedita cum corrupti inventore voluptas dolorem quaerat at temporibus natus aperiam facilis, iste est voluptatum accusantium deserunt reiciendis. Tempore perspiciatis sequi cumque eum provident ipsum cupiditate quas ea? Ratione, inventore veniam!"),r.a.createElement("p",{className:"lead"},"Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellat debitis culpa laborum veniam modi id laboriosam aliquid veritatis magnam expedita cum corrupti inventore voluptas dolorem quaerat at temporibus natus aperiam facilis, iste est voluptatum accusantium deserunt reiciendis. Tempore perspiciatis sequi cumque eum provident ipsum cupiditate quas ea? Ratione, inventore veniam!")))))},f=t(94),v=t(32),N=t.n(v),h=t(33),g=t.n(h),x=function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("h1",{className:"display-3 text-center"},"CONTACT PAGE"),r.a.createElement("h3",{className:"text-center"},"CONTACT PAGE NOT COMPLETE"),r.a.createElement("div",{className:"col-md-5"},r.a.createElement("form",{action:""},r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{for:"email",className:"form-label"},"E-mail or UserName"),r.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"E-mail or UserName",required:!0,autoComplete:"off"})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{for:"password",className:"form-label"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password",required:!0})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{for:"message",className:"form-label"},"Message"),r.a.createElement("textarea",{className:"form-control",id:"message"})),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(f.a,{variant:"contained",color:"primary"},"Registration | ",r.a.createElement(N.a,null)),r.a.createElement(f.a,{variant:"contained",color:"secondary"},"cancel | ",r.a.createElement(g.a,null))))),r.a.createElement("div",{className:"col-2 d-flex justify-content-center"},r.a.createElement("div",{className:"border"})),r.a.createElement("div",{className:"col-md-5"},r.a.createElement("form",{action:""},r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{for:"fname",className:"form-label"},"First Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"fname",placeholder:"First Name",required:!0})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{for:"lname",className:"form-label"},"Last Name"),r.a.createElement("input",{type:"text",className:"form-control",id:"lname",placeholder:"Last Name",required:!0})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{for:"phone",className:"form-label"},"Phone"),r.a.createElement("input",{type:"phone",className:"form-control",id:"phone",placeholder:"Phone",required:!0,autoComplete:"off"})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{for:"email",className:"form-label"},"E-mail"),r.a.createElement("input",{type:"email",className:"form-control",id:"email",placeholder:"E-mail",required:!0,autoComplete:"off"})),r.a.createElement("div",{className:"mb-3"},r.a.createElement("label",{for:"password",className:"form-label"},"Password"),r.a.createElement("input",{type:"password",className:"form-control",id:"password",placeholder:"Password"})),r.a.createElement("div",{className:"d-flex justify-content-between"},r.a.createElement(f.a,{variant:"contained",color:"primary"},"Registration | ",r.a.createElement(N.a,null)),r.a.createElement(f.a,{variant:"contained",color:"secondary"},"cancel | ",r.a.createElement(g.a,null))))))))},w=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-secondary"},r.a.createElement(m.c,{className:"navbar-brand text-white",to:"/"},"Navbar"),r.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navNav"},r.a.createElement("span",{class:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse ",id:"navNav"},r.a.createElement("ul",{className:"navbar-nav ml-auto text-primary"},r.a.createElement("li",{className:"nav-item active"},r.a.createElement(m.c,{className:"nav-link",exact:!0,to:"/"},"Home")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.c,{className:"nav-link",exact:!0,to:"/about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement(m.c,{className:"nav-link",exact:!0,to:"/contact"},"Contact"))),r.a.createElement(m.b,{className:"btn btn-outline-primary",to:"/users/add"},"Add User"))))},y=t(22),O=t(24),j=t(3),q=function(){var e=Object(j.g)(),a=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),t=Object(u.a)(a,2),l=t[0],c=t[1],m=l.name,o=l.username,p=l.email,E=l.phone,b=l.website,f=function(e){c(Object(O.a)(Object(O.a)({},l),{},Object(y.a)({},e.target.name,e.target.value)))},v=function(){var a=Object(i.a)(s.a.mark((function a(t){return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t.preventDefault(),a.next=3,d.a.post("http://localhost:3002/users",l);case 3:e.push("/");case 4:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"w-75 mx-auto shadow p-5"},r.a.createElement("h2",{className:"text-center mb-4"},"Add A User"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(e){return v(e)}},r.a.createElement("div",{className:"form-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:m,onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your UserName",name:"username",value:o,onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group mb-3"},r.a.createElement("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail",name:"email",value:p,onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group mb-3"},r.a.createElement("input",{type:"phone",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:E,onChange:function(e){return f(e)}})),r.a.createElement("div",{className:"form-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:b,onChange:function(e){return f(e)}})),r.a.createElement("button",{className:"btn btn-primary btn-block"},"SUBMIT")))))},C=function(){var e=Object(j.h)().id,a=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),t=Object(u.a)(a,2),l=t[0],c=t[1];Object(n.useEffect)((function(){o()}),[]);var o=function(){var a=Object(i.a)(s.a.mark((function a(){var t;return s.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,d.a.get("http://localhost:3002/users/".concat(e));case 2:t=a.sent,c(t.data);case 4:case"end":return a.stop()}}),a)})));return function(){return a.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"col-md-4 mx-auto "},r.a.createElement("h1",{className:"display-4 text-center"},"USER ID : ",e),r.a.createElement("ul",{className:"list-group mx-auto"},r.a.createElement("li",{className:"list-group-item"},"Name : ",l.name),r.a.createElement("li",{className:"list-group-item"},"User Name : ",l.username),r.a.createElement("li",{className:"list-group-item"},"E-mail : ",l.email),r.a.createElement("li",{className:"list-group-item"},"Phone : ",l.phone),r.a.createElement("li",{className:"list-group-item"},"Website : ",l.website)),r.a.createElement("br",null),r.a.createElement(m.b,{className:"btn btn-primary btn-block",to:"/"},"BACK TO HOME"),r.a.createElement("br",null),r.a.createElement("div",{className:"border-bottom"})))))},k=function(){var e=Object(j.g)(),a=Object(j.h)().id,t=Object(n.useState)({name:"",username:"",email:"",phone:"",website:""}),l=Object(u.a)(t,2),c=l[0],m=l[1],o=c.name,p=c.username,E=c.email,b=c.phone,f=c.website,v=function(e){m(Object(O.a)(Object(O.a)({},c),{},Object(y.a)({},e.target.name,e.target.value)))};Object(n.useEffect)((function(){h()}),[]);var N=function(){var t=Object(i.a)(s.a.mark((function t(n){return s.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n.preventDefault(),t.next=3,d.a.put("http://localhost:3002/users/".concat(a),c);case 3:e.push("/");case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),h=function(){var e=Object(i.a)(s.a.mark((function e(){var t;return s.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,d.a.get("http://localhost:3002/users/".concat(a));case 2:t=e.sent,m(t.data);case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return r.a.createElement("div",null,r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"w-75 mx-auto shadow p-5"},r.a.createElement("h2",{className:"text-center mb-4"},"Edit A User"),r.a.createElement("br",null),r.a.createElement("form",{onSubmit:function(e){return N(e)}},r.a.createElement("div",{className:"form-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Name",name:"name",value:o,onChange:function(e){return v(e)}})),r.a.createElement("div",{className:"form-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your UserName",name:"username",value:p,onChange:function(e){return v(e)}})),r.a.createElement("div",{className:"form-group mb-3"},r.a.createElement("input",{type:"email",className:"form-control form-control-lg",placeholder:"Enter Your E-mail",name:"email",value:E,onChange:function(e){return v(e)}})),r.a.createElement("div",{className:"form-group mb-3"},r.a.createElement("input",{type:"phone",className:"form-control form-control-lg",placeholder:"Enter Your Phone Number",name:"phone",value:b,onChange:function(e){return v(e)}})),r.a.createElement("div",{className:"form-group mb-3"},r.a.createElement("input",{type:"text",className:"form-control form-control-lg",placeholder:"Enter Your Website Name",name:"website",value:f,onChange:function(e){return v(e)}})),r.a.createElement("button",{className:"btn btn-warning btn-block"},"UPDATE")))))},P=function(){return r.a.createElement("div",null,r.a.createElement(w,null),r.a.createElement(j.d,null,r.a.createElement(j.b,{exact:!0,path:"/",component:E}),r.a.createElement(j.b,{exact:!0,path:"/about",component:b}),r.a.createElement(j.b,{exact:!0,path:"/contact",component:x}),r.a.createElement(j.b,{exact:!0,path:"/users/add",component:q}),r.a.createElement(j.b,{exact:!0,path:"/users/:id",component:C}),r.a.createElement(j.b,{exact:!0,path:"/users/edit/:id",component:k}),r.a.createElement(j.a,{to:"/"})))};c.a.render(r.a.createElement(r.a.Fragment,null,r.a.createElement(m.a,null,r.a.createElement(P,null))),document.getElementById("root"))}},[[48,1,2]]]);
//# sourceMappingURL=main.970bc64e.chunk.js.map