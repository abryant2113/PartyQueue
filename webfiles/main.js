// placeholder for the access token that we will have to occasionally refresh
var accessToken;

// handles the process of joining the chosen group
window.onload = function () 
{
    document.getElementById("join-submit").addEventListener("click", authenticateSpotify, false);
};

// executes the auth.php code
function authenticateSpotify()
{
	// spotify's web api requires server->server authentication, so in order to automatically authenticate, we need to do it through php
	$.ajax({ url: './auth.php',
     	type: 'post',
     	success: function(output) 
     	{
     		var jsonString = output;
     		var jsonObj = JSON.parse(jsonString);
     		alert(jsonObj["access_token"]);
     	}
	});

}
// function that handles the process of joining an existing group
function joinGroup()
{
	var groupCode = "3249812";
	document.location.href = "./dashboard.html";
}