import{W as te,L as ne,M as le,X as ae,S as W,i as F,s as I,N as B,l as U,g as w,O as X,K as d,d as f,e as A,t as S,c as q,a as O,h as T,b as C,J as y,j as N,k as L,m as P,P as Y,Q as re,q as V,o as H,w as z,x as Z,y as x,B as ee}from"../chunks/vendor-bbb3fa22.js";import{b as se}from"../chunks/paths-4b3c6e7e.js";let R=null;const oe=async(a,e)=>{if(R)return R;e==null&&(e=a.split("/").pop());const l=new ae,t=new te;R=new ne(l,t),await R.instantiate(le);const n=await fetch(a).then(o=>o.arrayBuffer());return await R.registerFileBuffer(e,new Uint8Array(n)),R};function J(a,e,l){const t=a.slice();return t[2]=e[l],t}function ie(a){return{c:d,l:d,m:d,p:d,d}}function ce(a){let e,l=a[1].get(0).year+"",t,n,o,m=a[1].get(0).president+"",h,b,k=a[1].get(0).party+"",u,p,E,$=[...a[1]],v=[];for(let s=0;s<$.length;s+=1)v[s]=j(J(a,$,s));return{c(){e=A("h1"),t=S(l),n=L(),o=A("h3"),h=S(m),b=S(", "),u=S(k),p=L();for(let s=0;s<v.length;s+=1)v[s].c();E=U()},l(s){e=q(s,"H1",{});var c=O(e);t=T(c,l),c.forEach(f),n=P(s),o=q(s,"H3",{});var i=O(o);h=T(i,m),b=T(i,", "),u=T(i,k),i.forEach(f),p=P(s);for(let r=0;r<v.length;r+=1)v[r].l(s);E=U()},m(s,c){w(s,e,c),y(e,t),w(s,n,c),w(s,o,c),y(o,h),y(o,b),y(o,u),w(s,p,c);for(let i=0;i<v.length;i+=1)v[i].m(s,c);w(s,E,c)},p(s,c){if(c&1&&l!==(l=s[1].get(0).year+"")&&N(t,l),c&1&&m!==(m=s[1].get(0).president+"")&&N(h,m),c&1&&k!==(k=s[1].get(0).party+"")&&N(u,k),c&1){$=[...s[1]];let i;for(i=0;i<$.length;i+=1){const r=J(s,$,i);v[i]?v[i].p(r,c):(v[i]=j(r),v[i].c(),v[i].m(E.parentNode,E))}for(;i<v.length;i+=1)v[i].d(1);v.length=$.length}},d(s){s&&f(e),s&&f(n),s&&f(o),s&&f(p),Y(v,s),s&&f(E)}}}function j(a){let e,l,t=a[2].paragraph+"",n,o,m=a[2]["nc:text"]+"",h,b;return{c(){e=A("p"),l=S("("),n=S(t),o=S(") "),h=S(m),this.h()},l(k){e=q(k,"P",{id:!0});var u=O(e);l=T(u,"("),n=T(u,t),o=T(u,") "),h=T(u,m),u.forEach(f),this.h()},h(){C(e,"id",b="para-"+a[2].paragraph)},m(k,u){w(k,e,u),y(e,l),y(e,n),y(e,o),y(e,h)},p(k,u){u&1&&t!==(t=k[2].paragraph+"")&&N(n,t),u&1&&m!==(m=k[2]["nc:text"]+"")&&N(h,m),u&1&&b!==(b="para-"+k[2].paragraph)&&C(e,"id",b)},d(k){k&&f(e)}}}function ue(a){return{c:d,l:d,m:d,p:d,d}}function fe(a){let e,l,t={ctx:a,current:null,token:null,hasCatch:!1,pending:ue,then:ce,catch:ie,value:1};return B(l=a[0],t),{c(){e=U(),t.block.c()},l(n){e=U(),t.block.l(n)},m(n,o){w(n,e,o),t.block.m(n,t.anchor=o),t.mount=()=>e.parentNode,t.anchor=e},p(n,[o]){a=n,t.ctx=a,o&1&&l!==(l=a[0])&&B(l,t)||X(t,a,o)},i:d,o:d,d(n){n&&f(e),t.block.d(n),t.token=null,t=null}}}function pe(a,e,l){let{results:t}=e;return a.$$set=n=>{"results"in n&&l(0,t=n.results)},[t]}class he extends W{constructor(e){super();F(this,e,pe,fe,I,{results:0})}}function _e(a){let e;return{c(){e=A("div"),this.h()},l(l){e=q(l,"DIV",{id:!0,class:!0}),O(e).forEach(f),this.h()},h(){C(e,"id","loading"),C(e,"class","svelte-qfy6rn")},m(l,t){w(l,e,t)},p:d,i:d,o:d,d(l){l&&f(e)}}}class de extends W{constructor(e){super();F(this,e,null,_e,I,{})}}function K(a,e,l){const t=a.slice();return t[10]=e[l],t}function Q(a){let e,l=a[10]+"",t,n,o;function m(){return a[4](a[10])}return{c(){e=A("div"),t=S(l),this.h()},l(h){e=q(h,"DIV",{class:!0});var b=O(e);t=T(b,l),b.forEach(f),this.h()},h(){C(e,"class","year svelte-c41948")},m(h,b){w(h,e,b),y(e,t),n||(o=re(e,"click",m),n=!0)},p(h,b){a=h},d(h){h&&f(e),n=!1,o()}}}function me(a){return{c:d,l:d,m:d,p:d,i:d,o:d,d}}function ke(a){let e,l;return e=new he({props:{results:a[2]}}),{c(){z(e.$$.fragment)},l(t){Z(e.$$.fragment,t)},m(t,n){x(e,t,n),l=!0},p(t,n){const o={};n&4&&(o.results=t[2]),e.$set(o)},i(t){l||(V(e.$$.fragment,t),l=!0)},o(t){H(e.$$.fragment,t),l=!1},d(t){ee(e,t)}}}function be(a){let e,l,t;return l=new de({}),{c(){e=S(`Preparing database...
  `),z(l.$$.fragment)},l(n){e=T(n,`Preparing database...
  `),Z(l.$$.fragment,n)},m(n,o){w(n,e,o),x(l,n,o),t=!0},p:d,i(n){t||(V(l.$$.fragment,n),t=!0)},o(n){H(l.$$.fragment,n),t=!1},d(n){n&&f(e),ee(l,n)}}}function ve(a){let e,l,t,n,o,m,h,b,k,u,p,E,$,v,s=a[3],c=[];for(let r=0;r<s.length;r+=1)c[r]=Q(K(a,s,r));let i={ctx:a,current:null,token:null,hasCatch:!1,pending:be,then:ke,catch:me,value:9,blocks:[,,,]};return B($=a[1],i),{c(){e=A("h1"),l=S("Duck DB Svelte-kit demo"),t=L(),n=A("div"),o=S(`This is a demo of a static, database-driven page using duckdb WASM.
  All the primary text is stored in a parquet file structured to the `),m=A("a"),h=S("nonconsumptive"),b=S(` text sharing spec. On load, it gets a copy of duckdb WASM and uses it to mount 
  the parquet file into the database. Clicking on any year will load the state of the Union address for that year.`),k=L(),u=A("div");for(let r=0;r<c.length;r+=1)c[r].c();p=L(),E=U(),i.block.c(),this.h()},l(r){e=q(r,"H1",{});var g=O(e);l=T(g,"Duck DB Svelte-kit demo"),g.forEach(f),t=P(r),n=q(r,"DIV",{class:!0});var _=O(n);o=T(_,`This is a demo of a static, database-driven page using duckdb WASM.
  All the primary text is stored in a parquet file structured to the `),m=q(_,"A",{href:!0});var M=O(m);h=T(M,"nonconsumptive"),M.forEach(f),b=T(_,` text sharing spec. On load, it gets a copy of duckdb WASM and uses it to mount 
  the parquet file into the database. Clicking on any year will load the state of the Union address for that year.`),_.forEach(f),k=P(r),u=q(r,"DIV",{class:!0});var G=O(u);for(let D=0;D<c.length;D+=1)c[D].l(G);G.forEach(f),p=P(r),E=U(),i.block.l(r),this.h()},h(){C(m,"href","https://nonconsumptive.org"),C(n,"class","description"),C(u,"class","years svelte-c41948")},m(r,g){w(r,e,g),y(e,l),w(r,t,g),w(r,n,g),y(n,o),y(n,m),y(m,h),y(n,b),w(r,k,g),w(r,u,g);for(let _=0;_<c.length;_+=1)c[_].m(u,null);w(r,p,g),w(r,E,g),i.block.m(r,i.anchor=g),i.mount=()=>E.parentNode,i.anchor=E,v=!0},p(r,[g]){if(a=r,g&9){s=a[3];let _;for(_=0;_<s.length;_+=1){const M=K(a,s,_);c[_]?c[_].p(M,g):(c[_]=Q(M),c[_].c(),c[_].m(u,null))}for(;_<c.length;_+=1)c[_].d(1);c.length=s.length}i.ctx=a,g&2&&$!==($=a[1])&&B($,i)||X(i,a,g)},i(r){v||(V(i.block),v=!0)},o(r){for(let g=0;g<3;g+=1){const _=i.blocks[g];H(_)}v=!1},d(r){r&&f(e),r&&f(t),r&&f(n),r&&f(k),r&&f(u),Y(c,r),r&&f(p),r&&f(E),i.block.d(r),i.token=null,i=null}}}function ge(a,e,l){let t,n,o;async function m(){console.log("REPREPPING");const p=await t;await p.query("CREATE TABLE p1 AS SELECT * FROM parquet_scan('SOTU.parquet')"),await p.query(`CREATE VIEW wordcounts_raw AS SELECT * FROM (SELECT "@id" id, 
        UNNEST("nc:unigrams").word0 as word, 
        UNNEST("nc:unigrams").count as count FROM
         p1) t1
    `),await p.query(`CREATE TABLE wordcounts AS SELECT * FROM 
      wordcounts_raw
      NATURAL JOIN (SELECT word, SUM(count) as tot, COUNT(*) AS df FROM wordcounts_raw GROUP BY word) t2
    `)}async function h(){const p=await oe(`${se}/SOTU.parquet`,"SOTU.parquet");return l(1,t=p.connect()),m(),t}h();const b=[];for(let p=1934;p<2021;p++)b.push(p);async function k(p){const E=await t;l(2,n=E.query(`
      SELECT * FROM parquet_scan('SOTU.parquet') WHERE year == ${p}
    `))}const u=p=>l(0,o=p);return a.$$.update=()=>{a.$$.dirty&3&&t.then(p=>k(o))},l(1,t=new Promise(()=>{})),l(2,n=new Promise(()=>{})),l(0,o=1936),[o,t,n,b,u]}class ye extends W{constructor(e){super();F(this,e,ge,ve,I,{})}}export{ye as default};