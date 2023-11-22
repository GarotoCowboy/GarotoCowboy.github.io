function inserirMenu() {
    // Crie o HTML do menu
    var menuHTML = `
    <header class="header">
    <div  id="menu-btn"  class="fas fa-bars"></div>

<a href="#" class="logo"><span>Projeto</span>js</a>

    <nav  class="navbar">
        <a href="#">inicio</a>
        <a href="jogar.html">jogar</a>
        <a href="mercado.html">mercado</a>
        <a href="inscrever.html">assine-já</a>
        <a href="ferramentas.html">ferramentas</a>
        <a href="#contato">contato</a>
    </nav>

    <div id="login-btn">
        <button class="btn">login</button>
        <i class="far fa-user"></i>
    </div>
</header>
    `;

    // Selecione o elemento onde o menu será inserido
    var menuContainer = document.getElementById('header');

    // Insira o HTML do menu no elemento
    menuContainer.innerHTML = menuHTML;
}

window.onload = inserirMenu;



let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
    alert('funfou');

}


var swiper = new Swiper(".mercadoSlider", {
    slidesPerView: 2,
    spaceBetween: 20,
    loop: true,
      grabCursor:true,
      centeredSlides:true,
    autoplay: {
        delay: 9500,
        disableOnInteraction: false,
      },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      0: {
        slidesPerView: 4,
      },
      768: {
        slidesPerView: 3,
      },
      998: {
        slidesPerView: 2,
      },
    },
  });