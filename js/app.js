const ui = new UI();

document.addEventListener('DOMContentLoaded', () => {

    ui.mostrarEstablecimientos();
});

// buscador
const buscador = document.querySelector('#buscar input');
buscador.addEventListener('input', () =>{

    if(buscador.value.length > 5){

        console.log(buscador.value);
        // buscar en la api
        ui.obtenerSugerencias(buscador.value);
    
    }else{

        ui.mostrarEstablecimientos();
    }
})