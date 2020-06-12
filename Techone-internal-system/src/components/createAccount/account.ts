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


    createUserCheck(user){
        if (user.username === '' || user.password === '' || user.Email === '' || user.Firstname === '' || user.Lastname === ''){
            window.alert('Must fill in all required fields.');
        }
        if (this.checkSymbol(user.username) === false){
            window.alert('username must have at leasst one symbol.');
        }
        if (this.checkSymbol(user.password) === false){
            window.alert('password must contain at least one symbol.');
        }
        if (this.checkSymbol(user.Firstname) === true || this.checkSymbol(user.Lastname) === true){
            window.alert('Firstname & Lastname must be only letters.');
        }
        if (user.Email.includes("@") === false){
            window.alert('Must enter a valid Email Address.')
        }
        else {
            this.CreateUser(user);
        }
    }


    checkSymbol(query) {
        var symbol = new RegExp(/[~`!#$%\^&*+=\-\[\]\\';,/{}|\\":<>\?]/); //acceptable chars
        if (symbol.test(query)) {
            return true;
        } else {
            return false;
        }
    }
    CreateUser(user) {
        this.API.createUser(user).subscribe((res) => {
            if(res === null) {
                window.alert("User already Exists");
                console.log(res);
            } else {
                sessionStorage.setItem('username', res['username']);
                console.log(res)
                window.location.href = '/src/dashboard';
            }
        })
    }
}
//