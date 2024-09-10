SPA
La estructura de la página busca 'simular' una SPA, con esto en mente, lo siguiente se debe tener en cuenta al momento de hacer el desarrollo:

    Structura:
        index.js -> Equí irán las funcionalidades principales, transversales y de layout de la app.
        index.html -> Aquí irá el layout de la app, funcionaría como el root de la app. Será el archivo base de nuestra app.
        index.css ->  Aquí irán los estilos globales y generales de la app.
    De preferencia, estos archivos nos deben ser modificados a menos que se deba hacer una actualización al uso "SPA" de la página o al layout.

        Pages - Carpeta -
        Esta carpeta funciona como el contenedor de nuestros 'módulos' (los organismos ?) de la app.
            create (carpeta) -> irá el contenido relacionado con la creación de una nota
            view (carpeta) -> irá el contenido relacionado con el módulo de visualización de una nota, la eliminación y la edición.
            
        Dada la configuración de "SPA", el objetivo es que en cada elemento que se cree dentro de las carpetas mantenga una estructura - nombreDelComponente.html/css/js

        Layout - Carpeta -
        Aquí se encuentran los archivos de estructura general de la página (header y footer), que se traen por medio de una función js, para generar la estructura SPA.

        Script - Carpeta -
        En ella se encuentran los script transversales que pueden ser reutilizados en otros módulos de la app.
            - loadStorage.js -> Irá la lógica de almacenamiento local.
            - repository.js -> Irá la lógica de 'repositorio CRUD' de la app.

    Lógica SPA
    En el archivo index.html se tienen tags con id específicos, estos ids son importantes, porque ellos nos permiten modificar el DOM al usarlos en el archivo index.js.

        INDEX.JS
             Se tienen tres variables declaradas: root, header y footer, que acceden al DOM por medio de un getElementById('id-específico de la etiqueta en el index.html')

            Se tienen cuatro funciones para lograr la SPA base, tres de ellas son asíncronas (utilizan la estructura async-await)
                replaceContent -> reemplaza el contenido que se mostrará en el elemento con el id determinado, por el contenido que se especifique en la urlPage.
                loadStyle -> carga/reemplaza un archivo CSS específico (dado por el id="page") para cada módulo que se diseñe.
                loadJs -> carga/reemplaza el script JS particular para componente, dado por el id="pageScript".

                Y una función normal
                navigateTo -> Esta función utiliza el archivo de routes.js (ROUTES) para 'enrutar' los elementos  según el id del index (root) y los elementos del objeto, teniendo en cuenta si la url dada en el objeto termina en .html, .css o .js.

                No debería modificarse a menos que se desee cambiar la lógica SPA

                Esta forma

function loadStyles(urlPage) {

    fetch(urlPage).then(function (response) {
        if (response.ok) {
            return response.text();
        }
        //throw response;

    }).then(function (text) {
        if (text) {
            const style = document.getElementById("page");
            style.textContent = text
            //document.head.appendChild(style)
        }
    });

}

                Es igual a esta forma, solo que aquí se está creando una estructura más "nueva".

async function loadStyles(urlPage) {
try {
const response = await fetch(urlPage);
if (!response.ok) {
throw new Error("¡Upss, algo salió mal!");
}
const content = await response.text();
const style = document.getElementById("page");
style.textContent = content;
} catch (error) {
console.error("¡Upss, algo salió mal al estilizar!", error);
}
}

NOTA: En este archivo se maneja también la lógica del 'layout', dado que es una lógica general a la aplicación para lograr el efecto SPA.

        ROUTES.JS
        Aquí se encuentra el esquema de rutas para la aplicación SPA. Es un array de objetos.

const ROUTES [
{
"name": "",
"htmlUrl": "",
"cssUrl": "",
"jsUrl": ""
},

        {
            ...
        }
    ]

        El objetivo de este archivo es que en cada módulo de la app, se cree un objeto dentro de él, siguiendo la estructura anterior y el ejemplo que está en el archivo.

        Esto es importante, porque nos permite mantener una estructura funcional de SPA en toda nuestra aplicación, ya que las funciones principales del index.js iteran sobre este elemento.




