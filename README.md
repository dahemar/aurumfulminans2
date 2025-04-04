# Aurumfulminans - Tienda de Joyas Artesanales

Una elegante tienda en línea para joyas artesanales, construida con HTML, CSS y Snipcart para el manejo del carrito de compras y pagos.

## Características

- Diseño moderno y responsivo
- Catálogo de productos con opciones personalizables
- Carrito de compras integrado con Snipcart
- Procesamiento de pagos seguro
- Formulario de contacto
- Sección "Sobre Nosotros"

## Estructura del Proyecto

```
aurumfulminans/
├── images/           # Imágenes de productos y recursos
├── index.html        # Página principal
├── styles.css        # Estilos CSS
└── README.md         # Este archivo
```

## Configuración

1. Clona este repositorio
2. Crea una cuenta en [Snipcart](https://snipcart.com)
3. Obtén tu API key de Snipcart
4. Reemplaza `tu-api-key-aqui` en el archivo `index.html` con tu API key real
5. Agrega tus imágenes de productos en el directorio `images/`

## Personalización

### Agregar Productos

Para agregar un nuevo producto, copia y modifica el siguiente bloque en `index.html`:

```html
<div class="product-card">
    <img src="images/tu-imagen.jpg" alt="Nombre del Producto">
    <h3>Nombre del Producto</h3>
    <p>Descripción del producto</p>
    <div class="product-options">
        <select class="snipcart-item-custom-field" name="tamaño">
            <option value="opcion1">Opción 1 - $XX.XX</option>
            <option value="opcion2">Opción 2 - $XX.XX</option>
        </select>
        <select class="snipcart-item-custom-field" name="material">
            <option value="material1">Material 1</option>
            <option value="material2">Material 2</option>
        </select>
    </div>
    <button class="snipcart-add-item"
        data-item-id="id-unico"
        data-item-price="XX.XX"
        data-item-description="Descripción del producto"
        data-item-image="images/tu-imagen.jpg"
        data-item-name="Nombre del Producto">
        Agregar al carrito
    </button>
</div>
```

### Modificar Estilos

Los estilos se pueden personalizar en el archivo `styles.css`. Las variables principales se encuentran en la sección `:root`:

```css
:root {
    --primary-color: #1a1a1a;
    --secondary-color: #c4a747;
    --text-color: #333;
    --background-color: #fff;
    --gray-light: #f5f5f5;
    --gray-medium: #e0e0e0;
}
```

## Despliegue

Este sitio web es estático y puede ser desplegado en cualquier servicio de hosting estático como:
- GitHub Pages
- Netlify
- Vercel
- Amazon S3
- Cualquier hosting web tradicional

## Licencia

Todos los derechos reservados © 2024 Aurumfulminans
