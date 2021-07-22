import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase } from '@angular/fire/database';


@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(private ngFireAuth: AngularFireAuth, private afDB: AngularFireDatabase) { }
  user = {
    "name":'',
    "email":'',
    "password":''
  }
  ngOnInit() {
  }
  async register(){
    const user = await this.ngFireAuth.createUserWithEmailAndPassword(this.user.email,this.user.password);


    console.log(user);
    this.afDB.object('users/'+ user.user.uid).set({
      "name":this.user.name,
      "email":this.user.email,
      "password":this.user.password
    })

    if (user.user.email){
      alert('registration successful!')
    }
    else{
      alert('registration failed');
    }
  }

}
