import { ComponentMeta, ComponentStory } from "@storybook/react";
import NewButton from "./newButton";

export default {
    title: "Components/NewButton",
    component: NewButton,
} as ComponentMeta<typeof NewButton>;

const Template: ComponentStory<typeof NewButton> = (args) => (
    <NewButton {...args} />
);

export const Small = Template.bind({});
Small.args = {
    size: "small",
    label: "small",
};

export const Large = Template.bind({});
Large.args = {
    size: "large",
    label: "large",
};
