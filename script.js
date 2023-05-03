// Your JS code here.
function checkSlide(e) {
	const images = document.querySelectorAll(".slide-in");

	images.forEach((image) => {
	const slideInAt =
	window.scrollY + window.innerHeight - image.height / 2;
	const imageBottom = image.offsetTop + image.height;
	const isHalfShown = slideInAt > image.offsetTop;
	const isNotScrolledPast = window.scrollY < imageBottom;
	if (isHalfShown && isNotScrolledPast) {
	image.classList.add("active");
	} else {
	image.classList.remove("active");
	}
	});
	}