(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{659:function(e,t,a){},716:function(e,t,a){"use strict";a.r(t);a(639);var n=a(638),r=(a(107),a(32)),c=(a(224),a(179)),o=a(18),i=a(88);a(75);var l,u,s=a(41),m=(a(109),a(66)),d=a(11),p=a(12),f=a(14),g=a(13),h=a(15),b=a(0),y=a.n(b),v=a(28),O=(a(659),a(23)),E=a(173),j=a(35),k=(a(98),a(45)),w=(a(51),a(20)),S=(a(54),a(39)),L=(a(145),a(52)),C=(a(239),a(205)),A=a(89),I=a(17),x=a.n(I),M=(C.a.RangePicker,L.a.Option),N=Object(O.b)(function(e){return e.article})(l=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(r)))).getFormMeta=function(){return{colon:!0,elements:[{key:"search",label:"\u6807\u9898",widget:y.a.createElement(S.a,{placeholder:"\u8bf7\u8f93\u5165\u6587\u7ae0\u6807\u9898"})},{key:"tag",label:"\u6807\u7b7e",widget:y.a.createElement(L.a,{className:"form-select",allowClear:!0},a.props.tagList.map(function(e){return y.a.createElement(M,{key:e.name,value:e.name},e.name)}))},{key:"category",label:"\u5206\u7c7b",widget:y.a.createElement(L.a,{className:"form-select",allowClear:!0},a.props.categoryList.map(function(e){return y.a.createElement(M,{key:e.name,value:e.name},e.name)}))}]}},a.handleSubmit=function(e){e.preventDefault(),a.props.form.validateFieldsAndScroll(function(e,t){e||(console.log("submit form: ",t),a.props.getQuery(t))})},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return y.a.createElement("div",{className:"query-form"},y.a.createElement(k.a,{layout:"inline",onSubmit:this.handleSubmit},y.a.createElement(A.a,{meta:this.getFormMeta(),form:this.props.form},y.a.createElement(w.a,{type:"primary",htmlType:"submit"},"\u68c0\u7d22"))))}}]),t}(b.Component))||l,z=k.a.create()(N),D=Object(O.b)(function(e){return{colorList:e.common.colorList,tagList:e.article.tagList}})(u=function(e){function t(){var e,a;Object(d.a)(this,t);for(var n=arguments.length,l=new Array(n),u=0;u<n;u++)l[u]=arguments[u];return(a=Object(f.a)(this,(e=Object(g.a)(t)).call.apply(e,[this].concat(l)))).state={colorMap:{},list:[],pagination:{},total:0},a.getColumns=function(){return[{title:"\u6807\u9898",dataIndex:"title"},{title:"\u6807\u7b7e",dataIndex:"tags",render:function(e,t){return e.map(function(e){return y.a.createElement(m.a,{color:a.state.colorMap[e.name],key:e.name},e.name)})}},{title:"\u5206\u7c7b",dataIndex:"categories",render:function(e,t){return e.map(function(e){return y.a.createElement(m.a,{color:"#2db7f5",key:e.name},e.name)})}},{title:"\u53d1\u5e03\u65f6\u95f4",dataIndex:"create_at",sorter:function(e,t){return x()(e.createdAt).isBefore(t.createdAt)?1:-1}},{title:"\u4fee\u6539\u65f6\u95f4",dataIndex:"update_at",sorter:function(e,t){return x()(e.updatedAt).isBefore(t.updatedAt)?1:-1}},{title:"\u64cd\u4f5c",render:function(e,t){return y.a.createElement("div",{className:"action"},y.a.createElement(E.a,{to:"/article/".concat(t.id)},"\u67e5\u770b"),y.a.createElement(s.a,{type:"vertical"}),y.a.createElement(E.a,{to:{pathname:"/admin/articles/edit",state:{articleId:t.id}}},"\u7f16\u8f91"),y.a.createElement(s.a,{type:"vertical"}),y.a.createElement("span",{className:"btn-delete",onClick:function(){return a.handleDelete(t.id,t.title)}},"\u5220\u9664"))}}]},a.fetchList=function(e){var t=e.current,n=void 0===t?1:t,r=e.pageSize,c=void 0===r?10:r,l=function(e,t){if(null==e)return{};var a,n,r=Object(i.a)(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}(e,["current","pageSize"]);v.a.get("/article",{params:Object(o.a)({page:n,pageSize:c},l)}).then(function(e){var t={current:n,pageSize:c,total:e.count};a.setState({list:e.results,pagination:t})})},a.handleChange=function(e){a.fetchList(Object(o.a)({},e,a.state.query))},a.handleDelete=function(e,t){c.a.confirm({title:"\u60a8\u786e\u8ba4\u5220\u9664\u8be5\u6587\u7ae0?\uff0c\u6b64\u64cd\u4f5c\u4e0d\u53ef\u6062\u590d\uff01",content:"\u6587\u7ae0\uff1a ".concat(t," "),onOk:function(){var t=localStorage.getItem("token");Object(v.a)({url:"/article/"+e,method:"delete",headers:{Authorization:" JWT "+t}}).then(function(e){200===e.code&&(a.fetchList(a.state.pagination),r.a.success(e.message))})}})},a.getQuery=function(e){a.setState({query:e}),a.fetchList(Object(o.a)({},e,{current:1}))},a}return Object(h.a)(t,e),Object(p.a)(t,[{key:"componentDidMount",value:function(){var e=this,t=this.props,a=t.colorList,n=t.tagList,r={};n.forEach(function(e){r[e.name]=a[Object(j.d)(a)]}),this.setState({colorMap:r},function(){return e.fetchList({page:1})})}},{key:"render",value:function(){var e=this.state,t=e.list,a=e.pagination;return y.a.createElement("div",{className:"manager"},y.a.createElement(z,{getQuery:this.getQuery}),y.a.createElement(n.a,{rowKey:"id",bordered:!0,columns:this.getColumns(),dataSource:t,pagination:a,onChange:this.handleChange}))}}]),t}(b.Component))||u;t.default=D}}]);
//# sourceMappingURL=8.14496f79.chunk.js.map