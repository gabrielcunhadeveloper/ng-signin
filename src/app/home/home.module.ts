import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { SignInComponent } from "./signin/signin.component";
import { SignoutComponent } from './signout/signout.component';

@NgModule({
    declarations: [
        SignInComponent,
        SignoutComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule
    ]
})
export class HomeModule{}