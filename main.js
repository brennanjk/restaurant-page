(()=>{"use strict";function e(){const t=document.querySelector(".container");for(;t.firstChild;)t.removeChild(t.firstChild);return{mainContainer:t,clearContent:e}}const t=[{name:"Classic Cheeseburger",description:"100% Angus Beef Patty | Cheddar Cheese | Lettuce | Tomatoes | Grilled Onions\r\n$9.99",imageSrc:"./images/Classic Cheeseburger.jpg",imageAlt:"Classic Cheesburger. Photo Credit Valeria Boltneva"},{name:"Heart Attack Burger",description:"100% Angus Beef Patty | Fried Egg | Lettuce | Tomatoes\r\n$10.99",imageSrc:"./images/Heart Attack Burger.jpg",imageAlt:"Classic Cheesburger. Photo Credit Valeria Boltneva"},{name:"Monster Burger",description:"Double 100% Angus Beef Patties | Double Slices of Cheddar Cheese | 4 Slices Crispy Bacon | Secret Sauce\r\n$12.99",imageSrc:"./images/Monster-Burger.jpg",imageAlt:"Monster Burger. Photo Credit Adrian Dorobantu"},{name:"French Fries",description:"Seasoned Shoestring Fries | Dipping Sauce\r\n$4.99",imageSrc:"./images/French Fries.jpg",imageAlt:"French Fries. Photo Credit Pixzolo Photography"},{name:"Onion Rings",description:"Beer Battered Onion Rings\r\n$5.99",imageSrc:"./images/Onion Rings.jpg",imageAlt:"Onion Rings: Photo Credit Ron Lach"}],n=function(){e(),function(){const e=document.querySelector(".container"),n=document.createElement("div");n.classList.add("menu"),t.forEach((function(t){const i=document.createElement("div");i.classList.add("menu-item");const a=document.createElement("div"),s=document.createElement("h3");s.classList.add("item-name"),s.textContent=t.name;const c=document.createElement("p");c.classList.add("item-details"),c.textContent=t.description;const r=document.createElement("img");r.classList.add("menu-img"),r.src=t.imageSrc,r.alt=t.imageAlt,a.appendChild(s),a.appendChild(c),i.appendChild(a),i.appendChild(r),n.appendChild(i),e.appendChild(n)}))}()};(function(){const e=document.getElementById("content");e.append(function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("div");t.classList.add("rest-name"),t.textContent="Moe's Burger Joint";const n=document.createElement("ul");n.classList.add("header-menu");const i=document.createElement("li");i.classList.add("home"),i.classList.add("header-item"),i.textContent="Home";const a=document.createElement("li");a.classList.add("menu"),a.classList.add("header-item"),a.textContent="Menu";const s=document.createElement("li");return s.classList.add("contact"),s.classList.add("header-item"),s.textContent="Contact",n.appendChild(i),n.appendChild(a),n.appendChild(s),e.appendChild(t),e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("container");const t=document.createElement("img");t.src="./images/burger.svg",t.alt="burger image";const n=document.createElement("div");return n.classList.add("review"),n.textContent="The best burgers in town! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac habitasse platea.",e.appendChild(t),e.appendChild(n),e}())})(),function(){document.querySelector(".home");const e=document.querySelector(".menu");document.querySelector("contact"),e.addEventListener("click",n)}()})();