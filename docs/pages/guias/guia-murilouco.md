
# 🪶 ➜ As diferentes maneiras de consumir filmes piratas e por que nenhuma delas presta

O propósito desse post é introduzir às pessoas inexperientes todas as formas que se pirateia mídia atualmente, e explicar um lado técnico de tudo isso.

Para tanto, é importante entender que **hospedar vídeos na internet custa muito dinheiro**. Existe um motivo para até hoje não ter surgido grandes concorrentes ao YouTube. O fato é que vídeos, e em especial os filmes em ultra HD, consomem muita internet e processamento, então não tem como um cara sozinho fazer um site tipo Netflix 100% grátis e rápido.

## Sites de streaming gratuitos, estilo MegaFilmesHD

A primeira forma de contornar este problema é encher seu site de anúncios até o talo, e disponibilizar seus vídeos em baixa qualidade ou travando. Assim o sujeito consegue manter o site de pé com vários usuários acessando constantemente. Além do inconveniente de anúncios e baixa qualidade, esses sites possuem um segundo problema: a qualquer momento o governo pode derrubar seu site, exigindo que os usuários tenham que caçar outro site para substituir.

Eu diria que o principal site dessa natureza hoje é o ilustre RedeCanais, pela sua vasta gama de conteúdo e até hoje estar de pé. De fato, essa é a principal forma que eu uso até hoje para ver desenhos animados como bob esponja, que eu não quero ter o compromisso de precisar baixar o negócio para assistir antes.

> Sites podem ser encontrados no [🎦 ➜ Filmes e TV](../filmes-tv)

Não preciso nem dizer que você provavelmente vai precisar de um boqueador de anúncios como o uBlock Origin para ver qualquer coisa lá.

## Downloads

Se precisar acessar um site como o anterior é um inconveniente (quando eu quero ver algo no celular, por exemplo, os sites são quase inutilizáveis), você vai querer baixar seu filme.

## Google Drive

Caçar Google Drives na internet. Uma vantagem disso é que você, na verdade, nem precisa baixar o filme, dá de assistir direto no navegador. O lado ruim é a gigantesca instabilidade de tudo isso, porque eles são derrubados a torto e a direito, até porque o Google não tá a fim de ficar hospedando filme pirateado para você. A verdade é que você raramente vai encontrar o que quer num drive.

> Para caçar drives, a melhor técnica hoje é entrar no Twitter e usar palavras chaves como "Google Drive", "filmes".

## Torrents

Se você tem espaço e tempo sobrando para baixar algo, então essa é sua opção. De fato, além do RedeCanais que citei anteriormente, essa é a única forma que eu consumo mídia pirata hoje. Os torrents resolvem quase todos os problemas que citei antes de uma forma muito simples: não existe um único servidor que hosteia os vídeos: quando você baixa um arquivo no torrent, você baixa de todas as outras pessoas que baixaram ele antes, e após baixado você faz upload/hosteia (chama-se semear) para outros usuários futuros.

Sendo meio ideológico, essa é a verdadeira natureza da internet, e poderia resolver todos os nossos problemas. Só que em termos práticos, tem os dois grandes problemas: você precisa de espaço para armazenar sua série (que facilmente chega nas dezenas de gigabytes), e tempo para baixar toda essa brincadeira.

> Para encontrar torrents, esqueça todos os sites tipo [Comando.la](https://comando.la/), BLUDV, YTS: anos de experiência me ensinaram que a melhor forma de encontrar um torrent é literalmente só jogar o nome do filme/série + "torrent" na pesquisa do Google e clicar no primeiro link que não é propaganda, e estar equipado com um bloqueador de anúncios para não clicar em anúncio atoa.

> Já para animes, use o [Nyaa.si](https://nyaa.si/)

Antigamente tinha o RARBG, era o paraíso, tinha tudo lá, mas ele acabou, então tem que pesquisar no Google mesmo, não tem jeito.

EDIT: esqueci de comentar sobre trackers privados. Já entrei em alguns como o TorrentLeech e o BRSociety. Eu lembro de sofrer muito para seedar. No TorrentLeech, por exemplo, eu precisava de 240 horas (10 dias) seedando, porque dificilmente eu conseguia bater a ratio de 1,0. Já o BRSociety só tinha curso, nada que prestasse muito. Falam muito bem do Amigos Share Club, mas eu não tô a fim de doar 40 reais para conseguir um invite.

## Stremio

Não preciso nem dizer que ficar caçando link de torrent na internet é uma grande chatice. Inspirado nisso, surgiram aplicativos como o, Popcorn Time, ou o Stremio (que é o único que presta atualmente), que basicamente cataloga todos os links de torrents de cada filme, e você consegue acessar eles tipos, uma Netflix da vida, e melhor: você não precisa esperar o fim do download, pode assistir tipo um site de streaming!

Parece perfeito. E poderia ser perfeito. Mas não é. É bem bosta, na verdade. Isso porque os catálogos de torrents deles são no mínimo limitados. Veja só minha experiência com o Stremio: baixei todos os add-ons necessários, tava configurado bonitinho. Fui assistir Fargo: não tinha dublado. Beleza, vou ver Ladybug: só tinha dublado na primeira temporada (em baixa qualidade), e em inglês não tinha o primeiro episódio. Isso sem falar que muitos dos torrents não são seedados.

Para ver filmes, em geral, os mais famosos, é excelente, recomendo fortemente. Mas para assistir desenho animado/série, vai ter que pegar um RedeCanais ou um torrent do Google mesmo. (Ladybug inclusive eu achei as quatro primeiras temporadas num OneDrive aleatório).

Isso é muito frustrante para mim. Porque realmente poderia ser perfeito. Se houvesse uma mobilização da comunidade de criar torrents completos em português, especialmente de seriados, e deixar seedando eles (tipo como faziam no RARBG), seria o fim do streaming pago. Mas a gente ainda precisa jogar no Google e pegar torrents de sites duvidosos.

> Baixe o Stremio no site oficial [Stremio](https://www.stremio.com)

> Baixe os addons (Torrentio e Brazuca): [https://www.reddit.com/r/StremioAddons/comments/yd02dp/stremio_addons_list_huge_update/](https://www.reddit.com/r/StremioAddons/comments/yd02dp/stremio_addons_list_huge_update/)

## Jellyfin, Jackett, Sonarr, Radarr, Kodi

Softwares que costumam aparecer no contexto de pirataria de filmes. Vou tentar colocar mais ou menos o workflow dessa brincadeira:

> O Jackett é uma API que automaticamente busca em dezenas de indexadores de torrents online. Ele vai pesquisar em vários sites tipo 1337x, e juntar todos os resultados em um único lugar, que você pode usar diretamente ou alimentar

> Sonarr, Radarr basicamente ficam pesquisando por filmes/séries automaticamente para você, para você não ter que ficar pesquisando toda vez que sai um novo episódio da sua série ou algo assim. Eles podem (e normalmente são) alimentados pelos resultados do Jackett, e baixam automaticamente para você, criando seu catálogo de filmes. Também tem o Bazarr, Prowlarr e o Lidarr.

> Jellyfin é um servidor de streaming. É como se você estivesse hosteando seu próprio Netflix/RedeCanais. No contexto aqui, ele vai pegar os filmes que você baixou do Sonarr/Radarr. Daí você pode ver o catálogo de filmes que você baixou em qualquer lugar com internet.

> Kodi é uma interface bonita para ver seu catálogo de filmes. Caso você não queira deixar um servidor Jellyfin rodando, e só quer ver seus filmes em casa no seu hometheater.

## IPTVs e pirataria paga

Como eu falei, toda pirataria tem problemas, então pague alguém que vai hospedar os vídeos para você não ter trabalho nenhum. É sua melhor opção caso esteja disposto a pagar algum dinheiro. Sinceramente, exceto caso você seja muito pobre ou uma criança que não pode pedir para os pais pagarem, essa é a melhor opção. Tem tudo nessas IPTVs: filmes, séries, animes, desenhos animados, e até o futebolzinho. E você pode até assistir na TV, e baixar um aplicativo e ver no celular, e no PC. É perfeito, só que custa dinheiro.

E no fim das contas o problema é esse: ninguém faz trabalho de graça.

---

Guia original: https://www.reddit.com/r/pirataria/comments/1e0yd4z/todas_as_maneiras_que_se_consome_filmes_piratas_e/

Autor do guia: https://www.reddit.com/user/Murilouco/

--- 

Modificações por https://github.com/orchestralblend / [orchestralblend@systemli.org](mailto:orchestralblend@systemli.org)
