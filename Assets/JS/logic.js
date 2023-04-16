const buscarDigimon = () => {
    let nombreBuscado = document.getElementById('unDigimon').value;
    let urlApi = 'https://digimon-api.vercel.app/api/digimon/name/'+ nombreBuscado;

    fetch(urlApi)
    .then(response => response.json() )
    .then(data => {

        let nombreDigimon = data[0].name;
        let imagenDigimon = data[0].img;
        let nivelDigimon = data[0].level;

        setTimeout(()=>{
            let h3Nombre = document.getElementById('nombre');
            h3Nombre.innerHTML = nombreDigimon;

            let etiquetaImagen = document.getElementById('imagen');
            etiquetaImagen.src = imagenDigimon;

            let parrafoNivel = document.getElementById('nivel');
            parrafoNivel.innerHTML = `<strong>Nivel: </strong>` + nivelDigimon;

        }, '1000');
    })
    .catch(error => console.log('No se pudieron obtener los datos.', error));
};

function mensaje() {
    alert("Hola, que tengas un bonito día!!");
};

function ver() {
    imagenDigi = document.getElementById("imagen");
    card = document.getElementById("cardd");
    imagenDigi.style.display="block";
    card.style.backgroundColor="#91d1fd";
    card.style.borderColor="rgb(150, 150, 150)";
    card.style.boxShadow="5px 5px #f7ab47";
};

function cambioTexto() {
    textoInfo = document.getElementById("info");
    textoInfo.innerHTML="No hay &#128125;";
}
function vuelveTexto() {
    textoNuevo = document.getElementById("info");
    textoNuevo.innerHTML="Información";
}