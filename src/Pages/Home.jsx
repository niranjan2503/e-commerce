import { useAuth } from "./AuthContext";

const Home = () => {
    const { user } = useAuth();
    return <div>Hello, {user}</div>;
};
export default Home;
