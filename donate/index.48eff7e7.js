function e(e,t,n,i){Object.defineProperty(e,t,{get:n,set:i,enumerable:!0,configurable:!0})}function t(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},o={},r=n.parcelRequire94c2;null==r&&((r=function(e){if(e in i)return i[e].exports;if(e in o){var t=o[e];delete o[e];var n={id:e,exports:{}};return i[e]=n,t.call(n.exports,n,n.exports),n.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,t){o[e]=t},n.parcelRequire94c2=r),r.register("T5XDI",(function(t,n){var i,o;e(t.exports,"register",(()=>i),(e=>i=e)),e(t.exports,"resolve",(()=>o),(e=>o=e));var r={};i=function(e){for(var t=Object.keys(e),n=0;n<t.length;n++)r[t[n]]=e[t[n]]},o=function(e){var t=r[e];if(null==t)throw new Error("Could not resolve bundle with id "+e);return t}})),r.register("aAqDy",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("udKBv"),import.meta.url).toString()})),r.register("2ifw3",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("gL5Xp"),import.meta.url).toString()})),r.register("jL7ct",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("bWJCw"),import.meta.url).toString()})),r.register("gA46S",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("g4rFo"),import.meta.url).toString()})),r.register("3Lq05",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("aENtN"),import.meta.url).toString()})),r.register("kkxnA",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("dxEGn"),import.meta.url).toString()})),r.register("2cLRL",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("kFL9i"),import.meta.url).toString()})),r.register("95erL",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("d8dK7"),import.meta.url).toString()})),r.register("jc5BH",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("4iMKd"),import.meta.url).toString()})),r.register("eRmog",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("8xaBc"),import.meta.url).toString()})),r.register("7bMuF",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("3BqC3"),import.meta.url).toString()})),r.register("4Sb1N",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("4SICj"),import.meta.url).toString()})),r.register("i8Fse",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("6gSXk"),import.meta.url).toString()})),r.register("eEm3r",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("bx6Yj"),import.meta.url).toString()})),r.register("1PQkP",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("8yGYG"),import.meta.url).toString()})),r.register("aKXg4",(function(e,t){e.exports=new URL("../"+r("T5XDI").resolve("33UZ0"),import.meta.url).toString()})),r("T5XDI").register(JSON.parse('{"inblc":"index.48eff7e7.js","udKBv":"-3.38011511.png","gL5Xp":"-2.c58e0d87.png","bWJCw":"-1.9181978a.png","g4rFo":"0.f19e6f12.png","aENtN":"1.e5e6707b.png","dxEGn":"2.a3affc68.png","kFL9i":"3.d3286225.png","d8dK7":"4.3db456fd.png","4iMKd":"5.0f3088b4.png","8xaBc":"6.5eae8d47.png","3BqC3":"7.835eb8a9.png","4SICj":"8.d8207230.png","6gSXk":"9.f7480a53.png","bx6Yj":"10.6c6310ce.png","8yGYG":"11.edd6f382.png","33UZ0":"12.747d04e3.png"}'));var s={};s=function(){function e(e,{items:t=[],typeSpeed:n=100,deleteSpeed:i=50,delayBetweenItems:o=2e3,loop:r=!0,startDelay:s=0,startsAtIndex:a=0,cursor:l=!0,cursorChar:c="|",cursorCharBlinkSpeed:d=500,cursorCharBlinkTransitionSpeed:u=.15,startOnView:m=!0,startOnViewOffset:g=0}={}){if(!t.length)throw new Error("tinyTypewriter: No items option was provided");let p,f,x,h,v=!1,w=a,y=t[w],S=e.getBoundingClientRect();const L=document.createElement("span");function _(s){const a=s.length,l=t[w%a];if(v?(p=i,y=l.substring(0,y.length-1)):y=l.substring(0,y.length+1),e.textContent=`${y}`,!r&&y===s[a-1])return clearTimeout(x),clearTimeout(f),void clearInterval(h);v||y!==l?v&&""===y&&(v=!1,w++,p=n):(v=!0,p=o),x=setTimeout((function(){_(t)}),p)}function b(){S=e.getBoundingClientRect(),S.bottom<=window.innerHeight-g&&S.top>=0+g&&(f=setTimeout((function(){_(t)}),s-o),window.removeEventListener("scroll",b))}L.textContent=c,l&&(e.insertAdjacentElement("afterend",L),L.style.transition=`opacity ${u}s`,h=setInterval((()=>{L.style.opacity="0"===L.style.opacity?"1":"0"}),d)),e.textContent=t[0],!m||S.bottom<=window.innerHeight&&S.top>=0?f=setTimeout((function(){_(t)}),s-o):window.addEventListener("scroll",b,!1)}return e}();!function(){const e=document.querySelector(".typewriter");t(s)(e,{items:["родной","обнять белую березку","я знал, что ты вернешься","твой, мой, наш","мммм, тпс..."]})}();let a=document.querySelector(".marker");const l=e=>new Promise((t=>setTimeout(t,e)));let c=[];(async()=>{for(;;)await new Promise((async e=>{for(;c.length>0;){const e=c.shift();if(e.sleep){await l(e.sleep);continue}if(!a)break;const t=a.getBoundingClientRect(),n=document.querySelector(".image.active").getBoundingClientRect(),i=n.x+n.width*e.x-t.width/2,o=n.y+n.height*e.y-t.height/2+window.pageYOffset,r=e.x2?n.x+n.width*e.x2-t.width/2:null,s=e.y2?n.y+n.height*e.y2-t.height/2:null;a.classList.contains("hidden")&&(a.style.left=i-20+"px",a.style.top=o-20+"px",a.classList.remove("hidden"),await l(1)),a.style.left=`${i}px`,a.style.top=`${o}px`,await l(500),a.classList.add("click"),await l(300),r&&s&&(a.style.left=`${r}px`,a.style.top=`${s}px`),await l(e.duration),a?.classList?.remove("click"),0===c.length&&(await l(500),a?.classList?.add("hidden"),await l(500),a.style=null)}e()})),await l(500)})();const d=[{img:r("aAqDy"),moves:[{x:.5,y:.961,duration:57}],text:'Поддержать сервер очень просто. Это можно сделать через **TON**. Если у тебя уже есть TON, <a id="open-modal" href="#">кликай тут</a>. Поддерживается большинство способов оплаты, в том числе киви и карты.\n\nДля начала нужно открыть [телеграм](https://telegram.org/), в нем открыть бот [@wallet](https://t.me/wallet) и нажать **Запустить**.',func:()=>{document.getElementById("open-modal").addEventListener("click",(()=>{document.getElementById("modal").classList.add("faded-show"),document.getElementById("donate").classList.add("faded-show")}))}},{img:r("2ifw3"),moves:[{x:.5,y:.87,duration:66}],text:"В появившемся сообщении жмем **Добавить в Меню вложений**."},{img:r("jL7ct"),moves:[{x:.81,y:.6,duration:66}],text:"Жмем **ОК**."},{img:r("gA46S"),moves:[{x:.84,y:.85,duration:66}],text:"После открытия кошелька нужно перейти в **P2P Маркет**. Минимальная сумма для пополнения там гораздо меньше и поддерживаются практически все распростаненные способы оплаты."},{img:r("3Lq05"),moves:[{x:.487,y:.501,duration:66}],text:"В открывшемся окне жмем **Купить у пользователей**."},{img:r("kkxnA"),moves:[{x:.833,y:.277,duration:83}],text:"Перед нами список продавцов. Его можно отфильтровать по способу оплаты, валюте и минимальной сумме. Как только найден подходящий продавец, жмем **Купить**."},{img:r("2cLRL"),moves:[{x:.9,y:.235,duration:76},{x:.079,y:.235,duration:76},{x:.49,y:.959,duration:63}],text:"Тут можно нажать на стрелки, чтобы переключить ввод суммы на рубли. Далее вводим требуемую сумму и жмем **Купить**."},{img:r("95erL"),moves:[{x:.494,y:.961,duration:57}],text:"Проверяем, все ли так и жмем **Создать сделку**."},{img:r("jc5BH"),moves:[],text:"Ждем, когда продавец подтвердит сделку. Это обычно происходит в течении 1-2 минут."},{img:r("eRmog"),moves:[{x2:.46,y2:.2,x:.46,y:.8,duration:51}],text:"Листаем вниз."},{img:r("7bMuF"),moves:[{x:.929,y:.554,duration:99},{x:.549,y:.943,duration:64}],text:"Копирует адрес, на который нужно отправить деньги, смотрим точную сумму и переводим. После успешного перевода жмем **Подтвердить платеж**."},{img:r("4Sb1N"),moves:[],text:"Ждем, когда продавец подтвердит платеж."},{img:r("i8Fse"),moves:[],text:"Платеж подтвержен, TON будет получен в течении пары минут."},{img:r("eEm3r"),moves:[],text:"Все прошло успешно. Теперь открываем чатик с ботом и видим, что TON пришел."},{img:r("1PQkP"),moves:[],text:"TON пришел. Теперь можно либо перевести его в свой [Tonkeeper](https://play.google.com/store/apps/details?id=com.ton_keeper), либо зайти в личку [@comendantmc](https://t.me/comendantmc) и нажми там на скрепку, а затем на Wallet."},{img:r("aKXg4"),moves:[{x:.9,y:.235,duration:76},{x:.075,y:.235,duration:47},{x:.504,y:.952,duration:72}],text:"Вводим тут нужную сумму (жмем на стрелочки, чтобы было в рублях)."}],u=document.querySelector(".slides"),m=document.querySelector(".steps");for(let e in d){const t=d[e],n=document.createElement("div");n.classList.add("image");const i=document.createElement("img");i.src=t.img,n.append(i),u.append(n);const o=document.createElement("div");o.classList.add("step"),o.addEventListener("click",(()=>x.updateSlide(parseInt(e),!0))),m.append(o)}let g,p;const f=e=>{p=setTimeout((()=>{c.push(...e),f(e)}),3e3)},x=new class{constructor(e,t=!1,n){this.slide=0,this.className=e,this.autoSwitch=t,this.callback=n,document.getElementById("prevSlide").addEventListener("click",(()=>this.updateSlide(-1))),document.getElementById("nextSlide").addEventListener("click",(()=>this.updateSlide(1))),this.updateSlide(0)}updateSlide(e,t=!1){const n=document.querySelectorAll(this.className);t?this.slide=e:this.slide+=e,this.slide<0&&(this.slide=n.length-1),this.slide>=n.length&&(this.slide=0),document.querySelector(this.className+".active")||document.querySelector(this.className).classList.add("active"),document.querySelector(this.className+".active").classList.remove("active"),n[this.slide].classList.add("active"),this.autoSwitch&&(clearTimeout(this.timeout),this.timeout=setTimeout((()=>this.updateSlide(1)),1e4)),this.callback&&this.callback(this.slide)}}(".image",!1,(async e=>{clearTimeout(p),a?.classList?.add("hidden"),c=[],g=e,[...document.querySelectorAll(".steps .step")].forEach(((e,t)=>{t==g?e.classList.add("active"):e.classList.remove("active")}));const t=d[g].moves;document.querySelector(".content .text").innerHTML=d[g].text.replace(/\n\n/g,"<br><br>").replace(/\s/g," ").replace(/\(#<(.*?)>\)/g,"").replace(/(_[^*_]+)\*([^*_]+_)/g,"$1_*_$2").replace(/(?<=^|\s|\.|,)\*\*([^*]+)\*\*/g,"<b>$1</b>").replace(/(?<=^|\s|\.|,)_([^_]+)_/g,"<em>$1</em>").replace(new RegExp("(?<!\\]\\()(https?:\\/\\/(www.)?[-a-zа-я0-9@:%._\\+~#=]{1,256}\\.[a-zа-я0-9()]{1,6}\\b([-a-zа-я0-9()@:%_\\+.,;~#?&//=]*))","gi"),'<a href="$1" target="_blank">$1</a>').replace(/\[(.*?)\]\((.*?)\)/g,'<a href="$2" target="_blank">$1</a>'),d[g].func&&d[g].func(),t.length>0&&(c.push(...t),f(t))}));[document.getElementById("modal"),document.getElementById("donate-btn-close")].forEach((e=>e.addEventListener("click",(()=>{document.getElementById("modal").classList.remove("faded-show"),document.getElementById("donate").classList.remove("faded-show")}))));