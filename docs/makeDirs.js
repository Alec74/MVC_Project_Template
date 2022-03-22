const fs = require('fs');

const makeDirectories = () => {
    let dir = '../created/';
    if(!fs.existsSync(`../created`)){
        fs.mkdirSync(`../created`);
    }

    if (!fs.existsSync(`${dir}/views`)) {
        fs.mkdirSync(`${dir}views/layouts`, { recursive: true });
        fs.mkdirSync(`${dir}utils`);
        fs.mkdirSync(`${dir}seeds`);
        fs.mkdirSync(`${dir}public/css`, { recursive: true });
        fs.mkdirSync(`${dir}public/img`);
        fs.mkdirSync(`${dir}public/js`);
        fs.mkdirSync(`${dir}models`);
        fs.mkdirSync(`${dir}db`);
        fs.mkdirSync(`${dir}controllers`);
        fs.mkdirSync(`${dir}controllers/api`);
        fs.mkdirSync(`${dir}config`);
    }
}

module.exports = makeDirectories;