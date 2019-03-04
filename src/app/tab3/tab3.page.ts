import { Component } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';

import { RestApiService } from '../services/rest-api.service'
@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  first_name
  middle_name
  last_name
  constructor(
    public http: HTTP,
    public API: RestApiService
  ){}

register() {
  console.log(this.first_name)
  console.log(this.middle_name)
  console.log(this.last_name)
  var postData = {
    "first_name" : this.first_name,
    "middle_name" : this.middle_name,
    "last_name" : this.last_name
  }

  var headers = {
    'content-type': "application/json"
  }
  this.http.post(this.API.getBaseAPI()+'/api/time', postData, headers )
  .then(response => {
    const jsonResponse = JSON.parse(response.data)
    console.log(response)
    console.log(jsonResponse)
  })
}

}
