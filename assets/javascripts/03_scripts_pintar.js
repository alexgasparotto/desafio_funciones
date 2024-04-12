/* EJERCICIO 2.1 CODIGO DEBE ESTAR EN 2 ARCHIVOS: OK

/* const ele = document.getElementById("ele1")
 function pintar(){
  ele.style.backgroundColor = 'yellow'
  }
  ele.addEventListener("click", pintar); */


/* EJERCICIO  2.2 * SE MODIFICA EL CODIGO CLIKEADO DE FORMA DE NO TENER QUE SELECCIONARLO NUEVAMENTE DENTRO DE LA FUNCION/

/* const ele = document.getElementById('ele1')

const pintar = (element) => element.style.backgroundColor = 'yellow'

ele.addEventListener ('click', () => pintar (ele)); */

/* EJERCICIO 3  SE PASARA UN COLOR COMO ARGUMENTO A LA FUNCION PINTAR, EL COLOR DEBE SER VERDE Y AL HACERLE CLICK PASAR A AMARILLO.*/

const ele = document.getElementById('ele1');

const pintar = (element, color = 'green') => element.style.backgroundColor = color;

ele.addEventListener ('click', () => pintar (ele, 'yellow'));