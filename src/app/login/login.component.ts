import { JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, JsonPipe],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})

export class LoginComponent {

  constructor() { }

  miFormulario = new FormGroup({
    useremail: new FormControl('', [Validators.required, Validators.email]),
    userpassword: new FormControl('', Validators.required)

  });

  onSubmit() {
    console.log(this.miFormulario.value);
  }
}
