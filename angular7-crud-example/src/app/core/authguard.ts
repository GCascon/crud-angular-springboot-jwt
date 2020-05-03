import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {  
    constructor(public router: Router) {}  
    
    canActivate(): boolean {
        var token=window.localStorage.getItem('token');
        console.log("token="+token);
        if (!token) {
            this.router.navigate(['login']);
            return false;
        }else{
            return true;
        }        
    }
}