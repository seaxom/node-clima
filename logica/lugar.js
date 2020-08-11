const axios = require('axios');

const getLugarLatLong = async (direccion) => {

    const encodedURL = encodeURI(direccion);


    const instance = axios.create({
        baseURL: `https://geocode.xyz/?locate=location?city=${encodedURL}&auth=386118110473124602499x7018&json=1`
    });

    const resp = await instance.get();

    if( resp.data.length === 0){
        throw new Error(`No hay resultados para ${direccion}`);
    }

    const data = resp.data;
    const pais = data.standard.countryname;
    const latitud = data.latt;
    const longitud = data.longt;

    return {
        pais,
        latitud,
        longitud
    }


}


module.exports = {

    getLugarLatLong:getLugarLatLong

}




