document.write(typeof "Word");
document.write(typeof 7);
document.write("10" + 5);


function my_Function() {
    document.getElementById("Test").innerHTML = 0/0
}

document.getElementById("Test").innerHTML = isNaN ('This is a string');  //NaN

document.getElementById("Test").innerHTML =isNaN ('003');

function d_Function() {
    document.getElementById("Example").innerHTML = isFinite ('123')    //infinite
}
function s_Function() {
    document.getElementById("Example2").innerHTML = Number.isFinite ('85')  //-infinite
}

function b_Function() {
    document.getElementById("T").innerHTML = Boolean (10 > 2);  //Boolean
}

function bl_Function() {
    document.getElementById("F").innerHTML = Boolean (10 < 2);    //Boolean
}

function double_Function() {
    document.getElementById("D").innerHTML = (10 == 10); 
}

function dd_Function() {
    document.getElementById("DD").innerHTML = (3 == 11);
}
console.log(4 + 7);

function three_Function() {
    let W = 13;
    let T = 17;
    document.getElementById("Three").innerHTML = (W===T);
}

function three2_Function() {
    let X = 82;
    let Y = "82";
    document.getElementById("three2").innerHTML = (X===Y);
}


function and_Function() {            //and function
    document.getElementById("and").innerHTML = (10 > 3 && 14 > 7);
}

function andf_Function() {
    document.getElementById("andf").innerHTML = (10 < 3 && 14 < 7);
}

function or_Function() {
    document.getElementById("or").innerHTML = (10 < 3 || 14 < 7);
}

function or2_Function() {
    document.getElementById("or2").innerHTML = (10 > 3 || 14 > 7);
}
