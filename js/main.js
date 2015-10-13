(function() {
	var menuToggle = document.getElementsByClassName("ba-menu-toggle")[0],
		body = document.getElementsByTagName("body")[0];

	menuToggle.onclick = function() {
		body.classList.toggle("ba-menu-open");
	};
})();

