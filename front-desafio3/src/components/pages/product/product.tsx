import axios from "axios";
import { useParams } from "react-router-dom";
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

  useEffect(() => {
    axios
      .get(`http://localhost:3000/api/products/${productId}`)
      .then((response) => {
        setProduct(response.data);
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
      <div className="flex flex-row justify-start px-24 items-center gap-1 bg-features h-100">
        <span className="text-gray-400">Home</span>
        <FaChevronRight />
        <span className="text-gray-400">Shop</span>
        <FaChevronRight />
        <span>{product.name}</span>
      </div>
      <div className="flex justify-center mt-8">
        {/* Imagens laterais */}
        <div className="flex flex-col space-y-4">
          {product.otherImagesLink.map((image, index) => (
            <img
              key={index}
              src={image}
              alt={product.name}
              className="w-full h-auto object-cover border"
            />
          ))}
        </div>
        {/* Imagem principal */}
        <div className="px-6">
          <img
            src={product.imageLink}
            alt={product.name}
            className="w-full h-auto object-cover rounded-lg"
          />
        </div>
        {/* Detalhes do produto */}
        <div className="space-y-4">
          <h1 className="text-3xl font-regular">{product.name}</h1>
          <p className="text-xl font-semibold text-gray-400">
            $ {product.price}
          </p>
          {/* Avaliação */}
          <div className="flex items-center">
            <span className="text-yellow-500 text-2xl">
              {"★".repeat(4)}
              {"☆"}
            </span>
            <span className="ml-2 text-gray-400">5 Customer Reviews</span>
          </div>
          <p className="text-gray-600">{product.description}</p>
          {/* Tamanho e cores */}
          <div className="space-y-2">
            <div>
              <span className="font-semibold">Size: </span>
              <button className="border rounded px-3 py-1 m-1">L</button>
            </div>

            <div>
              <span className="font-semibold">Color: </span>
              <button
                className={`w-6 h-6 rounded-full border-2 m-1`}
                style={{ backgroundColor: "#816DFA" }}
              />
            </div>
          </div>
          {/* Botões de quantidade e ações */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center border px-3 py-2">
              <button className="text-lg">-</button>
              <input
                type="text"
                className="w-12 text-center border-none focus:outline-none"
                defaultValue={1}
              />
              <button className="text-lg">+</button>
            </div>
            <button className="bg-black text-white px-6 py-2 rounded-md">
              Add To Cart
            </button>
            <button className="border px-6 py-2 rounded-md">Compare</button>
          </div>
        </div>
      </div>
      <div className="flex justify-end border-b border-solid border-gray-300">
        <div className="flex flex-col w-2-5 py-12 text-gray-400 border-t border-solid border-gray-300">
          <p className="flex m-2 justify-start gap-4">
            <span className="w-91">SKU</span>
            <span>:</span>
            <span>SS001</span>
          </p>
          <p className="flex m-2 justify-start gap-4">
            <span className="w-91">Category</span>
            <span>:</span>
            <span>{product.category.name}</span>
          </p>
          <p className="flex m-2 justify-start gap-4">
            <span className="w-91">Tags</span>
            <span>:</span>
            <span>Sofa, Chair, Home, Shop</span>
          </p>
          <p className="flex m-2 justify-start gap-4">
            <span className="w-91">Share</span>
            <span>:</span>
            <FaFacebook className="text-black" />
            <FaLinkedin className="text-black" />
            <AiFillTwitterCircle className="text-black" />
          </p>
        </div>
      </div>
      {/* Descrição e Informações Adicionais */}
      <div className="mt-8">
        <div className="flex justify-center space-x-4">
          <button className="py-2 px-4 text-2xl font-medium">
            Description
          </button>
          <button className="py-2 px-4 text-2xl text-gray-400">
            Additional Information
          </button>
        </div>
        <div className="py-4">
          <p className="py-6 px-24 text-gray-400">{product.largeDescription}</p>
        </div>
      </div>
      <section className="container mx-auto px-4 mt-12 border-b border-solid border-gray-300">
        <h1 className="text-3xl font-bold text-center">Related Products</h1>
        <ProductList />
      </section>
    </div>
  );
};

export default Product;
