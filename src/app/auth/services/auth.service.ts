import { Injectable } from '@angular/core';
import { auth } from 'firebase/app';
import { User } from 'firebase';
import { AngularFireAuth } from '@angular/fire/auth';
import { first } from 'rxjs/operators';

@Injectable()
export class AuthService {
  // public user: User;

  constructor(public auth: AngularFireAuth) {}

  async forgotPassword(email: string): Promise<void> {
    try {
      return this.auth.sendPasswordResetEmail(email);
    } catch (error) {
      console.log(error);
    }
  }

  async login(email: string, password: string) {
    try {
      const result = await this.auth.signInWithEmailAndPassword(
        email,
        password
      );
      return result;
    } catch (error) {
      console.log(error);
    }
  }

  async register(email: string, password: string) {
    try {
      const result = await this.auth.createUserWithEmailAndPassword(
        email,
        password
      );
    } catch (error) {
      console.log(error);
    }
  }

  async logout() {
    await this.auth.signOut();
  }

  getCurrentUser() {
    return this.auth.authState.pipe(first()).toPromise();
  }
}
