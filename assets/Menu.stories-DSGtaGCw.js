import{j as e}from"./jsx-runtime-DjgmBYnU.js";import{r as I,R as b}from"./index-Dnp4WS5M.js";import{c as v}from"./index-Da9mX_ih.js";import{I as $}from"./Icon-BIo03g66.js";import{T as L}from"./Transition-hAZQpIwj.js";import"./index-DjXIRphR.js";import"./index-CdWm979c.js";import"./index-BdR6VAUc.js";import"./index-DCOq8Jev.js";const T=I.createContext({index:"0"}),y=r=>{const{className:l,mode:i="horizontal",style:f,children:s,defaultIndex:x="0",onSelect:o,defaultOpenSubMenus:a=[]}=r,[c,j]=I.useState(x),g=v("menu",l,{"menu-vertical":i==="vertical","menu-horizontal":i!=="vertical"}),S={index:c||"0",onSelect:d=>{j(d),o&&o(d)},mode:i,defaultOpenSubMenus:a},C=()=>b.Children.map(s,(d,k)=>{const t=d,{displayName:u}=t.type;if(u==="MenuItem"||u==="SubMenu")return b.cloneElement(t,{index:k.toString()});console.error("Warning: Menu has a child which is not a MenuItem component")});return e.jsx("ul",{className:g,style:f,"data-testid":"test-menu",children:e.jsx(T.Provider,{value:S,children:C()})})};y.__docgenInfo={description:`该组件提供页面和功能导航所需的菜单列表。\r
支持顶部导航和侧边导航两种常见形式，分别对应横向和纵向布局模式。\r
可以使用 Menu.Item 和 Menu.Submenu 构建单个菜单选项和子菜单。\r
\r
### 引用方法\r
\r
~~~js\r
import { Menu } from 'Aloha'\r
~~~`,methods:[],displayName:"Menu",props:{defaultIndex:{required:!1,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},mode:{required:!1,tsType:{name:"union",raw:"'horizontal' | 'vertical'",elements:[{name:"literal",value:"'horizontal'"},{name:"literal",value:"'vertical'"}]},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(selectedIndex: string) => void",signature:{arguments:[{type:{name:"string"},name:"selectedIndex"}],return:{name:"void"}}},description:""},defaultOpenSubMenus:{required:!1,tsType:{name:"Array",elements:[{name:"string"}],raw:"string[]"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const n=r=>{const{index:l,disabled:i,className:f,style:s,children:x}=r,o=I.useContext(T),a=v("menu-item",f,{"is-disabled":i,"is-active":o.index===l}),c=()=>{o.onSelect&&!i&&typeof l=="string"&&o.onSelect(l)};return e.jsx("li",{className:a,style:s,onClick:c,children:x})};n.displayName="MenuItem";n.__docgenInfo={description:"",methods:[],displayName:"MenuItem",props:{index:{required:!1,tsType:{name:"string"},description:""},disabled:{required:!1,tsType:{name:"boolean"},description:""},className:{required:!1,tsType:{name:"string"},description:""},style:{required:!1,tsType:{name:"CSSProperties"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const h=({index:r,title:l,children:i,className:f})=>{const s=I.useContext(T),x=s.defaultOpenSubMenus,o=r&&s.mode==="vertical"?x.includes(r):!1,[a,c]=I.useState(o),j=v("menu-item submenu-item",f,{"is-active":s.index===r,"is-opened":a,"is-vertical":s.mode==="vertical"}),g=t=>{t.preventDefault(),c(!a)};let N;const S=(t,u)=>{clearTimeout(N),t.preventDefault(),N=setTimeout(()=>{c(u)},300)},C=s.mode==="vertical"?{onClick:g}:{},d=s.mode!=="vertical"?{onMouseEnter:t=>{S(t,!0)},onMouseLeave:t=>{S(t,!1)}}:{},k=()=>{const t=v("submenu",{"menu-opened":a}),u=b.Children.map(i,(P,W)=>{const q=P;if(q.type.displayName==="MenuItem")return b.cloneElement(q,{index:`${r}-${W}`});console.error("Warning: SubMenu has a child which is not a MenuItem component")});return e.jsx(L,{in:a,timeout:300,animation:"zoom-in-top",children:e.jsx("ul",{className:t,children:u})})};return e.jsxs("li",{className:j,...d,children:[e.jsxs("div",{className:"submenu-title",...C,children:[l,e.jsx($,{icon:"angle-down",className:"arrow-icon"})]}),k()]},r)};h.displayName="SubMenu";h.__docgenInfo={description:"",methods:[],displayName:"SubMenu",props:{index:{required:!1,tsType:{name:"string"},description:""},title:{required:!0,tsType:{name:"string"},description:""},className:{required:!1,tsType:{name:"string"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};const Y={title:"Menu 导航菜单",id:"Menu",component:y,argTypes:{defaultIndex:{control:"text",description:"默认选中项的索引"},mode:{options:["horizontal","vertical"],control:{type:"radio"},description:"菜单模式"},defaultOpenSubMenus:{control:"object",description:"默认展开的子菜单索引数组。默认展开只在纵向布局下生效，体现布局模式的差异化设计"}},subcomponents:{SubMenu:h,Item:n}},m=()=>e.jsxs(y,{defaultIndex:"0",mode:"horizontal",children:[e.jsx(n,{children:"cool link"}),e.jsx(n,{children:"cool link 2"}),e.jsx(n,{disabled:!0,children:"disabled"}),e.jsxs(h,{title:"点击下拉选项",children:[e.jsx(n,{children:"下拉选项一"}),e.jsx(n,{children:"下拉选项二"})]})]});m.storyName="默认的顶部横向导航菜单";const p=()=>e.jsxs(y,{defaultIndex:"0",mode:"vertical",children:[e.jsx(n,{children:"cool link"}),e.jsx(n,{children:"cool link 2"}),e.jsxs(h,{title:"点击下拉选项",children:[e.jsx(n,{children:"下拉选项一"}),e.jsx(n,{children:"下拉选项二"})]})]});p.storyName="侧边的导航菜单";const M=()=>e.jsxs(y,{defaultIndex:"0",mode:"vertical",defaultOpenSubMenus:["2"],children:[e.jsx(n,{children:"cool link"}),e.jsx(n,{children:"cool link 2"}),e.jsxs(h,{title:"默认展开下拉选项",children:[e.jsx(n,{children:"下拉选项一"}),e.jsx(n,{children:"下拉选项二"})]})]});M.storyName="默认展开的侧边导航菜单";m.__docgenInfo={description:"",methods:[],displayName:"ADefaultMenu"};p.__docgenInfo={description:"",methods:[],displayName:"BClickMenu"};M.__docgenInfo={description:"",methods:[],displayName:"COpenedMenu"};var _,O,E;m.parameters={...m.parameters,docs:{...(_=m.parameters)==null?void 0:_.docs,source:{originalSource:`() => <Menu defaultIndex='0' mode="horizontal">\r
        <MenuItem>cool link</MenuItem>\r
        <MenuItem>cool link 2</MenuItem>\r
        <MenuItem disabled>disabled</MenuItem>\r
        <SubMenu title="点击下拉选项">\r
            <MenuItem>下拉选项一</MenuItem>\r
            <MenuItem>下拉选项二</MenuItem>\r
        </SubMenu>\r
    </Menu>`,...(E=(O=m.parameters)==null?void 0:O.docs)==null?void 0:E.source}}};var z,w,A;p.parameters={...p.parameters,docs:{...(z=p.parameters)==null?void 0:z.docs,source:{originalSource:`() => <Menu defaultIndex='0' mode="vertical">\r
        <MenuItem>cool link</MenuItem>\r
        <MenuItem>cool link 2</MenuItem>\r
        <SubMenu title="点击下拉选项">\r
            <MenuItem>下拉选项一</MenuItem>\r
            <MenuItem>下拉选项二</MenuItem>\r
        </SubMenu>\r
    </Menu>`,...(A=(w=p.parameters)==null?void 0:w.docs)==null?void 0:A.source}}};var R,D,B;M.parameters={...M.parameters,docs:{...(R=M.parameters)==null?void 0:R.docs,source:{originalSource:`() => <Menu defaultIndex='0' mode="vertical" defaultOpenSubMenus={['2']}>\r
        <MenuItem>cool link</MenuItem>\r
        <MenuItem>cool link 2</MenuItem>\r
        <SubMenu title="默认展开下拉选项">\r
            <MenuItem>下拉选项一</MenuItem>\r
            <MenuItem>下拉选项二</MenuItem>\r
        </SubMenu>\r
    </Menu>`,...(B=(D=M.parameters)==null?void 0:D.docs)==null?void 0:B.source}}};const Z=["ADefaultMenu","BClickMenu","COpenedMenu"];export{m as ADefaultMenu,p as BClickMenu,M as COpenedMenu,Z as __namedExportsOrder,Y as default};
