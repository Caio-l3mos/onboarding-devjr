/*  Exercícios Implementados
1. Números pares entre 1 e 100  
2. Soma dos elementos de um array  
3. Verificação de palíndromo  
4. Cálculo de fatorial  
5. Geração de números primos até 100  */


 /*Exercícios Implementados
1. Números pares entre 1 e 100  
2. Soma dos elementos de um array  
3. Verificação de palíndromo  
4. Cálculo de fatorial  
5. Geração de números primos até 100  */




/*  1 - Função que verifica se um número é par*/
function numPar (){
     pares=[]
    for (var i = 1; i<100; i++){
        resto = i%2
        if( resto == 0 )
        { pares.push(i)}
    }
    console.log(pares)
}
















/*Verifica se um número é primo*/
function ehprimo(num){
    
    if(num <=1) return false;

    for(let i = 2; i <=Math.sqrt(num); i++){
        if(num % i === 0) 
            
        return false;
    }
    return true


 
}


/* 2 - Soma dos elementos de um array*/
function somaArray(){
let elementos =[2,23,10]
let soma =0;
for(let i = 0; i<elementos.length; i++){
   soma += elementos[i];

   

}

 console.log(soma)
}


/* 3 - Verificação de palindromo*/

function ehPalindromo(text){

    const palavra = text.toLowerCase();


    const invertida = palavra.split('').reverse().join('')

    if (palavra === invertida){
        console.log(`a palavra ${palavra} é um palindromo`)
    }else{
        console.log(`a palavra ${palavra} não é um palindromo`)
    }





}


/* 4 - Calculo fatorial*/ 

// Função que calcula o fatorial de um número
function fatorial(num) {
  if (num < 0) {
    return "Não existe fatorial de número negativo";
  }

  let resultado = 1;
  for (let i = 1; i <= num; i++) {
    resultado *= i;
  }

  return resultado;
}




















/*5 - Lista os numeros primos até 100*/
function listaPrimos(){
    const primos = [];
    for(let i = 2; i <100; i++){
        if (ehprimo(i))
        {
            primos.push(i)
        }
    }
    return primos;
}
const resultados = listaPrimos()
