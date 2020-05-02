import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  user = {
    username:"",
    password:""
  }

  isLoginInProgress:boolean = false;

  constructor(private router:Router,
              private authService:AuthService) { 
                document.body.style.backgroundColor = "#696969";
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    document.body.style.backgroundColor = "#FFF";
  }

  login() {
    console.log(this.user);
    if(!this.isLoginInProgress)
      this.authService.Login(this.user.username, this.user.password).subscribe((res:any)=>{
        console.log(res);
        if(res.authToken) {
          this.authService.setAuthToken(res.authToken);
          this.router.navigate(['/home']);
        }
      });
  }
}
