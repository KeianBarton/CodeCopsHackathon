import { Component, OnInit, ViewChild, EventEmitter, Input, Output } from '@angular/core';
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
  @Input() location : number[];
  @Output() onLocationChange = new EventEmitter<Array<number>>();
  latLng : google.maps.LatLng;
  
  constructor() { }

  ngOnInit() {
    var self = this;
    self.infoWindow = new google.maps.InfoWindow;
    if(self.location && self.location[0] && self.location[1])
    {
      self.latLng = new google.maps.LatLng(self.location[0], self.location[1]);
    }
    else
    {
      self.latLng = new google.maps.LatLng(51.4594843,-2.5880095);
    }
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
    function moveMarker() {
      self.setMarkerPosition(self.marker.getPosition(), self.marker, self);
    }
    self.marker.addListener('click', moveMarker);
    self.marker.addListener('dragend', moveMarker);
  }

  setMarkerPosition(position, marker, self) {
    marker.setPosition(position);
    self.latLng = position;
    self.onLocationChange.emit([marker.getPosition().lat(),marker.getPosition().lng()]);
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
