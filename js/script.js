function checkPassword()
{
  var password = document.getElementById('password').value;
  var confirm_password = document.getElementById('confirm_password').value;

  if (password == 0)
  {
    document.getElementById('message').innerHTML="Pasword can't be empty!";
    document.getElementById('message').style.color="red";
    return true;
  }
  else if (password == confirm_password)
  {
    document.getElementById('message').innerHTML="Matches found";
    document.getElementById('message').style.color="green";
    document.getElementById('confirm_password').style.border="";
    document.getElementById('button').style.backgroundColor="lawngreen";
  }
  else
  {
    document.getElementById('message').innerHTML="Matches not found";
    document.getElementById('message').style.color="red";
    document.getElementById('confirm_password').style.border="2px solid #f99990";
    document.getElementById('button').style.backgroundColor="#f99990";
    return false;
  }

  var timeout = setTimeout(alertfun,1000)

  function alertfun()
  {
    alert("Login successfully");
    document.getElementById('password').value="";
    document.getElementById('confirm_password').value="";
    document.getElementById('message').innerHTML="New form";
  }


}
