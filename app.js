// Escribe tu código aquí.
/*Elementos de html */
const uList = document.getElementById('uList');
const inputTest = document.getElementById('inputTest');


/*Funcion con 2 parametros: string, array */

const myFunction = ( str = "", arr = []) => arr.filter( e => e.length > str.length)

 console.log(myFunction(inputTest.value, ["UNO", "Estandares", "TRES", "BUENOS"]))
/*fUNCIÓN CON UN PARARAMETRO: ARRAY DE STRINGS */
const mySecondFunction = ( arr =[] ) => {
    arr.map( e => {
        const listElement = document.createElement('li');
    listElement.innerText = e;
    uList.appendChild(listElement);
    })
    

}
mySecondFunction(['insecto', 'bootcamp', 'escritorio']);