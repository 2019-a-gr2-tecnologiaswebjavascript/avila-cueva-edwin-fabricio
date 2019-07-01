/**
 * Usuario.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {
    nombre: {
      type: 'string',
      required: true,
      minLength: 3,
      maxLength: 60
     },
    apellido: {
      type: 'string',
      required: true
    },
    cedula: {
      type: 'string',
      required: true,
      //propiedad para no crear dos cedulas
      unique: true,
      minLength: 10,
      maxLength:25
    },
    username: {
      type: 'string',
      required: true,
      unique: true,
      minLength: 3,
      maxLength: 60,
    },
    sueldo:{
      type: 'number',
      min: 100,
      max: 5000.00,
      defaultsTo: 100
    },
    estaCasado:{
      type: 'boolean',
      defaultsTo: false
    },
    tipoUsuario:{
      type:'string',
      enum: ['normal','pendiente','premium'],
      defaultsTo: 'normal'
    },
    correo:{
      type:'string',
      isEmail: true
    },
    //////////CONFIGURACION PAPÁ//////////////
    arregloProductosUsuario:{//nombre de los hijos 
      collection:'productoUsuario',// modelo a relacionarse (HIJO)
      via: 'fkUsuario'//nombre del atributo FK(HIJO)
    }
  },
  
  

};

//Usuario -> Producto Usuario
//Producto < ProductoUsuario> Usuario

//Usuario-> ProductoUsuario

//Producto ->ProductoUsuario
