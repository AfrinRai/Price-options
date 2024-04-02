import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {

    const priceOptions = [
        {
          "id": 1,
          "name": "Basic Membership",
          "price": "$30",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Locker room access"
          ]
        },
        {
          "id": 2,
          "name": "Standard Membership",
          "price": "$40",
          "features": [
            "Access to cardio equipment",
            "Access to weightlifting area",
            "Access to group fitness classes",
            "Locker room access"
          ]
        },
        {
          "id": 3,
          "name": "Premium Membership",
          "price": "$60",
          "features": [
            "Access to all gym facilities",
            "Unlimited group fitness classes",
            "Personal training session once a month",
            "Towel service"
          ]
        },
        {
          "id": 4,
          "name": "Gold Membership",
          "price": "$80",
          "features": [
            "Access to all gym facilities",
            "Unlimited group fitness classes",
            "Unlimited personal training sessions",
            "Towel service",
            "Access to sauna and steam room"
          ]
        },
        {
          "id": 5,
          "name": "Platinum Membership",
          "price": "$100",
          "features": [
            "Access to all gym facilities",
            "Unlimited group fitness classes",
            "Unlimited personal training sessions",
            "Towel service",
            "Access to sauna and steam room",
            "Free protein shakes"
          ]
        }
      ]
      
    return (
        <div className="mt-7">
            <h2 className="text-3xl mb-5 text-red-700">Best price in the town</h2>
            <div className="grid grid-cols-3 gap-3">
                {
                    priceOptions.map(option => <PriceOption key={option.id} option={option}></PriceOption>)
                }
            </div>
        </div>
    );
};

export default PriceOptions;