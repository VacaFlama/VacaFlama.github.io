export type Locale = "es" | "en";

export type NavItem = {
  label: string;
  href: string;
};

export type Project = {
  title: string;
  tagline: string;
  description: string;
  genre: string;
  release: string;
  cover: string;
  image: string;
  link?: string;
};

export type Member = {
  name: string;
  role: string;
  image: string;
  instagram?: string;
};

export type SiteContent = {
  lang: Locale;
  title: string;
  description: string;
  nav: NavItem[];
  languageLabel: string;
  alternateLabel: string;
  alternateHref: string;
  hero: {
    eyebrow: string;
    title: string;
    copy: string;
    primaryCta: string;
    secondaryCta: string;
    background: string;
    logo: string;
  };
  projects: {
    eyebrow: string;
    title: string;
    copy: string;
    cta: string;
    genreLabel: string;
    releaseLabel: string;
    items: Project[];
  };
  about: {
    title: string;
    paragraphs: string[];
    highlights: string[];
  };
  team: {
    title: string;
    copy: string;
    socialLabel: string;
    members: Member[];
  };
  contact: {
    title: string;
    copy: string;
    emailLabel: string;
    email: string;
  };
  footer: {
    copyright: string;
  };
};

const sharedProjects = {
  es: [
    {
      title: "El Gran Teatro del Mundo",
      tagline: "Un clásico reimaginado para todos",
      description:
        "Reinterpretación hecha videojuego de la obra teatral de Calderón de la Barca. Sumérgete en una experiencia onírica y fascinante donde Calderón deberá resolver los conflictos de su obra.",
      genre: "Aventura gráfica, puzles",
      release: "11 de noviembre de 2024",
      cover: "/assets/img/projects/CNTC_PFP.png",
      image: "/assets/img/projects/CNTC_PFP3.png",
      link: "https://cacharro-games.itch.io/el-gran-teatro",
    },
    {
      title: "Darnos un tiempo",
      tagline: "Manipula el tiempo... literalmente",
      description:
        "Aventura visual de puzles en la que, para escapar de un matrimonio disfuncional con el tiempo, deberás resolver acertijos y abandonar una vida seria y monótona.",
      genre: "Novela visual, puzles",
      release: "25 de enero de 2025",
      cover: "/assets/img/projects/DUT1.png",
      image: "/assets/img/projects/DUT2.png",
      link: "https://jordanamaya.itch.io/darnos-tiempo",
    },
    {
      title: "Sun Burn Nitro",
      tagline: "Carreras a alta velocidad",
      description:
        "Videojuego de carreras donde el jugador no solo gana corriendo, sino dando espectáculo. Ponte el cinturón, enciende motores y prepárate para competir.",
      genre: "Carreras, acción",
      release: "En desarrollo",
      cover: "/assets/img/projects/SBN1.png",
      image: "/assets/img/projects/SBN2_Nuevo.png",
    },
  ],
  en: [
    {
      title: "The Great Theatre of the World",
      tagline: "A classic reimagined for everyone",
      description:
        "A video game reinterpretation of Calderón de la Barca's theatrical work. Step into a dreamlike experience where Calderón must resolve the conflicts inside his own play.",
      genre: "Graphic adventure, puzzles",
      release: "November 11, 2024",
      cover: "/assets/img/projects/CNTC_PFP.png",
      image: "/assets/img/projects/CNTC_PFP3.png",
      link: "https://cacharro-games.itch.io/el-gran-teatro",
    },
    {
      title: "Darnos un tiempo",
      tagline: "Manipulate time... literally",
      description:
        "A visual puzzle adventure where escaping a dysfunctional marriage with time means solving riddles and leaving behind a serious, monotonous life.",
      genre: "Visual novel, puzzles",
      release: "January 25, 2025",
      cover: "/assets/img/projects/DUT1.png",
      image: "/assets/img/projects/DUT2.png",
      link: "https://jordanamaya.itch.io/darnos-tiempo",
    },
    {
      title: "Sun Burn Nitro",
      tagline: "High-speed racing",
      description:
        "A racing game where players win not only by driving fast, but by putting on a show. Buckle up, start your engines and get ready to compete.",
      genre: "Racing, action",
      release: "In development",
      cover: "/assets/img/projects/SBN1.png",
      image: "/assets/img/projects/SBN2_Nuevo.png",
    },
  ],
} satisfies Record<Locale, Project[]>;

const members: Member[] = [
  {
    name: "Jordan A. Amaya Carmona",
    role: "Programador",
    image: "/assets/img/team/JordanNueva.jpg",
    instagram: "https://www.instagram.com/mrjxrdxn/",
  },
  {
    name: "Alejandro Alonso Pérez",
    role: "Programador",
    image: "/assets/img/team/AlexNueva.jpg",
    instagram: "https://www.instagram.com/alextoteles01/",
  },
  {
    name: "Ikaro Arde",
    role: "Artista",
    image: "/assets/img/team/ikaro.jpg",
    instagram: "https://www.instagram.com/ikaroarde/",
  },
  {
    name: "Félix Álvarez Diez",
    role: "Artista",
    image: "/assets/img/team/felix.jpg",
    instagram: "https://www.instagram.com/felixalvarz/",
  },
];

export const siteContent: Record<Locale, SiteContent> = {
  es: {
    lang: "es",
    title: "VacaFlama",
    description:
      "Portfolio de VacaFlama, un equipo independiente de videojuegos centrado en experiencias con personalidad.",
    nav: [
      { label: "Proyectos", href: "#proyectos" },
      { label: "Quiénes somos", href: "#quienes-somos" },
      { label: "Equipo", href: "#equipo" },
      { label: "Contacto", href: "#contacto" },
    ],
    languageLabel: "Idioma",
    alternateLabel: "EN",
    alternateHref: "/en/",
    hero: {
      eyebrow: "Estudio independiente de videojuegos",
      title: "VacaFlama",
      copy:
        "Creamos juegos con una mezcla de teatro, humor, velocidad y puzles. Somos un equipo pequeño que convierte ideas raras en experiencias jugables.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Conocer al equipo",
      background: "/assets/img/header-bg.jpg",
      logo: "/assets/img/vacaflama.png",
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Juegos y prototipos",
      copy:
        "Una selección de proyectos publicados y en desarrollo, desde reinterpretaciones teatrales hasta carreras frenéticas.",
      cta: "Jugar",
      genreLabel: "Género",
      releaseLabel: "Fecha",
      items: sharedProjects.es,
    },
    about: {
      title: "Quiénes somos",
      paragraphs: [
        "Somos un pequeño equipo que empezó colaborando en un videojuego junto a la CNTC.",
        "Desde entonces seguimos trabajando juntos en nuevos proyectos, con Sun Burn Nitro como el desarrollo más reciente.",
      ],
      highlights: ["Juegos independientes", "Narrativa y puzles", "Prototipos con carácter"],
    },
    team: {
      title: "Nuestro equipo",
      copy: "Una vista más cercana de las personas detrás de VacaFlama.",
      socialLabel: "Instagram",
      members,
    },
    contact: {
      title: "Contacto",
      copy: "Tú eliges por dónde contactarnos.",
      emailLabel: "Escríbenos",
      email: "vacaflamastudios@gmail.com",
    },
    footer: {
      copyright: "Copyright © VacaFlama 2026",
    },
  },
  en: {
    lang: "en",
    title: "VacaFlama",
    description:
      "VacaFlama portfolio, an independent video game team focused on playful experiences with personality.",
    nav: [
      { label: "Projects", href: "#projects" },
      { label: "About", href: "#about" },
      { label: "Team", href: "#team" },
      { label: "Contact", href: "#contact" },
    ],
    languageLabel: "Language",
    alternateLabel: "ES",
    alternateHref: "/",
    hero: {
      eyebrow: "Independent video game studio",
      title: "VacaFlama",
      copy:
        "We create games that mix theatre, humor, speed and puzzles. We are a small team turning strange ideas into playable experiences.",
      primaryCta: "View projects",
      secondaryCta: "Meet the team",
      background: "/assets/img/header-bg.jpg",
      logo: "/assets/img/vacaflama.png",
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Games and prototypes",
      copy:
        "A selection of published and in-development projects, from theatrical reinterpretations to frantic racing.",
      cta: "Play",
      genreLabel: "Genre",
      releaseLabel: "Release",
      items: sharedProjects.en,
    },
    about: {
      title: "About us",
      paragraphs: [
        "We are a small team that started by collaborating on a video game with the CNTC.",
        "Since then we have kept working together on new projects, with Sun Burn Nitro as our latest in-development game.",
      ],
      highlights: ["Independent games", "Narrative and puzzles", "Prototypes with character"],
    },
    team: {
      title: "Our team",
      copy: "A closer look at the people behind VacaFlama.",
      socialLabel: "Instagram",
      members: members.map((member) => ({
        ...member,
        role: member.role === "Programador" ? "Programmer" : "Artist",
      })),
    },
    contact: {
      title: "Contact",
      copy: "Choose how you want to reach us.",
      emailLabel: "Email us",
      email: "vacaflamastudios@gmail.com",
    },
    footer: {
      copyright: "Copyright © VacaFlama 2026",
    },
  },
};

export function getContent(locale: Locale): SiteContent {
  return siteContent[locale];
}
