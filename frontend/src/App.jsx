import { BrowserRouter, Route, Routes } from "react-router-dom";
import Homepage from "../src/pages/Homepage";
import Login from "../src/pages/Login";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<Homepage />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
