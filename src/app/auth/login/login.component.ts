import { Component } from '@angular/core';
import { MaterialModule } from '../../angular-material/angular/angular.module';
import { Router } from '@angular/router';
import { AuthserviceService } from '../authservice.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MaterialModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  constructor(private router: Router,
    private authService: AuthserviceService
  ){

  }
  
  submit(usuario: HTMLInputElement,
    password: HTMLInputElement
  ):void{
    this.authService.login(usuario.value, password.value);
    this.router.navigateByUrl("/dashboard");
  }

}
