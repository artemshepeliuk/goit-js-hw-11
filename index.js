import{a as m,S as f,i as c}from"./assets/vendor-30VqbI-A.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function a(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function o(e){if(e.ep)return;e.ep=!0;const t=a(e);fetch(e.href,t)}})();const p="49391267-a4a459152a4326aa641ed2d74",h="https://pixabay.com/api/",g=async s=>{try{return(await m.get(h,{params:{key:p,q:s,image_type:"photo",orientation:"horizontal",safesearch:!0}})).data.hits}catch(r){throw console.error("Error fetching images",r),r}},d=document.querySelector(".gallery"),i=document.querySelector(".loader");document.addEventListener("DOMContentLoaded",()=>{i.classList.add("hidden")});const y=()=>{i.classList.remove("hidden")},L=()=>{i.classList.add("hidden")},b=()=>{d.innerHTML=""},w=s=>{const r=s.map(o=>`
        <li class="gallery-item">
          <a href="${o.largeImageURL}">
            <img class="gallery-img" src="${o.webformatURL}" alt="${o.tags}" />
          </a>
          <div class="info">
            <p><b>Likes</b> ${o.likes}</p>
            <p><b>Views</b> ${o.views}</p>
            <p><b>Comments</b> ${o.comments}</p>
            <p><b>Downloads</b> ${o.downloads}</p>
          </div>
        </li>`).join("");d.insertAdjacentHTML("beforeend",r),new f(".gallery a").refresh()},v=()=>{iziToast.error({title:"Sorry, no images found",message:"Please try again with a different search term."})},u=document.querySelector(".form"),l=u.querySelector('input[name="search-text"]');u.addEventListener("submit",async s=>{s.preventDefault();const r=l.value.trim();if(!r){c.error({title:"Input error",message:"Please enter a search term."});return}l.value="",y(),b();try{const a=await g(r);a.length===0?v():w(a)}catch{c.error({title:"Error",message:"Something went wrong. Please try again."})}finally{L()}});
//# sourceMappingURL=index.js.map
