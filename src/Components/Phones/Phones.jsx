import Phone from "./Phone";

const Phones = ({ phones }) => {
    return (
        <div>
            <h1 className="text-3xl text-center font-semibold my-10">All categories phones</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 py-8">
                {
                    phones.map(phone => <Phone phone={phone} key={phone.id}></Phone>)
                }
            </div>
        </div>
    );
};

export default Phones;