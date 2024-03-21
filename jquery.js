$(document).ready(function(){

    //alert("that's great!!"); 
    $("#applyBtn").click(function(){
      //alert("applybtn");
      var fname = $("#fName").val();
      var lname = $("#lName").val();
      var email = $("#email").val();
      var role = $("#role").val();

      if(fname == "")
      alert("First name is blank");
      if(lname == "")
      alert("Last name is blank");
      if (email == "")
      alert("Email not be empty");
      if (role == "select")
      alert("Please, select one of them!!");

      $("#storeData").hide()

      //set the value to be stored
      $("#storeData").data("fname");

        
      });
  });
 
  