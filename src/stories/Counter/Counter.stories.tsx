import { Meta, StoryFn } from '@storybook/react';
import Counter, { CounterProps } from './Counter';

export default {
    title: 'Example/Counter',
    component: Counter,
    parameters: {
        layout: 'centered',
    },
} as Meta;

const Template: StoryFn<CounterProps> = (args) => <Counter {...args} />;

export const Default = Template.bind({});
