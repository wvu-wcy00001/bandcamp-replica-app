import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/share/services/auth.service';

@Component({
  selector: 'route-signup',
  templateUrl: './signup.route.html',
  styleUrls: ['./signup.route.css']
})
export class SignupRoute implements OnInit {

    constructor(private authsvc: AuthService) { }
    
    ngOnInit(): void {
    }
    
    signup(auth: { email: string; password: string }) {
        this.authsvc.signup(auth.email, auth.password).subscribe(data => {
            console.log("Account creation success");
            alert("Account successfully created.")
        });
    }
}
