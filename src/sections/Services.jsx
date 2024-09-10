import { services } from "../constants";
import  ServiceCard  from "../components/ServiceCard";

const Services = () => {
    return (
        <section className='max-container flex justify-center flex-wrap gap-9 text-white'>
            {services.map((service) => (
                <ServiceCard key={service.label} {...service} />
            ))}
        </section>
    );
};

export default Services;