(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{12:function(e,t,n){},14:function(e,t,n){"use strict";n.r(t);var c=n(7),a=n.n(c),i=n(2),o=n(3),r=n(5),s=n(4),l=n(1),u=n.n(l),m=(n(12),n(0));function d(e){return e.toUTCString().slice(-12,-4)}var h=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={currentTime:d(new Date)},e.timerId=0,e.timeUpdate=function(){var t=d(new Date);e.setState({currentTime:t}),window.console.info(t)},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.timeUpdate,1e3)}},{key:"componentDidUpdate",value:function(e){e.name!==this.props.name&&window.console.debug("Renamed from ".concat(e.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var e=this.state.currentTime,t=this.props.name;return Object(m.jsxs)("div",{className:"Clock",children:[Object(m.jsx)("strong",{className:"Clock__name",children:t})," time is ",Object(m.jsx)("span",{className:"Clock__time",children:e})]})}}]),n}(u.a.Component),v=h;function k(){var e=Date.now().toString().slice(-4);return"Clock-".concat(e)}var p=function(e){Object(r.a)(n,e);var t=Object(s.a)(n);function n(){var e;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(e=t.call.apply(t,[this].concat(a))).state={hasClock:!0,clockName:"Clock-0"},e.timerId=0,e.nameChange=function(){e.setState({clockName:k()})},e.clickRight=function(t){t.preventDefault(),e.setState({hasClock:!1})},e.clickLeft=function(){e.setState({hasClock:!0})},e}return Object(o.a)(n,[{key:"componentDidMount",value:function(){this.timerId=window.setInterval(this.nameChange,3300),document.addEventListener("contextmenu",this.clickRight),document.addEventListener("click",this.clickLeft)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("contextmenu",this.clickRight),document.removeEventListener("click",this.clickLeft)}},{key:"render",value:function(){var e=this.state,t=e.hasClock,n=e.clockName;return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsx)("h1",{children:"React clock"}),t&&Object(m.jsx)(v,{name:n})]})}}]),n}(u.a.Component);a.a.render(Object(m.jsx)(p,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.fab54427.chunk.js.map