import { ArgTypes } from '@storybook/react';
import Raiting from './Raiting';

export default {
    title: 'Example/Rating',
    component: Raiting,
};

const Template = (args: ArgTypes) => <Raiting {...args} />;

export const FiveStars = Template.bind({});
