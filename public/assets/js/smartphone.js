const $deviceForm = document.querySelector("#device-form");

function userSubmit(event) {
  event.preventDefault();

  const imei = $deviceForm.querySelector("#imei").value;
  const carrier = $deviceForm.querySelector("#carrier").value;
  const storage = $deviceForm.querySelector("#storage").value;
  const condition = $deviceForm.querySelector("#condition").value;

  if (!imei || !carrier || !storage || !condition) {
    alert("You must provide input for all parts of the form!");
    return;
  }

  const formData = { imei, carrier, storage, condition };

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
      deviceSubmit(postResponse._id);
      console.log(postResponse);
    })
    .catch((err) => {
      console.log(err);
    });
}

$userForm.addEventListener("submit", userSubmit);
