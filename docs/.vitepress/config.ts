import {OramaPlugin} from "@orama/plugin-vitepress";

export default {
  head: [
    [
      "link",
      {
        rel: "icon",
        media: "(prefers-color-scheme: light)",
        href: "/favicon.ico",
      },
    ],
    [
      "link",
      {
        rel: "icon",
        media: "(prefers-color-scheme: dark)",
        href: "/favicon-dark.ico",
      },
    ],
  ],
  vite: {
    plugins: [OramaPlugin()],
  },
  base: "/",
  lang: "pt-BR",
  title: "Pirataria Megathread - Links, sites e ferramentas",
  description:
    "Esta megathread tem como objetivo atuar como uma valiosa fonte para explorar uma ampla gama de recursos excepcionais, incluindo sites, aplicativos, ferramentas, etc.",
  ignoreDeadLinks: true,
  cleanUrls: true,
  lastUpdated: true,
  externalLinkIcon: true,
  themeConfig: {
    domain: "pirataria.link",
    lastUpdatedText: "Última atualização em",
    logo: "/logo.svg",
    siteTitle: "Pirataria.link",
    // Navbar Link
    nav: [
      {
        text: "Guias",
        link: "guias",
      },
      {
        text: "Privacidade",
        link: "privacidade",
      },
    ],
    // Social Icons
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/piratarialink/megathread_pirata",
      },
    ],
    // Sidebar
    sidebar: [
      {
        text: "Tópicos",
        collapsible: true,
        items: [
          { text: "⚓️ Perguntas Frequentes", link: "faq" },
          { text: "🧭 Uso Geral", link: "sites-geral" },
          { text: "⛩️ Otaku", link: "otaku" },
          { text: "📚 Livros", link: "livros" },
          { text: "🧠 Educacional", link: "educacional" },
          { text: "🕹️ Emuladores", link: "emuladores-roms" },
          { text: "🎮 Jogos", link: "jogos" },
          { text: "📱 Mobile", link: "mobile" },
          { text: "🎦 Filmes e TV", link: "filmes-tv" },
          { text: "🎹 Música", link: "musica" },
          { text: "⚙️ Softwares", link: "softwares" },
          { text: "⚽ Esportes", link: "esportes" },
          { text: "🧰 Ferramentas", link: "ferramentas" },
          { text: "🌊 Trackers", link: "trackers" },
          { text: "🏴‍☠️ Warez", link: "warez" },
          { text: "☣️ Sites e Programas Perigosos", link: "sites-inseguros" },
        ],
      },
      {
        text: "Recomendado",
        collapsible: true,
        items: [
          { text: "📚 Nomenclatura", link: "util/nomenclatura" },
          { text: "🔗 Publicações úteis", link: "publicacoes" },
          { text: "🗺️ Guias", link: "guias" },
          { text: "🔒 Privacidade", link: "privacidade" },
          { text: "✨ Coletânea", link: "/util/coletanea.md" },
        ],
      },
      {
        text: "Outros Tesouros",
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
          {
            text: "📁 Piracy Index",
            link: "https://piracy.vercel.app/",
          },
          { text: "📁 MediaSavvy", link: "https://mediasavvy.pages.dev/" },
          { text: "📁 EverythingMoe", link: "https://everythingmoe.com/" },
          { text: "📁 FMHY", link: "https://fmhy.net/" },
          { text: "📁 Pirated Games", link: "https://rentry.org/pgames/" },
          { text: "📁 Ripped", link: "https://ripped.guide/" },
          { text: "📁 The Index", link: "https://theindex.moe/" },
          { text: "📁 Wotaku", link: "https://wotaku.wiki/" },
          { text: "📁 Miyomi", link: "https://miyomi.pages.dev/" },
        ],
      },
      {
      text: 'Diversos',
      collapsed: true,
      items: [
        { text: "🚫 Adulto", link: "/outros/adulto.md" },
         { text: "🏔️ Codeberg", link: "https://codeberg.org/pirataria/megathread" },
      ]
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
    hostname: "https://pirataria.link",
  },
};
