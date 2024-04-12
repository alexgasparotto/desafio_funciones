/* Ejercicio 1 */

let box = document.querySelector('#key');
let box1 = document.querySelector('#key2')

document.addEventListener('keydown', function (event){
  if (event.key === 'a'){
    box.style.backgroundColor = 'pink';
  } else if (event.key === 's'){
    box.style.backgroundColor = 'orange';
  } else if (event.key === 'd'){
    box.style.backgroundColor = 'aquamarine';
  }
})



/* Ejercicio 2 */

let divCredoQ = false;
let divCredoW = false;
let divCredoE = false;


document.addEventListener ('keydown', function(event){
  if (event.key === 'q'){
    boxQ()
  } else if (event.key === 'w'){
    boxW();
  } else if (event.key === 'e'){
    boxE();
  }
})

const boxQ = () => {
  if (!divCredoQ){ /* si es FALSE SE EJECUTA ESTA LINEA DE CODIGO PARA EVITAR CREAR MAS DIVS */
  let nuevoDiv = document.createElement('div');
  nuevoDiv.style.width = '200px';
  nuevoDiv.style.height = '200px';
  nuevoDiv.style.backgroundColor = 'purple';
  document.body.appendChild(nuevoDiv);
  divCredoQ = true; /* esta condicion evita que vuelva a crearse otro div porque indica que es true se rompe el ciclo si se presiona la letra Q */
  }
}

const boxW = () => {
  if (!divCredoW){
  let nuevoDiv = document.createElement('div');
  nuevoDiv.style.width = '200px';
  nuevoDiv.style.height = '200px';
  nuevoDiv.style.backgroundColor = 'grey';
  document.body.appendChild(nuevoDiv);
  divCredoW = true;
  }
}

const boxE = () => {
  if (!divCredoE){
  let nuevoDiv = document.createElement('div');
  nuevoDiv.style.width = '200px';
  nuevoDiv.style.height = '200px';
  nuevoDiv.style.backgroundColor = 'brown';
  document.body.appendChild(nuevoDiv);
  divCredoE = true;
  }
}