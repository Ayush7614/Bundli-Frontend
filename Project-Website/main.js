const allCourseTags = data ? [...data.reduce((acc, course) => (acc = [...acc, ...course.tags]), [])] : [];
const uniqueCourseTags = Array.from(new Set(allCourseTags));

// Course per page
const perPage = 9;

// determine if we're filtering by tag
const courseTagFilterVal = getParameterByName('courseTag');
const isValidTag = uniqueCourseTags.includes(courseTagFilterVal);
const coursesFilteredByTag = isValidTag ?
	data.filter(
		(course) => course.tags && course.tags.includes(courseTagFilterVal)
	) :
	data;

// If we have a valid tag, display a message to clear it
if (isValidTag) {

	const message = `<h3 class="filter__message">
	Filtering by tag <span class="filter__message--tagname">${courseTagFilterVal}</span> &mdash;
	<a class="filter__clear" href="index.html">&cross; Clear</a></h3>`;

	$(".courses__list").append(message);
}

// Get current page number from URL
let currentPage = getParameterByName('page');
currentPage = currentPage ? currentPage : 1;

// Display filtered courses with pagination
display(currentPage, coursesFilteredByTag);
pagination(currentPage, coursesFilteredByTag);

/**
 * Display Provided course for particular page
 * 
 * @param number page 
 * @param Array data 
 */
function display(page = 1, data = []) {

	let limit = data.length;
	const totalPages = Math.ceil(limit / perPage);

	// Check if page is in bounds
	if (page > totalPages || page <= 0) page = 1;

	let offset = (page - 1) * perPage;
	let i = offset;

	while (i < limit && i < offset + perPage) {

		const course = data[i];

		let html = `<div class="courses__card">
					<img
					src="./courses/images/${course.image}"
					alt="Course Image"
					class="course__image"
					onerror="this.onerror=null; this.src='./assets/images/default.png'"
					/>
					<div class="course__info">
						<div class="course__tags">
						${course.tags
							.map((tag) => `<a href="?courseTag=${tag}"><div class="course__tag">${tag}</div></a>`)
							.join("")}
						</div>
						<div class="course__name">${course.name}</div>
						<div class="course__instructor">${course.instructor}</div>
						<div class="course__description">
							${course.description.substring(0, 100)}..
						</div>
						<a target="_blank" class="course__call_to_action" href="${course.url}"> Learn More </a>
					</div>
				</div>`;

		$(".courses__list").append(html);

		i++;
	}
}

/**
 * Create pagination links
 * 
 * @param number page 
 * @param Array data 
 */
function pagination(page = 1, data = []) {
	const totalCourses = data.length;
	const totalPages = Math.ceil(totalCourses / perPage);

	// Check if page is in bounds
	if (page > totalPages || page <= 0) page = 1;

	let paginationHTML = '';

	for (let i = 1; i <= totalPages; i++) {
		let activeClass = '';
		if (i == page) activeClass = "active";
		paginationHTML += `<a href="#" class="pagination__link ${activeClass}" data-page="${i}">${i}</a>`;
	}

	$('.pagination').html(paginationHTML);
}

// Handle Pagination click event
$('.pagination .pagination__link').on('click', function (e) {
	e.preventDefault();

	const page = $(this).data('page');

	const urlParams = new URLSearchParams(window.location.search);

	urlParams.set('page', page);
	window.location.search = urlParams;
});