(this["webpackJsonpgoit-react-hw-02-feedback"]=this["webpackJsonpgoit-react-hw-02-feedback"]||[]).push([[0],{17:function(e,t,n){"use strict";n.r(t);var a=n(1),c=n.n(a),s=n(4),r=n.n(s),o=n(5),i=n(6),b=n(7),d=n(11),l=n(10),u=n(2),j=n.n(u),h=n(0),O=function(e){var t=e.good,n=e.neutral,a=e.bad,c=e.total,s=e.percentage;return Object(h.jsxs)("div",{children:[Object(h.jsxs)("p",{className:j.a.good,children:["Good: ",Object(h.jsx)("span",{children:t})]}),Object(h.jsxs)("p",{className:j.a.neutral,children:["Neutral: ",Object(h.jsx)("span",{children:n})]}),Object(h.jsxs)("p",{className:j.a.bad,children:["Bad: ",Object(h.jsx)("span",{children:a})]}),Object(h.jsxs)("p",{children:["Total:",Object(h.jsx)("span",{children:c})]}),Object(h.jsxs)("p",{className:j.a.total,children:["Positive feedback:",Object(h.jsxs)("span",{children:[" ",s," %"]})]})]})},p=n(8),x=n.n(p),k=function(e){var t=e.options,n=e.onLeavelFeedback;return Object(h.jsx)(h.Fragment,{children:t.map((function(e){return Object(h.jsx)("button",{className:x.a[e],onClick:n,type:"button",name:e,children:e},e)}))})},_=function(e){var t=e.title,n=e.children;return Object(h.jsxs)("section",{children:[Object(h.jsx)("h1",{children:t}),n]})},f=function(e){var t=e.message;return Object(h.jsxs)(h.Fragment,{children:[Object(h.jsx)("h2",{children:"Statistic"}),Object(h.jsx)("h3",{children:t})]})},v=n(9),g=n.n(v),F=function(e){var t=e.children;return Object(h.jsx)("div",{className:g.a.container,children:t})},m=function(e){Object(d.a)(n,e);var t=Object(l.a)(n);function n(){var e;Object(i.a)(this,n);for(var a=arguments.length,c=new Array(a),s=0;s<a;s++)c[s]=arguments[s];return(e=t.call.apply(t,[this].concat(c))).state={good:0,neutral:0,bad:0},e.onLeavelFeedback=function(t){var n=t.target.name;e.setState((function(e){return Object(o.a)({},n,e[n]+1)}))},e.countTotalFeedback=function(){var t=e.state;return t.good+t.neutral+t.bad},e.keysState=function(){return Object.keys(e.state)},e.countPositiveFeedbackPercentage=function(){var t=e.state,n=t.good,a=t.neutral,c=t.bad;return 0===n?0:Number.parseInt(100*n/(n+a+c))},e}return Object(b.a)(n,[{key:"render",value:function(){var e=this.state,t=e.good,n=e.neutral,a=e.bad,c=this.countTotalFeedback();return Object(h.jsxs)(F,{children:[Object(h.jsx)(_,{title:"Please leave feedback",children:Object(h.jsx)(k,{options:this.keysState(),onLeavelFeedback:this.onLeavelFeedback})}),0===c?Object(h.jsx)(f,{message:"No feedback given"}):Object(h.jsx)(_,{title:"Statistic",children:Object(h.jsx)(O,{good:t,neutral:n,bad:a,total:this.countTotalFeedback(),percentage:this.countPositiveFeedbackPercentage()})})]})}}]),n}(c.a.Component);r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(m,{})}),document.getElementById("root"))},2:function(e,t,n){e.exports={total:"Statistics_total__2FQL3"}},8:function(e,t,n){e.exports={button:"FeedbackOptions_button__2qMxu",good:"FeedbackOptions_good__3KfHt FeedbackOptions_button__2qMxu",neutral:"FeedbackOptions_neutral__3OQ0a FeedbackOptions_button__2qMxu",bad:"FeedbackOptions_bad__1utkw FeedbackOptions_button__2qMxu"}},9:function(e,t,n){e.exports={container:"Container_container__1Ik-z"}}},[[17,1,2]]]);
//# sourceMappingURL=main.c55b89f0.chunk.js.map