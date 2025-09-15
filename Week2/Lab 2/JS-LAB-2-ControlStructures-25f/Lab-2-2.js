//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
//alert("hey 2.2");

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		var userName = "Dart";
		var password = "Vader";
		var nameInput;
		var passInput;



//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
nameInput = prompt("Please type your user name", "Type user name here");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(nameInput);

//5. CREATE POPUP BOX FOR PASSWORD
passInput = prompt("Type Your Password", "Type password here");

//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(passInput);

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD
if(nameInput === userName && passInput === password)
{
	//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE
	alert("Welcome Back, " + userName);
	console.log("Login Successful");
}
else
{
	//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE
	alert("Invalid username/password");
	console.log("login fail");
}





