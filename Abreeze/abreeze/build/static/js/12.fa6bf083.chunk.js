(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{717:function(e,t,a){"use strict";a.r(t);var n=a(11),r=a(12),c=a(14),i=a(13),l=a(15),o=a(0),u=a.n(o),s=a(28),h=(a(238),a(172)),m=h.a.Link;function f(e){var t=[];return e.replace(/<(h[1-6])[\s\S]+?(?=<\/\1>)/g,function(e,a){var n=e.replace(/.*?>/,""),r="#".concat(n.replace(/\s/g,"-"));!function e(t,a){var n=t[t.length-1];n&&n.tag!==a.tag?e(n.children,a):t.push(a)}(t,{tag:a,title:n,href:r,children:[]})}),t}var d=function(e){var t=f(e.article);return u.a.createElement(h.a,{affix:!1},t.map(function e(t){var a=t.href,n=t.title,r=t.children;return u.a.createElement(m,{key:a,href:a,title:n},r.length>0&&r.map(function(t){return e(t)}))}))},p=function(e){function t(){var e,a;Object(n.a)(this,t);for(var r=arguments.length,l=new Array(r),o=0;o<r;o++)l[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={markdownText:"",anchors:[]},a}return Object(l.a)(t,e),Object(r.a)(t,[{key:"componentDidMount",value:function(){var e=this;s.a.get("/examples/md").then(function(t){e.setState({markdownText:t.content})})}},{key:"render",value:function(){var e=this.state.markdownText;return u.a.createElement("div",null,u.a.createElement("button",{onClick:this.handleClick},"click"),u.a.createElement("div",{className:"test"},u.a.createElement(d,{article:e})),u.a.createElement("div",{className:"article-detail",dangerouslySetInnerHTML:{__html:this.state.markdownText}}),u.a.createElement("a",{href:"#a"},"aa"))}}]),t}(o.Component);t.default=p}}]);
//# sourceMappingURL=12.fa6bf083.chunk.js.map