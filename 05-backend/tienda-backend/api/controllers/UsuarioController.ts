/**
 * UsuarioController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */
declare var Producto;

module.exports = {
    //req = peticion = request
    //res = respuesta = response

    saludar: async (req,res)=>{
        console.log(__dirname);
        const parametros = req.allParams();
        console.log(parametros);
        const nombre = parametros.nombre;
        if(nombre){
        //console.log('LINEA 21');
        //PROMESA --> SYNC
        try {
            const productoEncontrado = await Producto.find({
                where:{
                    id: 1
                },
                skip:0,
                limit:5,
                sort: 'id ASC'
            });
            return res.ok({
                mensaje: `Bienvenido ${nombre}`,
                productoEncontrado: productoEncontrado 
            })
        } catch (e) {
            console.error(e);
            return res.serverError({
                error: 400,
                mensaje: 'Error del servidor'
        });
        }
        
        
          /*.then(
              (datos)=>{
                console.log('LINEA 28');
                console.log(datos);
              }
          ).catch(
              (error)=>{
                console.log('LINEA 32');
                console.log(error);
              }
          )
           console.log('LINEA 40');
          */
         

        }else{
            return res.serverError({
                    error: 400,
                    mensaje: 'Peticion invalida'
            });
        }

    
    },

    upload: (req,res)=>{
        const opcionesCarga ={
            maxBytes: 10000000,
            dirname:  + '/../../archivos',
        }
        req.file('imagen')
            .upload(
                opcionesCarga,
                (error, archivoSubidos)=>{
                    if(error){
                        return res.serverError({
                            error: 500,
                            mensaje: 'Error subiendo archivo de imagen'
                        });
                    }
                    const noExistenArchivos = archivoSubidos.length === 0;
                    if(noExistenArchivos){
                        return res.badRequest({
                            error: 400,
                            mensaje: 'No envia ningun archivo'
                        })
                    }else{
                        console.log(archivoSubidos);
                        return res.ok({
                            mensaje: 'ok'
                        })
                    }
                }
            )

    }
};

//Protocolo HTTP    

// RESTFUL Web Service

//Protocolo + ip + puerto + segementourl+ modelo
// http:/192.168.10.110/api/Usuario
// http:/192.168.10.110/Usuario
// http:/localhost:1337/Usuario

// 1)   CREAR UN DATO 
//debemos de hacer un POST
//http://localhost:1337/Usuario
//Body Params
//RESPUESTA DEL API RESFUL: Respuesta-> Nuevo Registro

// 2) BUSCAR TODOS LOS DATOS 
// GET
// http://localhost:1337/Usuario
// RESPUESTA ->Todos los Registros(Limit = 30)

// 3) BUSCAR AL USUARIO POR ID
// GET
// http://localhost:1337/Usuario/:id
// http://localhost:1337/Usuario/:12

//  RESPUESTA -> EL USUARIO

// 4) ACTUALIZAR AL USUARIO POR ID
// FETCH/PUT
// http://localhost:1337/Usuario/:id
// http://localhost:1337/Usuario/:12
// Body Params -> Debemos de mandar 
//  RESPUESTA -> ACTUALIZADO

// 5) BORRAR AL USUARIO POR ID
//  DELETE
// http://localhost:1337/Usuario/:id
// http://localhost:1337/Usuario/:12
//  RESPUESTA -> BORRADO