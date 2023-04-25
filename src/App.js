import "./App.css";
import { ThemeProvider } from "@emotion/react";
import Routes from "@Routes";
import CssBaseline from "@mui/material/CssBaseline";
import CustomTheme from "@Constants/CustomTheme.js";

function App() {
  return (
    <ThemeProvider theme={{ ...CustomTheme }}>
      <CssBaseline />
      <Routes />
    </ThemeProvider>
  );
}

export default App;
