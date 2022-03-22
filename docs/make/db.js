const fs = require('fs');

const schema = () => 
`DROP DATABASE IF EXISTS --Your db goes here;

CREATE DATABASE --and here;
`;

module.exports = schema;