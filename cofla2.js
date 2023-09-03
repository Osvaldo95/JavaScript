class cellphone{
    constructor(modelo, color, peso, resolución, cámara, RAM){
        this.modelo = modelo;
        this.color = color;
        this.peso = peso;
        this.resolución= resolución;
        this.cámara = cámara;
        this.RAM = RAM;

        this.boton = false;
        

        this.info = `Soy un celular ${this.modelo}, mi color es ${this.color}, 
        tengo un peso de ${this.peso} gramos, mi resolución es de ${this.resolución} pixeles,
        mi cámara tiene ${this.cámara} megapixeles y mi memoria RAM es de ${this.RAM} gb`;
    }







    

// Aquí he definido qué atributos tendrán los los celulares.

verInfo(){
    document.write(this.info + "<br>");
}

//Esta parte yo la había hecho de manera diferente simplemente agregando texto, pero Dalto 
//lo hizo con booleanos y switches, que esta mejor.

BotonEncender (){
    if(this.boton == false){
        alert("Celular encendido");
        this.boton = true;
    } else {
        alert("celular apagado");
        this.boton = false;
    }
}
Reiniciar (){
    if(this.boton == true){
        alert("Reiniciando");
        this.boton = true;
    } else {
        alert("El celular ya está apagado")
    }
}


/*Prender(){
    if(this.modelo === "Samsung" || this.modelo === "Iphone", this.modelo === "Motorola"){
        document.write("¡Encendiendo" + "<br>" + "<br>");
    } else {
        document.write("No está encendiendo, parece  tu equipo" + this.modelo + "está fallando" + "<br>");
    }
 }

Reiniciar(){
    if(this.modelo === "Samsung" || this.modelo === "Iphone" || this.modelo === "Motorola"){
      document.write("Reiniciando..." + "<br>" + "<br>");
    } else {
        document.write( this.modelo + " no se puede reiniciar, algo anda mal." + "<br>");
    }
}
*/

Foto(){
    if(this.modelo == "Samsung" || this.modelo === "Iphone"){
        alert("Snap...");
    } else {
        alert("La cámara de tu " + this.modelo + " tiene un problema, no es posible tomar fotos en este momento" + "<br>" + "<br>");
    }
}

Video(){
    if(this.modelo == "Samsung" || this.modelo === "Iphone" || this.modelo === "Motorola" || this.modelo === "Xiaomi"){
       alert("Empezando grabación en 3...2...1...");
    } else {
        alert("No es posible grabar en este momento, libera almacenamiento" + "<br>");
    }
}

cellphoneInfo(){
    return `
    Color: <b>${this.color}</b> </br> 
    Peso: <b>${this.peso}</b> </br> 
    Resolución: <b>${this.resolución}</b> </br> 
    Cámara: <b>${this.cámara}</b> </br> 
    RAM: <b>${this.RAM}</b> </br> 
    `;
}

}

const Samsung = new cellphone ("Samsung", "negro", 600, 1080, 8, 8);
const Iphone = new cellphone ("Iphone", "blanco", 500, 1440, 12, 12);
const Motorola = new cellphone ("Motorola", "gris", 700, 720, 8, 8);
const Xiaomi = new cellphone ("Xiaomi", "azul", 650, 720, 8, 8);


/*Samsung.verInfo();
Samsung.Video();


Iphone.verInfo();
Iphone.Foto();


Motorola.verInfo();
//Motorola.Foto();

Xiaomi.verInfo();
 Xiaomi.Reiniciar();

 */

Samsung.BotonEncender();
Samsung.Video();
Samsung.Foto();
Samsung.Reiniciar();
Samsung.BotonEncender();

Samsung.verInfo();
Iphone.verInfo();
Motorola.verInfo();
Xiaomi.verInfo();
//Herencia agrgando ALTA GAMA


document.write(`
${Samsung.cellphoneInfo()} <br>
${Iphone.cellphoneInfo()} <br>
${Motorola.cellphoneInfo()} <br>
${Xiaomi.cellphoneInfo()} <br>
`);

