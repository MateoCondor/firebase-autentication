Este proyecto es una aplicación web sencilla que implementaa la autencticacion en una Aplicacion React con Firebase.  

Para Configuracion en Firebase:
-Ir a Firebase Console
-Crear un Proyecto y seguir las instrucciones para configurar

Configuracion de la Autenticacion: 
-Despues de crear el proyecto, se selecciona el proyecto desde la consola de Firebase y nos dirigimos A la parte izquierda del menu que dice "Autenticacion"
-Selecciona el Metodo de Iniciar Sesion, selecciona los proveedores de Autenticacion que desea habilitar como "Correo, Google" 
En este proyecto se seleccion por Correo/Password y Google para Iniciar Sesion

Primero, clona el repositorio:

-Instalar Firebase en el proyecto 
npm install firebase
Una vez intalado copie sus claves de configuracion de su proyecto en la consola de Firebase 

Luego, instala las dependencias con npm:

instalación npm
Finalmente, inicia el servidor de desarrollo:

npm ejecutar desarrollador
Ahora deberías poder ver la aplicación en http://localhost:[port] .

Uso Para buscar Pokémon, simplemente introduce tu término de búsqueda en el campo de búsqueda y presiona Enter. Los resultados de la búsqueda se mostrarán en una lista y al seleccionar un pokemon se mostrarán sus estadísticas, cadena de evolución y una pequeña descripción.