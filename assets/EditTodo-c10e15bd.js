import{u as v,a as m,r as f,b as n,o as T,c as _,d as x,e as s,t as r,w as y,v as B,F as b}from"./index-628a029f.js";const g={class:"flex justify-end"},k={__name:"EditTodo",props:{id:{type:String,required:!0}},setup(u){const i=u,o=v(),d=m(),a=f({title:"Редактирование задачи",save:"Сохранить"}),e=n(),t=n();T(()=>{e.value=o.getTodoById(Number(i.id)),t.value=e==null?void 0:e.value.title});const c=()=>{o.updateTodo(e==null?void 0:e.value.id,t.value),d.push("/")};return(S,l)=>(_(),x(b,null,[s("h1",null,r(a.title),1),y(s("input",{"onUpdate:modelValue":l[0]||(l[0]=p=>t.value=p),class:"new-todo"},null,512),[[B,t.value]]),s("div",g,[s("button",{class:"mt-3 btn-primary",onClick:c},r(a.save),1)])],64))}};export{k as default};
