import useAuth from "../hooks/useAuth";
const About = () => {
    const { auth } = useAuth();
    console.log(auth);
    return <div>About</div>;
};
export default About;
