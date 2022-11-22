const enviado = document.getElementById('envia');

enviado.addEventListener('click', (e) => {
    e.preventDefault()
    let nombre = document.getElementById('nombre')
    let mail = document.getElementById('mail')
    let pass = document.getElementById('pass')
    let pass2 = document.getElementById('pass2')

    if (nombre == "" || mail == "" || pass == "" || pass2 == "") {
        return alert('Todos los campos son obligatorios')
    } else if (pass.length < 8 || pass2.length < 8) {
        return alert('La contraseña debe tener más de 8 caracteres.')
    } else if (pass != pass2) {
        return alert('Tu password debe coincidir con el la segunda contraseña')

    } else {
        return alert('Datos enviados correctamente.')
    }
})