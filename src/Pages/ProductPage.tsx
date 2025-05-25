import { useState } from "react";
import lap from "../assets/lap10.png";
import lap2 from "../assets/lap.jpg";
import lap3 from "../assets/lap1.jpg";
import lap4 from "../assets/lap3.jpg";
import back from "../assets/chevron-left.svg";
import { useNavigate } from "react-router-dom";
interface Product {
  id: string;
  name: string;
  price: string;
  brand: string;
  model: string;
  description: string;
  images: string[];
  specs: string[];
  storageOptions: string[];
  reviews: Review[];
}

interface Review {
  id: string;
  user: string;
  rating: number;
  comment: string;
  date: string;
}

const ProductPage = () => {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const [selectedStorage, setSelectedStorage] = useState<string | null>(null);
  const [showStorageError, setShowStorageError] = useState(false);

  const navigate = useNavigate();

  // Mock laptop product data
  const product: Product = {
    id: "LP-2024",
    name: "UltraBook Pro",
    brand: "TechMaster",
    model: "X1 Carbon 2024",
    price: "1600,000",
    description:
      "Professional-grade laptop with next-gen performance and ultra-portable design",
    images: [lap, lap2, lap3, lap4],
    specs: [
      '14" 4K IPS Display',
      "Intel Core i7-12800H Processor",
      "16GB DDR5 RAM",
      "NVIDIA GeForce RTX 4050",
      "Windows 11 Pro",
      "Up to 10 hours battery life",
    ],
    storageOptions: ["256GB NVMe", "512GB NVMe", "1TB NVMe", "2TB NVMe"],
    reviews: [
      {
        id: "1",
        user: "DeveloperPro",
        rating: 5,
        comment:
          "Perfect balance of power and portability. Handles heavy workloads effortlessly!",
        date: "2024-03-15",
      },
      {
        id: "2",
        user: "DesignExpert",
        rating: 4,
        comment: "Amazing display quality, would love more color options",
        date: "2024-03-14",
      },
    ],
  };

  const addToCart = () => {
    if (!selectedStorage) {
      setShowStorageError(true);
      return;
    }
    console.log("Added to cart:", {
      ...product,
      quantity,
      storage: selectedStorage,
    });
  };

  return (
    <div className="px-4 py-8 mx-auto max-w-7xl">
      <button onClick={() => navigate("/")} className="bg-600">
        <img src={back} loading="lazy" alt="" />
      </button>
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Image Gallery - Right-aligned thumbnails */}
        <div className="flex gap-4">
          {/* Thumbnail Strip */}
          <div className="flex-col hidden w-24 gap-4 md:flex">
            {product.images.map((image, index) => (
              <button
                key={index}
                onClick={() => setSelectedImage(index)}
                className={`w-24 h-24 rounded-lg border-2 overflow-hidden ${
                  selectedImage === index
                    ? "border-blue-500"
                    : "border-gray-200"
                }`}
              >
                <img
                  src={image}
                  alt={`${product.model} view ${index + 1}`}
                  className="object-contain w-full h-full"
                />
              </button>
            ))}
          </div>

          {/* Main Image */}
          <div className="flex-1 overflow-hidden aspect-square bg-gray-50 rounded-xl">
            <img
              src={product.images[selectedImage]}
              alt={product.name}
              className="object-contain w-full h-full p-8"
            />
          </div>
        </div>

        {/* Product Details */}
        <div className="space-y-6">
          <div>
            <h1 className="text-2xl font-bold text-gray-800">
              {product.brand}
            </h1>
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <p className="w-full mt-2 text-2xl font-bold text-600 text-end">
              ₦{product.price}
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Key Specifications</h3>
            <ul className="grid grid-cols-1 gap-2 md:grid-cols-2">
              {product.specs.map((spec, index) => (
                <li key={index} className="flex items-center text-gray-600">
                  <svg
                    className="w-4 h-4 mr-2 text-green-500"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {spec}
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            <div className="space-y-2">
              <h3 className="font-medium">Select Storage</h3>
              <div className="flex flex-wrap gap-2">
                {product.storageOptions.map((storage) => (
                  <button
                    key={storage}
                    onClick={() => {
                      setSelectedStorage(storage);
                      setShowStorageError(false);
                    }}
                    className={`px-4 py-2 rounded-md border ${
                      selectedStorage === storage
                        ? "bg-blue-500 text-white border-blue-500"
                        : "bg-white text-gray-800 border-gray-300 hover:border-blue-300"
                    }`}
                  >
                    {storage}
                  </button>
                ))}
              </div>
              {showStorageError && (
                <p className="text-sm text-red-500">
                  Please select a storage option
                </p>
              )}
            </div>

            <div className="fixed bottom-0 flex items-center justify-between w-full gap-4 px-6 py-4 bg-white border-t">
              <div className="flex items-center border rounded-md">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="px-4 py-2 border-r hover:bg-gray-50"
                >
                  -
                </button>
                <span className="px-4 py-2">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-4 py-2 border-l hover:bg-gray-50"
                >
                  +
                </button>
              </div>
              <button
                onClick={addToCart}
                className="flex-1 px-4 w-[150px] py-2 font-extrabold text-white transition-colors rounded-md bg-600 hover:bg-700 "
              >
                Add to Cart
              </button>
            </div>
          </div>

          {/* Reviews Section */}
          <div className="pt-8">
            <h2 className="mb-4 text-xl font-bold">Customer Reviews</h2>
            <div className="space-y-6">
              {product.reviews.map((review) => (
                <div key={review.id} className="pb-4 border-b">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-medium">{review.user}</span>
                    <div className="flex items-center">
                      {[...Array(5)].map((_, i) => (
                        <svg
                          key={i}
                          className={`w-4 h-4 ${
                            i < review.rating
                              ? "text-yellow-400"
                              : "text-gray-300"
                          }`}
                          fill="currentColor"
                          viewBox="0 0 20 20"
                        >
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <p className="text-gray-600">{review.comment}</p>
                  <span className="text-sm text-gray-400">{review.date}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
