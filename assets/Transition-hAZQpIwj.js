import{j as _}from"./jsx-runtime-DjgmBYnU.js";import{R as E}from"./index-Dnp4WS5M.js";import{M as g}from"./index-BdR6VAUc.js";function T(){return T=Object.assign?Object.assign.bind():function(r){for(var a=1;a<arguments.length;a++){var l=arguments[a];for(var t in l)({}).hasOwnProperty.call(l,t)&&(r[t]=l[t])}return r},T.apply(null,arguments)}function k(r,a){if(r==null)return{};var l={};for(var t in r)if({}.hasOwnProperty.call(r,t)){if(a.indexOf(t)!==-1)continue;l[t]=r[t]}return l}function b(r,a){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(l,t){return l.__proto__=t,l},b(r,a)}function A(r,a){r.prototype=Object.create(a.prototype),r.prototype.constructor=r,b(r,a)}function y(r,a){return r.classList?!!a&&r.classList.contains(a):(" "+(r.className.baseVal||r.className)+" ").indexOf(" "+a+" ")!==-1}function M(r,a){r.classList?r.classList.add(a):y(r,a)||(typeof r.className=="string"?r.className=r.className+" "+a:r.setAttribute("class",(r.className&&r.className.baseVal||"")+" "+a))}function R(r,a){return r.replace(new RegExp("(^|\\s)"+a+"(?:\\s|$)","g"),"$1").replace(/\s+/g," ").replace(/^\s*|\s*$/g,"")}function j(r,a){r.classList?r.classList.remove(a):typeof r.className=="string"?r.className=R(r.className,a):r.setAttribute("class",R(r.className&&r.className.baseVal||"",a))}const D={disabled:!1},L=E.createContext(null);var $=function(a){return a.scrollTop},C="unmounted",v="exited",h="entering",x="entered",S="exiting",c=function(r){A(a,r);function a(t,s){var e;e=r.call(this,t,s)||this;var i=s,n=i&&!i.isMounting?t.enter:t.appear,o;return e.appearStatus=null,t.in?n?(o=v,e.appearStatus=h):o=x:t.unmountOnExit||t.mountOnEnter?o=C:o=v,e.state={status:o},e.nextCallback=null,e}a.getDerivedStateFromProps=function(s,e){var i=s.in;return i&&e.status===C?{status:v}:null};var l=a.prototype;return l.componentDidMount=function(){this.updateStatus(!0,this.appearStatus)},l.componentDidUpdate=function(s){var e=null;if(s!==this.props){var i=this.state.status;this.props.in?i!==h&&i!==x&&(e=h):(i===h||i===x)&&(e=S)}this.updateStatus(!1,e)},l.componentWillUnmount=function(){this.cancelNextCallback()},l.getTimeouts=function(){var s=this.props.timeout,e,i,n;return e=i=n=s,s!=null&&typeof s!="number"&&(e=s.exit,i=s.enter,n=s.appear!==void 0?s.appear:i),{exit:e,enter:i,appear:n}},l.updateStatus=function(s,e){if(s===void 0&&(s=!1),e!==null)if(this.cancelNextCallback(),e===h){if(this.props.unmountOnExit||this.props.mountOnEnter){var i=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this);i&&$(i)}this.performEnter(s)}else this.performExit();else this.props.unmountOnExit&&this.state.status===v&&this.setState({status:C})},l.performEnter=function(s){var e=this,i=this.props.enter,n=this.context?this.context.isMounting:s,o=this.props.nodeRef?[n]:[g.findDOMNode(this),n],p=o[0],u=o[1],f=this.getTimeouts(),d=n?f.appear:f.enter;if(!s&&!i||D.disabled){this.safeSetState({status:x},function(){e.props.onEntered(p)});return}this.props.onEnter(p,u),this.safeSetState({status:h},function(){e.props.onEntering(p,u),e.onTransitionEnd(d,function(){e.safeSetState({status:x},function(){e.props.onEntered(p,u)})})})},l.performExit=function(){var s=this,e=this.props.exit,i=this.getTimeouts(),n=this.props.nodeRef?void 0:g.findDOMNode(this);if(!e||D.disabled){this.safeSetState({status:v},function(){s.props.onExited(n)});return}this.props.onExit(n),this.safeSetState({status:S},function(){s.props.onExiting(n),s.onTransitionEnd(i.exit,function(){s.safeSetState({status:v},function(){s.props.onExited(n)})})})},l.cancelNextCallback=function(){this.nextCallback!==null&&(this.nextCallback.cancel(),this.nextCallback=null)},l.safeSetState=function(s,e){e=this.setNextCallback(e),this.setState(s,e)},l.setNextCallback=function(s){var e=this,i=!0;return this.nextCallback=function(n){i&&(i=!1,e.nextCallback=null,s(n))},this.nextCallback.cancel=function(){i=!1},this.nextCallback},l.onTransitionEnd=function(s,e){this.setNextCallback(e);var i=this.props.nodeRef?this.props.nodeRef.current:g.findDOMNode(this),n=s==null&&!this.props.addEndListener;if(!i||n){setTimeout(this.nextCallback,0);return}if(this.props.addEndListener){var o=this.props.nodeRef?[this.nextCallback]:[i,this.nextCallback],p=o[0],u=o[1];this.props.addEndListener(p,u)}s!=null&&setTimeout(this.nextCallback,s)},l.render=function(){var s=this.state.status;if(s===C)return null;var e=this.props,i=e.children;e.in,e.mountOnEnter,e.unmountOnExit,e.appear,e.enter,e.exit,e.timeout,e.addEndListener,e.onEnter,e.onEntering,e.onEntered,e.onExit,e.onExiting,e.onExited,e.nodeRef;var n=k(e,["children","in","mountOnEnter","unmountOnExit","appear","enter","exit","timeout","addEndListener","onEnter","onEntering","onEntered","onExit","onExiting","onExited","nodeRef"]);return E.createElement(L.Provider,{value:null},typeof i=="function"?i(s,n):E.cloneElement(E.Children.only(i),n))},a}(E.Component);c.contextType=L;c.propTypes={};function m(){}c.defaultProps={in:!1,mountOnEnter:!1,unmountOnExit:!1,appear:!1,enter:!0,exit:!0,onEnter:m,onEntering:m,onEntered:m,onExit:m,onExiting:m,onExited:m};c.UNMOUNTED=C;c.EXITED=v;c.ENTERING=h;c.ENTERED=x;c.EXITING=S;var I=function(a,l){return a&&l&&l.split(" ").forEach(function(t){return M(a,t)})},N=function(a,l){return a&&l&&l.split(" ").forEach(function(t){return j(a,t)})},O=function(r){A(a,r);function a(){for(var t,s=arguments.length,e=new Array(s),i=0;i<s;i++)e[i]=arguments[i];return t=r.call.apply(r,[this].concat(e))||this,t.appliedClasses={appear:{},enter:{},exit:{}},t.onEnter=function(n,o){var p=t.resolveArguments(n,o),u=p[0],f=p[1];t.removeClasses(u,"exit"),t.addClass(u,f?"appear":"enter","base"),t.props.onEnter&&t.props.onEnter(n,o)},t.onEntering=function(n,o){var p=t.resolveArguments(n,o),u=p[0],f=p[1],d=f?"appear":"enter";t.addClass(u,d,"active"),t.props.onEntering&&t.props.onEntering(n,o)},t.onEntered=function(n,o){var p=t.resolveArguments(n,o),u=p[0],f=p[1],d=f?"appear":"enter";t.removeClasses(u,d),t.addClass(u,d,"done"),t.props.onEntered&&t.props.onEntered(n,o)},t.onExit=function(n){var o=t.resolveArguments(n),p=o[0];t.removeClasses(p,"appear"),t.removeClasses(p,"enter"),t.addClass(p,"exit","base"),t.props.onExit&&t.props.onExit(n)},t.onExiting=function(n){var o=t.resolveArguments(n),p=o[0];t.addClass(p,"exit","active"),t.props.onExiting&&t.props.onExiting(n)},t.onExited=function(n){var o=t.resolveArguments(n),p=o[0];t.removeClasses(p,"exit"),t.addClass(p,"exit","done"),t.props.onExited&&t.props.onExited(n)},t.resolveArguments=function(n,o){return t.props.nodeRef?[t.props.nodeRef.current,n]:[n,o]},t.getClassNames=function(n){var o=t.props.classNames,p=typeof o=="string",u=p&&o?o+"-":"",f=p?""+u+n:o[n],d=p?f+"-active":o[n+"Active"],P=p?f+"-done":o[n+"Done"];return{baseClassName:f,activeClassName:d,doneClassName:P}},t}var l=a.prototype;return l.addClass=function(s,e,i){var n=this.getClassNames(e)[i+"ClassName"],o=this.getClassNames("enter"),p=o.doneClassName;e==="appear"&&i==="done"&&p&&(n+=" "+p),i==="active"&&s&&$(s),n&&(this.appliedClasses[e][i]=n,I(s,n))},l.removeClasses=function(s,e){var i=this.appliedClasses[e],n=i.base,o=i.active,p=i.done;this.appliedClasses[e]={},n&&N(s,n),o&&N(s,o),p&&N(s,p)},l.render=function(){var s=this.props;s.classNames;var e=k(s,["classNames"]);return E.createElement(c,T({},e,{onEnter:this.onEnter,onEntered:this.onEntered,onEntering:this.onEntering,onExit:this.onExit,onExiting:this.onExiting,onExited:this.onExited}))},a}(E.Component);O.defaultProps={classNames:""};O.propTypes={};const w=r=>{const{children:a,classNames:l,animation:t,wrapper:s=!0,appaer:e=!0,unmountOnExit:i=!0,...n}=r;return _.jsx(O,{classNames:l||t,...n,children:s?_.jsx("div",{children:a}):a})};w.__docgenInfo={description:"",methods:[],displayName:"Transition",props:{animation:{required:!1,tsType:{name:"union",raw:"'zoom-in-top' | 'zoom-in-left' | 'zoom-in-bottom' | 'zoom-in-right'",elements:[{name:"literal",value:"'zoom-in-top'"},{name:"literal",value:"'zoom-in-left'"},{name:"literal",value:"'zoom-in-bottom'"},{name:"literal",value:"'zoom-in-right'"}]},description:""},wrapper:{required:!1,tsType:{name:"boolean"},description:""},children:{required:!1,tsType:{name:"ReactNode"},description:""}}};export{w as T};
