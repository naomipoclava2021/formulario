const contenedor = document.querySelector (".flex-container");
let contador = 0;
function crearLlave(nombre,modelo,precio) {
    contador++;
    img = "<img src='llave.png'>";
    nombre =`<h2>${nombre}</h2>`;
    modelo =`<h3>${modelo}</h3>`;
    precio =`<p>Precio: <b>$${precio}</b></p>`;
    return [img,nombre,modelo,precio];   
}


for (let  = 0;  < 20 ; i++) {
    let modeloRandom = Math.random()*10000;
    let precioRandom = Math.random()*10+30;
    let llave = crearLlave(`llave ${i}`, `modelo ${modeloRandom}`,precioRandom);
    let div = document.createElement("DIV");
    div.classList.add(`iten-${i}`,'flex-item');
    div.innerHTML = llave;
    contenedor.innerHTML += llave;
}


