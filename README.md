Juego Secreto IA

<p align="center">
<strong>Un juego interactivo para poner a prueba tu intuición.</strong>
</p> <p align="center">
  <a href="https://juego-secreto-ia.vercel.app/">Jugar en línea</a>
</p>

Descripción

Juego Secreto IA es un mini-juego web desarrollado con HTML, CSS y JavaScript. El objetivo es descubrir un número secreto generado aleatoriamente dentro de un rango definido. Después de cada intento, el juego ofrece una pista para indicar si el número secreto es mayor o menor que el valor introducido.

El proyecto fue creado como una práctica de desarrollo web frontend y como una experiencia sencilla, rápida y accesible para jugar directamente desde el navegador.

Demo

Puedes probar la versión publicada aquí:

Abrir Juego Secreto IA

Características

Característica
Descripción
Generación aleatoria
El juego selecciona un número secreto dentro del rango establecido.
Pistas durante la partida
Después de cada intento, informa si el número secreto es mayor o menor.
Control de intentos
Evita repetir números que ya hayan sido probados durante la partida.
Reinicio de partida
Permite comenzar un nuevo juego en cualquier momento.
Validación de datos
Comprueba que el valor introducido sea válido y esté dentro del rango permitido.
Interfaz responsive
La pantalla puede adaptarse a diferentes tamaños de dispositivo.
Diseño visual moderno
Utiliza colores, fondos, imágenes y tipografías para crear una experiencia más atractiva.




¿Cómo jugar?

1.
Abre la versión online del juego o ejecuta el proyecto localmente.

2.
Introduce un número entero entre 1 y 10.

3.
Presiona el botón Intentar.

4.
Lee la pista mostrada por el juego.

5.
Continúa probando números hasta encontrar el número secreto.

6.
Cuando termines, utiliza Nuevo juego para iniciar otra partida.


Consejo: presta atención a las pistas para reducir rápidamente las posibilidades.

Tecnologías utilizadas

Tecnología
Uso dentro del proyecto
HTML5
Define la estructura y los elementos de la interfaz.
CSS3
Controla el diseño, los colores, la distribución y la adaptación a pantallas pequeñas.
JavaScript
Implementa la lógica del juego, las validaciones y la interacción con el usuario.
Vercel
Publica la aplicación para que pueda utilizarse en línea.




Estructura del proyecto

Plain Text


/
├── index.html       # Estructura principal de la aplicación
├── style.css        # Estilos, diseño visual y responsive
├── app.js           # Lógica del juego e interacción
└── img/
    ├── ia.png       # Imagen o avatar utilizado por el juego
    ├── ...          # Otros recursos visuales



Funciones principales

generarNumeroSecreto()

Genera un número aleatorio dentro del rango establecido y evita seleccionar números que ya hayan sido utilizados durante la partida.

verificarIntento()

Compara el número introducido por el usuario con el número secreto. Según el resultado, muestra una pista indicando si el número secreto es mayor, menor o igual al intento.

reiniciarJuego()

Restablece el estado de la partida, limpia los valores anteriores y prepara un nuevo número secreto.

Instalación local

Para ejecutar el proyecto en tu computadora no necesitas instalar dependencias externas.

Después, abre el archivo index.html en tu navegador. Para una mejor experiencia durante el desarrollo, puedes utilizar la extensión Live Server de Visual Studio Code.

Ejecutar con Visual Studio Code

Abre la carpeta del proyecto en Visual Studio Code. Comprueba que los archivos index.html, style.css, app.js y la carpeta img estén ubicados correctamente. Luego haz clic derecho sobre index.html y selecciona Open with Live Server.

Si no utilizas Live Server, también puedes abrir index.html directamente desde el explorador de archivos.

Personalización

Puedes modificar fácilmente el rango del juego, los textos, los colores y las imágenes. Para cambiar el rango máximo, revisa la constante o variable utilizada en app.js y actualiza también el texto mostrado en index.html para que las instrucciones coincidan con la nueva configuración.

Los colores, tamaños, botones y distribución visual se pueden personalizar desde style.css. Las imágenes utilizadas por la interfaz deben mantenerse dentro de la carpeta img y sus rutas deben coincidir con las referencias escritas en el HTML o CSS.

Mejoras futuras

Algunas funciones que podrían incorporarse en futuras versiones son:

•
Diferentes niveles de dificultad.

•
Rangos numéricos configurables.

•
Sistema de puntuación.

•
Registro del mejor resultado.

•
Historial visual de intentos.

•
Efectos de sonido y animaciones.

•
Modo contrarreloj.

•
Modo oscuro y otras opciones de personalización.

Autor

Proyecto desarrollado como práctica de programación frontend y experimentación con interfaces interactivas.

Licencia

Este proyecto está disponible para fines educativos y personales. Puedes modificarlo y adaptarlo según tus necesidades.


