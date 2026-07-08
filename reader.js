// Lógica da Plataforma Reader "Fígado Leve" - Dona Sebastiana

// Lista mapeada de itens da sidebar e sua ordenação
const menuItemsList = [
  { id: "carta", titulo: "Carta da Dona Sebastiana", icon: "✉️", tipo: "carta" },
  { id: "biblioteca", titulo: "Sua Biblioteca", icon: "📚", tipo: "biblioteca" },

  // SISTEMAS DO CORPO
  { id: "figado-gole-manha", titulo: "Fígado: O Gole da Manhã", icon: "🌱", tipo: "figado", sub: true },
  { id: "figado-boldo", titulo: "Fígado: Chá de Boldo", icon: "🍵", tipo: "figado", sub: true },
  { id: "figado-alcachofra", titulo: "Fígado: Chá de Alcachofra", icon: "🍵", tipo: "figado", sub: true },
  { id: "figado-beterraba", titulo: "Fígado: Suco de Beterraba", icon: "🥤", tipo: "figado", sub: true },
  { id: "figado-suco-verde", titulo: "Fígado: Suco Verde Detox", icon: "🥤", tipo: "figado", sub: true },
  { id: "figado-sincronia", titulo: "Fígado: A Ordem Certa", icon: "🥗", tipo: "figado", sub: true },
  { id: "figado-aveia", titulo: "Fígado: Mingau de Aveia", icon: "🥣", tipo: "figado", sub: true },
  { id: "figado-cafe", titulo: "Fígado: Café Sem Açúcar", icon: "☕", tipo: "figado", sub: true },
  { id: "figado-peixe", titulo: "Fígado: Peixe Ômega-3", icon: "🐟", tipo: "figado", sub: true },
  { id: "figado-feijao", titulo: "Fígado: Feijão de Todo Dia", icon: "🍛", tipo: "figado", sub: true },
  
  { id: "glicose", titulo: "Glicose/Insulina", icon: "🩸", tipo: "sistema" },
  { id: "coracao", titulo: "Coração & Circulação", icon: "❤️", tipo: "sistema" },
  { id: "rim", titulo: "Saúde dos Rins", icon: "💧", tipo: "sistema" },
  { id: "sono", titulo: "Sono & Energia", icon: "🌙", tipo: "sistema" },
  { id: "peso", titulo: "Equilíbrio de Peso", icon: "⚖️", tipo: "sistema" },
  { id: "saude-feminina", titulo: "Saúde Feminina", icon: "👩", tipo: "sistema" },
  
  { id: "plano-14", titulo: "Plano 14 Dias", icon: "📅", tipo: "plano" },
  { id: "diario", titulo: "Diário de Saúde", icon: "📝", tipo: "diario" },
  { id: "referencias", titulo: "Referências Científicas", icon: "📚", tipo: "referencias" },
  
  // BÔNUS: ELIXIRES DA ROÇA
  { id: "gole-vinagre-agua", titulo: "Elixir: 1. Vinagre com Água", icon: "🥄", tipo: "goles", sub: true },
  { id: "gole-shot-vinagre-canela", titulo: "Elixir: 2. Shot Vinagre Canela", icon: "⚡", tipo: "goles", sub: true },
  { id: "gole-boldo", titulo: "Elixir: 3. Chá de Boldo", icon: "🍵", tipo: "goles", sub: true },
  { id: "gole-alcachofra", titulo: "Elixir: 4. Chá de Alcachofra", icon: "🍵", tipo: "goles", sub: true },
  { id: "gole-carqueja", titulo: "Elixir: 5. Chá de Carqueja", icon: "🍵", tipo: "goles", sub: true },
  { id: "gole-shot-dourado", titulo: "Elixir: 6. Shot Dourado Cúrcuma", icon: "✨", tipo: "goles", sub: true },
  { id: "gole-canela-cravo", titulo: "Elixir: 7. Chá Canela e Cravo", icon: "🍂", tipo: "goles", sub: true },
  { id: "gole-folha-amora", titulo: "Elixir: 8. Chá Folha de Amora", icon: "🍃", tipo: "goles", sub: true },
  { id: "gole-hibisco", titulo: "Elixir: 9. Chá de Hibisco", icon: "🌺", tipo: "goles", sub: true },
  { id: "gole-gengibre-puro", titulo: "Elixir: 10. Chá Gengibre Puro", icon: "🔥", tipo: "goles", sub: true },
  { id: "gole-vinagre-mel", titulo: "Elixir: 11. Shot Vinagre com Mel", icon: "🍯", tipo: "goles", sub: true },
  { id: "gole-maior-detox", titulo: "Elixir: 12. Suco Maçã com Couve", icon: "🍏", tipo: "goles", sub: true },
  
  { id: "tabela-sequenciamento", titulo: "Tabela de Sequenciamento", icon: "📋", tipo: "sequenciamento" },
  
  { id: "sos-glicose", titulo: "SOS Glicose (Acima de 180)", icon: "🆘", tipo: "exclusivos" },
  { id: "lista-compras", titulo: "Lista de Compras Inteligente", icon: "🛒", tipo: "exclusivos" },
  { id: "checklist-diario", titulo: "Checklist Diário (14 Dias)", icon: "✅", tipo: "exclusivos" },
  
  // BÔNUS: SOBREMESAS (BLOQUEADO ORDER BUMP)
  { id: "sobremesa-mousse-abacate", titulo: "Doce: 1. Mousse de Abacate", icon: "🥑", tipo: "sobremesas", sub: true, bloqueado: true },
  { id: "sobremesa-brigadeiro", titulo: "Doce: 2. Brigadeiro Fit", icon: "🍫", tipo: "sobremesas", sub: true, bloqueado: true },
  { id: "sobremesa-pudim-chia", titulo: "Doce: 3. Pudim de Chia Canela", icon: "🥣", tipo: "sobremesas", sub: true, bloqueado: true },
  { id: "sobremesa-maca-assada", titulo: "Doce: 4. Maçã Assada Canela", icon: "🍎", tipo: "sobremesas", sub: true, bloqueado: true },
  { id: "sobremesa-gelatina", titulo: "Doce: 5. Gelatina de Frutas", icon: "🍮", tipo: "sobremesas", sub: true, bloqueado: true },
  { id: "sobremesa-bolo-banana", titulo: "Doce: 6. Bolo Banana e Aveia", icon: "🍌", tipo: "sobremesas", sub: true, bloqueado: true },
  { id: "sobremesa-cheesecake", titulo: "Doce: 7. Cheesecake de Ricota", icon: "🍰", tipo: "sobremesas", sub: true, bloqueado: true },
  { id: "sobremesa-sorvete-coco", titulo: "Doce: 8. Sorvete de Coco", icon: "🍦", tipo: "sobremesas", sub: true, bloqueado: true },
  { id: "sobremesa-mousse-maracuja", titulo: "Doce: 9. Mousse de Maracujá", icon: "🟡", tipo: "sobremesas", sub: true, bloqueado: true },
  { id: "sobremesa-rocambole", titulo: "Doce: 10. Rocambole de Cacau", icon: "🌀", tipo: "sobremesas", sub: true, bloqueado: true },
  { id: "sobremesa-abobora", titulo: "Doce: 11. Doce de Abóbora", icon: "🎃", tipo: "sobremesas", sub: true, bloqueado: true },
  { id: "sobremesa-bananinha", titulo: "Doce: 12. Picolé da Roça", icon: "❄️", tipo: "sobremesas", sub: true, bloqueado: true },
  { id: "sobremesa-bolo-milho", titulo: "Doce: 13. Bolo de Milho Cremoso", icon: "🌽", tipo: "sobremesas", sub: true, bloqueado: true }
];

// Rótulos de categoria (eyebrow) exibidos acima do título de cada página,
// espelhando o agrupamento já usado na sidebar
function obterRotuloCategoria(tipo) {
  const mapa = {
    carta: "Boas-Vindas",
    biblioteca: "Boas-Vindas",
    figado: "Sistema: Fígado",
    sistema: "Sistemas do Corpo",
    plano: "Planos e Diário",
    diario: "Planos e Diário",
    referencias: "Planos e Diário",
    goles: "Bônus: Elixires da Roça",
    sequenciamento: "Bônus: Sequenciamento",
    sobremesas: "Bônus: Sobremesas",
    exclusivos: "Bônus Exclusivo"
  };
  return mapa[tipo] || "";
}

let paginaAtualId = "carta";
let paginasLidas = [];
let sobremesasLiberadas = false;

// Elementos da DOM
const sidebarContainer = document.getElementById("sidebar-menu");
const contentArea = document.getElementById("content-area");
const barraProgressoFill = document.getElementById("barra-progresso-fill");
const textoProgresso = document.getElementById("texto-progresso");
const sidebar = document.getElementById("sidebar");
const overlaySidebar = document.getElementById("sidebar-overlay");

// Inicialização
window.addEventListener("DOMContentLoaded", () => {
  // Proteger o acesso principal
  const acessoPrincipalValido = localStorage.getItem("acesso_principal") === "true";
  if (!acessoPrincipalValido) {
    window.location.href = "index.html";
    return;
  }

  // Carregar status do localStorage
  carregarEstado();
  
  // Renderizar o menu da sidebar
  renderizarSidebar();
  
  // Carregar a página salva ou a carta inicial
  const hash = window.location.hash.substring(1);
  if (hash && menuItemsList.some(item => item.id === hash)) {
    carregarArtigo(hash);
  } else {
    carregarArtigo("carta");
  }

  // Configurar botões de menu mobile
  const menuToggle = document.getElementById("menu-toggle");
  if (menuToggle) {
    menuToggle.addEventListener("click", toggleSidebar);
  }
  if (overlaySidebar) {
    overlaySidebar.addEventListener("click", toggleSidebar);
  }

  // Monitorar alterações no hash da URL
  window.addEventListener("hashchange", () => {
    const newHash = window.location.hash.substring(1);
    if (newHash && menuItemsList.some(item => item.id === newHash)) {
      carregarArtigo(newHash);
      if (window.innerWidth <= 992) {
        toggleSidebar(); // Fecha a sidebar no mobile ao clicar
      }
    }
  });
});

// Abre/Fecha sidebar mobile
function toggleSidebar() {
  sidebar.classList.toggle("open");
  overlaySidebar.classList.toggle("active");
}

// Carrega dados do localStorage
function carregarEstado() {
  const lidasSalvas = localStorage.getItem("paginas_lidas");
  if (lidasSalvas) {
    paginasLidas = JSON.parse(lidasSalvas);
  }
  
  const sobremesasSalvas = localStorage.getItem("sobremesas_liberadas");
  if (sobremesasSalvas === "true") {
    sobremesasLiberadas = true;
  }
  
  atualizarProgressoVisual();
}

// Atualiza a barra de progresso visual
function atualizarProgressoVisual() {
  const totalPaginas = menuItemsList.length;
  const lidas = paginasLidas.length;
  const porcentagem = Math.round((lidas / totalPaginas) * 100) || 0;
  
  if (barraProgressoFill) {
    barraProgressoFill.style.width = `${porcentagem}%`;
  }
  if (textoProgresso) {
    textoProgresso.innerText = `${lidas} de ${totalPaginas} páginas lidas (${porcentagem}%)`;
  }
}

// Salva o progresso no localStorage
function salvarEstado() {
  localStorage.setItem("paginas_lidas", JSON.stringify(paginasLidas));
  atualizarProgressoVisual();
  renderizarSidebar();
}

// Renderiza a sidebar de navegação
function renderizarSidebar() {
  if (!sidebarContainer) return;
  
  sidebarContainer.innerHTML = "";
  
  let secaoAtual = "";
  
  menuItemsList.forEach(item => {
    // Agrupar na sidebar por seções lógicas elegantes
    let secaoNome = "";
    if (item.tipo === "carta") secaoNome = "Boas-Vindas";
    else if (item.tipo === "biblioteca") secaoNome = "Boas-Vindas";
    else if (item.tipo === "figado") secaoNome = "Sistemas: Fígado";
    else if (item.tipo === "sistema") secaoNome = "Outros Sistemas";
    else if (item.tipo === "plano") secaoNome = "Planos e Diário";
    else if (item.tipo === "diario") secaoNome = "Planos e Diário";
    else if (item.tipo === "referencias") secaoNome = "Planos e Diário";
    else if (item.tipo === "goles") secaoNome = "Bônus: Elixires da Roça";
    else if (item.tipo === "sequenciamento") secaoNome = "Bônus: Sequenciamento";
    else if (item.tipo === "sobremesas") secaoNome = "Bônus: Sobremesas (Bump)";
    else if (item.tipo === "exclusivos") secaoNome = "Bônus Exclusivos";

    if (secaoNome !== secaoAtual) {
      secaoAtual = secaoNome;
      const headerSecao = document.createElement("div");
      headerSecao.className = "menu-secao-titulo";
      headerSecao.innerText = secaoAtual;
      sidebarContainer.appendChild(headerSecao);
    }
    
    const isLido = paginasLidas.includes(item.id);
    const isBloqueado = item.bloqueado && !sobremesasLiberadas;
    
    const link = document.createElement("a");
    link.href = `#${item.id}`;
    link.className = `menu-item ${item.id === paginaAtualId ? "active" : ""}`;
    
    // Adiciona recuo para subitens (receitas) para dar efeito de Notion
    if (item.sub) {
      link.style.paddingLeft = "2rem";
      link.style.fontSize = "0.95rem";
    }

    let statusHtml = "";
    if (isBloqueado) {
      statusHtml = `<span class="menu-item-status">🔒</span>`;
    } else if (isLido) {
      statusHtml = `<span class="menu-item-status">✅</span>`;
    }

    link.innerHTML = `
      <span class="menu-item-icon">${isBloqueado ? "🔒" : item.icon}</span>
      <span class="menu-item-titulo">${item.sub ? item.titulo.split(": ").slice(1).join(": ") : item.titulo}</span>
      ${statusHtml}
    `;
    
    sidebarContainer.appendChild(link);
  });
}

// Carrega o artigo específico na área central
function carregarArtigo(id) {
  paginaAtualId = id;
  
  // Atualizar hash na URL se necessário
  if (window.location.hash !== `#${id}`) {
    window.history.pushState(null, null, `#${id}`);
  }
  
  // Atualiza a sidebar ativa
  const activeElements = document.querySelectorAll(".menu-item");
  activeElements.forEach(el => {
    el.classList.remove("active");
    if (el.getAttribute("href") === `#${id}`) {
      el.classList.add("active");
    }
  });

  // Encontra as informações do item
  const itemConfig = menuItemsList.find(item => item.id === id);
  if (!itemConfig) return;
  
  window.scrollTo({ top: 0, behavior: "smooth" });

  // Tratar bloqueio do Order Bump (Sobremesas)
  if (itemConfig.bloqueado && !sobremesasLiberadas) {
    renderizarTelaBloqueio(itemConfig);
    return;
  }

  // Renderizar o conteúdo normal
  if (id === "carta") {
    renderizarCarta();
  } else if (id === "biblioteca") {
    renderizarBiblioteca();
  } else if (itemConfig.tipo === "figado") {
    const data = platformData.figado.find(r => r.id === id);
    renderizarReceita(data, itemConfig);
  } else if (id === "glicose") {
    renderizarTextoExplicativo(platformData.glicose, itemConfig);
  } else if (id === "coracao") {
    renderizarTextoExplicativo(platformData.coracao, itemConfig);
  } else if (id === "rim") {
    renderizarTextoExplicativo(platformData.rim, itemConfig);
  } else if (id === "sono") {
    renderizarTextoExplicativo(platformData.sono, itemConfig);
  } else if (id === "peso") {
    renderizarTextoExplicativo(platformData.peso, itemConfig);
  } else if (id === "saude-feminina") {
    renderizarTextoExplicativo(platformData.saudeFeminina, itemConfig);
  } else if (id === "plano-14") {
    renderizarPlano14();
  } else if (id === "diario") {
    renderizarDiario();
  } else if (id === "referencias") {
    renderizarReferencias();
  } else if (id === "sos-glicose") {
    renderizarTextoExplicativo(platformData.sosGlicose, itemConfig);
  } else if (id === "lista-compras") {
    renderizarTextoExplicativo(platformData.listaCompras, itemConfig);
  } else if (id === "checklist-diario") {
    renderizarChecklistDiario();
  } else if (itemConfig.tipo === "goles") {
    const data = platformData.goles.find(r => r.id === id);
    renderizarReceita(data, itemConfig);
  } else if (id === "tabela-sequenciamento") {
    renderizarSequenciamento();
  } else if (itemConfig.tipo === "sobremesas") {
    const data = platformData.sobremesas.find(r => r.id === id);
    renderizarReceita(data, itemConfig);
  }
}

// Renderiza a Carta da Dona Sebastiana
function renderizarCarta() {
  const data = platformData.carta;

  let antesDepoisHtml = "";
  if (data.antesImagem && data.depoisImagem) {
    antesDepoisHtml = `
      <div class="antes-depois-grid">
        <figure class="antes-depois-item">
          <img src="${data.antesImagem}" alt="Antes: cansaço e rotina pesada" class="antes-depois-img">
          <figcaption class="antes-depois-legenda antes-depois-legenda--antes">Como você vive hoje</figcaption>
        </figure>
        <figure class="antes-depois-item">
          <img src="${data.depoisImagem}" alt="Depois: disposição e vida leve" class="antes-depois-img">
          <figcaption class="antes-depois-legenda antes-depois-legenda--depois">Onde você vai chegar</figcaption>
        </figure>
      </div>
    `;
  }

  contentArea.innerHTML = `
    <div class="artigo-container">
      <div class="eyebrow">Boas-vindas</div>
      <h1>${data.titulo}</h1>
      <div class="citacao-abertura">
        <p class="citacao-abertura-texto">${data.citacao}</p>
      </div>
      ${antesDepoisHtml}
      <div class="artigo-corpo">
        ${data.texto}

        <div class="callout-sebastiana">
          <div class="callout-sebastiana-header">
            <div class="avatar-sebastiana">👵</div>
            <div class="callout-sebastiana-titulo">A Dona Sebastiana Explica</div>
          </div>
          <p class="callout-sebastiana-texto">"${data.explica}"</p>
        </div>

        <a href="#biblioteca" class="btn-ir-biblioteca">📚 Ir para a Sua Biblioteca</a>
      </div>
      ${renderizarControlesRodape("carta")}
    </div>
  `;
  configurarEventosRodape("carta");
}

// Renderiza a Biblioteca (visão geral dos 5 entregáveis em formato de estante)
function renderizarBiblioteca() {
  const itens = platformData.biblioteca;

  const cardsHtml = itens.map(item => {
    const bloqueadoClasse = item.bloqueado ? " livro-card--bloqueado" : "";
    const tagHtml = item.bloqueado
      ? `<span class="livro-tag livro-tag--bloqueado">🔒 ${item.tag}</span>`
      : `<span class="livro-tag">${item.tag}</span>`;
    return `
      <button class="livro-card${bloqueadoClasse}" data-destino="${item.destino}">
        <span class="livro-capa-frame">
          <img src="${item.capa}" alt="Capa: ${item.titulo}" class="livro-capa-img">
        </span>
        <span class="livro-info">
          ${tagHtml}
          <span class="livro-titulo">${item.titulo}</span>
          <span class="livro-subtitulo">${item.subtitulo}</span>
        </span>
      </button>
    `;
  }).join("");

  contentArea.innerHTML = `
    <div class="artigo-container">
      <div class="eyebrow">Sua Biblioteca</div>
      <h1>Tudo o que você recebeu, em um só lugar</h1>
      <div class="citacao-abertura">
        <p class="citacao-abertura-texto">Cinco entregáveis, minha filha. Escolha um livro abaixo pra começar a leitura de onde preferir.</p>
      </div>
      <div class="estante-grid">
        ${cardsHtml}
      </div>
      ${renderizarControlesRodape("biblioteca")}
    </div>
  `;

  document.querySelectorAll(".livro-card").forEach(card => {
    card.addEventListener("click", () => {
      carregarArtigo(card.getAttribute("data-destino"));
    });
  });

  configurarEventosRodape("biblioteca");
}

// Renderiza Receitas Genéricas (Fígado, Goles ou Sobremesas)
function renderizarReceita(data, itemConfig) {
  if (!data) return;
  
  // Tabela de Ingredientes
  let tabelaIngredientesHtml = "";
  if (data.ingredientes && data.ingredientes.length > 0) {
    tabelaIngredientesHtml = `
      <div class="tabela-ingredientes-container">
        <table class="tabela-ingredientes">
          <thead>
            <tr>
              <th>Ingrediente</th>
              <th>Quantidade</th>
              <th>Função Prática</th>
            </tr>
          </thead>
          <tbody>
            ${data.ingredientes.map(ing => `
              <tr>
                <td><strong>${ing.nome}</strong></td>
                <td>${ing.qtd}</td>
                <td>${ing.funcao}</td>
              </tr>
            `).join("")}
          </tbody>
        </table>
      </div>
    `;
  }

  // Lista de Preparo
  let preparoHtml = "";
  if (data.preparo && data.preparo.length > 0) {
    preparoHtml = `
      <h2>🥣 MODO DE PREPARO</h2>
      <ol class="modo-preparo-lista">
        ${data.preparo.map(passo => `<li>${passo}</li>`).join("")}
      </ol>
    `;
  }

  // Seção quando usar
  let quandoUsarHtml = "";
  if (data.quandoUsar) {
    quandoUsarHtml = `
      <div class="card-destaque">
        <h3>⏰ Quando e Como Usar</h3>
        <p>${data.quandoUsar}</p>
      </div>
    `;
  }

  // Seção de Atenção (Compliance)
  let atencaoHtml = "";
  if (data.atencao) {
    atencaoHtml = `
      <div class="card-atencao">
        <h3>⚠️ Atenção e Cuidado</h3>
        <p>${data.atencao}</p>
      </div>
    `;
  } else {
    // Atenção padrão white-safe para compliance
    atencaoHtml = `
      <div class="card-atencao">
        <h3>⚠️ Atenção e Cuidado</h3>
        <p>Esta receita é orientativa e faz parte de um padrão alimentar saudável. Ela não substitui tratamentos médicos ou medicamentos prescritos. Consulte sempre seu médico ou nutricionista antes de alterar sua rotina alimentar, especialmente se você toma remédios de uso contínuo.</p>
      </div>
    `;
  }

  // Callout da Dona Sebastiana
  let explicaHtml = "";
  if (data.explica) {
    explicaHtml = `
      <div class="callout-sebastiana">
        <div class="callout-sebastiana-header">
          <div class="avatar-sebastiana">👵</div>
          <div class="callout-sebastiana-titulo">A Dona Sebastiana Explica</div>
        </div>
        <p class="callout-sebastiana-texto">"${data.explica}"</p>
      </div>
    `;
  }

  // Imagem de cabeçalho
  let imagemHtml = "";
  if (data.imagem) {
    imagemHtml = `<img src="${data.imagem}" alt="${data.titulo}" class="page-header-img">`;
  }

  contentArea.innerHTML = `
    <div class="artigo-container">
      ${imagemHtml}
      <div class="eyebrow">${obterRotuloCategoria(itemConfig.tipo)}</div>
      <h1>${data.titulo}</h1>
      <div class="citacao-abertura">
        <p class="citacao-abertura-texto">${data.citacao}</p>
      </div>
      <div class="artigo-corpo">
        <h2>🥗 INGREDIENTES</h2>
        ${tabelaIngredientesHtml}

        ${preparoHtml}

        ${quandoUsarHtml}
        ${atencaoHtml}
        ${explicaHtml}
      </div>
      ${renderizarControlesRodape(itemConfig.id)}
    </div>
  `;
  configurarEventosRodape(itemConfig.id);
}

// Renderiza Textos Explicativos Simples (Sistemas do Corpo)
function renderizarTextoExplicativo(data, itemConfig) {
  if (!data) return;

  let explicaHtml = "";
  if (data.explica) {
    explicaHtml = `
      <div class="callout-sebastiana">
        <div class="callout-sebastiana-header">
          <div class="avatar-sebastiana">👵</div>
          <div class="callout-sebastiana-titulo">A Dona Sebastiana Explica</div>
        </div>
        <p class="callout-sebastiana-texto">"${data.explica}"</p>
      </div>
    `;
  }

  let imagemHtml = "";
  if (data.imagem) {
    imagemHtml = `<img src="${data.imagem}" alt="${data.titulo}" class="page-header-img">`;
  }

  contentArea.innerHTML = `
    <div class="artigo-container">
      ${imagemHtml}
      <div class="eyebrow">${obterRotuloCategoria(itemConfig.tipo)}</div>
      <h1>${data.titulo}</h1>
      <div class="citacao-abertura">
        <p class="citacao-abertura-texto">${data.citacao}</p>
      </div>
      <div class="artigo-corpo">
        ${data.texto}
        ${explicaHtml}
      </div>
      ${renderizarControlesRodape(itemConfig.id)}
    </div>
  `;
  configurarEventosRodape(itemConfig.id);
}

// Renderiza a Tabela de Sequenciamento
function renderizarSequenciamento() {
  const data = platformData.sequenciamento;
  
  const cardsRefeicoesHtml = data.refeicoes.map(ref => `
    <div class="refeicao-seq-card">
      <h3>🍽️ ${ref.nome}</h3>
      <p class="seq-passo"><strong>Ordem Ideal:</strong> ${ref.ordem}</p>
      <div class="seq-exemplo"><strong>Exemplo:</strong> ${ref.exemplo}</div>
      <p style="font-size: 1.05rem; line-height: 1.5; color: var(--texto-secundario);">${ref.comoAplicar}</p>
    </div>
  `).join("");

  const dicasHtml = data.dicasOuro.map(dica => `
    <div class="card-destaque" style="margin: 1rem 0;">
      <h4>${dica.titulo}</h4>
      <p style="margin-bottom: 0; font-size: 1.1rem;">${dica.descricao}</p>
    </div>
  `).join("");

  contentArea.innerHTML = `
    <div class="artigo-container">
      <div class="eyebrow">${obterRotuloCategoria("sequenciamento")}</div>
      <h1>${data.titulo}</h1>
      <div class="citacao-abertura">
        <p class="citacao-abertura-texto">${data.citacao}</p>
      </div>
      <div class="artigo-corpo">
        ${data.texto}

        <h2>📋 O Guia Prático por Refeição</h2>
        <div class="refeicoes-sequencia-grid">
          ${cardsRefeicoesHtml}
        </div>

        <h2 style="margin-top: 3rem;">⚡ Dicas de Ouro da Dona Sebastiana</h2>
        <div style="margin-top: 1rem;">
          ${dicasHtml}
        </div>

        <div class="callout-sebastiana">
          <div class="callout-sebastiana-header">
            <div class="avatar-sebastiana">👵</div>
            <div class="callout-sebastiana-titulo">A Dona Sebastiana Explica</div>
          </div>
          <p class="callout-sebastiana-texto">"${data.explica}"</p>
        </div>
      </div>
      ${renderizarControlesRodape("tabela-sequenciamento")}
    </div>
  `;
  configurarEventosRodape("tabela-sequenciamento");
}

// Renderiza o Plano de 14 Dias (Cardápio)
function renderizarPlano14() {
  const data = platformData.plano14;

  const linhasTabelaHtml = data.tabela.map(dia => `
    <tr>
      <td style="text-align: center;"><span class="dia-badge">Dia ${dia.dia}</span></td>
      <td>${dia.cafe}</td>
      <td>${dia.lancheM}</td>
      <td>${vincularReceitasNoCardapio(dia.almoco)}</td>
      <td>${vincularReceitasNoCardapio(dia.lancheT)}</td>
      <td>${vincularReceitasNoCardapio(dia.jantar)}</td>
    </tr>
  `).join("");

  const receitasApoioHtml = data.receitasApoio.map((rec, index) => `
    <div class="receita-apoio-card" id="receita-apoio-${index}">
      ${rec.imagem ? `<img src="${rec.imagem}" alt="${rec.nome}" class="receita-apoio-img">` : ""}
      <div class="receita-apoio-corpo">
        <h3>🍳 Receita de Apoio: ${rec.nome}</h3>
        <p><strong>Ingredientes:</strong> ${rec.ingredientes}</p>
        <p style="margin-bottom: 0;"><strong>Como Preparar:</strong> ${rec.preparo}</p>
      </div>
    </div>
  `).join("");

  contentArea.innerHTML = `
    <div class="artigo-container">
      <div class="eyebrow">${obterRotuloCategoria("plano")}</div>
      <h1>${data.titulo}</h1>
      <div class="citacao-abertura">
        <p class="citacao-abertura-texto">${data.citacao}</p>
      </div>
      <div class="artigo-corpo">
        ${data.texto}

        <h2>📅 Cardápio Semana a Semana</h2>
        <div class="tabela-plano-container">
          <table class="tabela-plano">
            <thead>
              <tr>
                <th style="width: 80px;">Dia</th>
                <th>☕ Café da Manhã</th>
                <th>🍏 Lanche da Manhã</th>
                <th>🥗 Almoço</th>
                <th>🥪 Lanche da Tarde</th>
                <th>🍲 Jantar</th>
              </tr>
            </thead>
            <tbody>
              ${linhasTabelaHtml}
            </tbody>
          </table>
        </div>

        <h2 style="margin-top: 4rem; border-top: 2px dashed var(--borda-suave); padding-top: 2rem;">🍳 Receitas de Apoio do Cardápio</h2>
        <div class="receitas-apoio-grid">
          ${receitasApoioHtml}
        </div>

        <div class="callout-sebastiana">
          <div class="callout-sebastiana-header">
            <div class="avatar-sebastiana">👵</div>
            <div class="callout-sebastiana-titulo">A Dona Sebastiana Explica</div>
          </div>
          <p class="callout-sebastiana-texto">"${data.explica}"</p>
        </div>
      </div>
      ${renderizarControlesRodape("plano-14")}
    </div>
  `;
  configurarEventosRodape("plano-14");
  configurarLinksReceitasApoio();
}

// Vincula links nas strings do cardápio para as receitas de apoio correspondentes
function vincularReceitasNoCardapio(texto) {
  const receitasApoioNomes = [
    { nome: "Aveioca", idx: 0 },
    { nome: "pasta de abacate", idx: 1 },
    { nome: "Pudim de chia", idx: 2 },
    { nome: "chia", idx: 2 },
    { nome: "salada crua", idx: 3 },
    { nome: "Sopa de legumes", idx: 4 },
    { nome: "Sopa de abóbora", idx: 4 },
    { nome: "Caldo de legumes", idx: 4 },
    { nome: "pasta de grão-de-bico", idx: 5 },
    { nome: "Arroz+feijão", idx: 6 }
  ];

  let textoAlterado = texto;
  receitasApoioNomes.forEach(rec => {
    const regex = new RegExp(rec.nome, "gi");
    textoAlterado = textoAlterado.replace(regex, (match) => {
      return `<span class="link-receita-apoio" data-idx="${rec.idx}">${match}</span>`;
    });
  });

  return textoAlterado;
}

// Configura o scroll dinâmico ao clicar nos links de receitas de apoio
function configurarLinksReceitasApoio() {
  const links = document.querySelectorAll(".link-receita-apoio");
  links.forEach(link => {
    link.addEventListener("click", (e) => {
      const idx = e.target.getAttribute("data-idx");
      const targetCard = document.getElementById(`receita-apoio-${idx}`);
      if (targetCard) {
        targetCard.scrollIntoView({ behavior: "smooth" });
        // Adiciona um destaque temporário
        targetCard.style.outline = "3px solid var(--ouro)";
        setTimeout(() => {
          targetCard.style.outline = "none";
        }, 2000);
      }
    });
  });
}

// Renderiza o Diário de Saúde
function renderizarDiario() {
  contentArea.innerHTML = `
    <div class="artigo-container">
      <div class="eyebrow">${obterRotuloCategoria("diario")}</div>
      <h1>Diário de Saúde e Progresso</h1>
      <div class="citacao-abertura">
        <p class="citacao-abertura-texto">"${platformData.diario.citacao}"</p>
      </div>

      <div class="diario-secao">
        <div class="conselho-diario-box">
          <h3>👵 Um conselho para o seu dia:</h3>
          <p class="conselho-texto" id="conselho-texto"></p>
        </div>

        <div class="diario-formulario">
          <h2 style="margin-top: 0; border-bottom: 1px dashed var(--borda-suave); padding-bottom: 0.5rem;">📝 Novo Registro de Hoje</h2>
          
          <form id="diario-form" class="diario-formulario-campos">
            <div class="diario-campo">
              <label for="diario-energia">Como está sua energia hoje? (0 a 10)</label>
              <input type="number" id="diario-energia" min="0" max="10" placeholder="Ex: 8" class="diario-input" required>
            </div>
            
            <div class="diario-campo">
              <label for="diario-glicemia">Sua Glicemia medida (opcional)</label>
              <input type="number" id="diario-glicemia" placeholder="Ex: 95 mg/dl" class="diario-input">
            </div>

            <div class="diario-campo">
              <label for="diario-peso">Seu Peso (opcional)</label>
              <input type="number" step="0.1" id="diario-peso" placeholder="Ex: 75.5 kg" class="diario-input">
            </div>

            <div class="diario-campo">
              <label for="diario-anotacao">Escreva como você está se sentindo:</label>
              <textarea id="diario-anotacao" class="diario-input diario-textarea" placeholder="Minha filha, anote se comeu na ordem certa, se tomou o gole, ou qualquer dor que sentiu..." required></textarea>
            </div>

            <button type="submit" class="btn-salvar-diario">Salvar no Diário</button>
          </form>
        </div>

        <div class="historico-diario">
          <h2 class="historico-titulo">📚 Seus Registros Anteriores</h2>
          <div id="historico-lista" class="historico-lista">
            <!-- Injetado dinamicamente -->
          </div>
        </div>
      </div>
      ${renderizarControlesRodape("diario")}
    </div>
  `;

  // Exibir conselho aleatório da Dona Sebastiana
  const conselhos = platformData.diario.conselhos;
  const conselhoAleatorio = conselhos[Math.floor(Math.random() * conselhos.length)];
  document.getElementById("conselho-texto").innerText = `"${conselhoAleatorio}"`;

  // Configurar ações do diário
  const form = document.getElementById("diario-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    salvarRegistroDiario();
  });

  carregarHistoricoDiario();
  configurarEventosRodape("diario");
}

// Salva o registro do diário no localStorage
function salvarRegistroDiario() {
  const energia = document.getElementById("diario-energia").value;
  const glicemia = document.getElementById("diario-glicemia").value;
  const peso = document.getElementById("diario-peso").value;
  const anotacao = document.getElementById("diario-anotacao").value;
  const data = new Date().toLocaleDateString("pt-BR", { day: "2-digit", month: "2-digit", year: "numeric", hour: "2-digit", minute: "2-digit" });
  const timestamp = Date.now();

  const registro = { timestamp, data, energia, glicemia, peso, anotacao };
  
  let historico = [];
  const historicoSalvo = localStorage.getItem("historico_diario");
  if (historicoSalvo) {
    historico = JSON.parse(historicoSalvo);
  }

  historico.unshift(registro); // Insere no topo
  localStorage.setItem("historico_diario", JSON.stringify(historico));

  // Limpa o formulário
  document.getElementById("diario-form").reset();
  
  // Recarrega o histórico
  carregarHistoricoDiario();
}

// Carrega o histórico do diário na tela
function carregarHistoricoDiario() {
  const listaContainer = document.getElementById("historico-lista");
  if (!listaContainer) return;

  const historicoSalvo = localStorage.getItem("historico_diario");
  let historico = [];
  
  if (historicoSalvo) {
    historico = JSON.parse(historicoSalvo);
  }

  if (historico.length === 0) {
    listaContainer.innerHTML = `<p style="font-style: italic; color: var(--texto-secundario);">Nenhum registro encontrado ainda, minha filha. Comece a escrever hoje mesmo!</p>`;
    return;
  }

  listaContainer.innerHTML = historico.map(reg => `
    <div class="historico-card" id="diario-${reg.timestamp}">
      <button class="btn-excluir-diario" onclick="excluirRegistroDiario(${reg.timestamp})" title="Excluir Registro">🗑️</button>
      <div class="historico-card-data">${reg.data}</div>
      <div class="historico-card-campos">
        <div class="historico-campo-item">⚡ <strong>Energia/Disposição:</strong> ${reg.energia} / 10</div>
        ${reg.glicemia ? `<div class="historico-campo-item">🩸 <strong>Glicemia:</strong> ${reg.glicemia} mg/dl</div>` : ""}
        ${reg.peso ? `<div class="historico-campo-item">⚖️ <strong>Peso:</strong> ${reg.peso} kg</div>` : ""}
      </div>
      <div class="historico-card-texto">${reg.anotacao}</div>
    </div>
  `).join("");
}

// Exclui um registro do diário
window.excluirRegistroDiario = function(timestamp) {
  if (confirm("Minha filha, tem certeza de que deseja apagar esse registro do seu diário?")) {
    const historicoSalvo = localStorage.getItem("historico_diario");
    if (historicoSalvo) {
      let historico = JSON.parse(historicoSalvo);
      historico = historico.filter(reg => reg.timestamp !== timestamp);
      localStorage.setItem("historico_diario", JSON.stringify(historico));
      carregarHistoricoDiario();
    }
  }
};

// Renderiza as Referências
function renderizarReferencias() {
  const listaHtml = platformData.referencias.map(ref => `
    <li class="referencia-item">
      <div class="referencia-autor">${ref.autor}</div>
      <div class="referencia-estudo">"${ref.estudo}"</div>
      <div class="referencia-fonte">${ref.fonte}</div>
      <a href="${ref.link}" target="_blank" rel="noopener noreferrer">Ver Estudo Original (Científico) ➔</a>
    </li>
  `).join("");

  contentArea.innerHTML = `
    <div class="artigo-container">
      <div class="eyebrow">${obterRotuloCategoria("referencias")}</div>
      <h1>Referências Científicas</h1>
      <div class="citacao-abertura">
        <p class="citacao-abertura-texto">A sabedoria antiga confirmada por estudos clínicos sérios de todo o mundo.</p>
      </div>
      <div class="artigo-corpo">
        <p>Abaixo estão os artigos e pesquisas científicas que comprovam cada orientação prática apresentada na nossa plataforma. Nós acreditamos na transparência e no embasamento sério para a segurança da sua saúde.</p>
        <ul class="referencias-lista">
          ${listaHtml}
        </ul>
      </div>
      ${renderizarControlesRodape("referencias")}
    </div>
  `;
  configurarEventosRodape("referencias");
}

// Renderiza a Tela de Bloqueio por Senha (Order Bump)
function renderizarTelaBloqueio(itemConfig) {
  contentArea.innerHTML = `
    <div class="artigo-container" style="position: relative; min-height: 450px;">
      <div class="overlay-bloqueio">
        <div class="modal-bloqueio">
          <div class="modal-bloqueio-icon">🔒</div>
          <h2>Bônus Opcional Bloqueado</h2>
          <p>Você tentou acessar a seção <strong>"Sobremesas que Não Sobem a Glicose"</strong>.</p>
          <p style="margin-top: -10px;">Esta seção é um bônus especial, vendido à parte. Se você já adicionou esse bônus à sua compra, digite a senha que chegou no seu e-mail.</p>

          <form id="senha-sobremesa-form" class="senha-form">
            <input type="password" id="senha-sobremesa" class="senha-input" placeholder="Digite a senha do bônus" required>
            <button type="submit" class="btn-senha">Liberar Sobremesas 🔓</button>
            <div id="erro-senha-sobremesa" class="msg-erro-senha"></div>
          </form>

          <div class="senha-divisor"><span>ou</span></div>

          <a href="https://ggcheckout.app/checkout/v4/uNXL9rtvpTsMGsdgTmGx" target="_blank" rel="noopener noreferrer" class="btn-comprar-bump">Comprar com Desconto 🛒</a>
        </div>
      </div>
    </div>
  `;

  const form = document.getElementById("senha-sobremesa-form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const senha = document.getElementById("senha-sobremesa").value;
    if (senha.trim().toLowerCase() === "doceleve") {
      sobremesasLiberadas = true;
      localStorage.setItem("sobremesas_liberadas", "true");
      renderizarSidebar();
      carregarArtigo(itemConfig.id);
    } else {
      const msgErro = document.getElementById("erro-senha-sobremesa");
      msgErro.innerText = "Senha incorreta, minha filha. Dê uma olhada no seu e-mail de compra.";
      document.getElementById("senha-sobremesa").value = "";
    }
  });
}

// Retorna a estrutura HTML dos controles de rodapé de leitura e navegação
function renderizarControlesRodape(id) {
  const isLido = paginasLidas.includes(id);
  
  return `
    <div class="artigo-rodape">
      <button id="btn-marcar-lida" class="btn-lida ${isLido ? "lida-concluida" : ""}">
        ${isLido ? "✅ Página Concluída (Clique para Desmarcar)" : "📖 Marcar Página como Lida"}
      </button>
      
      <div class="navegacao-artigos">
        <button id="btn-artigo-anterior" class="btn-nav">⬅️ Anterior</button>
        <button id="btn-artigo-proximo" class="btn-nav">Próxima ➡️</button>
      </div>
    </div>
  `;
}

// Configura os ouvintes de evento nos controles de rodapé
function configurarEventosRodape(id) {
  const btnLida = document.getElementById("btn-marcar-lida");
  if (btnLida) {
    btnLida.addEventListener("click", () => {
      const idx = paginasLidas.indexOf(id);
      if (idx > -1) {
        paginasLidas.splice(idx, 1);
        btnLida.classList.remove("lida-concluida");
        btnLida.innerHTML = "📖 Marcar Página como Lida";
      } else {
        paginasLidas.push(id);
        btnLida.classList.add("lida-concluida");
        btnLida.innerHTML = "✅ Página Concluída (Clique para Desmarcar)";
      }
      salvarEstado();
    });
  }

  // Navegação anterior / próximo
  const indexAtual = menuItemsList.findIndex(item => item.id === id);
  
  const btnAnterior = document.getElementById("btn-artigo-anterior");
  if (btnAnterior) {
    if (indexAtual > 0) {
      btnAnterior.addEventListener("click", () => {
        carregarArtigo(menuItemsList[indexAtual - 1].id);
      });
    } else {
      btnAnterior.style.opacity = "0.5";
      btnAnterior.style.cursor = "not-allowed";
    }
  }

  const btnProximo = document.getElementById("btn-artigo-proximo");
  if (btnProximo) {
    if (indexAtual < menuItemsList.length - 1) {
      btnProximo.addEventListener("click", () => {
        carregarArtigo(menuItemsList[indexAtual + 1].id);
      });
    } else {
      btnProximo.style.opacity = "0.5";
      btnProximo.style.cursor = "not-allowed";
    }
  }
}

// Renderiza o Checklist Diário de 14 Dias (Bônus Exclusivo)
function renderizarChecklistDiario() {
  let checklistSalvo = {};
  const salvo = localStorage.getItem("checklist_diario_completo");
  if (salvo) {
    checklistSalvo = JSON.parse(salvo);
  }

  let html = `
    <div class="artigo-container">
      <div class="eyebrow">${obterRotuloCategoria("exclusivos")}</div>
      <h1>Checklist Diário do Fígado Leve (14 Dias)</h1>
      <div class="citacao-abertura">
        <p class="citacao-abertura-texto">Vá marcando cada tarefa concluída do seu dia, minha filha. É assim que a gente cria o hábito saudável de se cuidar com carinho.</p>
      </div>
      <div class="artigo-corpo">
        <p>Abaixo está o seu painel de acompanhamento prático para os 14 dias do protocolo. Para cada dia, tente cumprir todas as 5 tarefas fundamentais da Sincronia Digestiva e dos elixires. Suas marcações ficam salvas automaticamente no seu navegador!</p>
  `;

  for (let dia = 1; dia <= 14; dia++) {
    const tarefas = [
      { id: "gole", label: "🌱 Tomei o Gole da Manhã (em jejum)" },
      { id: "ordem_almoco", label: "🥗 Comi na Ordem Certa no Almoço" },
      { id: "caminhada_almoco", label: "🚶 Caminhada de 10-15 min pós-almoço" },
      { id: "ordem_jantar", label: "🍲 Comi na Ordem Certa no Jantar" },
      { id: "cha_noite", label: "🍵 Tomei o elixir/chá de apoio" }
    ];

    let concluidoDia = true;
    let tarefasHtml = "";
    tarefas.forEach(t => {
      const key = `dia_${dia}_${t.id}`;
      const checked = checklistSalvo[key] ? "checked" : "";
      if (!checked) concluidoDia = false;
      tarefasHtml += `
        <label style="display: flex; align-items: center; gap: 10px; margin: 10px 0; font-size: 1rem; font-weight: 600; cursor: pointer;">
          <input type="checkbox" data-key="${key}" ${checked} class="checklist-cb" style="width: 20px; height: 20px; accent-color: var(--ouro);">
          <span>${t.label}</span>
        </label>
      `;
    });

    html += `
      <div class="dia-checklist-box" style="border: 2px solid ${concluidoDia ? 'var(--verde-escuro)' : 'var(--borda-suave)'}; border-radius: 16px; padding: 18px; margin: 20px 0; background: ${concluidoDia ? '#e8f5e9' : '#fff'}; transition: all 0.3s;">
        <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px dashed var(--borda-suave); padding-bottom: 8px; margin-bottom: 12px;">
          <h3 style="margin: 0; font-weight: 900; color: ${concluidoDia ? 'var(--verde-escuro)' : 'var(--cor-primaria)'};">📅 Dia ${dia}</h3>
          <span style="font-size: 0.85rem; font-weight: 800; padding: 4px 10px; border-radius: 20px; background: ${concluidoDia ? 'var(--verde-escuro)' : '#eee'}; color: ${concluidoDia ? '#fff' : '#666'};">
            ${concluidoDia ? "✅ Concluído!" : "⏳ Em Andamento"}
          </span>
        </div>
        ${tarefasHtml}
      </div>
    `;
  }

  html += `
      </div>
      ${renderizarControlesRodape("checklist-diario")}
    </div>
  `;

  contentArea.innerHTML = html;

  // Add event listeners to checkboxes
  document.querySelectorAll(".checklist-cb").forEach(cb => {
    cb.addEventListener("change", (e) => {
      const key = e.target.getAttribute("data-key");
      checklistSalvo[key] = e.target.checked;
      localStorage.setItem("checklist_diario_completo", JSON.stringify(checklistSalvo));
      
      const parent = e.target.closest(".dia-checklist-box");
      const dayCheckboxes = parent.querySelectorAll(".checklist-cb");
      let allChecked = true;
      dayCheckboxes.forEach(dcb => {
        if (!dcb.checked) allChecked = false;
      });

      const headerSpan = parent.querySelector("span");
      const headerTitle = parent.querySelector("h3");
      if (allChecked) {
        parent.style.borderColor = "var(--verde-escuro)";
        parent.style.backgroundColor = "#e8f5e9";
        headerSpan.textContent = "✅ Concluído!";
        headerSpan.style.backgroundColor = "var(--verde-escuro)";
        headerSpan.style.color = "#fff";
        headerTitle.style.color = "var(--verde-escuro)";
      } else {
        parent.style.borderColor = "var(--borda-suave)";
        parent.style.backgroundColor = "#fff";
        headerSpan.textContent = "⏳ Em Andamento";
        headerSpan.style.backgroundColor = "#eee";
        headerSpan.style.color = "#666";
        headerTitle.style.color = "var(--cor-primaria)";
      }
    });
  });

  configurarEventosRodape("checklist-diario");
}

