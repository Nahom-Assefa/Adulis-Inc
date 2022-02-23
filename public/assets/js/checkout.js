// Store form in variable
const $userForm = document.querySelector("#registration-checkout");

// User submit function
function userSubmit(event) {
  event.preventDefault();

  const firstName = $userForm.querySelector("#fname").value;
  const lastName = $userForm.querySelector("#lname").value;
  const email = $userForm.querySelector("#email").value;
  const phoneNumber = $userForm.querySelector("#phone").value;
  const city = $userForm.querySelector("#city").value;
  const payPref = $userForm.querySelector("#payment").value;

  if (!firstName || !lastName || !email || !phoneNumber) {
    alert("You must provide input for all parts of the form!");
    return;
  }

  const formData = { firstName, lastName, email, phoneNumber, city, payPref };

  fetch("/api/users", {
    method: "Post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(formData),
  })
    .then((response) => response.json())
    .then((postResponse) => {
      alert("User created successfully!");
      let deviceData = JSON.parse(localStorage.getItem("device"));
      deviceSubmit(deviceData, postResponse._id);
    })
    .catch((err) => {
      console.log(err);
    });
}

console.log("line 96", $userForm);
$userForm.addEventListener("submit", userSubmit);

//=========================================================================================

// Device submit
function deviceSubmit(deviceData, userId) {
  if (deviceData.additionalComment === "") {
    deviceData.additionalComment =
      "No additional comments were provided by User";
  }

  fetch(`/api/devices/${userId}`, {
    method: "Post",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify(deviceData),
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
