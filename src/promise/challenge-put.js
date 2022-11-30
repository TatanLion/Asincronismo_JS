import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//Con PUT para actualizar un objeto
function putData(urlApi, dataUpdate) {
    const response = fetch(urlApi, {
        method: 'PUT',
        mode: 'cors',
        credentials: 'same-origin',
        headers:{
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(dataUpdate)
    });
    return response;
}

const dataUpdate = {
    "title": "Se puede cambiar tambien otras caracteristicas",
    "price": 10 // no es necesario colocar todas las características del objeto, solo las que se cambiarán
}

putData(`${API}/products/212`, dataUpdate) //se debe colocar el id del objeto que se quiere modificar
    .then(response => response.json())
    .then(dataUpdate => console.log(dataUpdate));