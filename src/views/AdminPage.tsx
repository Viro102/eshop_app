import { useState } from "react";
import Button from "../components/Button";
import InputForm from "../components/InputForm";
import { Request } from "express";
import { createProduct } from "../controllers/productController";

export default function AdminPage() {
  const [productData, setProductData] = useState({
    title: "",
    category: "",
    image_url: "",
    price: 0,
    description: "",
    rating: 0,
  });

  const handleInputChange = (e: React.SyntheticEvent) => {
    const target = e.target as HTMLInputElement;
    const { name, value } = target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleCreate = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    try {
      const req = {
        body: {
          ...productData,
        },
      } as Request;
      await createProduct(req);
      setProductData({
        title: "",
        category: "",
        image_url: "",
        price: 0,
        description: "",
        rating: 0,
      });
      console.log("Product created successfully!");
    } catch (error) {
      console.error("Error creating product:", error);
    }
  };

  return (
    <div className="mx-auto flex max-w-lg flex-col items-center justify-center">
      <h1 className="text-3xl font-bold">Admin page</h1>
      <form>
        <InputForm
          label="Title"
          htmlFor="title"
          type="text"
          placeholder="Enter title"
          onChange={handleInputChange}
        />
        <InputForm
          label="Category"
          htmlFor="category"
          type="text"
          placeholder="Enter category"
          onChange={handleInputChange}
        />
        {/* Add other InputForm components for other fields */}

        <Button alt="" text="Create Product" onClick={handleCreate} />
      </form>
    </div>
  );
}
