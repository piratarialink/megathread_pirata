---
title: "Verificando lançamentos de jogos usando PreDBs"
---
É bastante comum aqui e em outros grupos surgirem dúvidas sobre lançamentos de jogos, como o exemplo que encontrei hoje:

> Alguém já baixou o The Forest piratão?

> Não tem no FitGirl.

Neste artigo, vou explicar como descobrir não apenas a existência de um lançamento pirata de um jogo, mas também como obter informações detalhadas sobre esse lançamento, caso ele exista.

### Introdução

Primeiramente, é provável que vocês já conheçam repackers famosos, como FitGirl e DODI. Mas você já parou para pensar sobre o que é um repacker? Trata-se de uma pessoa que baixa o lançamento de um jogo já crackeado por alguém - o chamado "cracker" e o "reempacota", comprimindo-o para reduzir o tamanho do arquivo.

Mas quem são os responsáveis por crackear os jogos? Atualmente, a grande maioria dos jogos é crackeada por grupos da cena, o topo da pirâmide internacional da pirataria, como os famosos grupos TENOKE, RUNE, TiNYiSO, CODEX, RELOADED, PLAZA, entre outros.

Esses grupos não possuem sites próprios. Eles postam seus lançamentos em servidores FTP altamente secretos, aos quais nem você nem eu JAMAIS teremos acesso. Em questão de segundos, no entanto, os arquivos disponibilizados nesses servidores “vazam” para os melhores trackers de torrents privados. Após poucos minutos, chegam a trackers de torrents menores, em algumas horas estão na Usenet e, em dias, podem ser encontrados em trackers públicos e sites de warez. Essa é a pirâmide da pirataria que menciono, passando pela seguinte sequência: warez scene → trackers privados → Usenet → trackers públicos → warez, Fservers e outros métodos de compartilhamento.

Sempre que um lançamento é feito nos servidores FTP da warez scene, um grupo de bancos de dados públicos chamados PreDBs registra a data, a hora, o tipo de lançamento (jogo, filme, série) e o tamanho dos arquivos. Esses bancos de dados públicos, acessíveis através de interfaces simples na internet, podem ser consultados sempre que você quiser saber sobre um lançamento de jogo. Exemplos de PreDBs públicos são:

- [predb.net](http://predb.net/)

- [predb.org](http://predb.org/)

- [predb.me](http://predb.me/)

- [srrdb.com](http://srrdb.com/)

### Na prática:

Ao pesquisar sobre o jogo "The Forest", de 2018, nos PreDBs, citado acima, podemos obter as seguintes informações:

- O jogo foi postado na warez scene às 11:19:54 do dia 30/04/2018 pelo grupo CODEX, sob o nome The.Forest-CODEX na seção GAMES.

- O jogo foi compactado em 49 arquivos WinRAR, com um tamanho total de 2.404.207.961 bytes.

- Dentro deste conjunto de arquivos WinRAR, há um arquivo ISO (codex-the.forest.iso) com tamanho total de 2.643.886.080 bytes e soma de verificação CRC-32 98199AF2.

É importante destacar que os PreDBs não informam onde você pode encontrar o arquivo. Essa não é a sua função. Eles apenas fornecem a informação de que o arquivo existe, com todas as suas características. Com essas informações em mãos, você deve procurar nos "sete mares" da internet para tentar localizar o arquivo.

Sabendo da existência deste lançamento e de suas características, você está apto a procurá-lo na internet. Ao encontrar os "supostos" arquivos em algum lugar, verifique se o lançamento corresponde ao "material pirata original" comparando o tamanho e o CRC-32 obtidos no PreDB.

### Para que tudo isto?

Esta verificação de "autenticidade" tem motivo de ser na medida em que os jogos da warez scene são, em geral, bastante protegidos contra vírus. Isso ocorre porque há uma auditoria interna rigorosa, baseada em uma competição muitas vezes agressiva entre os diferentes grupos de lançamentos.

Um grupo forte de moderadores (para o qual qualquer um pode enviar sugestões através de nukenets públicas) audita todos os lançamentos na warez scene. Se for detectado um vírus, um alerta internacional é emitido através dos próprios PreDBs, e o grupo responsável pelo lançamento é banido permanentemente. Entre os moderadores estão os próprios membros dos grupos competidores, o que facilita a detecção de fraudes. Grupos de lançamento tradicionais não colocam vírus por medo de perder décadas de boa reputação e arriscar banimento de um ambiente altamente competitivo e exclusivo.

> Texto feito por Biomallard