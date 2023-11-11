import { dbConnection } from "../server";
import { Request, Response } from "express";

const createRecord = async (req: Request, res: Response, table: string) => {
  try {
    const record = req.body;

    await dbConnection.execute(`INSERT INTO ${table} SET ?`, [record]);

    res.status(201).json({ message: "Record created successfully", record: record });
  } catch (error) {
    res.status(500).json({ message: "Error creating the record", error });
  }
};

const getAllRecords = async (_req: Request, res: Response, table: string) => {
  try {
    const records = await dbConnection.execute(`SELECT * FROM ${table}`);

    res.status(200).json(records[0]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching records", error });
  }
};

const getRecordById = async (req: Request, res: Response, table: string) => {
  try {
    const recordID: string = req.params.id;
    console.log(recordID);

    const record = await dbConnection.execute(`SELECT * FROM ${table} WHERE id = ?`, [recordID]);

    if (!record) {
      res.status(404).json({ message: "Record not found" });
      return;
    }

    res.status(200).json(record[0]);
  } catch (error) {
    res.status(500).json({ message: "Error fetching the record", error });
  }
};

const updateRecord = async (req: Request, res: Response, table: string) => {
  try {
    const recordID: string = req.params.id;
    const updatedData = req.body;

    await dbConnection.execute(`UPDATE ${table} SET ? WHERE id = ?`, [updatedData, recordID]);

    res.status(200).json({ message: "Record updated successfully", record: updatedData });
  } catch (error) {
    res.status(500).json({ message: "Error updating the record", error });
  }
};

const deleteRecord = async (req: Request, res: Response, table: string) => {
  try {
    const recordID: string = req.params.id;

    await dbConnection.execute(`DELETE FROM ${table} WHERE id = ?`, [recordID]);

    res.status(200).json({ message: "Record deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting the record", error });
  }
};

export { createRecord, getAllRecords, getRecordById, updateRecord, deleteRecord };
