import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  correo = "";
  clave = "";
  constructor(
    private auth:AngularFireAuth,
    private router:Router
  ) { }
  ngOnInit(): void {
    
  }

  Enviar()
  {
    try {
      this.auth.signInWithEmailAndPassword(this.correo,this.clave).then(user=>{
        if(user)
        {
          localStorage.setItem("usuario",user.user.email);
          this.router.navigateByUrl('/chat');
        }
        else
        {
          console.log(user);
        }

      });      
    } catch (error) {
      console.log(error);
    }
  }

}
