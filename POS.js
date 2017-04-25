function printHello(){
	//h2 = document.createElement("h2");
	//h2.appendChild("Hello World");
	//document.getElementById("header").appendChild(h2);
	var input = prompt();
	$("#header").append(" "+input);
}