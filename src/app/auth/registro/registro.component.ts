import { User } from 'firebase';
import { AuthService } from './../services/auth.service';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css'],
})
export class RegistroComponent implements OnInit {
  registerForm = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
  });

  constructor(private authSvc: AuthService, private rooteo: Router) {}

  ngOnInit(): void {}

  async registro() {
    const { email, password } = this.registerForm.value;

    try {
      const user = await this.authSvc.login(email, password);

      if (user) {
        this.rooteo.navigate(['/']);
      }
    } catch (error) {
      console.log(error);
    }
  }
}
