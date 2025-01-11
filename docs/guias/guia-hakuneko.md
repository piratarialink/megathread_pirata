# Guia Completo: Convertendo Mangás para Kindle com Hakuneko e KCC

Se você é fã de mangás e deseja aproveitá-los em seu Kindle, este guia irá detalhar todas as etapas para realizar essa conversão de maneira eficiente. Siga os passos abaixo:

---

### 1. Baixe as páginas do mangá com o Hakuneko

O [Hakuneko](https://hakuneko.download/) é uma ferramenta poderosa para baixar páginas de mangá. Ele salva cada página como um arquivo .png. Siga o guia no site oficial do Hakuneko para:

- Escolher sua fonte de mangá (como sites suportados).
- Selecionar o título e os capítulos desejados.
- Baixar as páginas para uma pasta local no seu dispositivo.

Certifique-se de que cada capítulo esteja em uma pasta separada para organização futura.

---

### 2. Compacte a(s) pasta(s) em um arquivo .zip

Depois de baixar as imagens:

1. Selecione todas as imagens de um capítulo.
2. Use uma ferramenta de compactação (como WinRAR, 7-Zip ou o utilitário nativo do sistema) para criar um arquivo .zip.
3. Certifique-se de que o arquivo tenha apenas as imagens dentro dele.

---

### 3. Renomeie a extensão do arquivo de .zip para .cbr

1. Localize o arquivo .zip criado.
2. Renomeie a extensão do arquivo para .cbr (Comic Book Reader).
   - Exemplo: `manga_capitulo1.zip` torna-se `manga_capitulo1.cbr`.

**Atenção:** Certifique-se de que seu sistema exiba extensões de arquivo. Caso contrário, habilite essa opção nas configurações do explorador de arquivos.

---

### 4. Converta para .epub com o Kindle Comic Converter (KCC)

Baixe o [Kindle Comic Converter (KCC)](https://github.com/ciromattia/kcc). Atenção: use uma versão antiga compatível com o Kindle, pois as versões mais recentes podem não funcionar com dispositivos Kindle devido a mudanças na política da Amazon.

1. Abra o KCC e selecione seu modelo de Kindle.
2. Configure as opções de preferência:
   - Layout (modo paisagem ou retrato).
   - Margens e redimensionamento.
3. Adicione o arquivo .cbr criado.
4. (Opcional) Edite os metadados no próprio KCC:
   - Nome do autor.
   - Título da obra.
   - Número do volume.
5. Clique em "Converter" para gerar o arquivo .epub.

**Importante:** Caso não edite os metadados neste momento, o Calibre não permitirá alterá-los posteriormente.

---

### 5. Converta para .mobi com o Calibre

1. Importe o arquivo .epub gerado pelo KCC no [Calibre](https://calibre-ebook.com/).
2. Edite os detalhes do arquivo:
   - Adicione uma capa personalizada (opcional).
   - Revise os metadados se necessário.
3. Converta o arquivo para o formato .mobi.

---

### 6. Transfira o arquivo para o Kindle

Há diversas formas de enviar o arquivo .mobi para seu Kindle:

- Pelo Calibre: conecte o Kindle via USB e envie o arquivo diretamente.
- Via e-mail: envie o arquivo para o endereço Kindle associado à sua conta Amazon.

---

### 7. Aproveite!

Agora seu mangá está pronto para ser lido no Kindle. Aproveite a experiência de leitura com qualidade e organização.

---
**Créditos**: Este guia foi baseado em uma contribuição do usuário **u/hurricanesteaktoast** no Reddit. Confira o comentário original [aqui](https://www.reddit.com/r/pirataria/comments/18fu7b6/comment/kcxjbn3/?utm_source=share&utm_medium=web3x&utm_name=web3xcss&utm_term=1&utm_content=share_button).

**Links úteis:**
- [Hakuneko](https://hakuneko.download/)
- [Kindle Comic Converter (KCC)](https://github.com/ciromattia/kcc)
- [Calibre](https://calibre-ebook.com/)

