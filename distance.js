const fs = require('fs');
const filename = 'data.txt';
fs.readFile(filename, 'utf8', (err, data) => {
    if (err) {
      console.error(err);
      return;
    }
function haversineDistance(lat1, lon1, lat2, lon2) {
    const R = 6371.0; // Radius of the Earth in kilometers
  
    // Convert latitude and longitude from degrees to radians
    const lat1Rad = (lat1 * Math.PI) / 180;
    const lon1Rad = (lon1 * Math.PI) / 180;
    const lat2Rad = (lat2 * Math.PI) / 180;
    const lon2Rad = (lon2 * Math.PI) / 180;
  
    // Calculate the differences between the latitudes and longitudes
    const dlat = lat2Rad - lat1Rad;
    const dlon = lon2Rad - lon1Rad;
  
    // Apply the Haversine formula
    const a =
      Math.sin(dlat / 2) ** 2 +
      Math.cos(lat1Rad) * Math.cos(lat2Rad) * Math.sin(dlon / 2) ** 2;
    const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  
    // Calculate the distance in kilometers
    const distance = R * c;
  
    return distance;
  }
  
  function calculateDistance(coordinates) {
    let totalDistance = 0.0;
    for (let i = 0; i < coordinates.length - 1; i++) {
      const [lat1, lon1] = coordinates[i];
      const [lat2, lon2] = coordinates[i + 1];
      const distance = haversineDistance(lat1, lon1, lat2, lon2);
      totalDistance += distance;
    }
    return totalDistance;
  }


  
  
    const records = data.split('\n\n');
  
    records.forEach((record) => {
      const lines = record.split('\n');
      const [mark1, mark2] = lines[0].trim().split(' ');
      
      const latLngPairs = lines.slice(1).map((line) => {
        const [lat, lng] = line.split(',');
          return [parseFloat(lat), parseFloat(lng)];
      });

     const dis=calculateDistance(latLngPairs)
      const extracted = [
        mark1,
        mark2,
        dis
    ];
      if(mark1=='/' && mark2=='/')
      { 
        return
      }

      console.log(extracted)

  
      // Process the data for each record as per your requirement
    });
});
  // Example usage

  