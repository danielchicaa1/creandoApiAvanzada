export class ControladorHabitacion{
    constructor(){}

    buscarTodas(request,response){
        try{
            //1. hay que recibir datos
            //2. intentare conectarme a la BD
            //3. envio la respuesta
            response.status(200).json({
                "estado": true,
                "mensaje": "exito buscando las habitaciones",
                "datos": "aca van los datos consultados en la base de datos"
            })
        }catch(error){
            response.status(400).json({
                "estado": false,
                "mensaje":"fallamos buscando las habitaciones"+error,
                "datos": null
            })
        }
    }
    buscarPorId(request,response){
        try {
            //1. hay que recibir datos(si)
            let id=request.params.id
            //2. con el id que mando el cliente busco la habitacion en BD
            //3. respondo al cliente
             response.status(200).json({
               estado: true,
               mensaje: "exito buscando las habitaciones",
               datos: "aca van los datos consultados en la base de datos",
             });
        }catch(error){
             response.status(400).json({
               estado: false,
               mensaje: "fallamos buscando las habitaciones"+ error,
               datos: null,
             });
        }
    }
    modificar(request,response){
        try {
            //1. hay que recibir datos(SI)
            let id=request.params.id
            let datosModificar=request.body;
            //2. modificar en la base de datos
            //3. enviar respuesta 
            response.status(200).json({
              estado: true,
              mensaje: "exito buscando las habitaciones",
              datos: null
            });
        } catch (error) {
            response.status(400).json({
              estado: false,
              mensaje: "fallamos buscando las habitaciones"+ error,
              datos: null,
            });
        }
    }
    registrar(request,response){
        try {
          //1. hay que recibir datos(SI)
          let datosRegistrar = request.body;
          //2. guardelos en BD
          //3. responda
          response.status(200).json({
            estado: true,
            mensaje: "exito buscando las habitaciones",
            datos: null,
          });
        } catch (error) {
            response.status(400).json({
              estado: false,
              mensaje: "fallamos buscando las habitaciones"+error,
              datos: null,
            });
        }
       
    }
    eliminar(request,response){
        try {
            //1.hay que recibir datos (si)
            let id=request.params.id
            //2.eliminelo en la base de datos
            //3. responda
             response.status(200).json({
               estado: true,
               mensaje: "exito buscando las habitaciones",
               datos: null,
             });

        } catch (error) {
            response.status(400).json({
              estado: false,
              mensaje: "fallamos buscando las habitaciones" + error,
              datos: null,
            });
        }
    }
}