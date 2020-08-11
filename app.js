
const lugar = require('./logica/lugar');
const clima = require('./logica/clima');


const argv = require('yargs').options({
    direccion: {
        alias: 'd',
        desc: ' Direccion de la ciudad para obtener el clima',
        demand: true
    }
}).argv;


const getInfo = async (direccion) => {

    try{
        const coordenadas = await lugar.getLugarLatLong(direccion);
        const temperatura = await clima.getClima(coordenadas.latitud, coordenadas.longitud);

        return `El clima de ${direccion}, ${coordenadas.pais}, es de ${temperatura} ºC`;

    }catch{

        return `El clima de ${direccion} no se pudo determinar`;


    }
    

   

}

getInfo(argv.direccion).then(console.log)
