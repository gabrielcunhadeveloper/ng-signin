import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{
    
    loginForm!: FormGroup;
    
    constructor(private formBuilder: FormBuilder){}

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            user: ['',[ Validators.required, Validators.minLength(3)]],
            password:['', Validators.required]
        })
    }

    get user() { return this.loginForm.get('user')! }

    get password() { return this.loginForm.get('password')! }
    

}