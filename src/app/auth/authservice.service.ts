import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor() { }
  login(usuario: string, password: string){
    sessionStorage.setItem("isLogged", "true");
  }

  logout():void{
    sessionStorage.clear()    
  }

  isLogged():boolean{
    return !!sessionStorage.getItem("isLogged");
  }

}
