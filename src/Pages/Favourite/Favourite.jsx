import { useEffect, useState } from "react";
import PhoneSingle from "../PhonePage/PhoneSingle";
import FavouriteCard from "./FavouriteCard";

const Favourite = () => {
    const [favorites, setFavorites] = useState([]);
    console.log(favorites)
    const [noFound, setNoFound] = useState(false)
    useEffect(() => {
        const favouriteItems = JSON.parse(localStorage.getItem("favourites"));
        if (favouriteItems) {
            setFavorites(favouriteItems)
        } else {
            setNoFound("No Data Found")
        }
    }, [])
    return (
        <div>
            {
                noFound ? <h1 className="flex justify-center items-center h-[80vh] text-3xl">{noFound}</h1> : <div className="grid grid-cols-2 gap-2">
                    {
                        favorites.map(phone => <FavouriteCard key={phone.id} phone={phone}></FavouriteCard>)
                    }
                </div>
            }
        </div>
    );
};

export default Favourite;