import { useLoaderData } from "react-router-dom";
import Banner from "../../Components/Header/Banner/Banner";
import Phones from "../../Components/Phones/Phones";

const Home = () => {
    const phones = useLoaderData();

    return (
        <div>
            <div>
                <Banner></Banner>
            </div>
            <div>
                <Phones phones={phones}></Phones>
            </div>
        </div>
    );
};

export default Home;