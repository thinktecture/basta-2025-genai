import { Component, inject } from '@angular/core';
import { NonNullableFormBuilder, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-form',
  imports: [
    ReactiveFormsModule,
  ],
  templateUrl: './form.html',
  styleUrl: './form.scss'
})
export class Form {
  // LAB #13, #14, #15, #16, #17
  private fb = inject(NonNullableFormBuilder);
  protected formGroup = this.fb.group({
    name: '',
    city: '',
  });

  async fillForm(value: string) {}

  async paste() {
    const content = await navigator.clipboard.readText();
    await this.fillForm(content);
  }
}
