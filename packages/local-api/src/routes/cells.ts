import express from 'express';

export const createCellsRouter = (filename: string, dir: string) => {
  const router = express.Router();

  router.get('/cells', async (req, res) => {
    // Make sure the cell storage file exists
    // Add default list of cells if doesn't extist
    // Read the file
    // Parse a list of cells out of it
    // Send list of cells back to the browser
  });

  router.post('/cells', async (req, res) => {
    // Make sure the file exists
    // If not create it
    //Take the list of cells from request obj
    // serialize them
    // Write cells to file
  });
  return router;
};
