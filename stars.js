
const container = document.getElementById("star-container");

function createShootingStar() {
  const star = document.createElement("div");
  star.classList.add("shooting-star");

  star.style.top = `${Math.random() * window.innerHeight}px`;
  star.style.left = `${Math.random() * window.innerWidth}px`;
  star.style.height = `${Math.random() * 2 + 1}px`;

  container.appendChild(star);

  setTimeout(() => {
    star.remove();
  }, 1000);
}

setInterval(createShootingStar, 2000);
