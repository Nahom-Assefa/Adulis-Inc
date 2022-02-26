const randomPrice = Math.floor(Math.random() * 400) + 120;

const modalNumber = (document.querySelector(
  ".sell-card"
).children[2].textContent = `$${randomPrice}`);