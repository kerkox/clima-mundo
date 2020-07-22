const axios = require("axios");
const lugar = require("./lugar/lugar");
const clima = require("./clima/clima");
const { argv } = require("yargs").options({
  direccion: {
    alias: "d",
    desc: "Direccion de la ciudad para obtener el clima",
    demand: true,
  },
});

// console.log(argv.direccion);

const getInfo = async (direccion) => {
  try {
    const info_lugar = await lugar.getLugarLatLng(argv.direccion);
    const clima_lugar = await clima.getClima(info_lugar.lat, info_lugar.lng);
    return `El clima de ${direccion} es de ${clima_lugar}`;
  } catch (err) {
    return `No se pudo determinar el clima de ${direccion}`;
  }
};
getInfo(argv.direccion)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => console.log(err));
