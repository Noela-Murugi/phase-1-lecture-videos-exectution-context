function myFunction() {
    console.log(this);
  }
  // Simple invocation
  myFunction(); // logs global object (window)

  const myObjet = {
    method() {
      console.log(this);
    }
  };
  // Method invocation
  myObjet.method(); // logs myObject


  const myObject = {
    myMethod(items) {
      console.log(this); // logs myObject
      const callback = () => {
        console.log(this); // logs myObject
      };
      items.forEach(callback);
    }
  };
  myObject.myMethod([1, 2, 3]);


  function Car(color) {
    this.color = color;
  }
  const reCar = new Car('red');
  reCar instanceof Car; // => true

  const Car = (color) => {
    this.color = color;
  };
  const redCar = new Car('red'); // TypeError: Car is not a constructor
