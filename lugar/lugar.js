const axios = require("axios");

const getLugarLatLng = async (dir) => {
  const encodedUrl = encodeURI(dir);

  const instance = axios.create({
    baseURL: `https://geocode.xyz/${encodedUrl}?json=1`,
  });

  const respuesta = await instance.get();

  if (
    respuesta.data.hasOwnProperty("matches") &&
    respuesta.data.matches == null
  ) {
    throw new Error(`No hay resultados para ${dir}`);
  }
  const direccion = respuesta.data.standard.city;
  const lat = respuesta.data.latt;
  const lng = respuesta.data.longt;

  return {
    direccion,
    lat,
    lng,
  };
};

module.exports = {
  getLugarLatLng,
};
