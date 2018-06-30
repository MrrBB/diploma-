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