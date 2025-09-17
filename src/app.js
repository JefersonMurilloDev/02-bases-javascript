//const { getUUID, getAge } = require('./plugins');
//const { emailTemplate } = require('./js-foundation/01-template'); 
//require('./js-foundation/02-destructuring');
// console.log(emailTemplate);
//const { getUsersById } = require('./js-foundation/04-arrow');
//const id = 2;
// getUsersById(id, (error, user) => { 
//     if ( error ) throw new Error(error);
//     console.log({ user });
// });
// const { buildMakePerson } = require('./js-foundation/05-factory');
// const getPokemonById = require('./js-foundation/06-promises');
// getPokemonById(1000)
//     .then( ( pokemon ) => console.log({ pokemon  }) )
//     .catch( ( err ) => console.log(err) )
//     .finally( () => console.log('Fin de getPokemonById') );
const { buildLogger } = require('./plugins');

const logger = buildLogger('app.js');

logger.log('Hola Mundo');
logger.error('Esto es algo malo');


