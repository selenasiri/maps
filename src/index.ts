import { User } from './User'
import { Company } from './Company'

const user = new User();

console.log(user);

const company = new Company();
console.log(company)

// Map
const map = new google.maps.Map(document.getElementById('map'), {
  zoom: 1,
  center: {
    lat: 0,
    lng: 0  // The center of the map will be at (0, 0)
  }
}); // creates an instance of a Map class



// run by parcel index.html  