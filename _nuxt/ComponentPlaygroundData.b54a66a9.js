import y from"./TabsHeader.e9fa11ed.js";import g from"./ComponentPlaygroundProps.ccd1fe9d.js";import{_ as v}from"./ComponentPlaygroundSlots.vue.9b8ff8ad.js";import{_ as x}from"./ComponentPlaygroundTokens.vue.01b88e7f.js";import{d as k,as as D,r as V,b as a,c as C,g as P,L as o,Y as m,at as T,f as s,k as B}from"./entry.fb6dad4b.js";import"./ProseH4.0878afdd.js";import"./ProseCodeInline.aa350ad2.js";import"./Badge.2a990ad4.js";import"./slot.3d031cb2.js";import"./node.676c5e99.js";import"./ProseP.6df93d02.js";const I={class:"component-playground-data"},j=k({__name:"ComponentPlaygroundData",props:{modelValue:{type:Object,required:!1,default:()=>({})},componentData:{type:Object,required:!1,default:()=>({})}},emits:["update:modelValue"],setup(t,{emit:p}){const n=D(t,"modelValue",p),e=V(0),r=[{label:"Props"},{label:"Slots"},{label:"Design Tokens"}],d=c=>e.value=c;return(c,l)=>{const u=y,_=g,i=v,f=x;return a(),C("div",I,[P(u,{"active-tab-index":o(e),tabs:r,"onUpdate:activeTabIndex":d},null,8,["active-tab-index"]),o(e)===0?(a(),m(_,{key:0,modelValue:o(n),"onUpdate:modelValue":l[0]||(l[0]=b=>T(n)?n.value=b:null),"component-data":t.componentData},null,8,["modelValue","component-data"])):s("",!0),o(e)===1?(a(),m(i,{key:1,"component-data":t.componentData},null,8,["component-data"])):s("",!0),o(e)===2?(a(),m(f,{key:2,"component-data":t.componentData},null,8,["component-data"])):s("",!0)])}}});const h=B(j,[["__scopeId","data-v-6200bcaf"]]);export{h as default};