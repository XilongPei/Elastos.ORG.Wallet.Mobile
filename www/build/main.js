webpackJsonp([2],{138:function(l,n){function u(l){return Promise.resolve().then(function(){throw new Error("Cannot find module '"+l+"'.")})}u.keys=function(){return[]},u.resolve=u,l.exports=u,u.id=138},166:function(l,n,u){function a(l){var n=t[l];return n?u.e(n[1]).then(function(){return u(n[0])}):Promise.reject(new Error("Cannot find module '"+l+"'."))}var t={"../pages/info/info.module.ngfactory":[242,1],"../pages/manage/manage.module.ngfactory":[243,0]};a.keys=function(){return Object.keys(t)},a.id=166,l.exports=a},193:function(l,n,u){"use strict";u.d(n,"a",function(){return a});var a=function(){function l(){}return l.initAppListData=function(){null==window.localStorage.getItem(l.storageKeyAppList)&&l.saveAppListData(l.initAppList)},l.getAppListData=function(){return JSON.parse(window.localStorage.getItem(l.storageKeyAppList))},l.saveAppListData=function(n){window.localStorage.setItem(l.storageKeyAppList,JSON.stringify(n))},l.appName="elastos",l.storageKeyAppList=l.appName+"_appList",l.currentDate=new Date,l.currentDateYYYYMMDD=l.currentDate.getFullYear()+"."+(l.currentDate.getMonth()<9?"0"+(l.currentDate.getMonth()+1):l.currentDate.getMonth()+1)+"."+(l.currentDate.getDay()<9?"0"+(l.currentDate.getDay()+1):l.currentDate.getDay()+1),l.initAppList=[{path:"../wallet/www/assets/images/logo.png",name:"Wallet",url:"wallet/www/index.html",size:"1 MB",date:l.currentDateYYYYMMDD},{path:"../todo/www/assets/imgs/logo.png",name:"ToDO",url:"todo/www/index.html",size:"2 MB",date:l.currentDateYYYYMMDD},{path:"../CarTest/www/assets/imgs/logo.png",name:"CarTest",url:"CarTest/www/index.html",size:"666 KB",date:l.currentDateYYYYMMDD},{path:"assets/imgs/logo.png",name:"Vote",url:"https://vote.elastos.org/",size:"888 KB",date:l.currentDateYYYYMMDD},{path:"../sample/www/assets/imgs/logo.png",name:"Sample",url:"sample/www/index.html",size:"999 KB",date:l.currentDateYYYYMMDD}],l}()},205:function(l,n,u){"use strict";function a(l){return e._19(0,[(l()(),e.Z(0,0,null,null,26,"ion-item",[["class","item item-block"]],null,null,null,i.b,i.a)),e.Y(1,1097728,null,3,o.a,[c.a,r.a,e.j,e.z,[2,s.a]],null,null),e._16(335544320,7,{contentLabel:0}),e._16(603979776,8,{_buttons:1}),e._16(603979776,9,{_icons:1}),e.Y(5,16384,null,0,_.a,[],null,null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(7,0,null,0,2,"ion-checkbox",[["checked","true"],["color","dark"]],[[2,"checkbox-disabled",null]],[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==e._11(l,9)._click(u)&&a}return a},p.b,p.a)),e._14(5120,null,f.e,function(l){return[l]},[d.a]),e.Y(9,1228800,null,0,d.a,[r.a,c.a,[2,o.a],e.j,e.z],{color:[0,"color"],checked:[1,"checked"]},null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(11,0,null,0,4,"ion-thumbnail",[["item-start",""]],null,null,null,null,null)),e.Y(12,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(14,0,null,null,0,"img",[["alt",""],["src","assets/imgs/camera.png"]],null,null,null,null,null)),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(17,0,null,0,8,"ion-thumbnail",[["item-start",""]],null,null,null,null,null)),e.Y(18,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(20,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e._18(-1,null,["My Neighbor Totoro"])),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._18(-1,null,["Hayao Miyazaki • 1988"])),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n        "]))],function(l,n){l(n,9,0,"dark","true")},function(l,n){l(n,7,0,e._11(n,9)._disabled)})}function t(l){return e._19(0,[(l()(),e._18(-1,null,["\n"])),(l()(),e.Z(1,0,null,null,10,"ion-header",[],null,null,null,null,null)),e.Y(2,16384,null,0,m.a,[r.a,e.j,e.z,[2,g.a]],null,null),(l()(),e._18(-1,null,["\n\n  "])),(l()(),e.Z(4,0,null,null,6,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,b.b,b.a)),e.Y(5,49152,null,0,k.a,[Y.a,[2,g.a],[2,Z.a],r.a,e.j,e.z],null,null),(l()(),e._18(-1,3,["\n    "])),(l()(),e.Z(7,0,null,3,2,"ion-title",[],null,null,null,w.b,w.a)),e.Y(8,49152,null,0,y.a,[r.a,e.j,e.z,[2,v.a],[2,k.a]],null,null),(l()(),e._18(-1,0,["info"])),(l()(),e._18(-1,3,["\n  "])),(l()(),e._18(-1,null,["\n\n"])),(l()(),e._18(-1,null,["\n\n"])),(l()(),e.Z(13,0,null,null,148,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,x.b,x.a)),e.Y(14,4374528,null,0,D.a,[r.a,z.a,j.a,e.j,e.z,Y.a,L.a,e.u,[2,g.a],[2,Z.a]],null,null),(l()(),e._18(-1,1,["\n  "])),(l()(),e.Z(16,0,null,1,144,"ion-grid",[["class","grid"]],null,null,null,null,null)),e.Y(17,16384,null,0,M.a,[],null,null),(l()(),e._18(-1,null,["\n    "])),(l()(),e.Z(19,0,null,null,37,"ion-list",[["no-lines",""]],null,null,null,null,null)),e.Y(20,16384,null,0,I.a,[r.a,e.j,e.z,z.a,O.l,j.a],null,null),(l()(),e._18(-1,null,["\n      "])),(l()(),e.Z(22,0,null,null,25,"ion-row",[["class","row"]],null,null,null,null,null)),e.Y(23,16384,null,0,N.a,[],null,null),(l()(),e._18(-1,null,["\n        "])),(l()(),e.Z(25,0,null,null,21,"ion-item",[["class","item item-block"]],null,null,null,i.b,i.a)),e.Y(26,1097728,null,3,o.a,[c.a,r.a,e.j,e.z,[2,s.a]],null,null),e._16(335544320,1,{contentLabel:0}),e._16(603979776,2,{_buttons:1}),e._16(603979776,3,{_icons:1}),e.Y(30,16384,null,0,_.a,[],null,null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(32,0,null,0,4,"ion-thumbnail",[["class","up-app"],["item-start",""]],null,null,null,null,null)),e.Y(33,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(35,0,null,null,0,"img",[["src","assets/imgs/slice2.png"]],null,null,null,null,null)),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(38,0,null,2,1,"h2",[],null,null,null,null,null)),(l()(),e._18(-1,null,["My Neighbor Totoro"])),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(41,0,null,2,1,"p",[],null,null,null,null,null)),(l()(),e._18(-1,null,["My Neighbor Totoro"])),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(44,0,null,2,1,"p",[],null,null,null,null,null)),(l()(),e._18(-1,null,["Hayao Miyazaki • 1988"])),(l()(),e._18(-1,2,["\n        "])),(l()(),e._18(-1,null,["\n      "])),(l()(),e._18(-1,null,["\n      "])),(l()(),e.Z(49,0,null,null,6,"ion-list-header",[["class","item"]],null,null,null,i.b,i.a)),e.Y(50,1097728,null,3,o.a,[c.a,r.a,e.j,e.z,[2,s.a]],null,null),e._16(335544320,4,{contentLabel:0}),e._16(603979776,5,{_buttons:1}),e._16(603979776,6,{_icons:1}),e.Y(54,16384,null,0,A.a,[r.a,e.z,e.j,[8,null]],null,null),(l()(),e._18(-1,2,["Permissions"])),(l()(),e._18(-1,null,["\n\n    "])),(l()(),e._18(-1,null,["\n    "])),(l()(),e.Z(58,0,null,null,101,"ion-list",[["no-lines",""]],null,null,null,null,null)),e.Y(59,16384,null,0,I.a,[r.a,e.j,e.z,z.a,O.l,j.a],null,null),(l()(),e._18(-1,null,["\n      "])),(l()(),e.Z(61,0,null,null,89,"ion-row",[["class","row"]],null,null,null,null,null)),e.Y(62,16384,null,0,N.a,[],null,null),(l()(),e._18(-1,null,["\n        "])),(l()(),e.U(16777216,null,null,1,null,a)),e.Y(65,802816,null,0,F.h,[e.I,e.F,e.p],{ngForOf:[0,"ngForOf"]},null),(l()(),e._18(-1,null,["\n\n        "])),(l()(),e.Z(67,0,null,null,26,"ion-item",[["class","item item-block"]],null,null,null,i.b,i.a)),e.Y(68,1097728,null,3,o.a,[c.a,r.a,e.j,e.z,[2,s.a]],null,null),e._16(335544320,10,{contentLabel:0}),e._16(603979776,11,{_buttons:1}),e._16(603979776,12,{_icons:1}),e.Y(72,16384,null,0,_.a,[],null,null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(74,0,null,0,2,"ion-checkbox",[["checked","true"],["color","dark"]],[[2,"checkbox-disabled",null]],[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==e._11(l,76)._click(u)&&a}return a},p.b,p.a)),e._14(5120,null,f.e,function(l){return[l]},[d.a]),e.Y(76,1228800,null,0,d.a,[r.a,c.a,[2,o.a],e.j,e.z],{color:[0,"color"],checked:[1,"checked"]},null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(78,0,null,0,4,"ion-thumbnail",[["item-start",""]],null,null,null,null,null)),e.Y(79,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(81,0,null,null,0,"img",[["src","assets/imgs/camera.png"]],null,null,null,null,null)),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(84,0,null,0,8,"ion-thumbnail",[["item-start",""]],null,null,null,null,null)),e.Y(85,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(87,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e._18(-1,null,["My Neighbor Totoro"])),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(90,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._18(-1,null,["Hayao Miyazaki • 1988"])),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n        "])),(l()(),e._18(-1,null,["\n\n        "])),(l()(),e.Z(95,0,null,null,26,"ion-item",[["class","item item-block"]],null,null,null,i.b,i.a)),e.Y(96,1097728,null,3,o.a,[c.a,r.a,e.j,e.z,[2,s.a]],null,null),e._16(335544320,13,{contentLabel:0}),e._16(603979776,14,{_buttons:1}),e._16(603979776,15,{_icons:1}),e.Y(100,16384,null,0,_.a,[],null,null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(102,0,null,0,2,"ion-checkbox",[["checked","true"],["color","dark"]],[[2,"checkbox-disabled",null]],[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==e._11(l,104)._click(u)&&a}return a},p.b,p.a)),e._14(5120,null,f.e,function(l){return[l]},[d.a]),e.Y(104,1228800,null,0,d.a,[r.a,c.a,[2,o.a],e.j,e.z],{color:[0,"color"],checked:[1,"checked"]},null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(106,0,null,0,4,"ion-thumbnail",[["item-start",""]],null,null,null,null,null)),e.Y(107,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(109,0,null,null,0,"img",[["src","assets/imgs/id.png"]],null,null,null,null,null)),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(112,0,null,0,8,"ion-thumbnail",[["item-start",""]],null,null,null,null,null)),e.Y(113,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(115,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e._18(-1,null,["My Neighbor Totoro"])),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(118,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._18(-1,null,["Hayao Miyazaki • 1988"])),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n        "])),(l()(),e._18(-1,null,["\n\n        "])),(l()(),e.Z(123,0,null,null,26,"ion-item",[["class","item item-block"]],null,null,null,i.b,i.a)),e.Y(124,1097728,null,3,o.a,[c.a,r.a,e.j,e.z,[2,s.a]],null,null),e._16(335544320,16,{contentLabel:0}),e._16(603979776,17,{_buttons:1}),e._16(603979776,18,{_icons:1}),e.Y(128,16384,null,0,_.a,[],null,null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(130,0,null,0,2,"ion-checkbox",[["checked","true"],["color","dark"]],[[2,"checkbox-disabled",null]],[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==e._11(l,132)._click(u)&&a}return a},p.b,p.a)),e._14(5120,null,f.e,function(l){return[l]},[d.a]),e.Y(132,1228800,null,0,d.a,[r.a,c.a,[2,o.a],e.j,e.z],{color:[0,"color"],checked:[1,"checked"]},null),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(134,0,null,0,4,"ion-thumbnail",[["item-start",""]],null,null,null,null,null)),e.Y(135,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(137,0,null,null,0,"img",[["src","assets/imgs/speaker.png"]],null,null,null,null,null)),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n          "])),(l()(),e.Z(140,0,null,0,8,"ion-thumbnail",[["item-start",""]],null,null,null,null,null)),e.Y(141,16384,null,0,h.a,[],null,null),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(143,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),e._18(-1,null,["My Neighbor Totoro"])),(l()(),e._18(-1,null,["\n            "])),(l()(),e.Z(146,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),e._18(-1,null,["Hayao Miyazaki • 1988"])),(l()(),e._18(-1,null,["\n          "])),(l()(),e._18(-1,2,["\n        "])),(l()(),e._18(-1,null,["\n      "])),(l()(),e._18(-1,null,["\n      "])),(l()(),e.Z(152,0,null,null,6,"ion-list-header",[["class","item"]],null,null,null,i.b,i.a)),e.Y(153,1097728,null,3,o.a,[c.a,r.a,e.j,e.z,[2,s.a]],null,null),e._16(335544320,19,{contentLabel:0}),e._16(603979776,20,{_buttons:1}),e._16(603979776,21,{_icons:1}),e.Y(157,16384,null,0,A.a,[r.a,e.z,e.j,[8,null]],null,null),(l()(),e._18(-1,2,["Infomation"])),(l()(),e._18(-1,null,["\n\n    "])),(l()(),e._18(-1,null,["\n  "])),(l()(),e._18(-1,1,["\n"])),(l()(),e._18(-1,null,["\n\n\n"]))],function(l,n){l(n,65,0,n.component.appManageList);l(n,76,0,"dark","true");l(n,104,0,"dark","true");l(n,132,0,"dark","true")},function(l,n){l(n,4,0,e._11(n,5)._hidden,e._11(n,5)._sbPadding);l(n,13,0,e._11(n,14).statusbarPadding,e._11(n,14)._hasRefresher);l(n,74,0,e._11(n,76)._disabled);l(n,102,0,e._11(n,104)._disabled);l(n,130,0,e._11(n,132)._disabled)})}u.d(n,"a",function(){return T});var e=u(0),i=u(105),o=u(17),c=u(12),r=u(1),s=u(37),_=u(56),p=u(168),f=u(13),d=u(52),h=u(79),m=u(80),g=u(5),b=u(169),k=u(26),Y=u(8),Z=u(19),w=u(170),y=u(59),v=u(39),x=u(106),D=u(21),z=u(4),j=u(9),L=u(22),M=u(69),I=u(46),O=u(6),N=u(55),A=u(71),F=u(11),P=u(86),S=u(10),C=e.X({encapsulation:2,styles:[],data:{}}),T=e.V("page-info",P.a,function(l){return e._19(0,[(l()(),e.Z(0,0,null,null,1,"page-info",[],null,null,null,t,C)),e.Y(1,49152,null,0,P.a,[Z.a,S.a],null,null)],null,null)},{},{},[])},206:function(l,n,u){"use strict";function a(l){return i._19(0,[(l()(),i.Z(0,0,null,null,35,"ion-item",[["class","item item-block"]],null,null,null,o.b,o.a)),i.Y(1,1097728,null,3,c.a,[r.a,s.a,i.j,i.z,[2,_.a]],null,null),i._16(335544320,1,{contentLabel:0}),i._16(603979776,2,{_buttons:1}),i._16(603979776,3,{_icons:1}),i.Y(5,16384,null,0,p.a,[],null,null),(l()(),i._18(-1,2,["\n      "])),(l()(),i.Z(7,0,null,0,2,"ion-checkbox",[["color","dark"],["ng-checked","checked"]],[[2,"checkbox-disabled",null]],[[null,"click"]],function(l,n,u){var a=!0,t=l.component;if("click"===n){a=!1!==i._11(l,9)._click(u)&&a}if("click"===n){a=!1!==t.checkApp(l.context.$implicit)&&a}return a},f.b,f.a)),i._14(5120,null,d.e,function(l){return[l]},[h.a]),i.Y(9,1228800,null,0,h.a,[s.a,r.a,[2,c.a],i.j,i.z],{color:[0,"color"]},null),(l()(),i._18(-1,2,["\n      "])),(l()(),i.Z(11,0,null,0,4,"ion-thumbnail",[["item-start",""]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.goInfo(l.context.index)&&a}return a},null,null)),i.Y(12,16384,null,0,m.a,[],null,null),(l()(),i._18(-1,null,["\n        "])),(l()(),i.Z(14,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),i._18(-1,null,["\n      "])),(l()(),i._18(-1,2,["\n      "])),(l()(),i.Z(17,0,null,0,11,"ion-thumbnail",[["item-start",""]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.goInfo(l.context.index)&&a}return a},null,null)),i.Y(18,16384,null,0,m.a,[],null,null),(l()(),i._18(-1,null,["\n        "])),(l()(),i.Z(20,0,null,null,1,"h2",[],null,null,null,null,null)),(l()(),i._18(21,null,["",""])),(l()(),i._18(-1,null,["\n        "])),(l()(),i.Z(23,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._18(24,null,["",""])),(l()(),i._18(-1,null,["\n        "])),(l()(),i.Z(26,0,null,null,1,"p",[],null,null,null,null,null)),(l()(),i._18(27,null,["Added ",""])),(l()(),i._18(-1,null,["\n      "])),(l()(),i._18(-1,2,["\n      "])),(l()(),i.Z(30,0,null,4,4,"button",[["clear",""],["ion-button",""],["item-end",""]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.goInfo(l.context.index)&&a}return a},g.b,g.a)),i.Y(31,1097728,[[2,4]],0,b.a,[[8,""],s.a,i.j,i.z],{clear:[0,"clear"]},null),(l()(),i._18(-1,0,["\n        "])),(l()(),i.Z(33,0,null,0,0,"img",[["class","right_arrow"],["src","assets/imgs/arrow.png"]],null,null,null,null,null)),(l()(),i._18(-1,0,["\n      "])),(l()(),i._18(-1,2,["\n    "]))],function(l,n){l(n,9,0,"dark");l(n,31,0,"")},function(l,n){l(n,7,0,i._11(n,9)._disabled);l(n,14,0,i._2(1,"",n.context.$implicit.path,""));l(n,21,0,n.context.$implicit.name);l(n,24,0,n.context.$implicit.size);l(n,27,0,n.context.$implicit.date)})}function t(l){return i._19(0,[(l()(),i.Z(0,0,null,null,14,"div",[["class","footer"]],null,null,null,null,null)),(l()(),i._18(-1,null,["\n  "])),(l()(),i.Z(2,0,null,null,11,"ion-row",[["class","row"]],null,null,null,null,null)),i.Y(3,16384,null,0,k.a,[],null,null),(l()(),i._18(-1,null,["\n    "])),(l()(),i._18(-1,null,["\n    "])),(l()(),i.Z(6,0,null,null,6,"ion-col",[["class","col"],["col-12",""]],null,null,null,null,null)),i.Y(7,16384,null,0,Y.a,[],null,null),(l()(),i._18(-1,null,["\n      "])),(l()(),i.Z(9,0,null,null,2,"ion-card",[["class","card-box card-delete"]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.doDel()&&a}return a},null,null)),i.Y(10,16384,null,0,Z.a,[s.a,i.j,i.z],null,null),(l()(),i._18(-1,null,["\n        Delete\n      "])),(l()(),i._18(-1,null,["\n    "])),(l()(),i._18(-1,null,["\n  "])),(l()(),i._18(-1,null,["\n"]))],null,null)}function e(l){return i._19(0,[(l()(),i._18(-1,null,["\n"])),(l()(),i.Z(1,0,null,null,11,"ion-header",[],null,null,null,null,null)),i.Y(2,16384,null,0,w.a,[s.a,i.j,i.z,[2,y.a]],null,null),(l()(),i._18(-1,null,["\n  "])),(l()(),i.Z(4,0,null,null,7,"ion-navbar",[["class","toolbar"]],[[8,"hidden",0],[2,"statusbar-padding",null]],null,null,v.b,v.a)),i.Y(5,49152,null,0,x.a,[D.a,[2,y.a],[2,z.a],s.a,i.j,i.z],null,null),(l()(),i._18(-1,3,["\n    "])),(l()(),i.Z(7,0,null,3,2,"ion-title",[],null,null,null,j.b,j.a)),i.Y(8,49152,null,0,L.a,[s.a,i.j,i.z,[2,M.a],[2,x.a]],null,null),(l()(),i._18(-1,0,["manage"])),(l()(),i._18(-1,3,["\n\n    "])),(l()(),i._18(-1,3,["\n  "])),(l()(),i._18(-1,null,["\n"])),(l()(),i._18(-1,null,["\n\n"])),(l()(),i.Z(14,0,null,null,30,"ion-content",[["overflow-scroll","true"]],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,I.b,I.a)),i.Y(15,4374528,null,0,O.a,[s.a,N.a,A.a,i.j,i.z,D.a,F.a,i.u,[2,y.a],[2,z.a]],null,null),(l()(),i._18(-1,1,["\n  "])),(l()(),i.Z(17,0,null,1,19,"ion-card",[["class","import-box"]],null,null,null,null,null)),i.Y(18,16384,null,0,Z.a,[s.a,i.j,i.z],null,null),(l()(),i._18(-1,null,["\n    "])),(l()(),i.Z(20,0,null,null,8,"button",[["icon-only",""],["ion-button",""]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.importFromEpk()&&a}return a},g.b,g.a)),i.Y(21,1097728,null,0,b.a,[[8,""],s.a,i.j,i.z],null,null),(l()(),i._18(-1,0,["\n      "])),(l()(),i.Z(23,0,null,0,4,"ion-icon",[["role","img"]],[[2,"hide",null]],null,null,null,null)),i.Y(24,147456,null,0,P.a,[s.a,i.j,i.z],null,null),(l()(),i._18(-1,null,["\n        "])),(l()(),i.Z(26,0,null,null,0,"img",[["alt",""],["class","icon-right"],["src","assets/imgs/add.png"]],null,null,null,null,null)),(l()(),i._18(-1,null,["\n      "])),(l()(),i._18(-1,0,["\n    "])),(l()(),i._18(-1,null,["\n    "])),(l()(),i.Z(30,0,null,null,5,"ion-card-content",[],null,null,null,null,null)),i.Y(31,16384,null,0,S.a,[s.a,i.j,i.z],null,null),(l()(),i._18(-1,null,["\n      "])),(l()(),i.Z(33,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),i._18(-1,null,["Import from Local file"])),(l()(),i._18(-1,null,["\n    "])),(l()(),i._18(-1,null,["\n  "])),(l()(),i._18(-1,1,["\n\n  "])),(l()(),i.Z(38,0,null,1,5,"ion-list",[["no-lines",""]],null,null,null,null,null)),i.Y(39,16384,null,0,C.a,[s.a,i.j,i.z,N.a,T.l,A.a],null,null),(l()(),i._18(-1,null,["\n    "])),(l()(),i.U(16777216,null,null,1,null,a)),i.Y(42,802816,null,0,E.h,[i.I,i.F,i.p],{ngForOf:[0,"ngForOf"]},null),(l()(),i._18(-1,null,["\n  "])),(l()(),i._18(-1,1,["\n"])),(l()(),i._18(-1,null,["\n\n"])),(l()(),i._18(-1,null,["\n"])),(l()(),i.U(16777216,null,null,1,null,t)),i.Y(48,16384,null,0,E.i,[i.I,i.F],{ngIf:[0,"ngIf"]},null),(l()(),i._18(-1,null,["\n\n"])),(l()(),i._18(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,42,0,u.appList);l(n,48,0,u.isShow)},function(l,n){l(n,4,0,i._11(n,5)._hidden,i._11(n,5)._sbPadding);l(n,14,0,i._11(n,15).statusbarPadding,i._11(n,15)._hasRefresher);l(n,23,0,i._11(n,24)._hidden)})}u.d(n,"a",function(){return $});var i=u(0),o=u(105),c=u(17),r=u(12),s=u(1),_=u(37),p=u(56),f=u(168),d=u(13),h=u(52),m=u(79),g=u(23),b=u(16),k=u(55),Y=u(68),Z=u(99),w=u(80),y=u(5),v=u(169),x=u(26),D=u(8),z=u(19),j=u(170),L=u(59),M=u(39),I=u(106),O=u(21),N=u(4),A=u(9),F=u(22),P=u(33),S=u(64),C=u(46),T=u(6),E=u(11),J=u(87),B=u(10),H=u(47),R=u(81),K=u(82),U=u(83),V=i.X({encapsulation:2,styles:[],data:{}}),$=i.V("page-manage",J.a,function(l){return i._19(0,[(l()(),i.Z(0,0,null,null,1,"page-manage",[],null,null,null,e,V)),i.Y(1,49152,null,0,J.a,[z.a,B.a,H.a,R.a,K.a,U.a],null,null)],null,null)},{},{},[])},207:function(l,n,u){"use strict";function a(l){return s._19(0,[(l()(),s._18(-1,null,["\n"])),(l()(),s._18(-1,null,["\n"])),(l()(),s._18(-1,null,["\n\n"])),(l()(),s.Z(3,0,null,null,19,"div",[],null,null,null,null,null)),(l()(),s._18(-1,null,["\n  "])),(l()(),s.Z(5,0,null,null,8,"button",[["icon-only",""],["ion-button",""]],null,null,null,F.b,F.a)),s.Y(6,1097728,null,0,P.a,[[8,""],S.a,s.j,s.z],null,null),(l()(),s._18(-1,0,["\n    "])),(l()(),s.Z(8,0,null,0,4,"ion-icon",[["role","img"]],[[2,"hide",null]],null,null,null,null)),s.Y(9,147456,null,0,C.a,[S.a,s.j,s.z],null,null),(l()(),s._18(-1,null,["\n      "])),(l()(),s.Z(11,0,null,null,0,"img",[["alt",""],["class","icon-right"],["src","../../assets/imgs/add.png"]],null,null,null,null,null)),(l()(),s._18(-1,null,["\n    "])),(l()(),s._18(-1,0,["\n  "])),(l()(),s._18(-1,null,["\n  "])),(l()(),s.Z(15,0,null,null,6,"ion-card-content",[],null,null,null,null,null)),s.Y(16,16384,null,0,T.a,[S.a,s.j,s.z],null,null),(l()(),s._18(-1,null,["\n    "])),(l()(),s._18(-1,null,["\n    "])),(l()(),s.Z(19,0,null,null,1,"div",[["class","title"]],null,null,null,null,null)),(l()(),s._18(-1,null,["Import from Local file"])),(l()(),s._18(-1,null,["\n  "])),(l()(),s._18(-1,null,["\n"])),(l()(),s._18(-1,null,["\n"]))],null,function(l,n){l(n,8,0,s._11(n,9)._hidden)})}function t(l){return s._19(0,[(l()(),s.Z(0,0,null,null,2,"ion-nav",[],null,null,null,B.b,B.a)),s._14(6144,null,H.a,null,[R.a]),s.Y(2,4374528,null,0,R.a,[[2,K.a],[2,U.a],V.a,S.a,$.a,s.j,s.u,s.z,s.i,X.l,q.a,[2,W.a],G.a,s.k],{root:[0,"root"]},null),(l()(),s._18(-1,null,["\n"]))],function(l,n){l(n,2,0,n.component.rootPage)},null)}function e(l){return s._19(0,[(l()(),s.Z(0,0,null,null,0,"img",[["alt",""],["class","manage-btn"],["src","assets/imgs/manage.png"]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.goManage()&&a}return a},null,null))],null,null)}function i(l){return s._19(0,[(l()(),s.Z(0,0,null,null,0,"span",[["class","del-ioc"]],null,[[null,"click"]],function(l,n,u){var a=!0;if("click"===n){a=!1!==l.component.delEvent(l.parent.context.index)&&a}return a},null,null))],null,null)}function o(l){return s._19(0,[(l()(),s.Z(0,0,null,null,10,"ion-col",[["class","main-section col"],["col-3",""]],null,[[null,"press"],[null,"click"]],function(l,n,u){var a=!0,t=l.component;if("press"===n){a=!1!==t.pressEvent()&&a}if("click"===n){a=!1!==t.onClick(l.context.$implicit)&&a}return a},null,null)),s.Y(1,16384,null,0,nl.a,[],null,null),(l()(),s._18(-1,null,["\n        "])),(l()(),s.Z(3,0,null,null,0,"img",[["alt",""]],[[8,"src",4]],null,null,null,null)),(l()(),s._18(-1,null,["\n        "])),(l()(),s.U(16777216,null,null,1,null,i)),s.Y(6,16384,null,0,ul.i,[s.I,s.F],{ngIf:[0,"ngIf"]},null),(l()(),s._18(-1,null,["\n        "])),(l()(),s.Z(8,0,null,null,1,"div",[["class","app-title"]],null,null,null,null,null)),(l()(),s._18(9,null,["",""])),(l()(),s._18(-1,null,["\n      "]))],function(l,n){l(n,6,0,n.component.checked)},function(l,n){l(n,3,0,s._2(1,"",n.context.$implicit.path,""));l(n,9,0,n.context.$implicit.name)})}function c(l){return s._19(0,[(l()(),s.Z(0,0,null,null,34,"ion-content",[],[[2,"statusbar-padding",null],[2,"has-refresher",null]],null,null,al.b,al.a)),s.Y(1,4374528,null,0,tl.a,[S.a,$.a,G.a,s.j,s.z,V.a,el.a,s.u,[2,K.a],[2,U.a]],null,null),(l()(),s._18(-1,1,["\n  "])),(l()(),s.Z(3,0,null,1,27,"ion-grid",[["class","grid"]],null,null,null,null,null)),s.Y(4,16384,null,0,il.a,[],null,null),(l()(),s._18(-1,null,["\n    "])),(l()(),s.Z(6,0,null,null,16,"ion-row",[["class","row"]],null,null,null,null,null)),s.Y(7,16384,null,0,ol.a,[],null,null),(l()(),s._18(-1,null,["\n      "])),(l()(),s.Z(9,0,null,null,9,"ion-col",[["class","manage-box col"],["col-3",""]],null,null,null,null,null)),s.Y(10,16384,null,0,nl.a,[],null,null),(l()(),s._18(-1,null,["\n        "])),(l()(),s.Z(12,0,null,null,5,"button",[["clear",""],["ion-button",""]],null,null,null,F.b,F.a)),s.Y(13,1097728,null,0,P.a,[[8,""],S.a,s.j,s.z],{clear:[0,"clear"]},null),(l()(),s._18(-1,0,["\n          "])),(l()(),s.U(16777216,null,0,1,null,e)),s.Y(16,16384,null,0,ul.i,[s.I,s.F],{ngIf:[0,"ngIf"]},null),(l()(),s._18(-1,0,["\n        "])),(l()(),s._18(-1,null,["\n      "])),(l()(),s._18(-1,null,["\n      "])),(l()(),s.Z(20,0,null,null,1,"ion-col",[["class","col"],["col-21",""]],null,[[null,"tap"]],function(l,n,u){var a=!0;if("tap"===n){a=!1!==l.component.tapEvent(u)&&a}return a},null,null)),s.Y(21,16384,null,0,nl.a,[],null,null),(l()(),s._18(-1,null,["\n    "])),(l()(),s._18(-1,null,["\n    "])),(l()(),s.Z(24,0,null,null,5,"ion-row",[["class","row"]],null,null,null,null,null)),s.Y(25,16384,null,0,ol.a,[],null,null),(l()(),s._18(-1,null,["\n      "])),(l()(),s.U(16777216,null,null,1,null,o)),s.Y(28,802816,null,0,ul.h,[s.I,s.F,s.p],{ngForOf:[0,"ngForOf"]},null),(l()(),s._18(-1,null,["\n    "])),(l()(),s._18(-1,null,["\n  "])),(l()(),s._18(-1,1,["\n  "])),(l()(),s.Z(32,0,null,1,1,"ion-grid",[["class","grid-down grid"]],null,[[null,"tap"]],function(l,n,u){var a=!0;if("tap"===n){a=!1!==l.component.tapEvent(u)&&a}return a},null,null)),s.Y(33,16384,null,0,il.a,[],null,null),(l()(),s._18(-1,1,["\n"])),(l()(),s._18(-1,null,["\n"]))],function(l,n){var u=n.component;l(n,13,0,"");l(n,16,0,!u.checked);l(n,28,0,u.getAppList())},function(l,n){l(n,0,0,s._11(n,1).statusbarPadding,s._11(n,1)._hasRefresher)})}Object.defineProperty(n,"__esModule",{value:!0});var r=u(27),s=u(0),_=(u(3),u(41),u(84)),p=u(85),f=u(47),d=u(87),h=u(193),m=function(){function l(l,n){this.navCtrl=l,this.file=n,this.checked=!1,h.a.initAppListData()}return l.prototype.getAppList=function(){return h.a.getAppListData()},l.prototype.goManage=function(){this.navCtrl.push(d.a)},l.prototype.pressEvent=function(){this.checked=!0},l.prototype.delEvent=function(l){var n=h.a.getAppListData(),u=n[l],a=this.file.externalRootDirectory+h.a.appName+"/",t=u.url.substr(0,u.url.lastIndexOf("/www/index.html"));this.file.removeRecursively(a,t).then(function(a){a?(n.splice(l,1),h.a.saveAppListData(n)):alert("remove this app "+u.name+" failed!")}).catch(function(l){return alert(JSON.stringify(l))}),this.checked=!1},l.prototype.tapEvent=function(){this.checked=!1},l.prototype.onClick=function(l){if(this.checked)return!1;cordova.plugins.TestPlugin.coolMethod(l.url+"?timestamp="+(new Date).getTime(),function(l){},function(l){})},l}(),g=function(){return function(l,n,u){this.rootPage=m,l.ready().then(function(){n.styleDefault(),u.hide()})}}(),b=function(){return function(){console.log("Hello LocalimportComponent Component"),this.text="Hello World"}}(),k=function(){return function(){}}(),Y=(u(86),u(81)),Z=u(82),w=u(195),y=u(83),v=function(){return function(){}}(),x=u(49),D=u(196),z=u(197),j=u(198),L=u(199),M=u(200),I=u(201),O=u(202),N=u(203),A=u(204),F=u(23),P=u(16),S=u(1),C=u(33),T=u(64),E=s.X({encapsulation:2,styles:[],data:{}}),J=s.V("localimport",b,function(l){return s._19(0,[(l()(),s.Z(0,0,null,null,1,"localimport",[],null,null,null,a,E)),s.Y(1,49152,null,0,b,[],null,null)],null,null)},{},{},[]),B=u(241),H=u(38),R=u(57),K=u(5),U=u(19),V=u(8),$=u(4),X=u(6),q=u(31),W=u(18),G=u(9),Q=s.X({encapsulation:2,styles:[],data:{}}),ll=s.V("ng-component",g,function(l){return s._19(0,[(l()(),s.Z(0,0,null,null,1,"ng-component",[],null,null,null,t,Q)),s.Y(1,49152,null,0,g,[$.a,_.a,p.a],null,null)],null,null)},{},{},[]),nl=u(68),ul=u(11),al=u(106),tl=u(21),el=u(22),il=u(69),ol=u(55),cl=s.X({encapsulation:2,styles:[],data:{}}),rl=s.V("page-home",m,function(l){return s._19(0,[(l()(),s.Z(0,0,null,null,1,"page-home",[],null,null,null,c,cl)),s.Y(1,49152,null,0,m,[U.a,f.a],null,null)],null,null)},{},{},[]),sl=u(206),_l=u(205),pl=u(108),fl=u(13),dl=u(96),hl=u(98),ml=u(107),gl=u(12),bl=u(34),kl=u(103),Yl=u(128),Zl=u(51),wl=u(42),yl=u(112),vl=u(65),xl=u(116),Dl=u(110),zl=u(124),jl=u(194),Ll=u(109),Ml=u(29),Il=u(104),Ol=u(111),Nl=s.W(v,[x.b],function(l){return s._7([s._8(512,s.i,s.S,[[8,[D.a,z.a,j.a,L.a,M.a,I.a,O.a,N.a,A.a,J,ll,rl,sl.a,_l.a]],[3,s.i],s.s]),s._8(5120,s.r,s._15,[[3,s.r]]),s._8(4608,ul.k,ul.j,[s.r,[2,ul.s]]),s._8(5120,s.b,s._1,[]),s._8(5120,s.p,s._9,[]),s._8(5120,s.q,s._12,[]),s._8(4608,r.c,r.q,[ul.c]),s._8(6144,s.D,null,[r.c]),s._8(4608,r.f,pl.a,[]),s._8(5120,r.d,function(l,n,u,a,t){return[new r.k(l,n),new r.o(u),new r.n(a,t)]},[ul.c,s.u,ul.c,ul.c,r.f]),s._8(4608,r.e,r.e,[r.d,s.u]),s._8(135680,r.m,r.m,[ul.c]),s._8(4608,r.l,r.l,[r.e,r.m]),s._8(6144,s.B,null,[r.l]),s._8(6144,r.p,null,[r.m]),s._8(4608,s.G,s.G,[s.u]),s._8(4608,r.h,r.h,[ul.c]),s._8(4608,r.i,r.i,[ul.c]),s._8(4608,fl.k,fl.k,[]),s._8(4608,fl.c,fl.c,[]),s._8(4608,dl.a,dl.a,[V.a,S.a]),s._8(4608,hl.a,hl.a,[V.a,S.a]),s._8(4608,ml.a,ml.a,[]),s._8(4608,gl.a,gl.a,[]),s._8(4608,bl.a,bl.a,[$.a]),s._8(4608,el.a,el.a,[S.a,$.a,s.u,G.a]),s._8(4608,kl.a,kl.a,[V.a,S.a]),s._8(5120,ul.f,Yl.c,[ul.q,[2,ul.a],S.a]),s._8(4608,ul.e,ul.e,[ul.f]),s._8(5120,Zl.b,Zl.d,[V.a,Zl.a]),s._8(5120,W.a,W.b,[V.a,Zl.b,ul.e,wl.b,s.i]),s._8(4608,yl.a,yl.a,[V.a,S.a,W.a]),s._8(4608,vl.a,vl.a,[V.a,S.a]),s._8(4608,xl.a,xl.a,[V.a,S.a,W.a]),s._8(4608,Dl.a,Dl.a,[S.a,$.a,G.a,V.a,X.l]),s._8(4608,zl.a,zl.a,[V.a,S.a]),s._8(4608,q.a,q.a,[$.a,S.a]),s._8(4608,f.a,f.a,[]),s._8(4608,Y.a,Y.a,[]),s._8(4608,Z.a,Z.a,[]),s._8(4608,p.a,p.a,[]),s._8(4608,w.a,w.a,[]),s._8(4608,_.a,_.a,[]),s._8(4608,y.a,y.a,[]),s._8(512,ul.b,ul.b,[]),s._8(512,s.k,jl.a,[]),s._8(256,S.b,{tabsHideOnSubPages:"true",backButtonText:""},[]),s._8(1024,Ll.a,Ll.b,[]),s._8(1024,$.a,$.b,[r.b,Ll.a,s.u]),s._8(1024,S.a,S.c,[S.b,$.a]),s._8(512,G.a,G.a,[$.a]),s._8(512,Ml.a,Ml.a,[]),s._8(512,V.a,V.a,[S.a,$.a,[2,Ml.a]]),s._8(512,X.l,X.l,[V.a]),s._8(256,Zl.a,{links:[{loadChildren:"../pages/info/info.module.ngfactory#InfoPageModuleNgFactory",name:"InfoPage",segment:"info",priority:"low",defaultHistory:[]},{loadChildren:"../pages/manage/manage.module.ngfactory#ManagePageModuleNgFactory",name:"ManagePage",segment:"manage",priority:"low",defaultHistory:[]}]},[]),s._8(512,s.h,s.h,[]),s._8(512,Il.a,Il.a,[s.h]),s._8(1024,wl.b,wl.c,[Il.a,s.o]),s._8(1024,s.c,function(l,n,u,a,t,e,i,o,c,s,_,p,f){return[r.s(l),Ol.a(n),ml.b(u,a),Dl.b(t,e,i,o,c),wl.d(s,_,p,f)]},[[2,s.t],S.a,$.a,G.a,S.a,$.a,G.a,V.a,X.l,S.a,Zl.a,wl.b,s.u]),s._8(512,s.d,s.d,[[2,s.c]]),s._8(131584,s.f,s.f,[s.u,s.T,s.o,s.k,s.i,s.d]),s._8(512,s.e,s.e,[s.f]),s._8(512,r.a,r.a,[[3,r.a]]),s._8(512,fl.j,fl.j,[]),s._8(512,fl.d,fl.d,[]),s._8(512,fl.i,fl.i,[]),s._8(512,Yl.a,Yl.a,[]),s._8(512,Yl.b,Yl.b,[]),s._8(512,k,k,[]),s._8(512,v,v,[]),s._8(256,wl.a,b,[]),s._8(256,x.a,g,[]),s._8(256,ul.a,"/",[])])});Object(s.M)(),Object(r.j)().bootstrapModuleFactory(Nl)},86:function(l,n,u){"use strict";u.d(n,"a",function(){return a});u(3),u(41);var a=function(){function l(l,n){this.navCtrl=l,this.navParams=n}return l.prototype.ionViewDidLoad=function(){console.log("ionViewDidLoad InfoPage")},l}()},87:function(l,n,u){"use strict";u.d(n,"a",function(){return e});u(3),u(41),u(47),u(81),u(82),u(83);var a=u(86),t=u(193),e=function(){function l(l,n,u,a,e,i){this.navCtrl=l,this.navParams=n,this.file=u,this.fileChooser=a,this.filePath=e,this.zip=i,this.checkIndex=[],this.isShow=!1,this.appList=[],t.a.initAppListData(),this.appList=t.a.getAppListData()}return l.prototype.goInfo=function(l){this.navCtrl.push(a.a)},l.prototype.checkApp=function(l){l.checked=!l.checked,this.checkIndex.indexOf(l)<0?this.checkIndex.push(l):this.checkIndex.splice(this.checkIndex.indexOf(l),1),this.isShow=this.checkIndex.length>0},l.prototype.doDel=function(){var l=this;this.checkIndex.forEach(function(n){var u=l.file.externalRootDirectory+t.a.appName+"/",a=n.url.substr(0,n.url.lastIndexOf("/www/index.html"));l.file.removeRecursively(u,a).then(function(u){u?(l.appList.splice(l.appList.indexOf(n),1),t.a.saveAppListData(l.appList)):alert("remove this app "+n.name+" failed!")}).catch(function(l){return alert(JSON.stringify(l))})}),this.checkIndex=[]},l.prototype.importFromEpk=function(){var l=this,n=this.file.externalRootDirectory+t.a.appName+"/";this.fileChooser.open().then(function(u){var a=decodeURI(u),e="0MB";l.file.resolveLocalFilesystemUrl(u).then(function(l){l.getMetadata(function(l){e=l.size>=1048576?(l.size/1048576).toFixed(2)+" MB":(l.size/1024).toFixed(2)+" KB"},function(l){alert(l.message)})}).catch(function(l){return alert(JSON.stringify(l))}),l.filePath.resolveNativePath(a).then(function(u){var a=u.substr(u.lastIndexOf("/")+1),i=a.substr(0,a.lastIndexOf("."));".epk"!=u.substr(u.lastIndexOf(".")).toLowerCase()?alert("please choose epk file formats!"):l.zip.unzip(u,n).then(function(u){if(-1===u)alert("unzip this file failed!");else if(0===u){var a=n+i+"/www/",o="manifest.json";l.file.checkFile(a,o).then(function(n){n?l.file.readAsText(a,o).then(function(n){var u=new Date,a=u.getMonth()<9?"0"+(u.getMonth()+1):u.getMonth()+1,o=u.getDay()<9?"0"+(u.getDay()+1):u.getDay()+1,c=JSON.parse(n);l.appList.push({path:"../"+i+"/www/"+c.icons[0].src,name:c.name,url:i+"/www/index.html",size:e,date:u.getFullYear()+"."+a+"."+o}),t.a.saveAppListData(l.appList)}).catch(function(l){return alert(JSON.stringify(l))}):alert("this file is broken!")}).catch(function(l){return alert(JSON.stringify(l))})}}).catch(function(l){return alert(JSON.stringify(l))})}).catch(function(l){return alert(JSON.stringify(l))})}).catch(function(l){return alert(JSON.stringify(l))})},l}()}},[207]);