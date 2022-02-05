import { createTheme, ThemeProvider } from "@mui/material/styles";
import Navbar from "./Navbar";
import { StyledEngineProvider } from "@mui/material/styles";
 
const defaultTheme = createTheme();
 
function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <StyledEngineProvider injectFirst>
        <Navbar />
      </StyledEngineProvider>
    </ThemeProvider>
  );
}
 
export default App;