const t={body:document.querySelector("body"),startrBtn:document.querySelector("[data-start]"),stoptrBtn:document.querySelector("[data-stop]")};let r=null,e=!0;function o(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}//# sourceMappingURL=01-color-switcher.514eb15b.js.map
t.startrBtn.addEventListener("click",function(){!0===e&&(t.body.style.backgroundColor=o(),r=setInterval(()=>{t.body.style.backgroundColor=o()},1e3),e=!1)}),t.stoptrBtn.addEventListener("click",function(){clearInterval(r),e=!0});
//# sourceMappingURL=01-color-switcher.514eb15b.js.map
