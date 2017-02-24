function showSection(id) {
	var divs = document.getElementsByTagName("div");
	for (var i=0; i<divs.length; i++) {
		if (divs[i].className.indexOf("section") == -1) continue;
		if (divs[i].getAttribute("id") != id) {
			divs[i].style.display = "none";
		} else {
			divs[i].style.display = "block";
		}
	}
}

function prepareinternaInava() {
	if (! document.getElementsByTagName) return false;
	if (! document.getElementById) return false;
	if (! document.getElementById("internalnav")) return false;
	var nav = document.getElementById("internalnav");
	var links = nav.getElementsByTagName("a");
	for (var i=0; i<links.length; i++) {
		var sectionID = links[i].getAttribute("href").split("#")[1];
		if (! document.getElementById(sectionID)) continue;
		document.getElementById(sectionID).style.display = "none";
		links[i].destination= sectionID; //设置为属性
		links[i].onclick = function() {
			showSection(this.destination);
			return false;
		}
	}
}

addLoadEvent(prepareinternaInava);