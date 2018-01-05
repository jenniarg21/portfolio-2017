	/* 
	** Function Name: scrollToProj()

	** Description: Scrolls the window to the top of the passed element's position, e.g. (1) to the top of the triggered project event or (2) to the top of the project container's header (h3 element containing language used) associated with the the "Close Info" button 

	** Parameters:
	(1) {HTML object} elem - element to reference when calculating where to scroll the page

	** Return Value:
	N/A
	*/
	function scrollToProj(elem) {
		// Set delay to account for style changes (spacing/display) after onclick event
		setTimeout(function () {
			var pos = elem.getBoundingClientRect();
			var left = pos.left + window.scrollX;
			var top;
			// Adjust vertical scroll position for fixed navigation
			if (window.innerWidth > 350) {
				top = pos.top + window.scrollY - 145;
			}
			else {
				top = pos.top + window.scrollY - 200;
			}
			window.scroll({
				top: top,
				left: left,
				behavior: 'smooth'
			});
		}, 200);
	}