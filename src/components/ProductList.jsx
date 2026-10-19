export default function ProductList({ products }) {
  return (
    <div className="space-y-3">
      {products.map((product) => (
        <div
          key={product.id}
          className="flex justify-between rounded border bg-white p-4"
        >
          <span>{product.name}</span>
          <span className="font-bold">₹{product.price}</span>
        </div>
      ))}

      {products.length === 0 && (
        <p className="text-gray-500">No products added.</p>
      )}
    </div>
  );
}