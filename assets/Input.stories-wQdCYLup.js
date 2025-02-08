import{j as e}from"./jsx-runtime-DjgmBYnU.js";import{I as l}from"./Input-DF8NQiDs.js";import"./index-DjXIRphR.js";import"./index-Dnp4WS5M.js";import"./index-Da9mX_ih.js";import"./Icon-BIo03g66.js";import"./index-CdWm979c.js";const A={title:"Input 输入框",component:l,tags:["autodocs"],parameters:{layout:"centered"},decorators:[I=>e.jsx("div",{style:{width:"350px"},children:e.jsx(I,{})})]},r={args:{placeholder:"输入你想说的话吧~"}};r.storyName="默认输入框";const s={args:{placeholder:"disabled input",disabled:!0}};s.storyName="被禁用的输入框";const a={args:{placeholder:"input with icon",icon:"search"}};a.storyName="带图标的输入框";const t={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(l,{defaultValue:"large size",size:"lg"}),e.jsx(l,{placeholder:"small size",size:"sm"})]})};t.storyName="不同尺寸的输入框";const o={render:()=>e.jsxs("div",{style:{display:"flex",flexDirection:"column",gap:12},children:[e.jsx(l,{defaultValue:"prepend text",prepend:"https://"}),e.jsx(l,{defaultValue:"google",append:".com"})]})};o.storyName="有前后缀的输入框";var d,i,p;r.parameters={...r.parameters,docs:{...(d=r.parameters)==null?void 0:d.docs,source:{originalSource:`{
  args: {
    placeholder: '输入你想说的话吧~'
  }
}`,...(p=(i=r.parameters)==null?void 0:i.docs)==null?void 0:p.source}}};var n,c,m;s.parameters={...s.parameters,docs:{...(n=s.parameters)==null?void 0:n.docs,source:{originalSource:`{
  args: {
    placeholder: 'disabled input',
    disabled: true
  }
}`,...(m=(c=s.parameters)==null?void 0:c.docs)==null?void 0:m.source}}};var u,g,f;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`{
  args: {
    placeholder: 'input with icon',
    icon: 'search'
  }
}`,...(f=(g=a.parameters)==null?void 0:g.docs)==null?void 0:f.source}}};var x,h,y;t.parameters={...t.parameters,docs:{...(x=t.parameters)==null?void 0:x.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>\r
      <Input defaultValue="large size" size="lg" />\r
      <Input placeholder="small size" size="sm" />\r
    </div>
}`,...(y=(h=t.parameters)==null?void 0:h.docs)==null?void 0:y.source}}};var j,z,D;o.parameters={...o.parameters,docs:{...(j=o.parameters)==null?void 0:j.docs,source:{originalSource:`{
  render: () => <div style={{
    display: 'flex',
    flexDirection: 'column',
    gap: 12
  }}>\r
      <Input defaultValue="prepend text" prepend="https://" />\r
      <Input defaultValue="google" append=".com" />\r
    </div>
}`,...(D=(z=o.parameters)==null?void 0:z.docs)==null?void 0:D.source}}};const E=["Default","Disabled","WithIcon","DifferentSizes","WithAddons"];export{r as Default,t as DifferentSizes,s as Disabled,o as WithAddons,a as WithIcon,E as __namedExportsOrder,A as default};
