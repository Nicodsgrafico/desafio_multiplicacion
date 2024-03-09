

let ingresaNum = parseInt(prompt("Ingrese un numero del 1 al 20"));

const valida =(numero) =>{

    if(numero < 1 || numero > 20){
        console.log("Número fuera de rango");
        return false;
    }
   return true;
}

const multiplicacion = (numero) => {
    for(let i = 1 ; i <= numero; i++){
        let resultado = i * numero;
        console.log(`${i} x ${numero} = ${resultado}`);
    }
}

const factorial = (numero) => {
    for(let i = 1; i <= numero; i++){
        let resultado = 1;
        for(let j = 1; j <= i; j++){
            resultado *= j;
        }
        console.log(`Factorialde ${i} es: ${resultado}`);
    }
}

let validacion = valida(ingresaNum);

if(validacion){
    multiplicacion(ingresaNum);
    factorial(ingresaNum);
}