(()=>{"use strict";function e(){const t=document.querySelector(".container");for(;t.firstChild;)t.removeChild(t.firstChild);return{mainContainer:t,clearContent:e}}const t=[{name:"Classic Cheeseburger",description:"100% Angus Beef Patty | Cheddar Cheese | Lettuce | Tomatoes | Grilled Onions\r\n$9.99",imageSrc:"./images/Classic Cheeseburger.jpg",imageAlt:"Classic Cheesburger. Photo Credit Valeria Boltneva"},{name:"Heart Attack Burger",description:"100% Angus Beef Patty | Fried Egg | Lettuce | Tomatoes\r\n$10.99",imageSrc:"./images/Heart Attack Burger.jpg",imageAlt:"Classic Cheesburger. Photo Credit Valeria Boltneva"},{name:"Monster Burger",description:"Double 100% Angus Beef Patties | Double Slices of Cheddar Cheese | 4 Slices Crispy Bacon | Secret Sauce\r\n$12.99",imageSrc:"./images/Monster-Burger.jpg",imageAlt:"Monster Burger. Photo Credit Adrian Dorobantu"},{name:"French Fries",description:"Seasoned Shoestring Fries | Dipping Sauce\r\n$4.99",imageSrc:"./images/French Fries.jpg",imageAlt:"French Fries. Photo Credit Pixzolo Photography"},{name:"Onion Rings",description:"Beer Battered Onion Rings\r\n$5.99",imageSrc:"./images/Onion Rings.jpg",imageAlt:"Onion Rings: Photo Credit Ron Lach"}],n=function(){e(),function(){const e=document.querySelector(".container"),n=document.createElement("div");n.classList.add("menu"),t.forEach((function(t){const a=document.createElement("div");a.classList.add("menu-item");const i=document.createElement("div"),c=document.createElement("h3");c.classList.add("item-name"),c.textContent=t.name;const d=document.createElement("p");d.classList.add("item-details"),d.textContent=t.description;const o=document.createElement("img");o.classList.add("menu-img"),o.src=t.imageSrc,o.alt=t.imageAlt,i.appendChild(c),i.appendChild(d),a.appendChild(i),a.appendChild(o),n.appendChild(a),e.appendChild(n)}))}()};function a(){const e=document.querySelector(".container");for(;e.firstChild;)e.removeChild(e.firstChild);return{clearContent:a}}const i=function(){a(),function(){const e=document.querySelector(".container"),t=document.createElement("div");t.classList.add("contacts-container");const n=document.createElement("div"),a=document.createElement("h2");a.classList.add("contact-header"),a.textContent="Location";const i=document.createElement("p");i.classList.add("address"),i.textContent="985 Greystone Street\r\nBurbank, IL 60459",n.appendChild(a),n.appendChild(i),t.appendChild(n);const c=document.createElement("div"),d=document.createElement("h2");d.classList.add("contact-header"),d.textContent="Contact Us";const o=document.createElement("p");o.classList.add("contact-info"),o.textContent="moesburgers@gmail.com\r\n955-555-9555",c.appendChild(d),c.appendChild(o),t.appendChild(c),e.appendChild(t)}()};(function(){const e=document.getElementById("content");e.append(function(){const e=document.createElement("div");e.classList.add("header");const t=document.createElement("div");t.classList.add("rest-name"),t.textContent="Moe's Burger Joint";const n=document.createElement("ul");n.classList.add("header-menu");const a=document.createElement("li");a.classList.add("home"),a.classList.add("header-item"),a.textContent="Home";const i=document.createElement("li");i.classList.add("menu"),i.classList.add("header-item"),i.textContent="Menu";const c=document.createElement("li");return c.classList.add("contact"),c.classList.add("header-item"),c.textContent="Contact",n.appendChild(a),n.appendChild(i),n.appendChild(c),e.appendChild(t),e.appendChild(n),e}()),e.appendChild(function(){const e=document.createElement("div");e.classList.add("container");const t=document.createElement("img");t.src="./images/burger.svg",t.alt="burger image";const n=document.createElement("div");return n.classList.add("review"),n.textContent="The best burgers in town! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Gravida quis blandit turpis cursus in hac habitasse platea.",e.appendChild(t),e.appendChild(n),e}())})(),function(){document.querySelector(".home");const e=document.querySelector(".menu"),t=document.querySelector(".contact");e.addEventListener("click",n),t.addEventListener("click",i)}()})();