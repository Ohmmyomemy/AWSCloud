// JavaScript for interactivity
console.log("Welcome to the interactive homepage!");

// Example interactive feature: Click animation on image
document.addEventListener("DOMContentLoaded", () => {
    const animatedImage = document.querySelector(".animated-image");

    animatedImage.addEventListener("click", () => {
        animatedImage.style.transform = "scale(1.5)";
        setTimeout(() => {
            animatedImage.style.transform = "scale(1)";
        }, 300);
    });
});
