
const mongoose = require('mongoose');
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
    if (route.Mark1 === locationB && route.Mark2 === locationA) {
      // Reverse the order of the route
      let reversedRoute = route.route.reverse();
      return reversedRoute;
    } else {
      return route.route; // Return the route as it is
    }
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


    console.log(result);
    return result;
  } catch (error) {
    console.error('Error:', error);
  }
}

module.exports = findRoutes;
