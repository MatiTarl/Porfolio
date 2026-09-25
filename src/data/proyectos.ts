export type Proyecto = {
  id: string;
  titulo: string;
  tipo: string;
  resumen: string;
  descripcion: string;
  caracteristicas: string[];
  tecnologias: string[];
  imagen?: string;
  demo?: string;
  repo?: string;
};

// Para sumar un proyecto nuevo alcanza con agregar un objeto a esta lista.
// Si no tiene `demo`, la tarjeta se muestra como "Sin demo" y el detalle
// explica de qué se trata.
export const proyectos: Proyecto[] = [
  {
    id: 'juegos-inflables',
    titulo: 'Juegos Inflables',
    tipo: 'Sitio para cliente',
    resumen:
      'Sitio institucional para una fábrica de juegos inflables y mecánicos.',
    descripcion:
      'Sitio web para una empresa familiar de Mendoza con más de 20 años fabricando juegos inflables y mecánicos. Presenta el catálogo de productos (toros mecánicos, toboganes, castillos, carreras de obstáculos), la historia de la empresa y canales de contacto directo.',
    caracteristicas: [
      'Portada a pantalla completa con acceso a los productos',
      'Catálogo de productos con vista de detalle',
      'Sección "Nosotros" con la historia de la empresa',
      'Botón flotante de WhatsApp para consultas',
    ],
    tecnologias: ['Next.js', 'React', 'Tailwind'],
    imagen: '/InflablesPage.png',
    demo: 'https://texasbull.vercel.app',
    repo: 'https://github.com/MatiTarl/ToroMecanico',
  },
  {
    id: 'gastify-cloud',
    titulo: 'Gastify Cloud',
    tipo: 'Landing de producto',
    resumen:
      'Landing de un sistema de gestión para distribuidoras de gas licuado.',
    descripcion:
      'Landing page para presentar un software de gestión de inventario pensado para distribuidoras de gas licuado. Explica cada módulo del sistema y los planes disponibles.',
    caracteristicas: [
      'Carga de inventario inicial en bodega y camiones',
      'Movimientos de stock: lleno, vacío, fallado y prestado',
      'Registro de ventas, ajustes y resúmenes diarios y mensuales',
      'Gestión de conductores, vehículos y usuarios con roles',
    ],
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    imagen: '/GastifyPage.png',
    demo: 'https://gastify-cloud.vercel.app',
    repo: 'https://github.com/MatiTarl/GastifyCloud',
  },
  {
    id: 'ecommy',
    titulo: 'eCommy Store',
    tipo: 'Landing de producto',
    resumen:
      'Landing de una tienda online propia para restaurantes, sin comisiones.',
    descripcion:
      'Landing page para eCommy Store, una solución de pedidos directos para restaurantes: en lugar de depender de apps de delivery con comisión, cada negocio tiene su propia tienda online y app de entregas.',
    caracteristicas: [
      'Presentación de planes y beneficios',
      'Detalle de funciones: productos, categorías, órdenes y estadísticas',
      'Pasarelas de pago (Webpay o transferencia)',
      'Diseño optimizado para móviles',
    ],
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    imagen: '/EcconomyPage.png',
    demo: 'https://justo-blush.vercel.app',
    repo: 'https://github.com/MatiTarl/Justo',
  },
  {
    id: 'trendy-shop',
    titulo: 'Trendy Shop',
    tipo: 'E-commerce',
    resumen: 'Tienda de ropa y accesorios con categorías, carrito y usuarios.',
    descripcion:
      'Frontend de un e-commerce de moda. Organiza el catálogo por categorías y cuenta con carrito, inicio de sesión y suscripción al newsletter.',
    caracteristicas: [
      'Catálogo por categorías: prendas, accesorios, calzado y bolsos',
      'Carrito de compras',
      'Inicio de sesión y registro de usuarios',
      'Suscripción al boletín de novedades',
    ],
    tecnologias: ['React', 'Vite', 'CSS'],
    imagen: '/TrendyShop.png',
    demo: 'https://trendy-web-lemon.vercel.app',
  },
  {
    id: 'con-tecnica',
    titulo: 'Con-Técnica',
    tipo: 'Sitio para cliente',
    resumen: 'Sitio de una empresa de servicios de electricidad industrial.',
    descripcion:
      'Sitio institucional para Con-Técnica, empresa que brinda servicios integrales en todas las áreas de la electricidad industrial. Presenta los servicios, los motivos para elegirlos y los datos de contacto. Estuvo publicado en ingcontecnica.com.',
    caracteristicas: [
      'Slider principal con animaciones de entrada',
      'Sección de servicios ofrecidos',
      'Sección "¿Por qué elegirnos?"',
      'Diseño responsive',
    ],
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
    imagen: '/IngenieriaPage.png',
    repo: 'https://github.com/MatiTarl/enginers-maq',
  },
  {
    id: 'fernandes-heine',
    titulo: 'Fernandes & Heine',
    tipo: 'Sitio para cliente',
    resumen: 'Sitio de un estudio jurídico de derecho internacional privado.',
    descripcion:
      'Sitio para un estudio de abogados que ofrece soluciones legales a clientes en Brasil, Estados Unidos y la Unión Europea, trabajando como oficina virtual.',
    caracteristicas: [
      'Presentación del estudio y su forma de trabajo',
      'Áreas de actuación: documentos, familia y más',
      'Sección de contacto y consultas',
      'Carrusel de portada',
    ],
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
    imagen: '/abogadoPage.png',
    demo: 'https://abogado-page.vercel.app',
    repo: 'https://github.com/MatiTarl/AbogadoPage',
  },
  {
    id: 'hubdark-kitchen',
    titulo: 'HubDark Kitchen',
    tipo: 'Landing',
    resumen:
      'Landing para sumar operadores a una franquicia de cocinas oscuras.',
    descripcion:
      'Landing page para captar operadores asociados de una franquicia de dark kitchens: personas que transforman su casa en un punto de producción de comida para delivery.',
    caracteristicas: [
      'Propuesta de valor y llamado a postularse',
      'Detalle del plan: kit inicial, inversión y forma de pago',
      'Sección "Cómo funciona"',
      'Páginas de términos, privacidad y reembolso',
    ],
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap', 'jQuery'],
    imagen: '/HubDarkPage.png',
    demo: 'https://delibery-page-2.vercel.app',
    repo: 'https://github.com/MatiTarl/Delibery-Page-2',
  },
  {
    id: 'mibarrio-delivery',
    titulo: 'MiBarrio Delivery',
    tipo: 'Landing',
    resumen: 'Landing de un servicio de compras de supermercado a domicilio.',
    descripcion:
      'Landing page para MiBarrio Delivery, un servicio que lleva las compras del supermercado a la puerta de casa con foco en la relación precio-calidad.',
    caracteristicas: [
      'Presentación del servicio y sus beneficios',
      'Carrusel de ofertas',
      'Sección "Cómo funciona"',
      'Páginas de términos, privacidad y reembolso',
    ],
    tecnologias: ['HTML', 'CSS', 'JavaScript', 'Bootstrap'],
    imagen: '/MiBarrioPage.png',
    demo: 'https://delivery-page-khaki.vercel.app',
    repo: 'https://github.com/MatiTarl/Delivery-page-',
  },
  {
    id: 'pi-pokemon',
    titulo: 'Pokémon App',
    tipo: 'Full Stack',
    resumen: 'SPA full stack para buscar, filtrar y crear pokemones.',
    descripcion:
      'Proyecto individual del bootcamp de Henry. Una Single Page Application que consume la PokeAPI y la combina con una base de datos propia, con un backend en Express que expone las rutas para consultar y crear pokemones.',
    caracteristicas: [
      'Búsqueda de pokemones por nombre',
      'Filtros y ordenamiento de resultados',
      'Vista de detalle de cada pokemon',
      'Formulario para crear pokemones y guardarlos en la base de datos',
      'API REST propia: /pokemons, /pokemons/:id y /types',
    ],
    tecnologias: [
      'React',
      'Redux',
      'Node.js',
      'Express',
      'Sequelize',
      'PostgreSQL',
    ],
    repo: 'https://github.com/MatiTarl/PI-Pokemon',
  },
  {
    id: 'rick-and-morty',
    titulo: 'Rick and Morty App',
    tipo: 'Full Stack',
    resumen:
      'App para explorar personajes de Rick and Morty y guardar favoritos.',
    descripcion:
      'Aplicación desarrollada en el bootcamp de Henry, con cliente en React y servidor en Express. Permite buscar personajes, ver su detalle y armar una lista de favoritos, con un login simple.',
    caracteristicas: [
      'Búsqueda de personajes y vista de detalle',
      'Lista de favoritos manejada con Redux',
      'Login con validación de formulario',
      'Servidor Express con tests en Jest y Supertest',
    ],
    tecnologias: ['React', 'Redux', 'Node.js', 'Express', 'Jest'],
    repo: 'https://github.com/MatiTarl/Rick_and_Morty_FT38b',
  },
  {
    id: 'nest-tareas',
    titulo: 'API de Tareas',
    tipo: 'Backend',
    resumen: 'API REST de tareas con NestJS, TypeORM y PostgreSQL.',
    descripcion:
      'API REST para gestionar tareas, construida con NestJS siguiendo su estructura de módulos, controladores y servicios, con persistencia en PostgreSQL a través de TypeORM.',
    caracteristicas: [
      'CRUD completo: listar, crear, actualizar y eliminar tareas',
      'Validación de datos con DTOs y class-validator',
      'Entidades y conexión a PostgreSQL con TypeORM',
    ],
    tecnologias: ['NestJS', 'TypeScript', 'TypeORM', 'PostgreSQL'],
    repo: 'https://github.com/MatiTarl/NestJs-TypeORM',
  },
];
