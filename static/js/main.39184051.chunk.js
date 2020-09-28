(this.webpackJsonpstopwatch=this.webpackJsonpstopwatch||[]).push([[0],{100:function(e,t,a){},124:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(18),l=a.n(i),o=a(56),c=a(152),s=a(7),u=a(151),m=a(147),p=a(154),d=a(145),h=a(144),g=a(143),f=a(48),v=a(146),E=a(155),b=function(){return r.a.createElement(p.a,null,r.a.createElement(g.a,{title:"React Stopwatch",subheader:"by Alex McGovern Smith"}),r.a.createElement(h.a,null,r.a.createElement(f.a,{variant:"body1",gutterBottom:!0},"A simple stopwatch built with React & Material UI."),r.a.createElement(f.a,{variant:"body2",gutterBottom:!0},"You can't lap unless the timer is greater than 0, and you can only reset when the timer is not running.")),r.a.createElement(d.a,null,r.a.createElement(v.a,{fullWidth:"true",endIcon:r.a.createElement(E.a,null),href:"https://github.com/lxdesign-ie/react-stopwatch/"},"Source Code")))},y=a(81),k=a(73),w=a(74),S=a(83),C=a(82),I=a(150),M=a(78),_=a.n(M),x=a(79),T=a.n(x),j=a(76),O=a.n(j),W=a(77),D=a.n(W),N=(a(100),function(e){var t={transform:"rotate(".concat(.006*e.time,"deg)")},a={transform:"rotate(".concat(1e-4*e.time,"deg)")};return r.a.createElement("div",{className:"clock"},r.a.createElement("div",{className:"analog-clock"},r.a.createElement("div",{className:"dial minutes",style:a}),r.a.createElement("div",{className:"dial seconds",style:t})))}),B=a(75),U=a.n(B),G=function(e){var t=function(e){var t={},a=new Date(e);return t.hours=String(a.getUTCHours()).padStart(2,"0"),t.minutes=String(a.getUTCMinutes()).padStart(2,"0"),t.seconds=String(a.getUTCSeconds()).padStart(2,"0"),t.milliseconds=String(a.getUTCMilliseconds()).padStart(3,"0"),t}(e.time);return String(t.hours+":"+t.minutes+":"+t.seconds+"."+t.milliseconds)},L=function(e){var t=U()((function(e){return{root:{backgroundColor:e.palette.background.lightGrey},list:{},header:{backgroundColor:e.palette.background.Grey}}}))();return r.a.createElement(p.a,{className:t.root},r.a.createElement(f.a,{align:"center",variant:"h3"},r.a.createElement(G,{time:e.time})))},R=a(149),z=a(156),A=a(148),H=r.a.memo((function(e){var t=Object(A.a)((function(e){return{root:{},list:{width:"100%",overflow:"auto",maxHeight:"280px",padding:0,backgroundColor:e.palette.background.lightGrey}}}))(),a=function(){return e.lap_times.length?r.a.createElement(l,null):r.a.createElement(i,null)},i=function(){return r.a.createElement(z.a,null,r.a.createElement(f.a,{variant:"overline"},"No laps yet"))},l=function(){var t=Object(n.useRef)();return Object(n.useEffect)((function(){return t.current.scrollIntoView({behavior:"smooth"})})),e.lap_times.map((function(e,a){return r.a.createElement(z.a,null,r.a.createElement(f.a,{variant:"overline",ref:t},"Lap ",a+1,": ",r.a.createElement(G,{time:e})))}))};return r.a.createElement(p.a,{className:t.root},r.a.createElement(g.a,{title:"Laps"}),r.a.createElement(R.a,{className:t.list},r.a.createElement(a,null)))})),J=function(e){Object(S.a)(a,e);var t=Object(C.a)(a);function a(){var e;Object(k.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={time:0,init:0,timer:0,running:0,lap_times:[]},e}return Object(w.a)(a,[{key:"render",value:function(){return r.a.createElement(I.a,{container:!0},r.a.createElement(I.a,{item:!0,sm:12,md:2},r.a.createElement(b,null)),r.a.createElement(I.a,{item:!0,sm:12,md:8},r.a.createElement(p.a,null,r.a.createElement(N,{time:this.state.timer}),r.a.createElement(L,{time:this.state.timer}),r.a.createElement(d.a,null,this.start_pause_button(),this.lap_button(),this.reset_button()))),r.a.createElement(I.a,{item:!0,sm:12,md:2},r.a.createElement(H,{lap_times:this.state.lap_times})))}},{key:"componentWillUnmount",value:function(){clearInterval(this.intervalID)}},{key:"timer",value:function(){var e=this.state.init,t=(new Date).getTime();this.setState({timer:Math.abs(e-t)})}},{key:"start",value:function(){var e=this;this.setState({running:1,init:Math.abs((new Date).getTime()-this.state.timer)}),this.intervalID=setInterval((function(){return e.timer()}),10)}},{key:"pause",value:function(){this.setState({init:(new Date).getTime(),running:0}),clearInterval(this.intervalID)}},{key:"reset",value:function(){this.setState({timer:0,lap_times:[]})}},{key:"lap",value:function(){this.state.timer>0&&this.setState({lap_times:[].concat(Object(y.a)(this.state.lap_times),[this.state.timer]),init:(new Date).getTime(),timer:0})}},{key:"start_pause_button",value:function(){var e=this;return r.a.createElement(v.a,{fullWidth:"true",size:"large",onClick:function(){e.state.running>0?e.pause():e.start()},endIcon:this.state.running>0?r.a.createElement(O.a,null):r.a.createElement(D.a,null)},this.state.running>0?"Pause":"Start")}},{key:"lap_button",value:function(){var e=this;return r.a.createElement(v.a,{size:"large",fullWidth:"true",variant:"outlined",disabled:!(this.state.timer>0),endIcon:r.a.createElement(_.a,null),onClick:function(){e.lap()}},"Lap")}},{key:"reset_button",value:function(){var e=this;return r.a.createElement(v.a,{size:"large",fullWidth:"true",variant:"outlined",disabled:1===this.state.running||0===this.state.timer,endIcon:r.a.createElement(T.a,null),onClick:function(){e.reset()}},"Reset")}}]),a}(n.Component),P=a(47),$=a(46),F=a(45),V=a(80),Y=a(153),q=Object(V.a)({palette:{primary:{main:P.a[500],hover:P.a[300]},secondary:{main:$.a[500]},background:{grey:"#f4f7f9",lightGrey:"#f9fbfc"}}});(q=Object(Y.a)(q)).props={MuiButton:{disableElevation:!1,variant:"contained",color:"primary",disableRipple:"true"},MuiInputLabel:{shrink:!0},MuiInput:{disableUnderline:!0},MuiTooltip:{arrow:!0}},q.overrides={MuiCssBaseline:{root:{body:{backgroundColor:q.palette.background.Grey,height:"100%"}}},MuiContainer:{root:{margin:"60px 0"}},MuiButton:{root:{color:"white"},containedPrimary:{"&:hover":{backgroundColor:q.palette.primary.hover}},containedSecondary:{fontWeight:700}},MuiInputLabel:{root:{textTransform:"uppercase",fontSize:"1.5rem"}},MuiInput:{root:{top:q.spacing(2),border:"1px solid ".concat(F.a[500]),outline:"1px solid transparent",padding:q.spacing(1),"&$focused":{border:"1px solid ".concat(q.palette.primary.main),outline:"1px solid ".concat(q.palette.primary.main)}}},MuiTooltip:{tooltip:{backgroundColor:"#fff",border:"2px solid ".concat(q.palette.primary.main),color:q.palette.primary.main},arrow:{color:q.palette.primary.main}},MuiCard:{root:{margin:"15px"}}};var K=q,Q=function(){return r.a.createElement(m.a,{theme:K},r.a.createElement(u.a,{maxWidth:"lg"},r.a.createElement(J,null)))};var X=function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement(c.a,null),r.a.createElement(s.c,null,r.a.createElement(s.a,{exact:!0,path:"/",component:Q})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(o.a,{basename:"/react-stopwatch"},r.a.createElement(X,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},92:function(e,t,a){e.exports=a(124)}},[[92,1,2]]]);
//# sourceMappingURL=main.39184051.chunk.js.map