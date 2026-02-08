const PRECO_GARRAFAO = 5.50;
const totalGarrafoes = document.getElementById('totalGarrafoes');
const totalPreco = document.getElementById('totalPreco');
const erro = document.getElementById('erro');

totalGarrafoes.addEventListener('input', () => {
    const qtd = Number(totalGarrafoes.value || 0);
    totalPreco.innerText = (qtd * PRECO_GARRAFAO).toFixed(2).replace('.', ',');
});
const buscaBairro = document.getElementById('bairro');
const endereco = document.getElementById('endereco');

buscaBairro.addEventListener('input', () => {
    const texto = buscaBairro.value.toLowerCase();

    Array.from(buscaBairro.options).forEach(option => {
        if (option.value === "") return;

        const match = option.text.toLowerCase().includes(texto);
        option.style.display = match ? 'block' : 'none';
    });
});


document.getElementById('order-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const qtd = Number(totalGarrafoes.value);
    if (qtd < 10) {
        erro.style.display = 'block';
        return;
    }
    erro.style.display = 'none';

    const msg = `
 *Novo Pedido de Água*

 Cliente: ${nome.value}
 Telefone: ${telefone.value}

 Bairro: ${bairro.value}
 Endereço: ${endereco.value}

 Garrafões: ${qtd}
 • 2026: ${v2026.value || 0}
 • 2027: ${v2027.value || 0}
 • 2028: ${v2028.value || 0}
 • 2029: ${v2029.value || 0}

 Total: R$ ${(qtd * PRECO_GARRAFAO).toFixed(2)}
`;

    const numeroWhats = "5571981324729"; // <-- COLOQUE SEU NÚMERO AQUI
    const url = `https://wa.me/${numeroWhats}?text=${encodeURIComponent(msg)}`;

    window.open(url, '_blank');
});
