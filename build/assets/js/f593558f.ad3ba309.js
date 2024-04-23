"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[828],{4892:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var n=i(5893),s=i(1151);const r={sidebar_position:2,title:"\u53d1\u8d77\u53cd\u5c04\u8bf7\u6c42"},l="\u4ec0\u4e48\u53cd\u5c04\u8bf7\u6c42",c={id:"tutorial-basics/request_by_reflex",title:"\u53d1\u8d77\u53cd\u5c04\u8bf7\u6c42",description:"\u666e\u901aHTTP\u8bf7\u6c42\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a",source:"@site/docs/tutorial-basics/request_by_reflex.md",sourceDirName:"tutorial-basics",slug:"/tutorial-basics/request_by_reflex",permalink:"/docs/tutorial-basics/request_by_reflex",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2,title:"\u53d1\u8d77\u53cd\u5c04\u8bf7\u6c42"},sidebar:"tutorialSidebar",previous:{title:"\u53d1\u8d77HTTP\u8bf7\u6c42",permalink:"/docs/tutorial-basics/request"},next:{title:"Spring\u7f51\u5173\u81ea\u52a8\u53d1\u73b0",permalink:"/docs/tutorial-basics/spring_gateway"}},o={},a=[];function d(e){const t={admonition:"admonition",h1:"h1",img:"img",li:"li",ol:"ol",p:"p",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"\u4ec0\u4e48\u53cd\u5c04\u8bf7\u6c42",children:"\u4ec0\u4e48\u53cd\u5c04\u8bf7\u6c42"}),"\n",(0,n.jsx)(t.p,{children:"\u666e\u901aHTTP\u8bf7\u6c42\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"\u6784\u9020HTTP\u53c2\u6570"}),"\n",(0,n.jsx)(t.li,{children:"\u53d1\u8d77HTTP\u8bf7\u6c42"}),"\n",(0,n.jsx)(t.li,{children:"\u8fdb\u5165Web\u5bb9\u5668"}),"\n",(0,n.jsx)(t.li,{children:"\u8fdb\u5165\u8fc7\u6ee4\u5668"}),"\n",(0,n.jsx)(t.li,{children:"\u8fdb\u5165\u62e6\u622a\u5668"}),"\n",(0,n.jsx)(t.li,{children:"\u8fdb\u5165Controller"}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"\u800c\u53cd\u5c04\u8bf7\u6c42\u53ef\u4ee5\u8df3\u8fc7\u5176\u4e2d\u7684\u7b2c3\u3001\u7b2c4\u6b65\u9aa4\uff0c\u800c\u7b2c5\u6b65\u662f\u53ef\u9009\u7684\uff0c\u53cd\u5c04\u7684\u6d41\u7a0b\u5982\u4e0b\uff1a"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"\u6784\u9020HTTP\u53c2\u6570"}),"\n",(0,n.jsx)(t.li,{children:"\u53d1\u8d77HTTP\u8bf7\u6c42"}),"\n",(0,n.jsx)(t.li,{children:"\u8fdb\u5165\u62e6\u622a\u5668\uff08\u53ef\u9009\u62e9\u662f\u5426\u5e94\u7528\u62e6\u622a\u5668\uff09"}),"\n",(0,n.jsx)(t.li,{children:"\u8fdb\u5165Controller"}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["\u8fdb\u5165\u53c2\u6570\u914d\u7f6e\u754c\u9762\uff0c\u5728\u5de6\u4fa7\u4e0b\u62c9\u6846\u9009\u4e2d\u5982\u4e0b\u6240\u793a\uff1a\r\n",(0,n.jsx)(t.img,{alt:"Alt text",src:i(8010).Z+"",width:"729",height:"266"})]}),"\n",(0,n.jsxs)(t.p,{children:["\u70b9\u51fb\u53f3\u4fa7 ",(0,n.jsx)(t.img,{alt:"Alt text",src:i(1513).Z+"",width:"16",height:"16"})," \u6309\u94ae\u5373\u53ef\u53d1\u8d77\u53cd\u5c04\u8bf7\u6c42\u3002"]}),"\n",(0,n.jsx)(t.admonition,{title:"\u8b66\u544a",type:"danger",children:(0,n.jsx)(t.p,{children:"\u53cd\u5c04\u8bf7\u6c42\u4e0d\u652f\u6301\u8fc7\u6ee4\u5668\uff0c\u4f1a\u5ffd\u7565\uff0c\u5e38\u89c1\u7684\u4e00\u4e9b\u5b89\u5168\u6846\u67b6\u8ba4\u8bc1\u4f9d\u8d56\u8fc7\u6ee4\u5668\uff0c\u8fd9\u6837\u4f1a\u5bfc\u81f4\u83b7\u53d6\u4e0d\u5230\u7528\u6237\u4fe1\u606f\uff0c\u6b64\u573a\u666f\u7528\u4e8e\u4e00\u4e9b\u4e0d\u4f9d\u8d56\u7528\u6237\u4fe1\u606f\u7684\u8bf7\u6c42\u3002"})})]})}function u(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},8010:(e,t,i)=>{i.d(t,{Z:()=>n});const n=i.p+"assets/images/reflex_request-40c762250bf4cec437c50855e201ca5f.png"},1513:(e,t,i)=>{i.d(t,{Z:()=>n});const n="data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTYiIGhlaWdodD0iMTYiIHZpZXdCb3g9IjAgMCAxNiAxNiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4NCiAgICA8cGF0aCBkPSJNOS41IDhIMy41TDIuNSAxNC41TDE0LjUgOEwyLjUgMS41TDMuMTkyIDYiIHN0cm9rZT0iI0NFRDBENiIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbGluZWpvaW49InJvdW5kIi8+DQo8L3N2Zz4NCg=="},1151:(e,t,i)=>{i.d(t,{Z:()=>c,a:()=>l});var n=i(7294);const s={},r=n.createContext(s);function l(e){const t=n.useContext(r);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),n.createElement(r.Provider,{value:t},e.children)}}}]);