var add = function(number1, number2) {
    return number1 + number2;
  };
  var number1 = parseInt(prompt("Enter a number:"));
  var number2 = parseInt(prompt("Enter another number:"));
  var result = add(number1, number2);
  alert(result);
  var BMI = function (mass, height){
    return mass / (height *  height);
    }
    var mass= parseInt(prompt("Enter your mass in kg"));
    var height = parseFloat(prompt("Enter your height in cm"));
    var result = BMI (mass, height);
    alert("Your body mass index is :" + " " + result);
    var temperature = function (celsius){
      return (celsius * (9 / 5)) + (32);
      }
      var celsius = parseFloat(prompt("Enter the temperature in celsius"));
      var conversion = temperature(celsius);
      alert("Here is the temperature in fahrenheit :" + " " + conversion);