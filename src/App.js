import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import About from "./components/About";
import useAuth from "./hooks/useAuth";
import RequireAuth from "./components/RequireAuth";
import PersistentLogin from "./components/PersistentLogin";
function App() {
    return (
        <Routes>
            <Route path="/" element={<Outlet></Outlet>}>
                <Route path="/login" element={<Login></Login>}></Route>
                <Route path="/register" element={<Register></Register>}></Route>
                <Route element={<PersistentLogin></PersistentLogin>}>
                    <Route element={<RequireAuth></RequireAuth>}>
                        <Route path="/" element={<Home></Home>}></Route>
                        <Route path="/about" element={<About></About>}></Route>
                    </Route>
                </Route>
            </Route>
        </Routes>
    );
}
export default App;
