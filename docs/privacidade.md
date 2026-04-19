# 🪶 ➜ Privacidade

:::info Essa página ainda é um esboço. Feito com base nas recomendações do [Privacy Guides](https://www.privacyguides.org/) e [Spyware Watchdog](https://spyware.neocities.org/)
:::

## Panorama da Segurança

A privacidade na internet é crucial para encontrar um equilíbrio entre a transparência e o anonimato. Embora seja importante responsabilizar aqueles que cometem crimes ou propagam conteúdos prejudiciais na internet, também é essencial garantir que as pessoas possam se expressar anonimamente quando necessário, sem medo de represálias ou exposição excessiva. Esse equilíbrio protege a liberdade de expressão e a diversidade de vozes, permitindo que todos tenham a oportunidade de participar do espaço digital de maneira segura e inclusiva.

> "O ciclo da vida: consumir recursos para produzir objetos que logo se tornarão lixo. Dados são coletados para criar desejos, lucro e poder, e para gerar medo, autocensura e resignação. Viver com medo é realmente uma experiência marcante, não é? Isso é o que significa ser um escravo." - [autistici.org](https://www.autistici.org/who/telltale)

## A visita policial

Em hipótese alguma permita a entrada deles na sua residência sem mandado judicial, que é um documento redigido e assinado por um juiz competente para busca e apreensão. No caso de insistência ou ameaças, peça licença e diga que irá chamar seu advogado imediatamente, e o faça! Relate o ocorrido e aguarde sua chegada para continuar o diálogo. Vejamos o que diz o seguinte preceito constitucional:

> Art. 5º, XI - a casa é asilo inviolável do indivíduo, ninguém nela podendo penetrar sem consentimento do morador, salvo em caso de flagrante delito ou desastre, ou para prestar socorro, ou, durante o dia, por determinação judicial;

A inviolabilidade do lar só pode ser excepcionada em casos de flagrante delito, desastre ou para prestar socorro. Além disso, durante o dia, a entrada na residência sem consentimento só é permitida mediante determinação judicial, conforme o Artigo 5º, Inciso XI, sendo necessária a emissão de um mandado judicial para adentrar na casa de alguém. Essa proteção legal é essencial para garantir os direitos fundamentais dos cidadãos e preservar a integridade do processo legal, conforme estabelecido pelo Artigo 5º, Inciso LVI, que veda a utilização de provas obtidas por meios ilícitos.

> Art. 5º, LVI - são inadmissíveis, no processo, as provas obtidas por meios ilícitos;

### Lei nº 13.869/2019 (Nova Lei de Abuso de Autoridade)

> Art. 22. § 1º I - coage alguém, mediante violência ou grave ameaça, a franquear-lhe o acesso a imóvel ou suas dependências;

> Art. 22. § 1º III - cumpre mandado de busca e apreensão domiciliar após às 21h (vinte e uma horas) ou antes das 5h (cinco horas).

## Violação de direito autoral

### Lei n° 9.610/1998

> Art. 46. Título II - Não constitui ofensa aos direitos autorais: a reprodução, em um só exemplar de pequenos trechos, para uso privado do copista, desde que feita por este, sem intuito de lucro;

E o mesmo artigo, no Título I, Alínea d, estabelece que está permitida a reprodução:

> de obras literárias, artísticas ou científicas, para uso exclusivo de deficientes visuais, sempre que a reprodução, sem fins comerciais, seja feita mediante o sistema Braille ou outro procedimento em qualquer suporte para esses destinatários;

## Navegadores

### [Librewolf](https://librewolf.net/)

O Librewolf é um navegador orientado para a privacidade baseado no Firefox. Habilita o recurso upstreamed do RFP pelo projeto Tor Uplift e já vem com o Ublock Origin pré-instalado. Você mesmo pode fazer um fork do Librewolf e a partir daí gerar seu próprio navegador local + dependências (recomendado somente para usuários avançados).

- Tecnologia Anti-Fingerprinting (Forte)
- Não é afiliado com a Mozilla Foundation
- Sem telemetria (coleta de dados sobre o uso do usuário)

![Librewolf](./images/librewolf.png)

### [IronFox](https://gitlab.com/ironfox-oss/IronFox)

Procurando manter o legado do Mull Browser vivo, este software leve é o meio mais robusto e confiável de navegar na internet pelo Android, totalmente código aberto, sem anúncios e com a telemetria já desativada desde a primeira interação.

- Personalizado com ênfase na privacidade
- Hardening avançado contra Fingerprint

:::info Se ainda preferir, você mesmo pode [desativar a telemetria](https://github.com/K3V1991/Disable-Firefox-Telemetry-and-Data-Collection) no about:config do [Fennec](https://f-droid.org/en/packages/org.mozilla.fennec_fdroid/): outro derivado do firefox mobile também disponível para Android
:::

:::tip Para adicionar algumas extensões vá para: Configurações > Sobre o IronFox > Toque na logo do IronFox cinco vezes > Volte para o painel de configurações > Avançado > Instalar extensão a partir de arquivo. Isso funciona também em outros navegadores baseados no Gecko
:::

### [Ungoogled Chromium](https://github.com/ungoogled-software/ungoogled-chromium)

Trata-se de um projeto open-source (código aberto), baseado em Chromium, mas sem manipulação do Google: remove os serviços e rastreamento do Google e telemetria.
Todavia requer que o usuário configure de maneira manual, para uma privacidade ainda mais robusta.

:::tip É fundamental que você use [isso](https://github.com/NeverDecaf/chromium-web-store)
:::

### [Cromite](https://github.com/uazo/cromite)

O Cromite é para o Chrome/Brave o que o Librewolf é para o Firefox; fork do Chromium baseado no fork do Bromite com bloqueio de anúncios e aprimoramentos de privacidade.

- Anti-Fingerprinting
- Adblock Plus
- Baseado em Chromium

:::info Disponível para Android, Windows e Linux
:::

![Cromite](./images/cromite.png)

### [Mullvad Browser](https://mullvad.net/en/browser)

O Navegador Mullvad é uma versão do Navegador Tor com as integrações do roteamento onion removidas, visando fornecer as tecnologias de anti-reconhecimento do Browser. Ele é gratuito e desenvolvido pelo Projeto Tor e distribuído pela Mullvad, e não requer o uso da VPN da Mullvad.

- Anti-Fingerprinting
- Modo de navegação privada

:::info Disponível para Windows e Linux
:::

## Gerenciador de Senhas

### [Bitwarden](https://bitwarden.com/)

O Bitwarden é um gerenciador de senhas de código aberto e plataforma de segurança de dados que permite armazenar de forma segura senhas, cartões de crédito e outros dados confidenciais. Ele oferece recursos como preenchimento automático de senhas, geração segura de senhas, compartilhamento seguro de senhas com outras pessoas e sincronização de dados entre dispositivos. O Bitwarden é acessível por aplicativos para desktop, navegador e dispositivos móveis, garantindo acesso fácil e seguro às suas credenciais em qualquer lugar.

:::info Você pode criar sua própria instância do Bitwarden, instalando o [Vaultwarden](https://github.com/dani-garcia/vaultwarden) em seu servidor - Somente para usúarios avançados
:::

### [KeePassXC](https://keepassxc.org/)

O KeePassXC é um gerenciador de senhas de código aberto e local, projetado para armazenar e gerar senhas seguras de forma criptografada. Ele oferece recursos como a organização de senhas em um banco de dados protegido por senha mestra, autenticação de dois fatores e a capacidade de sincronização de banco de dados entre dispositivos. O KeePassXC é altamente personalizável e suporta uma variedade de recursos adicionais, como anexos de arquivos e campos personalizados.

## VPN

Uma VPN (Virtual Private Network - Rede Virtual Privada) é uma tecnologia que cria uma conexão segura e criptografada entre o dispositivo do usuário e um servidor remoto. Essa conexão permite que o usuário navegue na internet de forma segura, protegendo sua privacidade e anonimato online. As VPNs são utilizadas para ocultar o endereço IP do usuário, contornar restrições geográficas, proteger dados sensíveis contra hackers em redes públicas, e acessar conteúdos bloqueados por governos ou empresas. Elas funcionam criptografando o tráfego de dados, tornando-o ilegível para qualquer pessoa que tente interceptá-lo. As VPNs também podem ser usadas para acesso remoto a redes corporativas de forma segura. No entanto, é importante escolher um provedor de VPN confiável que mantenha uma política rigorosa de não registro e ofereça velocidades de conexão satisfatórias.

### [Mullvad VPN](https://mullvad.net/)

- Barata, rápida e com vários servidores
- Suporta Monero

![Mullvad](./images/mullvad_vpn.png)

### [IVPN](https://www.ivpn.net/)

- Ótima alternativa para a Mullvad VPN

### [Private Internet Access](https://www.privateinternetaccess.com/)

- Suporta port-forwarding, fazendo suportar a rede P2P (peer-to-peer)

### [ProtonVPN](https://protonvpn.com)

- Suporta port-forwarding, fazendo suportar a rede P2P (peer-to-peer)

### [AirVPN](https://airvpn.org/buy/)

- Suporta port-forwarding, fazendo suportar a rede P2P (peer-to-peer)
- Suporta Monero

:::warning AirVPN deve ser a última opção como VPN, seus servidores não são bons
:::

## Bloqueador de anúncios e rastreadores

### [uBlock Origin](https://ublockorigin.com/)

O uBlock Origin é uma extensão de navegador popular projetada para bloquear anúncios, rastreadores e outros elementos indesejados em páginas da web. Ele funciona filtrando o conteúdo da página em tempo real, impedindo que anúncios sejam carregados, o que resulta em uma experiência de navegação mais rápida e limpa. Além de bloquear anúncios, o uBlock Origin também oferece opções avançadas de filtragem, permitindo que os usuários personalizem suas configurações conforme necessário. Esta extensão é conhecida por sua eficácia, baixo consumo de recursos e pela capacidade de proteger a privacidade dos usuários, bloqueando rastreadores e scripts maliciosos.

:::info Adicionar a lista [oisd.nl](https://oisd.nl) como lista adicional
:::

![uBlock Add](./images/ublock_oisd_add.png)

![uBlock Done](./images/ublock_oisd_done.png)

### [Pi-hole](https://pi-hole.net/)

O Pi-hole é uma solução de bloqueio de anúncios e filtragem de conteúdo baseada em rede, geralmente implementada em um Raspberry Pi ou em um servidor local. Funciona como um servidor DNS que intercepta solicitações de DNS feitas por dispositivos na rede e bloqueia solicitações para servidores de anúncios e domínios de conteúdo indesejado. Isso melhora a velocidade de navegação, reduz o consumo de largura de banda e aumenta a privacidade, já que muitos rastreadores e anúncios são bloqueados antes de serem carregados. O Pi-hole também fornece estatísticas detalhadas sobre o tráfego de rede e os domínios bloqueados, permitindo um controle mais preciso sobre o fluxo de dados na rede local.

:::info Utilizar a lista do [PerfLyst](https://github.com/Perflyst/PiHoleBlocklist) para bloquear anúncios na smartTV
:::

:::warning O Pi-hole é somente para usúarios avançados
:::

## Clientes de E-mail

:::tip Se a sua intenção for um provedor para atividades na web que exigem mais sigilo, talvez não valha a pena usar domains da clearnet. Nesse contexto, comunique-se por meio de [**OpenPGP**](https://www.openpgp.org/software/) + serviços de e-mail hospedados na rede Tor como [Mail2Tor](http://mail2torjgmxgexntbrmhvgluavhj7ouul5yar6ylbvjkxwqf6ixkwyd.onion/) (o melhor), [TorBox](http://torbox36ijlcevujx7mjb4oiusvwgvmue7jfn2cvutwa6kl6to3uyqad.onion/) (um dos melhores), [Cock.li](http://rurcblzhmdk22kttfkel2zduhyu3r6to7knyc7wiorzrx5gw4c3lftad.onion/) (o mais estável) e [Deep Mail](http://deepmailv2xihwk7ie5q3nlmyflvjlqhvlzt3wih43eo44sfvfingeqd.onion/) (nacional e amigável com postfix)
‎ 

**Você também pode hospedar seu próprio MTA dentro do [Mailcow](https://github.com/mailcow/mailcow-dockerized) ou [Mail-in-a-Box](https://github.com/mail-in-a-box/mailinabox), embora isso não seja muito indicado por ser [algo extremamente complexo e custoso](https://www.youtube.com/watch?v=aHpf9eJYeKQ)**
:::

### [Thunderbird](https://www.thunderbird.net/pt-BR/)

O Thunderbird pode tornar a comunicação mais segura através do suporte integrado para proxy SOCKS5, DNS-over-HTTPS e criptografia de mensagens. Também oferece forte proteção para o seu provedor de e-mail favorito (seja ele IMAP ou POP3) e recursos avançados de privacidade como chat via protocolo XMPP ou IRC. Além disso, se destaca dos demais clientes de e-mail ao impedir a execução automática de scripts e imagens embutidas por padrão, resultando em um ambiente isolado e capaz de barrar o compartilhamento de malware em uma cadeia de dispositivos. 

- Base para outros projetos sem ligação com a Mozilla como o [Betterbird](https://www.betterbird.eu/) e o [K-9 Mail](https://k9mail.app/).


## Sistema Operacional Android

### [GrapheneOS](https://grapheneos.org/)

Um sistema operacional mobile privado e seguro com compatibilidade de aplicativos Android. Desenvolvido como um projeto de código aberto sem fins lucrativos.

- Só suporta a linha Google Pixel, praticamente inexistente no Brasil
- Pode restringir totalmente o uso da internet por aplicativos

### [LineageOS](https://lineageos.org/)

- Suporta celulares antigos que não recebem mais atualizações de segurança
- A linha da Motorola é a mais acessível no Brasil
- Pode restringir totalmente o uso da internet por aplicativos

![LineageOS](./images/lineage_os.jpg)

## Criptomoedas

### [Bisq](https://bisq.network)

Bisq é uma DEX de código aberto exclusiva para desktop que permite que você troque moedas fiduciárias (via PIX do Brasil ou SEPA para residentes de Portugal) por bitcoin, monero, litecoin e ethereum através do p2p; funciona somente com o serviço Tor que a propósito já vem integrado após a instalação do cliente.

**Nota importante:** o bitcoin core não é confidencial por padrão, mas existem algumas formas relativamente fáceis de contornar isso, por exemplo: passar seus bitcoins para rede liquid e retornar para on-chain utilizando a [boltz.exchange](https://boltz.exchange) (**não compre ou transfira btc por meio da rede lightning**).

Além do método referido, também é possível usar mixers que atuam por técnicas coinjoin como o [JoinMarket](https://github.com/JoinMarket-Org/joinmarket-clientserver), uma ferramenta que exige um full node seu, ou seja, a blockchain inteira; é um localhost muito seguro. Dos outros participantes, ele exigirá o mesmo. Você envia do seu endereço para um gerado pelo JoinMarket e os outros participantes também, assim ele mistura as transações, tudo isso, de forma descentralizada.

:::tip A [Electrum Wallet](https://electrum.org/) é uma alternativa viável à carteira oficial do bitcoin, pois não exige que você baixe a blockchain inteira no seu computador
:::

:::warning Evite corretoras de cripto como a Binance, Kraken e Mercado Bitcoin - CEXs que envolvem a exposição de seus dados pessoais (KYC) e desenvolvimento baseado em código fechado
:::

## Criptografia de disco

### [VeraCrypt](https://www.veracrypt.fr/en/Home.html)

O VeraCrypt inclui suporte para HD, SSD, USB e TF.
Ele adiciona segurança aprimorada aos algoritmos usados ​para criptografia de sistemas e partições, tornando-os imunes a novos desenvolvimentos em ataques de força bruta. 
No VeryCrypt você pode manter uma partição só sua e outra escondida para momentos mais "oportunos" ou em situações que sua privacidade esteja em grave perigo.

### [LUKS](https://gitlab.com/cryptsetup/cryptsetup)

Com o LUKS você pode criar um arquivo simples ou até mesmo um conjunto de arquivos criptografados no Linux que, quando desbloqueados, formam um LVM (Logical Volume Manager) com os seus dados. Ao fornecer um formato em disco, ele não apenas facilita a compatibilidade entre distribuições, mas também fornece gerenciamento seguro de múltiplas senhas de usuários. O LUKS é um padrão de criptografia gratuito e de código aberto, feito para que você tenha certeza de que não há backdoors.

Melhores distros embarcadas com LUKS: **Debian** para servidores (recebe suporte oficial pela maioria dos programas), **Fedora** com KDE (Bazzite é uma vertente do Fedora mais indicada para gamers), **Arch** com i3 ou qualquer outro window manager minimalista (Endeavour e CachyOS são sistemas _rolling release_ derivados do Arch voltados para iniciantes) e **Mint Xfce** (para dispositivos com baixo desempenho).

:::info Caso você seja um usuário avançado, [distros sem systemd](https://nosystemd.org/) (boas para privacidade) também são uma opção
:::

## Criptografia de nuvem

### [Nextcloud](https://nextcloud.com/)

O Nextcloud é uma plataforma de colaboração e armazenamento em nuvem de código aberto, projetada para permitir que indivíduos e organizações gerenciem e compartilhem seus arquivos de forma segura e eficiente. Ele oferece uma ampla gama de recursos, incluindo armazenamento de arquivos, calendário, contatos, compartilhamento de documentos e colaboração em tempo real. O Nextcloud é altamente personalizável e pode ser instalado em **servidores locais ou em provedores de nuvem de terceiros**, oferecendo assim maior controle sobre os dados e garantindo conformidade com requisitos de segurança e privacidade.

## Leitura recomendada

- [Guia de privacidade para paranoicos](/guias/quero-privacidade.md)
