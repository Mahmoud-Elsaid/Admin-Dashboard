import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeContextProvider } from "./Themes/Themescontext.jsx";
import { CssBaseline } from "@mui/material";

createRoot(document.getElementById("root")).render(
    <ThemeContextProvider>
      <CssBaseline />
      <App />
    </ThemeContextProvider>
);
