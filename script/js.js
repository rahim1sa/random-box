function myFunc(mainWidth,margin,count,column){
	var main = document.createElement("div");
	main.setAttribute("class","main");
	main.style.width=mainWidth + "px";
	document.body.appendChild(main);

	for (var i = 0; i <=count; i++) {
		var box = document.createElement("div");
		box.setAttribute("class","box");
		box.style.margin = margin+ "px";
		box.style.width =(mainWidth - margin*column -column*20)/column + "px";
		box.style.backgroundColor = "red";
		box.style.float = "right";
		main.appendChild(box);
	}
}
myFunc(800,5,60,10)

