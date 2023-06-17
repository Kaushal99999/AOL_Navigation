// Step 6: Retrieve the combination of routes based on the given path
const mongoose = require('mongoose');
mongoose.connect('process.env.mongodb://localhost:27017/Graph_Data', {
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

async function findRoute(locationA, locationB) {
    const route = await CostMatrixElement.findOne({
      $or: [
        { Mark1: locationA, Mark2: locationB },
        { Mark1: locationB, Mark2: locationA }
      ]
    })
    .select('-_id')
    .exec();
  
    if (route) {
      return route.route;
    } else {
      return 'No route found.';
    }
  }




async function findRoutes(array) {
    let result = [];
  try {
    for (let i = 0; i < array.length - 1; i++) {
      const locationA = array[i];
      const locationB = array[i + 1];
      const route = await findRoute(locationA, locationB);
      const cleanedRoute = route.map(({ lat, lng }) => ({ lat, lng }));
      result = result.concat(cleanedRoute);
    }
    // mongoose.disconnect();

    // return result
    return result;
    // You can perform additional operations with the 'result' array here
  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = findRoutes;
