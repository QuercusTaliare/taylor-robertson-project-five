(this["webpackJsonptaylor-robertson-project-five"]=this["webpackJsonptaylor-robertson-project-five"]||[]).push([[0],{21:function(e,t,a){e.exports=a(33)},26:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),l=a(19),r=a.n(l),i=(a(26),a(8)),c=a(2),m=a(3),s=a(5),p=a(4),u=a(10),h=a.n(u);a(27);h.a.initializeApp({apiKey:"AIzaSyDCj77jNWipR41x8aYP-8W5WF1jjd4ZtxI",authDomain:"taylor-robertson-project-five.firebaseapp.com",databaseURL:"https://taylor-robertson-project-five.firebaseio.com",projectId:"taylor-robertson-project-five",storageBucket:"taylor-robertson-project-five.appspot.com",messagingSenderId:"611253490267",appId:"1:611253490267:web:04bb0ea0eb49e69396a57e"});var d=h.a,E=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.addChartData=function(t){t.preventDefault(),d.database().ref().push({emotionA:{percentage:e.state.emotionApercentage,type:e.state.emotionAtype},emotionB:{percentage:e.state.emotionBpercentage,type:e.state.emotionBtype},emotionC:{percentage:e.state.emotionCpercentage,type:e.state.emotionCtype}}),e.setState({emotionApercentage:33,emotionAtype:"",emotionBpercentage:33,emotionBtype:"",emotionCpercentage:34,emotionCtype:""})},e.state={emotionAtype:"",emotionBtype:"",emotionCtype:"",emotionApercentage:33,emotionBpercentage:33,emotionCpercentage:34},e}return Object(m.a)(a,[{key:"render",value:function(){var e=this,t=parseInt(this.state.emotionApercentage)+parseInt(this.state.emotionBpercentage)+parseInt(this.state.emotionCpercentage)||"Please only use numbers, my friend!";return o.a.createElement("div",{className:"form",id:"form"},o.a.createElement("header",null,o.a.createElement("h1",null,"feels"),o.a.createElement("ol",null,o.a.createElement("li",null,"Choose 3 emotions that you're feeling the most right now.   ",o.a.createElement("em",null,"Note: You have to choose all 3!")),o.a.createElement("li",null,"Decide how much of each emotion you're feeling.  ",o.a.createElement("em",null,"Note: These have to add up to 100%!")),o.a.createElement("li",null,"Press Submit and see your pie-chart come to life!"))),o.a.createElement("div",{className:"wrapper"},o.a.createElement("main",null,o.a.createElement("form",null,o.a.createElement("h2",null,"How are you feeling?"),o.a.createElement("div",{className:"emotion-entry-container"},o.a.createElement("fieldset",null,o.a.createElement("legend",{className:"sr-only"},"Emotion 1"),o.a.createElement("select",{name:"emotionAtype",className:"user-entry",onChange:this.handleChange,value:this.state.emotionAtype},o.a.createElement("option",{value:"",disabled:!0},"Select First Emotion"),o.a.createElement("option",{value:"happy"},"Happy"),o.a.createElement("option",{value:"elated"},"Elated"),o.a.createElement("option",{value:"proud"},"Proud"),o.a.createElement("option",{value:"amazed"},"Amazed"),o.a.createElement("option",{value:"excited"},"Excited"),o.a.createElement("option",{value:"determined"},"Determined"),o.a.createElement("option",{value:"content"},"Content"),o.a.createElement("option",{value:"hopeful"},"Hopeful"),o.a.createElement("option",{value:"relieved"},"Relieved"),o.a.createElement("option",{value:"joy"},"Joy")),o.a.createElement("div",null,o.a.createElement("input",{type:"number",name:"emotionApercentage",className:"user-entry",onChange:this.handleChange,value:this.state.emotionApercentage,min:"1",max:"98"}),o.a.createElement("span",null,"%"))),o.a.createElement("fieldset",null,o.a.createElement("legend",{className:"sr-only"},"Emotion 2"),o.a.createElement("select",{name:"emotionBtype",className:"user-entry",onChange:this.handleChange,value:this.state.emotionBtype},o.a.createElement("option",{value:"",disabled:!0},"Select Second Emotion"),o.a.createElement("option",{value:"insecure"},"Insecure"),o.a.createElement("option",{value:"annoyed"},"Annoyed"),o.a.createElement("option",{value:"anxious"},"Anxious"),o.a.createElement("option",{value:"bored"},"Bored"),o.a.createElement("option",{value:"frustrated"},"Frustrated"),o.a.createElement("option",{value:"sad"},"Sad"),o.a.createElement("option",{value:"jealous"},"Jealous"),o.a.createElement("option",{value:"hurt"},"Hurt"),o.a.createElement("option",{value:"disgusted"},"Disgusted"),o.a.createElement("option",{value:"angry"},"Angry")),o.a.createElement("div",null,o.a.createElement("input",{type:"number",name:"emotionBpercentage",className:"user-entry",onChange:this.handleChange,value:this.state.emotionBpercentage,min:"1",max:"98"}),o.a.createElement("span",null,"%"))),o.a.createElement("fieldset",null,o.a.createElement("legend",{className:"sr-only"},"Emotion 3"),o.a.createElement("select",{name:"emotionCtype",className:"user-entry",onChange:this.handleChange,value:this.state.emotionCtype},o.a.createElement("option",{value:"",disabled:!0},"Select Third Emotion"),o.a.createElement("option",{value:"confused"},"Confused"),o.a.createElement("option",{value:"hungry"},"Hungry"),o.a.createElement("option",{value:"silly"},"Silly"),o.a.createElement("option",{value:"peaceful"},"Peaceful"),o.a.createElement("option",{value:"awed"},"Awed"),o.a.createElement("option",{value:"awkward"},"Awkward"),o.a.createElement("option",{value:"nostalgic"},"Nostalgic"),o.a.createElement("option",{value:"triumphant"},"Triumphant"),o.a.createElement("option",{value:"curious"},"Curious"),o.a.createElement("option",{value:"entranced"},"Entranced")),o.a.createElement("div",null,o.a.createElement("input",{type:"number",name:"emotionCpercentage",className:"user-entry",onChange:this.handleChange,value:this.state.emotionCpercentage,min:"1",max:"98"}),o.a.createElement("span",null,"%")))),o.a.createElement("p",{className:"percentage-fraction"},"=",100===t?o.a.createElement("span",{className:"form-complete"},t,"%"):o.a.createElement("span",{className:"form-incomplete"},t,"%")),100===t&&""!==this.state.emotionAtype&&""!==this.state.emotionBtype&&""!==this.state.emotionCtype?o.a.createElement("button",{type:"submit",className:"button",onClick:function(t){e.addChartData(t),e.props.scrollPage()},title:"Submit form to create pie chart"},"Submit"):o.a.createElement("button",{type:"submit",className:"button disabled",tabIndex:"-1"},"Submit"))))," ")}}]),a}(n.Component),y=a(20),g=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this.props.emotionEntry.threeEmotions,t=e.emotionA,a=e.emotionB,n=e.emotionC;return o.a.createElement("ul",{className:"legend-list"},o.a.createElement("li",{className:"legend-item"},o.a.createElement("p",{className:"emotion emotion-one"},t.type),o.a.createElement("p",{className:"percentage"},t.percentage,"%")),o.a.createElement("li",{className:"legend-item"},o.a.createElement("p",{className:"emotion emotion-two"},a.type),o.a.createElement("p",{className:"percentage"},a.percentage,"%")),o.a.createElement("li",{className:"legend-item"},o.a.createElement("p",{className:"emotion emotion-three"},n.type),o.a.createElement("p",{className:"percentage"},n.percentage,"%")))}}]),a}(n.Component),v=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){var e=this;return o.a.createElement("div",{className:"wrapper"},o.a.createElement("section",{className:"display",ref:this.props.scrollDisplay},o.a.createElement("h2",null,"\xe0 la Mood"),o.a.createElement("ul",{className:"pie-display-list"},this.props.chartData.map((function(t,a){var n=t.threeEmotions,l=n.emotionA,r=n.emotionB,i=n.emotionC;return o.a.createElement("li",{className:"pie-display-item",key:t.id},o.a.createElement("div",{className:"chart-wrapper","aria-label":"An emotional pie-chart comprised of ".concat(l.type," (").concat(l.percentage,"%), ").concat(r.type," (").concat(r.percentage,"%), and ").concat(i.type," (").concat(i.percentage,"%)")},o.a.createElement(y.PieChart,{data:[{color:"#3F84E5",title:l.type,value:parseInt(l.percentage)},{color:"#960200",title:r.type,value:parseInt(r.percentage)},{color:"#3F784C",title:i.type,value:parseInt(i.percentage)}]})),o.a.createElement(g,{emotionEntry:t}),o.a.createElement("button",{className:"button pie-display-button",onClick:function(){return e.props.deleteChart(t.id)}},"X"))}))),o.a.createElement("a",{href:"#form",className:"button add-another-button",title:"Click to be brought to the top of the page, where you can create a pie chart"},"Add Another")))}}]),a}(n.Component),f=a(11),b=a(13),C=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){return Object(c.a)(this,a),t.apply(this,arguments)}return Object(m.a)(a,[{key:"render",value:function(){return o.a.createElement("footer",null,o.a.createElement("section",{className:"attributions"},o.a.createElement("h3",null,"Thanks"),o.a.createElement("p",null,"Towards the following, I am feeling 70% grateful, 20% impressed, and 10% inspired"),o.a.createElement("ul",null,o.a.createElement("li",null,"Pie Charts rendered by the wonderful ",o.a.createElement("a",{href:"https://github.com/toomuchdesign/react-minimal-pie-chart",title:"Visit the react-minimal-pie-chart GitHub repo",target:"_blank"},"React Minimal Pie Chart")," library. "),o.a.createElement("li",null,"Icons created by the awesome ",o.a.createElement("a",{href:"https://fontawesome.com/license",title:"Visit FontAwesome's licence agreement",target:"_blank"},"Font Awesome")),o.a.createElement("li",null,"Partially inspired by Julia Dufresne's fantastic project ",o.a.createElement("a",{href:"https://github.com/juliadufresne/julia-dufresne-deeper",title:"Visit Julia Defresne's GitHub page for the project, Deeper",target:"_blank"},"Deeper"),"."))),o.a.createElement("section",{className:"me"},o.a.createElement("h3",null,"Me"),o.a.createElement("nav",null,o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement("a",{href:"https://twitter.com/taylorRdev",title:"Click to access Taylor's Twitter page",target:"_blank"},o.a.createElement(f.a,{icon:b.b,size:"2x",className:"social-icon"}))),o.a.createElement("li",null,o.a.createElement("a",{href:"https://github.com/QuercusTaliare",title:"Click to access the website's Github repo",target:"_blank"},o.a.createElement(f.a,{icon:b.a,size:"1x",className:"social-icon"}))))),o.a.createElement("p",null,"Made with ",o.a.createElement("span",{"aria-label":"love"},"\u2665")," during emotionally turbulent times in Burlington, ON")))}}]),a}(n.Component),N=function(e){Object(s.a)(a,e);var t=Object(p.a)(a);function a(){var e;return Object(c.a)(this,a),(e=t.call(this)).deleteChart=function(e){d.database().ref().child(e).remove()},e.scrollPage=function(){window.scrollTo(0,e.scrollDisplay.current.offsetTop)},e.handleChange=function(t){e.setState(Object(i.a)({},t.target.name,t.target.value))},e.addChartData=function(t){t.preventDefault(),d.database().ref().push({emotionA:{percentage:e.state.emotionApercentage,type:e.state.emotionAtype},emotionB:{percentage:e.state.emotionBpercentage,type:e.state.emotionBtype},emotionC:{percentage:e.state.emotionCpercentage,type:e.state.emotionCtype}}),e.setState({emotionApercentage:33,emotionAtype:"",emotionBpercentage:33,emotionBtype:"",emotionCpercentage:34,emotionCtype:""}),window.scrollTo(0,e.scrollDisplay.current.offsetTop)},e.state={emotions:[],emotionAtype:"",emotionBtype:"",emotionCtype:"",emotionApercentage:33,emotionBpercentage:33,emotionCpercentage:34},e.scrollDisplay=o.a.createRef(),e}return Object(m.a)(a,[{key:"componentDidMount",value:function(){var e=this;d.database().ref().on("value",(function(t){var a=[],n=t.val();for(var o in n)a.push({threeEmotions:n[o],id:o});var l=a.reverse();e.setState({emotions:l})}))}},{key:"render",value:function(){return o.a.createElement(n.Fragment,null,o.a.createElement(E,{scrollPage:this.scrollPage}),o.a.createElement(v,{chartData:this.state.emotions,scrollDisplay:this.scrollDisplay,deleteChart:this.deleteChart}),o.a.createElement(C,null))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(o.a.createElement(N,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[21,1,2]]]);
//# sourceMappingURL=main.0fb10cbf.chunk.js.map