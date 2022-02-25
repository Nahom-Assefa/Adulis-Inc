const randomPrice = Math.floor(Math.random() * 600) + 100;

const modalNumber = (document.querySelector(
  ".sell-card"
).children[2].textContent = `$${randomPrice}`);
