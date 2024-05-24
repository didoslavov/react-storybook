import { Meta, StoryFn } from '@storybook/react';
import TextInput, { TextInputProps } from './TextInput';

export default {
    title: 'Components/TextInput',
    component: TextInput,
    parameters: {
        layout: 'centered',
    },
} as Meta;

const Template: StoryFn<TextInputProps> = (args) => <TextInput {...args} />;

export const Default = Template.bind({});

Default.args = {
    name: 'name',
    type: 'text',
    label: 'Name',
    placeholder: 'Enter your name',
    value: '',
};

export const Password = Template.bind({});

Password.args = {
    name: 'password',
    type: 'password',
    label: 'Password',
    placeholder: 'Enter your password',
    value: '',
};
