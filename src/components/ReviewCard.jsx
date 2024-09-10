/* eslint-disable react/prop-types */
import { star } from "../assets/icons";

const ReviewCard = ({ imgURL, customerName, rating, feedback }) => {
    return (
        <div className='flex justify-center items-center flex-col'>
            <img
                src={imgURL}
                alt='customer'
                className='rounded-full object-cover w-[120px] h-[120px]'
            />
            <h3 className='mt-1 font-palanquin text-3xl text-center font-bold'>
                {customerName}
            </h3>
            <p className='max-w-sm text-center text-white font-montserrat p-2'>{feedback}</p>
            <div className='mt-3 flex justify-center items-center gap-2.5'>
                <img
                    src={star}
                    width={24}
                    height={24}
                    alt='rating star'
                    className='object-contain m-0'
                />
                <p className='text-xl text-white font-montserrat'>({rating})</p>
            </div>
        </div>
    );
};

export default ReviewCard;