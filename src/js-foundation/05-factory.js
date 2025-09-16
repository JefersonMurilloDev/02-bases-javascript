// llamamos a el pratron adactador y lo implementamos
//const { getAge, getUUID } = require('../plugins');

// fabrica la función makePerson usando las dependencias provistas
const buildMakePerson = ({ getUUID, getAge }) => ({ name, birthdate }) => ({
    id: getUUID(),
    name: name,
    birthdate: birthdate,
    age: getAge(birthdate),
});

module.exports = {
    buildMakePerson,
}
