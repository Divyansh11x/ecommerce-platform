async function getProducts() {
  const res = await fetch(
    "http://localhost:5000/api/products"
  );

  return res.json();
}

export default async function ProductsPage() {
  const products = await getProducts();

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">
        Products
      </h1>

      <div className="grid grid-cols-3 gap-5">
        {products.map((product: any) => (
          <div
            key={product._id}
            className="border p-4 rounded-lg"
          >
            <h2 className="text-xl font-semibold">
              {product.name}
            </h2>

            <p>₹{product.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}