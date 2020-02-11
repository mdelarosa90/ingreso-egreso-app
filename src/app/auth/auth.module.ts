import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [LoginComponent, RegisterComponent],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        AngularFireAuthModule,
        CommonModule,
        RouterModule
    ]
})

export class AuthModule { }
