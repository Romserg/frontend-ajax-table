export default function renderRows(elem) {
	return (`<tr><td><img src='${elem.picture}'></td>
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