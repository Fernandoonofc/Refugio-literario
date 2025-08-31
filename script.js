const livros = [
  { id: 1, titulo: "Duna", autor:"Frank Herbert", precoComprar: 80, precoAlugar: 45, genero: "ficcao" },
  { id: 2, titulo: "Fahrenheit 451", autor: "Ray Bradbury", precoComprar: 54, precoAlugar: 34, genero: "ficcao" },
  { id: 3, titulo: "Eu,Robo", autor: "Isaac Asimov", precoComprar: 55, precoAlugar: 33, genero: "ficcao" },
  { id: 4, titulo: "O Silêncio dos Inocentes", autor: "Thomas Harris", precoComprar: 56, precoAlugar: 32, genero: "suspense" },
  { id: 5, titulo: "A Garota no Trem", autor: "Paula Hawkins", precoComprar: 45, precoAlugar: 29, genero: "suspense" },
  { id: 6, titulo: "It:A Coisa", autor: "Stephen King", precoComprar: 80, precoAlugar: 46, genero: "suspense" },
  { id: 7, titulo: "Meditações", autor: "Marco Aurélio", precoComprar: 41, precoAlugar: 35, genero: "autoajuda" },
  { id: 8, titulo: "Os 7 Hábitos das Pessoas Altamente Eficazes", autor: "Stephen Covey", precoComprar: 60, precoAlugar: 20, genero: "autoajuda" },
  { id: 9, titulo: "O Poder do Hábito", autor: "Charles Duhigg", precoComprar: 45, precoAlugar: 32, genero: "autoajuda" },
  { id: 10, titulo: "Orgulho e Preconceito", autor: "Jane Austin", precoComprar: 52, precoAlugar: 31, genero: "romance" },
  { id: 11, titulo: "Dom Casmurro", autor: "Machado de Assis", precoComprar: 38, precoAlugar: 26, genero: "romance" },
  { id: 12, titulo: "A Culpa é das Estrelas ", autor: "John Green", precoComprar: 59, precoAlugar: 34, genero: "romance" },
  { id: 13, titulo: "Clean Code", autor: "Robert C. Martin", precoComprar: 96, precoAlugar: 67, genero: "tecnologia" },
  { id: 14, titulo: "A Arte de Programar Computadores", autor: "Donald Knuth", precoComprar: 140, precoAlugar: 96, genero: "tecnologia" },
  { id: 15, titulo: "Estruturas de Dados e Algoritmos em Java", autor: "Robert Lafore", precoComprar: 110, precoAlugar: 70, genero: "tecnologia" },
  { id: 16, titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K.  Rowling", precoComprar: 104, precoAlugar: 57, genero: "fantasia" },
  { id: 17, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", precoComprar: 100, precoAlugar: 85, genero: "fantasia" },
  { id: 18, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", precoComprar: 34, precoAlugar: 22, genero: "fantasia" },
  { id: 19, titulo: "Diário de Anne Frank", autor: "Anne Frank", precoComprar: 46, precoAlugar: 28, genero: "biografia" },
  { id: 20, titulo: "Steve Jobs", autor: "Walter Isaacson", precoComprar: 58, precoAlugar: 28, genero: "biografia" },
  { id: 21, titulo: "Long Walk to Freedom", autor: "Nelson Mandela", precoComprar: 69, precoAlugar: 35, genero: "biografia" },
  { id: 22, titulo: "Sapiens: Uma Breve História da Humanidade", autor: "Yuval Noah Harari", precoComprar: 75, precoAlugar: 52, genero: "historia" },
  { id: 23, titulo: "1499: O Brasil Antes de Cabral", autor: "André Chelotti", precoComprar: 45, precoAlugar: 36, genero: "historia" },
  { id: 24, titulo: "Os Donos do Poder", autor: "Raymundo farao", precoComprar: 70, precoAlugar: 52, genero: "historia" },
  { id: 25, titulo: "O Mundo como Vontade e Representação", autor: "Arthur Schopenhauer", precoComprar: 120, precoAlugar: 70, genero: "filosofia" },
  { id: 26, titulo: "Crítica da Razão Pura", autor: "Immanuel Kant", precoComprar: 140, precoAlugar: 65, genero: "filosofia" },
  { id: 27, titulo: "Convite à filosofia", autor: "Marilena Chaui", precoComprar: 42, precoAlugar: 37, genero: "filosofia" }
];

const bebidas = [
  { id: 101, tipo: "cafe", nome: "Café Expresso", precoComprar: 5 },
  { id: 102, tipo: "cafe", nome: "Café Expresso Duplo", precoComprar: 8 },
  { id: 103, tipo: "cafe", nome: "Cappuccino", precoComprar: 7 },
  { id: 104, tipo: "cafe", nome: "Latte Macchiato", precoComprar: 8 },
  { id: 105, tipo: "cafe", nome: "Mocha", precoComprar: 8 },

  { id: 201, tipo: "cha", nome: "Chá de Camomila", precoComprar: 4 },
  { id: 202, tipo: "cha", nome: "Chá Verde", precoComprar: 4 },
  { id: 203, tipo: "cha", nome: "Chá Mate", precoComprar: 5 },
  { id: 204, tipo: "cha", nome: "Chá Preto", precoComprar: 5 },
  { id: 205, tipo: "cha", nome: "Chá de Frutas Vermelhas", precoComprar: 5 },

  { id: 301, tipo: "suco", nome: "Suco de Laranja", precoComprar: 5 },
  { id: 302, tipo: "suco", nome: "Suco de Uva", precoComprar: 5 },
  { id: 303, tipo: "suco", nome: "Suco de Maracujá", precoComprar: 5 },
  { id: 304, tipo: "suco", nome: "Suco de Manga", precoComprar: 6 },
  { id: 305, tipo: "suco", nome: "Suco de Abacaxi com Hortelã", precoComprar: 6 },

  { id: 401, tipo: "agua", nome: "Água Mineral", precoComprar: 3 },
  { id: 402, tipo: "agua", nome: "Água com Gás", precoComprar: 3.5 },
  { id: 403, tipo: "agua", nome: "Água Saborizada com Limão", precoComprar: 4 },
  { id: 404, tipo: "agua", nome: "Água Saborizada com Hortelã", precoComprar: 4 },
  { id: 405, tipo: "agua", nome: "Água Tônica", precoComprar: 4.5 },

  { id: 501, tipo: "outros", nome: "Chocolate Quente", precoComprar: 7 },
  { id: 502, tipo: "outros", nome: "Chocolate Gelado", precoComprar: 8 },
  { id: 503, tipo: "outros", nome: "Frappuccino", precoComprar: 10 },
  { id: 504, tipo: "outros", nome: "Smoothie de Morango", precoComprar: 9 },
  { id: 505, tipo: "outros", nome: "Milk-shake de Chocolate", precoComprar: 9 }
];

const listaLivrosElem = document.getElementById('lista-livros');
const listaBebidasElem = document.getElementById('lista-bebidas');
const filtroGenero = document.getElementById('filtro-genero');
const inputPesquisa = document.getElementById('pesquisa-livro');
const filtroTipoBebida = document.getElementById('filtro-tipo-bebida');
const menuAbas = document.querySelectorAll('#menu-principal .aba');
const contadorCarrinhoElem = document.getElementById('contador-carrinho');

const abaConteudos = document.querySelectorAll('.aba-conteudo');
const itensCarrinhoElem = document.getElementById('itens-carrinho');
const totalCarrinhoElem = document.getElementById('total-carrinho');
const finalizarCompraBtn = document.getElementById('finalizar-compra');

let carrinho = [];

function formatarPreco(valor) {
  return "R$ " + valor.toFixed(2).replace('.', ',');
}

function renderizarLivros(filtroGeneroVal = 'todos', pesquisa = '') {
  listaLivrosElem.innerHTML = '';

  let livrosFiltrados = filtroGeneroVal === 'todos' ?
    livros :
    livros.filter(l => l.genero === filtroGeneroVal);

  if (pesquisa.trim() !== '') {
    const pesquisaLower = pesquisa.toLowerCase();
    livrosFiltrados = livrosFiltrados.filter(livro =>
      livro.titulo.toLowerCase().includes(pesquisaLower) ||
      livro.autor.toLowerCase().includes(pesquisaLower) ||
      livro.genero.toLowerCase().includes(pesquisaLower)
    );
  }

  livrosFiltrados.forEach(livro => {
    const livroElem = document.createElement('div');
    livroElem.className = 'livro';

    livroElem.innerHTML = `
      <div><strong>${livro.titulo}</strong> - ${livro.autor}</div>
      <div>
        <button onclick="adicionarCarrinho(${livro.id}, 'comprar')">Comprar (${formatarPreco(livro.precoComprar)})</button>
        <button onclick="adicionarCarrinho(${livro.id}, 'alugar')">Alugar (${formatarPreco(livro.precoAlugar)})</button>
      </div>
    `;

    listaLivrosElem.appendChild(livroElem);
  });
}

function renderizarBebidas(tipo = 'todos') {
  listaBebidasElem.innerHTML = '';
  const bebidasFiltradas = tipo === 'todos'
    ? bebidas
    : bebidas.filter(b => b.tipo === tipo);

  bebidasFiltradas.forEach(bebida => {
    const bebidaElem = document.createElement('div');
    bebidaElem.className = 'produto';

    bebidaElem.innerHTML = `
      <div><strong>${bebida.nome}</strong></div>
      <div>
        <button onclick="adicionarCarrinho(${bebida.id}, 'comprar')">
          Comprar (${formatarPreco(bebida.precoComprar)})
        </button>
      </div>
    `;

    listaBebidasElem.appendChild(bebidaElem);
  });
}

function atualizarContadorCarrinho() {
  const total = carrinho.reduce((acc, item) => acc + item.quantidade, 0);
  contadorCarrinhoElem.textContent = total;
  if (total === 0) {
    document.querySelector('[data-target="aba-carrinho"]').textContent = `Carrinho (0)`;
  } else {
    document.querySelector('[data-target="aba-carrinho"]').textContent = `Carrinho (${total})`;
  }
}

function adicionarCarrinho(idProduto, tipo) {
  const index = carrinho.findIndex(item => item.idProduto === idProduto && item.tipo === tipo);
  if(index >= 0) {
    carrinho[index].quantidade++;
  } else {
    carrinho.push({ idProduto, tipo, quantidade: 1 });
  }
  atualizarContadorCarrinho();
  alert("Produto adicionado ao carrinho!");
  if(document.getElementById('aba-carrinho').classList.contains('ativa')) {
    renderizarCarrinho();
  }
}

function removerItemCarrinho(index) {
  carrinho.splice(index, 1);
  renderizarCarrinho();
  atualizarContadorCarrinho();
}

function alterarQuantidadeCarrinho(index, delta) {
  carrinho[index].quantidade += delta;
  if (carrinho[index].quantidade <= 0) {
    carrinho.splice(index, 1);
  }
  renderizarCarrinho();
  atualizarContadorCarrinho();
}

function calcularTotal() {
  return carrinho.reduce((total, item) => {
    let produto = livros.find(l => l.id === item.idProduto);
    if(!produto) produto = bebidas.find(b => b.id === item.idProduto);
    if(!produto) return total;

    if(livros.includes(produto)) {
      const preco = item.tipo === 'comprar' ? produto.precoComprar : produto.precoAlugar;
      return total + preco * item.quantidade;
    } else {
      return total + produto.precoComprar * item.quantidade;
    }
  }, 0);
}

function renderizarCarrinho() {
  itensCarrinhoElem.innerHTML = '';
  if(carrinho.length === 0) {
    itensCarrinhoElem.innerHTML = '<p>Seu carrinho está vazio.</p>';
    totalCarrinhoElem.textContent = 'Total: R$ 0,00';
    return;
  }
  carrinho.forEach((item, index) => {
    let produto = livros.find(l => l.id === item.idProduto);
    let tipoTexto = '';
    if(!produto) {
      produto = bebidas.find(b => b.id === item.idProduto);
      tipoTexto = 'Compra';
    } else {
      tipoTexto = item.tipo === 'comprar' ? 'Compra' : 'Aluguel';
    }
    const precoUnitario = livros.includes(produto) ?
      (item.tipo === 'comprar' ? produto.precoComprar : produto.precoAlugar) :
      produto.precoComprar;

    const div = document.createElement('div');
    div.className = 'item-carrinho';
    div.innerHTML = `
      <div>
        <strong>${produto.titulo || produto.nome}</strong> (${tipoTexto})<br/>
        <span>
          <button class="btn-minus" onclick="alterarQuantidadeCarrinho(${index}, -1)">−</button>
          <span style="margin:0 8px;">${item.quantidade}</span>
          <button class="btn-plus" onclick="alterarQuantidadeCarrinho(${index}, 1)">+</button>
        </span><br/>
        Preço unitário: ${formatarPreco(precoUnitario)}
      </div>
      <div>
        <button onclick="removerItemCarrinho(${index})">Excluir</button>
      </div>
    `;
    itensCarrinhoElem.appendChild(div);
  });
  totalCarrinhoElem.textContent = 'Total: ' + formatarPreco(calcularTotal());
}

function finalizarCompra() {
  if(carrinho.length === 0) {
    alert("Seu carrinho está vazio.");
    return;
  }

  const promocoes = [
    {
      idBebida: 504,  // Smoothie de Morango
      idLivro: 16,    // Harry Potter e a Pedra Filosofal
      descontoPercentual: 15,
      mensagemIncentivo:
        "Você tem um dos itens da promoção: Harry Potter e Smoothie de Morango.\n" +
        "Quer adicionar o outro para aproveitar a magia do desconto de 15% em ambos?",
      mensagemConfirmacao:
        "Mágica no ar! Smoothie de Morango com Harry Potter juntos garantem 15% de desconto.\n" +
        "Confirma finalizar a compra com desconto?"
    },
    {
      idBebida: 101,  // Café Expresso
      idLivro: 1,     // Duna
      descontoPercentual: 10,
      mensagemIncentivo:
        "Você tem um dos itens da promoção: Duna e Café Expresso.\n" +
        "Quer adicionar o outro para sentir o calor do desérto do desconto de 10%?",
      mensagemConfirmacao:
        "Calor desértico! na compra de Duna com Café Expresso: desconto de 10%!\n" +
        "Confirma finalizar a compra com desconto?"
    },
    {
      idBebida: 202,  // Chá Verde
      idLivro: 7,     // Meditações
      descontoPercentual: 15,
      mensagemIncentivo:
        "Você tem um dos itens da promoção: Meditações e Chá Verde.\n" +
        "Quer adicionar o outro para garantir seu momento zen com 15% de desconto?",
      mensagemConfirmacao:
        "Momento zen: Meditações com Chá Verde garantem desconto de 15% .\n" +
        "Confirma finalizar a compra com desconto?"
    }
  ];

  for (const promo of promocoes) {
    const temBebida = carrinho.some(item => item.idProduto === promo.idBebida);
    const temLivro = carrinho.some(item => item.idProduto === promo.idLivro && (item.tipo === "comprar" || item.tipo === "alugar"));

    if (temBebida && temLivro) {
      const confirmar = confirm(promo.mensagemConfirmacao);
      if (!confirmar) return;
      const total = calcularTotal();
      const desconto = (total * promo.descontoPercentual) / 100;
      const totalComDesconto = total - desconto;
      alert(`Compra finalizada com sucesso! Total com desconto: ${formatarPreco(totalComDesconto)}`);
      carrinho = [];
      renderizarCarrinho();
      atualizarContadorCarrinho();
      document.querySelector(".aba.ativa").classList.remove("ativa");
      document.querySelector("[data-target='aba-bebidas']").classList.add("ativa");
      abaConteudos.forEach(aba => aba.classList.remove("ativa"));
      document.getElementById("aba-bebidas").classList.add("ativa");
      return;
    }

    if (temBebida && !temLivro) {
      const querAdicionarLivro = confirm(promo.mensagemIncentivo);
      if (querAdicionarLivro) {
        adicionarCarrinho(promo.idLivro, "comprar");
        alert("Livro adicionado ao carrinho para ativar a promoção!");
        renderizarCarrinho();
        atualizarContadorCarrinho();
      }
      return;
    }

    if (!temBebida && temLivro) {
      const querAdicionarBebida = confirm(promo.mensagemIncentivo);
      if (querAdicionarBebida) {
        adicionarCarrinho(promo.idBebida, "comprar");
        alert("Bebida adicionada ao carrinho para ativar a promoção!");
        renderizarCarrinho();
        atualizarContadorCarrinho();
      }
      return;
    }
  }

  const querFinalizar = confirm("Tem certeza que deseja finalizar essa compra?");
  if (!querFinalizar) return;

  alert(`Compra finalizada com sucesso! Total: ${formatarPreco(calcularTotal())}`);
  carrinho = [];
  renderizarCarrinho();
  atualizarContadorCarrinho();
  document.querySelector(".aba.ativa").classList.remove("ativa");
  document.querySelector("[data-target='aba-bebidas']").classList.add("ativa");
  abaConteudos.forEach(aba => aba.classList.remove("ativa"));
  document.getElementById("aba-bebidas").classList.add("ativa");
}

// Controle abas
menuAbas.forEach(botao => {
  botao.addEventListener("click", () => {
    menuAbas.forEach(b => b.classList.remove("ativa"));
    abaConteudos.forEach(aba => aba.classList.remove("ativa"));
    botao.classList.add("ativa");
    const alvo = botao.dataset.target;
    document.getElementById(alvo).classList.add("ativa");
    if (alvo === "aba-carrinho") renderizarCarrinho();
  });
});

// Eventos filtro e busca livros
filtroGenero.addEventListener("change", () =>
  renderizarLivros(filtroGenero.value, inputPesquisa.value)
);
inputPesquisa.addEventListener("input", () =>
  renderizarLivros(filtroGenero.value, inputPesquisa.value)
);

// Evento filtro bebida
filtroTipoBebida.addEventListener("change", () =>
  renderizarBebidas(filtroTipoBebida.value)
);

finalizarCompraBtn.addEventListener("click", finalizarCompra);

// Inicialização
renderizarLivros();
renderizarBebidas();
atualizarContadorCarrinho();

// Tornar funções acessíveis globalmente para onclick inline
window.adicionarCarrinho = adicionarCarrinho;
window.removerItemCarrinho = removerItemCarrinho;
window.alterarQuantidadeCarrinho = alterarQuantidadeCarrinho;
