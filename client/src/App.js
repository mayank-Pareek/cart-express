import { Box } from "@mui/material";
import "./App.css";
import Header from "./components/header/Header";
import Home from "./components/home/Home";
function App() {
  return (
    <div>
      <Header />
      <Box style={{marginTop:"55px"}}>
        <Home />
      </Box>
    </div>
  );
}

export default App;
