const makeDirectories = require('./makeDirs');
const fs = require('fs');
const generateServer = require('./make/server');
const makeMain = require('./make/mainHB');
const {makePage1, makePage2, makePage3, makeHomepage, dotEnv, makeLogin} = require('./make/pagesHB');
const {makeAuth, makeHelpers} = require('./make/utils');
const { makeUserJSON, makeMsgJSON, makeSeed } = require('./make/seeds');
const { makeStyle, makeJS, loginJS, logoutJS } = require('./make/public');
const { modelIndex, modelMessage, modelUser } = require('./make/models');
const schema = require('./make/db');
const { controllerIndex, homeRoutes, userRoutes, messageRoutes, apiIndex } = require('./make/controllers');
const connection = require('./make/connection');
const package = require('./make/package');

makeDirectories();
fs.writeFileSync('../created/.env', dotEnv());
fs.writeFileSync('../created/server.js', generateServer());
fs.writeFileSync('../created/views/layouts/main.handlebars', makeMain());
fs.writeFileSync('../created/views/page1.handlebars', makePage1());
fs.writeFileSync('../created/views/page2.handlebars', makePage2());
fs.writeFileSync('../created/views/page3.handlebars', makePage3());
fs.writeFileSync('../created/views/homepage.handlebars', makeHomepage());
fs.writeFileSync('../created/views/login.handlebars', makeLogin());
fs.writeFileSync('../created/utils/auth.js', makeAuth());
fs.writeFileSync('../created/utils/helpers.js', makeHelpers());
fs.writeFileSync('../created/seeds/userData.json', makeUserJSON());
fs.writeFileSync('../created/seeds/messagesData.json', makeMsgJSON());
fs.writeFileSync('../created/seeds/seed.js', makeSeed());
fs.writeFileSync('../created/public/css/styles.css', makeStyle());
fs.writeFileSync('../created/public/js/script.js', makeJS());
fs.writeFileSync('../created/public/js/login.js', loginJS());
fs.writeFileSync('../created/public/js/logout.js', logoutJS());
fs.writeFileSync('../created/public/img/placeholder.txt', "Add your images in this directory");
fs.writeFileSync('../created/models/index.js', modelIndex());
fs.writeFileSync('../created/models/Message.js', modelMessage());
fs.writeFileSync('../created/models/User.js', modelUser());
fs.writeFileSync('../created/db/schema.sql', schema());
fs.writeFileSync('../created/controllers/index.js', controllerIndex());
fs.writeFileSync('../created/controllers/homeRoutes.js', homeRoutes());
fs.writeFileSync('../created/controllers/api/userRoutes.js', userRoutes());
fs.writeFileSync('../created/controllers/api/messageRoutes.js', messageRoutes());
fs.writeFileSync('../created/controllers/api/index.js', apiIndex());
fs.writeFileSync('../created/config/connection.js', connection());
fs.writeFileSync('../created/package.json', package());