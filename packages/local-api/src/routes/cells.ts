import express from 'express';
import fs from 'fs/promises';
import path from 'path';

interface Cell {
  id: string;
  content: string;
  type: 'text' | 'code';
}

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();

  const fullPath = path.join(dir, filename);

  router.get('/cells', async (req, res) => {
    // Make sure the cell storage file exists
    // Add default list of cells if doesn't extist
    // Read the file
    // Parse a list of cells out of it
    // Send list of cells back to the browser
  });

  router.post('/cells', async (req, res) => {
    // Take the list of cells from request obj
    // serialize them
    const { cells }: { cells: Cell[] } = req.body;
    // Write cells to file
    await fs.writeFile(fullPath, JSON.stringify(cells), 'utf-8');

    res.send({ status: 'ok' });
  });
  return router;
};
