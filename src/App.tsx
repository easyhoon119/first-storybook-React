import React, { createContext, useCallback, useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";
import RootRoute from "./routes";
import { GlobalStyle, StyleMode, TypeofTheme } from "./style/styles";
import themes from "./style/themes";

export const MyContext = createContext<StyleMode | null>(null);

function App() {
    const [theme, setTheme] = useState<TypeofTheme>("light");

    const toggleStyle = useCallback((mode: TypeofTheme) => {
        localStorage.setItem("theme", mode);
        setTheme(mode);
    }, []);

    useEffect(() => {
        const nowTheme = localStorage.getItem("theme") as TypeofTheme;
        setTheme(nowTheme);
    }, []);

    return (
        <>
            <ThemeProvider theme={themes[theme]}>
                <GlobalStyle />
                <MyContext.Provider value={{ theme, toggleStyle }}>
                    <RootRoute />
                </MyContext.Provider>
            </ThemeProvider>
        </>
    );
}

export default App;
