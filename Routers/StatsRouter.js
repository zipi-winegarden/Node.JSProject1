import express from 'express';
import LinkModel from '../Models/LinkModel.js';

const StatsRouter = express.Router();

StatsRouter.get('/:id/clicks', async (req, res) => {
  try {
    const link = await LinkModel.findById(req.params.id);
    if (!link) {
      return res.status(404).send('Link not found');
    }

    const clickStats = link.clicks.reduce((acc, click) => {
      const targetValue = click.targetParamValue || 'unknown';
      if (!acc[targetValue]) {
        acc[targetValue] = 0;
      }
      acc[targetValue]++;
      return acc;
    }, {});

    res.json(clickStats);
  } catch (e) {
    res.status(400).json({ message: e.message });
  }
});

export default StatsRouter;
