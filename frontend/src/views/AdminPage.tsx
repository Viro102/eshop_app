import Button from "../components/Button";
import InputForm from "../components/InputForm";
import { useEffect, useState } from "react";
import { Product } from "../types";
import ListItem from "../components/ListItem";

export default function AdminPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: "",
    category: "",
    image_url: "",
    price: 0,
    description: "",
    rating: 0,
  });

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    fetch("http://localhost:3000/api/products")
      .then((response) => response.json())
      .then((data) => setProducts(data));
  };

  const refreshForm = () => {
    setProduct({
      id: 0,
      title: "",
      category: "",
      image_url: "",
      price: 0,
      description: "",
      rating: 0,
    });
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleCreateProduct = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const response = await fetch("http://localhost:3000/api/product", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const data = await response.json();
      fetchProducts();
      console.log(data);
      refreshForm();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleUpdateProduct = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      const response = await fetch(`http://localhost:3000/api/product/${product.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      const data = await response.json();
      fetchProducts();
      console.log(data);
      refreshForm();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const handleDeleteProduct = async (productID: number) => {
    try {
      const response = await fetch(`http://localhost:3000/api/product/${productID}`, {
        method: "DELETE",
      });

      if (!response.ok) {
        throw new Error("HTTP error " + response.status);
      }

      fetchProducts();
      const data = await response.json();
      console.log(data);
      refreshForm();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <section>
      <h1 className="my-4 text-center text-3xl font-bold">Admin page</h1>
      <div className="mx-auto my-5 flex w-4/5 flex-col items-center justify-center self-center">
        <Button className="my-2" onClick={handleCreateProduct}>
          Add product
        </Button>
        <ul>
          {products.map((productItem) => (
            <ListItem
              key={productItem.id}
              product={productItem}
              onClick={() => setProduct(productItem)}
              onDelete={() => handleDeleteProduct(productItem.id)}
            />
          ))}
        </ul>
        <form>
          <InputForm
            name="title"
            label="Title"
            htmlFor="title"
            type="text"
            placeholder="Enter title"
            onChange={handleInputChange}
            value={product.title}
          />
          <InputForm
            name="category"
            label="Category"
            htmlFor="category"
            type="text"
            placeholder="Enter category"
            onChange={handleInputChange}
            value={product.category}
          />
          <InputForm
            name="image_url"
            label="Image URL"
            htmlFor="image_url"
            type="text"
            placeholder="Enter image URL"
            onChange={handleInputChange}
            value={product.image_url}
          />
          <InputForm
            name="price"
            label="Price"
            htmlFor="price"
            type="number"
            placeholder="Enter price"
            onChange={handleInputChange}
            value={product.price.toString()}
          />
          <InputForm
            name="description"
            label="Description"
            htmlFor="description"
            type="text"
            placeholder="Enter description"
            onChange={handleInputChange}
            value={product.description}
          />
          <InputForm
            name="rating"
            label="Rating"
            htmlFor="rating"
            type="number"
            placeholder="Enter rating"
            onChange={handleInputChange}
            value={product.rating.toString()}
          />

          <Button onClick={handleUpdateProduct}>Update Product</Button>
        </form>
      </div>
    </section>
  );
}
