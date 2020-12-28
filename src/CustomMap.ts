export class CustomMap {
  private googleMap: google.maps.Map;

  constructor(divId: string) {
    this.googleMap = new google.maps.Map(document.getElementById(divId), {  //divId replaces hard coded'map'
    // specify 'map' in index.ts by passing it in: new CustomMap('map')
      zoom: 1,
      center: {
        lat: 0,
        lng: 0  
      }
    });
  }
}