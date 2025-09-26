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
    addressLine1: '',
    city: '',
    insuranceNumber: '',
  });

  async fillForm(value: string) {
    const languageModel = await LanguageModel.create({
      initialPrompts: [{
        role: 'system',
        content: `Extract the information to a JSON object.`,
      }],
    });
    const result = await languageModel.prompt(value, {
      responseConstraint: {
        type: 'object',
        properties: {
          name: { type: 'string' },
          city: { type: 'string' },
          addressLine1: { type: 'string' },
          insuranceNumber: { type: 'string' },
        },
      },
    });
    this.formGroup.setValue(JSON.parse(result));
  }

  async paste() {
    const content = await navigator.clipboard.readText();
    await this.fillForm(content);
  }
}
