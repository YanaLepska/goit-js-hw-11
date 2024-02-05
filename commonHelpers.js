import{i as c,S as u}from"./assets/vendor-46aac873.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const a of t.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&s(a)}).observe(document,{childList:!0,subtree:!0});function n(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerpolicy&&(t.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?t.credentials="include":e.crossorigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=n(e);fetch(e.href,t)}})();const i={formEl:document.querySelector(".form"),inputEl:document.querySelector(".query"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader")};i.formEl.addEventListener("submit",f);function l(){i.loader.classList.toggle("hidden")}function p(o){const r=new URLSearchParams({key:"42132229-e88b92984f0d2a7001cb07c65",image_type:"photo",orientation:"horizontal",safesearch:"true",q:o}),n="https://pixabay.com/api/",s=`?${r}`,e=n+s;return fetch(e).then(t=>{if(t.ok)return t.json();throw new Error(response.status)})}function f(o){o.preventDefault(),l();const r=o.target.elements.query.value;r.trim()===""?(l(),c.show({message:"Please full the input field",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"})):p(r).then(n=>{l(),n.hits.length>0?g(n.hits):(i.gallery.innerHTML="",c.show({message:"Sorry, there are no images matching your search query. Please try again!",messageColor:"#FFFFFF",backgroundColor:"#B51B1B",position:"topRight"}))}).catch(n=>console.error("Error data:",n)),o.target.reset()}function m({largeImageURL:o,webformatURL:r,tags:n,likes:s,views:e,comments:t,downloads:a}){return`<li class="gallery-item">
   <a class="gallery-link" href="${o}">
   <img class="gallery-image"
   src="${r}" 
   alt="${n}" />
  </a> <div class="info-box">
  <p>Likes:<span> ${s}</span></p>
        <p>Views:<span> ${e}</span></p>
        <p>Comments:<span> ${t}</span></p>
        <p>Downloads:<span> ${a}</span> </p>    
    </div>
  </li>`}let d=new u(".gallery a",{captionDelay:250,captionsData:"alt",captionPosition:"bottom"});function g(o){const r=o.map(m).join("");i.gallery.innerHTML=r,d.refresh()}
//# sourceMappingURL=commonHelpers.js.map
