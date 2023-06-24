function calculateDistance(lat1, lng1, lat2, lng2) {
    const earthRadius = 6371; // Radius of the Earth in kilometers
    const dLat = toRadians(lat2 - lat1);
    const dLng = toRadians(lng2 - lng1);
    const a =
      Math.sin(dLat / 2) * Math.sin(dLat / 2) +
      Math.cos(toRadians(lat1)) * Math.cos(toRadians(lat2)) * Math.sin(dLng / 2) * Math.sin(dLng / 2);
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    const distance = earthRadius * c;
    return distance;
  }
  
  // Function to convert degrees to radians
  function toRadians(degrees) {
    return degrees * (Math.PI / 180);
  }
  
  // Function to find the nearest point
  function findNearestPoint(currentLat, currentLng, markerData) {
    var nearestPoint;
    var minDistance = Infinity;
  
    for (var i = 0; i < markerData.length; i++) {
      var marker = markerData[i];
      var markerLat = marker.position.lat;
      var markerLng = marker.position.lng;
      var distance = calculateDistance(currentLat, currentLng, markerLat, markerLng);
      console.log(marker);
  
      if (distance < minDistance) {
        minDistance = distance;
        nearestPoint = marker.value;
      }
    }
  
    return nearestPoint;
  }
  module.exports = findNearestPoint;