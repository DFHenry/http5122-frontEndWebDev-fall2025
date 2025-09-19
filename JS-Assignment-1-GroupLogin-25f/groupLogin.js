var groupNum = 3; //group number

var groupEntry = prompt("Please type your group number", "type group number here"); //user is prompted to select a group number

if(groupEntry === null || groupEntry === "" || groupEntry === "type group number here") //check for invalid entry types
{
    alert("Invalid Entry!");
}

else if(groupEntry === 3)//if 3 is entered by the user
{
    var nameEntry = prompt("Please enter your first name", "type first name here"); //user is prompted to enter their first name

    switch(nameEntry.toLowerCase()) //checks for each group member
    {
        case "david": //entry for David Henry
            alert("Hello, David Henry!");
            break;

        case "peter": //entry for Peter Slepmers
            alert("Hello, Peter Slempers!");
            break;

        case "massimo": //entry for Massimo Cubello
            alert("Hello, Massimo Cubello!");
            break;

        case "pranav": //entry for Pranav Rupani
            alert("Hello, Pranav Rupani!");
            break;

        default: //if all other cases are not met, access is denied
            alert("Access Denied!");
            break;
    }
}

else if(groupEntry != 3) //if 3 is not entered
{
    alert("Access Denied!");
}



