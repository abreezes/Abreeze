(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{713:function(t,e,n){"use strict";n.r(e);n(639);var a=n(638),o=n(18),i=(n(107),n(32)),r=(n(224),n(179)),c=(n(51),n(20)),u=n(11),s=n(12),l=n(14),h=n(13),d=n(15),f=n(0),g=n.n(f),p=n(28),m=(n(35),function(t){function e(){var t,n;Object(u.a)(this,e);for(var a=arguments.length,s=new Array(a),d=0;d<a;d++)s[d]=arguments[d];return(n=Object(l.a)(this,(t=Object(h.a)(e)).call.apply(t,[this].concat(s)))).state={list:[],pagination:{}},n.getColumns=function(){return[{title:"\u7528\u6237\u540d",dataIndex:"username"},{title:"\u64cd\u4f5c",render:function(t,e){return g.a.createElement(c.a,{type:"danger",onClick:function(){return n.handleDelete(e.id,e.username)}},"\u5220\u9664")}}]},n.fetchList=function(t){var e=t.current,a=void 0===e?1:e,o=t.pageSize,i=void 0===o?10:o,r=localStorage.getItem("token");Object(p.a)({url:"user",method:"get",headers:{Authorization:" JWT "+r}}).then(function(t){var e={current:a,pageSize:i,total:t.count};n.setState({list:t.results,pagination:e})})},n.handleDelete=function(t,e){r.a.confirm({title:"\u60a8\u786e\u8ba4\u5220\u9664\u8be5\u7528\u6237?\uff0c\u6b64\u64cd\u4f5c\u4e0d\u53ef\u6062\u590d\uff01",content:"\u7528\u6237\uff1a ".concat(e," "),onOk:function(){var e=localStorage.getItem("token");Object(p.a)({url:"/user/"+t,method:"delete",headers:{Authorization:" JWT "+e}}).then(function(t){200===t.code&&(n.fetchList(n.state.pagination),i.a.success(t.message))})}})},n.handleChange=function(t){n.fetchList(Object(o.a)({},t,n.state.query))},n}return Object(d.a)(e,t),Object(s.a)(e,[{key:"componentDidMount",value:function(){this.fetchList({page:1})}},{key:"render",value:function(){var t=this.state,e=t.list,n=t.pagination;return g.a.createElement(a.a,{rowKey:"id",bordered:!0,columns:this.getColumns(),dataSource:e,pagination:n,onChange:this.handleChange})}}]),e}(f.Component));e.default=m}}]);
//# sourceMappingURL=14.1671f3d5.chunk.js.map