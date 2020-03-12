
window.onload = pageLoad;
function pageLoad(){
    var submit = document.getElementById("submit").onclick = validateForm;
    }

function validateForm() {
    var password = document.getElementById("password").value;
    var retypePassword = document.getElementById("rePass").value;
    if (password != retypePassword)
    {
      var a = document.getElementById("errormsg");
      a.textContent = "arrrrrrrrr";
      return false;
    }
    
}