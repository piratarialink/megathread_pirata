---
title: "Porque é que não se pode confiar no Discord"
description: "Motivos do porque não se pode confiar no Discord"
---

# 🪶 ➜ Porque é que não se pode confiar no Discord

---

## A minha perspectiva

Aqui fica um pequeno resumo do meu ponto de vista. Juntei-me ao Discord em meados de 2016, bem no início da sua vida, e desde então tenho-o usado para fazer muitos amigos e lidar com tempos difíceis. Gostei de usar o Discord e vi-o introduzir muitas funcionalidades ao longo do tempo, como o novo menu de definições do servidor, as categorias de canais, as pastas do servidor, o registo de auditoria e as subscrições pagas, pelas quais paguei. Participei nos chats da API e desenvolvi vários bots, [um dos quais](https://amanda.moe/) tem estado em desenvolvimento ativo há anos, está em 2200 servidores e contando, e tem 466 horas de código da minha parte desde que comecei a contar em 2019, tudo feito sem qualquer ganho pessoal para mim. Tudo feito porque eu queria que as pessoas fossem felizes no Discord.

Eu gostava do Discord. Costumava considerar-me um fã do Discord. Mas agora, já não consigo esquecer os seus problemas.

Mudei as minhas comunidades para fora do Discord, ou fiz uma ponte com o Matrix, ou transferi-as para outras pessoas e deixei-as. De 86 servidores, só tenho 3, todos em ponte, pelo que não tenho de abrir o Discord para os ver. Estou a eliminar todas as minhas mensagens. É provável que não apague a minha conta, porque, ocasionalmente, preciso iniciar sessão para tratar de um assunto, e apagar a minha conta não faria praticamente nada. Falarei sobre isso mais tarde.

Eis a razão pela qual estou a abandonar o Discord.

## O produto é mal gerido

Há tantos problemas pendentes no Discord que todos nós nos esquecemos coletivamente ao longo do tempo. Aqui está uma lista engraçada de alguns que me estão a passar pela cabeça:

- Menções fantasmas e não-leituras fantasmas! Escreve-se uma mensagem, talvez com uma menção, e depois apaga-se a mensagem. Para todos os outros, o marcador de não-lida e o emblema de menção permanecem, apesar de não estar lá nada quando se abre o canal.
- Os bots não podem aceitar chamadas, no entanto, basta clicar com o botão direito do mouse num bot num servidor e selecionar "chamar" no menu de contexto. Esta é REALMENTE engraçada, devias mesmo experimentar esta. É interessante notar que se deram ao trabalho de corrigir isto para o utilizador do SISTEMA, mas não para os bots.
- As pessoas só podem definir cerca de 250 notas sobre outros utilizadores. Quando se atinge esse limite, as novas notas são silenciosamente rejeitadas pelo servidor e desaparecem quando se abre novamente o perfil. Não há forma de ver uma lista de pessoas com notas para as apagar.
- **O upload de arquivos é capado a 10mb se você não tiver nitro (500mb para usuários com nitro básico - o limite para usuários sem nitro pode ser aumentado para 100mb com o [BetterDiscord](https://github.com/riolubruh/YABDP4Nitro/)), diferente do telegram, que mesmo sem pagar nada você ainda pode enviar arquivos relativamente grandes. Só aí já matou uma porrada de possibilidades, tipo qualquer compartilhamento de mídia. No telegram, esses grupos normalmente enviam no próprio telegram, no discord teria que ser em alguma plataforma externa.**
- O seletor de região do servidor tem sempre um tema claro.
- O ecrã de transferência de aplicações tem sempre um tema claro.
- A caixa de diálogo para adicionar servidor tem sempre um tema claro.
- Todos os servidores têm um limite de membros que tem de ser aumentado manualmente pela equipe do Discord. Se um servidor tiver atingido este limite, ainda pode aparecer no explorador de servidores, mas quando clicas no botão de aderir, ele carrega para sempre. O pedido de API falhou em segundo plano com uma mensagem adequada, mas nunca foi criada uma UI para o efeito. Isto acontece em alguns servidores na página inicial do explorador de servidores.

Estes problemas não são novos. O problema das chamadas tem acontecido desde o início dos tempos. Os problemas com os temas existem desde o início dos tempos. O limite de notas existe desde o início dos tempos. O problema do limite de membros do servidor existe desde que o explorador de servidores foi adicionado.

Eu colocaria mais exemplos, mas são mais difíceis de encontrar porque há alguns meses a equipe do Discord limpou os quadros de relatórios de erros, apagando vários anos de relatórios de problemas. Estes problemas ainda persistem até hoje.

Não são grandes problemas. Não afetam como uso a aplicação no dia a dia. No entanto, são a prova de um problema muito mais grave: a equipe do Discord não se preocupa com estes problemas, está demasiada sobrecarregada e com falta de pessoal para lidar com eles, ou é simplesmente demasiada incompetente para os resolver. 

Há mais provas de incompetência. Durante algum tempo tivemos registros de auditoria do servidor, que permitiam saber se alguém apagava uma mensagem - mas não se alguém utilizava o end-point de apagar mensagens em massa. Isso não era registado de todo. [Oops, agora é uma coisa, mas passamos pelo menos um ou dois anos sem isso.](https://cadence.moe/i/abc28e)

O que a equipe tem feito em vez de corrigir esses problemas e fazer com que o aplicativo realmente pareça profissional? Têm estado [a alterar a interface do aplicativo móvel, claramente sem consultar as pessoas que realmente utilizam a aplicação, e toda mundo a odeia](https://reddit.com/r/discordapp/comments/gdkzyn/introducing_tabs_to_android/), Oops.

## Acessibilidade

Talvez o maior problema pendente no aplicativo tenha sido a taxa de contraste do texto comum. No tema claro, o contraste do texto em relação ao plano de fundo era algo em torno de 2,2:1 (o _mínimo_ para ser acessível conforme as WCAG AA é 4,5:1), o que significa que era extremamente difícil realmente _ler texto no aplicativo projetado para ler texto_ a menos que você tenha uma visão perfeita e um monitor preciso. Isso acabou sendo resolvido para a maioria das partes do aplicativo, mas logo depois eles mudaram os títulos de incorporação de perfeitamente bons para inacessíveis, o que é terrível e mostra que eles realmente não se importam e que não mudaram.

O padrão de total desrespeito às deficiências continua quando eles fizeram com que as mensagens fossem destacadas quando você passava o cursor sobre elas. Enquanto você rola esta página agora, tenho certeza de que o seu mouse está passando sobre ela em algum lugar. Agora imagine que as cores do parágrafo sobre o qual você estava passando o mouse mudaram significativamente à medida que você rolava a página e movia o mouse. Na verdade, eu teria deixado de usar o Discord imediatamente se não tivesse o conhecimento técnico para descobrir de onde vinham os estilos e modificar as cores para que não fizessem isso - o que, na verdade, é contra os termos de serviço. Tenho que violar os termos de serviço para tornar o aplicativo utilizável. Legal.

Se você não entende por que isso é importante, é incrivelmente perturbador para as pessoas que têm autismo, TDAH ou problemas relacionados. Para mim, minha mente se concentra demais no que está acontecendo na tela, impossibilitando-me de realmente ler e entender as mensagens. Na verdade, não consigo usar o aplicativo com essa configuração ativada.

Você não tem a coordenação motora ideal para usar o ponteiro do mouse? Talvez você não tenha mãos para movê-lo, ou talvez tremores o impeçam de apontar com precisão. É uma pena ser você, pois o aplicativo é quase inutilizável com o teclado. Não é possível usar a tecla Tab para mover-se pelas diferentes seções, pois ela foi substituída para sempre focar o campo de texto. Mesmo que você pudesse usar a tecla Tab, o anel de foco foi substituído para ficar invisível, de modo que você não tem ideia do que será ativado quando pressionar Enter. Você pode pensar que é difícil criar uma interface de usuário totalmente acessível pelo teclado. Pode ser difícil, mas definitivamente não é impossível. Veja o Visual Studio Code, um aplicativo com layout semelhante, que é totalmente acessível pelo teclado.

No início, não havia chamadas de vídeo. Depois, as chamadas com vídeo e o compartilhamento de tela foram adicionados às chamadas DM e DM em grupo, e as pessoas ficaram felizes. Elas queriam chamadas de vídeo do servidor, mas não as tinham. Não era um grande problema.

Então, alguém descobriu que era possível criar um link que o transportaria para dentro do canal de voz, que tinha uma interface extremamente boa para chamadas de vídeo e compartilhamento de tela, e isso funcionou.

Depois, nada mudou em relação a isso por 18 meses. O compartilhamento de tela ainda parecia ser apenas para DMs, embora ainda funcionasse perfeitamente nos servidores se você soubesse como fazer o link. Foram 18 meses em que esse era um recurso oculto e totalmente funcional.

Em seguida, o Go Live foi lançado e, no início, era péssimo. Originalmente, ele só permitia o compartilhamento de tela de jogos registrados e não permitia chamadas de vídeo. Depois, permitia o compartilhamento de tela de qualquer aplicativo, mas não de chamadas de vídeo. E, finalmente, mais de 6 meses após o lançamento do Go Live, eles adicionaram botões para abrir a chamada de vídeo e o compartilhamento de tela com o canal atual. Levou um total de 2 anos para transformar esse recurso oculto extremamente útil e perfeitamente funcional em um recurso visível.

## A equipe do Discord não é absolutamente confiável

E é tanto a equipe de suporte quanto os desenvolvedores.

Lembra como eu sugeri que os desenvolvedores estavam sobrecarregados, com falta de pessoal, simplesmente incompetentes ou nem se importavam? Você viu um pouco disso na seção acima. Vamos falar mais sobre isso.

Client mods, como temas personalizados ou plug-ins para adicionar comportamento extra útil e corrigir problemas, são contra os termos de serviço do Discord. Não vou debater se eles devem ser permitidos ou não neste momento, então vamos apenas assumir que eles não são permitidos. E a punição por usá-los deve ser consistente e justa.

O Discord não se esforça para detectar client mods, então você geralmente pode se safar deles, a menos que esteja fazendo algo como ingressar em servidores em massa mais rápido do que um humano poderia. No entanto, você será provavelmente banido ou repreendido se um funcionário Acontece que um membro vê você postar publicamente uma captura de tela de um cliente obviamente modificado.

Eu vi uma troca onde um membro da equipe viu uma captura de tela modificada e baniu toda a conta da pessoa, cancelando-a após 2 minutos, como uma piada.

Não acho que seja uma piada muito engraçada e não deve ser encarada levianamente.

Isso mostra que os funcionários têm o poder de fazer o que quiserem e não parece haver nenhum processo de revisão sobre o uso razoável do poder. Alguém decidindo que não, vou bani-lo imediatamente, mas temporariamente, como uma piada, NÃO é uma coisa normal que qualquer plataforma deveria permitir. Enviei algo na magnitude de um milhão de mensagens em meu tempo no Discord e fiz muitos amigos. Se alguém puder tirar meu acesso para falar com meus amigos assim mesmo... e boa sorte para encontrar as tags das pessoas ou links de convite do servidor para voltar a falar com elas novamente. Se Discord é a sua vida, então você está preso à sua vida por um fio de segurança de aranha.

Eu realmente odeio usar a frase “power trip”, realmente odeio, mas esta parte se qualifica.

[Funcionário da Discord Trust and Safety abusa do poder administrativo para ganho pessoal](https://web.archive.org/web/20200805124401/https://discord.news/trust-and-scam/)

Algumas das coisas neste site são piadas, mas este artigo é sério e destaca muito sobre como a equipe do Discord opera. Não endosso tudo o que o artigo referido diz, mas o assunto é importante.

Assim como não houve processo de revisão para o banimento do mod do cliente, também não há processo de revisão para ler conversas em servidores privados ou mensagens diretas de alguém. Os administradores não apenas têm ferramentas gráficas para fazer isso, eles sempre podem apenas [dar uma olhada no banco de dados e fazem o que quiserem.](https://cadence.moe/i/3f9cdf)

O Discord coleta uma quantidade obscena de dados sobre tudo o que você toca no aplicativo. Descrevi esses dados em uma postagem no Reddit, mas tenho algumas coisas a dizer antes de escrever o link.

- Se você usar o Discord apenas no navegador e instalar uma extensão de bloqueio tradicional definida como sem rastreamento, como o uBlock Origin, o Discord não será bloqueado porque eles alteraram especificamente seu endpoint de rastreamento de `/track` (obviamente detectável) para `/science` , que é uma maneira ingênua, mas eficaz, de contornar uma lista de filtros.
- Desligar os interruptores de coleta de dados não interrompe o envio de dados para `/science`. Os dados são _aparentemente_ descartados no lado do servidor, sem nenhuma maneira de realmente verificar isso. A razão pela qual eles fizeram isso dessa maneira é aparentemente para que eles possam sincronizar suas configurações entre dispositivos sem permitir acidentalmente a passagem de solicitações antes da sincronização das configurações, o que parece uma explicação razoável, mas eles definitivamente deveriam ter feito isso tanto no lado do cliente quanto no servidor. Não confio nem um pouco nisso.
- As informações em meu post no Reddit estão com os interruptores de rastreamento desligados, então provavelmente eles armazenam ainda mais coisas com eles ligados.

[Ok, aqui está a postagem. O título foi projetado especificamente para deixar o máximo de pessoas irritadas possível. Aproveite.](https://www.reddit.com/r/privacy/comments/eiicah/trawling_through_my_discord_data_package_after_35/)

[Por favor, veja também este relatório de outra pessoa.](https://luna.gitlab.io/discord-unofficial-docs/science.html)

## Modelo de negócios do Discord

Coloque isso na sua cabeça e mantenha-o aí: **DISCORD NÃO É RENTÁVEL.**

[Está basicamente confirmado aqui](https://old.reddit.com/r/discordapp/comments/g4l7lf/thanks_a_lot_discord_no_one_asked_for_this/fo11exg/) se você quiser ouvir os membros da equipe para obter todas as suas informações, mas se você, compreensivelmente, não tem saco pra ler tudo isso, há uma razão muito óbvia pela qual o Discord não é lucrativo e que não exige perguntas:

**Ser um armazenamento de arquivos e CDN totalmente gratuito, sem anúncios, com capacidade ilimitada, permanente, fácil de usar e acessível em qualquer lugar, não é um bom modelo de negócios.**

Além do armazenamento de arquivos, eles obviamente estão pagando muito dinheiro para que o hardware lide com [2,5 milhões de conexões de voz simultaneamente (artigo de setembro de 2018)](https://archive.is/Gdzgn), sem mencionar chat de texto, indicadores de digitação, atualizações de presença e tudo mais que entra no sistema. O Discord não é barato de executar.

Então, como eles conseguem dinheiro? Bem, um pequeno subconjunto de usuários paga alguns dólares por mês por mais recursos em um plano premium que nem estava disponível nos primeiros dois anos de vida do Discord. E sua loja de jogos falida, que provavelmente custou mais dinheiro para configurar do que o valor ganho em novas assinaturas, já que os jogos da loja de jogos estavam disponíveis na assinatura existente, e não adquiridos individualmente. Você pelo menos se lembrou que o Discord tentou administrar uma loja de jogos? Isso é compreensível se você não' t.

E esse é todo o dinheiro que eles aceitam dos usuários.

[O restante do dinheiro vem dos investidores.](https://techcrunch.com/2017/06/07/discord/) Os investidores dão dinheiro ao Discord no início, na esperança de que o Discord seja um bom produto. Por favor, dê uma olhada geral por um momento para pensar sobre a definição de "investir" - é quando você recebe mais dinheiro no final do que investiu no início. Mais cedo ou mais tarde, esses investidores vão querer ser pagos e vão querer receberá mais dinheiro do que investiu inicialmente. Isso exige que o Discord realmente receba mais dinheiro de seus usuários do que paga para executar o serviço.

**Não está recebendo mais dinheiro de seus usuários do que pagando para operar o serviço.**

Então, como os investidores vão ganhar dinheiro? Claramente, em algum momento, o Discord precisará implementar uma monetização agressiva. **Isso é um fato. Isso VAI acontecer.**

Aqui estão algumas opções que posso pensar:

- Mais serviços de assinatura. Não acho que isso funcione bem — o conjunto atual de recursos premium é bastante desejável para pessoas que têm dinheiro e querem recursos. Da última vez, eles tentaram assinaturas para algo não relacionado ao bate-papo (ou seja, a loja de jogos), mas não correu bem. Não creio que esta seja uma opção viável.
- Anúncios para todos, ou pelo menos para pessoas que não pagam. Isso provavelmente não funcionará relativamente bem, pois as pessoas provavelmente migrarão rapidamente para uma plataforma que não tem anúncios. Ou a maioria dos usuários irá baixar bloqueadores de anúncios, o que novamente significa nenhum dinheiro.
- Gerenciar mineradores de criptomoedas, eu acho? Isso lhes traria relações-públicas muito ruins e provavelmente não muito dinheiro, mas é uma opção.
- Faça com que todos paguem apenas para fazer login. Não tenho certeza de como isso funcionaria, então deixarei isso para o leitor considerar. Obviamente, sua reputação seria totalmente destruída, mas para a fração de usuários que permanecerão, acho que o Discord poderia mudar para um serviço somente pago e sobreviver.
- Empacote os metadados e o conteúdo das mensagens de todos e venda tudo ao licitante que pagar mais ou forneça um serviço de assinatura onde outras empresas possam pagar por consulta ao banco de dados para essas informações.

Esse último ponto é mais o provável de se acontecer.

Se você conversou com pessoas no Discord sobre algo pessoal, pensando que é privado, o Discord ainda mantém uma cópia de tudo. Eles conhecem seus interesses, suas atividades, seus relacionamentos, seus desejos, seus segredos, seus medos, sua vida. _As empresas pagarão MUITO dinheiro para acessar essas informações._ Também não seria muito difícil agregar, basta executar um pouco de aprendizado de máquina e pronto, você fez isso para cerca de 90% das pessoas. Isso não é novidade. Google, Facebook e muitos outros já estão empregando técnicas como essa para determinar seus interesses nos sites que você visita e na maneira como você interage com o conteúdo deles.

Sim, acho que isso vai acontecer. Gostaria de pensar que isso não vai acontecer. Eu gostaria realmente de poder dar tanta confiança ao Discord, mas eles não fizeram nada para merecer minha confiança. Nós sabemos que eles não se importam com a privacidade (veja também a seção de segurança mais adiante). Sabemos que eles precisam de dinheiro. Sabemos que precisarão de uma maneira de enriquecer rapidamente.

(Aliás, lembre-se de que os membros da equipe também têm acesso total ao banco de dados, bem como uma ferramenta para visualizar facilmente as conversas, então, se eles tivessem rancor de você, eles podem ir pessoalmente e pesquisar tudo sobre sua vida que você foi tolo o suficiente para compartilhe com pessoas em quem você confia. Se você acha que os membros da equipe são honrados e confiáveis ​​o suficiente para não fazer isso, é claro que você não leu as seções acima.)

Mesmo que o Discord, pelo amor de Deus, realmente não queira que isso aconteça, existe uma coisa chamada "aquisição", quando uma empresa adquire outros negócios com todos os seus ativos, usuários e dados. Isso é algo muito comum que acontece com empresas falidas.

O que você pode fazer sobre isso? Vou sugerir algumas defesas abaixo, então continue lendo.

## Problemas de segurança

O Discord tem um monte de falhas de segurança e privacidade. Você está surpreso? Você não deveria estar, tendo visto a qualidade do aplicativo e seus problemas de longa data que mencionei desde o início. Se esse é o nível de detalhe que eles fornecem às partes voltadas para o usuário, o que você acha que acontece com os problemas de segurança que eles sem dúvida tentam manter em segredo?

Só sei sobre alguns problemas de segurança, porque é claro que o Discord não os publicaria publicamente!

Você conhece o widget do servidor? Ele é usado para expor IDs de usuário, nomes de usuário e hashes de avatar de cada pessoa on-line no servidor. Qualquer pessoa poderia consultar essas informações se conhecesse o ID do servidor. Isso é um problema de segurança, porque com IDs de servidores suficientes, você pode saber quais pessoas estão em quais servidores sem precisar ingressar nesses servidores.

[Um amigo encontrou este.](https://cadence.moe/i/63d7de) A vulnerabilidade real era que você poderia editar _a mensagem de qualquer pessoa, sem a necessidade de permissões_ enviando uma solicitação de API personalizada, o que não é difícil nada a fazer. Fornecer `{flags: 4}` com sua carga útil de edição permite que você edite mensagens enviadas por outras pessoas. Ideias legais para isso:

- Edite sangue, pornografia ilegal ou conteúdo semelhante em mensagens antigas de outras pessoas e, em seguida, denuncie manualmente essas mensagens. Suponha que o Discord realmente leve você a sério e exclua a conta da pessoa.
- Sempre que alguém postar um link do PayPal, Patreon ou outro link de pagamento pela Internet, altere-o para o seu próprio link, para enganar o remetente e fazê-lo lhe dar dinheiro.
- Faça disso um recurso em um bot que esteja em alguns milhares (ou mais!) de servidores. Lucro, literalmente.

Não temos ideia se isso foi realmente explorado ou não. Dada a gravidade desse bug e que o Discord opera um programa de recompensas de bugs, você pensaria que haveria uma bela recompensa por isso. Na verdade, a pessoa que descobri que havia alguns códigos para assinaturas premium.

Só sei disso porque sou amigo da pessoa que descobriu isso. Eu me pergunto quantos bugs existem de gravidade semelhante e que ninguém conhece.

Você estava esperando por isso. Eu estava _apenas dizendo_ que o widget do servidor poderia ser usado para coleta de dados em massa e... [opa! Algumas pessoas já fizeram isso. Normalmente, isso seria muito engraçado, mas infelizmente o grupo por trás disso é de pessoas irritantes.](https://tracr.co/) Tente procurar seu próprio perfil e ver o que ele sabe sobre você. Este site está _definitivamente_ registrando mensagens nos servidores listados, apenas não as está tornando públicas. Por um _To just have fun_, tente clicar no link "solicitar remoção". [Aqui está uma postagem mais detalhada de outra pessoa sobre a história do Discool.](https://web.archive.org/web/20200607051616/https://resynth1943.net/2020/03/14/The-Discord-privacy-scandal.html)

Pessoas que não conseguem ver canais privados podem ver anexos que foram postados nesses canais em algumas circunstâncias. Lembro-me de ter visto uma demonstração de prova de conceito para isso, mas o link desapareceu agora.

## Então, o que você pode fazer em relação à coleta de dados?

Exclua sua conta. Brincadeirinha. O Discord não removerá suas informações, na verdade. Veja o que excluir sua conta faz:

-Remove sua foto de perfil

- Define seu nome de exibição para "Usuário excluído XXXXXX".
  -...

Sim, é isso. [Ele não exclui nenhuma de suas mensagens.](https://www.reddit.com/r/discordapp/comments/d90yzq/a_small_rant_on_privacy_issues_disregarding_of/f1etv3t) Ele não remove nem substitui o usuário permanente identificador que sua conta possui. Todos os seus dados permanecem no Discord e ainda podem ser lidos por qualquer pessoa.

Na verdade, você acabou de se ferrar, porque agora não consegue fazer login para excluir suas mensagens.

Não, [a equipe do Discord não excluirá todas as suas mensagens mediante solicitação.](https://www.reddit.com/r/discordapp/comments/d90yzq/a_small_rant_on_privacy_issues_disregarding_of/f1ev4h3) Você terá que analisá-las e excluí-las manualmente um por um.

Você _poderia_ tentar usar um selfbot ou um script, mas se você acionar seus sistemas de detecção automática, o que faz a exclusão em massa de mensagens, então você poderá ser bloqueado em sua conta, sem a capacidade de excluir mais nada.

Se você estiver em um servidor, não há problema em usar bots para excluir suas mensagens em massa, mas é claro que isso não funciona em mensagens diretas.

## Então, o que você pode usar em vez do Discord?

Este artigo é sobre o Discord, não sobre alternativas ao Discord. Provavelmente farei uma postagem de acompanhamento destacando como você pode efetivamente sair do Discord em breve. Por enquanto, aqui está uma lista de alternativas em potencial. As que mais gosto estão em primeiro lugar lista.

### Bate-papo de texto

XMPP, Rocket.Chat, Slack, Mattermost.

### Compartilhamento de voz, vídeo e tela

Mumble, Jitsi independente, Matrix+Jitsi, Peercalls, Houseparty.

## Considerações finais

Estou feliz por decidir sair do Discord porque me deu a chance de avaliar outras plataformas onde tenho a liberdade de fazer o que quero, falar com quem eu quiser, possuir minhas próprias mensagens e metadados e ter a capacidade de mudar coisas que não gosto e torná-las melhores.

[https://cadence.moe/i/7f4f97](https://cadence.moe/i/7f4f97)

— [Cadence](https://cadence.moe)

- [Discord Hold the Keys to Your Heart - Artemis Everfree](https://artemis.sh/2022/01/30/discord-holds-the-keys-to-your-heart.html)
- [My view on the issues of Discord - Austin Huang](https://austinhuang.me/discord-issues)
- [How to get any bot, no matter the size, permanently deleted from Discord in such a way that the creator cannot do anything to prevent it. - r/discordapp](https://www.reddit.com/r/discordapp/comments/fermo3/how_to_get_any_bot_no_matter_the_size_permanently/)
- [This classic post - r/discordapp](https://www.reddit.com/r/discordapp/comments/debr97/open_letter_to_discord/)
- [The cub drama](https://ganker.com/discord-has-a-furry-pedophile-problem/)
- [More about the cub drama](https://www.polygon.com/2019/1/30/18203692/discord-nsfw-policy-furry-cub)

[https://cadence.moe/blog/2020-06-06-why-you-shouldnt-trust-discord#does-not-care-about-you](https://cadence.moe/blog/2020-06-06-why-you-shouldnt-trust-discord#does-not-care-about-you)
