function e(e){return e&&e.__esModule?e.default:e}var t={};t=function(){function e(e,{items:t=[],typeSpeed:n=100,deleteSpeed:s=50,delayBetweenItems:o=2e3,loop:r=!0,startDelay:a=0,startsAtIndex:i=0,cursor:l=!0,cursorChar:d="|",cursorCharBlinkSpeed:c=500,cursorCharBlinkTransitionSpeed:u=.15,startOnView:m=!0,startOnViewOffset:p=0}={}){if(!t.length)throw new Error("tinyTypewriter: No items option was provided");let g,h,y,v,f=!1,w=i,E=t[w],L=e.getBoundingClientRect();const b=document.createElement("span");function S(a){const i=a.length,l=t[w%i];if(f?(g=s,E=l.substring(0,E.length-1)):E=l.substring(0,E.length+1),e.textContent=`${E}`,!r&&E===a[i-1])return clearTimeout(y),clearTimeout(h),void clearInterval(v);f||E!==l?f&&""===E&&(f=!1,w++,g=n):(f=!0,g=o),y=setTimeout((function(){S(t)}),g)}function $(){L=e.getBoundingClientRect(),L.bottom<=window.innerHeight-p&&L.top>=0+p&&(h=setTimeout((function(){S(t)}),a-o),window.removeEventListener("scroll",$))}b.textContent=d,l&&(e.insertAdjacentElement("afterend",b),b.style.transition=`opacity ${u}s`,v=setInterval((()=>{b.style.opacity="0"===b.style.opacity?"1":"0"}),c)),e.textContent=t[0],!m||L.bottom<=window.innerHeight&&L.top>=0?h=setTimeout((function(){S(t)}),a-o):window.addEventListener("scroll",$,!1)}return e}();(async()=>{const e=document.querySelector(".progress-line"),t=document.querySelector(".supporters"),n=await(await fetch("https://2b2t.org.ru/api/donate")).json();n.donators.reduce(((e,t)=>{const n=e.findIndex((e=>e.username===t.username));return n>=0?e[n].amount=parseFloat(e[n].amount)+parseFloat(t.amount):e.push(t),e}),[]).sort(((e,t)=>t.amount-e.amount)).forEach((e=>{const n=((e,t,n)=>{const s=document.createElement("div");s.classList.add("supporter"),t>=500&&s.classList.add("blogread"),t>=300&&s.classList.add("captchaskip"),t>=100&&s.classList.add("queueskip");const o=e.split(/[^A-Za-z0-9_]+/g).filter((e=>e.length>=2)),r=o.length>0?`https://2b2t.org.ru/api/avatar/${o.slice(-1)[0]}.svg`:"https://ely.by/images/skins/steve-face.png",a=n?.ton?` | ${n.ton} TON`:"";return s.innerHTML=`\n    <img class="avatar" src="${r}" onerror="this.src='https://ely.by/images/skins/steve-face.png';this.onerror=''" alt="${e}">\n    <div class="user">\n      <div class="nickname">${e}</div>\n      <div class="amount">${t} ₽${a}</div>\n    </div>`,s})(e.username,parseFloat(e.amount),e);t.append(n)})),document.querySelector(".donate-description").innerText=`Мы собираем на оплату сервера ${n.progress.title.split(" ").slice(2).join(" ")}. Из ${n.progress.goal_amount} рублей пока собрано ${n.progress.raised_amount}.`;const s=["sad","confused","ok","inlove","batman","impossible"];Array.from({length:5}).forEach(((t,o)=>{const r=n.progress.goal_amount/5*o-n.progress.raised_amount,a=r<0?" done":"",i=r<0&&Math.abs(r)<n.progress.goal_amount/5?" "+s[o]:"";e.innerHTML+=`<div class="mini-goal${a+i}"></div>`}));const o=document.querySelectorAll(".done").length-1,r=(n.progress.raised_amount-n.progress.goal_amount/5*o)/(n.progress.goal_amount/5)*100;document.querySelector(":root").style.setProperty("--minigoal-percent",`${r}%`),t.style.height=89*Math.ceil(n.donators.length/2)+"px",e.style.height="32px",setTimeout((()=>{t.classList.remove("hidden"),e.classList.remove("hidden"),t.style.height=null}),500)})();const n=document.querySelector(".typewriter");e(t)(n,{items:["родной","обнять белую березку","я знал, что ты вернешься","твой, мой, наш","мммм, тпс..."]});let s=0;window.plusSlides=e=>{const t=document.querySelectorAll(".quote");s+=e,s<0&&(s=t.length-1),s>=t.length&&(s=0),document.querySelector(".quote.active").classList.remove("active"),t[s].classList.add("active")},document.getElementById("donate-btn").addEventListener("click",(()=>{document.getElementById("modal").classList.add("faded-show"),document.getElementById("donate").classList.add("faded-show")})),[document.getElementById("modal"),document.getElementById("donate-btn-close")].forEach((e=>e.addEventListener("click",(()=>{document.getElementById("modal").classList.remove("faded-show"),document.getElementById("donate").classList.remove("faded-show")})))),setInterval((()=>plusSlides(1)),1e4);