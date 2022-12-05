const registra = document.getElementById("valida");

registra.addEventListener("submit", (e) => {
  e.preventDefault();
  const nombre = e.target.nombre.value;
  const mail = e.target.mail.value;
  const pass = e.target.pass.value;
  const pass2 = e.target.pass2.value;

  if (nombre == "" || mail == "" || pass == "" || pass2 == "") {
    return alert("Todos los campos son obligatorios");
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(mail)) {
    return alert("El Email no es correcto.");
  }
  if (pass.length < 8 || pass2.length < 8) {
    return alert("La contraseña debe tener más de 8 caracteres.");
  }
  if (pass !== pass2) {
    return alert("Tu password debe coincidir con la segunda contraseña");
  }
  const newUser = {
    name: nombre,
    email: mail,
    password: pass,
  };
  fetch("http://localhost:8000/api/user/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newUser),
  })
    .then((res) => res.json())
    .then((res) => {
      alert(res);
    })
    .catch((res) => alert(res));
});

const login = document.getElementById("login");
login.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = e.target.emaillogin.value;
  const contrasena = e.target.passlogin.value;
  if (email == "" || contrasena == "") {
    alert("Ninguno de los campos puede estar vacío");
  }
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(email)) {
    return alert("El Email no es correcto.");
  }
  if (contrasena.length < 8) {
    return alert("La contraseña debe tener más de 8 caracteres.");
  }
  const login = {
    email: email,
    password: contrasena,
  };
  fetch("http://localhost:8000/api/user/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(login),
  }).then((res) => res.json());
});
