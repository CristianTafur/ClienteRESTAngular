import { Component, OnInit } from '@angular/core';
import { Usuario } from 'src/app/models/Usuario';
import { UsuariosService } from 'src/app/services/usuarios.service';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
  providers: [ UsuariosService ]
})
export class CRUDComponent implements OnInit {
  num:number;

  constructor(private user:UsuariosService) { }

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    this.user.getUsers().subscribe(res =>{
      this.user.users=res as Usuario[];
      console.log(this.user.users);
      this.num=this.user.users.length;
      console.log(this.num); 
    });
 
  } 
  setUser(){
    console.log("set");
    
  }
  putUser(){
    console.log("put"); 
  }
  deleteUser(){
    console.log("delete");
    
  }
}
