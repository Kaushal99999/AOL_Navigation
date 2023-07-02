const mongoose = require('mongoose');
const fs = require('fs');
const extractedValues = [];
const filename = 'data.txt';

// replace with your db connection url

mongoose.connect('your database connection', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const costMatrixElementSchema = new mongoose.Schema({
    Mark1: {
      type: String,
      required: true
    },
    Mark2: {
      type: String,
      required: true
    },
    route: [{
      lat: Number,
      lng: Number
    }]
  });
  


const CostMatrixElement = mongoose.model('CostMatrixElement', costMatrixElementSchema);


fs.readFile(filename, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }

  const records = data.split('\n\n');

  records.forEach((record) => {
    const lines = record.split('\n');
    const [mark1, mark2] = lines[0].trim().split(' ');
    
    const latLngPairs = lines.slice(1).map((line) => {
      const [lat, lng] = line.split(',');
        return { lat: parseFloat(lat), lng: parseFloat(lng) };
    });

    // const extracted = {
    //   Mark1:mark1,
    //   Mark2:mark2,
      
    // };
    if(mark1=='/' && mark2=='/')
    { 
      return
    }

    const extracted = {
      Mark1:mark1,
      Mark2:mark2,
      route:latLngPairs}

    extractedValues.push(extracted);
  });
  CostMatrixElement.insertMany(extractedValues)
        .then(() => {
          
          console.log('Inserted successfully');
      
        })
        .catch((error) => {
          console.log(error);
        });
 

});



