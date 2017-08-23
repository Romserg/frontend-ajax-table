import $ from 'jquery'; // eslint-disable-line
import renderRows from './renderRows';
import compareName from './compareName';
import compareNumeric from './compareNumeric';

export default {};


$(document).ready(() => {
	$.ajax('http://www.mocky.io/v2/55f748b33568195d044b3dc8').done((response) => {
		response.map(elem => $('.all-users')
			.append(renderRows(elem))
		);
		response.forEach((elem) => {
			if (elem.isActive === true) {
				$('.active-users')
					.append(renderRows(elem));
			}
			return {};
		});
		response.forEach((elem) => {
			if (elem.name.last.length >= 6) {
				$('.lastname-more-six')
					.append(renderRows(elem));
			}
			return {};
		});
		response.sort(compareNumeric).forEach(elem =>
			$('.age-sorted')
				.append(renderRows(elem))
		);
		response.sort(compareName).forEach(elem =>
			$('.fullname-sorted')
				.append(renderRows(elem))
		);
	});
});


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

// 1 - Обработать данные
// 2 - Сгенерировать разметку (взять значения и обернуть в теги)
// 3 - Вставка в документ.
