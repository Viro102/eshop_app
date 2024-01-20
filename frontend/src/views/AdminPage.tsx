import { useEffect, useState } from "react";
import { deleteProduct, fetchProducts, patchProduct, postProduct } from "../api";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
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
    fetchProducts().then((data) => setProducts(data));
  }, []);

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
    event.preventDefault();

    setProduct({ ...product, [event.target.name]: event.target.value });
  };

  const handleCreateProduct = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await postProduct(product);
      await fetchProducts();
      refreshForm();
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const handleUpdateProduct = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await patchProduct(product.id, product);
      await fetchProducts();
      refreshForm();
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const handleDeleteProduct = async (productID: number) => {
    try {
      await deleteProduct(productID);
      await fetchProducts();
      refreshForm();
    } catch (error) {
      alert("Error: " + error);
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
