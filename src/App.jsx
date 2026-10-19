import { useState } from "react";
import ProductForm from "./components/ProductForm";
import ProductList from "./components/ProductList";

export default function App() {
  const [products, setProducts] = useState([]);

  function addProduct(product) {
    setProducts((previous) => [...previous, product]);
  }

  return (
    <main className="mx-auto min-h-screen max-w-2xl bg-gray-100 p-6">
      <h1 className="mb-6 text-3xl font-bold">Product Management</h1>

      <ProductForm onAddProduct={addProduct} />
      <ProductList products={products} />
    </main>
  );
}