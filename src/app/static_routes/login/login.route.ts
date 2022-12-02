import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/share/services/auth.service';

@Component({
  selector: 'route-login',
  templateUrl: './login.route.html',
  styleUrls: ['./login.route.css']
})

export class LoginRoute implements OnInit {
    
    constructor(private authsvc: AuthService) { }
    
    ngOnInit(): void {
    }
    
    login(auth: { email: string; password: string }) {
        this.authsvc.login(auth.email, auth.password).subscribe(data => {
            console.log("Authentication success");
            alert("Logged in successfully.");
        });
    }
}
