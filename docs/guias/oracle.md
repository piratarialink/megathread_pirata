# 📑 ➜ Criando uma VPS gratuita com 24gb de RAM na Oracle CI

::info Essa página é ainda um esboço.
:::

## 1. Conta e limites estipulados

Conseguindo acesso no modo Free Tier você tem direito até quatro instâncias com o processador ARM, cada uma com no total 200 GB de storage e 4 Gbps de banda larga.
Independente do que fizer, será necessário comfirmar sua identidade com o cartão de crédito, não vale cartão pré pago daqueles que você gera no DigitalPurse ou PicPay, precisa ser um cartão com os dados e endereço do titular, no caso você.

::info Será feita uma retirada no valor de 600 reais do seu limite como forma de teste mas a quantia é reembolsada na hora.
:::

Testado e aprovado com:

- Bandeira VISA 
- Cartão Mercado Pago
- Cartão Inter GLOBAL

## 2. Iniciando uma instância "Always-Free"

Indo para a parte em que você se cadastra, antes de terminar, selecione a região "US-West Phoenix" que é a região que terá melhor ping para quem mora no Brasil. **Preste atenção! Não escolha São Paulo ou qualquer outro local próximo a sua residênciaa porque uma vez escolhida a localidade, não tem como voltar atrás!**

Assim que entrar no painel, pesquise naquela barrinha do topo o termo "instâncias" e clique na primeira sugestão que aparecer para ti.

Clique no botão "Criar Instância"

Em posicionamento, deixe no que está, caso aconteça algum problema, tente mudar para AD 2 ou AD 3

Agora mude o sistema operacional que tu vai utilizar do padrão que é o Oracle Linux para o do Ubuntu Server 24.04/LTS

Para configurar algo simples como o Pi-Hole, recomendo você seguir adiante com o volume VM.Standard.E2.1.Micro em "Especialidade e Geração Anterior".

:::info Pode ocorrer falta de capacidade na oferta da VM.Standard.A1.Flex, esse erro só poderá ser resolvido caso você faça um upgrade para uma conta PAYG. Normalmente, máquinas leves como a VM.Standard.E2.1.Micro de no máximo 1 GB de memória e dois servidores não exigem adesão para o plano "Pay As You Go".
:::

Estarei usando a forma Ampere nesse tutorial:

Clique na setinha no lado esquerdo e mude esta config para quatro núcleos e 24 de memória 

Pule a etapa de segurança - pacote Always-Free eligible não tem direito a isso.

Em rede crie uma nova VCN (Virtual Cloud Network)

Se não for designado um endereço IPV4 automaticamente, basta encerrar a VM e criar outra logo em seguida

Baixe as chaves SSH pública e privada

Selecionar VPU entre 10 até 120 e tamanho do volume entre 50 até 200 GB

Revisar tudo e clicar em "Criar".

Marque tudo o que site pedir, o custo estimado é apenas uma projeção do que você iria pagar em um plano comum, desconsidere-o

## 3. Se conectando a VM com o Secure Shell

O usuário sempre será ubuntu e o endereço é o IP público da VPS

### No Linux / Macintosh

 Dê permissão read-and-write

 chmod 600 <endereço/da/chaveprivada.key>

 ssh -i <endereço/da/chaveprivada.key> ubuntu@endereçoaqui

 Você pode utilizar aliases também para se conectar - a LLM é sua amiga, lembre-se.

### No Windows

 Método fácil: Instale e abra o PuTTy Gen

 Deixe RSA marcado
 
 Show All Files > Carregue o arquivo .key

 Insira uma senha e clique em Save Private Key

 Feche a janela, abra o PuTTY, vá em SSH > Auth > Connection e procure pelo .pku

 Digite o endereço da sua máquina neste campo:

 Método chatinho: diretamente com o SSH, vale somente se você estiver usando o Windows Professional:

 Clique nas Propriedades da chave privada
 
 Habilitar Herança > Converter as permissões herdadas em permissões explicitas no objeto
 
 Remova todos os outros usuários e Salve

ssh -i <endereço/da/chaveprivada.key> ubuntu@endereçoaqui

## 4. Como abrir portas do servidor

Alguns serviços como o Coolify, SearXNG e OpenVPN têm como requisito a porta de entrada do Web Socket e certificado SSL, vamos abri-las nesse exato momento:

Clique no nome da sua instância, vá para a aba Rede e clique no nome da sua sub-rede que foi criada, depois segurança de novo e "Default security list for..."

Adicionar Regras de Entrada > Faça conforme a imagem abaixo, alterando apenas o Intervalo de Portas de Destino para o que te exigirem.

## 5. BÔNUS: Obtendo o seu próprio domínio

Em suma, fazendo uma gambiarra sem a CloudFlare já que ela não aceita os domínios da lista do DigitalPlat FreeDomain.

Acesse o site crie uma conta com o GitHUb para não lidar com KYC.

Clique em registrar e crie o site que você quiser.

OBS: Dando uma estrela no repósitorio oficial deles você ganha mais um domínio totalmente de graça.

Posterior a criação do domain, agora chegou a vez de configurar um DNS Dinâmico, usarei a Hostry como exemplo:

Aponte os NameServers para que o DigitalPlat possa vê-los. Isso irá gastar um free slot que estava disponível no DigitalPlat.

Pronto, você acabou de descobrir uma maneira nova de se preocupar o tempo inteiro com bots rondando sua página.

Nota: se estiver pensando em usar o Jellyfin dessa forma, recomendo tu dar uma olhada no TailScale.

### Créditos
