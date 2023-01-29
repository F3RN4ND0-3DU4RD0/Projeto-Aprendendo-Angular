import { Component } from '@angular/core';

@Component({
  selector: 'app-comp-index',
  templateUrl: './comp-index.component.html',
  styleUrls: ['./comp-index.component.css']
})
export class CompIndexComponent {
  //Variáveis do projeto
tipoUsuario: string = "";

//Definindo Tipo do Usuário ("client", "admin", "superuser")
tipoClient(){
  this.tipoUsuario = "client";
}
tipoAdmin(){
  this.tipoUsuario = "admin"
}
tipoSuperUser(){
  this.tipoUsuario = "superuser"
}





}
