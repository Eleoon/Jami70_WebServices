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

  /* posizioni caf*/
  const caf1 = { lat:  45.459898, lng:9.201167
  };
  const markercaf1 = new google.maps.Marker({
    position: caf1,
    map: map,
  });
}

window.initMap = initMap;