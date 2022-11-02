import { ComponentMeta, ComponentStory } from "@storybook/react";
import { ThemeProvider } from "styled-components";
import themes from "../style/themes";
import NewButton from "./newButton";
import PageTitle from "./pageTitle";

export default {
    title: "Components/PageTitle",
    component: PageTitle,
} as ComponentMeta<typeof PageTitle>;

const Template: ComponentStory<typeof PageTitle> = (args) => (
    <PageTitle {...args} />
);

Template.decorators = [
    (Story) => (
        <ThemeProvider theme={themes["light"]}>
            <Story />
        </ThemeProvider>
    ),
];

export const APage = Template.bind({});
APage.args = {
    title: "a 페이지",
};

export const BPage = Template.bind({});
BPage.args = {
    title: "b 페이지",
};
