(window.webpackJsonpmonsters_rolodex=window.webpackJsonpmonsters_rolodex||[]).push([[0],[,,,,,,,,,function(e,n,t){e.exports=t(20)},,,,,function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){},function(e,n,t){"use strict";t.r(n);var a=t(0),r=t.n(a),o=t(3),c=t.n(o),s=(t(14),t(4)),l=t(5),i=t(8),u=t(6),h=t(1),m=t(7);t(15),t(16);var d=function(e){return r.a.createElement("div",{className:"card-container"},r.a.createElement("img",{alt:"monsters",src:"https://robohash.org/".concat(e.monster.id,"?set=set2&180x180")}),r.a.createElement("h1",null,e.monster.name),r.a.createElement("p",null,e.monster.email))};t(17);var f=function(e){return r.a.createElement("div",{className:"card_list"},e.monsters.map((function(e){return r.a.createElement(d,{key:e.id,monster:e})})))};t(18);var p=function(e){var n=e.placeholder,t=e.handleChange;return r.a.createElement("input",{className:"search",type:"search",placeholder:n,onChange:t})};t(19);var v=function(e){return r.a.createElement("div",{className:"scrollbox"},e.children)},E=function(e){function n(){var e;return Object(s.a)(this,n),(e=Object(i.a)(this,Object(u.a)(n).call(this))).state={monsters:[],searchField:""},e.handleChange=e.handleChange.bind(Object(h.a)(e)),e}return Object(m.a)(n,e),Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(n){return e.setState({monsters:n})}))}},{key:"handleChange",value:function(e){this.setState({searchField:e.target.value})}},{key:"render",value:function(){var e=this.state,n=e.monsters,t=e.searchField,a=n.filter((function(e){return e.name.toLowerCase().includes(t.toLowerCase())}));return r.a.createElement("div",{className:"App"},r.a.createElement("h1",{className:"title"},"Monsters"),r.a.createElement(p,{placeholder:"search monsters",handleChange:this.handleChange}),r.a.createElement(v,null,r.a.createElement(f,{monsters:a})))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(E,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}],[[9,1,2]]]);
//# sourceMappingURL=main.3cacdb2c.chunk.js.map