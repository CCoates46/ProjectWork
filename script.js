'use strict'

  $(function(){
    $('#world-map-markers').vectorMap({
      map: 'world_merc',
      scaleColors: ['#C8EEFF', '#0071A4'],
      normalizeFunction: 'polynomial',
      hoverOpacity: 40.0,
      hoverColor: true,
      markersSelectable: true,
      markerStyle: {
        initial: {
          fill: '#eb6b15',
          stroke: '#e3eb15'
        },
      },
      backgroundColor: '#16a89c',
      markers: [
        {latLng: [-8.409518, 115.188919], name: 'Bali', id:'Bali-1'},
        {latLng: [37.983810, 23.727539], name: 'Greece', id: 'Greece-1'},
        {latLng: [7.87409, 80.76709], name: 'Sri Lanka', id: 'Sri-Lanka-1'},
        {latLng: [9.748917, -83.753428], name: 'Costa Rica', id: 'Costa-Rica-1'},
        {latLng: [43.771, 11.2486], name: 'Tuscany', id: 'Tuscany'},
      ],
    });
  });
  



