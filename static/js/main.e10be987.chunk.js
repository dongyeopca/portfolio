(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{13:function(e,t,c){},14:function(e,t,c){},16:function(e,t,c){"use strict";c.r(t);var i=c(2),s=c.n(i),l=c(6),n=c.n(l),o=(c(13),c(8)),d=(c(14),c.p+"static/media/profile.bff8426e.mp4"),r=c(1);var a=function(){return Object(r.jsx)("div",{className:"w-100",children:Object(r.jsx)("video",{className:"w-1/6 h-1/6 rounded-full m-auto",loop:!0,autoPlay:!0,muted:!0,children:Object(r.jsx)("source",{src:d})})})};var j=function(e){var t=e.icon,c=e.content,i=e.child;return Object(r.jsxs)("div",{className:"flex mb-10 ml-10",children:[Object(r.jsx)("div",{children:t}),Object(r.jsxs)("div",{className:"ml-2",children:[Object(r.jsx)("div",{className:"font-semibold text-xl",children:c}),Object(r.jsx)("div",{children:i})]})]})},b=c(3);var x=function(){return Object(r.jsxs)("div",{id:"about",className:"flex flex-col items-center p-14",children:[Object(r.jsx)("div",{className:"font-black text-4xl mb-10",children:"About Me"}),Object(r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2 w-full",children:[Object(r.jsx)(j,{icon:Object(r.jsx)(b.f,{size:"40"}),content:"\uc774\ub984",child:"\ucc28\ub3d9\uc5fd"}),Object(r.jsx)(j,{icon:Object(r.jsx)(b.a,{size:"40"}),content:"\uc0dd\ub144\uc6d4\uc77c",child:"97.03.19"}),Object(r.jsx)(j,{icon:Object(r.jsx)(b.b,{size:"40"}),content:"\uc8fc\uc18c\uc9c0",child:"\ubd80\uc0b0\uad11\uc5ed\uc2dc \ubd81\uad6c"}),Object(r.jsx)(j,{icon:Object(r.jsx)(b.e,{size:"40"}),content:"\uc5f0\ub77d\ucc98",child:"010-5766-8939"}),Object(r.jsx)(j,{icon:Object(r.jsx)(b.c,{size:"40"}),content:"\uc774\uba54\uc77c",child:"ckehdduq95@gmail.com"}),Object(r.jsx)(j,{icon:Object(r.jsx)(b.d,{size:"40"}),content:"\ud559\ub825",child:"\ubd80\uc0b0\ub300\ud559\uad50(\ud540\ud14c\ud06c\uc735\ud569\uc804\uacf5)"})]})]})};var m=function(e){var t=e.skill,c=e.image;return Object(r.jsxs)("div",{className:"bg-white rounded-xl text-center p-5 m-3 shadow-xl ",children:[Object(r.jsx)("div",{className:"border-b-2 text-yellow-500 text-2xl",children:t}),Object(r.jsx)("div",{className:"flex items-center justify-center w-full",children:Object(r.jsx)("img",{alt:"\uae30\uc220\uc2a4\ud0dd",width:"100%",height:"80%",src:c})})]})},h=c.p+"static/media/backend.4e8dbd64.png",u=c.p+"static/media/frontend.a4742731.png",O=c.p+"static/media/version.81bbf212.png",v=c.p+"static/media/deployment.854dce7d.png";var f=function(){return Object(r.jsxs)("div",{id:"skill",className:"bg-yellow-200 p-14",children:[Object(r.jsx)("div",{className:"font-black text-4xl text-center mb-3",children:"Skill"}),Object(r.jsxs)("div",{className:"grid md:grid-flow-col",children:[Object(r.jsx)(m,{skill:"Front End",image:u}),Object(r.jsx)(m,{skill:"Back End",image:h}),Object(r.jsx)(m,{skill:"Deployment",image:v}),Object(r.jsx)(m,{skill:"Versioin Control",image:O})]})]})},p=c.p+"static/media/background.0fe3a817.jpeg";var g=function(){return Object(r.jsxs)("div",{className:"flex justify-self-center p-2 pl-4 items-center rounded-full bg-yellow-400 hover:bg-yellow-200",onClick:function(){document.querySelector("#about").scrollIntoView({behavior:"smooth",block:"end"})},children:[Object(r.jsx)("div",{className:"text-white",children:"\ub354 \uc54c\uc544\ubcf4\uae30"}),Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-10",viewBox:"0 0 20 20",fill:"currentColor",color:"white",children:Object(r.jsx)("path",{"fill-rule":"evenodd",d:"M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v3.586L7.707 9.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 10.586V7z","clip-rule":"evenodd"})})]})};var N=function(){function e(){var e=document.querySelector("#about");document.querySelector("#selectbox").className="hidden",e.scrollIntoView({behavior:"smooth",block:"start"})}function t(){var e=document.querySelector("#skill");document.querySelector("#selectbox").className="hidden",e.scrollIntoView({behavior:"smooth",block:"start"})}function c(){var e=document.querySelector("#project");document.querySelector("#selectbox").className="hidden",e.scrollIntoView({behavior:"smooth",block:"start"})}return Object(r.jsxs)("div",{className:"bg-white w-full fixed border-b-2",children:[Object(r.jsxs)("div",{className:"flex justify-around items-center h-14 px-3",children:[Object(r.jsx)("div",{className:"font-semibold text-2xl",style:{padding:"1.25rem 2rem"},children:"DYC's Portfolio"}),window.innerWidth>=768?Object(r.jsxs)("div",{className:"flex w-5/12 justify-between",children:[Object(r.jsx)("div",{onClick:e,className:"hover:text-yellow-200",children:"About me"}),Object(r.jsx)("div",{onClick:t,className:"hover:text-yellow-200",children:"Skill"}),Object(r.jsx)("div",{onClick:c,className:"hover:text-yellow-200",children:"Project"})]}):Object(r.jsx)("div",{onClick:function(){var e=document.querySelector("#selectbox");console.log(e.className),"hidden"===e.className?e.className="block":e.className="hidden"},children:Object(r.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",className:"h-6 w-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor",children:Object(r.jsx)("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M4 6h16M4 10h16M4 14h16M4 18h16"})})})]}),Object(r.jsx)("div",{id:"selectbox",className:"hidden",children:Object(r.jsxs)("ul",{className:"w-full border-b-2 ",children:[Object(r.jsx)("li",{className:"hover:bg-yellow-200 text-center text-lg hover:text-yellow-200",onClick:e,children:"Aboutme"}),Object(r.jsx)("li",{className:"hover:bg-yellow-200 text-center text-lg hover:text-yellow-200",onClick:t,children:"Skill"}),Object(r.jsx)("li",{className:"hover:bg-yellow-200 text-center text-lg hover:text-yellow-200",onClick:c,children:"Project"})]})})]})};var k=function(e){var t=e.item;return Object(r.jsxs)("div",{className:"bg-white mb-10 rounded-xl p-5 m-5 ",children:[Object(r.jsx)("div",{className:"text-center mb-3 text-3xl font-black",children:t.title}),Object(r.jsx)("div",{className:"flex justify-center shadow-lg rounded-xl",children:Object(r.jsx)("img",{className:"rounded-xl",width:"200px",alt:"\ud504\ub85c\uc81d\ud2b8\uc774\ubbf8\uc9c0",src:t.image[0]})}),Object(r.jsx)("div",{style:{paddingTop:"1rem",paddingBottom:"1rem",borderBottom:"1px solid black",marginBottom:"1rem"},children:t.explanation}),Object(r.jsxs)("div",{className:"mb-2",children:[Object(r.jsx)("div",{className:"text-xl mb-1",style:{borderLeft:"5px solid black",paddingLeft:"0.5rem"},children:"\uc8fc\uc694\uae30\ub2a5"}),Object(r.jsx)("div",{children:t.for})]}),Object(r.jsxs)("div",{className:"mb-2",children:[Object(r.jsx)("div",{className:"text-xl mb-1",style:{borderLeft:"5px solid black",paddingLeft:"0.5rem"},children:"github"}),Object(r.jsx)("a",{className:"text-pink-400",href:t.github,children:t.github})]}),void 0!==t.domain?Object(r.jsxs)("div",{className:"mb-2",children:[Object(r.jsx)("div",{className:"text-xl mb-1",style:{borderLeft:"5px solid black",paddingLeft:"0.5rem"},children:"\ub3c4\uba54\uc778"}),Object(r.jsx)("a",{href:t.domain,className:"text-pink-400",children:t.domain})]}):Object(r.jsx)("div",{}),Object(r.jsxs)("div",{className:"mb-2",children:[Object(r.jsx)("div",{className:"text-xl mb-1",style:{borderLeft:"5px solid black",paddingLeft:"0.5rem"},children:"Frontend"}),Object(r.jsx)("div",{children:t.frontend})]}),void 0!==t.backend?Object(r.jsxs)("div",{className:"mb-2",children:[Object(r.jsx)("div",{className:"text-xl",style:{borderLeft:"5px solid black",paddingLeft:"0.5rem"},children:"Backend"}),Object(r.jsx)("div",{children:t.backend})]}):Object(r.jsx)("div",{}),void 0!==t.deployment?Object(r.jsxs)("div",{className:"mb-2",children:[Object(r.jsx)("div",{className:"text-xl",style:{borderLeft:"5px solid black",paddingLeft:"0.5rem"},children:"Deployment"}),Object(r.jsx)("div",{children:t.deployment})]}):Object(r.jsx)("div",{})]})},w=c.p+"static/media/1.9a63ac1f.png",y=c.p+"static/media/myunit.03d47519.png",L=c.p+"static/media/mindmirror.c899d5fb.png",M=c.p+"static/media/portfolio.2a7f2d8a.png",S={image:[w],title:"\ub7ec\ub2dd\uba54\uc774\ud2b8",explanation:"HTML gelocation api\ub97c \ud65c\uc6a9\ud558\uc5ec \uc720\uc800\uac04 \uc2e4\uc2dc\uac04 \uc704\uce58 \uc804\uc1a1, \uce5c\uad6c\uc640 \ud568\uaed8 \uacbd\uc7c1\ud558\uba70 \ub2ec\ub9b4\uc218 \uc788\ub3c4\ub85d \ub7ec\ub2dd\uc5d0 \uac8c\uc774\ubbf8\ud53c\ucf00\uc774\uc158\uc744 \uc811\ubaa9\ud55c \uc6f9\uc0ac\uc774\ud2b8\uc785\ub2c8\ub2e4. \uc2e4\uc2dc\uac04 \ud1b5\uc2e0\uc744 \uc704\ud574 socket.io\ub97c \ucc98\uc74c \uc0ac\uc6a9\ud574\ubcf4\uba74\uc11c http\uc758 \uc2e4\uc2dc\uac04 \uc1a1\uc2e0 \ubc29\uc2dd\uc744 \uacf5\ubd80 \ud560 \uc218 \uc788\uc5c8\uace0 \ubc31\uc5d4\ub4dc\uc640 \ud504\ub860\ud2b8\ub97c \ub098\ub204\uc5b4 \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\uba74\uc11c \ud1b5\uc2e0\uacfc\uc815\uc5d0\uc11c \ud544\uc694\ud55c \ucfe0\ud0a4\ub098 CORS\ub4f1\uc758 \uac1c\ub150\uc5d0 \ub300\ud574\uc11c\ub3c4 \ub9ce\uc774 \ubc30\uc6b8 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4. \ubc30\ud3ec \ud6c4 \uc0bc\uc131\uc778\ud130\ub137\uc5d0\uc11c\ub9cc \ub85c\uadf8\uc778\uc774 \ub418\uc9c0 \uc54a\ub294 \uc774\uc288\uac00 \uc788\uc5c8\ub294\ub370 \ub2e4\ub978 \ube0c\ub77c\uc6b0\uc800\uc5d0 \ube44\ud574 \uc0bc\uc131\uc778\ud130\ub137\uc758 \ubcf4\uc548\uc218\uc900\uc774 \uae30\ubcf8\uc801\uc73c\ub85c \ub192\uac8c \uc124\uc815\ub418\uc5b4\uc788\uc5b4 \uc11c\ubc84\uce21\uc5d0\uc11c \uc804\ub2ec\ud574\uc900 \uc138\uc158\ucfe0\ud0a4\ub97c \uc800\uc7a5\ud558\uc9c0 \uc54a\uc544\uc11c \uc0dd\uae34 \ubb38\uc81c\uc600\uc2b5\ub2c8\ub2e4. \ud574\ub2f9 \ubb38\uc81c\ub97c \uacaa\uc73c\uba70 \ube0c\ub77c\uc6b0\uc800\ubcc4 \ud638\ud658\uc131 \ub610\ud55c \uac1c\ubc1c\uc911\uc5d0 \uace0\ub824\ud574\uc57c\ud560 \ud544\uc218\uc694\uc18c\ub77c\ub294 \uac78 \ub290\ub084 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.",for:"\uc21c\uc704\uad8c \uc720\uc800\ub4e4\uc758 \ud398\uc774\uc2a4 \ud655\uc778,\ucc44\ud305\ubc29,\uce5c\uad6c \ucd08\ub300 \uae30\ub2a5, \uc77c\uc790\ubcc4 \ub098\uc758 \ub7ec\ub2dd \uc704\uce58,\uae30\ub85d \ud655\uc778(kakao Map)",github:"https://github.com/PNU-Runningmate/Runningmate",domain:"https://runningmate.netlify.app",frontend:"React,Socket.io",backend:"Node.js/Express,Socket.io,MongoDB",deployment:"Heroku,Netlify"},C={image:[y],title:"Myunit",explanation:"\uae30\uc874\uc758 \uacf5\ubaa8\uc804 \ud300\uc6d0 \ubaa8\uc9d1 \ud398\uc774\uc9c0\ub4e4\uc740 \uc0c1\ub300\ubc29\uc758 \uae30\uc220\uc2a4\ud0dd\uc774\ub098 \uc774\ub825\ub4f1\uc744 \ud655\uc778 \ud560 \uc218 \uc5c6\uc5b4\uc11c \uc801\uc808\ud55c \ud300\uc6d0\uc744 \ubaa8\uc9d1\ud558\ub294\ub370 \uc5b4\ub824\uc6c0\uc774 \uc788\ub2e4 \ud310\ub2e8\ud558\uc5ec \ub3d9\uc544\ub9ac \uad6c\uc131\uc6d0\ubd84\ub4e4\uacfc \ud568\uaed8 \uc2dc\uc791\ud55c \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4. \ubc31\uc5d4\ub4dc\uc640 \ud504\ub860\ud2b8\ub85c \uac1c\ubc1c\ud30c\ud2b8\ub97c \ub098\ub204\uc5b4 \uc9c4\ud589\ud558\uba74\uc11c UI&UX \ubc0f API \uba85\uc138\ub97c \ub178\uc158\uc5d0 \uc791\uc131\ud558\uc5ec \uc18c\ud1b5\ud558\uc600\uace0 \ud574\ub2f9 \uacfc\uc815\uc5d0\uc11c \ud611\uc5c5\uc5d0 \uad00\ud574 \ub9ce\uc774 \ubc30\uc6b8 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\ub610\ud55c ngrok\uc744 \uc774\uc6a9\ud574 \ub0b4 \ub85c\uceec\uc11c\ubc84\ub97c \uac1c\ubc29\ud558\uc5ec \ud504\ub860\ud2b8\ubd84\ub4e4\uacfc \uac1c\ubc1c\uc744 \uc9c4\ud589\ud558\uc5ec\uc11c \uc11c\ubc84 \ubc84\uc804\uc5d0 \ub530\ub978 \uc774\uc288\ub97c \ub9c9\uc744 \uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4.\ub610\ud55c drf\ub85c \ud1a0\ud070\uc778\uc99d \uacfc\uc815\uc5d0\uc11c \ubc84\uadf8\uac00 \ubc1c\uc0dd\ud558\uc5ec \ud574\uacb0\ud558\ub294 \uacfc\uc815\uc5d0\uc11c \ud574\ub2f9 \ud504\ub808\uc784\uc6cc\ud06c\uc758 git issue\ub97c \ud655\uc778\ud558\ub294 \uac83\uc774 \ubb38\uc81c\ud574\uacb0\uc5d0 \ud070 \ub3c4\uc6c0\uc744 \uc900\ub2e4\ub294\uac78 \ub290\ub084\uc218 \uc788\uc5c8\uc2b5\ub2c8\ub2e4",for:"\uc0ac\uc6a9\uc790\ubcc4 \ud504\ub85c\ud544 \ubc0f \uae30\uc220 \ubaa9\ub85d \ud398\uc774\uc9c0 \uc81c\uacf5,\uba54\uc2dc\uc9c0 \uae30\ub2a5,\ud300\uc6d0 \ubaa8\uc9d1,\ud300\uc6d0 \ucd08\ub300",github:"https://github.com/LikeLion-MyUnit",frontend:"React",backend:"Django-rest-framework"},z={image:[L],title:"MindMirror",explanation:"\uc790\uc5f0\uc5b4 \ucc98\ub9ac \uae30\uc220\uc744 \uae30\ubc18\uc73c\ub85c \uc791\uc131\ub41c \uc77c\uae30\ub97c \ud1b5\ud574 \uac10\uc815 \uc815\ubcf4\ub97c \ubf51\uc544\ub0b4\uace0 \uc77c\uc790\ubcc4\ub85c \uac10\uc815\uc815\ubcf4\ub97c \ud655\uc778 \ud560 \uc218 \uc788\ub3c4\ub85d \uc81c\uc791\ub41c \uc6f9\uc571\uc785\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\ub97c \uc9c4\ud589\ud558\uba74\uc11c \ucc98\uc74c\uc73c\ub85c \uae30\uacc4\ud559\uc2b5\uc758 \uc804\ubc18\uc801\uc778 \uacfc\uc815\uc744 \ubc30\uc6b8\uc218 \uc788\ub294 \uae30\ud68c\uac00 \ub418\uc5c8\uace0 \ub514\uc790\uc774\ub108 \uc5c6\uc774 \uc9c4\ud589\ud55c \ud504\ub85c\uc81d\ud2b8\ub77c \ud504\ub860\ud2b8\ub97c \uc81c\uc791\ud558\uba74\uc11c \uc5b4\ub5bb\uac8c \ud558\uba74 \ub04a\uae30\uc9c0 \uc54a\ub294 \ud750\ub984\uc758 UI/UX\ub97c \uc81c\uc791\ud560 \uc218 \uc788\uc744\uc9c0 \uace0\ubbfc \ud560 \uc218 \uc788\ub294 \uacbd\ud5d8\uc774\uc600\uc2b5\ub2c8\ub2e4.\ub610\ud55c \uce74\uce74\uc624 \ub85c\uadf8\uc778\uc744 \uad6c\ud604\ud558\uba74\uc11c \uc5b4\ub834\ud48b\uc774 \uc54c\uace0\uc788\ub358 oauth\uc778\uc99d\uc758 \uac1c\ub150\uc744 \ud655\uc2e4\ud788 \uc0c8\uae38 \uc218 \uc788\uc5c8\uace0 \uc77c\uc790\ubcc4,\uae30\uac04\ubcc4\ub85c \ud544\uc694\ud55c \uc815\ubcf4\ub97c \ubf51\uc544\ub0b4\uba74\uc11c \ud6a8\uc728\uc801\uc778 \ubaa8\ub378\ub9c1\uc758 \ud544\uc694\uc131\uc744 \ub290\uaf08\uc2b5\ub2c8\ub2e4.\ubb34\uc5c7\ubcf4\ub2e4 node\ub97c \uacf5\ubd80\ud558\uace0 \ucc98\uc74c \ud480\uc2a4\ud0dd\uc73c\ub85c \uc9c4\ud589\ud574\ubcf8 \ud504\ub85c\uc81d\ud2b8\uc600\uae30\uc5d0 node\uc5d0 \uc870\uae08 \ub354 \uc775\uc219\ud574\uc9c8 \uc218 \uc788\ub294 \uacbd\ud5d8\uc774\uc600\uc2b5\ub2c8\ub2e4",for:"\uc77c\uae30 \uc791\uc131,\uc77c\uae30 \ubb38\uc7a5\ubcc4 \uac10\uc815\ubd84\uc11d, \uc77c\uc790\ubcc4 \uae30\uac04\ubcc4 \uac10\uc815\ubd84\uc11d \ud1b5\uacc4\ud398\uc774\uc9c0",github:"https://github.com/PNU-MindMirror/MindMirror",frontend:"EJS",backend:"Node.js/express,mongodb"},I={image:[M],title:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc6f9\uc0ac\uc774\ud2b8",explanation:"\ud3ec\ud2b8\ud3f4\ub9ac\uc624 \uc6a9\ub3c4\ub85c React\ub85c \uc81c\uc791\ud55c \uc6f9\uc0ac\uc774\ud2b8\ub85c \ud604\uc7ac \ubcf4\uace0 \uacc4\uc2e0 \uc774 \uc6f9\uc0ac\uc774\ud2b8\uc5d0 \ud574\ub2f9\ud569\ub2c8\ub2e4. \ud504\ub860\ud2b8 \uac1c\ubc1c\uc5d0\ub9cc \uc9d1\uc911 \ud574 \ubcfc \uc218 \uc788\uc5c8\ub358 \ud504\ub85c\uc81d\ud2b8\uc785\ub2c8\ub2e4.Next.js\ub97c \uacf5\ubd80\ud558\uace0 \ub098\uc11c \ub2e4\uc2dc \uc81c\uc791 \ud574 \ubcfc \uacc4\ud68d\uc785\ub2c8\ub2e4",for:"\uac04\ub2e8\ud55c \uc790\uae30\uc18c\uac1c,\uc778\uc804 \uc0ac\ud56d,\ubcf4\uc720 \uae30\uc220 \uc2a4\ud0dd,\ud504\ub85c\uc81d\ud2b8 \uacbd\ud5d8",github:"https://github.com/dongyeopca/portfolio",domain:"https://dongyeopca.github.io/portfolio/",frontend:"React",deployment:"Github pages"};var B=function(){return Object(r.jsxs)("div",{id:"project",className:"bg-indigo-600 pt-14",children:[Object(r.jsx)("div",{className:"font-black text-4xl text-white text-center mb-3",children:"Project"}),Object(r.jsxs)("div",{className:"grid grid-cols-1 md:grid-cols-2",children:[Object(r.jsx)(k,{item:S}),Object(r.jsx)(k,{item:z}),Object(r.jsx)(k,{item:C}),Object(r.jsx)(k,{item:I})]})]})},P=c(5);var q=function(){return Object(r.jsxs)("div",{className:"bg-white",children:[Object(r.jsxs)("div",{className:"flex justify-center",children:[Object(r.jsx)("a",{href:"https://www.instagram.com",children:Object(r.jsx)(P.a,{size:"40"})}),Object(r.jsx)("a",{href:"https://github.com/dongyeopca",children:Object(r.jsx)(P.b,{size:"40"})})]}),Object(r.jsx)("div",{style:{textAlign:"center"},children:"Made by dongyeopcha"})]})},E=c(7);var R=function(){var e=Object(i.useState)(0),t=Object(o.a)(e,2),c=t[0],s=t[1],l=function(){s(window.scrollY||document.documentElement.scrollTop)};return Object(i.useEffect)((function(){window.addEventListener("scroll",l)})),Object(r.jsxs)("div",{className:"App",children:[Object(r.jsx)(N,{}),Object(r.jsxs)("container",{children:[Object(r.jsxs)("div",{className:"grid  w-100 justify-center",style:{backgroundImage:"url(".concat(p,")"),backgroundSize:"cover",alignItems:"center",padding:"5rem 1.5rem 1.5rem 1.5rem"},children:[Object(r.jsxs)("div",{className:"text-4xl font-black text-white justify-self-center text-center mb-3",children:["- \ucc28\ub3d9\uc5fd -",Object(r.jsx)("br",{}),Object(r.jsx)("br",{}),"\uc6f9 \uac1c\ubc1c\uc790 \ud3ec\ud2b8\ud3f4\ub9ac\uc624"]}),Object(r.jsx)(a,{}),Object(r.jsxs)("div",{className:"text-1xl text-white mt-7 text-center mb-7",children:["\uc548\ub155\ud558\uc138\uc694",Object(r.jsx)("br",{}),"\uac1c\ubc1c\ud558\uace0 \uacf5\ubd80\ud558\ub294\uac8c \uc990\uac70\uc6b4 \uac1c\ubc1c\uc790\uc785\ub2c8\ub2e4.",Object(r.jsx)("br",{}),"\uacc4\uc18d \ud574\uc11c \uacf5\ubd80\ud558\uace0 \uc131\uc7a5\ud558\ub294 \uac1c\ubc1c\uc790\ub97c \ubaa9\ud45c\ub85c \ud569\ub2c8\ub2e4.",Object(r.jsx)("br",{}),"\ubb38\uc81c\uac00 \uc0dd\uae30\uba74 \ud3ec\uae30\ud558\uc9c0 \uc54a\uace0 \ub05d\uae4c\uc9c0 \ud574\uacb0\ud558\ub294 \uac83\uc774 \uc800\uc758 \uc7a5\uc810\uc785\ub2c8\ub2e4."]}),Object(r.jsx)(g,{})]}),Object(r.jsx)(E.a,{size:"40",id:c<200?"upbutton":"upbutton_block",onClick:function(){window.scrollTo({top:0,behavior:"smooth"})}}),Object(r.jsx)(x,{}),Object(r.jsx)(f,{}),Object(r.jsx)(B,{})]}),Object(r.jsx)(q,{})]})},U=function(e){e&&e instanceof Function&&c.e(3).then(c.bind(null,17)).then((function(t){var c=t.getCLS,i=t.getFID,s=t.getFCP,l=t.getLCP,n=t.getTTFB;c(e),i(e),s(e),l(e),n(e)}))};n.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(R,{})}),document.getElementById("root")),U()}},[[16,1,2]]]);
//# sourceMappingURL=main.e10be987.chunk.js.map