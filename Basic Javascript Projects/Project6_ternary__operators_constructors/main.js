function Ride_Function() {                           //object oriented
    var Height, Can_ride;
    Height = document.getElementById("Height").value;
    Can_ride = (Height < 52) ? "You are too short":"You are tall enough";
    document.getElementById("Ride").innerHTML = Can_ride + " to ride.";
}

function Vote_Function() {                       //object oriented
    var Age, Can_vote;
    Age = document.getElementById("Age").value;
    Can_vote = (Age < 18) ? "You are too young":"You are old enough";
    document.getElementById("Vote").innerHTML = Can_vote + " to vote.";
}

function Vehicle(Make, Model, Year, Color) {
    this.Vehicle_Make = Make;
    this.Vehicle_Model = Model;
    this.Vehicle_Year = Year;
    this.Vehicle_Color = Color;
}

var Jack = new Vehicle("Dodge", "Viper", 2020, "Red");
var Emily = new Vehicle("Jeep", "Trail Hawk", "2019", "White and Black");
var Erik = new Vehicle("Ford", "Pinto", 1971, "Mustard");
function myFunction() {
    document.getElementById("Keywords_and_Constructors").innerHTML =
    "Erik drives a " + Erik.Vehicle_Color + "-colored" + Erik.Vehicle_Model +
    " manufactured in " + Erik.Vehicle_Year;
}

function key_Functions() {                   //keyword
    var str = "Button";
    document.getElementById("New_and_This").innerHTML = str; 
}



function Person(first, last, age, eye) {                  //object oriented
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
  }

  var Tyler = new Person("Tyler", "Stamper", 21, "hazel");

  function me_Function() {
    document.getElementById("me").innerHTML =
    "My age is " + Tyler.age ; 

var X = true

  }
  
  function count_Function() {              //nested function
      document.getElementById("nested").innerHTML = Count();
      function Count() {
          var Starting_point = 9;
          function Plus_one() {Starting_point += 1;}
          Plus_one();
          return Starting_point;
      }
  }


  