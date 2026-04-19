# 📑 ➜ Criando uma VPS gratuita com 24gb de RAM na Oracle CI

## 1. Conta e limites estipulados

Conseguindo acesso no modo Free Tier você tem direito até quatro instâncias com o processador ARM, cada uma com no total 200 GB de storage e 4 Gbps de banda larga.
Independente do que fizer, será necessário comfirmar sua identidade com o cartão de crédito, não vale cartão pré pago daqueles que você gera no DigitalPurse ou PicPay, precisa ser um cartão com os dados e endereço do titular, no caso você.

::info Será feita uma retirada no valor de 600 reais do seu limite como forma de teste mas a quantia é reembolsada na hora.
:::

Testado e aprovado com:

- Bandeira VISA 
- Cartão Mercado Pago
- Cartão Itaú
- Cartão Inter GLOBAL

![oracle1.1](./images/oracle1.1.png)

## 2. Iniciando uma instância "Always-Free"

Primeiro, vá para o site: https://www.oracle.com/br/cloud/free/

Indo para a parte em que você se cadastra, antes de terminar, selecione a região "US-West Phoenix" que é a região que terá melhor ping para quem mora no Brasil. **PRESTE ATENÇÃO! NÃO ESCOLHA SÃO PAULO OU QUALQUER OUTRO LOCAL PRÓXIMO A SUA RESIDÊNCIA PORQUE UMA VEZ ESCOLHIDA A LOCALIDADE, NÃO TEM COMO VOLTAR ATRÁS!**

![oracle1.2](./images/oracle1.2.png)

Assim que entrar no painel, pesquise naquela barrinha do topo o termo "instâncias" e clique na primeira sugestão que aparecer para ti.

Clique no botão "Criar Instância"

Em posicionamento, deixe no que está, caso aconteça algum problema, tente mudar para AD 2 ou AD 3

Agora mude o sistema operacional que tu vai utilizar do padrão Oracle Linux para o do Ubuntu (Server) 24.04/LTS

![oracle1](./images/oracle1.png)

![oracle2.1](./images/oracle2.1.png)

Para configurar algo simples como o Pi-Hole, recomendo você seguir adiante com o volume VM.Standard.E2.1.Micro em "Especialidade e Geração Anterior"

Estarei usando a forma Ampere nesse tutorial:

![oracle2.2](./images/oracle2.2.png)

Clique na setinha no lado esquerdo e mude esta config para quatro núcleos e 24 de memória 

![oracle3](./images/oracle3.png)

Pule a etapa de segurança - pacote Always-Free eligible não tem direito a isso.

Em rede crie uma nova VCN (Virtual Cloud Network)

![oracle4](./images/oracle4.png)

Se não for designado um endereço IPv4 automaticamente, basta encerrar a VM assim que concluir todo o processo e criar outra logo em seguida.

Baixe as chaves SSH pública e privada

![oracle5](./images/oracle5.png)

Selecionar VPU entre 10 até 120 e tamanho do volume entre 50 até 200 GB

Revisar tudo e clicar em "Criar".

Marque tudo o que site pedir, o custo estimado é apenas uma projeção do que você iria pagar em um plano comum, desconsidere-o

![oraclecondições](./images/oraclecondições.png)

:::info Pode ocorrer falta de capacidade na oferta da VM.Standard.A1.Flex, esse erro só poderá ser resolvido caso você faça um upgrade para uma conta PAYG. Normalmente, máquinas leves como a VM.Standard.E2.1.Micro de no máximo 1 GB de memória e duas instâncias não exigem adesão para o plano "Pay As You Go".
:::

## 3. Se conectando a VM com o Secure Shell

O usuário sempre será ubuntu e o endereço é o IP público da VPS

### No Linux / Macintosh

Dê permissão read-and-write

 ` chmod 600 <endereço/da/chaveprivada.key>`

 ` ssh -i <endereço/da/chaveprivada.key> ubuntu@endereçoaqui`

 Você pode utilizar aliases também para se conectar - O GPT é seu amigo, lembre-se.

### No Windows

**Método fácil: Instale e abra o PuTTY Gen**

Site oficial: https://putty.software/

![oracle6](./images/oracle6.png)

Deixe RSA marcado
 
![oracle7](./images/oracle7.png)
 
Mude para "All Files" > Carregue o arquivo .key

![oracle8](./images/oracle8.png)

Insira uma senha e clique em Save Private Key

Feche a janela, abra o PuTTY, vá em SSH > Auth > Connection e procure pelo .ppk

![oracle9.1](./images/oracle9.1.png)

![oracle9.2](./images/oracle9.2.png)

Digite o endereço da sua máquina neste campo:

![oracle9.3](./images/oracle9.3.png)

**Método chatinho: diretamente com o SSH, vale somente se você estiver usando o Windows Professional:**

Clique nas Propriedades da chave privada

 ![oracle9](./images/oracle9.png)

Vá para Segurança e depois Avançado

 ![oracle10](./images/oracle10.png)
 
Habilitar Herança > Converter as permissões herdadas em permissões explícitas no objeto

 ![oracle11](./images/oracle11.png)
 
Remova todos os outros usuários e Salve

` ssh -i <endereço/da/chaveprivada.key> ubuntu@endereçoaqui`

Quando logar, é essencial que atualize todos os pacotes com os comandos:

` sudo apt-get update`

& ` sudo apt update`

## 4. Como abrir portas do servidor

Alguns serviços gratuitos como o [Coolify](https://coolify.io/docs/knowledge-base/server/firewall#coolify-self-hosted), SearXNG e OpenVPN têm como requisito a porta de entrada do Web Socket e certificado SSL, vamos abri-las nesse exato momento:

Clique no nome da sua instância, vá para a aba Rede e clique no nome da sua sub-rede que foi criada, depois "Segurança" de novo e "Default security list for..."

![oracleportas](./images/oracleportas.png)

Adicionar Regras de Entrada > Faça conforme a imagem abaixo, alterando apenas o Intervalo de Portas de Destino para o que te exigirem.

![oracle12](./images/oracle12.png)

## 5. Como criar um alerta para quando o uso da ultrapassar o limite gratuito

Clique no menu com três riscos no canto superior esquerdo

Vá para Orçamentos

![oracle13.1](./images/oracle13.1.png)

Crie um orçamento de acordo com o modelo demonstrado, o destinatário será o seu e-mail

![oracle13](./images/oracle13.png)

![oracle14](./images/oracle14.png)

![oracle15](./images/oracle15.png)

![oracle16](./images/oracle16.png)

## 6. BÔNUS: Obtendo o seu próprio domínio

Tendo como objetivo fazer reverse proxy dentro do [Coolify](https://coolify.io/docs/get-started/installation#self-hosted-installation) e assim mitigar riscos.

Em suma, faremos isso através de uma gambiarra sem a CloudFlare, já que a mesma não aceita muito bem os domínios da lista do DigitalPlat FreeDomain.

Acesse o site https://domain.digitalplat.org/ e crie uma conta com o GitHUb para não lidar com KYC.

Clique em registrar no menu do lado esquerdo e crie o site que você quiser.

![digitalplat1](./images/digitalplat1.png)

:::info Dando uma estrela no repositório oficial deles você ganha mais um domínio totalmente de graça.
:::

Posterior a criação do domain, agora chegou a vez de configurar um DNS Dinâmico, usarei a Hostry como exemplo:

![digitalplat2.1](./images/digitalplat2.1.png)

Aponte os NameServers para que o DigitalPlat possa vê-los. Isso irá gastar um free slot que estava disponível.

![digitalplat2](./images/digitalplat2.png)

Pronto, você acabou de descobrir uma maneira nova de se preocupar 24/7 com bots rondando sua página.

Nota: se estiver pensando em usar o Jellyfin dessa forma, recomendo dar uma olhada no TailScale.

### Créditos

- https://guides.viren070.me/selfhosting/oracle
- https://docs.oracle.com/pt-br/iaas/Content/FreeTier/freetier_topic-Always_Free_Resources.htm
- https://docs.oracle.com/pt-br/iaas/Content/Compute/Tasks/connect-to-linux-instance.htm
- https://youtu.be/CgjfyEt38fI
- https://youtu.be/1XSsxMhnGTs
- https://youtu.be/GyIjFjuhGDg
- https://youtu.be/G1veN7A3Ej8
