const $userForm = document.querySelector("#inquiry");

// User capture from select.html page
function userSubmit(event) {
  event.preventDefault();

  const firstName = $userForm.querySelector("#fname").value;
  const lastName = $userForm.querySelector("#lname").value;
  const email = $userForm.querySelector("#email").value;
  const phoneNumber = $userForm.querySelector("#phone").value;

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
      deviceSubmit(postResponse._id);
      console.log(postResponse);
    })
    .catch((err) => {
      console.log(err);
    });
}

$userForm.addEventListener("submit", userSubmit);


//================================================================================================

// device capture from select.html page
function deviceSubmit(userId) {
    const brand = $userForm.querySelector("#brand").value;
    const modelName = $userForm.querySelector("#model").value;
    const imei = $userForm.querySelector("#imei").value;
    const carrier = $userForm.querySelector("#carrier").value;
    const storage = $userForm.querySelector("#storage").value;
    const condition = $userForm.querySelector("#condition").value;
  
    if (!brand || !modelName || !imei || !carrier || !storage || !condition) {
      alert('You must provide input for all parts of the form!')
      return;
    }
  
    const formData = { brand, modelName, imei, carrier, storage, condition };
  
    fetch(`/api/devices/${userId}`, {
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
