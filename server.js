const findRoutes = require('./Get_routes');
const dijkstra = require('./path');
const findNearestPoint = require('./nearest-point');
const  findNearestCoordinate = require('./nearest-coordinate');

const path=require('path');
const express = require('express'); 
const http = require('http');
const socketIO = require('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const staticpath=path.join(__dirname+'/public');
app.use(express.static(staticpath));


app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname + '/public/index.html'));
});


io.on('connection', (socket) => {
  console.log('A client connected.');


  socket.on('navigate', (data) => {
    const start=data.Start;
    const end=data.End;
    


    const shortestPath = dijkstra(start, end);
    console.log(shortestPath);
    findRoutes(shortestPath)
  .then(result => {
    socket.emit('navigate_Resp',result);

  })
  .catch(error => {
    console.error('Error:', error);
  });

       
                

});


socket.on('navigate_s', (data) => {
  


 const nearestPoint = findNearestPoint(data.currentLat, data.currentLng, data.Mar_Data);
 const shortestPath = dijkstra(nearestPoint, data.End);

  
   findRoutes(shortestPath)
 .then(result => {
  const nearestCoordinate = findNearestCoordinate(data.currentLat, data.currentLng, result);
  const startIndex = result.findIndex((coord) => coord.lat === nearestCoordinate.lat && coord.lng === nearestCoordinate.lng);
  const filteredRoute =result.slice(startIndex)
  filteredRoute.unshift({lat:data.currentLat,lng:data.currentLng})
  socket.emit('navigate_Resps',filteredRoute);
   
 })
 .catch(error => {
   console.error('Error:', error);
 });
   
 });



});


    



server.listen(3000, () => {
  console.log('Server is running on port 3000');
});

