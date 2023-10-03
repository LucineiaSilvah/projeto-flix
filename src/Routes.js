import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import PaginaPadrao from "./components/pages/PaginaPadrao";
import NovoVideo from "./components/pages/NovoVideo";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<PaginaPadrao />}></Route>
          <Route path="/novovideo" element={<NovoVideo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
