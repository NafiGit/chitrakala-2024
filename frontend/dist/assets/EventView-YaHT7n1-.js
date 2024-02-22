import{l as k,r as l,_ as h,a as c,b as d,E as v,p as f,h as g,d as t,m as y,u as S,o as m,e as C,t as o,F as I,f as B,q as V,v as R,j as G,g as M,s as b}from"./index-QNWWpTtg.js";const $=k("register-store",()=>({currentIndex:l(0)})),w=e=>(f("data-v-302aaff0"),e=e(),g(),e),E=w(()=>t("span",{class:"actual-text"}," Register ",-1)),j=w(()=>t("span",{"aria-hidden":"true",class:"hover-text"}," Register ",-1)),D=[E,j],L={__name:"EventRegisterBtn",setup(e){const r=$(),x=()=>{console.log(v[r.currentIndex].register),window.open(v[r.currentIndex].register)};return(_,u)=>(c(),d("button",{onClick:x,class:"button","data-text":"Awesome"},D))}},N=h(L,[["__scopeId","data-v-302aaff0"]]),p=e=>(f("data-v-c904d56b"),e=e(),g(),e),q={class:"min-h-[100vh] event-container bg-[rgb(0,0,0)] flex flex-col ssm:pb-12"},A={class:"flex flex-col justify-center"},F={class:"poster-data flex flex-col h-full sm:gap-32 gap-12 place-items-start flex-wrap max-sm:flex-col justify-between sm:px-12 sm:pl-[125px] px-8 sm:py-10 py-8"},z=["src","alt"],T=b('<svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="text-gray-300 hover:text-gray-100 w-10 h-10 xl:w-12 xl:h-12" data-v-c904d56b><g id="SVGRepo_bgCarrier" stroke-width="0" data-v-c904d56b></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round" data-v-c904d56b></g><g id="SVGRepo_iconCarrier" data-v-c904d56b><path d="M16 8L8 16M12 12L16 16M8 8L10 10" class="stroke-gray-200" stroke="#fff" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-v-c904d56b></path></g></svg>',1),U=[T],H={class:"flex tracking-wider"},J={class:"flex flex-col gap-10"},K={class:"flex flex-col"},O={class:"font-semibold font-robotoslab text-[30px] opacity-90",style:{filter:"drop-shadow(0 0 15px rgb(255, 255, 255))"}},P={class:"font-bold font-merriweather md:text-[52px] sm:text-[47px] max-ssm:text-[42px] text-[35px]",style:{filter:"drop-shadow(0 0 23px rgb(255, 255, 255))"}},Q={class:"opacity-85 font-montserrat text-[25px]",style:{filter:"drop-shadow(0 0 23px rgb(255, 255, 255))"}},W={class:"opacity-85 font-montserrat text-[25px]"},X=p(()=>t("br",null,null,-1)),Y={class:"opacity-85 font-semibold font-montserrat text-[30px]",style:{filter:"drop-shadow(0 0 23px rgb(255, 255, 255))"}},Z={class:"flex flex-col gap-12"},tt={class:"flex flex-col gap-1"},et=p(()=>t("span",{class:"font-bold text-[25px] sm:text-[30px] tracking-wide font-merriweather"},"Description",-1)),st={class:"pl-4 text-[18px] max-ssm:text-[16px]"},ot={class:"guidelines flex flex-col gap-1"},at=p(()=>t("span",{class:"font-bold text-[25px] tracking-wide sm:text-[30px] font-merriweather"},"Guidelines",-1)),nt={class:"pl-4 text-[18px] max-ssm:text-[16px]"},it={class:"list-disc pl-4"},lt={class:"flex justify-center flex-col gap-4"},rt={class:"flex gap-3 text-center"},ct={class:"checkbox-wrapper-12"},dt={class:"cbx"},pt=["checked"],xt=p(()=>t("label",{for:"cbx-12"},null,-1)),_t=p(()=>t("svg",{fill:"none",viewBox:"0 0 15 14",height:"14",width:"15"},[t("path",{d:"M2 8.36364L6.23077 12L13 2"})],-1)),ut=b('<svg version="1.1" xmlns="http://www.w3.org/2000/svg" data-v-c904d56b><defs data-v-c904d56b><filter id="goo-12" data-v-c904d56b><feGaussianBlur result="blur" stdDeviation="4" in="SourceGraphic" data-v-c904d56b></feGaussianBlur><feColorMatrix result="goo-12" values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 22 -7" mode="matrix" in="blur" data-v-c904d56b></feColorMatrix><feBlend in2="goo-12" in="SourceGraphic" data-v-c904d56b></feBlend></filter></defs></svg>',1),vt={key:0,class:"pt-2"},mt={__name:"EventView",setup(e){const r=y(),x=S(),_=l(0),u=l(""),s=l({});l("");const a=l(!1);return m(()=>{document.querySelector(".event-container").scrollIntoView({behavior:"smooth"})}),m(()=>{_.value=r.params.index,u.value=r.params.title,s.value=v[_.value],document.title=`${u.value} - Cine Carnival`}),(ht,n)=>(c(),d("div",q,[t("div",A,[t("div",F,[t("img",{src:s.value.image,alt:s.value.title,class:"w-[30%] min-h-[40px] max-xl:min-h-[600px] max-md:min-h-[300px] max-sm:min-h-[400px] max-vsm:min-h-[200px] max-xl:min-w-[600px] max-md:min-w-[400px] max-sm:min-w-[380px] max-vsm:min-w-[200px]"},null,8,z),t("button",{onClick:n[0]||(n[0]=i=>C(x).back()),to:{name:"home",params:{to:"group"}},class:"arrow-icon-prev z-50 absolute float-right right-10 -mt-4 duration-500 max-md:right-5"},U),t("div",H,[t("div",J,[t("div",K,[t("span",O,o(s.value.club_name),1),t("span",P,o(s.value.title),1),t("span",Q,o(s.value.type),1),t("span",W,o(s.value.category),1),X,t("span",Y,o(s.value.date),1)]),t("div",Z,[t("div",tt,[et,t("span",st,o(s.value.description),1)]),t("div",ot,[at,t("span",nt,[t("ul",it,[(c(!0),d(I,null,B(s.value.guidelines,i=>(c(),d("li",{key:i},o(i),1))),128))])])]),t("div",lt,[t("div",rt,[t("div",ct,[t("div",dt,[V(t("input",{checked:a.value,"onUpdate:modelValue":n[1]||(n[1]=i=>a.value=i),type:"checkbox",id:"cbx-12"},null,8,pt),[[R,a.value]]),xt,_t]),ut]),t("button",{onClick:n[2]||(n[2]=i=>a.value=!a.value),class:"text-lg relative -mt-0.5 font-montserrat text-gray-300"},"I agree to the guidelines")]),a.value?(c(),d("div",vt,[G(N)])):M("",!0)])])])])])])]))}},gt=h(mt,[["__scopeId","data-v-c904d56b"]]);export{gt as default};
