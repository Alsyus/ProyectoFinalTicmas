
let generarUsuario = async () => {
  //consultar a la API
  try {
    const url = "https://randomuser.me/api/?seed=abc";
    const respuesta = await fetch(url);
    const { results } = await respuesta.json();
    const datos = results[0];
    console.log(datos);
    //fin consulta a la API

    // carga de datos de la api al html
    let nombre = document.getElementById("nombre");
    let gen = document.getElementById("gen");
    let dir = document.getElementById("dir");
    let email = document.getElementById("email");
    let foto = document.getElementById("foto");
    let tel = document.getElementById("tel");
    let cel = document.getElementById("cell");

    nombre.textContent = datos.name.first + " " + datos.name.last;
    dir.textContent = "Location: " + datos.location.street.name +" "+datos.location.street.number + ", " + datos.location.city +" "+ datos.location.country;
    cel.textContent = "Phone: " + datos.cell;
    email.textContent ="Email: " + datos.email;
    foto.src = datos.picture.large;
  } catch (error) {
    console.log(error);

  }
};


//barra de navegacion

function menu() {
  let x = document.getElementById("git");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
