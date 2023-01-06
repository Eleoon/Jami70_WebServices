//inizio dich mappa
let map;

function initMap() {
  // The location of Milano
  const milano = { lat: 45.477781673393366, lng:9.186916132921075
  };
  // The map, centered at Milano
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 12,
    center: milano,
  });
  // The marker, positioned at Milano
  const marker = new google.maps.Marker({
    position: milano,
    map: map,
  });

/*---------------------------------------------------------*/

/*------------------------------------------*/
    
  /* posizioni BUS*/
  const bus1= { lat: 45.47334620819007,lng:9.180587626529356};
  const markerbus1 = new google.maps.Marker({
    position: bus1,
    map: map,
  });

  const bus2 = { lat:45.462088059528924, lng:9.174477149470677};
  const markerbus2 = new google.maps.Marker({
    position: bus2,
    map: map,
  });

  const bus3 = { lat:45.470371974486014, lng:9.18465463899441};
  const markerbus3 = new google.maps.Marker({
    position: bus3,
    map: map,
  });
 
  const bus4 = { lat:45.46371588528707, lng:9.197511192677803};
  const markerbus4 = new google.maps.Marker({
    position: bus4,
    map: map,
  });
  

/* array classe bus*/
let arraybus = [markerbus1,markerbus2,markerbus3,markerbus4]
arraybus.forEach(function(element) {
 element.setIcon({
 url:'../img/bus2.png',
 scaledSize: new google.maps.Size(60, 60),
 className: 'bus'
});

});


/*filtro bus*/
document.getElementById('flexCheckBus').addEventListener('change',function(){
if (this.checked){
  arraybus.forEach(function(element) {
    element.setMap(map)
    console.log("siamo in checked")
   });
}
else {
  arraybus.forEach(function(element) {
  element.setMap(null);
  console.log("siamo in else")
  });
}
});

/* fine bus----------------------------------------------------------------------------*/
 
/* posizioni caf*/
  const caf1 = { lat:  45.459898, lng:9.201167
  };
  const markercaf1 = new google.maps.Marker({
    position: caf1,
    map: map,
  });

  const caf2 = { lat:45.469448, lng:9.190371,
  };
  const markercaf2 = new google.maps.Marker({
    position: caf2,
    map: map,
  });

/* array classe caf*/
let arraycaf = [markercaf1,markercaf2]
arraycaf.forEach(function(element) {
 element.setIcon({
 url:'../img/caf2.png',
 scaledSize: new google.maps.Size(60, 60),
 className: 'caf'
});

});


/*filtro caf*/
document.getElementById('flexCheckCaf').addEventListener('change',function(){
if (this.checked){
  arraycaf.forEach(function(element) {
    element.setMap(map)
    console.log("siamo in checked")
   });
}
else {
  arraycaf.forEach(function(element) {
  element.setMap(null);
  console.log("siamo in else")
  });
}
});


/*--fine caf----------------------------------------*/
    
  /* posizioni SPORT*/
  const sport= { lat:  45.476274,lng:9.128658
  };
  const markersport = new google.maps.Marker({
    position: sport,
    map: map,
  });

  const sport1 = { lat:  45.500381, lng:9.241019
  };
  const markersport1 = new google.maps.Marker({
    position: sport1,
    map: map,
  });

  const sport2 = { lat:  45.459461, lng:9.166919
  };
  const markersport2 = new google.maps.Marker({
    position: sport2,
    map: map,
  });
 
  const sport3 = { lat:  45.487535, lng:9.171810
  };
  const markersport3 = new google.maps.Marker({
    position: sport3,
    map: map,
  });
  

/* array classe sport*/
let arraysport = [markersport,markersport1,markersport2,markersport3]
arraysport.forEach(function(element) {
 element.setIcon({
 url:'../img/sport2.png',
 scaledSize: new google.maps.Size(60, 60),
 className: 'sport'
});

});


/*filtro sport*/
document.getElementById('flexCheckSport').addEventListener('change',function(){
if (this.checked){
  arraysport.forEach(function(element) {
    element.setMap(map)
    console.log("siamo in checked")
   });
}
else {
  arraysport.forEach(function(element) {
  element.setMap(null);
  console.log("siamo in else")
  });
}
});



/*-----------fine sport-------------------------------*/
    
  /* posizioni WC*/
  const wc1= { lat:  45.438009,lng:9.219838};
  const markerwc1 = new google.maps.Marker({
    position: wc1,
    map: map,
  });

  const wc2 = { lat:45.460093, lng:9.131608};
  const markerwc2 = new google.maps.Marker({
    position: wc2,
    map: map,
  });

  const wc3 = { lat:45.499562, lng:9.201566};
  const markerwc3 = new google.maps.Marker({
    position: wc3,
    map: map,
  });
 
  const wc4 = { lat:45.528509, lng:9.194111
  };
  const markerwc4 = new google.maps.Marker({
    position: wc4,
    map: map,
  });
  

/* array classe wc*/
let arraywc = [markerwc1,markerwc2,markerwc3,markerwc4]
arraywc.forEach(function(element) {
 element.setIcon({
 url:'../img/wc2.png',
 scaledSize: new google.maps.Size(60, 60),
 className: 'wc'
});

});


/*filtro wc*/
document.getElementById('flexCheckWc').addEventListener('change',function(){
if (this.checked){
  arraywc.forEach(function(element) {
    element.setMap(map)
    console.log("siamo in checked")
   });
}
else {
  arraywc.forEach(function(element) {
  element.setMap(null);
  console.log("siamo in else")
  });
}
});

/*-------------------------------fine wc----------------------------------------*/

//--------------------inizio sezione nearby search ----------------

// Crea un oggetto di ricerca per le attrazioni turistiche
var request = {
  location: milano,
  radius: '4000',
  type: ['tourist_attraction']
};

// Crea un oggetto di servizio di ricerca di Google Places
var service = new google.maps.places.PlacesService(map);
var attractions=[]  ;
// Esegui la ricerca di Google Places
service.nearbySearch(request, function(results, status) {
  if (status == google.maps.places.PlacesServiceStatus.OK) {
    // Aggiungi un marker per ogni attrazione trovata
    for (var i = 0; i < results.length; i++) {
      var place = results[i];
      var marker = new google.maps.Marker({
        map: map,
        position: place.geometry.location,
        title: place.name,
        icon: {url:'../img/attrazione2.png', scaledSize: new google.maps.Size(60, 60)},

      });
      console.log(marker);
      attractions.push(marker);
    }
 
console.log(attractions);


/* filtro attrazioni*/
document.getElementById('flexCheckInterestPoints').addEventListener('change',function(){
  if (this.checked){
    attractions.forEach(function(element) {
      element.setMap(map)
      console.log("siamo in checked")
     });
  }
  else {
    attractions.forEach(function(element) {
    element.setMap(null);
    console.log("siamo in else")
    });
  }
  
  }); //fine filtro attrazioni e nearby search


  }
});




}/*fine function init map*/



window.initMap = initMap;



/*------JQUERY----*/

$(document).ready(function() {
  $(".menu-icon").on("click", function() {
        $("nav ul").toggleClass("showing");
  });
});

// Scrolling Effect

$(window).on("scroll", function() {
  if($(window).scrollTop()) {
        $('nav').addClass('black');
  }

  else {
        $('nav').removeClass('black');
  }
})


/*----fine jquery------ */


