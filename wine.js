$(document).ready(function() {

	$.ajax({
		type: "GET",
		url: "https://myapi.profstream.com/api/ce7dc9/wines",
		success: function(wines) {
			console.log(wines);

			//Create console.log for each use saying "[firstname] [lastname]'s
			//username is [username] and email is [email]"

			// console.log(users[0].firstname + " " + users[0].lastname + "'s username is " + users[0].username + " and email is " + users[0].email);
			// console.log(users[1].firstname + " " + users[1].lastname + "'s username is " + users[1].username + " and email is " + users[1].email);

			console.log(wines[0].name + " is a wine from " + wines[0].country + " specifically from the " + wines[0].region + " region "); 
			console.log(wines[6].name + " and " + wines[7].name + " are both " + wines[6].grapes + "s from the " + wines[7].region + " region of " + wines[6].country);
			console.log("The " + wines[3].year + " " +  wines[3].name + " from " + wines[3].region + " state in the " + wines[3].country + " has been described as " + "'" + wines[3].description + "'");
			console.log("The " + wines[4].year + " " + wines[4].name + " is a $" + wines[4].price + " " + wines[4].grapes + " from " + wines[4].region);
			console.log("'" + wines[1].description + "' has been said about the " + wines[1].year + " " + wines[1].name + " from " + wines[1].country);
			console.log("A nice " + wines[2].region + " " + wines[2].grapes + " is the $" +wines[2].price + " bottle of " + wines[2].year + " " + wines[2].name);
			console.log("If you want a " + wines[5].grapes + " from " + wines[5].country + " try the " + wines[5].year + " " + wines[5].name + ". " + wines[5].description);
		},

		error: function() {
			alert("Error getting data");
		}
	});

});



