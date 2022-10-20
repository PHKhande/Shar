let multiply = function(x, y){
    console.log(x * y);
  }
  
  let multiplyByTwo = multiply.bind(this, 2);
  multiplyByTwo(5);

  let multiplyByThree = multiply.bind(this, 3);
  multiplyByThree(7);

  //Function Closures
  let multi = function(x){
      return function (y){
          console.log(x*y);
      }
  }

  let multiByTwo = multi(2);
  multiByTwo(6);