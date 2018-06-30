(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
window.addEventListener('DOMContentLoaded', function() {
	let slider = require('../parts/slider.js');

	slider();
})	
},{"../parts/slider.js":2}],2:[function(require,module,exports){
function slider() {

	let slideIndex = 1,
	slides = document.getElementsByClassName('main-slider-item'),
	nextBtn = document.getElementById('sliderNext'),
	prevBtn = document.getElementById('sliderPrev');
	showSlides(slideIndex);
function showSlides(n) {
		if(n > slides.length) {slideIndex = 1;}
		if(n < 0) {slideIndex = slides.length;}
		console.log(slides.length)
		console.log(n)
		console.log(slideIndex)

		for(let i = 0; i < slides.length; i++) {slides[i].style.display = "none";}
		slides[slideIndex  - 1].style.display = 'flex';
}
	function plusSlides (n){
		showSlides(slideIndex += n)
	}
	function plus(){
	return plusSlides(+1)
	};

	setInterval(plus,'3500');
} slider();
},{}]},{},[1]);
