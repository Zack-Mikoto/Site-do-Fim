function filtrar(categoria) {
    const itens = document.querySelectorAll("#lista-de-membros div")

    itens.forEach(item => {
        const categorias = item.dataset.categoria.split(" ");

        if (categoria === "todos" || categorias.includes(categoria)) {
            item.style.display = "";
        } else {
            item.style.display = "none";
        }
    });
}
const botao = document.getElementById("botao-filtro");
const menu = document.getElementById("menu");

botao.addEventListener ("click", ()=> {

    if (menu.style.display == "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }

});

function atualizarContador () {
    const itens = document.querySelectorAll("#lista-de-membros > div"); 
    let homens = 0;
    let mulheres = 0;

    itens.forEach(item => {
        const categoria = item.dataset.categoria;

        if (categoria === "homem") {
            homens++;
        }

        if (categoria === "mulher") {
            mulheres++;
        }
    });
    document.getElementById("contador-todos").textContent = itens.length;
    document.getElementById("contador-homens").textContent = homens;
    document.getElementById("contador-mulheres").textContent = mulheres;

    
    
}

atualizarContador();