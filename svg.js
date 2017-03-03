var v = document.getElementById("vimage");
var cb = document.getElementById("circle");
var db = document.getElementById("dvd");
var sb = document.getElementById("stop");
var rid;

var animateCircle = function(e){
	var r = 1;
	var dr = 1;
	window.cancelAnimationFrame(rid)

	var drawCircle = function(e){
		while (v.lastChild)
			v.removeChild(v.lastChild);
		var circle = document.createElementNS("http://www.w3.org/2000/svg","circle");
		circle.setAttribute("cx", "250");
		circle.setAttribute("cy", "250");
		circle.setAttribute("r", r);
		circle.setAttribute("fill", "red");
		v.appendChild(circle);
		r += dr;
		if (r == 1 || r == 250)
			dr *= -1;
		rid = window.requestAnimationFrame(drawCircle);
	};
	drawCircle();
};

var animateDVD = function(e){
	var x = Math.floor(Math.random() * 400);
	var y = Math.floor(Math.random() * 449);
	var dx = 1;
	var dy = 1;
	window.cancelAnimationFrame(rid)

	var drawDVD = function(){
		while (v.lastChild)
			v.removeChild(v.lastChild);
		var dvd = document.createElementNS("http://www.w3.org/2000/svg","image");
		dvd.setAttribute("x", x);
		dvd.setAttribute("y", y);
		dvd.setAttribute("width", "100");
		dvd.setAttribute("height", "51");
		dvd.setAttribute("href", "DVD_logo.png");
		v.appendChild(dvd);
		x += dx;
		y += dy;
		if (x == 0 || x == 400)
			dx *= -1;
		if (y == 0 || y == 449)
			dy *= -1;
		rid = window.requestAnimationFrame(drawDVD);
	};
	drawDVD();
};

var stop = function(e){
	window.cancelAnimationFrame(rid);
};

cb.addEventListener("click", animateCircle);
db.addEventListener("click", animateDVD);
sb.addEventListener("click", stop);