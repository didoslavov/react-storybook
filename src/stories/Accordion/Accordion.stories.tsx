import { StoryFn } from '@storybook/react';
import Accordion, { AccordionProps } from './Accordion';

export default {
    title: 'Example/Accordion',
    component: Accordion,
    parameters: {
        layout: 'centered',
    },
};

const Template: StoryFn<AccordionProps> = (args) => <Accordion {...args} />;

export const Faqs = Template.bind({});
Faqs.args = {
    data: [
        {
            title: 'What is lorem ipsum?',
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
        {
            title: 'Why do we use it?',
            content:
                "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
        },
    ],
};
