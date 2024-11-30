import { ThemeProvider } from "styled-components";
import "./App.css";
import { Input } from "./components/Input";
import StyledCard from "./components/StyledCard/StyledCard";
import theme from "./themes/theme";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <StyledCard></StyledCard>
      <br />
      <br />
      <Input />
    </ThemeProvider>
  );
};

export default App;
