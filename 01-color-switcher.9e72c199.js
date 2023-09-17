!function(){let t={body:document.querySelector("body"),startrBtn:document.querySelector("[data-start]"),stoptrBtn:document.querySelector("[data-stop]")},r=null,e=!0;function n(){return`#${Math.floor(16777215*Math.random()).toString(16).padStart(6,0)}`}t.startrBtn.addEventListener("click",function(){!0===e&&(t.body.style.backgroundColor=n(),r=setInterval(()=>{t.body.style.backgroundColor=n()},1e3),e=!1)}),t.stoptrBtn.addEventListener("click",function(){clearInterval(r),e=!0})}();//# sourceMappingURL=01-color-switcher.9e72c199.js.map

//# sourceMappingURL=01-color-switcher.9e72c199.js.map
