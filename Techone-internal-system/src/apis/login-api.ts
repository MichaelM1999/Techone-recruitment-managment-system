import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

export interface user {
    name: string
  }
  @Injectable()
  export class loginRoutes {
  //in prod uri goes away
    uri = "http://localhost:4202"
  
      constructor(private http: HttpClient){
  }
  loginUser(user) {
    return this.http.post(this.uri + `/user/login`, user);
  }
  createUser(user) {
    return this.http.post(this.uri + '/user/create', user);
  }
}