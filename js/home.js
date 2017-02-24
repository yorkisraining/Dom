function moveElement(elementID, final_x, final_y, interval) {
	if (! document.getElementById) return false;
	if (! document.getElementById(elementID)) return false;
	var elem = document.getElementById(elementID);
	if (elem.movement) {
		clearTimeout(elem.movement);
	}
	if (! elem.style.left) {
		elem.style.left = "0px";
	}
	if (! elem.style.top) {
		elem.style.top = "0px";
	}
	var xpos = parseInt(elem.style.left);
	var ypos = parseInt(elem.style.top);
	if (xpos == final_x && ypos == final_y) {
		return true;
	}
	if (xpos < final_x) {
		var dist = Math.ceil( (final_x - xpos)/10 );
		xpos += dist;
	}
	if (xpos > final_x) {
		var dist = Math.ceil( (xpos - final_x)/10 );
		xpos -= dist;
	}
	if (ypos < final_y) {
		var dist = Math.ceil( (final_y - ypos)/10 );
		ypos += dist;
	}
	if (ypos > final_y) {
		var dist = Math.ceil( (ypos - final_y)/10 );
		ypos -= dist;
	}
	elem.style.left = xpos + "px";
	elem.style.top = ypos + "px";
	var repeat = "moveElement('"+ elementID + "'," + final_x + "," + final_y + "," + interval + ")";
	elem.movement = setTimeout (repeat, interval);
}

function moveImg() {	
	if (! document.getElementById) return false;
	if (! document.getElementsByTagName) return false;
	var div = document.createElement("div");
	div.setAttribute("id", "wrapimg");
	var img = document.createElement("img");
	img.setAttribute("id", "movepic");
	img.setAttribute("src", "img/pic.jpg");
	img.setAttribute("alt", "cant look is better");
	var con = document.getElementById("content");
	div.appendChild(img);
	con.appendChild(div);
	img.style.position = "absolute";
	var links = document.getElementsByTagName("a");
	for (i=0; i<links.length; i++) {
		links[i].onmousemove = function() {
		var destination = this.getAttribute("href");
		if (destination.indexOf("about.html") != -1) {
			moveElement("movepic", -200, 0, 10);
		}
		if (destination.indexOf("photos.html") != -1) {
			moveElement("movepic", -400, 0, 10);
		}
		if (destination.indexOf("live.html") != -1) {
			moveElement("movepic", -600, 0, 10);
		}
		if (destination.indexOf("contact.html") != -1) {
			moveElement("movepic", -800, 0, 10);
		}
	}
}
	/*
	var content = document.getElementById("content");	
	var links =  content.getElementsByTagName("a");
	links[0].onmouseover = function() {
		moveElement("movepic", -200, 0, 1)
	}
	links[1].onmouseover = function() {
		moveElement("movepic", -400, 0, 1)
	}
	links[2].onmouseover = function() {
		moveElement("movepic", -600, 0, 1)
	}
	links[3].onmouseover = function() {
		moveElement("movepic", -800, 0 , 1)
	}*/
}


addLoadEvent(moveImg);