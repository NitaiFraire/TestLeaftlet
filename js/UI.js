class UI {
    constructor() {

        // instanciar la api
        this.api = new API();

        // crear markers con layerGroup
        this.markers = new L.LayerGroup();

        // Iniciar el mapa
        this.mapa = this.inicializarMapa();

    }

    inicializarMapa() {
         // Inicializar y obtener la propiedad del mapa
         const map = L.map('mapa').setView([19.390519, -99.3739778], 6);
         const enlaceMapa = '<a href="http://openstreetmap.org">OpenStreetMap</a>';
         L.tileLayer(
             'http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
             attribution: '&copy; ' + enlaceMapa + ' Contributors',
             maxZoom: 18,
             }).addTo(map);
         return map;

    }

    mostrarEstablecimientos(){

        this.api.obtenerDatos()
                .then(datos => {

                    console.log(datos);
                    const resultado = datos.respuestaJson.results;

                    // ejecutar la funcion para mostrar los pines
                    this.mostrarPines(resultado);
                });
    }

    mostrarPines(datos){

        // limpiar markers antes de mandarlos a llamar
        this.markers.clearLayers();

        // recorrer los establecimientos
        datos.forEach(dato => {

            // destructuring
            const { latitude, longitude, calle, regular, premium } = dato;

            // crear popup
            const opcionesPoup = L.popup().setContent(`<p>Calle: ${calle}</p>
                                                        <p><b>Regular: $</b>${regular}</p>                                                
                                                        <p><b>Premium: $</b>${premium}</p>`);

            // agregar pin 
            const marker = new L.marker([

                parseFloat(latitude),
                parseFloat(longitude)
            ]).bindPopup(opcionesPoup);

            this.markers.addLayer(marker);
        });

        this.markers.addTo(this.mapa);
    }

    // buscador 
    obtenerSugerencias(busqueda){

        this.api.obtenerDatos()
                .then(datos => {
                    
                    const resultados = datos.respuestaJson.results;
                });
    }
}