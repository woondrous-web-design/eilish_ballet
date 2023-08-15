import { Component, OnInit } from '@angular/core';

declare var google: any;

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.initMap();
  }

  initMap(): void {
    const mapOptions = {
      center: { lat: 53.27599862135748, lng: -9.071016311645508 }, // Coordinates for St. Joseph's Community Centre
      zoom: 15 // Adjust the zoom level as needed
    };

    const map = new google.maps.Map(document.getElementById('map'), mapOptions);

    // Add a marker
    const marker = new google.maps.Marker({
      position: { lat: 53.27599862135748, lng: -9.071016311645508 },
      map: map,
      title: "St. Joseph's Community Centre"
    });

    // Create an InfoWindow content
    const infoWindowContent = `
  <div>
    <strong>St. Joseph's Community Centre</strong><br><br>
    Ashe Rd, Shantalla<br>
    Galway, Ireland<br><br>
    <a href="https://goo.gl/maps/QZCUaC1tVGWvr2it9" target="_blank">View on Google Maps</a>
  </div>
`;

    // Create an InfoWindow instance
    const infoWindow = new google.maps.InfoWindow({
      content: infoWindowContent
    });

    infoWindow.open(map, marker); // Show the InfoWindow when marker is clicked

    // Add a 'click' event listener to the marker
    marker.addListener('click', () => {
      infoWindow.open(map, marker); // Show the InfoWindow when marker is clicked
    });

    // // Add a 'click' event listener to the map
    // map.addListener('click', (event: { latLng: any; }) => {
    //   const clickedLatLng = event.latLng;
    //   console.log('Clicked at:', clickedLatLng.lat(), clickedLatLng.lng());

    //   // Update marker position
    //   marker.setPosition(clickedLatLng);
    // });
  }
}
