document.write(typeof "Word");
document.write(typeof 7)
document.write("10" + 5);

function my_Function() {
    document.getElementById("Test").innerHTML = 0/0
}

document.getElementById("Test").innerHTML = isNaN ('This is a string');

document.getElementById("Test").innerHTML =isNaN ('003');

function d_Function() {
    document.getElementById("Example").innerHTML = isFinite ('123')
}
function s_Function() {
    document.getElementById("Example2").innerHTML = Number.isFinite ('85')
}

