(function(t){function e(e){for(var r,a,i=e[0],s=e[1],u=e[2],d=0,f=[];d<i.length;d++)a=i[d],o[a]&&f.push(o[a][0]),o[a]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);m&&m(e);while(f.length)f.shift()();return c.push.apply(c,u||[]),n()}function n(){for(var t,e=0;e<c.length;e++){for(var n=c[e],r=!0,a=1;a<n.length;a++){var i=n[a];0!==o[i]&&(r=!1)}r&&(c.splice(e--,1),t=s(s.s=n[0]))}return t}var r={},a={app:0},o={app:0},c=[];function i(t){return s.p+"js/"+({}[t]||t)+"."+{"chunk-22742285":"71981d81","chunk-2d0af48a":"c514bf00","chunk-034e195a":"66f58c4d","chunk-87b521da":"c83933ea","chunk-75baa9c0":"b64e7b2d","chunk-87934fb4":"0e85464a","chunk-b9dd8402":"deead890","chunk-c45573d2":"3dc5327e","chunk-03cd6f79":"8e67a3c1","chunk-11136037":"0e83bffa","chunk-5ac4b2b8":"878aa523","chunk-5fde0d05":"f3fed028","chunk-90707890":"b8224175","chunk-a799b84c":"e81f9d8a","chunk-4453d422":"cce0c337","chunk-48e68644":"7a5b9f84","chunk-d13d1958":"5c0c2744","chunk-d49f1d06":"9ee5fe4e"}[t]+".js"}function s(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.e=function(t){var e=[],n={"chunk-22742285":1,"chunk-034e195a":1,"chunk-87b521da":1,"chunk-75baa9c0":1,"chunk-87934fb4":1,"chunk-b9dd8402":1,"chunk-03cd6f79":1,"chunk-11136037":1,"chunk-5ac4b2b8":1,"chunk-5fde0d05":1,"chunk-90707890":1,"chunk-a799b84c":1,"chunk-4453d422":1,"chunk-48e68644":1,"chunk-d13d1958":1,"chunk-d49f1d06":1};a[t]?e.push(a[t]):0!==a[t]&&n[t]&&e.push(a[t]=new Promise(function(e,n){for(var r="css/"+({}[t]||t)+"."+{"chunk-22742285":"4289d77b","chunk-2d0af48a":"31d6cfe0","chunk-034e195a":"aff59691","chunk-87b521da":"dc277221","chunk-75baa9c0":"42034596","chunk-87934fb4":"0e433876","chunk-b9dd8402":"6572ebcc","chunk-c45573d2":"31d6cfe0","chunk-03cd6f79":"93ff9eba","chunk-11136037":"7320ddb1","chunk-5ac4b2b8":"80f23b8d","chunk-5fde0d05":"2d5874dd","chunk-90707890":"e2ef3323","chunk-a799b84c":"66584e5a","chunk-4453d422":"c4b839ae","chunk-48e68644":"abe7daf6","chunk-d13d1958":"0e433876","chunk-d49f1d06":"f36624ee"}[t]+".css",o=s.p+r,c=document.getElementsByTagName("link"),i=0;i<c.length;i++){var u=c[i],d=u.getAttribute("data-href")||u.getAttribute("href");if("stylesheet"===u.rel&&(d===r||d===o))return e()}var f=document.getElementsByTagName("style");for(i=0;i<f.length;i++){u=f[i],d=u.getAttribute("data-href");if(d===r||d===o)return e()}var m=document.createElement("link");m.rel="stylesheet",m.type="text/css",m.onload=e,m.onerror=function(e){var r=e&&e.target&&e.target.src||o,c=new Error("Loading CSS chunk "+t+" failed.\n("+r+")");c.request=r,delete a[t],m.parentNode.removeChild(m),n(c)},m.href=o;var l=document.getElementsByTagName("head")[0];l.appendChild(m)}).then(function(){a[t]=0}));var r=o[t];if(0!==r)if(r)e.push(r[2]);else{var c=new Promise(function(e,n){r=o[t]=[e,n]});e.push(r[2]=c);var u,d=document.getElementsByTagName("head")[0],f=document.createElement("script");f.charset="utf-8",f.timeout=120,s.nc&&f.setAttribute("nonce",s.nc),f.src=i(t),u=function(e){f.onerror=f.onload=null,clearTimeout(m);var n=o[t];if(0!==n){if(n){var r=e&&("load"===e.type?"missing":e.type),a=e&&e.target&&e.target.src,c=new Error("Loading chunk "+t+" failed.\n("+r+": "+a+")");c.type=r,c.request=a,n[1](c)}o[t]=void 0}};var m=setTimeout(function(){u({type:"timeout",target:f})},12e4);f.onerror=f.onload=u,d.appendChild(f)}return Promise.all(e)},s.m=t,s.c=r,s.d=function(t,e,n){s.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},s.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},s.t=function(t,e){if(1&e&&(t=s(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)s.d(n,r,function(e){return t[e]}.bind(null,r));return n},s.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return s.d(e,"a",e),e},s.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},s.p="",s.oe=function(t){throw console.error(t),t};var u=window["webpackJsonp"]=window["webpackJsonp"]||[],d=u.push.bind(u);u.push=e,u=u.slice();for(var f=0;f<u.length;f++)e(u[f]);var m=d;c.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"39e5":function(t,e,n){"use strict";var r=n("82c8"),a=n.n(r);a.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var r=n("2b0e"),a=n("bc3a"),o=n.n(a),c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("md-app",{attrs:{"md-waterfall":""}},[n("md-app-drawer",{staticClass:"super-bg md-primary nav-sidebar",attrs:{"md-active":t.showSidebar,"md-persistent":"mini"}},[n("md-list",[n("md-list-item",{staticStyle:{"padding-bottom":"0 !important"},on:{click:function(e){t.showSidebar=!t.showSidebar}}},[n("md-icon",[t._v(t._s(t.showSidebar?"chevron_left":"chevron_right"))]),n("span",{staticClass:"md-list-item-text"})],1)],1),n("nav-drawer"),n("div",{staticClass:"md-caption credits"},[n("a",{attrs:{href:"https://speckle.works",target:"_blank"}},[n("img",{attrs:{src:"https://speckle.works/img/logos/logo-xs.png",width:"19px"}})])])],1),n("md-app-content",[n("keep-alive",{attrs:{exclude:"StreamDetailView"}},[n("router-view")],1)],1)],1)],1)},i=[],s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"the-navbar"},[t.$store.state.isAuth?n("md-list",{staticStyle:{"padding-top":"0 !impotant"}},[n("md-list-item",{attrs:{to:"/"}},[n("md-icon",[t._v("home")]),n("span",{staticClass:"md-list-item-text"},[t._v("Home")])],1),n("md-list-item",{attrs:{to:"/streams"}},[n("md-icon",[t._v("import_export")]),n("span",{staticClass:"md-list-item-text"},[t._v("Streams")])],1),n("md-list-item",{attrs:{to:"/projects"}},[n("md-icon",[t._v("business")]),n("span",{staticClass:"md-list-item-text"},[t._v("Projects")])],1),n("md-list-item",{attrs:{to:"/trash"}},[n("md-icon",[t._v("delete_outline")]),n("span",{staticClass:"md-list-item-text"},[t._v("Trash")])],1),n("md-divider",{attrs:{"md-inset":""}}),n("md-list-item",{attrs:{to:"/view"}},[n("md-icon",[t._v("3d_rotation")]),n("span",{staticClass:"md-list-item-text"},[t._v("Viewer")])],1),n("md-list-item",{attrs:{target:"_blank",href:t.carbonLink}},[n("md-icon",[t._v("local_florist")]),n("span",{staticClass:"md-list-item-text"},[t._v("Arup Carbon")])],1),n("md-list-item",{attrs:{target:"_blank",href:t.digReportLink}},[n("md-icon",[t._v("create")]),n("span",{staticClass:"md-list-item-text"},[t._v("Arup Digital Report")])],1),n("md-divider",{attrs:{"md-inset":""}}),n("md-list-item",{attrs:{to:"/profile"}},[n("md-icon",[t._v("face")]),n("span",{staticClass:"md-list-item-text"},[t._v("Profile")])],1),n("md-list-item",{attrs:{to:"/plugins"}},[n("md-icon",[t._v("category")]),n("span",{staticClass:"md-list-item-text"},[t._v("Plugins")])],1),n("md-list-item",{attrs:{to:"/feedback"}},[n("md-icon",[t._v("feedback")]),n("span",{staticClass:"md-list-item-text"},[t._v("Feedback")])],1)],1):n("md-list",[n("md-list-item",{attrs:{to:"/login"}},[n("md-icon",[t._v("face")]),n("span",{staticClass:"md-list-item-text"},[t._v("Login")])],1),n("md-list-item",{attrs:{to:"/register"}},[n("md-icon",[t._v("add")]),n("span",{staticClass:"md-list-item-text"},[t._v("Register")])],1)],1)],1)},u=[],d={name:"SiteNavigation",computed:{digReportLink:function(){return location.origin+"/digital-report/"},carbonLink:function(){return location.origin+"/carbon/"}}},f=d,m=(n("39e5"),n("2877")),l=Object(m["a"])(f,s,u,!1,null,null,null);l.options.__file="NavDrawer.vue";var h=l.exports,p={name:"MainApp",components:{NavDrawer:h},data:function(t){return{showSidebar:!0}},created:function(){this.$store.state.isAuth&&(this.$store.dispatch("getStreams","omit=objects,layers&isComputedResult=false&sort=updatedAt"),this.$store.dispatch("getProjects"))},updated:function(){var t=document.getElementsByClassName("md-overlay")[0];t&&(t.onclick=function(){this.showSidebar=!1}.bind(this))}},b=p,v=(n("5c0b"),Object(m["a"])(b,c,i,!1,null,null,null));v.options.__file="App.vue";var g=v.exports,_=n("8c4f"),E=(n("5df3"),n("4f7f"),n("ac4d"),n("8a81"),n("2909")),k=(n("456d"),n("7514"),n("20d6"),n("7f7f"),n("6762"),n("2fdb"),n("28a5"),n("6b54"),n("ac6a"),n("2f62")),j=n("c36e"),A=n.n(j),T=n("c64e"),S=n.n(T);r["default"].use(k["a"]);var w=new k["a"].Store({state:{server:null,serverManifest:null,token:null,user:{},isAuth:!1,streams:[],deStreams:[],objects:[],clients:[],projects:[],comments:[],users:[]},getters:{streamClients:function(t){return function(e){return t.clients.filter(function(t){return t.streamId===e})}},filteredStreams:function(t){return function(e){var n=t.streams.filter(function(t){return null==t.parent&&!1===t.deleted});return e&&0!==e.length?(e.forEach(function(e){switch(e.key=e.key.toLowerCase(),e.key){case"private":n=e.value?n.filter(function(t){return t.private.toString()===e.value}):n.filter(function(t){return!0===t.private});break;case"public":n=e.value?n.filter(function(t){return(!t.private).toString()===e.value}):n.filter(function(t){return!1===t.private});break;case"tag":case"tags":var r=e.value.split(",").map(function(t){return t.toLowerCase()});n=n.filter(function(t){var e=t.tags.map(function(t){return t.toLowerCase()});return r.every(function(t){return e.includes(t)})});break;case"mine":n=n.filter(function(e){return e.owner===t.user._id});break;case"shared":n=n.filter(function(e){return e.owner!==t.user._id});break;case"name":n=n.filter(function(t){return t.name.toLowerCase().includes(e.value.toLowerCase())});break;case"streamid":case"id":n=n.filter(function(t){return t.streamId.toLowerCase().includes(e.value.toLowerCase())});break}}),n):n}}},mutations:{ADD_STREAMS:function(t,e){e.forEach(function(e){-1===t.streams.findIndex(function(t){return t.streamId===e.streamId})&&(e.description||(e.description="..."),e.tags||(e.tags=[]),t.streams.unshift(e))})},UPDATE_STREAM:function(t,e){var n=t.streams.find(function(t){return t.streamId===e.streamId});Object.keys(e).forEach(function(t){n[t]=e[t]})},UPDATE_STREAM_DATA:function(t,e){var n=t.streams.find(function(t){return t.streamId===e.streamId});e.layers&&(n.layers=e.layers)},DELETE_STREAM:function(t,e){var n=t.streams.findIndex(function(t){return t.streamId===e.streamId});n>-1?t.streams.splice(n,1):console.log("Failed to remove stream ".concat(e.streamId," from store."))},ADD_CLIENTS:function(t,e){e.forEach(function(e){-1===t.clients.findIndex(function(t){return t._id===e._id})&&t.clients.push(e)})},ADD_DE_STREAM:function(t,e){var n=t.deStreams.find(function(t){return t.streamId===e});n?(n.layers=e.layers,n.objects=e.objects):t.deStreams.push(e)},ADD_DE_STREAM_LAYER:function(t,e){console.log(e);var n=t.deStreams.find(function(t){return t.streamId===e.streamId}),r={name:"Param group ".concat(n.layers.length+1),orderIndex:n.layers.length,startIndex:n.objects.length,objectCount:0,topology:"0-0",guid:S()()};n.layers.push(r)},UPDATE_DE_STREAM_LAYER:function(t,e){var n=e.streamId,r=e.layer,a=e.objects,o=t.deStreams.find(function(t){return t.streamId===n}),c=!1,i=0;o.layers.forEach(function(t){if(c)t.startIndex+=i;else if(t.guid===r.guid){var e;t.name=r.name,t.topology="0-".concat(a.length),i=a.length-t.objectCount,(e=o.objects).splice.apply(e,[t.startIndex,t.objectCount].concat(Object(E["a"])(a))),t.objectCount=a.length,c=!0}})},REMOVE_DE_STREAM_LAYER:function(t,e){var n=e.streamId,r=e.layer,a=t.deStreams.find(function(t){return t.streamId===n});a.objects.splice(r.startIndex,r.objectCount);var o=!1;a.layers.forEach(function(t){o?(t.startIndex-=r.objectCount,t.orderIndex-=1):t.guid===r.guid&&(o=!0)}),a.layers=a.layers.filter(function(t){return t.guid!==r.guid})},APPEND_DE_STREAM_LAYERS_FROM_CSV:function(t,e){var n=e.streamId,r=e.transposed,a=t.deStreams.find(function(t){return t.streamId===n}),o=!0,c=!1,i=void 0;try{for(var s,u=r[Symbol.iterator]();!(o=(s=u.next()).done);o=!0){var d,f=s.value,m={name:""!==f[0]?f[0]:"Unnamed",orderIndex:-1,startIndex:a.objects.length,objectCount:f.length-1,topology:"0-".concat(f.length-1),guid:S()()};a.layers.push(m);var l=f.slice(1,f.length);console.log(l),(d=a.objects).push.apply(d,Object(E["a"])(l.map(function(t){return t?"boolean"===typeof t?{type:"Boolean",value:t}:"number"===typeof t?{type:"Number",value:t}:"string"===typeof t?{type:"String",value:t}:void 0:{type:"Null",value:""}}))),0}}catch(h){c=!0,i=h}finally{try{o||null==u.return||u.return()}finally{if(c)throw i}}a.layers.forEach(function(t,e){console.log(e),t.orderIndex=e})},ADD_OBJECTS:function(t,e){var n;(n=t.objects).push.apply(n,Object(E["a"])(e))},UPDATE_OBJECTS_STREAMS:function(t,e){var n=e.objIds,r=e.streamToAdd,a=e.streamToRemove;n.forEach(function(e){var n=t.objects.find(function(t){return t._id===e});if(n&&(r&&-1===n.streams.indexOf(r)&&n.streams.push(r),a)){var o=n.streams.indexOf(a);-1!==o&&n.streams.splice(o,1)}})},REMOVE_OBJECTS:function(t,e){t.objects=t.objects.filter(function(t){return-1===e.indexOf(t._id)})},ADD_PROJECTS:function(t,e){e.forEach(function(e){-1===t.projects.findIndex(function(t){return t._id===e._id})&&(e.tags||(e.tags=[]),e.deleted||(e.deleted=!1),t.projects.unshift(e))})},UPDATE_PROJECT:function(t,e){var n=t.projects.find(function(t){return t._id===e._id});Object.keys(e).forEach(function(t){n[t]=e[t]})},DELETE_PROJECT:function(t,e){var n=t.projects.findIndex(function(t){return t._id===e._id});n>-1?t.projects.splice(n,1):console.log("Failed to remove project ".concat(e._id," from store."))},ADD_USER:function(t,e){var n=t.users.find(function(t){return t._id===e._id});n?n=e:t.users.unshift(e)},ADD_USERS:function(t,e){e.forEach(function(e){var n=t.users.find(function(t){return t._id===e._id});n?n=e:t.users.unshift(e)})},UPDATE_LUSER:function(t,e){var n=null;if(n=e._id===t.user._id?t.user:t.users.find(function(t){return t._id===e._id}),!n)return console.error("User not found; aborting update.");Object.keys(e).forEach(function(t){n[t]=e[t]})},SET_SERVER:function(t,e){t.server=e},SET_SERVER_DETAILS:function(t,e){t.serverManifest=e},SET_TOKEN:function(t,e){t.token=e,t.isAuth=!0},SET_USER:function(t,e){t.user=e},FLUSH_ALL:function(t){t.token=null,t.user={},t.streams=[],t.objects=[],t.deStreams=[],t.projects=[],t.clients=[],t.users=[],t.comments=[],t.isAuth=!1}},actions:{getStream:function(t,e){return new Promise(function(n,r){var a=t.state.streams.find(function(t){return t.streamId===e.streamId});if(a)return n(a);o.a.get("streams/".concat(e.streamId,"?omit=objects")).then(function(e){return t.commit("ADD_STREAMS",[e.data.resource]),n(e)}).catch(function(t){return r(t)})})},getStreams:function(t,e){return new Promise(function(n,r){o.a.get("streams?".concat(e||"")).then(function(e){return t.commit("ADD_STREAMS",e.data.resources),n(e.data.resources)}).catch(function(t){return console.log(t),r(t)})})},createStream:function(t,e){return new Promise(function(n,r){o.a.post("streams").then(function(n){return console.log(n),e.streamId=n.data.resource.streamId,n.data.resource.onlineEditable=!0,t.commit("ADD_STREAMS",[n.data.resource]),o.a.put("streams/".concat(n.data.resource.streamId),e)}).then(function(r){return console.log(r),t.commit("UPDATE_STREAM",e),n(e)}).catch(function(t){return console.error(t),r(t)})})},updateStream:function(t,e){o.a.put("streams/".concat(e.streamId),e).then(function(n){t.commit("UPDATE_STREAM",e)}).catch(function(t){console.warn(t)})},updateStreamObjectsAndLayers:function(t,e){var n=e.streamId,r=e.commitMessage;return new Promise(function(e,a){var c=t.state.deStreams.find(function(t){return t.streamId===n});if(!c)return a(new Error("Stream not found in store."));c.commitMessage=r+" (changed by ".concat(t.state.user.name," ").concat(t.state.user.surname,")"),c.lastChangedBy=t.state.user._id,t.commit("UPDATE_STREAM",{streamId:n,commitMessage:r}),o.a.post("streams/".concat(n,"/clone")).then(function(e){var r=t.state.streams.find(function(t){return t.streamId===n});return t.commit("UPDATE_STREAM",{streamId:n,children:Object(E["a"])(r.children).concat([e.data.clone.streamId])}),o.a.put("streams/".concat(n),c)}).then(function(t){return e(t)}).catch(function(t){return a(t)})})},getStreamClients:function(t,e){o.a.get("streams/".concat(e.streamId,"/clients")).then(function(e){t.commit("ADD_CLIENTS",e.data.resources)}).catch(function(t){console.log(t)})},deleteStream:function(t,e){o.a.delete("streams/".concat(e.streamId)).then(function(n){t.commit("DELETE_STREAM",{streamId:e.streamId})}).catch(function(t){console.log(t)})},getStreamObjects:function(t,e){t.state.streams.find(function(t){return t.streamId===e});return new Promise(function(n,r){o.a.get("streams/".concat(e,"?fields=objects,layers")).then(function(r){var a=r.data.resource.objects.map(function(t){return t._id});t.commit("UPDATE_STREAM",{streamId:e,objects:a,layers:r.data.resource.layers}),n(a)}).catch(function(t){r(t)})})},getObjects:function(t,e){return new Promise(function(t,n){o.a.post("objects/getbulk?omit=base64,rawData,canRead,canWrite,children,anonymousComments,name",e).then(function(e){t(e.data.resources)}).catch(function(t){return n(t)})})},getProject:function(t,e){return new Promise(function(n,r){o.a.get("projects/".concat(e._id)).then(function(e){return t.commit("ADD_PROJECTS",[e.data.resource]),n(e)}).catch(function(t){return console.error(t),r(t)})})},getProjects:function(t,e){return new Promise(function(n,r){o.a.get("projects?".concat(e||"")).then(function(e){return t.commit("ADD_PROJECTS",e.data.resources),n(e.data.resources)}).catch(function(t){return console.log(t),r(t)})})},createProject:function(t,e){return new Promise(function(n,r){o.a.post("projects",e||{name:"A new speckle project"}).then(function(e){return t.commit("ADD_PROJECTS",[e.data.resource]),n(e.data.resource)}).catch(function(t){return console.log(t),r(t)})})},updateProject:function(t,e){o.a.put("projects/".concat(e._id),e).then(function(n){t.commit("UPDATE_PROJECT",e)}).catch(function(t){console.warn(t)})},addUserToProject:function(t,e){var n=e.projectId,r=e.userId;return new Promise(function(e,a){var c=t.state.projects.find(function(t){return t._id===n});if(!c)return a(new Error("Failed to find project in state."));o.a.put("projects/".concat(n,"/adduser/").concat(r)).then(function(a){var o={canWrite:Object(E["a"])(new Set(Object(E["a"])(c.permissions.canWrite).concat([r]))),canRead:c.permissions.canRead},i=Object(E["a"])(new Set(Object(E["a"])(c.canRead).concat([r])));return t.commit("UPDATE_PROJECT",{_id:n,permissions:o,canRead:i}),c.streams.forEach(function(e){var n=t.state.streams.find(function(t){return t.streamId===e});t.commit("UPDATE_STREAM",{streamId:e,canWrite:A()(Object(E["a"])(n.canWrite).concat([r]))})}),e()}).catch(function(t){return console.warn(t),a(t)})})},upgradeUserInProject:function(t,e){var n=e.projectId,r=e.userId;return new Promise(function(e,a){var c=t.state.projects.find(function(t){return t._id===n});if(!c)return a(new Error("Failed to find project in state."));o.a.put("projects/".concat(n,"/upgradeuser/").concat(r)).then(function(a){return t.commit("UPDATE_PROJECT",{_id:n,permissions:{canRead:A()(Object(E["a"])(c.canRead).concat([r])),canWrite:A()(Object(E["a"])(c.canWrite).concat([r]))}}),c.streams.forEach(function(e){var n=t.state.streams.find(function(t){return t.streamId===e});t.commit("UPDATE_STREAM",{streamId:e,canWrite:A()(Object(E["a"])(n.canWrite).concat([r])),canRead:A()(Object(E["a"])(n.canRead).concat([r]))})}),e()}).catch(function(t){return console.warn(t),a(t)})})},downgradeUserInProject:function(t,e){var n=e.projectId,r=e.userId;return new Promise(function(e,a){var c=t.state.projects.find(function(t){return t._id===n});if(!c)return a(new Error("Failed to find project in state."));o.a.put("projects/".concat(n,"/downgradeuser/").concat(r)).then(function(a){return t.commit("UPDATE_PROJECT",{_id:n,permissions:a.data.project.permissions}),a.data.streamsToAddReadAndPullWrite.forEach(function(e){var n=t.state.streams.find(function(t){return t.streamId===e});t.commit("UPDATE_STREAM",{streamId:e,canWrite:n.canWrite.filter(function(t){return t!==r}),canRead:A()(Object(E["a"])(n.canRead).concat([r]))})}),a.data.streamsToAddToRead.forEach(function(e){var n=t.state.streams.find(function(t){return t.streamId===e});t.commit("UPDATE_STREAM",{streamId:e,canRead:A()(Object(E["a"])(n.canRead).concat([r]))})}),e()}).catch(function(t){return console.warn(t),a(t)})})},removeUserInProject:function(t,e){var n=e.projectId,r=e.userId;return new Promise(function(e,a){var c=t.state.projects.find(function(t){return t._id===n});if(!c)return a(new Error("Failed to find project in state."));o.a.delete("projects/".concat(n,"/removeuser/").concat(r)).then(function(a){return t.commit("UPDATE_PROJECT",{_id:n,canRead:a.data.project.canRead,canWrite:a.data.project.canWrite,permissions:a.data.project.permissions}),a.data.streamsToPullBothFrom.forEach(function(e){var n=t.state.streams.find(function(t){return t.streamId===e});t.commit("UPDATE_STREAM",{streamId:e,canRead:n.canRead.filter(function(t){return t!==r}),canWrite:n.canWrite.filter(function(t){return t!==r})})}),a.data.streamsToPullWriteFrom.forEach(function(e){var n=t.state.streams.find(function(t){return t.streamId===e});t.commit("UPDATE_STREAM",{streamId:e,canWrite:n.canWrite.filter(function(t){return t!==r})})}),a.data.streamsToPullReadFrom.forEach(function(e){var n=t.state.streams.find(function(t){return t.streamId===e});t.commit("UPDATE_STREAM",{streamId:e,canRead:n.canRead.filter(function(t){return t!==r})})}),e()}).catch(function(t){return console.warn(t),a(t)})})},addStreamToProject:function(t,e){var n=e.projectId,r=e.streamId;return new Promise(function(e,a){var c=t.state.projects.find(function(t){return t._id===n});if(!c)return a(new Error("Failed to find project in state."));o.a.put("projects/".concat(n,"/addstream/").concat(r)).then(function(a){return t.commit("UPDATE_PROJECT",{_id:n,streams:a.data.project.streams}),t.commit("UPDATE_STREAM",{streamId:r,canRead:a.data.stream.canRead,canWrite:a.data.stream.canWrite}),e()}).catch(function(t){return console.warn(t),a(t)})})},removeStreamFromProject:function(t,e){var n=e.projectId,r=e.streamId;return new Promise(function(e,a){var c=t.state.projects.find(function(t){return t._id===n});if(!c)return a(new Error("Failed to find project in state."));o.a.delete("projects/".concat(n,"/removestream/").concat(r)).then(function(a){return t.commit("UPDATE_PROJECT",{_id:n,streams:a.data.project.streams}),t.commit("UPDATE_STREAM",{streamId:r,canRead:a.data.stream.canRead,canWrite:a.data.stream.canWrite}),e()}).catch(function(t){return console.warn(t),a(t)})})},deleteProject:function(t,e){return new Promise(function(n,r){o.a.delete("projects/".concat(e._id)).then(function(r){t.commit("DELETE_PROJECT",{_id:e._id});var a=!0,o=!1,c=void 0;try{for(var i,s=r.data.modifiedStreams[Symbol.iterator]();!(a=(i=s.next()).done);a=!0){var u=i.value;t.commit("UPDATE_STREAM",{streamId:u.streamId,canRead:u.canRead,canWrite:u.canWrite})}}catch(d){o=!0,c=d}finally{try{a||null==s.return||s.return()}finally{if(o)throw c}}return n()}).catch(function(t){return console.warn(t),r(t)})})},getUser:function(t,e){return new Promise(function(n,r){var a=t.state.users.find(function(t){return t._id===e._id});if(a)return n(a);o.a.get("accounts/".concat(e._id)).then(function(r){return t.state.user._id===e._id&&(r.data.resource.surname+=" (that is you!)"),t.commit("ADD_USER",r.data.resource),n(r.data.resource)}).catch(function(t){return r(t)})})},updateLoggedInUser:function(t,e){return new Promise(function(n,r){o.a.put("accounts",e).then(function(r){return t.commit("UPDATE_LUSER",e),n(r)}).catch(function(t){return r(t)})})},login:function(t,e){return new Promise(function(n,r){o.a.post("accounts/login",{email:e.email,password:e.password}).then(function(e){return t.commit("SET_TOKEN",e.data.resource.token),t.commit("SET_USER",e.data.resource),localStorage.setItem("token",e.data.resource.token),o.a.defaults.headers.common["Authorization"]=e.data.resource.token,n(e.data.resource)}).catch(function(t){return r(t)})})},logout:function(t,e){t.commit("FLUSH_ALL"),localStorage.removeItem("token"),o.a.defaults.headers.common["Authorization"]=""}}});r["default"].use(_["a"]);var P=new _["a"]({linkExactActiveClass:"is-active",routes:[{path:"/",name:"dashboard",component:function(){return n.e("chunk-d49f1d06").then(n.bind(null,"7277"))},meta:{requiresAuth:!0}},{path:"/login/:redirectTo?",name:"login",component:function(){return n.e("chunk-b9dd8402").then(n.bind(null,"a55b"))}},{path:"/register",name:"register",component:function(){return n.e("chunk-75baa9c0").then(n.bind(null,"73cf"))}},{path:"/streams",name:"streams",component:function(){return Promise.all([n.e("chunk-2d0af48a"),n.e("chunk-034e195a")]).then(n.bind(null,"cf8c"))},meta:{requiresAuth:!0}},{path:"/streams/:streamId",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-2d0af48a"),n.e("chunk-a799b84c")]).then(n.bind(null,"7057"))},meta:{requiresAuth:!0},children:[{name:"streamoverview",path:"",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-2d0af48a"),n.e("chunk-5ac4b2b8")]).then(n.bind(null,"a29c"))}},{name:"streamdata",path:"data",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-48e68644")]).then(n.bind(null,"05ce"))}},{name:"streamsharing",path:"sharing",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-4453d422")]).then(n.bind(null,"69e0"))}},{name:"streamhistory",path:"history",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-03cd6f79")]).then(n.bind(null,"6a14"))}}]},{path:"/projects",name:"projects",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-2d0af48a"),n.e("chunk-90707890")]).then(n.bind(null,"acca"))},meta:{requiresAuth:!0}},{path:"/projects/:projectId",name:"singleproject",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-2d0af48a"),n.e("chunk-11136037")]).then(n.bind(null,"07bd"))},meta:{requiresAuth:!0}},{path:"/trash",name:"trash",component:function(){return Promise.all([n.e("chunk-c45573d2"),n.e("chunk-2d0af48a"),n.e("chunk-5fde0d05")]).then(n.bind(null,"27c8"))},meta:{requiresAuth:!0}},{path:"/view/:streamIds?/:objectId?",name:"viewer",component:function(){return Promise.all([n.e("chunk-2d0af48a"),n.e("chunk-87b521da")]).then(n.bind(null,"e1b1"))},meta:{requiresAuth:!0}},{path:"/profile",name:"profile",component:function(){return n.e("chunk-22742285").then(n.bind(null,"c66d"))},meta:{requiresAuth:!0}},{path:"/plugins",name:"plugins",component:function(){return n.e("chunk-87934fb4").then(n.bind(null,"793c"))},meta:{requiresAuth:!0}},{path:"/feedback",name:"feedback",component:function(){return n.e("chunk-d13d1958").then(n.bind(null,"6e7a"))},meta:{requiresAuth:!0}}]});P.beforeEach(function(t,e,n){if(t.meta.requiresAuth&&!0===t.meta.requiresAuth&&!1===w.state.isAuth)return n({path:"/login"+(null!==t?"/"+window.btoa(t.path):"")});n()});var y=P,I=n("9483");Object(I["a"])("".concat("","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}});var R=n("43f9"),D=n.n(R),C=(n("51de"),n("e094"),n("8682")),x=n("4710"),O=n.n(x),U=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("span",[n("span",{attrs:{title:t.hint,contenteditable:!t.disabled},domProps:{innerHTML:t._s(t.getContent())},on:{blur:t.updateOnBlur,keydown:function(e){return"button"in e||!t._k(e.keyCode,"enter",13,e.key,"Enter")?t.updateOnEnter(e):null}}}),n("md-tooltip",[t._v(t._s(t.hint))])],1)},M=[],L=(n("a481"),{name:"EditableSpan",props:{text:{type:String,default:"loading..."},disabled:{type:Boolean,default:!1},hint:{type:String,default:"click and type to edit"},dataKey:{type:String,default:""}},computed:{},data:function(){return{innerText:null}},methods:{getContent:function(){return this.innerText&&""!==this.innerText.replace(/(\r\n|\n|\r)/gm,"")?this.innerText:this.text},updateOnBlur:function(t){var e=t.target.innerText.replace(/(\r\n|\n|\r)/gm,"");if(console.log(e.length),""===e)return t.target.innerText=this.text;this.getContent()!==e&&(this.innerText=e,this.$emit("update",{text:e,dataKey:this.dataKey}))},updateOnEnter:function(t){var e=t.target.innerText.replace(/(\r\n|\n|\r)/gm,"");if(""===e)return t.target.innerText=this.text;this.getContent()!==e?(t.target.blur(),this.innerText=e):t.target.blur()}}}),W=L,F=(n("b688"),Object(m["a"])(W,U,M,!1,null,"a59a1656",null));F.options.__file="EditableSpan.vue";var J=F.exports;r["default"].config.productionTip=!1,r["default"].use(D.a),r["default"].use(C["a"],{locale:"en"}),w.state.server="".concat(window.location.origin,"/api"),o.a.defaults.baseURL=w.state.server;var N=localStorage.getItem("token");o.a.get(w.state.server).then(function(t){return w.state.serverManifest=t.data,o.a.get("".concat(w.state.server,"/accounts?omit=logins"),{headers:{Authorization:N}})}).then(function(t){null!==t&&200===t.status?(o.a.defaults.headers.common["Authorization"]=N,w.state.isAuth=!0,w.state.user=t.data.resource,w.state.token=N,B()):B()}).catch(function(t){B()}),r["default"].prototype.$http=o.a,window.bus=new r["default"];var q=new O.a;r["default"].mixin({methods:{getHexFromString:function(t){return q.hex(t)},sleep:function(t){return new Promise(function(e){return setTimeout(e,t)})}}}),r["default"].component("editable-span",J);var B=function(){new r["default"]({router:y,store:w,render:function(t){return t(g)}}).$mount("#app")}},"5c0b":function(t,e,n){"use strict";var r=n("5e27"),a=n.n(r);a.a},"5e27":function(t,e,n){},"82c8":function(t,e,n){},a1a0:function(t,e,n){},b688:function(t,e,n){"use strict";var r=n("a1a0"),a=n.n(r);a.a}});
//# sourceMappingURL=app.bbb1b09d.js.map