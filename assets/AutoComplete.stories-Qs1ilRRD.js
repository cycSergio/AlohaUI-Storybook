import{j as n}from"./jsx-runtime-DjgmBYnU.js";import{r as i}from"./index-Dnp4WS5M.js";import{c as V}from"./index-Da9mX_ih.js";import{I as _}from"./Input-DF8NQiDs.js";import{I as K}from"./Icon-BIo03g66.js";import{T as $}from"./Transition-hAZQpIwj.js";import"./index-DjXIRphR.js";import"./index-CdWm979c.js";import"./index-BdR6VAUc.js";import"./index-DCOq8Jev.js";function H(r,o=300){const[a,t]=i.useState(r);return i.useEffect(()=>{const s=window.setTimeout(()=>{t(r)},o);return()=>{clearTimeout(s)}},[r,o]),a}function M(r,o){i.useEffect(()=>{const a=t=>{!r.current||r.current.contains(t.target)||o(t)};return document.addEventListener("click",a),()=>{document.removeEventListener("click",a)}},[r,o])}const d=r=>{const{fetchSuggestions:o,onSelect:a,onChange:t,value:s,renderOption:C,...N}=r,[v,T]=i.useState(s),[l,m]=i.useState([]),[b,j]=i.useState(!1),[R,u]=i.useState(!1),[p,D]=i.useState(-1),f=i.useRef(!1),w=i.useRef(null),y=H(v,300);M(w,()=>{m([])}),i.useEffect(()=>{if(y&&f.current){m([]);const e=o(y);e instanceof Promise?(j(!0),e.then(c=>{j(!1),m(c),c.length>0&&u(!0)})):(m(e),u(!0),e.length>0&&u(!0))}else u(!1);D(-1)},[y,o]);const x=e=>{e<0&&(e=0),e>=l.length&&(e=l.length-1),D(e)},k=e=>{switch(e.keyCode){case 13:l[p]&&A(l[p]);break;case 38:x(p-1);break;case 40:x(p+1);break;case 27:u(!1);break}},U=e=>{const c=e.target.value.trim();console.log("triggered the value",c),T(c),t&&t(c),f.current=!0},A=e=>{T(e.value),u(!1),a&&a(e),f.current=!1},B=e=>C?C(e):e.value,J=()=>n.jsx($,{in:R||b,animation:"zoom-in-top",timeout:300,onExited:()=>{m([])},children:n.jsxs("ul",{className:"suggestion-list",children:[b&&n.jsx("div",{className:"suggstions-loading-icon",children:n.jsx(K,{icon:"spinner",spin:!0})}),l.map((e,c)=>{const z=V("suggestion-item",{"is-active":c===p});return n.jsx("li",{className:z,onClick:()=>A(e),children:B(e)},c)})]})});return n.jsxs("div",{className:"auto-complete",ref:w,children:[n.jsx(_,{...N,value:v,onChange:U,onKeyDown:k}),J()]})};d.__docgenInfo={description:`实现输入框的自动完成功能，可在用户输入时自动提示补全选项。\r
支持同步和异步两种数据加载方式，并且兼容 Input 组件的所有属性，同时支持使用键盘事件进行选项选择。\r
### 引用方法\r
\r
~~~js\r
import { AutoComplete } from 'Aloha'\r
~~~`,methods:[],displayName:"AutoComplete",props:{fetchSuggestions:{required:!0,tsType:{name:"signature",type:"function",raw:"(str: string) => DataSourceType[] | Promise<DataSourceType[]>",signature:{arguments:[{type:{name:"string"},name:"str"}],return:{name:"union",raw:"DataSourceType[] | Promise<DataSourceType[]>",elements:[{name:"Array",elements:[{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]}],raw:"DataSourceType[]"},{name:"Promise",elements:[{name:"Array",elements:[{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]}],raw:"DataSourceType[]"}],raw:"Promise<DataSourceType[]>"}]}}},description:`返回输入建议的方法，可以拿到当前的输入，然后返回同步的数组或者是异步的 Promise\r
type DataSourceType<T = {}> = T & DataSourceObject`},onSelect:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DataSourceType) => void",signature:{arguments:[{type:{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]},name:"item"}],return:{name:"void"}}},description:"点击选中建议项时触发的回调"},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: string) => void",signature:{arguments:[{type:{name:"string"},name:"value"}],return:{name:"void"}}},description:"文本框发生改变的时候触发的事件"},renderOption:{required:!1,tsType:{name:"signature",type:"function",raw:"(item: DataSourceType) => ReactElement",signature:{arguments:[{type:{name:"intersection",raw:"T & DataSourceObject",elements:[{name:"T"},{name:"DataSourceObject"}]},name:"item"}],return:{name:"ReactElement"}}},description:""}},composes:["Omit"]};const se={title:"AutoComplete 自动补全",component:d,id:"AutoComplete",parameters:{docs:{source:{type:"code"}}}},h={name:"基本的搜索",render:()=>{const r=["China","Singapore","United States","Canada","Australia","Japan","Germany","France","Italy","Brazil"],o=a=>r.filter(t=>t.toLowerCase().includes(a.toLowerCase())).map(t=>({value:t}));return n.jsx(d,{fetchSuggestions:o,placeholder:"输入国家名称试试"})}},g={name:"自定义搜索结果模版",render:()=>{const r=[{value:"China",code:"CN"},{value:"Singapore",code:"SG"},{value:"United States",code:"US"},{value:"Canada",code:"CA"},{value:"Australia",code:"AU"},{value:"Japan",code:"JP"},{value:"Germany",code:"DE"},{value:"France",code:"FR"},{value:"Italy",code:"IT"},{value:"Brazil",code:"BR"}],o=t=>r.filter(s=>s.value.toLowerCase().includes(t.toLowerCase())),a=t=>{const s=t;return n.jsxs(n.Fragment,{children:[n.jsxs("b",{children:["国家: ",s.value]}),n.jsxs("span",{children:["代码: ",s.code]})]})};return n.jsx(d,{fetchSuggestions:o,placeholder:"输入国家名称，自定义下拉模版",renderOption:a})}},S={name:"支持异步搜索",render:()=>{const r=a=>fetch(`https://api.github.com/search/users?q=${a}`).then(t=>t.json()).then(({items:t})=>t.slice(0,10).map(s=>({value:s.login,...s}))),o=a=>{const t=a;return n.jsxs("div",{children:[n.jsxs("b",{children:["Name: ",t.value]}),n.jsxs("span",{children:["url: ",t.url]})]})};return n.jsx(d,{fetchSuggestions:r,placeholder:"输入 Github 用户名试试",renderOption:o})}};var O,F,I;h.parameters={...h.parameters,docs:{...(O=h.parameters)==null?void 0:O.docs,source:{originalSource:`{
  name: '基本的搜索',
  render: () => {
    const countries = ['China', 'Singapore', 'United States', 'Canada', 'Australia', 'Japan', 'Germany', 'France', 'Italy', 'Brazil'];
    const handleFetch = (query: string) => {
      return countries.filter(name => name.toLowerCase().includes(query.toLowerCase())).map(name => ({
        value: name
      }));
    };
    return <AutoComplete fetchSuggestions={handleFetch} placeholder="输入国家名称试试" />;
  }
}`,...(I=(F=h.parameters)==null?void 0:F.docs)==null?void 0:I.source}}};var E,G,q;g.parameters={...g.parameters,docs:{...(E=g.parameters)==null?void 0:E.docs,source:{originalSource:`{
  name: '自定义搜索结果模版',
  render: () => {
    const countriesWithCode = [{
      value: 'China',
      code: 'CN'
    }, {
      value: 'Singapore',
      code: 'SG'
    }, {
      value: 'United States',
      code: 'US'
    }, {
      value: 'Canada',
      code: 'CA'
    }, {
      value: 'Australia',
      code: 'AU'
    }, {
      value: 'Japan',
      code: 'JP'
    }, {
      value: 'Germany',
      code: 'DE'
    }, {
      value: 'France',
      code: 'FR'
    }, {
      value: 'Italy',
      code: 'IT'
    }, {
      value: 'Brazil',
      code: 'BR'
    }];
    const handleFetch = (query: string) => {
      return countriesWithCode.filter(country => country.value.toLowerCase().includes(query.toLowerCase()));
    };
    const renderOption = (item: DataSourceType) => {
      const itemWithCode = item as DataSourceType<CountryProps>;
      return <>\r
          <b>国家: {itemWithCode.value}</b>\r
          <span>代码: {itemWithCode.code}</span>\r
        </>;
    };
    return <AutoComplete fetchSuggestions={handleFetch} placeholder="输入国家名称，自定义下拉模版" renderOption={renderOption} />;
  }
}`,...(q=(G=g.parameters)==null?void 0:G.docs)==null?void 0:q.source}}};var L,P,W;S.parameters={...S.parameters,docs:{...(L=S.parameters)==null?void 0:L.docs,source:{originalSource:`{
  name: '支持异步搜索',
  render: () => {
    const handleFetch = (query: string) => {
      return fetch(\`https://api.github.com/search/users?q=\${query}\`).then(res => res.json()).then(({
        items
      }) => {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        return items.slice(0, 10).map((item: any) => ({
          value: item.login,
          ...item
        }));
      });
    };
    const renderOption = (item: DataSourceType) => {
      const itemWithGithub = item as DataSourceType<GithubUserProps>;
      return <div>\r
          <b>Name: {itemWithGithub.value}</b>\r
          <span>url: {itemWithGithub.url}</span>\r
        </div>;
    };
    return <AutoComplete fetchSuggestions={handleFetch} placeholder="输入 Github 用户名试试" renderOption={renderOption} />;
  }
}`,...(W=(P=S.parameters)==null?void 0:P.docs)==null?void 0:W.source}}};const ie=["ASimpleComplete","BCustomComplete","CAjaxComplete"];export{h as ASimpleComplete,g as BCustomComplete,S as CAjaxComplete,ie as __namedExportsOrder,se as default};
