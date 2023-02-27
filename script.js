document.getElementById("fname").innerHTML = prompt("Enter your Full Name:");
document.getElementById("username").innerHTML = prompt("Enter your username:");

if(confirm("Select your assigned sex\nIf Male click OK\nIf Female click CANCEL")==1) {
	alert("Your profile sex is set to Male");
	document.getElementById("gender").innerHTML = "M";
} else{
	alert("Your profile sex is set to Female");
	document.getElementById("gender").innerHTML = "F";
}

document.getElementById("desc").innerHTML = prompt("Type a brief description of yourself:");

var birthYear = prompt("Enter your Birth Year:");

document.getElementById("year").innerHTML = birthYear;
document.getElementById("age").innerHTML = 2023 - birthYear;

if(confirm("Do you want to use a custom profile picture?")==1){
	document.getElementById("ppic").src = prompt("Enter the file name of the picture:");
	alert("Profile picture has been updated.");
} else{
	alert("No image has been set.");
}