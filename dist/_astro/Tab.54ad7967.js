import{u as o,j as e,c as r,$ as m,a as p,b as d,d as g,e as h,f as u,g as f,h as b}from"./jsx-runtime.11bfe263.js";import{r as x}from"./index.ed373d49.js";const w=[{name:"douglas"},{name:"mark"},{name:"victor"},{name:"ansari"}],y=[{role:"commander",shortname:"douglas",name:"douglas hurley",desc:"Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2."},{role:"mission specialist",shortname:"mark",name:"mark shuttleworth",desc:"Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist."},{role:"pilot",shortname:"victor",name:"victor glover",desc:"Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer."},{role:"flight engineer",shortname:"ansari",name:"anousheh ansari",desc:"Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space."}];function j(){const t=o(m),n=s=>{p(s)},i=({crewName:s})=>{const a=y.find(l=>l.shortname===s);return e.jsxs(x.Fragment,{children:[e.jsx("h3",{className:"text-center font-serif uppercase text-white opacity-50 md:text-[24px] lg:text-start lg:text-[32px]",children:a.role}),e.jsx("h2",{className:"text-center font-serif text-[24px] uppercase text-white md:mt-0 md:text-[40px] lg:mt-4 lg:text-start lg:text-[56px]",children:a.name}),e.jsx("span",{className:r("mx-5 mt-2 h-[150px] text-center font-body text-[15px] leading-[25px] text-light-gray-blue md:mx-0 md:ml-1 md:mt-1 md:h-full md:text-base md:leading-[28px] lg:mt-5 lg:h-[160px] lg:w-[444px] lg:text-start lg:text-lg lg:leading-[32px]",{"md:!w-[458px]":a.shortname==="douglas","md:!w-[520px]":a.shortname==="mark","md:!w-[592px]":a.shortname==="victor","md:!w-[536px]":a.shortname==="ansari"}),children:a.desc})]})};return e.jsxs("main",{className:"h-screen w-full bg-crew-mobile bg-cover bg-no-repeat md:bg-crew-tablet lg:bg-crew-desktop",children:[e.jsxs("aside",{className:"absolute top-24 flex flex-col md:left-[40px] md:top-[136px] lg:left-[13%] lg:top-[25%]",children:[e.jsxs("div",{className:"flex justify-center md:justify-normal",children:[e.jsx("h5",{className:"text-base font-bold uppercase tracking-[2.7px] text-white opacity-25 md:text-[20px] md:tracking-[3.38px] lg:text-heading-5 lg:tracking-[4.72px]",children:"02"}),e.jsx("h5",{className:"ml-[19px] text-base uppercase tracking-[2.7px] text-white md:text-[20px] md:tracking-[3.38px] lg:ml-[28px] lg:text-heading-5 lg:tracking-[4.72px]",children:"Meet your crew"})]}),e.jsx("div",{className:"mt-[20rem] flex flex-col md:mt-[40px] md:w-[680px] md:items-center lg:mt-[154px] lg:items-start",children:e.jsx(i,{crewName:t})}),e.jsx("div",{className:"-mt-[16rem] flex flex-row justify-center space-x-5 md:ml-72 md:mt-[30px] md:justify-normal lg:ml-1 lg:mt-[100px]",children:w.map(({name:s},a)=>e.jsx("div",{onClick:()=>n(s),children:e.jsx("div",{className:"cursor-pointer",children:e.jsx("div",{className:r("h-[10px] w-[10px] items-center justify-center rounded-full bg-white opacity-[17%] lg:h-4 lg:w-4",{"!opacity-100":t===s,"hover:!opacity-50":t!==s})})})},a))})]}),e.jsx("div",{className:r("absolute bottom-[21.5rem] left-32 h-[223px] w-[180px] bg-contain bg-no-repeat md:bottom-0 md:left-[20%] md:h-[532px] md:w-[456px] lg:left-[55%] lg:h-[640px] lg:w-[550px]",{"bg-douglas md:left-[28%] lg:!h-[700px]":t==="douglas","left-28 bg-mark md:left-[25%]":t==="mark","bottom-[20.8rem] left-24 bg-victor":t==="victor","bottom-80 left-[5.5rem] w-[226px] bg-ansari md:!h-[480px] lg:!h-[575px]":t==="ansari"})}),e.jsx("div",{className:"flex md:hidden",children:e.jsx("div",{className:"absolute inset-y-[51.5%] left-8 z-10 h-[1px] w-[85%] bg-white opacity-25"})})]})}const v=[{name:"moon"},{name:"mars"},{name:"europa"},{name:"titan"}],N=[{name:"moon",desc:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",distance:"384,400 KM",travel:"3 DAYS"},{name:"mars",desc:"Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",distance:"225 MIL. KM",travel:"9 MONTHS"},{name:"europa",desc:"The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",distance:"628 MIL. KM",travel:"3 YEARS"},{name:"titan",desc:"See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",distance:"1.6 BIL. KM",travel:"7 YEARS"}];function k(){const t=o(d),n=s=>{g(s)},i=({planetName:s})=>{const a=N.find(l=>l.name===s);return e.jsxs(x.Fragment,{children:[e.jsx("h2",{className:"mt-3 text-center font-serif text-[56px] uppercase text-white md:text-start md:text-[80px] lg:text-[100px]",children:a.name}),e.jsx("span",{className:"mx-8 text-center font-body text-[15px] leading-6 text-light-gray-blue md:mx-0 md:text-base md:leading-[28px] lg:ml-2 lg:text-start lg:text-lg lg:leading-[32px]",children:a.desc}),e.jsx("div",{className:"mb-8 mt-8 w-[85%] border border-[#383B4B] md:mb-8 md:mt-12 md:w-full lg:ml-2"}),e.jsxs("div",{className:"flex flex-col items-center space-y-8 md:flex-row md:items-start md:space-y-0 lg:ml-2",children:[e.jsxs("div",{className:"flex flex-col",children:[e.jsx("span",{className:"text-center text-sm tracking-[2.4px] text-light-gray-blue lg:text-start",children:"AVG. DISTANCE"}),e.jsx("span",{className:"mt-3 text-center font-serif text-[28px] leading-[32px] text-white lg:text-start",children:a.distance})]}),e.jsxs("div",{className:"flex flex-col md:ml-[79px]",children:[e.jsx("span",{className:"text-center text-sm tracking-[2.4px] text-light-gray-blue lg:text-start",children:"EST. TIME TRAVEL"}),e.jsx("span",{className:"mt-3 text-center font-serif text-[28px] leading-[32px] text-white lg:text-start",children:a.travel})]})]})]})};return e.jsxs("main",{className:"h-[850px] w-screen overflow-x-hidden overflow-y-scroll bg-destination-mobile bg-cover bg-scroll md:h-screen md:overflow-y-hidden md:bg-destination-tablet lg:bg-destination-desktop",children:[e.jsxs("aside",{className:"absolute inset-x-[4.7rem] top-24 flex flex-col md:left-[40px] md:top-[136px] lg:left-[13%] lg:top-[25%]",children:[e.jsxs("div",{className:"flex",children:[e.jsx("h5",{className:"text-base font-bold uppercase tracking-[2.7px] text-white opacity-25 md:text-[20px] md:tracking-[3.38px] lg:text-heading-5 lg:tracking-[4.72px]",children:"01"}),e.jsx("h5",{className:"ml-[19px] text-base uppercase tracking-[2.7px] text-white md:text-[20px] md:tracking-[3.38px] lg:ml-[28px] lg:text-heading-5 lg:tracking-[4.72px]",children:"Pick your destination"})]}),e.jsx("div",{className:r("absolute inset-x-7 mt-12 h-[170px] w-[170px] transform bg-contain bg-no-repeat md:left-52 md:mt-[80px] md:h-[300px] md:w-[300px] lg:left-12 lg:mt-[150px] lg:h-[445px] lg:w-[445px]",{"bg-moon":t==="moon","bg-mars":t==="mars","bg-europa":t==="europa","bg-titan":t==="titan"})})]}),e.jsxs("article",{className:"absolute top-[21rem] flex h-[472px] flex-col items-center md:left-[14%] md:top-[56%] md:w-[573px] lg:left-[60%] lg:top-[38%] lg:w-[445px] lg:items-start",children:[e.jsx("div",{className:"flex flex-row space-x-6 md:space-x-8 lg:ml-2",children:v.map(({name:s},a)=>e.jsxs("div",{className:"group",onClick:()=>n(s),children:[e.jsx("div",{className:"cursor-pointer",children:e.jsx("span",{className:r("text-[14px] uppercase tracking-nav text-light-gray-blue md:text-base",{"text-white":t==s}),children:s})}),e.jsx("div",{className:r("mt-3 h-0.5 w-[95%]",{"bg-white opacity-100":t===s,"group-hover:bg-white group-hover:opacity-50":t!==s})})]},a))}),e.jsx(i,{planetName:t})]})]})}const T=[{step:"1",name:"vehicle"},{step:"2",name:"spaceport"},{step:"3",name:"capsule"}],A=[{id:"vehicle",name:"launch vehicle",desc:"A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!"},{id:"spaceport",name:"spaceport",desc:"A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch."},{id:"capsule",name:"space capsule",desc:"A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained."}];function S(){const t=o(h),n=a=>{u(a)},i=({techName:a})=>{const l=A.find(c=>c.id===a);return e.jsxs(x.Fragment,{children:[e.jsx("h2",{className:"mt-2 text-center font-serif text-2xl uppercase text-white md:mt-0 md:text-5xl lg:mt-3 lg:text-start lg:text-[56px]",children:l.name}),e.jsx("span",{className:"mx-5 mt-2 h-[160px] text-center font-body text-[15px] leading-[25px] text-light-gray-blue md:mx-0 md:mt-0 md:w-[458px] md:text-base md:leading-[28px] lg:ml-1 lg:mt-5 lg:w-[444px] lg:text-start lg:text-lg lg:leading-[32px]",children:l.desc})]})},s=({techName:a})=>a==="capsule"?e.jsx("div",{className:"absolute right-0 top-36 h-[170px] w-[375px] bg-capsule-landscape bg-contain bg-no-repeat md:top-[22%] md:h-[310px] md:w-full lg:top-[33%] lg:h-[527px] lg:w-[515px] lg:bg-capsule-portrait"}):a==="spaceport"?e.jsx("div",{className:"absolute right-0 top-36 h-[170px] w-[375px] bg-spaceport-landscape bg-contain bg-no-repeat md:top-[22%] md:h-[310px] md:w-full lg:top-[33%] lg:h-[527px] lg:w-[515px] lg:bg-spaceport-portrait"}):e.jsx("div",{className:"absolute right-0 top-36 h-[170px] w-[375px] bg-vehicle-landscape bg-contain bg-no-repeat md:top-[22%] md:h-[310px] md:w-full lg:top-[33%] lg:h-[527px] lg:w-[515px] lg:bg-vehicle-portrait"});return e.jsxs("main",{className:"h-screen w-full bg-technology-mobile bg-cover bg-no-repeat md:bg-technology-tablet lg:bg-technology-desktop",children:[e.jsxs("aside",{className:"absolute top-24 flex flex-col md:left-[40px] md:top-[136px] md:w-[calc(100vw-75px)] lg:left-[13%] lg:top-[25%] lg:w-max",children:[e.jsxs("div",{className:"flex justify-center md:justify-normal",children:[e.jsx("h5",{className:"text-base font-bold uppercase tracking-[2.7px] text-white opacity-25 md:text-[20px] md:tracking-[3.38px] lg:text-heading-5 lg:tracking-[4.72px]",children:"03"}),e.jsx("h5",{className:"ml-[19px] text-base uppercase tracking-[2.7px] text-white md:text-[20px] md:tracking-[3.38px] lg:ml-[28px] lg:text-heading-5 lg:tracking-[4.72px]",children:"Space Launch 101"})]}),e.jsxs("div",{className:"mt-52 flex flex-col md:mt-[425px] md:items-center lg:mt-[137px] lg:flex-row lg:items-start",children:[e.jsx("div",{className:"flex justify-center space-x-4 md:flex-row md:justify-normal lg:ml-1 lg:flex-col lg:space-x-0 lg:space-y-11",children:T.map(({step:a,name:l},c)=>e.jsx("div",{onClick:()=>n(l),children:e.jsx("div",{className:"cursor-pointer",children:e.jsx("div",{className:r("flex h-[40px] w-[40px] items-center justify-center rounded-full border border-[#979797] md:h-[60px] md:w-[60px] lg:h-20 lg:w-20",{"bg-white":t===l,"hover:!border-white":t!==l}),children:e.jsx("span",{className:r("font-serif text-base text-white md:text-2xl lg:text-[32px]",{"!text-black":t===l}),children:a})})})},c))}),e.jsxs("div",{className:"mt-6 flex flex-col justify-center md:mt-10 md:justify-normal md:space-y-5 lg:ml-[80px] lg:mt-0",children:[e.jsx("span",{className:"justify-center text-center text-sm uppercase tracking-[2.7px] text-light-gray-blue md:justify-normal md:text-base lg:text-start",children:"The terminology ..."}),e.jsx(i,{techName:t})]})]})]}),e.jsx(s,{techName:t})]})}function M(){const t=o(f),n=()=>{b("destination")};return e.jsx(e.Fragment,{children:t==="home"?e.jsxs("main",{className:"h-screen w-screen bg-home-mobile bg-cover bg-no-repeat md:flex md:flex-col md:bg-home-tablet lg:bg-home-desktop",children:[e.jsxs("aside",{className:"absolute inset-x-0 top-[25%] flex -translate-y-12 transform flex-col items-center md:left-[21%] md:top-[25%] md:h-[382px] md:w-[450px] lg:left-[13%] lg:top-[45%] lg:items-start",children:[e.jsx("h5",{className:"uppercase tracking-[2.7px] text-light-gray-blue md:text-[20px] md:tracking-[4.72px] lg:ml-2 lg:text-heading-5",children:"so, you want to travel to"}),e.jsx("h1",{className:"font-serif text-[80px] uppercase text-white md:text-heading-1",children:"space"}),e.jsx("h3",{className:"h-[125px] w-[85%] text-center font-body text-[15px] leading-[25px] text-light-gray-blue duration-300 md:h-full md:w-full md:text-[16px] md:leading-7 lg:ml-2 lg:text-start lg:text-body lg:leading-8",children:"Let’s face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you a truly out of this world experience!"})]}),e.jsxs("div",{onClick:n,className:"group absolute inset-x-28 top-[70%] flex h-[150px] w-[150px] cursor-pointer items-center justify-center rounded-full bg-white md:left-[35%] md:top-[67%] md:h-60 md:w-60 lg:left-[68%] lg:top-[55%] lg:h-72 lg:w-72",children:[e.jsx("div",{className:"transform transition-colors duration-300 group-hover:absolute group-hover:h-[450px] group-hover:w-[450px] group-hover:rounded-full group-hover:bg-white group-hover:opacity-10 group-hover:ring-1 group-hover:ring-[#979797]"}),e.jsx("span",{className:"font-serif text-[20px] uppercase tracking-[2px] md:text-heading-4",children:"explore"})]})]}):t==="destination"?e.jsx(k,{}):t==="crew"?e.jsx(j,{}):e.jsx(S,{})})}export{M as default};
