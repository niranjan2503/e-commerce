import { Navigate, Route, Routes } from "react-router-dom";
import "./App.css";
import { routes } from "./services/routes";
import { useAuth } from "./Pages/AuthContext";

function App() {
    const { isAuthenticated } = useAuth();
    return (
        <main>
            <Routes>
                {routes.map((route) => {
                    if (route.canAuthenticate && !isAuthenticated) {
                        return (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<Navigate to={"/login"}></Navigate>}
                            ></Route>
                        );
                    }
                    return (
                        <Route
                            key={route.path}
                            path={route.path}
                            element={<route.component></route.component>}
                        ></Route>
                    );
                })}
            </Routes>
        </main>
    );
}
export default App;
