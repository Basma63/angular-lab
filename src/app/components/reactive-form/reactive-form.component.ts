import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
  standalone: true,  
  imports: [CommonModule, ReactiveFormsModule]
})
export class ReactiveFormComponent {
  myForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.myForm = this.fb.group({
      name: ['', [Validators.required]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]]
    })
  }

  user: any = '';

  onSubmit() {
    if (this.myForm.valid) {
      this.user = this.myForm.value;
    } else {
      console.log('Form is invalid');
      this.myForm.markAllAsTouched();
    }
  }

  onReset() {
    this.myForm.reset();
  }

}
