function initBuyMap() {
	var map = new google.maps.Map(document.getElementById('buymap'), {
		center: {lat: 56.853019, lng: 60.605791},
		scrollwheel: false,
		draggable: true,
		zoom: 14,
	});

	var infoBubble = new InfoBubble({
		map: map,
		content: '<div class="map__chem"><a href="#" class="map__chem-link">Схема проезда</a></div><div class="map__info"><span class="map__street">ул. Баумана, 56</span><br>09.00-20.00, без выходных</div>',
		shadowStyle: 0,
		padding: 0,
		backgroundColor: 'transparent',
		borderRadius: 0,
		borderWidth: 0,
		borderColor: '#000',
		disableAutoPan: true,
		hideCloseButton: true,
		backgroundClassName: 'map__infobubel',
		arrowPosition: 50,
		arrowSize: 0,
		arrowStyle: 0
	});

	var marker = new google.maps.Marker({
		map: map,
		position: {lat: 56.853019, lng: 60.605791},
		title: 'Hello World!',
		icon: { url: 'img/map-marker.png', size: new google.maps.Size(44, 72)}
	});

	map.addListener('click', function() {
		if(infoBubble.isOpen()){
			infoBubble.close();
		}
	});

	marker.addListener('click', function() {
		infoBubble.open(map, marker);
	});


	var infoBubble1 = new InfoBubble({
		map: map,
		content: '<div class="map__chem"><a href="#" class="map__chem-link">Схема проезда</a></div><div class="map__info"><span class="map__street">ул. Баумана, 56</span><br>09.00-20.00, без выходных</div>',
		shadowStyle: 0,
		padding: 0,
		backgroundColor: 'transparent',
		borderRadius: 0,
		borderWidth: 0,
		borderColor: '#000',
		disableAutoPan: true,
		hideCloseButton: true,
		backgroundClassName: 'map__infobubel',
		arrowPosition: 50,
		arrowSize: 0,
		arrowStyle: 0
	});

	var marker1 = new google.maps.Marker({
		map: map,
		position: {lat: 56.852851, lng: 60.624738},
		title: 'Hello World!',
		icon: { url: 'img/map-marker.png', size: new google.maps.Size(44, 72)}
	});

	map.addListener('click', function() {
		if(infoBubble1.isOpen()){
			infoBubble1.close();
		}
	});

	marker1.addListener('click', function() {
		infoBubble1.open(map, marker1);
	});
}