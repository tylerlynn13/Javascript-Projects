function full_Sentence() {                    //sentence string
    var part_1 = "I have ";
    var part_2 = "made this ";
    var part_3 = "into a complete ";
    var part_4 = "sentence.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {                   //slice method
    var Sentence = "All work and no play makes Johny a dull boy.";
    var Section = Sentence.slice(27,33);
    document.getElementById("Slice").innerHTML = Section;
}


function upper_Method() {                   //upper case method
    var text = "good afternoon";
    var result = text.toUpperCase();
    document.getElementById("upper").innerHTML = result;
}

function search_Method() {                          //search method
    var text = "Let's go on the boat!";
    var postition = text.search("go");
    document.getElementById("search").innerHTML = postition;
}

function string_Method() {                  //tostring
    var X = 182;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {                   //prescision method
    var X = 12938.3012987376112;
    document.getElementById("Precision").innerHTML = X.toPrecision(10);
}

function fix_Method() {             //fixed method
    var num = 5.56789;
    var n = num.toFixed();
    document.getElementById("fix").innerHTML = n;
}

function value_Method() {                   //value method
    var text = "Good Afternoon";
    var result = text.valueOf();
    document.getElementById("value").innerHTML = result;
}
