const socket = io();
var userMarker;
let map;
var directionsService;
var directionsDisplay;
var polyline;
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 12.828757724448145, lng: 77.51208469752524 },
    zoom: 17,
    styles: [
        {
          featureType: "poi",
          elementType: "labels",
          stylers: [{ visibility: "off" }] // Set the visibility of POI labels to "off"
        }
      ]
  });




    var markerData = [
        { position: { lat: 12.8269766477284, lng:  77.51039359642583 }, name: "Vishala Cafe" },
        { position: { lat:     12.829040371836763, lng: 77.5115431933855 }, name: "Reception" },
        { position: { lat:12.824277345373298, lng: 77.50860455059286},name:"Annapurna"},
        { position: { lat:12.827091735461684, lng: 77.50986794583741},name:"Madhurya"}
        , 
        // Add more marker positions and names as needed
      ];


    
    for (var i = 0; i < markerData.length; i++) {
        var marker = new google.maps.Marker({
          position: markerData[i].position, // Set the marker position
          map: map, // Specify the map
          label: markerData[i].name // Set the marker title or label
        });
    }

}

function updateCurrentLocation() {
  if (navigator.geolocation) {
    // Register the watchPosition callback
    navigator.geolocation.watchPosition(function(position) {
      var userLatLng = {
        lat: position.coords.latitude,
        lng: position.coords.longitude
      };

      // Create or update the user marker
      if (userMarker) {
        userMarker.setPosition(userLatLng);
      } else {
        userMarker = new google.maps.Marker({
          position: userLatLng,
          map: map,
          title: 'You are here!'
        });
      }

      // Set the map center to the user's location
      map.setCenter(userLatLng);
    },
    (error) => {
      console.error("Error getting user location:", error);
    },
    { enableHighAccuracy: true, timeout: 5000, maximumAge: 0 }
    );
  }
}


document.getElementById('button').addEventListener('click', function() {
    
    
    
        // Add more locations as needed
    
    var sourceSelect = document.getElementById('source-select');
    var destinationSelect = document.getElementById('destination-select');

    var source = sourceSelect.options[sourceSelect.selectedIndex].value;
    var destination = destinationSelect.options[destinationSelect.selectedIndex].value;

    socket.emit('navigate',{Start:source,End:destination});
    socket.on('navigate_Resp',function(route){
      if (polyline) {
        polyline.setMap(null);
      }
       polyline = new google.maps.Polyline({
        path: route,
        geodesic: true,
        strokeColor: "#FF0000",
        strokeOpacity: 1.0,
        strokeWeight: 2,
      });
      polyline.setMap(map);
    });


    }

);
    
   
  
    // Clear any existing markers or polylines on the map
  
    // Create a polyline to connect the markers
    


initMap();
updateCurrentLocation();

