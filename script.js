// contact_modal
var modalCon = document.getElementById("myContactModal");
var btnCon = document.getElementById("myContactBtn");
var spanCon = document.getElementsByClassName("contact_close")[0];

btnCon.onclick = function () {
  modalCon.style.display = "block";
};

spanCon.onclick = function () {
  modalCon.style.display = "none";
};

// social_modal
var modalSoc = document.getElementById("mySocialModal");
var btnSoc = document.getElementById("mySocialBtn");
var spanSoc = document.getElementsByClassName("social_close")[0];

btnSoc.onclick = function () {
  modalSoc.style.display = "block";
};

spanSoc.onclick = function () {
  modalSoc.style.display = "none";
};

// impressum_modal
var modalImp = document.getElementById("myImpressumModal");
var btnImp = document.getElementById("myImpressumBtn");
var spanImp = document.getElementsByClassName("impressum_close")[0];

btnImp.onclick = function () {
  modalImp.style.display = "block";
};

spanImp.onclick = function () {
  modalImp.style.display = "none";
};

window.onclick = function (event) {
  if (event.target == modalCon) {
    modalCon.style.display = "none";
  } else if (event.target == modalSoc) {
    modalSoc.style.display = "none";
  } else if (event.target == modalImp) {
    modalImp.style.display = "none";
  }
};
