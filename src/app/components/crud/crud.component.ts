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
  documento:string;
  nombre:string;
  constructor(private user:UsuariosService) { 
    this.documento="documento";
    this.nombre="nombre";
  }

  ngOnInit() {
    this.getUser();
  }
  getUser(){
    this.user.getUsers().subscribe(res =>{
      this.user.users=res as Usuario[];
      this.user.users.forEach(user => {
       user.estado=false; 
      });
      this.num=this.user.users.length;
      console.log(this.user.users);
      
    });
 
  } 
  setUser(id:any){
    let documento=this.obtnerDOM(this.documento+id).value;
    let nombre=this.obtnerDOM(this.nombre+id).value;
    this.user.user.documento=documento;
    this.user.user.name=nombre;

    this.user.setUser().subscribe(res =>{

      console.log(res);
      this.getUser();
    });
    console.log("set ");
    
  }
  putUser(){
    console.log("put"); 
  }
  deleteUser(id:number){
    this.user.user=this.user.users[id];
    this.user.deleteUSer().subscribe(res=>{
      this.getUser();
    });
    
  }
  obtnerDOM(id :string){
   return (<HTMLInputElement>document.getElementById(id));
  }
  editar(id: number){
   
    this.user.users[id].estado=!this.user.users[id].estado;
    
  }
}
