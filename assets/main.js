$(document).ready(function () {
	//AJAX
	$.ajax({
		type: 'GET',
		url: 'https://www.feriadosapp.com/api/holidays.json',
		success: function (data) {
			console.log('success', data.data);
			let holiday = Object.values(data.data);
			let tableHolidays = `<tr><th>ID</th><th>Fecha</th><th>Titulo</th><th>Extra</th><th>Ley</th></tr>`;
			for (let i = 0; i < holiday.length; i++) {
				tableHolidays += `<tr><td>${holiday[i].id}</td>
                                    <td>${holiday[i].date}</td>
                                    <td>${holiday[i].title}</td>
                                    <td>${holiday[i].extra}</td>
                                    <td>${holiday[i].law}</td></tr>`;
			}
			document.getElementById('content').innerHTML = tableHolidays;
		},
	});
});
