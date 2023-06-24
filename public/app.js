const socket = io();
var userMarker;
let map;
var polyline;
const  markers = [];

function get_current_loc(){
  navigator.geolocation.watchPosition(function(position) {
    c_Lat= position.coords.latitude,
    c_Lng = position.coords.longitude
    },{ enableHighAccuracy: true, timeout: 5000, maximumAge: 0 });
      return {lat:c_Lat,lng:c_Lng}
};

var markerData = [
  { position: { lat: 12.827148739101151, lng:   77.51039403444722 }, name: "Vishala Cafe" ,value:"Vishala_Cafe"},
  { position: { lat:  12.829063170223693, lng: 77.5115431933855 }, name: "Reception" ,value:"Reception"},
  { position: { lat:12.827316900983384, lng: 77.51003940922855},name:"Divine Services",value:"Divine_Services"},
  { position: { lat:12.827026589539434, lng:  77.50985570009512},name:"Madhurya",value:"Madhurya"},
  { position: { lat:12.829251527712131, lng: 77.5100983905505},name:"Guru Paduka Vanam",value:"Guru_Paduka_Vanam"},
  { position: { lat:12.825690255057022, lng: 77.50931509095787},name:"Vishalakshi Mantap- front side",value:"Vishalakshi_Mantap_front_side"},
  { position: { lat:  12.825740728856232, lng: 77.50947038700755},name:"Amphitheatre",value:"Amphitheatre"},
  { position: { lat:  12.826314668754733, lng:77.50875708339426},name:"Vishalakshi Mantap- back side",value:"Vishalakshi_Mantap_back_side"},
  { position: { lat:  12.824301350409954, lng: 77.50858349249623},name:"Annapoorna",value:"Annapoorna"},
  { position: { lat:  12.827266390131463, lng: 77.50793000441033},name:"Maitreyi Hall",value:"Maitreyi_Hall"},
  { position: { lat:  12.824710708932574, lng:  77.5083641143618},name:"Aparna Gate",value:"Aparna_Gate"},
  { position: { lat:  12.823473027632222, lng:  77.50848915727686},name:"Padmini Gate",value:"Padmini_Gate"},
  { position: { lat:  12.8277961, lng:  77.5070788},name:"Jamini Hall",value:"Jamini_Hall"},
  { position: { lat:  12.82844009419241, lng:  77.50734713717752},name:"Tripura Hall",value:"Tripura_Hall"},
  { position: { lat: 12.829420679678238, lng:  77.50750250477479},name:"Baswa Accomodation",value:"Baswa_Accomodation"},
  { position: { lat:  12.8278710, lng:  77.5061785},name:"Shat Kriya Hall",value:"Shat_Kriya_Hall"},
  { position: { lat:  12.827643854714616, lng: 77.50647352095065},name:"Vivasvan Yogshala",value:"Vivasvan_Yogshala"},
  { position: { lat:  12.8275013, lng:  77.5063438},name:"Kapila Hall",value:"Kapila_Hall"},
  { position: { lat:  12.828434199982599, lng: 77.50619069783005},name:"Anugraha Mantap",value:"Anugraha_Mantap"},
  { position: { lat:  12.828483889900827, lng:   77.50585273952788},name:"Shiva Temple",value:"Shiva_Temple"},
  { position: { lat:  12.8267186, lng:   77.5109214},name:"Vishala Men Dormitory",value:"Vishala_Men_Dormitory"},
  { position: { lat:  12.8267929, lng:   77.5113928},name:"Female Dormitory Yogini",value:"Female_Dormitory_Yogini"},
  { position: { lat:  12.825924540674214, lng:  77.51062602603774},name:"Saraswati Hall  Block-C",value:"Saraswati_Hall_C"},
  { position: { lat:  12.82518702916026, lng:   77.51046777572596},name:"Saraswati Hall Block-A",value:"Saraswati_Hall_A"},
  { position: { lat: 12.825221024831187, lng:  77.50760769474185},name:"Panchkarma Gate",value:"Panchkarma_Gate"},
  { position: { lat: 12.8238711116911, lng:  77.50693004396764},name:"Meera Vanam",value:"Meera_Vanam"},
  { position: { lat: 12.82416716395596, lng:  77.5090431124602},name:"Vasuki",value:"Vasuki"},
  { position: { lat: 12.824390878408643, lng:  77.50904915029359},name:"Setu",value:"Setu"},
  { position: { lat: 12.824300215207051, lng:  77.50932930576292},name:"Nandi",value:"Nandi"},
  { position: { lat: 12.824155389505568, lng:  77.50952010129805},name:"Siddhi",value:"Siddhi"},
  { position: { lat: 12.82398447681061, lng:   77.50972256204453},name:"Riddhi",value:"Riddhi"},
  { position: { lat: 12.82389243704045, lng:  77.50995375960393},name:"Karthik",value:"Karthik"},
  { position: { lat: 12.82376304774287, lng:  77.51016717272647},name:"Ganesh",value:"Ganesh"},
  { position: { lat: 12.82392978651081, lng:  77.5105474859399},name:"Parvati",value:"Parvati"},
  { position: { lat: 12.823627988341244, lng:  77.5102432960004},name:"Raddha",value:"Raddha"},
  { position: { lat: 12.823592480911467, lng:  77.51039538513538},name:"Meera",value:"Meera"},
  { position: { lat: 12.823659002687233, lng:  77.51076089906243},name:"Shiva",value:"Shiva"},
  { position: { lat: 12.823400322969285, lng:  77.51065886349602},name:"Buddha",value:"Buddha"},
  { position: { lat: 12.823256204416364, lng:  77.51092876815812},name:"Mahavir",value:"Mahavir"},
  { position: { lat: 12.822309762932589, lng:  77.50994652905163},name:"Tulsi Dormitory",value:"Tulsi_Dormitory"},
  { position: { lat: 12.821828543070316, lng:  77.50892997193688},name:"Trotakacharya Kutir",value:"Trotakacharya_Kutir"},
  { position: { lat: 12.820792871148997, lng:  77.50914186642792},name:"Trotakacharya Dormitory",value:"Trotakacharya_Dormitory"},
  { position: { lat: 12.829977599189622, lng:  77.50768039181025},name:"Basava Accomodation C",value:"Baswa_Accomodation_C"},
  { position: { lat: 12.830912205276139, lng:  77.50861730999357},name:"Basava Accomodation B",value:"Baswa_Accomodation_B"},
  { position: { lat: 12.830933286576123, lng:  77.50938846566604},name:"Basava Accomodation A",value:"Baswa_Accomodation_A"},
  { position: { lat: 12.830346523066844, lng:  77.5093236021048},name:"Basava Hall",value:"Baswa_Hall"},
  { position: { lat: 12.82995300425802, lng:  77.50914214077851},name:"Basava Bunglow 1",value:"Baswa_Bunglow_1"},
  { position: { lat: 12.829693683731598, lng:  77.50901267178264},name:"Basava Bunglow 2",value:"Baswa_Bunglow_2"},
  { position: { lat:12.829366623279894, lng:  77.50878629476657},name:"Basava Bunglow 3",value:"Baswa_Bunglow_3"},
  { position: { lat: 12.829016754468848, lng:  77.50870178406097},name:"Basava Bunglow 4",value:"Baswa_Bunglow_4"},
  { position: { lat: 12.82873603821437, lng:  77.50854983526102},name:"Basava Bunglow 5",value:"Baswa_Bunglow_5"},
  { position: { lat: 12.827004184337305,  lng:  77.50837750500726},name:"Yagnashala Accomodation",value:"Yagnashala_Accomodation"},
  { position: { lat: 12.827404320937426, lng:   77.50855989520207},name:"Yagnashala Accomodation A",value:"Yagnashala_Accomodation_A"},
  { position: { lat: 12.828086554009655, lng:  77.50882774270191},name:"Yagnashala Accomodation B",value:"Yagnashala_Accomodation_B"},
  { position: { lat: 12.828658353524318, lng:  77.50905415205189},name:"Yagnashala Accomodation C",value:"Yagnashala_Accomodation_C"},
  { position: { lat: 12.829391557056365, lng:  77.50942496437932},name:"Yagnashala Accomodation D",value:"Yagnashala_Accomodation_D"},
  { position: { lat: 12.829834739170014, lng:  77.50980082907888},name:"Vrinda Van",value:"Vrinda_Van"},
  { position: { lat: 12.822324470307205, lng:  77.51112294515565},name:"Soudamini",value:"Soudamini"},
  { position: { lat: 12.822899840628265, lng:  77.51080644448012},name:"Adishesha",value:"Adishesha"},
  { position: { lat: 12.823012283201288, lng:  77.5104363401032},name:"Vasuki(Back-side)",value:"Vasuki_2"},
  { position: { lat: 12.825810894074964, lng:  77.5089480947557},name:"Gauri Hall",value:"Gauri_Hall"},
  { position: { lat: 12.825885998521839, lng:  77.50861439896681},name:"Shankra Hall",value:"Shankra_Hall"},
  { position: { lat: 12.825683186299, lng:  77.50887474579147},name:"Vishalakshi Mantap GF",value:"Vishalakshi_Mantap_GF"},
  { position: { lat: 12.825640905948156, lng:  77.50851111140369},name:"Mahavir Hall",value:"Mahavir_Hall"},
  { position: { lat: 12.825640905948156, lng:  77.50860609171954},name:"Buddha Hall",value:"Buddha_Hall"},
  { position: { lat: 12.824658775321398, lng:  77.50301116365715},name:"Gopi",value:"Gopi"},
  { position: { lat: 12.825313744760626, lng:  77.50205480628338},name:"Gokul",value:"Gokul"},
  { position: { lat: 12.829210222701672, lng:  77.50432615509496},name:"Gurukul Cottages",value:"Gurukul_Cottages"},
   { position: { lat: 12.828237459936085, lng:  77.51244766924864},name:"Cafe Vishala Bistro",value:"Cafe_Vishala_Bistro"},
   { position: { lat: 12.8251555694677, lng:  77.5177185490671},name:"Sarda Vihar",value:"Sarda_Vihar"},
   { position: { lat: 12.825742063101554, lng:  77.50628593447905},name:"Panchamrut",value:"Panchamrut"},
   { position: { lat: 12.82205685983136, lng:  77.51223717428047},name:"TTP and YLTP Office",value:"TTP_YLTP_Office"},
   { position: { lat: 12.821192992671913, lng:  77.51398104901047},name:"Narayan",value:"Narayan"},
   { position: { lat: 12.821373709647219, lng:  77.51395036391197},name:"Devi Place",value:"Devi_Place"},
   { position: { lat: 12.821410810467144, lng:  77.51396509275924},name:"SSRDP",value:"SSRDP"},
   { position: { lat: 12.821629824880567, lng:   77.51384971679622},name:"Shanmukha",value:"Shanmukha"},
   { position: { lat: 12.821781818372937, lng:  77.51399823267296},name:"Rishimukh",value:"Rishimukh"},
   { position: { lat: 12.822006816450038, lng:  77.51381043986757},name:"VVKI",value:"VVKI"},
   { position: { lat: 12.822811955692305, lng:   77.51376119837013},name:"SBI",value:"SBI"},
   { position: { lat: 12.822778445461042, lng:  77.51399440511871},name:"Gate1",value:"Gate1"},
   { position: { lat: 12.822716294389947, lng:  77.51216721224525},name:"Vasishta",value:"Vasishta"},
   { position: { lat: 12.822618157234244, lng:  77.51208620358521},name:"Vishwamitra",value:"Vishwamitra"},
   { position: { lat: 12.822650234160985, lng:  77.512629435572},name:"Gargi Dinning Hall",value:"Gargi_Dinning_Hall"},
   { position: { lat: 12.822065000883203, lng:  77.51269571537946},name:"Mahalakshmi Mantap",value:"Mahalakshmi_Mantap"},
   { position: { lat: 12.82172339974258, lng:  77.51303442323976},name:"Sumeru Mantap",value:"Sumeru_Mantap"},
   { position: { lat: 12.822595181600143, lng: 77.51304798033982},name:"Old Amphitheater",value:"Old_Amphitheater"},
   { position: { lat: 12.82276153603966, lng:  77.51318790438897},name:"Arundhati",value:"Arundhati"},
   { position: { lat: 12.82276887110844, lng:  77.51342120747874},name:"SSIAS",value:"SSIAS"},
   { position: { lat: 12.822783232637208, lng:  77.5136347757643},name:"IAHV",value:"IAHV"},
   { position: { lat: 12.824996267277507, lng:  77.50989447192086},name:"Shuka Hall",value:"Shuka_Hall"},
   { position: { lat: 12.824798974366775, lng:   77.50988995034119},name:"Badrivishala",value:"Badri_Vishala"},
   { position: { lat: 12.825149472280266, lng:  77.50968760965097},name:"Vaibhavi",value:"Vaibhavi"},
   { position: { lat: 12.825215717682992, lng:  77.50921668689786},name:"Secretariat",value:"Secretariat"},
   { position: { lat: 12.828571278560576, lng:  77.51246445480115},name:"Gate5",value:"Gate5"},
   { position: { lat: 12.826502626761163, lng:  77.50807368459056},name:"Gate4",value:"Gate4"},
   { position: { lat: 12.82449575263911, lng:  77.50860918160919},name:"Gate3",value:"Gate3"},
   { position: { lat: 12.822911171264067, lng:   77.51060979720278},name:"Gate2",value:"Gate2"},
   { position: { lat: 12.8285624, lng: 77.5046943 },name:"Hathishala",value:"Hathishala"},
   { position: { lat: 12.8283538, lng:   77.4982033},name:"A2 Milk Cafe",value:"A2_Milk_Cafe"},
   { position: { lat:12.828209 , lng:   77.498119},name:"SriSri Gaushala",value:"Gaushala"},
   { position: { lat:  12.8286095, lng:   77.5036335},name:"Nakshatra Vanam",value:"Nakshatra_Vanam"},
   { position: { lat: 12.8279884, lng: 77.5024332  },name:"Devi Hall",value:"Devi_Hall"},
   { position: { lat:12.8285859 , lng:  77.5024758 },name:"Markendeya",value:"Markandeya"},
   { position: { lat:12.827653, lng:  77.502934 },name:"Veda Bhavanam",value:"Veda_Bhavanam"},
   { position: { lat:12.827303, lng:  77.502730},name:"Vaidic Bhavanam",value:"Vaidic_Bhavanam"},
   { position: { lat: 12.8276595, lng:  77.5025495 },name:"Archana",value:"Archana"},
   { position: { lat: 12.8287527, lng: 77.5028254 },name:"Gurukul Prayogshala",value:"Gurukul_Prayogshala"},
   { position: { lat:12.8284889 , lng: 77.5029619},name:"Gurukul Yagnashala",value:"Gurukul_Yagnashala"},
   { position: { lat: 12.8280779, lng: 77.5029311},name:"Sri Pratapa Ganpathi Temple",value:"Ganpati_Temple"},
   { position: { lat: 12.8279645, lng: 77.5033421},name:"Veda Agama Pathashala and Vaidik Pathashala",value:"Gurukul"},
   { position: { lat:12.8284797 , lng: 77.5046597 },name:"Radha Kunj Gate 2",value:"Radha_Kunj_Gate2"},
   { position: { lat:12.828141, lng: 77.504701},name:"Mantap Radha Kunj",value:"Mantap_Radha_Kunj"},
   { position: { lat:12.8254751, lng: 77.5067462},name:"Krishna Kutir",value:"Krishna_Kutir"},
   { position: { lat:12.8272989 , lng:  77.5058376},name:"Krishna Hall",value:"Krishna_Hall"},
   { position: { lat:12.826861172612183 , lng:  77.50610550466455},name:"Radha Kunj Gate 1",value:"Radha_Kunj_Gate1"},
   { position: { lat:12.828024635846202 , lng:77.50492356389563},name:"Radha Kunj Conference Hall",value:"Radha_Kunj_ConferenceHall"},
   { position: { lat:12.827859938051384 , lng:77.50698097283623},name:"Patanjali Mantap",value:"Patanjali_Mantap"},
   { position: { lat:   12.825711173988202 , lng:77.50844457211839},name:"Ganesha Hall",value:"Ganesha_Hall"},
   { position: { lat:   12.824398165665617 , lng:77.50991582879632},name:"Ganga Kutir",value:"Ganga_Kutir"},
   { position: { lat:   12.824149090906152 , lng:77.50853380873379},name:"Annapoorna Hall",value:"Annapoorna_Hall"},
   {position:{},name:"Your Loc",value:"current_location"}, 



]
  // Add more marker positions and names as needed

var icon={url:"./standing-up-man-svgrepo-com.svg",
scaledSize: new google.maps.Size(50, 50),
anchor: new google.maps.Point(28,22)}
;
  
async function initMap() {
  const { Map } = await google.maps.importLibrary("maps");
  map = new Map(document.getElementById("map"), {
    center: { lat: 12.828757724448145, lng: 77.51208469752524 },
    zoom: 17,
    styles: [
        {

          featureType: "poi",
          elementType: "labels",
          disableDefaultUI: true,
          stylers: [{ visibility: "off" }], // Set the visibility of POI labels to "off"
        }
      ], gestureHandling: "greedy"
  });


  



    
    // for (var i = 0; i < markerData.length; i++) {
    //     var marker = new google.maps.Marker({
    //       position: markerData[i].position, // Set the marker position
    //       map: map, // Specify the map
    //       label: markerData[i].name // Set the marker title or label
    //     });
    // }



}

function getCoordinatesFromName(name) {
  for (let i = 0; i < markerData.length; i++) {
    if (markerData[i].name === name) {
      return markerData[i].position;
    }
  }
  return null; // Return null if name not found
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
          icon:icon,
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


function findMarkerByName(name) {
  return markerData.find(marker => marker.value === name);
}

function addMarker(position, title) {
  const marker = new google.maps.Marker({
    position,
    map,
    label:title,
  });
  markers.push(marker); 
}

function removeMarkers() {
  markers.forEach(marker => {
    marker.setMap(null); // Remove the marker from the map
  });
  markers.length = 0; // Clear the markers array
}

document.getElementById('button').addEventListener('click', function() {
    
    
    
        // Add more locations as needed
    
    var sourceSelect = document.getElementById('source-select');
    var destinationSelect = document.getElementById('destination-select');

    var source = sourceSelect.options[sourceSelect.selectedIndex].value;
    var destination = destinationSelect.options[destinationSelect.selectedIndex].value;
  
    if(markers.length>0)
    {
    removeMarkers();
    }
    const sourceMarker = findMarkerByName(source);
    const destinationMarker = findMarkerByName(destination);  
    if (sourceMarker) {
      if(sourceMarker.name=="Your Loc")
      {
        pos=get_current_loc();
        addMarker(pos, sourceMarker.name);

      }
      else{
      addMarker(sourceMarker.position, sourceMarker.name);
    }
    }
    
    if (destinationMarker) {
      addMarker(destinationMarker.position, destinationMarker.name);
    }
    

    if(source=='current_location')
    {
       pos=get_current_loc()

      socket.emit('navigate_s',{currentLat:pos.lat,End:destination,currentLng:pos.lng,Mar_Data:markerData});
      socket.on('navigate_Resps',function(route){
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
    // calculateAndDisplayRoute(source, destination);

    else{
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

  });
  


  
    


initMap();
updateCurrentLocation();


