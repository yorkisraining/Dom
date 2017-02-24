function focusLabel() {
	var labels = document.getElementsByTagName("label");
	for (i=0; i<labels.length; i++) {
		if (! labels[i].getAttribute("for")) continue;
		labels[i].onclick = function() {
			var id = this.getAttribute("id");
			if (! document.getElementById(id)) return false;
			var elements  = document.getElementById(id);
			elements.focus();
		}	
	}
}

function resetFields(whichform) {
	for (var i=0; i<whichform.elements.length; i++) {
		var ele = whichform.elements[i];
		if (ele.type == "submit") continue;
		if (!ele.defaultValue) continue;
		ele.onfocus = function() {
			if (this.value == this.defaultValue) {
				this.value = "";
			}
		}
		ele.onblur = function() {
			if (this.value == "") {
				this.value = this.defaultValue;
			}
		}
	}
}

function prepareForms() {
	for (var i=0; i<document.forms.length; i++) {
		var thisform = document.forms[i];
		resetFields(thisform);
	}
}

function isFilled(field) {
	if (field.value.length < 1 || field.value == field.defaultValue) {
		return false;
	} else {
		return true;
	}
}

function isEmail(field) {
	if (field.value.indexOf("@") == -1 || field.value.indexOf(".") == -1) {
		return false;
	} else {
		return true;
	}
}

function validateForm(whichform) {
	for (var i=0; i<whichform.elements.length; i++) {
		var ele = whichform.elements[i];
		if (ele.className.indexOf("required") != -1) {
			if (! isFilled(ele)) {
				alert("please filled in the " + ele.name+ " filled."); 
				return false;
			}
		}
		if (ele.className.indexOf("email") != -1) {
			if (! isEmail(ele)) {
				alert("The " + ele.name + "field must be a valid email address.")
				return false;
			}
		}
	}
	return false;
}

function prepareForms() {
	for (var i=0; i<document.forms.length; i++) {
		var thisform = document.forms[i];
		resetFields(thisform);
		thisform.onsubmit = function() {
			return validateForm(this);
		}
	}
}

addLoadEvent(focusLabel);
addLoadEvent(prepareForms);