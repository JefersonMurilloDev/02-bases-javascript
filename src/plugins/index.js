const { getAge } = require('../plugins/get-age.plugin');
const { getUUID } = require('../plugins/get-uuid.plugin');
const { http } = require('../plugins/http-client.plugin');


module.exports = {
    getAge,
    getUUID,
    http  
};