import { useEffect, useState } from "react";
import FavouriteCard from "./FavouriteCard";

const Favourite = () => {
    const [favorites, setFavorites] = useState([]);
    console.log(favorites)
    const [noFound, setNoFound] = useState(false);
    const [isShow, setIsShow] = useState(false);

    const [totalPrice, setTotalPrice] = useState(0);

    useEffect(() => {
        const favouriteItems = JSON.parse(localStorage.getItem("favourites"));
        if (favouriteItems) {
            setFavorites(favouriteItems);
            const total = favouriteItems.reduce((preValue, currentItem) => preValue + currentItem.price, 0);
            setTotalPrice(total);
        } else {
            setNoFound("No Data Found")
        }
    }, []);
    const handlesRemove = () => {
        localStorage.clear();
        setFavorites([]);
        setNoFound("No Data Found")
    }
    console.log(isShow)
    return (
        <div>
            {
                noFound ? <h1 className="flex justify-center items-center h-[80vh] text-3xl">{noFound}</h1> : <div>
                    {favorites.length > 0 && <div>
                        <h1 className="text-2xl p-5 bg-gray-100 text-center my-4 text-orange-900 font-semibold rounded-md">Total Price : $ {totalPrice}</h1>
                        <button onClick={handlesRemove} className="px-5 bg-orange-300 block mx-auto font-semibold py-2 rounded-md">Delete All Favourite</button>

                    </div>}
                    <div className="grid md:grid-cols-2 gap-2">
                        {
                            isShow ? favorites.map(phone => <FavouriteCard key={phone.id} phone={phone}></FavouriteCard>)
                                : favorites.slice(0, 4).map(phone => <FavouriteCard key={phone.id} phone={phone}></FavouriteCard>)
                        }
                    </div>
                    {
                        favorites.length > 2 && <button onClick={() => setIsShow(!isShow)} className="px-5 bg-orange-400 block mx-auto font-semibold py-2 rounded-md">{isShow ? "See Less" : "See More"}</button>
                    }
                </div>
            }
        </div>
    );
};

export default Favourite;