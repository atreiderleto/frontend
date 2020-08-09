'use strict'

window.addEventListener('load', () =>{

    var formulario = document.querySelector('#formulario');
   
    formulario.addEventListener('submit', () =>{
        
        var nombre = document.querySelector('#_nombre').value;
        var correo = document.querySelector('#_correo').value;
        var cuidad = document.querySelector('#_cuidad').value;
        var textArea = document.querySelector('#text-area').value;

        if (nombre.trim() == null || nombre.trim().length == 0) {
            alert('El Campo Nombre no valido');
            return false;
        }

        if (correo.trim() == null || correo.trim().length == 0) {
            alert('El Campo Correo no es  valido');
            return false;
        }

        if (cuidad.trim() == null || cuidad.trim().length == 0) {
            alert('El Campo Cuidad no es valido');
            return false;
        }
        

        if (textArea.trim() == null || textArea.trim().length == 0) {
            alert('Ingrese un Comentario');
            return false;
        }
    });

   
});