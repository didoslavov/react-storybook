import { ArgTypes } from '@storybook/react';
import Counter from './Counter';

export default {
    title: 'Counter',
    component: Counter,
};

const Template = (args: ArgTypes) => <Counter {...args} />;

export const Default = Template.bind({});
