const mongoose = require('mongoose');

const conectarDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true
    });
    console.log('Conexión a la base de datos establecida');
  } catch (error) {
    console.error('Error al conectarse a la base de datos', error);
    process.exit(1); // Detener la aplicación en caso de error de conexión
  }
};

module.exports = conectarDB;
