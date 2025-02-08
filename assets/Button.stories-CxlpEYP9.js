import{j as t}from"./jsx-runtime-DjgmBYnU.js";import{B as o}from"./Button-CS0vD4mi.js";import"./index-DjXIRphR.js";import"./index-Da9mX_ih.js";const b={title:"Button 按钮",component:o,argTypes:{btnType:{options:["primary","default","danger","link"],control:{type:"radio"}},size:{options:["lg","sm"],control:{type:"radio"}},disabled:{control:"boolean"},children:{control:"text"},href:{control:"text"},className:{control:"text"}}},n={args:{children:"Default Button",size:"lg"}};n.storyName="默认样式的按钮";const e=()=>t.jsxs(t.Fragment,{children:[t.jsx(o,{size:"lg",children:" large button "}),t.jsx(o,{size:"sm",children:" small button "})]});e.storyName="不同尺寸的按钮";const r=()=>t.jsxs(t.Fragment,{children:[t.jsx(o,{btnType:"primary",children:" primary button "}),t.jsx(o,{btnType:"danger",children:" danger button "}),t.jsx(o,{btnType:"link",href:"https://google.com",children:" link button "})]});r.storyName="不同类型的按钮";e.__docgenInfo={description:"",methods:[],displayName:"BButtonWithSize"};r.__docgenInfo={description:"",methods:[],displayName:"CButtonWithType"};var s,a,i;n.parameters={...n.parameters,docs:{...(s=n.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    children: 'Default Button',
    size: "lg"
  }
}`,...(i=(a=n.parameters)==null?void 0:a.docs)==null?void 0:i.source}}};var c,l,m;e.parameters={...e.parameters,docs:{...(c=e.parameters)==null?void 0:c.docs,source:{originalSource:`() => <>\r
        <Button size="lg"> large button </Button>\r
        <Button size="sm"> small button </Button>\r
    </>`,...(m=(l=e.parameters)==null?void 0:l.docs)==null?void 0:m.source}}};var p,u,d;r.parameters={...r.parameters,docs:{...(p=r.parameters)==null?void 0:p.docs,source:{originalSource:`() => <>\r
        <Button btnType="primary"> primary button </Button>\r
        <Button btnType="danger"> danger button </Button>\r
        <Button btnType="link" href="https://google.com"> link button </Button>\r
    </>`,...(d=(u=r.parameters)==null?void 0:u.docs)==null?void 0:d.source}}};const x=["Primary","BButtonWithSize","CButtonWithType"];export{e as BButtonWithSize,r as CButtonWithType,n as Primary,x as __namedExportsOrder,b as default};
