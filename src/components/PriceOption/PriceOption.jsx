import PropTypes from 'prop-types';
import Feature from '../Feature/Feature';

const PriceOption = ({option}) => {

    const {name, price, features} = option;

    return (   
        <div className='bg-teal-100 p-6 rounded-3xl m-4 text-center flex flex-col'>
            <h2>
                <span className="text-5xl font-bold">{price}</span>
                <span className='text-xl'>/mon</span>
            </h2>
            <h4 className='text-3xl mb-4'>{name}</h4>
            <div className='flex-grow'>
                {
                    features.map((feature, idx) => <Feature feature={feature} key={idx}></Feature>)
                }
            </div>
            <button
             className='mt-12 w-full rounded-lg bg-green-400 p-4 font-bold text-xl hover:bg-green-600'>
                Buy Now</button>
        </div>
    );
};

PriceOption.propTypes = {
    option: PropTypes.object
}

export default PriceOption;