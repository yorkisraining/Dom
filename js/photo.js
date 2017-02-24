function showPic(whichPic) {
	var source = whichPic.getAttribute("href");
	var placeholder = document.getElementById("holder");
	placeholder.setAttribute("src", source);
	if (whichPic.getAttribute("title")) {
		var texts = whichPic.getAttribute("title");
	} else {
		var texts = "";
	}
	var description = document.getElementById("description");
	if (description.firstChild.nodeType == 3) {
		description.firstChild.nodeValue = texts;
	}
	return false;
}

function prepareHolder() {
	var placeholder = document.createElement("img");
	placeholder.setAttribute("id", "holder");
	placeholder.setAttribute("src", "../img/5646388032816413146.jpg");
	placeholder.setAttribute("alt", "this is a photo");
	var description = document.createElement("p");
	description.setAttribute("id", "description");
	var destext = document.createTextNode("this is a description");
	description.appendChild(destext);
	var  content = document.getElementById("content");
	content.appendChild(description);
	content.appendChild(placeholder);
}

function prepareGallery() {
	var imagegallery = document.getElementById("imagegallery");
	var links = imagegallery.getElementsByTagName("a");
	for (var i=0; i<links.length; i++) {
		links[i].onmouseover = function() {
			return showPic(this);
		}
	}
}

addLoadEvent(prepareHolder);
addLoadEvent(prepareGallery);