import { useState, useEffect } from "react";
import { postProduct, fetchProducts, patchProduct, deleteProduct } from "../api/productService";
import Button from "./Button";
import FileUpload from "./FileUpload";
import InputForm from "./InputForm";
import ListEntity from "./ListEntity";

export default function ProductManagement() {
  const [products, setProducts] = useState<Product[]>([]);
  const [product, setProduct] = useState<Product>({
    id: 0,
    title: "",
    category: "",
    image_urls: "[]",
    price: 0,
    description: "",
    rating: 0,
  });

  useEffect(() => {
    fetchProducts().then(setProducts);
  }, []);
  const refreshForm = () => {
    setProduct({
      id: 0,
      title: "",
      category: "",
      image_urls: "[]",
      price: 0,
      description: "",
      rating: 0,
    });
    fetchProducts().then(setProducts);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();

    setProduct({ ...product, [event.target.name]: event.target.value });
  };
  const handleCreateProduct = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await postProduct(product);
      refreshForm();
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const handleUpdateProduct = async (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    try {
      await patchProduct(product.id, product);
      refreshForm();
    } catch (error) {
      alert("Error: " + error);
    }
  };

  const handleDeleteProduct = async (productID: number) => {
    try {
      await deleteProduct(productID);
      refreshForm();
    } catch (error) {
      alert("Error: " + error);
    }
  };

  return (
    <div className="mx-auto my-5 flex w-4/5 flex-col items-center justify-center self-center">
      <ul>
        {products?.map((product) => (
          <ListEntity
            key={product.id}
            entity={product}
            onClick={() => setProduct(product)}
            onDelete={() => handleDeleteProduct(product.id)}
            getThumbnailUrl={(product) => {
              const imageUrls = product.image_urls ? JSON.parse(product.image_urls) : [];
              return imageUrls.length > 0 ? imageUrls[0] : "/default_thumbnail.webp";
            }}
            getTitle={(product) => product.title}
            getSubtitle1={(product) => product.category}
            getSubtitle2={(product) => `${product.price}€`}
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
          label="Image URLS"
          htmlFor="image_url"
          type="text"
          placeholder={`Enter image URLs, like this: ["https://example.com/image1.jpg", "https://example.com/image2.jpg"]`}
          onChange={handleInputChange}
          value={product.image_urls}
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
        <FileUpload />

        <div className="my-3 flex justify-center gap-3">
          <Button onClick={handleCreateProduct}>Add product</Button>
          <Button onClick={handleUpdateProduct}>Update product</Button>
        </div>
      </form>
    </div>
  );
}
