class API {

    async obtenerDatos(){

        const total = 11000;

        // obtener datos desde la api
        const datos = await fetch(`https://api.datos.gob.mx/v1/precio.gasolina.publico?pageSize=${total}`);

        // retornar en json
        const respuestaJson = await datos.json();

        return { respuestaJson }
    }
}