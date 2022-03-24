function my_Dictionary(){   //key-pair value
    var Animal = {
        Species:"Bird",
        Color:"Multi",
        Breed:"Parakeet",
        Age:2,
        Sound:"Chirp"
    };
    delete Animal.Sound;  //delete function
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}

document.write(typeof "Word");