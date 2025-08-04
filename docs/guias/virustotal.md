---
title: "Como verificar um arquivo no Virus Total corretamente"
description: "Guia útil para ajudá-lo em suas viagens marítimas."
---

# 🪶 ➜ Como verificar um arquivo no Virus Total corretamente

Guia útil para ajudá-lo em suas viagens marítimas.

---

### Guia para Verificação de Arquivos no VirusTotal

Este guia ajuda a avaliar a segurança de arquivos baixados, especialmente em casos onde são utilizados métodos alternativos de obtenção de software.

1. **Verifique a Data da Última Análise**

   - A primeira etapa é checar se a última análise do arquivo é recente. Se não for, faça uma nova análise, pois atualizações frequentes nos bancos de dados de malware podem identificar novas ameaças e remover falsos positivos antigos.

2. **Observe os Detalhes do Arquivo**

   - Na guia de detalhes, veja a hora de criação, primeira vez que o arquivo foi visto na internet e sua primeira submissão.
   - A hora de criação nem sempre é confiável, pois pode ser falsificada (ex.: datas futuras como 2099), mas pode ser um alerta se parecer fora do comum.
   - Se as datas de primeira visualização ou submissão forem anteriores ao lançamento oficial de um produto, pode ser um malware reciclado, especialmente se o arquivo não for genérico.

3. **Nomes de Submissão**

   - Nomes de arquivos com aparência de hash (ex.: `970f38c3800c85de75bd3ba253d46069.exe`) ou genéricos (`sample1.exe`) podem ser ignorados.
   - No entanto, se o arquivo possui múltiplos nomes associados a softwares diferentes, isso pode indicar um comportamento suspeito.

4. **Assinaturas Digitais**

   - Em softwares pirateados, as assinaturas digitais geralmente não são confiáveis, pois o processo de "crack" ou "patch" frequentemente invalida a assinatura.
   - Arquivos sem assinatura em software legítimo também podem ser um sinal de alerta.

5. **Execution Progenitor/Resource Parents**

   - Essa seção indica os arquivos ou instaladores que originaram o arquivo em análise. Se o arquivo analisado é um instalador e não foi extraído de outro arquivo, ignore essa seção.
   - Fique atento a instaladores falsos que executam scripts maliciosos em segundo plano.

6. **Arquivos e Bundles**

   - Verifique os arquivos contidos no executável analisado, especialmente em arquivos compactados. O VirusTotal funciona melhor com `.zip`; se você tiver um `.rar`, extraia os arquivos e faça upload como `.zip`.
   - Se lidar com arquivos protegidos por senha, como `.zip`, extraia-os e faça upload.

7. **Endereços de IP e URLs**

   - Verificar endereços IP e URLs pode ser útil em casos de resultados altamente maliciosos. Contudo, keygens e patches frequentemente fazem solicitações de rede, o que pode ser detectado como suspeito por alguns antivírus, ainda que não representem risco direto.

8. **Operações de Arquivo e Registro**

   - A criação de arquivos temporários ou leitura de chaves do registro geralmente não é preocupante.
   - Contudo, se o arquivo acessa áreas que normalmente não deveria, isso é um alerta.

9. **Ações Suspensas e Mensagens Estranhas**

   - Mensagens ou ações incomuns (ex.: "todos os seus arquivos pertencem a nós") indicam malware evidente e são um sinal para excluir o arquivo imediatamente.

10. **Guia de Detecções**

- Caso todas as detecções sejam genéricas (ex.: `W32.Trojan.Gen`), AI/ML (ex.: `malicioso`, `suspeito`), ou rótulos como `riskware`, `hacktool`, e `not-a-virus`, isso pode significar que o arquivo é apenas suspeito, especialmente em cracks, patches e keygens.
- Considere a idade do arquivo: arquivos recentes (< 1 mês) podem ter menos detecções, enquanto arquivos mais antigos devem ser analisados com cautela se tiverem múltiplas detecções específicas.

11. **Utilizando Sandboxing para Segurança**

- Ao lidar com software pirateado ou de fontes alternativas, considere usar uma VM ou o Sandboxie para rodar o arquivo isoladamente.
- Observe alterações no sistema (arquivos criados, chaves de registro adicionadas) e, se possível, replique-as manualmente para reduzir os riscos ao seu sistema principal.

### Observação Final

Esse guia é mais adequado para verificar arquivos obtidos por meios alternativos, onde a detecção de comportamento de "hacktools" não é, por si só, um sinal de que você será hackeado. O VirusTotal é mais confiável para detectar ameaças em softwares legítimos que não deveriam ter detecções.

➜ Esse guia é baseado em um comentário feito no [r/Piracy](https://reddit.com/r/Piracy) pelo usuário: [u/ilike2burn](https://reddit.com/u/ilike2burn) e traduzido por [u/Heus-Sueh](https://tesseract.lemmy.eco.br/u/Heus_Sueh@lemmy.dbzer0.com).

---
