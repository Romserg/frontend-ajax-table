import $ from 'jquery'; // eslint-disable-line
export default {};


$(document).ready(() => {
	$.ajax('http://www.mocky.io/v2/55f748b33568195d044b3dc8').done((response) => {
		response.map(elem => $('.all-users')
			.append(`<tr><td><img src='${elem.picture}'></td>
					 <td>${elem.name.first} ${elem.name.last}</td>
					 <td>${elem.isActive}</td>
					 <td>${elem.about}</td>
					 <td>${elem.balance}</td>
					 <td>${elem.age}</td>
					 <td>${elem.registered}</td>
					 <td>${elem.company}</td>
					 <td><a href='mailto:${elem.email}'>${elem.email}</a></td>
					 <td><a href='tel:${elem.phone}'>${elem.phone}</a></td>
					 <td>${elem.address}</td></tr>`)
		);
		response.filter((elem) => {
			if (elem.isActive === true) {
				$('.active-users')
					.append(`<tr><td><img src='${elem.picture}'></td>
					 <td>${elem.name.first} ${elem.name.last}</td>
					 <td>${elem.isActive}</td>
					 <td>${elem.about}</td>
					 <td>${elem.balance}</td>
					 <td>${elem.age}</td>
					 <td>${elem.registered}</td>
					 <td>${elem.company}</td>
					 <td><a href='mailto:${elem.email}'>${elem.email}</a></td>
					 <td><a href='tel:${elem.phone}'>${elem.phone}</a></td>
					 <td>${elem.address}</td></tr>`);
			}
			return {};
		});
		response.filter((elem) => {
			const array = [];
			array.push(elem.name.first);
			array.sort();
			// console.log(array);
			return {};
		});
		response.filter((elem) => {
			if (elem.name.last.length >= 6) {
				$('.lastname-more-six')
					.append(`<tr><td><img src='${elem.picture}'></td>
					 <td>${elem.name.first} ${elem.name.last}</td>
					 <td>${elem.isActive}</td>
					 <td>${elem.about}</td>
					 <td>${elem.balance}</td>
					 <td>${elem.age}</td>
					 <td>${elem.registered}</td>
					 <td>${elem.company}</td>
					 <td><a href='mailto:${elem.email}'>${elem.email}</a></td>
					 <td><a href='tel:${elem.phone}'>${elem.phone}</a></td>
					 <td>${elem.address}</td></tr>`);
			}
			return {};
		});
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
