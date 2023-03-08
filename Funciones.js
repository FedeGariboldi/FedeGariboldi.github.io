function validar() {
    var nombre = document.getElementById("name").value;
    var email = document.getElementById("email").value;
    var mensaje = document.getElementById("message").value;
  
    if (nombre === "" || email === "" || mensaje === "") {
      alert("Por favor, completa todos los campos del formulario antes de enviarlo.");
      return false;
    } else {
      return true;
    }
  }
  