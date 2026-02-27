# Nejigiku Tools

Panel web de herramientas internas. Actualmente incluye **Reference Index Manager** (gestor de referencias con importación/exportación Excel/TSV).

[![Estado](https://img.shields.io/badge/estado-activo-16a34a)](https://github.com/nelsonjhongp/nejigiku-tools)
[![Stack](https://img.shields.io/badge/stack-HTML%20%7C%20CSS%20%7C%20JS-2563eb)](https://github.com/nelsonjhongp/nejigiku-tools)
[![Último commit](https://img.shields.io/github/last-commit/nelsonjhongp/nejigiku-tools)](https://github.com/nelsonjhongp/nejigiku-tools/commits/main)
[![Issues](https://img.shields.io/github/issues/nelsonjhongp/nejigiku-tools)](https://github.com/nelsonjhongp/nejigiku-tools/issues)

## Vista rápida

- Catálogo visual de herramientas con placeholders listos para crecer
- Tema claro/oscuro compartido entre panel y herramientas
- Reference Index Manager con import/export y edición rápida de referencias

## Estado actual

- UI con tema claro/oscuro global (`nejigiku_theme`)
- Catálogo tipo tarjetas (2 por fila en desktop)
- Tarjetas placeholder para futuras herramientas
- Navegación por título/miniatura (descripción seleccionable)

## Herramientas

| Herramienta | Estado | Ruta |
|---|---|---|
| Reference Index Manager | Activa | `tools/reference-index-manager/` |
| Próxima herramienta | Placeholder | `index.html` |
| Próxima herramienta | Placeholder | `index.html` |
| Próxima herramienta | Placeholder | `index.html` |

## Reference Index Manager

Funciones principales:

- Importar desde Excel (`.xlsx`, `.xls`) o TSV
- Exportar a Excel/TSV
- Buscar y filtrar referencias
- Insertar, editar, mover y eliminar filas
- Renumeración automática de `Ref`
- Copiar entrada completa, título o DOI
- Ocultar/mostrar columnas
- **Ajuste de ancho de columnas por arrastre**
  - Arrastrar separador en encabezado
  - Doble clic para restaurar ancho por defecto

## Estructura del proyecto

```text
assets/
  css/theme.css
  js/app.js
  img/tool-placeholder.svg
tools/
  reference-index-manager/
    index.html
index.html
reference-index-manager.html  (redirección a tools/reference-index-manager/)
```

## Uso local

1. Clona el repo
2. Abre `index.html` en tu navegador
3. Entra a la herramienta desde el título o la miniatura

> Nota: la importación/exportación Excel usa SheetJS desde CDN. Si no hay internet, usa flujo TSV.

## Cómo agregar una nueva herramienta

1. Crea carpeta `tools/nueva-herramienta/` con su `index.html`
2. En `index.html` principal, reemplaza un placeholder por la tarjeta real
3. Apunta título y miniatura a `tools/nueva-herramienta/`

## Roadmap sugerido

- Registro central de herramientas (JSON)
- Generación automática de tarjetas del catálogo
- Tests UI básicos para flujos críticos

---

Hecho por Nelson / Nejigiku.
