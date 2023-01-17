const gradeElementos = [];
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
const palavrasQueJaForamUsadas = []
const resposta = document.querySelector('#resposta')
const btnResponder = document.querySelector('#responder')

let placar = 0
let palavraSorteada

criaGradeDeElementos();

gradeElementos.forEach(el => el.addEventListener("click", selecionaElemento))




function criaGradeDeElementos() {
    for (let i = 1; i <= 100; i++) {
        const elemento = document.createElement("div");
        elemento.classList.add("elemento");
        elemento.id = "elemento" + i;

        tabuleiro.appendChild(elemento);
        gradeElementos.push(elemento);
    }
}


function selecionaElemento(event){
    const elementoQuadrado = event.target 
    elementoQuadrado.classList.add('elementoSelecionado')
    sorteiaPalavras()
    
    console.log(palavraSorteada)
    
    btnResponder.addEventListener('click', acertouOuErrou)
    
    function acertouOuErrou(){
    if(elementoQuadrado.classList.contains('acertou')){
        return
    }
    if(resposta.value.toLowerCase() === palavraSorteada.portugues)
    {   elementoQuadrado.classList.remove('elementoSelecionado')
        elementoQuadrado.classList.add('acertou')
        palavrasQueJaForamUsadas.push(palavraSorteada)
        pergunta.innerHTML ='ACERTOU, PARABÈNS!'
        marcaPonto()
    } else if(!elementoQuadrado.classList.contains('acertou')){
        pergunta.innerHTML = ` ERROU! RESPOSTA: ${palavraSorteada.portugues}`
        elementoQuadrado.classList.remove('elementoSelecionado')
        elementoQuadrado.classList.remove('acertou')
        elementoQuadrado.classList.add('errou')

    }
    }
    
    
    function marcaPonto(){
        placar ++  
    if(elementoQuadrado.classList.contains('acertou'))
    document.querySelector('.placar').textContent = placar;
    

console.log(placar)
console.log(elementoQuadrado.classList)

}
   
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





