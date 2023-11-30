document.addEventListener('DOMContentLoaded', function () {
    carregarConteudoDoMenu();
    configurarSwiper();
    destacarPaginaAtualNoMenu();
    configurarEventoCliqueMenu();
    configurarEventoCliqueFecharLogin();
});

function carregarConteudoDoMenu() {
    var header = document.getElementById("header");

    if (header) {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", "header.html", true);
        xhr.onreadystatechange = function () {
            if (xhr.readyState == 4 && xhr.status == 200) {
                header.innerHTML = xhr.responseText;
                destacarPaginaAtualNoMenu();
                configurarEventoCliqueMenu();
                abrirTelaLogin();
            }
        };
        xhr.send();
    }
}

function configurarSwiper() {
    var swiper = new Swiper(".inicio-slider", {
        // Configurações do Swiper
        // ...
    });
}

function destacarPaginaAtualNoMenu() {
    var currentPageUrl = window.location.href;
    var menuLinks = document.querySelectorAll('#header a');

    menuLinks.forEach(function (link) {
        var linkUrl = link.href;

        if (currentPageUrl === linkUrl) {
            link.classList.add('active');
        }
    });
}

function abrirTelaLogin() {
    var loginBtn = document.querySelector('#login-btn');
    if (loginBtn) {
        loginBtn.onclick = function () {
            var containerLogin = document.querySelector(".containerLogin");
            if (containerLogin) {
                containerLogin.classList.toggle('active');
            }
        };
    }
}

function configurarEventoCliqueMenu() {
    var menu = document.querySelector('#menu-btn');
    var navbar = document.querySelector('.navbar');

    if (menu) {
        menu.onclick = function () {
            menu.classList.toggle('fa-times');
            navbar.classList.toggle('active');
        };
    }
}



function configurarEventoCliqueFecharLogin() {
    var fecharLoginBtn = document.querySelector("#fechar-form-login");
    if (fecharLoginBtn) {
        console.log("ENTREI")
        fecharLoginBtn.onclick = function () {
            var containerLogin = document.querySelector('.containerLogin');
            if (containerLogin) {
                containerLogin.classList.remove("active");
            }
        };
    }
}



const canvas = document.getElementById('gridCanvas');
    const ctx = canvas.getContext('2d');

    const gridSize = 40; // Tamanho de cada quadrado
    const rows = canvas.height / gridSize;
    const cols = canvas.width / gridSize;

  
    const tokens = [
      { x: 2, y: 3, color: 'red' },
      { x: 5, y: 2, color: 'blue'},
      { x: 12, y: 5, color: 'green'},
      { x: 13, y: 5, color: 'green'},
      { x: 14, y: 5, color: 'green'},
      { x: 15, y: 5, color: 'green'},
      { x: 16, y: 5, color: 'green'},
    
    ];

    function drawToken(token) {
      ctx.fillStyle = token.color;
      ctx.beginPath();
      ctx.arc(token.x * gridSize + gridSize / 2, token.y * gridSize + gridSize / 2, gridSize / 3, 0, 2 * Math.PI);
      ctx.fill();
    }

    // Desenhe o mapa quadriculado
    for (let i = 0; i < rows; i++) {
      for (let j = 0; j < cols; j++) {
        ctx.strokeRect(j * gridSize, i * gridSize, gridSize, gridSize);
      }
    }

    // Desenhe todos os tokens iniciais
    tokens.forEach(token => drawToken(token));

    let selectedToken = null;

    // Adicione eventos de clique e movimento do mouse no canvas
    canvas.addEventListener('mousedown', function(event) {
      const rect = canvas.getBoundingClientRect();
      const x = Math.floor((event.clientX - rect.left) / gridSize);
      const y = Math.floor((event.clientY - rect.top) / gridSize);

      // Verifique se um token foi clicado
      selectedToken = tokens.find(token => token.x === x && token.y === y);
    });

    canvas.addEventListener('mousemove', function(event) {
      if (selectedToken) {
        const rect = canvas.getBoundingClientRect();
        selectedToken.x = Math.floor((event.clientX - rect.left) / gridSize);
        selectedToken.y = Math.floor((event.clientY - rect.top) / gridSize);

        // Limpe o canvas e redesenhe tudo
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        for (let i = 0; i < rows; i++) {
          for (let j = 0; j < cols; j++) {
            ctx.strokeRect(j * gridSize, i * gridSize, gridSize, gridSize);
          }
        }
        tokens.forEach(token => drawToken(token));
      }
    });

    canvas.addEventListener('mouseup', function() {
      selectedToken = null;
    });


    function rollD20() {
        var d20Result = document.getElementById("d20Result");
        var d20 = Math.floor(Math.random()*20+1);
          d20Result.innerHTML = d20;
        };
        
        //--- D12 ---//
        function rollD12() {
        var d12Result = document.getElementById("d12Result");
        var d12 = Math.floor(Math.random()*12+1);
          d12Result.innerHTML = d12;
        };
        
        //--- D10 ---//
        function rollD10() {
        var d10Result = document.getElementById("d10Result");
        var d10 = Math.floor(Math.random()*10+1);
          d10Result.innerHTML = d10;
        };
        
        //--- D8 ---//
        function rollD8() {
        var d8Result = document.getElementById("d8Result");
        var d8 = Math.floor(Math.random()*8+1);
          d8Result.innerHTML = d8;
        };
        
        //--- D6 ---//
        function rollD6() {
        var d6Result = document.getElementById("d6Result");
        var d6 = Math.floor(Math.random()*6+1);
          d6Result.innerHTML = d6;
        };
        
        //--- D6 ---//
        function rollD4() {
        var d4Result = document.getElementById("d4Result");
        var d4 = Math.floor(Math.random()*4+1);
          d4Result.innerHTML = d4;
        };
