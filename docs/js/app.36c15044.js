(function(e){function t(t){for(var n,c,s=t[0],i=t[1],l=t[2],u=0,b=[];u<s.length;u++)c=s[u],Object.prototype.hasOwnProperty.call(o,c)&&o[c]&&b.push(o[c][0]),o[c]=0;for(n in i)Object.prototype.hasOwnProperty.call(i,n)&&(e[n]=i[n]);d&&d(t);while(b.length)b.shift()();return r.push.apply(r,l||[]),a()}function a(){for(var e,t=0;t<r.length;t++){for(var a=r[t],n=!0,c=1;c<a.length;c++){var s=a[c];0!==o[s]&&(n=!1)}n&&(r.splice(t--,1),e=i(i.s=a[0]))}return e}var n={},c={app:0},o={app:0},r=[];function s(e){return i.p+"js/"+({}[e]||e)+"."+{"chunk-1707585a":"0b5c36bc","chunk-44eb1426":"803b9a07","chunk-5b5ae580":"6852b3d2"}[e]+".js"}function i(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,i),a.l=!0,a.exports}i.e=function(e){var t=[],a={"chunk-1707585a":1,"chunk-44eb1426":1,"chunk-5b5ae580":1};c[e]?t.push(c[e]):0!==c[e]&&a[e]&&t.push(c[e]=new Promise((function(t,a){for(var n="css/"+({}[e]||e)+"."+{"chunk-1707585a":"a8e902a9","chunk-44eb1426":"79212fc7","chunk-5b5ae580":"693e0311"}[e]+".css",o=i.p+n,r=document.getElementsByTagName("link"),s=0;s<r.length;s++){var l=r[s],u=l.getAttribute("data-href")||l.getAttribute("href");if("stylesheet"===l.rel&&(u===n||u===o))return t()}var b=document.getElementsByTagName("style");for(s=0;s<b.length;s++){l=b[s],u=l.getAttribute("data-href");if(u===n||u===o)return t()}var d=document.createElement("link");d.rel="stylesheet",d.type="text/css",d.onload=t,d.onerror=function(t){var n=t&&t.target&&t.target.src||o,r=new Error("Loading CSS chunk "+e+" failed.\n("+n+")");r.code="CSS_CHUNK_LOAD_FAILED",r.request=n,delete c[e],d.parentNode.removeChild(d),a(r)},d.href=o;var m=document.getElementsByTagName("head")[0];m.appendChild(d)})).then((function(){c[e]=0})));var n=o[e];if(0!==n)if(n)t.push(n[2]);else{var r=new Promise((function(t,a){n=o[e]=[t,a]}));t.push(n[2]=r);var l,u=document.createElement("script");u.charset="utf-8",u.timeout=120,i.nc&&u.setAttribute("nonce",i.nc),u.src=s(e);var b=new Error;l=function(t){u.onerror=u.onload=null,clearTimeout(d);var a=o[e];if(0!==a){if(a){var n=t&&("load"===t.type?"missing":t.type),c=t&&t.target&&t.target.src;b.message="Loading chunk "+e+" failed.\n("+n+": "+c+")",b.name="ChunkLoadError",b.type=n,b.request=c,a[1](b)}o[e]=void 0}};var d=setTimeout((function(){l({type:"timeout",target:u})}),12e4);u.onerror=u.onload=l,document.head.appendChild(u)}return Promise.all(t)},i.m=e,i.c=n,i.d=function(e,t,a){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(i.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)i.d(a,n,function(t){return e[t]}.bind(null,n));return a},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/",i.oe=function(e){throw console.error(e),e};var l=window["webpackJsonp"]=window["webpackJsonp"]||[],u=l.push.bind(l);l.push=t,l=l.slice();for(var b=0;b<l.length;b++)t(l[b]);var d=u;r.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},1296:function(e,t,a){},"29cb":function(e,t,a){"use strict";a("1296")},"2b20":function(e,t,a){"use strict";a.d(t,"a",(function(){return o})),a.d(t,"b",(function(){return r}));var n=a("bc3a"),c=a.n(n);const o=c.a.create({baseURL:"https://bcw-sandbox.herokuapp.com/",timeout:8e3}),r=function(e){o.defaults.headers.authorization=e}},3750:function(e,t,a){},"41cb":function(e,t,a){"use strict";var n=a("6c02"),c=a("8816");function o(e){return()=>a("a2f9")(`./${e}.vue`)}const r=[{path:"/",name:"Home",component:o("HomePage")},{path:"/blogs/:id",name:"PostDetailsPage",component:o("PostDetailsPage")},{path:"/account",name:"Account",component:o("AccountPage"),beforeEnter:c["a"]}],s=Object(n["a"])({linkActiveClass:"router-link-active",linkExactActiveClass:"router-link-exact-active",history:Object(n["b"])(),routes:r});t["a"]=s},"56d7":function(e,t,a){"use strict";a.r(t);var n=a("7a23");function c(e,t,a,c,o,r){const s=Object(n["y"])("Navbar"),i=Object(n["y"])("router-view");return Object(n["r"])(),Object(n["e"])(n["a"],null,[Object(n["h"])("header",null,[Object(n["h"])(s)]),Object(n["h"])("main",null,[Object(n["h"])(i,null,{default:Object(n["F"])(({Component:e})=>[Object(n["h"])(n["b"],{name:"route",mode:"out-in"},{default:Object(n["F"])(()=>[(Object(n["r"])(),Object(n["e"])(Object(n["z"])(e)))]),_:2},1024)]),_:1})])],64)}var o=a("83fc"),r={name:"App",setup(){return{appState:Object(n["c"])(()=>o["a"])}}};a("651b");r.render=c;var s=r;function i(e){const t=a("ccc2");t.keys().forEach(a=>{const n=t(a),c=n.default||n,o=c.name||a.substr(a.lastIndexOf("/")+1).replace(/\.\w+$/,"");e.component(o,c)})}var l=a("41cb"),u=a("4989"),b=a.n(u),d=a("1157"),m=a.n(d),p=a("f0bd");const O=Object(n["d"])(s);i(O),O.use(l["a"],b.a,m.a,p["default"]).mount("#app")},"60b1":function(e,t,a){"use strict";a("3750")},"651b":function(e,t,a){"use strict";a("8149")},8149:function(e,t,a){},"83fc":function(e,t,a){"use strict";a.d(t,"a",(function(){return c}));var n=a("7a23");const c=Object(n["v"])({user:{},account:{},blogs:[],comments:[]})},"8a4e":function(e,t,a){"use strict";function n(e,t){window.location.origin.includes("localhost")&&console[e](...t)}a.d(t,"a",(function(){return c}));const c={log(){n("log",arguments)},error(){n("error",arguments)},warn(){n("warn",arguments)},assert(){n("assert",arguments)},trace(){n("trace",arguments)}}},"9d8d":function(e,t,a){"use strict";a.r(t);var n=a("7a23");const c=Object(n["I"])("data-v-1584e6ee");Object(n["u"])("data-v-1584e6ee");const o={class:"navbar navbar-expand-lg navbar-dark bg-dark"},r=Object(n["h"])("div",{class:"d-flex flex-column align-items-center"},[Object(n["h"])("h2",null,"Bloggr")],-1),s=Object(n["h"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(n["h"])("span",{class:"navbar-toggler-icon"})],-1),i={class:"collapse navbar-collapse",id:"navbarText"},l={class:"navbar-nav mr-auto"},u={class:"nav-item"},b=Object(n["g"])(" Home "),d=Object(n["g"])(" Account "),m={class:"navbar-text"},p={key:1,class:"dropdown"},O={class:"mx-3"},f=Object(n["h"])("div",{class:"list-group-item list-group-item-action hoverable"}," Account ",-1);Object(n["s"])();const j=c((e,t,a,j,g,h)=>{const v=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["e"])("nav",o,[Object(n["h"])(v,{class:"navbar-brand d-flex",to:{name:"Home"}},{default:c(()=>[r]),_:1}),s,Object(n["h"])("div",i,[Object(n["h"])("ul",l,[Object(n["h"])("li",u,[Object(n["h"])(v,{to:{name:"Home"},class:"nav-link"},{default:c(()=>[b]),_:1})]),Object(n["h"])("li",null,[Object(n["h"])(v,{to:{name:"Account"},class:"nav-link"},{default:c(()=>[d]),_:1})])]),Object(n["h"])("span",m,[j.user.isAuthenticated?(Object(n["r"])(),Object(n["e"])("div",p,[Object(n["h"])("div",{class:"dropdown-toggle",onClick:t[2]||(t[2]=e=>j.state.dropOpen=!j.state.dropOpen)},[Object(n["h"])("img",{src:j.user.picture,alt:"user photo",height:"40",class:"rounded"},null,8,["src"]),Object(n["h"])("span",O,Object(n["B"])(j.user.name),1)]),Object(n["h"])("div",{class:["dropdown-menu p-0 list-group w-100",{show:j.state.dropOpen}],onClick:t[4]||(t[4]=e=>j.state.dropOpen=!1)},[Object(n["h"])(v,{to:{name:"Account"}},{default:c(()=>[f]),_:1}),Object(n["h"])("div",{class:"list-group-item list-group-item-action hoverable",onClick:t[3]||(t[3]=(...e)=>j.logout&&j.logout(...e))}," logout ")],2)])):(Object(n["r"])(),Object(n["e"])("button",{key:0,class:"btn btn-outline-primary text-uppercase",onClick:t[1]||(t[1]=(...e)=>j.login&&j.login(...e))}," Login "))])])])});var g=a("8816"),h=a("83fc");const v="codeworksclassroom.auth0.com",y="https://codeworksclassroom.com",w="pOXw2OGv1LsYi7LEBmDF04RLkXQvldml";var k=a("41cb"),C=a("2b20"),P=a("8a4e");class x{async getAccount(){try{const e=await C["a"].get("account");h["a"].account=e.data}catch(e){P["a"].error("HAVE YOU STARTED YOUR SERVER YET???",e)}}}const E=new x,B=Object(g["b"])({domain:v,clientId:w,audience:y,onRedirectCallback:e=>{k["a"].push(e&&e.targetUrl?e.targetUrl:window.location.pathname)}});B.on(B.AUTH_EVENTS.AUTHENTICATED,(async function(){Object(C["b"])(B.bearer),await E.getAccount(),h["a"].user=B.user}));var T={name:"Navbar",setup(){const e=Object(n["v"])({dropOpen:!1});return{state:e,user:Object(n["c"])(()=>h["a"].user),async login(){B.loginWithPopup()},async logout(){await B.logout({returnTo:window.location.origin})}}}};a("60b1");T.render=j,T.__scopeId="data-v-1584e6ee";t["default"]=T},a2f9:function(e,t,a){var n={"./AccountPage.vue":["e542","chunk-1707585a"],"./HomePage.vue":["78a7","chunk-5b5ae580"],"./PostDetailsPage.vue":["3728","chunk-44eb1426"]};function c(e){if(!a.o(n,e))return Promise.resolve().then((function(){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}));var t=n[e],c=t[0];return a.e(t[1]).then((function(){return a(c)}))}c.keys=function(){return Object.keys(n)},c.id="a2f9",e.exports=c},b1f0:function(e,t,a){"use strict";a.r(t);var n=a("7a23");const c=Object(n["I"])("data-v-a1dd9fc4");Object(n["u"])("data-v-a1dd9fc4");const o={class:"col-6 d-flex justify-content-center"},r={class:"card m-2"},s={class:"d-flex pl-3 mt-3 align-items-center  pb-2 border-bottom"},i={class:"pl-3"},l={class:"pl-5"},u={class:"card-body"},b={key:0,class:"card-title"},d={key:1,class:"card-text"},m={key:2,type:"submit",class:"btn btn-success"},p=Object(n["h"])("i",{class:"fas fa-comment"},null,-1),O={class:"comment-num pl-2"},f=Object(n["h"])("p",{class:"details"},"details",-1),j={key:2},g={class:"container-fluid"},h={class:"row"},v={class:"col-10"},y={class:"d-flex pt-2 border-top"},w={key:0,class:"creator-name mr-2"},k={key:1},C=Object(n["h"])("button",{class:"btn btn-success",type:"submit"},"Submit",-1),P={class:"col-2"},x=Object(n["h"])("button",{class:"btn btn-outline-success"},"Submit",-1);Object(n["s"])();const E=c((e,t,a,E,B,T)=>{const A=Object(n["y"])("router-link");return Object(n["r"])(),Object(n["e"])("div",o,[Object(n["h"])("div",r,[Object(n["h"])("div",s,[Object(n["h"])("img",{class:"card-img-top",src:a.blogProp.creator.picture,alt:""},null,8,["src"]),Object(n["h"])("h5",i,Object(n["B"])(a.blogProp.creator.name),1),Object(n["h"])("div",l,[E.state.user.name==a.blogProp.creator.name?(Object(n["r"])(),Object(n["e"])("i",{key:0,class:"fas fa-pencil-alt pl-2",onClick:t[1]||(t[1]=e=>E.state.editMode=!0)})):Object(n["f"])("",!0),E.state.user.name==a.blogProp.creator.name?(Object(n["r"])(),Object(n["e"])("i",{key:1,class:"fa fa-trash text-danger pl-2",onClick:t[2]||(t[2]=(...e)=>E.deleteBlog&&E.deleteBlog(...e))})):Object(n["f"])("",!0)])]),Object(n["h"])("div",u,[0==E.state.editMode?(Object(n["r"])(),Object(n["e"])("h4",b,Object(n["B"])(a.blogProp.title),1)):Object(n["f"])("",!0),0==E.state.editMode?(Object(n["r"])(),Object(n["e"])("p",d,Object(n["B"])(a.blogProp.body),1)):Object(n["f"])("",!0),Object(n["h"])("form",{onSubmit:t[5]||(t[5]=Object(n["H"])(e=>E.editBlog(),["prevent"]))},[1==E.state.editMode?Object(n["G"])((Object(n["r"])(),Object(n["e"])("input",{key:0,class:"my-2",type:"text",placeholder:"New Title","onUpdate:modelValue":t[3]||(t[3]=e=>E.state.newTitle=e)},null,512)),[[n["D"],E.state.newTitle]]):Object(n["f"])("",!0),1==E.state.editMode?Object(n["G"])((Object(n["r"])(),Object(n["e"])("input",{key:1,class:"my-2",type:"text",placeholder:"New Body","onUpdate:modelValue":t[4]||(t[4]=e=>E.state.newBody=e)},null,512)),[[n["D"],E.state.newBody]]):Object(n["f"])("",!0),1==E.state.editMode?(Object(n["r"])(),Object(n["e"])("button",m,"Submit")):Object(n["f"])("",!0)],32),Object(n["h"])("div",{class:"text-left d-flex align-items-center pb-2",onClick:t[6]||(t[6]=e=>E.state.commentDisplay=!E.state.commentDisplay)},[p,Object(n["h"])("p",O,Object(n["B"])(E.state.comments.length),1),Object(n["h"])(A,{to:{name:"PostDetailsPage",params:{id:a.blogProp.id}}},{default:c(()=>[f]),_:1},8,["to"])]),!0===E.state.commentDisplay?(Object(n["r"])(),Object(n["e"])("div",j,[(Object(n["r"])(!0),Object(n["e"])(n["a"],null,Object(n["x"])(E.state.comments,e=>(Object(n["r"])(),Object(n["e"])("div",{key:e.id},[Object(n["h"])("div",g,[Object(n["h"])("div",h,[Object(n["h"])("div",v,[Object(n["h"])("div",y,[0==E.state.commentEdit||E.state.user.name!==e.creator.name?(Object(n["r"])(),Object(n["e"])("p",w,Object(n["B"])(e.creator.name)+": ",1)):Object(n["f"])("",!0),0==E.state.commentEdit||E.state.user.name!==e.creator.name?(Object(n["r"])(),Object(n["e"])("p",k,Object(n["B"])(e.body),1)):Object(n["f"])("",!0),1==E.state.commentEdit&&E.state.user.name==e.creator.name?(Object(n["r"])(),Object(n["e"])("form",{key:2,onSubmit:Object(n["H"])(t=>E.editComment(e.id),["prevent"])},[Object(n["G"])(Object(n["h"])("input",{type:"text","onUpdate:modelValue":t[7]||(t[7]=e=>E.state.editComment=e)},null,512),[[n["D"],E.state.editComment]]),C],40,["onSubmit"])):Object(n["f"])("",!0)])]),Object(n["h"])("div",P,[E.state.user.name==e.creator.name&&0==E.state.commentEdit?(Object(n["r"])(),Object(n["e"])("i",{key:0,class:"fas fa-pencil-alt pl-2",onClick:t[8]||(t[8]=e=>E.state.commentEdit=!0)})):Object(n["f"])("",!0),E.state.user.name==e.creator.name&&0==E.state.commentEdit?(Object(n["r"])(),Object(n["e"])("i",{key:1,class:"fa fa-trash text-danger pl-2",onClick:t=>E.deleteComment(e.id)},null,8,["onClick"])):Object(n["f"])("",!0)])])])]))),128)),E.state.user.isAuthenticated?(Object(n["r"])(),Object(n["e"])("form",{key:0,class:"d-flex justify-content-center border-top pt-2",onSubmit:t[10]||(t[10]=Object(n["H"])((...e)=>E.addComment&&E.addComment(...e),["prevent"]))},[Object(n["G"])(Object(n["h"])("input",{type:"text",placeholder:"add comment","onUpdate:modelValue":t[9]||(t[9]=e=>E.state.newComment=e)},null,512),[[n["D"],E.state.newComment]]),x],32)):Object(n["f"])("",!0)])):Object(n["f"])("",!0)])])])});var B=a("8a4e"),T=a("ee6a"),A=a("83fc"),_={props:{blogProp:{type:Object,required:!0}},setup(e){const t=Object(n["v"])({commentEdit:!1,editComment:"",editMode:!1,commentDisplay:!1,comments:[],user:Object(n["c"])(()=>A["a"].user),newComment:"",newTitle:"",newBody:""});return Object(n["p"])(async()=>{try{t.comments=await T["a"].getComments(e.blogProp.id)}catch(a){B["a"].error(a)}}),{state:t,async addComment(){await T["a"].postComment(e.blogProp.id,t.newComment,t.user),t.comments=await T["a"].getComments(e.blogProp.id)},async editBlog(){try{const a={title:t.newTitle,body:t.newBody};T["a"].editBlog(a,e.blogProp.id),t.editMode=!1}catch(a){B["a"].error(a)}},async deleteBlog(){try{await T["a"].deleteBlog(e.blogProp.id)}catch(t){B["a"].error(t)}},async editComment(a){try{await T["a"].editComment(a,{body:t.editComment}),t.comments=await T["a"].getComments(e.blogProp.id),t.commentEdit=!1}catch(n){B["a"].error(n)}},async deleteComment(a){try{await T["a"].deleteComment(a),t.comments=await T["a"].getComments(e.blogProp.id)}catch(n){B["a"].error(n)}}}}};a("29cb");_.render=E,_.__scopeId="data-v-a1dd9fc4";t["default"]=_},ccc2:function(e,t,a){var n={"./BlogComponent.vue":"b1f0","./navbar.vue":"9d8d"};function c(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}c.keys=function(){return Object.keys(n)},c.resolve=o,e.exports=c,c.id="ccc2"},ee6a:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));var n=a("83fc"),c=a("2b20");class o{async getBlogs(){const e=await c["a"].get("api/blogs");n["a"].blogs=e.data}async getOnePost(e){const t=await c["a"].get("api/blogs/"+e);n["a"].selected=t.data}async addPost(e){const t=await c["a"].get("account");e.creator=t.data.id,await c["a"].post("api/blogs",e),this.getBlogs()}async editBlog(e,t){await c["a"].put("api/blogs/"+t,e),this.getBlogs()}async deleteBlog(e){await c["a"].delete("api/blogs/"+e),this.getBlogs()}async getComments(e){const t=await c["a"].get("api/blogs/"+e+"/comments");return t.data}async postComment(e,t){const a=await c["a"].get("account"),n={body:t,blog:e,creator:a.data.id};await c["a"].post("api/comments",n)}async editComment(e,t){await c["a"].put("api/comments/"+e,t)}async deleteComment(e){await c["a"].delete("api/comments/"+e)}}const r=new o}});