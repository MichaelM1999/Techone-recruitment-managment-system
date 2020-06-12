import { Component, OnInit } from '@angular/core';

@Component ({
    selector: 'Navbar',
    templateUrl: './navbar-template.html',
    styleUrls: ['navbar.scss']
})
 export class Navbar implements OnInit{
    public loggedUser:any

     ngOnInit(){
         this.loggedUser = sessionStorage.getItem("Firstname");
     }
     logout(){
        this.loggedUser = null
        sessionStorage.clear();
        sessionStorage.getItem('username');
    }
 }