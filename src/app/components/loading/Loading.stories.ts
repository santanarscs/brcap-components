import { Story, Meta } from '@storybook/angular/types-6-0';
import { LoadingComponent } from './loading.component';

export default {
  title: 'Components/Loading',
  component: LoadingComponent,
  argTypes: {
    size: {
      name: 'Escolha um tamanho',
      control: {
        type: 'radio',
        options: ['small', 'medium', 'large'],
      },
    },
  },
} as Meta;

const Template: Story<LoadingComponent> = (args: LoadingComponent) => ({
  props: args,
});

export const Example = Template.bind({});
Example.args = {
  size: 'medium',
};
