import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { VMessageModule } from "../shared/vmessage/vmessage.module";
import { SignInComponent } from "./signin/signin.component";
import { SignoutComponent } from './signout/signout.component';
import { HomeComponent } from './home/home.component';

@NgModule({
    declarations: [
        SignInComponent,
        SignoutComponent,
        HomeComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        VMessageModule,
        HttpClientModule, 
        RouterModule
    ]
})
export class HomeModule{}