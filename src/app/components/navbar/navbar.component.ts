import { AuthService } from './../../auth/services/auth.service';
import { Component} from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent  {
  // public usuarioLogueado = false;
  // public user: any;
  public user$: Observable<any> = this.authSvc.auth.user;

  constructor(private authSvc: AuthService, private rooteo: Router) {}

  async ngOnInit() {
    // this.user = await this.authSvc.getCurrentUser();
    // if (this.user) {
    //   this.usuarioLogueado = true;
    // }
  }

  async cerrarSesion() {
    try {
      await this.authSvc.logout();
      this.rooteo.navigate(['/']);
    } catch (error) {
      console.log(error);
    }
  }
}
