function validate()
  {
     var user = document.getElementById("uname");
      var pass= document.getElementById("password");
      if(user.value=="")
          {
              user.style.border="3px solid red";
              document.getElementsByClassName("msg")[0].style.visibility="visible";
              return false;
          }
     else if(pass.value=="")
          {
             pass.style.border="3px solid red";
              document.getElementsByClassName("msg")[3].style.visibility="visible";
              return false;
          }
    
      
  }

