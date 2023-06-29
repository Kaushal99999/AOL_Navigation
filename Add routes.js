const mongoose = require('mongoose');
const fs = require('fs');
const extractedValues = [];
const filename = 'data.txt';
// Step 1: Set up Mongoose connection
mongoose.connect('mongodb+srv://root:tiger@cluster0.hmlmk6v.mongodb.net/cluster0?retryWrites=true&w=majority', {
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
  

// Step 3: Create a Mongoose model
const CostMatrixElement = mongoose.model('CostMatrixElement', costMatrixElementSchema);
// Step 4: Create a new instance of the model

 // Replace with your actual file name or path

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

    // Process the data for each record as per your requirements
    extractedValues.push(extracted);
  });
  CostMatrixElement.insertMany(extractedValues)
        .then(() => {
          
          console.log('Inserted successfully');
           // Resolve the promise with the extracted values
        })
        .catch((error) => {
          console.log(error);// Reject the promise with the error
        });
 

});



