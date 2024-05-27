const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('Videogames', {
    id: {
      type: DataTypes.BIGINT,
      primaryKey: true,
      notNull: false
    },
    nombre:{
      type: DataTypes.STRING,
    },
    descripcion:{
      type: DataTypes.STRING,
    },
    imagen:{
      type: DataTypes.STRING,
    },
    lanzamiento:{
      type: DataTypes.STRING,
    },
    rating:{
      type: DataTypes.FLOAT,
    },
  }, { timestamps: false });
};
