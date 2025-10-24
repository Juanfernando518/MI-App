# Práctica 1 – Explorando los Estándares Web con HTML, CSS y JavaScript  

**Asignatura:** Programación y Plataformas Web  
**Unidad:** 1.2 – Estándares Web  
**Estudiante:** David Villa 
**Repositorio:** [https://github.com/Davidvillahdz/icc-ppw-u1-mi_pagina_web.git]  
**Página desplegada (GitHub Pages):** [https://pablot18.github.io/icc-ppw-u1-miPrimeraPapina/](https://pablot18.github.io/icc-ppw-u1-miPrimeraPapina/)  

---

## 🧱 Estructura HTML utilizada

| **Componente**       | **Descripción**                     | **Implementación**                       |
|-----------------------|-------------------------------------|------------------------------------------|
| `<!DOCTYPE html>`     | Declaración del documento HTML5     | Línea 1                                  |
| `<html lang="es">`    | Idioma del documento                | Español                                  |
| `<header>`            | Encabezado principal                | Contiene `<h1>` y `<h2>`                 |
| `<section>`           | Agrupa contenido principal          | Dos secciones con `<h2>`                 |
| `<table>`             | Muestra los elementos estudiados    | Tres filas con `<th>` y `<td>`           |
| `<footer>`            | Pie de página                       | Nombre del estudiante y asignatura       |

---

## 🧩 Nuevas etiquetas exploradas

| **Elemento** | **Etiqueta HTML** | **Descripción** | **Propósito en el Proyecto** | **Código HTML** |
|---------------|------------------|------------------|-------------------------------|------------------|
| Imagen | `<img />` | Muestra una imagen referenciada por una URL o ruta local. | Se usó para mostrar el Logo de HTML5 en la sección *Estructura de Tablas*. | `<img src="URL_DEL_LOGO" alt="Logo de HTML5" class="responsive-img" />` |
| Botón | `<button>` | Elemento interactivo que ejecuta una acción. | Se usó para crear los acordeones que ocultan y muestran el contenido de cada sección, activado por *Scripts.js*. | `<button class="accordion">Mostrar/Ocultar Contenido</button>` |

---

### 💻 Ejemplo de `<img>`

```html
<h3>Ejemplo de &lt;img&gt;</h3>
<img 
    src="https://upload.wikimedia.org/wikipedia/commons/6/61/HTML5_logo_and_wordmark.svg" 
    alt="Logo de HTML5" 
    class="responsive-img" 
/>
<p>El logo anterior es un ejemplo de cómo se inserta una imagen...</p>
![Vista previa de la página](captura-pagina.png)
