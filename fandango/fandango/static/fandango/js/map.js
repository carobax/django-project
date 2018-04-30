// modified this code https://www.sitepoint.com/google-maps-json-file/
function getJSONMarkers() {
          const markers = [
            {
              name:  "Regal Timberlyne 6",
              location: [35.9632, -79.0558]
            },
            {
              name: "Silverspot Cinema Chapel Hill 13",
              location: [35.9277, -79.0272]
            },
            {
              name: "AMC Classic Durham 15",
              location: [35.9606, -78.9576]
            },
            {
              name: "AMC Southpoint 17",
              location: [35.9054, -78.9451]
            },
            {
              name: "Stadium 10 at Northgate Mall",
              location: [36.017, -78.909]
            },
            {
              name: "Frank Theatres Parkside Town Commons Stadium 11",
              location: [35.8502, -78.892]
            },
            {
              name: "Chelsea Theatre",
              location: [35.9637, -79.0558]
            },
            {
              name: "Varsity Theatre",
              location: [35.9135, -79.0549]
            },
            {
              name: "Carolina Theatre",
              location: [35.9978, -78.9016]
            }
          ];
          return markers;
        }

        function loadMap() {
          // Initialize Google Maps
          const mapOptions = {
            center:new google.maps.LatLng(35.966403, -78.962512),
            zoom: 11
          }
          const map = new google.maps.Map(document.getElementById("map"), mapOptions);

          // Load JSON Data
          const hotelMarkers = getJSONMarkers();

          // Initialize Google Markers
          for(hotel of hotelMarkers) {
            let marker = new google.maps.Marker({
              map: map,
              position: new google.maps.LatLng(hotel.location[0], hotel.location[1]),
              title: hotel.name
            })
          }
          var contentString = '<div id="content">' + '<p>' + hotel.name +'</p>' + '</div>';

          var infowindow = new google.maps.InfoWindow({
              content: contentString
            });
            marker.addListener('click', function() {
            infowindow.open(map, marker);
          });

}
