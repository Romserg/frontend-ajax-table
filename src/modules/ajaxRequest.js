import $ from 'jquery'; // eslint-disable-line

const url = 'http://www.mocky.io/v2/55f748b33568195d044b3dc8';

export default function ajaxRequest() {
	return $.ajax({
		url,
		type: 'GET'
	});
}

