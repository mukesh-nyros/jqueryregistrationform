






$(document).ready(function(){				//ready function start
/*UserName jquery validation*/
  $("#main p").click(function(){
    $("#main2").slideToggle("slow");

$("#uname").blur(function(){
var username=$("#uname").val();
var Lenuname=$("#uname").val().length;
var Reguname=/^[a-zA-Z][a-zA-z0-9]{5,8}$/;
if($("#uname").val() == "" )
{

   $("#usrname").text("UserName should not be empty").addClass("red");
   $("#uname").focus();
   return false;
}

else if($("#uname").val().length<4 || $("#uname").val().length>8 )
{
   $("#usrname").text("enter alphanumeric characters of length {5-8}").addClass("red");
   $("#uname").focus();
   return false;
}
else (username.match(Reguname))
{
  $("#usrname").text("validated").addClass("green").removeClass("red");
   return true;
}
});


/*Password jquery validation*/
$("#pwd").blur(function(){
var password=$("#pwd").val();
var Lenpwd=$("#pwd").val().length;
var Regpwd=/^[a-zA-Z0-9]{6}$/;
if($("#pwd").val() == "" )
{
   $("#pswd").text("Password should not be empty").addClass("red");
   $("#pwd").focus();
   return false;
}


else if($("#pwd").val().length!=6)
{
   $("#pswd").text("enter alphanumeric characters of length {6}").addClass("red");
   $("#pwd").focus();
   return false;
}

else (password.match(Regpwd))
{
   $("#pswd").text("validated").addClass("green").removeClass("red");
   return true;
}




});

/*firstname jquery validation*/


$("#fname").blur(function(){
var firstname=$("#fname").val();
var Lenfname=$("#fname").val().length;
var Regfname=/^[a-zA-Z]{3,7}$/;
if($("#fname").val() == "" )
{

   $("#firstname").text("FirstName should not be empty").addClass("red");
   $("#fname").focus();
	return false;
}

else if($("#fname").val().length<2 || $("#fname").val().length>8 )
{
  $("#firstname").text("enter only characters of length {3-7}").addClass("red");
  $("#fname").focus();
  return false;
}
else (firstname.match(Regfname))
{
   $("#firstname").text("validated").addClass("green").removeClass("red");
   return true;
}
});


/*lastname jquery validation*/

$("#lname").blur(function(){
var lastname=$("#lname").val();
var Lenlname=$("#lname").val().length;
var Reglname=/^[a-zA-Z]{3,15}$/;
if($("#lname").val() == "" )
{
   $("#lastname").text("LastName should not be empty").addClass("red");
   $("#lname").focus();
   return false;
}

else if($("#lname").val().length<2 || $("#lname").val().length>16 )
{
   $("#lastname").text("enter only characters of length {3-15}").addClass("red");
   $("#lname").focus();
   return false;
}
else (lastname.match(Reglname))
{  
$("#lastname").text("validated").addClass("green").removeClass("red");
   return true;
}
});

/*Profile Picture*/
$("#pic").blur(function(){

var picture=$("#pic").val();
    var pic1=/.gif/;
    var pic2=/.jpg/;
    var pic3=/.jpeg/;
    var pic4=/.png/;


    if(picture == null || picture == "")
   {
       $("#ppict").text("Upload your picture").addClass("red");
      $("#pic").focus();
      return false;
   } 

   else if(picture.match(pic1)||picture.match(pic2) || picture.match(pic3)|| picture.match(pic4))
   {
     $("#ppict").text("Picture uploaded").addClass("green").removeClass("red");
     return true;
   }
   else
   {

   $("#ppict").text("upload only jpeg or jpg or png or gif format").addClass("red");
     $("#pic").focus();
    return false;
   }

});


/*day jquery validation*/

$("#day").blur(function(){
if($("#day").val() == "" )
{
   $("#dobyear").text("Please fill Date of Birth completely").addClass("red");
   $("#day").focus();
   return false;
}


else
{  
$("#dobyear").text("");
   return true;
}
});


/*month jquery validation*/

$("#month").blur(function(){
if($("#month").val() == "" )
{
   $("#dobyear").text("Please fill Date of Birth completely").addClass("red");
   $("#month").focus();
   return false;
}
else 
{  
$("#dobyear").text("");
   return true;
}
});


/*year jquery validation*/

$("#year").blur(function(){
if($("#year").val() == "" )
{
   $("#dobyear").text("Please fill Date of Birth completely").addClass("red");
   $("#year").focus();
   return false;
}
else 
{  
$("#dobyear").text("D.O.B selected").addClass("green").removeClass("red");
   return true;
}
});

/*countries jquery validation*/

$("#countries").blur(function(){
var contry=$("#countries").val();
if (contry == 0)
{
   $("#cont").text("select countries").addClass("red");
   $("#countries").focus();
   return false;
}
else 
{  
$("#cont").text("countries selected").addClass("green").removeClass("red");
   return true;
}
});


/*phone  number jquery validation*/

$("#pno").blur(function(){
var mobile=$("#pno").val();
var Lenphno=$("#pno").val().length;
var Regphno=/^[+](\s)[0-9]{2}(\s)[(][0-9]{3}[)][-][0-9]{3}[-][0-9]{4}$/;
if($("#pno").val() == "" )
{
   $("#mobileno").text("Phone number is required!!!").addClass("red");
   $("#pno").focus();
   return false;
}


else if(mobile.match(Regphno))
{  
	$("#mobileno").text("valid number").addClass("green").removeClass("red");
   return true;
}

else 
{
   $("#mobileno").text("Enter phonenumber in the format:[+ 91 (000)-885-9894]").addClass("red");
   $("#pno").focus();
   return false;
}
});


/*radio jquery validation*/
$("input:radio").blur(function(){
if ($('#male:checked').val() == 'true' || $('#female:checked').val() == 'true')
return true;
else 
{
$("#gend").text("Select gender").addClass("red");
//$("").focus();
return false;
}
});
/*checkbox jquery validation*/
$('input[type="checkbox"]').blur(function() { 
    if ($("#h1").is(':checked') || $("#h2").is(':checked') || $("#h3").is(':checked') || $("#h4").is(':checked') || $("#h5").is(':checked') || $("#h6").is(':checked')) {
        $("#hobby").text("hobbies selected").addClass("green").removeClass("red");
return true;
    } else {
         $("#hobby").text("select hobbies").addClass("red");
	$("#h1").focus();
return false;
    }
});
});

});						//ready function end



$("form").submit(function(){
alert();

});


