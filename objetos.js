class Animal {
    constructor(especie, edad, color){
        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.info = `Soy un ${this.especie},
         tengo ${this,edad}, y soy de color ${this.color}`;
    }

//Aquí estamos definiendo los atributos que van a tener los objetos que estoy creando.
//
    verInfo(){
        document.write(this.info + "<br>");
    }

    ladrar(){
        if(this.especie == "perro"){
            document.write("¡Woof!" + "<br>");
        } else{
            document.write("No ladra, porque es un " + this.especie + "<br>");
        }
    }

    maullar(){
        if(this.especie == "gato"){
            document.write("¡Meow!" + "<br>");
        } else{
            document.write("No maulla, porque es un " + this.especie + "<br>");
        }
    }

    cantar(){
        if(this.especie == "loro"){
            document.write("¡Chirp, chirp!" + "<br>");
        } else{
            document.write("No canta, porque es un " + this.especie + "<br>");
        }
    }
}

//Esto que hice es un método, que son las acciones que van a realizar. Los métodos van dentro de las clases.
//Si no está dentro entonces es una función


//A partir de aquí trabajaremos con la herencia, que es tomar las características de otra clase y ponerlas
//en una nueva, haré una clase de perro pero le agregaremos otras cosas. Aquí le agrege la raza

class Perro extends Animal {
    constructor(especie, edad, color, raza){
    super(especie, edad, color)
    this.raza = null;
    }
    set setRaza(newName){
        this.raza = newName;
    }

    get getRaza(){
        return this.raza;
    }
}

//Si queremos modificar un objeto utlizamos los getters y setters para hacerlo




const perro = new Perro("perro", 5, "cafe", "doberman");
const gato = new Animal("gato", 3, "blanco");
const loro = new Animal("loro", 9, "verde");

perro.setRaza = "Beagle";



//document.write(perro.info + "<br>");
//document.write(gato.info + "<br>");
//document.write(loro.info + "<br>");

perro.verInfo();
perro.ladrar();
gato.verInfo();
gato.ladrar();
loro.verInfo();
loro.cantar();

document.write(perro.getRaza);

//Esto último se sustituyó para que fuera más óptimo al utilizar un método más escriciente (verInfo)