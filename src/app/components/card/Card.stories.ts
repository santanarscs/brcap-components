import { Story, Meta } from '@storybook/angular/types-6-0';
import { CardComponent } from './card.component';

export default {
  title: 'Components/Card',
  component: CardComponent,
} as Meta;

const Template: Story<CardComponent> = (args: CardComponent) => ({
  props: args,
  template: `
    <cap-card>
      Isso é um texto de exemplo
    </cap-card>
  `,
});

export const Example = Template.bind({});
Example.args = {};
