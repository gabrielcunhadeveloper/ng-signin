import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormControl, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { AuthService } from "src/app/core/auth.service";

@Component({
    templateUrl: './signin.component.html'
})
export class SignInComponent implements OnInit{
    
    loginForm!: FormGroup;
    
    constructor(private formBuilder: FormBuilder,
                private authService: AuthService,
                private router: Router) { }

    ngOnInit(): void {
        this.loginForm = this.formBuilder.group({
            user: ['',[ Validators.required, Validators.minLength(3)]],
            password:['', Validators.required]
        })
    }

    get user() { return this.loginForm.get('user')! }

    get password() { return this.loginForm.get('password')! }

    login() {
        console.log('inicio autenticação');
        
        const user = this.user.value;
        const pass = this.password.value;

        console.log(user + " -- " + pass);

        this.authService.authenticate(user, pass) 
                        .subscribe(
                            () => this.router.navigate(['home', user]),
                            error =>  {
                                console.log(error);
                                this.loginForm.reset();
                            }
                        );
    }

}