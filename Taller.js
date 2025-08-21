
// 1. Tipos de Variables (var, let, const)
console.log("1. Tipos de Variables (var, let, const)");


// Ejercicio 1.1
var nombre = "Sofi";
console.log(nombre); // Sofi
nombre = "Nicole";
console.log(nombre); // Nicole


/* Ejercicio 1.2
const nombre2 = "Sofi";
console.log(nombre);
const nombre2 = "Samuel"; Error: no se puede reasignar ya que conts como dice su nombre es constante
*/


/* Ejercicio 1.3
if (false) {
  let edad = 20;
}
console.log(edad); Error: edad no existe fuera del bloque

*/







// 2. Tipos de Datos

console.log("2. Tipos de Datos");


// Ejercicio 2.1
let cosa = "Peluche";   
let num = 9;         
let operador = false;    
let descuento = null;       
let si;                  

console.log(typeof cosa);
console.log(typeof num);
console.log(typeof operador);
console.log(typeof descuento);
console.log(typeof si);



// Ejercicio 2.2
let persona = {
  nombre: "Isabella",
  edad: 20
};

let hobbies = ["Pintar", "Diseñar", "Dormir"];

console.log(typeof persona); 
console.log(typeof hobbies); //Un array no deja de ser un objeto, ambos son objetos que almacenan info









// 3. Conversión de Tipos
console.log("3. Conversión de Tipos");


// 3.1 
let numero1 = 10;  
let numero2 = "5";    

console.log(numero1 + numero2); // Se concatena
console.log(numero1 * numero2); // Convierte el String en numero

// 3.2 
console.log(String(25));    // "25"   string
console.log(Number("100")); // 100    number
console.log(Boolean(""));   // false  string vacío es falso
console.log(Boolean("hola")); // true   cualquier string no vacío es verdadero









// 4. Operadores, Condicionales, Ciclos y Excepciones
console.log("4. Operadores, Condicionales, Ciclos y Excepciones");


// 4.1
console.log(10 === "10"); // Compara tipo y valor 
console.log(10 == "10");  // Compara valor

// 4.2
let numm = 16;
if (numm % 2 == 0) {
  console.log("La edad es par");
} else {
  console.log("La edad es impar");
}

// 4.3
for (let i = 1; i <= 5; i++) {
  console.log(i);
}

// 4.4
try {
  throw new Error("Este es un error.");
} catch (error) {
  console.log(error.message);
}










// 5. Funciones y Arrow Functions
console.log(" 5. Funciones y Arrow Functions");


//5.1
function multiplicar(a, b) {
  return a * b;
}
console.log(multiplicar(4, 5)); // 20

// 5.2
const multiArrow = (a, b) => a * b;
console.log(multiArrow(4, 5)); // 20

//5.3
const saludar = () => "¡Hola a todos!";
console.log(saludar());










// 6. Scope y Contextos
console.log(" 6. Scope y Contextos");


//6.1
let global = "Rosa";

function mostrarColores() {
  let local = "Verde";
  console.log(global);      
  console.log(local); 
}

mostrarColores();

console.log(global);   
//console.log(local); Esta variable no existe por fuera de la función, da error


// 6.2
let coche = {
  marca: "Toyota",
  mostrarMarca: function() {
    console.log("El coche es de marca " + this.marca);
  }
};

coche.mostrarMarca();
//.this se refiere al objeto actual en el que se ejecuta el codigo, o sea coche








// 7. Arrays
console.log(" 7. Arrays");


//  7.1 
let frutas = ["Manzana", "Banana"];
console.log(frutas); 

frutas.push("Naranja");
console.log(frutas); 

frutas.pop();
console.log(frutas); 


// 7.2 


let numeros = [1, 2, 3];
console.log("Original:", numeros);

//num = cada elemento del array, lo va recorriendo

let dobles = numeros.map(num => num * 2);
console.log("(x2):", dobles);

let mayores = numeros.filter(num => num > 1);
console.log("(>1):", mayores);


// 7.3 
let frutas1 = ["Manzana", "Banana", "Naranja"];

frutas1.forEach(f => console.log(f));

console.log(frutas1.find(f => f === "Banana"));
console.log(frutas1.findIndex(f => f === "Manzana"));








//8. Objetos y Clases
console.log(" 8. Objetos y Clases");


// 8.1
let libro = {
  titulo: "Cien años de soledad",
  autor: "Gabriel García Márquez",
  mostrarInfo: function() {
    console.log("Título: " + this.titulo + ", Autor: " + this.autor);
  }
};

libro.mostrarInfo();


//8.2
class Animal {
  constructor(nombre) {
    this.nombre = nombre;
  }

  saludar() {
    return "Hola, soy " + this.nombre;
  }
}

let miAnimal = new Animal("Misifus");
console.log(miAnimal.saludar());


// 8.3
class Perro extends Animal {
  constructor(nombre, raza) {
    super(nombre); // llama al constructor de Animal que ya tiene definido el parametro nombre
    this.raza = raza;
  }

  saludar() {
    return "Hola, soy " + this.nombre + " y soy un " + this.raza;
  }
}

let miPerro = new Perro("Firulais", "doberman");
console.log(miPerro.saludar());
