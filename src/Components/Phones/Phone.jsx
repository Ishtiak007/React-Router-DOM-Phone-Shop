import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
const Phone = ({ phone }) => {
    const { id, phone_name, brand_name, rating, price, image } = phone || {};
    return (
        <div>
            <div className="relative flex w-96 flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
                <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700">
                    <img
                        src={image}
                        className="h-[300px] w-full object-cover"
                    />
                </div>
                <div className="p-6">
                    <div>
                        <h1 className="font-sans font-medium text-center text-blue-900 my-4 text-3xl">
                            {brand_name}
                        </h1>
                    </div>
                    <div className="mb-2 flex items-center justify-between">

                        <p className="block font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            {phone_name}
                        </p>
                        <p className="block bg-orange-300 rounded-2xl p-[4px] font-sans text-base font-medium leading-relaxed text-blue-gray-900 antialiased">
                            ${price}
                        </p>
                    </div>
                    <p className="block font-sans text-sm font-normal leading-normal text-gray-700 antialiased opacity-75">
                        {rating}
                    </p>
                </div>
                <div className="p-6 pt-0">
                    <Link to={`/phones/${id}`}><button
                        className="block w-full select-none rounded-lg bg-gray-300 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-blue-gray-900 transition-all hover:scale-105 focus:scale-105 focus:opacity-[0.85] active:scale-100 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        type="button"
                    >
                        See Details
                    </button></Link>
                </div>
            </div>
        </div>
    );
};
Phone.propTypes = {
    phone: PropTypes.object
};
export default Phone;