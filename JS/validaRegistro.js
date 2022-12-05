const registra = document.getElementById("Valida");

registra.addEventListener("click", (e) => {
  e.preventDefault();
  const nombre = document.getElementById("nombre").value;
  const mail = document.getElementById("mail").value;
  const pass = document.getElementById("pass").value;
  const pass2 = document.getElementById("pass2").value;

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
      console.log(res);
    })
    .catch((res) => console.log(res));
});

const login = document.getElementById("login");
login.addEventListener("click", (e) => {
  e.preventDefault();
  const email = document.getElementById("emaillogin").value;
  const contraseña = document.getElementById("passlogin").value;
  if (email == "" || contraseña == "") {
    alert("Ninguno de los campos puede estar vacío");
  }
});
