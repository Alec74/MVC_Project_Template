const fs = require('fs');

const connection = () => 
`const Sequelize = require('sequelize');
require('dotenv').config();

let sequelize;

if (process.env.JAWSDB_URL) {
  sequelize = new Sequelize(process.env.JAWSDB_URL,
    {
      charset: "utf8",
      collate: "utf8_unicode_ci"
    }
  );
} else {
  sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
      host: 'localhost',
      dialect: 'mysql',
      port: 3306,
      charset: "utf8",
      collate: "utf8_unicode_ci",
    }
  );
}

module.exports = sequelize;
`;

module.exports = connection;