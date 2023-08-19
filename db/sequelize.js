const { Sequelize } = require('sequelize');

// Define los parámetros de conexión a la base de datos
const sequelize = new Sequelize({
  dialect: 'postgres',
  host: 'localhost',        // Cambia esto según la configuración de tu base de datos
  port: 5432,               // Cambia esto según la configuración de tu base de datos
  username: 'root',    // Cambia esto según tu nombre de usuario
  password: '2342',// Cambia esto según tu contraseña
  database: 'root',// Cambia esto según el nombre de tu base de datos
  logging: false            // Desactiva los logs de Sequelize (opcional)
});

// Prueba la conexión a la base de datos
(async () => {
  try {
    await sequelize.authenticate();
    console.log('Connection to the database has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }
})();

module.exports = sequelize;