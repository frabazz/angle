(this.webpackJsonpangle=this.webpackJsonpangle||[]).push([[0],{16:function(t,e,n){},17:function(t,e,n){},18:function(t,e,n){},19:function(t,e,n){},23:function(t,e,n){"use strict";n.r(e);var i=n(0),r=n(3),a=n.n(r),s=n(10),o=n.n(s),c=(n(16),n(1)),l=n(2),g=n(6),u=n(5),h=n(4),p=(n(17),function(){function t(){Object(c.a)(this,t);var e=Math.PI;this.Angles=[0,e/12,e/10,e/8,e/6,e/5,e/4,.3*e,e/3,3/8*e,.4*e,5/12*e,e/2,7/12*e,.6*e,5/8*e,2/3*e,.7*e,3/4*e,.8*e,5/6*e,7/8*e,.9*e,11/12*e,e,13/12*e,1.1*e,9/8*e,7/6*e,1.2*e,5/4*e,1.3*e,4/3*e,11/8*e,1.4*e,17/12*e,1.5*e,19/12*e,1.6*e,13/8*e,5/3*e,1.7*e,7/4*e,1.8*e,11/6*e,15/8*e,1.9*e,23/12*e,2*e],this.StringAngles=["0","pi/12","pi/10","pi/8","pi/6","pi/5","pi/4","3pi/10","pi/3","3pi/8","2pi/5","5pi/12","pi/2","7pi/12","3pi/5","5pi/8","2pi/3","7pi/10","3pi/4","4pi/5","5pi/6","7pi/8","9pi/10","11pi/12","pi","13pi/12","11pi/10","9pi/8","7pi/6","6pi/5","5pi/4","13pi/10","4pi/3","11pi/8","7pi/5","17/12","3pi/2","19pi/12","8pi/5","13pi/8","5pi/3","17pi/10","7pi/4","9pi/5","11pi/6","15pi/8","19pi/10","23pi/12","2pi"],this.StringDict={};for(var n=0;n<this.StringAngles.length;n++)this.StringDict[this.StringAngles[n]]=this.Angles[n];this.AnglesDict={};for(n=0;n<this.Angles.length;n++)this.AnglesDict[this.Angles[n]]=!1}return Object(l.a)(t,[{key:"getList",value:function(){return this.Angles}},{key:"getDict",value:function(){return this.AnglesDict}},{key:"getAngleFromString",value:function(t){return this.StringDict[t]}},{key:"getStringFromAngle",value:function(t){for(var e=0;e<this.StringAngles.length;e++)if(this.StringDict[this.StringAngles[e]]==t)return this.StringDict[this.StringAngles[e]]}},{key:"setDict",value:function(t){this.AnglesDict=t}},{key:"setTrueFor",value:function(t,e){if(this.Angles.includes(t)&&this.Angles.includes(e))if(t>e)console.log("errore, gli angoli devono essere in ordine crescente!");else for(var n=this.Angles.indexOf(t);n<this.Angles.indexOf(e);n++)this.AnglesDict[this.Angles[n]]=!0;else console.log("errore, gli angoli non fanno parte del dataset, e il mio dataset \xe8 perfetto")}}],[{key:"multiplyLayers",value:function(e){for(var n={},i={},r=0;r<e[0].getList().length;r++)i[e[0].getList()[r]]=new Array;for(r=0;r<e.length;r++)for(var a=0;a<e[r].getList().length;a++){var s=e[r].getList()[a],o=e[r].getDict()[s];o=o?1:-1,i[s].push(o)}for(r=0;r<e[0].getList().length;r++){var c=i[s=e[0].getList()[r]],l=1;for(a=0;a<c.length;a++)l*=c[a];l=1==l,n[s]=l}var g=new t;return g.setDict(n),g}},{key:"getLayerResult",value:function(t){var e=[],n=t.getList(),i=t.getDict();console.log(i);for(var r=0;r<n.length;r++)if(i[n[r]]){var a=0;console.log("index: ",r);var s=n[r];for(s=t.getLatexAngle(s),r++;i[n[r]]&&r<n.length;){if(r==n.length-1&&i[n[r]])for(a=0;a<n.length&&i[n[a]];a++);r++}var o=0;o=0==a?n[r]:n[a],console.log(o),o=t.getLatexAngle(o),e.push(s+" < x < "+o),a=0}return e}}]),t}()),d=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,null,[{key:"drawText",value:function(t,e,n,i,r){var a=document.getElementById("myCanvas"),s=0,o=0;Math.cos(i)*n>0?s+=15:s=-20,-Math.sin(i)*n>0?o+=10:o=-10,"pi"==r&&console.log(s);var c=a.getContext("2d");c.font="15px Arial",console.log("raggio2: ",n),c.fillText(r.replace("pi","\u03c0"),t+Math.cos(i)*n+s,e-Math.sin(i)*n+o)}},{key:"drawArc",value:function(t,e,n,i,r){var a=document.getElementById("myCanvas").getContext("2d");a.beginPath(),a.arc(t,e,n,i,r,!0),a.stroke()}},{key:"drawColoredArc",value:function(t,e,n,i,r,a){var s=document.getElementById("myCanvas").getContext("2d");s.beginPath(),s.arc(t,e,n,i,r,!0),s.lineWidth=6,s.strokeStyle=a,s.stroke()}},{key:"drawLayer",value:function(t,e,n,i){console.log("raggio1: ",n);for(var r=i.getList(),a=i.getDict(),s=0;s<r.length-1;s++)!0===a[r[s]]?this.drawColoredArc(t,e,n,-r[s],-r[s+1],"#FF0000"):this.drawColoredArc(t,e,n,-r[s],-r[s+1],"#0000FF")}},{key:"drawResultLayer",value:function(t,e,n,i,r){this.drawLayer(t,e,n,i);for(var a=0;a<r.length;a++)console.log("sto disegnando: ",i.getAngleFromString(r[a]),r[a]),this.drawText(t,e,n,r[a],i.getAngleFromString(r[a]))}}]),t}(),f=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var i;Object(c.a)(this,n);var r=(i=e.call(this,t)).props.percent/100;return i.state={width:window.innerWidth*r,height:window.innerHeight*r},i}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{children:Object(i.jsx)("canvas",{id:"myCanvas",width:this.state.width,height:this.state.height})})}},{key:"multiplyLayers",value:function(t){for(var e={},n={},i=0;i<t[0].getList().length;i++)n[t[0].getList()[i]]=new Array;for(i=0;i<t.length;i++)for(var r=0;r<t[i].getList().length;r++){var a=t[i].getList()[r],s=t[i].getDict()[a];s=s?1:-1,n[a].push(s)}for(i=0;i<t[0].getList().length;i++){var o=n[a=t[0].getList()[i]],c=1;for(r=0;r<o.length;r++)c*=o[r];c=1==c,e[a]=c}var l=new p;return l.setDict(e),l}},{key:"getLayerResult",value:function(t){for(var e=[],n=t.getList(),i=t.getDict(),r=0;r<n.length;r++)if(i[n[r]]){var a=n[r];for(a=t.getLatex(a),r++;i[n[r]]&&r<n.length;)r++;var s=n[r];s=t.getLatex(s),e.push(a+" < x < "+s)}return e}},{key:"componentDidMount",value:function(){}}]),n}(r.Component),v=(n(18),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return this.props.isFraction?Object(i.jsxs)("div",{className:"fraction",children:[Object(i.jsx)("span",{className:"top",children:this.props.top}),Object(i.jsx)("span",{className:"bottom",children:this.props.bottom})]}):Object(i.jsx)("p",{children:this.props.noF})}}]),n}(r.Component)),b=(n(19),function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,null,[{key:"getType",value:function(t){for(var e=0,n=0;n<t.length;n++)"<"==t[n]&&e++;return 2==e?this.isFirstType:1==e?this.isSecondType:void 0}},{key:"getLeft",value:function(t){return this.getType(t)==this.is&&(t=t.replaceAll(" ","")),(t=(t=t.replaceAll("<","")).replace("x"," ")).substr(0,t.indexOf(" "))}},{key:"getRight",value:function(t){return(t=(t=(t=t.replaceAll(" ","")).replaceAll("<","")).replace("x"," ")).substr(t.indexOf(" ")+1,t.length-1)}}]),t}());b.isFirstType=!0,b.isSecondType=!1;var m=b,j=function(){function t(){Object(c.a)(this,t)}return Object(l.a)(t,null,[{key:"isFraction",value:function(t){return-1!=t.indexOf("/")}},{key:"getTop",value:function(t){var e=t.indexOf("/");return t.substring(0,e).replace("pi","\u03c0")}},{key:"getBottom",value:function(t){var e=t.indexOf("/")+1,n=t.length;return t.substring(e,n).replace("pi","\u03c0")}}]),t}(),y=(n(20),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var i;return Object(c.a)(this,n),(i=e.call(this,t)).state={leftTop:"",leftBottom:"",rightTop:"",rightBottom:"",active:!1},i.handlePress=i.handlePress.bind(Object(g.a)(i)),i}return Object(l.a)(n,[{key:"submitExp",value:function(t,e){var n=new p,i=n.getAngleFromString(t.replace(" ","")),r=n.getAngleFromString(e.replace(" ",""));console.log("exp: ",t,"value: ",i),console.log("exp: ",e,"value: ",r),n.setTrueFor(i,r);var a=document.getElementById("myCanvas"),s=a.width,o=a.height;d.drawLayer(s/2,o/2,this.props.range,n),this.props.updateHandler(n,t,e)}},{key:"handlePress",value:function(t){if(console.log(typeof this.render()),"Enter"==t.key){console.log("hai cliccato enter!");var e=document.getElementById("inputFormula").value,n=m.getLeft(e),i=m.getRight(e);this.submitExp(n,i),this.setState({noFright:i.replace("pi","\u03c0"),noFleft:n.replace("pi","\u03c0"),isFractionLeft:j.isFraction(n),isFractionRight:j.isFraction(i),leftTop:j.getTop(n),rightTop:j.getTop(i),leftBottom:j.getBottom(n),rightBottom:j.getBottom(i),active:!0})}}},{key:"render",value:function(){return this.state.active?Object(i.jsxs)("div",{className:"box_wrapper",children:[Object(i.jsx)(v,{top:this.state.leftTop,bottom:this.state.leftBottom,isFraction:this.state.isFractionLeft,noF:this.state.noFleft}),"< x <",Object(i.jsx)(v,{top:this.state.rightTop,bottom:this.state.rightBottom,isFraction:this.state.isFractionRight,noF:this.state.noFright})]}):Object(i.jsx)("div",{className:"box_wrapper",children:Object(i.jsx)("input",{type:"text",className:"input_box",id:"inputFormula",onKeyDown:this.handlePress})})}}]),n}(r.Component)),O=(n(8),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(){return Object(c.a)(this,n),e.apply(this,arguments)}return Object(l.a)(n,[{key:"render",value:function(){return Object(i.jsx)("div",{className:"left__container",children:this.props.children})}}]),n}(r.Component)),x=n(9),A=(n(21),function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).layers=[],r.state={range:75,componentList:[Object(i.jsx)(y,{range:75,updateHandler:r.updateHandler.bind(Object(g.a)(r))})],importantAngles:[]},r.updateHandler=r.updateHandler.bind(Object(g.a)(r)),r}return Object(l.a)(n,[{key:"updateHandler",value:function(t,e,n){this.setState({range:this.state.range+25,componentList:[].concat(Object(x.a)(this.state.componentList),[Object(i.jsx)(y,{range:this.state.range+50,updateHandler:this.updateHandler.bind(this)})]),importantAngles:[].concat(Object(x.a)(this.state.importantAngles),[e,n])}),this.layers.push(t)}},{key:"render",value:function(){var t=this;return Object(i.jsxs)("div",{className:"right__container",children:[this.state.componentList,Object(i.jsx)("button",{className:"confirm__button",onClick:function(){var e=p.multiplyLayers(t.layers);console.log("important angles: ",t.state.importantAngles);var n=document.getElementById("myCanvas"),i=n.width,r=n.height;d.drawLayer(i/2,r/2,t.state.range+100,e);for(var a=0;a<t.state.importantAngles.length;a++)d.drawText(i/2,r/2,t.state.range+100,e.getAngleFromString(t.state.importantAngles[a]),t.state.importantAngles[a])},children:"Calcola"}),Object(i.jsx)("button",{className:"confirm__button2",onClick:function(){window.location.reload()},children:"SESSO"}),Object(i.jsx)("button",{className:"confirm__button2",onClick:function(){var t=document.getElementById("myCanvas").toDataURL("image/png");window.open("about:blank","image from canvas").document.write("<img src='"+t+"' alt='from canvas'/>")},children:"Salva"})]})}}]),n}(r.Component)),k=function(t){Object(u.a)(n,t);var e=Object(h.a)(n);function n(t){var r;return Object(c.a)(this,n),(r=e.call(this,t)).state={components:Object(i.jsx)("div",{id:"textResult",children:"TEST"})},r.writeResult=r.writeResult.bind(Object(g.a)(r)),r}return Object(l.a)(n,[{key:"writeResult",value:function(t,e){this.setState({components:Object(i.jsxs)("div",{children:[Object(i.jsx)(v,{top:t[0],bottom:t[1],isFraction:t[2],noF:t[3].replace("pi","\u03c0")}),"< x <",Object(i.jsx)(v,{top:e[0],bottom:e[1],isFraction:e[2],noF:e[3].replace("pi","\u03c0")})]})})}},{key:"componentDidMount",value:function(){document.title="React App"}},{key:"render",value:function(){return Object(i.jsxs)("div",{className:"container",children:[Object(i.jsx)(O,{children:Object(i.jsx)(f,{percent:70})}),Object(i.jsx)(A,{resultHandler:this.writeResult.bind(this),children:Object(i.jsx)(y,{})})]})}}]),n}(r.Component),F=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,24)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,a=e.getLCP,s=e.getTTFB;n(t),i(t),r(t),a(t),s(t)}))};o.a.render(Object(i.jsx)(a.a.StrictMode,{children:Object(i.jsx)(k,{})}),document.getElementById("root")),F()},8:function(t,e,n){}},[[23,1,2]]]);
//# sourceMappingURL=main.755ba029.chunk.js.map