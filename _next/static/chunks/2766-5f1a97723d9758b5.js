(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[2766],{3804:function(e,s,n){"use strict";n.d(s,{Z:function(){return i}});var t=n(85893),a=n(89277),r=(n(67294),n(22497),n(76174),"_1d2x85u1"),i=function(e){return(0,t.jsx)("div",{className:"_1d2x85u0",children:e.link?(0,t.jsxs)(a.Z,{href:e.link,target:"_blank",className:"_1d2x85u2",children:[(0,t.jsx)("p",{className:r,children:e.message}),(0,t.jsx)("div",{className:"_1d2x85u3"})]}):(0,t.jsx)("p",{className:r,children:e.message})})}},99562:function(e,s,n){"use strict";n.d(s,{Z:function(){return je}});var t=n(51351),a=n(85893),r=n(67294),i=(n(22497),n(59145),n(28990),n(958)),l=n(56242),o=n(17248),c=n(71530),d=n(28424),u=n(1863),m=n(88767),h=n(47568),v=n(828),f=n(70655),x=(n(31754),n(84709)),p=n(99505),j=n(14924),A=(n(19244),n(26295)),N=n(94184),b=n.n(N),g=n(25675),_=n.n(g),w={src:"/_next/static/media/imagePlaceholder.654ab158.png",height:50,width:50,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAJ1BMVEXx0qH8nCL8lCTx0J35qEj8jiP6pjf4sUz1v3n5o037oyL7nDH3sl1sFBrNAAAACXBIWXMAAAsSAAALEgHS3X78AAAANUlEQVR4nEWHMRIAIAjDCq0I6v/f6+FihlwConkmSRDZwyzMeTKPOiSpChERe/vAMjP38eMCIkABEzasVMIAAAAASUVORK5CYII=",blurWidth:8,blurHeight:8},C=function(e){var s=e.onClick,n=e.nft,t=e.text,i=(e.hint,e.buttonText),l=e.hasBorder,o=void 0===l||l,c=e.isSelected,d=void 0!==c&&c,u=(0,r.useCallback)((function(){"function"===typeof s&&s(n)}),[n]);return(0,a.jsxs)("div",{className:b()("wsc4mt0",(0,j.Z)({},"wsc4mt2",o&&!d)),onClick:u,children:[(0,a.jsx)("div",{className:"wsc4mt3",children:(0,a.jsx)(A.Z,{children:(0,a.jsx)(_(),{src:n.image||w,alt:"user nft",layout:"fill"})})}),(0,a.jsxs)("div",{className:"wsc4mt1",children:[(0,a.jsx)("div",{className:"wsc4mt4",children:(0,a.jsxs)("div",{className:"wsc4mt5",children:[n.name," #",t]})}),(0,a.jsxs)(p.Z,{variant:"text",children:["Borrow ",i,(0,a.jsx)("div",{className:"wsc4mt9"})]})]})]})},T=(n(37550),function(e){var s=e.data,n=e.selectNFT,t=e.buttonText,i=(0,r.useState)(null),l=i[0],o=i[1];return(0,a.jsx)("div",{className:"ubuxt50",children:s&&s.map((function(e,r){return(0,a.jsx)("div",{className:b()("ubuxt51",(0,j.Z)({},"ubuxt52",e.id===l)),children:(0,a.jsx)(C,{id:e.id,onClick:function(){return o((s=e).id),void n(s);var s},nft:e,hasBorder:r!==s.length-1||e.id===l,text:"".concat(e.tokenId),buttonText:t,isSelected:l===e.id})},e.id)}))})}),I=n(68146),y=n(74990),Z=n(32292),F=n(8031),k=n(54677),R=n(48098),S=n(28432),P=n(43915),E=x.uf.formatShortName,L=function(e){var s=(0,u.Z)((function(e){return e.setIsSidebarVisibleInMobile})),n=(0,r.useContext)(o.S).currentUser,t=(0,m.useQueryClient)(),i=(null===n||void 0===n?void 0:n.address)||"",l=(0,c.Z)((function(e){return e.HERC20ContractAddr})),x=(0,Z.U)(l),j=x.nftContractAddress,A=x.htokenHelperContractAddress,N=x.hivemindContractAddress,b=x.erc20Name,g=(0,c.Z)((function(e){return e.setWorkflow})),_=(0,r.useState)(null),w=_[0],C=_[1],L=(0,I.Z)(),O=L.toast,W=L.ToastComponent,U=(0,I.Z)(),V=U.toast,D=U.ToastComponent,H=(0,v.Z)((0,F.CS)(n,j),2),Q=H[0],M=H[1],z=(0,r.useState)("WAIT_FOR_APPROVAL"),B=z[0],q=z[1],Y=(0,v.Z)((0,F.SG)(j,l,(null===w||void 0===w?void 0:w.tokenId)||""),2),K=Y[0],J=Y[1],X=(0,v.Z)((0,k.sd)(A,l,N),2),$=X[0],G=X[1];(0,r.useEffect)((function(){q(K?"WAIT_FOR_DEPOSIT":"WAIT_FOR_APPROVAL")}),[w,K]),(0,r.useEffect)((function(){M||J||G?O.processing("Loading"):O.clear()}),[M,J,G]);var ee=function(){var e=(0,h.Z)((function(){return(0,f.__generator)(this,(function(e){switch(e.label){case 0:return[4,(0,R.x0)(l,(null===w||void 0===w?void 0:w.tokenId)||"").then((function(){console.log("deposit collateral"),C(null),q("FINISH_DEPOSIT")}))];case 1:return e.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}(),se=(0,m.useMutation)(ee),ne=function(){var e=(0,h.Z)((function(){var e;return(0,f.__generator)(this,(function(s){switch(s.label){case 0:return s.trys.push([0,9,,10]),V.processing(),"WAIT_FOR_APPROVAL"!=B?[3,3]:[4,ae.mutateAsync()];case 1:return s.sent(),[4,t.invalidateQueries(S.a.NFTApproval(j,l,(null===w||void 0===w?void 0:w.tokenId)||""))];case 2:return s.sent(),[3,8];case 3:return"WAIT_FOR_DEPOSIT"!=B?[3,7]:[4,se.mutateAsync()];case 4:return s.sent(),[4,t.invalidateQueries(S.a.listUserNFTs(i,j))];case 5:return s.sent(),[4,t.invalidateQueries(S.a.listUserCoupons(l,i))];case 6:return s.sent(),[3,8];case 7:"FINISH_DEPOSIT"===B&&C(null),s.label=8;case 8:return V.success("Successful! Transaction complete"),[3,10];case 9:return e=s.sent(),console.error(e),V.error("Sorry! Transaction failed"),[3,10];case 10:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),te=function(){var e=(0,h.Z)((function(){return(0,f.__generator)(this,(function(e){switch(e.label){case 0:return[4,(0,P.Z)(j,l,(null===w||void 0===w?void 0:w.tokenId)||"").then((function(){console.log("get NFT Approval")})).catch((function(e){throw console.error("get NFT Approval fail"),e}))];case 1:return e.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}(),ae=(0,m.useMutation)(te),re=function(e){C(e)},ie=function(){s(!1),g(d.yp.none),document.body.classList.remove("disable-scroll")},le=V.state?D:W;return(0,a.jsx)(y.Z,{footer:(null===O||void 0===O?void 0:O.state)||V.state?le:(0,a.jsxs)("div",{className:"_1fm413g8",children:[(0,a.jsx)("div",{className:"_1fm413g9",children:(0,a.jsx)(p.Z,{variant:"secondary",onClick:ie,isFluid:!0,children:"Cancel"})}),(0,a.jsx)("div",{className:"_1fm413ga",children:(0,a.jsx)(p.Z,{variant:"primary",isFluid:!0,disabled:null==w,onClick:ne,children:(0,a.jsx)(a.Fragment,{children:"WAIT_FOR_APPROVAL"==B?"Approve":"WAIT_FOR_DEPOSIT"==B?"Deposit NFT":"Deposit finished"})})})]}),children:(0,a.jsx)("div",{className:"_1fm413g0",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:"_1fm413gb",children:"Choose NFT"}),(0,a.jsx)(T,{data:Q,selectNFT:re,buttonText:"".concat(E($)," ").concat(b)})]})})})},O=n(64678),W=n(48677),U=n(45424),V=(n(25193),"_5n7wm8d"),D="_5n7wm83",H="_5n7wm8c",Q="_5n7wm82 _5n7wm81",M=n(70751),z=n(79650),B=n(94780),q=n(2533),Y=n(69931),K=n(87862),J=n(95678),X=x.uf.format,$=x.uf.formatPercent,G=x.uf.formatERC20,ee=x.uf.parse,se=x.uf.formatShortName,ne=function(e){e=null!==e?e:(0,t.Z)(new TypeError("Cannot destructure undefined"));var s=(0,u.Z)((function(e){return e.setIsSidebarVisibleInMobile})),n=(0,r.useContext)(o.S).currentUser,i=(0,m.useQueryClient)(),l=(null===n||void 0===n?void 0:n.address)||"",x=(0,c.Z)((function(e){return e})),j=x.HERC20ContractAddr,N=x.setWorkflow,g=x.NFTId,C=x.couponId,T=(0,Z.U)(j),P=T.nftContractAddress,E=T.htokenHelperContractAddress,L=T.hivemindContractAddress,ne=T.erc20Name,te=T.unit,ae=T.formatDecimals,re=(0,r.useState)(0),ie=re[0],le=re[1],oe=(0,r.useState)(0),ce=oe[0],de=oe[1],ue=(0,r.useState)(0),me=ue[0],he=ue[1],ve=(0,I.Z)(),fe=ve.toast,xe=ve.ToastComponent,pe=(0,I.Z)(),je=pe.toast,Ae=pe.ToastComponent,Ne=(0,v.Z)((0,Y.$J)(E,j,P,L,n,te),2),be=Ne[0],ge=Ne[1],_e=(0,v.Z)((0,B.xb)(L,j,te),2),we=_e[0],Ce=_e[1],Te=(0,v.Z)((0,F.Kc)(P,g),2),Ie=Te[0],ye=Te[1],Ze=(0,v.Z)((0,k.qe)(E,j),2),Fe=Ze[0],ke=Ze[1],Re=(0,v.Z)((0,k.fv)(E,j),2),Se=Re[0],Pe=Re[1],Ee=(0,v.Z)((0,q.Y)(j,g,te),2),Le=Ee[0],Oe=Ee[1],We=(0,v.Z)((0,k.sd)(E,j,L),2),Ue=We[0],Ve=We[1],De=Fe.price,He=parseFloat(Le),Qe=(0,K.el)(be,g),Me=(0,v.Z)((0,k.h1)(E,j,te),2),ze=Me[0],Be=Me[1],qe=J.s.find((function(e){return e.HERC20ContractAddress===j})),Ye=(0,v.Z)((0,Y.AD)(n,qe?[qe]:[],E),2),Ke=Ye[0],Je=(Ye[1],ce*(1+ze)),Xe=Je?He+Je:He;(0,r.useEffect)((function(){ye||Ce||ke||Pe||Oe||Be||ge||Ve?fe.processing("Loading"):fe.clear(0)}),[ye,Ce,ke,Pe,Oe,ge,Ve,Be]);var $e=function(e){Qe<=0||(he(e),le(e*Se),de(e))},Ge=function(e){if(!(Qe<=0)){if(!e)return le(0),de(0),void he(0);le(e),de(e/Se),he(e/Se)}},es=function(e){if(!(Qe<=0)){if(!e)return le(0),de(0),void he(0);le(e*Se),de(e),he(e)}},ss=(0,m.useMutation)(R.sI),ns=function(){var e=(0,h.Z)((function(){var e,s;return(0,f.__generator)(this,(function(n){switch(n.label){case 0:return n.trys.push([0,5,,6]),je.processing(),e={},[4,ss.mutateAsync((e.HERC20ContractAddress=j,e.NFTTokenId=Ie.tokenId,e.amount=ce.toString(),e.unit=te,e))];case 1:return n.sent(),console.log("borrow succeed"),[4,i.invalidateQueries(S.a.couponData(j,C))];case 2:return n.sent(),[4,i.invalidateQueries(S.a.borrowAmount(j,Ie.tokenId))];case 3:return n.sent(),[4,i.invalidateQueries(S.a.listUserCollateral(l))];case 4:return n.sent(),je.success("Successful! Transaction complete"),$e(0),[3,6];case 5:return s=n.sent(),console.error(s),je.error("Sorry! Transaction failed"),[3,6];case 6:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),ts=Xe/we,as=Fe?(De-ts)/De*100:0,rs=function(){s(!1),N(d.yp.none),document.body.classList.remove("disable-scroll")},is=je.state?Ae:xe;return(0,a.jsx)(y.Z,{footer:(null===fe||void 0===fe?void 0:fe.state)||je.state?is:(0,a.jsxs)("div",{className:"_5n7wm88",children:[(0,a.jsx)("div",{className:"_5n7wm89",children:(0,a.jsx)(p.Z,{variant:"secondary",onClick:rs,children:"Cancel"})}),(0,a.jsx)("div",{className:"_5n7wm8a",children:(0,a.jsx)(p.Z,{variant:"primary",disabled:!me||me<0||Qe<=0,isFluid:!0,onClick:ns,children:"Borrow"})})]}),children:(0,a.jsx)("div",{className:"_5n7wm80",children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"_5n7wm84 _5n7wm81 _5n7wm82",children:[(0,a.jsx)("div",{className:"_5n7wm85",children:(0,a.jsx)(A.Z,{children:(0,a.jsx)(_(),{src:Ie.image?Ie.image:w,alt:Ie.name,layout:"fill"})})}),(0,a.jsxs)("div",{className:"_5n7wm86",children:[Ie.name," #",g]})]}),(0,a.jsxs)("div",{className:Q,children:[(0,a.jsx)("div",{className:D,children:(0,a.jsx)(O.U,{value:se(De,ae),valueSize:"big",title:(0,a.jsxs)("span",{className:M.mv,children:["Floor price ",(0,a.jsx)("div",{className:z.Pt})]}),toolTipLabel:(0,a.jsxs)("span",{children:["The worth of your collateral according to the market\u2019s oracle. Learn more about this market\u2019s"," ",(0,a.jsx)("a",{className:H,target:"blank",href:"https://www.hivemind.sh/",children:"Hivemind data-feed."})]})})}),(0,a.jsx)("div",{className:D,children:(0,a.jsx)(O.U,{value:G(Qe,ae),title:(0,a.jsxs)("span",{className:M.mv,children:["Borrow up to ",(0,a.jsx)("div",{className:z.Pt})]}),toolTipLabel:"Allowance determines how much debt is available to a borrower. This market supports no more than ".concat($(40,0))})})]}),(0,a.jsx)("div",{className:Q,children:(0,a.jsxs)("div",{className:D,children:[(0,a.jsx)(O.U,{title:(0,a.jsxs)("span",{className:M.mv,children:["LTV %",(0,a.jsx)("div",{className:z.Pt})]}),toolTipLabel:(0,a.jsxs)("span",{children:["New"," ",(0,a.jsxs)("a",{className:H,target:"blank",href:"https://docs.zerolend.xyz/learn/defi-lending#loan-to-value-ratio",children:["Loan-to-value ratio"," "]}),"after the requested changes to the loan are approved."]}),value:$((He+Je)/De*100,2),isDisabled:!(Xe>0)}),(0,a.jsx)(U.Q,{currentValue:1.1*me,maxValue:De,minAvailableValue:He,maxSafePosition:.3-He/1e3,dangerPosition:.45-He/1e3,maxAvailablePosition:Ue/De,isReadonly:!0})]})}),(0,a.jsxs)("div",{className:Q,children:[(0,a.jsx)("div",{className:D,children:(0,a.jsx)(O.U,{title:(0,a.jsxs)("span",{className:M.mv,children:["Debt + fees ",(0,a.jsx)("div",{className:z.Pt})]}),toolTipLabel:(0,a.jsxs)("span",{children:["Estimated"," ",(0,a.jsxs)("a",{className:H,target:"blank",href:"https://docs.zerolend.xyz/learn/defi-lending#debt",children:["debt"," "]}),"after the requested changes to the loan are approved."]}),value:G(Xe<0?0:Xe,ae),isDisabled:!(Xe>0)})}),(0,a.jsx)("div",{className:D,children:(0,a.jsx)(O.U,{title:(0,a.jsxs)("span",{className:M.mv,children:["Liquidation price ",(0,a.jsx)("div",{className:z.Pt})]}),toolTipLabel:(0,a.jsxs)("span",{children:["Estimated"," ",(0,a.jsx)("a",{className:H,target:"blank",href:" ",children:"liquidation Price"})," ","after the requested changes to the loan are approved."]}),value:"".concat(G(ts,ae)," ").concat(He?"(-".concat(as.toFixed(0),"%)"):""),valueSize:"normal",isDisabled:0==He})})]}),(0,a.jsxs)("div",{className:"_5n7wm87",children:[(0,a.jsxs)("div",{className:Q,children:[(0,a.jsx)("div",{className:b()(V,D),children:(0,a.jsx)(O.U,{title:(0,a.jsxs)("span",{className:M.mv,children:["Yearly Interest Rate",(0,a.jsx)("div",{className:z.Pt})]}),toolTipLabel:(0,a.jsxs)("span",{children:["Variable interest rate, based on Utilization rate."," ",(0,a.jsx)("a",{className:H,target:"blank",href:" ",children:"Learn more."})]}),value:$(Ke[0].borrowRate,2)})}),(0,a.jsx)("div",{className:b()(V,D),children:(0,a.jsx)(O.U,{title:(0,a.jsxs)("span",{className:M.mv,children:["Borrow Fee ",(0,a.jsx)("div",{className:z.Pt})]}),value:"".concat(G(ce*ze,ae),"\n\t\t\t\t\t\t\t\t").concat("(".concat($(100*ze,2),")")),toolTipLabel:(0,a.jsxs)("span",{children:["Borrow Fee is a"," ",(0,a.jsxs)("a",{className:H,target:"blank",href:" ",children:["protocol fee"," "]}),"that is charged upon borrowing. For now it is set at 2,00%."]})})})]}),(0,a.jsx)(W.h,{firstInputValue:ee(X(ce)),secondInputValue:ee(X(ie)),onChangeFirstInput:es,onChangeSecondInput:Ge,maxValue:Qe,firstInputAddon:ne})]}),(0,a.jsx)(U.Q,{currentValue:me,maxValue:De,minAvailableValue:He,maxSafePosition:.3-He/1e3,dangerPosition:.45-He/1e3,maxAvailablePosition:Ue/De,onChange:$e})]})})})},te=(n(71686),"_17li367"),ae="_17li363",re="_17li36c",ie="_17li362 _17li361",le=n(63323),oe=n(61154),ce=n(23748),de=n(3804),ue=x.uf.format,me=x.uf.formatPercent,he=x.uf.formatERC20,ve=x.uf.parse,fe=x.uf.formatShortName,xe=function(e){e=null!==e?e:(0,t.Z)(new TypeError("Cannot destructure undefined"));var s=(0,u.Z)((function(e){return e.setIsSidebarVisibleInMobile})),n=(0,r.useContext)(o.S).currentUser,i=(0,m.useQueryClient)(),l=(null===n||void 0===n?void 0:n.address)||"",x=(0,c.Z)((function(e){return e})),j=x.HERC20ContractAddr,N=x.setWorkflow,g=x.NFTId,C=x.couponId,T=(0,Z.U)(j),P=T.nftContractAddress,E=T.htokenHelperContractAddress,L=T.hivemindContractAddress,V=T.ERC20ContractAddress,D=T.erc20Name,H=T.unit,Q=T.formatDecimals,J=(0,v.Z)((0,F.Kc)(P,g),2),X=J[0],$=J[1],G=(0,v.Z)((0,B.xb)(L,j,H),2),ee=G[0],se=G[1],ne=(0,v.Z)((0,k.sd)(E,j,L),2),xe=ne[0],pe=ne[1],je=(0,v.Z)((0,k.qe)(E,j),2),Ae=je[0],Ne=je[1],be=(0,v.Z)((0,q.Y)(j,g,H),2),ge=be[0],_e=be[1],we=(0,v.Z)((0,Y.$J)(E,j,P,L,n,H),2),Ce=we[0],Te=we[1],Ie=(0,v.Z)((0,k.fv)(E,j),2),ye=Ie[0],Ze=Ie[1],Fe=(0,v.Z)((0,le.aE)(V,n,H),2),ke=Fe[0],Re=Fe[1],Se=(0,r.useState)(),Pe=Se[0],Ee=Se[1],Le=(0,r.useState)(0),Oe=Le[0],We=Le[1],Ue=(0,r.useState)(0),Ve=Ue[0],De=Ue[1],He=(0,I.Z)(),Qe=He.toast,Me=He.ToastComponent,ze=(0,I.Z)(),Be=ze.toast,qe=ze.ToastComponent,Ye=(0,r.useState)("WAIT_FOR_APPROVAL"),Ke=Ye[0],Je=Ye[1],Xe=(0,v.Z)((0,le.Jw)(V,j,n,Oe,H),2),$e=Xe[0],Ge=Xe[1],es=Ae.price,ss=parseFloat(ge),ns=(0,K.el)(Ce,g),ts=ss,as=parseFloat(ke),rs=ss-(Oe||0);(0,r.useEffect)((function(){$||Ne||_e||Ze||se||Te||Re||Ge||pe?Qe.processing("Loading"):(cs(),Qe.clear())}),[$,Ne,_e,Ze,se,Te,Re,Ge,pe,X,$e]);var is=function(e){De(e),Ee(e*ye),We(e)},ls=function(e){if(!e)return Ee(0),We(0),void De(0);Ee(e),We(e/ye),De(e/ye)},os=function(e){if(!e)return Ee(0),We(0),void De(0);Ee(e*ye),We(e),De(e)},cs=function(){"DONE"!=Ke&&Je("0"==ge?"WAIT_FOR_WITHDRAW":$e?"WAIT_FOR_REPAY":"WAIT_FOR_APPROVAL")},ds=function(){var e=(0,h.Z)((function(){return(0,f.__generator)(this,(function(e){switch(e.label){case 0:return[4,(0,oe.r0)(j,X.tokenId,ss,Ve,H,ge)];case 1:return e.sent(),[2]}}))}));return function(){return e.apply(this,arguments)}}(),us=(0,m.useMutation)(ds),ms=(0,m.useMutation)(R.t7),hs=(0,m.useMutation)(le.l$),vs=function(){var e=(0,h.Z)((function(){var e,s,n;return(0,f.__generator)(this,(function(t){switch(t.label){case 0:return t.trys.push([0,15,,16]),Be.processing(),"WAIT_FOR_WITHDRAW"!=Ke?[3,4]:(e={},[4,ms.mutateAsync((e.HERC20ContractAddress=j,e.NFTTokenId=X.tokenId,e))]);case 1:return t.sent(),console.log("withdraw succeed"),Je("DONE"),[4,i.invalidateQueries(S.a.listUserCoupons(j,l))];case 2:return t.sent(),[4,i.invalidateQueries(S.a.listUserNFTs(l,P))];case 3:return t.sent(),[3,14];case 4:return"WAIT_FOR_APPROVAL"!=Ke?[3,7]:(s={},[4,hs.mutateAsync((s.ERC20ContractAddress=V,s.contractAddress=j,s))]);case 5:return t.sent(),console.log("Approval succeed"),[4,i.invalidateQueries(S.a.userApproval(l,V,j))];case 6:return t.sent(),[3,14];case 7:return"WAIT_FOR_REPAY"!=Ke?[3,14]:[4,us.mutateAsync()];case 8:return t.sent(),console.log("Repay Succeed"),[4,i.invalidateQueries(S.a.userApproval(l,V,j))];case 9:return t.sent(),[4,i.invalidateQueries(S.a.couponData(j,C))];case 10:return t.sent(),[4,i.invalidateQueries(S.a.borrowAmount(j,X.tokenId))];case 11:return t.sent(),[4,i.invalidateQueries(S.a.userBalance(l,V))];case 12:return t.sent(),[4,i.invalidateQueries(S.a.listUserCollateral(l))];case 13:t.sent(),is(0),t.label=14;case 14:return Be.success("Successful! Transaction complete"),[3,16];case 15:return n=t.sent(),console.error(n),Be.error("Sorry! Transaction failed"),[3,16];case 16:return[2]}}))}));return function(){return e.apply(this,arguments)}}(),fs=function(){s(!1),N(d.yp.none),document.body.classList.remove("disable-scroll")},xs=rs/ee,ps=Ae?(es-xs)/es*100:0,js=Be.state?qe:Me;return(0,a.jsx)(y.Z,{footer:(null===Qe||void 0===Qe?void 0:Qe.state)||Be.state?js:(0,a.jsxs)(ce.Z,{direction:"vertical",style:{width:"100%"},children:[0===ss&&!((null===Qe||void 0===Qe?void 0:Qe.state)||Be.state)&&(0,a.jsx)(de.Z,{message:"Your have no outstanding debt. You can claim your collateral"}),(0,a.jsxs)("div",{className:"_17li369",children:[(0,a.jsx)("div",{className:"_17li36a",children:(0,a.jsx)(p.Z,{variant:"secondary",onClick:fs,children:"Cancel"})}),(0,a.jsx)("div",{className:"_17li36b",children:(0,a.jsx)(p.Z,{variant:"primary",disabled:"WAIT_FOR_WITHDRAW"!=Ke&&(Ve<=0||"DONE"==Ke),isFluid:!0,onClick:vs,children:(0,a.jsx)(a.Fragment,{children:"WAIT_FOR_APPROVAL"==Ke?"Approve":"WAIT_FOR_REPAY"==Ke?"Repay":"WAIT_FOR_WITHDRAW"==Ke?"Claim NFT":"Withdraw finished"})})})]})]}),children:(0,a.jsx)("div",{className:"_17li360",children:function(){var e;return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)("div",{className:"_17li364 _17li361 _17li362",children:[(0,a.jsx)("div",{className:"_17li365",children:(0,a.jsx)(A.Z,{children:(0,a.jsx)(_(),{src:null!==(e=X.image)&&void 0!==e?e:w,alt:X.name,layout:"fill"})})}),(0,a.jsxs)("div",{className:"_17li366",children:[X.name," #",g]})]}),(0,a.jsxs)("div",{className:ie,children:[(0,a.jsx)("div",{className:ae,children:(0,a.jsx)(O.U,{value:he(es,Q),valueSize:"big",title:(0,a.jsxs)("span",{className:M.mv,children:["Floor price ",(0,a.jsx)("div",{className:z.Pt})]}),toolTipLabel:(0,a.jsxs)("span",{children:["The worth of your collateral according to the market\u2019s oracle. Learn more about this market\u2019s"," ",(0,a.jsx)("a",{className:re,target:"blank",href:"https://hivemind.sh",children:"Hivemind data-feed."})]})})}),(0,a.jsx)("div",{className:ae,children:(0,a.jsx)(O.U,{value:fe(ns,Q),title:(0,a.jsxs)("span",{className:M.mv,children:["Borrow up to ",(0,a.jsx)("div",{className:z.Pt})]}),toolTipLabel:"Allowance determines how much debt is available to a borrower. This market supports no more than ".concat(me(40,0))})})]}),(0,a.jsx)("div",{className:ie,children:(0,a.jsxs)("div",{className:ae,children:[(0,a.jsx)(O.U,{title:(0,a.jsxs)("span",{className:M.mv,children:["Risk level",(0,a.jsx)("div",{className:z.Pt})]}),value:me(rs/es*100,2),isDisabled:!0,toolTipLabel:(0,a.jsxs)("span",{children:["Estimated"," ",(0,a.jsxs)("a",{className:re,target:"blank",href:" https://docs.zerolend.xyz/lending-protocol/borrowing#risk-level",children:["risk level"," "]}),"after the requested changes to the loan are approved."]})}),(0,a.jsx)(U.Q,{currentValue:0,maxValue:es,minAvailableValue:rs,maxSafePosition:.3-ss/1e3,dangerPosition:.45-ss/1e3,maxAvailablePosition:xe/es,isReadonly:!0})]})}),(0,a.jsxs)("div",{className:ie,children:[(0,a.jsx)("div",{className:ae,children:(0,a.jsx)(O.U,{title:(0,a.jsxs)("span",{className:M.mv,children:["Debt",(0,a.jsx)("div",{className:z.Pt})]}),value:he(rs<0?0:rs,Q),isDisabled:!(rs>0),toolTipLabel:(0,a.jsxs)("span",{children:["Estimated"," ",(0,a.jsxs)("a",{className:re,target:"blank",href:"https://docs.zerolend.xyz/learn/defi-lending#debt",children:["debt"," "]}),"after the requested changes to the loan are approved."]})})}),(0,a.jsx)("div",{className:ae,children:(0,a.jsx)(O.U,{title:(0,a.jsxs)("span",{className:M.mv,children:["Liquidation price ",(0,a.jsx)("div",{className:z.Pt})]}),toolTipLabel:(0,a.jsxs)("span",{children:["Estimated"," ",(0,a.jsx)("a",{className:re,target:"blank",href:" ",children:"liquidation Price"})," ","after the requested changes to the loan are approved."]}),value:"".concat(he(xs,Q)," ").concat(rs?"(-".concat(ps.toFixed(0),"%)"):""),valueSize:"normal",isDisabled:0==rs})})]}),(0,a.jsxs)("div",{className:"_17li368",children:[(0,a.jsxs)("div",{className:ie,children:[(0,a.jsx)("div",{className:b()(te,ae),children:(0,a.jsx)(O.U,{title:"Your underlying balance",value:he(as,Q)})}),(0,a.jsx)("div",{className:b()(te,ae),children:(0,a.jsx)(O.U,{isDisabled:!0,title:"NEW Underlying balance",value:he(as-(Oe||0),Q)})})]}),0!==ss&&(0,a.jsx)(W.h,{firstInputValue:ve(ue(Oe)),secondInputValue:ve(ue(Pe)),onChangeFirstInput:os,onChangeSecondInput:ls,firstInputAddon:D})]}),0!==ss&&(0,a.jsx)(U.Q,{currentValue:Ve,maxValue:ts,minAvailableValue:0,onChange:is})]})}()})})},pe=n(37982),je=function(e){e=null!==e?e:(0,t.Z)(new TypeError("Cannot destructure undefined"));var s=(0,c.Z)((function(e){return e})),n=s.workflow,h=s.HERC20ContractAddr,v=s.setWorkflow,f=(0,u.Z)((function(e){return e.setIsSidebarVisibleInMobile})),x=((0,m.useQueryClient)(),(0,r.useState)("borrow")),p=x[0],j=x[1],A=[{label:"Borrow",key:"borrow"},{label:"Repay",key:"repay",disabled:Boolean(n!=d.yp.loanOrBorrow)}],N=(0,pe.We)().openConnectModal,b=(0,r.useContext)(o.S).currentUser;return(0,a.jsx)("div",{className:"_4mihxj0 _1c1tagj1",children:(0,a.jsx)(i.Z,{activeKey:p,onTabChange:function(e){j(e)},items:A,active:!0,children:b?h?n==d.yp.depositNFT?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(L,{})}):n==d.yp.loanOrBorrow&&"borrow"==p?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(ne,{})}):n==d.yp.loanOrBorrow&&"repay"==p?(0,a.jsx)(a.Fragment,{children:(0,a.jsx)(xe,{})}):(0,a.jsx)(l.Z,{icon:"",title:"",description:"",buttons:[{title:"Select Nft to deposit",variant:"primary",onClick:function(){v(d.yp.depositNFT),f(!0),document.body.classList.add("disable-scroll")}}]}):(0,a.jsx)(l.Z,{icon:(0,a.jsx)("div",{className:"_4mihxj4"}),title:"Manage panel",description:"First, choose a NFT collection"}):(0,a.jsx)(l.Z,{icon:(0,a.jsx)("div",{className:"_4mihxj5"}),title:"You didn\u2019t connect any wallet yet",description:"First, choose a NFT collection",buttons:[{title:"CONNECT WALLET",onClick:N}]})})})}},10631:function(e,s,n){"use strict";n.d(s,{I:function(){return t}});var t=864},2533:function(e,s,n){"use strict";n.d(s,{Y:function(){return l}});var t=n(48098),a=n(88767),r=n(28432),i=n(56050);function l(e,s,n){var l=(0,a.useQuery)(r.a.borrowAmount(e,s),(function(){return""!=s?(0,t.N3)(e,s,n):"0"}),{onSuccess:function(e){return e},onError:function(e){return"0"},retry:!1,staleTime:i.$r}),o=l.data,c=l.isLoading,d=l.isFetching;return[o||"0",c||d]}},16086:function(e,s,n){"use strict";var t=n(67294);s.Z=function(){var e=(0,t.useState)({width:0,height:0}),s=e[0],n=e[1];return(0,t.useEffect)((function(){var e=function(){n({width:window.innerWidth,height:window.innerHeight})};return e(),window.addEventListener("resize",e),function(){return window.removeEventListener("resize",e)}}),[]),s}},25193:function(){},31754:function(){},76174:function(){},28990:function(){},19244:function(){},37550:function(){},71686:function(){}}]);