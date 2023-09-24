import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneSingle from "./PhoneSingle";

const PhonePage = () => {
    const [phones, setPhones] = useState();

    const phone = useLoaderData();

    const { id } = useParams();

    useEffect(() => {
        const findPhone = phone.find(phone => phone.id === id);
        setPhones(findPhone)
    }, [id, phone])
    return (
        <div>
            <PhoneSingle phones={phones}></PhoneSingle>
        </div>
    );
};

export default PhonePage;