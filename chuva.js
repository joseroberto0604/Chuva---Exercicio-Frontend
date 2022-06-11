let enviarTopico = document.querySelector(".section-criarTopico-form")
let topicoEnviado = document.querySelector(".section-discussion-topicoCriado")

function criarTopicoLayout() {
    if (topicoEnviado.style.display == `block`) {
        topicoEnviado.style.display = `None`
    }
    let discussion = document.querySelector(".section-discussion")
    for(i = 0; i<=3; i++) {
        discussion.children[i].style.display = 'None'
    }
    document.querySelector(".section-criarTopico-form").style.display = 'block'
}

function sendTopic() {
    enviarTopico.style.display = 'None'
    topicoEnviado.style.display = 'block'
}

function showAnswers() {
    if(document.querySelector(".section-discussion-answers-mainContainer").style.display == 'none') {
        document.querySelector(".section-discussion-answers-mainContainer").style.display = 'block'
    }
    else {
        document.querySelector(".section-discussion-answers-mainContainer").style.display = 'none'
    }
}
function toggleText(){

    var texto = 
        document.getElementById("texto");
  
    var pontos = 
        document.getElementById("pontos");

    var showMoreText =
        document.getElementById("moreText");

    if (pontos.style.display === "none") {
        texto.style.display = "block"
        showMoreText.style.display = "none";
        pontos.style.display = "inline";
    }

    else {
        texto.style.display = "none"
        showMoreText.style.display = "block";
        pontos.style.display = "none";
    }
}
