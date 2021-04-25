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

           

            // VALIDACION IMAGEN
            const MAXIMO_TAMANIO_BYTES = 5000000; // 5MB         
            const $miInput = document.querySelector("#miInput");
            $miInput.addEventListener("change", function () {
                if (this.files.length <= 0) return;
                const archivo = this.files[0];
                var nombreArchivo = document.getElementById("miInput").value;
                var idxDot = nombreArchivo.lastIndexOf(".") + 1;
                var extFile = nombreArchivo.substr(idxDot, nombreArchivo.length).toLowerCase();
                if (extFile=="jpg"){

                    if (archivo.size > MAXIMO_TAMANIO_BYTES) {

                        const tamanioEnMb = MAXIMO_TAMANIO_BYTES / 1000000;
                        alert(`El tamaño máximo es de ${tamanioEnMb} MB`);
                        $miInput.value = "";}
                    
                }else{
                    alert("Solo se pueden seleccionar imagenes .jpg");
                    $miInput.value = "";
                }         
            });

                        