import{j as e}from"./jsx-runtime-DjgmBYnU.js";import{I as s}from"./Icon-BIo03g66.js";import{B as h}from"./Button-CS0vD4mi.js";import"./index-DjXIRphR.js";import"./index-Da9mX_ih.js";import"./index-CdWm979c.js";import"./index-Dnp4WS5M.js";const v={title:"Icon 图标",component:s,tags:["autodocs"],parameters:{layout:"centered"}},r={render:()=>e.jsxs("div",{style:{display:"flex",gap:20},children:[e.jsx(s,{icon:"check",size:"3x"}),e.jsx(s,{icon:"times",size:"3x"}),e.jsx(s,{icon:"anchor",size:"3x"}),e.jsx(s,{icon:"trash",size:"3x"}),e.jsxs(h,{size:"lg",btnType:"primary",children:[e.jsx(s,{icon:"check"})," check"]})]}),parameters:{docs:{storyDescription:"默认图标样式，支持与 Button 组件组合使用"}}};r.storyName="默认图标样式";const o={render:()=>e.jsxs("div",{style:{display:"flex",gap:20},children:[e.jsx(s,{icon:"check",size:"3x",theme:"success"}),e.jsx(s,{icon:"times",size:"3x",theme:"danger"}),e.jsx(s,{icon:"anchor",size:"3x",theme:"primary"}),e.jsx(s,{icon:"exclamation-circle",size:"3x",theme:"warning"})]}),name:"主题图标",parameters:{docs:{storyDescription:"通过 theme 属性设置不同主题颜色"}}};o.storyName="和主题颜色配套的图标样式";const c={render:()=>e.jsxs("div",{style:{display:"flex",gap:20},children:[e.jsx(s,{icon:"spinner",size:"3x",theme:"primary",spin:!0}),e.jsx(s,{icon:"spinner",size:"3x",theme:"success",pulse:!0})]}),parameters:{docs:{storyDescription:"支持 spin/pulse 动画效果"}}};c.storyName="支持动画的图标";var i,t,n;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 20
  }}>\r
      <Icon icon="check" size="3x" />\r
      <Icon icon="times" size="3x" />\r
      <Icon icon="anchor" size="3x" />\r
      <Icon icon="trash" size="3x" />\r
      <Button size="lg" btnType="primary">\r
        <Icon icon="check" /> check \r
      </Button>\r
    </div>,
  parameters: {
    docs: {
      storyDescription: '默认图标样式，支持与 Button 组件组合使用'
    }
  }
}`,...(n=(t=r.parameters)==null?void 0:t.docs)==null?void 0:n.source}}};var a,m,p;o.parameters={...o.parameters,docs:{...(a=o.parameters)==null?void 0:a.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 20
  }}>\r
      <Icon icon="check" size="3x" theme="success" />\r
      <Icon icon="times" size="3x" theme="danger" />\r
      <Icon icon="anchor" size="3x" theme="primary" />\r
      <Icon icon="exclamation-circle" size="3x" theme="warning" />\r
    </div>,
  name: '主题图标',
  // 替代 storyName
  parameters: {
    docs: {
      storyDescription: '通过 theme 属性设置不同主题颜色'
    }
  }
}`,...(p=(m=o.parameters)==null?void 0:m.docs)==null?void 0:p.source}}};var d,x,l;c.parameters={...c.parameters,docs:{...(d=c.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    gap: 20
  }}>\r
      <Icon icon="spinner" size="3x" theme="primary" spin />\r
      <Icon icon="spinner" size="3x" theme="success" pulse />\r
    </div>,
  parameters: {
    docs: {
      storyDescription: '支持 spin/pulse 动画效果'
    }
  }
}`,...(l=(x=c.parameters)==null?void 0:x.docs)==null?void 0:l.source}}};const k=["DefaultIcons","ThemeIcons","AnimatedIcons"];export{c as AnimatedIcons,r as DefaultIcons,o as ThemeIcons,k as __namedExportsOrder,v as default};
