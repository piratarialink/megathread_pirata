---
title: "Como burlar restrição de download Archive.org"
description: "Baixando livros com restrição do Archive.org"
---

# Como burlar restrição de download Archive.org

> Esse guia busca ajudar a burlar a restrição de download do Archive.org, os livros que possuem essa restrição fica com as Download options como: "No suitable files to display here." e/ou "PDF access not available for this item." como mostra a imagem abaixo:

![](https://i.imgur.com/XBMPWco.png)

## Primeiro passo

Faca login/crie sua conta no Archive.org e certifique-se de clicar no botão "Borrow for 1 hour".

![](https://i.imgur.com/OGw1qlG.png)

Após clicar você terá acesso a esse livro por 1h ou 14 dias a depender do livro, fazer isso é **OBRIGATÓRIO** pois caso não pegue esse livro "emprestado" o tutorial vai dar **ERRADO**!!!

## Segundo passo

Irei usar a url do livro de exemplo: https://archive.org/details/engineeringillus0000tomj, precisaremos do identificador do livro e existe duas formas de pegar ele.

A primeira forma é pegando texto após o /details/ ou indo no link e procurando por _**Identifier**_ nas propiedades do livro, como mostra a imagem abaixo:

![](https://i.imgur.com/XeLFgqT.png)

## Terceiro passo

Após ter o _Identifier_ do livro vamos acessar a url:

```bash
https://archive.org/services/loans/loan/?action=media_url&identifier=XXXXXXXXXX&format=pdf&redirect=1
```

E nesse XXXXXXXXXXX vamos colocar o _identifier_ do livro, que no caso de exemplo vai ficar:

```bash
https://archive.org/services/loans/loan/?action=media_url&identifier=engineeringillus0000tomj&format=pdf&redirect=1
```

Se navegar por essa url ela vai retornar um arquivo com extensao .acsm, bem provavel que tenha o nome URLLink.acsm. Baixe ele no seu dispositivo e guarde, vamos precisar dele!

> Caso venha um mensagem json {"error":"Request is not authorized."} significa que voce nao está logado ou nao pegou o livro emprestado!

## Quarto passo

Após ter baixado o arquivo com extensão .acsm vamos converte-lo para PDF ou EPUB!

Acesse o site [acsmconverter](https://www.acsmconverter.com/)e faça a conversão, clique em _select files_, após clique em converter e por fim faça o download.

> Lembrando que você pode conseguir converter pra outros tipos de arquivo, mas os que eu testei e deu certo foi PDF e EPUB.

Guia feito por [u/wandrey](https://lemmy.eco.br/u/wandrey)
