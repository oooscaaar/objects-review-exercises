# Objects Review Exercises

## Ejercicio 1: Chuck Norris - Repaso de la keyword THIS

### Dado el siguiente objeto literal, escribe los métodos .getAge(), .addJoke() y .getRandomJoke()

```js
let chuck = {
  firstName: 'Chuck',
  lastName: 'Norris',
  birthDate: new Date('1940-03-10'),
  jokes:[
    'Chuck Norris counted to infinity... Twice.',
    'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis',
  ],
  displayInfo: function() {
    console.log('My name is ' + this.firstName + ' ' + this.lastName + ' and I have ' + this.jokes.length + ' jokes!')
  },
  getAge: function() {
    // TODO
    // Hint: para obtener la hora actual, podemos usar: new Date()
    // Hint: para obtener el valor de birthDate, podemos usar: this.birthDate
    // Hint: podemos restar 2 fechas y obtendremos el número en milisegundos

    // No olvides consultar los métodos getFullYear(), getMonth() y getDate() en la documentación:

    // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
  },
  addJoke: function(){
    // TODO (no es necesario que la función devuelva algo)
  },
  getRandomJoke: function() {
    // TODO
  },
}

chuck.displayInfo();

console.log('getAge', chuck.getAge()) ; // Debería devolver 80 si estás en 2020

chuck.addJoke('Chuck Norris can divide by zero.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris kills flies with his gun.');
console.log('getRandomJoke', chuck.getRandomJoke());
chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
console.log('getRandomJoke', chuck.getRandomJoke());

chuck.displayInfo();
```

## EJERCICIO 2: Monopoly - Repaso de Classes

### Monopoly

Crearemos un juego Monopoly muy simple con 16 casillas y 3 jugadores para practicar objetos.

#### - Object Literals

Si utilizamos el enfoque de objeto literal, que es el enfoque más simple que hemos visto hasta ahora, podríamos simular el juego de la siguiente manera:

```js

// Cada square representa el dinero ganado cuando el jugar llega a él. Por ejemplo:

// - Si un usuario está en la posición 0, el dinero se incrementa por 100€
// - Si un usuario está en la posición 4, el dinero disminuye por 40€

const squares = [100,-10,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10]

// --- Inicialización ---

let player1 = {
  name: 'Joaquim',
  color: 'red',
  position: 0,
  cash: 1000
}

let player2 = {
  name: 'Maxence',
  color: 'blue',
  position: 0,
  cash: 1000
}

let player3 = {
  name: 'Mostafa',
  color: 'black',
  position: 0,
  cash: 1000
}

// --- Turno de Player 1 ---
// El dado es un entero random entre 1 y 6

var dice = 1+Math.floor(6*Math.random());

// La posición está siempre entre 0 and 15 (el número de casilleros - 1)

player1.position = (player1.position + dice) % squares.length;

// El dinero se actualiza en base al valor del casillero y la posición de player1.position

player1.cash += squares[player1.position];

// Si el jugador no tiene más dinero, estará fuera de juego

if (player1.cash < 0) {
  console.log(`Game over for ${player1.name}.`);
}

// --- Turno de Player 2 --- 
var dice = 1+Math.floor(6*Math.random());
player2.position = (player2.position + dice) % squares.length;
player2.cash += squares[player2.position];
if (player2.cash < 0) {
  console.log(`Game over for ${player2.name}.`);
}

// --- Turno de Player 3 --- 
var dice = 1+Math.floor(6*Math.random());
player3.position = (player3.position + dice) % squares.length;
player3.cash += squares[player3.position];
if (player3.cash < 0) {
  console.log(`Game over for ${player3.name}.`);
}

// --- Mostramos la información  ---
console.log(player1);
console.log(player2);
console.log(player3);
```

**ventajas** de este método:

 1. es conveniente y sencillo
 2. muy flexible en una declaración
 3. puedes crearlos en cualquier punto de tu código y usarlos sin mucha configuración previa

Sin embargo, también tiene algunas **desventajas**:

1. No tenemos una forma rápida de crear el objeto. Es decir, siempre tenemos que especificar todas las propiedades, lo que significa una gran cantidad de copias pegadas y cambios menores de un objeto a otro.

2. No tenemos ningún método para nuestros objetos. Sería bueno tener un método player.move() en lugar de escribir el mismo código una y otra vez.

#### - Métodos de objeto y *this* keyword

Cambiemos nuestro código para agregar 2 métodos: move() y displayInfo()

```js
 
let squares = [100,-10,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10]

let player1 = {
  name: 'Joaquim',
  color: 'red',
  position: 0,
  cash: 1000,
  move: function() {
    let dice = 1+Math.floor(6*Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  },
  displayInfo: function() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

let player2 = {
  name: 'Maxence',
  color: 'blue',
  position: 0,
  cash: 1000,
  move: function() {
    let dice = 1+Math.floor(6*Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  },
  displayInfo: function() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

let player3 = {
  name: 'Mostafa',
  color: 'black',
  position: 0,
  cash: 1000,
  move: function() {
    let dice = 1+Math.floor(6*Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  },
  displayInfo: function() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

// --- Turno 1  ---
player1.move();
player2.move();
player3.move();

// --- Turno 2  ---
player1.move();
player2.move();
player3.move();

// --- Display info  ---
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();
```

Analicemos el nuevo código y compáremoslo con el anterior.

Como podemos ver, el código es más legible.

Nuestros objetos player1, player2 y player3 ahora tienen 2 propiedades adicionales: move y displayInfo. Ambas son funciones, llamadas métodos, y tienen una nueva keyword: *this*.
En este contexto, *this* se refiere al objeto actual. Para player1, dentro de displayInfo, this.name === player1.name === Joaquim.


##### AL INVOCAR UN MÉTODO SOBRE UN OBJETO, *THIS* SE CONVIERTE EN EL OBJETO MISMO.

##### LA KEYWORD *THIS* SE REFIERE AL OBJETO ACTUAL

Veamos: aprendimos la manera de no repetir el mismo código tanto como lo usamos al principio (la primera versión de nuestro juego Monopoly) pero aún así hay un código bastante repetitivo y vemos un patrón aquí: todos nuestros objetos tienen las mismas propiedades (keys) con diferentes valores.

La pregunta ahora es: ¿hay una manera de crear un solo objeto y poder reutilizarlo como un modelo para todos los demás (no importa cuántos de ellos)?

Y aquí es donde comienza nuestro verdadero viaje de OOP: la respuesta es absolutamente sí

Para crear una clase, todo lo que necesitamos es la keyword class seguida de un identificador (un nombre que le dimos a la clase) y un bloque de código entre las llaves {}.

Vamos a refactorizar nuestro código anterior presentando una clase Player.

```js
let squares = [100,-10,0,0,-40,-10,-10,5,0,-10,-50,-10,0,0,-50,-10]

// Creación de la clase
class Player {

  // El constructor es el método llamado con la keyword `new`
  constructor(name, color) {
    // escribe aquí tu código
  }
  
  // Método move
  move() {
    // escribe aquí tu código
  }
  
  // Método displayInfo
  displayInfo() {
    // escribe aquí tu código
  
}

// --- Inicialización de los jugadores ---
let player1 = new Player('Joaquim', 'red');
let player2 = new Player('Maxence', 'blue');
let player3 = new Player('Mostafa', 'black');

// --- Turno 1  ---
player1.move();
player2.move();
player3.move();

// --- Turno 2  ---
player1.move();
player2.move();
player3.move();

player1.displayInfo();
player2.displayInfo();
player3.displayInfo();
```

## EJERCICIO 3: Rectángulos

Crea una clase *Rectangle* con:

- Una propiedad side1
- Una propiedad side2
- Un método constructor(side1,side2)
- Un método CalculatePerimeter()
- Un método CalculateArea()

Cree una clase *Square* que extienda de Rectangle con:

- Una propiedad side (igual al ancho y alto)
- Un método constructor(side)
- Para los métodos podríamos sobreescribir CalculatePerimeter() y CalculateArea()

```js
class Rectangle {
  // TODO
}

class Square extends Rectangle {
  // TODO
}

let r1 = new Rectangle(6,7)
console.log('Perimeter of r1 =', r1.calculatePerimeter()) // 26
console.log('Area of r1 =', r1.calculateArea()) // 42

var s1 = new Square(5)
console.log('Perimeter of s1 =', s1.calculatePerimeter()) // 20
console.log('Area of s1 =', s1.calculateArea()) // 25

var s2 = new Square(10)
console.log('Perimeter of s2 =', s2.calculatePerimeter()) // 40
console.log('Area of s2 =', s2.calculateArea()) // 100
```