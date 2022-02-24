'use strict'

  $(function(){
    $('#world-map-markers').vectorMap({
      map: 'world_merc',
      scaleColors: ['#C8EEFF', '#0071A4'],
      normalizeFunction: 'polynomial',
      hoverOpacity: 40.0,
      hoverColor: true,
      markerStyle: {
        initial: {
          fill: '#eb6b15',
          stroke: '#e3eb15'
        }
      },
      backgroundColor: '#16a89c',
      markers: [
        {latLng: [-8.409518, 115.188919], name: 'Bali'},
        {latLng: [37.983810, 23.727539], name: 'Greece'},
        {latLng: [7.87409, 80.76709], name: 'Sri Lanka'},
        {latLng: [9.748917, -83.753428], name: 'Costa Rica'},
        {latLng: [43.771, 11.2486], name: 'Tuscany'},
      ]
    });
  });
