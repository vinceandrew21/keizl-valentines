// Elements
const envelope = document.getElementById("envelope-container");
const letter = document.getElementById("letter-container");
const noBtn = document.querySelector(".no-btn");
const yesBtn = document.querySelector(".btn[alt='Yes']");

const title = document.getElementById("letter-title");
const catImg = document.getElementById("letter-cat");
const buttons = document.getElementById("letter-buttons");
const finalText = document.getElementById("final-text");

// Click Envelope

envelope.addEventListener("click", () => {
    envelope.style.display = "none";
    letter.style.display = "flex";

    setTimeout( () => {
        document.querySelector(".letter-window").classList.add("open");
    },50);
});

// Logic to move the NO btn (stays inside window) – same effect on hover and click

const windowContent = document.querySelector(".window-content");

function moveNoBtn() {
  const min = 80;
  const max = 180;
  const distance = Math.random() * (max - min) + min;
  const angle = Math.random() * Math.PI * 2;

  let moveX = Math.cos(angle) * distance;
  let moveY = Math.sin(angle) * distance;

  const container = windowContent.getBoundingClientRect();
  const button = noBtn.getBoundingClientRect();

  const padding = 4;
  const minX = container.left + padding - button.left;
  const maxX = container.right - padding - button.width - button.left;
  const minY = container.top + padding - button.top;
  const maxY = container.bottom - padding - button.height - button.top;

  moveX = Math.max(minX, Math.min(maxX, moveX));
  moveY = Math.max(minY, Math.min(maxY, moveY));

  noBtn.style.transition = "transform 0.3s ease";
  noBtn.style.transform = `translate(${moveX}px, ${moveY}px)`;
}

noBtn.addEventListener("mouseover", moveNoBtn);
noBtn.addEventListener("click", moveNoBtn);

// Logic to make YES btn to grow

// let yesScale = 1;

// yesBtn.style.position = "relative"
// yesBtn.style.transformOrigin = "center center";
// yesBtn.style.transition = "transform 0.3s ease";

// noBtn.addEventListener("click", () => {
//     yesScale += 2;

//     if (yesBtn.style.position !== "fixed") {
//         yesBtn.style.position = "fixed";
//         yesBtn.style.top = "50%";
//         yesBtn.style.left = "50%";
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }else{
//         yesBtn.style.transform = `translate(-50%, -50%) scale(${yesScale})`;
//     }
// });

// YES is clicked

yesBtn.addEventListener("click", () => {
    title.textContent = "Yeyyyyyyyyy!";

    catImg.src = "tandemaus-pokemon.gif";

    document.querySelector(".letter-window").classList.add("final");

    buttons.style.display = "none";

    finalText.style.display = "block";
});
