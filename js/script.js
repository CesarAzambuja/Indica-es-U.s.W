
const cards  =  document.querySelector ('.cards');

const dados = [
    {
        id: true,
        title: "Curso em Video - HTML5 / CSS / JS",
        image: "img/html.png",
        price: "Acessar",
        url_repo: "https://www.youtube.com/watch?v=epDCjksKMok&list=PLHz_AreHm4dlAnJ_jJtV29RFxnPHDuk9o"
    },
    {
        id: false,
        title: "Curso JavaScript Puro Completo",
        image: "img/js_puro.jpg",
        price: "Mais Detalhes",
        url_repo: "https://go.hotmart.com/E48968336O"
    },
    {
        id: true,
        title: "Curso em Video - Lógica de Programação",
        image: "img/cursoenvideo.png",
        price: "Acessar",
        url_repo: "https://www.youtube.com/watch?v=8mei6uVttho&list=PLHz_AreHm4dmSj0MHol_aoNYCSGFqvfXV"
    },
    {
        id: false,
        title: "Curso NodeJS",
        image: "img/node_danki.jpg",
        price: "Mais Detalhes",
        url_repo: "https://go.hotmart.com/Q48968280X"
    },
    {
        id: false,
        title: "Curso Banco de Dados",
        image: "img/banco_dados_danki.jpg",
        price: "Mais Detalhes",
        url_repo: "https://go.hotmart.com/L48968238P"
    },
    {
        id: false,
        title: "POWER BI (Curso Completo) + bônus Banco Access usando linguagem SQL",
        image: "img/bi.png",
        price: "Mais Detalhes",
        url_repo: "https://go.hotmart.com/E49050426V?dp=1"
    },
    {
        id: false,
        title: "Curso de PHP Developer",
        image: "img/php_developer.jpg",
        price: "Mais Detalhes",
        url_repo: "https://go.hotmart.com/B48967927K"
    },
    {
        id: false,
        title: "Curso de PHP Orientado a Objetos",
        image: "img/php_obj.jpg",
        price: "Mais Detalhes",
        url_repo: "https://go.hotmart.com/E48967849C"
    },
    {
        id: false,
        title: "Curso de Python",
        image: "img/python.png",
        price: "Mais Detalhes",
        url_repo: "https://go.hotmart.com/C48967905O"
    },
    {
        id: false,
        title: "Curso de Ruby e Ruby On Rails Completo",
        image: "img/ruby.png",
        price: "Mais Detalhes",
        url_repo: "https://go.hotmart.com/V48968141U"
    },
    {
        id: false,
        title: "Curso Java Web Completo",
        image: "img/java_web.jpg",
        price: "Mais Detalhes",
        url_repo: "https://go.hotmart.com/V48968218N"
    },
    {
        id: false,
        title: "Paginas PRO",
        image: "img/paginas_pro.jpg",
        price: "Mais Detalhes",
        url_repo: "https://go.hotmart.com/R48973839Q"
    },
    {
        id: false,
        title: "Curso Desenvolvedor Full Stack Turbo",
        image: "img/fullstack.jpg",
        price: "Mais Detalhes",
        url_repo: "https://go.hotmart.com/L49050098V"
    },
      
]

    dados.forEach ((item) => {
        cards.innerHTML += ` <div class="card">
        <div class="card__image__container">
            <img src="${item.image}" alt="Imagem de ${item.title}">
        </div><!--card__image__container-->
        
        <div class="card__content">
            <a class="${item.id}">FREE</a> 
            <p>${item.title}</p>
        </div><!--card__content-->
        <div class="card__info">
            
            <a href="${item.url_repo}" target="_blank" class="card__price">${item.price}</a>
        </div><!--card__info-->
    </div><!--card-->  `
    })