(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b9dd8402"],{"1a47":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("md-content",{staticClass:"speckle-alert md-accent md-elevation-2"},[s("div",{staticClass:"md-layout md-alignment-center-center"},[s("div",{staticClass:"md-layout-item md-size-80"},[e._t("default")],2),s("div",{staticClass:"md-layout-item md-size-20",staticStyle:{"text-align":"right"}},[s("md-button",{staticClass:"md-icon-button md-raised",nativeOn:{click:function(t){e.$emit("closed")}}},[s("md-icon",[e._v("close")])],1)],1)])])},a=[],o={name:"SpeckleAlert",props:{type:String}},i=o,n=(s("7495"),s("2877")),l=Object(n["a"])(i,r,a,!1,null,"1912598a",null);l.options.__file="SpeckleAlert.vue";t["a"]=l.exports},3567:function(e,t,s){},7026:function(e,t,s){},7495:function(e,t,s){"use strict";var r=s("3567"),a=s.n(r);a.a},a55b:function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("md-content",{staticClass:"md-layout md-alignment-center-center",staticStyle:{"min-height":"100%"}},[!1===e.$store.state.isAuth?s("form",{staticClass:"md-layout-item md-size-33 md-small-size-100 md-medium-size-50",on:{submit:function(t){return t.preventDefault(),e.login(t)}}},[s("md-card",{staticClass:"md-elevation-3"},[s("md-card-header",[s("md-card-header-text",[s("div",{staticClass:"md-title"},[e._v("Login")]),s("div",{staticClass:"md-caption"},[e.$store.state.serverManifest?s("span",[e._v("at "),s("strong",[s("a",{attrs:{href:e.$store.state.server,target:"_blank"}},[e._v(e._s(e.$store.state.serverManifest.serverName))])]),e._v(".")]):e._e(),e._v("\n          Do you want to "),s("router-link",{attrs:{to:"/register"}},[e._v("register")]),e._v("?")],1)])],1),s("md-card-content",[s("md-field",[s("label",[e._v("Email adress")]),s("md-input",{attrs:{type:"email",name:"email"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}})],1),s("md-field",[s("label",[e._v("Password")]),s("md-input",{attrs:{type:"password",name:"password"},model:{value:e.password,callback:function(t){e.password=t},expression:"password"}})],1)],1),e.$store.state.isAuth?e._e():s("md-card-actions",[s("md-button",{staticClass:"md-primary md-raised",attrs:{type:"submit"}},[e._v("Login")])],1),s("br"),s("speckle-alert",{directives:[{name:"show",rawName:"v-show",value:e.showError,expression:"showError"}],attrs:{type:"error"},on:{closed:function(t){e.showError=!1}}},[e._v("\n        "+e._s(e.errorMessage)+"\n      ")])],1)],1):s("md-card",{staticClass:"md-elevation-3"},[s("md-card-content",[e._v("\n      You are already logged in.\n    ")])],1)],1)},a=[],o=(s("6762"),s("2fdb"),s("cadf"),s("551c"),s("097d"),s("bc3a")),i=s.n(o),n=s("1a47"),l={name:"LoginView",components:{SpeckleAlert:n["a"]},computed:{},watch:{},data:function(){return{server:null,email:null,password:null,errorMessage:null,showError:!1,serverOk:!1}},methods:{login:function(){var e=this;this.$store.dispatch("login",{email:this.email,password:this.password}).then(function(t){if(console.log("Logged in."),e.$store.dispatch("getStreams","omit=objects,layers&isComputedResult=false&deleted=false&sort=-lastModified"),e.$store.dispatch("getProjects"),null!==e.$route.params.redirectTo&&void 0!==e.$route.params.redirectTo){var s=atob(e.$route.params.redirectTo);e.$router.push(s),e.password=null}else e.$router.push("/")}).catch(function(t){console.log(t),e.errorMessage="Failed to log in.",e.showError=!0})},checkServer:function(){var e=this;this.server.includes("api")||(this.server+="/api"),i.a.get(this.server).then(function(t){if(!t.data.hasOwnProperty("serverName"))throw new Error("Failed to get server.");e.serverOk=!0,e.errorMessage="",e.showError=!1,e.$store.commit("SET_SERVER",e.server),e.$store.commit("SET_SERVER_DETAILS",t.data),localStorage.setItem("server",e.server),i.a.defaults.baseURL=e.server}).catch(function(t){e.serverOk=!1,e.errorMessage="Server url is incorrect.",e.showError=!0})}},mounted:function(){this.$store.state.server?(this.server=this.$store.state.server,this.checkServer()):(this.server="".concat(window.location.origin,"/api"),this.checkServer()),!0===this.$store.state.isAuth&&this.$router.push("/")}},c=l,d=(s("bf36"),s("2877")),m=Object(d["a"])(c,r,a,!1,null,"1c313c12",null);m.options.__file="Login.vue";t["default"]=m.exports},bf36:function(e,t,s){"use strict";var r=s("7026"),a=s.n(r);a.a}}]);
//# sourceMappingURL=chunk-b9dd8402.deead890.js.map