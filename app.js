const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');
const argv = require('yargs').options({
        direccion: {
            alias: 'd',
            desc: 'Dirección de la ciudad para obtener el clima.',
            demand: true
        }
    })
    .help()
    .argv;

const getInfo = async(direccion) => {
    try {
        const coords = await lugar.getLugarLatLng(argv.direccion);
        const temp = await clima.getClima(coords.lat, coords.lng);
        return `El clima de ${ coords.direccion } es de ${ temp }.`;
    } catch (err) {
        return `No se pudo determinar el clima de ${ direccion }.`;
    }
}

getInfo(argv.direccion)
    .then(console.log)
    .catch(console.log)