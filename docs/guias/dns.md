# Como Trocar o DNS no Windows e Android

![DNS](/images/dns.png)

 Ajustar as configurações de DNS pode oferecer diversos benefícios, como:

- Melhoria na velocidade da navegação (embora não aumente a velocidade de download);

- Aumento da privacidade;

- Contorno de bloqueios de sites, como Rede Canais e Bludv;

- Bloqueio de anúncios em aplicativos de dispositivos Android.

Este guia apresenta o passo a passo de como configurar o DNS tanto no Windows quanto em dispositivos Android.

## 1 - Principais Provedores de DNS

A seguir, listamos os provedores de DNS com servidores no Brasil, que não bloqueiam sites piratas e oferecem bom desempenho para usuários brasileiros:
Cloudflare DNS

- IPv4: `1.1.1.1` e `1.0.0.1`

- Nome do host: security.cloudflare-dns.com

- Excelente desempenho, mas não bloqueia anúncios em sites e apps.

AdGuard DNS

- IPv4: `94.140.14.14` e `94.140.15.15`

- Nome do host: dns.adguard-dns.com

- Especializado em bloquear anúncios e rastreadores, ideal para uma navegação mais limpa.

NextDNS

- IPv4: Obtido diretamente pelo site nextdns.io

- Funciona de maneira similar ao AdGuard, mas possui limitações no plano gratuito. Ao utilizar listas de bloqueios adicionais, alguns redirecionadores podem deixar de funcionar – inclusive o histórico do app YouTube – sendo necessário incluir o domínio s.youtube.com na whitelist.

:::info Nota: 
Os servidores públicos do Cloudflare e do AdGuard não apresentam esses inconvenientes, por isso serão o foco deste guia. Para testar a velocidade dos servidores DNS e conhecer mais opções, experimente o app Teste Velocidade DNS.
:::

Embora esses provedores bloqueiem a maioria dos anúncios, eles podem não ser 100% eficazes (por exemplo, no YouTube). Para uma remoção mais completa de propagandas em páginas web, a extensão uBlock continua sendo a melhor opção.

## 2. Configurando o DNS no Windows 10

A alteração do DNS no Windows afeta todo o sistema – todos os navegadores e aplicativos utilizarão os novos servidores.

1. Abrir Conexões de Rede: Pressione Alt+S e pesquise por Exibir Conexões de Rede.
2. Selecionar a Interface: Escolha a interface utilizada (Wi-Fi ou Ethernet), clique com o botão direito e selecione Propriedades. (Print abaixo).
3. Configurar IPv4:
   - Selecione Protocolo IP Versão 4 (TCP/IPv4) com dois cliques.
   - Marque a opção Usar os seguintes endereços de servidores DNS e insira os endereços do DNS escolhido (IPs IPv4 primário e secundário do tópico 1). (Print abaixo).

4. Configurar IPv6 :

- Retorne à lista de propriedades, selecione Protocolo IP Versão 6 (TCP/IPv6) e repita o procedimento:

  - Para Cloudflare: `2606:4700:4700::1111` e `2606:4700:4700::1001`

  - Para AdGuard: `2a10:50c0::ad1:ff` e `2a10:50c0::ad2:ff`

- Para outros endereços (IPv4 e IPv6) que não foram listados aqui, consulte os sites oficiais dos provedores.

- Recapitulando: Acesse Exibir Conexões de Rede > Selecione o seu adaptador de rede WiFi ou por cabo Ethernet > Propriedades > Dois cliques em (TCP/IPv4) e coloque o DNS IPv4 > Volte e vá em (TCP/IPv6) > coloque o endereço IPv6 do DNS desejado > Salve com OK.

![DNS2](/images/dns2.png)

## 3. Configurando o DNS no Android:

A configuração do DNS no Android pode variar conforme a interface – seja a One UI da Samsung, o HyperOS da Xiaomi ou versões mais próximas do Android puro. A seguir, detalhamos dois métodos usando o endereço DNS Over TLS, que é o Hostname DoT ao invés do IPv4 ou IPv6 usado no Windows, nesse caso, dns.adguard-dns.com ou security.cloudflare-dns.com.

4. Configuração no HyperOS (Xiaomi)

    1. Acesse as Configurações: Abra o menu Configurações do dispositivo.

    2. Opções de Conectividade: Selecione Mais opções de conectividade.

    3. Ativar DNS Privado: Toque em DNS Privado.

    4. Inserir o Nome do Host: Em Nome do host do provedor de DNS privado, digite:

        - Para Cloudflare: security.cloudflare-dns.com

        - Para AdGuard: dns.adguard-dns.com

![DNS3](/images/dns3.png)

5. Configuração no Android Puro (ex.: Motorola, Google Pixel, OnePlus, Custom ROMs)

    1. Acessar Configurações de Rede: Abra Configurações e toque em Rede e Internet.

    2. Configurar DNS Privado: Selecione a opção DNS Privado, e em ...Provedor Hostname digite o endereço DNS desejado.

    3. Salvar a Configuração: Toque em Salvar para confirmar a alteração

![DNS4](/images/dns4.png)

## Configuração Manual para Redes Wi-Fi

Esse método utiliza o protocolo IPv4 usado no Windows e altera a configuração apenas para a rede Wi-Fi atual:

  1. Acesse as Configurações de Wi-Fi: Vá em Configurações > Wi-Fi.

  2. Editar a Rede Conectada: Toque na seta ou ícone de configurações da rede Wi-Fi em uso.

  3. Configurar IP Estático: Em Configuração de IP, selecione Estático.

  4. Inserir os Endereços de DNS: Preencha os campos DNS 1 e DNS 2 com os endereços desejados.

![DNS5](/images/dns5.png)

:::info Nota:
O método de DNS Privado altera a configuração para todo o sistema, incluindo a rede móvel, enquanto a configuração manual na rede Wi-Fi altera apenas essa conexão específica. 
:::

Em outros sistemas operacionais, como iOS e Linux, o processo de configuração do DNS é semelhante ao descrito neste guia. Embora as etapas específicas possam variar, os princípios fundamentais permanecem os mesmos, permitindo que você adapte as instruções para esses sistemas. 

> Guia feito por [u/YuriRosas](https://www.reddit.com/r/pirataria/comments/1ip6236/como_trocar_o_dns_no_windows_e_android/)
