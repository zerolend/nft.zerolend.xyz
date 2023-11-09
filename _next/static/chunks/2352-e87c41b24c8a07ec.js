"use strict";(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2352],{90482:function(n,e,i){var r,t,s=9e15,o=1e9,u="0123456789abcdef",c="2.3025850929940456840179914546843642076011014886287729760333279009675726096773524802359972050895982983419677840422862486334095254650828067566662873690987816894829072083255546808437998948262331985283935053089653777326288461633662222876982198867465436674744042432743651550489343149393914796194044002221051017141748003688084012647080685567743216228355220114804663715659121373450747856947683463616792101806445070648000277502684916746550586856935673420670581136429224554405758925724208241314695689016758940256776311356919292033376587141660230105703089634572075440370847469940168269282808481184289314848524948644871927809676271275775397027668605952496716674183485704422507197965004714951050492214776567636938662976979522110718264549734772662425709429322582798502585509785265383207606726317164309505995087807523710333101197857547331541421808427543863591778117054309827482385045648019095610299291824318237525357709750539565187697510374970888692180205189339507238539205144634197265287286965110862571492198849978748873771345686209167058",f="3.1415926535897932384626433832795028841971693993751058209749445923078164062862089986280348253421170679821480865132823066470938446095505822317253594081284811174502841027019385211055596446229489549303819644288109756659334461284756482337867831652712019091456485669234603486104543266482133936072602491412737245870066063155881748815209209628292540917153643678925903600113305305488204665213841469519415116094330572703657595919530921861173819326117931051185480744623799627495673518857527248912279381830119491298336733624406566430860213949463952247371907021798609437027705392171762931767523846748184676694051320005681271452635608277857713427577896091736371787214684409012249534301465495853710507922796892589235420199561121290219608640344181598136297747713099605187072113499999983729780499510597317328160963185950244594553469083026425223082533446850352619311881710100031378387528865875332083814206171776691473035982534904287554687311595628638823537875937519577818577805321712268066130019278766111959092164201989380952572010654858632789",a={precision:20,rounding:4,modulo:1,toExpNeg:-7,toExpPos:21,minE:-s,maxE:s,crypto:!1},h=!0,d="[DecimalError] ",l=d+"Invalid argument: ",g=d+"Precision limit exceeded",p=d+"crypto unavailable",w="[object Decimal]",m=Math.floor,v=Math.pow,N=/^0b([01]+(\.[01]*)?|\.[01]+)(p[+-]?\d+)?$/i,b=/^0x([0-9a-f]+(\.[0-9a-f]*)?|\.[0-9a-f]+)(p[+-]?\d+)?$/i,E=/^0o([0-7]+(\.[0-7]*)?|\.[0-7]+)(p[+-]?\d+)?$/i,x=/^(\d+(\.\d*)?|\.\d+)(e[+-]?\d+)?$/i,y=1e7,M=c.length-1,q=f.length-1,O={toStringTag:w};function F(n){var e,i,r,t=n.length-1,s="",o=n[0];if(t>0){for(s+=o,e=1;e<t;e++)(i=7-(r=n[e]+"").length)&&(s+=U(i)),s+=r;(i=7-(r=(o=n[e])+"").length)&&(s+=U(i))}else if(0===o)return"0";for(;o%10===0;)o/=10;return s+o}function Z(n,e,i){if(n!==~~n||n<e||n>i)throw Error(l+n)}function A(n,e,i,r){var t,s,o,u;for(s=n[0];s>=10;s/=10)--e;return--e<0?(e+=7,t=0):(t=Math.ceil((e+1)/7),e%=7),s=v(10,7-e),u=n[t]%s|0,null==r?e<3?(0==e?u=u/100|0:1==e&&(u=u/10|0),o=i<4&&99999==u||i>3&&49999==u||5e4==u||0==u):o=(i<4&&u+1==s||i>3&&u+1==s/2)&&(n[t+1]/s/100|0)==v(10,e-2)-1||(u==s/2||0==u)&&0==(n[t+1]/s/100|0):e<4?(0==e?u=u/1e3|0:1==e?u=u/100|0:2==e&&(u=u/10|0),o=(r||i<4)&&9999==u||!r&&i>3&&4999==u):o=((r||i<4)&&u+1==s||!r&&i>3&&u+1==s/2)&&(n[t+1]/s/1e3|0)==v(10,e-3)-1,o}function D(n,e,i){for(var r,t,s=[0],o=0,c=n.length;o<c;){for(t=s.length;t--;)s[t]*=e;for(s[0]+=u.indexOf(n.charAt(o++)),r=0;r<s.length;r++)s[r]>i-1&&(void 0===s[r+1]&&(s[r+1]=0),s[r+1]+=s[r]/i|0,s[r]%=i)}return s.reverse()}O.absoluteValue=O.abs=function(){var n=new this.constructor(this);return n.s<0&&(n.s=1),S(n)},O.ceil=function(){return S(new this.constructor(this),this.e+1,2)},O.clampedTo=O.clamp=function(n,e){var i=this,r=i.constructor;if(n=new r(n),e=new r(e),!n.s||!e.s)return new r(NaN);if(n.gt(e))throw Error(l+e);return i.cmp(n)<0?n:i.cmp(e)>0?e:new r(i)},O.comparedTo=O.cmp=function(n){var e,i,r,t,s=this,o=s.d,u=(n=new s.constructor(n)).d,c=s.s,f=n.s;if(!o||!u)return c&&f?c!==f?c:o===u?0:!o^c<0?1:-1:NaN;if(!o[0]||!u[0])return o[0]?c:u[0]?-f:0;if(c!==f)return c;if(s.e!==n.e)return s.e>n.e^c<0?1:-1;for(e=0,i=(r=o.length)<(t=u.length)?r:t;e<i;++e)if(o[e]!==u[e])return o[e]>u[e]^c<0?1:-1;return r===t?0:r>t^c<0?1:-1},O.cosine=O.cos=function(){var n,e,i=this,r=i.constructor;return i.d?i.d[0]?(n=r.precision,e=r.rounding,r.precision=n+Math.max(i.e,i.sd())+7,r.rounding=1,i=function(n,e){var i,r,t;if(e.isZero())return e;(r=e.d.length)<32?t=(1/z(4,i=Math.ceil(r/3))).toString():(i=16,t="2.3283064365386962890625e-10");n.precision+=i,e=J(n,1,e.times(t),new n(1));for(var s=i;s--;){var o=e.times(e);e=o.times(o).minus(o).times(8).plus(1)}return n.precision-=i,e}(r,G(r,i)),r.precision=n,r.rounding=e,S(2==t||3==t?i.neg():i,n,e,!0)):new r(1):new r(NaN)},O.cubeRoot=O.cbrt=function(){var n,e,i,r,t,s,o,u,c,f,a=this,d=a.constructor;if(!a.isFinite()||a.isZero())return new d(a);for(h=!1,(s=a.s*v(a.s*a,1/3))&&Math.abs(s)!=1/0?r=new d(s.toString()):(i=F(a.d),(s=((n=a.e)-i.length+1)%3)&&(i+=1==s||-2==s?"0":"00"),s=v(i,1/3),n=m((n+1)/3)-(n%3==(n<0?-1:2)),(r=new d(i=s==1/0?"5e"+n:(i=s.toExponential()).slice(0,i.indexOf("e")+1)+n)).s=a.s),o=(n=d.precision)+3;;)if(f=(c=(u=r).times(u).times(u)).plus(a),r=_(f.plus(a).times(u),f.plus(c),o+2,1),F(u.d).slice(0,o)===(i=F(r.d)).slice(0,o)){if("9999"!=(i=i.slice(o-3,o+1))&&(t||"4999"!=i)){+i&&(+i.slice(1)||"5"!=i.charAt(0))||(S(r,n+1,1),e=!r.times(r).times(r).eq(a));break}if(!t&&(S(u,n+1,0),u.times(u).times(u).eq(a))){r=u;break}o+=4,t=1}return h=!0,S(r,n,d.rounding,e)},O.decimalPlaces=O.dp=function(){var n,e=this.d,i=NaN;if(e){if(i=7*((n=e.length-1)-m(this.e/7)),n=e[n])for(;n%10==0;n/=10)i--;i<0&&(i=0)}return i},O.dividedBy=O.div=function(n){return _(this,new this.constructor(n))},O.dividedToIntegerBy=O.divToInt=function(n){var e=this.constructor;return S(_(this,new e(n),0,1,1),e.precision,e.rounding)},O.equals=O.eq=function(n){return 0===this.cmp(n)},O.floor=function(){return S(new this.constructor(this),this.e+1,3)},O.greaterThan=O.gt=function(n){return this.cmp(n)>0},O.greaterThanOrEqualTo=O.gte=function(n){var e=this.cmp(n);return 1==e||0===e},O.hyperbolicCosine=O.cosh=function(){var n,e,i,r,t,s=this,o=s.constructor,u=new o(1);if(!s.isFinite())return new o(s.s?1/0:NaN);if(s.isZero())return u;i=o.precision,r=o.rounding,o.precision=i+Math.max(s.e,s.sd())+4,o.rounding=1,(t=s.d.length)<32?e=(1/z(4,n=Math.ceil(t/3))).toString():(n=16,e="2.3283064365386962890625e-10"),s=J(o,1,s.times(e),new o(1),!0);for(var c,f=n,a=new o(8);f--;)c=s.times(s),s=u.minus(c.times(a.minus(c.times(a))));return S(s,o.precision=i,o.rounding=r,!0)},O.hyperbolicSine=O.sinh=function(){var n,e,i,r,t=this,s=t.constructor;if(!t.isFinite()||t.isZero())return new s(t);if(e=s.precision,i=s.rounding,s.precision=e+Math.max(t.e,t.sd())+4,s.rounding=1,(r=t.d.length)<3)t=J(s,2,t,t,!0);else{n=(n=1.4*Math.sqrt(r))>16?16:0|n,t=J(s,2,t=t.times(1/z(5,n)),t,!0);for(var o,u=new s(5),c=new s(16),f=new s(20);n--;)o=t.times(t),t=t.times(u.plus(o.times(c.times(o).plus(f))))}return s.precision=e,s.rounding=i,S(t,e,i,!0)},O.hyperbolicTangent=O.tanh=function(){var n,e,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(n=r.precision,e=r.rounding,r.precision=n+7,r.rounding=1,_(i.sinh(),i.cosh(),r.precision=n,r.rounding=e)):new r(i.s)},O.inverseCosine=O.acos=function(){var n,e=this,i=e.constructor,r=e.abs().cmp(1),t=i.precision,s=i.rounding;return-1!==r?0===r?e.isNeg()?T(i,t,s):new i(0):new i(NaN):e.isZero()?T(i,t+4,s).times(.5):(i.precision=t+6,i.rounding=1,e=e.asin(),n=T(i,t+4,s).times(.5),i.precision=t,i.rounding=s,n.minus(e))},O.inverseHyperbolicCosine=O.acosh=function(){var n,e,i=this,r=i.constructor;return i.lte(1)?new r(i.eq(1)?0:NaN):i.isFinite()?(n=r.precision,e=r.rounding,r.precision=n+Math.max(Math.abs(i.e),i.sd())+4,r.rounding=1,h=!1,i=i.times(i).minus(1).sqrt().plus(i),h=!0,r.precision=n,r.rounding=e,i.ln()):new r(i)},O.inverseHyperbolicSine=O.asinh=function(){var n,e,i=this,r=i.constructor;return!i.isFinite()||i.isZero()?new r(i):(n=r.precision,e=r.rounding,r.precision=n+2*Math.max(Math.abs(i.e),i.sd())+6,r.rounding=1,h=!1,i=i.times(i).plus(1).sqrt().plus(i),h=!0,r.precision=n,r.rounding=e,i.ln())},O.inverseHyperbolicTangent=O.atanh=function(){var n,e,i,r,t=this,s=t.constructor;return t.isFinite()?t.e>=0?new s(t.abs().eq(1)?t.s/0:t.isZero()?t:NaN):(n=s.precision,e=s.rounding,r=t.sd(),Math.max(r,n)<2*-t.e-1?S(new s(t),n,e,!0):(s.precision=i=r-t.e,t=_(t.plus(1),new s(1).minus(t),i+n,1),s.precision=n+4,s.rounding=1,t=t.ln(),s.precision=n,s.rounding=e,t.times(.5))):new s(NaN)},O.inverseSine=O.asin=function(){var n,e,i,r,t=this,s=t.constructor;return t.isZero()?new s(t):(e=t.abs().cmp(1),i=s.precision,r=s.rounding,-1!==e?0===e?((n=T(s,i+4,r).times(.5)).s=t.s,n):new s(NaN):(s.precision=i+6,s.rounding=1,t=t.div(new s(1).minus(t.times(t)).sqrt().plus(1)).atan(),s.precision=i,s.rounding=r,t.times(2)))},O.inverseTangent=O.atan=function(){var n,e,i,r,t,s,o,u,c,f=this,a=f.constructor,d=a.precision,l=a.rounding;if(f.isFinite()){if(f.isZero())return new a(f);if(f.abs().eq(1)&&d+4<=q)return(o=T(a,d+4,l).times(.25)).s=f.s,o}else{if(!f.s)return new a(NaN);if(d+4<=q)return(o=T(a,d+4,l).times(.5)).s=f.s,o}for(a.precision=u=d+10,a.rounding=1,n=i=Math.min(28,u/7+2|0);n;--n)f=f.div(f.times(f).plus(1).sqrt().plus(1));for(h=!1,e=Math.ceil(u/7),r=1,c=f.times(f),o=new a(f),t=f;-1!==n;)if(t=t.times(c),s=o.minus(t.div(r+=2)),t=t.times(c),void 0!==(o=s.plus(t.div(r+=2))).d[e])for(n=e;o.d[n]===s.d[n]&&n--;);return i&&(o=o.times(2<<i-1)),h=!0,S(o,a.precision=d,a.rounding=l,!0)},O.isFinite=function(){return!!this.d},O.isInteger=O.isInt=function(){return!!this.d&&m(this.e/7)>this.d.length-2},O.isNaN=function(){return!this.s},O.isNegative=O.isNeg=function(){return this.s<0},O.isPositive=O.isPos=function(){return this.s>0},O.isZero=function(){return!!this.d&&0===this.d[0]},O.lessThan=O.lt=function(n){return this.cmp(n)<0},O.lessThanOrEqualTo=O.lte=function(n){return this.cmp(n)<1},O.logarithm=O.log=function(n){var e,i,r,t,s,o,u,c,f=this,a=f.constructor,d=a.precision,l=a.rounding;if(null==n)n=new a(10),e=!0;else{if(i=(n=new a(n)).d,n.s<0||!i||!i[0]||n.eq(1))return new a(NaN);e=n.eq(10)}if(i=f.d,f.s<0||!i||!i[0]||f.eq(1))return new a(i&&!i[0]?-1/0:1!=f.s?NaN:i?0:1/0);if(e)if(i.length>1)s=!0;else{for(t=i[0];t%10===0;)t/=10;s=1!==t}if(h=!1,o=V(f,u=d+5),r=e?R(a,u+10):V(n,u),A((c=_(o,r,u,1)).d,t=d,l))do{if(o=V(f,u+=10),r=e?R(a,u+10):V(n,u),c=_(o,r,u,1),!s){+F(c.d).slice(t+1,t+15)+1==1e14&&(c=S(c,d+1,0));break}}while(A(c.d,t+=10,l));return h=!0,S(c,d,l)},O.minus=O.sub=function(n){var e,i,r,t,s,o,u,c,f,a,d,l,g=this,p=g.constructor;if(n=new p(n),!g.d||!n.d)return g.s&&n.s?g.d?n.s=-n.s:n=new p(n.d||g.s!==n.s?g:NaN):n=new p(NaN),n;if(g.s!=n.s)return n.s=-n.s,g.plus(n);if(f=g.d,l=n.d,u=p.precision,c=p.rounding,!f[0]||!l[0]){if(l[0])n.s=-n.s;else{if(!f[0])return new p(3===c?-0:0);n=new p(g)}return h?S(n,u,c):n}if(i=m(n.e/7),a=m(g.e/7),f=f.slice(),s=a-i){for((d=s<0)?(e=f,s=-s,o=l.length):(e=l,i=a,o=f.length),s>(r=Math.max(Math.ceil(u/7),o)+2)&&(s=r,e.length=1),e.reverse(),r=s;r--;)e.push(0);e.reverse()}else{for((d=(r=f.length)<(o=l.length))&&(o=r),r=0;r<o;r++)if(f[r]!=l[r]){d=f[r]<l[r];break}s=0}for(d&&(e=f,f=l,l=e,n.s=-n.s),o=f.length,r=l.length-o;r>0;--r)f[o++]=0;for(r=l.length;r>s;){if(f[--r]<l[r]){for(t=r;t&&0===f[--t];)f[t]=y-1;--f[t],f[r]+=y}f[r]-=l[r]}for(;0===f[--o];)f.pop();for(;0===f[0];f.shift())--i;return f[0]?(n.d=f,n.e=P(f,i),h?S(n,u,c):n):new p(3===c?-0:0)},O.modulo=O.mod=function(n){var e,i=this,r=i.constructor;return n=new r(n),!i.d||!n.s||n.d&&!n.d[0]?new r(NaN):!n.d||i.d&&!i.d[0]?S(new r(i),r.precision,r.rounding):(h=!1,9==r.modulo?(e=_(i,n.abs(),0,3,1)).s*=n.s:e=_(i,n,0,r.modulo,1),e=e.times(n),h=!0,i.minus(e))},O.naturalExponential=O.exp=function(){return B(this)},O.naturalLogarithm=O.ln=function(){return V(this)},O.negated=O.neg=function(){var n=new this.constructor(this);return n.s=-n.s,S(n)},O.plus=O.add=function(n){var e,i,r,t,s,o,u,c,f,a,d=this,l=d.constructor;if(n=new l(n),!d.d||!n.d)return d.s&&n.s?d.d||(n=new l(n.d||d.s===n.s?d:NaN)):n=new l(NaN),n;if(d.s!=n.s)return n.s=-n.s,d.minus(n);if(f=d.d,a=n.d,u=l.precision,c=l.rounding,!f[0]||!a[0])return a[0]||(n=new l(d)),h?S(n,u,c):n;if(s=m(d.e/7),r=m(n.e/7),f=f.slice(),t=s-r){for(t<0?(i=f,t=-t,o=a.length):(i=a,r=s,o=f.length),t>(o=(s=Math.ceil(u/7))>o?s+1:o+1)&&(t=o,i.length=1),i.reverse();t--;)i.push(0);i.reverse()}for((o=f.length)-(t=a.length)<0&&(t=o,i=a,a=f,f=i),e=0;t;)e=(f[--t]=f[t]+a[t]+e)/y|0,f[t]%=y;for(e&&(f.unshift(e),++r),o=f.length;0==f[--o];)f.pop();return n.d=f,n.e=P(f,r),h?S(n,u,c):n},O.precision=O.sd=function(n){var e,i=this;if(void 0!==n&&n!==!!n&&1!==n&&0!==n)throw Error(l+n);return i.d?(e=L(i.d),n&&i.e+1>e&&(e=i.e+1)):e=NaN,e},O.round=function(){var n=this,e=n.constructor;return S(new e(n),n.e+1,e.rounding)},O.sine=O.sin=function(){var n,e,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(n=r.precision,e=r.rounding,r.precision=n+Math.max(i.e,i.sd())+7,r.rounding=1,i=function(n,e){var i,r=e.d.length;if(r<3)return e.isZero()?e:J(n,2,e,e);i=(i=1.4*Math.sqrt(r))>16?16:0|i,e=e.times(1/z(5,i)),e=J(n,2,e,e);for(var t,s=new n(5),o=new n(16),u=new n(20);i--;)t=e.times(e),e=e.times(s.plus(t.times(o.times(t).minus(u))));return e}(r,G(r,i)),r.precision=n,r.rounding=e,S(t>2?i.neg():i,n,e,!0)):new r(NaN)},O.squareRoot=O.sqrt=function(){var n,e,i,r,t,s,o=this,u=o.d,c=o.e,f=o.s,a=o.constructor;if(1!==f||!u||!u[0])return new a(!f||f<0&&(!u||u[0])?NaN:u?o:1/0);for(h=!1,0==(f=Math.sqrt(+o))||f==1/0?(((e=F(u)).length+c)%2==0&&(e+="0"),f=Math.sqrt(e),c=m((c+1)/2)-(c<0||c%2),r=new a(e=f==1/0?"5e"+c:(e=f.toExponential()).slice(0,e.indexOf("e")+1)+c)):r=new a(f.toString()),i=(c=a.precision)+3;;)if(r=(s=r).plus(_(o,s,i+2,1)).times(.5),F(s.d).slice(0,i)===(e=F(r.d)).slice(0,i)){if("9999"!=(e=e.slice(i-3,i+1))&&(t||"4999"!=e)){+e&&(+e.slice(1)||"5"!=e.charAt(0))||(S(r,c+1,1),n=!r.times(r).eq(o));break}if(!t&&(S(s,c+1,0),s.times(s).eq(o))){r=s;break}i+=4,t=1}return h=!0,S(r,c,a.rounding,n)},O.tangent=O.tan=function(){var n,e,i=this,r=i.constructor;return i.isFinite()?i.isZero()?new r(i):(n=r.precision,e=r.rounding,r.precision=n+10,r.rounding=1,(i=i.sin()).s=1,i=_(i,new r(1).minus(i.times(i)).sqrt(),n+10,0),r.precision=n,r.rounding=e,S(2==t||4==t?i.neg():i,n,e,!0)):new r(NaN)},O.times=O.mul=function(n){var e,i,r,t,s,o,u,c,f,a=this,d=a.constructor,l=a.d,g=(n=new d(n)).d;if(n.s*=a.s,!l||!l[0]||!g||!g[0])return new d(!n.s||l&&!l[0]&&!g||g&&!g[0]&&!l?NaN:l&&g?0*n.s:n.s/0);for(i=m(a.e/7)+m(n.e/7),(c=l.length)<(f=g.length)&&(s=l,l=g,g=s,o=c,c=f,f=o),s=[],r=o=c+f;r--;)s.push(0);for(r=f;--r>=0;){for(e=0,t=c+r;t>r;)u=s[t]+g[r]*l[t-r-1]+e,s[t--]=u%y|0,e=u/y|0;s[t]=(s[t]+e)%y|0}for(;!s[--o];)s.pop();return e?++i:s.shift(),n.d=s,n.e=P(s,i),h?S(n,d.precision,d.rounding):n},O.toBinary=function(n,e){return K(this,2,n,e)},O.toDecimalPlaces=O.toDP=function(n,e){var i=this,r=i.constructor;return i=new r(i),void 0===n?i:(Z(n,0,o),void 0===e?e=r.rounding:Z(e,0,8),S(i,n+i.e+1,e))},O.toExponential=function(n,e){var i,r=this,t=r.constructor;return void 0===n?i=k(r,!0):(Z(n,0,o),void 0===e?e=t.rounding:Z(e,0,8),i=k(r=S(new t(r),n+1,e),!0,n+1)),r.isNeg()&&!r.isZero()?"-"+i:i},O.toFixed=function(n,e){var i,r,t=this,s=t.constructor;return void 0===n?i=k(t):(Z(n,0,o),void 0===e?e=s.rounding:Z(e,0,8),i=k(r=S(new s(t),n+t.e+1,e),!1,n+r.e+1)),t.isNeg()&&!t.isZero()?"-"+i:i},O.toFraction=function(n){var e,i,r,t,s,o,u,c,f,a,d,g,p=this,w=p.d,m=p.constructor;if(!w)return new m(p);if(f=i=new m(1),r=c=new m(0),o=(s=(e=new m(r)).e=L(w)-p.e-1)%7,e.d[0]=v(10,o<0?7+o:o),null==n)n=s>0?e:f;else{if(!(u=new m(n)).isInt()||u.lt(f))throw Error(l+u);n=u.gt(e)?s>0?e:f:u}for(h=!1,u=new m(F(w)),a=m.precision,m.precision=s=7*w.length*2;d=_(u,e,0,1,1),1!=(t=i.plus(d.times(r))).cmp(n);)i=r,r=t,t=f,f=c.plus(d.times(t)),c=t,t=e,e=u.minus(d.times(t)),u=t;return t=_(n.minus(i),r,0,1,1),c=c.plus(t.times(f)),i=i.plus(t.times(r)),c.s=f.s=p.s,g=_(f,r,s,1).minus(p).abs().cmp(_(c,i,s,1).minus(p).abs())<1?[f,r]:[c,i],m.precision=a,h=!0,g},O.toHexadecimal=O.toHex=function(n,e){return K(this,16,n,e)},O.toNearest=function(n,e){var i=this,r=i.constructor;if(i=new r(i),null==n){if(!i.d)return i;n=new r(1),e=r.rounding}else{if(n=new r(n),void 0===e?e=r.rounding:Z(e,0,8),!i.d)return n.s?i:n;if(!n.d)return n.s&&(n.s=i.s),n}return n.d[0]?(h=!1,i=_(i,n,0,e,1).times(n),h=!0,S(i)):(n.s=i.s,i=n),i},O.toNumber=function(){return+this},O.toOctal=function(n,e){return K(this,8,n,e)},O.toPower=O.pow=function(n){var e,i,r,t,s,o,u=this,c=u.constructor,f=+(n=new c(n));if(!u.d||!n.d||!u.d[0]||!n.d[0])return new c(v(+u,f));if((u=new c(u)).eq(1))return u;if(r=c.precision,s=c.rounding,n.eq(1))return S(u,r,s);if((e=m(n.e/7))>=n.d.length-1&&(i=f<0?-f:f)<=9007199254740991)return t=C(c,u,i,r),n.s<0?new c(1).div(t):S(t,r,s);if((o=u.s)<0){if(e<n.d.length-1)return new c(NaN);if(0==(1&n.d[e])&&(o=1),0==u.e&&1==u.d[0]&&1==u.d.length)return u.s=o,u}return(e=0!=(i=v(+u,f))&&isFinite(i)?new c(i+"").e:m(f*(Math.log("0."+F(u.d))/Math.LN10+u.e+1)))>c.maxE+1||e<c.minE-1?new c(e>0?o/0:0):(h=!1,c.rounding=u.s=1,i=Math.min(12,(e+"").length),(t=B(n.times(V(u,r+i)),r)).d&&A((t=S(t,r+5,1)).d,r,s)&&(e=r+10,+F((t=S(B(n.times(V(u,e+i)),e),e+5,1)).d).slice(r+1,r+15)+1==1e14&&(t=S(t,r+1,0))),t.s=o,h=!0,c.rounding=s,S(t,r,s))},O.toPrecision=function(n,e){var i,r=this,t=r.constructor;return void 0===n?i=k(r,r.e<=t.toExpNeg||r.e>=t.toExpPos):(Z(n,1,o),void 0===e?e=t.rounding:Z(e,0,8),i=k(r=S(new t(r),n,e),n<=r.e||r.e<=t.toExpNeg,n)),r.isNeg()&&!r.isZero()?"-"+i:i},O.toSignificantDigits=O.toSD=function(n,e){var i=this.constructor;return void 0===n?(n=i.precision,e=i.rounding):(Z(n,1,o),void 0===e?e=i.rounding:Z(e,0,8)),S(new i(this),n,e)},O.toString=function(){var n=this,e=n.constructor,i=k(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()&&!n.isZero()?"-"+i:i},O.truncated=O.trunc=function(){return S(new this.constructor(this),this.e+1,1)},O.valueOf=O.toJSON=function(){var n=this,e=n.constructor,i=k(n,n.e<=e.toExpNeg||n.e>=e.toExpPos);return n.isNeg()?"-"+i:i};var _=function(){function n(n,e,i){var r,t=0,s=n.length;for(n=n.slice();s--;)r=n[s]*e+t,n[s]=r%i|0,t=r/i|0;return t&&n.unshift(t),n}function e(n,e,i,r){var t,s;if(i!=r)s=i>r?1:-1;else for(t=s=0;t<i;t++)if(n[t]!=e[t]){s=n[t]>e[t]?1:-1;break}return s}function i(n,e,i,r){for(var t=0;i--;)n[i]-=t,t=n[i]<e[i]?1:0,n[i]=t*r+n[i]-e[i];for(;!n[0]&&n.length>1;)n.shift()}return function(t,s,o,u,c,f){var a,h,d,l,g,p,w,v,N,b,E,x,M,q,O,F,Z,A,D,_,k=t.constructor,P=t.s==s.s?1:-1,R=t.d,T=s.d;if(!R||!R[0]||!T||!T[0])return new k(t.s&&s.s&&(R?!T||R[0]!=T[0]:T)?R&&0==R[0]||!T?0*P:P/0:NaN);for(f?(g=1,h=t.e-s.e):(f=y,g=7,h=m(t.e/g)-m(s.e/g)),D=T.length,Z=R.length,b=(N=new k(P)).d=[],d=0;T[d]==(R[d]||0);d++);if(T[d]>(R[d]||0)&&h--,null==o?(q=o=k.precision,u=k.rounding):q=c?o+(t.e-s.e)+1:o,q<0)b.push(1),p=!0;else{if(q=q/g+2|0,d=0,1==D){for(l=0,T=T[0],q++;(d<Z||l)&&q--;d++)O=l*f+(R[d]||0),b[d]=O/T|0,l=O%T|0;p=l||d<Z}else{for((l=f/(T[0]+1)|0)>1&&(T=n(T,l,f),R=n(R,l,f),D=T.length,Z=R.length),F=D,x=(E=R.slice(0,D)).length;x<D;)E[x++]=0;(_=T.slice()).unshift(0),A=T[0],T[1]>=f/2&&++A;do{l=0,(a=e(T,E,D,x))<0?(M=E[0],D!=x&&(M=M*f+(E[1]||0)),(l=M/A|0)>1?(l>=f&&(l=f-1),1==(a=e(w=n(T,l,f),E,v=w.length,x=E.length))&&(l--,i(w,D<v?_:T,v,f))):(0==l&&(a=l=1),w=T.slice()),(v=w.length)<x&&w.unshift(0),i(E,w,x,f),-1==a&&(a=e(T,E,D,x=E.length))<1&&(l++,i(E,D<x?_:T,x,f)),x=E.length):0===a&&(l++,E=[0]),b[d++]=l,a&&E[0]?E[x++]=R[F]||0:(E=[R[F]],x=1)}while((F++<Z||void 0!==E[0])&&q--);p=void 0!==E[0]}b[0]||b.shift()}if(1==g)N.e=h,r=p;else{for(d=1,l=b[0];l>=10;l/=10)d++;N.e=d+h*g-1,S(N,c?o+N.e+1:o,u,p)}return N}}();function S(n,e,i,r){var t,s,o,u,c,f,a,d,l,g=n.constructor;n:if(null!=e){if(!(d=n.d))return n;for(t=1,u=d[0];u>=10;u/=10)t++;if((s=e-t)<0)s+=7,o=e,c=(a=d[l=0])/v(10,t-o-1)%10|0;else if((l=Math.ceil((s+1)/7))>=(u=d.length)){if(!r)break n;for(;u++<=l;)d.push(0);a=c=0,t=1,o=(s%=7)-7+1}else{for(a=u=d[l],t=1;u>=10;u/=10)t++;c=(o=(s%=7)-7+t)<0?0:a/v(10,t-o-1)%10|0}if(r=r||e<0||void 0!==d[l+1]||(o<0?a:a%v(10,t-o-1)),f=i<4?(c||r)&&(0==i||i==(n.s<0?3:2)):c>5||5==c&&(4==i||r||6==i&&(s>0?o>0?a/v(10,t-o):0:d[l-1])%10&1||i==(n.s<0?8:7)),e<1||!d[0])return d.length=0,f?(e-=n.e+1,d[0]=v(10,(7-e%7)%7),n.e=-e||0):d[0]=n.e=0,n;if(0==s?(d.length=l,u=1,l--):(d.length=l+1,u=v(10,7-s),d[l]=o>0?(a/v(10,t-o)%v(10,o)|0)*u:0),f)for(;;){if(0==l){for(s=1,o=d[0];o>=10;o/=10)s++;for(o=d[0]+=u,u=1;o>=10;o/=10)u++;s!=u&&(n.e++,d[0]==y&&(d[0]=1));break}if(d[l]+=u,d[l]!=y)break;d[l--]=0,u=1}for(s=d.length;0===d[--s];)d.pop()}return h&&(n.e>g.maxE?(n.d=null,n.e=NaN):n.e<g.minE&&(n.e=0,n.d=[0])),n}function k(n,e,i){if(!n.isFinite())return $(n);var r,t=n.e,s=F(n.d),o=s.length;return e?(i&&(r=i-o)>0?s=s.charAt(0)+"."+s.slice(1)+U(r):o>1&&(s=s.charAt(0)+"."+s.slice(1)),s=s+(n.e<0?"e":"e+")+n.e):t<0?(s="0."+U(-t-1)+s,i&&(r=i-o)>0&&(s+=U(r))):t>=o?(s+=U(t+1-o),i&&(r=i-t-1)>0&&(s=s+"."+U(r))):((r=t+1)<o&&(s=s.slice(0,r)+"."+s.slice(r)),i&&(r=i-o)>0&&(t+1===o&&(s+="."),s+=U(r))),s}function P(n,e){var i=n[0];for(e*=7;i>=10;i/=10)e++;return e}function R(n,e,i){if(e>M)throw h=!0,i&&(n.precision=i),Error(g);return S(new n(c),e,1,!0)}function T(n,e,i){if(e>q)throw Error(g);return S(new n(f),e,i,!0)}function L(n){var e=n.length-1,i=7*e+1;if(e=n[e]){for(;e%10==0;e/=10)i--;for(e=n[0];e>=10;e/=10)i++}return i}function U(n){for(var e="";n--;)e+="0";return e}function C(n,e,i,r){var t,s=new n(1),o=Math.ceil(r/7+4);for(h=!1;;){if(i%2&&Q((s=s.times(e)).d,o)&&(t=!0),0===(i=m(i/2))){i=s.d.length-1,t&&0===s.d[i]&&++s.d[i];break}Q((e=e.times(e)).d,o)}return h=!0,s}function I(n){return 1&n.d[n.d.length-1]}function H(n,e,i){for(var r,t=new n(e[0]),s=0;++s<e.length;){if(!(r=new n(e[s])).s){t=r;break}t[i](r)&&(t=r)}return t}function B(n,e){var i,r,t,s,o,u,c,f=0,a=0,d=0,l=n.constructor,g=l.rounding,p=l.precision;if(!n.d||!n.d[0]||n.e>17)return new l(n.d?n.d[0]?n.s<0?0:1/0:1:n.s?n.s<0?0:n:NaN);for(null==e?(h=!1,c=p):c=e,u=new l(.03125);n.e>-2;)n=n.times(u),d+=5;for(c+=r=Math.log(v(2,d))/Math.LN10*2+5|0,i=s=o=new l(1),l.precision=c;;){if(s=S(s.times(n),c,1),i=i.times(++a),F((u=o.plus(_(s,i,c,1))).d).slice(0,c)===F(o.d).slice(0,c)){for(t=d;t--;)o=S(o.times(o),c,1);if(null!=e)return l.precision=p,o;if(!(f<3&&A(o.d,c-r,g,f)))return S(o,l.precision=p,g,h=!0);l.precision=c+=10,i=s=u=new l(1),a=0,f++}o=u}}function V(n,e){var i,r,t,s,o,u,c,f,a,d,l,g=1,p=n,w=p.d,m=p.constructor,v=m.rounding,N=m.precision;if(p.s<0||!w||!w[0]||!p.e&&1==w[0]&&1==w.length)return new m(w&&!w[0]?-1/0:1!=p.s?NaN:w?0:p);if(null==e?(h=!1,a=N):a=e,m.precision=a+=10,r=(i=F(w)).charAt(0),!(Math.abs(s=p.e)<15e14))return f=R(m,a+2,N).times(s+""),p=V(new m(r+"."+i.slice(1)),a-10).plus(f),m.precision=N,null==e?S(p,N,v,h=!0):p;for(;r<7&&1!=r||1==r&&i.charAt(1)>3;)r=(i=F((p=p.times(n)).d)).charAt(0),g++;for(s=p.e,r>1?(p=new m("0."+i),s++):p=new m(r+"."+i.slice(1)),d=p,c=o=p=_(p.minus(1),p.plus(1),a,1),l=S(p.times(p),a,1),t=3;;){if(o=S(o.times(l),a,1),F((f=c.plus(_(o,new m(t),a,1))).d).slice(0,a)===F(c.d).slice(0,a)){if(c=c.times(2),0!==s&&(c=c.plus(R(m,a+2,N).times(s+""))),c=_(c,new m(g),a,1),null!=e)return m.precision=N,c;if(!A(c.d,a-10,v,u))return S(c,m.precision=N,v,h=!0);m.precision=a+=10,f=o=p=_(d.minus(1),d.plus(1),a,1),l=S(p.times(p),a,1),t=u=1}c=f,t+=2}}function $(n){return String(n.s*n.s/0)}function j(n,e){var i,r,t;for((i=e.indexOf("."))>-1&&(e=e.replace(".","")),(r=e.search(/e/i))>0?(i<0&&(i=r),i+=+e.slice(r+1),e=e.substring(0,r)):i<0&&(i=e.length),r=0;48===e.charCodeAt(r);r++);for(t=e.length;48===e.charCodeAt(t-1);--t);if(e=e.slice(r,t)){if(t-=r,n.e=i=i-r-1,n.d=[],r=(i+1)%7,i<0&&(r+=7),r<t){for(r&&n.d.push(+e.slice(0,r)),t-=7;r<t;)n.d.push(+e.slice(r,r+=7));r=7-(e=e.slice(r)).length}else r-=t;for(;r--;)e+="0";n.d.push(+e),h&&(n.e>n.constructor.maxE?(n.d=null,n.e=NaN):n.e<n.constructor.minE&&(n.e=0,n.d=[0]))}else n.e=0,n.d=[0];return n}function W(n,e){var i,r,t,s,o,u,c,f,a;if(e.indexOf("_")>-1){if(e=e.replace(/(\d)_(?=\d)/g,"$1"),x.test(e))return j(n,e)}else if("Infinity"===e||"NaN"===e)return+e||(n.s=NaN),n.e=NaN,n.d=null,n;if(b.test(e))i=16,e=e.toLowerCase();else if(N.test(e))i=2;else{if(!E.test(e))throw Error(l+e);i=8}for((s=e.search(/p/i))>0?(c=+e.slice(s+1),e=e.substring(2,s)):e=e.slice(2),o=(s=e.indexOf("."))>=0,r=n.constructor,o&&(s=(u=(e=e.replace(".","")).length)-s,t=C(r,new r(i),s,2*s)),s=a=(f=D(e,i,y)).length-1;0===f[s];--s)f.pop();return s<0?new r(0*n.s):(n.e=P(f,a),n.d=f,h=!1,o&&(n=_(n,t,4*u)),c&&(n=n.times(Math.abs(c)<54?v(2,c):Cn.pow(2,c))),h=!0,n)}function J(n,e,i,r,t){var s,o,u,c,f=n.precision,a=Math.ceil(f/7);for(h=!1,c=i.times(i),u=new n(r);;){if(o=_(u.times(c),new n(e++*e++),f,1),u=t?r.plus(o):r.minus(o),r=_(o.times(c),new n(e++*e++),f,1),void 0!==(o=u.plus(r)).d[a]){for(s=a;o.d[s]===u.d[s]&&s--;);if(-1==s)break}s=u,u=r,r=o,o=s}return h=!0,o.d.length=a+1,o}function z(n,e){for(var i=n;--e;)i*=n;return i}function G(n,e){var i,r=e.s<0,s=T(n,n.precision,1),o=s.times(.5);if((e=e.abs()).lte(o))return t=r?4:1,e;if((i=e.divToInt(s)).isZero())t=r?3:2;else{if((e=e.minus(i.times(s))).lte(o))return t=I(i)?r?2:3:r?4:1,e;t=I(i)?r?1:4:r?3:2}return e.minus(s).abs()}function K(n,e,i,t){var s,c,f,a,h,d,l,g,p,w=n.constructor,m=void 0!==i;if(m?(Z(i,1,o),void 0===t?t=w.rounding:Z(t,0,8)):(i=w.precision,t=w.rounding),n.isFinite()){for(m?(s=2,16==e?i=4*i-3:8==e&&(i=3*i-2)):s=e,(f=(l=k(n)).indexOf("."))>=0&&(l=l.replace(".",""),(p=new w(1)).e=l.length-f,p.d=D(k(p),10,s),p.e=p.d.length),c=h=(g=D(l,10,s)).length;0==g[--h];)g.pop();if(g[0]){if(f<0?c--:((n=new w(n)).d=g,n.e=c,g=(n=_(n,p,i,t,0,s)).d,c=n.e,d=r),f=g[i],a=s/2,d=d||void 0!==g[i+1],d=t<4?(void 0!==f||d)&&(0===t||t===(n.s<0?3:2)):f>a||f===a&&(4===t||d||6===t&&1&g[i-1]||t===(n.s<0?8:7)),g.length=i,d)for(;++g[--i]>s-1;)g[i]=0,i||(++c,g.unshift(1));for(h=g.length;!g[h-1];--h);for(f=0,l="";f<h;f++)l+=u.charAt(g[f]);if(m){if(h>1)if(16==e||8==e){for(f=16==e?4:3,--h;h%f;h++)l+="0";for(h=(g=D(l,s,e)).length;!g[h-1];--h);for(f=1,l="1.";f<h;f++)l+=u.charAt(g[f])}else l=l.charAt(0)+"."+l.slice(1);l=l+(c<0?"p":"p+")+c}else if(c<0){for(;++c;)l="0"+l;l="0."+l}else if(++c>h)for(c-=h;c--;)l+="0";else c<h&&(l=l.slice(0,c)+"."+l.slice(c))}else l=m?"0p+0":"0";l=(16==e?"0x":2==e?"0b":8==e?"0o":"")+l}else l=$(n);return n.s<0?"-"+l:l}function Q(n,e){if(n.length>e)return n.length=e,!0}function X(n){return new this(n).abs()}function Y(n){return new this(n).acos()}function nn(n){return new this(n).acosh()}function en(n,e){return new this(n).plus(e)}function rn(n){return new this(n).asin()}function tn(n){return new this(n).asinh()}function sn(n){return new this(n).atan()}function on(n){return new this(n).atanh()}function un(n,e){n=new this(n),e=new this(e);var i,r=this.precision,t=this.rounding,s=r+4;return n.s&&e.s?n.d||e.d?!e.d||n.isZero()?(i=e.s<0?T(this,r,t):new this(0)).s=n.s:!n.d||e.isZero()?(i=T(this,s,1).times(.5)).s=n.s:e.s<0?(this.precision=s,this.rounding=1,i=this.atan(_(n,e,s,1)),e=T(this,s,1),this.precision=r,this.rounding=t,i=n.s<0?i.minus(e):i.plus(e)):i=this.atan(_(n,e,s,1)):(i=T(this,s,1).times(e.s>0?.25:.75)).s=n.s:i=new this(NaN),i}function cn(n){return new this(n).cbrt()}function fn(n){return S(n=new this(n),n.e+1,2)}function an(n,e,i){return new this(n).clamp(e,i)}function hn(n){if(!n||"object"!==typeof n)throw Error(d+"Object expected");var e,i,r,t=!0===n.defaults,u=["precision",1,o,"rounding",0,8,"toExpNeg",-s,0,"toExpPos",0,s,"maxE",0,s,"minE",-s,0,"modulo",0,9];for(e=0;e<u.length;e+=3)if(i=u[e],t&&(this[i]=a[i]),void 0!==(r=n[i])){if(!(m(r)===r&&r>=u[e+1]&&r<=u[e+2]))throw Error(l+i+": "+r);this[i]=r}if(i="crypto",t&&(this[i]=a[i]),void 0!==(r=n[i])){if(!0!==r&&!1!==r&&0!==r&&1!==r)throw Error(l+i+": "+r);if(r){if("undefined"==typeof crypto||!crypto||!crypto.getRandomValues&&!crypto.randomBytes)throw Error(p);this[i]=!0}else this[i]=!1}return this}function dn(n){return new this(n).cos()}function ln(n){return new this(n).cosh()}function gn(n,e){return new this(n).div(e)}function pn(n){return new this(n).exp()}function wn(n){return S(n=new this(n),n.e+1,3)}function mn(){var n,e,i=new this(0);for(h=!1,n=0;n<arguments.length;)if((e=new this(arguments[n++])).d)i.d&&(i=i.plus(e.times(e)));else{if(e.s)return h=!0,new this(1/0);i=e}return h=!0,i.sqrt()}function vn(n){return n instanceof Cn||n&&n.toStringTag===w||!1}function Nn(n){return new this(n).ln()}function bn(n,e){return new this(n).log(e)}function En(n){return new this(n).log(2)}function xn(n){return new this(n).log(10)}function yn(){return H(this,arguments,"lt")}function Mn(){return H(this,arguments,"gt")}function qn(n,e){return new this(n).mod(e)}function On(n,e){return new this(n).mul(e)}function Fn(n,e){return new this(n).pow(e)}function Zn(n){var e,i,r,t,s=0,u=new this(1),c=[];if(void 0===n?n=this.precision:Z(n,1,o),r=Math.ceil(n/7),this.crypto)if(crypto.getRandomValues)for(e=crypto.getRandomValues(new Uint32Array(r));s<r;)(t=e[s])>=429e7?e[s]=crypto.getRandomValues(new Uint32Array(1))[0]:c[s++]=t%1e7;else{if(!crypto.randomBytes)throw Error(p);for(e=crypto.randomBytes(r*=4);s<r;)(t=e[s]+(e[s+1]<<8)+(e[s+2]<<16)+((127&e[s+3])<<24))>=214e7?crypto.randomBytes(4).copy(e,s):(c.push(t%1e7),s+=4);s=r/4}else for(;s<r;)c[s++]=1e7*Math.random()|0;for(n%=7,(r=c[--s])&&n&&(t=v(10,7-n),c[s]=(r/t|0)*t);0===c[s];s--)c.pop();if(s<0)i=0,c=[0];else{for(i=-1;0===c[0];i-=7)c.shift();for(r=1,t=c[0];t>=10;t/=10)r++;r<7&&(i-=7-r)}return u.e=i,u.d=c,u}function An(n){return S(n=new this(n),n.e+1,this.rounding)}function Dn(n){return(n=new this(n)).d?n.d[0]?n.s:0*n.s:n.s||NaN}function _n(n){return new this(n).sin()}function Sn(n){return new this(n).sinh()}function kn(n){return new this(n).sqrt()}function Pn(n,e){return new this(n).sub(e)}function Rn(){var n=0,e=arguments,i=new this(e[n]);for(h=!1;i.s&&++n<e.length;)i=i.plus(e[n]);return h=!0,S(i,this.precision,this.rounding)}function Tn(n){return new this(n).tan()}function Ln(n){return new this(n).tanh()}function Un(n){return S(n=new this(n),n.e+1,1)}O[Symbol.for("nodejs.util.inspect.custom")]=O.toString,O[Symbol.toStringTag]="Decimal";var Cn=O.constructor=function n(e){var i,r,t;function s(n){var e,i,r,t=this;if(!(t instanceof s))return new s(n);if(t.constructor=s,vn(n))return t.s=n.s,void(h?!n.d||n.e>s.maxE?(t.e=NaN,t.d=null):n.e<s.minE?(t.e=0,t.d=[0]):(t.e=n.e,t.d=n.d.slice()):(t.e=n.e,t.d=n.d?n.d.slice():n.d));if("number"===(r=typeof n)){if(0===n)return t.s=1/n<0?-1:1,t.e=0,void(t.d=[0]);if(n<0?(n=-n,t.s=-1):t.s=1,n===~~n&&n<1e7){for(e=0,i=n;i>=10;i/=10)e++;return void(h?e>s.maxE?(t.e=NaN,t.d=null):e<s.minE?(t.e=0,t.d=[0]):(t.e=e,t.d=[n]):(t.e=e,t.d=[n]))}return 0*n!==0?(n||(t.s=NaN),t.e=NaN,void(t.d=null)):j(t,n.toString())}if("string"!==r)throw Error(l+n);return 45===(i=n.charCodeAt(0))?(n=n.slice(1),t.s=-1):(43===i&&(n=n.slice(1)),t.s=1),x.test(n)?j(t,n):W(t,n)}if(s.prototype=O,s.ROUND_UP=0,s.ROUND_DOWN=1,s.ROUND_CEIL=2,s.ROUND_FLOOR=3,s.ROUND_HALF_UP=4,s.ROUND_HALF_DOWN=5,s.ROUND_HALF_EVEN=6,s.ROUND_HALF_CEIL=7,s.ROUND_HALF_FLOOR=8,s.EUCLID=9,s.config=s.set=hn,s.clone=n,s.isDecimal=vn,s.abs=X,s.acos=Y,s.acosh=nn,s.add=en,s.asin=rn,s.asinh=tn,s.atan=sn,s.atanh=on,s.atan2=un,s.cbrt=cn,s.ceil=fn,s.clamp=an,s.cos=dn,s.cosh=ln,s.div=gn,s.exp=pn,s.floor=wn,s.hypot=mn,s.ln=Nn,s.log=bn,s.log10=xn,s.log2=En,s.max=yn,s.min=Mn,s.mod=qn,s.mul=On,s.pow=Fn,s.random=Zn,s.round=An,s.sign=Dn,s.sin=_n,s.sinh=Sn,s.sqrt=kn,s.sub=Pn,s.sum=Rn,s.tan=Tn,s.tanh=Ln,s.trunc=Un,void 0===e&&(e={}),e&&!0!==e.defaults)for(t=["precision","rounding","toExpNeg","toExpPos","maxE","minE","modulo","crypto"],i=0;i<t.length;)e.hasOwnProperty(r=t[i++])||(e[r]=this[r]);return s.config(e),s}(a);c=new Cn(c),f=new Cn(f),e.Z=Cn}}]);