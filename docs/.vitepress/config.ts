import { OramaPlugin } from '@orama/plugin-vitepress';

export default {
  head: [
    [
      'link',
      {
        rel: 'icon', media: '(prefers-color-scheme: light)', href: '/favicon.ico'
      }
    ],
    [
      'link',
      {
        rel: 'icon', media: '(prefers-color-scheme: dark)', href: '/favicon-dark.ico'
      }
    ],
    [
      'script',
      {},
      `
        if (window.location.hostname === "megathread.ahoypirata.lat") {
            const newURL = window.location.href.replace("megathread.ahoypirata.lat", "pirataria.link");
            window.location.href = newURL;
        }
      `
    ]
  ],
  vite: {
    plugins: [OramaPlugin()],
  },
  base: '/',
  lang: "pt-BR",
  title: "Pirataria Megathread - Links, sites e ferramentas",
  description: "Esta megathread tem como objetivo atuar como uma valiosa fonte para explorar uma ampla gama de recursos excepcionais, incluindo sites, aplicativos, ferramentas, etc.",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  externalLinkIcon: true,
  themeConfig: {
    domain: 'pirataria.link',
    lastUpdatedText: 'Última atualização em',
    logo: "/logo.svg",
    siteTitle: "Pirataria.link",
    // Navbar Link
    nav: [
      {
        text: "Guias",
        link: "guias"
      },
      {
        text: "Privacidade",
        link: "privacidade",
      },
      {
        text: "Sobre",
        link: "sobre",
      },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/piratarialink/megathread_pirata" },
      {
        icon: {
          svg: '<?xml version="1.0" encoding="UTF-8"?><svg version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:cc="http://creativecommons.org/ns#" xmlns:dc="http://purl.org/dc/elements/1.1/" xmlns:rdf="http://www.w3.org/1999/02/22-rdf-syntax-ns#" viewBox="0 0 27.9 32"><g transform="translate(-.095 .005)" fill="currentColor"><path d="m27.1 31.2v-30.5h-2.19v-0.732h3.04v32h-3.04v-0.732z"/><path d="m8.23 10.4v1.54h0.044c0.385-0.564 0.893-1.03 1.49-1.37 0.58-0.323 1.25-0.485 1.99-0.485 0.72 0 1.38 0.14 1.97 0.42 0.595 0.279 1.05 0.771 1.36 1.48 0.338-0.5 0.796-0.941 1.38-1.32 0.58-0.383 1.27-0.574 2.06-0.574 0.602 0 1.16 0.074 1.67 0.22 0.514 0.148 0.954 0.383 1.32 0.707 0.366 0.323 0.653 0.746 0.859 1.27 0.205 0.522 0.308 1.15 0.308 1.89v7.63h-3.13v-6.46c0-0.383-0.015-0.743-0.044-1.08-0.0209-0.307-0.103-0.607-0.242-0.882-0.133-0.251-0.336-0.458-0.584-0.596-0.257-0.146-0.606-0.22-1.05-0.22-0.44 0-0.796 0.085-1.07 0.253-0.272 0.17-0.485 0.39-0.639 0.662-0.159 0.287-0.264 0.602-0.308 0.927-0.052 0.347-0.078 0.697-0.078 1.05v6.35h-3.13v-6.4c0-0.338-7e-3 -0.673-0.021-1-0.0114-0.314-0.0749-0.623-0.188-0.916-0.108-0.277-0.3-0.512-0.55-0.673-0.258-0.168-0.636-0.253-1.14-0.253-0.198 0.0083-0.394 0.042-0.584 0.1-0.258 0.0745-0.498 0.202-0.705 0.374-0.228 0.184-0.422 0.449-0.584 0.794-0.161 0.346-0.242 0.798-0.242 1.36v6.62h-3.13v-11.4z"/><path d="m0.936 0.732v30.5h2.19v0.732h-3.04v-32h3.03v0.732z"/></g></svg>'
        },
        ariaLabel: "Matrix",
        link: "https://matrix.to/#/#deck_pirata:matrix.org",
      },
    ],
    // Sidebar
    sidebar: [
      {
        text: "Tópicos",
        collapsible: true,
        items: [
          { text: "🧭 Uso Geral", link: "sites-geral" },
          { text: "⛩️ Anime", link: "anime" },
          { text: "📚 Livros", link: "livros" },
          { text: "🤖 Inteligência Artificial", link: "ia" },
          { text: "🧠 Educacional", link: "educacional" },
          { text: "🕹️ Emuladores e ROMs", link: "emuladores-roms" },
          { text: "🎮 Jogos", link: "jogos" },
          { text: "📱 Mobile", link: "mobile" },
          { text: "🎦 Filmes e TV", link: "filmes-tv" },
          { text: "🎹 Música", link: "musica" },
          { text: "⚙️ Softwares", link: "softwares" },
          { text: "⚽ Esportes", link: "esportes" },
          { text: "🧰 Ferramentas", link: "ferramentas" },
          { text: "🌌 Trackers", link: "trackers" },
          { text: "🏴‍☠️ Warez", link: "warez" },
          { text: "☣️ Sites e Programas Inseguros", link: "sites-inseguros" },
          { text: "🚫 Adulto", link: "adulto" },
        ],
      },
      {
        text: "📑 Recomendado",
        collapsible: true,
        items: [
          { text: "ℹ️ Sobre", link: "sobre" },
          { text: "📖 Dicionário", link: "util/dicionario" },
          { text: "📚 Glossário", link: "util/glossario" },
          { text: "🔗 Publicações úteis", link: "publicacoes" },
          { text: "🗺️ Guias", link: "guias" },
          { text: "🔒 Privacidade", link: "privacidade" }
        ],
      },
      {
        text: "💰 Outros Tesouros",
        collapsible: true,
        items: [
          {
            text: "📁 Awesome Warez",
            link: "https://lkrjangid1.github.io/Awesome-Warez/",
          },
          {
            text: "📁 Champagne Piracy Wiki",
            link: "https://champagne.pages.dev/",
          },
          { text: "📁 PiracyBG-PTBR", link: "https://rentry.org/PiracyBG-PTBR/"},
          { text: "📁 MediaSavvy", link: "https://mediasavvy.pages.dev/" },
          { text: "📁 EverythingMoe", link: "https://everythingmoe.com/" },
          { text: "📁 FMHY", link: "https://fmhy.net/" },
          { text: "📁 Pirated Games", link: "https://rentry.org/pgames/" },
          { text: "📁 Ripped", link: "https://ripped.guide/" },
          { text: "📁 The Index", link: "https://theindex.moe/" },
          { text: "📁 Wotaku", link: "https://wotaku.moe/" },
        ],
      },
    ],
    editLink: {
      pattern:
        "https://github.com/piratarialink/megathread_pirata/edit/main/docs/:path",
      text: "Edite essa página no GitHub",
    },
    docFooter: {
      prev: false,
      next: false,
    },
    footer: {
      message: "Made in Brazil by c/Pirataria",
    },
    markdown: {
      attrs: false,
      theme: "material-palenight",
      lineNumbers: true,
    },
    // Mobile Config
    returnToTopLabel: "Voltar para o topo",
    sidebarMenuLabel: "Menu",
  },
  sitemap: {
    hostname: 'https://pirataria.link'
  },
};
