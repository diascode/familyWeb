function _defineProperties(l,n){for(var u=0;u<n.length;u++){var e=n[u];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(l,e.key,e)}}function _createClass(l,n,u){return n&&_defineProperties(l.prototype,n),u&&_defineProperties(l,u),l}function _classCallCheck(l,n){if(!(l instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{MjGR:function(l,n,u){"use strict";u.r(n);var e=u("8Y7J"),t=function l(){_classCallCheck(this,l)},i=u("pMnS"),o=u("MKJQ"),a=u("sZkV"),s=u("RBs2"),r=u("o5g6"),b=function(){function l(){_classCallCheck(this,l)}return _createClass(l,[{key:"ngOnInit",value:function(){this.userName="Paulo",this.userPoints=5e3}}]),l}(),c=e.nb({encapsulation:0,styles:[[""]],data:{}});function p(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,3,"ion-button",[["color","warning"]],null,null,null,o.t,o.b)),e.ob(1,49152,null,0,a.i,[e.h,e.k,e.x],{color:[0,"color"]},null),(l()(),e.pb(2,0,null,0,1,"b",[["slot","end"]],null,null,null,null,null)),(l()(),e.Fb(3,null,["pontos: ",""]))],(function(l,n){l(n,1,0,"warning")}),(function(l,n){l(n,3,0,n.component.userPoints)}))}var f=u("s7LF"),h=u("SVse"),g=function(){function l(){_classCallCheck(this,l),this.slideOpts={initialSlide:0,speed:400},this.initializeItems()}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"initializeItems",value:function(){this.items=["Comida","Vestu\xe1rio","Materiais de Constru\xe7\xe3o"],this.queryItems=this.items}},{key:"getItems",value:function(l){this.initializeItems();var n=l.target.value;n&&""!=n.trim()&&(this.queryItems=this.items.filter((function(l){return l.toLowerCase().indexOf(n.toLowerCase())>-1})))}},{key:"onCancel",value:function(l){return this.items}}]),l}(),m=e.nb({encapsulation:0,styles:[["ion-slide[_ngcontent-%COMP%]{padding:10px 5px;display:block}ion-slide[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:36px;font-weight:700}"]],data:{}});function d(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,15,"ion-list",[],null,null,null,o.A,o.i)),e.ob(1,49152,null,0,a.M,[e.h,e.k,e.x],null,null),(l()(),e.Fb(2,0,[" "," "])),(l()(),e.pb(3,0,null,0,12,"ion-item",[],null,null,null,o.y,o.g)),e.ob(4,49152,null,0,a.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(5,0,null,0,10,"ion-slides",[["pager","true"]],null,null,null,o.D,o.l)),e.ob(6,49152,null,0,a.mb,[e.h,e.k,e.x],{options:[0,"options"],pager:[1,"pager"]},null),(l()(),e.pb(7,0,null,0,2,"ion-slide",[],null,null,null,o.C,o.k)),e.ob(8,49152,null,0,a.lb,[e.h,e.k,e.x],null,null),(l()(),e.pb(9,0,null,0,0,"img",[["alt","QB logo"],["src","/assets/img/PHOTO-2020-03-15-22-19-38 (1).jpg"],["width","100px"]],null,null,null,null,null)),(l()(),e.pb(10,0,null,0,2,"ion-slide",[],null,null,null,o.C,o.k)),e.ob(11,49152,null,0,a.lb,[e.h,e.k,e.x],null,null),(l()(),e.pb(12,0,null,0,0,"img",[["alt","QB logo"],["src","/assets/img/PHOTO-2020-03-15-22-19-38 (2).jpg"],["width","100px"]],null,null,null,null,null)),(l()(),e.pb(13,0,null,0,2,"ion-slide",[],null,null,null,o.C,o.k)),e.ob(14,49152,null,0,a.lb,[e.h,e.k,e.x],null,null),(l()(),e.pb(15,0,null,0,0,"img",[["alt","QB logo"],["src","/assets/img/PHOTO-2020-03-15-22-19-38 (2).jpg"],["width","100px"]],null,null,null,null,null))],(function(l,n){l(n,6,0,n.component.slideOpts,"true")}),(function(l,n){l(n,2,0,n.context.$implicit)}))}function y(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,8,"div",[],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,5,"ion-item",[],null,null,null,o.y,o.g)),e.ob(2,49152,null,0,a.F,[e.h,e.k,e.x],null,null),(l()(),e.pb(3,0,null,0,3,"ion-searchbar",[["placeholder","Filtrar categoria"]],null,[[null,"ionInput"],[null,"ionCancel"],[null,"ionBlur"],[null,"ionChange"]],(function(l,n,u){var t=!0,i=l.component;return"ionBlur"===n&&(t=!1!==e.Ab(l,6)._handleBlurEvent(u.target)&&t),"ionChange"===n&&(t=!1!==e.Ab(l,6)._handleInputEvent(u.target)&&t),"ionInput"===n&&(t=!1!==i.getItems(u)&&t),"ionCancel"===n&&(t=!1!==i.onCancel(u)&&t),t}),o.B,o.j)),e.Cb(5120,null,f.c,(function(l){return[l]}),[a.Hb]),e.ob(5,49152,null,0,a.fb,[e.h,e.k,e.x],{placeholder:[0,"placeholder"]},null),e.ob(6,16384,null,0,a.Hb,[e.k],null,null),(l()(),e.eb(16777216,null,null,1,null,d)),e.ob(8,278528,null,0,h.h,[e.M,e.J,e.q],{ngForOf:[0,"ngForOf"]},null)],(function(l,n){var u=n.component;l(n,5,0,"Filtrar categoria"),l(n,8,0,u.queryItems)}),null)}var k=function(){function l(){_classCallCheck(this,l),this.initializeItems()}return _createClass(l,[{key:"ngOnInit",value:function(){}},{key:"initializeItems",value:function(){this.items=["Islamabad","Istanbul","Jakarta","Kiel","Kyoto","Le Havre","Lebanon","Lhasa"]}},{key:"getItems",value:function(l){this.initializeItems();var n=l.target.value;n&&""!=n.trim()&&(this.items=this.items.filter((function(l){return l.toLowerCase().indexOf(n.toLowerCase())>-1})))}}]),l}(),C=e.nb({encapsulation:0,styles:[[""]],data:{}});function v(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,12,"div",[["class","centerHome"]],null,null,null,null,null)),(l()(),e.pb(1,0,null,null,3,"ion-item",[["lines","none"]],null,null,null,o.y,o.g)),e.ob(2,49152,null,0,a.F,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.pb(3,0,null,0,1,"app-logo",[["slot","start"]],null,null,null,s.b,s.a)),e.ob(4,114688,null,0,r.a,[],null,null),(l()(),e.pb(5,0,null,null,7,"ion-item",[["lines","none"]],null,null,null,o.y,o.g)),e.ob(6,49152,null,0,a.F,[e.h,e.k,e.x],{lines:[0,"lines"]},null),(l()(),e.pb(7,0,null,0,1,"h3",[["slot","start"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Ola, Paulo. "])),(l()(),e.pb(9,0,null,0,1,"app-points",[["slot","end"]],null,null,null,p,c)),e.ob(10,114688,null,0,b,[],null,null),(l()(),e.pb(11,0,null,0,1,"p",[["slot","botton"]],null,null,null,null,null)),(l()(),e.Fb(-1,null,["Veja as super ofertas que temos hoje para voc\xea "])),(l()(),e.pb(13,0,null,null,3,"ion-content",[],null,null,null,o.u,o.c)),e.ob(14,49152,null,0,a.s,[e.h,e.k,e.x],null,null),(l()(),e.pb(15,0,null,0,1,"app-home-slides",[],null,null,null,y,m)),e.ob(16,114688,null,0,g,[],null,null)],(function(l,n){l(n,2,0,"none"),l(n,4,0),l(n,6,0,"none"),l(n,10,0),l(n,16,0)}),null)}var x=e.lb("app-feed",k,(function(l){return e.Gb(0,[(l()(),e.pb(0,0,null,null,1,"app-feed",[],null,null,null,v,C)),e.ob(1,114688,null,0,k,[],null,null)],(function(l,n){l(n,1,0)}),null)}),{},{},[]),I=u("iInd"),O=function l(){_classCallCheck(this,l)},w=u("xbko"),_=u("j1ZV");u.d(n,"FeedPageModuleNgFactory",(function(){return F}));var F=e.mb(t,[],(function(l){return e.xb([e.yb(512,e.j,e.X,[[8,[i.a,x]],[3,e.j],e.v]),e.yb(4608,h.j,h.i,[e.s,[2,h.p]]),e.yb(4608,f.g,f.g,[]),e.yb(4608,a.a,a.a,[e.x,e.g]),e.yb(4608,a.Bb,a.Bb,[a.a,e.j,e.p]),e.yb(4608,a.Fb,a.Fb,[a.a,e.j,e.p]),e.yb(1073742336,h.b,h.b,[]),e.yb(1073742336,f.f,f.f,[]),e.yb(1073742336,f.b,f.b,[]),e.yb(1073742336,a.zb,a.zb,[]),e.yb(1073742336,I.p,I.p,[[2,I.u],[2,I.m]]),e.yb(1073742336,O,O,[]),e.yb(1073742336,w.a,w.a,[]),e.yb(1073742336,_.a,_.a,[]),e.yb(1073742336,t,t,[]),e.yb(1024,I.k,(function(){return[[{path:"",component:k}]]}),[])])}))}}]);