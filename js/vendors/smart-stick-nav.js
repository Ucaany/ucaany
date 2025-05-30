/* -------------------------------------
    Smart sticky
     -------------------------------------- */
(function (document, window, index) {
	"use strict";
	var elSelector = ".navbar",
		element = document.querySelector(elSelector);
	if (!element) return true;
	var elHeight = 0,
		elTop = 0,
		dHeight = 0,
		wHeight = 0,
		wScrollCurrent = 0,
		wScrollBefore = 0,
		wScrollDiff = 0;
	window.addEventListener("scroll", function () {
		elHeight = element.offsetHeight;
		dHeight = document.body.offsetHeight;
		wHeight = window.innerHeight;
		wScrollCurrent = window.pageYOffset;
		wScrollDiff = wScrollBefore - wScrollCurrent;
		elTop = parseInt(window.getComputedStyle(element).getPropertyValue("top")) + wScrollDiff;
		if (wScrollCurrent <= 0)
			// scrolled to the very top; element sticks to the top
			element.style.top = "0px";
		else if (wScrollDiff > 0)
			// scrolled up; element slides in
			element.style.top = (elTop > 0 ? 0 : elTop) + "px";
		else if (wScrollDiff < 0) {
			// scrolled down
			if (wScrollCurrent + wHeight >= dHeight - elHeight)
				// scrolled to the very bottom; element slides in
				element.style.top = ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + "px";
			// scrolled down; element slides out
			else element.style.top = (Math.abs(elTop) > elHeight ? -elHeight : elTop) + "px";
		}
		wScrollBefore = wScrollCurrent;
	});
})(document, window, 0);
(function (document, window, index) {
	"use strict";
	var elSelector = ".navbar",
		element = document.querySelector(elSelector);
	if (!element) return true;
	var elHeight = 0,
		elTop = 0,
		dHeight = 0,
		wHeight = 0,
		wScrollCurrent = 0,
		wScrollBefore = 0,
		wScrollDiff = 0;
	window.addEventListener("scroll", function () {
		elHeight = element.offsetHeight;
		dHeight = document.body.offsetHeight;
		wHeight = window.innerHeight;
		wScrollCurrent = window.pageYOffset;
		wScrollDiff = wScrollBefore - wScrollCurrent;
		elTop = parseInt(window.getComputedStyle(element).getPropertyValue("top")) + wScrollDiff;
		if (wScrollCurrent <= 0) {
			// scrolled to the very top; element sticks to the top
			element.style.top = "0px";
			element.style.position = "absolute";
			$(".navbar").removeClass("navbar-stick");
		} else if (wScrollDiff > 0) {
			// scrolled up; element slides in
			element.style.top = (elTop > 0 ? 0 : elTop) + "px";
			element.style.position = "fixed";
			element.style.width = "100%";
			$(".navbar").addClass("navbar-stick");
		} else if (wScrollDiff < 0) {
			// scrolled down
			if (wScrollCurrent + wHeight >= dHeight - elHeight)
				// scrolled to the very bottom; element slides in
				element.style.top = ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + "px";
			// scrolled down; element slides out
			else element.style.top = (Math.abs(elTop) > elHeight ? -elHeight : elTop) + "px";
		}
		wScrollBefore = wScrollCurrent;
	});
})(document, window, 0);
