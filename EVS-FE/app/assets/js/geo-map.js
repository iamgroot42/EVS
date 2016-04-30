function plotGeoMap(){
	GeoMapData = [
		{'latitude':28.5444, 'longitude':77.2725, 'elec':10 },
		{'latitude':28.5354383, 'longitude': 77.26393259999998, 'elec':15},
		{'latitude':28.5304408, 'longitude': 77.25057330000004, 'elec':8}
	];
	// console.log(GeoMapData);
		var marker;
		var infowindow;
		// var image=
		// {
		// 	url: "https://g.twimg.com/business/page/image/11TwitterForSmallBusiness-300_1.png",
		// 	scaledSize: new google.maps.Size(100, 100)

		// };
		var shape = {
			coords: [1, 1, 1, 100, 100, 100, 18 , 1],
			type: 'poly'
		};

		function initialize() {
			var mapDiv = document.getElementById('borderless-world');
			var mylatlng2 = new google.maps.LatLng(45.82647077, 8.81214785);
			var map = new google.maps.Map(mapDiv, {
                center: new google.maps.LatLng(28.5444, 77.2725),
                                        zoom: 12,
                                        styles: [{
                                            "featureType": "water",
                                            "stylers": [{
                                                "color": "#021019"
                                            }]
                                        }, {
                                            "featureType": "landscape",
                                            "stylers": [{
                                                "color": "#08304b"
                                            }]
                                        }, {
                                            "featureType": "poi",
                                            "elementType": "geometry",
                                            "stylers": [{
                                                "color": "#0c4152"
                                            }, {
                                                "lightness": 5
                                            }]
                                        }, {
                                            "featureType": "road.highway",
                                            "elementType": "geometry.fill",
                                            "stylers": [{
                                                "color": "#000000"
                                            }]
                                        }, {
                                            "featureType": "road.highway",
                                            "elementType": "geometry.stroke",
                                            "stylers": [{
                                                "color": "#0b434f"
                                            }, {
                                                "lightness": 25
                                            }]
                                        }, {
                                            "featureType": "road.arterial",
                                            "elementType": "geometry.fill",
                                            "stylers": [{
                                                "color": "#000000"
                                            }]
                                        }, {
                                            "featureType": "road.arterial",
                                            "elementType": "geometry.stroke",
                                            "stylers": [{
                                                "color": "#0b3d51"
                                            }, {
                                                "lightness": 16
                                            }]
                                        }, {
                                            "featureType": "road.local",
                                            "elementType": "geometry",
                                            "stylers": [{
                                                "color": "#000000"
                                            }]
                                        }, {
                                            "elementType": "labels.text.fill",
                                            "stylers": [{
                                                "color": "#ffffff"
                                            }]
                                        }, {
                                            "elementType": "labels.text.stroke",
                                            "stylers": [{
                                                "color": "#000000"
                                            }, {
                                                "lightness": 13
                                            }]
                                        }, {
                                            "featureType": "transit",
                                            "stylers": [{
                                                "color": "#146474"
                                            }]
                                        }, {
                                            "featureType": "administrative",
                                            "elementType": "geometry.fill",
                                            "stylers": [{
                                                "color": "#000000"
                                            }]
                                        }, {
                                            "featureType": "administrative",
                                            "elementType": "geometry.stroke",
                                            "stylers": [{
                                                "color": "#144b53"
                                            }, {
                                                "lightness": 14
                                            }, {
                                                "weight": 1.4
                                            }]
                                        }],
                                        mapTypeId: google.maps.MapTypeId.ROADMAP
                                    });
 			google.maps.event.trigger(map, 'resize');
			var markers=[];

			for (var i = 0; i < GeoMapData.length; i++) {
				var mylatlng = new google.maps.LatLng(GeoMapData[i].latitude,GeoMapData[i].longitude);
				var marker = new google.maps.Marker({
								position: mylatlng,
								//map: map,
								icon:'http://maps.google.com/mapfiles/ms/icons/yellow-dot.png',
								title:GeoMapData[i]._id,
							    draggable:false,
							    animation: google.maps.Animation.DROP,
							    shape: shape
							});

				// console.log("tweet_id", GeoMapData[i]._id);



				  // var contentString = '<div class="col-sm-6">'+
						// 		      '<table class = "table table-condensed">'+
						// 		      '<tbody>'+
						// 		      '<tr>'+
						// 		      '<td>'+
						// 		      'Text'+
						// 		      '</td>'+
						// 		      '<td>'+
						// 		      GeoMapData[i].content_post+
						// 		      '</td>'+
						// 		      '</tr>'+
						// 		      '</tbody>'+
						// 		      '</table>'+
						// 		      '</div>'
						// 		      ;

  // var infowindow = new google.maps.InfoWindow({
  //     content: contentString
  // });

				var infowindow = new google.maps.InfoWindow({
				content: "No details"
				});

				// google.maps.event.addListener(marker, 'mouseover', function() {
				// 	infowindow.setContent("Content: " + text);
				// 	infowindow.open(map, this);
				// });
				google.maps.event.addListener(marker, 'mouseover', (function(marker, i) {
        			return function() {
          				infowindow.setContent('<div> <p>Electricity Consumption: <b>'+ GeoMapData[i].elec + 'MW</b></p></div>');
          				infowindow.open(map, marker);
        			}
      			})(marker, i));
   //    			google.maps.event.addListener(marker, 'click', (function(marker, i) {
   //      			return function() {
   //        				window.location.href = marker.url;
   //      			}
   //    			})(marker, i));
				markers.push(marker);
			}

			markers = markers.map(function(mark) { return mark.setMap(map); })
			function isInfoWindowOpen(infoWindow){
			var map = infoWindow.getMap();
			return (map !== null && typeof map !== "undefined");
			}

			function toggleBounce() {
			if(isInfoWindowOpen(infowindow))
			{
				infowindow.close(map,marker);
			}
			else
			{
				infowindow.open(map,marker);
			}

			}


		}

		initialize();
		//google.maps.event.addDomListener(window, 'load', function() { console.log('loaded'); });
	// }else $('#borderless-world').html('<h3><div class="label label-danger">Data for this analysis is not available.</div></h3>');
}
plotGeoMap();