import { ArgTypes } from '@storybook/react';
import Counter from './Counter';

export default {
    title: 'Example/Counter',
    component: Counter,
};

const Template = (args: ArgTypes) => <Counter {...args} />;

export const Default = Template.bind({});
