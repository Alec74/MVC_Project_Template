const fs = require('fs');


const makeUserJSON = () => 
`[
  {
    "name": "test",
    "email": "test@test.com",
    "password": "check123"
  }
]
`;

const makeMsgJSON = () => 
`[
  {
    "id": 1,
    "author": "test",
    "content": "Hello World!"
  }
]
`;

const makeSeed = () =>
`const sequelize = require('../config/connection');
const { User, Message } = require('../models');
require('dotenv').config();
const userData = require('./userData.json');
const msgData = require('./messagesData.json');

const seedDatabase = async () => {
  await sequelize.sync({ force: true });
  // User.truncate();


  const users = await User.bulkCreate(userData, 
    {
    individualHooks: true,
    returning: true,
  });


  const messages = await Message.bulkCreate(msgData, {});


  process.exit(0);
};



seedDatabase();

`;

module.exports = { makeUserJSON, makeMsgJSON, makeSeed };