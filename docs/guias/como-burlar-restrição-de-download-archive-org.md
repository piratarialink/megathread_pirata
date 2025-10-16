---
title: "Como burlar restrição de download Archive.org"
description: "Baixando livros com restrição do Archive.org"
---

# Como burlar restrição de download Archive.org

> Esse guia busca ajudar a burlar a restrição de download do Archive.org, os livros que possuem essa restrição fica com as Download options como: "No suitable files to display here." e/ou "PDF access not available for this item." como mostra a imagem abaixo:

![](./images/como-burlar-restrição-de-download-archive-org-1.png)

## Primeiro passo

Faça login/crie sua conta no Archive.org e certifique-se de clicar no botão "Borrow for 1 hour".

![](./images/como-burlar-restrição-de-download-archive-org-2.png)

Após clicar você terá acesso a esse livro por 1h ou 14 dias a depender do livro, fazer isso é **OBRIGATÓRIO**, pois caso não pegue esse livro "emprestado" o tutorial vai dar **ERRADO**!!!

## Segundo passo

Irei usar a url do livro de exemplo: https://archive.org/details/engineeringillus0000tomj, precisaremos do identificador do livro e existem duas formas de pegar ele.

A primeira forma é pegando texto após o /details/ ou indo no link e procurando por _**Identifier**_ nas propriedades do livro, como mostra a imagem abaixo:

![](./images/como-burlar-restrição-de-download-archive-org-3.png)

## Terceiro passo

Após ter o _Identifier_ do livro vamos acessar a url:

```bash
https://archive.org/services/loans/loan/?action=media_url&identifier=XXXXXXXXXX&format=pdf&redirect=1
```

E nesse XXXXXXXXXXX vamos colocar o _identifier_ do livro, que no caso de exemplo vai ficar:

```bash
https://archive.org/services/loans/loan/?action=media_url&identifier=engineeringillus0000tomj&format=pdf&redirect=1
```

Se navegar por essa url ela vai retornar um arquivo com extensão .acsm, bem provável que tenha o nome URLLink.acsm. Baixe ele no seu dispositivo e guarde, vamos precisar dele!

> Caso venha uma mensagem json {"error":"Request is not authorized."} significa que você não está logado ou não pegou o livro emprestado!

## Quarto passo

Após ter baixado o arquivo com extensão .acsm vamos convertê-lo para PDF ou EPUB!

Acesse o site [acsmconverter](https://www.acsmconverter.com/)e faça a conversão, clique em _select files_, após clique em converter e por fim faça o download.

> Lembrando que você pode conseguir converter para outros tipos de arquivo, mas os que testei e deu certo foi PDF e EPUB.

Guia feito por [u/wandrey](https://lemmy.eco.br/u/wandrey)
