import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { loginRoutes } from '../../apis/login-api';

@Component ({
    selector: 'Login',
    templateUrl: './login-template.html',
    styleUrls: ['./login.scss']
})
export class Login {
    constructor(private API: loginRoutes, private router: Router){
    }
    
    loginUser(user){
        console.log(user)
        this.API.loginUser(user).subscribe((res )=> {
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