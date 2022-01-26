import { Component } from '@angular/core';
import { DataService } from './data.service';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = "p1";
  users = ["angel", "manuel", "ana", "pedro", "josé", "raúl", "maría", "luisa", "adriana", "angela", "alan"];
  activated:boolean = true;
  name: string ="Vale";
  age: number = 0;
  address: {
    street: string;
    city: string;
  }= {street:"",
      city:""};
  hobbies: string[] = [];


  posts:any[] = [];

  constructor(private dataService: DataService){
    this.age = 20;
    this.address={street:"Veredas de santa fe",
    city:"Torreon"};
    this.hobbies=["comer", "nadar"];

      this.dataService.getdata().subscribe(dataService =>{
        this.posts = dataService;
      });

  }

  clickeando(user = ""){
    alert('Hola '+ user);
  }
  eliminar(user =""){
    for(let i = 0; i< this.users.length;i++){
      if(user == this.users[i]){
        this.users.splice(i,1);
      }
    }
  }
  adduser(newuser: any){
    this.users.push(newuser.value);
    newuser.value="";
    newuser.focus();
    return false;
  }

}
