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













let slidesContainer = document.querySelector('.slidesOverflow');

let slides = slidesContainer.querySelectorAll('.slideUnit');
slides = Array.from(slides);

slidesContainer.style.gridTemplateColumns = `repeat(${slides.length}, 100%)`;

console.log(slides);

cont = 0;

function nextSlide() {
	if(cont != slides.length -1) {
		cont++;
		slides.forEach(function(el) {
			el.style.transform = `translateX(-${cont}00%)`;
		});
	} else {
		cont = 0;
		slides.forEach(function(el) {
			el.style.transform = `translateX(-${cont}00%)`;
		});
	};
};

function prevSlide() {
	if(cont <= 0) {
		cont = slides.length -1;
		slides.forEach(function(el) {
			el.style.transform = `translateX(-${cont}00%)`;
		});
	} else {
		cont--;
		slides.forEach(function(el) {
			el.style.transform = `translateX(-${cont}00%)`;
		});
	}
}

document.querySelector('#arrowRight').addEventListener('click', nextSlide);
document.querySelector('#arrowLeft').addEventListener('click', prevSlide);




























createInstagramDiv();



function createInstagramDiv() {

	var cont = 0;

	// const postsCodes = [
	// 	'B5aPjZzliOd', 'B5YX35_FMHJ', 'B5VF4hRlP5J', 'B5TC5pylyJ7', 'B5LDOhvFi3S', 'B4w9OGFFNEM', 'B4fyzvbFEUb', 'B4S0AyulKgL', 'B3unubzl-AS', 'B2wi9BRFStT', 'B2GljENlbCQ', 'B19KJbhFcKq', 'B1Zj0KNFjfz', 'B1G89VpFMqo', 'B1E-BzKlknB', 'B1ApkFfl8Ix', 'B0B3UCdFa0-', 'BzgZs6YlAv2', 'By3Svudl4wE', 'By3Cf58l4E4', 'Byp9Vwll8pf', 'ByJJhyhlH3J', 'Bx0N4UbFu1U', 'BxXeUTCFHQe'];


	const postsCodes = [
		'B5n3gSWFTa0','B5nxm-_lZA9','B5lUrJLl6Al','B5c0xz5Fat_','B5aPjZzliOd', 'B5YX35_FMHJ', 'B5VF4hRlP5J', 'B5TC5pylyJ7', 'B5LDOhvFi3S', 'B4w9OGFFNEM', 'B4fyzvbFEUb', 'B4S0AyulKgL', 'B3unubzl-AS', 'B2wi9BRFStT', 'B2GljENlbCQ', 'B19KJbhFcKq', 'B1Zj0KNFjfz', 'B1G89VpFMqo', 'B1E-BzKlknB'];

		console.log(`postsCodes: ${postsCodes.length}`)

	const desktopWidth = window.matchMedia("(min-width: 1400px)");
	const tabletWidth = window.matchMedia("(max-width: 1000px)");
	const mobileOneWidth = window.matchMedia("(max-width: 700px)");
	const mobileTwoWidth = window.matchMedia("(max-width: 450px)");

	let instagramContainer = document.querySelector('.instagramSection');

	let contSlides = 0;

	let divideInstaPosts = 0;

	if (window.matchMedia('(min-width: 1700px) and (max-width: 10000px)').matches) {
		contSlides = 5;
		instagramContainer.style.height = '700px';
		createSlides();
	} else if (window.matchMedia('(min-width: 1500px) and (max-width: 1699px)').matches) {
		instagramContainer.style.height = '800px';
		contSlides = 4;
		createSlides();
	} else if (window.matchMedia('(min-width: 1000px) and (max-width: 1499px)').matches) {
		instagramContainer.style.height = '950px';
		contSlides = 3;
		createSlides();
	} else if (window.matchMedia('(min-width: 700px) and (max-width: 999px)').matches) {
		instagramContainer.style.height = '800px';
		contSlides = 2;
		createSlides();
	} else if (window.matchMedia('(min-width: 320px) and (max-width: 699px)').matches) {
		instagramContainer.style.height = '750px';
		contSlides = 1;
		createSlides();
	};

cont = 0;

function createSlides() {
		if (contSlides === 5) {
			divideInstaPosts = Math.floor(postsCodes.length / contSlides);
		} else if (contSlides <= 2) {
			divideInstaPosts = Math.floor(postsCodes.length / contSlides) -1;
		} else {
			divideInstaPosts = Math.floor(postsCodes.length / contSlides) -1;
		}
		console.log(`divideInstaPosts: ${divideInstaPosts}`);
	for (let i = 0; i <= divideInstaPosts; i++) {
		console.log(i);
		const instaSlideWrapper = document.createElement('div');
		instaSlideWrapper.className = 'instagramOverflow boxModelGrid';
		console.log(`contSlides: ${contSlides}`);
		if(contSlides <= 1) {
			instaSlideWrapper.style.gridTemplateColumns = '1fr';
			console.log(instaSlideWrapper);
		} else {
			instaSlideWrapper.style.gridTemplateColumns = `repeat(${contSlides}, 1fr)`;
			console.log(instaSlideWrapper);
		}
		instagramContainer.appendChild(instaSlideWrapper);
		let contPosts = document.querySelectorAll('.instagramOverflow');
		contPosts = Array.from(contPosts);
		console.log(`contPosts.lenght ${contPosts.length}`);
		for(let x = 0; x <= contSlides -1; x++) {
			if (cont <= postsCodes.length -1) {
				let instaPostHTML = document.createElement('div');
				instaPostHTML.className = 'instagramUnit boxModel';
				instaPostHTML.innerHTML = `<amp-instagram data-shortcode="${postsCodes[cont]}" data-captioned width="1" height="1" layout="responsive">`;
				console.log(instaPostHTML);
				console.log(`x: ${x}`);
				contPosts[contPosts.length -1].appendChild(instaPostHTML);
				cont++
			};
		};
	};
};

};





setTimeout(function(){
	let instaImgs = document.querySelectorAll('img');
	instaImgs = Array.from(instaImgs);
	console.log(instaImgs);
	instaImgs.forEach(function(el) {
		el.alt = 'imgs';
	});
	// let btns = document.querySelector('i-amphtml-video-mask');
	// 	btns.setAttribute('aria-label', 'btns');
	// 	console.log(btns);
},8000);