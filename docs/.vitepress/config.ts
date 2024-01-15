import { defineConfig } from "vitepress";
import { SearchPlugin } from "vitepress-plugin-search";

var options = {
  previewLength: 62,
  buttonLabel: "Pesquisar",
  placeholder: "Pesquisar",
  allow: [],
  ignore: [],
};

export default {
  head: [
    [
      'script',
      {defer: '', src: 'https://static.cloudflareinsights.com/beacon.min.js', 'data-cf-beacon': '{"token": "6980f7cafe844b1d96528597f72fe3ad"}'}
    ],
  ],
  vite: {
    plugins: [SearchPlugin(options)],
  },
  lang: "pt-BR",
  title: "Pirataria",
  description: "A Megathread mais bonita disponivel",
  ignoreDeadLinks: [/^https?:\/\/localhost/],
  cleanUrls: true,
  lastUpdated: true,
  themeConfig: {
    logo: "/logo.svg",
    siteTitle: "Pirataria",
    // Navbar Link
    nav: [
      { text: "Guias", link: "pages/guias" },
      {
        text: "Sobre",
        link: "pages/sobre",
      },
    ],
    // Social Icons
    socialLinks: [
      { icon: "github", link: "https://github.com/c-pirataria" },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" height="16" width="15.5" viewBox="0 0 496 512"><!--!Font Awesome Free 6.5.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license/free Copyright 2023 Fonticons, Inc.--><path d="M248 8C111 8 0 119 0 256S111 504 248 504 496 393 496 256 385 8 248 8zM363 176.7c-3.7 39.2-19.9 134.4-28.1 178.3-3.5 18.6-10.3 24.8-16.9 25.4-14.4 1.3-25.3-9.5-39.3-18.7-21.8-14.3-34.2-23.2-55.3-37.2-24.5-16.1-8.6-25 5.3-39.5 3.7-3.8 67.1-61.5 68.3-66.7 .2-.7 .3-3.1-1.2-4.4s-3.6-.8-5.1-.5q-3.3 .7-104.6 69.1-14.8 10.2-26.9 9.9c-8.9-.2-25.9-5-38.6-9.1-15.5-5-27.9-7.7-26.8-16.3q.8-6.7 18.5-13.7 108.4-47.2 144.6-62.3c68.9-28.6 83.2-33.6 92.5-33.8 2.1 0 6.6 .5 9.6 2.9a10.5 10.5 0 0 1 3.5 6.7A43.8 43.8 0 0 1 363 176.7z"/></svg>',
        },
        ariaLabel: "Telegram",
        link: "https://t.me/+sJQOt4p729xhYTBh",
      },
      { icon: "discord", link: "https://bit.ly/discordpirata" },
    ],
    // Sidebar
    sidebar: [
      {
        text: "Tópicos",
        collapsible: true,
        items: [
          { text: "🧭 Sites de Uso Geral", link: "pages/sites-geral" },
          { text: "⭐ Anime", link: "pages/anime" },
          { text: "📚 Livros", link: "pages/livros" },
          { text: "🧠 Educacional", link: "pages/educacional" },
          { text: "🕹️ Emuladores e ROMs", link: "pages/emuladores-roms" },
          { text: "🎮 Jogos", link: "pages/jogos" },
          { text: "📱 Mobile", link: "pages/mobile" },
          { text: "🎦 Filmes e TV", link: "pages/filmes-tv" },
          { text: "🎹 Música", link: "pages/musica" },
          { text: "⚙️ Softwares", link: "pages/softwares" },
          { text: "👟 Esportes", link: "pages/esportes" },
          { text: "🧰 Ferramentas", link: "pages/ferramentas" },
          { text: "🧵 Trackers Privados", link: "pages/trackers" },
          { text: "☣️ Sites Inseguros", link: "pages/sites-inseguros" },
        ],
      },
      {
        text: "💰 Outros Tesouros",
        collapsible: true,
        items: [
          {
            text: "📁 Awesome Piracy",
            link: "https://shakil-shahadat.github.io/awesome-piracy/",
          },
          {
            text: "📁 Champagne Piracy Wiki",
            link: "https://champagne.pages.dev/",
          },
          { text: "📁 EverythingMoe", link: "https://everythingmoe.com/" },
          { text: "📁 FMHY", link: "https://fmhy.net/" },
          { text: "📁 Ripped", link: "https://ripped.guide/" },
          { text: "📁 The Index", link: "https://theindex.moe/" },
          { text: "📁 Wotaku", link: "https://wotaku.moe/" },
        ],
      },
      {
        text: "📑 Recomendado",
        collapsible: true,
        items: [
          { text: "🪶 Dicionário", link: "pages/util/dicionario" },
          { text: "🪶 Glossário", link: "pages/util/glossario" },
          { text: "🪶 Publicações úteis", link: "pages/publicacoes" },
          { text: "🪶 Guias", link: "pages/guias" },
        ],
      },
    ],
    editLink: {
      pattern:
        "https://github.com/c-pirataria/megathread-vitepress/edit/main/docs/:path",
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
      theme: "material-palenight",
      lineNumbers: true,
    },
    // Mobile Config
    returnToTopLabel: "Voltar para o topo",
    sidebarMenuLabel: "Menu",
  },
};
