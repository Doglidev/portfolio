// Todo el texto del sitio vive acá. Si querés cambiar una frase, un proyecto
// o un dato de contacto, lo editás en este archivo y los componentes lo muestran.
// Así separamos el CONTENIDO (qué decimos) del DISEÑO (cómo se ve).

export const site = {
  name: 'Mateo Dogliani',
  url: 'https://portfolio-beta-nine-xbuscvgug1.vercel.app',
  title: 'Mateo Dogliani | Business & Technology Solutions',
  description:
    'Business analysis, ERP systems, custom software and AI automation for businesses. Based in Córdoba, Argentina, working with clients worldwide.',
};

export const contact = {
  email: 'doglianimateo@gmail.com',
  linkedin: 'https://www.linkedin.com/in/mateo-dogliani-6382051aa/',
  github: 'https://github.com/Doglidev',
  cvEn: '/Mateo-Dogliani-CV-EN.pdf',
  cvEs: '/Mateo-Dogliani-CV-ES.pdf',
};

export const nav = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Skills', href: '#skills' },
];

export const hero = {
  headline: 'I turn business problems into practical technology solutions.',
  subheadline:
    'Business analysis, ERP systems, custom software, and AI automation to help businesses improve their operations.',
  location: 'Based in Córdoba, Argentina. Available for freelance projects and remote work.',
};

// Cada fila: un problema real del mundo de la empresa y lo que se construyó.
export const ledger = [
  {
    problem: 'Reports put together by hand',
    built: 'PDF reporting modernized across 16+ modules of an ERP',
  },
  {
    problem: 'Goods tracked with manual checks',
    built: 'RFID connected to the ERP, starting from the process',
  },
  {
    problem: 'Customer orders spread across conversations',
    built: 'A delivery system where AI suggests orders and a person confirms',
  },
  {
    problem: 'Business data nobody has time to read',
    built: 'An assistant that answers questions about sales in plain language',
  },
];

export const about = {
  intro: [
    "I'm Mateo, a software developer and project coordinator from Córdoba, Argentina. I hold a Higher Technical Degree in Programming and a Mechanical Technician diploma.",
    'I work at Proyectos Informáticos on SIGI, an ERP used by companies and organizations. I also work with JD Informática, an independent practice that delivers technology solutions to individuals and companies.',
    'Before that, I worked in B2B sales in the parts department of a Chevrolet dealership. That is where I learned how a business buys, sells and prices from the inside.',
  ],
  approachTitle: 'How I work',
  approach:
    "I don't build software for its own sake. I start with how the business runs: which processes cause friction, which tasks can be simpler, what the owner needs to know to decide, and which systems should talk to each other. Technology is the means. The result for the business is what counts.",
  pillars: [
    {
      title: 'Business',
      text: 'Sales, customers, inventory, pricing and operations, learned in B2B sales and from inside a working ERP.',
    },
    {
      title: 'Technology',
      text: 'ERP systems, software development, databases, APIs and web applications.',
    },
    {
      title: 'Execution',
      text: 'Analyzing needs, coordinating projects, designing solutions and helping implement them with modern tools and AI-assisted development.',
    },
  ],
};

export const services = [
  {
    title: 'Business Analysis & Process Optimization',
    solves: 'Teams working around slow, manual or unclear processes.',
    delivers:
      'A map of how the process works today, clear requirements, and a prioritized list of improvements.',
  },
  {
    title: 'ERP & System Integration',
    solves: 'Systems that hold the right data but do not share it.',
    delivers:
      'Integrations between an ERP, databases and external tools through APIs, plus reporting built on that data.',
  },
  {
    title: 'Custom Web Applications',
    solves: 'Spreadsheets and chat threads doing the job of software.',
    delivers:
      'Dashboards, admin panels, internal tools and business websites, built around the way your team works.',
  },
  {
    title: 'AI Automation & Business Tools',
    solves: 'Repetitive work, and information that is hard to find and read.',
    delivers:
      'Assistants that answer questions about your business data, and automated workflows that keep a person in control of the final decision.',
  },
  {
    title: 'Technical Consulting',
    solves: 'Technology decisions that are unclear or keep getting postponed.',
    delivers:
      'A review of your current systems, practical recommendations, and coordination of the work that follows.',
  },
];

export type FlowStep = { text: string; mine?: boolean };

export type Project = {
  id: string;
  title: string;
  status: string;
  featured: boolean;
  problem: string;
  solution: string;
  features: string[];
  role: string;
  value: string;
  stack: string[];
  flowTitle: string;
  flow: FlowStep[];
  links?: { label: string; href: string }[];
};

export const projects: Project[] = [
  {
    id: 'doit',
    title: 'DoIT: AI business decision support platform',
    status: 'Own product',
    featured: true,
    problem:
      'Business owners get information from many separate reports and have to interpret each one by hand before they can decide anything.',
    solution:
      'A platform that brings sales, profitability and customer data into one place and lets the owner ask questions in natural language.',
    features: [
      'Executive dashboard',
      'Sales and profitability analysis',
      'Customer portfolio and concentration indicators',
      'AI assistant that answers questions about business data',
      'Business alerts',
      'Market context settings and user management',
    ],
    role: 'Solution design, analysis of business needs, and AI-assisted development.',
    value:
      'Helps an owner understand the business and find relevant information without reading several reports.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'AI models'],
    flowTitle: 'How it fits together',
    flow: [
      { text: 'Business data' },
      { text: 'Dashboards and analysis' },
      { text: 'AI assistant in natural language' },
      { text: 'Alerts for the owner' },
    ],
  },
  {
    id: 'rfid',
    title: 'RFID and ERP integration for industrial operations',
    status: 'Client project',
    featured: true,
    problem:
      'In an industrial company, tracking goods depended on manual checks that people had to remember to do.',
    solution:
      'RFID technology connected with the SIGI ERP so that operational movements can be captured by the system.',
    features: [
      'Review of the company processes and operational flows',
      'Analysis of how SIGI is used inside the organization',
      'Definition of how operations connect with the ERP',
      'Support during the integration between processes and the system',
    ],
    role: "I connected the company's operational needs with what SIGI can do and with the technical requirements. I did not develop the RFID hardware or the reading infrastructure.",
    value:
      'Aims to reduce manual checks and to bring what happens in operations closer to what the ERP records.',
    stack: ['SIGI ERP', 'RFID', 'Process analysis', 'System integration'],
    flowTitle: 'Where my work sits',
    flow: [
      { text: 'Operations and stock movements' },
      { text: 'Process analysis and ERP integration', mine: true },
      { text: 'RFID technology' },
      { text: 'SIGI ERP' },
    ],
  },
  {
    id: 'beverage',
    title: 'Beverage delivery management system',
    status: 'Private project',
    featured: false,
    problem:
      'A beverage distributor has to keep customers, orders, routes and deliveries organized every day.',
    solution:
      'A web system to run the daily work of a distribution business, with AI that suggests orders and a person who reviews them.',
    features: [
      'Operations dashboard',
      'Customer and contact management',
      'Order records and delivery tracking',
      'Route organization',
      'AI-suggested orders from customer interactions, confirmed manually',
    ],
    role: 'Design and development of the system, working with the AI-assisted tools described above.',
    value: 'Simpler daily tasks and a better organized distribution.',
    stack: ['Next.js', 'TypeScript', 'PostgreSQL', 'AI models'],
    flowTitle: 'How orders move',
    flow: [
      { text: 'Customer interaction' },
      { text: 'AI suggests an order' },
      { text: 'A person reviews and confirms', mine: true },
      { text: 'Route and delivery' },
    ],
  },
  {
    id: 'cms',
    title: 'Institutional website and content management system',
    status: 'In development',
    featured: false,
    problem:
      'An educational institution needs to manage news, academic sections and media for its website without technical help.',
    solution:
      'A flexible platform that centralizes the administration of the institutional site.',
    features: [
      'News, publications and academic sections',
      'Education levels, image galleries and media',
      'Banners, main content and site appearance',
      'AI-assisted tools and a virtual assistant setup',
      'Instagram publishing center and user management',
    ],
    role: 'Design and development of the platform.',
    value: 'One place to keep the whole site up to date.',
    stack: ['Web application', 'Content management', 'AI tools'],
    flowTitle: 'What the platform covers',
    flow: [
      { text: 'Staff create content' },
      { text: 'Admin panel' },
      { text: 'Public institutional website' },
    ],
  },
  {
    id: 'websites',
    title: 'Business websites and custom web development',
    status: 'Client and own sites',
    featured: false,
    problem:
      'Businesses and institutions need a clear public site that they can keep updating.',
    solution:
      'Corporate and institutional websites and landing pages, with responsive interfaces and admin panels where needed.',
    features: [
      'Corporate and institutional sites',
      'Landing pages',
      'Responsive interfaces',
      'Admin panels and content management',
    ],
    role: 'Development and deployment of public business sites, based on what each client needs.',
    value: 'A clear public presence that explains the business and makes it easy to get in touch.',
    stack: ['Next.js', 'React', 'Tailwind CSS', 'Node.js'],
    flowTitle: 'Public examples',
    flow: [
      { text: 'Proyectos Informáticos website' },
      { text: 'JD Informática website' },
    ],
    links: [
      { label: 'Proyectos Informáticos', href: 'https://proyectosinformaticos.com.ar' },
      { label: 'JD Informática', href: 'https://jdinformatica.ar' },
    ],
  },
];

export const experience = [
  {
    role: 'Software Developer & Project Manager',
    company: 'Proyectos Informáticos',
    place: 'Córdoba, Argentina',
    period: '2025 to present',
    summary: 'SIGI, an ERP used by companies and organizations.',
    points: [
      'Develop and maintain the system, including fixing critical errors in production (Genero 4GL and Informix).',
      'Modernized the PDF report generation across more than 16 modules of the ERP.',
      'Took part in the RFID integration with SIGI, connecting operational needs with the system and its technical requirements.',
      'Gather process requirements and business needs from users and clients.',
      'Contribute to mobile and web applications that digitalize work processes, and work with databases and APIs.',
      'Coordinate activities, priorities and project follow-up.',
    ],
  },
  {
    role: 'IT Consultant & Technical Support',
    company: 'JD Informática',
    place: 'Independent practice',
    period: '',
    summary:
      'Technology services and solutions for individuals and companies, now focused on business solutions, applications, automation and integration.',
    points: [
      'Installation, maintenance and diagnosis of computer equipment, operating systems and software.',
      'Installation and configuration of networks and security cameras.',
      'Configuration of servers and VPS environments.',
      'Development of websites and applications, and implementation of automation tools.',
      "Analysis of client needs, and design and delivery of the solution.",
    ],
  },
  {
    role: 'B2B Sales Representative, Automotive Parts',
    company: 'Mundo Maipú, Chevrolet dealership',
    place: 'Córdoba, Argentina',
    period: 'January 2023 to February 2025',
    summary:
      'This is where I learned how a business works commercially: who buys, what sells, and what is worth stocking.',
    points: [
      'Managed individual customers, workshops and commercial accounts.',
      'B2B sales and customer prospecting, with quotes and order management.',
      'Analyzed inventory rotation and spotted commercial opportunities.',
      'Took part in purchasing decisions.',
      'Analyzed profitability by product and by customer.',
      'Followed market trends and competitor prices.',
    ],
  },
];

export const education = [
  {
    title: 'Higher Technical Degree in Programming',
    school: 'Teclab Instituto Técnico Superior',
    period: '2024 to 2025',
  },
  {
    title: 'Mechanical Technician',
    school: 'IPET 247 Ing. Carlos A. Cassaffousth',
    period: '2018 to 2023',
  },
];

// core: true = tecnología que uso a diario. Se muestra con más peso visual.
export const skills = [
  {
    group: 'Development',
    items: [
      { name: 'TypeScript', core: true },
      { name: 'React', core: true },
      { name: 'Next.js', core: true },
      { name: 'Node.js', core: true },
      { name: 'NestJS', core: true },
      { name: 'JavaScript' },
      { name: 'Flutter' },
      { name: 'Genero 4GL' },
    ],
  },
  {
    group: 'Databases',
    items: [
      { name: 'PostgreSQL', core: true },
      { name: 'Informix', core: true },
      { name: 'SQLite' },
      { name: 'SQL' },
    ],
  },
  {
    group: 'Integration and tools',
    items: [
      { name: 'REST APIs', core: true },
      { name: 'Git and GitHub', core: true },
      { name: 'Docker' },
      { name: 'Postman' },
    ],
  },
  {
    group: 'Applied AI',
    items: [
      { name: 'AI model integration', core: true },
      { name: 'AI-assisted development', core: true },
      { name: 'Workflow automation' },
      { name: 'Conversational business assistants' },
      { name: 'Natural-language analysis of business data' },
    ],
  },
];
