import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
// COMPONENTS //
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { AngularFireModule } from '@angular/fire';

// SERVICIOS
import { AuthService } from './auth/services/auth.service';

// GOOGLE FIREBASE //
import { AngularFireAuthModule } from '@angular/fire/auth';
import { FooterComponent } from './components/footer/footer.component';
import { AdminComponent } from './guards/admin/admin.component';
import { EditorComponent } from './guards/editor/editor.component';
import { SucriptorComponent } from './guards/sucriptor/sucriptor.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    LoginComponent,
    RegistroComponent,
  
    FooterComponent,
    AdminComponent,
    EditorComponent,
    SucriptorComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
  ],
  providers: [AuthService],
  bootstrap: [AppComponent],
})
export class AppModule {}
