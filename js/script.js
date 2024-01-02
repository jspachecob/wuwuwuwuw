
function irAPagina(url) {
    window.location.href = url;
  }

//funcion de los textos que cambian
var contadorTextos = 1;
var cantidadDeTextos = document.getElementById('cantidadDeTextos');


cantidadDeTextos.textContent = (contadorTextos + "/10" )


    function mostrarSiguienteTexto() {

      var audio = document.getElementById("miAudio");
      audio.play();
      


      var textoActual = document.getElementById('texto' + contadorTextos);
      
      if (textoActual) {
        textoActual.classList.add('oculto'); // Oculta el texto actual
        contadorTextos++;

        var siguienteTexto = document.getElementById('texto' + contadorTextos);

        if (siguienteTexto) {
          siguienteTexto.classList.remove('oculto'); // Muestra el siguiente texto
        } else {
          // Si no hay más textos, puedes reiniciar al llegar al último
          contadorTextos = 1;
          document.getElementById('texto1').classList.remove('oculto');
        }
      }

      cantidadDeTextos.textContent = (contadorTextos + "/10")

    }
