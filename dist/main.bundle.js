(()=>{"use strict";const e=document.getElementById("boxBtn"),o=document.getElementById("headerBtn"),t=document.getElementById("box"),n=document.getElementById("header");n.style.backgroundColor="green",t.style.backgroundColor="yellow",e.addEventListener("click",(function(){const e=t.style.backgroundColor;t.style.backgroundColor="yellow"===e?"blue":"yellow"})),o.addEventListener("click",(function(){const e=n.style.backgroundColor;n.style.backgroundColor="green"===e?"red":"green"}))})();