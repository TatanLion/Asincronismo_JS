const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; //Metodo que instalamos para poder hcaer consultas XMLHttp
const API = 'https://api.escuelajs.co/api/v1'; //Link de la API que vamos a consumir

function fetchData(urlApi, callback){
    let xhttp = new XMLHttpRequest(); //Instanciamos para poder usar los metodos que nos brinda XMLHttpRequest();

    xhttp.open('GET', urlApi, true); //Abrimos la petición - (Metodo, LinkAPI, Activamos)
    xhttp.onreadystatechange = function (event){ //Verificamos los estados de la peitición
        if(xhttp.readyState === 4){ // El estado 4 nos indica que ya se consulto (Los estados van desde 0 a 4)
            if(xhttp.status === 200){ // La peitición resolvio en el server 200 la cual indica que fue satisfactoria
                callback(null, JSON.parse(xhttp.responseText)); //Llamamos el callback en el cual se convierten los datos a JSON para poder manipularlos
            }
            else{
                const error = new Error('Error'+ urlApi); // Instanciamos el error para poder manejarlo
                return callback(error, null); //Retornamos en el callback el error
            }
        }
    }
    xhttp.send(); //Enviamos la petición junto con la lógica anterior.
}

fetchData(`${API}/products`, function(error1, data1){
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, function(error2, data2){
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, function(error3, data3){
            if(error3) return console.error(error3);
            console.log(data1[0]);
            console.log(data2.title);
            console.log(data3.name);
        });
    });
});

