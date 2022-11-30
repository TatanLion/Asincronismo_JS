import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//Eliminar un objeto indicando el id con DELETE
function deleteData(urlApi) { //no es necesario pasar la data
    const response = fetch(urlApi, {
        method: 'DELETE',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        } //no es necesario especificar el body
    });
    return response;
}

const idNumber = 271; //se debe colocar el id del objeto qu se quiere modificar

deleteData(`${API}/products/${idNumber}`) //no es necesario pasar data
    .then(() => {
        console.log(`Borrado ${idNumber}`); //es opcional imprimir en consola
    });