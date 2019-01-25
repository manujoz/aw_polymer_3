# AW_POLYMER_3

Gracias al trabajo del **equipo de Polymer** tenemos una magnífica biblioteca que nos permite trabajar con web components de manera nativa aprovechando los estándares de W3C.

Este paquete es solo una rama de Polymer 3 ajustada para trabajar en navagadores compatibles con Web Components y Shadow DOM.

La finalidad de este paquete es poder añadir de forma sencilla en unos pocos pasos componentes web creados con Polymer a cualquier tipo de proyecto web, ya sea un CMS como WordPress o proyectos hechos desde cero sin necesidad de compilaciones ni uso de CLI's, Webpack o similares.

### Sin cientos de peticiones al servidor

Este paquete ha agrupado todos los módulos en solamente dos, de manera que cuando agregas Polymer a un sitio web se reducen las peticiones al servidor a unicamente 2 archivos donde quedará agregada toda la biblioteca en 150k, en lugar de las más de 60 peticiones al servidor y casi 500k que se realizan con la biblioteca original.

### Sin polyfills

Hemos prescindido del uso de Polyfills debido al anuncio de *Microsoft Edge* de pasarse a Chromium, por lo que es de esperar que la nueva versión de este navegador sea completamente compatible con estos estándares, de modo, que por fin podremos utilizar los Web Components de manera nativa en todos los navegadores populares. *Igualmente, no recomendamos su uso en producción en proyectos que se publiquen antes de finales de 2019*.

### Sin CLI

Este paquete no requiere el uso de ningún CLI, puedes empezar a trabajar con él sin el uso  *Polymer Serve* ni la necesidad de realizar '*Builds*' de los componentes. Es tan secillo como crear un componente nuevo y estará listo para trabajar en cualquier navegador compatible.

También se han ajustado los módulos para que las importaciones de éstos funcione sin nombres de paquetes, de manera que se ajustan al estandar de los navegadores al hacer uso de rutas completas.

### Funciones especiales para la programación web

Se añaden a la clase **Polymer** a partir de la **versión 1.1.4 de aw_polymer_3** los aw-effects más usados para no tener que cargarlos por separado. Estos efectos, más bien funciones, son funciones prácticas que se usan normalmente en el desarrollo de una web que antes nos ofrecía la biblioteca 'jQuery'.

Las funciones que se añaden son:

- <a href="https://www.npmjs.com/package/aw_effects#aw-animate)">aw-animate</a>: Función que permite alimar elementos del DOM de manera sencilla utilizando el motor de animación del navegador CSS.
- <a href="https://www.npmjs.com/package/aw_effects#aw-colors">aw-colors</a>: Función que permite convertir colores entre formatos o saber el contraste de un color.
- <a href="https://www.npmjs.com/package/aw_effects#aw-fade">aw-fade</a>: Función que permite mostrar/ocultar un elemento con un efecto de aparición/desaparición.
- <a href="https://www.npmjs.com/package/aw_effects#aw-liste-dom">aw-listen-dom</a>: Función que permite escuchar eventos en un elemento o varios elementos de la página independientemente de que estos estén o no en el DOM cuando se ponen a la escucha. Es una función similar a ``JQuery.on()`` hecha para Polymer.
- <a href="https://www.npmjs.com/package/aw_effects#aw-parallax">aw-parallax</a>: Función que permite crear el efecto Parallax sobre un componente de manera sencilla.
- <a href="https://www.npmjs.com/package/aw_effects#aw-scroll">aw-scroll</a>: Función que permite deslizar el scroll de la página de manera suave a través de javascript.
- <a href="https://www.npmjs.com/package/aw_effects#aw-slide">aw-slide</a>: Función que permite mostrar/ocultar un elemento con un efecto de persiana.
- <a href="https://www.npmjs.com/package/aw_effects#aw-slider-element">aw-slider-element</a>: Función que permite hacer que un elemento sea deslizante sobre su elemente padre al hacer scroll. Por ejemplo, si tenemos dos columnas y queremos que el elemento de una columna esté siempre visible al bajar o subir el scroll.
- <a href="https://www.npmjs.com/package/aw_effects#aw-textarea-adjust">aw-textarea-adjust</a>: Convierte un textarea en un textarea que se vaya ajustando en altura según se va escribiendo en él.

Para saber más del funcionamiento de estos efectos, visitar los enlaces de cada uno.

___

## Instalación y uso

Instala el paquete con el siguiente comando
```console
$ npm i aw_polymer_3
```

Con el paquete ``aw_polymer_3`` tendrás disponible además de la biblioteca Polymer 3, todos los ``iron-icons`` y el componente ``paper-ripple`` ya preparados para su uso.

Podrás consultar la lista de iconos disponibles visitando la siguiente página en tu propio servidor: `http://my-domain.com/node_modules/aw_polymer_3/iron-icons/demo/index.html`

### Creando mi primer compoentente

Crea tu primer componete: `/src/my-component.js`

```javascript
import {PolymerElement, html} from "/node_modules/aw_polymer_3/polymer/polymer-element.js";
import "/node_modules/aw_polymer_3/iron-icons/iron-icons.js";

class MyComponent extends PolymerElement {
	static get template() {
		return html`
		<style>
			:host {
				position: relative;
			}
			h1 {
				font-size: 24px;
				padding: 0 0 15px;
			}

			h1 iron-icon {
				width: 24px;
				height: 24px;
				fill: cyan;
				margin: 0 5px 0 0;
			}
		</style>

		<h1>
			Este es mi componente creado con <iron-icon icon="polymer"></iron-icon>Polymer
		</h1>
		Bienvenido a Web Components {{name}}.
		`;
	}

	static get properties() {
		return {
			name: { type: String, value: "-- set your name --"}
		}
	}
}

window.customElements.define( "my-component", MyComponent );
```

Crea tu archivo `index.html`

```html
<!DOCTYPE html>
<html lang="es">
<head>
	<meta charset="UTF-8">
	<meta name="viewport" content="width=device-width, initial-scale=1.0">
	<title>My First Component Polymer 3</title>

	<style type="text/css">
		body {
			padding: 20px;
		}
		[unresolved] {
			display: none;
		}
	</style>
</head>
<body>
	<my-component name="Will Smith"></my-component>
	<script type="module" src="/src/my-component.js" async></script>
</body>
</html>
```

Con este ejemplo, si vas a inspector del navegador y compruebas los archivos que se solicitaron al servidor verás que está el `polymer-element.js`, que es el único archivo requerido para crear los componentes y el resto de archivos son los que se necesitan para usar los `iron-icons`. Sin el uso de estos iconos, solo se requerirá el de `polymer-element.js`. Incluso así, verás que se solicitan muy pocos módulos en comparación con la biblioteca de Polymer descargada directamente que serían más de 70 solicitudes.

___


<p style="text-align: center; padding: 50px 0">
	Nuestro más sincero agradecimiento al equipo de Polymer por crear esta fantástica biblioteca.<br><br>
	<a href="https://www.polymer-project.org/">Polymer Project</a><br>
	<a href="https://polymer-library.polymer-project.org/3.0/docs/about_30">Polymer Library</a><br>
	<a href="https://www.npmjs.com/package/@polymer/polymer">Polymer Original</a>
</p>

<p style="text-align: center; padding: 0 0">
    <b>Contacto</b><br><br>Manu J. Overa<br><a href="mailto:manu.overa@arismanwebs.es">manu.overa@arismanwebs.es</a><br><br>
    Diseño Web - <a href="https://arismanwebs.es">Arisman Webs</a>
</p>



