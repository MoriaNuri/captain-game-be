(this.webpackJsonpaudition=this.webpackJsonpaudition||[]).push([[0],{40:function(t,e,n){},62:function(t,e,n){},63:function(t,e,n){},64:function(t,e,n){},65:function(t,e,n){},66:function(t,e,n){},67:function(t,e,n){},68:function(t,e,n){},76:function(t,e,n){"use strict";n.r(e);var a=n(0),i=n.n(a),c=n(30),s=n.n(c),o=n(32),r=n(5),l=n(2),u=n(11),h=n(14),d=n(4),f=n(3),v=(n(40),n.p+"static/media/sea.ea2449df.png"),p=n.p+"static/media/pirate.144a1284.png",j=n(1),b=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).OnGame=a.OnGame.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"OnGame",value:function(){this.props.history.push("/game")}},{key:"render",value:function(){return Object(j.jsxs)("div",{className:"home-page",style:{backgroundImage:"url(".concat(v,")")},children:[Object(j.jsx)("img",{className:"pirate",src:p,alt:""}),Object(j.jsx)("h1",{children:"Captain Game"}),Object(j.jsx)("div",{className:"start-container",children:Object(j.jsx)("div",{className:"start-btn",onClick:this.OnGame,children:"Play"})})]})}}]),n}(a.Component),g=n(12),m=n.n(g),O=n(16),y=n(35),w=n(31),x=n.n(w),k="/api/";function M(t){return R.apply(this,arguments)}function R(){return(R=Object(O.a)(m.a.mark((function t(e){var n,a,i,c=arguments;return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n=c.length>1&&void 0!==c[1]?c[1]:"GET",a=c.length>2&&void 0!==c[2]?c[2]:null,t.prev=2,t.next=5,x()({url:"".concat(k).concat(e),method:n,data:a,params:"GET"===n?a:null});case 5:return i=t.sent,t.abrupt("return",i.data);case 9:throw t.prev=9,t.t0=t.catch(2),console.log("Had Issues ".concat(n,"ing to the backend, endpoint: ").concat(e,", with data: ").concat(a)),console.dir(t.t0),t.t0.response&&t.t0.response.status,t.t0;case 15:case"end":return t.stop()}}),t,null,[[2,9]])})))).apply(this,arguments)}var D={get:function(t,e){return M(t,"GET",e)},post:function(t,e){return M(t,"POST",e)}},E=n(78),N=function(){function t(e,n,a){Object(l.a)(this,t),this.location={x:0,y:0},this.destinationEntity=null,this.arrivedAtDestination$=new E.a,this.img=this.design(e),this.size=a,this.setLocation(n)}return Object(u.a)(t,[{key:"stepToDestination",value:function(){var t=this.location.x-this.destinationEntity.location.x,e=this.location.y-this.destinationEntity.location.y;0===t?0===e?(this.arrivedAtDestination$.next(this.destinationEntity),this.destinationEntity=null):this.location.y-=5*Math.sign(e):this.location.x-=5*Math.sign(t)}},{key:"stepIfRequired",value:function(){this.destinationEntity&&this.stepToDestination()}},{key:"update",value:function(){this.stepIfRequired()}},{key:"draw",value:function(t){t.drawImage(this.img,this.location.x,this.location.y)}},{key:"design",value:function(t){var e=document.createElement("img");return e.src=t,e}},{key:"getLocation",value:function(){return this.location}},{key:"getSize",value:function(){return this.size}},{key:"setLocation",value:function(t){this.location.x=t.x-this.size.width/2,this.location.y=t.y-this.size.height/2}},{key:"setDestination",value:function(t){this.destinationEntity=t}}]),t}(),C=n.p+"static/media/bottle.bbf6a168.png",G=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){Object(l.a)(this,n);return e.call(this,C,t,{width:280,height:120})}return n}(N),I=n.p+"static/media/dragon.17bf8ae7.png",L=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){Object(l.a)(this,n);return e.call(this,I,t,{width:490,height:320})}return n}(N),P=n.p+"static/media/island.138532d4.png",S=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){Object(l.a)(this,n);return e.call(this,P,t,{width:640,height:600})}return n}(N),T=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){Object(l.a)(this,n);return e.call(this,p,t,{width:180,height:270})}return n}(N),z=n.p+"static/media/island1.2bf08301.png",A=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){Object(l.a)(this,n);return e.call(this,z,t,{width:250,height:100})}return n}(N),W=n.p+"static/media/island2.d6530a36.png",Y=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){Object(l.a)(this,n);return e.call(this,W,t,{width:450,height:250})}return n}(N),q=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){Object(l.a)(this,n);return e.call(this,v,t,{width:0,height:0})}return n}(N),_=n.p+"static/media/island4.1be3cbfe.png",H=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){Object(l.a)(this,n);return e.call(this,_,t,{width:650,height:580})}return n}(N),F=n.p+"static/media/wave.73fc23ec.png",J=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){Object(l.a)(this,n);return e.call(this,F,t,{width:0,height:0})}return n}(N),$={},B=[],K=[],Q=null,U=null,V=null,X=[],Z=3239,tt=2179,et=new(function(){function t(e){Object(l.a)(this,t),this._entity=e,window.playEntity=this._entity}return Object(u.a)(t,[{key:"setDestination",value:function(t){this._entity.setDestination(t)}},{key:"entity",get:function(){return this._entity}}]),t}())(new T({x:250,y:250})),nt={restartGame:function(t){(function(t){V=t})(t),U=document.createElement("canvas"),(Q=U.getContext("2d")).canvas.width=Z,Q.canvas.height=tt,K.push.apply(K,[new q({x:0,y:0}),new J({x:0,y:0})]),$[1]=new A({x:250,y:250}),$[2]=new Y({x:1300,y:240}),$[3]=new L({x:2200,y:350}),$[4]=new H({x:1500,y:740}),$[5]=new G({x:250,y:1200}),$[6]=new S({x:2200,y:1e3}),$[7]=et.entity,K.push.apply(K,Object(y.a)(Object.values($))),window.requestAnimationFrame(at),function(){it.apply(this,arguments)}()},getWorldCameraLocation:function(){var t=et.entity.getLocation();return{x:Math.min(V.canvas.width/2-t.x-91,0),y:Math.min(V.canvas.height/2-t.y-136,0)}},movePlayer:function(t){et.entity.setDestination($[t])},getSentences:function(){return B},saveLog:function(t,e){var n={action:t,timestamp:e};X.push(n),X.length>5&&function(t){ct.apply(this,arguments)}(X)}};function at(){K.forEach((function(t){t.update()})),function(){V.fillStyle="#0074dc",V.fillRect(0,0,V.canvas.width,V.canvas.height),Q.clearRect(0,0,Z,tt),K.forEach((function(t){t.draw(Q)}));var t=nt.getWorldCameraLocation();V.drawImage(U,t.x,t.y)}(),window.requestAnimationFrame(at)}function it(){return(it=Object(O.a)(m.a.mark((function t(){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.get("sentences");case 3:B=t.sent,t.next=9;break;case 6:t.prev=6,t.t0=t.catch(0),console.log(t.t0);case 9:case"end":return t.stop()}}),t,null,[[0,6]])})))).apply(this,arguments)}function ct(){return(ct=Object(O.a)(m.a.mark((function t(e){return m.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,D.post("logs",e);case 3:t.next=8;break;case 5:t.prev=5,t.t0=t.catch(0),console.log(t.t0);case 8:case"end":return t.stop()}}),t,null,[[0,5]])})))).apply(this,arguments)}var st=nt,ot=(n(62),function(){var t=Object(a.useRef)(null);return Object(a.useEffect)((function(){var e=t.current.getContext("2d");e.canvas.width=window.innerWidth,e.canvas.height=window.innerHeight,st.restartGame(e),window.addEventListener("resize",(function(){e.canvas.width=window.innerWidth,e.canvas.height=window.innerHeight}))}),[]),Object(j.jsxs)("section",{children:[Object(j.jsx)("canvas",{ref:t,className:"canvas",width:"100%",height:"100%",children:" "}),Object(j.jsx)("div",{className:"circle"})]})});n(63);var rt={getRandomIntInclusive:function(t,e){return t=Math.ceil(t),e=Math.floor(e),Math.floor(Math.random()*(e-t+1)+t)}},lt=(n(64),n(65),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.face,n=t.rolling;return Object(j.jsx)("i",{className:"Die fas fa-dice-".concat(e,"\n              ").concat(n&&"Die-shaking")})}}]),n}(a.Component)),ut=(n(66),function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(){return Object(l.a)(this,n),e.apply(this,arguments)}return Object(u.a)(n,[{key:"render",value:function(){var t=this.props,e=t.msg,n=t.isOpen,a=t.closeModal;return Object(j.jsx)("section",{children:n&&Object(j.jsxs)("div",{className:"modal-container",children:[Object(j.jsx)("h1",{children:e}),Object(j.jsx)("div",{className:"close-modal-btn",onClick:a,children:"Close"})]})})}}]),n}(a.Component)),ht=n.p+"static/media/game-over.492ea39f.wav",dt=n.p+"static/media/winner.a7022fca.wav",ft=function(t){Object(d.a)(n,t);var e=Object(f.a)(n);function n(t){var a;return Object(l.a)(this,n),(a=e.call(this,t)).state={dice:"one",rolling:!1,isOpen:!1,msg:""},a.getRandomNum=function(){return 1*Math.random()},a.showMsg=function(t){a.setState({isOpen:!0,msg:t})},a.closeModal=function(){a.setState({isOpen:!1})},a.OnRoll=a.OnRoll.bind(Object(h.a)(a)),a}return Object(u.a)(n,[{key:"OnRoll",value:function(){var t=this,e=this.props.sides[rt.getRandomIntInclusive(0,5)];this.setState({dice:e,rolling:!0}),setTimeout((function(){t.setState({rolling:!1})}),1e3);var n=new Audio(ht),a=new Audio(dt);switch(e){case"one":st.movePlayer(1),st.saveLog(1,Date.now()),this.showMsg("You stay in the same place. Game over!"),n.play();break;case"two":a.play(),st.movePlayer(2),this.getRandomNum()<=.5?(this.showMsg(" The rum spoiled and turned into vinegar! GameOver!!"),st.saveLog(3,Date.now())):this.showMsg("You Won!"),st.saveLog(2,Date.now());break;case"three":n.play(),st.movePlayer(3),this.showMsg("The dragon eat you! Game Over"),st.saveLog(1,Date.now());break;case"four":a.play(),st.movePlayer(4),st.saveLog(2,Date.now()),this.showMsg("You won!");break;case"five":st.movePlayer(5);var i=st.getSentences(),c=i[rt.getRandomIntInclusive(0,i.length-1)];this.showMsg(c.description);break;case"six":a.play(),st.movePlayer(6),this.showMsg("You won! You came to the island and survived");break;default:console.log(e)}}},{key:"render",value:function(){var t=this.state.rolling?"RollDice-rolling":"",e=this.state,n=e.dice,a=e.rolling,i=e.msg,c=e.isOpen;return Object(j.jsxs)("div",{className:"RollDice",children:[Object(j.jsx)("button",{className:t,disabled:this.state.rolling||c,onClick:this.OnRoll,children:this.state.rolling?"Rolling":"Roll dice"}),Object(j.jsxs)("div",{className:"RollDice-container",children:[Object(j.jsx)(lt,{face:n,rolling:a}),Object(j.jsx)(ut,{msg:i,isOpen:c,closeModal:this.closeModal})]})]})}}]),n}(a.Component);ft.defaultProps={sides:["one","two","three","four","five","six"]};var vt=ft,pt=function(t){return Object(j.jsx)("div",{className:"gameSidePanel",children:Object(j.jsx)(vt,{})})},jt=(n(67),function(t){return Object(j.jsxs)("div",{className:"game-container",children:[Object(j.jsx)(ot,{}),Object(j.jsx)(pt,{})]})});n(68),n(69);var bt=function(){return Object(j.jsxs)(o.a,{children:[Object(j.jsx)(r.a,{path:"/",exact:!0,component:b}),Object(j.jsx)(r.a,{path:"/game",component:jt})]})};n(75);s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(bt,{})}),document.getElementById("root"))}},[[76,1,2]]]);
//# sourceMappingURL=main.d0c69e7f.chunk.js.map