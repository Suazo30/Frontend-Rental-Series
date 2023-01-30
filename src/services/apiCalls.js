import axios from 'axios';

const root = 'http://localhost:5505/'

export const postLogin = async (credenciales) => {

     return await axios.post(`${root}users/login`, credenciales);

    //Devuelvo un token hardcodeado
    // return 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c3VhcmlvIjpbeyJfaWQiOiI2M2I5NWFiM2JkOWU2MDAxYjNmYzlkYmUiLCJuYW1lIjoiTWFyY29zIiwic3VybmFtZSI6IkzDs3BleiIsImRuaSI6IjIzMjc4NjU2TiIsImVtYWlsIjoibWFyY29zbUBnbWFpbC5jb20iLCJwYXNzd29yZCI6IiQyYiQxMCRTUnZTYWxRVXBmR3hMT2dhVnNZVlcud095cmk0YkZTZDJRcUVaTzFWN0w0T200cjBjSDcyMiIsInBob25lIjo2OTY3NzY0MjEsIm5hdGlvbmFsaXR5IjoiRXNwYcOxYSIsIl9fdiI6MH1dLCJpYXQiOjE2NzM4NTk1MjgsImV4cCI6MTY3Mzk0NTkyOH0.dTAu9QE_93WMHoRukxUWFo2gwJbCBQb4EjUAqImYtPI';
};

export const postRegister = async (userData) => {
    return await axios.post(`${root}users/newuser`, userData);
    
}

export const getSeries = async () => {

    return await axios.get(`${root}series/getAll`);

}

// Funcion que busca 
export const getSearch = async (search) => {

    return await axios.get(`${root}series/name/${search}`);

}

//Funcion que alquila

export const postRent = async (body, token) => {


    // Esta sería la forma en la que conectaríamos con la API para realizar el pedido

    let config = {
        method: 'post', //aqui especifico el protocolo http
        url : `${root}/rentals/newRental`, //este sería mi endpoint del backend
        body, //el body que contiene los datos
        headers: { 
            'Authorization': 'Bearer ' + token
          }
    }

    return await axios.post(config);


    //Las dos líneas que hay a continuación hacen referencia a poder hacer el pedido en este caso ya que no dispongo de una API
    const resultado = {data: 'El pedido se ha realizado correctamente'}
    return resultado;
    
}

//Endpoints para Admin

export const allUsersAdmin = async (token) => {

    // Esta sería la forma en la que conectaríamos con la API para traernos todos los users en modo admin

    let config = {
        method: 'post', //aqui especifico el protocolo http
        url : `${root}/admin/allUsers`, //este sería mi endpoint del backend de admin que trae todos los users
        body, //el body que contiene los datos
        headers: { 
            'Authorization': 'Bearer ' + token
          }
    }

    return await axios.post(config);
}