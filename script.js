// ==========================
// STICKY NAVBAR
// ==========================

window.addEventListener("scroll", () => {

    const header = document.querySelector("header");

    if(window.scrollY > 50){
        header.classList.add("sticky");
    }else{
        header.classList.remove("sticky");
    }

});


// ==========================
// SMOOTH SCROLL
// ==========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(e){

        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){

            target.scrollIntoView({
                behavior: "smooth"
            });

        }

    });

});


// ==========================
// SCROLL REVEAL ANIMATION
// ==========================

const revealElements = document.querySelectorAll(
    ".hero-content, .product-card, .footer-column"
);

function revealOnScroll(){

    revealElements.forEach((element) => {

        const windowHeight = window.innerHeight;
        const revealTop = element.getBoundingClientRect().top;

        if(revealTop < windowHeight - 100){
            element.classList.add("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);
revealOnScroll();


// ==========================
// PRODUCT CARD HOVER EFFECT
// ==========================

const cards = document.querySelectorAll(".product-card");

cards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-12px) scale(1.02)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "translateY(0) scale(1)";

    });

});


// ==========================
// BUTTON RIPPLE EFFECT
// ==========================

const buttons = document.querySelectorAll(".btn");

buttons.forEach(button => {

    button.addEventListener("click", function(e){

        let ripple = document.createElement("span");

        ripple.classList.add("ripple");

        this.appendChild(ripple);

        let x = e.clientX - e.target.offsetLeft;
        let y = e.clientY - e.target.offsetTop;

        ripple.style.left = `${x}px`;
        ripple.style.top = `${y}px`;

        setTimeout(() => {
            ripple.remove();
        }, 600);

    });

});


// ==========================
// TYPING EFFECT
// ==========================

const text = "Crafted with Passion";
let index = 0;

function typingEffect(){

    const typingElement = document.querySelector(".hero-title span");

    if(index < text.length){

        typingElement.textContent += text.charAt(index);

        index++;

        setTimeout(typingEffect, 100);

    }

}

document.querySelector(".hero-title span").textContent = "";
typingEffect();