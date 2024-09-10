import  ReviewCard  from "../components/ReviewCard";
import { reviews } from "../constants";

const CustomerReviews = () => {
    return (
        <section className='max-container bg-gray-700 py-5 rounded-md text-white'>
            <h3 className='font-palanquin text-center text-4xl font-bold'>
                What Our
                <span className='text-coral-red'> Customers </span>
                Say?
            </h3>
            <p className='m-auto mt-4 max-w-lg  text-center text-white font-montserrat p-2'>
                Hear genuine stories from our satisfied customers about their
                exceptional experiences with us.
            </p>

            <div className='mt-24 flex flex-1 justify-evenly items-center max-lg:flex-col gap-14'>
                {reviews.map((review, index) => (
                    <ReviewCard
                        key={index}
                        imgURL={review.imgURL}
                        customerName={review.customerName}
                        rating={review.rating}
                        feedback={review.feedback}
                    />
                ))}
            </div>
        </section>
    );
};

export default CustomerReviews;