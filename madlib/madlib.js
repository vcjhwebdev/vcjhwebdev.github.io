// JavaScript Document

function madlib() {
	// get values
	var name1 = document.getElementById("name1").value;
	var name2 = document.getElementById("name2").value;
	var object1 = document.getElementById("object1").value;
	var verb1 = document.getElementById("verb1").value;
	
	// use defaults if left blank
	if(name1 == "") {name1 = "Joe"}
	if(name2 == "") {name2 = "Bob"}
	if(object1 == "") {object1 = "potato"}
	if(verb1 == "") {verb1 = "dancing"}
	
	// print result
	document.getElementById("result").innerHTML = "Once upon a time, " + name1 + " was playing with their best friend, " + name2 + ", when all of a sudden a giant " + object1 + " fell from the sky. It landed in front of them and then began " + verb1 + " all over the place. The end.";
}