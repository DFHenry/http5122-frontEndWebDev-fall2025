//######## LAB 2-3 EMAIL SIGNUP ########
//alert("hey 2.3");
//==== VARIABLES =========
var userChoice;
var userEmail;


//==== LOGIC =============

userChoice = confirm("Would you like to be a part of our mailing list?");

if(userChoice === true)
{
    userEmail = prompt("Please type your email address below", "me@example.com");

    if(userEmail === "" || userEmail === "me@example.com" || userEmail === null)
    {
        alert("Thank you, but your email was invalid.");
    }
    else
    {
        alert("Thank you, our next newsletter will be sent to " + userEmail);    
    }
}
else
{
    alert("Thank you, we will not bother you again.");
}
