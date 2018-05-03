import { Component, OnInit, ViewChild } from '@angular/core';
import { } from '@types/googlemaps';

@Component({
  selector: 'app-location',
  templateUrl: './location.component.html',
  styleUrls: ['./location.component.css']
})
export class LocationComponent implements OnInit {
  @ViewChild('gmap') gmapElement: any;
  map: google.maps.Map;
  infoWindow: google.maps.InfoWindow;
  marker : google.maps.Marker;
  latLng : google.maps.LatLng;

  constructor() { }

  ngOnInit() {
    var self = this;
    self.infoWindow = new google.maps.InfoWindow;
    self.latLng = new google.maps.LatLng(51.4594843,-2.5880095);
    var mapProp = {
      center: self.latLng,
      zoom: 15,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };
    self.map = new google.maps.Map(self.gmapElement.nativeElement, mapProp);
    self.marker = new google.maps.Marker({
      position: self.latLng,
      map: self.map,
      title: 'Selected Location',
      draggable: true,
      animation: google.maps.Animation.DROP
    });
    self.marker.addListener('click',
      function() {
        if (self.marker.getAnimation() !== null) {
          self.marker.setAnimation(null);
        } else {
          self.marker.setAnimation(google.maps.Animation.BOUNCE);
        }
      }
    );
  }

  setMarkerPosition(position, marker, self) {
    marker.setPosition(position);
    self.latLng = position;
  }

  getCurrentLocation() {
    var self = this;
    var infoWindow = this.infoWindow;
    var map = this.map;
    var marker = this.marker;
    var setMarkerPosition = this.setMarkerPosition;
    var handleLocationError = this.handleLocationError;
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        setMarkerPosition(pos, marker, self);
        map.setCenter(pos);
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter(), map);
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter(), map);
    }
  }

  handleLocationError(browserHasGeolocation, infoWindow, pos, map) {
    infoWindow.setPosition(pos);
    infoWindow.setContent(browserHasGeolocation ?
                          'Error: The Geolocation service failed.' :
                          'Error: Your device doesn\'t support geolocation.');
    infoWindow.open(map);
  }

}
