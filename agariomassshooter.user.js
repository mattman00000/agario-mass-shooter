// ==UserScript==
// @name         Agar.io Mass Shooter
// @namespace    http://github.com/mattman00000/agario-mass-shooter
// @version      0.0.1
// @description  improves agar.io shooting
// @author       mattman00000, inspired by amarsprabhu
// @match        *://agar.io/*
// @grant        none
// @updateURL    https://github.com/mattman00000/agario-mass-shooter/raw/master/agariomassshooter.user.js
// @downloadURL  https://github.com/mattman00000/agario-mass-shooter/raw/master/agariomassshooter.user.js
// ==/UserScript==

function pressW() {
	var oEvent = document.createEvent('KeyboardEvent');
	var k = 87;
	// Chromium Hack
	Object.defineProperty(oEvent, 'keyCode', {
	            get : function() {
	                return this.keyCodeVal;
	            }
	});     
	Object.defineProperty(oEvent, 'which', {
	            get : function() {
	                return this.keyCodeVal;
	            }
	});     

	if (oEvent.initKeyboardEvent) {
	    oEvent.initKeyboardEvent("keydown", true, true, document.defaultView, false, false, false, false, k, k);
	} else {
	    oEvent.initKeyEvent("keydown", true, true, document.defaultView, false, false, false, false, k, 0);
	}

	oEvent.keyCodeVal = k;

	if (oEvent.keyCode !== k) {
	    console.log("keyCode mismatch " + oEvent.keyCode + "(" + oEvent.which + ")");
	}
	document.dispatchEvent(oEvent);

	var oEvent = document.createEvent('KeyboardEvent');
	// Chromium Hack
	Object.defineProperty(oEvent, 'keyCode', {
	            get : function() {
	                return this.keyCodeVal;
	            }
	});     
	Object.defineProperty(oEvent, 'which', {
	            get : function() {
	                return this.keyCodeVal;
	            }
	});     

	if (oEvent.initKeyboardEvent) {
	    oEvent.initKeyboardEvent("keyup", true, true, document.defaultView, false, false, false, false, k, k);
	} else {
	    oEvent.initKeyEvent("keyup", true, true, document.defaultView, false, false, false, false, k, 0);
	}

	oEvent.keyCodeVal = k;

	if (oEvent.keyCode !== k) {
	    console.log("keyCode mismatch " + oEvent.keyCode + "(" + oEvent.which + ")");
	}	
	document.dispatchEvent(oEvent);
}
window.pressW = pressW;
document.onkeypress = function(e) {
	e = e || window.event;
	if (e.keyCode == 102) {
		for (var i = 0; i<7; i++) {
			setTimeout(pressW, i * 80);
		}
	} else if (e.keyCode == 103) {
		for (var i = 0; i<50; i++) {
			setTimeout(pressW, i * 40);
		}
	} else if (e.keyCode == 104) {
		for (var i = 0; i<400; i++) {
			setTimeout(pressW, i * 5);
		}
	}
}
