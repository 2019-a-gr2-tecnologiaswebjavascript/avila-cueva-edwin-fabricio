/**
 * ProductoUsuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    cantidad:{
      type: 'number',
      min: 1
    },
    
    //Configuracion del hijo 
    fkUsuario:{//nombre del campo FK
      model:'usuario', //modelo a relacionarse (Papá)
      required: true //OPCIONAL 
    },
    //Configuracion del hijo 
    fkProducto:{//nombre del campo FK
      model:'producto', //modelo a relacionarse (Papá)
      required: true //OPCIONAL 
    }

  },

};

