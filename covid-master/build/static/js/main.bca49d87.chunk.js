(this["webpackJsonpcovid-19"]=this["webpackJsonpcovid-19"]||[]).push([[0],{101:function(e,t,a){},102:function(e,t,a){},106:function(e,t,a){},107:function(e,t,a){},205:function(e,t,a){"use strict";a.r(t);var n=a(0),c=a.n(n),r=a(9),o=a.n(r),s=(a(99),a(29)),l=a.n(s),i=a(44),u=a(16),m=(a(101),a(237)),d=a(238),f=a(239),v=a(231),p=a(235),h=function(e){var t="worldwide"===e?"https://disease.sh/v3/covid-19/all":"https://disease.sh/v3/covid-19/countries/".concat(e);return fetch(t).then((function(e){return e.json()})).catch((function(e){return console.log("Can't fetch covid data due to err:",e)}))},E=function(){var e=Object(i.a)(l.a.mark((function e(){return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=120").then((function(e){return e.json()})).catch((function(e){return console.log("Can't fetch last 120 days covid data due to err:",e)})));case 1:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),b=a(54),y=a(236);a(102);var g=function(e){var t=e.title,a=e.cases,n=e.total,r=e.active,o=e.isRed,s=Object(b.a)(e,["title","cases","total","active","isRed"]);return c.a.createElement(v.a,{onClick:s.onClick,className:"infoBox ".concat(r&&"infoBox--selected"," ").concat(o&&"infoBox--red")},c.a.createElement(p.a,null,c.a.createElement(y.a,{color:"textSecondary",gutterBottom:!0},t),c.a.createElement("h2",{className:"infoBox_cases ".concat(!o&&"infoBox_cases--green")},a),c.a.createElement(y.a,{className:"infoBox_total",color:"textSecondary"},"Total ",n)))},j=(a(106),a(242)),O=a(243),w=a(87),C=a(14),x=a.n(C),N=a(240),k=a(241),S={cases:{hex:"#CC1034",multiplier:500},recovered:{hex:"#7dd71d",multiplier:725},deaths:{hex:"#fb4443",multiplier:1e3}},R=function(e){return e?"+".concat(x()(e).format("0.0a")):"+0"};var _=function(e){var t=e.countries,a=e.casesType,n=e.center,r=e.zoom;return c.a.createElement("div",{className:"map"},c.a.createElement(j.a,{center:n,zoom:r},c.a.createElement(O.a,{url:"https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",attribution:'\xa9 <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'}),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"cases";return e.map((function(e){return c.a.createElement(N.a,{center:[e.countryInfo.lat,e.countryInfo.long],color:S[t].hex,fillColor:S[t].hex,fillOpacity:.4,radius:Math.sqrt(e[t])*S[t].multiplier},c.a.createElement(k.a,null,c.a.createElement("div",{className:"info-container"},c.a.createElement("div",{className:"info-flag",style:{backgroundImage:"url(".concat(e.countryInfo.flag,")")}}),c.a.createElement("div",{className:"info-name"},e.country),c.a.createElement("div",{className:"info-confirmed"},"Cases: ",x()(e.cases).format("0,0")),c.a.createElement("div",{className:"info-recovered"},"Recovered: ",x()(e.recovered).format("0,0")),c.a.createElement("div",{className:"info-deaths"},"Deaths: ",x()(e.deaths).format("0,0")))))}))}(t,a)))};a(107);var B=function(e){var t=e.countries;return c.a.createElement("div",{className:"table"},t.map((function(e){return c.a.createElement("tr",null,c.a.createElement("td",null,e.country),c.a.createElement("td",null,c.a.createElement("strong",null,x()(e.cases).format("0,0"))))})))},I=a(86),T={legend:{display:!1},elements:{point:{radius:0}},maintainAspectRatio:!1,tooltips:{mode:"index",intersect:!1,callbacks:{label:function(e,t){return x()(e.value).format("+0,0")}}},scales:{xAxes:[{type:"time",time:{format:"MM/DD/YY",tooltipFormat:"ll"}}],yAxes:[{gridLines:{display:!1},ticks:{callback:function(e,t,a){return x()(e).format("0a")}}}]}};var D=function(e){var t=e.casesType,a=void 0===t?"cases":t,r=Object(b.a)(e,["casesType"]),o=Object(n.useState)({}),s=Object(u.a)(o,2),l=s[0],i=s[1];return Object(n.useEffect)((function(){E().then((function(e){var t=function(e,t){var a,n=[];for(var c in e.cases){if(a){var r={x:c,y:e[t][c]-a};n.push(r)}a=e[t][c]}return n}(e,a);i(t)}))}),[a]),c.a.createElement("div",{className:r.className},(null===l||void 0===l?void 0:l.length)>0&&c.a.createElement(I.Line,{data:{datasets:[{backgroundColor:"rgba(204, 16, 52, 0.5)",borderColor:"#CC1034",data:l}]},options:T}))};a(204);var M=function(){var e=Object(n.useState)("worldwide"),t=Object(u.a)(e,2),a=t[0],r=t[1],o=Object(n.useState)([]),s=Object(u.a)(o,2),E=s[0],b=s[1],y=Object(n.useState)({}),j=Object(u.a)(y,2),O=j[0],C=j[1],N=Object(n.useState)([]),k=Object(u.a)(N,2),S=k[0],I=k[1],T=Object(n.useState)([]),M=Object(u.a)(T,2),z=M[0],A=M[1],W=Object(n.useState)("cases"),L=Object(u.a)(W,2),J=L[0],Y=L[1],q=Object(n.useState)({lat:34.80746,lng:-40.4796}),F=Object(u.a)(q,2),K=F[0],V=F[1],$=Object(n.useState)(3),G=Object(u.a)($,2),H=G[0],P=G[1];Object(n.useEffect)((function(){h("worldwide").then((function(e){C(e)})),fetch("https://disease.sh/v3/covid-19/countries").then((function(e){return e.json()})).catch((function(e){return console.log("Can't fetch all countries due to err:",e)})).then((function(e){var t=e.map((function(e){return{name:e.country,value:e.countryInfo.iso2}})),a=function(e){var t=Object(w.a)(e);return t.sort((function(e,t){return e.cases>t.cases?-1:1})),t}(e);b(t),I(e),A(a)}))}),[]);var Q=function(){var e=Object(i.a)(l.a.mark((function e(t){var a;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=t.target.value,e.next=3,h(a).then((function(e){r(a),C(e),V([e.countryInfo.lat,e.countryInfo.long]),P(4)}));case 3:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return c.a.createElement("div",{className:"app"},c.a.createElement("div",{className:"app_left"},c.a.createElement("div",{className:"app_header"},c.a.createElement("h1",null,"COVID-19 TRACKER"),c.a.createElement(m.a,{className:"app_dropdown"},c.a.createElement(d.a,{variant:"outlined",onChange:Q,value:a},c.a.createElement(f.a,{value:"worldwide"},"Worldwide"),E.map((function(e){return c.a.createElement(f.a,{value:e.value},e.name)}))))),c.a.createElement("div",{className:"app_stats"},c.a.createElement(g,{onClick:function(e){return Y("cases")},title:"Coronavirus Cases",isRed:!0,active:"cases"===J,cases:R(O.todayCases),total:x()(O.cases).format("0.0a")}),c.a.createElement(g,{onClick:function(e){return Y("recovered")},title:"Recovered",active:"recovered"===J,cases:R(O.todayRecovered),total:x()(O.recovered).format("0.0a")}),c.a.createElement(g,{onClick:function(e){return Y("deaths")},title:"Deaths",isRed:!0,active:"deaths"===J,cases:R(O.todayDeaths),total:x()(O.deaths).format("0.0a")})),c.a.createElement(_,{countries:S,casesType:J,center:K,zoom:H})),c.a.createElement(v.a,{className:"app_right"},c.a.createElement(p.a,null,c.a.createElement("div",{className:"app_information"},c.a.createElement("h3",null,"Live Cases by Country"),c.a.createElement(B,{countries:z}),c.a.createElement("h3",null,"Worldwide new ",J),c.a.createElement(D,{className:"app_graph",casesType:J})))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(M,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},94:function(e,t,a){e.exports=a(205)},99:function(e,t,a){}},[[94,1,2]]]);
//# sourceMappingURL=main.bca49d87.chunk.js.map