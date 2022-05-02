var carta1 = {
    nome: "Jim Halpert",
    imagem:
      "https://i.pinimg.com/564x/ea/63/b6/ea63b66b8b51ae5e136c8c9e1789b9ac.jpg",
    atributos: {
      inteligência: 9,
      humor: 10,
      carisma: 8
    }
  };
  
  var carta2 = {
    nome: "Michael Scott",
    imagem: "https://rollingstone.uol.com.br/media/_versions/michael-scott-reprod-comedy-central_widelg.jpg",
    atributos: {
      inteligência: 5,
      humor: 9,
      carisma: 6
    }
  };
  
  var carta3 = {
    nome: "Dwight Schrute",
    imagem:
      "https://br.web.img2.acsta.net/r_1280_720/newsv7/20/08/20/22/44/03441350.jpg",
    atributos: {
      inteligência: 8,
      humor: 8,
      carisma: 4
    }
  };

  var carta4 = {
    nome: "Pam Beesly",
    imagem:
      "https://rollingstone.uol.com.br/media/_versions/pam-the-office-jenna-fischer-foto-reproducao_widelg.jpg",
    atributos: {
      inteligência: 10,
      humor: 8,
      carisma: 8
    }
  };

  var carta5 = {
    nome: "Angela Martin",
    imagem:
      "https://br.web.img3.acsta.net/r_1280_720/newsv7/20/08/20/22/43/37203820.jpg",
    atributos: {
      inteligência: 7,
      humor: 3,
      carisma: 4
    }
  };

  var carta6 = {
    nome: "Jan Levinson",
    imagem:
      "https://pbs.twimg.com/media/EdOU7_BX0AACV_a.jpg",
    atributos: {
      inteligência: 8,
      humor: 4,
      carisma: 5
    }
  };

  var carta7 = {
    nome: "Kevin Malone",
    imagem:
      "https://s2.glbimg.com/HgDOyVRAU01NYZDM8NcJfzD4zoo=/smart/e.glbimg.com/og/ed/f/original/2021/11/19/to2.jpg",
    atributos: {
      inteligência: 3,
      humor: 7,
      carisma: 6
    }
  };

  var carta8 = {
    nome: "Darryl Philbin",
    imagem:
      "https://cdn3.whatculture.com/images/2020/08/e5d8bab1e3472517-1200x675.jpg",
    atributos: {
      inteligência: 7,
      humor: 7,
      carisma: 10
    }
  };
  
  
  var cartas = [carta1, carta2, carta3, carta4, carta5, carta6, carta7, carta8];
  var cartaMaquina = 0;
  var cartaJogador = 0;
  
  function sortearCarta() {
    var numeroCartaMaquina = parseInt(Math.random() * 8);
    cartaMaquina = cartas[numeroCartaMaquina];
  
    var numeroCartaJogador = parseInt(Math.random() * 8);
    while (numeroCartaMaquina == numeroCartaJogador) {
      numeroCartaJogador = parseInt(Math.random() * 8);
    }
    cartaJogador = cartas[numeroCartaJogador];
    console.log(cartaJogador);
  
    document.getElementById("btnSortear").disabled = true;
    document.getElementById("btnJogar").disabled = false;
    exibirCartaJogador();
  }
  
  function obtemAtributoSelecionado() {
    var radioAtributos = document.getElementsByName("atributo");
  
    for (var i = 0; i < radioAtributos.length; i++) {
      if (radioAtributos[i].checked == true) {
        return radioAtributos[i].value;
      }
    }
  }
  
  function jogar() {
    var atributoSelecionado = obtemAtributoSelecionado();
    var divResultado = document.getElementById("resultado");
  
    if (
      cartaJogador.atributos[atributoSelecionado] >
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Venceu</p>";
    } else if (
      cartaJogador.atributos[atributoSelecionado] <
      cartaMaquina.atributos[atributoSelecionado]
    ) {
      htmlResultado = "<p class='resultado-final'>Perdeu</p>";
    } else {
      htmlResultado = "<p class='resultado-final'>Empatou</p>";
    }
    divResultado.innerHTML = htmlResultado;
  
    document.getElementById("btnJogar").disabled = true;
    exibirCartaMaquina();
  }
  
  function exibirCartaJogador() {
    var divCartaJogador = document.getElementById("carta-jogador");
    divCartaJogador.style.backgroundImage = `url(${cartaJogador.imagem})`;
    //  divCartaJogador.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaJogador.atributos) {
      opcoesTexto +=
        "<input type='radio' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaJogador.atributos[atributo] +
        "<br>";
    }
    var nome = `<p class="carta-subtitle">${cartaJogador.nome}</p>`;
  
    divCartaJogador.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }
  
  function exibirCartaMaquina() {
    var divCartaMaquina = document.getElementById("carta-maquina");
    divCartaMaquina.style.backgroundImage = `url(${cartaMaquina.imagem})`;
    //  divCartaMaquina.style.backgroundImage = "url(" + cartaJogador.imagem + ")"
    var moldura =
      '<img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/card-super-trunfo-transparent-ajustado.png" style=" width: inherit; height: inherit; position: absolute;">';
    var tagHTML = "<div id='opcoes' class='carta-status'>";
  
    var opcoesTexto = "";
    for (var atributo in cartaMaquina.atributos) {
      opcoesTexto +=
        "<p type='text' name='atributo' value='" +
        atributo +
        "'>" +
        atributo +
        " " +
        cartaMaquina.atributos[atributo] +
        "</p>";
    }
    var nome = `<p class="carta-subtitle">${cartaMaquina.nome}</p>`;
  
    divCartaMaquina.innerHTML = moldura + nome + tagHTML + opcoesTexto + "</div>";
  }