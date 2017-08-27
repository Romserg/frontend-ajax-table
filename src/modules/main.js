import $ from 'jquery'; // eslint-disable-line
import renderRow from './renderRow';
import compareName from './compareName';
import copmareAge from './copmareAge';
import ajaxRequest from './ajaxRequest';

export default {};

$(document).ready(() => {
	$.when(
		ajaxRequest()
	).then(
		(response) => {
			const fullCopy = (response);
			fullCopy.map(elem => $('.all-users')
				.append(renderRow(elem))
			);
			fullCopy.forEach((elem) => {
				if (elem.isActive === true) {
					$('.active-users')
						.append(renderRow(elem));
				}
				return {};
			});
			fullCopy.forEach((elem) => {
				if (elem.name.last.length >= 6) {
					$('.lastname-more-six')
						.append(renderRow(elem));
				}
				return {};
			});
			fullCopy.sort(copmareAge).forEach(elem =>
				$('.age-sorted')
					.append(renderRow(elem))
			);
			fullCopy.sort(compareName).forEach(elem =>
				$('.fullname-sorted')
					.append(renderRow(elem))
			);
		}
		);
});

// $(document).ready(() => {
// 	$.ajax('http://www.mocky.io/v2/55f748b33568195d044b3dc8').done((response) => {
// 		const fullCopy = response.slice();
// 		fullCopy.map(elem => $('.all-users')
// 			.append(renderRows(elem))
// 		);
// 		fullCopy.forEach((elem) => {
// 			if (elem.isActive === true) {
// 				$('.active-users')
// 					.append(renderRows(elem));
// 			}
// 			return {};
// 		});
		// fullCopy.forEach((elem) => {
		// 	if (elem.name.last.length >= 6) {
		// 		$('.lastname-more-six')
		// 			.append(renderRows(elem));
		// 	}
		// 	return {};
		// });
// 		fullCopy.sort(compareNumeric).forEach(elem =>
// 			$('.age-sorted')
// 				.append(renderRows(elem))
// 		);
// 		fullCopy.sort(compareName).forEach(elem =>
// 			$('.fullname-sorted')
// 				.append(renderRows(elem))
// 		);
// 	});
// });


// function request(url, cb) {
// 	const xhr = new XMLHttpRequest();
// 	xhr.open('GET', url, true);
// 	xhr.onload = function onReady() {
// 		const response = this.response;
// 		const data = JSON.parse(response);
// 		cb(data);
// 	};
// 	xhr.send();
// }

// request('http://www.mocky.io/v2/55f748b33568195d044b3dc8', (data) => {
// 	console.log(data);
// });