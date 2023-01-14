const elementos = [];
const tabuleiro = document.querySelector('.tabuleiro')

const palavrasEmIngles =   [{"ingles": "the", "portugues": "o/a"},
{"ingles": "be", "portugues": "ser/estar"},
{"ingles": "to", "portugues": "para"},
{"ingles": "of", "portugues": "de"},
{"ingles": "and", "portugues": "e"},
{"ingles": "a", "portugues": "um/uma"},
{"ingles": "in", "portugues": "em"},
{"ingles": "that", "portugues": "que"},
{"ingles": "have", "portugues": "ter"},
{"ingles": "I", "portugues": "eu"},
{"ingles": "it", "portugues": "isso"},
{"ingles": "for", "portugues": "para"},
{"ingles": "not", "portugues": "não"},
{"ingles": "on", "portugues": "em"},
{"ingles": "with", "portugues": "com"},
{"ingles": "he", "portugues": "ele"},
{"ingles": "as", "portugues": "como"},
{"ingles": "you", "portugues": "você/tu"},
{"ingles": "do", "portugues": "fazer"},
{"ingles": "at", "portugues": "em"},
{"ingles": "this", "portugues": "isto"},
{"ingles": "but", "portugues": "mas"},
{"ingles": "his", "portugues": "dele"},
{"ingles": "by", "portugues": "por"}]

const pergunta = document.querySelector('.pergunta')

const todosElementos = document.querySelectorAll('elemento')

const palavrasQueJaForamUsadas = []

const resposta = document.querySelector('#resposta')
const responder = document.querySelector('#responder')

let palavraSorteada

for (let i = 1; i <= 100; i++) {
    const elemento = document.createElement("div")
    elemento.classList.add("elemento")
    elemento.id = "elemento" + i

    tabuleiro.appendChild(elemento)
    elementos.push(elemento)
}

elementos.forEach(el => el.addEventListener("click", pintaBorda))


function pintaBorda(event){
    resposta.value = ''
   const elemento = event.target 
   const borda = event.target.getBoundingClientRect()
   const x = event.clientX
   const y = event.clientY
    
   

   if (x > borda.right -10 && x < borda.right) {
    elemento.classList.add("bordaDireita")
    sorteiaPalavras()
   }else if (x < borda.left + 10 && x > borda.left) {
    elemento.classList.add("bordaEsquerda")
    sorteiaPalavras()
   } else if (y > borda.top && y < borda.top + 10) {
    elemento.classList.add("bordaDeCima")
    sorteiaPalavras()
   } else if (y > borda.bottom - 10 && y < borda.bottom) {
    elemento.classList.add("bordaDeBaixo")
    sorteiaPalavras()
   } 

   responder.addEventListener("click", function(){
   
    if(palavraSorteada.portugues.toLowerCase().includes(resposta.value.toLowerCase())){
        pergunta.innerHTML ='ACERTOU MISERAVI!'
        
        if (elemento.classList.contains("bordaDireita")) {
            elemento.classList.remove("bordaDireita")
            elemento.classList.add("bordaDireitaVerde")
        }else if (elemento.classList.contains("bordaEsquerda")) {
            elemento.classList.remove("bordaEsquerda")
            elemento.classList.add("bordaEsquerdaVerde")
        }else if (elemento.classList.contains("bordaDeCima")) {
            elemento.classList.remove("bordaDeCima")
            elemento.classList.add("bordaDeCimaVerde")
        }else if (elemento.classList.contains("bordaDeBaixo")) {
            elemento.classList.remove("bordaDeBaixo")
            elemento.classList.add("bordaDeBaixoVerde")
        }
    }else {
        
        pergunta.innerHTML = ` ERROU! RESPOSTA:${palavraSorteada.portugues}`}

        if (elemento.classList.contains("bordaDireita")) {
            elemento.classList.remove("bordaDireita")
            elemento.classList.add("bordaDireitaVermelho")
        }else if (elemento.classList.contains("bordaEsquerda")) {
            elemento.classList.remove("bordaEsquerda")
            elemento.classList.add("bordaEsquerdaVermelho")
        }else if (elemento.classList.contains("bordaDeCima")) {
            elemento.classList.remove("bordaDeCima")
            elemento.classList.add("bordaDeCimaVermelho")
        }else if (elemento.classList.contains("bordaDeBaixo")) {
            elemento.classList.remove("bordaDeBaixo")
            elemento.classList.add("bordaDeBaixoVermelho")
        }
    })


}
   
  

function sorteiaPalavras() {
   if(palavrasEmIngles.length === 0){
    pergunta.innerHTML = "Todas as palavras foram usadas!"
    return
   }
   
    palavraSorteada = palavrasEmIngles[Math.floor(Math.random() * palavrasEmIngles.length)]
    

    pergunta.innerHTML = palavraSorteada.ingles
    
    palavrasQueJaForamUsadas.push(palavraSorteada)
    let numeroIndex = palavrasEmIngles.indexOf(palavraSorteada)
    palavrasEmIngles.splice(numeroIndex, 1)

}







