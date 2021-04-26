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
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-check-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-times-circle');
        document.querySelector(`#grupo__${campo} .formulario__input-error`).classList.remove('formulario__input-error-activo');
        campos[campo] = true;
    }
    else{
        document.getElementById(`grupo__${campo}`).classList.add('formulario__grupo-incorrecto');
        document.getElementById(`grupo__${campo}`).classList.remove('formulario__grupo-correcto');
        document.querySelector(`#grupo__${campo} i`).classList.add('fa-times-circle');
        document.querySelector(`#grupo__${campo} i`).classList.remove('fa-check-circle');
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

formulario.addEventListener('submit', (e) => {
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

