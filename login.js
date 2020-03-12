function getParams() {
  	var idx = document.URL.indexOf('?');
  	var params = new Array();
  	if (idx != -1) {
  		var pairs = document.URL.substring(idx+1, document.URL.length).split('&');
  		for (var i=0; i<pairs.length; i++) {
  			nameVal = pairs[i].split('=');
  			params[nameVal[0]] = nameVal[1];
  		}
 	}
  	return params;
 }

window.onload = loginLoad;
function loginLoad(){
	var submit = document.getElementById("submit").onclick = checkLogin;
	console.log(parameter["username"]);
}

function checkLogin(){
	console.log("fuck");
	var a = document.getElementById("password").value;
	var b = document.getElementById("username").value;

	var parameter = getParams();
	var c = parameter["username"];
	var d = parameter["password"];

	if( a != d || b != c)
	{
		alert("ayeeeeeeee")
		return false;
	}
	else{
		alert("yayyyy");
	}

}

			