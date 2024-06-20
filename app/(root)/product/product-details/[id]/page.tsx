import { getProductByCategory, getSingleProduct } from "@/Request/requests";
import { StarIcon } from "lucide-react";
import Image from "next/image";
import AddToCart from "./add-cart";
import ProductCard from "@/components/Home/ProductCard";

type Product = {
  id: number;
  title: string;
  category: string;
  image: string;
  price: number;
  description: string;
  rating: {
    rate: number;
    count: number;
  };
};

const ProductDetails = async ({ params }: { params: { id: string } }) => {
  const id = params.id;
  const singleProduct: Product = await getSingleProduct(id);
  const relatedProduct: Product[] = await getProductByCategory(
    singleProduct.category
  );
  const num = Math.round(singleProduct?.rating?.rate);
  const ratingArray = new Array(num).fill(0);

  return (
    <div className="mt-20">
      {/* Define a grid system */}
      <div className="w-4/5 mx-auto grid grid-cols-1 lg:grid-cols-7 items-center gap-4">
        {/* Image */}
        <div className="col-span-3 mb-6 lg:mb-0">
          <Image
            src={singleProduct.image}
            alt={singleProduct.title}
            width={400}
            height={400}
          />
        </div>
        {/* Content */}
        <div className="col-span-4">
          {/* title */}
          <h1 className="lg:text-3xl text-2xl font-bold text-black">
            {singleProduct.title}
          </h1>
          {/* Rating */}
          <div className="mt-2 flex items-center space-x-2">
            <div className="flex items-center">
              {ratingArray.map((star) => (
                <StarIcon
                  key={Math.random() * 5000}
                  size={20}
                  fill="yellow"
                  className="text-yellow-600"
                />
              ))}
            </div>
            <p className="text-base font-semibold text-gray-700">
              ({singleProduct?.rating.count} Reviews)
            </p>
          </div>
          {/* Line */}
          <span className="w-1/4 h-[1.6px] bg-gray-400 rounded-lg block mt-4 opacity-20 mb-4"></span>
          {/* Price */}
          <h1 className="text-3xl lg:text-6xl md:text-4xl text-blue-950 font-bold">
            {singleProduct?.price.toFixed(2)}
          </h1>
          {/* description */}
          <p className="mt-4 text-base text-black opacity-70">
            {singleProduct?.description}
          </p>
          {/* extra information */}
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            Category : {singleProduct?.category}
          </p>
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            Tag : Shop,NRN
          </p>
          <p className="mt-2 text-sm text-black text-opacity-70 font-semibold">
            SKU : {Math.random() * 500}
          </p>
          {/* Add to cart */}
          <AddToCart product={singleProduct}/>
        </div>
      </div>
      <div className="w-4/5 mt-16 mx-auto">
      <h1 className="text-2xl text-black font-semibold">Related Product</h1>
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
        {relatedProduct.map((product)=>{
            return <ProductCard key={product.id} product={product}/>
        })}
      </div>
      </div>
    </div>
  );
};

export default ProductDetails;