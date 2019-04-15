(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-11136037"],{"07bd":function(e,t,s){"use strict";s.r(t);var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.project?s("div",{staticClass:"md-layout md-alignment-center-center"},[e.project.deleted?s("div",{staticClass:"md-layout-item md-size-100 text-center sticky-top"},[s("md-content",{staticClass:"md-accent md-caption md-layout md-alignment-center-center",staticStyle:{width:"100%",padding:"10px","border-radius":"2px"}},[s("div",{staticClass:"md-layout-item"},[e._v("This project is in your trashbin.")]),s("div",{staticClass:"md-layout-item"},[e.canEdit?s("md-button",{staticClass:"md-dense md-raised",nativeOn:{click:function(t){return e.restore(t)}}},[e._v(" Restore? ")]):e._e()],1)])],1):e._e(),s("div",{staticClass:"md-layout-item md-size-55 md-large-size-65 md-medium-size-100 detail-card"},[s("project-detail-title",{attrs:{project:e.project}}),s("detail-description",{attrs:{resource:e.project}}),s("br"),s("md-card",{attrs:{"md-with-hover":""}},[s("md-card-header",{staticClass:"bg-ghost-white"},[s("md-card-header-text",[s("h2",{staticClass:"md-title"},[s("md-icon",[e._v("group")]),e._v(" Team Members")],1),s("p",{staticClass:"md-caption"},[e._v("The following people will have access to the streams in this project, and will be able to view this project. Please note, users with higher privileges from other projects will not be downgraded or removed.")])])],1),s("md-card-content",[e.canEdit?s("user-search",{on:{"selected-user":e.addUserToTeam}}):e._e(),s("permission-table",{attrs:{project:e.project,"global-disabled":!e.canEdit},on:{"remove-user":function(e){},"move-user":function(e){}}})],1)],1),s("br"),s("project-detail-streams",{attrs:{project:e.project},on:{"selected-stream":e.addStream,"remove-stream":e.removeStream}})],1)]):s("div",{staticClass:"md-layout md-alignment-center-center",staticStyle:{height:"95vh"}},[s("div",{staticClass:"md-layout-item md-size-55"},[s("md-progress-bar",{attrs:{"md-mode":"indeterminate"}})],1)])])},a=[],i=(s("ac6a"),s("2909")),n=(s("7514"),s("13bb")),c=s.n(n),o=s("c36e"),d=s.n(o),m=s("6ec6"),l=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",[e.project?s("div",{},[0===e.allUsersPop.length?s("div",[e._v("\n      No sharing buddies so far!\n    ")]):e._e(),e._l(e.allUsersPop,function(t){return t?s("div",{class:{"md-layout md-alignment-center-left user":!0,"bg-ghost-white":t.isOwner}},[s("div",{staticClass:"md-layout-item md-size-10 md-small-hide"},[s("md-avatar",{staticClass:"md-avatar-icon md-small",style:{background:e.getHexFromString(t.name)}},[e._v(e._s(t.name.substring(0,1).toUpperCase()))])],1),s("div",{staticClass:"md-layout-item xxx-md-size-40 md-xsmall-size-100 text-center"},[e._v("\n        "+e._s(t.name)+" "+e._s(t.surname)+" "),t.company?s("span",{staticClass:"md-caption"},[e._v("("+e._s(t.company)+")")]):e._e(),e._v(" "),t.isOwner?s("span",[s("strong",[e._v("owner")])]):e._e()]),s("div",{staticClass:"md-layout-item text-center md-xsmall-size-100"},[s("md-button",{class:{"md-dense md-raised-xx":!0,"md-primary":e.hasWritePermissionStreams(t._id)},attrs:{disabled:t.surname.includes("(that is you!)")||e.globalDisabled||t.isOwner},nativeOn:{click:function(s){e.changePermissionStreams(t._id)}}},[e._v("\n          "+e._s(t.isOwner?"write streams":e.hasWritePermissionStreams(t._id)?"write streams":"read streams")+"\n        ")])],1),s("div",{staticClass:"md-layout-item text-center md-xsmall-size-100"},[s("md-button",{class:{"md-dense md-raised-xx":!0,"md-primary":e.hasWritePermissionProject(t._id)},attrs:{disabled:t.surname.includes("(that is you!)")||e.globalDisabled||t.isOwner},nativeOn:{click:function(s){e.changePermissionProject(t._id)}}},[e._v("\n          "+e._s(t.isOwner?"write project":e.hasWritePermissionProject(t._id)?"write project":"read project")+"\n        ")])],1),s("div",{staticClass:"md-layout-item text-center md-size-5 md-xsmall-size-100"},[s("md-button",{staticClass:"md-dense-xxx md-icon-button md-accent",attrs:{disabled:t.surname.includes("(that is you!)")||e.globalDisabled||t.isOwner},nativeOn:{click:function(s){e.removeUser(t._id)}}},[s("md-icon",[e._v("delete")])],1)],1),s("div",{staticClass:"md-layout-item md-size-100"}),s("div",{staticClass:"md-layout-item md-size-100"})]):e._e()})],2):e._e()])},u=[],h=(s("7f7f"),s("55dd"),{name:"PermissionTable",props:{project:Object,globalDisabled:{type:Boolean,default:!1}},computed:{canReadProject:function(){return this.project.canRead},canWriteProject:function(){return this.project.canWrite},canReadStreams:function(){return this.project.permissions.canRead},canWriteStreams:function(){return this.project.permissions.canWrite},allUsers:function(){return d()(Object(i["a"])(this.canReadProject).concat(Object(i["a"])(this.canWriteProject),Object(i["a"])(this.canReadStreams),Object(i["a"])(this.canWriteProject),[this.project.owner]))},allUsersPop:function(){var e=this;return 0===this.allUsers.length?[]:this.allUsers.map(function(t){var s=e.$store.state.users.find(function(e){return e._id===t});return s||e.$store.dispatch("getUser",{_id:t}),s&&(s.isOwner=s._id===e.project.owner),s}).sort(function(e,t){return e.name>t.name?1:-1})}},data:function(){return{}},methods:{hasWritePermissionStreams:function(e){return this.canWriteStreams.indexOf(e)>-1},hasWritePermissionProject:function(e){return this.canWriteProject.indexOf(e)>-1},changePermissionProject:function(e){var t=this.project.canWrite.indexOf(e)>-1,s=[],r=[],a=this.project.permissions.canWrite,n=this.project.permissions.canRead;t?(s=this.project.canWrite.filter(function(t){return t!==e}),r=d()(Object(i["a"])(this.project.canRead).concat([e]))):(r=this.project.canRead,s=d()(Object(i["a"])(this.project.canWrite).concat([e])),a=d()(Object(i["a"])(a).concat([e])),this.upgradeUser(e)),this.$store.dispatch("updateProject",{_id:this.project._id,permissions:{canRead:n,canWrite:a},canRead:r,canWrite:s})},changePermissionStreams:function(e){var t=this.project.permissions.canWrite.indexOf(e)>-1;t?this.downgradeUser(e):this.upgradeUser(e)},upgradeUser:function(e){this.$store.dispatch("upgradeUserInProject",{projectId:this.project._id,userId:e})},downgradeUser:function(e){this.$store.dispatch("downgradeUserInProject",{projectId:this.project._id,userId:e})},removeUser:function(e){this.$store.dispatch("removeUserInProject",{projectId:this.project._id,userId:e})}},mounted:function(){}}),p=h,f=(s("2aaf"),s("2877")),v=Object(f["a"])(p,l,u,!1,null,"74ea60bf",null);v.options.__file="PermissionTableProject.vue";var _=v.exports,j=s("8450"),g=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("md-card",{attrs:{"md-with-hover":""}},[s("md-card-header",{staticClass:"bg-ghost-white"},[s("md-card-header-text",[s("h2",{staticClass:"md-title"},[s("md-icon",[e._v("import_export")]),e._v(" Streams")],1),s("p",{staticClass:"md-caption"},[e._v("These are this project's streams. Adding a stream here will automatically grant write permission to the project's team members."),e.canEdit?s("span",[s("br"),e._v(" "),s("md-divider"),s("br"),e._v("You can only add streams that you have write permissions to.")],1):e._e()])])],1),s("md-card-content",{staticClass:"md-layout"},[s("div",{staticClass:"md-layout-item md-size-100"},[e.canEdit?s("stream-search",{attrs:{"streams-to-omit":e.streams,"write-only":""},on:{"selected-stream":e.selectStream}}):e._e()],1),0===e.streams.length?s("div",{staticClass:"md-layout-item md-size-100"},[s("p",[e._v("This project has no streams. Add some using the form below!")])]):s("div",{staticClass:"md-layout-item md-size-100"},e._l(e.streams,function(t){return s("stream-card-small",{key:t,attrs:{streamId:t,removable:e.canEdit},on:{"remove-stream":e.removeStream}})}))])],1)},b=[],S=s("f7fe"),w=s.n(S),x=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.stream?s("md-card",{staticClass:"md-elevation-0",staticStyle:{"margin-bottom":"5px"}},[s("md-card-content",{staticClass:"md-layout md-gutter md-alignment-center-left"},[s("div",{staticClass:"md-layout-item md-size-30"},[s("router-link",{attrs:{to:"/streams/"+e.stream.streamId}},[e._v(e._s(e.stream.name))])],1),s("div",{staticClass:"md-layout-item md-caption"},[e.stream.commitMessage?s("span",[e._v(" "+e._s(e.stream.commitMessage))]):e._e()]),s("div",{staticClass:"md-layout-item md-caption text-right"},[e._v("\n      "+e._s(e.stream.streamId)+" | last update "),s("strong",[s("timeago",{attrs:{datetime:e.stream.updatedAt}})],1)]),e.removable?s("div",{staticClass:"md-layout-item text-right"},[s("md-button",{staticClass:"md-dense-xxx md-icon-button md-accent",nativeOn:{click:function(t){e.$emit("remove-stream",e.streamId)}}},[s("md-icon",[e._v("delete")])],1)],1):e._e()])],1):e._e()},P=[],y={name:"StreamCardSmall",props:{streamId:String,removable:{type:Boolean,default:!0}},computed:{stream:function(){var e=this,t=this.$store.state.streams.find(function(t){return t.streamId===e.streamId});return t||this.$store.dispatch("getStream",{streamId:this.streamId}),t}},data:function(){return{}},methods:{}},C=y,$=(s("d732"),Object(f["a"])(C,x,P,!1,null,"45a6e80e",null));$.options.__file="StreamCardSmall.vue";var O=$.exports,I=s("f6dc"),U={name:"ProjectStreams",components:{StreamCardSmall:O,StreamSearch:I["a"]},props:{project:Object},computed:{streams:function(){return this.project.streams?this.project.streams:[]},canEdit:function(){return this.project.owner===this.$store.state.user._id||this.project.canWrite.indexOf(this.$store.state.user._id)>-1}},watch:{},data:function(){return{}},methods:{selectStream:function(e){this.$emit("selected-stream",e)},removeStream:function(e){this.$emit("remove-stream",e)}}},k=U,W=(s("4552"),Object(f["a"])(k,g,b,!1,null,"fe40c512",null));W.options.__file="ProjectDetailStreams.vue";var D=W.exports,E=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("md-card",{staticClass:"md-elevation-0 title-card"},[s("md-card-content",[s("h1",{staticClass:"md-display-1"},[s("router-link",{attrs:{to:"/projects"}},[e._v("Projects")]),e._v(" /\n    "),e.canEdit?s("editable-span",{attrs:{text:e.project.name},on:{update:e.updateName}}):s("span",[e._v(e._s(e.project.name))])],1),s("p",[s("md-chip",{staticClass:"md-primary"},[e._v("projectId: "),s("span",{staticStyle:{"user-select":"all"}},[s("strong",[e._v(e._s(e.project._id))])])])],1),s("div",{staticClass:"md-xlarge-hide md-large-hide md-medium-hide md-small-hide"},[s("br"),e._v(" ")]),s("md-chip",{},[e.canEdit?s("span",[s("md-icon",[e._v("lock_open")]),e._v(" you can edit")],1):s("span",[s("md-icon",[e._v("lock")]),e._v(" you cannot edit")],1)]),s("p"),s("md-divider"),s("md-chips",{staticClass:"stream-chips",attrs:{"md-placeholder":"add tags","md-disabled":"!canEdit"},on:{input:e.updateTags},model:{value:e.project.tags,callback:function(t){e.$set(e.project,"tags",t)},expression:"project.tags"}})],1)],1)},R=[],T={name:"HelloWorld",props:{project:Object},computed:{canEdit:function(){return this.project.owner===this.$store.state.user._id||this.project.canWrite.indexOf(this.$store.state.user._id)>-1}},data:function(){return{}},methods:{updateName:function(e){this.$store.dispatch("updateProject",{_id:this.project._id,name:e.text})},updateTags:w()(function(e){this.$store.dispatch("updateProject",{_id:this.project._id,tags:this.project.tags})},1e3)}},z=T,N=(s("5bd1"),Object(f["a"])(z,E,R,!1,null,"ee42a668",null));N.options.__file="ProjectDetailTitle.vue";var A=N.exports,B={name:"ProjectDetailView",components:{UserSearch:m["a"],PermissionTable:_,DetailDescription:j["a"],ProjectDetailStreams:D,ProjectDetailTitle:A},props:{},computed:{canEdit:function(){return this.project.owner===this.$store.state.user._id||this.project.canWrite.indexOf(this.$store.state.user._id)>-1},project:function(){var e=this;return this.$store.state.projects.find(function(t){return t._id===e.$route.params.projectId})},canReadProject:function(){return this.project.canRead},canWriteProject:function(){return this.project.canWrite},canReadStreams:function(){return this.project.permissions.canRead},canWriteStreams:function(){return this.project.permissions.canWrite},allUsers:function(){return d()(Object(i["a"])(this.canReadProject).concat(Object(i["a"])(this.canWriteProject),Object(i["a"])(this.canReadStreams),Object(i["a"])(this.canWriteProject),[this.project.owner]))}},data:function(){return{}},methods:{restore:function(){this.$store.dispatch("updateProject",{_id:this.project._id,deleted:!1})},addUserToTeam:function(e){this.$store.dispatch("addUserToProject",{projectId:this.project._id,userId:e})},addStream:function(e){this.$store.dispatch("addStreamToProject",{projectId:this.project._id,streamId:e})},removeStream:function(e){this.$store.dispatch("removeStreamFromProject",{projectId:this.project._id,streamId:e})}},mounted:function(){var e=this,t=this.$store.state.projects.find(function(t){return t._id===e.$route.params.projectId});t?(this.$store.dispatch("getUser",{_id:t.owner}),c()(t.canRead,t.canWrite).forEach(function(t){return e.$store.dispatch("getUser",{_id:t})})):this.$store.dispatch("getProject",{_id:this.$route.params.projectId}).then(function(t){e.$store.dispatch("getUser",{_id:t.data.resource.owner}),c()(t.data.resource.canRead,t.data.resource.canWrite).forEach(function(t){return e.$store.dispatch("getUser",{_id:t})})}).catch(function(t){e.$store.state.isAuth?(e.$router.push("/projects"),console.log("you don't have permission.")):(console.log("should redirect to login"),e.$router.push("/login")),console.log(t)})}},H=B,M=(s("1b9f"),Object(f["a"])(H,r,a,!1,null,"6d75cb54",null));M.options.__file="Project.vue";t["default"]=M.exports},"1b9f":function(e,t,s){"use strict";var r=s("2a74"),a=s.n(r);a.a},"2a74":function(e,t,s){},"2aaf":function(e,t,s){"use strict";var r=s("fc67"),a=s.n(r);a.a},"2f21":function(e,t,s){"use strict";var r=s("79e5");e.exports=function(e,t){return!!e&&r(function(){t?e.call(null,function(){},1):e.call(null)})}},4514:function(e,t,s){"use strict";var r=s("b26a"),a=s.n(r);a.a},4552:function(e,t,s){"use strict";var r=s("9533"),a=s.n(r);a.a},"4a59f":function(e,t,s){"use strict";var r=s("5198"),a=s.n(r);a.a},"4ace":function(e,t,s){},5198:function(e,t,s){},"55dd":function(e,t,s){"use strict";var r=s("5ca1"),a=s("d8e8"),i=s("4bf8"),n=s("79e5"),c=[].sort,o=[1,2,3];r(r.P+r.F*(n(function(){o.sort(void 0)})||!n(function(){o.sort(null)})||!s("2f21")(c)),"Array",{sort:function(e){return void 0===e?c.call(i(this)):c.call(i(this),a(e))}})},"5bd1":function(e,t,s){"use strict";var r=s("a27f"),a=s.n(r);a.a},"6ec6":function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("md-card",{staticClass:"md-elevation-0 user-search",attrs:{"md-with-hover":""}},[s("md-card-content",[s("md-field",{attrs:{"md-clearable":""}},[s("md-icon",[e._v("search")]),s("label",[e._v("Search for a user to add")]),s("md-input",{on:{input:e.startSearchUsers},model:{value:e.userSearch,callback:function(t){e.userSearch=t},expression:"userSearch"}})],1),s("md-progress-bar",{directives:[{name:"show",rawName:"v-show",value:e.searchInProgress,expression:"searchInProgress"}],attrs:{"md-mode":"indeterminate","md-diameter":20,"md-stroke":2}}),s("div",{staticClass:"md-layout xxxsearch-results xxxmd-elevation-1"},[e._l(e.foundUsers,function(t){return null!==e.userSearch&&e.foundUsers.length>0?s("md-chip",{key:t._id,staticClass:"md-primary",staticStyle:{margin:"3px"},attrs:{"md-clickable":""},on:{click:function(s){e.selectUser(t._id)}}},[e._v("\n      "+e._s(t.name)+" "+e._s(t.surname)+" "),t.company?s("span",{staticClass:"md-caption"},[e._v("("+e._s(t.company)+")")]):e._e()]):e._e()}),0!==e.foundUsers.length||""===e.userSearch||e.searchInProgress?e._e():s("div",{staticClass:"md-caption"},[e._v("\n      No users found. Try a different search!\n    ")])],2)],1)],1)},a=[],i=(s("20d6"),s("f7fe")),n=s.n(i),c=s("bc3a"),o=s.n(c),d={name:"UserSearch",props:{msg:String},data:function(){return{userSearch:"",foundUsers:[],searchInProgress:!1}},watch:{userSearch:function(e,t){""===e&&(this.foundUsers=[],this.searchInProgress=!1)}},methods:{selectUser:function(e){this.$emit("selected-user",e);var t=this.foundUsers.findIndex(function(t){return t._id===e});this.foundUsers.splice(t,1)},startSearchUsers:function(){this.searchInProgress=!0,this.searchUsers(this.userSearch)},searchUsers:n()(function(e){var t=this;""===e&&(this.foundUsers=[],this.searchInProgress=!1),e.length<3||o.a.post("/accounts/search",{searchString:e}).then(function(e){console.log(e),t.foundUsers=e.data.resources,e.data.resources.length>0&&t.$store.commit("ADD_USERS",e.data.resources),t.searchInProgress=!1}).catch(function(e){t.foundUsers=[],t.searchInProgress=!1})},1500)}},m=d,l=(s("4514"),s("2877")),u=Object(l["a"])(m,r,a,!1,null,"5ba2af08",null);u.options.__file="UserSearch.vue";t["a"]=u.exports},8450:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return e.resource?s("md-card",{staticClass:"md-elevation-3"},[s("md-card-header",{staticClass:"bg-ghost-white"},[s("md-card-header-text",[s("div",{staticClass:"md-title"},[e._v("Description")]),s("div",{staticClass:"md-caption"},[e._v("What this "+e._s(e.isStream?"stream":"project")+" is about.")])])],1),s("md-card-content",[s("div",{directives:[{name:"show",rawName:"v-show",value:!e.editDescription,expression:"!editDescription"}]},[s("div",{domProps:{innerHTML:e._s(e.compiledDescription)}})]),s("div",{directives:[{name:"show",rawName:"v-show",value:e.editDescription,expression:"editDescription"}]},[s("div",{staticClass:"md-caption"},[e._v("\n      Supports "),s("a",{attrs:{target:"_blank",href:"https://en.wikipedia.org/wiki/Markdown#Example"}},[e._v("markdown:")]),s("strong",[e._v(" ** bold **")]),e._v(", "),s("i",[e._v("* italic *")]),e._v(", "),s("code",[e._v("# Heading 1")]),e._v(", "),s("code",[e._v("## Heading 2")]),e._v(", "),s("code",[e._v("[links](http://example.com)")]),e._v(", etc.")]),s("md-field",[s("md-textarea",{model:{value:e.resource.description,callback:function(t){e.$set(e.resource,"description",t)},expression:"resource.description"}})],1)],1)]),s("md-card-actions",[!1===e.editDescription&&e.canEdit?s("md-button",{staticClass:"md-primary",nativeOn:{click:function(t){e.editDescription=!0}}},[e._v("Edit description")]):e._e(),!0===e.editDescription?s("md-button",{staticClass:"md-primary",nativeOn:{click:function(t){return e.updateDescription(t)}}},[e._v("Done")]):e._e()],1),e.resource.baseProperties?s("md-card-content",{staticClass:"md-caption"},[s("span",[s("strong",[e._v("Units:")]),e._v(" "+e._s(e.resource.baseProperties.units?e.resource.baseProperties.units:"no units specified"))]),e._v(";\n    "),s("span",[s("strong",[e._v("Tolerance:")]),e._v(" "+e._s(e.resource.baseProperties.tolerance?e.resource.baseProperties.tolerance:"no tolerance specified"))]),e._v(".\n  ")]):e._e()],1):e._e()},a=[],i=(s("f7fe"),s("0e54")),n=s.n(i),c={name:"DetailDescription",props:{resource:Object},computed:{compiledDescription:function(){return n()(this.resource.description,{sanitize:!0})},canEdit:function(){return!!this.isOwner||-1!==this.resource.canWrite.indexOf(this.$store.state.user._id)},isOwner:function(){return this.resource.owner===this.$store.state.user._id},isStream:function(){return this.resource.hasOwnProperty("streamId")}},data:function(){return{editDescription:!1}},methods:{updateDescription:function(){this.editDescription=!1,this.isStream?this.$store.dispatch("updateStream",{streamId:this.resource.streamId,description:this.resource.description}):this.$store.dispatch("updateProject",{_id:this.resource._id,description:this.resource.description})}}},o=c,d=(s("949f"),s("2877")),m=Object(d["a"])(o,r,a,!1,null,"5c77723a",null);m.options.__file="DetailDescription.vue";t["a"]=m.exports},"949f":function(e,t,s){"use strict";var r=s("4ace"),a=s.n(r);a.a},9533:function(e,t,s){},a27f:function(e,t,s){},a53e:function(e,t,s){},b26a:function(e,t,s){},d732:function(e,t,s){"use strict";var r=s("a53e"),a=s.n(r);a.a},f6dc:function(e,t,s){"use strict";var r=function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("md-card",{staticClass:"md-elevation-0 stream-search",attrs:{"md-with-hover":""}},[s("md-card-content",[s("md-field",{attrs:{"md-clearable":""}},[s("md-icon",[e._v("search")]),s("md-input",{attrs:{spellcheck:"false",disabled:e.globalDisabled},on:{input:e.updateSearch},model:{value:e.searchfilter,callback:function(t){e.searchfilter=t},expression:"searchfilter"}}),s("label",[e._v("Search for a stream to add")])],1),s("md-progress-bar",{directives:[{name:"show",rawName:"v-show",value:e.searchInProgress,expression:"searchInProgress"}],attrs:{"md-mode":"indeterminate","md-diameter":20,"md-stroke":2}}),e.showSearchResults?s("div",{staticClass:"search-results"},[e._l(e.paginatedStreams,function(t){return e.filters.length>0?s("md-chip",{key:t.streamId,staticClass:"md-primary",staticStyle:{margin:"3px"},attrs:{"md-clickable":""},on:{click:function(s){e.selectStream(t.streamId)}}},[s("strong",[e._v(e._s(t.name))]),e._v(" "+e._s(t.streamId)+" "),e._l(t.tags,function(r){return t.tags?s("span",{staticStyle:{background:"#0B5DE8","border-radius":"3px","margin-right":"4px",padding:"1px"}},[e._v(" "+e._s(r)+" ")]):e._e()})],2):e._e()}),0===e.paginatedStreams.length?s("p",{staticClass:"md-caption"},[e._v("No streams found. Existing streams ignored.")]):e._e()],2):e._e()],1)],1)},a=[],i=(s("6762"),s("2fdb"),s("28a5"),s("f7fe")),n=s.n(i),c={name:"StreamSearch",props:{streamsToOmit:{type:Array,default:function(){return[]}},globalDisabled:{type:Boolean,default:!1},writeOnly:Boolean},computed:{filteredStreams:function(){var e=this;return this.$store.getters.filteredStreams(this.filters).filter(function(t){return-1===e.streamsToOmit.indexOf(t.streamId)})},paginatedStreams:function(){var e=this,t=this.filteredStreams.slice(this.startIndex,this.endIndex);return this.writeOnly&&(t=t.filter(function(t){return t.owner===e.$store.state.user._id||t.canWrite.indexOf(e.$store.state.user._id)>-1})),t}},watch:{searchfilter:function(e){""===e?(this.showSearchResults=!1,this.searchInProgress=!1):this.searchInProgress=!0}},data:function(){return{searchfilter:"",filters:[],showSearchResults:!1,searchInProgress:!1}},methods:{selectStream:function(e){this.$emit("selected-stream",e)},updateSearch:n()(function(e){if(this.searchfilter=e,""!==e){this.showSearchResults=!0,this.searchInProgress=!1;try{var t=this.searchfilter.split(" ").map(function(e){return e.includes(":")?{key:e.split(":")[0],value:e.split(":")[1]}:e.includes("public")||e.includes("private")||e.includes("mine")||e.includes("shared")?{key:e,value:null}:{key:"name",value:e}});this.filters=t}catch(s){this.filters=[{key:"name",value:e}]}}else this.showSearchResults=!1},1e3)}},o=c,d=(s("4a59f"),s("2877")),m=Object(d["a"])(o,r,a,!1,null,"23956790",null);m.options.__file="StreamSearch.vue";t["a"]=m.exports},fc67:function(e,t,s){}}]);
//# sourceMappingURL=chunk-11136037.0e83bffa.js.map