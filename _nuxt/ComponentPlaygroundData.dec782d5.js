import y from"./TabsHeader.7159c46c.js";import g from"./ComponentPlaygroundProps.8db8bfc3.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.c833064f.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.665b3b00.js";import{d as k,as as D,r as V,b as a,c as C,g as P,L as o,Y as m,at as T,f as s,k as B}from"./entry.1cbe8cc2.js";import"./ProseH4.bdd801fc.js";import"./ProseCodeInline.ceb46509.js";import"./Badge.85152685.js";import"./slot.d78c4ef4.js";import"./node.676c5e99.js";import"./ProseP.1fafd0fb.js";const I={class:"component-playground-data"},j=k({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const n=D(t,"modelValue",p),e=V(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=c=>e.value=c;return(c,l)=>{const u=y,_=g,i=v,f=x;return a(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(a(),m(_,{key:0,modelValue:o(n),"onUpdate:modelValue":l[0]||(l[0]=b=>T(n)?n.value=b:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(a(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(a(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const h=B(j,[["__scopeId","data-v-6200bcaf"]]);export{h as default};