const randomPrice = Math.floor(Math.random() * 700);

const modalNumber = (document.querySelector(
  ".sell-card"
).children[2].textContent = `$${randomPrice}`);
