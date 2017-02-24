function stripeTables() {
	var table = document.getElementsByTagName("table");
	for (var i=0; i<table.length; i++) {
		var tr = table[i].getElementsByTagName("tr");
		var odd = false;		
		for (var j=0; j<tr.length; j++) {
			if( odd == false) {
				addClass(tr[j], "odd");
				odd = true;
			} else {
				odd = false;
			}
		}
	}
}

function highlightrow() {
	var tr = document.getElementsByTagName("tr");
	for (i=0; i<tr.length; i++) {
		tr[i].oldClassName = tr[i].className;
		tr[i].onmouseover = function() {
			addClass(this, "highlight");
		}
		tr[i].onmouseout = function() {
			this.className = this.oldClassName;
		}
	}
}

function displayAbb() {
	var sb = new Array();
	var abbr = document.getElementsByTagName("abbr");
	for(i=0; i<abbr.length; i++) {
		var title = abbr[i].getAttribute("title");
		var atext = abbr[i].lastChild.nodeValue;
		sb[atext] = title;
	}
	var dl = document.createElement("dl");
	for (atext in sb) {
		var title = sb[atext];
		var dt = document.createElement("dt");
		var dt_text = document.createTextNode(atext);
		dt.appendChild(dt_text);
		var dd = document.createElement("dd");
		var dd_text = document.createTextNode(title);
		dd.appendChild(dd_text);
		dl.appendChild(dt);
		dl.appendChild(dd);
	}
	var content = document.getElementById("content");
	content.appendChild(dl);
}

addLoadEvent(stripeTables);
addLoadEvent(highlightrow);
addLoadEvent(displayAbb);