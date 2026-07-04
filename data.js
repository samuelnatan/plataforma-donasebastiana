// Dados estruturados da Plataforma Reader "Fígado Leve" - Dona Sebastiana

const platformData = {
  carta: {
    titulo: "Carta da Dona Sebastiana",
    citacao: "Vem cá, minha filha. Puxa uma cadeira e escuta com carinho o que eu tenho para te contar.",
    antesImagem: "images/antes_conceitual.jpg",
    depoisImagem: "images/depois_conceitual.jpg",
    texto: `
      <p>Olá, minha filha! Se você chegou até aqui, é porque decidiu dar um basta no cansaço, no desânimo e naquela preocupação constante com a sua saúde. Eu fico muito feliz de abrir as portas da minha cozinha e do meu coração para você.</p>
      <p>Deixa eu te contar uma coisa: no meu tempo, lá na roça em Minas, a gente não corria para a farmácia por qualquer coisinha. A farmácia de Deus já estava toda plantada no quintal. Minha mãe, minhas tias, as parteiras e rezadeiras da região sabiam exatamente qual folha acalmava o estômago, qual gole tirava o amargor da boca e como comer de um jeito que a gente tinha energia para trabalhar o dia inteiro sem sentir o corpo pesado.</p>
      <p>Hoje em dia, a vida de vocês é muito corrida, cheia de comida de pacotinho, enlatados e promessas milagrosas que só custam caro e não resolvem nada. O que eu reuni nessa plataforma não são invenções modernas. É a junção daquela sabedoria antiga, do tempo que a comida vinha da terra, com o que os médicos e cientistas modernos hoje provam que funciona de verdade.</p>
      <p>Aqui dentro, você vai aprender a <strong>Sincronia Digestiva</strong>. Não é uma dieta de passar fome, minha filha! Deus me livre de ver alguém passando fome. Você vai continuar comendo sua comida gostosa — o seu arroz, o seu feijão, até o seu docinho. O segredo está na <strong>ordem</strong> em que você coloca os alimentos no seu prato e nos pequenos <strong>goles de apoio</strong> que ajudam a limpar o fígado e acalmar o açúcar no seu sangue.</p>
      <p>Navegue com calma pelos sistemas do corpo na barra lateral. Comece lendo sobre o Fígado, depois dê uma olhada na Tabela de Sequenciamento para entender a ordem de comer, e experimente o Plano de 14 Dias. Vá marcando as páginas como lidas para acompanhar o seu progresso.</p>
      <p>Que Deus abençoe a sua caminhada rumo a uma vida leve e saudável. Estou aqui com você em cada página!</p>
    `,
    explica: "Sua saúde é o seu maior bem, minha filha. Cuide dela com carinho e comendo o que a terra nos dá de melhor, sempre na ordem certa."
  },

  biblioteca: [
    {
      titulo: "Guia Fígado Leve",
      subtitulo: "10 receitas e protocolos para desinflamar e destravar a digestão",
      capa: "images/capa_guia_figado_leve.jpg",
      destino: "figado-gole-manha",
      tag: "Guia principal"
    },
    {
      titulo: "Cardápio Desincha 14 Dias",
      subtitulo: "O plano dia a dia pronto, com as receitas de apoio já incluídas",
      capa: "images/capa_cardapio_14dias.jpg",
      destino: "plano-14",
      tag: "Plano prático"
    },
    {
      titulo: "Elixires da Roça da Dona Sebastiana",
      subtitulo: "12 chás, sucos e shots de apoio para fígado e glicose",
      capa: "images/capa_livro_goles.jpg",
      destino: "gole-vinagre-agua",
      tag: "Bônus incluso"
    },
    {
      titulo: "Tabela de Sequenciamento",
      subtitulo: "O mapa de bolso da ordem certa de comer, refeição por refeição",
      capa: "images/capa_tabela_sequenciamento.jpg",
      destino: "tabela-sequenciamento",
      tag: "Bônus incluso"
    },
    {
      titulo: "Sobremesas que Não Sobem a Glicose",
      subtitulo: "13 doces para matar a vontade sem pesar no açúcar",
      capa: "images/capa_sobremesas_glicose.jpg",
      destino: "sobremesa-mousse-abacate",
      tag: "Compra opcional",
      bloqueado: true
    }
  ],

  figado: [
    {
      id: "figado-gole-manha",
      titulo: "1. O Gole da Manhã (Shot de Limão, Gengibre e Cúrcuma)",
      citacao: "Esse é o gole que eu ensinei e que todo mundo pediu. Simples, rápido e prepara o corpo para o dia.",
      imagem: "images/rec_shot_limao_curcuma.jpg",
      ingredientes: [
        { nome: "Suco de Limão", qtd: "½ limão espremido", funcao: "Ajuda na digestão e estimula o fígado" },
        { nome: "Cúrcuma (Açafrão-da-terra)", qtd: "½ colher de chá", funcao: "Poderoso anti-inflamatório natural" },
        { nome: "Gengibre ralado", qtd: "1 pedaço pequeno (ou ½ col. de chá em pó)", funcao: "Acelera o metabolismo e protege o fígado" },
        { nome: "Pimenta-do-reino", qtd: "1 pitada", funcao: "Aumenta em até 2000% a absorção da cúrcuma" },
        { nome: "Água morna", qtd: "200 ml", funcao: "Acorda o sistema digestivo suavemente" }
      ],
      preparo: [
        "Esquente a água até ficar morna (não deixe ferver, para não queimar as propriedades dos ingredientes).",
        "Esprema o limão em um copo grande.",
        "Adicione a água morna, a cúrcuma, o gengibre e a pitada de pimenta-do-reino.",
        "Misture muito bem até que os pós se dissolvam e beba em seguida."
      ],
      quandoUsar: "Tomar em jejum pela manhã, de 4 a 5 vezes por semana. Beba e espere cerca de 15 a 20 minutos antes de tomar o seu café da manhã sólido.",
      atencao: "Cúrcuma e gengibre em uso frequente exigem cautela para quem toma remédios anticoagulantes. Se for o seu caso ou se tiver pedras na vesícula, consulte seu médico antes de iniciar o uso diário.",
      explica: "Esse é o gole que eu ensinei no vídeo que todo mundo pediu. Simples assim: água morna, limão, cúrcuma e gengibre. Não é milagre, minha filha, é ajuda! O milagre de verdade é preparar o estômago e comer na ordem certa, que eu vou te ensinar aqui dentro."
    },
    {
      id: "figado-boldo",
      titulo: "2. Chá de Boldo",
      citacao: "No sítio, minha filha, toda casa tinha um pé de boldo perto da porta. Remédio de estômago que nunca falha.",
      imagem: "images/rec_cha_boldo.jpg",
      ingredientes: [
        { nome: "Folhas secas de boldo", qtd: "1 colher de chá (ou 1 folha fresca amassada)", funcao: "Estimula a produção de bile e limpa o fígado" },
        { nome: "Água", qtd: "200 ml", funcao: "Base do chá" }
      ],
      preparo: [
        "Ferva a água e desligue o fogo imediatamente.",
        "Adicione as folhas de boldo e abafe o recipiente (coloque um pires ou tampa por cima).",
        "Deixe descansar por no mínimo 10 minutos para soltar as propriedades.",
        "Coe e beba morno, sem adoçar."
      ],
      quandoUsar: "Beber 1 xícara pequena após o almoço ou o jantar, no máximo 2 vezes ao dia. Use apenas de forma pontual (máximo 5 dias seguidos), não de forma contínua.",
      atencao: "Por estimular a bile, evite se tiver pedras na vesícula ou canais obstruídos. Chá de boldo não é para ser tomado todo dia por meses a fio, pois o excesso de boldina pode sobrecarregar o fígado.",
      explica: "No sítio, minha filha, toda casa tinha um pé de boldo perto da porta da cozinha. Meu pai, o Seu Tonico, dizia que era pra 'destravar a digestão' depois da comida pesada. Um golinho depois do almoço, sem exagero e sem açúcar, e o corpo agradece na hora."
    },
    {
      id: "figado-alcachofra",
      titulo: "3. Chá de Alcachofra",
      citacao: "A alcachofra ajuda o fígado a dar conta da gordura pesada da comida.",
      imagem: "images/rec_cha_alcachofra.jpg",
      ingredientes: [
        { nome: "Pétalas ou folhas secas de alcachofra", qtd: "1 colher de sopa (ou 1 sachê)", funcao: "Facilita a digestão de gorduras e protege as células hepáticas" },
        { nome: "Água", qtd: "200 ml", funcao: "Base do chá" }
      ],
      preparo: [
        "Ferva a água.",
        "Despeje a água fervente sobre as folhas de alcachofra em uma xícara.",
        "Abafe por 10 minutos.",
        "Coe e sirva morno."
      ],
      quandoUsar: "Tomar 1 xícara cerca de 20 minutos antes das refeições principais (almoço ou jantar). Isso prepara o fígado e a vesícula para digerir as gorduras.",
      atencao: "Evitar em caso de obstrução das vias biliares ou alergia conhecida à alcachofra. Se usar remédios anticoagulantes, consulte seu médico.",
      explica: "A alcachofra era rara na roça de antigamente, mas hoje a gente encontra fácil em qualquer casa de produtos naturais. Ela ajuda o fígado a dar conta da gordura da comida — é como dar uma mãozinha de ouro pro corpo antes de comer."
    },
    {
      id: "figado-beterraba",
      titulo: "4. Suco de Beterraba",
      citacao: "Minha mãe dizia que beterraba é 'sangue novo' que limpa o corpo por dentro.",
      imagem: "images/rec_suco_beterraba.jpg",
      ingredientes: [
        { nome: "Beterraba crua", qtd: "1 unidade média", funcao: "Rica em antioxidantes e nitratos que ajudam o fígado" },
        { nome: "Água filtrada", qtd: "300 ml", funcao: "Líquido de base" },
        { nome: "Suco de limão", qtd: "Suco de 1 limão (opcional)", funcao: "Dá sabor e ajuda na conservação dos nutrientes" }
      ],
      preparo: [
        "Lave bem, descasque e corte a beterraba crua em cubinhos.",
        "Coloque no liquidificador com a água fria (e o suco de limão, se usar).",
        "Bata muito bem por 2 minutos até triturar por completo.",
        "Coe se preferir uma bebida mais rala, mas o ideal é beber com as fibras. Sirva gelado na hora."
      ],
      quandoUsar: "Beber 1 copo pela manhã, 3 a 4 vezes na semana. Não beba todos os dias, pois a beterraba tem um teor considerável de açúcar natural.",
      atencao: "Pode deixar a urina e as fezes avermelhadas, o que é perfeitamente normal. Diabéticos devem consumir com moderação e preferencialmente acompanhado de uma fonte de fibras ou proteínas para evitar picos de glicose.",
      explica: "Minha mãe dizia que beterraba é 'sangue novo' — dava até pras crianças fracas da roça. Hoje sei que ela limpa e protege por dentro. Mas com moderação, viu, minha filha, que ela também tem o açúcar que vem da terra."
    },
    {
      id: "figado-suco-verde",
      titulo: "5. Suco Verde Detox",
      citacao: "Verdura crua batida é remédio de pobre que farmácia nenhuma vende.",
      imagem: "images/rec_suco_verde_detox.jpg",
      ingredientes: [
        { nome: "Couve manteiga fresca", qtd: "2 folhas grandes com talo", funcao: "Rica em clorofila, magnésio e polifenóis protetores" },
        { nome: "Suco de limão", qtd: "Suco de ½ limão", funcao: "Evita a oxidação e melhora absorção de ferro" },
        { nome: "Gengibre", qtd: "1 pedacinho pequeno", funcao: "Ação anti-inflamatória" },
        { nome: "Água gelada", qtd: "200 ml", funcao: "Base líquida" },
        { nome: "Maçã verde", qtd: "½ unidade (opcional)", funcao: "Adoça naturalmente e traz pectina (fibra)" }
      ],
      preparo: [
        "Lave muito bem as folhas de couve sob água corrente.",
        "Rasgue as folhas e coloque no liquidificador com a água gelada, o suco de limão, o gengibre e a maçã verde picada.",
        "Bata por 2 minutos até que fique completamente homogêneo.",
        "Beba imediatamente sem coar, para aproveitar todas as fibras que barram o açúcar."
      ],
      quandoUsar: "No café da manhã, substituindo sucos industrializados ou refrigerantes, cerca de 3 vezes por semana.",
      atencao: "Consumo exagerado de couve crua pode interferir na tireoide em pessoas com predisposição. Varie as folhas verdes (use espinafre ou hortelã de vez em quando).",
      explica: "Verdura crua batida é remédio de pobre que farmácia nenhuma vende. Na roça a gente comia a couve refogada na banha de porco — hoje bato no liquidificador com água e limão porque é mais rápido pra vida corrida de vocês e limpa que é uma beleza."
    },
    {
      id: "figado-sincronia",
      titulo: "6. A Ordem que Ninguém Te Contou (Sincronia Digestiva)",
      citacao: "Não é o que você tira do prato, é a ORDEM em que você come que muda tudo.",
      imagem: "images/prato_sincronia_digestiva.jpg",
      ingredientes: [
        { nome: "Legumes e Verduras", qtd: "Comer primeiro (minutos 0-5)", funcao: "Fibras criam uma malha no intestino que retarda a absorção de glicose" },
        { nome: "Carnes, Ovos e Queijos", qtd: "Comer segundo (minutos 5-10)", funcao: "Proteínas e gorduras reduzem o esvaziamento do estômago" },
        { nome: "Arroz, Pão, Batata e Mandioca", qtd: "Comer por último (minutos 10+)", funcao: "Carboidratos chegam quando a absorção já está lenta, evitando picos" }
      ],
      preparo: [
        "Monte seu prato brasileiro tradicional: salada, carne e o acompanhamento (arroz/feijão).",
        "Comece comendo toda a salada e legumes. Mastigue bem.",
        "Em seguida, coma a porção de proteína (frango, peixe, carne ou ovo).",
        "Por fim, coma o carboidrato (arroz, feijão, batata, mandioca ou farofa).",
        "Se houver sobremesa ou fruta, consuma-a após o carboidrato, nunca isolada."
      ],
      quandoUsar: "Em todas as refeições principais (almoço e jantar), todos os dias da sua vida. É uma mudança de comportamento, não uma restrição alimentar.",
      atencao: "A ordem funciona se você mastigar bem. Não misture tudo no prato fazendo aquela 'revirada'. Coma cada grupo por vez.",
      explica: "Aqui está o segredo que ninguém te contou: não é o que você tira do prato, é a ORDEM que você come. Primeiro a verdura, depois a carne, só por último o arroz. Simples assim — e o açúcar no sangue nem sobe direito, evitando que seu fígado fique empapado de gordura."
    },
    {
      id: "figado-aveia",
      titulo: "7. Café da Manhã Amigo do Fígado (Mingau de Aveia)",
      citacao: "Troque o pão branco com margarina por uma aveia quentinha com canela.",
      imagem: "images/rec_mingau_aveia.jpg",
      ingredientes: [
        { nome: "Aveia em flocos", qtd: "3 colheres de sopa", funcao: "Rica em beta-glucana, fibra que reduz o colesterol e triglicerídeos" },
        { nome: "Leite desnatado ou de coco", qtd: "200 ml", funcao: "Base líquida proteica ou gordura boa" },
        { nome: "Canela em pó", qtd: "A gosto", funcao: "Ajuda na sensibilidade à insulina" },
        { nome: "Fruta picada (Maçã ou Banana)", qtd: "½ unidade", funcao: "Adoça naturalmente e traz mais fibras" }
      ],
      preparo: [
        "Coloque o leite e a aveia em uma panela pequena e leve ao fogo baixo.",
        "Mexa continuamente por 3 a 5 minutos até a mistura engrossar e virar um mingau macio.",
        "Desligue o fogo, despeje em uma tigela.",
        "Salpique a canela em pó e distribua a fruta picada por cima antes de servir."
      ],
      quandoUsar: "No café da manhã, substituindo pães brancos, bolachas recheadas ou misto-quente.",
      atencao: "Não compre misturas prontas de aveia instantânea que vêm em saquinhos individuais, pois elas geralmente contêm muito açúcar adicionado. Use aveia pura em flocos.",
      explica: "Troque o pão branco com margarina (que é pura gordura ruim e farinha que vira açúcar rápido) por uma aveia com canela do jeito antigo. Simples, sustenta a manhã inteira e ajuda o fígado a descansar em vez de trabalhar dobrado."
    },
    {
      id: "figado-cafe",
      titulo: "8. O Cafezinho Pode Continuar",
      citacao: "O café sem açúcar é um dos maiores protetores do fígado que existem, minha filha.",
      imagem: "images/rec_cafe_preto.jpg",
      ingredientes: [
        { nome: "Café de boa qualidade", qtd: "1 xícara (150 ml)", funcao: "Rico em polifenóis que reduzem a inflamação do fígado" },
        { nome: "Água quente", qtd: "Para coar", funcao: "Base" },
        { nome: "Açúcar ou adoçante", qtd: "ZERO", funcao: "Evitar a todo custo para não anular o efeito protetor" }
      ],
      preparo: [
        "Prepare o seu café da maneira tradicional (coado no pano, filtro de papel ou prensa francesa).",
        "Não adicione açúcar refinado, açúcar mascavo, mel ou adoçantes artificiais em excesso.",
        "Se achar o gosto muito forte no início, vá reduzindo o açúcar aos pouquinhos até acostumar o paladar."
      ],
      quandoUsar: "De 1 a 3 xícaras ao longo do dia, preferencialmente após as refeições ou pela manhã. Evite consumir após as 16h para não prejudicar o seu sono.",
      atencao: "Se você tem pressão alta descontrolada ou sensibilidade à cafeína (arritmia, ansiedade), consulte seu médico sobre a quantidade segura.",
      explica: "Pode continuar tomando seu cafezinho, minha filha — só que sem açúcar em excesso. O café puro e coado é amigo do seu fígado, ajuda a evitar que a gordura endureça as células dele. Não precisa tirar esse prazer da sua vida!"
    },
    {
      id: "figado-peixe",
      titulo: "9. Peixe Rico em Ômega-3",
      citacao: "Sardinha em lata não é comida de pobre, é remédio poderoso disfarçado.",
      imagem: "images/rec_peixe_omega3.jpg",
      ingredientes: [
        { nome: "Sardinha, atum ou salmão", qtd: "120 a 150g", funcao: "Gorduras saudáveis que combatem a inflamação hepática" },
        { nome: "Azeite de oliva extravirgem", qtd: "1 colher de sopa", funcao: "Gordura monoinsaturada protetora" },
        { nome: "Ervas frescas (alecrim, salsinha)", qtd: "A gosto", funcao: "Ação antioxidante e tempero natural" },
        { nome: "Suco de limão e pitada de sal", qtd: "Para temperar", funcao: "Sabor" }
      ],
      preparo: [
        "Se usar peixe fresco, tempere com suco de limão, ervas e uma pitada pequena de sal.",
        "Asse no forno a 180°C por 15 a 20 minutos ou grelhe na frigideira com um fio de azeite. Não frite em óleo imerso.",
        "Se usar sardinha em lata (uma opção muito barata e excelente), retire o excesso de óleo/água da lata e sirva com salada."
      ],
      quandoUsar: "Pelo menos 3 vezes por semana no almoço ou no jantar, sempre comendo os legumes/salada antes do peixe.",
      atencao: "Ao comprar peixe em lata, prefira os conservados em azeite de oliva ou em água, evitando aqueles em óleo de soja comum.",
      explica: "Sardinha em lata não é comida de pobre, minha filha, é remédio disfarçado — barata e cheia de ômega-3 que limpa as artérias e o fígado. Coma peixe pelo menos três vezes na semana e seu corpo vai desinflamar."
    },
    {
      id: "figado-feijao",
      titulo: "10. Feijão de Todo Dia",
      citacao: "O nosso feijão com arroz de cada dia é um santo remédio, se comido do jeito certo.",
      imagem: "images/rec_legumes_feijao.jpg",
      ingredientes: [
        { nome: "Feijão cozido (carioca, preto ou corda)", qtd: "1 concha cheia", funcao: "Rico em amido resistente e fibras solúveis que alimentam as bactérias boas do intestino" },
        { nome: "Arroz (de preferência integral)", qtd: "2 colheres de sopa", funcao: "Carboidrato complexo" },
        { nome: "Alho e Cebola", qtd: "Para refogar", funcao: "Antioxidantes naturais" }
      ],
      preparo: [
        "Deixe o feijão de molho na água com algumas gotinhas de limão por 12 horas antes de cozinhar (reduz gases e melhora a absorção dos nutrientes).",
        "Cozinhe o feijão apenas com alho, cebola e folhas de louro. Evite colocar carnes gordas como bacon, linguiça ou paio.",
        "Sirva quente acompanhado de salada verde abundante."
      ],
      quandoUsar: "Diariamente no almoço ou jantar, aplicando sempre a regra de comer a salada/legumes antes do arroz e feijão.",
      atencao: "Evite feijões prontos industrializados de caixinha ou temperados com caldos de carne artificiais (em tablete), que contêm muito sódio e conservantes ruins para os rins.",
      explica: "Isso aqui já está na nossa mesa há gerações, minha filha — o arroz com feijão todo dia. Só continue fazendo o que sua avó já fazia certo, mas lembra: come a salada antes de colocar o arroz com feijão na boca. A combinação deles é ótima para segurar a glicose!"
    }
  ],
  
  glicose: {
    titulo: "Controle de Glicose e Insulina",
    citacao: "Quando o sangue fica grosso de tanto açúcar, todo o corpo trabalha no sufoco.",
    texto: `
      <p>A glicose é o combustível do nosso corpo, mas combustível em excesso e sem controle explode o motor. Quando comemos carboidratos refinados (pão branco, bolo, doces, refrigerantes) de estômago vazio, esse açúcar entra correndo na nossa corrente sanguínea. É o chamado <strong>pico de glicose</strong>.</p>
      <p>Para combater esse pico, o pâncreas libera uma enxurrada de <strong>insulina</strong>, o hormônio que limpa o açúcar do sangue e o empurra para as células. O problema é que, com o tempo, de tanto receber picos de açúcar, nossas células ficam cansadas e param de responder à insulina. Isso é a chamada <strong>resistência à insulina</strong>, o passo anterior ao pré-diabetes e à diabetes tipo 2.</p>
      <p>Além disso, o excesso de açúcar que a insulina tira do sangue e as células não conseguem usar é enviado direto para o fígado, que o transforma em <strong>gordura hepática (esteatose)</strong>. Ou seja: fígado gorduroso e glicose alta são irmãos gêmeos!</p>
      
      <div class="card-destaque">
        <h3>🥄 A Regra de Ouro do Vinagre de Maçã</h3>
        <p>Estudos científicos comprovam que tomar 1 colher de sopa de vinagre de maçã diluído em um copo de água morna cerca de 15 a 20 minutos antes da sua maior refeição do dia pode achatar o pico de glicose em até <strong>20% a 30%</strong>. O ácido acético do vinagre retarda temporariamente a ação da amilase, a enzima que quebra os carboidratos em açúcar no estômago.</p>
      </div>

      <div class="card-destaque" style="border-left-color: var(--terra);">
        <h3>🚶 Caminhada Pós-Refeição</h3>
        <p>Depois de comer, não deite no sofá! Dar uma caminhada leve de apenas 10 a 15 minutos logo após o almoço ou jantar faz com que seus músculos consumam a glicose que acabou de entrar no sangue diretamente como energia, sem precisar de uma enxurrada de insulina. Isso protege o seu pâncreas e evita o acúmulo de gordura no fígado.</p>
      </div>
    `,
    explica: "Minha filha, se o pâncreas trabalha cansado e o sangue fica grosso de doce, a energia vai embora e o corpo adoece. Comer na ordem certa é dar um refresco para os seus órgãos trabalharem em paz."
  },

  coracao: {
    titulo: "Coração & Circulação",
    citacao: "O sangue precisa correr leve e solto pelas veias para o coração bater em paz.",
    imagem: "images/rec_azeite_oliva.jpg",
    texto: `
      <p>O coração é a bomba que faz a vida circular em nós. Se o nosso sangue está carregado de triglicerídeos altos, açúcar em excesso e inflamação (gerada pela gordura no fígado), ele fica mais viscoso. É o que as pessoas antigamente chamavam de 'sangue grosso'.</p>
      <p>Para empurrar esse sangue pesado, o coração precisa fazer muito mais força, elevando a <strong>pressão arterial</strong> e danificando a parede das artérias. É assim que surgem os riscos de infarto e derrame (AVC).</p>
      <p>Para proteger seu coração e melhorar a circulação, adote estes hábitos simples:</p>
      <ul>
        <li><strong>Azeite de Oliva Extravirgem:</strong> Use de 1 a 2 colheres de sopa por dia frias sobre a comida pronta. Suas gorduras monoinsaturadas limpam o colesterol ruim (LDL) e protegem as artérias.</li>
        <li><strong>Reduza o sal comum:</strong> Tempere com ervas (alho, cebola, salsinha, orégano, limão). O sal em excesso retém água e aperta as veias.</li>
        <li><strong>Coma alho cozido ou assado:</strong> O alho contém alicina, que ajuda a relaxar os vasos sanguíneos e controlar a pressão.</li>
        <li><strong>Castanhas e Nozes:</strong> Um pequeno punhado por dia traz magnésio e gorduras boas que regulam o ritmo do coração.</li>
      </ul>
    `,
    explica: "Meu pai dizia que o coração é a bomba do moinho — se a água estiver grossa e cheia de terra, o moinho trabalha pesado e quebra. Limpando o fígado e segurando o açúcar, o sangue corre leve e o coração bate no compasso certo, sem fazer força à toa."
  },

  rim: {
    titulo: "Saúde dos Rins",
    citacao: "Os rins são as peneiras mais finas e delicadas do nosso corpo. Cuide delas.",
    texto: `
      <p>Os rins são os grandes filtros do nosso organismo. Eles limpam o sangue de todas as toxinas, excessos de minerais e restos de medicamentos, jogando tudo fora pela urina. Quando a glicose no sangue está muito alta, o excesso de açúcar danifica os minúsculos vasinhos de filtragem dos rins, uma complicação grave chamada nefropatia diabética.</p>
      <p>Além disso, o uso excessivo de remédios químicos por conta própria (como anti-inflamatórios para dor nas costas ou articulações) é uma das maiores causas de falência dos rins em pessoas acima de 60 anos.</p>
      <p>Como ajudar seus rins a filtrar melhor:</p>
      <ul>
        <li><strong>Água na medida certa:</strong> Beba cerca de 2 litros de água ao dia. Urina clara é sinal de rim bem hidratado.</li>
        <li><strong>Evite caldos e temperos prontos:</strong> Aqueles tabletes de caldo de carne ou galinha e temperos em pó vermelhos são verdadeiras bombas de sódio e glutamato que sobrecarregam os rins na hora.</li>
        <li><strong>Chá de quebra-pedra ou cavalinha:</strong> De forma moderada (1 xícara pequena, 2 a 3 vezes na semana), auxiliam na eliminação de líquidos e previnem pedras, mas nunca tome em excesso.</li>
        <li><strong>Controle a pressão:</strong> Pressão alta destrói os filtros dos rins rapidamente.</li>
      </ul>
    `,
    explica: "Os rins são as peneiras finas do corpo, filha. Se você joga muita sujeira nelas — sal demais, remédio químico por qualquer dorzinha —, a peneira entope. Beba sua aguinha todo dia, tome seu chazinho de casca de abacaxi com moderação e proteja seus filtros."
  },

  sono: {
    titulo: "Sono & Energia",
    citacao: "O descanso da noite é quando o corpo se limpa e se conserta por dentro.",
    texto: `
      <p>Muitas pessoas acham que o sono serve apenas para descansar a mente, mas é justamente durante o sono profundo que o seu fígado realiza o trabalho mais pesado de <strong>desintoxicação e limpeza metabólica</strong>. Se você dorme mal ou janta muito tarde e pesado, o corpo gasta a noite fazendo digestão e impede o fígado de se recuperar.</p>
      <p>O sono ruim também desregula os hormônios da fome (grelina e leptina), fazendo com que você acorde no dia seguinte com uma vontade incontrolável de comer doces e massas, gerando mais picos de glicose.</p>
      <p>Para um sono reparador e cheio de energia ao acordar:</p>
      <ul>
        <li><strong>Jante mais cedo:</strong> Coma a sua última refeição sólida pelo menos 3 horas antes de ir deitar.</li>
        <li><strong>Chá do Sossego:</strong> Tome 1 xícara de chá de camomila, erva-cidreira ou mulungu morno 1 hora antes de dormir.</li>
        <li><strong>Desligue as telas:</strong> A luz azul do celular e da televisão avisa o cérebro que ainda é dia, cortando a produção de melatonina (o hormônio do sono).</li>
        <li><strong>Evite cafeína após as 16h:</strong> Mesmo que você consiga dormir após o café, ele destrói a qualidade do sono profundo, fazendo você acordar cansada.</li>
      </ul>
    `,
    explica: "Antigamente a gente dormia com o anoitecer e acordava com o galo cantando. Hoje vocês ficam nessa luz de celular até meia-noite e querem ter energia de manhã. Desliga isso, minha filha, toma um chazinho de cidreira morno e deixa o corpo descansar. O fígado faz a limpeza dele justamente enquanto você dorme."
  },

  peso: {
    titulo: "Equilíbrio de Peso",
    citacao: "Esqueça balanças e contagem de calorias. Foque em comer comida de verdade na ordem certa.",
    texto: `
      <p>O peso do nosso corpo é apenas um reflexo de como o nosso metabolismo está funcionando. Se o seu fígado está sobrecarregado de gordura e suas células estão resistentes à insulina, o seu corpo entra em modo de 'armazenamento'. Tudo o que você come, a insulina transforma em gordura na barriga e nos órgãos.</p>
      <p>Tentar emagrecer fechando a boca ou passando fome só faz o seu corpo achar que está em uma época de seca, reduzindo o seu metabolismo e fazendo você engordar em dobro depois. A solução é dar os alimentos certos para o corpo se sentir seguro e queimar gordura naturalmente.</p>
      <ul>
        <li><strong>Densidade nutricional:</strong> Coma alimentos ricos em nutrientes e baixos em calorias vazias (como folhas verdes, legumes cozidos, feijão, ovos). Eles dão saciedade de verdade.</li>
        <li><strong>Gorduras boas:</strong> Abacate, azeite, coco e castanhas mandam um sinal para o cérebro dizendo: 'estamos bem alimentados, pode queimar a gordura estocada'.</li>
        <li><strong>Movimento afetivo:</strong> Não precisa se matar na academia. Caminhadas diárias, cuidar das plantas, arrumar a casa e caminhar após comer ajudam a manter o metabolismo ativo.</li>
      </ul>
    `,
    explica: "Esquece esse negócio de pesar comida na balança, filha. Na roça a gente comia prato cheio de feijão, arroz e couve e ninguém era gordo. Sabe por quê? Porque era comida da terra, sem veneno de pacotinho, e a gente trabalhava o corpo. Coma comida de verdade, coma na ordem certa e seu corpo vai achar o peso ideal dele."
  },

  saudeFeminina: {
    titulo: "Saúde Feminina e Hormônios",
    citacao: "A mulher passa por fases diferentes na vida, e a alimentação precisa acompanhar essas mudanças.",
    texto: `
      <p>A menopausa traz uma queda natural nos hormônios protetores femininos (estrogênio e progesterona). Essa mudança faz com que a gordura corporal, que antes acumulava no quadril, comece a acumular na barriga e ao redor dos órgãos viscerais (como o fígado). Por isso, após os 50 anos, o risco de fígado gorduroso aumenta muito nas mulheres.</p>
      <p>Além disso, a queda hormonal favorece os picos de calor noturnos (fogachos), a perda de massa óssea e as oscilações de humor. A alimentação certa pode ser um santo remédio para suavizar essa transição:</p>
      <ul>
        <li><strong>Linhaça dourada ou marrom:</strong> Traz lignanas, compostos naturais que imitam suavemente o estrogênio no corpo, ajudando a controlar os calores. Use 1 colher de sopa de sementes moídas por dia no iogurte ou na fruta.</li>
        <li><strong>Inhame cozido:</strong> Traz diosgenina, uma substância que apoia a produção de hormônios saudáveis. Comer inhame cozido de manhã ajuda na disposição.</li>
        <li><strong>Cálcio e Magnésio:</strong> Vegetais verde-escuros (couve, espinafre) e gergelim ajudam a manter os ossos fortes sem precisar de remédio.</li>
      </ul>
    `,
    explica: "A idade chega e com ela os calorões que incomodam a gente de noite. Minha mãe dizia que comer inhame cozido de manhã ajuda a acalmar o corpo da mulher. Hoje a ciência fala que ele ajuda nos hormônios. Mas o principal é evitar o doce que inflama o corpo."
  },

  plano14: {
    titulo: "Cardápio Desincha 14 Dias",
    citacao: "O cardápio pronto com comida simples do nosso dia a dia, focado em desinchar e estabilizar a glicose.",
    texto: `
      <p>Esse plano de 14 dias foi feito para você colocar em prática hoje mesmo, sem complicações e sem ingredientes caros. O segredo principal é sempre comer na ordem certa: <strong>Fibra → Proteína → Carboidrato por último</strong>.</p>
      <p>Para facilitar a sua vida e não causar cansaço de decisão (muito comum em quem precisa pensar em receitas diferentes toda hora), os cafés da manhã e lanches são simples e repetitivos, enquanto os almoços e jantares trazem a variedade necessária com comida caseira de verdade.</p>
      <p>Abaixo está a tabela dos 14 dias. Você pode clicar nas receitas de apoio destacadas para ver os ingredientes e modo de preparo de cada uma.</p>
    `,
    tabela: [
      { dia: 1, cafe: "Ovo mexido + torrada integral + café sem açúcar", lancheM: "1 fruta baixo IG (maçã ou pera)", almoco: "Arroz+feijão + frango grelhado + salada crua base (comer salada 1º)", lancheT: "Iogurte natural + 1 col. chia", jantar: "Sopa de legumes com frango desfiado" },
      { dia: 2, cafe: "Aveioca com canela", lancheM: "Punhado de castanhas", almoco: "Salada de folhas + peixe assado + purê de abóbora", lancheT: "1 fatia queijo branco + 2 castanhas do Pará", jantar: "Omelete de legumes + salada crua base" },
      { dia: 3, cafe: "Iogurte natural + aveia + chia + morango", lancheM: "1 fruta baixo IG", almoco: "Arroz+feijão + carne moída magra + brócolis no vapor", lancheT: "Palitos de cenoura/pepino + pasta de grão-de-bico", jantar: "Sopa de abóbora com gengibre" },
      { dia: 4, cafe: "Torrada integral + pasta de abacate e ovo", lancheM: "Iogurte natural puro", almoco: "Salada crua base + frango grelhado + batata-doce", lancheT: "1 punhado de amendoim sem sal", jantar: "Legumes refogados + ovo" },
      { dia: 5, cafe: "Ovo mexido + tomate + café sem açúcar", lancheM: "1 fruta baixo IG", almoco: "Arroz+feijão + peixe grelhado + couve refogada", lancheT: "Iogurte natural + chia", jantar: "Omelete de espinafre" },
      { dia: 6, cafe: "Aveioca com cacau 100%", lancheM: "Castanhas", almoco: "Salada crua base + frango + purê de mandioquinha", lancheT: "Palitos de legumes + pasta de grão-de-bico", jantar: "Sopa de legumes" },
      { dia: 7, cafe: "Iogurte natural + aveia + frutas vermelhas", lancheM: "1 fruta baixo IG", almoco: "Salada grande + ovo cozido + feijão", lancheT: "Água de limão + gengibre (Shot Dourado)", jantar: "Caldo de legumes leve" },
      { dia: 8, cafe: "Ovo mexido + torrada integral + café sem açúcar", lancheM: "1 fruta baixo IG", almoco: "Arroz+feijão + carne magra + salada crua base", lancheT: "Iogurte natural + chia", jantar: "Legumes no vapor + frango desfiado" },
      { dia: 9, cafe: "Aveioca com canela", lancheM: "Castanhas", almoco: "Salada crua base + peixe + abóbora cozida", lancheT: "Palitos de pepino + pasta de grão-de-bico", jantar: "Sopa de abóbora" },
      { dia: 10, cafe: "Torrada integral + pasta de abacate e ovo", lancheM: "Iogurte natural puro", almoco: "Arroz+feijão + frango + brócolis", lancheT: "Amendoim sem sal", jantar: "Omelete de legumes" },
      { dia: 11, cafe: "Ovo mexido + tomate + café sem açúcar", lancheM: "1 fruta baixo IG", almoco: "Salada crua base + carne moída magra + batata-doce", lancheT: "Iogurte natural + chia", jantar: "Sopa de legumes com frango" },
      { dia: 12, cafe: "Aveioca com cacau 100%", lancheM: "Castanhas", almoco: "Arroz+feijão + peixe + couve refogada", lancheT: "Palitos de legumes + pasta de grão-de-bico", jantar: "Legumes refogados + ovo" },
      { dia: 13, cafe: "Iogurte natural + aveia + frutas vermelhas", lancheM: "1 fruta baixo IG", almoco: "Salada crua base + frango + purê de mandioquinha", lancheT: "Água de limão (Shot Dourado)", jantar: "Caldo de legumes" },
      { dia: 14, cafe: "Ovo mexido + torrada integral + café sem açúcar", lancheM: "1 fruta baixo IG", almoco: "Prato livre prêmio — arroz+feijão+carne+salada (comendo na ordem certa)", lancheT: "Iogurte natural + chia", jantar: "Sopa de legumes" }
    ],
    receitasApoio: [
      {
        nome: "Aveioca (aveia + ovo)",
        imagem: "images/card_aveioca.jpg",
        ingredientes: "3 colheres de sopa de aveia em flocos finos · 1 ovo inteiro · 1 banana amassada (opcional) · canela em pó a gosto.",
        preparo: "Bata o ovo em uma tigela pequena, misture com a aveia (e a banana amassada se for adoçar), tempere com canela. Despeje em uma frigideira antiaderente pequena levemente untada com um pingo de óleo de coco ou azeite, em fogo baixo. Tampe e cozinhe por 3-4 minutos de cada lado até ficar firminha."
      },
      {
        nome: "Torrada com pasta de abacate e ovo",
        imagem: "images/card_torrada_abacate.jpg",
        ingredientes: "1 fatia de pão integral de boa qualidade · ¼ de abacate maduro · suco de limão · pitada de sal · 1 ovo poché ou cozido.",
        preparo: "Torre ligeiramente a fatia de pão integral na torradeira ou frigideira. Amasse o abacate com um garfo junto com o limão e o sal. Espalhe sobre a torrada quente e coloque o ovo por cima."
      },
      {
        nome: "Pudim de chia",
        imagem: "images/card_pudim_chia.jpg",
        ingredientes: "3 colheres de sopa de sementes de chia · 150 ml de leite de coco gordo (ou leite de amêndoas sem açúcar) · eritritol ou stevia a gosto · frutas vermelhas para finalizar.",
        preparo: "Em um pote de vidro com tampa, misture bem as sementes de chia com o leite e o adoçante. Deixe descansar por 10 minutos e mexa bem novamente para a chia não grudar no fundo. Tampe e leve à geladeira por pelo menos 4 horas (ou de véspera). Sirva frio decorado com morangos ou mirtilos."
      },
      {
        nome: "Salada crua base",
        imagem: "images/card_salada_base.jpg",
        ingredientes: "Folhas verdes rasgadas (alface, rúcula ou agrião) · tomate fatiado · pepino em rodelas · cenoura ralada fina · azeite de oliva extravirgem e limão para temperar.",
        preparo: "Lave bem todos os vegetais. Arrume as folhas em um prato fundo, distribua os tomates, pepinos e cenoura por cima. Tempere com azeite e limão no momento exato de consumir. Coma sempre essa salada antes de qualquer outra parte quente do prato."
      },
      {
        nome: "Sopa de legumes (base das jantas)",
        imagem: "images/card_sopa_legumes.jpg",
        ingredientes: "1 abóbora cabotiá pequena ou chuchu · 1 cenoura média · 1 abobrinha picada · 1 cebola picadinha · 2 dentes de alho amassados · azeite · sal e frango cozido desfiado.",
        preparo: "Refogue a cebola e o alho em uma panela com um fio de azeite. Adicione os legumes cortados em cubos pequenos e cubra com água quente. Cozinhe em fogo médio até que estejam muito macios. Tempere com sal e bata uma parte no liquidificador para encorpar, mantendo pedaços. Adicione o frango desfiado por cima na hora de servir."
      },
      {
        nome: "Pasta de grão-de-bico (dip dos lanches)",
        imagem: "images/card_pasta_grao_bico.jpg",
        ingredientes: "1 xícara de grão-de-bico cozido (sem a casca, se possível, para ficar mais leve) · 1 colher de sopa de azeite · suco de ½ limão · 1 dente de alho pequeno sem o miolo · sal.",
        preparo: "Coloque todos os ingredientes no liquidificador ou processador de alimentos. Adicione de 2 a 3 colheres de sopa da água do cozimento do grão-de-bico. Bata até virar um creme espesso e liso. Sirva acompanhado de palitos de cenoura ou pepino cru."
      },
      {
        nome: "Arroz com feijão (base dos almoços)",
        imagem: "images/card_arroz_feijao.jpg",
        ingredientes: "Arroz (de preferência integral) · feijão carioca ou preto · alho · cebola · louro · sal.",
        preparo: "Prepare o arroz cozendo tradicionalmente. Refogue o feijão cozido com alho amassado e cebola no azeite com louro. Sirva juntos. Lembre-se: comer arroz e feijão juntos diminui a velocidade com que o arroz vira açúcar no sangue comparado a comer o arroz sozinho!"
      },
      {
        nome: "Lasanha de Berinjela e Abobrinha da Roça",
        imagem: "images/card_lasanha_roca.jpg",
        ingredientes: "1 berinjela grande cortada em fatias finas · 1 abobrinha grande cortada em fatias finas · 300g de peito de frango cozido e desfiado (ou carne moída magra refogada) · 2 xícaras de molho de tomate caseiro (tomates batidos com alho, cebola e manjericão) · 150g de queijo minas padrão ou muçarela ralada · orégano e sal a gosto · 1 colher de sopa de azeite de oliva.",
        preparo: "Grelhe levemente as fatias de berinjela e abobrinha em uma frigideira com um fiozinho de azeite e sal para retirar o excesso de água. Em um refratário médio, monte em camadas: espalhe um pouco de molho caseiro, coloque fatias de berinjela/abobrinha, o frango desfiado (ou carne moída refogada), um pouco de molho e uma salpicada de queijo. Repita o processo finalizando com molho de tomate, o queijo ralado e orégano. Leve ao forno médio a 180°C por 20 a 25 minutos até derreter o queijo e gratinar."
      }
    ],
    explica: "Minha filha, no meu tempo a gente comia a salada antes do arroz sem nem saber por quê — hoje a ciência provou que a vó tinha razão. Segue essa tabelinha dos 14 dias sem furar, comendo na ordem certa, e você vai ver como o seu corpo vai desinchar rapidinho."
  },

  diario: {
    titulo: "Diário de Saúde e Progresso",
    citacao: "Anotar o que a gente sente é uma forma de carinho com o próprio corpo.",
    texto: `
      <p>Escrever no papel como nos sentimos é uma sabedoria antiga. Aqui, você pode registrar o seu progresso diário, como está a sua disposição, sua glicemia ou seu peso, e ler conselhos de bem-estar da Dona Sebastiana.</p>
      <p>Seus registros ficam guardados em segurança diretamente no seu navegador, sem que ninguém de fora tenha acesso a eles.</p>
    `,
    conselhos: [
      "Se hoje foi um dia difícil, não desanime, minha filha. Amanhã o sol nasce de novo e você ganha outra chance de recomeçar.",
      "Bebeu sua água hoje? Os rins e o fígado precisam de água limpa para lavar a sujeira do corpo.",
      "Vá caminhar 10 minutinhos no quintal ou na calçada após o almoço. O açúcar do sangue agradece o movimento.",
      "Substituir o pão pela aveioca de manhã é um carinho enorme que você faz para o seu fígado. Continue firme!",
      "Uma boa noite de sono cura mais do que dez comprimidos de farmácia. Desliga a TV cedo hoje, vem deitar."
    ]
  },

  referencias: [
    { autor: "Shukla AP et al.", estudo: "Food Order Has a Significant Impact on Postprandial Glucose and Insulin Levels", fonte: "Diabetes Care, 2015", link: "https://diabetesjournals.org/care/article/38/7/e98/30914/Food-Order-Has-a-Significant-Impact-on" },
    { autor: "PMC5604719", estudo: "Carbohydrate-last meal pattern lowers postprandial glucose and insulin excursions in type 2 diabetes", fonte: "Journal of Clinical Biochemistry and Nutrition, 2017", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC5604719/" },
    { autor: "ScienceDirect, 2019", estudo: "Postprandial glucose, insulin and incretin responses differ by test meal macronutrient sequence (PATTERN study)", fonte: "Clinical Nutrition, 2019", link: "https://www.sciencedirect.com/science/article/abs/pii/S0261561419301542" },
    { autor: "PMC7398578", estudo: "The impact of food order on postprandial glycemic excursions in prediabetes", fonte: "Nutrients, 2020", link: "https://pmc.ncbi.nlm.nih.gov/articles/PMC7398578/" },
    { autor: "PMC10610476, 2023", study: "A Randomized Controlled Pilot Study of the Food Order Behavioral Intervention in Prediabetes", fonte: "Nutrients, 2023", link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10610476/" },
    { autor: "PubMed 28292654", estudo: "Vinegar consumption can attenuate postprandial glucose and insulin responses; systematic review and meta-analysis", fonte: "Diabetes Research and Clinical Practice, 2017", link: "https://pubmed.ncbi.nlm.nih.gov/28292654/" },
    { autor: "PMC8912639", estudo: "The Effects of Postprandial Walking on the Glucose Response after Meals", fonte: "Sports Medicine, 2022", link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC8912639/" },
    { autor: "PMC10036272", estudo: "After Dinner Rest a While, After Supper Walk a Mile? Systematic Review with Meta-analysis", fonte: "Sports Medicine, 2023", link: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC10036272/" }
  ],

  goles: [
    {
      id: "gole-vinagre-agua",
      titulo: "1. Golinho de Vinagre de Maçã com Água Morna",
      citacao: "Um golinho de manhã limpa o estômago e prepara as coisas para receber a comida.",
      imagem: "images/gol_vinagre_agua.jpg",
      ingredientes: [
        { nome: "Vinagre de maçã de boa qualidade", qtd: "1 colher de sopa (15 ml)", funcao: "Ácido acético retarda a quebra do carboidrato" },
        { nome: "Água morna", qtd: "200 ml", funcao: "Base diluente" }
      ],
      preparo: [
        "Despeje os 200 ml de água em um copo e certifique-se de que está morna, não quente demais.",
        "Adicione a colher de sopa de vinagre de maçã.",
        "Misture levemente e beba. Se puder, use um canudo para proteger o esmalte dos dentes."
      ],
      quandoUsar: "1 vez ao dia, de manhã em jejum ou 15 minutos antes da principal refeição do dia (almoço).",
      atencao: "NUNCA tome o vinagre puro, pois a acidez agride a parede do esmalte dentário e a mucosa do estômago. Evite se tiver gastrite, refluxo forte ou úlceras.",
      explica: "Minha filha, lá na roça a gente não tinha remédio de farmácia — tinha o vinagre que a gente mesmo fazia da maçã que sobrava no pomar. Meu pai, o Seu Tonico, tomava um golinho antes do almoço e dizia que 'ajeitava o estômago'. Eu faço assim até hoje. Mas escuta bem: o golinho ajuda a aliviar, mas quem realmente desincha o fígado e segura a glicose é comer na ordem certa. Deus te abençoe."
    },
    {
      id: "gole-shot-vinagre-canela",
      titulo: "2. Shot de Vinagre de Maçã, Limão e Canela",
      citacao: "A canela e o limão ajudam a acalmar o azedume do vinagre e ativam o corpo de manhã.",
      imagem: "images/gol_shot_vinagre_canela.jpg",
      ingredientes: [
        { nome: "Água fria ou morna", qtd: "50 ml (copinho pequeno)", funcao: "Diluente rápido" },
        { nome: "Vinagre de maçã", qtd: "1 colher de sopa", funcao: "Acelera o metabolismo e melhora resposta glicêmica" },
        { nome: "Suco de limão", qtd: "Suco de ½ limão", funcao: "Rico em vitamina C e ação adstringente" },
        { nome: "Canela em pó", qtd: "½ colher de chá", funcao: "Melhora a ação da insulina nas células" }
      ],
      preparo: [
        "Em um copinho pequeno (tipo shot), misture os 50 ml de água com o vinagre de maçã e o suco do limão.",
        "Adicione a canela em pó e mexa vigorosamente até dissolver bem.",
        "Beba de uma vez só, sem enrolar."
      ],
      quandoUsar: "Pela manhã, em jejum, para começar o dia despertando o sistema de queima de gordura.",
      atencao: "Muito ácido. Beba rápido e faça um bochecho com água limpa logo depois. Evite o uso continuado se sentir queimação no estômago.",
      explica: "Esse golinho é pra quem acha o vinagre muito amargo ou azedo puro na água. A canela e o limão deixam ele mais palatável e ajudam a dar aquela acordada nas células. Mas lembra: o shot prepara o corpo, mas é a comida do dia inteiro comendo na ordem certa que faz a mágica acontecer."
    },
    {
      id: "gole-boldo",
      titulo: "3. Chá de Boldo (Uso Pontual)",
      citacao: "O boldo limpa o fígado de verdade, mas é planta forte e quer respeito.",
      imagem: "images/rec_cha_boldo.jpg",
      ingredientes: [
        { nome: "Folhas secas ou frescas de boldo", qtd: "1 colher de chá (ou 1 folha grande)", funcao: "Ação colerética que estimula a vesícula e limpa o fígado" },
        { nome: "Água", qtd: "200 ml", funcao: "Base" }
      ],
      preparo: [
        "Ferva a água e apague o fogo.",
        "Adicione as folhas de boldo picadas e tampe com um pires por 10 minutos.",
        "Coe e tome morno, logo após a refeição."
      ],
      quandoUsar: "1 xícara pequena após a principal refeição, apenas por no máximo 5 dias seguidos. Faça pausas de pelo menos 10 dias antes de tomar de novo.",
      atencao: "Em excesso, a boldina pode sobrecarregar as células hepáticas. Contraindicado para grávidas, pessoas com obstruções de bile ou com graves problemas renais.",
      explica: "O boldo, meu cristão, era erva de quintal — toda casa de roça tinha um pé perto da porta. Minha mãe fazia um chazinho depois da janta quando a gente comia demais na festa de igreja. Mas atenção: chá de boldo não é água, tem hora certa e tempo certo — no máximo 5 diazinhos seguidos, depois dá uma folga de dez dias. Nada de tomar todo santo dia!"
    },
    {
      id: "gole-alcachofra",
      titulo: "4. Chá de Alcachofra",
      citacao: "Um ótimo protetor das células do fígado, facilitador da quebra de gordura.",
      imagem: "images/rec_cha_alcachofra.jpg",
      ingredientes: [
        { nome: "Folhas secas de alcachofra", qtd: "1 colher de sopa", funcao: "Contém cinarina que estimula a digestão saudável" },
        { nome: "Água", qtd: "200 ml", funcao: "Base" }
      ],
      preparo: [
        "Ferva a água e desligue.",
        "Despeje na xícara sobre as folhas, tampe por 10 minutos.",
        "Coe e sirva morno, sem adoçar."
      ],
      quandoUsar: "1 xícara antes do almoço e 1 antes do jantar (cerca de 20 minutos antes).",
      atencao: "Evitar em quem tem cálculo biliar ou inflamações agudas na vesícula. Não recomendado para crianças menores de 12 anos.",
      explica: "A alcachofra protege o fígado por dentro e ajuda a soltar a bile na hora de comer, fazendo a digestão da carne e da gordura ficar leve, sem dar aquela sensação de estômago estufado que dá sono à tarde."
    },
    {
      id: "gole-carqueja",
      titulo: "5. Chá de Carqueja",
      citacao: "A carqueja é amarga como a vida de quem não se cuida, mas o resultado compensa.",
      imagem: "images/gol_cha_carqueja.jpg",
      ingredientes: [
        { nome: "Carqueja seca", qtd: "1 colher de sopa", funcao: "Melhora digestão, protege estômago e fígado" },
        { nome: "Água", qtd: "200 ml", funcao: "Base" }
      ],
      preparo: [
        "Ferva a água.",
        "Despeje sobre as hastes secas de carqueja, abafe por 10 minutos.",
        "Coe e tome. Se achar amarga demais, adicione um fiozinho pequeno de mel ou algumas gotinhas de limão."
      ],
      quandoUsar: "1 xícara pequena após a maior refeição do dia, para auxiliar o fígado a trabalhar menos.",
      atencao: "Pode potencializar o efeito de remédios controlados como lítio. Evite se sua pressão for muito baixa e não tome por mais de uma semana seguida.",
      explica: "A carqueja é amarga, minha filha, não vou mentir para você. Mas é o amargo que limpa o sangue grosso e ajuda o fígado a jogar as impurezas fora. Tome um golinho após o almoço quando sentir a boca amarga ou a digestão emperrada."
    },
    {
      id: "gole-shot-dourado",
      titulo: "6. Shot Dourado de Cúrcuma e Gengibre",
      citacao: "O dourado da cúrcuma traz a saúde da terra para o seu fígado de manhã.",
      imagem: "images/rec_shot_limao_curcuma.jpg",
      ingredientes: [
        { nome: "Cúrcuma em pó", qtd: "¼ colher de chá", funcao: "Anti-inflamatório sistêmico forte" },
        { nome: "Gengibre ralado fresco", qtd: "½ colher de chá", funcao: "Melhora a circulação e estimula enzimas digestivas" },
        { nome: "Suco de limão", qtd: "Suco de ½ limão", funcao: "Vitamina C e sabor" },
        { nome: "Água morna", qtd: "100 ml", funcao: "Diluente" },
        { nome: "Pimenta-do-reino", qtd: "1 pitada", funcao: "Ativa a absorção da curcumina" }
      ],
      preparo: [
        "Coloque a cúrcuma, o gengibre, a pimenta-do-reino e o limão no copo.",
        "Adicione a água morna e mexa bem com uma colher pequena.",
        "Tome morno em jejum."
      ],
      quandoUsar: "Pela manhã, logo ao acordar, de 3 a 4 vezes por semana.",
      atencao: "Evitar se tiver feridas no estômago ou refluxo grave de manhã. Pessoas que tomam anticoagulantes devem ter cuidado com o gengibre e a cúrcuma em doses diárias.",
      explica: "Esse aqui é novo pra mim, filha — não tinha cúrcuma na roça de Minas antigamente, a gente usava só o açafrão da terra ralado na comida. Mas hoje eu uso o shot dourado e gosto. Beba de estômago vazio, sentada e com calma. O gole prepara, mas é a refeição em ordem certa que faz a cura."
    },
    {
      id: "gole-canela-cravo",
      titulo: "7. Chá de Canela e Cravo",
      citacao: "Cheiroso e aconchegante, ajuda a acalmar a vontade de doce e ajuda a glicose.",
      imagem: "images/gol_cha_canela_cravo.jpg",
      ingredientes: [
        { nome: "Canela em pau", qtd: "1 pedaço pequeno", funcao: "Ajuda o corpo a usar o açúcar no sangue" },
        { nome: "Cravo-da-índia", qtd: "2 unidades", funcao: "Antioxidante forte e melhora a digestão" },
        { nome: "Água", qtd: "250 ml", funcao: "Base" }
      ],
      preparo: [
        "Ferva os 250 ml de água com a canela e os cravos em uma panela por 5 minutos.",
        "Desligue o fogo, tampe e deixe abafado por mais 5 minutos.",
        "Coe e sirva morno."
      ],
      quandoUsar: "1 xícara pequena após o almoço ou jantar, cerca de 3 a 4 vezes por semana. Excelente substituto para a sobremesa.",
      atencao: "A canela contém cumarina, que em doses muito altas de uso prolongado pode sobrecarregar o fígado. Varie o uso com outros chás.",
      explica: "O cheirinho de canela e cravo lembra cozinha de vó, não lembra? Esse chá ajuda a tirar aquela 'coceira' de comer doce após a comida e ajuda a glicose a entrar mais calminha no sangue. Mas não vale colocar açúcar no chá, viu, minha filha?"
    },
    {
      id: "gole-folha-amora",
      titulo: "8. Chá de Folha de Amora",
      citacao: "A folha da amora tem um composto natural que atua como uma barreira de açúcar.",
      imagem: "images/gol_cha_amora.jpg",
      ingredientes: [
        { nome: "Folhas secas de amora", qtd: "1 colher de sopa", funcao: "Contém DNJ, composto que bloqueia parte da absorção de carboidratos" },
        { nome: "Água", qtd: "200 ml", funcao: "Base" }
      ],
      preparo: [
        "Ferva a água e apague o fogo.",
        "Adicione as folhas de amora, abafe por 10 minutos.",
        "Coe e tome morno."
      ],
      quandoUsar: "1 xícara pequena cerca de 10 a 15 minutos antes de uma refeição rica em carboidratos (como almoço com arroz/mandioca).",
      atencao: "Por atuar reduzindo a quebra de açúcar, diabéticos que usam insulina ou remédios fortes devem tomar cuidado com quedas bruscas (hipoglicemia).",
      explica: "As folhas de amora são conhecidas de quem tem calor da menopausa, mas elas também servem pra controlar o açúcar. Elas criam uma tranca no intestino para o amido do arroz e do pão não entrarem tudo de uma vez. É um santo remédio antes do almoço."
    },
    {
      id: "gole-hibisco",
      titulo: "9. Chá de Hibisco",
      citacao: "Vermelho e refrescante, ajuda a desinchar e controlar a retenção de líquidos.",
      imagem: "images/gol_cha_hibisco.jpg",
      ingredientes: [
        { nome: "Flor de hibisco seca", qtd: "1 colher de sopa", funcao: "Forte ação diurética e antioxidante protetora do fígado" },
        { nome: "Água", qtd: "250 ml", funcao: "Base" }
      ],
      preparo: [
        "Ferva a água e desligue.",
        "Adicione as flores de hibisco, abafe por 8 minutos (não deixe mais para não ficar amargo).",
        "Coe e sirva morno ou coloque na geladeira para tomar frio."
      ],
      quandoUsar: "1 a 2 xícaras ao dia, entre as refeições principais (no meio da manhã ou meio da tarde).",
      atencao: "Evitar em quem tem pressão arterial muito baixa. Pode interagir com medicações hipertensivas e antidiabéticas, modulando seus efeitos.",
      explica: "O hibisco deixa o chá vermelhinho e azedinho. Ele faz a gente ir ao banheiro fazer xixi e joga aquele inchaço das pernas e da barriga ralo abaixo. No calor, gelado com rodelas de limão fica uma delícia!"
    },
    {
      id: "gole-gengibre-puro",
      titulo: "10. Chá de Gengibre Puro",
      citacao: "Quente e picante, estimula o estômago e o fígado a trabalharem mais rápido.",
      imagem: "images/gol_cha_gengibre.jpg",
      ingredientes: [
        { nome: "Gengibre fresco", qtd: "1 pedaço de 2 cm fatiado", funcao: "Estimula o pâncreas a produzir enzimas e desinflama" },
        { nome: "Água", qtd: "250 ml", funcao: "Base" }
      ],
      preparo: [
        "Ferva a água junto com as fatias de gengibre em uma chaleira por 5 minutos.",
        "Desligue, abafe por 5 minutos e coe."
      ],
      quandoUsar: "1 xícara pequena logo após o almoço, para tirar aquela sensação de peso no estômago.",
      atencao: "Evite se tiver gastrite ativa ou se sentir queimação. Quem tem pressão alta deve monitorar se o gengibre causa alguma alteração (embora em doses pequenas seja seguro)."
    },
    {
      id: "gole-vinagre-mel",
      titulo: "11. Shot de Vinagre de Maçã com Mel",
      citacao: "Uma versão mais suave do golinho de vinagre, para quem tem o paladar mais sensível.",
      imagem: "images/gol_shot_vinagre_mel.jpg",
      ingredientes: [
        { nome: "Vinagre de maçã", qtd: "1 colher de sopa", funcao: "Melhora a absorção dos minerais e reduz pico de glicose" },
        { nome: "Mel silvestre puro", qtd: "1 colher de chá", funcao: "Suaviza o sabor e traz minerais benéficos" },
        { nome: "Água morna", qtd: "200 ml", funcao: "Base" }
      ],
      preparo: [
        "Dissolva a colher de chá de mel na água morna até incorporar.",
        "Adicione a colher de sopa de vinagre e misture bem.",
        "Beba morno pela manhã."
      ],
      quandoUsar: "Pela manhã em jejum, para quem não consegue tomar a versão ácida pura.",
      atencao: "O mel ainda é uma fonte de glicose. Diabéticos rígidos devem evitar ou usar apenas meia colher de chá do mel, preferindo eritritol se necessário.",
      explica: "Se o vinagre puro te faz careta, minha filha, coloca uma colherzinha de mel para adoçar a vida. O mel da terra tem propriedades boas, só não vale colocar uma colher de sopa cheia, senão a glicose sobe e o fígado reclama."
    },
    {
      id: "gole-maior-detox",
      titulo: "12. Suco de Maçã com Couve (Detox Suave)",
      citacao: "Um copo de verdura com fruta para varrer a sujeira do fígado.",
      imagem: "images/gol_suco_maca_couve.jpg",
      ingredientes: [
        { nome: "Couve manteiga fresca", qtd: "2 folhas", funcao: "Ajuda na desintoxicação das enzimas hepáticas" },
        { nome: "Maçã vermelha ou verde com casca", qtd: "1 unidade", funcao: "Rica em pectina que ajuda a limpar o intestino" },
        { nome: "Água", qtd: "200 ml", funcao: "Base" }
      ],
      preparo: [
        "Lave bem a couve e a maçã.",
        "Retire as sementes da maçã, mas mantenha a casca.",
        "Bata tudo no liquidificador com a água fria até ficar bem triturado. Beba fresco, sem coar."
      ],
      quandoUsar: "No café da manhã ou lanche da tarde, 2 a 3 vezes na semana.",
      atencao: "Diabéticos devem consumir após comer uma fonte de proteína (como ovo) para que a frutose da maçã não entre rápido demais no sangue."
    }
  ],

  sequenciamento: {
    titulo: "Tabela de Sequenciamento Prático",
    citacao: "O segredo não é fechar a boca, é comer cada grupo na sua vez.",
    texto: `
      <p>A <strong>Sincronia Digestiva</strong> é baseada em estudos clínicos robustos. Quando mudamos a ordem em que ingerimos os alimentos, mudamos o comportamento do nosso corpo na hora de digerir. Comer fibras primeiro cria um filtro no intestino; proteínas e gorduras depois reduzem a velocidade da digestão; e os carboidratos por último encontram o sistema já lento, entrando mansinhos no sangue.</p>
      
      <div class="infografico-ordem">
        <span class="ordem-item verde">🥗 1º Fibras/Verde</span>
        <span class="ordem-seta">➔</span>
        <span class="ordem-item proteina">🍗 2º Proteínas/Gorduras</span>
        <span class="ordem-seta">➔</span>
        <span class="ordem-item carbo">🍚 3º Carboidratos/Doces</span>
      </div>
    `,
    refeicoes: [
      {
        nome: "Café da manhã",
        ordem: "1) Fibra/proteína ➔ 2) Gordura ➔ 3) Carboidrato/pão/fruta doce",
        exemplo: "Ovo mexido + queijo branco ➔ depois pão integral ou tapioca ➔ por último o café ou fruta doce",
        comoAplicar: "Coma o ovo e o queijo primeiro. Deixe o pão ou a tapioca por último na refeição. Se for comer fruta ou tomar suco, faça isso no final da refeição, nunca de estômago vazio."
      },
      {
        nome: "Almoço",
        ordem: "1) Salada/legume cru ➔ 2) Carne/proteína ➔ 3) Arroz e feijão ➔ 4) Fruta/doce",
        exemplo: "Salada de alface e tomate ➔ depois frango grelhado ➔ por último arroz com feijão e farofa ➔ fruta de sobremesa por último",
        comoAplicar: "Sirva a salada em um prato separado ou coma ela primeiro. Depois coma a carne. Deixe o arroz, feijão e farofa para os últimos garfados da refeição. Se tiver doce ou fruta, coma logo em seguida."
      },
      {
        nome: "Jantar",
        ordem: "1) Legume/salada ➔ 2) Proteína leve (peixe/ovo) ➔ 3) Carboidrato leve",
        exemplo: "Sopa de legumes ou salada ➔ depois peixe assado ou omelete ➔ purê ou arroz em porção menor",
        comoAplicar: "Priorize os legumes e vegetais cozidos primeiro, seguidos da sua carne leve ou ovo. Deixe o carboidrato para o fim e coma em menor quantidade, pois seu corpo não gastará essa energia à noite."
      },
      {
        nome: "Lanche da tarde",
        ordem: "1) Proteína/gordura boa ➔ 2) Carboidrato/doce",
        exemplo: "Fatia de queijo, castanhas ou ovo cozido ➔ depois pão, biscoito ou fruta doce",
        comoAplicar: "Nunca coma um doce ou um pedaço de pão branco sozinho de estômago vazio. Coma sempre uma fonte de gordura boa ou proteína antes (como castanhas ou um pedaço de queijo) para forrar o estômago."
      }
    ],
    dicasOuro: [
      { titulo: "🥄 Um fio de vinagre", descricao: "Diluir 1 colher de sopa de vinagre de maçã em água e tomar 15 minutos antes do almoço reduz o pico de glicose em cerca de 20%." },
      { titulo: "🚶 Caminhada leve", descricao: "Caminhar de 10 a 20 minutos após comer faz os músculos consumirem o açúcar do sangue diretamente, poupando a insulina e evitando acúmulo de gordura." },
      { titulo: "☕ Café sem açúcar", descricao: "Evite começar o dia apenas com cafeína e açúcar. Se for tomar café puro, tome sem açúcar para proteger as células do fígado." },
      { titulo: "🥗 Salada no prato", descricao: "Sempre que houver salada no almoço, coma toda ela antes de tocar no arroz. Esse gesto simples faz uma diferença gigante no seu pâncreas." }
    ],
    explica: "Minha filha, não é só o QUE você come — é a ORDEM que você come que faz o açúcar disparar ou ficar mansinho. No meu tempo a gente comia a salada antes do arroz sem nem saber por quê... hoje a ciência já provou: começa pelo verde, depois a carne, e o arroz, o pão e o docinho só por último. Guardei essa tabela de bolso pra você nunca mais errar."
  },

  sobremesas: [
    {
      id: "sobremesa-mousse-abacate",
      titulo: "1. O Mousse da Tarde que Não Sobe a Glicose (Mousse de Abacate)",
      citacao: "Cremoso e docinho na medida certa, acalma a vontade de doce sem pesar no fígado.",
      imagem: "images/sob_mousse_abacate.jpg",
      ingredientes: [
        { nome: "Abacate maduro", qtd: "1 unidade", funcao: "Gorduras monoinsaturadas e fibras que dão saciedade e barram glicose" },
        { nome: "Cacau 100% em pó", qtd: "2 colheres de sopa", funcao: "Ação antioxidante e baixo índice glicêmico" },
        { nome: "Eritritol ou Stevia líquida", qtd: "A gosto (cerca de 1 colher de chá)", funcao: "Adoça sem subir a glicose de forma alguma" },
        { nome: "Essência de baunilha", qtd: "1 colher de chá (opcional)", funcao: "Aroma e sabor" }
      ],
      preparo: [
        "Retire a polpa do abacate maduro e coloque no liquidificador ou processador.",
        "Adicione o cacau em pó, a baunilha e o adoçante de sua preferência.",
        "Bata muito bem até virar um creme brilhoso, homogêneo e sem pedacinhos.",
        "Distribua em taças pequenas e deixe na geladeira por 20 minutos antes de consumir."
      ],
      quandoUsar: "No final da tarde, quando bate aquela vontade de comer um chocolate, ou após o almoço de domingo.",
      atencao: "O abacate é excelente, mas é calórico. Coma uma porção pequena de cada vez. Não adicione mel ou açúcar.",
      explica: "Lá no sítio a gente tinha muito abacateiro. O abacate é gordura da boa, minha filha. Juntando com cacau puro e adoçante natural, vira um doce cremoso que engana a vontade de chocolate e a glicose nem percebe o doce. O pâncreas agradece!"
    },
    {
      id: "sobremesa-brigadeiro",
      titulo: "2. Brigadeiro Fit de Abacate",
      citacao: "Para comer de colher ou enrolar, mata o desejo de brigadeiro sem levar açúcar refinado.",
      imagem: "images/sob_brigadeiro_abacate.jpg",
      ingredientes: [
        { nome: "Abacate bem maduro", qtd: "1 unidade média", funcao: "Base cremosa saudável" },
        { nome: "Cacau em pó 100%", qtd: "3 colheres de sopa", funcao: "Sabor de chocolate puro" },
        { nome: "Eritritol ou adoçante culinário", qtd: "2 colheres de sopa", funcao: "Adoça sem calorias e sem glicose" },
        { nome: "Coco ralado sem açúcar", qtd: "Para enrolar", funcao: "Traz fibras adicionais e acabamento" }
      ],
      preparo: [
        "Amasse o abacate muito bem com um garfo em uma tigela até virar um purê liso.",
        "Peneire o cacau em pó e adicione o adoçante culinário.",
        "Misture com uma espátula até virar uma massa uniforme e consistente.",
        "Leve à geladeira por 30 minutos. Depois, unte levemente as mãos com um pingo de óleo de coco, faça bolinhas e passe no coco ralado sem açúcar."
      ],
      quandoUsar: "Excelente doce para festas de família ou para comer uma bolinha nos dias que a vontade de brigadeiro aperta.",
      atencao: "Mantenha guardado na geladeira para não amolecer. Consuma até 2 bolinhas por dia."
    },
    {
      id: "sobremesa-pudim-chia",
      titulo: "3. Pudim de Chia com Canela",
      citacao: "A chia incha na geladeira e vira um pudinzinho delicioso e cheio de fibras protetoras.",
      imagem: "images/sob_pudim_chia_canela.jpg",
      ingredientes: [
        { nome: "Semente de chia", qtd: "3 colheres de sopa", funcao: "Altíssima densidade de fibras solúveis que bloqueiam picos" },
        { nome: "Leite de coco caseiro ou amêndoas", qtd: "150 ml", funcao: "Base gordurosa saudável" },
        { nome: "Canela em pó", qtd: "1 pitada generosa", funcao: "Estimula o metabolismo e ajuda a insulina" },
        { nome: "Frutas vermelhas (morango/mirtilo)", qtd: "Para decorar", funcao: "Baixo índice glicêmico e ação antioxidante" }
      ],
      preparo: [
        "Em um potinho ou copo de vidro, junte a chia, a canela e o leite de coco.",
        "Misture muito bem e aguarde 10 minutos. Mexa mais uma vez (isso evita que as sementes empelotem no fundo).",
        "Tampe o recipiente e leve à geladeira por no mínimo 4 horas ou deixe de um dia para o outro.",
        "Antes de comer, decore com alguns morangos ou mirtilos picados."
      ],
      quandoUsar: "Ótimo lanche da tarde ou até mesmo café da manhã em dias quentes.",
      atencao: "A chia puxa muita água no estômago, por isso beba bastante líquido nos dias que consumir essa receita.",
      explica: "A semente da chia parece mágica, minha filha. Ela absorve o leite e vira um pudinzinho macio. As fibras dela são tantas que o açúcar de qualquer outra coisa que você coma junto entra a passos de tartaruga no sangue. É um dos meus preferidos!"
    },
    {
      id: "sobremesa-maca-assada",
      titulo: "4. Maçã Assada com Canela",
      citacao: "A maçã assada lentamente solta o seu açúcar natural de forma suave e quentinha.",
      imagem: "images/sob_maca_assada.jpg",
      ingredientes: [
        { nome: "Maçã com casca", qtd: "1 unidade", funcao: "Fornece pectina e fibras na casca que suavizam a glicose" },
        { nome: "Canela em pó", qtd: "1 colher de chá", funcao: "Termogênico e ajuda a baixar açúcar" },
        { nome: "Eritritol", qtd: "1 colher de chá", funcao: "Adoça a casca sem elevar glicemia" },
        { nome: "Óleo de coco ou manteiga", qtd: "1 colher de chá (opcional)", funcao: "Adiciona gordura saudável para retardar a digestão" },
        { nome: "Castanhas do Pará picadas", qtd: "A gosto (opcional)", funcao: "Mais fibras e crocância" }
      ],
      preparo: [
        "Lave bem a maçã. Com a ajuda de uma faca de ponta, retire o miolo e as sementes pelo topo, criando uma cavidade, sem furar a base da maçã.",
        "Preencha o buraco com a canela, o adoçante e a manteiga/óleo de coco (e as castanhas picadas, se usar).",
        "Coloque em uma assadeira pequena e leve ao forno preaquecido a 180°C por 25 a 30 minutos, até que a maçã esteja macia por dentro.",
        "Sirva quentinha."
      ],
      quandoUsar: "Excelente sobremesa de inverno ou ceia antes de deitar (a maçã morna ajuda a acalmar para o sono).",
      atencao: "Consuma com a casca sempre, pois é nela que estão as fibras que seguram o pico de frutose da maçã.",
      explica: "Maçã assada com canela é receita de forno antiga. Quando assa, ela fica docinha e macia. A canela e a casca seguram o açúcar dela para não dar pulos no sangue. Fica um perfume maravilhoso na cozinha!"
    },
    {
      id: "sobremesa-gelatina",
      titulo: "5. Gelatina de Frutas Vermelhas (Sem Açúcar)",
      citacao: "Colorida e firme, uma sobremesa muito leve e refrescante.",
      imagem: "images/sob_gelatina_vermelha.jpg",
      ingredientes: [
        { nome: "Gelatina em pó sem sabor (incolor)", qtd: "1 pacote", funcao: "Traz colágeno e consistência sem açúcar" },
        { nome: "Morangos e mirtilos picados", qtd: "1 xícara", funcao: "Ação antioxidante e baixíssimo açúcar" },
        { nome: "Adoçante de sua preferência", qtd: "A gosto", funcao: "Sabor" },
        { nome: "Água quente e fria", qtd: "500 ml", funcao: "Base" }
      ],
      preparo: [
        "Dissolva a gelatina em pó sem sabor conforme as instruções do fabricante usando água quente.",
        "Adicione o adoçante e misture até dissolver por completo. Adicione a água fria.",
        "Distribua as frutas vermelhas higienizadas e picadas no fundo de taças individuais.",
        "Despeje a gelatina morna por cima das frutas e leve à geladeira por 3 a 4 horas até ficar firme."
      ],
      quandoUsar: "Qualquer momento do dia como doce leve. Praticamente não altera a glicose.",
      atencao: "Evite gelatinas industrializadas com sabor de pacotinho vermelho comum, pois mesmo as 'diet' costumam conter corantes e adoçantes artificiais ruins em excesso. Prefira usar gelatina sem sabor e adicionar as frutas naturais.",
      explica: "Minha filha, as gelatinas de caixinha do mercado são cheias de química e adoçante ruim. Fazendo assim, com gelatina incolor e morangos frescos picados, você come uma sobremesa bonita, saudável e sem pôr sua saúde em risco."
    },
    {
      id: "sobremesa-bolo-banana",
      titulo: "6. Bolo de Banana sem Farinha Branca e sem Açúcar",
      citacao: "A banana madura e a aveia fazem um bolo fofinho e nutritivo para o café da tarde.",
      imagem: "images/sob_bolo_banana.jpg",
      ingredientes: [
        { nome: "Bananas maduras (não pretas)", qtd: "3 unidades", funcao: "Adoça o bolo naturalmente" },
        { nome: "Ovos inteiros", qtd: "3 unidades", funcao: "Proteínas e estrutura do bolo" },
        { nome: "Aveia em flocos finos", qtd: "1 xícara", funcao: "Substitui a farinha branca trazendo fibras beta-glucanas" },
        { nome: "Canela em pó", qtd: "1 colher de chá", funcao: "Tempero amigo da glicose" },
        { nome: "Óleo de coco", qtd: "1 colher de sopa", funcao: "Gordura saudável" },
        { nome: "Fermento químico em pó", qtd: "1 colher de sopa", funcao: "Faz o bolo crescer" }
      ],
      preparo: [
        "Descasque as bananas e amasse-as muito bem com um garfo até formar um purê liso.",
        "Em uma tigela grande, bata os ovos inteiros com o óleo de coco.",
        "Adicione as bananas amassadas e misture.",
        "Incorpore a aveia em flocos finos, a canela e mexa bem. Por último, misture o fermento delicadamente.",
        "Despeje em uma forma de bolo untada e asse em forno preaquecido a 180°C por 30 a 40 minutos, até dourar (faça o teste do palito)."
      ],
      quandoUsar: "No lanche da tarde, acompanhado de uma boa xícara de café coado sem açúcar. Coma apenas uma fatia fina.",
      atencao: "As bananas já contêm açúcar natural. Embora a aveia reduza o impacto glicêmico, diabéticos devem moderar o tamanho da fatia.",
      explica: "Bolo de banana sem farinha branca é a melhor coisa para o lanche. A farinha de trigo branca sobe a glicose mais rápido que açúcar puro, sabia? A aveia segura a onda e deixa o bolo úmido e gostoso."
    },
    {
      id: "sobremesa-cheesecake",
      titulo: "7. Cheesecake de Ricota sem Açúcar",
      citacao: "Proteico e suave, com uma base crocante de castanhas e recheio leve.",
      imagem: "images/sob_cheesecake_ricota.jpg",
      ingredientes: [
        { nome: "Farinha de amêndoas ou amendoim", qtd: "1 xícara (base)", funcao: "Carboidrato de baixíssimo IG" },
        { nome: "Óleo de coco derretido", qtd: "2 colheres de sopa (base)", funcao: "Liga para a base" },
        { nome: "Ricota fresca de qualidade", qtd: "250g (recheio)", funcao: "Proteína pura que achata picos de glicose" },
        { nome: "Iogurte natural integral", qtd: "1 copo (170g) (recheio)", funcao: "Cremosidade e fermentação saudável" },
        { nome: "Suco de ½ limão", qtd: "Recheio", funcao: "Sabor cítrico" },
        { nome: "Eritritol ou adoçante culinário", qtd: "A gosto (recheio)", funcao: "Adoçante" }
      ],
      preparo: [
        "Em uma tigela, misture a farinha de amêndoas com o óleo de coco até virar uma farofa úmida. Pressione essa farofa no fundo de uma forma pequena de fundo removível. Leve à geladeira por 15 minutos.",
        "No liquidificador, bata a ricota esfarelada, o iogurte natural, o suco de limão e o adoçante culinário até virar um creme super liso.",
        "Despeje o recheio por cima da base de amêndoas.",
        "Leve à geladeira por no mínimo 3 horas antes de servir. Se desejar, finalize com uma geleia caseira de morango sem açúcar por cima."
      ],
      quandoUsar: "Sobremesa de domingo para receber a família. Ninguém vai dizer que é saudável de tão gostosa.",
      atencao: "Use ricota bem fresca e suave para o creme não ficar salgado."
    },
    {
      id: "sobremesa-sorvete-coco",
      titulo: "8. Sorvete de Coco com Frutas Vermelhas",
      citacao: "Um geladinho cremoso que refresca nos dias quentes sem disparar a insulina.",
      imagem: "images/sob_sorvete_coco.jpg",
      ingredientes: [
        { nome: "Creme de coco (leite de coco bem espesso e gordo)", qtd: "1 xícara (deixado na geladeira)", funcao: "Gorduras saudáveis que dão textura de sorvete" },
        { nome: "Frutas vermelhas congeladas", qtd: "1 xícara", funcao: "Dão a cor, o sabor azedinho e contêm pouco açúcar" },
        { nome: "Adoçante eritritol", qtd: "1 colher de sopa", funcao: "Adoçante neutro" }
      ],
      preparo: [
        "Deixe a caixinha ou lata de leite de coco na geladeira por pelo menos 12 horas (isso separa o creme firme da água). Use apenas a parte firme que subiu.",
        "No processador de alimentos ou liquidificador potente, coloque o creme de coco gelado, as frutas vermelhas congeladas e o adoçante.",
        "Bata no pulsar até virar um creme rosa e gelado com consistência de sorvete de massa.",
        "Sirva na hora ou coloque em um pote e deixe no congelador por 1 hora se preferir cortar em bolas."
      ],
      quandoUsar: "Sobremesa refrescante para tardes quentes.",
      atencao: "Consuma com moderação, pois o leite de coco concentrado é muito calórico."
    },
    {
      id: "sobremesa-mousse-maracuja",
      titulo: "9. Mousse de Maracujá sem Açúcar",
      citacao: "A acidez do maracujá equilibra perfeitamente com a cremosidade do iogurte.",
      imagem: "images/sob_mousse_maracuja.jpg",
      ingredientes: [
        { nome: "Polpa de maracujá fresco", qtd: "Polpa de 2 unidades", funcao: "Traz a acidez e fibras das sementes" },
        { nome: "Iogurte natural integral (ou grego)", qtd: "1 copo (170g)", funcao: "Base proteica de baixo carboidrato" },
        { nome: "Gelatina incolor sem sabor", qtd: "1 colher de sopa dissolvida (opcional)", funcao: "Ajuda a firmar o mousse" },
        { nome: "Eritritol ou Stevia", qtd: "A gosto", funcao: "Adoçante" }
      ],
      preparo: [
        "Bata a polpa do maracujá no liquidificador rapidamente para soltar do caroço. Coe (reserve algumas sementes para decorar).",
        "No liquidificador limpo, bata o suco do maracujá com o iogurte natural e o adoçante.",
        "Se for usar a gelatina incolor para firmar, dissolva-a conforme a embalagem e bata junto por 1 minuto.",
        "Despeje em potinhos, decore com as sementes salvas e deixe na geladeira por pelo menos 2 horas."
      ],
      quandoUsar: "Sobremesa rápida para o dia a dia.",
      atencao: "Prefira iogurtes com apenas dois ingredientes no rótulo (leite e fermento), sem açúcar ou amido adicionado."
    },
    {
      id: "sobremesa-rocambole",
      titulo: "10. Rocambole de Cacau sem Açúcar",
      citacao: "Um rocambole fofinho que derrete na boca, recheado com creme de ricota doce.",
      imagem: "images/sob_rocambole_cacau.jpg",
      ingredientes: [
        { nome: "Ovos inteiros", qtd: "4 unidades (massa)", funcao: "Dão a liga e crescem a massa sem farinha" },
        { nome: "Cacau 100% em pó", qtd: "4 colheres de sopa (massa)", funcao: "Sabor de chocolate puro" },
        { nome: "Adoçante culinário pó", qtd: "4 colheres de sopa (massa)", funcao: "Substitui açúcar" },
        { nome: "Fermento em pó", qtd: "1 colher de chá (massa)", funcao: "Estrutura" },
        { nome: "Ricota fresca ou creme de ricota", qtd: "150g (recheio)", funcao: "Proteína cremosa" },
        { nome: "Essência de baunilha e adoçante", qtd: "A gosto (recheio)", funcao: "Sabor do creme" }
      ],
      preparo: [
        "Separe as claras das gemas dos ovos. Bata as claras em neve bem firmes.",
        "Em outra tigela, misture as gemas, o cacau em pó, o adoçante e o fermento.",
        "Incorpore as claras em neve à mistura de gemas muito delicadamente, com movimentos de baixo para cima.",
        "Despeje em uma assadeira retangular grande, forrada com papel manteiga untado, formando uma camada fina. Asse a 180°C por apenas 10 a 12 minutos.",
        "Retire do forno e, ainda morno, enrole o bolo junto com o papel manteiga usando um pano úmido para não quebrar. Deixe esfriar.",
        "Bata a ricota com a baunilha e adoçante até virar um creme doce. Desenrole o bolo frio, espalhe o recheio e enrole novamente, retirando o papel manteiga. Guarde na geladeira."
      ],
      quandoUsar: "Um doce chique para o café da tarde de datas festivas.",
      atencao: "Tenha paciência ao enrolar para não quebrar a massa, pois por não levar farinha ela é muito delicada."
    },
    {
      id: "sobremesa-abobora",
      titulo: "11. Doce de Abóbora com Canela e Coco",
      citacao: "O doce caipira tradicional da fazenda, em versão amiga do seu pâncreas.",
      imagem: "images/sob_doce_abobora.jpg",
      ingredientes: [
        { nome: "Abóbora de pescoço ou cabotiá em cubos", qtd: "500g", funcao: "Rica em fibras e betacaroteno" },
        { nome: "Canela em pau", qtd: "1 unidade", funcao: "Aroma e controle de glicose" },
        { nome: "Cravo-da-índia", qtd: "2 unidades", funcao: "Aroma" },
        { nome: "Coco ralado seco sem açúcar", qtd: "2 colheres de sopa", funcao: "Fibras e gordura boa do coco" },
        { nome: "Eritritol ou adoçante culinário", qtd: "3 colheres de sopa", funcao: "Adoça substituindo o caldeirão de açúcar" }
      ],
      preparo: [
        "Coloque a abóbora em cubos em uma panela com o cravo e a canela. Adicione apenas ¼ de copo de água (a abóbora solta muita água sozinha).",
        "Cozinhe em fogo baixo com a panela tampada até que a abóbora esteja se desfazendo.",
        "Amasse os pedaços com uma colher de pau, deixando a textura de sua preferência.",
        "Adicione o adoçante e o coco ralado sem açúcar. Mexa continuamente por mais 5 minutos em fogo baixo até o doce apurar e ficar brilhante.",
        "Deixe esfriar e guarde na geladeira."
      ],
      quandoUsar: "Coma 1 ou 2 colheres de sopa após as refeições principais.",
      atencao: "Abóbora tem carboidrato. Consuma em porção pequena. O coco ajuda a segurar o açúcar.",
      explica: "Doce de abóbora com coco é o maior clássico de Minas. O tradicional leva quase o mesmo peso de açúcar e abóbora, o que é um veneno para o fígado. Fazendo assim, com abóbora pura cozida, coco ralado seco e eritritol, você sente o mesmo sabor de infância sem estragar sua saúde."
    },
    {
      id: "sobremesa-bananinha",
      titulo: "12. Bananinha Congelada com Canela (Picolé da Roça)",
      citacao: "A banana congelada no palito vira um sorvetinho delicioso de forma mágica.",
      imagem: "images/sob_bananinha_congelada.jpg",
      ingredientes: [
        { nome: "Bananas no ponto (casca amarela sem pintas)", qtd: "2 unidades", funcao: "Têm índice glicêmico mais baixo que a banana muito madura" },
        { nome: "Cacau 100% em pó", qtd: "2 colheres de sopa", funcao: "Casca protetora de chocolate sem açúcar" },
        { nome: "Óleo de coco", qtd: "1 colher de sopa", funcao: "Ajuda a derreter o cacau e cria casquinha crocante" },
        { nome: "Canela em pó", qtd: "A gosto", funcao: "Tempero amigo da glicose" }
      ],
      preparo: [
        "Descasque as bananas e corte-as ao meio. Espete um palito de sorvete ou churrasco na base de cada metade.",
        "Em uma tigelinha, derreta o óleo de coco e misture com o cacau em pó até virar uma calda lisa.",
        "Pincele ou mergulhe as bananas na calda de cacau e polvilhe a canela por cima.",
        "Disponha as bananas em um prato com papel manteiga e leve ao congelador por pelo menos 2 horas até firmar."
      ],
      quandoUsar: "Picolé saudável para o meio da tarde.",
      atencao: "Use bananas firmes. A banana bem madura e preta tem muito mais açúcar livre e sobe a glicemia mais rápido."
    },
    {
      id: "sobremesa-bolo-milho",
      titulo: "13. Bolo de Milho Cremoso da Roça",
      citacao: "Aquele cheirinho de milho assado da fazenda, com consistência cremosa no meio parecendo pamonha de forno.",
      imagem: "images/sob_bolo_milho.jpg",
      ingredientes: [
        { nome: "Milho-verde escorrido (lata ou espiga)", qtd: "2 latas (ou 4 espigas)", funcao: "Carboidrato complexo rico em fibras solúveis" },
        { nome: "Leite de coco", qtd: "1 garrafinha (200ml)", funcao: "Gorduras saudáveis que retardam o esvaziamento gástrico" },
        { nome: "Ovos inteiros", qtd: "3 unidades", funcao: "Proteínas de alta qualidade e estrutura cremosa" },
        { nome: "Eritritol ou adoçante culinário", qtd: "1 xícara", funcao: "Adoça com segurança sem picos de açúcar" },
        { nome: "Coco ralado seco sem açúcar", qtd: "50g", funcao: "Traz fibras adicionais e crocância na borda" },
        { nome: "Óleo de coco", qtd: "2 colheres de sopa", funcao: "Gorduras saudáveis para a massa" },
        { nome: "Fermento químico em pó", qtd: "1 colher de sopa", funcao: "Faz o bolo crescer levemente" }
      ],
      preparo: [
        "No liquidificador, bata o milho-verde, o leite de coco, os ovos, o eritritol e o óleo de coco por 2 a 3 minutos até ficar uma massa lisa (se gostar com mais textura caipira, bata um pouco menos).",
        "Transfira a massa para uma tigela e adicione o coco ralado sem açúcar e o fermento químico.",
        "Misture tudo delicadamente com uma colher até incorporar.",
        "Despeje em uma forma untada (de preferência redonda com furo no meio) e leve ao forno preaquecido a 180°C por 35 a 40 minutos.",
        "O bolo estará pronto quando as bordas estiverem bem douradas e o centro estiver assado mas ainda macio (textura de pamonha). Deixe amornar e sirva."
      ],
      quandoUsar: "No café da tarde, ideal para comer quentinho com um café coado na hora.",
      atencao: "Embora o milho seja saudável e contenha fibras, ele tem carboidratos naturais. Consuma apenas uma fatia por vez.",
      explica: "Bolo de milho com coco é obrigatório em tarde de chuva na roça. O bolo tradicional de milho de padaria leva farinha de trigo refinada e muito açúcar, o que dá uma moleza danada à tarde. Esse nosso, batido direto com coco ralado, ovos e leite de coco, fica com textura de pamonha cremosa e não deixa a glicose dar saltos no sangue. Um carinho para o seu estômago!"
    }
  ]
};
