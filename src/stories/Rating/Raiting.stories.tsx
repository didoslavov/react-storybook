import { Meta, StoryFn } from '@storybook/react';
import Rating, { RatingProps } from './Raiting';

export default {
    title: 'Components/Rating',
    component: Rating,
    parameters: {
        layout: 'centered',
    },
} as Meta;

const Template: StoryFn<RatingProps> = (args) => <Rating {...args} />;

export const FiveStars = Template.bind({});
