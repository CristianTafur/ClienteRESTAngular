import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../models/Usuario';
Usuario
@Injectable({
  providedIn: 'root'
})
export class UsuariosService {
  users:Usuario[];
  user:Usuario;
  url:string='http://localhost:8080/AR/web/generic/usuarios';
  constructor(private http:HttpClient) { 
    this.user= new Usuario();
  }
  getUsers(){
    return this.http.get(this.url);
  }
  setUser(){
    return this.http.post(this.url,this.user);
  }
  putUser(){
    return this.http.put(this.url+ `/${this.user.document}`,this.user);
  }
  deleteUSer(){
    return this.http.delete(this.url+ `/${this.user.document}`);
  }
}
