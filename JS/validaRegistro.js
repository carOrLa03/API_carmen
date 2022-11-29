const registra = document.getElementById("envia");

registra.addEventListener("click", (e) => {
  e.preventDefault();
  let nombre = document.getElementById("nombre").value;
  let mail = document.getElementById("mail").value;
  let pass = document.getElementById("pass").value;
  let pass2 = document.getElementById("pass2").value;
  if (nombre == "" || mail == "" || pass == "" || pass2 == "") {
    return alert("Todos los campos son obligatorios");
  } else if (pass.length < 8 || pass2.length < 8) {
    return alert("La contraseña debe tener más de 8 caracteres.");
  } else if (pass != pass2) {
    return alert("Tu password debe coincidir con la segunda contraseña");
  } else {
    return alert("Datos enviados correctamente.");
    fetch("http://localhost:8000/api/user/", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: nombre, mail: mail, password: pass }),
    })
      .then((res) => res.json())
      .then((res) => {
        console.log(res);
      });
  }
});

const login = document.getElementById('login');
login.addEventListener('click', (e) => {
  e.preventDefault();
  let email = document.getElementById('mal').value;
  let contraseña = document.getElementById('pass').value;
  if (email == "" || contraseña == "") {
    alert("Ninguno de los campos puede estar vacío");
  }
});
