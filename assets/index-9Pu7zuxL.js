(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const s of t.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function r(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();let d=null;function a(i){d&&d.remove();const o=["Up","Down","Left","Right"],n=o[Math.floor(Math.random()*o.length)],r=document.createElement("div");r.textContent=n.toUpperCase();const e=r.style;return e.position="absolute",e.width="100%",e.height="100%",e.display="flex",e.justifyContent="center",e.alignItems="center",e.fontSize="1.4rem",e.letterSpacing=".1rem",e.fontWeight="bold",e.transform="translate(-2.5rem, -2.5rem) rotateZ(-45deg)",e.color="#000",i.appendChild(r),d=r,n}function u(i,o,n){const r=document.querySelector("#score-board");return o=="Arrow"+i&&(r.textContent=`${n} / X`,n++),n}function f(){const i=document.querySelector("#theplayer"),o=document.querySelector("#thecube"),n={ArrowUp:[-140,-140],ArrowDown:[140,140],ArrowLeft:[-140,140],ArrowRight:[140,-140]};let r=!1,e=null,t=null,s=null;document.addEventListener("keydown",c=>{const l=c.key;e=!!n.hasOwnProperty(l),e&&!r&&(i.style.setProperty("--move-x",`${n[l][0]}px`),i.style.setProperty("--move-y",`${n[l][1]}px`),i.classList.add("player"),o.classList.add("cube"),r=!0,i.addEventListener("animationend",()=>{i.classList.remove("player"),o.classList.remove("cube"),r=!1}),setTimeout(()=>{s=u(t??" ",l,s??1),t=a(o)},750))})}document.querySelector("#app").innerHTML=`
  <div>
    <div id="score-board">0 / X</div>

    <div id="thecube">
      <div id="theplayer"></div>
      
      <div class="portal"></div>
      <div class="portal"></div>
      <div class="portal"></div>
      <div class="portal"></div>
    </div> 
  
    <info>Use Arrow keys to move</info> 

</div>
`;f();
