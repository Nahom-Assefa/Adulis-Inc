const $userForm = document.querySelector("#inquiry");

function userSubmit(event) {
  event.preventDefault();

  const firstName = $userForm.querySelector("#fname").value;
  const lastName = $userForm.querySelector("#lname").value;
  const email = $userForm.querySelector("#email").value;
  const phoneNumber = $userForm.querySelector("#phone").value;

  console.log('what the fuck');

  if (!firstName || !lastName || !email || !phoneNumber) {
    alert('You must provide input for all parts of the form!')
    return;
  }

  const formData = { firstName, lastName, email, phoneNumber};

  fetch("/api/users", {
    method: 'Post',
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((postResponse) => {
      alert("User created successfully!");
      console.log(postResponse);
    })
    .catch((err) => {
      console.log(err);
    });
}

$userForm.addEventListener("submit", userSubmit);


//================================================================================================

function deviceSubmit(event) {
    event.preventDefault();
  
    const brand = $userForm.querySelector("#brand").value;
    const model = $userForm.querySelector("#model").value;
    const imei = $userForm.querySelector("#imei").value;
    const carrier = $userForm.querySelector("#carrier").value;
    const storage = $userForm.querySelector("#storage").value;
    const condition = $userForm.querySelector("#condition").value;
  
    if (!brand || !model || !imei || !carrier || !storage || !condition) {
      alert('You must provide input for all parts of the form!')
      return;
    }
  
    const formData = { brand, model, imei, carrier, storage, condition };
  
    fetch("/api/devices/userId", {
      method: 'Post',
      headers: {
        "Accept": "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((postResponse) => {
        alert("Device created successfully!");
        console.log(postResponse);
      })
      .catch((err) => {
        console.log(err);
      });
  }

$userForm.addEventListener("submit", deviceSubmit);