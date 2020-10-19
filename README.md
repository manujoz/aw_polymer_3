# AW_POLYMER_3

`aw_polymer_3` es una adapatación de la biblioteca Polymer para poder usar componentes creados por vosotros mismos sin necesidad de crear un sitio entero basado en polymer. En esencia lo que consigue esta biblioteca es poder usar Polymer de manera sencilla y eficaz en cualquier página web personalizada o realizada en Wordpress añadiendo solo unas pocas líneas de código. Una especia de lit-element mejorado ya que puedes aprovechar el máximo potencial de Polymer al crear componentes web con unos recursos totalmente optimizados para la web.

Además se han añadido funcionalidades adicionales útiles para diversos trabajos en javascript aprovechando el potencial de la biblioteca original. 

## Instalación

```
$ npm i aw_polymer_3
```

## Uso de aw_polymer_3

Añadir componentes personalizados es muy sencillo, tan solo tienes que crear un componente web de Polymer como puedes ver en la propia documentación de <a href="https://polymer-library.polymer-project.org/3.0/docs/about_30" target="_blank">Polymer 3</a> variando únicamente las rutas de los imports en el archivo javascript:

<span style="font-size:12px">my-component.js</span>

```javascript
// Import the PolymerElement base class and html helper
import { PolymerElement, html, Polymer } 	from "/node_modules/aw_polymer_3/polymer/polymer-element.js";

// Define an element class
class myComponent extends PolymerElement {

  // Define public API properties
  static get properties() { return { name: String }}

  // Define the element's template
  static get template() {
    return html`
      Hello {{name}}, I am your componente
    `;
  }
}

// Register the element with the browser
customElements.define('my-component', myComponent);
```

<span style="font-size:12px">index.html</span>

```html
<!DOCTYPE html>
<html lang="en">
  <head></head>
  <body>
    <my-component name="Charles"></my-component>
	<iron-icon icon="mail"></iron-icon>
	
	<!-- Only for not chromiun navigators -->
	<script src="/node_modules/aw_webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
	<!-- Only for not chromiun navigators -->
	<script type="module" src="/node_modules/aw_polymer_3/polymer/polymer-element.js"></script>
	<script type="module" src="/node_modules/aw_polymer_3/iron-icons/iron-icons.js"></script>
	<script type="module" src="/my-component.js"></script>
  </body>
</html>
```

Como se observa en el ejemplo anterior la creación de un componente personalizado y su inclusión en un sitio web creado de forma personalizada o incluso con algún CMS es extremadamente sencilla. La ventaja de `aw_polymer_3` sobre `lit-element` es que en la creación del componente podemos hacer uso de todas las funcionalidades complejas de polymer como `dom-if`, `dom-repeat` entre otras muchas cosas.

Además como hemos mencioado anteriormente hemos añadido funcionalidades adicionales a la clase `Polymer` que seguro que te son útiles en gran medida para la creación de páginas web.

## Funcionalidades adicionales

### Poylmer.Animate()

Como si de la función de animar de jQuery se tratase con esta función podemos crear animaciones en elementos del DOM de manera simple. Estas animaciones hacen uso del motor CSS por lo que están optimizadas para su uso en la mayoría de los navegadores.

``` typescript
Animate( el: HTMLElement, props: Object, settings?: { speed: number, effect: string, delay: number }| Function, callback?: Function ) : void
```

<span style="font-size:12px">index.js</span>

``` javascript
// @ts-check

import { Polymer } from "/node_modules/aw_polymer_3/polymer/polymer-element.js";

let divToAnimate = document.querySelector( "#divToAnimate" );

Polymer.Animate( divToAnimate, {
	left: 50%,
	top: 50%,
	width: 150px
}, {
	speed: 500,
	effect: "ease-in",
	delay; 1000
}, () => {
	// Do something when end animation
})
```

### Polymer.Colors...

Con este método podemos tratar colores en javascript de manera sencilla y eficaz. Esta clase nos permite la conversión de colores de `HEX a RGB` o de `HEX a HSL` o de `RGBA a HSLA`, etc... También nos permite obtener el contraste de un color para saber si es claro u oscuro o saber el formato de un color que pasamos en un string.

<span style="font-size:12px">index.js</span>

```javascript
// @ts-check

import { Polymer } from "/node_modules/aw_polymer_3/polymer/polymer-element.js";

// Know color format
let format = Polymer.Colors.type( "#000000" ); // format = "HEX"

// Convert to RGB
let rgb = Polymer.Colors.toRGB( "#000000" ); // rgb = "rgb(0,0,0);

// Convert to RGBA
let rgba = Polymer.Colors.toRGBA( "#000000", .8 ); // rgba = "rgba(0,0,0,.8)

// Convert to HSL
let hsl = Polymer.Colors.toHSL( "rgb(0,0,0)" ); // hsl = "hsl(0,0%,0%)"

// Convert to HSLA
let hsla = Polymer.Colors.toHSLA( "#000000", .7 ); // hsla = "hsl(0,0%,0%,.7)"

// Convert to HEX
let hex = Polymer.Colors.toHEX( "hsl(0,0%,0%)" ); // hex = "#000000"

// Get contrast
let contrast1 = Polymer.Colors.contrast( "#000000" ); // contrast1 = "dark";
let contrast2 = Polymer.Colors.contrast( "#FFFFFF" ); // contrast2 = "light";
```

### Polymer.Fade...

Con este método podemos hacer aparecer o desaparecer elementos HTML como si de jQuery se tratase.

``` typescript
Fade.in( el: HTMLElement, settings?: { speed: number, effect: string }|Function, callback?: Function ) : void 
```

``` typescript
Fade.out( el: HTMLElement, settings?: { speed: number, effect: string }|Function, callback?: Function ) : void 
```

``` typescript
Fade.toggle( el: HTMLElement, settings?: { speed: number, effect: string }|Function, callback?: Function ) : void 
```

<span style="font-size:12px">index.js</span>

```javascript
// @ts-check

import { Polymer } from "/node_modules/aw_polymer_3/polymer/polymer-element.js";

let el = document.querySelector( "#myElement" );

Polymer.Fade.in( el, {
	speed: 500,
	effect: "ease-in"
}, () => {
	// Do something when animation end
});

Polymer.Fade.out( el, () => {
	// Do something when animation end
});
```

### Polymer.Slide...

Método parecido a ``Polymer.Fade`` solo que este lo hace con efecto persiana.

``` typescript
Fade.down( el: HTMLElement, settings?: { speed: number, effect: string }|Function, callback?: Function ) : void 
```

``` typescript
Fade.up( el: HTMLElement, settings?: { speed: number, effect: string }|Function, callback?: Function ) : void 
```

``` typescript
Fade.toggle( el: HTMLElement, settings?: { speed: number, effect: string }|Function, callback?: Function ) : void 
```

<span style="font-size:12px">index.js</span>

```javascript
// @ts-check

import { Polymer } from "/node_modules/aw_polymer_3/polymer/polymer-element.js";

let el = document.querySelector( "#myElement" );

Polymer.Fade.down( el, {
	speed: 500,
	effect: "ease-in"
}, () => {
	// Do something when animation end
});

Polymer.Fade.up( el, () => {
	// Do something when animation end
});
```

### Polymer.ListenDom...

Este método simula al método ``jQuery.on`` o ``jQuery.off``, poniendo elementos del DOM a la escucha de eventos aunque estos aun no estén en el DOM en el momento de la carga.

``` typescript
ListenDom.on( event: string, selector: string, func: Function ) : void
```

``` typescript
ListenDom.off( event: string, selector: string, func: Function ) : void
```

<span style="font-size:12px">index.js</span>

```javascript
// @ts-check

import { Polymer } from "/node_modules/aw_polymer_3/polymer/polymer-element.js";

Polymer.ListenDom.on( "click", ".myDiv input[name=id]", () => {
	// When you click on an element that matches the indicated selector, this function will be invoked
});

// Listen for the click on the given selector and invoke myFunc
Polymer.ListenDom.on( "click", ".myDiv input[name=email]", myFunc );
// Removes the click of the given selector element from listening
Polymer.ListenDom.off( "click", ".myDiv input[name=email]", myFunc );

function myFunc() {
	// When you click on an element that matches the indicated selector, this function will be invoked
}
```

### Polymer.Parallax...

Este método crea un efecto de paralaje en un elemento dado.

``` typescript
Parallax.init( el: HTMLElement, settings?: { property: string, direction: string, speed: number, bgColor: string } ) : void
```

<span style="font-size:12px">index.js</span>

```javascript
// @ts-check

import { Polymer } from "/node_modules/aw_polymer_3/polymer/polymer-element.js";

let el = document.querySelector( "#myElement" );

// Create the parallax effect with a background image that is in the #myElement element
Polymer.Parallax.inig( el, {
	property: "background",
	direction: "down",
	speed: 15,
	bgColor: "#000000"
});

let el2 = document.querySelector( "#myElement2" );

// Create the parallax effect animating the #myElement2 element
Polymer.Parallax.inig( el2, {
	property: "Element",
	direction: "up",
	speed: 5
});
```

### Polymer.scroll...

Anima el scroll de la página o de un elemento scrollable.

``` typescript
scroll.to( height: number, duration?: number, scrollable?: HTMLElement ) : void
```

``` typescript
scroll.top( duration: number, scrollable?: HTMLElement ) => void
```

``` typescript
scroll.bottom( duration: number, scrollable?: HTMLElement ) => void
```

``` typescript
scroll.toElement( el: HTMLElement, margin?: number, duration?: number, scrollable?: HTMLElement ) => void
```

<span style="font-size:12px">index.js</span>

```javascript
// @ts-check

import { Polymer } from "/node_modules/aw_polymer_3/polymer/polymer-element.js";

// Animate the page scroll up to a height of 500 in 300ms
Polymer.scroll.to( 500, 300 );

// Animate the #myElement scroll to a height of 500 in 300ms
let el = document.querySelector( "#myElement" );
Polymer.scroll.to( 500, 300, el );

// Animate the page scroll to the top in 300ms
Polymer.scroll.top( 300 );

// Animate the page scroll to the bottom by 300ms
Polymer.scroll.bottom( 300 );

// Animate the page scroll up to the # myELement2 element by 300ms leaving a 50px top margin
let el2 = document.querySelector( "#myElement2" );
Polymer.scroll.toElement( el2, 50, 300 );
```

### Polymer.TextareaAdjust...

Hace que un textarea sea autoajustable en altura conforme se va escribiendo dentro de él.

``` typescript
TextareaAdjust.init( el: TextAreaElement, settings: { maxHeight: number }) : void
```

<span style="font-size:12px">index.js</span>

```javascript
// @ts-check

import { Polymer } from "/node_modules/aw_polymer_3/polymer/polymer-element.js";

// Convert a textarea into auto adjustable with a maximum height of 500px
let textarea = document.querySelector( "#myTextArea" );
Polymer.TextareaAdjust.init( textarea, { maxHeight: 500 });
```

### Polymer.SliderElement...

Hace que un elemento se deslice a través de su elemento padre cuando se hace scroll vertical en la página.

``` typescript
SliderElement.init( el: HTMLElement, settings: { headFixHeight: number, footerFixHeight: number, minWidth: number, marginStart: number }, scrollable?: HTMLElement ) : void
```

<span style="font-size:12px">index.html</span>

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<style>
			header {
				position: fixed;
				top: 0;
				width: 100%;
				left: 0;
				background-color: #333333;
				color: white;
				height: 70px;
			}
			.flex-container {
				position: relative;
				margin-top: 90px;
				display: flex;
				flex-flow: row wrap;
				heigh: 1800px;
			}
			.main {
				position: relative;
				flex-grow: 1;
				flex-basis: 0;
			}
			.container {
				position: relative;
				flex-grow: 0;
				flex-basis: 300px;
			}
		</style>
	</head>
	<body>
		<header>
			HEADER
		</header>
		<div class="flex-container">
			<div class="main">
				Left Column MAIN
			</div>
			<div class="container">
				<div class="slider-element">
					Righ column slider element into container parent when window scroll
				</div>
			</div>
		</div>
		<!-- Only for not chromiun navigators -->
		<script src="/node_modules/aw_webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
		<!-- Only for not chromiun navigators -->
		<script type="module" src="/node_modules/aw_polymer_3/polymer/polymer-element.js"></script>
		<script type="module" src="/index.js"></script>
	</body>
</html>
```

<span style="font-size:12px">index.js</span>

```javascript
// @ts-check

import { Polymer } from "/node_modules/aw_polymer_3/polymer/polymer-element.js";

// The .slider-element element will slide through its parent when the window is scrolled 
// and the top of the window reaches the .slider-element leaving a 20px top margin between
// the top and the slider-element
let headerHeigh = document.querySelector( "header" ).offsetHeigh;
let el = document.querySelector( ".slider-element" );
Polymer.SliderElement.init( el, { headFixHeight: headerHeigh, marginStart: 20 });
```

En este caso, pondremos un ejemplo dond el elemento que queremos que se deslice no dependa del scroll de la página, si no del scroll del elemento main.

<span style="font-size:12px">index.html</span>

```html
<!DOCTYPE html>
<html lang="en">
	<head>
		<style>
			body {
				overflow: hidden;
			}
			header {
				position: relative;
				background-color: #333333;
				color: white;
				height: 70px;
			}
			main {
				position: absolute;
				top: 70px;
				left: 0;
				width: calc(100vh - 70px);
				overflow-x: auto;
			}
			.flex-container {
				position: relative;
				display: flex;
				flex-flow: row wrap;
				heigh: 1800px;
			}
			.main {
				position: relative;
				flex-grow: 1;
				flex-basis: 0;
			}
			.container {
				position: relative;
				flex-grow: 0;
				flex-basis: 300px;
			}
		</style>
	</head>
	<body>
		<header>
			HEADER
		</header>
		<main>
			<div class="flex-container">
				<div class="main">
					Left Column MAIN
				</div>
				<div class="container">
					<div class="slider-element">
						Righ column slider element into container parent when window scroll
					</div>
				</div>
			</div>
		</main>
		<!-- Only for not chromiun navigators -->
		<script src="/node_modules/aw_webcomponents/webcomponentsjs/webcomponents-loader.js"></script>
		<!-- Only for not chromiun navigators -->
		<script type="module" src="/node_modules/aw_polymer_3/polymer/polymer-element.js"></script>
		<script type="module" src="/index.js"></script>
	</body>
</html>
```

<span style="font-size:12px">index.js</span>

```javascript
// @ts-check

import { Polymer } from "/node_modules/aw_polymer_3/polymer/polymer-element.js";

// The .slider-element element will slide through its parent when the window is scrolled 
// and the top of the main element reaches the .slider-element leaving a 0px top margin between
// the top and the slider-element
let el = document.querySelector( ".slider-element" );
let main = document.querySelector( "main" );
Polymer.SliderElement.init( el, {}, main);
```














<p style="text-align: center; padding: 50px 0">
	Nuestro más sincero agradecimiento al equipo de Polymer por crear esta fantástica biblioteca.<br><br>
	<a href="https://www.polymer-project.org/">Polymer Project</a><br>
	<a href="https://polymer-library.polymer-project.org/3.0/docs/about_30">Polymer Library</a><br>
	<a href="https://www.npmjs.com/package/@polymer/polymer">Polymer Original</a>
</p>

<p style="text-align: center; padding: 50px 0">
    <b>Contacto</b><br><br>Manu J. Overa<br><a href="mailto:manu.giralda@gmail.com">manu.giralda@gmail.com</a><br><br>
    <!-- Diseño Web - <a href="https://arismanwebs.es">Arisman Webs</a> -->
</p>



