function my_Dictionary(){
    var Animal = {
        Species:"Dog",
        Color:"Black",
        Breed:"Lab",
        Age:2,
        Sound:"Bark!"
    };
    document.getElementById("Dictionary").innerHTML = Animal.Sound;
}