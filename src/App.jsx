import { BrowserRouter, Route, Routes } from "react-router-dom";
import Chat from "./components/ChatSection/Chat";
import Dashboard from "./components/Dashboard/Dashboard";
import Generate from "./components/Generate/Generate";
import Sidebar from "./components/Sidebar/Sidebar";
import Form from "./components/Generate/form";
import FinalHome from "./components/home/FinalHome";
import Register from "./components/Sign/Register";
import SignIn from "./components/Sign/SignIn";
import { NavbarSimple } from "./components/Navbar/NavbarSimple";

export default function App() {
  return (
    <div className="flex ">
      <Routes>
        <Route path="/" element={<FinalHome />} />
        <Route path="/register" element={<Register />} />
        <Route path="/signIn" element={<SignIn />} />\{" "}
        <Route exact path="/dash" element={<Dashboard />}></Route>
        <Route path="/ChatSection" element={<Chat />}></Route>
        <Route path="/Generate" element={<Generate />}></Route>
        <Route path="/form" element={<Form />}></Route>
      </Routes>
      {/* <Sidebar />
        <Routes>
          <Route exact path="/" element={<Dashboard />}></Route>

        </Routes> */}
    </div>
  );
}
