(window.webpackJsonp=window.webpackJsonp||[]).push([[122],{1083:function(t,e,n){"use strict";n.r(e);var a=n(19),o=n(20),i=n(22),c=n(21),d=n(0),l=n.n(d),s=n(41),h=n(7),r=n(28),u=function(t){Object(i.a)(n,t);var e=Object(c.a)(n);function n(t){var o;return Object(a.a)(this,n),(o=e.call(this,t)).state={date:""},o.getDate=function(){var t=(new Date).toDateString();o.setState({date:t})},o.state={isLoading:!1},o}return Object(o.a)(n,[{key:"componentDidMount",value:function(){Object(h.l)("islogin")===Object(h.i)()&&this.props.history.push("/dashboard"),window.history.pushState(null,document.title,window.location.href),window.addEventListener("popstate",function(t){window.history.pushState(null,document.title,window.location.href)}),this.context.handleSetPageSidebar(!1),this.context.handleSetPageHeader(!1),this.context.handleSetBodyWhiteBg(!0),this.getDate(),window.location.replace("http://localhost:3000/settingnota.html")}},{key:"componentWillUnmount",value:function(){this.context.handleSetPageSidebar(!0),this.context.handleSetPageHeader(!0),this.context.handleSetBodyWhiteBg(!1)}},{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null," ")}}]),n}(l.a.Component);u.contextType=r.a,e.default=Object(s.g)(u)}}]);
//# sourceMappingURL=122.4854e575.chunk.js.map