import PropTypes from 'prop-types';

const Feature = ({feature}) => {
    return (
        <div>
            <p className='text-start'>{feature}</p>
        </div>
    );
};

Feature.propTypes = {
    feature: PropTypes.string
}

export default Feature;