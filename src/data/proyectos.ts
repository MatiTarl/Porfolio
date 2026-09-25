export type CategoriaId = 'landing' | 'integracion' | 'sistema';

export type Categoria = {
  id: CategoriaId;
  titulo: string;
  descripcion: string;
};

// Orden en el que se muestran las filas. Una categoría sin proyectos no se muestra.
export const categorias: Categoria[] = [
  {
    id: 'landing',
    titulo: 'Landing pages',
    descripcion: 'Sitios institucionales y páginas de producto para negocios.',
  },
  {
    id: 'integracion',
    titulo: 'Integraciones',
    descripcion: 'Conexiones entre sistemas, APIs y servicios externos.',
  },
  {
    id: 'sistema',
    titulo: 'Sistemas a medida',
    descripcion:
      'Aplicaciones desarrolladas para clientes. El código es privado, pero acá está lo que hicimos.',
  },
];

// Un proyecto puede estar formado por varias partes (sitio, dashboard, backend...).
// No todas tienen que ser propias: `propia: false` marca lo que hizo otra
// persona o equipo, para mostrar el proyecto completo sin atribuírselo.
export type Parte = {
  nombre: string;
  descripcion: string;
  tecnologias: string[];
  propia: boolean;
};

export type Proyecto = {
  id: string;
  categoria: CategoriaId;
  titulo: string;
  tipo: string;
  resumen: string;
  descripcion: string;
  caracteristicas: string[];
  // En proyectos con partes, las tecnologías de las partes propias (se muestran en la tarjeta)
  tecnologias: string[];
  partes?: Parte[];
  imagen?: string;
  demo?: string;
  repo?: string;
  // Proyecto de cliente con código privado: no se muestra el botón de código
  privado?: boolean;
};

// Para sumar un proyecto nuevo alcanza con agregar un objeto a esta lista.
// Si no tiene `demo`, la tarjeta se muestra como "Sin demo" (o "Privado")
// y el detalle explica de qué se trata.
export const proyectos: Proyecto[] = [
  {
    id: 'juegos-inflables',
    categoria: 'landing',
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
    categoria: 'landing',
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
    categoria: 'landing',
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
    id: 'con-tecnica',
    categoria: 'landing',
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
    categoria: 'landing',
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
    categoria: 'landing',
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
    categoria: 'landing',
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
    id: 'el-buen-raviol',
    categoria: 'sistema',
    titulo: 'El Buen Raviol',
    tipo: 'Sistema de pedidos online',
    resumen:
      'Tienda online con delivery y panel de administración para una casa de pastas.',
    descripcion:
      'Sistema de pedidos online para una casa de pastas de Mendoza. Los clientes arman su pedido en la tienda, eligen la dirección de entrega en el mapa, pagan con Mercado Pago y siguen el estado del pedido; el local recibe cada pedido nuevo en su panel de administración.',
    caracteristicas: [
      'Catálogo por categorías y carrito de compras',
      'Delivery con selección de dirección en el mapa y costo de envío calculado por distancia',
      'Pago online con Mercado Pago y seguimiento del estado del pedido',
      'Comprobante del pedido descargable en PDF',
      'Panel por sucursal para gestionar productos, categorías y pedidos',
    ],
    tecnologias: ['Next.js', 'TypeScript', 'Tailwind', 'Mercado Pago'],
    partes: [
      {
        nombre: 'Tienda online',
        descripcion:
          'Sitio donde los clientes arman y pagan su pedido. Usa Google Maps para buscar la dirección, OpenRouteService para calcular la distancia de envío y Mercado Pago para el cobro. Muestra el horario de atención y recuerda el pedido pendiente mientras se completa el pago.',
        tecnologias: [
          'Next.js',
          'TypeScript',
          'Tailwind',
          'shadcn/ui',
          'Google Maps',
          'Leaflet',
          'Mercado Pago',
        ],
        propia: true,
      },
      {
        nombre: 'Panel de administración',
        descripcion:
          'Dashboard por sucursal para cargar y editar productos y categorías, y seguir los pedidos por estado (pendiente, en preparación, entregado o cancelado), con aviso sonoro cuando entra un pedido nuevo.',
        tecnologias: ['Next.js', 'TypeScript', 'Tailwind', 'shadcn/ui', 'v0'],
        propia: true,
      },
      {
        nombre: 'Backend',
        descripcion:
          'API REST que gestiona productos, pedidos y pagos, con base de datos PostgreSQL, imágenes en Cloudinary e integración con Mercado Pago.',
        tecnologias: ['Java', 'Spring Boot', 'PostgreSQL', 'Docker'],
        propia: false,
      },
    ],
    privado: true,
  },
  {
    id: 'don-inodoro',
    categoria: 'sistema',
    titulo: 'Don Inodoro',
    tipo: 'Sistema de gestión comercial',
    resumen:
      'Sistema de gestión para un comercio de artículos de limpieza con varias sucursales.',
    descripcion:
      'Sistema de gestión comercial para un negocio de artículos de limpieza con varias sucursales: punto de venta, caja, inventario, proveedores y reportes, con usuarios por rol y alertas en tiempo real.',
    caracteristicas: [
      'Punto de venta con ticket imprimible',
      'Apertura, movimientos y cierre de caja con arqueo',
      'Control de inventario: ingreso de mercadería y ajustes manuales',
      'Gestión de productos, categorías, proveedores y métodos de pago',
      'Historial de ventas y lista de precios para imprimir',
      'Usuarios por rol (administrador y vendedor) en varias sucursales',
      'Alertas de stock bajo en tiempo real',
      'Buscador global y tutorial guiado para nuevos usuarios',
    ],
    tecnologias: ['React', 'TypeScript', 'Vite', 'Tailwind'],
    partes: [
      {
        nombre: 'Frontend',
        descripcion:
          'Toda la interfaz del sistema: punto de venta, caja, inventario, reportes y configuración. Se conecta a la API REST y recibe las alertas en tiempo real por WebSocket.',
        tecnologias: [
          'React',
          'TypeScript',
          'Vite',
          'Tailwind',
          'React Router',
          'STOMP / SockJS',
        ],
        propia: true,
      },
      {
        nombre: 'Backend',
        descripcion:
          'API REST y servidor WebSocket que manejan los datos, la autenticación y las alertas del sistema.',
        tecnologias: [],
        propia: false,
      },
    ],
    imagen: '/DonInodoroPage.png',
    privado: true,
  },
];
