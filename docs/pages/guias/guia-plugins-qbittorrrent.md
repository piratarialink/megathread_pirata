### Passos para instalar plugins de pesquisa para qBitTorrent versão 3.1.10 ou mais recente.

1. Observe que os plugins / scripts de Python são, por sua natureza, não considerados seguros. Portanto, qualquer uso dos plugins não oficiais é por sua conta e risco. É uma boa prática para auditar / dar uma olhada nos plugins / scripts antes de instalar.

2. Vá para: https://github.com/qbittorrent/search-plugins/wiki/Unofficial-search-plugins  

     1. Na coluna `Download`, clique no link apropriado de `Download`.  
     2. Salve o arquivo `.py` em um local temporário do seu armazenamento. 

3. Usando o qBitTorrent.  
     Usando a janela principal, clique em `View` -> `Search Engine` para mostrar a guia de pesquisa. 
     ![screenshot](https://user-images.githubusercontent.com/14078661/51446055-a4431080-1cf3-11e9-8180-1994bdcbb672.png)
     1. Vá para a guia `Search`. 
     2. Clique no botão `Search plugins`. Que está localizado no canto inferior direito.
     3. A janela `Search Plugins` será aberta.  Ele mostra uma lista de plug-ins de mecanismos de pesquisa instalados.
          1. Clique no botão  `Install a new one`. <br>
             ![screenshot](https://user-images.githubusercontent.com/14078661/51446120-bf625000-1cf4-11e9-98e1-b7e8b771c457.png)
          2. A janela `Plugin source` irá abrir. 
               1. Clique no botão `Local file`. 
               2. Navegue até o arquivo `.py` que você baixou na etapa anterior.  Selecione o arquivo `.py`.
               3. Se for bem-sucedido, a seguinte mensagem será exibida.
                     > <PLUGIN.NAME> search engine plugin was successfully installed.
               4. Se não for bem sucedido, a seguinte mensagem será exibida.
                     > <PLUGIN.NAME> search engine plugin could not be installed.
               5. Usando [esta página](https://github.com/qbittorrent/search-plugins/wiki/Unofficial-search-plugins) na coluna `Comment`, verifique se o seu sistema atende aos requisitos mínimos para cada plugin de pesquisa.  Talvez o seu sistema atual não tenha os requisitos.
                6. Click no botão `Close`. 
4. Você pode excluir o arquivo `.py` do seu local temporário no armazenamento local, pois ele não é mais necessário.
5. Opcionalmente, você pode usar a janela `Search plugins` para ativar ou desativar plug-ins de pesquisa ou verificar se há atualizações.

Feito.  Você instalou com sucesso um novo plugin de pesquisa para qBittorrent.

Guia sugerido por [u/Dehast](https://www.reddit.com/u/Dehast).

Guia baseado em [qbittorrent search plugins install wiki](https://github.com/qbittorrent/search-plugins/wiki/Install-search-plugins)