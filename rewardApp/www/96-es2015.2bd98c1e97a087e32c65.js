(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{MjGR:function(l,n,u){"use strict";u.r(n);var t=u("8Y7J");class e{}var i=u("pMnS"),o=u("MKJQ"),s=u("sZkV"),a=u("RBs2"),b=u("o5g6");class r{constructor(){}ngOnInit(){this.userName="Paulo",this.userPoints=5e3}}var p=t.nb({encapsulation:0,styles:[[""]],data:{}});function c(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,3,"ion-button",[["color","warning"]],null,null,null,o.t,o.b)),t.ob(1,49152,null,0,s.i,[t.h,t.k,t.x],{color:[0,"color"]},null),(l()(),t.pb(2,0,null,0,1,"b",[["slot","end"]],null,null,null,null,null)),(l()(),t.Fb(3,null,["pontos: ",""]))],(function(l,n){l(n,1,0,"warning")}),(function(l,n){l(n,3,0,n.component.userPoints)}))}var g=u("s7LF"),h=u("SVse");class m{constructor(){this.slideOpts={initialSlide:0,speed:400},this.initializeItems()}ngOnInit(){}initializeItems(){this.items=["Comida","Vestu\xe1rio","Materiais de Constru\xe7\xe3o"],this.queryItems=this.items}getItems(l){this.initializeItems();var n=l.target.value;n&&""!=n.trim()&&(this.queryItems=this.items.filter(l=>l.toLowerCase().indexOf(n.toLowerCase())>-1))}onCancel(l){return this.items}}var d=t.nb({encapsulation:0,styles:[["ion-slide[_ngcontent-%COMP%]{padding:10px 5px;display:block}ion-slide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:36px;font-weight:700}"]],data:{}});function f(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,15,"ion-list",[],null,null,null,o.A,o.i)),t.ob(1,49152,null,0,s.M,[t.h,t.k,t.x],null,null),(l()(),t.Fb(2,0,[" "," "])),(l()(),t.pb(3,0,null,0,12,"ion-item",[],null,null,null,o.y,o.g)),t.ob(4,49152,null,0,s.F,[t.h,t.k,t.x],null,null),(l()(),t.pb(5,0,null,0,10,"ion-slides",[["pager","true"]],null,null,null,o.D,o.l)),t.ob(6,49152,null,0,s.mb,[t.h,t.k,t.x],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),t.pb(7,0,null,0,2,"ion-slide",[],null,null,null,o.C,o.k)),t.ob(8,49152,null,0,s.lb,[t.h,t.k,t.x],null,null),(l()(),t.pb(9,0,null,0,0,"img",[["alt","QB logo"],["src","/assets/img/PHOTO-2020-03-15-22-19-38 (1).jpg"],["width","100px"]],null,null,null,null,null)),(l()(),t.pb(10,0,null,0,2,"ion-slide",[],null,null,null,o.C,o.k)),t.ob(11,49152,null,0,s.lb,[t.h,t.k,t.x],null,null),(l()(),t.pb(12,0,null,0,0,"img",[["alt","QB logo"],["src","/assets/img/PHOTO-2020-03-15-22-19-38 (2).jpg"],["width","100px"]],null,null,null,null,null)),(l()(),t.pb(13,0,null,0,2,"ion-slide",[],null,null,null,o.C,o.k)),t.ob(14,49152,null,0,s.lb,[t.h,t.k,t.x],null,null),(l()(),t.pb(15,0,null,0,0,"img",[["alt","QB logo"],["src","/assets/img/PHOTO-2020-03-15-22-19-38 (2).jpg"],["width","100px"]],null,null,null,null,null))],(function(l,n){l(n,6,0,n.component.slideOpts,"true")}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function y(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,5,"ion-item",[],null,null,null,o.y,o.g)),t.ob(2,49152,null,0,s.F,[t.h,t.k,t.x],null,null),(l()(),t.pb(3,0,null,0,3,"ion-searchbar",[["placeholder","Filtrar categoria"]],null,[[null,"ionInput"],[null,"ionCancel"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var e=!0,i=l.component;return"ionBlur"===n&&(e=!1!==t.Ab(l,6)._handleBlurEvent(u.target)&&e),"ionChange"===n&&(e=!1!==t.Ab(l,6)._handleInputEvent(u.target)&&e),"ionInput"===n&&(e=!1!==i.getItems(u)&&e),"ionCancel"===n&&(e=!1!==i.onCancel(u)&&e),e}),o.B,o.j)),t.Cb(5120,null,g.c,(function(l){return[l]}),[s.Hb]),t.ob(5,49152,null,0,s.fb,[t.h,t.k,t.x],{placeholder:[0,"placeholder"]},null),t.ob(6,16384,null,0,s.Hb,[t.k],null,null),(l()(),t.eb(16777216,null,null,1,null,f)),t.ob(8,278528,null,0,h.h,[t.M,t.J,t.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,5,0,"Filtrar categoria"),l(n,8,0,u.queryItems)}),null)}class x{constructor(){this.initializeItems()}ngOnInit(){}initializeItems(){this.items=["Islamabad","Istanbul","Jakarta","Kiel","Kyoto","Le Havre","Lebanon","Lhasa"]}getItems(l){this.initializeItems();var n=l.target.value;n&&""!=n.trim()&&(this.items=this.items.filter(l=>l.toLowerCase().indexOf(n.toLowerCase())>-1))}}var k=t.nb({encapsulation:0,styles:[[""]],data:{}});function v(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,12,"div",[["class","centerHome"]],null,null,null,null,null)),(l()(),t.pb(1,0,null,null,3,"ion-item",[["lines","none"]],null,null,null,o.y,o.g)),t.ob(2,49152,null,0,s.F,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(3,0,null,0,1,"app-logo",[["slot","start"]],null,null,null,a.b,a.a)),t.ob(4,114688,null,0,b.a,[],null,null),(l()(),t.pb(5,0,null,null,7,"ion-item",[["lines","none"]],null,null,null,o.y,o.g)),t.ob(6,49152,null,0,s.F,[t.h,t.k,t.x],{lines:[0,"lines"]},null),(l()(),t.pb(7,0,null,0,1,"h3",[["slot","start"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Ola, Paulo. "])),(l()(),t.pb(9,0,null,0,1,"app-points",[["slot","end"]],null,null,null,c,p)),t.ob(10,114688,null,0,r,[],null,null),(l()(),t.pb(11,0,null,0,1,"p",[["slot","botton"]],null,null,null,null,null)),(l()(),t.Fb(-1,null,["Veja as super ofertas que temos hoje para voc\xea "])),(l()(),t.pb(13,0,null,null,3,"ion-content",[],null,null,null,o.u,o.c)),t.ob(14,49152,null,0,s.s,[t.h,t.k,t.x],null,null),(l()(),t.pb(15,0,null,0,1,"app-home-slides",[],null,null,null,y,d)),t.ob(16,114688,null,0,m,[],null,null)],(function(l,n){l(n,2,0,"none"),l(n,4,0),l(n,6,0,"none"),l(n,10,0),l(n,16,0)}),null)}function I(l){return t.Gb(0,[(l()(),t.pb(0,0,null,null,1,"app-feed",[],null,null,null,v,k)),t.ob(1,114688,null,0,x,[],null,null)],(function(l,n){l(n,1,0)}),null)}var C=t.lb("app-feed",x,I,{},{},[]),O=u("iInd");class F{}var w=u("xbko"),j=u("j1ZV");u.d(n,"FeedPageModuleNgFactory",(function(){return P}));var P=t.mb(e,[],(function(l){return t.xb([t.yb(512,t.j,t.X,[[8,[i.a,C]],[3,t.j],t.v]),t.yb(4608,h.j,h.i,[t.s,[2,h.p]]),t.yb(4608,g.g,g.g,[]),t.yb(4608,s.a,s.a,[t.x,t.g]),t.yb(4608,s.Bb,s.Bb,[s.a,t.j,t.p]),t.yb(4608,s.Fb,s.Fb,[s.a,t.j,t.p]),t.yb(1073742336,h.b,h.b,[]),t.yb(1073742336,g.f,g.f,[]),t.yb(1073742336,g.b,g.b,[]),t.yb(1073742336,s.zb,s.zb,[]),t.yb(1073742336,O.p,O.p,[[2,O.u],[2,O.m]]),t.yb(1073742336,F,F,[]),t.yb(1073742336,w.a,w.a,[]),t.yb(1073742336,j.a,j.a,[]),t.yb(1073742336,e,e,[]),t.yb(1024,O.k,(function(){return[[{path:"",component:x}]]}),[])])}))}}]);