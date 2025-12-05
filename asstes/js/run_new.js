//Função Menu

function menu() {
  var nav = document.getElementById("menu");
  var changeNav = nav.classList;
  changeNav.toggle("navPerso");
  nav.classList.remove("bgMenu");

  var bordaMenu = document.getElementById("bordaVertMenu");
  var changeBorda = bordaMenu.classList;
  changeBorda.toggle("borderMenu3");
  changeBorda.classList.remove("borderMenu2");

  console.log(bordaMenu);

  var hamb = document.getElementById("iconHamb");
  var changeHamb = hamb.classList;
  changeHamb.toggle("navbar-toggler-icon-close");
}

//Função Vimeo

var iframe = document.getElementById("videoDesfile");
var player = new Vimeo.Player(iframe);

player.on("play", function () {
  console.log("Vídeo foi iniciado");
  player.requestFullscreen();
});

/*var iframeDesfile = document.getElementById('videoMesa');
var playerDesfile = new Vimeo.Player(iframeDesfile);

playerDesfile.on('play', function() {
    console.log('Vídeo foi iniciado');
    playerDesfile.requestFullscreen();
})*/


//Hover

var hover1 = document.getElementById("hover01");
var hover2 = document.getElementById("hover02");
var hover3 = document.getElementById("hover03");
var hover4 = document.getElementById("hover04");
var hover5 = document.getElementById("hover05");
var hover6 = document.getElementById("hover06");
var hover7 = document.getElementById("hover07");
var hover8 = document.getElementById("hover08");
var hover9 = document.getElementById("hover09");
var hover10 = document.getElementById("hover10");
var hover11 = document.getElementById("hover11");
var hover12 = document.getElementById("hover12");
var hover13 = document.getElementById("hover13");
var hover14 = document.getElementById("hover14");
var hover15 = document.getElementById("hover15");
var hover16 = document.getElementById("hover16");
var hover17 = document.getElementById("hover17");
var hover18 = document.getElementById("hover18");
var hover19 = document.getElementById("hover19");
var hover20 = document.getElementById("hover20");
var hover21 = document.getElementById("hover21");
var hover22 = document.getElementById("hover22");
var hover23 = document.getElementById("hover23");
var hover24 = document.getElementById("hover24");
var hover25 = document.getElementById("hover25");
var hover26 = document.getElementById("hover26");
var hover27 = document.getElementById("hover27");
var hover28 = document.getElementById("hover28");
var hover29 = document.getElementById("hover29");
var hover30 = document.getElementById("hover30");


hover1.addEventListener("mouseover", hover);
hover2.addEventListener("mouseover", hover);
hover3.addEventListener("mouseover", hover);
hover4.addEventListener("mouseover", hover);
hover5.addEventListener("mouseover", hover);
hover6.addEventListener("mouseover", hover);
hover7.addEventListener("mouseover", hover);
hover8.addEventListener("mouseover", hover);
hover9.addEventListener("mouseover", hover);
hover10.addEventListener("mouseover", hover);
hover11.addEventListener("mouseover", hover);
hover12.addEventListener("mouseover", hover);
hover13.addEventListener("mouseover", hover);
hover14.addEventListener("mouseover", hover);
hover15.addEventListener("mouseover", hover);
hover16.addEventListener("mouseover", hover);
hover17.addEventListener("mouseover", hover);
hover18.addEventListener("mouseover", hover);
hover19.addEventListener("mouseover", hover);
hover20.addEventListener("mouseover", hover);
hover21.addEventListener("mouseover", hover);
hover22.addEventListener("mouseover", hover);
hover23.addEventListener("mouseover", hover);
hover24.addEventListener("mouseover", hover);
hover25.addEventListener("mouseover", hover);
hover26.addEventListener("mouseover", hover);
hover27.addEventListener("mouseover", hover);
hover28.addEventListener("mouseover", hover);
hover29.addEventListener("mouseover", hover);
hover30.addEventListener("mouseover", hover);

function hover(){
  var hover = this.id;
  var num = hover.slice(5,7);
  console.log("idHover " + num);
  var path = "./assets/graphics/";
  var imgHover = path + num + "img" + "_hover.png";
  document.getElementById(hover).setAttribute("src", imgHover);
}

hover1.addEventListener("mouseleave", mouseLeave);
hover2.addEventListener("mouseleave", mouseLeave);
hover3.addEventListener("mouseleave", mouseLeave);
hover4.addEventListener("mouseleave", mouseLeave);
hover5.addEventListener("mouseleave", mouseLeave);
hover6.addEventListener("mouseleave", mouseLeave);
hover7.addEventListener("mouseleave", mouseLeave);
hover8.addEventListener("mouseleave", mouseLeave);
hover9.addEventListener("mouseleave", mouseLeave);
hover10.addEventListener("mouseleave", mouseLeave);
hover11.addEventListener("mouseleave", mouseLeave);
hover12.addEventListener("mouseleave", mouseLeave);
hover13.addEventListener("mouseleave", mouseLeave);
hover14.addEventListener("mouseleave", mouseLeave);
hover15.addEventListener("mouseleave", mouseLeave);
hover16.addEventListener("mouseleave", mouseLeave);
hover17.addEventListener("mouseleave", mouseLeave);
hover18.addEventListener("mouseleave", mouseLeave);
hover19.addEventListener("mouseleave", mouseLeave);
hover20.addEventListener("mouseleave", mouseLeave);
hover21.addEventListener("mouseleave", mouseLeave);
hover22.addEventListener("mouseleave", mouseLeave);
hover23.addEventListener("mouseleave", mouseLeave);
hover24.addEventListener("mouseleave", mouseLeave);
hover25.addEventListener("mouseleave", mouseLeave);
hover26.addEventListener("mouseleave", mouseLeave);
hover27.addEventListener("mouseleave", mouseLeave);
hover28.addEventListener("mouseleave", mouseLeave);
hover29.addEventListener("mouseleave", mouseLeave);
hover30.addEventListener("mouseleave", mouseLeave);

function mouseLeave(){
  var hover = this.id;
  var num = hover.slice(5,7);
  var path = "./assets/graphics/";
  var imgHover = path + num + "img" + ".png";
  document.getElementById(hover).setAttribute("src", imgHover);
  console.log("idHover " + num);
}


//Função Pods

//Duração do Pod

function tempo() {
  var CountDuration = document.querySelectorAll(".contDuration").length;
  // console.log(CountDuration);

  for (x = 0; x <= CountDuration; x++) {
    if (x == 0) {
      //console.log("zer0");
    } else {
      var temp = document.getElementById("Audio_0" + x);
      var tempo = temp.duration;
      var min = Math.floor(tempo / 60);
      var seg = Math.floor(tempo % 60);
      // console.log(tempo);
      var idDuration = document.getElementById("duration_0" + x);
      idDuration.innerText = "." + min + "min.  " + seg + "sec";
    }
  }
}

var audios = document.getElementsByTagName("audio");
for (var i = 0; i < audios.length; i++) {
  audios[i].addEventListener("loadedmetadata", tempo);
}

//Play e Pause Pod

var playPod1 = document.getElementById("Pod_01");
playPod1.addEventListener("click", PlayPause);

var playPod2 = document.getElementById("Pod_02");
playPod2.addEventListener("click", PlayPause);

var playPod3 = document.getElementById("Pod_03");
playPod3.addEventListener("click", PlayPause);

var playPod4 = document.getElementById("Pod_04");
playPod4.addEventListener("click", PlayPause);

var playPod5 = document.getElementById("Pod_05");
playPod5.addEventListener("click", PlayPause);

var playPod6 = document.getElementById("Pod_06");
playPod6.addEventListener("click", PlayPause);

/*var playPod7 = document.getElementById("Pod_07");
playPod7.addEventListener("click", PlayPause);

var playPod8 = document.getElementById("Pod_08");
playPod8.addEventListener("click", PlayPause);*/

var AudioTag = document.querySelectorAll("audio");

var audioAtual = null; // Armazenar o áudio atualmente reproduzindo

function PlayPause(event) {
  var idValor = this.id;
  var idNun = idValor.slice(3, 6);
  var podSerie = document.getElementById("Audio" + idNun);
  var play = document.getElementById("btnPod" + idNun);
  var statusPlay = play.classList.value;

  if (audioAtual && audioAtual !== podSerie) {
    // Se houver um áudio em reprodução e não for o mesmo que o atual
    audioAtual.pause(); // Pausar o áudio anterior
    var btnAnterior = document.querySelector(".btnPausePod");
    btnAnterior.classList.remove("btnPausePod"); // Mudar o botão anterior para "play"
    btnAnterior.classList.add("btnPlayPod");
  }

  if (statusPlay == "btnPlayPod") {
    podSerie.play();
    console.log("clicouPlay");
    var changeStatus = play.classList;
    changeStatus.toggle("btnPausePod");
    play.classList.remove("btnPlayPod");
    audioAtual = podSerie; // Definir o novo áudio como o áudio atual
  } else {
    podSerie.pause();
    var pause = document.querySelector(".btnPausePod");
    var changeStatus = pause.classList;
    changeStatus.toggle("btnPlayPod");
    pause.classList.remove("btnPausePod");
    audioAtual = null; // Limpar o áudio atual, pois ele foi pausado
  }

  podSerie.addEventListener("ended", readyToPlay);

  function readyToPlay() {
    var pause = document.querySelector(".btnPausePod");
    var changeStatus = pause.classList;
    changeStatus.toggle("btnPlayPod");
    pause.classList.remove("btnPausePod");
    audioAtual = null; // Limpar o áudio atual, pois ele chegou ao fim
  }
}

//Função Cards

$(document).ready(function () {
  var owl = $("#carouselEstilizado");

  owl.owlCarousel({
    loop: true,
    margin: 20,
    nav: false,
    autoWidth: true, // Define a largura automaticamente para os itens
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 3,
      },
    },
  });

  // Adiciona um ouvinte de evento de clique passivo para o botão direito
  $("#btnRight").on("click", { passive: true }, function () {
    owl.trigger("next.owl.carousel"); // Evita o comportamento padrão do clique
  });

  // Adiciona um ouvinte de evento de clique passivo para o botão esquerdo
  $("#btnLeft").on("click", { passive: true }, function () {
    owl.trigger("prev.owl.carousel"); // Evita o comportamento padrão do clique
  });
});

//Função Vídeos Modais

var chooseVideo = document.getElementById("chooseVideo");

var video1 = document.getElementById("video1");
var video2 = document.getElementById("video2");
var video3 = document.getElementById("video3");
var video4 = document.getElementById("video4");
var video5 = document.getElementById("video5");
var video6 = document.getElementById("video6");
var video7 = document.getElementById("video7");
var video8 = document.getElementById("video8");
var video9 = document.getElementById("video9");

video1.addEventListener("click", playVideo1);
function playVideo1() {
  chooseVideo.setAttribute("src", "https://player.vimeo.com/video/942336586?autoplay=1");
}

video2.addEventListener("click", playVideo2);
function playVideo2() {
  chooseVideo.setAttribute("src", "https://player.vimeo.com/video/942337799?autoplay=1");
}

video3.addEventListener("click", playVideo3);
function playVideo3() {
  chooseVideo.setAttribute("src", "https://player.vimeo.com/video/942338145?autoplay=1");
}

video4.addEventListener("click", playVideo4);
function playVideo4() {
  chooseVideo.setAttribute("src", "https://player.vimeo.com/video/942338433?autoplay=1");
}

video5.addEventListener("click", playVideo5);
function playVideo5() {
  chooseVideo.setAttribute("src", "https://player.vimeo.com/video/942338846?autoplay=1");
}

video5.addEventListener("click", playVideo5);
function playVideo5() {
  chooseVideo.setAttribute("src", "https://player.vimeo.com/video/939368997?autoplay=1");
}

video6.addEventListener("click", playVideo6);
function playVideo6() {
  chooseVideo.setAttribute("src", "https://player.vimeo.com/video/942338649?autoplay=1");
}

video7.addEventListener("click", playVideo7);
function playVideo7() {
  chooseVideo.setAttribute("src", "https://player.vimeo.com/video/942341388?autoplay=1");
}

video8.addEventListener("click", playVideo8);
function playVideo8() {
  chooseVideo.setAttribute("src", "https://player.vimeo.com/video/942341736?autoplay=1");
}

video9.addEventListener("click", playVideo9);
function playVideo9() {
  chooseVideo.setAttribute("src", "https://player.vimeo.com/video/942342033?autoplay=1");
}

var close_modal = document.getElementById("close-modal");

close_modal.addEventListener("click", stopVideo);

function stopVideo() {
  var iframeExperts = document.getElementById('chooseVideo');
  var player = new Vimeo.Player(iframeExperts);
    player.pause();
}


//Função Carregar empresas

function empresas() {
  fetch("../assets/process/empresas.php", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((response) => response.json())
    .then((data) => {
      var empresas = document.getElementById("empresas");
      var select = document.createElement("select");
      select.setAttribute("id", "select");
      select.setAttribute(
        "class",
        "form-select ppRegular fontTam5 w-75 ps-5 pe-5 pt-3 pb-3 mt-2 mb-2 mt-md-5 mb-md-5"
      );
      select.setAttribute("aria-label", "Default select example");
      empresas.appendChild(select);

      for (x = 0; x < data.length; x++) {
        if (data[x].marca) {
          var option = document.createElement("option");
          select.appendChild(option);
          option.setAttribute("value", data[x].marca);
          option.innerText = data[x].marca;
        }
      }
    })
    .catch((error) => console.error("Error:", error));
}

empresas();

//Função Limpar Box Select, mostrar Template E-mail e Contador

function enviar() {
  // dados a serem enviados pela solicitação POST
  // Obtenha o valor selecionado do select
  let marca = document.getElementById("select").value;

  // Envie os dados para o PHP via fetch
  fetch("../assets/process/send.php", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ marca: marca }),
  })
    .then((response) => {
      if (!response.ok) {
        throw new Error("Erro ao enviar os dados");
      }
      return response.text();
    })
    .then((data) => {
      // Faça algo com a resposta do PHP, se necessário
      console.log(data);
    })
    .catch((error) => {
      console.error("Erro:", error);
    });

  //Esconder Form e Mostrar Termo
  var boxLaranja = document.getElementById("boxLaranja");
  boxLaranja.setAttribute("style", "display:none");
  var termo = document.getElementById("termo");
  var div = document.createElement("div");
  var img = document.createElement("img");
  div.setAttribute("id", "email");
  div.setAttribute(
    "class",
    "d-flex justify-content-center align-items-center position-relative dnone"
  );
  img.setAttribute("id", "imagem");
  var path = "./assets/templates/";

  var char1 = marca.replace(" ", "_");
  var char2 = char1.replace("&", "_");
  var char3 = char2.replace("’", "");
  marca = char3;

  var carta = marca + ".jpg";
  img.setAttribute("src", path + carta);
  img.setAttribute("class", "w-75");
  div.appendChild(img);
  termo.appendChild(div);

  setTimeout(clearEmail, 5000);

  function clearEmail() {
    //var termo = document.getElementById("termo");
    var email = document.getElementById("email");
    email.setAttribute("style", "display: none!important");

   /* var boxCont = document.createElement("div");
    boxCont.setAttribute("id", "boxCont");
    boxCont.setAttribute(
      "class",
      "d-flex flex-wrap justify-content-center align-content-center box_laranja_number bgLaranja p-5 dnone"
    );
    var number = document.createElement("p");
    number.setAttribute("id", "number");
    number.setAttribute(
      "class",
      "ppRegular fontTam3 text-center colorBlack w-100 m-0"
    );
    var text = document.createElement("text");
    text.setAttribute("class", "ppRegular fontTam5 colorBlack m-0");
    text.innerText = "sent emails";
    boxCont.appendChild(number);
    boxCont.appendChild(text);
    termo.appendChild(boxCont);

    fetch("https://atacamafashionweek.com/assets/process/get_data.php")
      .then((response) => response.json())
      .then((data) => {
        // Receber o número total de linhas
        const totalLinhas = data.total_linhas;
        console.log("Número total de linhas:", totalLinhas);

        // Defina x apenas se houver mais de uma linha
        if (totalLinhas > 0) {
          number.innerText = totalLinhas;

          setTimeout(clearCount, 5000);
          function clearCount() {
            var removeAntigo = document.querySelectorAll(".dnone");
            removeAntigo.forEach(function(element) {
                element.remove();
            });
        
            var boxLaranja = document.getElementById("boxLaranja");
            boxLaranja.setAttribute("style", "display: block!important");
          }

        } else {
          number.innerText = 0;
        }
      })
      .catch((error) => {
        console.error("Erro:", error);
      }); */


     // setTimeout(clearCount, 5000);
     // function clearCount() {
        var removeAntigo = document.querySelectorAll(".dnone");
        removeAntigo.forEach(function(element) {
            element.remove();
        });
    
        var boxLaranja = document.getElementById("boxLaranja");
        boxLaranja.setAttribute("style", "display: block!important");
    //  }

  }

}
