import{a as g}from"./chunk-4OR454OB.js";import{c as k,d as I,e as L,f as $,q as w,t as A}from"./chunk-YVNO4NY2.js";import{Ja as c,La as p,Na as b,Oa as u,Pa as v,Qa as x,Ra as n,Sa as o,Ta as y,V as s,X as f,Ya as C,bb as h,cb as a,db as d,fb as M,gb as P,ib as O,jb as m,k as _,kb as S,lb as B,xa as i}from"./chunk-K7HKDJCH.js";var F=t=>["/blog",t];function T(t,l){if(t&1&&(n(0,"a",6)(1,"article"),y(2,"div",7),n(3,"div",8)(4,"h3",9),a(5),o(),n(6,"div",10)(7,"div"),a(8),m(9,"date"),o()()()()()),t&2){let e=l.$implicit;p("routerLink",O(10,F,e.slug))("title",e.title),i(2),h("background-image: url('/images/cropped/",e.coverImage.main,"');"),i(3),d(e.title),i(3),d(B(9,7,e.createdAt,"dd/MM/yyyy"))}}function D(t,l){if(t&1&&(n(0,"div",5),v(1,T,10,12,"a",6,u),o()),t&2){let e=C().$implicit;i(),x(e.data)}}function z(t,l){if(t&1&&(n(0,"div",1)(1,"div",2)(2,"section",3)(3,"h2",4),a(4,"\xDAltimos artigos"),o(),c(5,D,3,0,"div",5),o()()()),t&2){let e=l.$implicit;i(5),b(e.data&&e.data.length?5:-1)}}var U=(()=>{class t{blogService=s(g);posts$=new _({loading:!0});analytics=s(A);ngOnInit(){return this.analytics.view("blog-list"),this.blogService.readAll().subscribe({next:e=>this.posts$.next({data:e}),error:()=>this.posts$.next({failure:!0})})}static \u0275fac=function(r){return new(r||t)};static \u0275cmp=f({type:t,selectors:[["ng-component"]],standalone:!0,features:[M([g]),P],decls:2,vars:3,consts:[["class","blog-list",4,"ngIf"],[1,"blog-list"],[1,"container"],[1,"blog-list-section"],[1,"blog-list-section__title"],[1,"blog-list-content"],[1,"blog-list-item",3,"routerLink","title"],[1,"blog-list-item__placeholder"],[1,"blog-list-item__content"],[1,"blog-list-item__content__title"],[1,"blog-list-item__content__info"]],template:function(r,E){r&1&&(c(0,z,6,1,"div",0),m(1,"async")),r&2&&p("ngIf",S(1,1,E.posts$))},dependencies:[$,k,I,L,w],styles:[".blog-list[_ngcontent-%COMP%]{min-height:80vh;padding:64px 0}.blog-list-section[_ngcontent-%COMP%]{display:flex;flex-direction:column}.blog-list-section__title[_ngcontent-%COMP%]{margin-bottom:24px}.blog-list-content[_ngcontent-%COMP%]{display:grid;gap:24px;grid-template-columns:1fr 1fr 1fr}@media screen and (max-width: 768px){.blog-list-content[_ngcontent-%COMP%]{grid-template-columns:1fr}}.blog-list-item[_ngcontent-%COMP%]{border:1px solid var(--color-primary-100);border-radius:8px;box-shadow:0 2px #0000001a;color:var(--color-text-muted);display:block;overflow:hidden;text-decoration:none;transition:all .3s ease-in-out}.blog-list-item[_ngcontent-%COMP%]:hover{transform:scale(1.1)}.blog-list-item__placeholder[_ngcontent-%COMP%]{background-color:var(--color-primary-100);background-position:center center;background-size:cover;height:126px}.blog-list-item__content[_ngcontent-%COMP%]{padding:12px}.blog-list-item__content__title[_ngcontent-%COMP%]{font-size:1.4rem;margin-bottom:12px}.blog-list-item__content__info[_ngcontent-%COMP%]{display:flex;font-size:1.2rem}"]})}return t})();export{U as BlogListComponent};
