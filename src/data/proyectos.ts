export type CategoriaId = 'landing' | 'integracion' | 'sistema';

export type Categoria = {
  id: CategoriaId;
  titulo: string;
  descripcion: string;
};

// Orden en el que se muestran las filas. Una categoría sin proyectos no se muestra.
export const categorias: Categoria[] = [
  {
    id: 'integracion',
    titulo: 'Integraciones',
    descripcion:
      'Conexiones entre CRMs, ERPs y canales de mensajería para automatizar procesos de negocio. El código es de clientes, así que acá va qué se hizo y la lógica detrás.',
  },
  {
    id: 'sistema',
    titulo: 'Sistemas a medida',
    descripcion:
      'Aplicaciones desarrolladas para clientes. El código es privado, pero acá está lo que hicimos.',
  },
  {
    id: 'landing',
    titulo: 'Landing pages',
    descripcion: 'Sitios institucionales y páginas de producto para negocios.',
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
  // Demo propia de esta parte, cuando el proyecto tiene más de una
  demo?: string;
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
  // Sistemas que conecta (se dibuja como diagrama cuando no hay captura)
  flujo?: { sistemas: string[]; bidireccional?: boolean };
  // Pasos de la lógica, para proyectos que no se pueden mostrar con capturas
  logica?: string[];
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
    id: 'dashboard-gastronomico',
    categoria: 'sistema',
    titulo: 'Dashboard gastronómico',
    tipo: 'Plataforma de pedidos online',
    resumen:
      'Tienda online con delivery y panel de administración para un negocio gastronómico.',
    descripcion:
      'Plataforma de pedidos online para un negocio de pastas artesanales: los clientes compran desde la tienda, pagan con Mercado Pago y siguen su pedido, y el negocio opera el día a día desde un panel de administración multi-sucursal. La demo usa una marca y datos ficticios, y el pago es simulado.',
    caracteristicas: [
      'Catálogo por categorías con buscador y carrito persistente',
      'Checkout con validación de datos y costo de envío calculado por distancia',
      'Pago con Mercado Pago y seguimiento del estado del pedido',
      'Recibo del pedido descargable en PDF',
      'Panel multi-sucursal para gestionar productos, categorías y pedidos',
      'Alarma sonora en el panel cuando entra un pedido pagado',
    ],
    tecnologias: ['Next.js', 'TypeScript', 'Tailwind', 'Mercado Pago'],
    partes: [
      {
        nombre: 'Tienda online',
        descripcion:
          'Sitio donde los clientes arman y pagan su pedido: catálogo filtrable, carrito persistente, checkout validado, pago con Mercado Pago (aprobado, pendiente o rechazado, con opción de reintentar), recibo en PDF, banner para retomar pedidos sin pagar e indicador de horario de atención.',
        tecnologias: [
          'Next.js',
          'React',
          'TypeScript',
          'Tailwind',
          'shadcn/ui',
          'Mercado Pago',
          'jsPDF',
        ],
        propia: true,
        demo: 'https://tienda-dun-six.vercel.app',
      },
      {
        nombre: 'Panel de administración',
        descripcion:
          'Dashboard con selección de sucursal para dar de alta, editar y habilitar productos y categorías (con carga de imágenes), y gestionar pedidos con búsqueda, detalle completo y cambio de estado. Suena una alarma cuando se aprueba el pago de un pedido nuevo.',
        tecnologias: [
          'Next.js',
          'React',
          'TypeScript',
          'Tailwind',
          'shadcn/ui',
        ],
        propia: true,
        demo: 'https://panel-admin-opal-xi.vercel.app',
      },
      {
        nombre: 'Backend',
        descripcion:
          'API REST en capas que calcula precios y envíos en el servidor, crea las preferencias de pago y recibe el webhook de Mercado Pago para actualizar cada pedido. Guarda las imágenes en Cloudinary.',
        tecnologias: [
          'Java',
          'Spring Boot',
          'PostgreSQL',
          'Mercado Pago',
          'Docker',
        ],
        propia: false,
      },
      {
        nombre: 'API mock para la demo',
        descripcion:
          'Servidor que replica el contrato de la API real con pagos simulados, para publicar la demo sin backend.',
        tecnologias: ['Node.js', 'json-server'],
        propia: false,
      },
    ],
    imagen: '/DashboardGastronomicoPage.png',
    demo: 'https://tienda-dun-six.vercel.app',
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
  {
    id: 'whatsapp-pipedrive',
    categoria: 'integracion',
    titulo: 'Canal de WhatsApp para Pipedrive',
    tipo: 'Integración de mensajería',
    resumen:
      'App que suma WhatsApp como canal dentro de Pipedrive para atender y vender desde el CRM.',
    descripcion:
      'Aplicación que agrega WhatsApp como canal de mensajería de Pipedrive: los comerciales chatean con los clientes sin salir del CRM y cada conversación queda asociada a la persona y al trato. En algunas implementaciones un chatbot atiende primero, junta los datos del cliente y deriva a un comercial cuando hace falta. Se adaptó e implementó para varias empresas.',
    logica: [
      'El cliente escribe por WhatsApp y Twilio envía el mensaje a un webhook de la integración.',
      'La integración busca a la persona en Pipedrive por su teléfono (o la crea) y guarda el mensaje junto con sus archivos adjuntos.',
      'Si el chatbot está activo, responde y recopila los datos; cuando el cliente pide un asesor, la conversación pasa a "humano" y se crea un trato en el embudo de ventas.',
      'El trato se marca con una etiqueta de mensaje nuevo para que el comercial lo vea.',
      'El comercial responde desde el panel de chat dentro de Pipedrive y la integración envía la respuesta por WhatsApp a través de Twilio.',
      'Para iniciar conversaciones se usan plantillas aprobadas de WhatsApp, con envío individual o masivo.',
    ],
    caracteristicas: [
      'App de Pipedrive instalable con OAuth 2.0 y canal de mensajería propio',
      'Estado de la conversación (bot, humano o finalizada) guardado en un campo de Pipedrive',
      'Historial de mensajes en Azure Table Storage y archivos en Azure Blob Storage',
      'Control de pedidos duplicados para no enviar un mensaje dos veces',
      'Deploy continuo en Azure con GitHub Actions',
    ],
    tecnologias: [
      'Twilio',
      'Pipedrive API',
      'Node.js',
      'Express',
      'Azure',
      'GitHub Actions',
    ],
    flujo: {
      sistemas: ['WhatsApp (Twilio)', 'Pipedrive'],
      bidireccional: true,
    },
    privado: true,
  },
  {
    id: 'hubspot-odoo',
    categoria: 'integracion',
    titulo: 'Sincronización HubSpot y Odoo',
    tipo: 'Integración CRM – ERP',
    resumen:
      'Mantiene sincronizados productos, negocios y precios entre HubSpot y Odoo.',
    descripcion:
      'Integración entre el CRM (HubSpot) y el ERP (Odoo) de una empresa: el catálogo de productos se mantiene al día en HubSpot y los negocios que se ganan en HubSpot pasan a Odoo con el cliente y sus precios, sin carga manual.',
    logica: [
      'Cada hora se leen los productos de Odoo y se crean o actualizan en HubSpot, procesándolos en lotes en paralelo.',
      'Cada minuto se buscan los negocios ganados en HubSpot que todavía no se procesaron.',
      'Por cada negocio se busca al cliente en Odoo por CUIT o por nombre; si no existe, se crea.',
      'Se toma la lista de precios del cliente en Odoo y se sincronizan los precios negociados con los productos del negocio.',
      'El negocio se marca como procesado en HubSpot para no duplicarlo en la siguiente ejecución.',
    ],
    caracteristicas: [
      'Tareas programadas con Azure Functions (cada 30 segundos, cada minuto y cada hora)',
      'Comunicación con Odoo por XML-RPC',
      'API oficial de HubSpot: negocios, line items, contactos y empresas',
    ],
    tecnologias: [
      'HubSpot API',
      'Odoo (XML-RPC)',
      'Node.js',
      'Azure Functions',
    ],
    flujo: { sistemas: ['HubSpot', 'Odoo'], bidireccional: true },
    privado: true,
  },
  {
    id: 'hubspot-tango',
    categoria: 'integracion',
    titulo: 'Pedidos de HubSpot a Tango',
    tipo: 'Integración CRM – ERP',
    resumen:
      'Convierte los tratos ganados en HubSpot en pedidos del sistema de gestión Tango.',
    descripcion:
      'Automatización que lleva las ventas cerradas en HubSpot al sistema de gestión Tango, para que el equipo administrativo no tenga que cargar los pedidos a mano.',
    logica: [
      'Cada hora se consultan los tratos ganados de los tres embudos de venta configurados.',
      'Se filtran los que todavía no tienen un pedido asociado en Tango.',
      'Por cada trato se arma y se crea el pedido en Tango.',
      'El número de pedido que devuelve Tango se guarda en el trato de HubSpot, lo que evita duplicados y deja la trazabilidad entre los dos sistemas.',
    ],
    caracteristicas: [
      'Tarea programada con Azure Functions',
      'Integración con las APIs de HubSpot y de Tango',
    ],
    tecnologias: ['HubSpot API', 'Tango API', 'Node.js', 'Azure Functions'],
    flujo: { sistemas: ['HubSpot', 'Tango'] },
    privado: true,
  },
  {
    id: 'bokun-pipedrive',
    categoria: 'integracion',
    titulo: 'Reservas de Bokun a Pipedrive',
    tipo: 'Integración de reservas',
    resumen:
      'Cada reserva de excursiones en Bokun crea o actualiza el cliente y el trato en Pipedrive.',
    descripcion:
      'Integración para una empresa de turismo: las reservas que entran por Bokun (plataforma de venta de excursiones) se registran automáticamente en Pipedrive con todos sus datos, para que el equipo comercial haga el seguimiento desde el CRM. Desarrollada en equipo con otro desarrollador.',
    logica: [
      'Bokun avisa de cada reserva nueva a un webhook de la integración.',
      'Se normalizan los datos: montos y moneda, fechas, noches, descuentos y cantidad de pasajeros adultos y menores.',
      'Se busca a la persona en Pipedrive por email, después por teléfono y por último por nombre; si no existe se crea, y si le faltan datos se completan.',
      'Se crea el trato con los datos de la reserva en campos personalizados, incluida la nacionalidad convertida a las opciones del CRM.',
    ],
    caracteristicas: [
      'Comparación de teléfonos normalizados contra todos los números del contacto',
      'Nacionalidad mapeada desde códigos ISO o desde el nombre en español',
      'Deploy continuo en Azure Functions con GitHub Actions',
    ],
    tecnologias: ['Bokun', 'Pipedrive API', 'Node.js', 'Azure Functions'],
    flujo: { sistemas: ['Bokun', 'Pipedrive'] },
    privado: true,
  },
  {
    id: 'otasync-pipedrive',
    categoria: 'integracion',
    titulo: 'Reservas de alojamiento a Pipedrive',
    tipo: 'Integración de reservas',
    resumen:
      'Las reservas del channel manager llegan a Pipedrive como tratos, con un control diario de faltantes.',
    descripcion:
      'Integración para una empresa de turismo que conecta su channel manager (OtaSync), donde se centralizan las reservas de alojamiento de canales como Booking.com, con Pipedrive.',
    logica: [
      'Cada reserva nueva llega por webhook y queda registrada para no procesarla dos veces.',
      'Se busca o crea la persona y se crea el trato, asignado a un comercial por rotación.',
      'Se busca o crea el producto que corresponde a lo reservado y se adjunta al trato con su precio.',
      'Si la reserva viene de Booking.com, el trato se etiqueta como tal.',
      'Todos los días un proceso compara las reservas del channel manager con Pipedrive (por ID de reserva y por nombre) y recupera las que faltan, según estén activas, pasadas o canceladas.',
    ],
    caracteristicas: [
      'Webhook y tarea diaria de reparación en Azure Functions',
      'Registro persistente de reservas procesadas en Azure Blob Storage',
      'Doble verificación (ID y nombre) para evitar duplicados',
    ],
    tecnologias: ['OtaSync API', 'Pipedrive API', 'Node.js', 'Azure Functions'],
    flujo: { sistemas: ['OtaSync', 'Pipedrive'] },
    privado: true,
  },
  {
    id: 'chat-pipedrive',
    categoria: 'integracion',
    titulo: 'Chat web a Pipedrive',
    tipo: 'Captación de leads',
    resumen:
      'Un chat en el sitio web que convierte cada conversación en un trato en Pipedrive.',
    descripcion:
      'Chat para el sitio web de una empresa que junta los datos de cada visitante y los carga en Pipedrive como un lead listo para trabajar, con toda la conversación y un comercial asignado.',
    logica: [
      'El visitante conversa con el chat del sitio, que junta sus datos y los de su empresa.',
      'Al terminar, el chat envía la información a un webhook en Azure Functions.',
      'Se asigna un comercial por sorteo entre los del equipo.',
      'Se busca o crea la organización y la persona en Pipedrive, y se crea el trato.',
      'El historial completo del chat se guarda como una nota vinculada al trato.',
    ],
    caracteristicas: [
      'Chat en HTML servido por la misma función',
      'Creación de organización, persona, trato y nota en un solo flujo',
    ],
    tecnologias: ['Pipedrive API', 'Node.js', 'Azure Functions', 'HTML'],
    flujo: { sistemas: ['Chat web', 'Pipedrive'] },
    privado: true,
  },
  {
    id: 'hubspot-contactos',
    categoria: 'integracion',
    titulo: 'Control de contactos en HubSpot',
    tipo: 'Automatización de CRM',
    resumen:
      'Revisa cada hora los contactos nuevos y les crea y asocia la empresa que falta.',
    descripcion:
      'Automatización que mantiene ordenada la base de HubSpot: detecta los contactos nuevos que tienen una empresa cargada pero no asociada y corrige esos datos sola.',
    logica: [
      'Cada hora se obtienen los contactos creados en la última hora y diez minutos; el margen evita que se escape alguno entre ejecuciones.',
      'Se filtran los que vienen de la fuente de origen configurada y tienen el campo empresa completo.',
      'Se revisan sus asociaciones reales: si no tienen una empresa asociada, se crea con el nombre normalizado y se asocia.',
      'La cantidad de empleados se extrae del texto libre que cargó el contacto (por ejemplo "somos 3 arquitectos" o "entre 10 y 15") y se actualiza si cambió.',
    ],
    caracteristicas: [
      'Tarea programada con Azure Functions',
      'Normalización de nombres de empresa y de cantidad de empleados',
    ],
    tecnologias: ['HubSpot API', 'Node.js', 'Azure Functions'],
    flujo: { sistemas: ['Contactos', 'Empresas'] },
    privado: true,
  },
  {
    id: 'clickup-sheets',
    categoria: 'integracion',
    titulo: 'Reportes de ClickUp a Google Sheets',
    tipo: 'Automatización de reportes',
    resumen:
      'Se sube un reporte CSV de ClickUp y queda volcado y ordenado en una planilla de Google.',
    descripcion:
      'Herramienta interna para armar reportes: en lugar de copiar y reordenar a mano los datos exportados de ClickUp, se sube el archivo y la planilla queda actualizada.',
    logica: [
      'Desde una página web se sube el reporte CSV exportado de ClickUp.',
      'El servidor lee el archivo, toma las columnas necesarias y ordena los registros por usuario.',
      'Los datos se escriben en una hoja de Google Sheets con una cuenta de servicio.',
    ],
    caracteristicas: [
      'Subida de archivos con Express y Multer',
      'Escritura en Google Sheets con la API oficial de Google',
    ],
    tecnologias: ['ClickUp', 'Google Sheets API', 'Node.js', 'Express'],
    flujo: { sistemas: ['ClickUp', 'Google Sheets'] },
    privado: true,
  },
  {
    id: 'consolidador-sheets',
    categoria: 'integracion',
    titulo: 'Consolidador de datos a Google Sheets',
    tipo: 'Procesamiento de datos',
    resumen:
      'Procesa planillas de Excel de distintas fuentes y consolida los datos en una planilla maestra.',
    descripcion:
      'Herramienta para una estación de servicio que centraliza en una única planilla de Google la información de visitas y de combustibles que llega en archivos de Excel.',
    logica: [
      'Se arrastra un archivo de Excel a la página web.',
      'Se identifica el formato del archivo y se aplica el analizador que corresponde a su fuente.',
      'Los registros se consolidan contra los datos existentes: se actualizan las visitas por sector (boxes, tienda y playa) y los combustibles.',
      'El resultado se escribe en la planilla maestra de Google Sheets.',
    ],
    caracteristicas: [
      'Analizadores separados por fuente de datos y un orquestador que elige cuál usar',
      'Lectura de Excel con SheetJS y escritura con la API de Google Sheets',
    ],
    tecnologias: ['Excel', 'Google Sheets API', 'Node.js', 'Express'],
    flujo: { sistemas: ['Excel', 'Google Sheets'] },
    privado: true,
  },
];
