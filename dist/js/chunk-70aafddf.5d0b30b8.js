(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-70aafddf"],{"00fe":function(e,t,n){},"0cb2":function(e,t,n){var r=n("e330"),a=n("7b0b"),o=Math.floor,c=r("".charAt),i=r("".replace),s=r("".slice),l=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,d,f){var p=n+e.length,g=r.length,v=u;return void 0!==d&&(d=a(d),v=l),i(f,v,(function(a,i){var l;switch(c(i,0)){case"$":return"$";case"&":return e;case"`":return s(t,0,n);case"'":return s(t,p);case"<":l=d[s(i,1,-1)];break;default:var u=+i;if(0===u)return a;if(u>g){var f=o(u/10);return 0===f?a:f<=g?void 0===r[f-1]?c(i,1):r[f-1]+c(i,1):a}l=r[u-1]}return void 0===l?"":l}))}},"107c":function(e,t,n){var r=n("d039"),a=n("da84"),o=a.RegExp;e.exports=r((function(){var e=o("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},"14c3":function(e,t,n){var r=n("da84"),a=n("c65b"),o=n("825a"),c=n("1626"),i=n("c6b6"),s=n("9263"),l=r.TypeError;e.exports=function(e,t){var n=e.exec;if(c(n)){var r=a(n,e,t);return null!==r&&o(r),r}if("RegExp"===i(e))return a(s,e,t);throw l("RegExp#exec called on incompatible receiver")}},"3b4b":function(e,t,n){},"49f0":function(e,t,n){"use strict";n("3b4b")},5319:function(e,t,n){"use strict";var r=n("2ba4"),a=n("c65b"),o=n("e330"),c=n("d784"),i=n("d039"),s=n("825a"),l=n("1626"),u=n("5926"),d=n("50c4"),f=n("577e"),p=n("1d80"),g=n("8aa5"),v=n("dc4a"),x=n("0cb2"),m=n("14c3"),h=n("b622"),b=h("replace"),w=Math.max,$=Math.min,I=o([].concat),y=o([].push),E=o("".indexOf),R=o("".slice),k=function(e){return void 0===e?e:String(e)},C=function(){return"$0"==="a".replace(/./,"$0")}(),S=function(){return!!/./[b]&&""===/./[b]("a","$0")}(),_=!i((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));c("replace",(function(e,t,n){var o=S?"$":"$0";return[function(e,n){var r=p(this),o=void 0==e?void 0:v(e,b);return o?a(o,e,r,n):a(t,f(r),e,n)},function(e,a){var c=s(this),i=f(e);if("string"==typeof a&&-1===E(a,o)&&-1===E(a,"$<")){var p=n(t,c,i,a);if(p.done)return p.value}var v=l(a);v||(a=f(a));var h=c.global;if(h){var b=c.unicode;c.lastIndex=0}var C=[];while(1){var S=m(c,i);if(null===S)break;if(y(C,S),!h)break;var _=f(S[0]);""===_&&(c.lastIndex=g(i,d(c.lastIndex),b))}for(var O="",T=0,A=0;A<C.length;A++){S=C[A];for(var j=f(S[0]),P=w($(u(S.index),i.length),0),N=[],U=1;U<S.length;U++)y(N,k(S[U]));var D=S.groups;if(v){var M=I([j],N,P,i);void 0!==D&&y(M,D);var B=f(r(a,void 0,M))}else B=x(j,i,P,N,D,a);P>=T&&(O+=R(i,T,P)+B,T=P+j.length)}return O+R(i,T)}]}),!_||!C||S)},"8aa5":function(e,t,n){"use strict";var r=n("6547").charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},9263:function(e,t,n){"use strict";var r=n("c65b"),a=n("e330"),o=n("577e"),c=n("ad6d"),i=n("9f7f"),s=n("5692"),l=n("7c73"),u=n("69f3").get,d=n("fce3"),f=n("107c"),p=s("native-string-replace",String.prototype.replace),g=RegExp.prototype.exec,v=g,x=a("".charAt),m=a("".indexOf),h=a("".replace),b=a("".slice),w=function(){var e=/a/,t=/b*/g;return r(g,e,"a"),r(g,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),$=i.UNSUPPORTED_Y||i.BROKEN_CARET,I=void 0!==/()??/.exec("")[1],y=w||I||$||d||f;y&&(v=function(e){var t,n,a,i,s,d,f,y=this,E=u(y),R=o(e),k=E.raw;if(k)return k.lastIndex=y.lastIndex,t=r(v,k,R),y.lastIndex=k.lastIndex,t;var C=E.groups,S=$&&y.sticky,_=r(c,y),O=y.source,T=0,A=R;if(S&&(_=h(_,"y",""),-1===m(_,"g")&&(_+="g"),A=b(R,y.lastIndex),y.lastIndex>0&&(!y.multiline||y.multiline&&"\n"!==x(R,y.lastIndex-1))&&(O="(?: "+O+")",A=" "+A,T++),n=new RegExp("^(?:"+O+")",_)),I&&(n=new RegExp("^"+O+"$(?!\\s)",_)),w&&(a=y.lastIndex),i=r(g,S?n:y,A),S?i?(i.input=b(i.input,T),i[0]=b(i[0],T),i.index=y.lastIndex,y.lastIndex+=i[0].length):y.lastIndex=0:w&&i&&(y.lastIndex=y.global?i.index+i[0].length:a),I&&i&&i.length>1&&r(p,i[0],n,(function(){for(s=1;s<arguments.length-2;s++)void 0===arguments[s]&&(i[s]=void 0)})),i&&C)for(i.groups=d=l(null),s=0;s<C.length;s++)f=C[s],d[f[0]]=i[f[1]];return i}),e.exports=v},"929a":function(e,t,n){e.exports=n.p+"img/cadtech.84e429e6.png"},"9f7f":function(e,t,n){var r=n("d039"),a=n("da84"),o=a.RegExp;t.UNSUPPORTED_Y=r((function(){var e=o("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),t.BROKEN_CARET=r((function(){var e=o("^r","gy");return e.lastIndex=2,null!=e.exec("str")}))},a55b:function(e,t,n){"use strict";n.r(t);var r=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"login"},[r("el-card",[r("div",{staticClass:"top"},[r("img",{staticStyle:{width:"30%"},attrs:{src:n("929a"),alt:""}}),r("h2",{staticClass:"item"},[e._v("凱群系統登入")])]),r("el-form",{ref:"form",staticClass:"login-form",attrs:{model:e.model},nativeOn:{submit:function(t){return t.preventDefault(),e.login.apply(null,arguments)}}},[r("el-form-item",{attrs:{prop:"username"}},[r("el-input",{attrs:{placeholder:"帳號","prefix-icon":"el-icon-user-solid"},model:{value:e.model.username,callback:function(t){e.$set(e.model,"username",t)},expression:"model.username"}})],1),r("el-form-item",{attrs:{prop:"password"}},[r("el-input",{attrs:{placeholder:"密碼",type:"password","prefix-icon":"el-icon-lock"},model:{value:e.model.password,callback:function(t){e.$set(e.model,"password",t)},expression:"model.password"}})],1),r("el-form-item",[r("el-button",{staticClass:"login-button",attrs:{loading:e.loading,type:"primary","native-type":"submit",block:""}},[e._v("Login")])],1),r("a",{staticClass:"forgot-password",attrs:{href:"http://www.cadtech.com.tw/"}},[e._v("Cadtech.com.tw")])],1)],1)],1)},a=[],o=n("1da1"),c=(n("96cf"),n("d3b7"),n("ac1f"),n("5319"),{created:function(){localStorage.clear(),localStorage.getItem("jwt")||localStorage.setItem("jwt","")},name:"login",data:function(){return{validCredentials:{username:"lightscope",password:"lightscope"},model:{username:"",password:""},loading:!1}},methods:{simulateLogin:function(){return new Promise((function(e){setTimeout(e,800)}))},login:function(){var e=this;return Object(o["a"])(regeneratorRuntime.mark((function t(){var n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:n={userid:e.model.username,userpw:e.model.password},e.$axios({url:"/user/login",method:"post",data:n}).then((function(t){if(200==t.status){e.$store.commit("accessToken",t.data),localStorage.setItem("jwt",e.$store.state.authority.access_token);var n=e.$loading({lock:!0,text:"載入中...",spinner:"el-icon-loading",background:"rgba(255, 255, 255, 0.7)"});setTimeout((function(){n.close(),e.$router.replace({name:"Home"})}),2e3)}})).catch((function(t){console.log(t),e.$message({type:"error",message:"帳號密碼有錯"})}));case 2:case"end":return t.stop()}}),t)})))()}}}),i=c,s=(n("49f0"),n("dac8"),n("2877")),l=Object(s["a"])(i,r,a,!1,null,"f0a7248a",null);t["default"]=l.exports},ac1f:function(e,t,n){"use strict";var r=n("23e7"),a=n("9263");r({target:"RegExp",proto:!0,forced:/./.exec!==a},{exec:a})},ad6d:function(e,t,n){"use strict";var r=n("825a");e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},d784:function(e,t,n){"use strict";n("ac1f");var r=n("e330"),a=n("6eeb"),o=n("9263"),c=n("d039"),i=n("b622"),s=n("9112"),l=i("species"),u=RegExp.prototype;e.exports=function(e,t,n,d){var f=i(e),p=!c((function(){var t={};return t[f]=function(){return 7},7!=""[e](t)})),g=p&&!c((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[l]=function(){return n},n.flags="",n[f]=/./[f]),n.exec=function(){return t=!0,null},n[f](""),!t}));if(!p||!g||n){var v=r(/./[f]),x=t(f,""[e],(function(e,t,n,a,c){var i=r(e),s=t.exec;return s===o||s===u.exec?p&&!c?{done:!0,value:v(t,n,a)}:{done:!0,value:i(n,t,a)}:{done:!1}}));a(String.prototype,e,x[0]),a(u,f,x[1])}d&&s(u[f],"sham",!0)}},dac8:function(e,t,n){"use strict";n("00fe")},fce3:function(e,t,n){var r=n("d039"),a=n("da84"),o=a.RegExp;e.exports=r((function(){var e=o(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))}}]);
//# sourceMappingURL=chunk-70aafddf.5d0b30b8.js.map