const obtenerInformacion = (clase) => {
    materia = {
        fisica: ["Perez", "Pedro", "Pepito", "Cofla", "Maria"],
        programacion: ["Dalto", "Pedro", "Juan", "Pepito"],
        logica: ["Hernandez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"],
        quimica: ["Rodriguez", "Pedro", "Juan", "Pepito", "Cofla", "Maria"]
    };


//Primero establecemos una funcion que llamaremos "obtenerInformación" con un argumento llamado clase.
//En esa misma funcion ponemos un Array llamado "materia"

    if (materia[clase] !== undefined) {
        return [materia[clase], clase];
    } else {
        return false;
    }
}


//Si la materia existe cuando llamemos a la funcion de "obtenerInformación" entonces procederá a darnos todo el array.
//De otra forma nos dara un false.

const mostrarInformacion = (clase)=>{

//Creamos una funcion que nso devuelve ciertos datos unicamente.

//Si hacemos un document.write con "obtenerInformacion" nos dara todo el array
//Si hacemos un document.write con "mostrarInformación" nos dara ciertos datos.

let informacion = obtenerInformacion(clase);


if (informacion !== false) {
    let profesor = informacion[0][0];
    let alumnos = informacion[0];
    alumnos.shift();
    document.write(`El profesor de  <b>${informacion[1]}</b>: <b style="color:red">${profesor}</b><br>
    Los alumnos son: <b style="color:blue">${alumnos}</b> <br><br> 
    `);
}
}

mostrarInformacion("fisica");
mostrarInformacion("programacion");
mostrarInformacion("logica");
mostrarInformacion("quimica");


//Ahora haremos un método que nos devuelve en cuantas clases está inscrito algun alumno.

const cantidadClases = (alumno) => {
    let contador = 0;
    let clasesPresentes = []; 

    for (const clase in materia) {
        if (materia[clase].includes(alumno)) {
            contador++;
            clasesPresentes.push(clase);
        }
    }
    return {contador, clasesPresentes};
};

// Ejemplo de uso

const alumnoBuscado = "Maria";
const {contador, clasesPresentes} = cantidadClases(alumnoBuscado);

document.write(`${alumnoBuscado} está inscrito en ${contador} clases.
Está cursando las clases ${clasesPresentes.join(', ')}`);
