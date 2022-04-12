function validateForm() {
    var X = document.forms["myForm"]["fname"].value;
    if(X == "") {
        alert("Name must be filled out");
        return false;
    }
}