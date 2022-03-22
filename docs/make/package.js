const fs = require('fs');

const package = () => 
`{
    "name": "Demo",
    "version": "1.0.0",
    "description": "",
    "main": "server.js",
    "scripts": {
      "test": "echo \"Error: no test specified\" && exit 1",
      "start": "node seeds/seed.js && node server.js",
      "seed": "node seeds/seed.js"
    },
    "repository": {
      "type": "git",
      "url": "git+https://github.com/Alec74/BanishedMC.git"
    },
    "keywords": [],
    "author": "",
    "license": "ISC",
    "bugs": {
      "url": "https://github.com/Alec74/BanishedMC/issues"
    },
    "homepage": "https://github.com/Alec74/BanishedMC#readme",
    "dependencies": {
      "bcrypt": "^5.0.1",
      "connect-session-sequelize": "^7.1.2",
      "dotenv": "^16.0.0",
      "express": "^4.17.3",
      "express-handlebars": "^6.0.3",
      "express-session": "^1.17.2",
      "mysql": "^2.18.1",
      "mysql2": "^2.3.3",
      "sequelize": "^6.17.0"
    }
  }
  
`;

module.exports = package;