import { vi, it, describe, afterEach, expect } from "vitest";

import {
  createProduct,
  getAllProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../src/controllers/productController";
import { dbConnection } from "../src/server";
import { Request, Response } from "express";

// Mock the dbConnection
vi.mock("../src/server", () => ({
  dbConnection: {
    execute: vi.fn(),
  },
}));

// Mock the Response object
const createMockResponse = () => {
  const res: Partial<Response> = {
    status: vi.fn().mockReturnThis(),
    json: vi.fn(),
  };
  return res as Response;
};

describe("Product Controller Tests", () => {
  afterEach(() => {
    vi.clearAllMocks();
  });

  it("should create a product", async () => {
    const req: Partial<Request> = {
      body: {
        title: "Test Product",
        category: "Test Category",
        image_url: "test-image.jpg",
        price: 19.99,
        description: "This is a test product",
        rating: 4.5,
      },
    };
    const res = createMockResponse();

    await createProduct(req as Request, res);

    expect(res.status).toHaveBeenCalledWith(201);
    expect(res.json).toHaveBeenCalledWith({
      message: "Record created successfully",
      product: req.body,
    });

    expect(dbConnection.execute).toHaveBeenCalledWith(
      expect.stringContaining("INSERT INTO products"),
      expect.arrayContaining([
        req.body.title,
        req.body.category,
        req.body.image_url,
        req.body.price,
        req.body.description,
        req.body.rating,
      ]),
    );
  });

  it("should get all products", async () => {
    const res = createMockResponse();

    await getAllProducts(res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith([
      /* expected result */
    ]);

    expect(dbConnection.execute).toHaveBeenCalledWith(
      expect.stringContaining("SELECT * FROM products"),
    );
  });

  it("should get a product by ID", async () => {
    const req: Partial<Request> = {
      params: {
        id: "1",
      },
    };
    const res = createMockResponse();

    await getProductById(req as Request, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith(/* expected result */);

    expect(dbConnection.execute).toHaveBeenCalledWith(
      expect.stringContaining("SELECT * FROM products WHERE id = ?"),
      expect.arrayContaining([req.params!.id]),
    );
  });

  it("should update a product", async () => {
    const req: Partial<Request> = {
      params: {
        id: "1",
      },
      body: {
        title: "Updated Product",
        category: "Updated Category",
        image_url: "updated-image.jpg",
        price: 29.99,
        description: "This is an updated product",
        rating: 4.8,
      },
    };
    const res = createMockResponse();

    await updateProduct(req as Request, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({
      message: "Record updated successfully",
      updatedData: req.body,
    });

    expect(dbConnection.execute).toHaveBeenCalledWith(
      expect.stringContaining("UPDATE products SET ? WHERE id = ?"),
      expect.arrayContaining([req.body, req.params!.id]),
    );
  });

  it("should delete a product", async () => {
    const req: Partial<Request> = {
      params: {
        id: "1",
      },
    };
    const res = createMockResponse();

    await deleteProduct(req as Request, res);

    expect(res.status).toHaveBeenCalledWith(200);
    expect(res.json).toHaveBeenCalledWith({ message: "Record deleted successfully" });

    expect(dbConnection.execute).toHaveBeenCalledWith(
      expect.stringContaining("DELETE FROM products WHERE id = ?"),
      expect.arrayContaining([req.params!.id]),
    );
  });
});
