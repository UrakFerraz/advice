let slides = document.querySelectorAll('.slideWrapper');
let slidesContainer = document.querySelector('.slidesOverflow');
let cont = 0;
let translateSlide = '';
let actualSlide = 0;
let timer = true;

slidesContainer.addEventListener('click', nextSlide);
slidesContainer.addEventListener('click', prevSlide);

console.log(slides.length -1);













function nextSlide(el) {
	pauseSlider();
	timer = false;
	if (el.target.id === 'arrowBtnRight') {
		console.log('clique right');
		console.log(actualSlide);
		if(actualSlide < slides.length -1) {
			actualSlide += 1;
			cont -= 1;
			translateSlide = 'translateX(' + cont + '00vw)';
			console.log(cont);
			console.log(translateSlide);
			slidesArr = Array.from(slides);
			slidesArr.forEach(function slider(item) {
				item.style.transform = translateSlide;
			});
		} else {
			cont = 0;
			actualSlide = 0;
			translateSlide = 'translateX(' + cont + '00vw)';
			console.log(cont);
			console.log(translateSlide);
			slidesArr = Array.from(slides);
			slidesArr.forEach(function slider(item) {
				item.style.transform = translateSlide;
			});
			console.log('final');
		}
	};
};












function prevSlide(el) {
	pauseSlider();
	timer = false;
	if (el.target.id === 'arrowBtnLeft') {
		console.log('clique left');
		console.log(actualSlide);
		if(actualSlide > 0) {
			actualSlide -= 1;
			cont += 1;
			translateSlide = 'translateX(' + cont + '00vw)';
			console.log(cont);
			console.log(translateSlide);
			slidesArr = Array.from(slides);
			slidesArr.forEach(function slider(item) {
				item.style.transform = translateSlide;
			});
		} else {
			cont = 0;
			actualSlide = 0;
			console.log('início');
		}
	};
};












function autoSlider() {
	if(actualSlide < slides.length -1) {
		actualSlide += 1;
		cont -= 1;
		translateSlide = 'translateX(' + cont + '00vw)';
		console.log(cont);
		console.log(translateSlide);
		slidesArr = Array.from(slides);
		slidesArr.forEach(function slider(item) {
			item.style.transform = translateSlide;
		});
	} else {
		cont = 0;
		actualSlide = 0;
		translateSlide = 'translateX(' + cont + '00vw)';
		console.log(cont);
		console.log(translateSlide);
		slidesArr = Array.from(slides);
		slidesArr.forEach(function slider(item) {
			item.style.transform = translateSlide;
		});
		console.log('final');
	}
};











let automateSlides = setInterval(autoSlider, 3000);










function pauseSlider() {
	window.clearInterval(automateSlides);
	timer = false;
	if (timer === false) {
		timer = true;
		var checkPause = setInterval(returnAnimation, 7000);
	};
};










function returnAnimation() {
	if (timer === false) {
		timer = true;
		automateSlides = setInterval(autoSlider, 3000);
		console.log('resume animation');
	};
};
























let newsSectionContainer = document.querySelector('.newsSectionContainer');
let contNews = 0;
let translateNews = 450;
let newsSlides = document.querySelectorAll('.newsSectionOnlyTextSlide');
newsSectionContainer.addEventListener('click', nextNews);
newsSectionContainer.addEventListener('click', prevNews);

function nextNews(el) {
	if(el.target.id === 'paginationArrowLeft') {
		console.log('clique news left');
		if (contNews === newsSlides.length -1) {
			console.log('final');
		} else {
			contNews += 1;
			translateNews = 100 *contNews;
			console.log(translateNews);
			for(var i = 0; i <= newsSlides.length -1; i++) {
				newsSlides[i].style.transform = 'translateX(-' + translateNews + '%)';
			};
		};
	};
};











function prevNews(el) {
	if(el.target.id === 'paginationArrowRight') {
		console.log('clique news right');
		if (contNews === 0) {
			console.log('início');
		} else {
			contNews -= 1;
			translateNews = 100 *contNews;
			console.log(translateNews);
			for(var i = 0; i <= newsSlides.length -1; i++) {
				newsSlides[i].style.transform = 'translateX(-' + translateNews + '%)';
			};
		};
	};
};





















window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    document.getElementById("navbar").style.top = "0";
    document.getElementById("scrollToTopButton").style.bottom = "40px";
  } else {
    document.getElementById("navbar").style.top = "-150px";
    document.getElementById("scrollToTopButton").style.bottom = "-150px";
  }
};