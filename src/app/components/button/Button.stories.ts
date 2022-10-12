import {
  moduleMetadata,
  componentWrapperDecorator,
  Story,
  Meta,
} from '@storybook/angular';
import { LoadingComponent } from '../loading/loading.component';
import { ButtonComponent } from './button.component';

export default {
  title: 'Components/Button',
  component: ButtonComponent,
  argTypes: {
    size: {
      name: 'Escolha um tamanho',
      control: {
        type: 'radio',
        options: ['small', 'normal', 'large'],
      },
    },
    pill: {
      name: 'Pill',
      control: {
        type: 'boolean',
      },
    },
    disabled: {
      name: 'Desabilitado',
      control: {
        type: 'boolean',
      },
    },
    isLoading: {
      name: 'Loading',
      control: {
        type: 'boolean',
      },
    },
  },
  decorators: [
    moduleMetadata({
      declarations: [LoadingComponent],
    }),
  ],
} as Meta;

const Template: Story<ButtonComponent> = (args: ButtonComponent) => ({
  props: args,
  template: `
  <div class="flex space-x-2 items-center justify-center">
    <cap-button
    variant="primary"
    [pill]="pill"
    [disabled]="disabled"
    [isLoading]="isLoading"
    [size]="size"
    >Botao</cap-button>
    <cap-button
    variant="secondary"
    [pill]="pill"
    [disabled]="disabled"
    [isLoading]="isLoading"
    [size]="size"
    >Botao</cap-button>
    <cap-button
    variant="danger"
    [pill]="pill"
    [disabled]="disabled"
    [isLoading]="isLoading"
    [size]="size"
    >Botao</cap-button>
    <cap-button
    variant="default"
    [pill]="pill"
    [disabled]="disabled"
    [isLoading]="isLoading"
    [size]="size"
    >Botao</cap-button>
  </div>
  `,
});

export const Example = Template.bind({});
Example.args = {
  isLoading: false,
  pill: false,
  disabled: false,
  size: 'normal',
};
