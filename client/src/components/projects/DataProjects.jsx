

const projects = [
  {
    id: 2,
    name: "Shoponline",
    rol: "Full stack developer",
    date: "Oct 2024",
    titulo: {
      en: "Shoponline",
      es: "Shoponline"
    },
    detail: {
      en: "Facilitates navigation and product purchase through a modern and intuitive interface. Includes advanced filters, shopping cart management with localStorage, and a secure payment flow with Stripe integration. Additionally, it features an optimized search system and is SEO-friendly.",
      es: "Facilita la navegación y compra productos a través de una interfaz moderna e intuitiva. Incluye filtros avanzados, gestión de carrito de compras con localStorage, y un flujo de pago seguro con la integración de Stripe. Además, cuenta con un sistema de búsqueda optimizado y SEO."
    },
    technologies: ['Typescript', 'Next14', 'Tailwind', 'Stripe','Auth0'],
    repository: "https://github.com/matidehoyos/shopponline",
    web: "https://shopponline.vercel.app",
    img: 'shopi.png',
  },
  {
    id: 3,
    name: "WEATHER APP",
    rol: "Full stack developer",
    date: "May 2024",
    titulo: {
      en: "Weather app",
      es: "App meteorológica"
    },
    detail: {
      en: "Weather application that consumes real-time data from an external API through Next.jsAPI Routes, allowing the creation of endpoints within the same frontend. Responsive design.",
      es: "Aplicación meteorológica, que consume datos en tiempo real de API externa a través de las API Routes de Next.js, que permiten crear endpoints dentro del mismo frontend. Diseño responsive."
    },
    technologies: ['Javascript','Next15','Tailwind','RestApi','Responsive'],
    repository: "https://github.com/matidehoyos/AppMeteorologica-Next14-Tailwind",
    web: "https://weather-nextapp.vercel.app/",
    img: 'weatherApp.png',
  },
  {
    id: 4,
    name: "ELECTROAUTO",
    rol: "Full stack developer",
    date: "Apr 2024",
    titulo: {
      en: "Electroauto",
      es: "Electroauto"
    },
    detail: {
      en: "E-commerce web app with multiple views, including a product page and an admin panel for managing the entire application. It features customer reviews, a shopping cart, a payment gateway, and a contact form. Responsive design.",
      es: "App web ecommerce que posee varias vistas, incluyendo página de productos y panel administrativo para gestionar la aplicación completa, reviews de clientes, carrito de compras, pasarela de pagos, formulario de contacto. Diseño responsive."
    },
    technologies: ["NodeJs",'Express', 'PostgreSql', 'Sequelize', 'React', 'Redux', 'Css3', 'Auth0', 'MercadoPago'],
    repository: "https://github.com/matidehoyos/Ecommerce-Electroauto-react-node",
    web: "https://electroauto.vercel.app/",
    img: 'elect.png',
  },
  {
    id: 5,
    name: "POKEMON APP",
    rol: "Full stack developer",
    date: "Jan 2024",
    titulo: {
      en: "SPA - Pokemón App",
      es: "SPA - Pokemón App"
    },
    detail: {
      en: "Consumes data from an external API. It uses Redux for global state management and features an advanced filtering system. It includes a search bar and allows users to create their own character through a fully controlled form, which is saved in the database. Additionally, it has a pagination system to organize information. It is 100% responsive.",
      es: "Consume datos de api externa. Utiliza Redux para manejo de estado global, y sistema filtros avanzados. Posee barra de búsqueda, y posibilidad de crear su propio personaje, a través de un formulario totalmente controlado, que lo guarda en la base de datos. Tambien cuenta con sistema de paginado para organizar la información. Es 100% responsive."
    },
    technologies: ['Javascript','NodeJs','Express','React','Redux','PostgreSql'],
    repository: "https://github.com/matidehoyos/Pokemon-proyecto",
    web: "https://pokemonmdh.vercel.app/",
    img: 'pokk.png',
  },
  {
    id: 6,
    name: "MODO DIGITAL",
    rol: "Front end developer",
    date: "Aug 2024",
    titulo: {
      en: "Modo Digital",
      es: "Modo Digital"
    },
    detail: {
      en: "Responsive web page, mobile first. Institutional type, shows relevant information about the institution and its services.",
      es: "Página web responsive, mobile first. Tipo institucional, muestra la información relevante de la institución y sus servicios."
    },
    technologies: ["ReactJs",'Tailwind', 'Html5', 'Vercel', 'Visual studio'],
    repository: "https://github.com/matidehoyos/modo",
    web: "https://mododigital.vercel.app/",
    img: 'modo.png',
  },
  {
    id: 6,
    name: "RUGIR",
    rol: "Front end developer",
    date: "Jun 2024",
    titulo: {
      en: "Rugir Mdq",
      es: "Rugir Mdq"
    },
    detail: {
      en: "Commercial website. Shows products, social networks, contact methods, and business information. Mobile first.",
      es: "Sitio web comercial. Muestra los productos, redes sociales, medios de contacto e información del comercio. Mobile first."
    },
    technologies: ['Javascript','React','Css3'],
    repository: "https://github.com/matidehoyos/rugirTailw",
    web: "https://rugirmdq.vercel.app/",
    img: 'rugir.png',
  },
  {
    id: 8,
    name: "Rick&Morty",
    rol: "Full stack developer",
    date: "Nov 2023",
    titulo: {
      en: "Rick & Morty",
      es: "Rick & Morty"
    },
    detail: {
      en: "Consumes data from an external API, filters it, and displays it according to user preferences.",
      es: "Consume datos de Api externa, los filtra y muestra segun gustos del usuario."
    },
    technologies: ['Javascript','NodeJs','React','CSS3'],
    repository: "https://github.com/matidehoyos/RickyMorty",
    web: "https://rickymortymdh.vercel.app/",
    img: 'rik.png',
  },
  {
    id: 9,
    name: "PORTFOLIO",
    rol: "Full stack developer",
    date: "Apr 2024",
    titulo: {
      en: "Portfolio website",
      es: "Portfolio website"
    },
    detail: {
      en: "Responsive web portfolio. Project exhibition.",
      es: "Portfolio web responsive. Exhibición de proyectos."
    },
    technologies: ['Javascript','React','CSS3'],
    repository: "https://github.com/matidehoyos/portfolio",
    web: "https://matiasdehoyos.vercel.app/",
    img: 'portf.png',
  },
];

export default projects;

