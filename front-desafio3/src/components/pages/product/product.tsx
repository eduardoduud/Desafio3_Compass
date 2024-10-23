import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FaChevronRight, FaFacebook, FaLinkedin } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai";
import ProductList from "../../shared/productList";

interface Category {
  id: number;
  name: string;
}

interface Product {
  id: number;
  name: string;
  description: string;
  category: Category;
  largeDescription: string;
  imageLink?: string;
  otherImagesLink: string[];
  price: number;
}

const Product: React.FC = () => {
  const params = useParams();
  const productId = params.id;

  const [product, setProduct] = useState<Product | null>(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  const [selectedImage, setSelectedImage] = useState<string | undefined>(
    undefined,
  );
  const [selectedSize, setSelectedSize] = useState("xs");

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
        setSelectedImage(response.data.imageLink);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });
  }, [productId]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  if (!product) {
    return <div>Product not found</div>;
  }

  return (
    <div className="container mx-auto py-8">
      <div className="bg-features h-100 flex flex-row items-center justify-start gap-1 px-24">
        <Link to="/" className="text-gray-400">
          Home
        </Link>
        <FaChevronRight />
        <Link to="/shop" className="text-gray-400">
          Shop
        </Link>
        <FaChevronRight />
        <span>{product.name}</span>
      </div>
      <div className="mt-8 flex justify-center">
        {/* Imagens laterais */}
        <div className="flex flex-col gap-4">
          {product.otherImagesLink.map((image, index) => (
            <button
              key={index}
              className="border-furniro h-20 w-20 overflow-hidden rounded-lg border border-solid"
            >
              <img
                key={index}
                src={image}
                alt={product.name}
                className="bg-button h-full w-full object-cover"
                onClick={() => setSelectedImage(image)}
              />
            </button>
          ))}
        </div>
        {/* Imagem principal */}
        <div className="px-6">
          <img
            src={selectedImage}
            alt={product.name}
            className="bg-button h-auto w-full rounded-lg object-cover"
          />
        </div>
        {/* Detalhes do produto */}
        <div className="flex flex-col space-y-4">
          <h1 className="font-regular text-3xl">{product.name}</h1>
          <p className="text-xl font-semibold text-gray-400">
            $ {product.price}
          </p>
          {/* Avaliação */}
          <div className="flex items-center">
            <span className="text-2xl text-yellow-500">
              {"★".repeat(4)}
              {"☆"}
            </span>
            <span className="ml-2 text-gray-400">5 Customer Reviews</span>
          </div>
          <p className="text-gray-600">{product.description}</p>
          {/* Tamanho e cores */}
          <span className="mt-4 text-gray-400">Size</span>
          <div className="flex items-baseline">
            <div className="mt-3 flex gap-3">
              <label className="bg-button-selected relative inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg border border-solid border-gray-300 text-center text-sm text-white">
                <input
                  name="size"
                  type="radio"
                  value="L"
                  checked={selectedSize === "L"}
                  onChange={() => setSelectedSize("L")}
                  className="absolute h-7 w-7 opacity-0"
                />
                <span>L</span>
              </label>
              <label className="bg-button relative inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg border border-solid border-gray-300 text-center text-sm">
                <input
                  name="size"
                  type="radio"
                  value="XL"
                  checked={selectedSize === "XL"}
                  onChange={() => setSelectedSize("XL")}
                  className="absolute h-7 w-7 opacity-0"
                />
                <span>XL</span>
              </label>
              <label className="bg-button relative inline-flex h-7 w-7 cursor-pointer items-center justify-center rounded-lg border border-solid border-gray-300 text-center text-sm">
                <input
                  name="size"
                  type="radio"
                  value="XS"
                  checked={selectedSize === "XS"}
                  onChange={() => setSelectedSize("XS")}
                  className="absolute h-7 w-7 opacity-0"
                />
                <span>XS</span>
              </label>
            </div>
          </div>
          <span className="mt-4 text-gray-400">Color </span>
          <div className="mt-3 flex flex-row items-center gap-4">
            <button
              className={`m-1 h-6 w-6 rounded-full border`}
              style={{ backgroundColor: "#816DFA" }}
            />
            <button
              className={`m-1 h-6 w-6 rounded-full border`}
              style={{ backgroundColor: "#000000" }}
            />
            <button
              className={`m-1 h-6 w-6 rounded-full border`}
              style={{ backgroundColor: "#B88E2F" }}
            />
          </div>
          {/* Botões de quantidade e ações */}
          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center justify-between rounded-lg border border-solid border-gray-300 py-4">
              <button className="px-3 text-lg">-</button>
              <input
                type="text"
                className="w-12 border-none text-center focus:outline-none"
                defaultValue={1}
              />
              <button className="px-3 text-lg">+</button>
            </div>
            <button className="rounded-2xl border border-solid px-12 py-4 font-medium">
              Add To Cart
            </button>
            <button className="rounded-2xl border border-solid px-12 py-4 font-medium">
              + Compare
            </button>
          </div>
        </div>
      </div>
      <div className="flex justify-end border-b border-solid border-gray-300">
        <div className="w-2-5 flex flex-col border-t border-solid border-gray-300 py-12 text-gray-400">
          <p className="m-2 flex justify-start gap-4">
            <span className="w-91">SKU</span>
            <span>:</span>
            <span>SS001</span>
          </p>
          <p className="m-2 flex justify-start gap-4">
            <span className="w-91">Category</span>
            <span>:</span>
            <span>{product.category.name}</span>
          </p>
          <p className="m-2 flex justify-start gap-4">
            <span className="w-91">Tags</span>
            <span>:</span>
            <span>Sofa, Chair, Home, Shop</span>
          </p>
          <p className="m-2 flex items-center justify-start gap-4">
            <span className="w-91">Share</span>
            <span>:</span>
            <a href="#">
              <FaFacebook className="text-black" />
            </a>
            <a href="#">
              <FaLinkedin className="text-black" />
            </a>
            <a href="#">
              <AiFillTwitterCircle className="text-black" />
            </a>
          </p>
        </div>
      </div>
      {/* Descrição e Informações Adicionais */}
      <div className="mt-8">
        <div className="flex justify-center gap-4">
          <button className="py-2 text-2xl font-medium">Description</button>
          <button className="py-2 text-2xl text-gray-400">
            Additional Information
          </button>
        </div>
        <div className="py-4">
          <p className="px-24 py-6 text-gray-400">{product.largeDescription}</p>
        </div>
      </div>
      <section className="container mx-auto mt-12 border-b border-solid border-gray-300 px-4">
        <h1 className="text-center text-3xl font-bold">Related Products</h1>
        <ProductList />
      </section>
    </div>
  );
};

export default Product;
