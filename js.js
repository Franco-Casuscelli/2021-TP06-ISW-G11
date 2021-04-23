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