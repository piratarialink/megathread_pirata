---
title: "Como abrir portas no roteador em rede CGNAT"
description: "Guia de como abrir portas no roteador em rede CGNAT"
---

# Como abrir portas no roteador em rede CGNAT

Dependendo do tipo de alocação de portas e com a colaboração do provedor, é possível abrir porta do cliente torrent em rede CGNAT. Primeiro verifique alguns itens abaixo para descobrir se há bloqueios em seu sistema.

:::warning O processo de port forwarding pode expor a sua rede a riscos do tipo _port scan_, tenha certeza de que você confia no solicitante (warez ou tracker) antes de realizar qualquer alteração, a extensão [Port Authority](https://github.com/ACK-J/Port_Authority) pode mitigar esse problema na maioria das vezes
:::

## Verificando configurações no próprio sistema

![Habilitar UPnP ou UPnP/NAT no cliente torrent e no roteador](./images/cgnat-portas-1.png)

![UPnP roteador](./images/cgnat-portas-2.png)

> As opções acima podem ser diferentes em seu cliente torrent e/ou roteador.

## Verificando o Firewall

Verifique no firewall do sistema operacional se o cliente torrent tem permissão... Caso use soft de terceiros com firewall, verifique também e cuidado com esses anti-vírus cheio de frescuras, com vários módulos inúteis que bloqueiam tudo... menos os vírus.

![Firewall do Windows (1)](./images/cgnat-portas-3.png)

![Firewall do Windows (2)](./images/cgnat-portas-4.png)

Com o cliente torrent aberto acesse o site https://portchecker.co ou outro de sua preferência, digite a porta usada no cliente e clique para verificar (o ideal é aparecer aberta). Se o resultado for fechada ou inacessível, precisará abrir essa porta.

Deixe o cliente torrent configurado para usar porta única e não portas aleatórias a cada reinicialização. Configure o pc com IP interno fixo (seja pela placa de rede ou reserva de IP por MAC no roteador).

Acesse o roteador e abra a porta do cliente torrent para o IP interno fixo que definiu no PC... faça o teste de portas novamente. Se continuar fechada pelo menos sabe que o bloqueio não está em seu sistema.

## Quando o bloqueio está no provedor

Alguns provedores fornecem acesso limitado ao roteador... consegue alterar coisas básicas como nome e senha de Wi-Fi, etc, mas Port Forwarding, Servidores Virtuais (dependendo da marca do roteador tem nomes diferentes) não está disponível para acesso ilimitado... verifique se tem acesso completo ao roteador, caso não tenha solicite com o provedor.

![Acesso limitado](./images/cgnat-portas-5.png)

![Acesso completo](./images/cgnat-portas-6.png)

É o mesmo equipamento, no caso um Fiberhome... só mudou o login e senha de acesso. Notem a opção Port Forwanding (nesse modelo Fiberhome é onde abre a porta do cliente torrent).

:::tip Em roteadores domésticos da Huawei, a opção de Port Forwarding está denominada como 'Port Mapping'
:::

## Verificando se está em rede CGNAT

Acesse seu roteador e veja se o IP na WAN é o mesmo que aparece no site [MeuIP](https://www.meuip.com.br/).

- Se for o mesmo IP não está em CGNAT.
- Se for IP diferente está em CGNAT.

Abaixo exemplo de CGNAT. Os IPs são diferentes:

![IP na WAN](./images/cgnat-portas-7.png)

![Site Meu IP](./images/cgnat-portas-8.png)

Em uma rede CGNAT a alocação de portas para os clientes pode ocorrer de duas formas: dinâmica ou estática. Normalmente o provedor que define.

## Dinâmica:

Provedor indica no equipamento de saída da empresa que cada cliente tem direito a uma quantidade específica de portas, o sistema escolhe quais portas ele vai usar. Até o momento não sei como abrir portas nesse modo de alocação dinâmica.

## Estática:

Por questões de registro de log é o mais usado e o provedor define quais portas o cliente irá usar, exemplo:

- Cliente 1 pode usar portas 30401 a 30600;
- Cliente 2 pode suar portas 30601 a 30800;
- E assim por diante.

Se estiver em CGNAT ligue em seu provedor e peça sua faixa de portas. Diga que tentou abrir a porta de todas as formas e não conseguiu. Se pegar um atendente mais entendido, dirá para você se as portas são dinâmicas ou estáticas (a maioria entende nada.)

Talvez tenha que ligar umas 10x vezes ou mais... não desista! No geral eles não passam essas informações assim que solicitam.
Se passarem sua faixa de porta, ex, 30401 a 30600, escolha uma porta dentro da faixa indicada pelo provedor, configure o cliente torrent para usar essa porta e abra no roteador.

## CGNAT com porta aberta

![IP na WAN](./images/cgnat-portas-9.png)

## Site Meu IP

![](./images/cgnat-portas-10.png)

## Site Teste de Portas

![](./images/cgnat-portas-11.png)

Pronto! Rede CGNAT com a porta aberta. Sua conexão está perfeita.

Alguns provedores forçam a contratação de IP fixo (IP externo, não interno), alegando ser impossível abrir porta no CGNAT. Analise a opção e escolha o que for melhor para você.

Outros optam por migrar para IPv6! Não tenho informação sobre isso, se é melhor ou pior, como faz para abrir porta, quais as dificuldades de quem está em IPv6.

Toda informação nesse tutorial foram adquiridas com muita pesquisa em fóruns de Hardwares, cliente torrent, YouTube, e um agradecimento especial ao amigo que disponibilizou as imagens que fazem parte desse tuto, pois o mesmo está em rede CGNAT.

Boa sorte!

> Guia feito por Smeagol e [u/Wandrey](https://lemmy.eco.br/u/wandrey)
