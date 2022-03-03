import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//rutas
import { APP_ROUTES } from './app.routes';

//modulos
import { PagesModule } from './page/pages.module';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegisterComponent } from './login/register.component';
import { LoginComponent } from './login/login.component';


//temporal
import { FormsModule } from '@angular/forms';
//servicios
import { ServiceModule } from './services/service.module';


import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
     
  ],
  imports: [
    BrowserModule,    
    APP_ROUTES,
    PagesModule,
    FormsModule,
    BrowserAnimationsModule,
   ServiceModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
