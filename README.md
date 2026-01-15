# Barra de Navegación - Proyecto React

Proyecto de barra de navegación responsive desarrollado con React, Vite, Tailwind CSS y Motion (Framer Motion).

## Características

- ✅ Barra de navegación responsive con diseño adaptable
- ✅ Menú móvil con animaciones suaves
- ✅ Banner principal con múltiples animaciones
- ✅ Diseño moderno con Tailwind CSS
- ✅ Animaciones implementadas con Motion
- ✅ Código completamente documentado
- ✅ Containerizado con Docker

## Animaciones Implementadas

1. **Menú Responsivo**: Animación de deslizamiento hacia abajo con fade-in/fade-out
2. **Banner Principal**:
   - Fade-in para el contenido de texto
   - Animación de escala para el ícono central
   - Slide-up para el botón de acción
   - Rotación continua del círculo de fondo
   - Animación hover en las tarjetas de características
   - Aparición secuencial de las tarjetas (stagger effect)

## Tecnologías Utilizadas

- **React 19.2.0** - Librería de JavaScript para construir interfaces de usuario
- **Vite 7.2.4** - Herramienta de construcción rápida
- **Tailwind CSS 4** - Framework CSS utility-first
- **Motion 12.26.2** - Librería de animaciones (Framer Motion)
- **React Icons 5.5.0** - Iconos para React
- **Docker** - Containerización de la aplicación

## Estructura del Proyecto

```
barnav/
├── src/
│   ├── componentes/
│   │   ├── Navbar.jsx          # Componente de barra de navegación
│   │   ├── MenuResponsivo.jsx  # Componente de menú móvil
│   │   └── Banner.jsx          # Componente de banner principal
│   ├── data/
│   │   └── data.js             # Datos del menú de navegación
│   ├── App.jsx                 # Componente principal
│   ├── main.jsx                # Punto de entrada
│   └── index.css               # Estilos globales con Tailwind
├── Dockerfile                   # Configuración de Docker
├── .dockerignore               # Archivos ignorados por Docker
├── package.json                # Dependencias del proyecto
└── vite.config.js              # Configuración de Vite
```

## Instalación y Ejecución

### Modo Desarrollo

1. Clonar el repositorio:
```bash
git clone <url-del-repositorio>
cd barnav
```

2. Instalar dependencias:
```bash
npm install
```

3. Ejecutar en modo desarrollo:
```bash
npm run dev
```

4. Abrir en el navegador: `http://localhost:5173`

### Construcción para Producción

```bash
npm run build
```

Los archivos optimizados se generarán en la carpeta `dist/`.

## Despliegue con Docker

### Construir la imagen de Docker

```bash
docker build -t barnav-app .
```

### Ejecutar el contenedor

```bash
docker run -p 8080:80 barnav-app
```

### Acceder a la aplicación

Abrir el navegador en: `http://localhost:8080`

## Componentes Principales

### Navbar
Barra de navegación principal que incluye:
- Logo del sitio
- Menú de navegación (oculto en móvil)
- Iconos de búsqueda y carrito
- Botón de "Ingresar"
- Menú hamburguesa para dispositivos móviles

### MenuResponsivo
Menú desplegable animado para dispositivos móviles con:
- Animaciones de entrada y salida
- Enlaces del menú centrados
- Transiciones suaves

### Banner
Banner principal del sitio con:
- Sección de bienvenida con texto animado
- Ícono central con animación de escala
- Botón de llamada a la acción
- Tarjetas de características con animaciones hover
- Diseño responsive de 2 columnas

## Personalización

### Colores
Los colores principales se pueden modificar en `src/index.css`:
```css
--color-primary: #ff8901;
--color-secondary: #fb923c;
```

### Enlaces del Menú
Los enlaces se pueden modificar en `src/data/data.js`:
```javascript
const navbarLinks = [
  { id: 1, name: "Home", title: "Inicio", url: "/home" },
  // Agregar más enlaces aquí
];
```

## Notas de Desarrollo

- El código está completamente documentado con comentarios en español
- Todos los componentes son funcionales y utilizan hooks de React
- Las animaciones son performantes y no afectan el rendimiento
- El diseño es completamente responsive (móvil, tablet, desktop)
- Se utiliza Tailwind CSS con configuración personalizada
