(function(e){function t(t){for(var r,i,a=t[0],s=t[1],u=t[2],b=0,d=[];b<a.length;b++)i=a[b],Object.prototype.hasOwnProperty.call(c,i)&&c[i]&&d.push(c[i][0]),c[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(e[r]=s[r]);l&&l(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],r=!0,a=1;a<n.length;a++){var s=n[a];0!==c[s]&&(r=!1)}r&&(o.splice(t--,1),e=i(i.s=n[0]))}return e}var r={},c={app:0},o=[];function i(t){if(r[t])return r[t].exports;var n=r[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=e,i.c=r,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)i.d(n,r,function(t){return e[t]}.bind(null,r));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="/vue-subscriber-page/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var l=s;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"16bd":function(e,t,n){"use strict";n("7a82")},"1a14":function(e,t,n){"use strict";n("6608")},"20bb":function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("e260"),n("e6cf"),n("cca6"),n("a79d");var r=n("7a23"),c=n("5ea3"),o=n.n(c),i=n("cdd8"),a=n.n(i),s=n("e041"),u=n.n(s),l=n("6cb7"),b=n.n(l),d=n("8e57"),p=n.n(d),f={class:"Background"},m=Object(r["c"])("img",{class:"img1",src:o.a},null,-1),g=Object(r["c"])("img",{class:"img2",src:a.a},null,-1),j=Object(r["c"])("img",{class:"img3",src:u.a},null,-1),O=Object(r["c"])("img",{class:"img4",src:b.a},null,-1),v=Object(r["c"])("img",{class:"img5",src:p.a},null,-1),h={class:"Container"},y=Object(r["c"])("span",{class:"Content"}," Receive Exclusive offers on newly released games and deals when you subscribe to our newsletter ",-1);function x(e,t,n,c,o,i){var a=Object(r["i"])("Header"),s=Object(r["i"])("AddEmail");return Object(r["f"])(),Object(r["b"])("body",f,[m,g,j,O,v,Object(r["c"])("div",h,[Object(r["d"])(a,{title:"Don't Miss Out On All The Fun",color:"white"}),y,Object(r["d"])(s,{onSubscriber:i.newSubscriber},null,8,["onSubscriber"])])])}function S(e,t,n,c,o,i){return Object(r["f"])(),Object(r["b"])("header",null,[Object(r["c"])("h1",{style:Object(r["e"])({color:n.color})},Object(r["j"])(n.title),5)])}var w={name:"Header",props:{title:String,color:String}};n("8a62");w.render=S,w.__scopeId="data-v-83f29186";var _=w;Object(r["h"])("data-v-78298c0e");var k={class:"input-container"};function P(e,t,n,c,o,i){var a=Object(r["i"])("Button");return Object(r["f"])(),Object(r["b"])("div",k,[Object(r["l"])(Object(r["c"])("input",{class:"email",type:"text","onUpdate:modelValue":t[0]||(t[0]=function(e){return o.email=e}),name:"email",placeholder:"Email Address"},null,512),[[r["k"],o.email]]),Object(r["d"])(a,{onClick:t[1]||(t[1]=function(e){return i.onClick()}),text:"Subscribe",color:"#E38F12",text_color:"white"})])}Object(r["g"])();n("d3b7"),n("25f0");function A(e,t,n,c,o,i){return Object(r["f"])(),Object(r["b"])("button",{class:"btn",style:Object(r["e"])({background:n.color,color:n.text_color})},Object(r["j"])(n.text),5)}var E={name:"Button",props:{text:String,color:String,text_color:String}};n("1a14");E.render=A;var M=E,C={name:"AddEmail",data:function(){return{email:""}},components:{Button:M},methods:{onClick:function(){if(this.email){var e={id:Math.random().toString(36).substr(2,9),email:this.email};this.$emit("Subscriber",e),alert("Successfully Subscribed!"),this.email=""}else alert("Please add an email address")}}};n("16bd");C.render=P,C.__scopeId="data-v-78298c0e";var B=C,H={name:"App",components:{Header:_,AddEmail:B},data:function(){return{subscribers:[]}},methods:{newSubscriber:function(e){this.subscribers.push(e),console.log(e),console.log(this.subscribers)}}};n("c279");H.render=x;var T=H;Object(r["a"])(T).mount("#app")},"572e":function(e,t,n){},"5ea3":function(e,t,n){e.exports=n.p+"img/img1.fe9912a0.jpg"},6608:function(e,t,n){},"6cb7":function(e,t,n){e.exports=n.p+"img/img4.dc09b01c.jpg"},"7a82":function(e,t,n){},"8a62":function(e,t,n){"use strict";n("20bb")},"8e57":function(e,t,n){e.exports=n.p+"img/img5.86cad94e.jpg"},c279:function(e,t,n){"use strict";n("572e")},cdd8:function(e,t,n){e.exports=n.p+"img/img2.a315479b.jpg"},e041:function(e,t,n){e.exports=n.p+"img/img3.df4ae6d4.jpg"}});
//# sourceMappingURL=app.2da65f2c.js.map