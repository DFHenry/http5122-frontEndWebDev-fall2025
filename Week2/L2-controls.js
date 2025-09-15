var firstName = "David";

if(firstName == "David")
{
    //alert("Hello David");
}

var myAge =  39;

if(myAge < 65);
{
    //alert("Not ready to retire yet");
}

//var userInput = confirm("Are you having fun yet?");
//console.log(userInput);

if(userInput === true)
{
    //alert("You said yes");
}
else(userInput === false)
{
    //alert("You said now");
}


if(firstName === "Bernie")
{
    //alert("Hi Bernie");
}
else if(firstName === "David")
{
    //alert("Hi David");
}
else
{
    //alert("I don't recognize you");
}

//var userName = prompt("What is your name?", "first name only");
//console.log(userName);

var stopLight = prompt("what colour is the light?", "Red, Yellow, Or Green?");

switch(stopLight.toLocaleLowerCase)
{
    case "Green":
        alert("Go!");
        break;
        
    case "Yellow":
        alert("Clear Intersection!");
        break;

    case "Red":
        alert("Stop!");
        break;

    default:
        alert("Drive With Caution!");
        break;
}
console.log("Switch Is Finished");
