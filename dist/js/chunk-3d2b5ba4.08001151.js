(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-3d2b5ba4"],{"12db":function(t,e,s){"use strict";var r=s("b4f2"),a=s.n(r);a.a},"2f21":function(t,e,s){"use strict";var r=s("79e5");t.exports=function(t,e){return!!t&&r(function(){e?t.call(null,function(){},1):t.call(null)})}},"405e":function(t,e,s){"use strict";var r=s("4f70"),a=s.n(r);a.a},4134:function(t,e,s){},4136:function(t,e,s){"use strict";var r=s("603d"),a=s.n(r);a.a},"4f70":function(t,e,s){},"51a3":function(t,e,s){},"55dd":function(t,e,s){"use strict";var r=s("5ca1"),a=s("d8e8"),i=s("4bf8"),n=s("79e5"),c=[].sort,o=[1,2,3];r(r.P+r.F*(n(function(){o.sort(void 0)})||!n(function(){o.sort(null)})||!s("2f21")(c)),"Array",{sort:function(t){return void 0===t?c.call(i(this)):c.call(i(this),a(t))}})},"603d":function(t,e,s){},"6ec6":function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-card",{staticClass:"md-elevation-0",attrs:{"md-with-hover":""}},[s("md-card-content",[s("md-field",{attrs:{"md-clearable":""}},[s("md-icon",[t._v("search")]),s("label",[t._v("Search for a user to add")]),s("md-input",{on:{input:t.startSearchUsers},model:{value:t.userSearch,callback:function(e){t.userSearch=e},expression:"userSearch"}})],1),s("md-progress-bar",{directives:[{name:"show",rawName:"v-show",value:t.searchInProgress,expression:"searchInProgress"}],attrs:{"md-mode":"indeterminate","md-diameter":20,"md-stroke":2}}),s("div",{staticClass:"md-layout xxxsearch-results xxxmd-elevation-1"},[t._l(t.foundUsers,function(e){return null!==t.userSearch&&t.foundUsers.length>0?s("md-chip",{key:e._id,staticClass:"md-primary",staticStyle:{margin:"3px"},attrs:{"md-clickable":""},on:{click:function(s){t.selectUser(e._id)}}},[t._v("\n      "+t._s(e.name)+" "+t._s(e.surname)+" "),e.company?s("span",{staticClass:"md-caption"},[t._v("("+t._s(e.company)+")")]):t._e()]):t._e()}),0!==t.foundUsers.length||""===t.userSearch||t.searchInProgress?t._e():s("div",{staticClass:"md-caption"},[t._v("\n      No users found. Try a different search!\n    ")])],2)],1)],1)},a=[],i=(s("20d6"),s("f7fe")),n=s.n(i),c=s("bc3a"),o=s.n(c),d={name:"UserSearch",props:{msg:String},data:function(){return{userSearch:"",foundUsers:[],searchInProgress:!1}},watch:{userSearch:function(t,e){""===t&&(this.foundUsers=[],this.searchInProgress=!1)}},methods:{selectUser:function(t){this.$emit("selected-user",t);var e=this.foundUsers.findIndex(function(e){return e._id===t});this.foundUsers.splice(e,1)},startSearchUsers:function(){this.searchInProgress=!0,this.searchUsers(this.userSearch)},searchUsers:n()(function(t){var e=this;""===t&&(this.foundUsers=[],this.searchInProgress=!1),t.length<3||o.a.post("/accounts/search",{searchString:t}).then(function(t){console.log(t),e.foundUsers=t.data.resources,t.data.resources.length>0&&e.$store.commit("ADD_USERS",t.data.resources),e.searchInProgress=!1}).catch(function(t){e.foundUsers=[],e.searchInProgress=!1})},1500)}},u=d,m=(s("4136"),s("2877")),l=Object(m["a"])(u,r,a,!1,null,"17f1dd98",null);l.options.__file="UserSearch.vue";e["a"]=l.exports},"7c41":function(t,e,s){"use strict";var r=s("9902"),a=s.n(r);a.a},8450:function(t,e,s){"use strict";var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return t.resource?s("md-card",{staticClass:"md-elevation-3"},[s("md-card-header",{staticClass:"bg-ghost-white"},[s("md-card-header-text",[s("div",{staticClass:"md-title"},[t._v("Description")]),s("div",{staticClass:"md-caption"},[t._v("What this "+t._s(t.isStream?"stream":"project")+" is about.")])])],1),s("md-card-content",[s("div",{directives:[{name:"show",rawName:"v-show",value:!t.editDescription,expression:"!editDescription"}]},[s("div",{domProps:{innerHTML:t._s(t.compiledDescription)}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.editDescription,expression:"editDescription"}]},[t._v("\n      Supports "),s("a",{attrs:{target:"_blank",href:"https://en.wikipedia.org/wiki/Markdown#Example"}},[t._v("markdown.")]),s("md-field",[s("md-textarea",{model:{value:t.resource.description,callback:function(e){t.$set(t.resource,"description",e)},expression:"resource.description"}})],1)],1)]),s("md-card-actions",[!1===t.editDescription&&t.canEdit?s("md-button",{staticClass:"md-primary",nativeOn:{click:function(e){t.editDescription=!0}}},[t._v("Edit description")]):t._e(),!0===t.editDescription?s("md-button",{staticClass:"md-primary",nativeOn:{click:function(e){return t.updateDescription(e)}}},[t._v("Done")]):t._e()],1),t.resource.baseProperties?s("md-card-content",{staticClass:"md-caption"},[s("span",[s("strong",[t._v("Units:")]),t._v(" "+t._s(t.resource.baseProperties.units))]),t._v(";\n    "),s("span",[s("strong",[t._v("Tolerance:")]),t._v(" "+t._s(t.resource.baseProperties.tolerance))]),t._v(".\n  ")]):t._e()],1):t._e()},a=[],i=(s("cadf"),s("551c"),s("097d"),s("f7fe"),s("0e54")),n=s.n(i),c={name:"DetailDescription",props:{resource:Object},computed:{compiledDescription:function(){return n()(this.resource.description,{sanitize:!0})},canEdit:function(){return!!this.isOwner||-1!==this.resource.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.resource.owner===this.$store.state.user._id},isStream:function(){return this.resource.hasOwnProperty("streamId")}},data:function(){return{editDescription:!1}},methods:{updateDescription:function(){this.editDescription=!1,this.isStream?this.$store.dispatch("updateStream",{streamId:this.resource.streamId,description:this.resource.description}):this.$store.dispatch("updateProject",{_id:this.resource._id,description:this.resource.description})}}},o=c,d=(s("a345"),s("2877")),u=Object(d["a"])(o,r,a,!1,null,"36a299f6",null);u.options.__file="DetailDescription.vue";e["a"]=u.exports},9902:function(t,e,s){},a345:function(t,e,s){"use strict";var r=s("f59d"),a=s.n(r);a.a},b4f2:function(t,e,s){},cbaf:function(t,e,s){"use strict";s.r(e);var r=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.project?s("div",{staticClass:"md-layout md-alignment-center-center"},[t.project.deleted?s("div",{staticClass:"md-layout-item md-size-100 text-center sticky-top"},[s("md-content",{staticClass:"md-accent md-caption md-layout md-alignment-center-center",staticStyle:{width:"100%",padding:"10px","border-radius":"2px"}},[s("div",{staticClass:"md-layout-item"},[t._v("This project is in your trashbin.")]),s("div",{staticClass:"md-layout-item"},[t.canEdit?s("md-button",{staticClass:"md-dense md-raised",nativeOn:{click:function(e){return t.restore(e)}}},[t._v(" Restore? ")]):t._e()],1)])],1):t._e(),s("div",{staticClass:"md-layout-item md-size-50 md-large-size-65 md-medium-size-100 detail-card"},[s("project-detail-title",{attrs:{project:t.project}}),s("detail-description",{attrs:{resource:t.project}}),s("br"),s("md-card",{attrs:{"md-with-hover":""}},[s("md-card-header",{staticClass:"bg-ghost-white"},[s("md-card-header-text",[s("h2",{staticClass:"md-title"},[s("md-icon",[t._v("group")]),t._v(" Team Members")],1),s("p",{staticClass:"md-caption"},[t._v("The following people will have access to the streams in this project, and will be able to view this project. Please note, users with higher privileges from other projects will not be downgraded or removed.")])])],1),s("md-card-content",[t.canEdit?s("user-search",{on:{"selected-user":t.addUserToTeam}}):t._e(),s("permission-table",{attrs:{project:t.project,"global-disabled":!t.canEdit},on:{"remove-user":function(t){},"move-user":function(t){}}})],1)],1),s("br"),s("project-detail-streams",{attrs:{project:t.project},on:{"selected-stream":t.addStream,"remove-stream":t.removeStream}})],1)]):s("div",{staticClass:"md-layout md-alignment-center-center",staticStyle:{height:"95vh"}},[s("div",{staticClass:"md-layout-item md-size-50"},[s("md-progress-bar",{attrs:{"md-mode":"indeterminate"}})],1)])])},a=[],i=(s("ac6a"),s("2909")),n=(s("7514"),s("cadf"),s("551c"),s("097d"),s("13bb")),c=s.n(n),o=s("c36e"),d=s.n(o),u=s("6ec6"),m=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.project?s("div",{},[0===t.allUsersPop.length?s("div",[t._v("\n      No sharing buddies so far!\n    ")]):t._e(),t._l(t.allUsersPop,function(e){return e?s("div",{class:{"md-layout md-alignment-center-left user":!0,"bg-ghost-white":e.isOwner}},[s("div",{staticClass:"md-layout-item md-size-10 md-small-hide"},[s("md-avatar",{staticClass:"md-avatar-icon md-small",style:{background:t.getHexFromString(e.name)}},[t._v(t._s(e.name.substring(0,1).toUpperCase()))])],1),s("div",{staticClass:"md-layout-item xxx-md-size-40 md-small-size-100"},[t._v("\n        "+t._s(e.name)+" "+t._s(e.surname)+" "),e.company?s("span",{staticClass:"md-caption"},[t._v("("+t._s(e.company)+")")]):t._e(),t._v(" "),e.isOwner?s("span",[s("strong",[t._v("owner")])]):t._e()]),s("div",{staticClass:"md-layout-item text-center "},[s("md-button",{class:{"md-dense md-raised-xx":!0,"md-primary":t.hasWritePermissionStreams(e._id)},attrs:{disabled:e.surname.includes("(that is you!)")||t.globalDisabled||e.isOwner},nativeOn:{click:function(s){t.changePermissionStreams(e._id)}}},[t._v("\n          "+t._s(t.hasWritePermissionStreams(e._id)?"write streams":"read streams")+"\n        ")])],1),s("div",{staticClass:"md-layout-item text-center"},[s("md-button",{class:{"md-dense md-raised-xx":!0,"md-primary":t.hasWritePermissionProject(e._id)},attrs:{disabled:e.surname.includes("(that is you!)")||t.globalDisabled||e.isOwner},nativeOn:{click:function(s){t.changePermissionProject(e._id)}}},[t._v("\n          "+t._s(t.hasWritePermissionProject(e._id)?"write project":"read project")+"\n        ")])],1),s("div",{staticClass:"md-layout-item text-center md-size-5"},[s("md-button",{staticClass:"md-dense-xxx md-icon-button md-accent",attrs:{disabled:e.surname.includes("(that is you!)")||t.globalDisabled||e.isOwner},nativeOn:{click:function(s){t.removeUser(e._id)}}},[s("md-icon",[t._v("delete")])],1)],1),s("div",{staticClass:"md-layout-item md-size-100"})]):t._e()})],2):t._e()])},l=[],p=(s("7f7f"),s("55dd"),{name:"PermissionTable",props:{project:Object,globalDisabled:{type:Boolean,default:!1}},computed:{canReadProject:function(){return this.project.canRead},canWriteProject:function(){return this.project.canWrite},canReadStreams:function(){return this.project.permissions.canRead},canWriteStreams:function(){return this.project.permissions.canWrite},allUsers:function(){return d()(Object(i["a"])(this.canReadProject).concat(Object(i["a"])(this.canWriteProject),Object(i["a"])(this.canReadStreams),Object(i["a"])(this.canWriteProject),[this.project.owner]))},allUsersPop:function(){var t=this;return 0===this.allUsers.length?[]:this.allUsers.map(function(e){var s=t.$store.state.users.find(function(t){return t._id===e});return s||t.$store.dispatch("getUser",{_id:e}),s&&(s.isOwner=s._id===t.project.owner),s}).sort(function(t,e){return t.name>e.name?1:-1})}},data:function(){return{}},methods:{hasWritePermissionStreams:function(t){return this.canWriteStreams.indexOf(t)>-1},hasWritePermissionProject:function(t){return this.canWriteProject.indexOf(t)>-1},changePermissionProject:function(t){var e=this.project.canWrite.indexOf(t)>-1,s=[],r=[],a=this.project.permissions.canWrite,n=this.project.permissions.canRead;e?(s=this.project.canWrite.filter(function(e){return e!==t}),r=d()(Object(i["a"])(this.project.canRead).concat([t]))):(r=this.project.canRead,s=d()(Object(i["a"])(this.project.canWrite).concat([t])),a=d()(Object(i["a"])(a).concat([t])),this.upgradeUser(t)),this.$store.dispatch("updateProject",{_id:this.project._id,permissions:{canRead:n,canWrite:a},canRead:r,canWrite:s})},changePermissionStreams:function(t){var e=this.project.permissions.canWrite.indexOf(t)>-1,s=[],r=[];e?(r=this.project.permissions.canWrite.filter(function(e){return e!==t}),s=d()(Object(i["a"])(this.project.permissions.canRead).concat([t]))):(s=this.project.permissions.canRead,r=d()(Object(i["a"])(this.project.permissions.canWrite).concat([t]))),this.$store.dispatch("updateProject",{_id:this.project._id,permissions:{canRead:s,canWrite:r}}),e?this.downgradeUser(t):this.upgradeUser(t)},upgradeUser:function(t){var e=this;this.project.streams.forEach(function(s){var r=e.$store.state.streams.find(function(t){return t.streamId===s});if(r){var a=d()(Object(i["a"])(r.canWrite).concat([t]));e.$store.dispatch("updateStream",{streamId:s,canWrite:a})}})},downgradeUser:function(t){var e=this;this.project.streams.forEach(function(s){var r=e.$store.state.streams.find(function(t){return t.streamId===s});if(r){var a,n,c=e.$store.state.projects.filter(function(t){return-1!==t.streams.indexOf(s)&&t._id!==e.project._id}),o=(a=Array.prototype).concat.apply(a,Object(i["a"])(c.map(function(t){return t.permissions.canRead}))),u=(n=Array.prototype).concat.apply(n,Object(i["a"])(c.map(function(t){return t.permissions.canWrite})));console.log(o);var m=r.canWrite,l=r.canRead;-1===u.indexOf(t)?(m=m.filter(function(e){return e!==t}),l=d()(Object(i["a"])(l).concat([t])),e.$store.dispatch("updateStream",{streamId:s,canWrite:m,canRead:l})):console.warn("User ".concat(t," has write permissions from another project on stream ").concat(s,". Will not change."))}})},removeUser:function(t){var e=this,s=this.project.permissions.canRead.filter(function(e){return e!==t}),r=this.project.permissions.canWrite.filter(function(e){return e!==t}),a=this.project.canRead.filter(function(e){return e!==t}),n=this.project.canWrite.filter(function(e){return e!==t});this.$store.dispatch("updateProject",{_id:this.project._id,permissions:{canRead:s,canWrite:r},canRead:a,canWrite:n}),this.project.streams.forEach(function(s){var r=e.$store.state.streams.find(function(t){return t.streamId===s});if(r){var a,n,c=e.$store.state.projects.filter(function(t){return-1!==t.streams.indexOf(s)&&t._id!==e.project._id}),o=(a=Array.prototype).concat.apply(a,Object(i["a"])(c.map(function(t){return t.permissions.canRead}))),d=(n=Array.prototype).concat.apply(n,Object(i["a"])(c.map(function(t){return t.permissions.canWrite}))),u=r.canWrite,m=r.canRead,l=!1;-1===o.indexOf(t)&&(m=r.canRead.filter(function(e){return e!==t}),l=!0),-1===d.indexOf(t)&&(u=r.canWrite.filter(function(e){return e!==t}),l=!0),l&&e.$store.dispatch("updateStream",{streamId:s,canRead:m,canWrite:u})}})}},mounted:function(){}}),h=p,f=(s("7c41"),s("2877")),v=Object(f["a"])(h,m,l,!1,null,"5eb52a00",null);v.options.__file="PermissionTableProject.vue";var j=v.exports,_=s("8450"),b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-card",{attrs:{"md-with-hover":""}},[s("md-card-header",{staticClass:"bg-ghost-white"},[s("md-card-header-text",[s("h2",{staticClass:"md-title"},[s("md-icon",[t._v("import_export")]),t._v(" Streams")],1),s("p",{staticClass:"md-caption"},[t._v("These are this project's streams. Adding a stream here will automatically grant write permission to the project's team members."),t.canEdit?s("span",[s("br"),t._v(" "),s("md-divider"),s("br"),t._v("You can only add streams that you have write permissions to.")],1):t._e()])])],1),s("md-card-content",{staticClass:"md-layout"},[s("div",{staticClass:"md-layout-item md-size-100"},[t.canEdit?s("stream-search",{attrs:{"streams-to-omit":t.streams,"write-only":""},on:{"selected-stream":t.selectStream}}):t._e()],1),0===t.streams.length?s("div",{staticClass:"md-layout-item md-size-100"},[s("p",[t._v("This project has no streams. Add some using the form below!")])]):s("div",{staticClass:"md-layout-item md-size-100"},t._l(t.streams,function(e){return s("stream-card-small",{key:e,attrs:{streamId:e,removable:t.canEdit},on:{"remove-stream":t.removeStream}})}))])],1)},g=[],S=s("f7fe"),y=s.n(S),w=s("adc7"),O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-card",{staticClass:"md-elevation-0",attrs:{"md-with-hover":""}},[s("md-card-content",[s("md-field",{attrs:{"md-clearable":""}},[s("md-icon",[t._v("search")]),s("md-input",{attrs:{spellcheck:"false",disabled:t.globalDisabled},on:{input:t.updateSearch},model:{value:t.searchfilter,callback:function(e){t.searchfilter=e},expression:"searchfilter"}}),s("label",[t._v("Search for a stream to add")])],1),s("md-progress-bar",{directives:[{name:"show",rawName:"v-show",value:t.searchInProgress,expression:"searchInProgress"}],attrs:{"md-mode":"indeterminate","md-diameter":20,"md-stroke":2}}),t.showSearchResults?s("div",{staticClass:"search-results"},[t._l(t.paginatedStreams,function(e){return t.filters.length>0?s("md-chip",{key:e.streamId,staticClass:"md-primary",staticStyle:{margin:"3px"},attrs:{"md-clickable":""},on:{click:function(s){t.selectStream(e.streamId)}}},[s("strong",[t._v(t._s(e.name))]),t._v(" "+t._s(e.streamId)+" "),t._l(e.tags,function(r){return e.tags?s("span",{staticStyle:{background:"#0B5DE8","border-radius":"3px","margin-right":"4px",padding:"1px"}},[t._v(" "+t._s(r)+" ")]):t._e()})],2):t._e()}),0===t.paginatedStreams.length?s("p",{staticClass:"md-caption"},[t._v("No streams found. Existing streams ignored.")]):t._e()],2):t._e()],1)],1)},x=[],P=(s("6762"),s("2fdb"),s("28a5"),{name:"StreamSearch",props:{streamsToOmit:{type:Array,default:function(){return[]}},globalDisabled:{type:Boolean,default:!1},writeOnly:Boolean},computed:{filteredStreams:function(){var t=this;return this.$store.getters.filteredStreams(this.filters).filter(function(e){return-1===t.streamsToOmit.indexOf(e.streamId)})},paginatedStreams:function(){var t=this,e=this.filteredStreams.slice(this.startIndex,this.endIndex);return this.writeOnly&&(e=e.filter(function(e){return e.owner===t.$store.state.user._id||e.canWrite.indexOf(t.$store.state.user._id)>-1})),e}},watch:{searchfilter:function(t){""===t?(this.showSearchResults=!1,this.searchInProgress=!1):this.searchInProgress=!0}},data:function(){return{searchfilter:"",filters:[],showSearchResults:!1,searchInProgress:!1}},methods:{selectStream:function(t){this.$emit("selected-stream",t)},updateSearch:y()(function(t){if(this.searchfilter=t,""!==t){this.showSearchResults=!0,this.searchInProgress=!1;try{var e=this.searchfilter.split(" ").map(function(t){return t.includes(":")?{key:t.split(":")[0],value:t.split(":")[1]}:t.includes("public")||t.includes("private")||t.includes("mine")||t.includes("shared")?{key:t,value:null}:{key:"name",value:t}});this.filters=e}catch(s){this.filters=[{key:"name",value:t}]}}else this.showSearchResults=!1},1e3)}}),$=P,W=(s("e9f9"),Object(f["a"])($,O,x,!1,null,"16406b3f",null));W.options.__file="StreamSearch.vue";var C=W.exports,R={name:"ProjectStreams",components:{StreamCardSmall:w["a"],StreamSearch:C},props:{project:Object},computed:{streams:function(){return this.project.streams?this.project.streams:[]},canEdit:function(){return this.project.owner===this.$store.state.user._id||this.project.canWrite.indexOf(this.$store.state.user._id)>-1}},watch:{},data:function(){return{}},methods:{selectStream:function(t){this.$emit("selected-stream",t)},removeStream:function(t){this.$emit("remove-stream",t)}}},U=R,I=(s("405e"),Object(f["a"])(U,b,g,!1,null,"5ce3bbf6",null));I.options.__file="ProjectDetailStreams.vue";var k=I.exports,D=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("md-card",{staticClass:"md-elevation-0"},[s("h1",{staticClass:"md-display-1"},[s("router-link",{attrs:{to:"/projects"}},[t._v("Projects")]),t._v(" /\n    "),t.canEdit?s("editable-span",{attrs:{text:t.project.name},on:{update:t.updateName}}):t._e()],1),s("p",[t._v("\n    projectId: "),s("span",{staticStyle:{"user-select":"all"}},[s("md-chip",{staticClass:"md-accent"},[s("strong",[t._v(t._s(t.project._id))])])],1)]),s("md-divider"),s("md-chips",{staticClass:"stream-chips",attrs:{"md-placeholder":"add tags","md-disabled":"!canEdit"},on:{input:t.updateTags},model:{value:t.project.tags,callback:function(e){t.$set(t.project,"tags",e)},expression:"project.tags"}})],1)},E=[],T={name:"HelloWorld",props:{project:Object},computed:{canEdit:function(){return this.project.owner===this.$store.state.user._id||this.project.canWrite.indexOf(this.$store.state.user._id)>-1}},data:function(){return{}},methods:{updateName:function(t){this.$store.dispatch("updateProject",{_id:this.project._id,name:t.text})},updateTags:y()(function(t){this.$store.dispatch("updateProject",{_id:this.project._id,tags:this.project.tags})},1e3)}},z=T,A=(s("d203"),Object(f["a"])(z,D,E,!1,null,"74a5229c",null));A.options.__file="ProjectDetailTitle.vue";var N=A.exports,B={name:"ProjectDetailView",components:{UserSearch:u["a"],PermissionTable:j,DetailDescription:_["a"],ProjectDetailStreams:k,ProjectDetailTitle:N},props:{},computed:{canEdit:function(){return this.project.owner===this.$store.state.user._id||this.project.canWrite.indexOf(this.$store.state.user._id)>-1},project:function(){var t=this;return this.$store.state.projects.find(function(e){return e._id===t.$route.params.projectId})},canReadProject:function(){return this.project.canRead},canWriteProject:function(){return this.project.canWrite},canReadStreams:function(){return this.project.permissions.canRead},canWriteStreams:function(){return this.project.permissions.canWrite},allUsers:function(){return d()(Object(i["a"])(this.canReadProject).concat(Object(i["a"])(this.canWriteProject),Object(i["a"])(this.canReadStreams),Object(i["a"])(this.canWriteProject),[this.project.owner]))}},data:function(){return{}},methods:{restore:function(){this.$store.dispatch("updateProject",{_id:this.project._id,deleted:!1})},addUserToTeam:function(t){var e=this,s={canWrite:d()(Object(i["a"])(this.project.permissions.canWrite).concat([t])),canRead:this.project.permissions.canRead},r=d()(Object(i["a"])(this.project.canRead).concat([t]));this.$store.dispatch("updateProject",{_id:this.project._id,permissions:s,canRead:r}),this.project.streams.forEach(function(s){var r=e.$store.state.streams.find(function(t){return t.streamId===s});if(r){var a=d()(Object(i["a"])(r.canWrite).concat([t]));e.$store.dispatch("updateStream",{streamId:s,canWrite:a})}else console.error("Failed to find ".concat(s," while updating permissions from project."))})},addStream:function(t){this.$store.dispatch("updateProject",{_id:this.project._id,streams:d()(Object(i["a"])(this.project.streams).concat([t]))});var e=this.$store.state.streams.find(function(e){return e.streamId===t}),s=d()(Object(i["a"])(e.canRead).concat(Object(i["a"])(this.project.permissions.canRead))),r=d()(Object(i["a"])(e.canWrite).concat(Object(i["a"])(this.project.permissions.canWrite)));this.$store.dispatch("updateStream",{streamId:t,canRead:s,canWrite:r})},removeStream:function(t){var e,s,r=this;console.log("remove ".concat(t));var a=this.project.streams.filter(function(e){return e!==t});this.$store.dispatch("updateProject",{_id:this.project._id,streams:a});var n=this.$store.state.projects.filter(function(e){return-1!==e.streams.indexOf(t)&&e._id!==r.project._id}),c=(e=Array.prototype).concat.apply(e,Object(i["a"])(n.map(function(t){return t.permissions.canRead}))),o=(s=Array.prototype).concat.apply(s,Object(i["a"])(n.map(function(t){return t.permissions.canWrite}))),d=this.$store.state.streams.find(function(e){return e.streamId===t}),u=d.canRead,m=d.canWrite,l=!1;this.allUsers.forEach(function(t){-1===o.indexOf(t)&&(m=m.filter(function(e){return e!==t}),l=!0),-1===c.indexOf(t)&&(u=u.filter(function(e){return e!==t}),l=!0)}),l&&this.$store.dispatch("updateStream",{streamId:t,canRead:u,canWrite:m})}},mounted:function(){var t=this,e=this.$store.state.projects.find(function(e){return e._id===t.$route.params.projectId});e?(this.$store.dispatch("getUser",{_id:e.owner}),c()(e.canRead,e.canWrite).forEach(function(e){return t.$store.dispatch("getUser",{_id:e})})):this.$store.dispatch("getProject",{_id:this.$route.params.projectId}).then(function(e){t.$store.dispatch("getUser",{_id:e.data.resource.owner}),c()(e.data.resource.canRead,e.data.resource.canWrite).forEach(function(e){return t.$store.dispatch("getUser",{_id:e})})}).catch(function(e){t.$store.state.isAuth?(t.$router.push("/projects"),console.log("you don't have permission.")):(console.log("should redirect to login"),t.$router.push("/login")),console.log(e)})}},F=B,H=(s("12db"),Object(f["a"])(F,r,a,!1,null,"5b789bbd",null));H.options.__file="ProjectDetail.vue";e["default"]=H.exports},d203:function(t,e,s){"use strict";var r=s("4134"),a=s.n(r);a.a},e9f9:function(t,e,s){"use strict";var r=s("51a3"),a=s.n(r);a.a},f59d:function(t,e,s){}}]);
//# sourceMappingURL=chunk-3d2b5ba4.08001151.js.map