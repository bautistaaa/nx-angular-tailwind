import { moduleMetadata, Story, Meta } from '@storybook/angular';
import { SpotlightComponent } from './spotlight.component';

export default {
  title: 'SpotlightComponent',
  component: SpotlightComponent,
  decorators: [
    moduleMetadata({
      imports: [],
    })
  ],
} as Meta<SpotlightComponent>;

const Template: Story<SpotlightComponent> = (args: SpotlightComponent) => ({
  props: args,
});


export const Primary = Template.bind({});
Primary.args = {
}