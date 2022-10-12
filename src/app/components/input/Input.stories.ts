import { CommonModule } from '@angular/common';
import {
  FormControl,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { moduleMetadata } from '@storybook/angular';
import { Story, Meta } from '@storybook/angular/types-6-0';
import { ButtonComponent } from '../button/button.component';
import { InputComponent } from './input.component';

export default {
  title: 'Components/Input',
  component: InputComponent,
  decorators: [
    moduleMetadata({
      declarations: [ButtonComponent],
      imports: [ReactiveFormsModule, FormsModule],
    }),
  ],
} as Meta;
const Template: Story<InputComponent> = (args: InputComponent) => {
  const form: FormGroup = new FormGroup({
    name: new FormControl(''),
  });
  return {
    props: {
      ...args,
      form,
    },
    template: `
    <form [formGroup]="form">
        <cap-input 
          label="Nome"
          errorMessage="Nome é obrigatório..."
          [formControlName]="'name'"
        ></cap-input>
      </form>
    `,
  };
};

export const Example = Template.bind({});
Example.args = {};
