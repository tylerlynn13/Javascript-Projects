 var text = "";
var i = 0;
while (i < 10) {
    text += "<br>" + i;
    i++;
}
function loop_Function() {

document.getElementById("while").innerHTML = text;

}

var text = "Hello";
var length = text.length;
function length_Function() {
    document.getElementById("length").innerHTML = length;

}

var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];
var Content = "";
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content += Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content ;
    
}

function cat_pics(){
    var Cat_Picture = [];
    Cat_Picture[0] = "sleeping";
    Cat_Picture[1] = "playing";
    Cat_Picture[2] = "eating";
    Cat_Picture[3] = "purring";
    document.getElementById("Cat").innerHTML = "In  this picture, the cat is " +
        Cat_Picture[2] + ".";
}

function constant_function() {
    const Musical_Instrument = {type:"guitar", brand:"fender", color:"black"};
    Musical_Instrument.color = "blue";
    Musical_Instrument.price = "$900";
    document.getElementById("Constant").innerHTML = "The cost of the" +
    Musical_Instrument.type + " was " + Musical_Instrument.price;
}

function l_Function() {
    let X = 13;
document.getElementById("l").innerHTML = X;

}

function my_Function(name) {
    return "Hello" + name;
    document.getElementById("pie").innerHTML = my_Function(name) ;
}


    let car  = {
    make: "Dodge",
    model: "Viper",
    year: "2021",
    color: "blue",
    description : function() {

        return "The car is a " + this.year + this.color + this.make + this.model;
    }

};
document.getElementById("Car_Objects").innerHTML = car.description();


function br_Fucntion() {
    let text = "";
    for (let i = 0; i < 10; i++) {
        if (i === 3) { break; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("br").innerHTML = text;
}


function con_Function() {
    var text = "";
    for (var i = 0; i < 10; i++) {
        if (i === 3) { continue; }
        text += "The number is " + i + "<br>";
    }
    document.getElementById("con").innerHTML = text;
}