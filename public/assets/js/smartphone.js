let $deviceForm = document.querySelector("#device-form");
let $submitBtn = document.querySelector("#form-submit");

function deviceFire(event) {
  event.preventDefault();
  let brand = window.location.toString().split("/")[
    window.location.toString().split("/").length - 2
  ];
  let modelName = window.location
    .toString()
    .split("/")
    [window.location.toString().split("/").length - 1].replace(".html", "");

  let imei = $deviceForm.querySelector("#imei").value;
  let carrier = $deviceForm.querySelector("#carrier").value;
  let storage = $deviceForm.querySelector("#storage").value;
  let condition = $deviceForm.querySelector("#condition").value;
  let additionalComment = $deviceForm.querySelector(
    'textarea[name="comment-body"]'
  ).value;

  let deviceInputs = {
  brand: brand,
  modelName: modelName,
  imei: imei,
  carrier: carrier,
  storage: storage,
  condition: condition,
  additionalComment: additionalComment
  }

  localStorage.setItem("device", JSON.stringify(deviceInputs));
  
}

$submitBtn.addEventListener("click", deviceFire);

document.writeln("<script type='text/javascript' src='./checkout.js'></script>");


