import{j as e}from"./jsx-runtime-DjgmBYnU.js";import{r as b}from"./index-Dnp4WS5M.js";import{c as o}from"./index-Da9mX_ih.js";import{I as w}from"./Icon-BIo03g66.js";import{T as D}from"./Transition-hAZQpIwj.js";import"./index-DjXIRphR.js";import"./index-CdWm979c.js";import"./index-BdR6VAUc.js";import"./index-DCOq8Jev.js";const a=h=>{const[x,N]=b.useState(!1),{title:j,description:l,type:n="default",onClose:i,closable:S=!0}=h,v=o("alert",{[`alert-${n}`]:n}),C=o("alert-title",{"bold-title":l}),T=q=>{i&&i(),N(!0)};return e.jsx(D,{in:!x,timeout:300,animation:"zoom-in-top",children:e.jsxs("div",{className:v,children:[e.jsx("span",{className:C,children:j}),l&&e.jsx("p",{className:"alert-desc",children:l}),S&&e.jsx("span",{className:"alert-close",onClick:T,children:e.jsx(w,{icon:"times"})})]})})};a.__docgenInfo={description:`Alert是警告提示，用于展示需要关注的提示信息。用户可以点击关闭这一提示。\r
### 引用方法\r
\r
~~~js\r
import { Alert } from 'Aloha'\r
~~~`,methods:[],displayName:"Alert",props:{title:{required:!0,tsType:{name:"string"},description:""},description:{required:!1,tsType:{name:"string"},description:""},type:{required:!1,tsType:{name:"union",raw:"'success' | 'default' | 'danger' | 'warning'",elements:[{name:"literal",value:"'success'"},{name:"literal",value:"'default'"},{name:"literal",value:"'danger'"},{name:"literal",value:"'warning'"}]},description:""},onClose:{required:!1,tsType:{name:"signature",type:"function",raw:"() => void",signature:{arguments:[],return:{name:"void"}}},description:""},closable:{required:!1,tsType:{name:"boolean"},description:""}}};const O={title:"Alert 警告提示",component:a},t={args:{title:"你好我是Alert!"},storyName:"Alert的基本样式"};t.storyName="Alert的基本样式";const r={args:{title:"你好我是Alert的标题",description:"你可以在这里写一些更长的句子哦"},storyName:"带描述的 Alert"};r.storyName="带描述的 Alert";const s={render:()=>e.jsxs(e.Fragment,{children:[e.jsx(a,{title:"this is Success! 耶~~",type:"success"}),e.jsx(a,{title:"this is Danger!",type:"danger"}),e.jsx(a,{title:"this is Warning!",type:"warning",closable:!1})]}),storyName:"不同提示效果的 Alert"};s.storyName="不同提示效果的 Alert";var c,m,p;t.parameters={...t.parameters,docs:{...(c=t.parameters)==null?void 0:c.docs,source:{originalSource:`{
  args: {
    title: '你好我是Alert!'
  },
  storyName: 'Alert的基本样式'
}`,...(p=(m=t.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,u,A;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    title: '你好我是Alert的标题',
    description: '你可以在这里写一些更长的句子哦'
  },
  storyName: '带描述的 Alert'
}`,...(A=(u=r.parameters)==null?void 0:u.docs)==null?void 0:A.source}}};var g,y,f;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`{
  render: () => <>\r
            <Alert title="this is Success! 耶~~" type="success" />\r
            <Alert title="this is Danger!" type="danger" />\r
            <Alert title="this is Warning!" type="warning" closable={false} />\r
        </>,
  storyName: '不同提示效果的 Alert'
}`,...(f=(y=s.parameters)==null?void 0:y.docs)==null?void 0:f.source}}};const R=["ADefaultAlert","CDescAlert","BStylesAlert"];export{t as ADefaultAlert,s as BStylesAlert,r as CDescAlert,R as __namedExportsOrder,O as default};
