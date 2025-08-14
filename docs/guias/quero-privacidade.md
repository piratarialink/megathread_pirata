# 🪶 ➜ Guia de Privacidade para Paranoicos

:::info Essa página ainda é um esboço. Feito com base nas recomendações do [orchestralblend](https://github.com/orchestralblend) / [orchestralblend@systemli.org](mailto:orchestralblend@systemli.org)
:::

## O básico para privacidade

- Privacidade no Firefox: Betterfox ou Arkenfox
- uBlock Origin: Javascript sempre desativado em sites novos
- VPN: IVPN ou Mullvad
- Navegador baseado em Chromium: Cromite
- Não cruzar nomes em logins: sempre use nomes diferentes em todas as redes sociais, de preferência palavras aleatórias
- Trocar a senha do wi-fi e roteador: cole seu endereço IP na barra de URL do navegador
- Criar passwords com espaços e caracteres próprios da língua portuguesa: como `ç`, `~`, `'`
- **Jamais** salvar senhas pelo navegador: você pode ser vítima de infostealers, utilize um gerenciador como Bitwarden ou KeePassXC
- Sempre que possìvel usar um email temporário em sites que não sejam importantes: use de um provedor como o emailnator.com ou guerrilla mail
- Verifique a procedência de URLs suspeitas: Confira o tempo de registro, selo SSL e certifique-se de que o CNPJ/CPF informado na página bate com informações repassadas por serviços como [registro.br](https://registro.br/tecnologia/ferramentas/), siteconfiavel.com.br ou pelo próprio WHOIS da linha de comando do seu computador

## O intermediário para privacidade

- Configurar o navegador para excluir todos os dados sempre que você for fechá-lo (histórico, cookies, senhas, etc.): isso diminui a possibilidade de ter as contas invadidas e você não precisa se preocupar em caso de acesso não autorizado ao seu dispositivo
- VPN: IVPN com Multihop
- Email: mailbox.org + systemli.org com Thunderbird + uBlock Origin ou Cock.li (Servidor XMPP) + TailOS
- Armazenamento: HD ou SSD com Veracrypt
- Criptografia: Cryptomator e Veracrypt
- Nuvem: systemli.org NextCloud (chaves PGP, backup e armazenar KeePassXC)
- Navegador: Firefox + uBlock Origin + oisd.nl + Containers + arkenfox.js
- Rede social: Lemmy, Mastodon, XMPP e systemli.org Matrix
- Android: GrapheneOS ou LineageOS
- Desktop: Linux com LUKS
- Provedor dominio: Njalla, Sarek Oy, Porkbun ou Cloudflare
- Meet: systemli.org, Jitsi
- Moeda: Monero 
- Hospedagem: Servers.guru ou Njalla
- Pesquisa: DuckDuckGo.com
- Roteador: Qualquer um com OpenWRT, recomendo Raspberry Pi 4/5 + Pi-hole com lista do oisd.nl

:::tip Onde comprar moeda: [Bisq](https://github.com/bisq-network/bisq), [Cake Wallet](https://github.com/cake-tech/cake_wallet/), [Monerujo](https://github.com/m2049r/xmrwallet/), [Telegram](https://t.me/MoneroPagamentosBot?start=ref_e5874ba0587c9630) ou qualquer lugar que não precise de identidade (KYC).

**É possível comprar outra moeda e fazer exchange para Monero, esse tipo de troca deixa rastros insignificantes. 
Melhor caminho: p2p ➜ BRL ➜ BTC ➜ XMR ➜ [Cold Wallet](https://www.getmonero.org/pt-br/downloads/index.html) (sempre receber numa wallet disposable e transferir para a sua).**

**Como conseguir: prestando serviços online que pagam em Monero ou comprar pessoalmente.**

**O IDEAL É RODAR MONERO LOCALMENTE NO SEU PRÓPRIO NODE PARA NÃO CORRER O RISCO DE SER RASTREADO. Caso você esteja usando um dispositivo móvel, uma abordagem interessante pensando no OPSEC é filtrar e usar nodes conectados à rede TOR (via [ORBOT](https://github.com/guardianproject/orbot-android)) deste site aqui: https://monero.fail/.**
:::


:::warning O projeto pirataria se compromete em recomendar serviços que na nossa visão são seguros e confiáveis.
:::
