import{a as F}from"./chunk-GSOWSQME.js";import{e as x,f as y,h as M,i as O,j as P,m as k,o as p,q as w,r as S,s as b,t as D,u as A}from"./chunk-LFKPFFEY.js";import{a as E}from"./chunk-2Z72IUM4.js";import{La as s,Ra as n,Sa as e,Ta as r,V as d,X as a,Xa as f,cb as o,eb as u,gb as m,hb as v,jb as _,lb as C,tb as h,xa as g}from"./chunk-K7HKDJCH.js";var j=()=>["/blog"],T=(()=>{class t{analytics=d(D);optInToggle=d(F);get date(){return new Date}sendClickDemo(){this.optInToggle.emit(!0),this.analytics.click("main-nav-demo")}static \u0275fac=function(i){return new(i||t)};static \u0275cmp=a({type:t,selectors:[["ng-component"]],standalone:!0,features:[m],decls:28,vars:6,consts:[[1,"main-navigation-header"],[1,"container","main-navigation-header__container"],[1,"main-navigation-header__logotype"],["href",""],[1,"main-navigation-header__menu"],["title","Conte\xFAdo para otimizar sua agenda","dsButton","link",3,"routerLink"],["dsButton","primary",3,"click"],[1,"icon"],[1,"main-navigation"],[1,"main-navigation-footer"],[1,"container"],[1,"main-navigation-footer__content"],[1,"main-navigation-footer__links"]],template:function(i,l){i&1&&(n(0,"header",0)(1,"div",1)(2,"div",2)(3,"a",3)(4,"span"),o(5,"agenda"),e(),n(6,"strong"),o(7,"online"),e()()(),n(8,"nav",4)(9,"a",5),o(10,"blog"),e(),n(11,"button",6),f("click",function(){return l.sendClickDemo()}),o(12,"veja como funciona "),n(13,"span",7),o(14,"arrow_outward"),e()()()()(),n(15,"main",8),r(16,"router-outlet"),e(),n(17,"footer",9)(18,"div",10)(19,"div",11)(20,"span"),o(21),_(22,"date"),e(),n(23,"ul",12)(24,"a",3),o(25,"Termos de uso"),e(),n(26,"a",3),o(27,"Politicas de privavidade"),e()()()()()),i&2&&(g(9),s("routerLink",v(5,j)),g(12),u("\xA9 ",C(22,2,l.date,"yyyy")," agendaonline.me"))},dependencies:[p,E,y,x,w],styles:[".main-navigation[_ngcontent-%COMP%]{padding-top:92px}.main-navigation-header[_ngcontent-%COMP%]{align-items:center;background-color:var(--color-background);display:flex;height:92px;position:fixed;top:0;width:100vw;z-index:9}.main-navigation-header__container[_ngcontent-%COMP%]{align-items:center;display:flex;justify-content:space-between}.main-navigation-header__logotype[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-primary-400);font-size:2.8rem;text-decoration:none}.main-navigation-header__logotype[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--color-text-default);font-weight:200}.main-navigation-header__logotype[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]   strong[_ngcontent-%COMP%]{font-weight:900}.main-navigation-header__menu[_ngcontent-%COMP%]{align-items:center;display:flex;gap:24px}.main-navigation-footer[_ngcontent-%COMP%]{background-color:var(--color-foreground);color:var(--color-text-muted);font-size:1.4rem;font-weight:300;padding:32px}.main-navigation-footer__content[_ngcontent-%COMP%]{display:flex;justify-content:space-between;gap:24px}@media screen and (max-width: 768px){.main-navigation-footer__content[_ngcontent-%COMP%]{flex-direction:column;align-items:center}}.main-navigation-footer__links[_ngcontent-%COMP%]{display:flex;gap:12px;padding:0;margin:0}@media screen and (max-width: 768px){.main-navigation-footer__links[_ngcontent-%COMP%]{flex-direction:column;align-items:center}}.main-navigation-footer__links[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--color-primary-300)}"]})}return t})();var B=[{path:"",component:T,children:[{path:"blog/:slug",loadComponent:()=>import("./chunk-7O5APJLO.js").then(t=>t.BlogPostComponent)},{path:"blog",loadComponent:()=>import("./chunk-EFCJJ3BH.js").then(t=>t.BlogListComponent)},{path:"",loadComponent:()=>import("./chunk-HHVNKKZZ.js").then(t=>t.LandingComponent)},{path:"404",loadComponent:()=>import("./chunk-XKND6VDB.js").then(t=>t.NotFoundComponent)},{path:"**",redirectTo:"404",pathMatch:"full"}]}];var I={providers:[k(),h({eventCoalescing:!0}),S(B),M(O()),A(b.mixpanel)]};var L=(()=>{class t{static \u0275fac=function(i){return new(i||t)};static \u0275cmp=a({type:t,selectors:[["app-root"]],standalone:!0,features:[m],decls:1,vars:0,template:function(i,l){i&1&&r(0,"router-outlet")},dependencies:[p],encapsulation:2})}return t})();P(L,I).catch(t=>console.error(t));
