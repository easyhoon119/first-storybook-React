import { createGlobalStyle } from "styled-components";
import themes from "./themes";

export type TypeofTheme = keyof typeof themes;

export type StyleMode = {
    toggleStyle: (mode: TypeofTheme) => void;
    theme: TypeofTheme;
};

export const GlobalStyle = createGlobalStyle`

    *, *::after, *::before {
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body {
        background-color : ${(props) => props.theme.body};
        color : ${(props) => props.theme.text};
    }

    div.header-btn {
        background-color : ${(props) => props.theme.headerBtn};
        color : ${(props) => props.theme.text};
    }

    div.page-title {
        background-color : ${(props) => props.theme.titleBtn};
        border : 5px solid ${(props) => props.theme.border};
        border-radius : ${(props) => props.theme.card_radius};
    }

    header {
        background-color : ${(props) => props.theme.body};
    }
`;
