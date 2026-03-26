# 🪶 ➜ Os piores e "menos piores" antivírus

:::info
Essa página foi um post tirado do Lemmy.
[orchestralblend](https://github.com/orchestralblend) / [orchestralblend@systemli.org](mailto:orchestralblend@systemli.org)
:::

**Se quiser um resumo dos antivírus mais confiáveis, ele está no final do post. Grato.**

Eu trabalho com engenharia reversa desde 2018, e a maioria do meu trabalho é manual, analiso "binaries", como chamamos no Brasil, executáveis. Utilizo o que há de mais recente no mercado para análise de malwares, como **dnSpy**, **IDA Pro**, **Ghidra**, **x96dbg**, **Frida**, entre outros programas.

O termo "malware" define vírus, trojans e afins. No geral, são arquivos maliciosos com o único objetivo de prejudicar você.

Desde 2013, época em que eu pegava malware a cada segundo, sendo um jovem querendo só jogar na paz, fui aprendendo com o tempo qual era o botão correto de download, já que não sabia da existência dos bloqueadores de anúncios. Experimentei diferentes antivírus como Norton, Avast, AVG, Avira, Kaspersky, BitDefender, McAfee, TotalAV, Windows Defender (Windows 7, 8 e 8.1) e MalwareBytes. Esses são os que eu lembro.

## Avira

Usei o Avira para os computadores que eu não virtualizava. Foi bom, até a Norton comprar a empresa. [Fonte](https://www.pcmag.com/news/nortonlifelock-buys-avira-to-expand-into-freemium-antivirus-protection)

## Norton e AVG

O Norton já tinha uma péssima reputação, vinha com os computadores da Samsung e ficava oferecendo pacotes. Mesmo modelo do AVG. "Funky bloatware".

## Avast

Não recomendo, especialmente após a Avast ser pega ["coletando dados"](https://www.cisoadvisor.com.br/avast-e-multada-em-us-165-mi-por-venda-de-dados-de-usuarios/) de usuários.

_Nota: CCleaner é propriedade da mesma empresa._

## Windows Defender

Com o lançamento do Windows 10, surgiu o Windows Defender, um antivírus para o dia a dia, simples, robusto, gratuito, eficaz e sem ofertas de pacotes pagos.

## Panda e Kaspersky

O Kaspersky (russo) ganhou uma reputação no mercado e mudou os servidores para a Suécia.

Kaspersky foi banido dos Estados Unidos em 2024, pelo seguinte motivo de acordo com uma certa [fonte](https://www.pcmag.com/news/kaspersky-shutting-down-us-operations-following-nationwide-ban):

> Os reguladores dos EUA estão principalmente preocupados com que os laços da empresa de antivírus com a Rússia a expõem a possíveis explorações e podem permitir que o Kremlin (o governo russo) colete dados dos EUA ou, de outra forma, ganhe acesso aos computadores americanos.

A Rússia tem acesso direto a eles, mas visa apenas agentes do governo. "You're safe kiddo."

Conclusão: Assim como o Panda, o Kaspersky construiu sua reputação por anúncios e patrocínio de youtubers. Mas é um antivírus russo, "clunky" e "garbage".

## Outros antivírus

Bitdefender é caro, McAfee e TotalAV também.
Bitdefender é bom, ClamAV é decente.
McAfee é meh.

## Resumo

- **Bitdefender**: use a versão de teste gratuita e, quando o teste estiver prestes a terminar, basta reiniciá-lo com outra conta [(tempgmail)](https://tempgmail.net/).
- **MalwareBytes**: somente para efetuar remoção de malware, não usar no dia a dia.
- **Windows Defender (Windows 10 e 11)**: para usar no dia a dia, de preferência em conjunto com a GUI do [ConfigureDefender](https://github.com/AndyFul/ConfigureDefender).

Use o [Hypatia](https://apt.izzysoft.de/fdroid/index/apk/org.maintainteam.hypatia/) / [Bitdefender Mobile](https://www.bitdefender.com/pt-br/consumer/mobile-security-android) no Android e [VirusTotal](https://www.virustotal.com/gui/) / [Triage](https://tria.ge/) para arquivos menores que 650 mb (para maiores use uma VM), dê preferência para a análise de programas antivírus com reputação no mercado, pois antivírus desconhecidos (como o Arcabit) geralmente só detectam falsos positivos.

O senso comum também ajuda, e conhecimentos básicos sobre sistemas operacionais te afasta de malwares.

---

Quer saber mais sobre antivírus?

➜ Confira essa Megathread do [MediaSavvy - Security](https://mediasavvy.pages.dev/Wiki/Security.html)
