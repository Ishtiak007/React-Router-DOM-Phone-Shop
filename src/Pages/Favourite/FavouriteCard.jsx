import PropTypes from 'prop-types';
const FavouriteCard = ({ phone }) => {
    const { phone_name, brand_name, price, image } = phone || {};
    return (
        <div>
            <div className='flex justify-center items-center h-[50vh]'>
                <div className="relative flex  flex-row rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                    <div className="relative m-0 w-2/5 shrink-0 overflow-hidden rounded-xl rounded-r-none bg-white bg-clip-border text-gray-700">
                        <img
                            src={image}
                            alt="image"
                            className="h-[200px] w-full"
                        />
                    </div>
                    <div className="p-6">
                        <h6 className="mb-4 block font-sans text-base font-semibold uppercase leading-relaxed tracking-normal text-pink-500 antialiased">
                            {brand_name}
                        </h6>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            {phone_name}
                        </h4>
                        <h4 className="mb-2 block font-sans text-2xl font-semibold leading-snug tracking-normal text-blue-gray-900 antialiased">
                            ${price}
                        </h4>

                        <a className="inline-block" href="#">
                            <button
                                className="flex bg-slate-300 select-none items-center gap-2 rounded-lg py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:bg-pink-500/10 active:bg-pink-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                type="button"
                            >
                                Add to Favorite
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 24 24"

                                    stroke="currentColor"
                                    aria-hidden="true"
                                    className="h-4 w-4"
                                >
                                    <path

                                        d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
                                    ></path>
                                </svg>
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};
FavouriteCard.propTypes = {
    phone: PropTypes.object
};
export default FavouriteCard;