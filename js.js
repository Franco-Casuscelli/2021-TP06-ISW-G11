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
             if(document.querySelector('#hora_pedido').value !== ''){
                 document.querySelector('#btn_antes_posible').disabled = true;
             }
             else{
                document.querySelector('#btn_antes_posible').disabled = false;
                if(document.querySelector('#btn_antes_posible').checked === true){
                    document.querySelector('#hora_pedido').disabled = true;
                    document.querySelector('#hora_pedido').value = '';
                }
                else{
                    document.querySelector('#hora_pedido').disabled = false;
                    
                }
             }
            }

function validar(){
    
    var txt_pedido = document.getElementById('txt_pedido').value;
    var txt_comercio = document.getElementById('txt_comercio').value;
    var txt_direccion_entrega = document.getElementById('txt_direccion_entrega').value;
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

    if(txt_direccion_entrega == ''){
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
        }
    }


    document.getElementById("error_txt_pedido").style.display = 'none';
    document.getElementById("error_txt_comercio").style.display = 'none';
    document.getElementById("error_txt_entrega").style.display = 'none';
    document.getElementById("error_txt_ciudad").style.display = 'none';

}