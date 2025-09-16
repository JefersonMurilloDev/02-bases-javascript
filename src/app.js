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
const getPokemonById = require('./js-foundation/06-promises');


getPokemonById(1000)
    .then( ( pokemon ) => console.log({ pokemon  }) )
    .catch( ( err ) => console.log(err) )
    .finally( () => console.log('Fin de getPokemonById') );

//! Referencias a la funtion factory and case use;
// instancia concreta con los plugins que ya tenemos
// const makePerson = buildMakePerson({ getUUID, getAge });

// const obj = { name: 'John', birthdate: '2000-02-21' };

// const john = makePerson(obj);

// console.log({ john });  
