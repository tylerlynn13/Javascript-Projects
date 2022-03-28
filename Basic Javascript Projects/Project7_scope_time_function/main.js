var X = 10;
  function Add_numbers_1() {          //global var
      document.write(20 + X + "<br>");
  }
  function Add_numbers_2() {
      document.write(X + 100);
  }
  Add_numbers_1() ;
  Add_numbers_2() ;

  function Add_numbers_1() {              //local var
      var X = 10;
      document.write(20 + X + "<br>");
  }
  function Add_numbers_2() {
      document.write(X + 100);
  }
  Add_numbers_1();
  Add_numbers_2();

  function Add_numbers_1() {           //console debug
      var X = 10;
      console.log(15 + X);
  }
  function Add_numbers_2() {
      console.log(X + 100);
  }
  Add_numbers_1();
  Add_numbers_2();


  function get_Date() {
      if (new Date().getHours() < 18) {
        document.getElementById("Greeting").innerHTML = "How are you today?";
      }
  }