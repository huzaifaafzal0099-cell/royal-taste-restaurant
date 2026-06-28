// ===============================
// Royal Taste Restaurant
// ===============================

// Welcome
console.log("Royal Taste Restaurant Loaded Successfully!");

// ===============================
// Navbar Scroll Effect
// ===============================

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 80) {

        nav.style.background = "rgba(0,0,0,.9)";
        nav.style.padding = "15px 80px";

    }

    else {

        nav.style.background = "rgba(0,0,0,.55)";
        nav.style.padding = "20px 80px";

    }

});

// ===============================
// Hero Button
// ===============================

const heroButton = document.querySelector(".hero button");

heroButton.addEventListener("click", () => {

    alert("🍽️ Your table reservation request has been received!");

});

// ===============================
// Contact Form
// ===============================

const form = document.querySelector("form");

form.addEventListener("submit", function(e){

    e.preventDefault();

    alert("✅ Thank you! We will contact you shortly.");

    form.reset();

});

// ===============================
// Smooth Fade Animation
// ===============================

const sections = document.querySelectorAll(
".about,.menu,.chef,.gallery,.reviews,.contact"
);

const observer = new IntersectionObserver((entries)=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";
entry.target.style.transform="translateY(0)";

}

});

},{
threshold:0.2
});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(80px)";

section.style.transition="1s";

observer.observe(section);

});

// ===============================
// Food Card Hover Effect
// ===============================

const cards = document.querySelectorAll(".food-card");

cards.forEach(card=>{

card.addEventListener("mouseenter",()=>{

card.style.transform="translateY(-15px) scale(1.03)";

});

card.addEventListener("mouseleave",()=>{

card.style.transform="translateY(0)";

});

});

// ===============================
// Gallery Hover
// ===============================

const gallery = document.querySelectorAll(".gallery-grid img");

gallery.forEach(image=>{

image.addEventListener("mouseenter",()=>{

image.style.filter="brightness(110%)";

});

image.addEventListener("mouseleave",()=>{

image.style.filter="brightness(100%)";

});

});

// ===============================
// Footer Year
// ===============================

const year = new Date().getFullYear();

document.querySelector("footer p").innerHTML =
"© " + year + " Royal Taste Restaurant | All Rights Reserved";