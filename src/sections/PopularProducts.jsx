import { products } from "../constants"
import PopularProductCard from "../components/PopularProductCard"

const PopularProducts = () => {
    return (
        <section id="products" className="max-container max-sm:my-12">
            <div className="flex flex-col justify-start gap-5 pt-20">
                <h2 className="text-4xl font-palanquin font-bold text-white">Our <span className="text-coral-red">Popular</span> Products</h2>
                <p className="lg:max-w-lg mt-2 font-montserrat text-slate-gray text-white">Experience top-notch quality and style with our sought-after selections. Discover a world of comfort, design, and value</p>
            </div>
            <div className="mt-16 flex justify-center gap-10 flex-wrap">
                {products.map((product) =>{
                    return(
                        <PopularProductCard 
                            key={product.name}
                            {...product}
                        />
                    )
                })}
            </div>
        </section>
    )
}

export default PopularProducts