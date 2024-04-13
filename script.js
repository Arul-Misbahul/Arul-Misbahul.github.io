const navbarNav = document.querySelector(".logo");

document.querySelector("#hamburger-menu").onclick = () => {
  navbarNav.classList.toggle("active");
};

const hamburger = document.querySelector("#hamburger-menu");

document.addEventListener("click", function (e) {
  if (!hamburger.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});

$(document).ready(function () {
  $("#formvalidasi").validate({
    rules: {
      nama: {
        required: true,
      },
      email: {
        required: true,
        email: true,
      },
      number: {
        required: true,
      },
      message: {
        required: true,
      },
    },
    messages: {
      nama: {
        required: "Nama harus diisi",
      },
      email: {
        required: "Email harus diisi",
        email: "Masukkan alamat email yang valid",
      },
      number: {
        required: "Nomor hp harus diisi",
      },
      message: {
        required: "Pesan harus diisi",
      },
    },
    submitHandler: function (form) {
      alert("Formulir telah dikirim!");
    },
  });
});
