# Jellyfin e familia Arr - Docker Compose

Guia quase completo do servidor caseiro para assistir filmes e séries com o Docker, estaremos utilizando o Jellyfin. Eu estarei utilizando o OS Ubuntu Server, eu tentarei ser o mais amigável possível, mas se uma parte você não entendeu, pergunte nas respostas. Nas configurações de cada aplicativo, recomendo usar as configurações da megathread, já que aqui irei só ensinar a usar o Docker. Neste guia nós vamos utilizar:

-   Docker: Uma ferramenta que nos permite colocar as aplicações em containers, e isso nos permite distribuir um único arquivo ou comando que poderá ser rodado em qualquer sistema. (Neste guia vamos usar o Docker Compose)
-   Prowlarr: Um aplicativo que rodará em seu navegador que nos permite buscar torrents em diversos sites.
-   Flaresolverr: Ele serve para poder acessar sites que possuem Cloudflare.
-   Radarr: Um aplicativo que nos dará a habilidade de procurar por filmes, ele irá pegar os metadados do filme e mandar para o Prowlarr baixar.
-   Sonarr: Mesma coisa que o Radarr, porém para séries.
-   QBitTorrent: Aplicativo que irá ser usado para baixar os torrents que o Radarr e Sonarr mandar o Prowlarr buscar.
-   Jellyfin: Onde nós iremos streamar todos os filmes e séries baixados, exemplo de como ficará o seu abaixo:

![](https://i.imgur.com/cgxVeVz.png)

Primeiramente estaremos criando a estrutura de pastas do nosso servidor, estarei criando ela na pasta home, então utilizarei esses comandos (remova o "#" e o que vem depois, estarei utilizando eles para dizer o que cada comando faz):

```
$ cd ~ # Nos levará ao home (pode criar em qualquer lugar)
$ mkdir media_server # Criará a nossa pasta no home
$ cd media_server # Entrando na pasta media_server
$ mkdir media media/downloads media/movies media/shows # Criará a nossa estrutura de arquivos (vou explicar o que cada uma faz)
$ touch docker-compose.yml # O arquivo que o Docker Compose gera`

```

Nossa estrutura ficará assim, comentário ao lado explicando o que cada um faz:

├── docker-compose.yml -> Arquivo que o docker compose ira usar para rodar os aplicativos

└── media -> Pasta onde iremos salvar os arquivos de media

├── downloads -> Onde o QBitTorrent fara o download dos torrents

├── movies -> Onde o raddar vai mover os filmes que o QBitTorrent terminar de baixar

└── shows -> Onde sonnar vai mover os filmes que o QBitTorrent terminar de baixar

Agora vamos editar o docker-compose.yml, mas antes disso tenha certeza que você tem o Docker baixado na versão mais recente com esses comandos:

```
$ sudo apt-get update # Ira atualizar a nossa lista de aplicativos e ver se possui atualizações
$ sudo apt-get upgrade # Ira atualizar nossos aplicativos pela lista que atualizamos anteriormente
$ sudo apt-get install docker # Isso irá instalar o Docker caso você não tenha baixado ainda

```

Vamos começar a editar o arquivo com o seguinte comando, irei usar o nano, por mais que eu prefira o vim, o nano é mais amigável, mas use qualquer editor de texto que você preferir, para abrir o nano basta usar esse comando: `$ nano docker-compose.yml`

Vou primeiro fazer a configuração do Jellyfin para você não se perder, os comentários serão feitos com "#", e é opção sua remover, já que ele não será lido pelo Docker:

```
version: "3.5" # A versão do Docker Compose que vamos usar

services: # Aqui vamos listar os aplicativos que vão ser usados
  jellyfin: # Esse será o aplicativo usado para podermos assistir os filmes e séries
    image: lscr.io/linuxserver/jellyfin:latest # Aqui iremos pegar a imagem (pode considerar como sendo o aplicativo)
    container_name: jellyfin # O nome que você quer dar ao container (cada aplicativo listado nessa área de services é um container)
    environment: # Configurações que serão usadas dentro do aplicativo, os dois primeiros itens você não precisa se preocupar muito
      - PUID=1000
      - PGID=1000
      - TZ=COLOQUE SEU FUSO HORÁRIO AQUI # Você pode procurar o seu nessa lista (Formato Continente/Cidade: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones)
    volumes: # Os containers por padrão não têm acesso aos arquivos então vamos configurar aqui as pastas que ele tem acesso
      - ./jellyfin/config:/config # Aqui ele criará uma pasta jellyfin e uma subpasta config para colocar as configurações do jellyfin, porém no aplicativo, ele vai entrar nessa pasta pelo /config e não pelo ./jellyfin/config, ele meio que cria uma tradução do caminho
      - ./media:/media # Para ele ter acesso a pasta onde vamos guardar nossa mídia
    ports: # Qual porta ele ficará alocado, mesma coisa do volumes, a esquerda ficará a porta que será usada externamente, e na direita qual o aplicativo irá usar
      - 8096:8096
    expose: # Apenas necessário para caso você queira deixar o jellyfin aberto para toda a internet, precisa de configurações adicionais no roteador
      - 8096:8096
    restart: unless-stopped # Se o programa der problema por exemplo, ele vai só reiniciar, ele só não vai reiniciar caso a gente manualmente pare ele

```

Recomendo que você leia os comentários caso você não entenda sobre o Docker, e relembrando, qualquer dúvida apenas coloque nas respostas para eu tentar resolver. Todas as configurações seguem esse mesmo padrão, então terá menos comentários a partir de agora, se você quiser salvar o arquivo apenas apertar Ctrl+O e depois Enter, caso peça outra coisa apenas siga o que o nano está pedindo, caso queira sair Ctrl+X.

Agora vamos colocar as configurações dos aplicativos que vão baixar os torrents (Prowlarr, QBitTorrent, Flaresolverr), lembrando de colocar eles dentro do "services", no mesmo nível do "Jellyfin":

```
   prowlarr:
    image: lscr.io/linuxserver/prowlarr:latest
    container_name: prowlarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=COLOQUE SEU FUSO HORÁRIO AQUI
    volumes:
      - ./prowlarr/config:/config
    ports:
      - 9696:9696
    restart: unless-stopped

  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=COLOQUE SEU FUSO HORÁRIO AQUI
      - WEBUI_PORT=8080 # Essa porta é necessária para acessar a webui, ela vai ser necessária já que você não vai conseguir abrir o aplicativo o qbittorrent e por causa que aplicativos como sonarr e radarr irão baixar os arquivos por ele
      - TORRENTING_PORT=6881
    volumes:
      - ./qbittorrent/config:/config
      - ./media/downloads:/downloads
      - ./media/movies:/movies # Sobre esses dois últimos, eu não tenho certeza se são necessários, mas eu recomendaria deixar por dúvida
      - ./media/shows:/shows
    ports:
      - 8080:8080
      - 6881:6881
      - 6881:6881/udp
    restart: unless-stopped

  flaresolverr:
    image: ghcr.io/flaresolverr/flaresolverr:latest
    container_name: flaresolverr
    environment:
      - TZ=COLOQUE SEU FUSO HORÁRIO AQUI
    ports:
      - 8191:8191
    restart: unless-stopped

```

Estamos quase prontos, agora precisamos apenas do Radarr e do Sonarr para gerenciar os filmes e séries que queremos baixar:

```
  radarr:
    image: lscr.io/linuxserver/radarr:latest
    container_name: radarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=COLOQUE SEU FUSO HORÁRIO AQUI
    volumes:
      - ./radarr/config:/config
      - ./media/movies:/movies
      - ./media/downloads:/downloads
    ports:
      - 7878:7878
    restart: unless-stopped

  sonarr:
    image: lscr.io/linuxserver/sonarr:latest
    container_name: sonarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=COLOQUE SEU FUSO HORÁRIO AQUI
    volumes:
      - ./radarr/config:/config
      - ./media/shows:/shows
      - ./media/downloads:/downloads
    ports:
      - 8989:8989
    restart: unless-stopped

```

Já está quase tudo pronto, só precisamos seguir as configurações da megathread, mas antes disso nós precisamos ligar os containers, basta rodar: `$ sudo docker compose up -d`

Como estamos usando as portas padrão não se preocupe com a compatibilidade das nossas portas com a da megathread, mas nas configurações dos próprios aplicativos não é necessário colocar seu IP, apenas `nome_do_container:porta`. Você pode replicar esse arquivo em qualquer lugar que ele vai funcionar, basta colocar as configurações adicionais, eu recomendo fortemente ler a documentação de cada programa caso você fique com alguma dúvida, eles provavelmente vão conseguir te responder melhor que eu, mas não fique com medo de postar nenhuma dúvida, estou aqui para ajudar todos meus companheiros piratas. Talvez eu possa fazer um post ensinando a baixar o Bazarr, por mais que eu não use ele posso tentar aprender para poder trazer aqui no sub.

Assim vai ficar o arquivo na íntegra:

```
version: "3.5" # A versão do docker compose que vamos usar

services: # Aqui vamos listar os aplicativos que vão ser usados
  jellyfin: # Esse será o aplicativo usado para podermos assistir os filmes e séries
    image: lscr.io/linuxserver/jellyfin:latest # Aqui iremos pegar a imgem(pode considerar como sendo o aplicativo)
    container_name: jellyfin # O nome que você quer dar ao container (cada aplicativo listado nessa area de services é um container
    environment: # Configurações que serão usadas dentro do aplicativo, os dois primeiros items você não precisa se preocupar muito
      - PUID=1000
      - PGZID=1000
      - TZ=COLOQUE SEU FUSO HORÁRIO AQUI # Você pode procurar o seu nessa lista (Formato Continente/Cidade: https://en.wikipedia.org/wiki/List_of_tz_database_time_zones
    volumes: # Os conteiners por padrão não tem acesso aos arquivos então vamos configurar aqui as pastas que ele tem acesso
      - ./jellyfin/config:/config # Aqui ele criara uma pasta jellyfin e uma subpasta config para colocar as configurações do jellyfin, porem no aplicativo, ele vai entrar nessa pasta pelo /config e não pelo ./jellyfin/config, ele meio que cria uma tradução do caminho
      - ./media:/media # Para ele ter acesso a pasta onde vamos guardar nossa medias
    ports: # Qual porta ele ficara alocado, mesma coisa do volumes, a esquerda ficara a porta que sera usada externamente, e na direita qual o aplicativo ira usar
      - 8096:8096
    expose: # Apenas necessario para caso você queira deixar o jellyfin aberto para toda a internet, precisa de configurações adicionais no roteador
      - 8096:8096
    restart: unless-stopped # Se o programa der problema por exemplo, ele vai só reiniciar, ele só não vai reiniciar caso a gente manualmente pare ele

  prowlarr:
    image: lscr.io/linuxserver/prowlarr:latest
    container_name: prowlarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=COLOQUE SEU FUSO HORÁRIO AQUI
    volumes:
      - ./prowlarr/config:/config
    ports:
      - 9696:9696
    restart: unless-stopped

  qbittorrent:
    image: lscr.io/linuxserver/qbittorrent:latest
    container_name: qbittorrent
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=COLOQUE SEU FUSO HORÁRIO AQUI
      - WEBUI_PORT=8080 # Essa porta é necessaria para acessar a webui, ela vai ser necessaria já que você não vai conseguir abrir o aplicativo o qbittorrent e por causa que aplicativos como sonarr e raddar irão baixar os arquivos por ele
      - TORRENTING_PORT=6881
    volumes:
      - ./qbittorrent/config:/config
      - ./media/downloads:/downloads
      - ./media/movies:/movies # Sobre esses dois ultimos, eu não tenho certeza se são necessarios, mas eu recomendaria deixar por duvida
      - ./media/shows:/shows
    ports:
      - 8080:8080
      - 6881:6881
      - 6881:6881/udp
    restart: unless-stopped

  flaresolverr:
    image: ghcr.io/flaresolverr/flaresolverr:latest
    container_name: flaresolverr
    environment:
      - TZ=COLOQUE SEU FUSO HORÁRIO AQUI
    ports:
      - 8191:8191
    restart: unless-stopped

  radarr:
    image: lscr.io/linuxserver/radarr:latest
    container_name: radarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=COLOQUE SEU FUSO HORÁRIO AQUI
    volumes:
      - ./radarr/config:/config
      - ./media/movies:/movies
      - ./media/downloads:/downloads
    ports:
      - 7878:7878
    restart: unless-stopped

  sonarr:
    image: lscr.io/linuxserver/sonarr:latest
    container_name: sonarr
    environment:
      - PUID=1000
      - PGID=1000
      - TZ=COLOQUE SEU FUSO HORÁRIO AQUI
    volumes:
      - ./radar/config:/config
      - ./media/shows:/shows
      - ./media/downloads:/downloads
    ports:
      - 8989:8989
    restart: unless-stopped

```

Após configurar tudo de acordo com a megathread(menos o jellyfin, deixei um video aqui em baixo como guia para configurar ele), você precisara fazer algumas coisas a mais para fazer o flaresolverr funcionar. Vá para o prowlarr -> Settings -> Indexers -> Botão de mais -> Selecione Flaresolverr -> Coloque na tag "flaresolverr" -> Coloque no host flaresolverr:8191. Agora em todo host que der problemar com cloudflare é só ir nas configurações do indexer, procurar tags, e colocar essa.

Como nós não temos um guia do Jellyfin na megathread, aqui está um vídeo que eu recomendo para configurar o Jellyfin: [https://www.youtube.com/watch?v=mAHGh2hBFdY&t=493](https://www.youtube.com/watch?v=mAHGh2hBFdY&t=493), a partir do tempo 7:17, mas lembre-se que na parte de escolher onde os filmes ou séries estão salvos, coloque /movies para filmes e /shows para séries, já que foi assim que nós configuramos.

Para descobrir seu IP privado no Linux basta rodar o comando: `$ hostname -I`, ele provavelmente vai mostrar diversos IPs, mas ele provavelmente é o primeiro, caso for no Windows basta rodar `$ ipconfig` e procurar seu adaptador e dentro dele vai ter a opção "Endereço IPv4" e é ele que você vai querer, você vai precisar desse IP para poder acessar os sites que cada aplicativo gera.

Espero que tenham gostado, se eu tiver errado alguma coisa(provavelmente identação), por favor me avisem nas respostas, eu não sou um especialista, eu faço isso só por causa que eu gosto, então me perdoem caso eu faça algum erro.

---

All credits go to the respective creators.

Extracted from: https://old.reddit.com/r/pirataria/comments/1bclktc/guia_jellyfin_e_familia_arr_docker_compose/

Video backup: https://odysee.com/mAHGh2hBFdY:eb1d0f15f287d30b9969d5b151599bceea54b145
