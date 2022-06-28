function scroll_to(clicked_link, nav_height) {
	var element_class = clicked_link.attr('href').replace('#', '.');
	var scroll_to = 0;
	if (element_class != '.top-content') {
		element_class += '-container';
		scroll_to = $(element_class).offset().top - nav_height;
	}
	if ($(window).scrollTop() != scroll_to) {
		$('html, body').stop().animate({ scrollTop: scroll_to }, 1000);
	}
}


jQuery(document).ready(function () {

	/*
		Scroll link
	*/
	$('a.scroll-link').on('click', function (e) {
		e.preventDefault();
		scroll_to($(this), 0);
	});

	/*
		Background slideshow
	*/
	$('.top-content').backstretch("assets/img/backgrounds/1.jpg");

	/*
		Wow
	*/
	new WOW().init();

});

$(window).scroll(function () {
	$('nav').toggleClass('scrolled', $(this).scrollTop() > 50);
});


// 
var counted = 0;
$(window).scroll(function () {

	var oTop = $('#intelligences').offset().top - window.innerHeight;
	if (counted == 0 && $(window).scrollTop() > oTop) {

		function animateValue(obj, start, end, duration) {
			let startTimestamp = null;
			const step = (timestamp) => {
				if (!startTimestamp) startTimestamp = timestamp;
				const progress = Math.min((timestamp - startTimestamp) / duration, 1);
				obj.innerHTML = Math.floor(progress * (end - start) + start);
				if (progress < 1) {
					window.requestAnimationFrame(step);
				}
			};
			window.requestAnimationFrame(step);
		}

		function animateValue2(obj2, start, end, duration) {
			let startTimestamp = null;
			const step = (timestamp) => {
				if (!startTimestamp) startTimestamp = timestamp;
				const progress = Math.min((timestamp - startTimestamp) / duration, 1);
				obj.innerHTML = Math.floor(progress * (end - start) + start);
				if (progress < 1) {
					window.requestAnimationFrame(step);
				}
			};
			window.requestAnimationFrame(step);
		}

		const obj = document.getElementById("value");
		animateValue(obj, 1, 2500, 2000);

		const obj2 = document.getElementById("value2");
		animateValue(obj2, 1, 20, 2000);


		function animateValue(obj3, start, end, duration) {
			let startTimestamp = null;
			const step = (timestamp) => {
				if (!startTimestamp) startTimestamp = timestamp;
				const progress = Math.min((timestamp - startTimestamp) / duration, 1);
				obj3.innerHTML = Math.floor(progress * (end - start) + start);
				if (progress < 1) {
					window.requestAnimationFrame(step);
				}
			};
			window.requestAnimationFrame(step);
		}

		function animateValue2(obj4, start, end, duration) {
			let startTimestamp = null;
			const step = (timestamp) => {
				if (!startTimestamp) startTimestamp = timestamp;
				const progress = Math.min((timestamp - startTimestamp) / duration, 1);
				obj4.innerHTML = Math.floor(progress * (end - start) + start);
				if (progress < 1) {
					window.requestAnimationFrame(step);
				}
			};
			window.requestAnimationFrame(step);
		}

		const obj3 = document.getElementById("value3");
		animateValue(obj3, 1, 8, 2000);

		const obj4 = document.getElementById("value4");
		animateValue(obj4, 1, 95000, 2000);
	}
	// counted = 1;
});

// document.querySelector('.image-container img').forEach(testimg => {
// 	testimg.onclick = () =>	{
// 	document.querySelector('.popup-image').style.display = 'block' ;
// 	document.querySelector('.popup-image img').src = testimg.getAttribute('src') ;
// 	}	
// });

document.querySelectorAll('.image-container img').forEach(testimg => {
	testimg.onclick = () => {
		document.querySelector('.popup-image').style.display = 'block';
		document.querySelector('.popup-image img').src = testimg.getAttribute('src');
	}
});

document.querySelector('.popup-image span').onclick = () => {
	document.querySelector('.popup-image').style.display = 'none';
}