function initContactMap() {
	var map = new google.maps.Map(document.getElementById('map'), {
		center: {lat: 56.853019, lng: 60.605791},
		scrollwheel: false,
		draggable: false,
		zoom: 14,
	});



	var marker = new google.maps.Marker({
		map: map,
		position: {lat: 56.853019, lng: 60.605791},
		title: 'Среднеуральск, улица Победы, 1 ',
	});


}