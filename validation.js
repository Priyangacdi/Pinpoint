function otp_valid(){
   var otp=document.getElementById("otp").value;
   if(otp===""){
     document.getElementById("otp-error").innerHTML="!Please enter yout OTP";
     document.getElementById("otp-error").style.color="red";
     document.getElementById("otp").style.borderColor="red";
     return false;
  }
  else{
    document.getElementById("otp-error").innerHTML="";
  }
}


function valid(){
  var uname=document.getElementById("username").value;
  var mobno=document.getElementById("mobile_no").value;
  var pass=document.getElementById("password").value;
  var confirm=document.getElementById("c_password").value;
  if(uname===""){
    document.getElementById("uname_error").innerHTML="!Please enter the username";
    document.getElementById("uname_error").style.color="red";
    document.getElementById("username").style.borderColor="red";
    return false;
  }
  else {
    document.getElementById("uname_error").innerHTML="";
  }
  if (mobno==="") {
    document.getElementById("mobno_error").innerHTML="!Please enter your mobile number";
    document.getElementById("mobno_error").style.color="red";
    document.getElementById("mobile_no").style.borderColor="red";
    return false
  }
  else if(mobno.length!==10){
    document.getElementById("mobno_error").innerHTML="!Please enter a valid mobile number";
    document.getElementById("mobno_error").style.color="red";
    document.getElementById("mobile_no").style.borderColor="red";
    return false;
  }
  else {
    document.getElementById("mobno_error").innerHTML="";
  }
  if (pass==="") {
    document.getElementById("pass_error").innerHTML="!Please enter your password";
    document.getElementById("pass_error").style.color="red";
    document.getElementById("password").style.borderColor="red";
    return false;
  }
  else if (pass.length<8) {
    document.getElementById("pass_error").innerHTML="!Password must have atleast 8 characters";
    document.getElementById("pass_error").style.color="red";
    document.getElementById("password").style.borderColor="red";
    return false;
  }
  else {
    document.getElementById("pass_error").innerHTML="";
  }
  if (confirm==="") {
    document.getElementById("confirm_error").innerHTML="!Please confirm your password";
    document.getElementById("confirm_error").style.color="red";
    document.getElementById("c_password").style.borderColor="red";
    return false;
  }
  else if (pass!=confirm) {
    document.getElementById("confirm_error").innerHTML="!Password mismatch";
    document.getElementById("confirm_error").style.color="red";
    document.getElementById("password").style.borderColor="red";
    document.getElementById("c_password").style.borderColor="red";
    return false;
  }
  else {
    document.getElementById("confirm_error").innerHTML="";
  }
}
