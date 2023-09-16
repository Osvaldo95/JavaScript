function raizCuadrada(numero){
    let res = Math.sqrt(numero);
    return res
    }

let resultado = raizCuadrada(9);
document.write(resultado)
document.write("<br>");


function raizCubica(numero){
    let res = Math.cbrt(numero);
    return res
}

let resultado2 = raizCubica(27);
document.write(resultado2)
document.write("<br>");

function potencia (num, num2){
    let res = num * num2;
    return res
}

let resultado3 = potencia (3, 5);
document.write(resultado3)
document.write("<br>");