
$( document ).ready(function() {
    document.getElementById("error_txt_pedido").style.display = 'none';
    document.getElementById("error_txt_comercio").style.display = 'none';
    document.getElementById("error_txt_entrega").style.display = 'none';
    document.getElementById("error_txt_ciudad").style.display = 'none';
    
});

var pagoSeleccionado;
var formaPago;

function procesarclickEfectivo(){
    pagoSeleccionado = "S";
    formaPago = "E";
}

function procesarclickTarjeta(){
    pagoSeleccionado = "S";
    formaPago = "T";
}

var select = document.getElementById("select"),
                     arr = [
                        "Almafuerte","Alta gracia","Arroyito","Bell ville","Capilla del monte", 
                        "Colonia caroya","Cosquín","Cruz del eje","Córdoba","Deán funes","Estación",
                        "General cabrera","General deheza","Jesús maría","Juárez celman",
                        "La calera","La carlota","La falda","Laboulaye","Las varillas","Malagueño",
                        "Malvinas argentinas","Marcos juárez","Morteros","Oliva","Oncativo","Pilar",
                        "Río ceballos","Río cuarto","Río segundo","Río tercero","Saldán","San francisco",
                        "Santa rosa de calamuchita","Unquillo","Villa allende","Villa carlos paz",
                        "Villa del rosario","Villa dolores","Villa maría","Villa nueva"
                        ];
             
             for(var i = 0; i < arr.length; i++)
             {
                 var option = document.createElement("OPTION"),
                     txt = document.createTextNode(arr[i]);
                 option.appendChild(txt);
                 option.setAttribute("value",arr[i]);
                 select.insertBefore(option,select.lastChild);
             }
             var element = document.querySelector('select');

             element.addEventListener('mousedown', function () {
                 this.size=8;
             });
             element.addEventListener('change', function () {
                 this.blur();
             });
             element.addEventListener('blur', function () {
                 this.size=0;
             });

             // para la segunda opcion lo unico que hay q hacer es quitar desde la linea 21 a la 31

             //Deshabitilar y Habilitar input radio button 
            
             function deshabilitarInput(){
             if(document.querySelector('#fecha_pedido').value !== '' || document.querySelector('#hora_pedido').value !== ''  ){
                 document.querySelector('#btn_antes_posible').disabled = true;
              
             }
             else{
                document.querySelector('#btn_antes_posible').disabled = false;
                if(document.querySelector('#btn_antes_posible').checked === true){
                    document.querySelector('#fecha_pedido').disabled = true;
                    document.querySelector('#hora_pedido').disabled = true;
                    document.querySelector('#hora_pedido').value = '';
                    document.querySelector('#fecha_pedido').value = '';
                    document.querySelector('#fecha_pedido').style.cursor= 'auto';
                    document.querySelector('#hora_pedido').style.cursor= 'auto';


                }
                else{
                    document.querySelector('#hora_pedido').disabled = false;
                    document.querySelector('#fecha_pedido').disabled = false;
                    document.querySelector('#fecha_pedido').style.cursor= 'text';
                    document.querySelector('#hora_pedido').style.cursor= 'text';

                    
                }
             }
            }

            // VALIDACION IMAGEN
            const MAXIMO_TAMANIO_BYTES = 5000000; // 5MB         
            const $imagen = document.querySelector("#imagen");
            $imagen.addEventListener("change", function () {
                if (this.files.length <= 0) return;
                const archivo = this.files[0];
                var nombreArchivo = document.getElementById("imagen").value;
                var idxDot = nombreArchivo.lastIndexOf(".") + 1;
                var extFile = nombreArchivo.substr(idxDot, nombreArchivo.length).toLowerCase();
                if (extFile=="jpg"){

                    if (archivo.size > MAXIMO_TAMANIO_BYTES) {

                        const tamanioEnMb = MAXIMO_TAMANIO_BYTES / 1000000;
                        alert(`El tamaño máximo es de ${tamanioEnMb} MB`);
                        $imagen.value = "";}
                    
                }else{
                    alert("Solo se pueden seleccionar imagenes .jpg");
                    $imagen.value = "";
                }         
            });

    /* Nahuel - Direccion de entrega */
    const formulario = document.getElementById('formulario');
    const inputs = document.querySelectorAll('#formulario input');

    const campos = {
        calle: false,
        numero: false,
        ciudad: false
    }

    const expresiones = {
        calle: /^[a-zA-Z0-9\s]{3,30}$/, // Letras, numeros, guion y guion_bajo
        ciudad: /^[a-zA-ZÀ-ÿ\s]{3,20}$/, // Letras y espacios, pueden llevar acentos.
        numero: /^\d{1,5}$/ // 1 a 5 numeros.
    }

    const validarFormulario = (e) => {
        switch(e.target.name) {
            case "calle":
                validarCampo(expresiones.calle, e.target, 'calle');
            break;

            case "numero":
                validarCampo(expresiones.numero, e.target, 'numero');
            break;

            case "ciudad":
                validarCampo(expresiones.ciudad, e.target, 'ciudad');
            break;
        }
    }

    const validarCampo = (expresion, input, campo) =>{
        if(expresion.test(input.value)){
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-correcto');
            
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
            campos[campo] = true;
        }
        else{
            document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
            document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
            
            document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.add('formulario__input-error-activo');
            campos[campo] = false;
        }
    }

    inputs.forEach((input) => {
        input.addEventListener('keyup', validarFormulario);
        input.addEventListener('blur', validarFormulario);
    });

    function tomarDatosDomicilio(){
        const completo = "Dirección de entrega";
        const calle_ = document.getElementById("calle").value;
        const numero_ = document.getElementById("numero").value;
        const ciudad_ = document.getElementById("ciudad").value;

        completo = calle_ + " " + numero_ + " " + ciudad_;

        document.write(completo);
    }

 /*   formulario.addEventListener('submit', (e) => {
        e.preventDefault();

        if(campos.calle == false || campos.numero == false || campos.ciudad ==false){
            document.getElementById('formulario__mensaje').classList.add('formulario__mensaje-activo');
        }
        else{
            formulario.reset();
            document.getElementById('formulario__mensaje').classList.remove('formulario__mensaje-activo');
            document.querySelectorAll('.formulario__grupo-correcto').forEach((icono) =>{
                icono.classList.remove('formulario__grupo-correcto');
            });
        }
    })
    /* Nahuel*/




function validar(){
    
    var txt_pedido = document.getElementById('txt_pedido').value;
    var txt_comercio = document.getElementById('txt_comercio').value;
    //var txt_direccion_entrega = document.getElementById('txt_direccion_entrega').value;
    var select = document.getElementById('select').value;

    if(txt_pedido == ''){
        document.getElementById("error_txt_pedido").style.display = 'block';

        document.getElementById("error_txt_comercio").style.display = 'none';
        document.getElementById("error_txt_entrega").style.display = 'none';
        document.getElementById("error_txt_ciudad").style.display = 'none';
        document.getElementById("error_pagoElegido").style.display = 'none';
        return
    }
    if(txt_comercio == ''){
        document.getElementById("error_txt_comercio").style.display = 'block';

        document.getElementById("error_txt_pedido").style.display = 'none';
        document.getElementById("error_txt_entrega").style.display = 'none';
        document.getElementById("error_txt_ciudad").style.display = 'none';
        document.getElementById("error_pagoElegido").style.display = 'none';
        return
    }

    
    if(campos.calle == false || campos.numero == false || campos.ciudad == false){
        document.getElementById("error_txt_entrega").style.display = 'block';

        document.getElementById("error_txt_comercio").style.display = 'none';
        document.getElementById("error_txt_pedido").style.display = 'none';
        document.getElementById("error_txt_ciudad").style.display = 'none';
        document.getElementById("error_pagoElegido").style.display = 'none';
        return
    }
    
    
    if(select == ''){
        document.getElementById("error_txt_ciudad").style.display = 'block';

        document.getElementById("error_txt_entrega").style.display = 'none';
        document.getElementById("error_txt_comercio").style.display = 'none';
        document.getElementById("error_txt_pedido").style.display = 'none';
        document.getElementById("error_pagoElegido").style.display = 'none';
        return
    }

    if(pagoSeleccionado != 'S'){
        console.log("No selecciono metodo pago");
        document.getElementById("error_pagoElegido").style.display = 'block';

        document.getElementById("error_txt_ciudad").style.display = 'none';
        document.getElementById("error_txt_entrega").style.display = 'none';
        document.getElementById("error_txt_comercio").style.display = 'none';
        document.getElementById("error_txt_pedido").style.display = 'none';  
        return

    }
    else {
        if(formaPago == 'E'){
            document.getElementById("error_txt_ciudad").style.display = 'none';
            document.getElementById("error_txt_entrega").style.display = 'none';
            document.getElementById("error_txt_comercio").style.display = 'none';
            document.getElementById("error_txt_pedido").style.display = 'none';
            document.getElementById("error_pagoElegido").style.display = 'none';
            document.getElementById("error_txt_efectivo").style.display = 'none';
            console.log("Entro efectivo");
            if(document.getElementById("txt_efectivo").value == '') {
                console.log("Campo abonar vacio");
                document.getElementById("error_txt_efectivo").style.display = 'block';
                return
            }
        }
        else if(formaPago == 'T')
        {
            document.getElementById("error_txt_ciudad").style.display = 'none';
            document.getElementById("error_txt_entrega").style.display = 'none';
            document.getElementById("error_txt_comercio").style.display = 'none';
            document.getElementById("error_txt_pedido").style.display = 'none';
            document.getElementById("error_pagoElegido").style.display = 'none';
            return

        }
    }


  
    document.getElementById("error_txt_pedido").style.display = 'none';
    document.getElementById("error_txt_comercio").style.display = 'none';
    document.getElementById("error_txt_entrega").style.display = 'none';
    document.getElementById("error_txt_ciudad").style.display = 'none';



    alert("llegue!!")

}



// G-Maps ---------------------------------------------------------

// Ver coord de ubicación en consola 
//var ubicacion = new Localizacion();
//console.log(ubicacion)
google.maps.event.addDomListener(window, "load", function(){
    const ubicacion = new Localizacion(()=>{
        const myLatLng = {
                lat : ubicacion.latitude,
                lng : ubicacion.longitude
        }

        //var texto = '<h4>Tu ubicación actual</h4>' + '<br><p>Aquí te encuentras actualmente</p>'

        const options = {
            center: myLatLng,
            zoom: 16
        }

        var map = document.getElementById('map');

        const mapa = new google.maps.Map(map,options);

        const marcador = new google.maps.Marker({
            position: myLatLng,
            map: mapa
            //title: "Marcador"
            
        })

        var informacion = new google.maps.InfoWindow({
            //content: texto
        })

        marcador.addListener('click', function(){
            informacion.open(mapa,marcador);
        });

        var autocoplete = document.getElementById('txt_comercio');

        const search = new google.maps.places.Autocomplete(autocoplete);
        search.bindTo("bounds",mapa);

        search.addListener('place_changed', function(){
            informacion.close();
            marcador.setVisible(false);

            var place = search.getPlace();

            if(!place.geometry.viewport){
                window.alert("Error al mostrar el lugar");
                return
            }
            
            if(place.geometry.viewport){
                mapa.fitBounds(palce.geometry.viewport);
            }else{
                map.setCenter(palce.geometry.location);
                mapa.setZoom(18);
            }

            marcador.setPositiom(place.geometry.location);
            marcador.setVisible(true);

            var address = ""

            if(palce.address_components){
                address = [
                    (place.address_components[0] && place.address_components[0].short_name || ''),
                    (place.address_components[1] && place.address_components[1].short_name || ''),
                    (place.address_components[2] && place.address_components[2].short_name || '')
                ];
            }

            informacion.setContenet('<div><strong>'+place.name+'</strong><br>'+address+'</div>');
            informacion.open(map,marcador);

        });

    });

});

// G-Maps ---------------------------------------------------------

function ocultar(){
    document.getElementById('dirComercio').style.display = 'none';
}

function mostrar(){
    document.getElementById('map').style.display = true;
}