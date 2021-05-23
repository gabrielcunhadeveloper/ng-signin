import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { ReactiveFormsModule } from "@angular/forms";
import { VMessageModule } from "../shared/vmessage/vmessage.module";
import { SignInComponent } from "./signin/signin.component";
import { SignoutComponent } from './signout/signout.component';

@NgModule({
    declarations: [
        SignInComponent,
        SignoutComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        VMessageModule
    ]
})
export class HomeModule{}