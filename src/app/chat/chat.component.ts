import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument, DocumentData } from '@angular/fire/firestore';
@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  mensajes:any[];
  nuevoMensaje = "";
  constructor(
    private afs: AngularFirestore
  ) { }
  ngOnInit(): void {
    this.afs.collection('chat',ref => ref.orderBy("fecha","asc"))
    .valueChanges().subscribe(data =>{
      this.mensajes = data;
      //console.log(data);
    })
  }

  Enviar()
  {
    this.afs.collection('chat',).add({
      usuario:localStorage.getItem("usuario"),
      mensaje:this.nuevoMensaje,
      fecha:Date.now()
    });
  }

  UsuarioActual()
  {
    return localStorage.getItem("usuario");
  }

}
