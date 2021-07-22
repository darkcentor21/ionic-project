import { Component, OnInit } from '@angular/core';
import { Router,RouterModule } from "@angular/router";

import { AngularFireAuth } from '@angular/fire/auth';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  user={
    "email":'',
    "password":''
  }
 
  constructor(public router: Router,public ngFireAuth: AngularFireAuth) { }

  go(){
    this.router.navigateByUrl('register');
  }

  ngOnInit() {
  }
  async login(){
    const user = await this.ngFireAuth.signInWithEmailAndPassword(this.user.email,this.user.password);
    console.log(user);

    if(user.user.email){
      this.router.navigate(['/log'])
    }
    else{
      alert('login failed!')
    }
  }
  async register(){
    const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email,this.user.password);
    

    console.log(user);


    if (user.user.email){
      alert('registration successful!')
    }
    else{
      alert('registration failed');
    }
  }

}
