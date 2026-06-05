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
  quickView?: {
    label: string;
    title: string;
    embedUrl: string;
  };
};

export type Member = {
  name: string;
  role: string;
  image: string;
  links: Array<{
    label: "Web" | "Instagram" | "LinkedIn" | "GitHub";
    href: string;
  }>;
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
    mark: string;
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

const brand = {
  logo: "/assets/brand/vacaflama-horizontal-red-crop.png",
  mark: "/assets/brand/vacaflama-isotipo-crop.png",
  hero: "/assets/sunburn/sunburn-gameplay.png",
};

const sunBurnTrailerEmbed =
  "https://drive.google.com/file/d/1moDcHgxvWXeWJ2zv_77XbwuNSbVYAr5t/preview";

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
      tagline: "Carreras a alta velocidad con estilo arcade",
      description:
        "Videojuego de carreras donde el jugador no solo gana corriendo, sino dando espectáculo. Ponte el cinturón, enciende motores y prepárate para competir bajo un sol imposible.",
      genre: "Carreras, acción",
      release: "En desarrollo",
      cover: "/assets/sunburn/sunburn-banner.png",
      image: "/assets/sunburn/sunburn-poster.png",
      quickView: {
        label: "Ver trailer",
        title: "Trailer de Sun Burn Nitro",
        embedUrl: sunBurnTrailerEmbed,
      },
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
      tagline: "High-speed arcade racing",
      description:
        "A racing game where players win not only by driving fast, but by putting on a show. Buckle up, start your engines and compete under an impossible sun.",
      genre: "Racing, action",
      release: "In development",
      cover: "/assets/sunburn/sunburn-banner.png",
      image: "/assets/sunburn/sunburn-poster.png",
      quickView: {
        label: "Watch trailer",
        title: "Sun Burn Nitro trailer",
        embedUrl: sunBurnTrailerEmbed,
      },
    },
  ],
} satisfies Record<Locale, Project[]>;

const members: Member[] = [
  {
    name: "Jordan Amaya",
    role: "Programador",
    image: "/assets/img/team/JordanNueva.jpg",
    links: [
      { label: "Web", href: "https://jaamaya.github.io" },
      { label: "LinkedIn", href: "https://www.linkedin.com/in/jordanamaya/" },
      { label: "GitHub", href: "https://github.com/JAAmaya" },
    ],
  },
  {
    name: "Alejandro Alonso Pérez",
    role: "Programador",
    image: "/assets/img/team/AlexNueva.jpg",
    links: [{ label: "Instagram", href: "https://www.instagram.com/alextoteles01/" }],
  },
  {
    name: "Ikaro Arde",
    role: "Artista",
    image: "/assets/img/team/ikaro.jpg",
    links: [{ label: "Instagram", href: "https://www.instagram.com/ikaroarde/" }],
  },
  {
    name: "Félix Álvarez Diez",
    role: "Artista",
    image: "/assets/img/team/felix.jpg",
    links: [{ label: "Instagram", href: "https://www.instagram.com/felixalvarz/" }],
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
        "Creamos juegos con dientes, velocidad y mucho carácter: experiencias pequeñas, raras y jugables que mezclan teatro, humor y arcade.",
      primaryCta: "Ver proyectos",
      secondaryCta: "Conocer al equipo",
      background: brand.hero,
      logo: brand.logo,
      mark: brand.mark,
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Juegos con identidad propia",
      copy:
        "Proyectos publicados y en desarrollo con una estética marcada: teatro, puzles, velocidad y energía arcade.",
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
      highlights: ["Juegos independientes", "Narrativa y puzles", "Arcade con colmillo"],
    },
    team: {
      title: "Nuestro equipo",
      copy: "Una vista más cercana de las personas detrás de VacaFlama.",
      socialLabel: "Instagram",
      members,
    },
    contact: {
      title: "Contacto",
      copy: "¿Tienes una colaboración, evento o propuesta?",
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
        "We make games with teeth, speed and personality: small, strange, playable experiences mixing theatre, humor and arcade energy.",
      primaryCta: "View projects",
      secondaryCta: "Meet the team",
      background: brand.hero,
      logo: brand.logo,
      mark: brand.mark,
    },
    projects: {
      eyebrow: "Portfolio",
      title: "Games with a sharp identity",
      copy:
        "Published and in-development projects with a strong visual pulse: theatre, puzzles, speed and arcade energy.",
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
      highlights: ["Independent games", "Narrative and puzzles", "Arcade bite"],
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
      copy: "Have a collaboration, event or proposal?",
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
