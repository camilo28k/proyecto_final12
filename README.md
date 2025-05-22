Documentación Principal del Proyecto: Plataforma de Campañas de Donaciones
Descripción General
Este proyecto es una plataforma web que permite la gestión y participación en campañas de donaciones organizadas en distintas secciones temáticas. Está desarrollada con una buena arquitectura, separando claramente el frontend, backend y la persistencia de datos.

Tecnologías Utilizadas
Backend
Framework: NestJS — Framework progresivo para Node.js, orientado a arquitecturas modulares y escalables.

ORM: Prisma — ORM moderno para TypeScript, usado para modelar la base de datos y facilitar las consultas.

Base de Datos: PostgreSQL — Motor de base de datos relacional, utilizado para almacenar toda la información de campañas, actividades, usuarios, etc.

Frontend
Framework: Next.js — Framework de React que permite renderizado híbrido (SSR/SSG) y optimización del rendimiento.

Estado global: Zustand (o alternativa moderna) para la gestión de estado centralizado en componentes clave.

Estilos: Tailwind CSS — Framework de utilidades para estilos rápidos y personalizables.


Estructura General del Proyecto
Backend (proyecto-backend)
Módulos organizados por dominio (ej: campañas, actividades, usuarios).

Prisma utilizado para definir modelos, relaciones y migraciones.

Controladores, servicios e interfaces bien separados siguiendo el patrón MVC de NestJS.

Frontend (proyecto-frontend)
Páginas dinámicas para cada sección de campañas (Educación, Salud, Arte, etc).

Componentes reutilizables para formularios, tarjetas, modales, etc.

Vista principal (Main Section) que muestra actividades generales.

Consumo de API REST o GraphQL expuesto desde el backend.

Secciones Principales del Sistema
Secciones de Campañas:

Emprendimiento

Salud

Educación

Arte

(Otra personalizada si se desea)

Cada sección agrupa campañas con sus datos: título, descripción, meta, monto recaudado, imagen, etc.

Actividades Generales (Main Section):

Representan eventos, objetivos o iniciativas globales.

Se gestionan desde la tabla Activity en la base de datos.

Se muestran de forma transversal en la vista principal del frontend.

