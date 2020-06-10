import { Component } from '@angular/core';
import { loginRoutes } from '../../apis/login-api';

@Component ({
    selector: 'Account',
    templateUrl: './account-template.html',
    styleUrls: ['./account.scss']
})
export class Account {
    constructor(private API: loginRoutes){
    }
    createUser(user){
        console.log(user);
        this.API.createUser(user).subscribe((res) => {
            if(res === null) {
                window.alert("incorrect username and password");
                console.log(res);
            } else {
                sessionStorage.setItem('username', res['username']);
                console.log(res)
                window.location.href = '/src/dashboard';
            }
        })
    }
}