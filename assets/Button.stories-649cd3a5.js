import{j as q}from"./jsx-runtime-6eef64cc.js";import"./index-c013ead5.js";import"./_commonjsHelpers-725317a4.js";const n=({primary:s=!1,size:S="medium",backgroundColor:v,label:C,...x})=>{const z=s?"storybook-button--primary":"storybook-button--secondary";return q.jsx("button",{type:"button",className:["storybook-button",`storybook-button--${S}`,z].join(" "),style:{backgroundColor:v},...x,children:C})};try{n.displayName="Button",n.__docgenInfo={description:"Primary UI component for user interaction",displayName:"Button",props:{primary:{defaultValue:{value:"false"},description:"Is this the principal call to action on the page?",name:"primary",required:!1,type:{name:"boolean"}},backgroundColor:{defaultValue:null,description:"What background color to use",name:"backgroundColor",required:!1,type:{name:"string"}},size:{defaultValue:{value:"medium"},description:"How large should the button be?",name:"size",required:!1,type:{name:"enum",value:[{value:'"small"'},{value:'"medium"'},{value:'"large"'}]}},label:{defaultValue:null,description:"Button contents",name:"label",required:!0,type:{name:"string"}},onClick:{defaultValue:null,description:"Optional click handler",name:"onClick",required:!1,type:{name:"(() => void)"}}}}}catch{}const E={title:"Example/Button",component:n,parameters:{layout:"centered"},tags:["autodocs"],argTypes:{backgroundColor:{control:"color"}}},e={args:{primary:!0,label:"Button"}},r={args:{label:"Button"}},a={args:{size:"large",label:"Button"}},o={args:{size:"small",label:"Button"}},t={args:{primary:!0,label:"Delete now",backgroundColor:"red"}};var l,u,c;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Button"
  }
}`,...(c=(u=e.parameters)==null?void 0:u.docs)==null?void 0:c.source}}};var i,m,d;r.parameters={...r.parameters,docs:{...(i=r.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    label: "Button"
  }
}`,...(d=(m=r.parameters)==null?void 0:m.docs)==null?void 0:d.source}}};var p,g,b;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    size: "large",
    label: "Button"
  }
}`,...(b=(g=a.parameters)==null?void 0:g.docs)==null?void 0:b.source}}};var y,f,k;o.parameters={...o.parameters,docs:{...(y=o.parameters)==null?void 0:y.docs,source:{originalSource:`{
  args: {
    size: "small",
    label: "Button"
  }
}`,...(k=(f=o.parameters)==null?void 0:f.docs)==null?void 0:k.source}}};var B,_,h;t.parameters={...t.parameters,docs:{...(B=t.parameters)==null?void 0:B.docs,source:{originalSource:`{
  args: {
    primary: true,
    label: "Delete now",
    backgroundColor: "red"
  }
}`,...(h=(_=t.parameters)==null?void 0:_.docs)==null?void 0:h.source}}};const I=["Primary","Secondary","Large","Small","Warning"];export{a as Large,e as Primary,r as Secondary,o as Small,t as Warning,I as __namedExportsOrder,E as default};
//# sourceMappingURL=Button.stories-649cd3a5.js.map
