const livros = [
  { id: 1, titulo: "Duna", autor:"Frank Herbert", precoComprar: 35, precoAlugar: 12, genero: "ficcao" },
  { id: 2, titulo: "Fahrenheit 451", autor: "Ray Bradbury", precoComprar: 25, precoAlugar: 8, genero: "ficcao" },
  { id: 3, titulo: "Eu,Robo", autor: "Isaac Asimov", precoComprar: 40, precoAlugar: 15, genero: "ficcao" },
  { id: 4, titulo: "O Silêncio dos Inocentes", autor: "Thomas Harris", precoComprar: 30, precoAlugar: 10, genero: "suspense" },
  { id: 5, titulo: "A Garota no Trem", autor: "Paula Hawkins", precoComprar: 45, precoAlugar: 15, genero: "suspense" },
  { id: 6, titulo: "It:A Coisa", autor: "Stephen King", precoComprar: 60, precoAlugar: 20, genero: "suspense" },
  { id: 7, titulo: "Meditações", autor: "Marco Aurélio", precoComprar: 60, precoAlugar: 20, genero: "autoajuda" }
,
  { id: 8, titulo: "Os 7 Hábitos das Pessoas Altamente Eficazes", autor: "Stephen Covey", precoComprar: 60, precoAlugar: 20, genero: "autoajuda" }
,
  { id: 9, titulo: "O Poder do Hábito", autor: "Charles Duhigg", precoComprar: 60, precoAlugar: 20, genero: "autoajuda" }
,
  { id: 10, titulo: "Orgulho e Preconceito", autor: "Jane Austin", precoComprar: 60, precoAlugar: 20, genero: "romance" }
,
  { id: 11, titulo: "Dom Casmurro", autor: "Machado de Assis", precoComprar: 60, precoAlugar: 20, genero: "romance" }
,
  { id: 12, titulo: "A Culpa é das Estrelas ", autor: "John Green", precoComprar: 60, precoAlugar: 20, genero: "romance" }
,
  { id: 13, titulo: "Clean Code", autor: "Robert C. Martin", precoComprar: 60, precoAlugar: 20, genero: "tecnologia" }
,
  { id: 14, titulo: "A Arte de Programar Computadores", autor: "Donald Knuth", precoComprar: 60, precoAlugar: 20, genero: "tecnologia" }
,
  { id: 15, titulo: "Estruturas de Dados e Algoritmos em Java", autor: "Robert Lafore", precoComprar: 60, precoAlugar: 20, genero: "tecnologia" }
,
  { id: 16, titulo: "Harry Potter e a Pedra Filosofal", autor: "J.K.  Rowling", precoComprar: 60, precoAlugar: 20, genero: "fantasia" }
,
  { id: 17, titulo: "O Senhor dos Anéis", autor: "J.R.R. Tolkien", precoComprar: 60, precoAlugar: 20, genero: "fantasia" }
,
  { id: 18, titulo: "O Pequeno Príncipe", autor: "Antoine de Saint-Exupéry", precoComprar: 60, precoAlugar: 20, genero: "fantasia" }
,
  { id: 19, titulo: "Diário de Anne Frank", autor: "Anne Frank", precoComprar: 60, precoAlugar: 20, genero: "biografia" }
,
  { id: 20, titulo: "Steve Jobs", autor: "Walter Isaacson", precoComprar: 60, precoAlugar: 20, genero: "biografia" }
,
  { id: 21, titulo: "Long Walk to Freedom", autor: "Nelson Mandela", precoComprar: 60, precoAlugar: 20, genero: "biografia" }
,
  { id: 22, titulo: "Sapiens: Uma Breve História da Humanidade", autor: "Yuval Noah Harari", precoComprar: 60, precoAlugar: 20, genero: "historia" }
,
  { id: 23, titulo: "1499: O Brasil Antes de Cabral", autor: "André Chelotti", precoComprar: 60, precoAlugar: 20, genero: "historia" }
,
  { id: 24, titulo: "Os Donos do Poder", autor: "Raymundo farao", precoComprar: 60, precoAlugar: 20, genero: "historia" }
,
  { id: 25, titulo: "O Mundo como Vontade e Representação", autor: "Arthur Schopenhauer", precoComprar: 60, precoAlugar: 20, genero: "filosofia" }
,
  { id: 26, titulo: "Crítica da Razão Pura", autor: "Immanuel Kant", precoComprar: 60, precoAlugar: 20, genero: "filosofia" }
,
  { id: 27, titulo: "Convite à filosofia", autor: "Marilena Chaui", precoComprar: 60, precoAlugar: 20, genero: "filosofia" }
];

const bebidas = [
  { id: 101, nome: "Café Expresso", precoComprar: 5 },
  { id: 102, nome: "Cappuccino", precoComprar: 7 },
  { id: 103, nome: "Chá Verde", precoComprar: 4 },
  { id: 104, nome: "Chá de Ervas", precoComprar: 4.5 }
];

const listaLivrosElem = document.getElementById('lista-livros');
const listaBebidasElem = document.getElementById('lista-bebidas');
const filtroGenero = document.getElementById('filtro-genero');
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

function renderizarLivros(filtro = 'todos') {
  listaLivrosElem.innerHTML = '';
  const livrosFiltrados = filtro === 'todos' ? livros : livros.filter(l => l.genero === filtro);

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

function renderizarBebidas() {
  listaBebidasElem.innerHTML = '';
  bebidas.forEach(bebida => {
    const bebidaElem = document.createElement('div');
    bebidaElem.className = 'produto';

    bebidaElem.innerHTML = `
      <div>${bebida.nome}</div>
      <div>
        <button onclick="adicionarCarrinho(${bebida.id}, 'comprar')">Comprar (${formatarPreco(bebida.precoComprar)})</button>
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
    alert('Seu carrinho está vazio.');
    return;
  }
  alert(`Compra finalizada com sucesso! Total: ${formatarPreco(calcularTotal())}`);
  carrinho = [];
  renderizarCarrinho();
  atualizarContadorCarrinho();
  document.querySelector('.aba.ativa').classList.remove('ativa');
  document.querySelector('[data-target="aba-bebidas"]').classList.add('ativa');
  abaConteudos.forEach(aba => aba.classList.remove('ativa'));
  document.getElementById('aba-bebidas').classList.add('ativa');
}

// Troca de abas
menuAbas.forEach(botao => {
  botao.addEventListener('click', () => {
    menuAbas.forEach(b => b.classList.remove('ativa'));
    abaConteudos.forEach(aba => aba.classList.remove('ativa'));
    botao.classList.add('ativa');
    const alvo = botao.dataset.target;
    document.getElementById(alvo).classList.add('ativa');
    if(alvo === 'aba-carrinho') {
      renderizarCarrinho();
    }
  });
});

filtroGenero.addEventListener('change', () => renderizarLivros(filtroGenero.value));
finalizarCompraBtn.addEventListener('click', finalizarCompra);

window.adicionarCarrinho = adicionarCarrinho;
window.removerItemCarrinho = removerItemCarrinho;
window.alterarQuantidadeCarrinho = alterarQuantidadeCarrinho;

renderizarLivros();
renderizarBebidas();
atualizarContadorCarrinho();
