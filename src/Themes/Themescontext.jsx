import React, { createContext, useState, useContext, useEffect } from "react";
import { ThemeProvider as MUIThemeProvider, createTheme } from "@mui/material/styles";

    const ThemeContext = createContext();

    const lightTheme = createTheme({
        palette: { mode: "light" },
    });

    const darkTheme = createTheme({
        palette: { mode: "dark" },
    });

export const ThemeContextProvider = ({ children }) => {
    const [colorThemeMode, setColorThemeMode] = useState(
        localStorage.getItem("themeMode") || "dark"
    );

    const toggleTheme = () => {
        setColorThemeMode((prev) => (prev === "light" ? "dark" : "light"));
    };

    useEffect(() => {
        localStorage.setItem("themeMode", colorThemeMode);
    }, [colorThemeMode]);

    const theme = colorThemeMode === "light" ? lightTheme : darkTheme;

    return (
        <ThemeContext.Provider value={{ colorThemeMode, toggleTheme }}>
            <MUIThemeProvider theme={theme}>{children}</MUIThemeProvider>
        </ThemeContext.Provider>
    );
};

    export const useColorTheme = () => {
        const context = useContext(ThemeContext);
        if (!context) {
            throw new Error("useTheme must be used within ThemeContextProvider");
        }
        return context;
    };
