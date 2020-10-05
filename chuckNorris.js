let chuck = {
    firstName: 'Chuck',
    lastName: 'Norris',
    birthDate: new Date('1940-03-10'),
    jokes: [
      'Chuck Norris counted to infinity... Twice.',
      'Chuck Norris is the only man to ever defeat a brick wall in a game of tennis',
    ],
    displayInfo: function () {
      console.log(
        'My name is ' +
          this.firstName +
          ' ' +
          this.lastName +
          ' and I have ' +
          this.jokes.length +
          ' jokes!'
      );
    },
    getAge: function () {
      // TODO
      // Hint: para obtener la hora actual, podemos usar: new Date()
      // Hint: para obtener el valor de birthDate, podemos usar: this.birthDate
      // Hint: podemos restar 2 fechas y obtendremos el número en milisegundos
      // No olvides consultar los métodos getFullYear(), getMonth() y getDate() en la documentación:
      // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date
      let today = new Date();
      let timePassed = today - this.birthDate;
      return Math.floor(timePassed / 31536000000);
    },
    addJoke: function (joke) {
      this.jokes.push(joke);
    },
    getRandomJoke: function () {
      return this.jokes[Math.floor(Math.random() * this.jokes.length)];
    },
  };
  
  chuck.displayInfo();
  
  console.log('getAge', chuck.getAge()); // Debería devolver 80 si estás en 2020
  
  chuck.addJoke('Chuck Norris can divide by zero.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris kills flies with his gun.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  chuck.addJoke('Chuck Norris was once in a knife fight, and the knife lost.');
  console.log('getRandomJoke', chuck.getRandomJoke());
  
  chuck.displayInfo();
  