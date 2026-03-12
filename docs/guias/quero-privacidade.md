# 🪶 ➜ Guia de Privacidade para Paranoicos

:::info Essa página ainda é um esboço. Feito com base nas recomendações do [orchestralblend](https://github.com/orchestralblend) / [orchestralblend@systemli.org](mailto:orchestralblend@systemli.org)
:::

## O básico para privacidade

- Privacidade no Firefox: Betterfox ou Arkenfox
- uBlock Origin: Javascript sempre desativado em sites novos
- Navegador baseado em Chromium: Cromite
- Não cruzar nomes em logins: sempre use nomes diferentes em todas as redes sociais, de preferência palavras aleatórias
- Colocar uma senha na BIOS do computador e trocar a senha do wi-fi/roteador (cole seu endereço IP na barra de URL do navegador ou busque pela opção 'Manage router' no seu aparelho móvel)
- Criar **passphrases** com espaços e caracteres próprios da língua portuguesa: como `ç`, `~`, `'`
- **Jamais** salve senhas pelo navegador, você pode ser vítima de infostealers. Utilize um gerenciador como Bitwarden ou KeePassXC
- Sempre que possível fornecer um email temporário em sites que não sejam importantes: use de um provedor como o emailnator.com ou guerrilla mail
- Fotos, vídeos e outros arquivos: remover metadados (informações adicionais que revelam sua localização) com o exiftool ou image toolbox
- Verifique a procedência de URLs suspeitas: Confira o tempo de registro, selo SSL e certifique-se de que o CNPJ/CPF fornecido na página bate com o que é repassado por sites como [registro.br](https://registro.br/tecnologia/ferramentas/), siteconfiavel.com.br ou [invertexto.com](https://www.invertexto.com/whois).

## O intermediário para privacidade

- Configurar o navegador para excluir todos os dados sempre que você for fechá-lo (histórico, cookies, senhas, etc.): isso diminui a possibilidade de ter as contas invadidas e você não precisa se preocupar em caso de acesso não autorizado ao seu dispositivo
- VPN: IVPN com Multihop ou Mullvad
- Email: Autohospedado com mailcow/mail-in-a-box ou mailbox.org/cock.li + Thunderbird
- Encriptação de Email: GnuPG, GPG4WIN no Windows ou OpenKeychain no Android
- Armazenamento: HD ou SSD com VeraCrypt
- Criptografia: Cryptomator e VeraCrypt (AES-128-GCM, XChaCha20-Poly1305)
- Nuvem: systemli.org, NextCloud (chaves SSH, backup e armazenamento KeePassXC/Vaultwarden)
- Navegador: Baseado no Firefox + nuMatrix + CSS Exfil Protection + Containers + arkenfox.js
- Chat: Lemmy, SimpleX, Mastodon, XMPP e systemli.org
- XMPP: Servidores que suportam OMEMO + Thunderbird, Psi+ ou Gajim
- Android: GrapheneOS, LineageOS ou CalyxOS
- Desktop: Linux com LUKS (Live Boot com Whonix/Tails OS para um sigilo maior)
- Anti-DDoS: Anubis
- Provedor de dominio: Sarek Oy, Porkbun
- Git: Forgejo
- Meet: systemli.org, Jitsi
- Criptomoeda: Monero 
- Hospedagem: Servers.guru
- Pesquisa: 4get
- Roteador: Qualquer um com OpenWRT (WPA3), recomendo Raspberry Pi 4/5 + Pi-hole com lista do oisd.nl

## O avançado para privacidade

- Onde comprar monero: [Telegram](https://t.me/MoneroPagamentosSuporte), [Bisq](https://github.com/bisq-network/bisq), [RetoSwap](https://retoswap.com/#download), [Cake Wallet](https://github.com/cake-tech/cake_wallet/), [Monerujo](https://github.com/m2049r/xmrwallet/), [Infinity Exchanger](https://exchanger.infinity.taxi/), [Trocador](https://trocador.app/pt/) ou qualquer lugar que não precise de identidade (KYC).
- É possível comprar outra moeda e fazer exchange para Monero, esse tipo de troca deixa rastros insignificantes. 
Melhor caminho: **p2p** ➜ **BRL** ➜ **BTC ou LTC** ➜ **XMR** ➜ [**Cold Wallet**](https://www.getmonero.org/pt-br/downloads/index.html) (sempre receber numa wallet disposable e transferir para a sua).
- Cobrar e receber por serviços: pessoalmente ou através de plataformas de escrow como o [FairTrade](https://kycnot.me/service/fairtrade) por exemplo.
- **O IDEAL É RODAR MONERO [LOCALMENTE](https://sethforprivacy.com/guides/run-a-monero-node/) NO SEU PRÓPRIO NODE PARA NÃO CORRER O RISCO DE SER MONITORADO.**
Mas caso você esteja usando um dispositivo móvel, uma abordagem interessante é filtrar e usar nodes conectados à rede TOR (via [ORBOT](https://github.com/guardianproject/orbot-android)) deste site aqui: https://www.ditatompel.com/monero/remote-node. [[1]](https://pirataria.link/guias/quero-privacidade#creditos)


:::warning O projeto pirataria se compromete em recomendar apenas o que na nossa visão é seguro e confiável
:::

‎ 
‎ 
### Créditos:
- [1] [Dread (endereço onion)](https://dreadytofatroptsdj6io7l3xptbet6onoyno2yv7jicoxknyazubrad.onion/d/Monero/wiki?id=0d4cc7df)
- [OpSec Guide](https://raw.githubusercontent.com/whos-zycher/opsec-guide/refs/heads/main/guide.md)
‎ 
---
