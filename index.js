import{a as P,S as M,i as n}from"./assets/vendor-DcHCnVjq.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();const $="https://pixabay.com/api/",q="55960167-e523c3424fe4b885fc3ac8e74";async function h(r,t){const s=new URLSearchParams({key:q,q:r,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15});return(await P.get(`${$}?${s}`)).data}const f=document.querySelector(".gallery"),m=document.querySelector(".loader"),g=document.querySelector(".load-more"),R=new M(".gallery a",{captionsData:"alt",captionDelay:250});function p(r){const t=r.map(({webformatURL:s,largeImageURL:i,tags:e,likes:o,views:c,comments:S,downloads:v})=>`
        <li class="gallery-item">
          <a class="gallery-link" href="${i}">
            <img
              class="gallery-image"
              src="${s}"
              alt="${e}"
            />
          </a>

          <div class="info">
            <p><b>Likes</b> ${o}</p>
            <p><b>Views</b> ${c}</p>
            <p><b>Comments</b> ${S}</p>
            <p><b>Downloads</b> ${v}</p>
          </div>
        </li>
      `).join("");f.insertAdjacentHTML("beforeend",t),R.refresh()}function B(){f.innerHTML=""}function y(){m.classList.remove("hidden")}function L(){m.classList.add("hidden")}function b(){g.classList.remove("hidden")}function d(){g.classList.add("hidden")}const w=document.querySelector(".form"),O=document.querySelector(".load-more");let a=1,l="",u=0;w.addEventListener("submit",x);O.addEventListener("click",E);async function x(r){if(r.preventDefault(),l=r.currentTarget.elements["search-text"].value.trim(),l===""){n.warning({message:"Please fill in the search field!",position:"topRight"});return}a=1,B(),d(),y();try{const t=await h(l,a);if(u=t.totalHits,t.hits.length===0){n.error({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight"});return}p(t.hits);const s=Math.ceil(u/15);a<s?b():(d(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{L(),w.reset()}}async function E(){d(),a+=1,y();try{const r=await h(l,a);p(r.hits),A();const t=Math.ceil(u/15);a<t?b():(d(),n.info({message:"We're sorry, but you've reached the end of search results.",position:"topRight"}))}catch{n.error({message:"Something went wrong!",position:"topRight"})}finally{L()}}function A(){const r=document.querySelector(".gallery-item").getBoundingClientRect();window.scrollBy({top:r.height*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
