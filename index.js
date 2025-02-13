const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");
const stem = document.querySelector(".stem");
const flower4 = document.querySelector(".flower4");
const flower5 = document.querySelector(".flower5");
const flower = document.querySelectorAll(".flower");
const leafRight = document.querySelector(".leaf-right");
const leafLeft = document.querySelector(".leaf-left");
const lastText = document.getElementById("last-text");

// Function to set character length as CSS variable
function setCharLength(button) {
    const textLength = button.textContent.length;
    button.style.setProperty("--char-length", textLength);
}

// Set dynamic width for both buttons
setCharLength(button1);
setCharLength(button2);

const longestLength = button1.length;

button1.addEventListener("animationend", function (event) {
    if (event.animationName === "typing") {
        button1.classList.add("finished"); // Allows clicking after typing finishes
    }
});

// Click event for button1
button1.addEventListener("click", function () {
    // Disable interaction while animating
    button1.style.pointerEvents = "none";
    button1.style.animation = "deleting 2s forwards";

    // Wait for the animation to complete before removing it
    button1.addEventListener("animationend", () => {
        button1.classList.add("hidden"); // Hide first button
        button2.classList.remove("hidden"); // Show second button
        button2.classList.add("typing2"); // Trigger typing animation
    }, { once: true }); // Ensures the event only fires once
});

button2.addEventListener("animationend", function (event) {
    if (event.animationName === "typing2") {
        button2.classList.add("finished"); // Enable interactions
    }
});

// Click event for button2 (optional if you want to hide it again)
button2.addEventListener("click", function () {
    button2.style.animation = "deleting 2s forwards";
    button2.addEventListener("animationend", () => {
        button2.classList.add("hidden");
        setTimeout(() => {
        stem.classList.remove("hidden");
        stem.classList.add("stem-grow");
 /*       console.log("Adding animation class..."); */
        leafRight.classList.add("animate-leaf-right");
        leafLeft.classList.add("animate-leaf-left");
 /*       leafRight.addEventListener("animationstart", () => {
            console.log("Leaf animation started!");
        });
        leafRight.addEventListener("animationend", () => {
            console.log("Leaf animation ended!");
        });
       console.log(leafRight.classList);
  */       for (let i = 0; i < flower.length; i++) {
            flower[i].classList.add("flower-grow");
            flower[i].addEventListener("animationend", () => {
            flower4.style.scale = "1";
            flower5.style.scale = "1";
            flower4.style.animation = "flower4 8s ease-in-out infinite alternate";
            flower5.style.animation = "flower5 8s ease-in-out infinite alternate";
            lastText.style.animation = "fadeIn 2s 0.5s forwards";
            lastText.addEventListener("animationend", () => {
                lastText.style.opacity = "1";
                lastText.style.animation = "animate-gradient 3s linear infinite";
            })
            })
          }
        }, 500);
    }, { once: true });
});

