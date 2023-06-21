function login() {
	// body...
	var username=document.getElementById('uname').value;
	var password=document.getElementById('pword').value;
	if(username=="admin"&&password=="admin"){
		window.location.href="admin-board.html";
    }
	else if(username==""||password==""){
		alert("Enter the username and password")
	}
	else{
		alert("Invalid Username and Password");
	}
}
